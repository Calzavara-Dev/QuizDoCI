import re
import json

def process_and_append(input_file, ts_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    questions_raw = re.split(r'\*\*(\d+)\.\s', content)
    questions_raw = questions_raw[1:]

    questions = []
    
    for i in range(0, len(questions_raw), 2):
        q_num = questions_raw[i]
        q_block = questions_raw[i+1].strip()

        lines = q_block.split('\n')
        
        q_text = ""
        options = []
        answer_letter = ""
        explanation = ""

        opt_regex = re.compile(r'^([a-eA-E])\)\s*(.*)')
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            if line.startswith('*Resposta Correta:'):
                answer_letter = line.split(':')[1].strip().replace('*', '').upper()
            elif line.startswith('explanation:'):
                explanation = line.replace('explanation:', '').strip().strip('"')
            else:
                m = opt_regex.match(line)
                if m:
                    options.append({'letter': m.group(1).upper(), 'text': m.group(2).strip()})
                elif not answer_letter and not options:
                    q_text += line + " "

        q_text = q_text.strip().strip('*')
        
        answer_text = ""
        for opt in options:
            if opt['letter'] == answer_letter:
                answer_text = opt['text']
                break
        
        options_texts = [opt['text'] for opt in options]

        if not options_texts:
            continue
            
        questions.append({
            "question": q_text,
            "options": options_texts,
            "answer": answer_text,
            "explanation": explanation
        })

    with open(ts_file, 'r', encoding='utf-8') as f:
        ts_content = f.read()
    
    # We want to remove question 76 which was partially appended last time.
    search_str = '    question: "Se durante o teste semestral ou na rotina de voo for detectada'
    idx = ts_content.find(search_str)
    if idx != -1:
        # Find the previous '  {\n'
        brace_idx = ts_content.rfind('  {', 0, idx)
        if brace_idx != -1:
            ts_content = ts_content[:brace_idx]
    else:
        # Just remove the closing bracket
        ts_content = re.sub(r'];\s*$', '', ts_content)
        if not ts_content.strip().endswith(','):
            ts_content += ',\n'

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        for idx, q in enumerate(questions):
            f.write('  {\n')
            f.write(f'    question: {json.dumps(q["question"], ensure_ascii=False)},\n')
            f.write('    options: [\n')
            for opt in q["options"]:
                f.write(f'      {json.dumps(opt, ensure_ascii=False)},\n')
            f.write('    ],\n')
            f.write(f'    answer: {json.dumps(q["answer"], ensure_ascii=False)},\n')
            if q["explanation"]:
                f.write(f'    explanation: {json.dumps(q["explanation"], ensure_ascii=False)}\n')
            f.write('  },\n')
            
        f.write('];\n')

process_and_append('raw_anemometros_p2_part5.txt', 'anemometros_p2.ts')
print("Successfully appended part 5 to anemometros_p2.ts")
