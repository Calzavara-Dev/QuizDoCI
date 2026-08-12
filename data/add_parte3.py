import re
import random
import json
import codecs

raw_text_parte3 = """
1) A Terra é um esferóide achatado nas partes superior e inferior, dividida primariamente por uma linha imaginária (equador) em dois hemisférios. Quais são eles? R: NORTE E SUL.
2) Qual a linha (meridiano) que serve como ponto de partida convencionado como Meridiano Zero? R: Meridiano de Greenwich (Inglaterra).
3) Entre o EQUADOR e os PÓLOS há diversas linhas paralelas formando circunferências que diminuem de perímetro à medida que se aproximam dos PÓLOS. Como são chamadas essas linhas? R: PARALELOS.
4) Como é marcada a latitude no globo terrestre? R: 0° a 90° NORTE e 0° a 90° SUL.
5) Como são chamadas as linhas na vertical (circunferências máximas) que passam pelos pólos? E como é marcada a longitude baseada nestas linhas? R: a) MERIDIANOS; b) O ponto de partida é o meridiano de Greenwich (Meridiano Zero), contando-se até 180° de longitude Leste e 180° de longitude Oeste.
6) Descreva a fórmula da velocidade angular da Terra: R: A velocidade angular da Terra é de 15° por hora em qualquer ponto da superfície: Va = 360° / 24H = 15°/H.
7) Descreva a fórmula da velocidade linear da Terra, no EQUADOR: R: VL = 21.600 milhas / 24H = 900 milhas/hora.
8) À medida que aumenta a latitude, a velocidade linear diminui. Descreva a fórmula da velocidade linear em qualquer ponto da superfície da Terra: R: VL = 900 x Cos(Latitude).
9) Descreva um giroscópio básico: R: Consiste de um rotor (disco) perfeitamente balanceado, livre para girar em torno de três (3) eixos perpendiculares entre si, que se interceptam no seu centro de gravidade (3 graus de liberdade: eixo de rotação, eixo horizontal e eixo vertical).
11) Defina Rigidez no espaço ou Inércia giroscópica: R: É a propriedade do giroscópio pela qual ele tenta manter o eixo de rotação na sua posição inicial (1ª Lei de Newton).
12) De quais fatores depende a inércia giroscópica? R: Depende da velocidade de rotação do rotor, do raio de giro e da concentração da massa na periferia do rotor.
13) Defina precessão: R: É uma propriedade do giroscópio que causa a mudança de direção do eixo de rotação quando é aplicado um torque no rotor.
14) Se um torque for aplicado em torno do eixo vertical (T), o rotor precessiona em torno de qual eixo? R: Precessiona em torno do eixo Horizontal (P).
15) Supondo o rotor no Equador com eixo Leste-Oeste, qual a rotação aparente observada? R: O rotor parecerá girar em torno do seu eixo horizontal com velocidade igual (15°/H / 360° em 24h), mas direção oposta à rotação da Terra.
16) Supondo o rotor no Pólo Norte ou Pólo Sul com eixo horizontal, qual a rotação aparente observada? R: O rotor parecerá girar em torno de seu eixo vertical (Reite Vertical da Terra - VER).
17) Qual Reite da Terra é máximo no Equador e zero nos pólos e varia com o co-seno da latitude? R: Horizontal (HER).
18) Qual Reite da Terra varia com o seno da latitude, sendo máximo nos pólos e zero no Equador? R: Vertical (VER).
19) Descreva as fórmulas de HER e VER: R: a) HER = 15°/H × Cos(lat); b) VER = 15°/H × Sen(lat).
20) Calcule os valores de HER e VER nos pontos: R: Latitude 0°: VER = 0°/h, HER = 15°/h (Máximo) Latitude 30°: VER = 7,5°/h, HER = 12,99°/h Latitude 60°: VER = 12,99°/h, HER = 7,5°/h Latitude 90°: VER = 15°/h (Máximo), HER = 0°/h
21) Qual é a função do peso W no giroscópio para procurar o meridiano? R: Tornar o anel vertical pendular, aplicando torque de gravidade quando a ponta se eleva ou abaixa para gerar precessão em direção ao meridiano.
23) Qual é a função do peso W1 na transformação do giroscópio em elemento indicador do norte? R: Suprimir as oscilações do rotor em tempo do meridiano (amortecimento), adicionando um pequeno peso W1 na esfera do lado Leste.
25) Descreva o efeito do peso W1 adicionado ao giroscópio procurador e indicador do norte: R: Causa a redução da elipse em cada oscilação sucessiva; a ponta norte do eixo do rotor seguirá um caminho espiral até estabilizar no meridiano.
26) Cite as 5 vantagens das agulhas dotadas de girosfera: R: 1ª - Peso removido dos rolamentos do eixo vertical pela flutuação neutra; 2ª - Grande proteção contra choques mecânicos; 3ª Reduz efeitos da aceleração; 4ª - Trabalho do motor facilitado por gás hélio; 5ª - Imersão em óleo protege contra agentes oxidantes.
27) Como se classificam as agulhas dotadas de girosfera quanto ao sistema de controle? R: Controle mecânico ou eletrônico.
28) Cite os modelos de agulhas que utilizam balístico de líquido (óleo) e pesos para amortecimento: R: MK-27, MK-227, etc.
29) Descreva o balístico de óleo: R: Consiste em dois reservatórios interligados por tubo com óleo. Com a inclinação (HER), o óleo escoa para o reservatório mais baixo, aplicando torque no rotor para procurar o norte.
30) Descreva o princípio de funcionamento das agulhas com controle eletrônico: R: Utilizam sensor de inclinação (nível eletrolítico), amplificadores e torquers. Ao detectar inclinação, gera sinal proporcional amplificado para os torquers corrigirem a posição.
32) Descreva o Nível Eletrolítico: R: Tubo de vidro cilíndrico com 3 eletrodos de platina e parcialmente cheio de eletrólito, formando uma bolha de ar na parte superior.
33) Qual dispositivo as agulhas dotadas de girosfera utilizam como elemento sensível? R: Nível eletrolítico.
34) Em alguns modelos mais modernos, o nível eletrolítico foi substituído por qual dispositivo? R: Acelerômetro.
35) Descreva o produtor de torques (torquer): R: Estrutura tipo "E" aberta. Enrolamento central é campo de referência (fixo) e laterais são de controle (saída do amplificador), defasados de 90° elétricos.
36) Descreva o pickoff e seu princípio de funcionamento: R: Núcleo de ferro laminado em "E" com 3 enrolamentos e armadura móvel. Primário central, secundários laterais em série oposta. O acoplamento varia com a posição da armadura.
39) Qual será a marcação verdadeira de uma agulha que apresenta erro? R: Rumo Verdadeiro = Rumo Lido - Erro Leste (+ se Erro Oeste). Ex: Se Erro for Leste, Leitura < Verdadeiro.
40) Como será a leitura numa rosa havendo erro Oeste? R: Leitura na rosa MAIOR que o rumo verdadeiro.
41) Qual a diferença entre Erro Leste e Erro Oeste na indicação? R: Erro Leste: Leitura < Rumo Real. Erro Oeste: Leitura > Rumo Real.
42) Quais os erros de latitude nos hemisférios? R: Hemisfério Norte: Erro Leste. Hemisfério Sul: Erro Oeste.
43) Quais as tendências no erro de rumo? R: Tenderá para Oeste navegando com rumo Norte (em qualquer hemisfério). Navegando com rumo Sul, o erro será Leste.
"""

