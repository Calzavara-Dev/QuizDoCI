import re
import json

def process_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by **number. 
    # Example: **1. O sistema...
    questions_raw = re.split(r'\*\*(\d+)\.\s', content)
    # The first element is before the first question.
    questions_raw = questions_raw[1:]

    questions = []
    
    for i in range(0, len(questions_raw), 2):
        q_num = questions_raw[i]
        q_block = questions_raw[i+1].strip()

        # Extract question text (until the first option)
        # Options start with a) or A) or a. etc.
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

        # Clean q_text
        q_text = q_text.strip().strip('*')
        
        # Match answer letter to option text
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

    # Generate TS file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('import type { Question } from "../types/question";\n\n')
        f.write('export const anemometrosP2Questions: Question[] = [\n')
        for q in questions:
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

process_file('raw_anemometros_p2.txt', 'anemometros_p2.ts')
print("Successfully processed anemometros_p2.ts")
