import fitz
import sys

doc = fitz.open(r'g:\ERICK\src\assets\MAN. SIST. AGU. GIRO .pdf')
text = ''.join([p.get_text() for p in doc])

with open('manual_utf8.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done. Lines:", text.count('\n'))
