import json
import re
import math
from collections import Counter
import fitz

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
    questions = json.loads(json_str)
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

def load_manual_text():
    filepath = r'..\assets\MAN. SIST. AGU. GIRO .pdf'
    doc = fitz.open(filepath)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def get_words(text):
    return re.findall(r'[a-zA-Z0-9_]{4,}', text.lower())

def score_match(query_words, content_words):
    query_counts = Counter(query_words)
    content_counts = Counter(content_words)
    score = 0
    for word, count in query_counts.items():
        if word in content_counts:
            score += 1
    return score

def main():
    questions, pre, post = load_questions()
    text = load_manual_text()
    
    # Extract topics from TOC lines with dots
    toc_pattern = re.compile(r'(\d+\.\d+\s+-\s+[^.]+)')
    all_topics = []
    for line in text.split('\n'):
        if "....." in line:
            m = toc_pattern.search(line)
            if m:
                topic = m.group(1).strip()
                if topic not in all_topics:
                    all_topics.append(topic)
                    
    if not all_topics:
        all_topics = ["1.1 - Introdução", "1.2 - Giroscópio", "1.3 - Rigidez no espaço", "1.4 - Precessão"]
        
    # Build paragraphs using basic sentence splitting
    flat_text = text.replace('\n', ' ')
    # split by dot followed by space and uppercase letter
    sentences = re.split(r'\.\s+(?=[A-Z])', flat_text)
    
    paragraphs = []
    chunk = ""
    for s in sentences:
        chunk += s + ". "
        if len(chunk) > 300:
            paragraphs.append(chunk.strip())
            chunk = ""
    if chunk:
        paragraphs.append(chunk.strip())
        
    print(f"Total topics extracted: {len(all_topics)}")
    print(f"Total paragraphs extracted: {len(paragraphs)}")
    
    for q in questions:
        q_words = get_words(q['question']) + get_words(q['answer']) * 3
        
        best_para = ""
        best_score = -1
        
        for p in paragraphs:
            if ".........." in p: continue
            
            p_words = get_words(p)
            score = score_match(q_words, p_words)
            if score > best_score:
                best_score = score
                best_para = p
                
        best_topic = all_topics[0]
        best_t_score = -1
        for t in all_topics:
            t_score = score_match(q_words, get_words(t))
            if t_score > best_t_score:
                best_t_score = t_score
                best_topic = t
                
        if best_t_score == 0:
            best_topic = "1.1 - Fundamentos"
            
        q['topic'] = best_topic
        
        clean_para = best_para
        # Ensure clean text, remove strange formatting
        clean_para = re.sub(r'\s+', ' ', clean_para).strip()
        
        if len(clean_para) > 350:
            # find answer word to center context
            ans_w = get_words(q['answer'])
            start = 0
            end = 350
            if ans_w:
                first_word = ans_w[0]
                idx = clean_para.lower().find(first_word)
                if idx > -1:
                    start = max(0, idx - 100)
                    end = min(len(clean_para), idx + 250)
            
            clean_para = "..." + clean_para[start:end] + "..."
            
        q['explanation'] = f"Conforme a apostila: {clean_para}"
            
    save_questions(questions, pre, post)
    print("Processamento local completo v3!")

if __name__ == "__main__":
    main()
