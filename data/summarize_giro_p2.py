import json
import re

def load_questions():
    with open('giro_p2.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    start_str = "Question[] = "
    start_idx = content.find(start_str) + len(start_str)
    end_idx = content.rfind('];')
    json_str = content[start_idx:end_idx+1].strip()
    json_str = re.sub(r',\s*\]', ']', json_str)
    json_str = re.sub(r'^\s*([a-zA-Z_]+)\s*:', r'"\1":', json_str, flags=re.MULTILINE)
    return json.loads(json_str), content[:start_idx], content[end_idx+1:]

def save_questions(questions, pre, post):
    out = "[\n"
    for i, q in enumerate(questions):
        out += "  {\n"
        out += '    question: ' + json.dumps(q['question'], ensure_ascii=False) + ',\n'
        out += '    options: [\n'
        for j, opt in enumerate(q['options']):
            out += '      ' + json.dumps(opt, ensure_ascii=False) + (',' if j < len(q['options'])-1 else '') + '\n'
        out += '    ],\n'
        out += '    answer: ' + json.dumps(q['answer'], ensure_ascii=False)
        if q.get('topic'):
            out += ',\n    topic: ' + json.dumps(q['topic'], ensure_ascii=False)
        if q.get('explanation'):
            out += ',\n    explanation: ' + json.dumps(q['explanation'], ensure_ascii=False)
        out += '\n  }' + (',' if i < len(questions)-1 else '') + '\n'
    out += "];"
    
    with open('giro_p2.ts', 'w', encoding='utf-8') as f:
        f.write(pre + out + post)

def summarize_explanation(explanation, answer):
    if not explanation:
        return ""
    # Stopwords to ignore
    stopwords = {"a", "o", "e", "é", "de", "do", "da", "em", "no", "na", "que", "para", "com", "os", "as", "um", "uma"}
    ans_words = set([w for w in re.findall(r'\w+', answer.lower()) if w not in stopwords])
    
    # Split sentences (rudimentary)
    sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', explanation)
    
    # Simple logic: if very short, keep it
    if len(sentences) <= 1:
        return explanation
        
    best_sent = sentences[0]
    max_overlap = -1
    
    # Check if any sentence has an overlap with the answer's key terms
    for s in sentences:
        s_words = set([w for w in re.findall(r'\w+', s.lower()) if w not in stopwords])
        if not ans_words:
            # If no answer words, just take the first
            break
        overlap = len(ans_words.intersection(s_words))
        if overlap > max_overlap:
            max_overlap = overlap
            best_sent = s
            
    # Sometimes the first sentence is best to provide context, so we might want to keep the first sentence + the best sentence.
    # If the best sentence IS the first sentence, just return it.
    if best_sent == sentences[0] or max_overlap == 0:
        return sentences[0]
    
    return sentences[0] + " " + best_sent

def main():
    questions, pre, post = load_questions()
    for q in questions:
        q['explanation'] = summarize_explanation(q.get('explanation', ''), q.get('answer', ''))
        
    save_questions(questions, pre, post)
    print("Done. Summarized explanations saved to giro_p2.ts.")

if __name__ == '__main__':
    main()
