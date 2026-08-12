import re

def deduplicate_ts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # The array of questions starts after 'export const agulhasGiroscopicasQuestions: Question[] = ['
    start_idx = content.find('[')
    end_idx = content.rfind(']')
    
    pre_content = content[:start_idx+1]
    post_content = content[end_idx:]
    
    # Extract blocks for each object
    # Each object is between '{' and '}'
    # But since they can be nested (not here but generally), we can just split by '  },' or use regex
    
    blocks = re.split(r'  \},\n  \{', content[start_idx+1:end_idx])
    
    if len(blocks) > 0:
        blocks[0] = blocks[0].replace('\n  {', '', 1)
        blocks[-1] = blocks[-1].replace('\n  }', '', 1)
    
    seen = set()
    unique_blocks = []
    
    for block in blocks:
        # Find the question text
        match = re.search(r'"question"\s*:\s*"(.*?)"', block, re.IGNORECASE)
        if match:
            q_text = match.group(1)
            normalized = re.sub(r'\s+', ' ', q_text).strip().lower()
            if normalized not in seen:
                seen.add(normalized)
                unique_blocks.append(block)
        else:
            unique_blocks.append(block)
            
    # Reconstruct the array
    new_content = pre_content + '\n'
    for i, block in enumerate(unique_blocks):
        new_content += '  {\n'
        new_content += block.strip()
        new_content += '\n  }'
        if i < len(unique_blocks) - 1:
            new_content += ',\n'
        else:
            new_content += '\n'
            
    new_content += post_content
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
if __name__ == '__main__':
    deduplicate_ts('agulhas_giroscopicas.ts')
