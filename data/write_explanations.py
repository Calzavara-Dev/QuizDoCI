import json
import re

def load_questions():
    filepath = 'agulhas_giroscopicas.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    start_str = "Question[] = "
    start_idx = content.find(start_str) + len(start_str)
    end_idx = content.rfind('];')
    json_str = content[start_idx:end_idx+1].strip()
    json_str = re.sub(r',\s*\]', ']', json_str)
    questions = json.loads(json_str)
    return questions, content[:start_idx], content[end_idx+1:]

def save_questions(questions, pre, post):
    out = "[\n"
    for i, q in enumerate(questions):
        out += "  {\n"
        out += '    "question": ' + json.dumps(q['question'], ensure_ascii=False) + ',\n'
        out += '    "options": [\n'
        for j, opt in enumerate(q['options']):
            out += '      ' + json.dumps(opt, ensure_ascii=False) + (',' if j < len(q['options'])-1 else '') + '\n'
        out += '    ],\n'
        out += '    "answer": ' + json.dumps(q['answer'], ensure_ascii=False)
        if q.get('topic'):
            out += ',\n    "topic": ' + json.dumps(q['topic'], ensure_ascii=False)
        if q.get('explanation'):
            out += ',\n    "explanation": ' + json.dumps(q['explanation'], ensure_ascii=False)
        out += '\n  }' + (',' if i < len(questions)-1 else '') + '\n'
    out += "]"
    with open('agulhas_giroscopicas.ts', 'w', encoding='utf-8') as f:
        f.write(pre + out + post)

