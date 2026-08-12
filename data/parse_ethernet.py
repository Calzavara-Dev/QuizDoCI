import re
import json

def parse_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()

    parts = text.split('GABARITO')
    questions_text = parts[0]
    gabarito_text = parts[1]

    gabarito = {}
    for line in gabarito_text.strip().split('\n'):
        line = line.strip()
        if not line:
            continue
        match = re.match(r'^(\d+)\.\s*([A-E])', line, re.IGNORECASE)
        if match:
            gabarito[int(match.group(1))] = match.group(2).upper()

    questions = []
    pattern = re.compile(r'\n(\d+)\.\s+(.*?)(?=\n\d+\.\s+|$)', re.DOTALL)
    
    q_matches = list(pattern.finditer('\n' + questions_text.strip()))
    
    for q_match in q_matches:
        q_num = int(q_match.group(1))
        full_text = q_match.group(2).strip()
        
        opt_pattern = re.compile(r'\s+([a-e]\))\s+(.*?)(?=\s+[a-e]\)\s+|$)', re.IGNORECASE | re.DOTALL)
        
        first_opt_match = re.search(r'\s+a\)\s+', full_text, re.IGNORECASE)
        if not first_opt_match:
            continue
            
        q_text = full_text[:first_opt_match.start()].strip()
        
        options_matches = list(opt_pattern.finditer(full_text[first_opt_match.start():]))
        
        options_list = []
        answer_text = ""
        correct_letter = gabarito.get(q_num, "")
        
        for o_m in options_matches:
            letter = o_m.group(1).replace(')', '').strip().upper()
            opt_text = o_m.group(2).strip()
            opt_text = re.sub(r'\s+', ' ', opt_text)
            options_list.append(opt_text)
            
            if letter == correct_letter:
                answer_text = opt_text
                
        explanation = f"A alternativa correta é a letra {correct_letter}. {answer_text}"
        q_text = re.sub(r'\s+', ' ', q_text)
        
        questions.append({
            "question": q_text,
            "options": options_list,
            "answer": answer_text,
            "explanation": explanation
        })
        
    return questions

def generate_ts(questions):
    ts_code = 'import type { Question } from "../types/question";\n\n'
    ts_code += 'export const redesEthernetQuestions: Question[] = [\n'
    
    for i, q in enumerate(questions):
        ts_code += '  {\n'
        ts_code += f'    "question": {json.dumps(q["question"], ensure_ascii=False)},\n'
        ts_code += '    "options": [\n'
        for j, opt in enumerate(q["options"]):
            ts_code += f'      {json.dumps(opt, ensure_ascii=False)}' + (',' if j < len(q["options"])-1 else '') + '\n'
        ts_code += '    ],\n'
        ts_code += f'    "answer": {json.dumps(q["answer"], ensure_ascii=False)},\n'
        ts_code += f'    "explanation": {json.dumps(q["explanation"], ensure_ascii=False)}\n'
        ts_code += '  }' + (',' if i < len(questions)-1 else '') + '\n'
        
    ts_code += '];\n'
    
    with open('redes_ethernet.ts', 'w', encoding='utf-8') as f:
        f.write(ts_code)

if __name__ == '__main__':
    qs1 = parse_file('raw_ethernet.txt')
    qs2 = parse_file('raw_ethernet_part2.txt')
    all_qs = qs1 + qs2
    generate_ts(all_qs)
    print(f"Generated {len(all_qs)} questions in total.")
