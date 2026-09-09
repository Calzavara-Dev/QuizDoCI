import { Question } from "../types/question";

export const governoP2Questions: Question[] = [
  {
    "question": "Qual unidade no Passadiço provê a seleção do modo de governo e o controle do modo Principal?",
    "options": [
      "VCS 773",
      "VCS 775",
      "VCS 776",
      "VCS 777"
    ],
    "answer": "VCS 775",
    "explanation": "A Unidade de Piloto Automático ('VCS 777') armazena o ajuste fino dos ganhos automáticos como o Limite de Leme e a Tolerância de Desvio (Yaw)."
  },
  {
    "question": "Qual é o formato do controle manual utilizado na VCS 775?",
    "options": [
      "Joystick analógico",
      "Botões rotativos (Dials)",
      "Volante tradicional",
      "Manche (timão em formato de guidom de bicicleta)"
    ],
    "answer": "Manche (timão em formato de guidom de bicicleta)",
    "explanation": "A alternativa correta é o 'Manche (tipo guidom)'. 'Botões rotativos' (Dials) são usados na VCS 776 (Unidade de Ajuste de Rumo). 'Volantes tradicionais' e 'Joysticks' não são usados na VCS 775."
  },
  {
    "question": "Cada canal duplex de BB e BE na VCS 775 contém quais módulos eletrônicos?",
    "options": [
      "Transistor Q6, Capacitor C1 e Choke L1",
      "Linvar, Retificador Sensor de Fase (PSR) e Fonte de Alimentação (PSU)",
      "Sincro M3, Amplificador Buffer e Odômetro",
      "Relês RL15, Triacs e Diodos Zener"
    ],
    "answer": "Linvar, Retificador Sensor de Fase (PSR) e Fonte de Alimentação (PSU)",
    "explanation": "A resposta correta é 'Linvar, PSR e PSU'. A opção com 'Sincro M3 e Odômetro' é incorreta porque alimentam a VCS 777 e indicadores. 'Triacs' pertencem ao Heat Sink no painel a ré."
  },
  {
    "question": "Qual é a tensão recebida que alimenta os circuitos primários da VCS 775?",
    "options": [
      "12V CC",
      "24Vcc",
      "115V 60Hz",
      "115V 400Hz"
    ],
    "answer": "115V 400Hz",
    "explanation": "Como todos os indicadores de mostrador rotativo, o sincro M3 opera com tensão comercial marítima padrão de '115V 60Hz', diferente dos linvares eletrônicos (400Hz)."
  },
  {
    "question": "O que o movimento de deflexão do manche aciona mecanicamente na VCS 775?",
    "options": [
      "As chaves de tolerância S2 no PCB 52",
      "A solenóide direcional de controle no CML",
      "O eixo dos linvares M1 e M2",
      "O relê RL15 do painel traseiro"
    ],
    "answer": "O eixo dos linvares M1 e M2",
    "explanation": "O manche gira mecanicamente 'O eixo dos linvares M1 e M2'. As 'solenoides direcionais' ficam na máquina do leme, acionadas eletricamente. 'Relês' e 'Chaves S2 do PCB' são comandados por sinais elétricos ou componentes automatizados."
  },
  {
    "question": "O sinal 400Hz do linvar tem sua amplitude e polaridade definidas pelo quê?",
    "options": [
      "Amplitude pela velocidade do navio (odômetro) e polaridade pela chave S4.",
      "Amplitude pelo grau de deflexão e polaridade pela direção de movimento do manche.",
      "Amplitude fixada pelo Diodo Zener D1 e polaridade pela VCS 776.",
      "Ambas são fixas pela tensão primária de 115V 400Hz."
    ],
    "answer": "Amplitude pelo grau de deflexão e polaridade pela direção de movimento do manche.",
    "explanation": "O grau de deflexão dita a amplitude e o sentido da deflexão (BB ou BE) dita a fase/polaridade. O 'odômetro' atua no avanço de fase da VCS 777. Os 'Diodos Zener' apenas limitam as sobretensões reversas."
  },
  {
    "question": "Quem converte (retifica) a saída de 400Hz do linvar em um sinal CC de demanda de leme?",
    "options": [
      "O Amplificador Buffer (PCB 47)",
      "Os Diodos Zener D1 e D2",
      "A Fonte Estabilizada (PSU)",
      "O Retificador Sensor de Fase (PSR)"
    ],
    "answer": "O Retificador Sensor de Fase (PSR)",
    "explanation": "O 'Retificador Sensor de Fase (PSR)' converte os 400Hz alternados em CC. O 'Amplificador Buffer' apenas isola o sinal na VCS 777. A 'Fonte Estabilizada' provê as tensões de serviço das placas (+12V/-12V)."
  },
  {
    "question": "Se o manche for movido abruptamente para o esbarro durante o modo Automático, o que ocorre?",
    "options": [
      "O circuito Heat Sink corta os Triacs e soa o alarme 'Fora Giro'.",
      "O leme vai para 35 graus e a bomba desliga como segurança.",
      "O modo Automático é cancelado e o sistema reverte para Principal.",
      "A chave S4 (Compensador de Mau Tempo) é mecanicamente desarmada."
    ],
    "answer": "O modo Automático é cancelado e o sistema reverte para Principal.",
    "explanation": "A manobra abrupta cancela o 'Retém Auto' e reverte para o modo 'Principal'. Não desliga a bomba nem atua no 'Fora Giro', e a 'chave S4' não possui interligação de desarme mecânico pelo manche."
  },
  {
    "question": "Em qual ângulo (em graus) aproximadamente fica localizado esse esbarro mecânico do manche?",
    "options": [
      "10 graus",
      "25 graus",
      "34.5 graus",
      "45 graus"
    ],
    "answer": "34.5 graus",
    "explanation": "O esbarro fica aos '34.5 graus', quase no limite mecânico do leme (35 graus). '10 graus' é o máximo do compensador mecânico de mau tempo."
  },
  {
    "question": "Como o eixo do manche da VCS 775 é mantido no centro na condição de repouso?",
    "options": [
      "Pela excitação da solenóide de Retém Auto.",
      "Por duas molas mecânicas de centralização.",
      "Pelo atuador pneumático da Unidade RAS.",
      "Por fricção induzida pelo Amplificador Somador."
    ],
    "answer": "Por duas molas mecânicas de centralização.",
    "explanation": "A centralização no modo molas é mecânica, feita por 'duas molas'. A 'solenóide Retém Auto' apenas engaja a tecla no painel frontal. A 'Unidade RAS' e o 'Amplificador Somador' são componentes elétricos sem ação física sobre o eixo do manche."
  },
  {
    "question": "O botão de operação no manche possui duas posições (1 e 2). O que ocorre na posição 1?",
    "options": [
      "O manche retorna ao centro imediatamente por molas.",
      "O manche não retorna a meio após receber deflexão (opera por catraca).",
      "O limite do leme é cortado a 15 graus pelo PCB 7.",
      "A unidade RAS assume o controle de boreste."
    ],
    "answer": "O manche não retorna a meio após receber deflexão (opera por catraca).",
    "explanation": "Na Posição 1, atua o freio de catraca e o manche fica onde for deixado. A Posição 2 faria o manche 'retornar ao centro por molas'. O 'limite do leme' (PCB 7) é configurado apenas no Autopiloto (VCS 777)."
  },
  {
    "question": "Qual é o efeito do botão de controle de mau tempo no manche da VCS 775?",
    "options": [
      "Desliga a alimentação 24Vcc das lâmpadas de alarme.",
      "Desloca o centro elétrico do manche em até um máximo de 10 graus para BB ou BE.",
      "Injeta o sinal do odômetro diretamente nos Linvares M1 e M2.",
      "Aumenta o ganho de avanço de fase do Integrador no PCB 47."
    ],
    "answer": "Desloca o centro elétrico do manche em até um máximo de 10 graus para BB ou BE.",
    "explanation": "O botão mecânico desloca o ponto zero em até '10 graus' para compensar ventos constantes. O 'Odômetro' e o 'Avanço de fase no PCB 47' são processados eletronicamente na Unidade de Governo Automático (VCS 777)."
  },
  {
    "question": "Quando a deflexão do manche ultrapassa 33 graus, qual chave atua para retirar o sinal de \"retém auto\"?",
    "options": [
      "Chave S1",
      "Chave S2",
      "Chave S3",
      "Chave ODOM"
    ],
    "answer": "Chave S2",
    "explanation": "Chave S2 operada por uma came do eixo do manche atua aos 33 graus. A alternativa correta é \"Chave S2\"."
  },
  {
    "question": "No painel da VCS 775, quem comuta a seleção entre sistema Bombordo (BB) ou Boreste (BE)?",
    "options": [
      "Chave S3",
      "RL18",
      "VCS 772",
      "CML"
    ],
    "answer": "Chave S3",
    "explanation": "A Chave S3 do painel frontal da VCS 775. A alternativa correta é \"Chave S3\"."
  },
  {
    "question": "O sinal retificado de CC de saída do PSR é escalado para qual valor por grau de leme demandado?",
    "options": [
      "0,25V por grau",
      "1,0V por grau",
      "12V CC constantes",
      "0 a 35V lineares sem escala"
    ],
    "answer": "0,25V por grau",
    "explanation": "A tensão de retorno do PSR da placa à ré, lendo os linvares do feedback, é calibrada para '1,0V por grau' de deflexão do leme."
  },
  {
    "question": "Quais componentes realizam o \"amaciamento\" do sinal de saída no PSR?",
    "options": [
      "Os Resistores Shunt RV1 e RV2.",
      "Os Diodos Zener D1 e D2.",
      "Os Transistores Q6 e Q7 da PSU.",
      "O Capacitor C1 e o Choke L1."
    ],
    "answer": "O Capacitor C1 e o Choke L1.",
    "explanation": "O filtro passa-baixa que amacia o sinal retificado é composto pelo 'Capacitor C1 e Choke L1'. Os 'Diodos Zener' limitam picos reversos e os transistores 'Q6/Q7' são reguladores de tensão da fonte."
  },
  {
    "question": "Na placa de relês, os relês RL15 e RL18 são responsáveis por quê?",
    "options": [
      "Desarmar os Triacs do Heat Sink no caso de sobrecarga de corrente.",
      "Transferir automaticamente o controle para o bordo oposto se a alimentação de 115V 400Hz falhar.",
      "Engatar o volante manual em caso de falha das bombas 440V.",
      "Acionar as lâmpadas de 'Alarme Saiu de Rumo' no painel frontal."
    ],
    "answer": "Transferir automaticamente o controle para o bordo oposto se a alimentação de 115V 400Hz falhar.",
    "explanation": "Os relês RL15 e RL18 transferem o controle para o sistema redundante em caso de perda dos 115V 400Hz primários. O desarme do Heat Sink é feito pelo 'Triac de proteção CSR4', e o 'Alarme Saiu Rumo' provém do PCB 52."
  },
  {
    "question": "Quantos relês ficam alojados na unidade de Painel de Relês da VCS 775?",
    "options": [
      "Apenas 4",
      "7",
      "14",
      "24"
    ],
    "answer": "14",
    "explanation": "O painel de relês traseiro possui '14' relés. Valores menores (4, 7) referem-se a placas específicas ou transistores."
  },
  {
    "question": "Quais tensões de CC estabilizadas são providas pela Fonte Estabilizada da VCS 775?",
    "options": [
      "+5V e -5V",
      "+12V e -12V",
      "+24V e -24V",
      "+48V e GND"
    ],
    "answer": "+12V e -12V",
    "explanation": "A PSU regula as tensões em '+12V e -12V' usando os transistores Q6 e Q7 para os CIs analógicos operarem."
  },
  {
    "question": "Na fonte estabilizada, qual a faixa de ajuste possível para essas saídas (+12V/-12V) através de PVR1 e PVR2?",
    "options": [
      "De 0V a 5V",
      "De 9V a 15V",
      "De 12V a 24V",
      "São blindados e não ajustáveis."
    ],
    "answer": "De 9V a 15V",
    "explanation": "Através dos potenciômetros VR1 e VR2, as tensões são ajustáveis de '9V a 15V'. A opção 'não ajustável' é incorreta."
  },
  {
    "question": "O circuito \"Falha de Linha de Sinal\" (SLF) da VCS 775 detecta qual das anomalias abaixo?",
    "options": [
      "Nível baixo de óleo no tanque de expansão do CML.",
      "Falha do sinal do Sincro M3 que informa a repetidora VCS 59.",
      "Fiação do sinal de demanda com baixa/aberta para o painel à ré ou falha na tensão de 115V 400Hz.",
      "Falta do pulso de 24V no motor das bombas principais."
    ],
    "answer": "Fiação do sinal de demanda com baixa/aberta para o painel à ré ou falha na tensão de 115V 400Hz.",
    "explanation": "O circuito de Falha de Linha (SLF) monitora o 'ripple' do PSR de demanda para alertar fios quebrados/abertos ou queda da energia do Linvar. O 'Sincro M3' tem circuito de alarme próprio (Fora Giro)."
  },
  {
    "question": "A Unidade de Realimentação (Feedback Unit) é montada em qual tipo de compartimento?",
    "options": [
      "Gaiola telada com dissipação térmica a óleo.",
      "Painel montado com as válvulas hidráulicas direcionais.",
      "Compartimento de alumínio selado e sem ventilação.",
      "Módulo tipo rack removível no console do Passadiço."
    ],
    "answer": "Compartimento de alumínio selado e sem ventilação.",
    "explanation": "A Feedback Unit fica fisicamente conectada à madre do leme, montada em um 'Compartimento de alumínio selado e sem ventilação' resistente à umidade e sujeira do porão."
  },
  {
    "question": "Como a Unidade de Feedback percebe o movimento dos lemes?",
    "options": [
      "Pelo circuito pneumático das válvulas bypass.",
      "Acoplada diretamente à barra de ligação (madre) dos lemes através de uma alavanca.",
      "Pela medição do volume de óleo transferido entre os cilindros.",
      "Pela leitura do sinal do Sincro M3 via telemetria."
    ],
    "answer": "Acoplada diretamente à barra de ligação (madre) dos lemes através de uma alavanca.",
    "explanation": "A posição é detectada de forma mecânica rígida, 'acoplada à madre do leme' por alavanca. Válvulas, sensores de fluxo e telemetria não são os meios físicos de leitura de feedback direto dos linvares M1/M2."
  },
  {
    "question": "Qual a taxa do trem de engrenagem redutora existente dentro da Feedback Unit?",
    "options": [
      "1:1",
      "2:1",
      "4:1",
      "10:1"
    ],
    "answer": "2:1",
    "explanation": "O trem de engrenagens possui redução de '2:1' entre a alavanca da madre e os componentes eletromecânicos internos (Linvares e Sincro)."
  },
  {
    "question": "Quais são os componentes eletromecânicos geradores de sinal presentes dentro da Feedback Unit?",
    "options": [
      "Duas chaves fim de curso S2 e S3",
      "Dois linvares (M1, M2) e um sincro (M3)",
      "Duas bombas de vazão variável e um cilindro mestre",
      "Dois potenciômetros bobinados de 10k ohms"
    ],
    "answer": "Dois linvares (M1, M2) e um sincro (M3)",
    "explanation": "A Feedback Unit realimenta o sinal com 'Dois linvares (M1, M2)' para fechar a malha com o painel a ré e o piloto, e 'um sincro (M3)' para indicação visual. Não usa 'chaves fim de curso' (S2/S3 são chaves de esbarro do manche) ou 'potenciômetros'."
  },
  {
    "question": "O sincro (M3) na Feedback Unit envia sinal para qual destino?",
    "options": [
      "Para o amplificador somador.",
      "Para a solenoide de controle.",
      "Para os indicadores de Ângulo Real do leme.",
      "Para o VCS 776 de ajuste de rumo."
    ],
    "answer": "Para os indicadores de Ângulo Real do leme.",
    "explanation": "Fornece indicação de grau real. A alternativa correta é \"Para os indicadores de Ângulo Real do leme.\"."
  },
  {
    "question": "Qual a alimentação dos Linvares na unidade de feedback?",
    "options": [
      "115V 60Hz",
      "115V 400Hz",
      "24Vcc",
      "440V"
    ],
    "answer": "115V 400Hz",
    "explanation": "Linvares de controle usam 115V 400Hz. A alternativa correta é \"115V 400Hz\"."
  },
  {
    "question": "O sinal retificado de realimentação dos linvares da Feedback Unit é proporcionado em que escala?",
    "options": [
      "0.25V por grau",
      "0.5V por grau",
      "1.0V por grau",
      "5.0V por grau"
    ],
    "answer": "1.0V por grau",
    "explanation": "1.0V de saída CC por grau de leme. A alternativa correta é \"1.0V por grau\"."
  },
  {
    "question": "O sincro M3 recebe qual tensão de referência?",
    "options": [
      "115V 60Hz",
      "115V 400Hz",
      "24Vcc",
      "440V"
    ],
    "answer": "115V 60Hz",
    "explanation": "Sincros usam 115V 60Hz. A alternativa correta é \"115V 60Hz\"."
  },
  {
    "question": "O sistema permite a seleção do Governo Automático apenas se a chave no Painel a Ré (CML) e no CCM estiverem em quais posições?",
    "options": [
      "CML em REMOTE, CCM em Passadiço",
      "CML em LOCAL, CCM em Desligado",
      "CML em OFF, Passadiço em AUTO",
      "CCM em Passadiço, Passadiço em MANUAL"
    ],
    "answer": "CML em REMOTE, CCM em Passadiço",
    "explanation": "O governo automático só engaja se o navio estiver cedido fisicamente ao Passadiço: 'CML em REMOTE' (painel a ré obedece ao remoto) e 'CCM em Passadiço'."
  },
  {
    "question": "Qual é a diferença máxima exigida entre a proa e o rumo desejado para que o modo Auto engate (sinal Permite Auto)?",
    "options": [
      "Menos de 1 grau",
      "Menos de 4 ou 5 graus",
      "Até 10 graus",
      "Zero absoluto de diferença"
    ],
    "answer": "Menos de 4 ou 5 graus",
    "explanation": "Para evitar uma guinada brusca e perigosa (solavanco) ao passar para Automático, a diferença entre a proa real e a desejada deve ser 'Menos de 4 ou 5 graus'."
  },
  {
    "question": "Qual painel armazena os controles de Limite de Leme e Tolerância de Desvio para o modo Auto?",
    "options": [
      "VCS 775",
      "VCS 776",
      "VCS 777",
      "VCS 771"
    ],
    "answer": "VCS 777",
    "explanation": "A VCS 777 é a unidade do Autopiloto. A alternativa correta é \"VCS 777\"."
  },
  {
    "question": "O piloto automático opera com qual lógica de sistema?",
    "options": [
      "Malha aberta com atraso digital (Open loop)",
      "Malha fechada (Closed loop)",
      "Controle estocástico adaptativo",
      "Sistema Bang-Bang simples (On-Off)"
    ],
    "answer": "Malha fechada (Closed loop)",
    "explanation": "O piloto atua comparando constantemente o rumo ordenado com o rumo medido e medindo a ação corretiva aplicada, configurando uma típica 'Malha fechada' (Closed loop)."
  },
  {
    "question": "Onde ocorre o ajuste do rumo desejado (Manual Course Setting)?",
    "options": [
      "VCS 777",
      "VCS 776",
      "VCS 59",
      "VCS 221"
    ],
    "answer": "VCS 776",
    "explanation": "Na VCS 776 - Unidade de Ajuste de Rumo. A alternativa correta é \"VCS 776\"."
  },
  {
    "question": "O ajuste de rumo manual na VCS 776 é dividido em dois níveis. Quais são?",
    "options": [
      "Passos de 15º e ajuste fino de 0.5º",
      "Passos de 10º e ajuste contínuo sem vernier",
      "Precisão de 10º e tipo vernier com precisão de 1º",
      "Ajuste único por volante de grande porte"
    ],
    "answer": "Precisão de 10º e tipo vernier com precisão de 1º",
    "explanation": "O painel da VCS 776 usa um dial principal em dezenas ('Precisão de 10º') e um vernier para as unidades ('precisão de 1º')."
  },
  {
    "question": "Se o erro do tacogerador / giroscópica exceder 2 graus, qual alarme é gerado?",
    "options": [
      "Falha no Odômetro",
      "Falta da fase de 400Hz",
      "Falha de acompanhamento da giro",
      "Subtensão no Heat Sink"
    ],
    "answer": "Falha de acompanhamento da giro",
    "explanation": "A diferença excedente de 2 graus gera o alarme de 'Falha de acompanhamento da giro', indicando que o seguidor elétrico desengatou da leitura real do norte."
  },
  {
    "question": "O circuito de falha \"Fora de Rumo\" aciona o alarme se o erro exceder quais valores, dependendo da Yaw Switch?",
    "options": [
      "2º ou 4º",
      "6º ou 10º",
      "10º ou 15º",
      "35º ou 40º"
    ],
    "answer": "6º ou 10º",
    "explanation": "O limite é 6 ou 10 graus. A alternativa correta é \"6º ou 10º\"."
  },
  {
    "question": "Se o sinal linear de erro de rumo passa de 38 graus, o que a chave \"came\" faz para manter o erro na VCS 777?",
    "options": [
      "Desarma o sistema",
      "Insere um sinal fixo de 35V 400Hz para simular erro máximo contínuo",
      "Transfere para controle manual",
      "Inverte a polaridade"
    ],
    "answer": "Insere um sinal fixo de 35V 400Hz para simular erro máximo contínuo",
    "explanation": "A came aplica voltagem fixa máxima. A alternativa correta é \"Insere um sinal fixo de 35V 400Hz para simular erro máximo contínuo\"."
  },
  {
    "question": "O que o amplificador \"Buffer\" na entrada do erro de rumo faz?",
    "options": [
      "Aumenta a velocidade do leme",
      "Evita sobrecarga (carga pesada) no retificador sensor de fase",
      "Chaveia a energia do CML",
      "Desativa a agulha giroscópica"
    ],
    "answer": "Evita sobrecarga (carga pesada) no retificador sensor de fase",
    "explanation": "Atua como isolador/buffer elétrico. A alternativa correta é \"Evita sobrecarga (carga pesada) no retificador sensor de fase\"."
  },
  {
    "question": "Onde o avanço de fase (Phase Advance) recebe o sinal informando a inércia atual do navio?",
    "options": [
      "Da agulha giroscópica.",
      "Do Odômetro (Log encoder).",
      "Da Feedback Unit (Sincro M3).",
      "Do Compensador Automático de Mau Tempo."
    ],
    "answer": "Do Odômetro (Log encoder).",
    "explanation": "A inércia, calculada pela velocidade do navio para antecipar o contra-leme, vem do 'Odômetro' processada pela PCB 86 do Autopiloto."
  },
  {
    "question": "Qual o efeito de uma velocidade alta (odômetro) no circuito de avanço de fase?",
    "options": [
      "Eleva o ganho do integrador para maior deflexão de leme por grau de erro.",
      "Desativa temporariamente o piloto automático acima de 25 nós.",
      "Aumenta o retardo de ação, deixando o navio navegar mais solto.",
      "Reduz a resistência do avanço, diminuindo o tempo de resposta para injeção de contra-leme."
    ],
    "answer": "Reduz a resistência do avanço, diminuindo o tempo de resposta para injeção de contra-leme.",
    "explanation": "Se o navio for rápido, tem maior inércia hidrodinâmica; logo, a resistência elétrica cai ('reduz a resistência') para que o piloto injete o contra-leme mais rápido e o navio não 'passe direto' no rumo."
  },
  {
    "question": "O que a chave S1 da VCS 777 ajusta?",
    "options": [
      "Iluminação do console",
      "Tolerância de desvio",
      "Limite máximo do leme",
      "Compensação de mau tempo"
    ],
    "answer": "Limite máximo do leme",
    "explanation": "S1 ajusta os \"Limites do leme\" do piloto. A alternativa correta é \"Limite máximo do leme\"."
  },
  {
    "question": "O que a chave S2 da VCS 777 ajusta?",
    "options": [
      "O Limite de Leme.",
      "A velocidade de rotação da giroscópica.",
      "A Tolerância de Desvio (Yaw).",
      "A seleção entre os sistemas BB e BE."
    ],
    "answer": "A Tolerância de Desvio (Yaw).",
    "explanation": "A 'chave S2' controla a margem de ângulo (yaw) de oscilação permitida antes de acionar o leme, ou seja, a 'Tolerância de Desvio'."
  },
  {
    "question": "Qual a consequência de ajustar a Tolerância de Desvio para a posição \"MIN\"?",
    "options": [
      "O ganho atinge seu mínimo e o leme só atua com erros acima de 10º.",
      "A corrente da bomba diminui para economizar energia.",
      "O Auto desengata.",
      "O ganho do amplificador atinge seu nível máximo, reagindo ao mínimo desvio de proa."
    ],
    "answer": "O ganho do amplificador atinge seu nível máximo, reagindo ao mínimo desvio de proa.",
    "explanation": "Na posição MIN de Yaw, a tolerância ao erro é quase zero, tornando o circuito super sensível (ganho alto) para manter o navio extremamente travado no rumo num mar liso."
  },
  {
    "question": "Para cancelar o alarme visual \"Odom Alarme\", caso o odômetro falhe, o que se deve fazer na VCS 777?",
    "options": [
      "Desligar o disjuntor.",
      "Passar a chave S3 (Odom) para o ajuste manual correspondente à velocidade atual.",
      "Acionar o volante de emergência.",
      "Trocar para modo Principal."
    ],
    "answer": "Passar a chave S3 (Odom) para o ajuste manual correspondente à velocidade atual.",
    "explanation": "S3 chaveia a velocidade para entrada manual. A alternativa correta é \"Passar a chave S3 (Odom) para o ajuste manual correspondente à velocidade atual.\"."
  },
  {
    "question": "Para evitar solavancos brutais ao passar de Principal para Auto, qual componente retém a compensação de vento/corrente feita na mão?",
    "options": [
      "Relê Hand/Auto com circuito Integrador de Mau Tempo",
      "Amplificador Buffer",
      "Tacogerador M1-G1",
      "Transistor de Heat Sink"
    ],
    "answer": "Relê Hand/Auto com circuito Integrador de Mau Tempo",
    "explanation": "O Integrador armazena o \"Trim\" de mau tempo e usa ao iniciar o Auto. A alternativa correta é \"Relê Hand/Auto com circuito Integrador de Mau Tempo\"."
  },
  {
    "question": "Quantos cartões de circuito (PCBs) ficam instalados dentro da VCS 777 (sistema completo)?",
    "options": [
      "4",
      "9",
      "12",
      "18"
    ],
    "answer": "9",
    "explanation": "O módulo do Autopiloto VCS 777 é fisicamente povoado por '9' placas de circuito impresso com conectores de borda (edge connectors)."
  },
  {
    "question": "Em qual PCB fica alojado o \"Amplificador Buffer\" e o \"Amplificador Somador\"?",
    "options": [
      "PCB 7",
      "PCB 26",
      "PCB 47",
      "PCB 62"
    ],
    "answer": "PCB 47",
    "explanation": "O processamento vital do erro (Buffer, Somador, Avanço de Fase e Integrador) é concentrado na 'PCB 47' do Autopiloto."
  },
  {
    "question": "O PCB 52 aloja quais circuitos?",
    "options": [
      "Alarmes (Fora de Rumo, Falha Giro, Falha Odômetro)",
      "Fontes reguladas 12V",
      "Triacs de potência",
      "Codificador de log"
    ],
    "answer": "Alarmes (Fora de Rumo, Falha Giro, Falha Odômetro)",
    "explanation": "Aloja alarmes principais. A alternativa correta é \"Alarmes (Fora de Rumo, Falha Giro, Falha Odômetro)\"."
  },
  {
    "question": "O codificador de velocidade do odômetro e a lógica do Permite Auto estão em qual PCB?",
    "options": [
      "PCB 34",
      "PCB 31",
      "PCB 33",
      "PCB 52"
    ],
    "answer": "PCB 34",
    "explanation": "PCB 34 aloja Log Encoder e Permite Auto. A alternativa correta é \"PCB 34\"."
  },
  {
    "question": "Qual sinal autoriza o engrazamento da solenoide de \"Retém Auto\" na VCS 775?",
    "options": [
      "Sinal de erro de rumo acima de 38 graus.",
      "Pressão de óleo no máximo.",
      "Sinal de \"Permite Auto\" (-12V) do PCB 34.",
      "Falha de linha SLF."
    ],
    "answer": "Sinal de \"Permite Auto\" (-12V) do PCB 34.",
    "explanation": "Permite Auto com -12V autoriza Auto. A alternativa correta é \"Sinal de \"Permite Auto\" (-12V) do PCB 34.\"."
  },
  {
    "question": "A tolerância máxima de erro para gerar Permite Auto é inferior a qual valor?",
    "options": [
      "1 grau",
      "5 graus (aprox. 4º)",
      "15 graus",
      "30 graus"
    ],
    "answer": "5 graus (aprox. 4º)",
    "explanation": "Inferior a 5 graus, o texto cita 4°. A alternativa correta é \"5 graus (aprox. 4º)\"."
  },
  {
    "question": "Qual é a função da unidade RAS (Replenish At Sea)?",
    "options": [
      "Purificar o óleo hidráulico",
      "Mudar o rumo remotamente pelas \"Lais\" (Boreste/Bombordo) nas operações de reabastecimento no mar.",
      "Transferir óleo do CML.",
      "Trocar as bombas."
    ],
    "answer": "Mudar o rumo remotamente pelas \"Lais\" (Boreste/Bombordo) nas operações de reabastecimento no mar.",
    "explanation": "Comandar rumo das alas externas do navio. A alternativa correta é \"Mudar o rumo remotamente pelas \"Lais\" (Boreste/Bombordo) nas operações de reabastecimento no mar.\"."
  },
  {
    "question": "Na Unidade RAS, uma pulsação simples da chave de molas altera o rumo desejado em quantos graus?",
    "options": [
      "0,5 grau",
      "1 grau",
      "5 graus",
      "10 graus"
    ],
    "answer": "0,5 grau",
    "explanation": "Cada passo equivale a 0,5º. A alternativa correta é \"0,5 grau\"."
  },
  {
    "question": "Qual o valor máximo somado de ajuste que pode ser aplicado via RAS em um comando de manete?",
    "options": [
      "5 graus",
      "10 graus",
      "15 graus",
      "35 graus"
    ],
    "answer": "10 graus",
    "explanation": "O limite é 10 graus. A alternativa correta é \"10 graus\"."
  },
  {
    "question": "Qual a tensão usada nas solenoides rotativas da VCS 776 pelo sinal RAS?",
    "options": [
      "115V",
      "24Vcc (+24V)",
      "440V",
      "12V"
    ],
    "answer": "24Vcc (+24V)",
    "explanation": "+24V energiza os solenoides de passo da RAS. A alternativa correta é \"24Vcc (+24V)\"."
  },
  {
    "question": "No Aft Control Panel (Painel de Controle à Ré), qual a sua responsabilidade primária no processamento de sinal eletrônico do leme?",
    "options": [
      "Desligar o giroscópio.",
      "Computar a diferença entre o Sinal de Demanda (Auto/Principal) e o Sinal Real (Feedback Unit).",
      "Distribuir a força de 440V trifásico.",
      "Comandar os limpadores."
    ],
    "answer": "Computar a diferença entre o Sinal de Demanda (Auto/Principal) e o Sinal Real (Feedback Unit).",
    "explanation": "Comparar Demanda e Feedback e mandar o sinal pros Triacs. A alternativa correta é \"Computar a diferença entre o Sinal de Demanda (Auto/Principal) e o Sinal Real (Feedback Unit).\"."
  },
  {
    "question": "O sinal que faz essa soma de Demanda e Feedback fica localizado em qual circuito no Painel à Ré?",
    "options": [
      "Amplificador Somador (IC2a)",
      "Transistor FET de potência",
      "Relay Hand/Auto",
      "Sincro Receiver"
    ],
    "answer": "Amplificador Somador (IC2a)",
    "explanation": "IC2a é o Amplificador Somador. A alternativa correta é \"Amplificador Somador (IC2a)\"."
  },
  {
    "question": "O IC2a do Painel à Ré amplifica o sinal retificado (demanda + feedback) garantindo qual escala de saída em DC?",
    "options": [
      "0.25V por grau",
      "1.0V por grau",
      "5V por grau",
      "12V por grau"
    ],
    "answer": "1.0V por grau",
    "explanation": "Garante uma relação escalada de 1.0V por grau. A alternativa correta é \"1.0V por grau\"."
  },
  {
    "question": "Se a saída do Amplificador Somador no CML for menor que 0.25V (¼ de grau), como o \"Heat Sink\" comanda as solenoides hidráulicas?",
    "options": [
      "Envia pulso leve.",
      "Envia pulso contínuo.",
      "Nulo (a solenoide não é energizada, \"zona morta\").",
      "Aciona alarme."
    ],
    "answer": "Nulo (a solenoide não é energizada, \"zona morta\").",
    "explanation": "Em erros minúsculos <0.25V, não há reação. A alternativa correta é \"Nulo (a solenoide não é energizada, \"zona morta\").\"."
  },
  {
    "question": "Se o sinal do erro de leme estiver na faixa entre 0.25V e 3V, qual o tipo de sinal mandado para o Triac do Heat Sink?",
    "options": [
      "Nulo",
      "Contínuo",
      "Pulsante (pulso diminui conforme reduz o erro).",
      "Modulação em frequência 400Hz"
    ],
    "answer": "Pulsante (pulso diminui conforme reduz o erro).",
    "explanation": "Sinal pulsante. A alternativa correta é \"Pulsante (pulso diminui conforme reduz o erro).\"."
  },
  {
    "question": "Se o erro de leme for superior a 3V (3 graus), qual o comportamento do sinal no Triac?",
    "options": [
      "Nulo",
      "Pulsante",
      "Contínuo (A solenoide fica totalmente aberta até o erro baixar de 3 graus).",
      "Ocorrerá sobrecarga."
    ],
    "answer": "Contínuo (A solenoide fica totalmente aberta até o erro baixar de 3 graus).",
    "explanation": "O triac é mantido disparado continuamente. A alternativa correta é \"Contínuo (A solenoide fica totalmente aberta até o erro baixar de 3 graus).\"."
  },
  {
    "question": "O Heat Sink (PCB 32) protege o circuito de saída. Como ele atua em caso de sobrecorrente nas válvulas solenoides?",
    "options": [
      "Desliga o motor de 440V.",
      "Dispara o Triac CSR4 de proteção, cortando o sinal no Pino 2 do CSR5, o que desenergiza o relê RL1.",
      "Frita o fusível de vidro descartável.",
      "Engraza o volante manual."
    ],
    "answer": "Dispara o Triac CSR4 de proteção, cortando o sinal no Pino 2 do CSR5, o que desenergiza o relê RL1.",
    "explanation": "Dispara circuito que tira a alimentação de gate CSR5. A alternativa correta é \"Dispara o Triac CSR4 de proteção, cortando o sinal no Pino 2 do CSR5, o que desenergiza o relê RL1.\"."
  },
  {
    "question": "Ao atuar o circuito de sobrecarga do Heat Sink, qual será a consequência além de salvar os Triacs?",
    "options": [
      "Alarme sonoro \"Saiu Rumo\".",
      "Alarme sonoro pela perda da tensão de detecção 30V 400Hz no PCB 33.",
      "Reversão de bombas.",
      "Transferência do óleo pro tanque."
    ],
    "answer": "Alarme sonoro pela perda da tensão de detecção 30V 400Hz no PCB 33.",
    "explanation": "Gera alarme de falha do painel à ré/sistema. A alternativa correta é \"Alarme sonoro pela perda da tensão de detecção 30V 400Hz no PCB 33.\"."
  },
  {
    "question": "Qual o nome do componente de potência usado no Heat Sink para comutar as solenoides em corrente alternada?",
    "options": [
      "Resistor",
      "Transistor NPN",
      "Triac",
      "Diodo Zener"
    ],
    "answer": "Triac",
    "explanation": "Utiliza Triacs CSR5, etc. A alternativa correta é \"Triac\"."
  },
  {
    "question": "Como ocorre a Operação de Ação Direta comandada por estação remota via Painel à Ré?",
    "options": [
      "Amplificador IC2a é sobrecarregado.",
      "O relê RL3(S) de Auto/Principal desenergiza, desviando os sinais de 115V diretamente para os Triacs, ignorando a eletrônica proporcional.",
      "Os linvares geram voltagem máxima.",
      "A bomba gira ao contrário."
    ],
    "answer": "O relê RL3(S) de Auto/Principal desenergiza, desviando os sinais de 115V diretamente para os Triacs, ignorando a eletrônica proporcional.",
    "explanation": "A eletrônica é ignorada e os relés chaveiam a tensão direta. A alternativa correta é \"O relê RL3(S) de Auto/Principal desenergiza, desviando os sinais de 115V diretamente para os Triacs, ignorando a eletrônica proporcional.\"."
  },
  {
    "question": "Onde fica a placa que tem o filtro passa-baixa para retirar a \"sujeira\" (ripple de 400Hz) antes do Amplificador Somador no CML?",
    "options": [
      "PCB 31",
      "PCB 32",
      "PCB 33",
      "PCB 34"
    ],
    "answer": "PCB 31",
    "explanation": "A PCB 31 aloja os filtros passa-baixa. A alternativa correta é \"PCB 31\"."
  },
  {
    "question": "No circuito \"Retificador Sensor de Fase\" (PSR) da PCB 33 no Painel à Ré, o que limita a amplitude da tensão de referência negativa prevenindo Breakdown nos FETs?",
    "options": [
      "Relés rápidos",
      "Varistores",
      "Diodos Zener (D1 e D2) atuando em 43V.",
      "Fusíveis térmicos"
    ],
    "answer": "Diodos Zener (D1 e D2) atuando em 43V.",
    "explanation": "Os Zener grampeiam a tensão de referência para proteção. A alternativa correta é \"Diodos Zener (D1 e D2) atuando em 43V.\"."
  },
  {
    "question": "Quando a chave no painel à ré é movida para \"STBD\" (Boreste), de quem ela aceita os sinais de demanda diretos?",
    "options": [
      "Exclusivamente da VCS 773",
      "Do sistema Secundário de ré de Boreste",
      "Do Auto-Piloto de Bombordo",
      "Do passadiço em auto"
    ],
    "answer": "Do sistema Secundário de ré de Boreste",
    "explanation": "Fica restrita aos comandos secundários locais de Boreste. A alternativa correta é \"Do sistema Secundário de ré de Boreste\"."
  },
  {
    "question": "Em posições PORT (BB) e STBD (BE) da chave no CML, como ficam os sinais de demanda do Autopiloto/Principal?",
    "options": [
      "Amplificados 2x",
      "Ficam em circuito aberto (são ignorados).",
      "Disparam alarmes.",
      "Alimentam a RAS."
    ],
    "answer": "Ficam em circuito aberto (são ignorados).",
    "explanation": "Comandos remotos proporcionais ficam em aberto. A alternativa correta é \"Ficam em circuito aberto (são ignorados).\"."
  },
  {
    "question": "O que indica a Unidade VCS 771?",
    "options": [
      "Velocidade do navio",
      "Temperatura do Leme",
      "Indicador de Ângulo Desejado do Leme",
      "Indicador de Rumo Magnético"
    ],
    "answer": "Indicador de Ângulo Desejado do Leme",
    "explanation": "Mostra o ângulo \"demanda\" / Applied Rudder Angle. A alternativa correta é \"Indicador de Ângulo Desejado do Leme\"."
  },
  {
    "question": "Qual a calibração de escala da VCS 771?",
    "options": [
      "De 0 a 100 graus",
      "35 graus BB a 35 graus BE, com zero no centro",
      "0 a 359 graus",
      "-90 a +90 graus"
    ],
    "answer": "35 graus BB a 35 graus BE, com zero no centro",
    "explanation": "A escala típica de leme é 35º para cada bordo. A alternativa correta é \"35 graus BB a 35 graus BE, com zero no centro\"."
  },
  {
    "question": "Quais lâmpadas iluminam o dial da VCS 771?",
    "options": [
      "ILP1 e ILP2",
      "LP3",
      "D1 e D2",
      "L1"
    ],
    "answer": "ILP1 e ILP2",
    "explanation": "Duas lâmpadas chamadas ILP1 e ILP2. A alternativa correta é \"ILP1 e ILP2\"."
  },
  {
    "question": "Qual a tensão usada para suprir a lâmpada vermelha de indicação de força na VCS 771 (ILP3)?",
    "options": [
      "115V 400Hz",
      "24Vcc",
      "30V 60Hz",
      "5Vcc"
    ],
    "answer": "30V 60Hz",
    "explanation": "A alimentação desta lâmpada cai para 30V 60Hz. A alternativa correta é \"30V 60Hz\"."
  },
  {
    "question": "O receptor interno usado no dial da VCS 771 é do tipo:",
    "options": [
      "Linvar",
      "Potenciômetro rotativo",
      "Sincro Motor (Sincro receptor TR)",
      "Servo digital"
    ],
    "answer": "Sincro Motor (Sincro receptor TR)",
    "explanation": "Trata-se de um receptor sincro convencional. A alternativa correta é \"Sincro Motor (Sincro receptor TR)\"."
  },
  {
    "question": "Onde o sincro da VCS 771 recebe fisicamente seu sinal referencial de posição?",
    "options": [
      "Diretamente do Odômetro",
      "Do transmissor sincro M3 localizado na Unidade de Feedback no compartimento do leme.",
      "Do leme através de cabo de aço.",
      "Da bomba de BB."
    ],
    "answer": "Do transmissor sincro M3 localizado na Unidade de Feedback no compartimento do leme.",
    "explanation": "O sincro transmissor fica na Feedback Unit e o receptor na VCS 771. A alternativa correta é \"Do transmissor sincro M3 localizado na Unidade de Feedback no compartimento do leme.\"."
  },
  {
    "question": "O que a Unidade VCS 59 indica?",
    "options": [
      "O Ângulo Real do leme",
      "O Erro de giro",
      "A Velocidade",
      "O Rumo real do navio"
    ],
    "answer": "O Ângulo Real do leme",
    "explanation": "A VCS 59 mostra em que ângulo o leme efetivamente está. A alternativa correta é \"O Ângulo Real do leme\"."
  },
  {
    "question": "A escala do indicador VCS 59 é graduada em divisões de quantos graus?",
    "options": [
      "1 grau",
      "5 graus",
      "10 graus",
      "15 graus"
    ],
    "answer": "5 graus",
    "explanation": "Escala tem divisões de 5 graus para facilitar visualização. A alternativa correta é \"5 graus\"."
  },
  {
    "question": "Como é chamado o mecanismo de segurança do mostrador da VCS 59?",
    "options": [
      "Fail Safe",
      "Trip Leme",
      "\"Knock out\"",
      "Standby pointer"
    ],
    "answer": "\"Knock out\"",
    "explanation": "Mecanismo Knock out tira o ponteiro de vista em falha. A alternativa correta é \"\"Knock out\"\"."
  },
  {
    "question": "Qual é a função exata do mecanismo \"Knock out\"?",
    "options": [
      "Desligar as bombas do leme.",
      "Prevenir que o oficial leia uma indicação de ângulo de leme falsa (congelada) no caso de perda da tensão de suprimento do transmissor sincro.",
      "Vibrar caso o leme atinja o esbarro.",
      "Ativar o alarme da VCS 221."
    ],
    "answer": "Prevenir que o oficial leia uma indicação de ângulo de leme falsa (congelada) no caso de perda da tensão de suprimento do transmissor sincro.",
    "explanation": "Ele joga o ponteiro para fora da escala se a energia falhar, evitando leitura de dados mortos. A alternativa correta é \"Prevenir que o oficial leia uma indicação de ângulo de leme falsa (congelada) no caso de perda da tensão de suprimento do transmissor sincro.\"."
  },
  {
    "question": "Qual a energia usada para manter a solenoide Ledex (do Knock out) engrazada em operação normal?",
    "options": [
      "115V 400Hz",
      "440V",
      "12V",
      "24Vcc"
    ],
    "answer": "24Vcc",
    "explanation": "Utiliza os 24Vcc que alimentam o transmissor. A alternativa correta é \"24Vcc\"."
  },
  {
    "question": "Se houver perda dessa alimentação 24Vcc no indicador VCS 59, o ponteiro de indicação do leme se moverá para onde?",
    "options": [
      "Trava no centro (zero)",
      "Trava em Bombordo",
      "Gira puxado pela mola para Boreste até sair da tela",
      "Cai para o fundo"
    ],
    "answer": "Gira puxado pela mola para Boreste até sair da tela",
    "explanation": "Ele é tracionado para Boreste (STBD. A alternativa correta é \"Gira puxado pela mola para Boreste até sair da tela\"."
  },
  {
    "question": "De qual componente o ponteiro da VCS 59 extrai seu movimento natural de acompanhamento do leme?",
    "options": [
      "Motor sincro receptor (M1) montado com escovas coletoras.",
      "Engrenagem acoplada a um motor de passo.",
      "Amperímetro aferido.",
      "Corda e polia fina vinda do CML."
    ],
    "answer": "Motor sincro receptor (M1) montado com escovas coletoras.",
    "explanation": "Usa um motor sincro receptor. A alternativa correta é \"Motor sincro receptor (M1) montado com escovas coletoras.\"."
  },
  {
    "question": "Durante uma prova ou calibração de bancada na VCS 59, o técnico insere energia em quais pinos/terminais para testar o sistema?",
    "options": [
      "115V na rede AC",
      "16VCC nas linhas 1, 2 e 3",
      "440V direto",
      "24Vcc usando pinos 31 e 32"
    ],
    "answer": "16VCC nas linhas 1, 2 e 3",
    "explanation": "Na bancada o teste é executado fornecendo voltagens contínuas 16VCC escaladas nas pernas. A alternativa correta é \"16VCC nas linhas 1, 2 e 3\"."
  },
  {
    "question": "Ao testar o indicador VCS 59 em substituição, o que deve ser conferido?",
    "options": [
      "A cor da lâmpada.",
      "O alinhamento sonoro.",
      "O deslocamento do ponteiro por todas as posições ao se mover a madre do leme.",
      "Se a buzina é alta o suficiente."
    ],
    "answer": "O deslocamento do ponteiro por todas as posições ao se mover a madre do leme.",
    "explanation": "Verifica-se o rastreio fluído de BB para BE em toda a faixa. A alternativa correta é \"O deslocamento do ponteiro por todas as posições ao se mover a madre do leme.\"."
  },
  {
    "question": "O mostrador iluminado da VCS 59 utiliza lâmpadas de quantos Volts?",
    "options": [
      "5V",
      "12V",
      "28V",
      "115V"
    ],
    "answer": "28V",
    "explanation": "Usa 2 lâmpadas de 28V. A alternativa correta é \"28V\"."
  },
  {
    "question": "A fonte de alimentação (console externo) para as lâmpadas da VCS 59 (iluminação do dial) pode ser regulada até qual voltagem máxima?",
    "options": [
      "12V",
      "24V",
      "35V",
      "115V"
    ],
    "answer": "35V",
    "explanation": "Fonte dimerizável até 35V, ligada em série com resistor de 680 ohm. A alternativa correta é \"35V\"."
  },
  {
    "question": "Qual o modelo do sincro receptor no painel VCS 59?",
    "options": [
      "Tipo-M, Mk 8 ou Mk 6.",
      "NEMA 17.",
      "Servo S5.",
      "PSR Mk 3."
    ],
    "answer": "Tipo-M, Mk 8 ou Mk 6.",
    "explanation": "Conforme documentação de teste, usa padrão Tipo-M ou Mk 8/Mk 6. A alternativa correta é \"Tipo-M, Mk 8 ou Mk 6.\"."
  },
  {
    "question": "Qual o propósito de utilizar o transformador isolador T3A e resistores no PCB 33 (CML)?",
    "options": [
      "Gerar 440V.",
      "Grampear e amoldar tensões de referência do circuito PSR para impedir tensões reversas destrutivas nos transistores de efeito de campo.",
      "Alimentar a buzina.",
      "Retificar onda quadrada."
    ],
    "answer": "Grampear e amoldar tensões de referência do circuito PSR para impedir tensões reversas destrutivas nos transistores de efeito de campo.",
    "explanation": "Prevenir breakdown dos FETs no semi-ciclo negativo. A alternativa correta é \"Grampear e amoldar tensões de referência do circuito PSR para impedir tensões reversas destrutivas nos transistores de efeito de campo.\"."
  },
  {
    "question": "A unidade \"Log Encoder\" no Autopiloto processa a velocidade em:",
    "options": [
      "Um sinal analógico em escala progressiva infinita.",
      "4 estágios de transistores que acionam saídas em steps conforme a tensão suba de 0.9V a +1.6V.",
      "Ondas de rádio FM.",
      "Mecanismo de came rotativa."
    ],
    "answer": "4 estágios de transistores que acionam saídas em steps conforme a tensão suba de 0.9V a +1.6V.",
    "explanation": "O circuito chaveia 4 estágios detectores de nível baseados na tensão. A alternativa correta é \"4 estágios de transistores que acionam saídas em steps conforme a tensão suba de 0.9V a +1.6V.\"."
  },
  {
    "question": "A VCS 777 (Piloto) é considerada duplex. O que isso implica no seu design interior?",
    "options": [
      "Funciona com 220V.",
      "Apenas BB ou BE podem atuar, e há cartões de circuito redundantes para cada bordo.",
      "Só usa 2 antenas.",
      "É composta de 2 volantes."
    ],
    "answer": "Apenas BB ou BE podem atuar, e há cartões de circuito redundantes para cada bordo.",
    "explanation": "Ela possui PCBs independentes e repetidos para BB e BE. A alternativa correta é \"Apenas BB ou BE podem atuar, e há cartões de circuito redundantes para cada bordo.\"."
  },
  {
    "question": "O erro do rumo \"fora de giro\" ativa qual alarme quando desvia >2º?",
    "options": [
      "Buzina manual",
      "Fumaça",
      "Sobrecarga de tensão do conversor",
      "Falha de acompanhamento do tacogerador ou giroscópica"
    ],
    "answer": "Falha de acompanhamento do tacogerador ou giroscópica",
    "explanation": "Quando o sincro desvia mecanicamente/eletricamente mais que 2º da agulha giroscópica-mãe, dispara o alarme de 'Falha de acompanhamento do tacogerador ou giroscópica'."
  },
  {
    "question": "A lógica comparadora \"Permite Auto\" funciona usando quais componentes?",
    "options": [
      "As molas de centralização do manche.",
      "Os Transistores PAQ1 a PAQ4 e o circuito de diodo retificador PAD2.",
      "Relés termomagnéticos de retardo.",
      "Chaves pneumáticas de fluxo."
    ],
    "answer": "Os Transistores PAQ1 a PAQ4 e o circuito de diodo retificador PAD2.",
    "explanation": "A condição rigorosa de engate elétrico ('Permite Auto') é sensoreada pelos 'Transistores PAQ1/PAQ4' em conjunto com diodos de limiar na casa de 0.1V, sem uso de relés de retardo."
  },
  {
    "question": "No Painel de Relês da VCS 775, os relês comutadores atuam usando qual tensão principal de bobina na maioria do projeto?",
    "options": [
      "Apenas 220V AC",
      "115V 400Hz rebaixado ou 24Vcc.",
      "Pneumática a 100 PSI",
      "Tensão contínua pulsada de 440V"
    ],
    "answer": "115V 400Hz rebaixado ou 24Vcc.",
    "explanation": "A eletrônica do painel de controle e reles utiliza a tensão auxiliar transformada '115V 400Hz rebaixada ou 24Vcc'. 440V ou tensões pneumáticas são para a força motriz, não para bobinas de controle lógico."
  },
  {
    "question": "A tensão regulada estabilizada de -12V que atua no integrador de auto é ajustada em qual placa?",
    "options": [
      "PSU na VCS 775.",
      "CML.",
      "Alarmes da VCS 221.",
      "Na bomba."
    ],
    "answer": "PSU na VCS 775.",
    "explanation": "É função do módulo da PSU - Unidade de alimentação. A alternativa correta é \"PSU na VCS 775.\"."
  },
  {
    "question": "Se falhar o suprimento 115V 400Hz no CML (Máquina de Leme), para quem é transferida automaticamente a função de governo?",
    "options": [
      "Para outro gerador diesel.",
      "Para a seleção Remota, desenergizando os relês e desfazendo a lógica elétrica local.",
      "Ele para o navio.",
      "Ele aciona as baterias 24V e o auto assume."
    ],
    "answer": "Para a seleção Remota, desenergizando os relês e desfazendo a lógica elétrica local.",
    "explanation": "Em falha severa, o intertravamento isola para \"Remoto\" e repassa controle. A alternativa correta é \"Para a seleção Remota, desenergizando os relês e desfazendo a lógica elétrica local.\"."
  },
  {
    "question": "Na realimentação do leme (CML), o \"Ripple de 400Hz\" induzido é um defeito ou um método de proteção de SLF?",
    "options": [
      "Um defeito elétrico grave no CML.",
      "É usado como portadora vital de 'vida/falha de linha'; se o ripple sumir, dispara o alarme SLF.",
      "Um eco harmônico vindo dos reatores fluorescentes.",
      "O sinal do radar acoplando nos cabos do leme."
    ],
    "answer": "É usado como portadora vital de 'vida/falha de linha'; se o ripple sumir, dispara o alarme SLF.",
    "explanation": "O 'Ripple' não é defeito; o circuito SLF espiona ele ativamente. Se o fio quebrar ('linha aberta'), o ripple de 400Hz retificado cessa, e o SLF grita o alarme (System Line Failure)."
  },
  {
    "question": "A unidade de Ajuste de Rumo manual \"Vernier\" da VCS 776 permite sintonia fina de até:",
    "options": [
      "0.1 grau.",
      "1 grau.",
      "5 graus.",
      "10 graus."
    ],
    "answer": "1 grau.",
    "explanation": "O vernier da VCS 776 é extremamente preciso, ajustando o detalhe em passos finos ('vernier') de '1 grau' enquanto o dial maior gira as dezenas."
  },
  {
    "question": "Quando o botão da RAS é pressionado no convés, as válvulas rotativas do piloto viram qual componente no VCS 776?",
    "options": [
      "As bombas hidráulicas principais 1 e 2.",
      "A solenóide bypass do cilindro passivo.",
      "O eixo de ajuste de rumo através das solenoides rotativas M2/M3.",
      "Os botões de Pânico no CCM."
    ],
    "answer": "O eixo de ajuste de rumo através das solenoides rotativas M2/M3.",
    "explanation": "A RAS age remotamente e aciona diretamente as pequenas 'solenoides rotativas M2/M3' que por sua vez giram o eixo na VCS 776, ditando o novo rumo sem o homem pôr a mão no painel."
  },
  {
    "question": "Por que existe um bloqueio mecânico que inibe a tecla AUTO na VCS 775 (Operada pela solenoide \"Permite Auto S1A\")?",
    "options": [
      "Para forçar a checagem do log de navegação.",
      "Para impedir fisicamente que o oficial engate o Autopiloto enquanto a proa e o rumo exigido possuam erro grande (> 4/5 graus), evitando um soco violento no leme.",
      "Para acoplar os triacs do heat sink.",
      "Para isolar o circuito de 24Vcc temporariamente."
    ],
    "answer": "Para impedir fisicamente que o oficial engate o Autopiloto enquanto a proa e o rumo exigido possuam erro grande (> 4/5 graus), evitando um soco violento no leme.",
    "explanation": "O interloque mecânico do botão defende o sistema de si mesmo; não permite apertar AUTO se a agulha e a proa estiverem discordando mais de 4 ou 5 graus, o que daria uma guinada instantânea perigosa."
  },
  {
    "question": "Quais os ajustes que devem ser feitos pelo timoneiro antes de selecionar o piloto automático?",
    "options": [
      "Pressão da bomba, temperatura do óleo e ventilação.",
      "Limite de leme, Tolerância de desvio e Sinal do odômetro.",
      "Luzes do console, Rumo magnético e Alarme sonoro.",
      "Odômetro, Compensador de vento e Sirene de bombordo."
    ],
    "answer": "Limite de leme, Tolerância de desvio e Sinal do odômetro.",
    "explanation": "Antes de acionar o Auto, o timoneiro ajusta S1 (Limite), S2 (Tolerância) e S3 (Odômetro) na VCS 777. A alternativa correta é \"Limite de leme, Tolerância de desvio e Sinal do odômetro.\"."
  },
  {
    "question": "Na unidade VCS 777, o que é a Tolerância de Desvio?",
    "options": [
      "É a diferença de tensão entre as duas bombas.",
      "É a margem de erro permitida para o odômetro falhar.",
      "É a quantidade de graus que o navio sai do rumo sem que o sistema corrija.",
      "É o atraso em segundos para o leme começar a atuar."
    ],
    "answer": "É a quantidade de graus que o navio sai do rumo sem que o sistema corrija.",
    "explanation": "Tolerância de desvio define a folga angular antes do Piloto atuar. A alternativa correta é \"É a quantidade de graus que o navio sai do rumo sem que o sistema corrija.\"."
  },
  {
    "question": "Quais os valores de limite de leme (chave S1) que podem ser inseridos pelo timoneiro na VCS 777?",
    "options": [
      "1, 2, 3, 4, 5, 6, 7, 8 e 9.",
      "10, 20, 30, 40 e 50.",
      "2 ½, 5, 7 ½, 10, 15, 20, 25, 30 e 35.",
      "Apenas valores inteiros entre 0 e 35."
    ],
    "answer": "2 ½, 5, 7 ½, 10, 15, 20, 25, 30 e 35.",
    "explanation": "A chave S1 tem esses 9 degraus exatos. A alternativa correta é \"2 ½, 5, 7 ½, 10, 15, 20, 25, 30 e 35.\"."
  },
  {
    "question": "Quais os alarmes que têm sua indicação visual no painel frontal da VCS 775?",
    "options": [
      "Bomba 1 e Bomba 2 Inoperantes.",
      "Fogo, Inundação e Fumaça.",
      "Fora giro, saiu rumo, e falhas dos circuitos de alimentação de BB e BE.",
      "Apenas Saiu Rumo e Fora Giro."
    ],
    "answer": "Fora giro, saiu rumo, e falhas dos circuitos de alimentação de BB e BE.",
    "explanation": "A VCS 775 indica esses 4 alarmes específicos. A alternativa correta é \"Fora giro, saiu rumo, e falhas dos circuitos de alimentação de BB e BE.\"."
  },
  {
    "question": "De quais formas o modo de Governo Principal pode ser selecionado?",
    "options": [
      "Apenas pressionando a tecla Principal no painel.",
      "Desligando as bombas e acionando o volante.",
      "Calcando a tecla, levando o timão ao esbarro, quando Auto/Ângulos não estão selecionados, ou quando Auto é cancelado por falhas.",
      "Automaticamente caso o navio passe de 20 nós."
    ],
    "answer": "Calcando a tecla, levando o timão ao esbarro, quando Auto/Ângulos não estão selecionados, ou quando Auto é cancelado por falhas.",
    "explanation": "Existem quatro maneiras principais de cair no modo Principal. A alternativa correta é \"Calcando a tecla, levando o timão ao esbarro, quando Auto/Ângulos não estão selecionados, ou quando Auto é cancelado por falhas.\"."
  },
  {
    "question": "De que depende a energização dos 14 relés instalados no painel de relés da VCS 775?",
    "options": [
      "Da temperatura do óleo e do vento aparente.",
      "Do modo de governo selecionado, das condições de controle e das condições de alarmes.",
      "Da tensão das baterias do navio apenas.",
      "Dos geradores de emergência."
    ],
    "answer": "Do modo de governo selecionado, das condições de controle e das condições de alarmes.",
    "explanation": "A lógica eletromecânica dos relés obedece a essas três condições operacionais. A alternativa correta é \"Do modo de governo selecionado, das condições de controle e das condições de alarmes.\"."
  },
  {
    "question": "Para onde vai o sinal de saída da Unidade de FEEDBACK do sistema de governo?",
    "options": [
      "Para os atuadores das bombas principais.",
      "Para a agulha giroscópica.",
      "Para o amplificador somador no Painel de Controle a Ré e indicador do ângulo desejado no CCM e Passadiço.",
      "Exclusivamente para a unidade RAS."
    ],
    "answer": "Para o amplificador somador no Painel de Controle a Ré e indicador do ângulo desejado no CCM e Passadiço.",
    "explanation": "Os dois linvares vão pro somador, e o sincro vai pros indicadores. A alternativa correta é \"Para o amplificador somador no Painel de Controle a Ré e indicador do ângulo desejado no CCM e Passadiço.\"."
  },
  {
    "question": "Qual a função do Cartão de Referência PCB 7 na VCS 777?",
    "options": [
      "Limita a saída do sinal de demanda ao valor selecionado na chave de tolerância de desvio (S2).",
      "Gera o sinal 400Hz para os Sincros.",
      "Monitora a alimentação do Odômetro.",
      "Comuta automaticamente para controle manual."
    ],
    "answer": "Limita a saída do sinal de demanda ao valor selecionado na chave de tolerância de desvio (S2).",
    "explanation": "O PCB 7 atua bloqueando ou limitando a demanda baseada no Yaw (S2). A alternativa correta é \"Limita a saída do sinal de demanda ao valor selecionado na chave de tolerância de desvio (S2).\"."
  },
  {
    "question": "O que ocorre com a solenóide de Retenção de AUTO quando o modo Principal é selecionado ou ocorre uma falha no sinal 'Retém Auto'?",
    "options": [
      "Ela aumenta sua tensão para 35V.",
      "Ela desarma a chave Odômetro.",
      "Será desenergizada, cancelando a condição de Governo Automático.",
      "Aciona as buzinas de colisão."
    ],
    "answer": "Será desenergizada, cancelando a condição de Governo Automático.",
    "explanation": "Qualquer das 4 condições (Principal, Ângulos, Esbarro, Falha no Retém) desenergiza a solenóide, derrubando o Auto. A alternativa correta é \"Será desenergizada, cancelando a condição de Governo Automático.\"."
  },
  {
    "question": "Quando a tecla ÂNGULOS for calcada na chave S1 da VCS 775, o que ocorre internamente?",
    "options": [
      "As bombas hidráulicas aumentam o fluxo.",
      "O piloto automático acopla com o odômetro.",
      "A solenóide de retém ângulos será energizada pela alimentação de 115V 60Hz que estiver selecionada (BB ou BE).",
      "O navio altera o rumo em 5 graus automaticamente."
    ],
    "answer": "A solenóide de retém ângulos será energizada pela alimentação de 115V 60Hz que estiver selecionada (BB ou BE).",
    "explanation": "A tecla aciona a solenóide com os 115V 60Hz correspondentes ao sistema engajado. A alternativa correta é \"A solenóide de retém ângulos será energizada pela alimentação de 115V 60Hz que estiver selecionada (BB ou BE).\"."
  }
];
