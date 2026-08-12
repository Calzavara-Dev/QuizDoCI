import re
import json

def check_duplicates(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all questions using regex
    # The file has: "question": "...",
    pattern = re.compile(r'"question"\s*:\s*"(.*?)"', re.IGNORECASE)
    matches = pattern.findall(content)
    
    seen = set()
    duplicates = []
    
    for match in matches:
        # Normalize the string (lowercase, remove extra spaces)
        normalized = re.sub(r'\s+', ' ', match).strip().lower()
        
        if normalized in seen:
            duplicates.append(match)
        else:
            seen.add(normalized)
            
    if not duplicates:
        print("No duplicate questions found.")
    else:
        print(f"Found {len(duplicates)} duplicate questions:")
        for dup in duplicates:
            print(f"- {dup}")

if __name__ == '__main__':
    check_duplicates('agulhas_giroscopicas.ts')
