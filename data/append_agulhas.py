import json
import re

def parse_questions(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by lines
    lines = content.strip().split('\n')
    questions = []
    
    for line in lines:
        if not line.strip():
            continue
        
        # It looks like: 1) Question text a) ... b) ... c) ... (Correta) d) ...
        # First extract the question.
        # Match '1) Question text ' up to 'a) '
        match = re.search(r'^\d+\)\s*(.*?)\s*a\)', line)
        if not match:
            # Let's try matching 'Capítulo 2...'
            if line.startswith('Capítulo'):
                continue
            continue
        
        question_text = match.group(1).strip()
        
        # Extract options
        # we can split by a), b), c), d)
        options_part = line[match.end(1):].strip()
        
        opts_raw = re.split(r'\s+[a-d]\)\s+|^[a-d]\)\s+', options_part)
        opts_raw = [o.strip() for o in opts_raw if o.strip()]
        
        options = []
        answer = ""
        
        for opt in opts_raw:
            if '(Correta)' in opt:
                clean_opt = opt.replace('(Correta)', '').strip()
                options.append(clean_opt)
                answer = clean_opt
            else:
                options.append(opt)
                
        questions.append({
            "question": question_text,
            "options": options,
            "answer": answer
        })
        
    return questions

def append_to_ts(ts_path, questions):
    with open(ts_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()
        
    # The file ends with '  }\n];\n'
    # Find the last '];'
    end_idx = ts_content.rfind('];')
    
    new_content = ts_content[:end_idx]
    
    # Check if there's a trailing comma before ']'
    # Actually just add a comma to the last item
    # Since we are inserting before '];', we should add a comma to the previous object if needed.
    # The previous object ends with '}'
    last_brace = new_content.rfind('}')
    new_content = new_content[:last_brace+1] + ',\n'
    
    # Format questions
    for i, q in enumerate(questions):
        new_content += '  {\n'
        new_content += f'    "question": {json.dumps(q["question"], ensure_ascii=False)},\n'
        new_content += '    "options": [\n'
        for j, opt in enumerate(q["options"]):
            new_content += f'      {json.dumps(opt, ensure_ascii=False)}'
            if j < len(q["options"]) - 1:
                new_content += ',\n'
            else:
                new_content += '\n'
        new_content += '    ],\n'
        new_content += f'    "answer": {json.dumps(q["answer"], ensure_ascii=False)}\n'
        
        if i < len(questions) - 1:
            new_content += '  },\n'
        else:
            new_content += '  }\n'
            
    new_content += '];\n'
    
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    qs = parse_questions('scratch_raw_agulhas.txt')
    append_to_ts('agulhas_giroscopicas.ts', qs)
    print(f"Appended {len(qs)} questions.")