# Banco de explicações manuais baseadas na apostila CIAA-117/037
EXPLANATIONS = {
    # ===== FUNDAMENTOS TEÓRICOS (Cap. 1) =====
    "A terra é um esferóide achatado": {
        "topic": "1.1 - Introdução",
        "explanation": "O equador é a linha imaginária que divide a Terra em dois hemisférios: NORTE e SUL. Essa divisão primária é a base da coordenada de latitude usada na navegação."
    },
    "meridiano de Greenwich": {
        "topic": "1.1 - Introdução",
        "explanation": "O equador e o meridiano de Greenwich dividem a Terra em quatro quadrantes: NORDESTE, SUDESTE, SUDOESTE e NOROESTE. O equador divide Norte/Sul e o meridiano de Greenwich divide Leste/Oeste."
    },
    "Entre o EQUADOR e os PÓLOS há diversas linhas paralelas": {
        "topic": "1.1 - Introdução",
        "explanation": "As linhas paralelas ao equador são chamadas de PARALELOS. Elas formam circunferências que diminuem de tamanho à medida que se aproximam dos pólos, sendo usadas para medir a latitude."
    },
    "Como é marcada a latitude": {
        "topic": "1.1 - Introdução",
        "explanation": "A latitude é marcada de 0° (Equador) a 90° Norte e de 0° (Equador) a 90° Sul. O Equador é o ponto zero de referência para a latitude."
    },
    "linhas na vertical (circunferências máximas) que passam pelos pólos": {
        "topic": "1.1 - Introdução",
        "explanation": "As circunferências máximas que passam pelos pólos são os MERIDIANOS. A longitude é medida a partir do Meridiano de Greenwich (Meridiano Zero), contando-se 180° para Leste e 180° para Oeste."
    },
    "velocidade angular da terra": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "A Terra completa uma rotação de 360° em 24 horas. Portanto, sua velocidade angular é: Va = 360° ÷ 24h = 15°/h. Esse valor é constante em qualquer ponto da superfície terrestre."
    },
    "velocidade linear da terra, no EQUADOR": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "A circunferência do Equador equivale a 21.600 milhas náuticas. Dividindo pelo período de 24h: VL = 21.600 ÷ 24 = 900 milhas/hora. Esse é o valor máximo, pois no Equador o raio da Terra é máximo."
    },
    "aumenta a latitude (diminui o perímetro)": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Como o perímetro dos paralelos diminui com a latitude, a velocidade linear em qualquer ponto é proporcional ao co-seno da latitude: VL = 900 × Co-seno(Latitude). No Equador (lat 0°), cos 0° = 1, logo VL = 900 mi/h. Nos pólos (lat 90°), cos 90° = 0, logo VL = 0."
    },
    "Descreva um giroscópio básico": {
        "topic": "1.2 - Giroscópio",
        "explanation": "Conforme a apostila (Cap.1): 'Um giroscópio básico consiste de um rotor (disco) perfeitamente balanceado, livre para girar em torno de três (3) eixos perpendiculares entre si, que se interceptam no seu centro de gravidade. Diz-se assim, que o giroscópio tem três (3) graus de liberdade, constituídos pelas possibilidades de girar em torno de três (3) eixos, denominados respectivamente de eixo de rotação, eixo horizontal e eixo vertical.'"
    },
    "Defina Rigidez no espaço ou Inércia giroscópica": {
        "topic": "1.3 - Rigidez no espaço ou Inércia Giroscópica",
        "explanation": "Conforme a apostila (Cap.1): 'Rigidez no espaço ou Inércia giroscópica é a propriedade do giroscópio pela qual ele tenta manter o eixo do rotor paralelo a sua posição original. Esta propriedade é explicada pela lei do movimento (lei de NEWTON), a qual enuncia que um corpo em movimento continuará a se mover a uma velocidade constante na mesma direção até que ele sofra a ação de uma força externa.'"
    },
    "De quais fatores depende a inércia giroscópica": {
        "topic": "1.3 - Rigidez no espaço ou Inércia Giroscópica",
        "explanation": "Conforme a apostila: 'A inércia giroscópica depende da velocidade angular, do peso e do raio de rotação de cada massa elementar. O máximo efeito de inércia é conseguido com a massa concentrada próximo da borda.' Portanto, depende da velocidade de rotação do rotor, do raio de giro e da concentração da massa na periferia."
    },
    "Defina precessão": {
        "topic": "1.4 - Precessão",
        "explanation": "Conforme a apostila (Cap.1): 'Precessão é uma propriedade do giroscópio que causa a mudança de direção do eixo de rotação quando é aplicado um torque no rotor.' A precessão ocorre em ângulo de 90° em relação ao torque aplicado, na direção de rotação do volante."
    },
    "torque for aplicado em torno do eixo vertical": {
        "topic": "1.4 - Precessão",
        "explanation": "Conforme a apostila: 'Se o torque for aplicado sobre o eixo vertical, como mostrado por T na figura, o rotor gira ou precessiona em torno de seu eixo horizontal como mostrado pela seta P.' Essa é a regra fundamental da precessão: torque num eixo causa precessão no eixo perpendicular."
    },
    "rotor está montado no Equador com seu eixo de rotação apontado no sentido Leste": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Conforme a apostila: 'Se o observador estiver sobre a Terra, o rotor parecerá girar em torno do seu eixo horizontal com uma velocidade igual, mas a direção oposta à rotação da Terra (uma rotação 360° em 24 horas). Este efeito é comumente denominado Reite Horizontal da Terra (HER).'"
    },
    "rotor seja montado no Pólo Norte ou Pólo Sul": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Conforme a apostila: 'Igualmente supondo-se que o rotor seja montado no Pólo Norte ou Pólo Sul com seu eixo de rotação horizontal (nivelado com a superfície da Terra), o rotor parecerá girar em torno de seu eixo vertical. Este efeito é comumente chamado de Reite Vertical da Terra (VER).'"
    },
    "Qual Reite da terra é máximo no Equador e zero nos pólos": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Conforme a apostila: 'O efeito da Reite Horizontal da Terra (HER) é máximo no equador e zero nos pólos e varia com o co-seno da latitude.' Fórmula: HER = 15°/h × Cos(latitude). No Equador (lat 0°): HER = 15°/h × 1 = 15°/h (máximo). Nos Pólos (lat 90°): HER = 15°/h × 0 = 0."
    },
    "Qual Reite da terra é máximo nos pólos e zero no Equador": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Conforme a apostila: 'O efeito da Reite Vertical da Terra (VER) variará com o seno da latitude, sendo máximo nos pólos e zero no Equador.' Fórmula: VER = 15°/h × Sen(latitude). No Equador (lat 0°): VER = 0. Nos Pólos (lat 90°): VER = 15°/h (máximo)."
    },
    "HER em latitude 30": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Conforme a apostila, na latitude 30°: HER = 15°/h × Cos(30°) = 15°/h × 0,866 = 12,99°/h. A Reite Horizontal é máxima no equador e diminui conforme aumenta a latitude, pois varia com o co-seno."
    },
    "VER em latitude 30": {
        "topic": "1.5 - Rotação Aparente",
        "explanation": "Conforme a apostila, na latitude 30°: VER = 15°/h × Sen(30°) = 15°/h × 0,5 = 7,5°/h. A Reite Vertical aumenta com a latitude, pois varia com o seno."
    },
    "O GIROSCÓPIO COMO UMA AGULHA GIROSCÓPICA": {
        "topic": "1.6 - O Giroscópio como uma agulha giroscópica",
        "explanation": "Conforme a apostila: 'Para fazer de um giroscópio uma agulha giroscópica, é necessária fazê-lo procurar e manter a indicação do norte verdadeiro.' Para isso é preciso: a) fazer o eixo procurar o plano do meridiano; b) fazer o eixo nivelar; e c) fazê-lo manter sua posição uma vez encontrada."
    },
    "para procurar o meridiano": {
        "topic": "1.7 - Procurando o meridiano",
        "explanation": "Conforme a apostila: 'Para procurar o meridiano, um peso W é adicionado na parte inferior do anel vertical. Isto faz com que o anel vertical se torne pendular em relação ao eixo horizontal.' Quando a Terra gira, o anel se inclina e o peso cria um torque que força a precessão em direção ao meridiano."
    },
    "Para suprimir as oscilações": {
        "topic": "1.8 - Indicando o norte (Orientando-se no meridiano)",
        "explanation": "Conforme a apostila: 'Para suprimir as oscilações do rotor em torno do meridiano, um pequeno peso W1 é adicionado à esfera na qual o giroscópio está contido. Este peso é colocado no lado Leste da girosfera.' O peso W1 causa um efeito de amortecimento, reduzindo a oscilação elíptica a uma espiral que se estabiliza no meridiano."
    },
    "agulhas dotadas de girosfera": {
        "topic": "1.9 - Agulhas dotadas de girosfera",
        "explanation": "Conforme a apostila: 'As agulhas dotadas de girosfera são imersas em óleo especial e seu rotor gira em alta rotação no interior de uma esfera contendo gás hélio.' As vantagens incluem: flutuação neutra (remove o peso dos rolamentos), proteção contra choques, redução dos efeitos de aceleração, melhor condicionamento pelo hélio e proteção contra oxidação."
    },
    "balístico de líquido": {
        "topic": "1.9 - Agulhas dotadas de girosfera",
        "explanation": "Conforme a apostila: 'O balístico de óleo consiste de dois (2) reservatórios, interligados por um tubo, parcialmente cheios de óleo, montado na girosfera. Quando há uma inclinação do conjunto (devido a HER), o óleo se escoa para o reservatório mais baixo, aplicando um torque no rotor, fazendo o conjunto procurar o norte.' São usados nas agulhas MK-27, 227 etc."
    },
    "nível eletrolítico": {
        "topic": "1.9 - Agulhas dotadas de girosfera",
        "explanation": "Conforme a apostila: 'O nível eletrolítico consiste de um tubo de vidro, cilíndrico, contendo três (3) eletrodos de platina, parcialmente cheio de eletrólito, de modo a formar uma bolha de ar na parte superior do tubo.' Quando inclinado, a bolha se desloca criando desequilíbrio de resistência entre os eletrodos, gerando um sinal elétrico proporcional à inclinação."
    },
    "Produtor de torques": {
        "topic": "1.9 - Agulhas dotadas de girosfera",
        "explanation": "Conforme a apostila: O produtor de torques (torquer) consiste de uma estrutura tipo 'E' aberta de lâminas de ferro. O enrolamento central é o campo de referência (fixo), excitado pela linha de alimentação. Os enrolamentos laterais são os campos de controle, excitados pelo amplificador de torque. O campo magnético resultante atua sobre a superfície da girosfera para gerar torques de controle."
    },
    "Pickoff": {
        "topic": "1.9 - Agulhas dotadas de girosfera",
        "explanation": "Conforme a apostila: 'O Pickoff consiste de um núcleo de ferro laminado em forma de E com três enrolamentos e uma armadura de ferro móvel. O enrolamento central é o primário e os dois laterais são os secundários, enrolados em série e em oposição.' Quando a armadura está centrada, a saída é zero. Qualquer desalinhamento gera um sinal proporcional ao deslocamento. É usado como sensor de erro."
    },
    "erro devido à latitude": {
        "topic": "1.10 - Erros nas agulhas giroscópicas",
        "explanation": "Conforme a apostila: Em latitudes diferentes do Equador, a Reite Vertical da Terra (VER) faz com que a extremidade norte do eixo se desloque a Leste. Para corrigir, deve-se aplicar continuamente um sinal proporcional ao VER ao sistema de controle azimutal, causando uma precessão oposta. O controle de latitude é graduado de 0° a 90° norte e sul."
    },
    "erro devido à velocidade e rumo do navio": {
        "topic": "1.10 - Erros nas agulhas giroscópicas",
        "explanation": "Conforme a apostila: Em rumo norte ou sul, a velocidade do navio causa inclinação aparente do eixo do giroscópio, gerando erros de apontamento. Para corrigir, aplica-se um sinal igual à velocidade norte-sul do navio multiplicada pelo co-seno do rumo ao sistema de amortecimento. O controle de velocidade vai de 0 a 40 nós."
    },
    # ===== NAVEGAÇÃO INERCIAL (Cap. 2) =====
    "sistema de navegação inercial": {
        "topic": "2.2 - Navegação inercial",
        "explanation": "Conforme a apostila (Cap.2): 'Navegação inercial é o processo de determinar a posição do veículo (navio) e os seus movimentos com base na medida das suas acelerações em direções espaciais conhecidas.' Ela utiliza sensores inerciais (girômetros e acelerômetros) e não depende de referências externas, sendo autônoma."
    },
    "girômetro": {
        "topic": "2.4 - Girômetro",
        "explanation": "Conforme a apostila (Cap.2): 'Um girômetro em sua forma mais simples pode ser definido como um rotor montado sob uma estrutura que permite liberdade de inclinação do eixo de rotação em relação à base na qual está fixado. A estrutura mecânica é denominada gimbal (Suspensão Cardan).' O girômetro fornece variações de posição angular (velocidades angulares), diferentemente do giroscópio que fornece posição angular."
    },
    "Girômetro Sintonizado": {
        "topic": "2.4 - Girômetro",
        "explanation": "Conforme a apostila: 'O giro sintonizado é feito de maneira que o anel externo (Rotor) possua momento de inércia superior ao anel interno (Gimbal). Quando o conjunto gira, o rotor tende a manter seu plano de rotação. Uma mudança de orientação (Atitude) do conjunto gera uma oscilação até que os anéis assumam o novo plano de rotação.' O torque de reação é proporcional ao deslocamento angular, detectado por Pickoffs."
    },
    "Giro Eletrostático": {
        "topic": "2.4 - Girômetro",
        "explanation": "Conforme a apostila: 'O giro eletrostático (ESG) possui um rotor de esfera sólida (normalmente oca) de berílio, que gira a velocidades de dezenas de milhares de RPM (216.000 RPM) em um vácuo quase perfeito. O rotor é suspenso unicamente por um campo eletrostático.' Sem rolamentos mecânicos, é livre de atrito e representa a melhor aproximação ao giroscópio perfeito teórico."
    },
    "giro a laser": {
        "topic": "2.4 - Girômetro",
        "explanation": "Conforme a apostila: O giro a laser (RLG - Ring Laser Gyro) tem funcionamento baseado no princípio de Sagnac: dois feixes de laser percorrem um trajeto fechado em sentidos opostos. Quando o dispositivo gira, a diferença de fase entre os feixes é proporcional à velocidade de rotação. Vantagens: sem partes móveis, maior precisão, sem necessidade de manutenção, robusto e leve."
    },
    "giro à fibra ótica": {
        "topic": "2.4 - Girômetro",
        "explanation": "Conforme a apostila: 'Os giros à fibra ótica são os mais utilizados nos dias de hoje, devido ao seu baixo custo e suas qualidades técnicas. Assemelha-se ao giro a laser, com a diferença que o caminho fechado que o feixe de laser percorre é constituído de um enrolamento de fibras óticas.' Opera pelo mesmo princípio de Sagnac do giro a laser."
    },
    "acelerômetro": {
        "topic": "2.5 - Acelerômetro",
        "explanation": "Conforme a apostila: O acelerômetro é um sensor inercial que mede a aceleração específica (aceleração menos a gravidade) nas direções de seus eixos sensíveis. Em conjunto com os girômetros, os acelerômetros formam a base do Sistema de Navegação Inercial (SNI), permitindo calcular velocidade e posição do navio por integração das acelerações medidas."
    },
    "3 graus de liberdade": {
        "topic": "1.2 - Giroscópio",
        "explanation": "Conforme a apostila: 'Um giroscópio básico consiste de um rotor (disco) perfeitamente balanceado, livre para girar em torno de três (3) eixos perpendiculares entre si, que se interceptam no seu centro de gravidade. Diz-se assim, que o giroscópio tem três (3) graus de liberdade, constituídos pelas possibilidades de girar em torno de três (3) eixos: eixo de rotação, eixo horizontal e eixo vertical.'"
    },
    "eixo de rotação": {
        "topic": "1.2 - Giroscópio",
        "explanation": "Conforme a apostila: Os três eixos do giroscópio são: 1) Eixo de Rotação (Spin Axis) - o eixo em torno do qual o rotor gira; 2) Eixo Horizontal - permite inclinação vertical; 3) Eixo Vertical - permite rotação em azimute. Juntos formam os três graus de liberdade do giroscópio."
    },
    "rigidez giroscópica": {
        "topic": "1.3 - Rigidez no espaço ou Inércia Giroscópica",
        "explanation": "Conforme a apostila: 'A inércia giroscópica depende da velocidade angular, do peso e do raio de rotação de cada massa elementar. O máximo efeito de inércia é conseguido com a massa concentrada próximo da borda, deste fato o formato dos rotores empregados nas agulhas modernas.' A rigidez aumenta com: maior velocidade de rotação, maior massa e maior raio do rotor."
    },
    "CIAA": {
        "topic": "1.1 - Introdução",
        "explanation": "A apostila CIAA-117/037 é o manual didático do Centro de Instrução Almirante Alexandrino (CIAA), da Marinha do Brasil, que abrange: fundamentos teóricos de agulhas giroscópicas (Cap.1), fundamentos teóricos de navegação inercial (Cap.2) e o sistema de navegação inercial MK-39 (Cap.3)."
    },
    "quatro fenômenos": {
        "topic": "1.1 - Introdução",
        "explanation": "Conforme a apostila: 'Basicamente, uma agulha giroscópica depende de quatro (4) fenômenos naturais para sua operação.' Os dois primeiros são propriedades do giroscópio: (1) Rigidez no espaço (Inércia Giroscópica) e (2) Precessão. Os outros dois referem-se à Terra: (3) Força de gravidade e (4) Rotação da Terra (HER)."
    },
    "SNI": {
        "topic": "2.6 - Sistema de navegação inercial (SNI)",
        "explanation": "Conforme a apostila: O SNI (Sistema de Navegação Inercial) é composto por girômetros e acelerômetros. Os girômetros medem variações de posição angular, enquanto os acelerômetros medem acelerações. A integração das acelerações fornece velocidade, e a dupla integração fornece posição (latitude, longitude), de forma completamente autônoma, sem referências externas."
    },
    "MK-39": {
        "topic": "3.1 - Introdução ao MK-39",
        "explanation": "Conforme a apostila (Cap.3): O Sistema de Navegação Inercial MK-39 é um sistema instalado a bordo de navios da Marinha do Brasil, capaz de fornecer dados de rumo, posição (latitude e longitude), balanço e caturro para os sistemas de armas e sistemas integrados de navegação, operando de forma autônoma."
    },
}

