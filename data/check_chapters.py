import re
import codecs
import json

file_path = "g:/ERICK/src/data/microcontroladores_p2.ts"
text = codecs.open(file_path, "r", "utf-8").read()

# Try to parse the array of objects using a regex to find all explanation and question fields
questions = re.findall(r'"question"\s*:\s*"(.*?)",', text)
explanations = re.findall(r'"explanation"\s*:\s*"(.*?)",', text)

chapters = set()
out_of_bounds = []
missing_chapter = []

for i, exp in enumerate(explanations):
    m = re.findall(r'[Cc]ap[íi]tulo\s*(\d+)', exp)
    if m:
        for c in m:
            chapters.add(int(c))
        if any(int(c) < 6 or int(c) > 12 for c in m):
            out_of_bounds.append((i, questions[i] if i < len(questions) else "Unknown", exp))
    else:
        # Check if the question text itself has the chapter
        q = questions[i] if i < len(questions) else ""
        m_q = re.findall(r'[Cc]ap[íi]tulo\s*(\d+)', q)
        if m_q:
            for c in m_q:
                chapters.add(int(c))
            if any(int(c) < 6 or int(c) > 12 for c in m_q):
                out_of_bounds.append((i, q, exp))
        else:
            missing_chapter.append((i, q, exp))

print("Chapters found:", sorted(list(chapters)))
print("\nOut of bounds questions (not 6-12):")
for item in out_of_bounds:
    print(f"- Q: {item[1]}\n  Exp: {item[2]}\n")

print(f"\nMissing explicit chapter references: {len(missing_chapter)}")
