import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Regex to match topic lines like: topic: "blabla", or "topic": "blabla",
    # and remove them.
    # We look for spaces, optional quotes around topic, colon, anything up to optional comma and newline
    pattern = re.compile(r'^\s*[\'"]?topic[\'"]?\s*:\s*[\'"].*?[\'"]\s*,?\s*\n?', re.MULTILINE)
    
    new_content, count = pattern.subn('', content)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Processed {filepath}, removed {count} topics.")
    else:
        print(f"No topics found in {filepath}.")

files = glob.glob("g:/ERICK/src/data/*.ts")
for f in files:
    if f.endswith("questions.ts"): continue
    process_file(f)