def find_explanation(question_text, answer_text):
    q_lower = question_text.lower()
    for key, value in EXPLANATIONS.items():
        if key.lower() in q_lower:
            return value['topic'], value['explanation']
    # Fuzzy: check if key words appear in question
    answer_lower = answer_text.lower()
    for key, value in EXPLANATIONS.items():
        key_words = key.lower().split()
        matches = sum(1 for w in key_words if len(w) > 4 and w in q_lower or w in answer_lower)
        if matches >= 2:
            return value['topic'], value['explanation']
    return None, None

def main():
    questions, pre, post = load_questions()
    
    count_updated = 0
    for q in questions:
        topic, explanation = find_explanation(q['question'], q['answer'])
        if topic and explanation:
            q['topic'] = topic
            q['explanation'] = explanation
            count_updated += 1
        else:
            # Keep existing topic but improve explanation if it is a placeholder
            existing_exp = q.get('explanation', '')
            if 'pode ser encontrada' in existing_exp:
                # Build a generic but honest explanation based on the answer
                q['explanation'] = f"A alternativa correta é: '{q['answer'][:200]}'. Consulte o tópico '{q.get('topic', '')}' da apostila CIAA-117/037 para o detalhamento completo."
                
    save_questions(questions, pre, post)
    print(f"Done! Updated {count_updated} questions with detailed explanations.")

if __name__ == '__main__':
    main()
