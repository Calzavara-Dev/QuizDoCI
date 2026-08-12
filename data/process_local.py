import os
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

def parse_chapters(text):
    # Regex to find chapters like "1.3 - Rigidez no espaço ou Inércia Giroscópica"
    pattern = re.compile(r'\n(\d+\.\d+\s+-\s+[^\n]+)\n')
    matches = list(pattern.finditer(text))
    
    chapters = []
    for i in range(len(matches)):
        title = matches[i].group(1).strip()
        start = matches[i].end()
        end = matches[i+1].start() if i < len(matches)-1 else len(text)
        content = text[start:end].strip()
        chapters.append({
            "title": title,
            "content": content
        })
    return chapters

def get_words(text):
    return re.findall(r'\w+', text.lower())

def score_match(query_words, content_words):
    query_counts = Counter(query_words)
    content_counts = Counter(content_words)
    score = 0
    for word, count in query_counts.items():
        if len(word) > 3: # Ignore small words like 'o', 'a', 'que', 'em'
            if word in content_counts:
                score += 1
    return score

def extract_explanation(content, answer):
    # Find the paragraph or sentence containing the answer or most words of it
    sentences = re.split(r'(?<=[.!?])\s+', content)
    ans_words = get_words(answer)
    
    best_sentence = ""
    best_score = -1
    
    for s in sentences:
        score = score_match(ans_words, get_words(s))
        if score > best_score:
            best_score = score
            best_sentence = s.strip()
            
    if best_sentence:
        # Clean up formatting
        best_sentence = best_sentence.replace('\n', ' ')
        return f"Conforme o manual: {best_sentence}"
    return "A resposta correta é baseada nos princípios fundamentais abordados neste tópico do manual."

def main():
    questions, pre, post = load_questions()
    text = load_manual_text()
    chapters = parse_chapters(text)
    
    print(f"Parsed {len(chapters)} chapters.")
    
    for q in questions:
        if q.get('topic') and q.get('explanation'):
            continue
            
        q_words = get_words(q['question']) + get_words(q['answer'])
        
        best_chapter = None
        best_score = -1
        
        for ch in chapters:
            score = score_match(q_words, get_words(ch['content']))
            if score > best_score:
                best_score = score
                best_chapter = ch
                
        if best_chapter:
            q['topic'] = best_chapter['title']
            q['explanation'] = extract_explanation(best_chapter['content'], q['answer'])
        else:
            q['topic'] = "1.1 - Introdução"
            q['explanation'] = "A alternativa correta reflete o comportamento esperado do sistema conforme descrito na introdução."
            
    save_questions(questions, pre, post)
    print("Processamento local completo!")

if __name__ == "__main__":
    main()
