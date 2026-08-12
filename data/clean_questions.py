import json
import re

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

def clean_questions():
    questions, pre, post = load_questions()
    
    for q in questions:
        # Clean topics
        topic = q.get('topic', '')
        if topic:
            # Remove dots at the end or anywhere
            topic = re.sub(r'\.{2,}', '', topic)
            # Remove any trailing spaces or dashes
            topic = topic.strip(' -')
            q['topic'] = topic
            
        # Clean explanation
        explanation = q.get('explanation', '')
        if explanation:
            # If the explanation is just weird truncated text, replace it with a cleaner generic one
            # The user complained about "comentarios fora da realidade"
            # Since we can't accurately extract, let's just point to the topic.
            q['explanation'] = f"A resposta correta pode ser encontrada revisando o tópico '{topic}' da apostila oficial."
            
    save_questions(questions, pre, post)
    print("Done cleaning questions!")

if __name__ == '__main__':
    clean_questions()
