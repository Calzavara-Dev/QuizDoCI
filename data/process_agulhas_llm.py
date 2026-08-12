import os
import json
import re
import time
from google import genai
import fitz  # PyMuPDF

# Setup API Key
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("Error: GEMINI_API_KEY environment variable not set.")
    exit(1)

client = genai.Client(api_key=api_key)

def load_questions():
    filepath = 'agulhas_giroscopicas.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_str = "Question[] = "
    start_idx = content.find(start_str) + len(start_str)
    end_idx = content.rfind('];')
    if end_idx == -1:
        end_idx = content.rfind(']')
        
    json_str = content[start_idx:end_idx+1].strip()
    json_str = re.sub(r',\s*\]', ']', json_str)
    
    try:
        questions = json.loads(json_str)
    except json.JSONDecodeError as e:
        print("Failed to decode JSON from TS file. Ensure the file has valid syntax.", e)
        exit(1)
        
    return questions, content[:start_idx], content[end_idx+1:]

def save_questions(questions, pre, post):
    out = "[\n"
    for i, q in enumerate(questions):
        out += "  {\n"
        out += '    "question": ' + json.dumps(q['question'], ensure_ascii=False) + ',\n'
        out += '    "options": [\n'
        for j, opt in enumerate(q['options']):
            out += '      ' + json.dumps(opt, ensure_ascii=False) + (',' if j < len(q['options'])-1 else '') + '\n'
        out += '    ],\n'
        out += '    "answer": ' + json.dumps(q['answer'], ensure_ascii=False)
        
        if q.get('topic'):
            out += ',\n    "topic": ' + json.dumps(q['topic'], ensure_ascii=False)
        if q.get('explanation'):
            out += ',\n    "explanation": ' + json.dumps(q['explanation'], ensure_ascii=False)
        
        out += '\n  }' + (',' if i < len(questions)-1 else '') + '\n'
    out += "]"
    
    with open('agulhas_giroscopicas.ts', 'w', encoding='utf-8') as f:
        f.write(pre + out + post)

def load_manual():
    filepath = r'..\assets\MAN. SIST. AGU. GIRO .pdf'
    if not os.path.exists(filepath):
        print(f"Error: Manual not found at {filepath}")
        exit(1)
        
    doc = fitz.open(filepath)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def process_batch(questions_batch, manual_text):
    prompt = f"""
You are an expert in inertial navigation systems and gyrocompasses.
Below is the COMPLETE text of the manual "MANUTENÇÃO DOS SISTEMAS DE AGULHAS GIROSCÓPICAS", followed by a JSON array of questions and their correct answers.

Your task:
For EACH question in the JSON array, analyze the manual and provide:
1. `topic`: The exact chapter/topic number and title from the manual that covers this question. Format it EXACTLY like "1.3 - Rigidez no espaço ou Inércia Giroscópica" or "2.4 - Girômetro".
2. `explanation`: A clear, direct, and concise explanation for WHY the answer is correct, strictly based on the provided manual text. Write the explanation in Portuguese (pt-BR).

Manual Text:
---
{manual_text}
---

Questions Batch:
{json.dumps(questions_batch, ensure_ascii=False, indent=2)}

Return ONLY a raw JSON array of objects. Each object MUST contain ONLY two keys: `topic` and `explanation`.
The output array MUST have the EXACT SAME LENGTH and ORDER as the input questions batch.
Do NOT wrap the output in Markdown code blocks (e.g., ```json). Return just the raw JSON array starting with [ and ending with ].
"""
    
    # Using the new genai client. Let's try deep-research-max-preview-04-2026 which supports generateContent
    response = client.models.generate_content(
        model='models/deep-research-max-preview-04-2026',
        contents=prompt,
        config={'temperature': 0.2}
    )
    
    raw_text = response.text.strip()
    if raw_text.startswith('```json'):
        raw_text = raw_text[7:]
    if raw_text.startswith('```'):
        raw_text = raw_text[3:]
    if raw_text.endswith('```'):
        raw_text = raw_text[:-3]
        
    try:
        return json.loads(raw_text.strip())
    except json.JSONDecodeError as e:
        print("Failed to parse Gemini response as JSON:", e)
        print("Raw Response was:")
        print(raw_text)
        return []

def main():
    questions, pre, post = load_questions()
    manual = load_manual()
    
    batch_size = 15
    for i in range(0, len(questions), batch_size):
        # Skip if already processed
        if questions[i].get('topic') and questions[i].get('explanation'):
            continue
            
        batch = questions[i:i+batch_size]
        print(f"Processing batch {i//batch_size + 1} of {(len(questions)+batch_size-1)//batch_size} (Questions {i+1} to {min(i+batch_size, len(questions))})...")
        
        simplified_batch = [{"question": q["question"], "answer": q["answer"]} for q in batch]
        
        retries = 3
        results = []
        while retries > 0:
            try:
                results = process_batch(simplified_batch, manual)
                if len(results) == len(batch):
                    break
                else:
                    print(f"Mismatch in results count (Got {len(results)}, expected {len(batch)}). Retrying...")
            except Exception as e:
                print(f"Error during API call: {e}. Retrying after 45s...")
            retries -= 1
            time.sleep(45)
            
        if len(results) == len(batch):
            for j, res in enumerate(results):
                questions[i+j]['topic'] = str(res.get('topic', '')).strip()
                questions[i+j]['explanation'] = str(res.get('explanation', '')).strip()
        else:
            print(f"Failed to process batch starting at question {i+1}. Skipping these items.")
            
        save_questions(questions, pre, post)
        print("Saved progress. Sleeping 35s to respect rate limits...")
        time.sleep(35)
        
    print("Completed processing all questions!")

if __name__ == "__main__":
    main()
