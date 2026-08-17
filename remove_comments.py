import json

def process_file(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    prefix = f'import type {{ Question }} from "../types/question";\n\nexport const {var_name}: Question[] = '
    
    if content.startswith(prefix):
        json_str = content[len(prefix):].strip()
        if json_str.endswith(';'):
            json_str = json_str[:-1]
            
        data = json.loads(json_str)
        count = 0
        for q in data:
            if 'explanation' in q:
                del q['explanation']
                count += 1
                
        new_content = prefix + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Processed {filepath}, removed {count} explanations.")
    else:
        print(f"Prefix not found in {filepath}")

process_file("g:/ERICK/src/data/redes_ethernet.ts", "redesEthernetQuestions")
process_file("g:/ERICK/src/data/redes_gagau.ts", "redesGagauQuestions")
