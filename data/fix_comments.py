import re
import json

file_path = r'g:\ERICK\src\data\microcontroladores_p2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    q_text = match.group(1).replace('"', '\\"')
    comment = match.group(2).replace('"', '\\"')
    return f'"question": "{q_text}",\n    "explanation": "{comment}",'

# We are searching for "question": "Something\n\nComentário: Something else",
new_content = re.sub(r'"question": "(.*?)\\n\\nComentário: (.*?)",', replacer, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done')