questions_ts = []

q3_pattern = r'(\d+)\)\s*(.*?)\s*R:\s*(.*?)(?=\n\d+\)|$)'
matches3 = list(re.finditer(q3_pattern, raw_text_parte3, re.DOTALL))

all_answers3 = [m.group(3).strip() for m in matches3]

for m in matches3:
    question = m.group(2).strip()
    answer = m.group(3).strip()
    
    other_answers = [a for a in all_answers3 if a != answer]
    wrong_options = random.sample(other_answers, min(3, len(other_answers)))
    
    options = [answer] + wrong_options
    random.shuffle(options)
    
    questions_ts.append({
        "question": question,
        "options": options,
        "answer": answer
    })

# Write to a string
out_str = ""
for q in questions_ts:
    out_str += '  {\n'
    out_str += '    "question": ' + json.dumps(q["question"], ensure_ascii=False) + ',\n'
    out_str += '    "options": [\n'
    for i, opt in enumerate(q["options"]):
        out_str += '      ' + json.dumps(opt, ensure_ascii=False) + (',' if i < len(q["options"])-1 else '') + '\n'
    out_str += '    ],\n'
    out_str += '    "answer": ' + json.dumps(q["answer"], ensure_ascii=False) + '\n'
    out_str += '  },\n'

# Read the original file
filepath = r"g:\ERICK\src\data\agulhas_giroscopicas.ts"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the trailing "];"
content = content.rstrip()
if content.endswith('];'):
    content = content[:-2]
    # Remove trailing comma if exists
    content = content.rstrip()
    if content.endswith(','):
        pass # It's fine
    else:
        # Add a comma to the last element
        if content.endswith('}'):
            content += ','

# Append new content
content += '\n' + out_str + '];\n'

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully added {len(questions_ts)} questions from PARTE 3.")
