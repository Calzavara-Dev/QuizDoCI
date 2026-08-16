import type { Question } from "../types/question";

export const redesEthernetQuestions: Question[] = [
  {
    "question": "Toda comunicação entre computadores envolve qual processo fundamental em relação à energia?",
    "options": [
      "O isolamento térmico das interfaces elétricas.",
      "A codificação de informações em uma troca de energia e a transferência dessa energia através de um meio.",
      "A polarização dos cabos UTP sem uso de bateria.",
      "O encapsulamento de fótons por meio do CSMA/CD.",
      "A geração de loops magnéticos nas antenas do receptor."
    ],
    "answer": "A codificação de informações em uma troca de energia e a transferência dessa energia através de um meio.",
    "explanation": "A alternativa correta é a letra B. A codificação de informações em uma troca de energia e a transferência dessa energia através de um meio."
  },
  {
    "question": "O uso do fio de cobre é justificado na maioria das conexões LAN por três motivos básicos:",
    "options": [
      "Imunidade a raios, peso leve e tensão estática.",
      "Baixo custo, facilidade de instalação e baixa resistência elétrica.",
      "Altíssima segurança nativa, largura de banda infinita e uso de sinais ópticos.",
      "Capacidade de não gerar radiação magnética alguma.",
      "Ausência da necessidade de conectores mecânicos."
    ],
    "answer": "Baixo custo, facilidade de instalação e baixa resistência elétrica.",
    "explanation": "A alternativa correta é a letra B. Baixo custo, facilidade de instalação e baixa resistência elétrica."
  },
  {
    "question": "Qual é a principal função do trançamento dos fios no cabo de par trançado?",
    "options": [
      "Aumentar a tensão em longas distâncias (acima de 500m).",
      "Substituir o transceiver em redes Thin Ethernet.",
      "Limitar a energia eletromagnética que o fio emite e torná-lo menos suscetível à energia eletromagnética de outros fios, reduzindo a interferência.",
      "Permitir que o sinal de infravermelho trafegue no núcleo.",
      "Estabelecer um endereço IP dinâmico diretamente pelo hardware."
    ],
    "answer": "Limitar a energia eletromagnética que o fio emite e torná-lo menos suscetível à energia eletromagnética de outros fios, reduzindo a interferência.",
    "explanation": "A alternativa correta é a letra C. Limitar a energia eletromagnética que o fio emite e torná-lo menos suscetível à energia eletromagnética de outros fios, reduzindo a interferência."
  },
  {
    "question": "O que especifica exatamente a nomenclatura \"10BASE2\" em redes de computadores?",
    "options": [
      "Velocidade de 10 Mbps, transmissão analógica (banda larga) e conector de segunda geração.",
      "Velocidade de 10 Mbps, transmissão digital (banda base/BASE) e limite de transmissão de aproximadamente 200 metros (Thinnet).",
      "Velocidade de 10 Gigabits, transmissão infravermelha, 200 milissegundos de delay.",
      "Velocidade de 10 Gbps em conexões de 2 km de fibra óptica.",
      "Capacidade de 10 computadores suportando 2 bridges."
    ],
    "answer": "Velocidade de 10 Mbps, transmissão digital (banda base/BASE) e limite de transmissão de aproximadamente 200 metros (Thinnet).",
    "explanation": "A alternativa correta é a letra B. Velocidade de 10 Mbps, transmissão digital (banda base/BASE) e limite de transmissão de aproximadamente 200 metros (Thinnet)."
  },
  {
    "question": "Na categorização de cabos par trançado, qual é a principal finalidade da Categoria 1 (Cat 1)?",
    "options": [
      "Serviços telefônicos e dados de baixa velocidade.",
      "Redes de altíssima velocidade do tipo 1000BASE-T.",
      "Integração exclusiva com o Padrão FDDI.",
      "Transmissão de ondas de rádio.",
      "Suporte a Jumbo Frames."
    ],
    "answer": "Serviços telefônicos e dados de baixa velocidade.",
    "explanation": "A alternativa correta é a letra A. Serviços telefônicos e dados de baixa velocidade."
  },
  {
    "question": "Cabos UTP (Par Trançado Sem Blindagem) possuem uma forte restrição de ambiente, que é:",
    "options": [
      "Não podem ser crimpados por conectores padrão T-568B.",
      "Reduzem a rede a no máximo 10 Mbps.",
      "Não podem ser instalados próximos a equipamentos geradores de campos magnéticos (como motores ou fios de rede elétrica) e em ambientes de alta umidade, devido à ausência total de blindagem.",
      "Exigem o uso obrigatório de modems de banda larga.",
      "Obrigam o uso de comunicação assíncrona analógica."
    ],
    "answer": "Não podem ser instalados próximos a equipamentos geradores de campos magnéticos (como motores ou fios de rede elétrica) e em ambientes de alta umidade, devido à ausência total de blindagem.",
    "explanation": "A alternativa correta é a letra C. Não podem ser instalados próximos a equipamentos geradores de campos magnéticos (como motores ou fios de rede elétrica) e em ambientes de alta umidade, devido à ausência total de blindagem."
  },
  {
    "question": "A Categoria de Cabos Par Trançado certificada para transmitir \"até 16 MHz\", englobando as antigas redes 10Base-T e 100Base-T, é a:",
    "options": [
      "Cat 1.",
      "Cat 2.",
      "Cat 3.",
      "Cat 4.",
      "Cat 6."
    ],
    "answer": "Cat 3.",
    "explanation": "A alternativa correta é a letra C. Cat 3."
  },
  {
    "question": "Qual a diferença fundamental na construção do cabo ScTP (Foil Twisted Pair) em relação ao UTP?",
    "options": [
      "O ScTP possui pontas com vidro reflexivo.",
      "O ScTP inverte os pinos 1-3 e 2-6 em todas as conexões por padrão.",
      "No ScTP, além do revestimento plástico, todos os pares são envolvidos juntos por uma única capa metálica (Foil) que atua como blindagem, exigindo maior cuidado no aterramento.",
      "O ScTP possui blindagem magnética isolada em cada um dos 8 fios separadamente.",
      "O ScTP dispensa conectores RJ-45 de metal."
    ],
    "answer": "No ScTP, além do revestimento plástico, todos os pares são envolvidos juntos por uma única capa metálica (Foil) que atua como blindagem, exigindo maior cuidado no aterramento.",
    "explanation": "A alternativa correta é a letra C. No ScTP, além do revestimento plástico, todos os pares são envolvidos juntos por uma única capa metálica (Foil) que atua como blindagem, exigindo maior cuidado no aterramento."
  },
  {
    "question": "Em redes que atingem velocidades de 1 Gbps (1000 Mbps), por que a afirmação de que \"apenas dois pares importam no RJ-45\" está incorreta?",
    "options": [
      "Porque redes de 1 Gbps usam exclusivamente conectores DB-9.",
      "Porque apenas 1 único par é usado em alta velocidade para full-duplex.",
      "Porque o TCP/IP anula a existência dos pinos.",
      "Porque redes de 1 Gbps utilizam os 4 pares (8 fios) simultaneamente para realizar a transmissão.",
      "Porque dependem de cabo coaxial para manter o checksum."
    ],
    "answer": "Porque redes de 1 Gbps utilizam os 4 pares (8 fios) simultaneamente para realizar a transmissão.",
    "explanation": "A alternativa correta é a letra D. Porque redes de 1 Gbps utilizam os 4 pares (8 fios) simultaneamente para realizar a transmissão."
  },
  {
    "question": "Por que as cores e a ordem dos pinos num cabo trançado não podem ser colocadas de maneira arbitrária/aleatória?",
    "options": [
      "Porque a placa de rede não liga as luzes de status.",
      "Porque os cabos pares trançados foram projetados com uma certa ordem (pinagem) que provê o cancelamento de ruído (crosstalk) entre os pares específicos.",
      "Porque os roteadores WAN bloqueiam pacotes com cores divergentes.",
      "Porque isso transforma o cabo direto em um Token Ring.",
      "Porque o protocolo IP da camada 3 invalida a existência da camada física."
    ],
    "answer": "Porque os cabos pares trançados foram projetados com uma certa ordem (pinagem) que provê o cancelamento de ruído (crosstalk) entre os pares específicos.",
    "explanation": "A alternativa correta é a letra B. Porque os cabos pares trançados foram projetados com uma certa ordem (pinagem) que provê o cancelamento de ruído (crosstalk) entre os pares específicos."
  },
  {
    "question": "Qual a finalidade do cabo \"cross-over\"?",
    "options": [
      "Interligar computadores e switches através de roteamento estático.",
      "Substituir o Thin Ethernet em prédios corporativos.",
      "Interligar equipamentos da mesma categoria (Ex: PC-PC, Switch-Switch, Roteador-Roteador) através do cruzamento dos pinos 1-3 e 2-6.",
      "Ligar roteadores em portas de console para configuração.",
      "Formar redes em anel com FDDI."
    ],
    "answer": "Interligar equipamentos da mesma categoria (Ex: PC-PC, Switch-Switch, Roteador-Roteador) através do cruzamento dos pinos 1-3 e 2-6.",
    "explanation": "A alternativa correta é a letra C. Interligar equipamentos da mesma categoria (Ex: PC-PC, Switch-Switch, Roteador-Roteador) através do cruzamento dos pinos 1-3 e 2-6."
  },
  {
    "question": "Quando o cabeamento entre um PC e um Switch é realizado, utiliza-se qual tipo de cabo?",
    "options": [
      "Cabo Crossover.",
      "Cabo Roll-over.",
      "Cabo pino-a-pino ou direto (pois são dispositivos de categorias diferentes).",
      "RG-58 Coaxial.",
      "Transceiver de fibra óptica."
    ],
    "answer": "Cabo pino-a-pino ou direto (pois são dispositivos de categorias diferentes).",
    "explanation": "A alternativa correta é a letra C. Cabo pino-a-pino ou direto (pois são dispositivos de categorias diferentes)."
  },
  {
    "question": "O que é o cabo \"roll-over\" e qual sua utilidade na rede?",
    "options": [
      "É o cabo utilizado para ligar dois Hubs passivos em anel.",
      "É um cabo coaxial pintado de amarelo para Thicknet.",
      "É um cabo utilizado para realizar conexão entre a porta serial de um PC e a porta de console de roteadores (normalmente via conversor RJ-45 para DB-9).",
      "É a fiação interna responsável pela rotação reversa no FDDI.",
      "É o termo comercial do UTP Categoria 7."
    ],
    "answer": "É um cabo utilizado para realizar conexão entre a porta serial de um PC e a porta de console de roteadores (normalmente via conversor RJ-45 para DB-9).",
    "explanation": "A alternativa correta é a letra C. É um cabo utilizado para realizar conexão entre a porta serial de um PC e a porta de console de roteadores (normalmente via conversor RJ-45 para DB-9)."
  },
  {
    "question": "A principal justificativa de segurança e física para se usar cabo coaxial em oposição ao par trançado na Ethernet original (distâncias longas) é:",
    "options": [
      "O custo zero em implantação, dispensando conector mecânico.",
      "Funcionar com lasers em seu núcleo de cobre.",
      "Ele mantém capacitância constante e baixa, isolando o fio central através de uma barreira cilíndrica (malha) que evita a irradiação eletromagnética e blinda interferências externas, suportando maiores distâncias sem distorções.",
      "Elimina a necessidade da camada 2 (Enlace).",
      "Não sofre colapso por colisões (CSMA/CD inexistente)."
    ],
    "answer": "Ele mantém capacitância constante e baixa, isolando o fio central através de uma barreira cilíndrica (malha) que evita a irradiação eletromagnética e blinda interferências externas, suportando maiores distâncias sem distorções.",
    "explanation": "A alternativa correta é a letra C. Ele mantém capacitância constante e baixa, isolando o fio central através de uma barreira cilíndrica (malha) que evita a irradiação eletromagnética e blinda interferências externas, suportando maiores distâncias sem distorções."
  },
  {
    "question": "O cabeamento coaxial de \"Banda Larga\" (RG-8 ou Thicknet) apresenta quais especificações técnicas fundamentais?",
    "options": [
      "Impedância de 75 Ohms, capa amarela, transmissão analógica dividida em canais, alcança até 500 metros.",
      "Impedância de 50 Ohms, flexível, conector BNC, alcança 185 metros.",
      "Transmissão digital, imunidade zero a ruídos, máxima de 100 metros.",
      "Conexão pino-a-pino sem transceivers e uso de HUB passivo.",
      "Dependência de fibra óptica para atuar como banda larga."
    ],
    "answer": "Impedância de 75 Ohms, capa amarela, transmissão analógica dividida em canais, alcança até 500 metros.",
    "explanation": "A alternativa correta é a letra A. Impedância de 75 Ohms, capa amarela, transmissão analógica dividida em canais, alcança até 500 metros."
  },
  {
    "question": "O cabeamento coaxial de \"Banda Base\" ou RG-58 (10BASE2), conhecido como Thin Ethernet, tem limitação máxima de distância e conexões estabelecidas em:",
    "options": [
      "500 metros e conexões ilimitadas.",
      "185 metros de tamanho de segmento, permitindo até 30 conexões usando conector BNC e espaçamento mínimo de 1/2 metro.",
      "100 metros e uso exclusivo de conector RJ-45.",
      "50 metros em cabos de 75 ohms com envio analógico.",
      "Quilômetros infinitos desde que embutidos em VPN."
    ],
    "answer": "185 metros de tamanho de segmento, permitindo até 30 conexões usando conector BNC e espaçamento mínimo de 1/2 metro.",
    "explanation": "A alternativa correta é a letra B. 185 metros de tamanho de segmento, permitindo até 30 conexões usando conector BNC e espaçamento mínimo de 1/2 metro."
  },
  {
    "question": "\"A luz pode codificar mais informações do que sinais elétricos\". Essa premissa teórica fundamenta qual vantagem da Fibra Óptica?",
    "options": [
      "O baixo custo de emenda e instalação.",
      "A alta resistência térmica.",
      "A imensa largura de banda e ausência de interferências elétricas/eletromagnéticas, permitindo que os sinais viajem distâncias incrivelmente longas usando apenas um único fio.",
      "A não necessidade de envio de bits no cabeçalho IP.",
      "A tolerância a dobras e torções mecânicas severas nas paredes."
    ],
    "answer": "A imensa largura de banda e ausência de interferências elétricas/eletromagnéticas, permitindo que os sinais viajem distâncias incrivelmente longas usando apenas um único fio.",
    "explanation": "A alternativa correta é a letra C. A imensa largura de banda e ausência de interferências elétricas/eletromagnéticas, permitindo que os sinais viajem distâncias incrivelmente longas usando apenas um único fio."
  },
  {
    "question": "As principais desvantagens das redes de fibras ópticas recaem sobre:",
    "options": [
      "O alto aquecimento dos cabos e derretimento por laser.",
      "A necessidade de múltiplos fios para fechar a corrente elétrica.",
      "A dificuldade e o alto custo da instalação/reparo, exigindo equipamentos precisos para polir, alinhar e unir extremidades rompidas, além de ser difícil localizar as fraturas.",
      "A fácil interceptação e quebra de criptografia da luz.",
      "A interferência constante com fios elétricos vizinhos."
    ],
    "answer": "A dificuldade e o alto custo da instalação/reparo, exigindo equipamentos precisos para polir, alinhar e unir extremidades rompidas, além de ser difícil localizar as fraturas.",
    "explanation": "A alternativa correta é a letra C. A dificuldade e o alto custo da instalação/reparo, exigindo equipamentos precisos para polir, alinhar e unir extremidades rompidas, além de ser difícil localizar as fraturas."
  },
  {
    "question": "Nas transmissões de rádio (RF), qual o diferencial físico dessas redes?",
    "options": [
      "Não necessitam de nenhum meio físico fixo (cabo/fibra) conectando os computadores; a comunicação ocorre pelas antenas irradiando energia.",
      "A exigência de cabos coaxiais de 50 Ohms nas pontas.",
      "Trabalham exclusivamente com pulsos de laser unidirecionais.",
      "Exigem a aprovação de todos os hubs da topologia anel.",
      "Restringem a comunicação a conexões orientadas."
    ],
    "answer": "Não necessitam de nenhum meio físico fixo (cabo/fibra) conectando os computadores; a comunicação ocorre pelas antenas irradiando energia.",
    "explanation": "A alternativa correta é a letra A. Não necessitam de nenhum meio físico fixo (cabo/fibra) conectando os computadores; a comunicação ocorre pelas antenas irradiando energia."
  },
  {
    "question": "Os Satélites retransmitem os sinais de radiofrequência usando um equipamento específico. Como ele atua e qual o gargalo dessa tecnologia?",
    "options": [
      "Roteador / gargalo é o fio esticado ao espaço.",
      "Transponder: recebe o sinal RF, amplifica e retransmite num ângulo/frequência diferente. O gargalo é o elevadíssimo custo de colocar o satélite em órbita.",
      "Bridge laser / gargalo é a umidade nas nuvens.",
      "Switch Store and forward / gargalo é o tamanho da fila.",
      "Multiplexador / gargalo é o cabo AUI."
    ],
    "answer": "Transponder: recebe o sinal RF, amplifica e retransmite num ângulo/frequência diferente. O gargalo é o elevadíssimo custo de colocar o satélite em órbita.",
    "explanation": "A alternativa correta é a letra B. Transponder: recebe o sinal RF, amplifica e retransmite num ângulo/frequência diferente. O gargalo é o elevadíssimo custo de colocar o satélite em órbita."
  },
  {
    "question": "Por que as torres de comunicação por micro-ondas são instaladas em pontos elevados, no topo de edifícios?",
    "options": [
      "Para atrair menos ruído térmico subterrâneo.",
      "Porque as micro-ondas só funcionam no vácuo em grandes altitudes.",
      "Porque diferentemente das ondas de rádio comuns, micro-ondas são direcionais e não penetram em metais, obstáculos, edificações ou vegetação alta, precisando de linha de visada limpa.",
      "Para facilitar o aterramento do cabeamento ScTP.",
      "Devido à exigência do padrão 10BASE5."
    ],
    "answer": "Porque diferentemente das ondas de rádio comuns, micro-ondas são direcionais e não penetram em metais, obstáculos, edificações ou vegetação alta, precisando de linha de visada limpa.",
    "explanation": "A alternativa correta é a letra C. Porque diferentemente das ondas de rádio comuns, micro-ondas são direcionais e não penetram em metais, obstáculos, edificações ou vegetação alta, precisando de linha de visada limpa."
  },
  {
    "question": "A tecnologia de Infravermelho em redes de computadores é conveniente, mas sofre de quais limitações básicas?",
    "options": [
      "É limitada a pequenas distâncias dentro do mesmo ambiente, dependendo frequentemente do apontamento direto (visada) para o receptor.",
      "Custo muito mais alto que as fibras ópticas.",
      "Necessidade obrigatória de antenas de 2 metros.",
      "Interfere fortemente em fios de cobre UTP nas paredes.",
      "Bloqueia a pilha TCP/IP."
    ],
    "answer": "É limitada a pequenas distâncias dentro do mesmo ambiente, dependendo frequentemente do apontamento direto (visada) para o receptor.",
    "explanation": "A alternativa correta é a letra A. É limitada a pequenas distâncias dentro do mesmo ambiente, dependendo frequentemente do apontamento direto (visada) para o receptor."
  },
  {
    "question": "O Laser atua de forma parecida com as micro-ondas, mas utilizando feixes de luz. A maior desvantagem climática do Laser é:",
    "options": [
      "Aquecimento global nos fios.",
      "Incapacidade de funcionar durante a noite.",
      "A transmissão deve viajar em linha reta estrita e o raio pode ser totalmente bloqueado por vegetação, chuva forte, fumaça ou neve.",
      "A absorção por transponders.",
      "A mudança do endereço MAC pela luz UV."
    ],
    "answer": "A transmissão deve viajar em linha reta estrita e o raio pode ser totalmente bloqueado por vegetação, chuva forte, fumaça ou neve.",
    "explanation": "A alternativa correta é a letra C. A transmissão deve viajar em linha reta estrita e o raio pode ser totalmente bloqueado por vegetação, chuva forte, fumaça ou neve."
  },
  {
    "question": "O que define uma \"Comunicação Local Assíncrona\" entre dois computadores?",
    "options": [
      "Os computadores usam relógios sincronizados ao satélite GPS.",
      "A comunicação exige confirmação de leitura antes de disparar o pacote físico.",
      "Emissor e receptor não precisam se coordenar (ou sincronizar clocks rigidamente) antes dos dados serem transmitidos; o emissor pode enviar a qualquer momento arbitrário.",
      "O cabo BNC inverte a polaridade a cada milissegundo.",
      "O pacote utiliza duas pilhas OSI idênticas invertidas."
    ],
    "answer": "Emissor e receptor não precisam se coordenar (ou sincronizar clocks rigidamente) antes dos dados serem transmitidos; o emissor pode enviar a qualquer momento arbitrário.",
    "explanation": "A alternativa correta é a letra C. Emissor e receptor não precisam se coordenar (ou sincronizar clocks rigidamente) antes dos dados serem transmitidos; o emissor pode enviar a qualquer momento arbitrário."
  },
  {
    "question": "A padronização da comunicação (ex: ITU, EIA, IEEE) garante fisicamente:",
    "options": [
      "Que não haverá colapso de congestionamento (Congestion Collapse).",
      "O uso obrigatório de fibras ópticas de mesmo diâmetro mundial.",
      "Que equipamentos de marcas diferentes operem sem inoperância, padronizando especificações como tempo de sinal, voltagem e níveis de corrente.",
      "A remoção do \"Start bit\" no padrão TCP/IP.",
      "Que todo hardware tenha roteamento dinâmico SPF."
    ],
    "answer": "Que equipamentos de marcas diferentes operem sem inoperância, padronizando especificações como tempo de sinal, voltagem e níveis de corrente.",
    "explanation": "A alternativa correta é a letra C. Que equipamentos de marcas diferentes operem sem inoperância, padronizando especificações como tempo de sinal, voltagem e níveis de corrente."
  },
  {
    "question": "No Padrão RS-232, como é representado o bit de valor \"1\" e a ociosidade do fio?",
    "options": [
      "Pela tensão de exatos zero volts.",
      "Por um pulso de laser.",
      "A tensão no fio nunca é zero volt; quando oco, mantém-se em tensão negativa que representa o bit de valor 1.",
      "A ociosidade desliga a interface do transceiver e corta a energia.",
      "Representa o bit \"0\" via tensão positiva de 15v."
    ],
    "answer": "A tensão no fio nunca é zero volt; quando oco, mantém-se em tensão negativa que representa o bit de valor 1.",
    "explanation": "A alternativa correta é a letra C. A tensão no fio nunca é zero volt; quando oco, mantém-se em tensão negativa que representa o bit de valor 1."
  },
  {
    "question": "No padrão RS-232, para que um transmissor envie caracteres e o receptor não se perca no tempo sem relógio (clock) prévio, utiliza-se:",
    "options": [
      "O bit de CRC.",
      "O Jumbo Frame.",
      "O \"Start bit\", um bit extra (valor 0) enviado sempre antes do pacote de dados para alertar e iniciar o timer preciso do receptor.",
      "O MAC address encapsulado.",
      "O bit de roteamento padrão."
    ],
    "answer": "O \"Start bit\", um bit extra (valor 0) enviado sempre antes do pacote de dados para alertar e iniciar o timer preciso do receptor.",
    "explanation": "A alternativa correta é a letra C. O \"Start bit\", um bit extra (valor 0) enviado sempre antes do pacote de dados para alertar e iniciar o timer preciso do receptor."
  },
  {
    "question": "No RS-232, o \"Stop bit\" (bit fantasma ou de parada) é definido como:",
    "options": [
      "O tempo mínimo estipulado para que o emissor mantenha a tensão no estado negativo (1) após enviar um caractere, garantindo a separação entre os dados.",
      "Um bit extra usado para cortar o TCP caso a conexão atrase.",
      "O limitador que desliga o Hub em caso de intrusão.",
      "Um pulso usado no Token Ring para derrubar a rede.",
      "O tempo máximo para efetuar o \"binary exponential backoff\"."
    ],
    "answer": "O tempo mínimo estipulado para que o emissor mantenha a tensão no estado negativo (1) após enviar um caractere, garantindo a separação entre os dados.",
    "explanation": "A alternativa correta é a letra A. O tempo mínimo estipulado para que o emissor mantenha a tensão no estado negativo (1) após enviar um caractere, garantindo a separação entre os dados."
  },
  {
    "question": "O que significa afirmar que uma placa opera com 2400 \"baud rate\"?",
    "options": [
      "Que a placa envia 2400 pacotes TCP/IP por segundo.",
      "Que o cabo possui a largura de banda de 2400 metros.",
      "Que o sinal eletrônico no canal de comunicação muda seu estado (ex: varia a voltagem/fase) até 2400 vezes por segundo.",
      "Que o erro de bit ocorrerá 2400 vezes num arquivo grande.",
      "Que a fibra óptica pulsa a 2400 Mhz."
    ],
    "answer": "Que o sinal eletrônico no canal de comunicação muda seu estado (ex: varia a voltagem/fase) até 2400 vezes por segundo.",
    "explanation": "A alternativa correta é a letra C. Que o sinal eletrônico no canal de comunicação muda seu estado (ex: varia a voltagem/fase) até 2400 vezes por segundo."
  },
  {
    "question": "Na modulação FSK (Frequency Shift Keying), qual a relação exata entre baud rate e bps (bits por segundo)?",
    "options": [
      "O bps é metade do baud rate.",
      "O bps equivale a 4 vezes o baud rate.",
      "Eles são idênticos/iguais, pois cada \"baud\" (mudança de estado) na FSK transmite exatamente 1 único bit.",
      "São proporcionais ao logaritmo da distância.",
      "Não há nenhuma relação."
    ],
    "answer": "Eles são idênticos/iguais, pois cada \"baud\" (mudança de estado) na FSK transmite exatamente 1 único bit.",
    "explanation": "A alternativa correta é a letra C. Eles são idênticos/iguais, pois cada \"baud\" (mudança de estado) na FSK transmite exatamente 1 único bit."
  },
  {
    "question": "Se uma placa aplica \"Modulação por Fase\" transferindo 4 bits por baud em uma rede com baud rate de 2400, o Bit Rate real (bps) será:",
    "options": [
      "600 bps.",
      "1200 bps.",
      "2400 bps.",
      "4800 bps.",
      "9600 bps."
    ],
    "answer": "9600 bps.",
    "explanation": "A alternativa correta é a letra E. 9600 bps."
  },
  {
    "question": "Os \"Frames Ethernet\" funcionam essencialmente como \"envelopes\" no ecossistema TCP/IP, qual o papel das placas de rede nesse aspecto?",
    "options": [
      "As placas de rede leem o endereço IPv4 e reescrevem a tabela ARP.",
      "A placa de rede (NIC) apenas trata o pacote TCP/IP como dados puros e os empacota (\"envelopa\") num quadro (frame) com os endereços físicos (MAC) para transitar na fiação local.",
      "As placas anulam o Ethernet e usam CSMA transparente.",
      "A NIC não mexe no frame, deixando isso para o Hub passivo.",
      "Transformam os dados em linguagem C++."
    ],
    "answer": "A placa de rede (NIC) apenas trata o pacote TCP/IP como dados puros e os empacota (\"envelopa\") num quadro (frame) com os endereços físicos (MAC) para transitar na fiação local.",
    "explanation": "A alternativa correta é a letra B. A placa de rede (NIC) apenas trata o pacote TCP/IP como dados puros e os empacota (\"envelopa\") num quadro (frame) com os endereços físicos (MAC) para transitar na fiação local."
  },
  {
    "question": "Um frame possui tamanho fixo máximo pelo padrão original (1500 bytes de carga). Por que decidiram limitar o tamanho do frame na criação da Ethernet?",
    "options": [
      "Para que frames colossais não monopolizassem o cabo compartilhado (agravando colisões) e reduzissem o enorme tempo de retransmissão em caso de um dado ser corrompido.",
      "Porque os fios de cobre explodem acima de 1500 volts.",
      "Para o roteador não estourar a memória Flash NVRAM.",
      "Porque o CSMA não detecta a portadora se passar 1500 nanosegundos.",
      "Foi o limite exigido pelo modelo TCP puro das redes Token Ring."
    ],
    "answer": "Para que frames colossais não monopolizassem o cabo compartilhado (agravando colisões) e reduzissem o enorme tempo de retransmissão em caso de um dado ser corrompido.",
    "explanation": "A alternativa correta é a letra A. Para que frames colossais não monopolizassem o cabo compartilhado (agravando colisões) e reduzissem o enorme tempo de retransmissão em caso de um dado ser corrompido."
  },
  {
    "question": "Em redes que possuem hardware mais lento frente ao Gigabit Ethernet atual, o processamento de milhões de pacotes de 1500 bytes asfixia a máquina. A solução (\"Jumbo Frames\") baseada em pacotes de 9000 bytes ajuda porque:",
    "options": [
      "Diminui o cabo RJ-45 de 8 para 4 fios.",
      "Inverte o bit RS-232 em rajada.",
      "Reduz drasticamente a carga do processador ao exigir menos validações de CRC (cíclico) totais, e diminui a proporção da perda gerada pelos 26 bytes de cabeçalho obrigatório contidos em cada frame.",
      "Envia o IP sem máscara de rede nativa.",
      "Desliga as proteções de MAC address de destino."
    ],
    "answer": "Reduz drasticamente a carga do processador ao exigir menos validações de CRC (cíclico) totais, e diminui a proporção da perda gerada pelos 26 bytes de cabeçalho obrigatório contidos em cada frame.",
    "explanation": "A alternativa correta é a letra C. Reduz drasticamente a carga do processador ao exigir menos validações de CRC (cíclico) totais, e diminui a proporção da perda gerada pelos 26 bytes de cabeçalho obrigatório contidos em cada frame."
  },
  {
    "question": "A desvantagem política dos \"Jumbo Frames\" no ambiente corporativo é:",
    "options": [
      "Eles destroem os cabos Thicknet em 5 dias.",
      "Forçam a instalação de firewalls em todas as portas do Hub.",
      "A quebra com os padrões Ethernet estritos (IEEE). Os jumbo frames ainda não são oficialmente aceitos universalmente, sendo implementados como hacks isolados incompatíveis entre algumas marcas.",
      "Requerem modems de fibra caros em cabos cross-over.",
      "Reduzem a rede a 10 Mbps."
    ],
    "answer": "A quebra com os padrões Ethernet estritos (IEEE). Os jumbo frames ainda não são oficialmente aceitos universalmente, sendo implementados como hacks isolados incompatíveis entre algumas marcas.",
    "explanation": "A alternativa correta é a letra C. A quebra com os padrões Ethernet estritos (IEEE). Os jumbo frames ainda não são oficialmente aceitos universalmente, sendo implementados como hacks isolados incompatíveis entre algumas marcas."
  },
  {
    "question": "Na teoria de falhas de transmissão, se a interferência eletromagnética mudar os valores de 10101 para 11111 em um único frame enviado, isso é formalmente tipificado como:",
    "options": [
      "Erro de Bit (singular).",
      "Erro em Rajada.",
      "Criptografia mal aplicada.",
      "Start bit corrompido.",
      "Colapso por roteamento."
    ],
    "answer": "Erro em Rajada.",
    "explanation": "A alternativa correta é a letra B. Erro em Rajada."
  },
  {
    "question": "Por que os fios de cobre sofrem uma limitação física chamada de \"Largura de Banda\"?",
    "options": [
      "Porque o hardware emissor/receptor das placas não consegue alterar ou reconhecer tensões elétricas instantaneamente; há uma taxa máxima de variação possível do metal antes do sinal se perder num \"borrão\".",
      "Porque o protocolo ICMP impede frequências altas.",
      "Devido ao bloqueio de Firewall integrado no fio.",
      "Porque o endereço IPv6 é longo demais (128 bits).",
      "Nenhuma das alternativas."
    ],
    "answer": "Porque o hardware emissor/receptor das placas não consegue alterar ou reconhecer tensões elétricas instantaneamente; há uma taxa máxima de variação possível do metal antes do sinal se perder num \"borrão\".",
    "explanation": "A alternativa correta é a letra A. Porque o hardware emissor/receptor das placas não consegue alterar ou reconhecer tensões elétricas instantaneamente; há uma taxa máxima de variação possível do metal antes do sinal se perder num \"borrão\"."
  },
  {
    "question": "Qual a diferença elementar entre os Teoremas de Nyquist e o de Shannon na Engenharia de Redes?",
    "options": [
      "Nyquist aborda apenas roteadores BGP, Shannon aborda Switches locais.",
      "Nyquist calculou a espessura da fibra óptica, Shannon calculou o peso do cobre.",
      "Nyquist estabeleceu a fronteira de velocidade teórica num meio perfeitamente isento de ruído. Shannon foi além, impondo o limite matemático inquebrável num mundo real sujeito a interferências/termodinâmica.",
      "Nyquist é exclusivo para TCP, Shannon para UDP.",
      "Shannon diz que a criptografia atrasa a rede; Nyquist nega."
    ],
    "answer": "Nyquist estabeleceu a fronteira de velocidade teórica num meio perfeitamente isento de ruído. Shannon foi além, impondo o limite matemático inquebrável num mundo real sujeito a interferências/termodinâmica.",
    "explanation": "A alternativa correta é a letra C. Nyquist estabeleceu a fronteira de velocidade teórica num meio perfeitamente isento de ruído. Shannon foi além, impondo o limite matemático inquebrável num mundo real sujeito a interferências/termodinâmica."
  },
  {
    "question": "Na topologia de rede \"Ponto-a-Ponto\" conectando N computadores em malha total, qual é a fórmula matemática e a sua maior desvantagem?",
    "options": [
      "N*2. Desvantagem: Falta de privacidade.",
      "(N² - N) / 2. Desvantagem: O altíssimo custo e a inviabilidade física de cabos duplicados passando pelas mesmas calhas e paredes quando o número de máquinas cresce.",
      "N³. Desvantagem: Segurança quase nula.",
      "N/4. Desvantagem: Interceptação total do tráfego.",
      "N-1. Desvantagem: Necessidade de hub."
    ],
    "answer": "(N² - N) / 2. Desvantagem: O altíssimo custo e a inviabilidade física de cabos duplicados passando pelas mesmas calhas e paredes quando o número de máquinas cresce.",
    "explanation": "A alternativa correta é a letra B. (N² - N) / 2. Desvantagem: O altíssimo custo e a inviabilidade física de cabos duplicados passando pelas mesmas calhas e paredes quando o número de máquinas cresce."
  },
  {
    "question": "Por que as \"Redes LAN\" foram inventadas focando nos meios \"compartilhados\" (todos no mesmo cabo/hub) em oposição ao Ponto-a-Ponto?",
    "options": [
      "Para piorar o desempenho e baratear modems.",
      "Para impedir a conexão simultânea ao servidor.",
      "Para eliminar o excesso e a duplicação monstruosa de cabos/custos. Apesar de compartilhados, atuam bem localmente porque o tempo perdido em \"coordenar o tráfego\" no mesmo fio é tolerável em curtas distâncias.",
      "Para abolir o endereço físico MAC.",
      "Exclusivamente para usar o sistema Gigabit por cabos RG-58."
    ],
    "answer": "Para eliminar o excesso e a duplicação monstruosa de cabos/custos. Apesar de compartilhados, atuam bem localmente porque o tempo perdido em \"coordenar o tráfego\" no mesmo fio é tolerável em curtas distâncias.",
    "explanation": "A alternativa correta é a letra C. Para eliminar o excesso e a duplicação monstruosa de cabos/custos. Apesar de compartilhados, atuam bem localmente porque o tempo perdido em \"coordenar o tráfego\" no mesmo fio é tolerável em curtas distâncias."
  },
  {
    "question": "Se o meio físico é compartilhado, por que não se usa redes no estilo \"LAN\" para cruzar estados e formar a Internet (Longas Distâncias)?",
    "options": [
      "Porque os micros precisam \"coordenar\" turnos e esperar o cabo ficar livre; em distâncias gigantes, o sinal elétrico demoraria tanto que o tempo perdido de espera/coordenação seria infinitamente maior que o envio dos dados em si.",
      "Porque o Teorema de Nyquist corta a tensão após 500 metros em cabo Cat 7.",
      "Porque fibras ópticas não funcionam com CSMA/CD.",
      "Porque os cabos Thinnet derretem acima de 200m.",
      "Porque o protocolo OSI proíbe LANs maiores que prédios."
    ],
    "answer": "Porque os micros precisam \"coordenar\" turnos e esperar o cabo ficar livre; em distâncias gigantes, o sinal elétrico demoraria tanto que o tempo perdido de espera/coordenação seria infinitamente maior que o envio dos dados em si.",
    "explanation": "A alternativa correta é a letra A. Porque os micros precisam \"coordenar\" turnos e esperar o cabo ficar livre; em distâncias gigantes, o sinal elétrico demoraria tanto que o tempo perdido de espera/coordenação seria infinitamente maior que o envio dos dados em si."
  },
  {
    "question": "Qual topologia de LAN descreve um equipamento eletrônico central responsável por receber os cabos isolados de cada host?",
    "options": [
      "Topologia de Estrela.",
      "Topologia em Anel FDDI.",
      "Topologia de Barramento Linear.",
      "Topologia Store and Forward.",
      "Topologia Ponto-a-Ponto."
    ],
    "answer": "Topologia de Estrela.",
    "explanation": "A alternativa correta é a letra A. Topologia de Estrela."
  },
  {
    "question": "Nas propriedades estruturais de LANs, se o cabo quebrar, o que ocorre nas Topologias de Estrela e de Barramento (Ethernet)?",
    "options": [
      "Ambas caem integralmente.",
      "Na Estrela, apenas a máquina daquele fio cai (a rede sobrevive). No Barramento, a ruptura do cabo principal (espinha dorsal) paralisa/desabilita toda a rede.",
      "No Barramento o Hub isola a falha, na Estrela o Roteador corrige.",
      "Ambas disparam o processo self healing revertendo pacotes.",
      "As duas continuam comunicando através do anel secundário."
    ],
    "answer": "Na Estrela, apenas a máquina daquele fio cai (a rede sobrevive). No Barramento, a ruptura do cabo principal (espinha dorsal) paralisa/desabilita toda a rede.",
    "explanation": "A alternativa correta é a letra B. Na Estrela, apenas a máquina daquele fio cai (a rede sobrevive). No Barramento, a ruptura do cabo principal (espinha dorsal) paralisa/desabilita toda a rede."
  },
  {
    "question": "Na versão original da Ethernet dos anos 1970 (10BASE5), qual era a mídia, velocidade e limites?",
    "options": [
      "Par trançado (1Gbps), limite de 100m.",
      "Cabo Coaxial \"Ether\" (10 Mbps), limite de segmento de 500m e conectores afastados em no mínimo 3 metros.",
      "Fibra Óptica (100 Mbps), anel FDDI.",
      "Cabo Thinnet BNC (10 Mbps), 185m.",
      "Ponto-a-ponto RS-232, 2400 baud."
    ],
    "answer": "Cabo Coaxial \"Ether\" (10 Mbps), limite de segmento de 500m e conectores afastados em no mínimo 3 metros.",
    "explanation": "A alternativa correta é a letra B. Cabo Coaxial \"Ether\" (10 Mbps), limite de segmento de 500m e conectores afastados em no mínimo 3 metros."
  },
  {
    "question": "Compartilhar um cabo na Topologia de Barramento significa que:",
    "options": [
      "Múltiplos frames são enviados e entrelaçados simultaneamente pelos nós.",
      "As máquinas perdem a segurança e o frame não precisa de MAC Address.",
      "Apenas um computador transmite por vez com \"uso exclusivo\" do cabo naquele microssegundo, enquanto os demais obrigatoriamente entram na fila e esperam.",
      "O cabo envia o pacote fragmentado em modulação FSK infinita.",
      "Não é necessário detectar colisões, apenas rotear os erros."
    ],
    "answer": "Apenas um computador transmite por vez com \"uso exclusivo\" do cabo naquele microssegundo, enquanto os demais obrigatoriamente entram na fila e esperam.",
    "explanation": "A alternativa correta é a letra C. Apenas um computador transmite por vez com \"uso exclusivo\" do cabo naquele microssegundo, enquanto os demais obrigatoriamente entram na fila e esperam."
  },
  {
    "question": "A lógica CSMA (Carrier Sense Multiple Access) numa Ethernet em Barramento estipula que a inteligência do fluxo não está centralizada no HUB, mas sim que:",
    "options": [
      "Todos os nós conectados participam da verificação cooperativa; o próprio computador procura (sente) se há sinal/portadora no cabo antes de liberar sua transmissão.",
      "Um Servidor Mestre aponta um token liberando o tráfego ordenadamente.",
      "O Roteador aplica o SPF em Dijkstra antes de autorizar a linha.",
      "As placas AUI barram as portas indesejadas pelo CSMA/CD.",
      "O CSMA envia \"Pings\" eternos bloqueando as portas seriais."
    ],
    "answer": "Todos os nós conectados participam da verificação cooperativa; o próprio computador procura (sente) se há sinal/portadora no cabo antes de liberar sua transmissão.",
    "explanation": "A alternativa correta é a letra A. Todos os nós conectados participam da verificação cooperativa; o próprio computador procura (sente) se há sinal/portadora no cabo antes de liberar sua transmissão."
  },
  {
    "question": "No CSMA/CD, o que ocorre na \"Detecção de Colisão\" (CD)?",
    "options": [
      "As placas enviam relatórios ao administrador e processam a rede normalmente.",
      "A estação monitora o cabo durante sua própria transmissão; se o sinal que ela capta no fio for diferente/distorcido do sinal limpo que ela enviou, ela conclui que dois sinais se chocaram, abortando imediatamente o envio.",
      "A máquina danifica intencionalmente a placa alheia com pulso negativo.",
      "Troca a frequência das micro-ondas.",
      "Permite a transmissão simultânea convertendo sinais em duplex."
    ],
    "answer": "A estação monitora o cabo durante sua própria transmissão; se o sinal que ela capta no fio for diferente/distorcido do sinal limpo que ela enviou, ela conclui que dois sinais se chocaram, abortando imediatamente o envio.",
    "explanation": "A alternativa correta é a letra B. A estação monitora o cabo durante sua própria transmissão; se o sinal que ela capta no fio for diferente/distorcido do sinal limpo que ela enviou, ela conclui que dois sinais se chocaram, abortando imediatamente o envio."
  },
  {
    "question": "Como se chama a técnica do padrão Ethernet para solucionar as repetições de colisões, forçando o PC a \"dobrar o limite máximo\" que ele pode sortear como tempo de espera a cada choque?",
    "options": [
      "CSMA/CA Backtracking.",
      "Dijkstra Priority Array.",
      "Shortest Path First Timeout.",
      "Binary exponential backoff.",
      "Protocolo de Atraso Vetorial (Distance Delay)."
    ],
    "answer": "Binary exponential backoff.",
    "explanation": "A alternativa correta é a letra D. Binary exponential backoff."
  },
  {
    "question": "O que ocorre se um computador na topologia de Anel (Ring) apresentar queima da placa mãe ou rompimento de cabo?",
    "options": [
      "A placa adjacente converte IP em MAC e a rede continua via Hub.",
      "A topologia Estrela subjacente ativa os caminhos secundários.",
      "Uma vez que os bits precisam trafegar passando fisicamente dentro de cada máquina em círculo, a falha de um único computador ou fio interrompe/desabilita toda a rede instantaneamente.",
      "A rede em Anel não sofre nenhuma instabilidade.",
      "As placas de rede usam infravermelho de escape."
    ],
    "answer": "Uma vez que os bits precisam trafegar passando fisicamente dentro de cada máquina em círculo, a falha de um único computador ou fio interrompe/desabilita toda a rede instantaneamente.",
    "explanation": "A alternativa correta é a letra C. Uma vez que os bits precisam trafegar passando fisicamente dentro de cada máquina em círculo, a falha de um único computador ou fio interrompe/desabilita toda a rede instantaneamente."
  },
  {
    "question": "Redes FDDI usam cabos de Fibra Óptica operando originalmente em 100 Mbps. Como solucionam o risco fatal da quebra do anel?",
    "options": [
      "Instalando Repetidores Multicasting espalhados a cada 500 metros.",
      "Usando dois anéis redundantes em fluxo invertido (Counter Rotation). Na ruptura grave dos cabos, o hardware vizinho interliga os anéis formando uma rota em \"U\" e reconstruindo a malha de modo autônomo (Self Healing).",
      "Usam Hubs ativos passivos em série na topologia Estrela.",
      "Acionam a roteagem de Distance Vector para transpor o bloqueio.",
      "Invertendo a codificação RS-232 via porta Roll-over."
    ],
    "answer": "Usando dois anéis redundantes em fluxo invertido (Counter Rotation). Na ruptura grave dos cabos, o hardware vizinho interliga os anéis formando uma rota em \"U\" e reconstruindo a malha de modo autônomo (Self Healing).",
    "explanation": "A alternativa correta é a letra B. Usando dois anéis redundantes em fluxo invertido (Counter Rotation). Na ruptura grave dos cabos, o hardware vizinho interliga os anéis formando uma rota em \"U\" e reconstruindo a malha de modo autônomo (Self Healing)."
  },
  {
    "question": "O Endereço MAC (Endereço Físico) de 48 bits serve na camada de interface LAN para:",
    "options": [
      "Roteamento mundial em conexões WAN BGP.",
      "Localização exata da longitude e latitude do satélite.",
      "Atuar como filtro primitivo sem depender do CPU; a placa verifica o Destino do pacote e aceita a mensagem para aquele PC ou a ignora se o MAC for alheio.",
      "Traduzir IPv4 para endereços de classe A.",
      "Permitir o uso exclusivo do TCP cego."
    ],
    "answer": "Atuar como filtro primitivo sem depender do CPU; a placa verifica o Destino do pacote e aceita a mensagem para aquele PC ou a ignora se o MAC for alheio.",
    "explanation": "A alternativa correta é a letra C. Atuar como filtro primitivo sem depender do CPU; a placa verifica o Destino do pacote e aceita a mensagem para aquele PC ou a ignora se o MAC for alheio."
  },
  {
    "question": "O Endereço Físico de \"Broadcasting\" (Todos Uns / FF:FF:...) cumpre a função de:",
    "options": [
      "Forçar que todas as interfaces de rede de todos os PCs no meio compartilhado aceitem e enviem o pacote às suas CPUs simultaneamente para análise.",
      "Isolar a comunicação restrita de switches para switches.",
      "Ocultar a presença de vírus e spywares de hackers Pheakers.",
      "Transmitir unicamente para roteadores de borda num IP de porta serial.",
      "Reduzir as colisões via CSMA/CD passivo."
    ],
    "answer": "Forçar que todas as interfaces de rede de todos os PCs no meio compartilhado aceitem e enviem o pacote às suas CPUs simultaneamente para análise.",
    "explanation": "A alternativa correta é a letra A. Forçar que todas as interfaces de rede de todos os PCs no meio compartilhado aceitem e enviem o pacote às suas CPUs simultaneamente para análise."
  },
  {
    "question": "Qual a queixa principal apontada pela apostila contra o uso abusivo do \"Broadcasting\" na rede?",
    "options": [
      "Custa caro porque consome dados do pacote da provedora VPN.",
      "Causa interferência analógica cruzada nas fibras ópticas espirais.",
      "É absurdamente ineficiente computacionalmente; obriga a CPU de todos os microcomputadores (até os que não precisam do dado) a parar e analisar o frame para descobrir que devem descartá-lo, desperdiçando tempo enorme na rede global.",
      "Torna os roteadores passivos.",
      "Quebra as senhas das máquinas remotas em texto limpo."
    ],
    "answer": "É absurdamente ineficiente computacionalmente; obriga a CPU de todos os microcomputadores (até os que não precisam do dado) a parar e analisar o frame para descobrir que devem descartá-lo, desperdiçando tempo enorme na rede global.",
    "explanation": "A alternativa correta é a letra C. É absurdamente ineficiente computacionalmente; obriga a CPU de todos os microcomputadores (até os que não precisam do dado) a parar e analisar o frame para descobrir que devem descartá-lo, desperdiçando tempo enorme na rede global."
  },
  {
    "question": "Em contraposição ao Broadcast, o \"Multicasting\" ajuda a poupar CPUs porque:",
    "options": [
      "Evita usar a rede e manda os arquivos via discos disquetes.",
      "Opera sem cabeçalhos e envia bits em modulação de 1500 bauds.",
      "O hardware das placas de rede (NICs) só captura do cabo e entrega à CPU os pacotes daqueles endereços multicast de serviços específicos nos quais as aplicações já haviam avisado previamente a placa para \"assinar/escutar\". O resto o hardware mesmo destrói sem incomodar a CPU.",
      "Envia apenas um pulso elétrico fixo em 75 Ohms.",
      "Multicast não existe em LANs e só na internet com IP."
    ],
    "answer": "O hardware das placas de rede (NICs) só captura do cabo e entrega à CPU os pacotes daqueles endereços multicast de serviços específicos nos quais as aplicações já haviam avisado previamente a placa para \"assinar/escutar\". O resto o hardware mesmo destrói sem incomodar a CPU.",
    "explanation": "A alternativa correta é a letra C. O hardware das placas de rede (NICs) só captura do cabo e entrega à CPU os pacotes daqueles endereços multicast de serviços específicos nos quais as aplicações já haviam avisado previamente a placa para \"assinar/escutar\". O resto o hardware mesmo destrói sem incomodar a CPU."
  },
  {
    "question": "O que os métodos de identificação de frame do tipo \"Implícito\" exigem entre emissor e receptor?",
    "options": [
      "Que a placa de rede anexe cabos de cobre adicionais.",
      "Como não há campo padrão anexado pelo hardware para avisar o conteúdo, as máquinas emissoras e receptoras já devem concordar rigidamente sobre o formato ou usar os próprios bytes de dados puros para identificar o que conversam.",
      "Exigem IPv6 e pacotes de 128 bytes.",
      "O hub estático rotear o sinal a partir do CRC.",
      "A inclusão de um protocolo exclusivo de segurança no frame explicitamente."
    ],
    "answer": "Como não há campo padrão anexado pelo hardware para avisar o conteúdo, as máquinas emissoras e receptoras já devem concordar rigidamente sobre o formato ou usar os próprios bytes de dados puros para identificar o que conversam.",
    "explanation": "A alternativa correta é a letra B. Como não há campo padrão anexado pelo hardware para avisar o conteúdo, as máquinas emissoras e receptoras já devem concordar rigidamente sobre o formato ou usar os próprios bytes de dados puros para identificar o que conversam."
  },
  {
    "question": "Na seção de \"Análise de Rede\", para evitar que ferramentas de interceptação lícitas operando no modo promíscuo (sniffers) sejam usadas para espiar dados valiosos, a apostila exige:",
    "options": [
      "Substituir os Cabos Thinnet por fibra optica invisível.",
      "Cortar a conexão com a Internet.",
      "O uso obrigatório de protocolos de criptografia na comunicação de dados e a manutenção ostensiva de sistemas sentinelas (IDS) que detectem o grampeamento nas máquinas fora dos testes.",
      "A substituição de todas as placas de rede do formato Estático para Dinâmico.",
      "Operar os PCs apenas em CSMA/CA."
    ],
    "answer": "O uso obrigatório de protocolos de criptografia na comunicação de dados e a manutenção ostensiva de sistemas sentinelas (IDS) que detectem o grampeamento nas máquinas fora dos testes.",
    "explanation": "A alternativa correta é a letra C. O uso obrigatório de protocolos de criptografia na comunicação de dados e a manutenção ostensiva de sistemas sentinelas (IDS) que detectem o grampeamento nas máquinas fora dos testes."
  },
  {
    "question": "Ao processar dados da LAN (1 Gbps), as CPUs são ajudadas pela \"Placa de Rede\" (NIC), que tem como característica essencial de hardware:",
    "options": [
      "Processar cálculos matemáticos de GPU no modelo OSI.",
      "Atuar passivamente no cabo, aguardando o roteador.",
      "Operar como circuito eletrônico independente. Envia e recebe os bits validando cabeçalhos fisicamente e avisa o processador via interrupção (IRQ) somente quando um pacote útil terminar de chegar, livrando a CPU da mastigação binária constante.",
      "Fazer o reencapsulamento de dados MAC diretamente no IP da máquina.",
      "Substituir os multiplexadores pela AUI localmente."
    ],
    "answer": "Operar como circuito eletrônico independente. Envia e recebe os bits validando cabeçalhos fisicamente e avisa o processador via interrupção (IRQ) somente quando um pacote útil terminar de chegar, livrando a CPU da mastigação binária constante.",
    "explanation": "A alternativa correta é a letra C. Operar como circuito eletrônico independente. Envia e recebe os bits validando cabeçalhos fisicamente e avisa o processador via interrupção (IRQ) somente quando um pacote útil terminar de chegar, livrando a CPU da mastigação binária constante."
  },
  {
    "question": "Placas de rede híbridas antigas suportavam 10BASE2 (Thinnet), 10BASE5 (Thicknet) e 10BASE-T (Par Trançado) simultaneamente, sendo correto afirmar que:",
    "options": [
      "A placa trocava o MAC address ao pular de cabo.",
      "Apenas um dos conectores físicos poderia estar em funcionamento/habilitado por software de cada vez; porém o Endereço Físico (MAC) permanecia 100% inalterado (pois reside no firmware da NIC, e não no cabo).",
      "Era permitido enviar em três vias paralelas para somar velocidades.",
      "Os cabos Thin e Thick eram plugados no RJ-45 de par trançado por bridges.",
      "Se o computador desligar a rede inteira cai independentemente do cabo ativo."
    ],
    "answer": "Apenas um dos conectores físicos poderia estar em funcionamento/habilitado por software de cada vez; porém o Endereço Físico (MAC) permanecia 100% inalterado (pois reside no firmware da NIC, e não no cabo).",
    "explanation": "A alternativa correta é a letra B. Apenas um dos conectores físicos poderia estar em funcionamento/habilitado por software de cada vez; porém o Endereço Físico (MAC) permanecia 100% inalterado (pois reside no firmware da NIC, e não no cabo)."
  },
  {
    "question": "No cabeamento \"Thick Ethernet\" (10BASE5), qual peça externa e cabo são requeridos entre o computador e o coaxial principal?",
    "options": [
      "Conector BNC sem hub.",
      "Multiplexador sem energia e fibra de carbono.",
      "Transceiver acoplado cirurgicamente no coaxial mestre e o cabo AUI ligando este transceiver ao encaixe na placa de rede da máquina.",
      "RJ-45 blindado ligado no terminal elétrico central.",
      "A placa pino-a-pino cruzada no cabo Roll-over."
    ],
    "answer": "Transceiver acoplado cirurgicamente no coaxial mestre e o cabo AUI ligando este transceiver ao encaixe na placa de rede da máquina.",
    "explanation": "A alternativa correta é a letra C. Transceiver acoplado cirurgicamente no coaxial mestre e o cabo AUI ligando este transceiver ao encaixe na placa de rede da máquina."
  },
  {
    "question": "Em relação ao fim do cabo \"Thick Ethernet\", o que seria o \"Refletor de sinal\" evitado pelos Terminais?",
    "options": [
      "A repulsão eletrônica (o sinal elétrico bater e voltar) na ausência do Terminal (Terminador) fechando o circuito, o que causaria um efeito \"espelho\", injetando ruído anômalo de retorno no cabo que engolfaria as transmissões úteis.",
      "É o excesso de jumbo frames se fragmentando fora da banda.",
      "É o fenômeno provocado pela quebra do diodo de luz na fibra óptica.",
      "É o resultado de operar em 75 Ohms em banda base pura.",
      "É o sinal de ACK perdido em falhas de roteamento estático."
    ],
    "answer": "A repulsão eletrônica (o sinal elétrico bater e voltar) na ausência do Terminal (Terminador) fechando o circuito, o que causaria um efeito \"espelho\", injetando ruído anômalo de retorno no cabo que engolfaria as transmissões úteis.",
    "explanation": "A alternativa correta é a letra A. A repulsão eletrônica (o sinal elétrico bater e voltar) na ausência do Terminal (Terminador) fechando o circuito, o que causaria um efeito \"espelho\", injetando ruído anômalo de retorno no cabo que engolfaria as transmissões úteis."
  },
  {
    "question": "A vantagem da introdução do Hub no cabeamento 10BASE-T (Par Trançado) foi:",
    "options": [
      "Proibir conexões CSMA na LAN de vez.",
      "Triplicar a velocidade bruta de 10 para 30 Mbps.",
      "Centralizar a topologia em estrela. Isolou conexões ponto-a-ponto (da placa até o hub); logo, uma desconexão física num micro acidentalmente paralisa unicamente ele, mantendo o restante da empresa blindado, superando a instabilidade física da Thinnet.",
      "Isolar perfeitamente o meio, pois o hub se comporta como bridge analógica atuante no nível 3.",
      "Transformar cabos elétricos em radiofrequências satelitais."
    ],
    "answer": "Centralizar a topologia em estrela. Isolou conexões ponto-a-ponto (da placa até o hub); logo, uma desconexão física num micro acidentalmente paralisa unicamente ele, mantendo o restante da empresa blindado, superando a instabilidade física da Thinnet.",
    "explanation": "A alternativa correta é a letra C. Centralizar a topologia em estrela. Isolou conexões ponto-a-ponto (da placa até o hub); logo, uma desconexão física num micro acidentalmente paralisa unicamente ele, mantendo o restante da empresa blindado, superando a instabilidade física da Thinnet."
  },
  {
    "question": "O fator crucial em \"Extensão das LANs\" (Capítulo 2) que impede desenhar e \"esticar\" uma LAN por milhares de quilômetros é o \"Hardware\" e o \"Delay\" que:",
    "options": [
      "Impede a placa de emitir sinais elétricos potentes suficientes para não sumir pelo atrito/resistência (distância limite). A LAN exige tempos curtos de resposta no barramento para que todos sintam portadoras precisas síncronas.",
      "Corta automaticamente conexões por VPN.",
      "Exige IPv6 no modelo FDDI.",
      "Limita conexões de switch ao número N².",
      "Nega cabos RJ-45 com capa Foil blindados."
    ],
    "answer": "Impede a placa de emitir sinais elétricos potentes suficientes para não sumir pelo atrito/resistência (distância limite). A LAN exige tempos curtos de resposta no barramento para que todos sintam portadoras precisas síncronas.",
    "explanation": "A alternativa correta é a letra A. Impede a placa de emitir sinais elétricos potentes suficientes para não sumir pelo atrito/resistência (distância limite). A LAN exige tempos curtos de resposta no barramento para que todos sintam portadoras precisas síncronas."
  },
  {
    "question": "\"Hubs Ativos\" se distanciam dos \"Hubs Passivos\" porque:",
    "options": [
      "O passivo funciona apenas por Bluetooth; o Ativo atua por Wi-Fi.",
      "O Hub passivo é um roteador complexo atuando como firewall e ponte para LAN estendida.",
      "Hubs ativos exigem fonte de energia externa (tomada) e funcionam regenerando (\"amplificando\" ativamente) os pulsos elétricos degradados ao enviar às outras portas, comportando-se efetivamente como Repetidores multiportas.",
      "Hubs ativos isolam as colisões criando segmentos únicos independentes virtuais sem compartilhar barramentos lógicos.",
      "O hub ativo troca os Macs dos computadores dinamicamente."
    ],
    "answer": "Hubs ativos exigem fonte de energia externa (tomada) e funcionam regenerando (\"amplificando\" ativamente) os pulsos elétricos degradados ao enviar às outras portas, comportando-se efetivamente como Repetidores multiportas.",
    "explanation": "A alternativa correta é a letra C. Hubs ativos exigem fonte de energia externa (tomada) e funcionam regenerando (\"amplificando\" ativamente) os pulsos elétricos degradados ao enviar às outras portas, comportando-se efetivamente como Repetidores multiportas."
  },
  {
    "question": "Ao administrar a Rede local, se o gestor impõe uma restrição que checa especificamente o Endereço de Hardware do micro intruso tentando ligar-se à rede, a apostila qualifica isso como o mecanismo do Hub/Switch focado em:",
    "options": [
      "Prevenir interrupção em Jumbo Frames na banda larga.",
      "Evitar sobrecarga de TCP no UDP das filas analógicas.",
      "Proteção contra Intrusão (onde só a máquina com o MAC exato configurado pelo administrador pode ativar fisicamente o fluxo naquela porta).",
      "Repetir sinal na proteção contra interceptação paralela.",
      "Transmitir VPN codificada diretamente para a porta física externa."
    ],
    "answer": "Proteção contra Intrusão (onde só a máquina com o MAC exato configurado pelo administrador pode ativar fisicamente o fluxo naquela porta).",
    "explanation": "A alternativa correta é a letra C. Proteção contra Intrusão (onde só a máquina com o MAC exato configurado pelo administrador pode ativar fisicamente o fluxo naquela porta)."
  },
  {
    "question": "De forma distinta da Intrusão, a \"Proteção contra Interceptação\" no texto defende:",
    "options": [
      "A garantia de que um dado (frame) só vai de fato descer rumo àquela porta específica se a porta coincidir com o endereço do destino do pacote, não injetando tráfego de terceiro em portas indevidas (como o Switch faz nativamente contra grampeadores de hubs passivos).",
      "Barrar IPs chineses e russos baseados na rota BGP restrita de ICMP.",
      "Substituir cabos finos Thinnet por par trançado STP cego.",
      "Bloquear Pings eternos enviados por Hackers para colapsar o CPU do hub.",
      "Eliminar os Jumbo frames com vírus disfarçado."
    ],
    "answer": "A garantia de que um dado (frame) só vai de fato descer rumo àquela porta específica se a porta coincidir com o endereço do destino do pacote, não injetando tráfego de terceiro em portas indevidas (como o Switch faz nativamente contra grampeadores de hubs passivos).",
    "explanation": "A alternativa correta é a letra A. A garantia de que um dado (frame) só vai de fato descer rumo àquela porta específica se a porta coincidir com o endereço do destino do pacote, não injetando tráfego de terceiro em portas indevidas (como o Switch faz nativamente contra grampeadores de hubs passivos)."
  },
  {
    "question": "Na Extensão da LAN via Fibra Óptica usando dois \"Modems de Fibra\", a limitação principal dessa façanha em quilômetros reside em:",
    "options": [
      "Não consegue transmitir dados na velocidade da luz do laser.",
      "Interrompe a comunicação de switches e inviabiliza protocolos ARP.",
      "Possui um altíssimo custo de infraestrutura e aluguel de linha/equipamentos para aplicar modems ópticos a cada conexão individual remota exigida pela arquitetura.",
      "Perde os frames CSMA/CD completamente por latência da propagação nula.",
      "Funciona exclusivamente no modelo de Camadas IPv5."
    ],
    "answer": "Possui um altíssimo custo de infraestrutura e aluguel de linha/equipamentos para aplicar modems ópticos a cada conexão individual remota exigida pela arquitetura.",
    "explanation": "A alternativa correta é a letra C. Possui um altíssimo custo de infraestrutura e aluguel de linha/equipamentos para aplicar modems ópticos a cada conexão individual remota exigida pela arquitetura."
  },
  {
    "question": "Repetidores Analógicos trazem a enorme desvantagem de não identificarem um frame Ethernet. E por isso:",
    "options": [
      "Substituem os MACs das máquinas originárias pelo MAC do repetidor no pacote.",
      "Bloqueiam a internet porque não entendem de TCP.",
      "Rejeitam comunicação em Full Duplex.",
      "Propagam absolutamente todo lixo/onda captado cegamente, replicando sinais já alterados por ruídos ou colisões (corrompidos) adiante, ampliando a doença elétrica na malha.",
      "Permitem que o roteamento dinâmico entre em loop infinito inquebrável."
    ],
    "answer": "Propagam absolutamente todo lixo/onda captado cegamente, replicando sinais já alterados por ruídos ou colisões (corrompidos) adiante, ampliando a doença elétrica na malha.",
    "explanation": "A alternativa correta é a letra D. Propagam absolutamente todo lixo/onda captado cegamente, replicando sinais já alterados por ruídos ou colisões (corrompidos) adiante, ampliando a doença elétrica na malha."
  },
  {
    "question": "O que faz da \"Bridge\" uma tecnologia inteligente à altura da camada 2 (Enlace)?",
    "options": [
      "Constrói links satelitais com transponders BNC.",
      "Impede pacotes com Checksum embutidos e bloqueia conexões BGP.",
      "Extrai e lê o cabeçalho completo do frame para isolar tráfegos (se as duas máquinas estiverem no mesmo lado da ponte, o quadro nem atravessa para a rede alheia, economizando recursos de forma formidável).",
      "Encapsula pacotes WAN por redes Thinnet.",
      "Retransmite por rádio FSK se a bridge detectar colapso de infravermelho."
    ],
    "answer": "Extrai e lê o cabeçalho completo do frame para isolar tráfegos (se as duas máquinas estiverem no mesmo lado da ponte, o quadro nem atravessa para a rede alheia, economizando recursos de forma formidável).",
    "explanation": "A alternativa correta é a letra C. Extrai e lê o cabeçalho completo do frame para isolar tráfegos (se as duas máquinas estiverem no mesmo lado da ponte, o quadro nem atravessa para a rede alheia, economizando recursos de forma formidável)."
  },
  {
    "question": "Quando uma LAN contendo uma Bridge acabou de ser completamente religada da tomada (fase Startup):",
    "options": [
      "Ela já carrega de fábrica uma EPROM cheia de endereços MAC válidos globais.",
      "Entra em pânico mandando \"Time Exceeded\" para o provedor de backbone.",
      "Ela atua desmemoriada (como hub) propagando os envios para a \"porta vizinha\" porque não tem tabela de máquinas ainda. Só entra em \"Steady State\" após os micros passarem a conversar e ela mapear ativamente onde está a origem de quem falou.",
      "Desliga a rede por 5 minutos devido ao \"binary exponential delay\".",
      "Transforma o cabeamento num circuito Token Ring."
    ],
    "answer": "Ela atua desmemoriada (como hub) propagando os envios para a \"porta vizinha\" porque não tem tabela de máquinas ainda. Só entra em \"Steady State\" após os micros passarem a conversar e ela mapear ativamente onde está a origem de quem falou.",
    "explanation": "A alternativa correta é a letra C. Ela atua desmemoriada (como hub) propagando os envios para a \"porta vizinha\" porque não tem tabela de máquinas ainda. Só entra em \"Steady State\" após os micros passarem a conversar e ela mapear ativamente onde está a origem de quem falou."
  },
  {
    "question": "A apostila enfatiza que Roteadores (\"computadores de uso específico\") efetuam uma tarefa inusitada no encapsulamento nos saltos do modelo OSI (Camadas 1, 2 e 3):",
    "options": [
      "O IP de origem e IP de destino (Camada 3) viajam sem alterações; entretanto a casca da Camada 2 (o Endereço MAC) morre e renasce repetidamente (é refeito) a cada roteador que atua no pulo inter-redes.",
      "Os roteadores trocam todos os IPs internos pelo IP global e mudam o MTU do TCP.",
      "Roteadores não mexem na Camada 2, somente na Camada 4 com conversão de portas UDP.",
      "O MAC Address é conservado original desde a China até o Brasil intacto em pacotes BGP, garantindo rastreabilidade do computador físico emissor.",
      "A Camada Física (1) embute um novo Endereço MAC em 15 Volts ignorando o cabo UTP."
    ],
    "answer": "O IP de origem e IP de destino (Camada 3) viajam sem alterações; entretanto a casca da Camada 2 (o Endereço MAC) morre e renasce repetidamente (é refeito) a cada roteador que atua no pulo inter-redes.",
    "explanation": "A alternativa correta é a letra A. O IP de origem e IP de destino (Camada 3) viajam sem alterações; entretanto a casca da Camada 2 (o Endereço MAC) morre e renasce repetidamente (é refeito) a cada roteador que atua no pulo inter-redes."
  },
  {
    "question": "Um roteador atende sempre no mínimo a quantas sub-redes ativas?",
    "options": [
      "Apenas 1 rede global por interface serial de fibra.",
      "Três sub-redes obrigatoriamente.",
      "Duas sub-redes (no mínimo), já que roteadores não direcionam pacotes \"dentro da mesma sub-rede\" e conectam vizinhos lógicos diferentes atuando como Gateway.",
      "Infinidade ilimitada sem limite de escopos de rádio microondas.",
      "Redes isoladas que não se utilizem do IPv4 e IPv6 simultaneamente."
    ],
    "answer": "Duas sub-redes (no mínimo), já que roteadores não direcionam pacotes \"dentro da mesma sub-rede\" e conectam vizinhos lógicos diferentes atuando como Gateway.",
    "explanation": "A alternativa correta é a letra C. Duas sub-redes (no mínimo), já que roteadores não direcionam pacotes \"dentro da mesma sub-rede\" e conectam vizinhos lógicos diferentes atuando como Gateway."
  },
  {
    "question": "Sob a ótica do \"Switching\", o que ele simula exatamente se destrinchado tecnicamente?",
    "options": [
      "Um hub em cascata operando como Repetidor multiportas.",
      "Roteadores executando o algoritmo Dijkstra para cada PC de origem.",
      "Uma rede de Bridges ultrarrápidas onde a essência final garante o paralelismo absoluto, conectando canais exclusivos isolados (1 PC por segmento) permitindo dezenas de diálogos sem o CSMA frear ou colidir.",
      "A substituição completa do modelo OSI pelo protocolo SMTP isolado.",
      "Uma rede Wi-Fi através de meios físicos com cabos de rádio frequência."
    ],
    "answer": "Uma rede de Bridges ultrarrápidas onde a essência final garante o paralelismo absoluto, conectando canais exclusivos isolados (1 PC por segmento) permitindo dezenas de diálogos sem o CSMA frear ou colidir.",
    "explanation": "A alternativa correta é a letra C. Uma rede de Bridges ultrarrápidas onde a essência final garante o paralelismo absoluto, conectando canais exclusivos isolados (1 PC por segmento) permitindo dezenas de diálogos sem o CSMA frear ou colidir."
  },
  {
    "question": "Quando discutida a ampliação extrema (WAN), a diferença prática entre LAN e WAN ressalta que:",
    "options": [
      "WANs descartam pacotes automaticamente por serem grandes demais (Jumbo frames bloqueados).",
      "A LAN esticada artificialmente com bridges/fibras não suporta \"ramificações multi-lados\" complexas e interligação infinita massiva simultânea. A WAN foi concebida por hardwares escaláveis e \"Packet Switches\" criados sob medida para crescer sem estourar o limite de gestão da fiação.",
      "LAN usa TCP e WAN usa unicamente UDP de vídeo.",
      "LANs tem IP fixo e WANs possuem endereçamento unicamente MAC configurável EPROM.",
      "Ambas operam sob as mesmas normas mecânicas IEEE 802.3 padrão 10BASE5."
    ],
    "answer": "A LAN esticada artificialmente com bridges/fibras não suporta \"ramificações multi-lados\" complexas e interligação infinita massiva simultânea. A WAN foi concebida por hardwares escaláveis e \"Packet Switches\" criados sob medida para crescer sem estourar o limite de gestão da fiação.",
    "explanation": "A alternativa correta é a letra B. A LAN esticada artificialmente com bridges/fibras não suporta \"ramificações multi-lados\" complexas e interligação infinita massiva simultânea. A WAN foi concebida por hardwares escaláveis e \"Packet Switches\" criados sob medida para crescer sem estourar o limite de gestão da fiação."
  },
  {
    "question": "Nos Equipamentos \"Packet Switches\" das WANs de companhias de telecomunicação, as interfaces de transmissão se comportam assim:",
    "options": [
      "Todas lentas e síncronas.",
      "Todas rápidas e sem limite imposto pelo cobre.",
      "As interfaces do núcleo/backbone do Switch voltadas à \"outros Packet Switches\" longínquos disparam altíssimas velocidades em mídias alugadas puras; enquanto as \"pontas\" presas aos computadores dos clientes comuns limitam os enlaces locais a \"baixas velocidades\" assíncronas residenciais/empresariais.",
      "Os links operam com o sinal elétrico FSK invertido em fase logarítmica analógica.",
      "Enviam apenas quadros baseados em infravermelho de 4 bits."
    ],
    "answer": "As interfaces do núcleo/backbone do Switch voltadas à \"outros Packet Switches\" longínquos disparam altíssimas velocidades em mídias alugadas puras; enquanto as \"pontas\" presas aos computadores dos clientes comuns limitam os enlaces locais a \"baixas velocidades\" assíncronas residenciais/empresariais.",
    "explanation": "A alternativa correta é a letra C. As interfaces do núcleo/backbone do Switch voltadas à \"outros Packet Switches\" longínquos disparam altíssimas velocidades em mídias alugadas puras; enquanto as \"pontas\" presas aos computadores dos clientes comuns limitam os enlaces locais a \"baixas velocidades\" assíncronas residenciais/empresariais."
  },
  {
    "question": "O método de Store and Forward (WANs) assegura:",
    "options": [
      "Transmissão desordenada em tempo real com \"zero delay\" e descartabilidade ativa de erros.",
      "A recusa do TCP em quadros maiores que 185 metros.",
      "Que um satélite baixe o link-state do SPF num piscar de olhos e troque roteadores.",
      "Evitar travamentos num roteamento convergente. Um frame sendo \"estocado num buffer RAM interno\", com o cabeçalho lido localmente e só então \"encaminhado\" em paz sem chocar com outros trens de pacotes engarrafados naquela via de saída disputada.",
      "A eliminação pura das memórias SRAM do Switch em benefício de latência zero real."
    ],
    "answer": "Evitar travamentos num roteamento convergente. Um frame sendo \"estocado num buffer RAM interno\", com o cabeçalho lido localmente e só então \"encaminhado\" em paz sem chocar com outros trens de pacotes engarrafados naquela via de saída disputada.",
    "explanation": "A alternativa correta é a letra D. Evitar travamentos num roteamento convergente. Um frame sendo \"estocado num buffer RAM interno\", com o cabeçalho lido localmente e só então \"encaminhado\" em paz sem chocar com outros trens de pacotes engarrafados naquela via de saída disputada."
  },
  {
    "question": "Como a maioria das WANs resolve o endereçamento interno físico num sistema massivo e não engarrafar a gestão mundial?",
    "options": [
      "Enviando broadcast para perguntar onde cada micro fica com IP estático.",
      "Eliminando o endereçamento no processo do pacote e mandando às cegas como no Hub.",
      "Com roteamento e Endereçamento Hierárquico: o próprio \"número MAC local\" denuncia e carrega em seu prefixo os dados de qual Switch Mãe abarca aquela zona, facilitando os saltos para caminhos maiores (\"Next-Hop\") sem se aprofundar na porta de imediato.",
      "Revertendo aos cabos Coaxiais grossos de 75 Ohms.",
      "Bloqueando pacotes sem IPv6 (ST)."
    ],
    "answer": "Com roteamento e Endereçamento Hierárquico: o próprio \"número MAC local\" denuncia e carrega em seu prefixo os dados de qual Switch Mãe abarca aquela zona, facilitando os saltos para caminhos maiores (\"Next-Hop\") sem se aprofundar na porta de imediato.",
    "explanation": "A alternativa correta é a letra C. Com roteamento e Endereçamento Hierárquico: o próprio \"número MAC local\" denuncia e carrega em seu prefixo os dados de qual Switch Mãe abarca aquela zona, facilitando os saltos para caminhos maiores (\"Next-Hop\") sem se aprofundar na porta de imediato."
  },
  {
    "question": "Na gerência de \"Rotas Padrão\" (Default Route), o ganho para a Routing Table (Tabela de Roteamento WAN) ocorre porque:",
    "options": [
      "Multiplica as bordas do Dijkstra a níveis negativos (simplificando pesos).",
      "Impede o tráfego do SPF localmente fechando brechas.",
      "Permite \"Condensar/Simplificar\" e limpar entradas repetitivas pesadas nas tabelas de milhares de IPs desconhecidos que convergem para uma \"única e mesma saída\" englobante rumo à nuvem externa, aliviando o processamento do hardware.",
      "Descobre se o computador foi furtado alterando o endereço por Ping de intrusão.",
      "Reverte todos os modems ao modo Stand-By assíncrono."
    ],
    "answer": "Permite \"Condensar/Simplificar\" e limpar entradas repetitivas pesadas nas tabelas de milhares de IPs desconhecidos que convergem para uma \"única e mesma saída\" englobante rumo à nuvem externa, aliviando o processamento do hardware.",
    "explanation": "A alternativa correta é a letra C. Permite \"Condensar/Simplificar\" e limpar entradas repetitivas pesadas nas tabelas de milhares de IPs desconhecidos que convergem para uma \"única e mesma saída\" englobante rumo à nuvem externa, aliviando o processamento do hardware."
  },
  {
    "question": "Comparando Roteamento Estático x Dinâmico nas WANs, o Estático:",
    "options": [
      "Permite corrigir falhas no link em 3 segundos.",
      "É mais simplório e inibe erros computacionais (processa instantâneo e gasta menos RAM do equipamento), mas padece da inflexibilidade terminal onde um pino caído apaga a vida daquela rota e requer manutenção/humana manual in loco ou configuração explícita.",
      "Descarta a tabela se ocorrer o erro SPF.",
      "É o algoritmo primário do protocolo OSPF dinâmico.",
      "Limita a largura de banda."
    ],
    "answer": "É mais simplório e inibe erros computacionais (processa instantâneo e gasta menos RAM do equipamento), mas padece da inflexibilidade terminal onde um pino caído apaga a vida daquela rota e requer manutenção/humana manual in loco ou configuração explícita.",
    "explanation": "A alternativa correta é a letra B. É mais simplório e inibe erros computacionais (processa instantâneo e gasta menos RAM do equipamento), mas padece da inflexibilidade terminal onde um pino caído apaga a vida daquela rota e requer manutenção/humana manual in loco ou configuração explícita."
  },
  {
    "question": "Algoritmo de Dijkstra descreve e prioriza em sua equação computacional:",
    "options": [
      "Tabelas MAC em CSMA/CD em redes finas.",
      "Tempo perdido em colisão por bit de parada negativo no cabo RS-232.",
      "Caminhos limitados a redes sem conexão que transportem áudio e vídeo por multicast de classe D.",
      "Buscar o \"Caminho Mais Curto\" entre computadores/nós de rede gerando tabelas usando valores de pesos inteiramente \"não-negativos\" distribuídos por cada borda/vínculo desenhada da topologia analítica do software para otimização de rotas exatas de custo mínimo.",
      "Descarta quadros jumbo para rotear dados em menos de 1221 ns na rede FDDI paralela."
    ],
    "answer": "Buscar o \"Caminho Mais Curto\" entre computadores/nós de rede gerando tabelas usando valores de pesos inteiramente \"não-negativos\" distribuídos por cada borda/vínculo desenhada da topologia analítica do software para otimização de rotas exatas de custo mínimo.",
    "explanation": "A alternativa correta é a letra D. Buscar o \"Caminho Mais Curto\" entre computadores/nós de rede gerando tabelas usando valores de pesos inteiramente \"não-negativos\" distribuídos por cada borda/vínculo desenhada da topologia analítica do software para otimização de rotas exatas de custo mínimo."
  },
  {
    "question": "Roteadores que utilizam algoritmos derivados de \"Distância Vetorial\" (Distance Vector) carregam uma assinatura mecânica intrínseca em suas tabelas de banco de dados, sendo ela:",
    "options": [
      "O IP de loopback.",
      "O prefixo BNC estendido.",
      "Campos/Colunas adicionais explícitas obrigando a Tabela a reter as memórias e números gravados brutos relativos a \"Distância (soma de pesos e pulos)\" de cada elo correspondendo a cada porta do destino à frente, onerando trocas pesadas inteiras entre Switches.",
      "O registro da máscara de Categoria UTP Cat 7 do enlace Físico subjacente.",
      "Os contadores lógicos de retransmissão de parada assíncrona."
    ],
    "answer": "Campos/Colunas adicionais explícitas obrigando a Tabela a reter as memórias e números gravados brutos relativos a \"Distância (soma de pesos e pulos)\" de cada elo correspondendo a cada porta do destino à frente, onerando trocas pesadas inteiras entre Switches.",
    "explanation": "A alternativa correta é a letra C. Campos/Colunas adicionais explícitas obrigando a Tabela a reter as memórias e números gravados brutos relativos a \"Distância (soma de pesos e pulos)\" de cada elo correspondendo a cada porta do destino à frente, onerando trocas pesadas inteiras entre Switches."
  },
  {
    "question": "Já Roteadores modernos baseados em Link-State (SPF/OSPF), driblam as deficiências brutais mandando que tipos de mensagens a seus pares na internet no lugar das tabelas prontas?",
    "options": [
      "Notícias e avisos contendo apenas o \"Estado/Status do Vínculo\" e do enlace entre os roteadores fronteiriços (ex: \"Meu fio com o PC3 está rápido\"), deixando que cada um ali monte e reconstrua seu gráfico e seu Dijkstra independentemente sem receber massas imensas das rotas inteiras de terceiros.",
      "Avisos com a tabela de Broadcast MAC local completa.",
      "Mensagens em ARP que acusam que a ponte analógica Thicknet foi rompida.",
      "Sinais elétricos limitados em infravermelho de 4 bits em satélites BGP transponders de rajadas.",
      "Notícias do protocolo ST focado em áudio IPv5 nativo do TCP cego."
    ],
    "answer": "Notícias e avisos contendo apenas o \"Estado/Status do Vínculo\" e do enlace entre os roteadores fronteiriços (ex: \"Meu fio com o PC3 está rápido\"), deixando que cada um ali monte e reconstrua seu gráfico e seu Dijkstra independentemente sem receber massas imensas das rotas inteiras de terceiros.",
    "explanation": "A alternativa correta é a letra A. Notícias e avisos contendo apenas o \"Estado/Status do Vínculo\" e do enlace entre os roteadores fronteiriços (ex: \"Meu fio com o PC3 está rápido\"), deixando que cada um ali monte e reconstrua seu gráfico e seu Dijkstra independentemente sem receber massas imensas das rotas inteiras de terceiros."
  },
  {
    "question": "Os conceitos mercadológicos da Apostila citam as Categorias: Redes de Proprietário (Pública vs Privada). Uma WAN seria ainda considerada \"Rede Privada\" restrita mesmo que se extenda pelo Brasil alugando cabos/espinhas da Embratel Pública e da Telefonia?",
    "options": [
      "Não, porque fios públicos tornam qualquer tráfego capturável e público irremediavelmente (fim do isolamento MAC).",
      "Apenas se a empresa pagar pelos bits usando o Teorema de Nyquist de blindagem física de chumbo no chão metropolitano.",
      "Sim, porque o contrato de serviço prevê uma segregação do circuito virtual/alugado (ou tunelado). Nenhum outro assinante ou corporação externa tem visibilidade, injeta quadros ou intercepta os dados dentro daquele tubo logístico alugado aos roteadores daquela empresa.",
      "Não, WANs só são privadas quando instalam postes próprios e fibras na rua.",
      "Apenas se todas as redes passarem a usar hub pino-a-pino cruzados isolados."
    ],
    "answer": "Sim, porque o contrato de serviço prevê uma segregação do circuito virtual/alugado (ou tunelado). Nenhum outro assinante ou corporação externa tem visibilidade, injeta quadros ou intercepta os dados dentro daquele tubo logístico alugado aos roteadores daquela empresa.",
    "explanation": "A alternativa correta é a letra C. Sim, porque o contrato de serviço prevê uma segregação do circuito virtual/alugado (ou tunelado). Nenhum outro assinante ou corporação externa tem visibilidade, injeta quadros ou intercepta os dados dentro daquele tubo logístico alugado aos roteadores daquela empresa."
  },
  {
    "question": "Na mesma vertente, o advento técnico fundamental de Virtual Private Networks (VPNs) viabilizou para os gerentes globais:",
    "options": [
      "Extinguir os softwares limitantes das VPN e atuar enviando sinais via microondas analógicas direcionais nas capitais sem internet.",
      "Acabar com o custo abusivo de IP Dinâmico substituindo por IPs fixos nas LANs caseiras do modelo 10BASE-T RJ-45 de par não trançado.",
      "Evadir do elevadíssimo valor de links alugados puros \"Private\", adotando o próprio e confuso mar turbulento das Conexões Públicas de Internet para atuar, mas instalando softwares criptográficos na porta de borda que trancam, envelopam e garantem que o tráfego passe imune pela nuvem suja externa e só se torne legível perante parceiros da mesma companhia nos locais finais, de fato juntando mundos virtualmente.",
      "Proibir as transmissões via TCP/IP na sub-rede isolando e descartando o checksum defeituoso.",
      "Diminuir radicalmente a latência em redes de VoIP por vídeo, já que o VPN descarta os Jumbo Frames não autenticados pelas portadoras Carrier Sense (CSMA) satelitais."
    ],
    "answer": "Evadir do elevadíssimo valor de links alugados puros \"Private\", adotando o próprio e confuso mar turbulento das Conexões Públicas de Internet para atuar, mas instalando softwares criptográficos na porta de borda que trancam, envelopam e garantem que o tráfego passe imune pela nuvem suja externa e só se torne legível perante parceiros da mesma companhia nos locais finais, de fato juntando mundos virtualmente.",
    "explanation": "A alternativa correta é a letra C. Evadir do elevadíssimo valor de links alugados puros \"Private\", adotando o próprio e confuso mar turbulento das Conexões Públicas de Internet para atuar, mas instalando softwares criptográficos na porta de borda que trancam, envelopam e garantem que o tráfego passe imune pela nuvem suja externa e só se torne legível perante parceiros da mesma companhia nos locais finais, de fato juntando mundos virtualmente."
  },
  {
    "question": "Em redes e Interfaces, existem transmissões categorizadas como \"Serviço Orientado a Conexão\". Tal como na telefonia, um sistema baseado nesse preceito tem etapas intrínsecas e uma regalia específica:",
    "options": [
      "O pacote dispensa totalmente qualquer IP.",
      "Emite-se e-mails num piscar de olhos e quem estiver ligado lerá em Multicast, contornando a demora.",
      "Ele requer primeiramente que máquinas negociem e entrem num consenso de aperto de mão abrindo o diálogo lógico firme. Possuindo a enorme regalia e virtude técnica de avisar as partes que operam no tubo IMEDIATAMENTE e abruptamente se aquele laço foi rompido fisicamente ou lógicamente ali pelo trajeto.",
      "Não utiliza de modulação e atua como FSK cego.",
      "Emula a entrega de datagramas soltos independentes via SMTP cego pelo roteador de Borda."
    ],
    "answer": "Ele requer primeiramente que máquinas negociem e entrem num consenso de aperto de mão abrindo o diálogo lógico firme. Possuindo a enorme regalia e virtude técnica de avisar as partes que operam no tubo IMEDIATAMENTE e abruptamente se aquele laço foi rompido fisicamente ou lógicamente ali pelo trajeto.",
    "explanation": "A alternativa correta é a letra C. Ele requer primeiramente que máquinas negociem e entrem num consenso de aperto de mão abrindo o diálogo lógico firme. Possuindo a enorme regalia e virtude técnica de avisar as partes que operam no tubo IMEDIATAMENTE e abruptamente se aquele laço foi rompido fisicamente ou lógicamente ali pelo trajeto."
  },
  {
    "question": "Contraposto, o \"Serviço sem Conexão\" (como as cartas no correio analógico) ganha vantagem por quê?",
    "options": [
      "Ele detém agilidade imensa num momento vital: dispensa os segundos críticos gastos construindo canais (handshakes e sincronizações longas). A placa cospe os quadros avulsos instantaneamente na vala cega do meio com o rótulo de destino e pronto (o roteador que se vire nas bifurcações e esperas). O ônus trágico é a falta da acusação imediata se a internet morrer nos fios à frente depois da porta.",
      "Força os roteadores a atuarem com SPF rigoroso travando conexões longas de VPN com ICMP cego de Time Exceeded limitante da camada de Aplicação de portas RS-232 em transceptores de espelho final (Thin Ethernet coaxial banda estreita).",
      "Exige IPv6 no túnel.",
      "Limita conexões de switch ao número de hubs.",
      "Reflete o sinal na ponta do packet switch."
    ],
    "answer": "Ele detém agilidade imensa num momento vital: dispensa os segundos críticos gastos construindo canais (handshakes e sincronizações longas). A placa cospe os quadros avulsos instantaneamente na vala cega do meio com o rótulo de destino e pronto (o roteador que se vire nas bifurcações e esperas). O ônus trágico é a falta da acusação imediata se a internet morrer nos fios à frente depois da porta.",
    "explanation": "A alternativa correta é a letra A. Ele detém agilidade imensa num momento vital: dispensa os segundos críticos gastos construindo canais (handshakes e sincronizações longas). A placa cospe os quadros avulsos instantaneamente na vala cega do meio com o rótulo de destino e pronto (o roteador que se vire nas bifurcações e esperas). O ônus trágico é a falta da acusação imediata se a internet morrer nos fios à frente depois da porta."
  },
  {
    "question": "As tecnologias se confundem ao medir \"Delay\" (Retardo global). O tempo puro consumido e refém estritamente do pulso físico e da luz trafegando no vidro das fibras ou do elétron serpenteando pelo emaranhado metálico esticado da América a Europa é o retardo nomeado de:",
    "options": [
      "Queuing Delay (De Fila / Enfileiramento).",
      "Access Delay (De Acesso livre do CSMA de porta/colisão e disputa do silêncio no RJ-45).",
      "Switching Delay (O equipamento de inteligência eletrônica da nuvem gastando nanosegundos ou milissegundos pensando no header do pacote antes de soltá-lo do processador adiante).",
      "Delay de Propagação (Retardo nativo de curso físico intrínseco, que se agiganta e atinge picos nos satélites geoestacionários altíssimos que orbitam e pingam de volta os dados em ondas longas e latentes à Terra, atrasando ligações transoceânicas num silêncio mudo crônico inevitável na casa dos milissegundos longos e limitadores).",
      "Nenhuma é correta e esse tempo é imensurável pelas regras do Protocolo ST."
    ],
    "answer": "Delay de Propagação (Retardo nativo de curso físico intrínseco, que se agiganta e atinge picos nos satélites geoestacionários altíssimos que orbitam e pingam de volta os dados em ondas longas e latentes à Terra, atrasando ligações transoceânicas num silêncio mudo crônico inevitável na casa dos milissegundos longos e limitadores).",
    "explanation": "A alternativa correta é a letra D. Delay de Propagação (Retardo nativo de curso físico intrínseco, que se agiganta e atinge picos nos satélites geoestacionários altíssimos que orbitam e pingam de volta os dados em ondas longas e latentes à Terra, atrasando ligações transoceânicas num silêncio mudo crônico inevitável na casa dos milissegundos longos e limitadores)."
  },
  {
    "question": "Já o tempo dispendido esperando o Cabo de Barramento ficar com \"sinal livre de ruído portador de rádio e vazio\" após outros computadores terminarem sua cantoria de dados na malha para podermos disparar no modelo Token ou Ethernet/CSMA é o:",
    "options": [
      "Delay de Acesso.",
      "Delay Magnético de Transmissão contínua assíncrona pino a pino em Roll over estático da ROM central com o roteador na fila e desabilitando Jumbo e AUI.",
      "Delay do Hub Passivo da Interface.",
      "Delay de Criptografia Analítica OSPF da tabela Distância Vetorial.",
      "Delay de Propagação Elétrica de Velocidade Constante e Infinita da Fibrótica de 4 Canais Analógicos."
    ],
    "answer": "Delay de Acesso.",
    "explanation": "A alternativa correta é a letra A. Delay de Acesso."
  },
  {
    "question": "O Ritmo de Transferência Efetivo (Throughput do mundo real com arquivos da rede IP em bps rodando) medido nos testes é sempre inegavelmente MENOR (tem perda e não atinge o pico teto prometido e estampado como máxima largura de banda pelo vendedor do hardware de cabeamento). Por quê?",
    "options": [
      "Por que as fabricantes sabotam os hubs.",
      "Em virtude do Teorema de Nyquist limitar redes locais por software.",
      "Devido aos Hackers Phenakers injetarem \"crosstalk\" nos provedores.",
      "Em grande parte, pois nos limites puros entram inevitavelmente na malha toneladas incontáveis de perdas nos Bytes \"burocráticos\", inúteis aos softwares lógicos (Overhead): Os Cabeçalhos engarrafando o caminho (os Metadados, IPs, MACs, CRCs, Extensões acoplados por cada camada da pilha OSI no dado real na emissão), entupindo e devorando fatias pesadas dos bytes teóricos com papéis de controle não mensuráveis pelo usuário do fim da linha, sangrando capacidade vital do meio perante a propaganda do link limpo sem metadados pesados anexos.",
      "Porque apenas a FDDI opera na largura de banda infinita livre sem headers."
    ],
    "answer": "Em grande parte, pois nos limites puros entram inevitavelmente na malha toneladas incontáveis de perdas nos Bytes \"burocráticos\", inúteis aos softwares lógicos (Overhead): Os Cabeçalhos engarrafando o caminho (os Metadados, IPs, MACs, CRCs, Extensões acoplados por cada camada da pilha OSI no dado real na emissão), entupindo e devorando fatias pesadas dos bytes teóricos com papéis de controle não mensuráveis pelo usuário do fim da linha, sangrando capacidade vital do meio perante a propaganda do link limpo sem metadados pesados anexos.",
    "explanation": "A alternativa correta é a letra D. Em grande parte, pois nos limites puros entram inevitavelmente na malha toneladas incontáveis de perdas nos Bytes \"burocráticos\", inúteis aos softwares lógicos (Overhead): Os Cabeçalhos engarrafando o caminho (os Metadados, IPs, MACs, CRCs, Extensões acoplados por cada camada da pilha OSI no dado real na emissão), entupindo e devorando fatias pesadas dos bytes teóricos com papéis de controle não mensuráveis pelo usuário do fim da linha, sangrando capacidade vital do meio perante a propaganda do link limpo sem metadados pesados anexos."
  },
  {
    "question": "O que significa afirmar teoricamente e medir do produto matemático entre Ritmo de Transferências e o Delay da Rede estipulada da LAN corporativa gigante?",
    "options": [
      "Dá a fórmula mágica em volts exigida para o cabo RS-232 funcionar.",
      "Dá a resposta do tempo de queda total por CSMA sem exponencial limitante do cabo UTP.",
      "Gera o volume bruto/quantidade absurda massiva e perigosa de Dados que preenchem (estão presentes/flutuantes contidos ali invisivelmente) inteiramente o \"cano físico da fiação\" até explodir num receptor na frente. (Mostra que no enlace gordo e latente de satélite a emissora cospe volumes colossais antes de o cara lá sentir a recepção do primeiro byte da resposta dele de volta à malha do cabo, enchendo o trajeto a granel sem limite imediato de controle da colisão terminal e de descarte).",
      "Mostra quantos hubs são tolerados num anel antes de ruir.",
      "Significa a bitolagem física em milímetros de Grossura na capa amarela (Thicknet coaxial em AUI pinagem transceptor)."
    ],
    "answer": "Gera o volume bruto/quantidade absurda massiva e perigosa de Dados que preenchem (estão presentes/flutuantes contidos ali invisivelmente) inteiramente o \"cano físico da fiação\" até explodir num receptor na frente. (Mostra que no enlace gordo e latente de satélite a emissora cospe volumes colossais antes de o cara lá sentir a recepção do primeiro byte da resposta dele de volta à malha do cabo, enchendo o trajeto a granel sem limite imediato de controle da colisão terminal e de descarte).",
    "explanation": "A alternativa correta é a letra C. Gera o volume bruto/quantidade absurda massiva e perigosa de Dados que preenchem (estão presentes/flutuantes contidos ali invisivelmente) inteiramente o \"cano físico da fiação\" até explodir num receptor na frente. (Mostra que no enlace gordo e latente de satélite a emissora cospe volumes colossais antes de o cara lá sentir a recepção do primeiro byte da resposta dele de volta à malha do cabo, enchendo o trajeto a granel sem limite imediato de controle da colisão terminal e de descarte)."
  },
  {
    "question": "Por que as divisões de regras rígidas e segmentadas conceitualmente nas Camadas abstratas (Stacking e OSI) revolucionaram e flexibilizaram a programação das comunicações pelo mundo em \"Pilhas\"?",
    "options": [
      "Impediu protocolos TCP e IPs.",
      "Obriga os PCs antigos usarem só SMTP.",
      "Fragmentar e diluir um único programa monolítico impensável, burro e gigante que controlasse todo o cabo para fatias compartimentadas lógicas especializadas na sua zona e com responsabilidades específicas que só se olham em vizinhos limítrofes acopladas perfeitamente, permitiu que se remodele o software flexivelmente sem ferir todo o arranjo caso uma porta ou hardware (ex. Wi-Fi no lugar de cobre UTP RJ-45 LAN) ali na base física fosse mutacionada pelos anos ou protocolos seletivos rodando acavalados em pares para testes da companhia sem quebrar o prédio).",
      "Fez com que as colisões virassem pacotes roteados BGP de IPv6 estendidos.",
      "Acabou com a necessidade do \"Caminho Mais Curto\" no SPF."
    ],
    "answer": "Fragmentar e diluir um único programa monolítico impensável, burro e gigante que controlasse todo o cabo para fatias compartimentadas lógicas especializadas na sua zona e com responsabilidades específicas que só se olham em vizinhos limítrofes acopladas perfeitamente, permitiu que se remodele o software flexivelmente sem ferir todo o arranjo caso uma porta ou hardware (ex. Wi-Fi no lugar de cobre UTP RJ-45 LAN) ali na base física fosse mutacionada pelos anos ou protocolos seletivos rodando acavalados em pares para testes da companhia sem quebrar o prédio).",
    "explanation": "A alternativa correta é a letra C. Fragmentar e diluir um único programa monolítico impensável, burro e gigante que controlasse todo o cabo para fatias compartimentadas lógicas especializadas na sua zona e com responsabilidades específicas que só se olham em vizinhos limítrofes acopladas perfeitamente, permitiu que se remodele o software flexivelmente sem ferir todo o arranjo caso uma porta ou hardware (ex. Wi-Fi no lugar de cobre UTP RJ-45 LAN) ali na base física fosse mutacionada pelos anos ou protocolos seletivos rodando acavalados em pares para testes da companhia sem quebrar o prédio)."
  },
  {
    "question": "Como é feita tecnicamente nas \"Pilhas (Stack) - Software em Camadas\" o controle lógico e a passagem do Pacote subindo e descendo no emissor de acordo com a cartilha e normas do texto das redes locais?",
    "options": [
      "De modo engessado formal, os softwares no emissor da mensagem operam agregando dados verticalmente em linha contígua estrita (O pacote na camada de \"aplicação\" desce, é entregue unicamente à fronteira inferior abaixo que o envelopa pondo cabeçalho aninhado no topo da mensagem original da de cima e assim afunda até as pontas). Na recepção física lá longe, ele entra na Camada Base, rasga-se o cabeçalho base extraindo a diretriz dele processando e joga a sobra decapitada \"subindo pra camada exata de cima ler seu nível e afins subindo a montanha\", sendo que um nível JAMAIS fura a fila pra falar nativamente com um nível alheio da pilha inteira sem ser com as bordas imediatas que interage (vizinhos limitados da pirâmide).",
      "A camada 1 repassa pra camada 7 por túnel VPN de atalho embutido cego (o hardware fura o software localmente pra ganhar throughput e cortar os jumbo headers indesejados lógicos).",
      "Todos os cabeçalhos das 7 partes do modelo emparelham do lado direito no trailer do final da trilha elétrica unificada dos elétrons livres FSK da base de rádio frequência (RF) de transceptores das parabólicas (delay curto sem ruído de rajadas termodinâmicas no fio RG-58 limitante dos Ohms cravados do coaxial Thick).",
      "Elas processam em Barramento Paralelo simultâneo (todas injetam os dados de uma vez e se unem no núcleo por CSMA/CD lógico emulativo do Switch).",
      "Nenhuma das alternativas."
    ],
    "answer": "De modo engessado formal, os softwares no emissor da mensagem operam agregando dados verticalmente em linha contígua estrita (O pacote na camada de \"aplicação\" desce, é entregue unicamente à fronteira inferior abaixo que o envelopa pondo cabeçalho aninhado no topo da mensagem original da de cima e assim afunda até as pontas). Na recepção física lá longe, ele entra na Camada Base, rasga-se o cabeçalho base extraindo a diretriz dele processando e joga a sobra decapitada \"subindo pra camada exata de cima ler seu nível e afins subindo a montanha\", sendo que um nível JAMAIS fura a fila pra falar nativamente com um nível alheio da pilha inteira sem ser com as bordas imediatas que interage (vizinhos limitados da pirâmide).",
    "explanation": "A alternativa correta é a letra A. De modo engessado formal, os softwares no emissor da mensagem operam agregando dados verticalmente em linha contígua estrita (O pacote na camada de \"aplicação\" desce, é entregue unicamente à fronteira inferior abaixo que o envelopa pondo cabeçalho aninhado no topo da mensagem original da de cima e assim afunda até as pontas). Na recepção física lá longe, ele entra na Camada Base, rasga-se o cabeçalho base extraindo a diretriz dele processando e joga a sobra decapitada \"subindo pra camada exata de cima ler seu nível e afins subindo a montanha\", sendo que um nível JAMAIS fura a fila pra falar nativamente com um nível alheio da pilha inteira sem ser com as bordas imediatas que interage (vizinhos limitados da pirâmide)."
  },
  {
    "question": "No contexto dos Envelopes Abrigados Multiplamente (Nested Headers), a Camada \"Física\" (nível 1) diferencia-se abismalmente no agir da topologia por quê?",
    "options": [
      "Adiciona cabeçalhos imensos criptografados em MAC de 48 bits fixos do OUI no topo.",
      "É a única que não atua anexando e acoplando um cabeçalho explícito (não enfia dados extras ali) na engrenagem; já que seu mister puramente elétrico é traduzir tudo numa sintaxe seca de \"voltagem bruta/sinal luminoso (fótons de laser) em rádio no fio solto e vago transmitindo as modulações sem carimbo formal visível\" (ou seja: estica a força no fio e não cria cabeçalhos adicionais à malha pra se ler além do próprio brilho da corrente final do meio Físico rústico onde foi jogada pelos pares RJ-45).",
      "Ela ignora os roteadores e cria as rotas Dijkstra.",
      "É responsável por dividir o IPv4 e emular a Camada Internet (TCP) convertendo UDP nativamente com Jumbo frames engavetados (store forward físico em placa mãe com hub ativo passivo restrito e IP falso dinâmico RFC1918 da subrede cega do NAT virtual da ponta isolada por bridge em anel Token limitante).",
      "Adiciona CRC reverso."
    ],
    "answer": "É a única que não atua anexando e acoplando um cabeçalho explícito (não enfia dados extras ali) na engrenagem; já que seu mister puramente elétrico é traduzir tudo numa sintaxe seca de \"voltagem bruta/sinal luminoso (fótons de laser) em rádio no fio solto e vago transmitindo as modulações sem carimbo formal visível\" (ou seja: estica a força no fio e não cria cabeçalhos adicionais à malha pra se ler além do próprio brilho da corrente final do meio Físico rústico onde foi jogada pelos pares RJ-45).",
    "explanation": "A alternativa correta é a letra B. É a única que não atua anexando e acoplando um cabeçalho explícito (não enfia dados extras ali) na engrenagem; já que seu mister puramente elétrico é traduzir tudo numa sintaxe seca de \"voltagem bruta/sinal luminoso (fótons de laser) em rádio no fio solto e vago transmitindo as modulações sem carimbo formal visível\" (ou seja: estica a força no fio e não cria cabeçalhos adicionais à malha pra se ler além do próprio brilho da corrente final do meio Físico rústico onde foi jogada pelos pares RJ-45)."
  },
  {
    "question": "O Protocolo IP (Camada de Rede) aplica e fundamenta o seu serviço mundial baseando-se num conceito técnico impiedoso rotulado na literatura como \"A Qualquer Custo\":",
    "options": [
      "Ao mandar um datagrama pro horizonte do roteamento incerto heterogêneo sem fios nas ilhas do globo, não impõe fidelidade na ponta ou amarra conexões cegas estritas e limpas. Datagramas sofrem toda imundície: desaparecem misteriosamente num poço cego da web morta, chegam fora de ordem, amargam duplicatas espelhadas sem sentido, demoram eras num engarrafamento ou morrem no Checksum sumário rasgado e a rede o descarta calada no silêncio da noite s/ reportar ao pobre emissor no host origem a sua falha ou culpa do fio doente. (E confia e empurra cegamente nas costas das camadas de Cima e do Transceptor TCP o ônus colossal de reprimir e arrumar os erros no final ressuscitando ordens, pedindo e checando pacotes num loop corretivo e heroico que o protocolo IP inferior desprezou por agilidade bruta na vala universal).",
      "A qualquer custo quer dizer que o provedor tarifará a comunicação a preços gigantescos baseados no teorema de Nyquist nos enlaces alugados das VPNs de 75 Ohms de cabo Thinnet.",
      "Transmite sem checar e converte em sinais de laser na linha de visada nas pontas para evitar o IPv6 cego nas bordas que colidiram sem TCP ACK de envio limpo RS-232 da fiação cruzada pino-a-pino da placa NIC espelho FDDI do ring reverso.",
      "Apenas envia pacotes UDP multicast de IPv4 em jumbo frames.",
      "Assegura entrega livre de erros sem a necessidade de retransmissão de ACK."
    ],
    "answer": "Ao mandar um datagrama pro horizonte do roteamento incerto heterogêneo sem fios nas ilhas do globo, não impõe fidelidade na ponta ou amarra conexões cegas estritas e limpas. Datagramas sofrem toda imundície: desaparecem misteriosamente num poço cego da web morta, chegam fora de ordem, amargam duplicatas espelhadas sem sentido, demoram eras num engarrafamento ou morrem no Checksum sumário rasgado e a rede o descarta calada no silêncio da noite s/ reportar ao pobre emissor no host origem a sua falha ou culpa do fio doente. (E confia e empurra cegamente nas costas das camadas de Cima e do Transceptor TCP o ônus colossal de reprimir e arrumar os erros no final ressuscitando ordens, pedindo e checando pacotes num loop corretivo e heroico que o protocolo IP inferior desprezou por agilidade bruta na vala universal).",
    "explanation": "A alternativa correta é a letra A. Ao mandar um datagrama pro horizonte do roteamento incerto heterogêneo sem fios nas ilhas do globo, não impõe fidelidade na ponta ou amarra conexões cegas estritas e limpas. Datagramas sofrem toda imundície: desaparecem misteriosamente num poço cego da web morta, chegam fora de ordem, amargam duplicatas espelhadas sem sentido, demoram eras num engarrafamento ou morrem no Checksum sumário rasgado e a rede o descarta calada no silêncio da noite s/ reportar ao pobre emissor no host origem a sua falha ou culpa do fio doente. (E confia e empurra cegamente nas costas das camadas de Cima e do Transceptor TCP o ônus colossal de reprimir e arrumar os erros no final ressuscitando ordens, pedindo e checando pacotes num loop corretivo e heroico que o protocolo IP inferior desprezou por agilidade bruta na vala universal)."
  },
  {
    "question": "Em contraponto trágico, se todas as Redes baseadas na arquitetura falha do Datagrama IP perdem e misturam \"Fora da Ordem\" (os Roteadores enviam pacotes 1, 2, 3 e 4. Mas os pacotes sofrem saltos loucos nas pontes, Dijkstra de atalho, atrasos na via por enfileiramento cego. Chegando o 2, 4, 3, 1 na outra ponta). O software da camada de Cima repressor de erros usa qual técnica da vida real base pra não fundir as peças embaralhadas na compilação do receptor final antes da tela brilhar?",
    "options": [
      "A técnica \"Exponential Backoff\" ativada nas placas de cobre.",
      "Deleta todos os quadros se 1 erro aparecer cego na pilha OSI de borda (Serviço de rajada do hub passivo Thicknet do CSMA e TCP IP 5 camadas limitantes da RFC).",
      "Repete os pings num Flood de Firewall para paralisar o Roteador e recuperar cache interno (ICMP).",
      "Emissor estampa a frio um \"Número Sequencial de rastreio contínuo e lógico carimbado forte em todo pacote daquele fluxo no cabeçalho\". O cara que recebe no fundo acumula e repousa numa \"Mesa/Buffer (Lista Adicional de pacotes da ordem do caos)\" num compasso de espera de gaveta os que vêm afobados fora da cronologia da roda; retendo as peças até o retardatário de número anterior faltante cair nela ali atrás preenchendo o furo e empurrando no eixo liso final à camada limpa de serviço acima (Software da Aplicação que nada viu dos traumas nas veias de baixo).",
      "Acusa a placa NIC que corta os frames explícitos cegamente na origem de rádio FSK assíncrona."
    ],
    "answer": "Emissor estampa a frio um \"Número Sequencial de rastreio contínuo e lógico carimbado forte em todo pacote daquele fluxo no cabeçalho\". O cara que recebe no fundo acumula e repousa numa \"Mesa/Buffer (Lista Adicional de pacotes da ordem do caos)\" num compasso de espera de gaveta os que vêm afobados fora da cronologia da roda; retendo as peças até o retardatário de número anterior faltante cair nela ali atrás preenchendo o furo e empurrando no eixo liso final à camada limpa de serviço acima (Software da Aplicação que nada viu dos traumas nas veias de baixo).",
    "explanation": "A alternativa correta é a letra D. Emissor estampa a frio um \"Número Sequencial de rastreio contínuo e lógico carimbado forte em todo pacote daquele fluxo no cabeçalho\". O cara que recebe no fundo acumula e repousa numa \"Mesa/Buffer (Lista Adicional de pacotes da ordem do caos)\" num compasso de espera de gaveta os que vêm afobados fora da cronologia da roda; retendo as peças até o retardatário de número anterior faltante cair nela ali atrás preenchendo o furo e empurrando no eixo liso final à camada limpa de serviço acima (Software da Aplicação que nada viu dos traumas nas veias de baixo)."
  },
  {
    "question": "Além das defesas fora de ordem, o Protocolo esbarra no erro da \"Duplicação Incessante\", onde pacotes atrasados espelhados pelo eco cego dos atrasos transbordam repetidos no vizinho receptor do lado final de fora da nuvem e enchem a fila. Para salvar isso a sequência do Software da Aplicação receptora de Borda age de maneira cortante:",
    "options": [
      "Devolve a cópia duplicada (Echo Reply) no loop local cravando congestionamento letal.",
      "Verifica o número de série das levas que entram na guarita do software e cruza a ferro com a lista limpa das que já entraram; se o carimbo já preencheu seu espaço do que devia ou já foi repassado acima pra máquina outrora, ele rejeita friamente a carga na cópia zumbi nova que atolou no delay antigo sem cerimônias rasgando da malha de descarte livre, poupando a máquina do loop sujo indesejado da rede caótica que a produziu espelhada na conexão e limpando a trilha paralela da porta.",
      "Encaminha num Tunnel VPN pra camuflar pacotes.",
      "Oculta usando criptografia as duplicatas nas Bridges de estado dinâmico Startup e reenvia para o servidor mestre no formato de Broadcast limpo.",
      "O hub ativo reencaminha aos terminais BNC das placas UTP do RJ-45 de cruzamentos invertidos nos fios."
    ],
    "answer": "Verifica o número de série das levas que entram na guarita do software e cruza a ferro com a lista limpa das que já entraram; se o carimbo já preencheu seu espaço do que devia ou já foi repassado acima pra máquina outrora, ele rejeita friamente a carga na cópia zumbi nova que atolou no delay antigo sem cerimônias rasgando da malha de descarte livre, poupando a máquina do loop sujo indesejado da rede caótica que a produziu espelhada na conexão e limpando a trilha paralela da porta.",
    "explanation": "A alternativa correta é a letra B. Verifica o número de série das levas que entram na guarita do software e cruza a ferro com a lista limpa das que já entraram; se o carimbo já preencheu seu espaço do que devia ou já foi repassado acima pra máquina outrora, ele rejeita friamente a carga na cópia zumbi nova que atolou no delay antigo sem cerimônias rasgando da malha de descarte livre, poupando a máquina do loop sujo indesejado da rede caótica que a produziu espelhada na conexão e limpando a trilha paralela da porta."
  },
  {
    "question": "Sobre um trágico pilar da física das Redes (\"Congestionamento da Rede\"): Redes Switchadas de pacote sofrem colapso se os links transbordam o limite limpo do hardware contínuo da vala (os pacotes estocados pra envio nas filas e as RAMs se enchem na beira das pontes num esgoto de bytes). Diante de gargalos na borda as Filas no Switch crescem massivamente e a latência/delay estoura pra tetos imorais. Se tal tormenta persistir, a catástrofe deflagrada na vida real dos provedores pelo \"Colapso de Congestionamento\" deflagra que cenário aterrorizador para o TCP IP reverter aos engates nos limites de perda analítica que o ICMP avisa e repara?",
    "options": [
      "A memória inteira das caixas dos Roteadores/Packet Switches do planeta lota no gargalo. Para não pifar, os softwares do núcleo na rota cospem e cortam do túnel brutalmente todos pacotes vivos ali nas sobras pro abismo (Perda maciça real nos enlaces) a qualquer custo sem remorso; provocando em cadeia numa reação da morte as pontas desesperadas que emitem pacotes originais refazerem e resgatarem os timeouts \"Re-transmitindo\" em avalanche cega tripla a rebarba afogando o mundo, fazendo a rede ruir sobre seu peso no Colapso do Congestionamento absoluto e total gerando o zero throughput e o pânico da latência infinita dos roteadores cegos instáveis nas redes coladas.",
      "Apenas cai um RJ-45 da porta e não reflete no ping de roteamento dinâmico estático das bridges em Start up mode das EPROMs.",
      "A velocidade baixa para 10BASE-T no UTP Cat 1.",
      "O cabo coaxial esquenta em 75 Ohms atenuando ruído e CSMA de Thicknet (transceiver em AUI com multiplexadores passivos paralelos nas placas 10BASE5 originais RJ-45) num ambiente fechado do Anel.",
      "Transponders saem de rota e derrubam o IP de 128 Bits em Multicast de FSK baud phase no bit Rate e o RS-232 fecha o stop bit zero volt de limite da modulação fantasma cega."
    ],
    "answer": "A memória inteira das caixas dos Roteadores/Packet Switches do planeta lota no gargalo. Para não pifar, os softwares do núcleo na rota cospem e cortam do túnel brutalmente todos pacotes vivos ali nas sobras pro abismo (Perda maciça real nos enlaces) a qualquer custo sem remorso; provocando em cadeia numa reação da morte as pontas desesperadas que emitem pacotes originais refazerem e resgatarem os timeouts \"Re-transmitindo\" em avalanche cega tripla a rebarba afogando o mundo, fazendo a rede ruir sobre seu peso no Colapso do Congestionamento absoluto e total gerando o zero throughput e o pânico da latência infinita dos roteadores cegos instáveis nas redes coladas.",
    "explanation": "A alternativa correta é a letra A. A memória inteira das caixas dos Roteadores/Packet Switches do planeta lota no gargalo. Para não pifar, os softwares do núcleo na rota cospem e cortam do túnel brutalmente todos pacotes vivos ali nas sobras pro abismo (Perda maciça real nos enlaces) a qualquer custo sem remorso; provocando em cadeia numa reação da morte as pontas desesperadas que emitem pacotes originais refazerem e resgatarem os timeouts \"Re-transmitindo\" em avalanche cega tripla a rebarba afogando o mundo, fazendo a rede ruir sobre seu peso no Colapso do Congestionamento absoluto e total gerando o zero throughput e o pânico da latência infinita dos roteadores cegos instáveis nas redes coladas."
  },
  {
    "question": "Como uma Rede engarrafada evita morrer pela queda da fila de pacotes sujos da morte se não há como apagar os atrasos elétricos? \"O protocolo TCP IP e afins tenta escapar e debelar os riscos de morte dos congestionamentos catastróficos monitorando e reagindo como nas aproximações primárias atestadas:\"",
    "options": [
      "Emitindo pulso magnético reverso no cabo.",
      "Colocando senhas e restrições criptográficas para encurtar Jumbo frames e enxugar o tamanho do CRC e headers MAC.",
      "1. Os fabricantes das peças criam Packet Switches que enviam apitos digitais ativos avisando formalmente (na rota de colisão de volta) para a fonte segurar a banda e reprimir seu fluxo (\"Grite que o bueiro tá lotado\"). E 2. O lado emissor adota inteligência matemática, medindo a \"taxa de perdas/erros cegas de datagramas extintos nos limites do TTL nas pontas cegas de descarte cru sem reposta\" como estimativa pura que tem gargalo gigante e tranca ele mesmo na ponta a sua taxa de sangria e emissão re-escrevendo os re-envios de adaptação do TCP e recuando como defesas vitais.",
      "O hub de concentradores atua no anel FDDI invertendo o fluxo de luz nas fibras ópticas cruzadas (Roll-over).",
      "Usa-se roteamento Static Routing para barrar Dijkstra no modelo de classes C e D do IPv4 estagnado dos endereços dinâmicos puros não NAT do Loopback 127 de classes reservadas por hardware."
    ],
    "answer": "1. Os fabricantes das peças criam Packet Switches que enviam apitos digitais ativos avisando formalmente (na rota de colisão de volta) para a fonte segurar a banda e reprimir seu fluxo (\"Grite que o bueiro tá lotado\"). E 2. O lado emissor adota inteligência matemática, medindo a \"taxa de perdas/erros cegas de datagramas extintos nos limites do TTL nas pontas cegas de descarte cru sem reposta\" como estimativa pura que tem gargalo gigante e tranca ele mesmo na ponta a sua taxa de sangria e emissão re-escrevendo os re-envios de adaptação do TCP e recuando como defesas vitais.",
    "explanation": "A alternativa correta é a letra C. 1. Os fabricantes das peças criam Packet Switches que enviam apitos digitais ativos avisando formalmente (na rota de colisão de volta) para a fonte segurar a banda e reprimir seu fluxo (\"Grite que o bueiro tá lotado\"). E 2. O lado emissor adota inteligência matemática, medindo a \"taxa de perdas/erros cegas de datagramas extintos nos limites do TTL nas pontas cegas de descarte cru sem reposta\" como estimativa pura que tem gargalo gigante e tranca ele mesmo na ponta a sua taxa de sangria e emissão re-escrevendo os re-envios de adaptação do TCP e recuando como defesas vitais."
  },
  {
    "question": "O conceito primordial que fez a \"Internet\" ser tão disruptiva do mundo local (LAN) foi o de ser a Abstração suprema do \"Serviço Universal / Universal Service\". Tal ideia se apoia na filosofia base que viabilizou as ilhas da computação nos lares e na guerra de tecnologias. Isto impõe que:",
    "options": [
      "Você e sua corporação, na sua ilha e mundo de fios cruzados RJ-45 par trançados Ethernet isolados velhos e tortos com o IP e MAC exótico nas suas estações limitadas podem falar perfeitamente de forma translúcida a transparência mágica sem saber e sem barreira natural num salto digital com o mainframe alienígena colossal do banco na Europa mergulhado em tecnologia de anéis ópticos ATM caríssima síncrona com outra face, formato e arquitetura paralela cega. O software no meio abstrai toda diferença monstruosa. Para as pontas é como estar num quarto unificado cego gigante global onde cada endereço único de IP limpo da placa na tela vira o farol de visibilidade mágica onde as redes heterogêneas da terra batem p/ Roteadores que transcrevem e vertem idiomas sem colapsar a ponte de Universalidade abstrata oculta e sem dono ou limites do cabo da LAN limitante.",
      "A universalidade define que todo o cabo do mundo seja de categoria Cat 6 nas tubulações da telefonia local.",
      "Todos usam Jumbo frames e Token ring com Thicknets em Transceivers únicos alinhados para impedir CSMA.",
      "A Internet não lida com hardware e nem tem IP ou TCP. Atua apenas em domínios alocados via RS-232 no modem serial passivo sem Stop Bit, garantindo fluxo estático fixo OSPF puro.",
      "Apenas opera nas VPNs locais restritas da empresa privada estritamente nos Modems RF de 4 Canais Analógicos c/ CSMA CD."
    ],
    "answer": "Você e sua corporação, na sua ilha e mundo de fios cruzados RJ-45 par trançados Ethernet isolados velhos e tortos com o IP e MAC exótico nas suas estações limitadas podem falar perfeitamente de forma translúcida a transparência mágica sem saber e sem barreira natural num salto digital com o mainframe alienígena colossal do banco na Europa mergulhado em tecnologia de anéis ópticos ATM caríssima síncrona com outra face, formato e arquitetura paralela cega. O software no meio abstrai toda diferença monstruosa. Para as pontas é como estar num quarto unificado cego gigante global onde cada endereço único de IP limpo da placa na tela vira o farol de visibilidade mágica onde as redes heterogêneas da terra batem p/ Roteadores que transcrevem e vertem idiomas sem colapsar a ponte de Universalidade abstrata oculta e sem dono ou limites do cabo da LAN limitante.",
    "explanation": "A alternativa correta é a letra A. Você e sua corporação, na sua ilha e mundo de fios cruzados RJ-45 par trançados Ethernet isolados velhos e tortos com o IP e MAC exótico nas suas estações limitadas podem falar perfeitamente de forma translúcida a transparência mágica sem saber e sem barreira natural num salto digital com o mainframe alienígena colossal do banco na Europa mergulhado em tecnologia de anéis ópticos ATM caríssima síncrona com outra face, formato e arquitetura paralela cega. O software no meio abstrai toda diferença monstruosa. Para as pontas é como estar num quarto unificado cego gigante global onde cada endereço único de IP limpo da placa na tela vira o farol de visibilidade mágica onde as redes heterogêneas da terra batem p/ Roteadores que transcrevem e vertem idiomas sem colapsar a ponte de Universalidade abstrata oculta e sem dono ou limites do cabo da LAN limitante."
  },
  {
    "question": "A abstração colossal que gera o fascínio da Internet, e faz parecer perante a placa e ao olho cru de quem digita no computador da beirada (que tudo aquilo é na verdade um cabo gigantesco singular no chão da máquina e que as pontas se conversam numa teia maciça) é definida teoricamente no capítulo de Internet como o nome e estigma conceitual abstrato isolado fundamental de:",
    "options": [
      "Rede Broadcast.",
      "Redes OSPF (SPF Path Ring) do Distance Vector de Link State BGP da Hierarquia Dinâmica do Gateway Estático de Sub Redes de Multiplicadores da Borda de 185 Metros do Hub UTP.",
      "Topologia Multi-Homed Hosts do ARP cego do ICMP Echo Reply das Camadas TCP 7.",
      "Rede Virtual (Virtual Network) - Os hardwares, os roteadores que rasgam os quadros, os protocolos de IPs que moldam os endereços isolados ocultam magicamente a física torpe emaranhada do caos do chão das corporações. Trazendo pro emissor na camada superior a ilusão doce, abstrata, limpa e uniforme que tudo é uma só, vasta e \"Única Rede Uniforme\" na qual ele injeta o pulso e viaja liso num plano estático virtual infinito livre de fios heterogêneos despadronizados dos saltos ocultos que ela esconde da tela e das APIs locais nos pacotes limpos do IP mundial unificado da Internet base.",
      "Roteamento Universal de Portas Analógicas dos Packet Switches do Store Forward do TCP do modelo OSI de 5 Camadas de Transferência de Banda Larga Limitada no RJ 45 Físico Híbrido Crossover Estático de EPROMs."
    ],
    "answer": "Rede Virtual (Virtual Network) - Os hardwares, os roteadores que rasgam os quadros, os protocolos de IPs que moldam os endereços isolados ocultam magicamente a física torpe emaranhada do caos do chão das corporações. Trazendo pro emissor na camada superior a ilusão doce, abstrata, limpa e uniforme que tudo é uma só, vasta e \"Única Rede Uniforme\" na qual ele injeta o pulso e viaja liso num plano estático virtual infinito livre de fios heterogêneos despadronizados dos saltos ocultos que ela esconde da tela e das APIs locais nos pacotes limpos do IP mundial unificado da Internet base.",
    "explanation": "A alternativa correta é a letra D. Rede Virtual (Virtual Network) - Os hardwares, os roteadores que rasgam os quadros, os protocolos de IPs que moldam os endereços isolados ocultam magicamente a física torpe emaranhada do caos do chão das corporações. Trazendo pro emissor na camada superior a ilusão doce, abstrata, limpa e uniforme que tudo é uma só, vasta e \"Única Rede Uniforme\" na qual ele injeta o pulso e viaja liso num plano estático virtual infinito livre de fios heterogêneos despadronizados dos saltos ocultos que ela esconde da tela e das APIs locais nos pacotes limpos do IP mundial unificado da Internet base."
  },
  {
    "question": "A grande divisão técnica dos criadores e pesquisadores de protocolos dividiu as incumbências e dores do mundo nos agrupamentos de Camadas TCP IP contrapostas ao obsoleto OSI teórico acadêmico engessado da pré-internet. As 5 Camadas da arquitetura do TCP IP que reinam as redes, se escalonam em blocos estritos do chão físico (1) à tela visual do programa (5). Qual afirmação define pontualmente a competência limpa da Camada 3 de Internet nesse miolo das veias da base teórica da rede global descrita e isolada pelo texto da apostila na ordem?",
    "options": [
      "Camada 3 (Internet/Rede): É a casca que especifica cravado no quadro do modelo os formatos globais blindados estritos dos \"Pacotes (Datagramas e seus IPs lógicos isolados)\" disparados de ponta a ponta flutuando através da malha da nuvem da Internet abstrata heterogênea cruzada mundial e baliza os \"mecanismos de envio\" para chutar os pacotes no pulo isolado pelas máquinas do host limítrofe até achar seu rastro do destino na teia global invisível da porta Roteada.",
      "A Camada 3 encarrega das Frequências e tensões analógicas da luz no prisma e cobre Thick Ethernet AUI do Modem FSK isolando pinos RJ 45 UTP da blindagem cruzada no CSMA BNC T Conector Terminal e Cabo RG 8 coaxial c/ Banda larga e 1 Gbps Gigabit.",
      "A Camada 3 obriga transferências hiper seguras fechando pontes lógicas c/ TCP Acks (Aviso Fim Conexão cega sem bugs fora de Ordem das filas OSPF nos Swithes WAN) garantindo os bytes enfileirados pra Aplicações (Sessão / Transporte Confiável garantido das perdas brutas do UDP RS-232 Cego / Protocolo Link State Distance Vector da Tabela).",
      "É a Camada (Aplicação) onde roda o SMTP para e-mails e protocolos de páginas HTTP do World Web do DNS de domínio nominal oculto.",
      "É a Camada que lida unicamente em empacotar \"Frames/Quadros Físicos\" com endereços MAC EPROMS cruas no Switch Ethernet CSMA CD de acesso de Placa e Fio de 185 metros Thin limitantes p/ colisão em porta física isolada do Hub ativo cego (Enlace Cego / Network Interface Layer Física do LAN local estático UTP Cat 5e de RJ 45 Pino-a-Pino na Estrela / Barramento Ponto-a-Ponto e FDDI Ring).\n\nMúltipla Escolha Complementar (Do 101 ao 122 - Finalizando cada item não mapeado)"
    ],
    "answer": "Camada 3 (Internet/Rede): É a casca que especifica cravado no quadro do modelo os formatos globais blindados estritos dos \"Pacotes (Datagramas e seus IPs lógicos isolados)\" disparados de ponta a ponta flutuando através da malha da nuvem da Internet abstrata heterogênea cruzada mundial e baliza os \"mecanismos de envio\" para chutar os pacotes no pulo isolado pelas máquinas do host limítrofe até achar seu rastro do destino na teia global invisível da porta Roteada.",
    "explanation": "A alternativa correta é a letra A. Camada 3 (Internet/Rede): É a casca que especifica cravado no quadro do modelo os formatos globais blindados estritos dos \"Pacotes (Datagramas e seus IPs lógicos isolados)\" disparados de ponta a ponta flutuando através da malha da nuvem da Internet abstrata heterogênea cruzada mundial e baliza os \"mecanismos de envio\" para chutar os pacotes no pulo isolado pelas máquinas do host limítrofe até achar seu rastro do destino na teia global invisível da porta Roteada."
  },
  {
    "question": "Qual a desvantagem da Fibra Óptica quando rompe?",
    "options": [
      "Exige polimento e solda com equipamentos especiais caríssimos e o ponto da quebra subterrâneo do vidro não pode ser mapeado fácil a olho nu.",
      "Ela funde com os cabos de rede elétrica adjacentes quebrando a polarização da tensão negativa magnética base e corrompe IPv6.",
      "Emite raios de radiação cósmica nos terminais BNC coaxiais do hub.",
      "Atrasa a rede a 2400 baud.",
      "Reduz a Categoria 5 UTP ao nível de CSMA analógico lento cego no TCP das camadas OSI."
    ],
    "answer": "Exige polimento e solda com equipamentos especiais caríssimos e o ponto da quebra subterrâneo do vidro não pode ser mapeado fácil a olho nu.",
    "explanation": "A alternativa correta é a letra A. Exige polimento e solda com equipamentos especiais caríssimos e o ponto da quebra subterrâneo do vidro não pode ser mapeado fácil a olho nu."
  },
  {
    "question": "O satélite orbital retransmite o sinal de Radiofrequência. Quantos transponders costuma comportar para otimizar os custos estratosféricos, segundo a apostila?",
    "options": [
      "De 1 a 2 em loop FDDI.",
      "24 a 48 em anel de UTP.",
      "1 ou 3 limitantes.",
      "Usualmente de 6 a 12 transponders, atuando em frequências distintas propiciando o fluxo simultâneo sem estrangular a malha.",
      "Milhares em um único feixe de cabo AUI cego."
    ],
    "answer": "Usualmente de 6 a 12 transponders, atuando em frequências distintas propiciando o fluxo simultâneo sem estrangular a malha.",
    "explanation": "A alternativa correta é a letra D. Usualmente de 6 a 12 transponders, atuando em frequências distintas propiciando o fluxo simultâneo sem estrangular a malha."
  },
  {
    "question": "O Padrão RS-232 de comunicação assíncrona envia caracteres compostos habitualmente por:",
    "options": [
      "7 bits úteis (que aliados ao Bit fantasma de Start e Stop cravam transmissões sequenciais assíncronas isoladas lidas e mapeadas no relógio de parada).",
      "Pacotes jumbo de 9000 bytes.",
      "IP addresses de 32 Bits cravados e fechados.",
      "128 Bits emulando a máscara MAC da placa de rede.",
      "Sinais FSK logarítmicos paralelos."
    ],
    "answer": "7 bits úteis (que aliados ao Bit fantasma de Start e Stop cravam transmissões sequenciais assíncronas isoladas lidas e mapeadas no relógio de parada).",
    "explanation": "A alternativa correta é a letra A. 7 bits úteis (que aliados ao Bit fantasma de Start e Stop cravam transmissões sequenciais assíncronas isoladas lidas e mapeadas no relógio de parada)."
  },
  {
    "question": "Qual é a principal característica (Topologia) de uma Rede \"Ponto a Ponto\"?",
    "options": [
      "Canal de conexão exclusiva, ligando exatamente dois únicos computadores onde ambos detém a posse e regras estritas do caminho, ditando formato e protegendo a segurança máxima e a privacidade dos bits.",
      "Todos pendurados e misturados ouvindo a colisão de frames de centenas de pares Ethernet estáticos de broadcast ineficiente no barramento hub.",
      "Manda o tráfego a satélites em 5 camadas.",
      "Usa FDDI com counter rotation cego na topologia anel p/ barramento Thick.",
      "Interliga roteadores por Distance Vector via RS-232 em loop do modelo BGP sem ping externo."
    ],
    "answer": "Canal de conexão exclusiva, ligando exatamente dois únicos computadores onde ambos detém a posse e regras estritas do caminho, ditando formato e protegendo a segurança máxima e a privacidade dos bits.",
    "explanation": "A alternativa correta é a letra A. Canal de conexão exclusiva, ligando exatamente dois únicos computadores onde ambos detém a posse e regras estritas do caminho, ditando formato e protegendo a segurança máxima e a privacidade dos bits."
  },
  {
    "question": "Redes locais de Topologia \"Anel\" agrupam equipamentos enfileirados em círculo e exigem (para seu êxito natural):",
    "options": [
      "Que um cabo conecte o PC1 ao PC2, e o PC2 ao PC3 sucessivamente até fechar o circuito no 1; tornando absurdamente trivial a coordenação física e rastreio, porém fatalmente vulnerável a quedas no instante que 1 micro ali morre bloqueando as artérias do trânsito na via fechada.",
      "Exigem barramento blindado Cat 7 em todos hubs RJ-45 de acesso aleatório de CSMA estrito p/ Ethernet.",
      "Dependem de VPN pública e modems elétricos na placa AUI em 50 Ohms.",
      "Isolam as fibras opticas em redes OSPF estáticas no modelo de Distance Vetorial no TCP IPv6 cego.",
      "Permitem paralelismo de 1 PC por segmento num hub emulativo do Router (Switching)."
    ],
    "answer": "Que um cabo conecte o PC1 ao PC2, e o PC2 ao PC3 sucessivamente até fechar o circuito no 1; tornando absurdamente trivial a coordenação física e rastreio, porém fatalmente vulnerável a quedas no instante que 1 micro ali morre bloqueando as artérias do trânsito na via fechada.",
    "explanation": "A alternativa correta é a letra A. Que um cabo conecte o PC1 ao PC2, e o PC2 ao PC3 sucessivamente até fechar o circuito no 1; tornando absurdamente trivial a coordenação física e rastreio, porém fatalmente vulnerável a quedas no instante que 1 micro ali morre bloqueando as artérias do trânsito na via fechada."
  },
  {
    "question": "Por que o modelo \"Hub\" tem limite na eficiência se expandido para redes grandes?",
    "options": [
      "Porque ele simula a arcaica rede coaxial compartilhada onde apenas dois micros podem falar simultaneamente nas portas; e no fundo continua sendo uma rede sujeita a colisões, só aglutinada num emaranhado paralelo plástico da caixa do RJ-45 em topologia estrela de fiação elétrica repetidora no gargalo limitante.",
      "Porque converte cabos crossover em TCP UDP.",
      "Porque o IP reverte para ARP dinâmico limitador em IPv5 na IETF de protocolos de Apresentação.",
      "O hub estático é incapaz de ler o Start bit do RS 232 do AUI BNC transceiver analógico do SPF link state vetor distância CSMA de CSMA cega emulando a ponte cega e par trançado do Thick Thin FDDI do ping ICMP.",
      "Nada acima."
    ],
    "answer": "Porque ele simula a arcaica rede coaxial compartilhada onde apenas dois micros podem falar simultaneamente nas portas; e no fundo continua sendo uma rede sujeita a colisões, só aglutinada num emaranhado paralelo plástico da caixa do RJ-45 em topologia estrela de fiação elétrica repetidora no gargalo limitante.",
    "explanation": "A alternativa correta é a letra A. Porque ele simula a arcaica rede coaxial compartilhada onde apenas dois micros podem falar simultaneamente nas portas; e no fundo continua sendo uma rede sujeita a colisões, só aglutinada num emaranhado paralelo plástico da caixa do RJ-45 em topologia estrela de fiação elétrica repetidora no gargalo limitante."
  },
  {
    "question": "Sobre a restrição de \"Acesso e Interceptação\" no Hub: como ela veda interceptação física?",
    "options": [
      "Restringindo eletronicamente a entrega do tráfego: O pacote só será exposto e jogado ativamente numa porta X se aquele endereço de rede daquela porta bater e coincidir fidedigno ao destino exato do datagrama lido e checado; blindando portas alheias da vizinhança na placa passiva contra os grampos do tráfego de terceiro cruzando as pontes paralelas de intrometidos com promiscuous mode dos snifers e atacantes de intrusão LAN.",
      "Colocando firewall UTP que muda a senha da WAN em cada roteador de Gigabit Ethernet do jumbo frame de ICMP.",
      "Usando roteadores dinâmicos no modelo OSI (Enlace e Aplicação p/ UDP de Multicast Cego limitante das bridges Startup) e IPs MACs na malha.",
      "Isolando todo o cabo na topologia BNC T do cabo 10BASE5.",
      "Criptografando a voltagem da energia do Hub."
    ],
    "answer": "Restringindo eletronicamente a entrega do tráfego: O pacote só será exposto e jogado ativamente numa porta X se aquele endereço de rede daquela porta bater e coincidir fidedigno ao destino exato do datagrama lido e checado; blindando portas alheias da vizinhança na placa passiva contra os grampos do tráfego de terceiro cruzando as pontes paralelas de intrometidos com promiscuous mode dos snifers e atacantes de intrusão LAN.",
    "explanation": "A alternativa correta é a letra A. Restringindo eletronicamente a entrega do tráfego: O pacote só será exposto e jogado ativamente numa porta X se aquele endereço de rede daquela porta bater e coincidir fidedigno ao destino exato do datagrama lido e checado; blindando portas alheias da vizinhança na placa passiva contra os grampos do tráfego de terceiro cruzando as pontes paralelas de intrometidos com promiscuous mode dos snifers e atacantes de intrusão LAN."
  },
  {
    "question": "Ao longo de 500 metros uma LAN sofre o quê na fiação de cobre?",
    "options": [
      "O efeito de colapso congestionante.",
      "Sofre o estrangulamento da placa de rede NIC, cujos pulsos e forças elétricas atenuam e decaem pelo tamanho grotesco até diluírem de vez nos íons limitando os bits do sinal na casa morta da propagação do cobre no fio físico desamparado na porta (limitação da física pela distância da fiação limpa).",
      "Ganho de velocidade pela CSMA/CA.",
      "Conversão espontânea p/ RS-232 em fiação BNC UTP 5e pino a pino.",
      "Aumento exponencial do ruído MAC limitante em frames explícitos do FDDI BGP de TCP cego."
    ],
    "answer": "Sofre o estrangulamento da placa de rede NIC, cujos pulsos e forças elétricas atenuam e decaem pelo tamanho grotesco até diluírem de vez nos íons limitando os bits do sinal na casa morta da propagação do cobre no fio físico desamparado na porta (limitação da física pela distância da fiação limpa).",
    "explanation": "A alternativa correta é a letra B. Sofre o estrangulamento da placa de rede NIC, cujos pulsos e forças elétricas atenuam e decaem pelo tamanho grotesco até diluírem de vez nos íons limitando os bits do sinal na casa morta da propagação do cobre no fio físico desamparado na porta (limitação da física pela distância da fiação limpa)."
  },
  {
    "question": "O Equipamento Switch funciona operando qual preceito para melhorar a velocidade real perante Hubs?",
    "options": [
      "Excluindo IP de redes públicas dinâmicas.",
      "Aplica do Paralelismo maciço e inteligente: Ele emula pontes e bridges simultâneas por porta individualizando cada micro. Micros no segmento 1 falam simultaneamente ao 2 sem chocar ou parar ou colidir a conversa secreta alheia acontecendo ali do lado nas guias do 3 pro 4. É um tráfego independente e protegido.",
      "FSK reverso do CRC no TCP cego da LAN.",
      "Apenas manda Ping para descobrir se a placa quebrou no CSMA.",
      "Exclui a necessidade de placa de rede no host de servidor centralizado e roteia na camada de Apresentação (6)."
    ],
    "answer": "Aplica do Paralelismo maciço e inteligente: Ele emula pontes e bridges simultâneas por porta individualizando cada micro. Micros no segmento 1 falam simultaneamente ao 2 sem chocar ou parar ou colidir a conversa secreta alheia acontecendo ali do lado nas guias do 3 pro 4. É um tráfego independente e protegido.",
    "explanation": "A alternativa correta é a letra B. Aplica do Paralelismo maciço e inteligente: Ele emula pontes e bridges simultâneas por porta individualizando cada micro. Micros no segmento 1 falam simultaneamente ao 2 sem chocar ou parar ou colidir a conversa secreta alheia acontecendo ali do lado nas guias do 3 pro 4. É um tráfego independente e protegido."
  },
  {
    "question": "O conceito clássico de LAN abrangeu historicamente o seu comprimento num ecossistema de:",
    "options": [
      "Um simples prédio ou estrutura fechada em campus local.",
      "Todo o Planeta (Satélites de WAN transponders limitadores BGP dinâmico OSPF SPF).",
      "Todo país ou continente de roteadores isolados com packet switches e VPN de enlace limítrofe no Store Foward estático de Distance Vector OSPF de TCP cego c/ ARP.",
      "Uma cidade com hubs analógicos de repetidores finos RG-58 BNC.",
      "Cobre AUI isolado de Thicknet de Hub cat 7 blindado UTP paralelo Ethernet FDDI."
    ],
    "answer": "Um simples prédio ou estrutura fechada em campus local.",
    "explanation": "A alternativa correta é a letra A. Um simples prédio ou estrutura fechada em campus local."
  },
  {
    "question": "Qual o nome das duas engrenagens/mecanismos estritos fundamentais por onde uma \"WAN Privada Corporativa\", como a do texto, navega na estrutura limitante global?",
    "options": [
      "BNC e Terminal do cabo Coaxial RJ-45 da camada TCP.",
      "Bridges em Start up da Rota de Distance Vect de FDDI em Ping MAC.",
      "Circuitos alugados de operadoras telefônicas nas conexões cruzadas do globo, aliadas a potentes Packet Switches e redes criptográficas (VPN) para atarem os pontos como nós privados das cidades cegas.",
      "CSMA/CD em rádio enlace s/ VPN.",
      "AUI e Transceiver blindado Ethernet pino a pino 1Gbps Crossover."
    ],
    "answer": "Circuitos alugados de operadoras telefônicas nas conexões cruzadas do globo, aliadas a potentes Packet Switches e redes criptográficas (VPN) para atarem os pontos como nós privados das cidades cegas.",
    "explanation": "A alternativa correta é a letra C. Circuitos alugados de operadoras telefônicas nas conexões cruzadas do globo, aliadas a potentes Packet Switches e redes criptográficas (VPN) para atarem os pontos como nós privados das cidades cegas."
  },
  {
    "question": "WAN atua no Padrão de Roteamento Dinâmico para:",
    "options": [
      "Absorver flexibilidade e fugir da morte de nós quebrados da rede: se o cabo do Brasil à NY quebrar na malha mundial o switch contorna a tragédia alterando as rotas da tabela sozinho pelos avisos dinâmicos sem paralizar a rede mundial (coisa impossível na engessada via Estática manual inoperante que requer presença e ação na RAM bruta das máquinas físicas isoladas na beira do asfalto pra funcionar de volta o sistema offline na manutenção dura e seca).",
      "Multiplicar a tensão em Thinnet BNC RJ-45 de par UTP Cat 7 no FDDI das Fibras do Laser.",
      "Bloquear ataques ao ICMP Time Exceeded Traceroute no ping UTP.",
      "Criar cabos de 200m paralelos isolados na camada de OSI 4 de Transportes assíncronos.",
      "Reduzir o Overhead de CRC e MAC para Jumbo Frames em IP de Borda Cega no TCP Assíncrono limitador."
    ],
    "answer": "Absorver flexibilidade e fugir da morte de nós quebrados da rede: se o cabo do Brasil à NY quebrar na malha mundial o switch contorna a tragédia alterando as rotas da tabela sozinho pelos avisos dinâmicos sem paralizar a rede mundial (coisa impossível na engessada via Estática manual inoperante que requer presença e ação na RAM bruta das máquinas físicas isoladas na beira do asfalto pra funcionar de volta o sistema offline na manutenção dura e seca).",
    "explanation": "A alternativa correta é a letra A. Absorver flexibilidade e fugir da morte de nós quebrados da rede: se o cabo do Brasil à NY quebrar na malha mundial o switch contorna a tragédia alterando as rotas da tabela sozinho pelos avisos dinâmicos sem paralizar a rede mundial (coisa impossível na engessada via Estática manual inoperante que requer presença e ação na RAM bruta das máquinas físicas isoladas na beira do asfalto pra funcionar de volta o sistema offline na manutenção dura e seca)."
  },
  {
    "question": "Redes de \"Serviços de Conexão Orientada\" atuam no TCP. Isso opera de modo assemelhado e análogo ao sistema arcaico de:",
    "options": [
      "Telefonia: Ligo, ele atende, o laço de conversa vigiada é cravado na conexão contínua invisível e se o cabo cai no meio eu percebo a linha cair na orelha atenta no instante, e no final fechamos com formalidade exata o enlace blindado cego e as portas atentas (Ótimo Fim de Conexão).",
      "Correio: Jogo as cartas no RJ-45 da rua à cega de IP da máquina sem saber se o alvo lá leu os quadros Jumbo do FDDI limitador de BNC T do Token.",
      "Satélite: Mando por rádio RF pra todos que virem no céu (Multicast de FSK Baud TCP Ethernet Borda do CSMA cego).",
      "Fibra Cega de Hub: Isolo o pacote e repito no UDP.",
      "FSK de Roteamento: Static distance estático de OSI."
    ],
    "answer": "Telefonia: Ligo, ele atende, o laço de conversa vigiada é cravado na conexão contínua invisível e se o cabo cai no meio eu percebo a linha cair na orelha atenta no instante, e no final fechamos com formalidade exata o enlace blindado cego e as portas atentas (Ótimo Fim de Conexão).",
    "explanation": "A alternativa correta é a letra A. Telefonia: Ligo, ele atende, o laço de conversa vigiada é cravado na conexão contínua invisível e se o cabo cai no meio eu percebo a linha cair na orelha atenta no instante, e no final fechamos com formalidade exata o enlace blindado cego e as portas atentas (Ótimo Fim de Conexão)."
  },
  {
    "question": "O Serviço Sem Conexão anula burocracias e joga os bytes crus na banda. O custo grave (desvantagem) ao atuar de modo \"análogo aos E-mails\":",
    "options": [
      "Ocupa toda a placa NIC com ruído térmico da fiação cruzada em FDDI cega.",
      "Consome IPv6 na malha c/ extensão OSPF SPF.",
      "Não há garantia formal limpa ou notificação pontual em milissegundo trágica sobre erro ou o rompimento cego brusco dos cabos ou nós perdidos isolados depois que as perdas engolfam os pacotes pelo abismo da Nuvem da Rede (e os PCs na vala cega enviam pro além no vácuo de resposta p/ TCP cego do Router ICMP passivo da Rota padrão em Store and Forward das LANs e Switches c/ VPN do MAC de origem).",
      "Emula a entrega Ethernet UTP 5e pino a pino.",
      "Trava no CRC Jumbo Frame FDDI cego de UTP."
    ],
    "answer": "Não há garantia formal limpa ou notificação pontual em milissegundo trágica sobre erro ou o rompimento cego brusco dos cabos ou nós perdidos isolados depois que as perdas engolfam os pacotes pelo abismo da Nuvem da Rede (e os PCs na vala cega enviam pro além no vácuo de resposta p/ TCP cego do Router ICMP passivo da Rota padrão em Store and Forward das LANs e Switches c/ VPN do MAC de origem).",
    "explanation": "A alternativa correta é a letra C. Não há garantia formal limpa ou notificação pontual em milissegundo trágica sobre erro ou o rompimento cego brusco dos cabos ou nós perdidos isolados depois que as perdas engolfam os pacotes pelo abismo da Nuvem da Rede (e os PCs na vala cega enviam pro além no vácuo de resposta p/ TCP cego do Router ICMP passivo da Rota padrão em Store and Forward das LANs e Switches c/ VPN do MAC de origem)."
  },
  {
    "question": "Quando uma empresa liga Redes Heterogêneas (uma sala roda ATM, a outra Roda Ethernet de cabo grosso) usando os Roteadores e software, a premissa de união cega é nomeada:",
    "options": [
      "Internet e o paradigma mágico de Universal Service na Rede Virtual Abstrata (que emenda os formatos bizarros sob o IP comum nas pontas das aplicações de Cima).",
      "Multiplexador em Bridge UTP.",
      "Start bit Stop Bit da VPN de TCP UDP de Rádio LAN.",
      "FSK Baud do Ethernet Ponto-a-Ponto no Thinnet do IPv5 (ST experimental de Borda cega do ICMP).",
      "Distância Vetorial do OSPF de Link-State no Dijkstra Padrão da Rota Cega do Switch de Pacotes Store Foward em Fila de Acesso do Throughput Nominal Isolado do CSMA/CD em 1500 Bytes cravados de Fóton de Luz do Laser Unidirecional Cego Analítico."
    ],
    "answer": "Internet e o paradigma mágico de Universal Service na Rede Virtual Abstrata (que emenda os formatos bizarros sob o IP comum nas pontas das aplicações de Cima).",
    "explanation": "A alternativa correta é a letra A. Internet e o paradigma mágico de Universal Service na Rede Virtual Abstrata (que emenda os formatos bizarros sob o IP comum nas pontas das aplicações de Cima)."
  },
  {
    "question": "Sobre O OSI e TCP/IP, as sete camadas OSI nasceram ANTES da revolução da Internet de TCP/IP, por conta disso o OSI:",
    "options": [
      "Não abriga formalmente as nativas e eficientes Camadas de \"Internet\" desenhadas pro roteamento heterogêneo cruzado de roteadores da base do TCP IP 5 cego (o modelo TCP absorve funções em 4 e 5 blocos densos enquanto OSI dilui em 7 teóricas engessadas).",
      "Proíbe o uso de hubs em 10BASE-T RJ-45 de par trançado UTP.",
      "Descartou os Teoremas de Nyquist Shannon nas bordas.",
      "Restringiu VPN a 1Gbps de Gigabit Ethernet FSK pino a pino.",
      "Emula a entrega de IPv6 Multicast em classes D de MAC Estático EPROM na bridge UTP."
    ],
    "answer": "Não abriga formalmente as nativas e eficientes Camadas de \"Internet\" desenhadas pro roteamento heterogêneo cruzado de roteadores da base do TCP IP 5 cego (o modelo TCP absorve funções em 4 e 5 blocos densos enquanto OSI dilui em 7 teóricas engessadas).",
    "explanation": "A alternativa correta é a letra A. Não abriga formalmente as nativas e eficientes Camadas de \"Internet\" desenhadas pro roteamento heterogêneo cruzado de roteadores da base do TCP IP 5 cego (o modelo TCP absorve funções em 4 e 5 blocos densos enquanto OSI dilui em 7 teóricas engessadas)."
  },
  {
    "question": "Pilhas / \"Stacks\": Computadores rodam softwares e pilhas duplas no Kernel (Ex: IPv4 c/ IPv6). Eles enviam bits pelo mesmo RJ-45 isolados e sem dar pau nas redes porque:",
    "options": [
      "O router tem um HD gigante para isolar os PCs de origens duvidosas.",
      "A energia em tensão nunca é zero e emula laser nas fibras FDDI emuladas por BGP cruzado.",
      "As Placas nas pontas embutem nos Metadados um \"Campo Tipo\" (Frame Type Field explícito na borda), que pisca e grita e diz formalmente e cirúrgicamente p/ o lado alheio qual exata Pilha TCP ali debaixo deve abraçar e sugar a leitura da carga do Datagrama na montanha das camadas sem misturar o lixo (e garantindo a harmonia paralela cega de redes).",
      "Roda MACs cruzados BNC RG-58 limitados em 50 ohms do RS-232 em Modems de luz no anel Token de Borda estática.",
      "Nada acima."
    ],
    "answer": "As Placas nas pontas embutem nos Metadados um \"Campo Tipo\" (Frame Type Field explícito na borda), que pisca e grita e diz formalmente e cirúrgicamente p/ o lado alheio qual exata Pilha TCP ali debaixo deve abraçar e sugar a leitura da carga do Datagrama na montanha das camadas sem misturar o lixo (e garantindo a harmonia paralela cega de redes).",
    "explanation": "A alternativa correta é a letra C. As Placas nas pontas embutem nos Metadados um \"Campo Tipo\" (Frame Type Field explícito na borda), que pisca e grita e diz formalmente e cirúrgicamente p/ o lado alheio qual exata Pilha TCP ali debaixo deve abraçar e sugar a leitura da carga do Datagrama na montanha das camadas sem misturar o lixo (e garantindo a harmonia paralela cega de redes)."
  },
  {
    "question": "Qual técnica defende o protocolo na nuvem contra os maliciosos \"Pacotes Duplicados Zumbis\" oriundos do atraso da RAM cega de retransmissão engarrafada nas Fila?",
    "options": [
      "OSPF descarta a placa NIC em CRC.",
      "Jumbo frames matam o rádio do Ping cego de OSPF.",
      "Sequência rastreável nas veias e numeração do pacote conferido (e anotado à mão pelo software do alvo final) no buffer de recepção: A duplicação é barrada ao cruzar o carimbo número X com a lista de furos sanados. O lixo que repete ali ele mata do jogo sem perturbar a casca das aplicações. (Receptor checa se já entregou ou tá na gaveta).",
      "Roteadores invertem e codificam a luz no CSMA de barramento FDDI em U (Self Healing Cego limitante das WANs).",
      "VPN isola e desliga o Cabo UTP RJ-45 de 1Gbps Crossover pino a pino do Multiplexador AUI em Thicknet Ethernet analógico do Transceiver RG-8."
    ],
    "answer": "Sequência rastreável nas veias e numeração do pacote conferido (e anotado à mão pelo software do alvo final) no buffer de recepção: A duplicação é barrada ao cruzar o carimbo número X com a lista de furos sanados. O lixo que repete ali ele mata do jogo sem perturbar a casca das aplicações. (Receptor checa se já entregou ou tá na gaveta).",
    "explanation": "A alternativa correta é a letra C. Sequência rastreável nas veias e numeração do pacote conferido (e anotado à mão pelo software do alvo final) no buffer de recepção: A duplicação é barrada ao cruzar o carimbo número X com a lista de furos sanados. O lixo que repete ali ele mata do jogo sem perturbar a casca das aplicações. (Receptor checa se já entregou ou tá na gaveta)."
  },
  {
    "question": "A Perda e Omissão do pacote ou a Quebra do Checksum da Camada TCP IP da rede causa um transtorno de luto sem ré no roteador:",
    "options": [
      "Ele morre sumário. O Roteador estraçalha no vazio o pacote falho no lixo e sequer avisa ou resmunga p/ ponte origem (a vítima) do Ping de erro de ICMP. Porque ele sequer atesta a validade dos bits do cabeçalho corrompido que denuncia a Origem, agindo à cega por \"Qualquer Custo\".",
      "Transmite o pacote na FDDI via luz para correção do CRC no Hub ativo das redes RJ-45 do CSMA/CD Thinnet Cat 7 cega no STP estático de pino a pino do UTP Base T de Gigabit MAC.",
      "Troca o IP para Rota de Distância Vetorial no SPF Link-State e entrega em IPv6 de 128 Bits em Multicast E cego para classes C.",
      "Pára a rede CSMA e aguarda Delay de Acesso.",
      "Ignora o Teorema de Nyquist de Modulação de Fase a 4 bits por baud rate."
    ],
    "answer": "Ele morre sumário. O Roteador estraçalha no vazio o pacote falho no lixo e sequer avisa ou resmunga p/ ponte origem (a vítima) do Ping de erro de ICMP. Porque ele sequer atesta a validade dos bits do cabeçalho corrompido que denuncia a Origem, agindo à cega por \"Qualquer Custo\".",
    "explanation": "A alternativa correta é a letra A. Ele morre sumário. O Roteador estraçalha no vazio o pacote falho no lixo e sequer avisa ou resmunga p/ ponte origem (a vítima) do Ping de erro de ICMP. Porque ele sequer atesta a validade dos bits do cabeçalho corrompido que denuncia a Origem, agindo à cega por \"Qualquer Custo\"."
  },
  {
    "question": "No fenômeno assustador e crítico da queda em dominó dos provedores (\"Colapso de Congestionamento\"), o que atinge a exaustão física real lá dentro das caixas?",
    "options": [
      "Os cabos UTP se desfazem pelo magnetismo RF Cego do Transponder Satelital de Microondas direcional de Laser fumaça nas WANs de Token Estrela do RJ 45 UTP.",
      "A fibra ótica queima o LED Laser e o fotossensível do FDDI.",
      "A Memória RAM Física interna do Packet Switch arria e colapsa com o lote do Store and Foward cheio de pacotes nas filas de roteamento da Borda, e os datagramas escorrem pra lixeira descartados num massacre silencioso causando o loop insano das máquinas reporem o atraso piorando e derretendo os fios do planeta em Pânico Sistêmico na Rede Inoperante instável mundial das fiações (causa real instável da WAN limitante).",
      "O cabo Thin Ethernet desconecta do PC em 50 Ohms.",
      "A antena micro-onda cai pela neve e fumaça local."
    ],
    "answer": "A Memória RAM Física interna do Packet Switch arria e colapsa com o lote do Store and Foward cheio de pacotes nas filas de roteamento da Borda, e os datagramas escorrem pra lixeira descartados num massacre silencioso causando o loop insano das máquinas reporem o atraso piorando e derretendo os fios do planeta em Pânico Sistêmico na Rede Inoperante instável mundial das fiações (causa real instável da WAN limitante).",
    "explanation": "A alternativa correta é a letra C. A Memória RAM Física interna do Packet Switch arria e colapsa com o lote do Store and Foward cheio de pacotes nas filas de roteamento da Borda, e os datagramas escorrem pra lixeira descartados num massacre silencioso causando o loop insano das máquinas reporem o atraso piorando e derretendo os fios do planeta em Pânico Sistêmico na Rede Inoperante instável mundial das fiações (causa real instável da WAN limitante)."
  },
  {
    "question": "Como a indústria lida para fugir do \"Colapso\" e prevenir o gargalo no miolo cego nas filas abarrotadas dos Packet Switches antes que os roteadores pifem a internet?",
    "options": [
      "Os fabricantes e engenheiros implementam 2 abordagens: (1) criaram a inteligência onde os próprios Equipamentos (Switches) enviam alarmes nas costas na via oposta pedindo à força que quem cospe bits recue ou pare de entupir o tubo à frente e (2) usam a taxa da perda passiva estagnada e cega na nuvem da Aplicação ali na frente como estimativa bruta matemática de pane para que as máquinas de origem atenuem e controlem sua vazão à cega retroativamente salvando a rota (Adaptação cega reativa).",
      "Mandam IP Multicast D de 240.0.0.0 em Cat 2 RDSI de Baud Rate RS-232 em Tensão Zero Cega.",
      "Invertem a fiação p/ Cabo cruzado RJ-45 UTP 5e pino a pino com Thicknet Transceptor AUI em RJ-9 de 75 Ohms amarela.",
      "Injetam Jumbo Frames de 9000 bytes e Token Ping de IPv5 (ST).",
      "Restringem tudo à VPN."
    ],
    "answer": "Os fabricantes e engenheiros implementam 2 abordagens: (1) criaram a inteligência onde os próprios Equipamentos (Switches) enviam alarmes nas costas na via oposta pedindo à força que quem cospe bits recue ou pare de entupir o tubo à frente e (2) usam a taxa da perda passiva estagnada e cega na nuvem da Aplicação ali na frente como estimativa bruta matemática de pane para que as máquinas de origem atenuem e controlem sua vazão à cega retroativamente salvando a rota (Adaptação cega reativa).",
    "explanation": "A alternativa correta é a letra A. Os fabricantes e engenheiros implementam 2 abordagens: (1) criaram a inteligência onde os próprios Equipamentos (Switches) enviam alarmes nas costas na via oposta pedindo à força que quem cospe bits recue ou pare de entupir o tubo à frente e (2) usam a taxa da perda passiva estagnada e cega na nuvem da Aplicação ali na frente como estimativa bruta matemática de pane para que as máquinas de origem atenuem e controlem sua vazão à cega retroativamente salvando a rota (Adaptação cega reativa)."
  },
  {
    "question": "Na visão acadêmica das Ferramentas (Como ping e traceroute), as falhas das vias que forçam a Internet ser particionada ou datagramas caírem mortos e gerarem avisos retroativos formatados às máquinas sobre a agonia do ambiente isolado, é competência do protocolo amarrado em IP Cego:",
    "options": [
      "OSPF Cego de Rota Dinâmica em Borda Estática BGP Distância.",
      "O ICMP (Internet Control Message Protocol). Peça atrelada na pilha que navega à moda de carona (embutido nas vísceras do próprio IP transportador para trafegar nos cabos) entregando aos gestores das estações o retrato doloroso (mensagens formatadas e pré-fabricadas, Echo Request e Reply ou Unreachable) de que as artérias dos fios, saltos, ou TTLs desabaram no roteamento e a entrega crua base da internet arriou na beira do vácuo da porta (Erro menos sério que a corrupção brutal mas essencial nas ferramentas do Administrador da fiação e LANs e Diagnóstico real limitante das redes).",
      "CRC do Frame Explícito no MAC.",
      "CSMA de Multiplexador.",
      "Nenhuma é correta."
    ],
    "answer": "O ICMP (Internet Control Message Protocol). Peça atrelada na pilha que navega à moda de carona (embutido nas vísceras do próprio IP transportador para trafegar nos cabos) entregando aos gestores das estações o retrato doloroso (mensagens formatadas e pré-fabricadas, Echo Request e Reply ou Unreachable) de que as artérias dos fios, saltos, ou TTLs desabaram no roteamento e a entrega crua base da internet arriou na beira do vácuo da porta (Erro menos sério que a corrupção brutal mas essencial nas ferramentas do Administrador da fiação e LANs e Diagnóstico real limitante das redes).",
    "explanation": "A alternativa correta é a letra B. O ICMP (Internet Control Message Protocol). Peça atrelada na pilha que navega à moda de carona (embutido nas vísceras do próprio IP transportador para trafegar nos cabos) entregando aos gestores das estações o retrato doloroso (mensagens formatadas e pré-fabricadas, Echo Request e Reply ou Unreachable) de que as artérias dos fios, saltos, ou TTLs desabaram no roteamento e a entrega crua base da internet arriou na beira do vácuo da porta (Erro menos sério que a corrupção brutal mas essencial nas ferramentas do Administrador da fiação e LANs e Diagnóstico real limitante das redes)."
  }
];
