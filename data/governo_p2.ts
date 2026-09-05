import { Question } from "../types/question";

export const governoP2Questions: Question[] = [
  {
    "question": "Qual unidade no Passadiço provê a seleção do modo de governo e o controle do modo Principal?",
    "options": [
      "VCS 773",
      "VCS 775",
      "VCS 777",
      "VCS 772"
    ],
    "answer": "VCS 775",
    "explanation": "VCS 775 - Unidade de Governo Manual. A alternativa correta é \"VCS 775\"."
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
    "explanation": "Possui um manche tipo bicicleta. A alternativa correta é \"Manche (timão em formato de guidom de bicicleta)\"."
  },
  {
    "question": "Cada canal duplex de BB e BE na VCS 775 contém quais módulos eletrônicos?",
    "options": [
      "Transistor, Resistor e Capacitor",
      "Linvar, Retificador Sensor de Fase (PSR) e Fonte de Alimentação (PSU)",
      "Sincro, Conversor A/D e Odômetro",
      "Amplificador, Diodo e Triac"
    ],
    "answer": "Linvar, Retificador Sensor de Fase (PSR) e Fonte de Alimentação (PSU)",
    "explanation": "Linvar, PSR e PSU. A alternativa correta é \"Linvar, Retificador Sensor de Fase (PSR) e Fonte de Alimentação (PSU)\"."
  },
  {
    "question": "Qual é a tensão recebida que alimenta os circuitos primários da VCS 775?",
    "options": [
      "24Vcc",
      "115V 60Hz",
      "115V 400Hz",
      "440V 60Hz"
    ],
    "answer": "115V 400Hz",
    "explanation": "Tensão de 115V 400Hz, separada por canal. A alternativa correta é \"115V 400Hz\"."
  },
  {
    "question": "O que o movimento de deflexão do manche aciona mecanicamente na VCS 775?",
    "options": [
      "Um pressostato",
      "Uma solenoide direcional",
      "O eixo dos linvares",
      "O relê RL15"
    ],
    "answer": "O eixo dos linvares",
    "explanation": "Aciona engrenagens alinhadas aos linvares. A alternativa correta é \"O eixo dos linvares\"."
  },
  {
    "question": "O sinal 400Hz do linvar tem sua amplitude e polaridade definidas pelo quê?",
    "options": [
      "Amplitude pela velocidade do navio e polaridade pelo odômetro.",
      "Amplitude pelo grau de deflexão e polaridade pela direção de movimento do manche.",
      "Ambas são fixas.",
      "Amplitude é ajustada pela VCS 777 e polaridade fixa."
    ],
    "answer": "Amplitude pelo grau de deflexão e polaridade pela direção de movimento do manche.",
    "explanation": "Deflexão dita a amplitude e direção dita a polaridade/fase. A alternativa correta é \"Amplitude pelo grau de deflexão e polaridade pela direção de movimento do manche.\"."
  },
  {
    "question": "Quem converte (retifica) a saída de 400Hz do linvar em um sinal CC de demanda de leme?",
    "options": [
      "Amplificador buffer",
      "Diodos Zener D1 e D2",
      "Fonte Estabilizada",
      "Retificador Sensor de Fase (PSR)"
    ],
    "answer": "Retificador Sensor de Fase (PSR)",
    "explanation": "PSR retifica gerando a demanda em corrente contínua. A alternativa correta é \"Retificador Sensor de Fase (PSR)\"."
  },
  {
    "question": "Se o manche for movido abruptamente para o esbarro durante o modo Automático, o que ocorre?",
    "options": [
      "Dispara o alarme sonoro apenas.",
      "O leme trava e a bomba desliga.",
      "O modo Automático é cancelado e o sistema reverte para Principal.",
      "A chave Yaw desarma."
    ],
    "answer": "O modo Automático é cancelado e o sistema reverte para Principal.",
    "explanation": "Um movimento abrupto ao esbarro cancela o modo Automático. A alternativa correta é \"O modo Automático é cancelado e o sistema reverte para Principal.\"."
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
    "explanation": "O esbarro fica na altura de ~34.5 graus. A alternativa correta é \"34.5 graus\"."
  },
  {
    "question": "Como o eixo do manche da VCS 775 é mantido no centro na condição de repouso?",
    "options": [
      "Por travamento magnético.",
      "Por duas molas de centralização.",
      "Pela pressão do óleo.",
      "Por fricção de cabos."
    ],
    "answer": "Por duas molas de centralização.",
    "explanation": "Duas molas centralizam o eixo do manche. A alternativa correta é \"Por duas molas de centralização.\"."
  },
  {
    "question": "O botão de operação no manche possui duas posições (1 e 2). O que ocorre na posição 1?",
    "options": [
      "O manche retorna ao centro imediatamente.",
      "O manche não retorna a meio após receber deflexão (fica travado).",
      "O leme vai para o limite máximo de boreste.",
      "O navio muda para modo Secundário."
    ],
    "answer": "O manche não retorna a meio após receber deflexão (fica travado).",
    "explanation": "Na posição 1, o manche não retorna ao meio por ação das molas. A alternativa correta é \"O manche não retorna a meio após receber deflexão (fica travado).\"."
  },
  {
    "question": "Qual é o efeito do botão de controle de mau tempo no manche da VCS 775?",
    "options": [
      "Desliga as bombas de 440V.",
      "Desloca o centro do manche em até um máximo de 10 graus para BB ou BE.",
      "Aciona os limpadores de para-brisas.",
      "Aumenta o ganho de avanço de fase."
    ],
    "answer": "Desloca o centro do manche em até um máximo de 10 graus para BB ou BE.",
    "explanation": "Desloca o centro em até 10 graus. A alternativa correta é \"Desloca o centro do manche em até um máximo de 10 graus para BB ou BE.\"."
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
      "1,0V por grau",
      "0,5V por grau",
      "0,25V por grau",
      "24V por grau"
    ],
    "answer": "0,25V por grau",
    "explanation": "O PSR fornece 0,25V de sinal por grau de demanda. A alternativa correta é \"0,25V por grau\"."
  },
  {
    "question": "Quais componentes realizam o \"amaciamento\" do sinal de saída no PSR?",
    "options": [
      "Resistores shunt",
      "Diodos retificadores",
      "Transistores Darlington",
      "Capacitor C1 e Choke L1"
    ],
    "answer": "Capacitor C1 e Choke L1",
    "explanation": "Capacitor C1 e choke L1 amaciam a saída. A alternativa correta é \"Capacitor C1 e Choke L1\"."
  },
  {
    "question": "Na placa de relês, os relês RL15 e RL18 são responsáveis por quê?",
    "options": [
      "Disparar a buzina de 24Vcc.",
      "Transferir automaticamente o controle para o bordo oposto se a alimentação de 115V 400Hz falhar.",
      "Acender as lâmpadas de iluminação de 35V.",
      "Mudar do modo Auto para Principal."
    ],
    "answer": "Transferir automaticamente o controle para o bordo oposto se a alimentação de 115V 400Hz falhar.",
    "explanation": "Eles comutam o circuito em caso de perda da linha principal de energia 400Hz. A alternativa correta é \"Transferir automaticamente o controle para o bordo oposto se a alimentação de 115V 400Hz falhar.\"."
  },
  {
    "question": "Quantos relês ficam alojados na unidade de Painel de Relês da VCS 775?",
    "options": [
      "5",
      "10",
      "14",
      "20"
    ],
    "answer": "14",
    "explanation": "Existem 14 relês. A alternativa correta é \"14\"."
  },
  {
    "question": "Quais tensões de CC estabilizadas são providas pela Fonte Estabilizada da VCS 775?",
    "options": [
      "+5V e -5V",
      "+12V e -12V",
      "+24V e -24V",
      "Apenas 24Vcc"
    ],
    "answer": "+12V e -12V",
    "explanation": "Fornece +12V e -12V. A alternativa correta é \"+12V e -12V\"."
  },
  {
    "question": "Na fonte estabilizada, qual a faixa de ajuste possível para essas saídas (+12V/-12V) através de PVR1 e PVR2?",
    "options": [
      "0V a 10V",
      "9V a 15V",
      "12V a 24V",
      "São fixas, não ajustáveis."
    ],
    "answer": "9V a 15V",
    "explanation": "Ajustáveis entre 9V e 15V. A alternativa correta é \"9V a 15V\"."
  },
  {
    "question": "O circuito \"Falha de Linha de Sinal\" (SLF) da VCS 775 detecta qual das anomalias abaixo?",
    "options": [
      "Baixa pressão do óleo hidráulico.",
      "Falta de energia de 440V nas bombas.",
      "Fiação de sinal com baixa/aberta para o painel à ré ou falha nos 115V 400Hz.",
      "Mau funcionamento do giroscópio."
    ],
    "answer": "Fiação de sinal com baixa/aberta para o painel à ré ou falha nos 115V 400Hz.",
    "explanation": "Alarma em caso de anomalia na linha de sinal ou energia do PSR. A alternativa correta é \"Fiação de sinal com baixa/aberta para o painel à ré ou falha nos 115V 400Hz.\"."
  },
  {
    "question": "A Unidade de Realimentação (Feedback Unit) é montada em qual tipo de compartimento?",
    "options": [
      "Perfurado e ventilado a ar",
      "Refrigeração a óleo",
      "Compartimento de alumínio selado e sem ventilação",
      "Caixa plástica transparente"
    ],
    "answer": "Compartimento de alumínio selado e sem ventilação",
    "explanation": "É blindada em alumínio sem ventilação para o compartimento do leme. A alternativa correta é \"Compartimento de alumínio selado e sem ventilação\"."
  },
  {
    "question": "Como a Unidade de Feedback percebe o movimento dos lemes?",
    "options": [
      "Por atuadores pneumáticos",
      "Acoplada diretamente à barra de ligação (madre) dos lemes através de uma alavanca",
      "Via sinal de rádio",
      "Pela pressão do óleo de retorno"
    ],
    "answer": "Acoplada diretamente à barra de ligação (madre) dos lemes através de uma alavanca",
    "explanation": "Diretamente acoplada à madre do leme via alavanca. A alternativa correta é \"Acoplada diretamente à barra de ligação (madre) dos lemes através de uma alavanca\"."
  },
  {
    "question": "Qual a taxa do trem de engrenagem redutora existente dentro da Feedback Unit?",
    "options": [
      "1:1",
      "2:1",
      "3:1",
      "4:1"
    ],
    "answer": "2:1",
    "explanation": "Possui redução mecânica de 2:1. A alternativa correta é \"2:1\"."
  },
  {
    "question": "Quais são os componentes eletromecânicos geradores de sinal presentes dentro da Feedback Unit?",
    "options": [
      "Três tacogeradores",
      "Dois linvares (M1, M2) e um sincro (M3)",
      "Dois sincros e um encoder óptico",
      "Três potenciômetros"
    ],
    "answer": "Dois linvares (M1, M2) e um sincro (M3)",
    "explanation": "Contém dois linvares para a malha servo e um sincro para indicação. A alternativa correta é \"Dois linvares (M1, M2) e um sincro (M3)\"."
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
      "CML em PORT, CCM em BB",
      "CML em REMOTE, CCM em Passadiço",
      "CML em LOCAL, CCM em Auto",
      "Ambas na posição OFF"
    ],
    "answer": "CML em REMOTE, CCM em Passadiço",
    "explanation": "Exige CML em REMOTE e CCM no Passadiço. A alternativa correta é \"CML em REMOTE, CCM em Passadiço\"."
  },
  {
    "question": "Qual é a diferença máxima exigida entre a proa e o rumo desejado para que o modo Auto engate (sinal Permite Auto)?",
    "options": [
      "Menos de 2 graus",
      "Menos de 4 ou 5 graus",
      "Menos de 10 graus",
      "Sem limite"
    ],
    "answer": "Menos de 4 ou 5 graus",
    "explanation": "O limite para Permite Auto é de < 4/5 graus. A alternativa correta é \"Menos de 4 ou 5 graus\"."
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
      "Malha aberta (Open loop)",
      "Malha fechada (Closed loop)",
      "Relé de pulso",
      "Somente ação direta"
    ],
    "answer": "Malha fechada (Closed loop)",
    "explanation": "Malha fechada que reduz o erro de rumo a zero. A alternativa correta é \"Malha fechada (Closed loop)\"."
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
      "Degraus de 5º e 10º",
      "Precisão de 10º e tipo vernier com precisão de 1º",
      "Degraus de 30º e 1º",
      "Não possui subdivisão"
    ],
    "answer": "Precisão de 10º e tipo vernier com precisão de 1º",
    "explanation": "Possui ajuste grosso de 10 e fino vernier de 1 grau. A alternativa correta é \"Precisão de 10º e tipo vernier com precisão de 1º\"."
  },
  {
    "question": "Se o erro do tacogerador / giroscópica exceder 2 graus, qual alarme é gerado?",
    "options": [
      "Falha de acompanhamento da giro",
      "Saiu de Rumo",
      "Motor aquecido",
      "Tensão alta"
    ],
    "answer": "Falha de acompanhamento da giro",
    "explanation": "Gera falha de acompanhamento da giro. A alternativa correta é \"Falha de acompanhamento da giro\"."
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
      "Da pressão do óleo",
      "Do odômetro (Log encoder)",
      "Da RPM do motor diesel",
      "Do anemômetro"
    ],
    "answer": "Do odômetro (Log encoder)",
    "explanation": "O log encoder insere a velocidade na equação de avanço de fase. A alternativa correta é \"Do odômetro (Log encoder)\"."
  },
  {
    "question": "Qual o efeito de uma velocidade alta (odômetro) no circuito de avanço de fase?",
    "options": [
      "Aumenta o tempo de resposta e atrasa o leme",
      "Reduz a resistência do avanço, diminuindo o tempo de resposta para injeção de contra-leme",
      "Desliga o auto",
      "Não gera alteração"
    ],
    "answer": "Reduz a resistência do avanço, diminuindo o tempo de resposta para injeção de contra-leme",
    "explanation": "Navio mais veloz exige que a resistência caia para antecipar o contra-leme. A alternativa correta é \"Reduz a resistência do avanço, diminuindo o tempo de resposta para injeção de contra-leme\"."
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
      "Tolerância de Desvio (Yaw)",
      "Nós",
      "Alarmes",
      "Limite do Leme"
    ],
    "answer": "Tolerância de Desvio (Yaw)",
    "explanation": "S2 ajusta Tolerância de desvio/Yaw. A alternativa correta é \"Tolerância de Desvio (Yaw)\"."
  },
  {
    "question": "Qual a consequência de ajustar a Tolerância de Desvio para a posição \"MIN\"?",
    "options": [
      "O ganho do amplificador atinge seu nível máximo, reagindo ao mínimo desvio de proa.",
      "O leme se move devagar.",
      "Desliga a correção do piloto.",
      "Transfere controle pro CCM."
    ],
    "answer": "O ganho do amplificador atinge seu nível máximo, reagindo ao mínimo desvio de proa.",
    "explanation": "O ganho do comparador é o maior possível. A alternativa correta é \"O ganho do amplificador atinge seu nível máximo, reagindo ao mínimo desvio de proa.\"."
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
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": "9",
    "explanation": "Existem nove cartões de cinco tipos. A alternativa correta é \"9\"."
  },
  {
    "question": "Em qual PCB fica alojado o \"Amplificador Buffer\" e o \"Amplificador Somador\"?",
    "options": [
      "PCB 34",
      "PCB 52",
      "PCB 47",
      "PCB 5"
    ],
    "answer": "PCB 47",
    "explanation": "PCB 47 consolida os amp. buffer, somador e avanço. A alternativa correta é \"PCB 47\"."
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
      "Buzina direta",
      "Falha de Acompanhamento da Giroscópica",
      "Fumaça",
      "Sobrepressão"
    ],
    "answer": "Falha de Acompanhamento da Giroscópica",
    "explanation": "A resposta correta é a alternativa B (Falha de Acompanhamento da Giroscópica)."
  },
  {
    "question": "A lógica comparadora \"Permite Auto\" funciona usando quais componentes?",
    "options": [
      "Válvulas pneumáticas.",
      "Relés temporizados.",
      "Transistores PAQ1 a PAQ4 e circuito de diodo retificador PAD2 (nível crítico 0.1V base).",
      "Microchaves mecânicas da manete."
    ],
    "answer": "Transistores PAQ1 a PAQ4 e circuito de diodo retificador PAD2 (nível crítico 0.1V base).",
    "explanation": "Circuito eletrônico de limiar com transistores casados. A alternativa correta é \"Transistores PAQ1 a PAQ4 e circuito de diodo retificador PAD2 (nível crítico 0.1V base).\"."
  },
  {
    "question": "No Painel de Relês da VCS 775, os relês comutadores atuam usando qual tensão principal de bobina na maioria do projeto?",
    "options": [
      "220V",
      "115V 400Hz rebaixado ou 24Vcc.",
      "440V",
      "5V"
    ],
    "answer": "115V 400Hz rebaixado ou 24Vcc.",
    "explanation": "Usam alimentação transformada/retificada da fonte do painel. A alternativa correta é \"115V 400Hz rebaixado ou 24Vcc.\"."
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
      "Defeito de aterramento.",
      "É usado como portadora vital de \"vida/falha de linha\"; se o ripple sumir, dispara o alarme SLF.",
      "É parasita, mas não dispara nada.",
      "Vem das luzes fluorescentes do CCM."
    ],
    "answer": "É usado como portadora vital de \"vida/falha de linha\"; se o ripple sumir, dispara o alarme SLF.",
    "explanation": "O ripple detecta linha aberta ou sem comunicação do sistema de demanda. A alternativa correta é \"É usado como portadora vital de \"vida/falha de linha\"; se o ripple sumir, dispara o alarme SLF.\"."
  },
  {
    "question": "A unidade de Ajuste de Rumo manual \"Vernier\" da VCS 776 permite sintonia fina de até:",
    "options": [
      "1 grau.",
      "0.1 grau.",
      "5 graus.",
      "10 graus."
    ],
    "answer": "1 grau.",
    "explanation": "Ajuste fino de 1 grau. A alternativa correta é \"1 grau.\"."
  },
  {
    "question": "Quando o botão da RAS é pressionado no convés, as válvulas rotativas do piloto viram qual componente no VCS 776?",
    "options": [
      "Diretamente os Leme",
      "O motor-tacogerador",
      "O eixo de ajuste de rumo através das solenoides rotativas M2/M3.",
      "Os disjuntores"
    ],
    "answer": "O eixo de ajuste de rumo através das solenoides rotativas M2/M3.",
    "explanation": "As solenoides rodam o eixo de demanda do Piloto automaticamente em steps. A alternativa correta é \"O eixo de ajuste de rumo através das solenoides rotativas M2/M3.\"."
  },
  {
    "question": "Por que existe um bloqueio mecânico que inibe a tecla AUTO na VCS 775 (Operada pela solenoide \"Permite Auto S1A\")?",
    "options": [
      "Para impedir fisicamente que o oficial engate o Autopiloto enquanto a proa e o rumo exigido possuam erro grande (> 4/5 graus), evitando um soco violento no leme.",
      "Para não engatar sem óleo.",
      "Para trancar o volante.",
      "Para testar a mola do botão."
    ],
    "answer": "Para impedir fisicamente que o oficial engate o Autopiloto enquanto a proa e o rumo exigido possuam erro grande (> 4/5 graus), evitando um soco violento no leme.",
    "explanation": "O interloque trava a tecla AUTO até o Permite Auto estar presente. A alternativa correta é \"Para impedir fisicamente que o oficial engate o Autopiloto enquanto a proa e o rumo exigido possuam erro grande (> 4/5 graus), evitando um soco violento no leme.\"."
  }
];
