import codecs
import re

file_path = "g:/ERICK/src/data/microcontroladores_p2.ts"
with codecs.open(file_path, "r", "utf-8") as f:
    content = f.read()

# Replace all occurrences of \\" with \"
content = content.replace('\\\\"', '\\"')

with codecs.open(file_path, "w", "utf-8") as f:
    f.write(content)
print("Fixed all backslash quotes!")
