import { Question } from "../types/question";

export const scmpaP3Questions: Question[] = [
  {
    "question": "Função Primária dos Condicionadores de Sinal: Qual é a finalidade principal dos módulos condicionadores de sinal instalados nas torres verticais das Unidades Remotas (RAA1 e RAA2) e nos consoles do SCMPA?",
    "options": [
      "Gerar a tensão de alimentação de 440 VAC para a partida dos motores elétricos auxiliares.",
      "Isolar galvanicamente, tratar, adequar e converter os sinais elétricos dos sensores do campo para níveis padronizados compatíveis com o Rack VME e a IHM, além de processar o acionamento de atuadores.",
      "Armazenar o banco de dados histórico da planta propulsora em memória flash não volátil.",
      "Comutar automaticamente o controle do telégrafo entre o CCM e o Passadiço."
    ],
    "answer": "Isolar galvanicamente, tratar, adequar e converter os sinais elétricos dos sensores do campo para níveis padronizados compatíveis com o Rack VME e a IHM, além de processar o acionamento de atuadores.",
    "explanation": "Conforme o manual do SCMPA (p. 59), a função dos condicionadores de sinal instalados nas torres verticais é isolar galvanicamente, tratar, adequar e converter os sinais elétricos provenientes dos sensores de campo para níveis padronizados (como 0-10 Vdc e 4-20 mA) compatíveis com o Rack VME e a IHM, além de processar acionamentos de atuadores.",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Módulos Condicionadores de Tensão Contínua (CV): Dentre os condicionadores de entrada analógica de tensão contínua utilizados no sistema, assinale a opção que indica a faixa correta de trabalho do modelo CV0:",
    "options": [
      "0 a 10 Vdc.",
      "0 a 5 Vdc.",
      "-10 a +10 Vdc.",
      "0 a 1 Vdc."
    ],
    "answer": "-10 a +10 Vdc.",
    "explanation": "Conforme a tabela de condicionadores analógicos do SCMPA (p. 64), o modelo CV0 opera com faixa de entrada diferencial de -10 a +10 Vdc (sendo o CV1 de 0 a 10 Vdc e o CV5 de 0 a 5 Vdc).",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Diagnóstico Local de Falha nos Condicionadores Gerais (CV, CA e CSF): Como o operador ou mantenedor identifica localmente a ocorrência de defeito em condicionadores analógicos gerais, como os modelos CV5 (0 a 5 Vdc) ou CA4 (4 a 20 mA)?",
    "options": [
      "Através do acendimento intermitente de um LED vermelho denominado Fail.",
      "Pelo disparo imediato da buzina de alarme no painel frontal do gabinete da remota.",
      "Eles possuem apenas o LED verde Power (indicando presença de alimentação); não há indicação visual de falha de sinal no módulo, sendo necessária a medição de tensão/corrente nos bornes de entrada e saída.",
      "Por uma mensagem alfanumérica exibida no display digital do próprio condicionador."
    ],
    "answer": "Eles possuem apenas o LED verde Power (indicando presença de alimentação); não há indicação visual de falha de sinal no módulo, sendo necessária a medição de tensão/corrente nos bornes de entrada e saída.",
    "explanation": "De acordo com o manual (p. 61, 64), os módulos das famílias CV, CA e CSF dispõem unicamente do LED verde Power indicativo de alimentação presente. Não possuem LED de falha de sinal; por isso, o diagnóstico de defeito local exige medição com multímetro nos bornes de entrada e saída.",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Diagnóstico em Condicionadores de Termopar (CSK): Em caso de circuito aberto ou ruptura do cabo de um sensor termopar tipo K ligado ao condicionador CSK, qual é o comportamento sinalizado no módulo local e na IHM remota?",
    "options": [
      "Localmente acende o LED vermelho Sensor Line; na IHM remota a saída vai para ~14 V (fundo de escala), indicando temperatura máxima.",
      "O LED verde Power apaga e a tela da IHM congela no valor de zero graus.",
      "O módulo queima o fusível interno de 2A e bloqueia a partida da máquina.",
      "A remota entra imediatamente em Fail-Set, desarmando o motor principal."
    ],
    "answer": "Localmente acende o LED vermelho Sensor Line; na IHM remota a saída vai para ~14 V (fundo de escala), indicando temperatura máxima.",
    "explanation": "No condicionador de termopar CSK (p. 61), a ruptura da linha do sensor faz acender o LED vermelho 'Sensor Line' no painel frontal do módulo e leva o sinal analógico de saída para ~14 Vdc (overscale), fazendo a IHM acusar temperatura máxima e alarme de sensor aberto.",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Diagnóstico em Condicionadores RTD / PT-100 (CSR): Nos condicionadores universais de termorresistência CSR, qual indicação visual e remota aponta falha de circuito aberto ou curto-circuito no sensor?",
    "options": [
      "O relé de saída desarma e a tela exibe a mensagem \"Sensor OK\".",
      "Localmente acende o LED vermelho Mode; remotamente a tensão vai para aproximadamente 11 V, registrando a leitura máxima de temperatura na tela.",
      "Pisca uma lâmpada amarela na Asa Lateral do CCM.",
      "A IHM passa a exibir valores negativos oscilantes."
    ],
    "answer": "Localmente acende o LED vermelho Mode; remotamente a tensão vai para aproximadamente 11 V, registrando a leitura máxima de temperatura na tela.",
    "explanation": "No condicionador CSR (termorresistência PT-100, p. 61), qualquer defeito de ruptura ou curto no sensor faz o LED vermelho 'Mode' acender localmente e comanda a saída para ~11 Vdc, gerando na IHM remota o registro de fundo de escala (temperatura máxima).",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Condicionadores Especiais de Tacogerador (TT1 a TT9): Os condicionadores especiais de rotação convertem a tensão alternada senoidal trifásica gerada pelos tacogeradores em um sinal contínuo para leitura analógica. Qual é a faixa de tensão padronizada na saída de todos esses módulos?",
    "options": [
      "4 a 20 mA.",
      "0 a 500 mA.",
      "0 a 10 Vdc proporcional à rotação (RPM) medida.",
      "115 VAC / 400 Hz."
    ],
    "answer": "0 a 10 Vdc proporcional à rotação (RPM) medida.",
    "explanation": "Todos os condicionadores da família TT (TT1 a TT9, p. 60) convertem a tensão alternada trifásica gerada pelos tacogeradores dos motores, turbinas e eixos para o padrão unificado de 0 a 10 Vdc na saída, proporcional à velocidade de rotação (RPM).",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Aplicação Específica do Condicionador TT1: A qual elemento da planta propulsora está conectado o condicionador especial TT1 (escala de entrada de 0 a 15,28 Vrms)?",
    "options": [
      "Turbina a Gás (TG).",
      "Motor de Combustão Principal Diesel (MCP).",
      "Eixo de Propulsão.",
      "Compressor de Ar de Baixa Pressão."
    ],
    "answer": "Motor de Combustão Principal Diesel (MCP).",
    "explanation": "Conforme a especificação do sistema (p. 24, 60), o condicionador TT1 recebe o sinal do tacogerador trifásico do Motor de Combustão Principal Diesel (MCP) na faixa de 0 a 15,28 Vrms.",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Condicionadores Especiais TT3 e TT6: A quais componentes do sistema propulsor destinam-se os módulos de tacogerador TT3 (0 a 35,21 Vrms) e TT6 (0 a 60 Vrms), respectivamente?",
    "options": [
      "Compressor e Eixo propulsor.",
      "Turbina de Potência (TP) e Turbina a Gás (TG).",
      "Bomba de esgoto e Bomba de incêndio.",
      "Motor Diesel de Boreste e Motor Diesel de Bombordo."
    ],
    "answer": "Turbina de Potência (TP) e Turbina a Gás (TG).",
    "explanation": "Conforme o manual (p. 24, 60), o módulo TT3 (0 a 35,21 Vrms) destina-se à Turbina de Potência (TP) e o módulo TT6 (0 a 60 Vrms) é utilizado no tacogerador da Turbina a Gás (TG).",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Condicionador de Potência da Turbina (CSS): O condicionador de saída de sinal CSS foi desenvolvido internamente pela Marinha para interfacear com o conversor eletropneumático da Turbina a Gás. Quais são seus níveis nominais de entrada e saída?",
    "options": [
      "Entrada de 4 a 20 mA e saída de 0 a 24 Vdc.",
      "Entrada de 0 a 10 Vdc e saída de corrente de 0 a 500 mA.",
      "Entrada de 115 VAC e saída de 50 Vdc.",
      "Entrada de 0 a 5 Vdc e saída digital por relé de 10A."
    ],
    "answer": "Entrada de 0 a 10 Vdc e saída de corrente de 0 a 500 mA.",
    "explanation": "O condicionador de saída CSS (p. 46, 60) converte a referência de tensão analógica de 0 a 10 Vdc gerada pela saída analógica do SCMPA em uma saída de corrente de 0 a 500 mA para pilotar o atuador do conversor eletropneumático de combustível da TG.",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Procedimento de Teste nos Módulos Especiais TT: Como deve ser realizado o teste de conformidade de um condicionador especial de rotação da família TT (TT1 a TT9), considerando suas características construtivas?",
    "options": [
      "Pressionando o botão Test no painel frontal e observando os LEDs de sinalização.",
      "Conectando o programador portátil Hand-Held na porta serial frontal.",
      "Eles não possuem LEDs de diagnóstico; o teste consiste em medir a presença da tensão de alimentação de 24 Vdc, a tensão AC de entrada do tacogerador e o valor da tensão de saída de 0 a 10 Vdc.",
      "Acionando a chave física de emergência no gabinete da Remota."
    ],
    "answer": "Eles não possuem LEDs de diagnóstico; o teste consiste em medir a presença da tensão de alimentação de 24 Vdc, a tensão AC de entrada do tacogerador e o valor da tensão de saída de 0 a 10 Vdc.",
    "explanation": "Os módulos especiais TT (p. 47, 61) são placas compactas que não possuem LEDs ou botões de teste; o procedimento de verificação consiste em medir com multímetro a alimentação (24 Vdc), a entrada alternada trifásica (Vrms) e a saída contínua (0 a 10 Vdc).",
    "topic": "Módulo 1: Condicionadores de Sinal e Diagnóstico"
  },
  {
    "question": "Barramento Padrão dos Consoles e Remotas: Toda a arquitetura eletrônica interna dos consoles de operação do SCMPA e dos armários das Unidades Remotas é construída sobre qual padrão de barramento industrial?",
    "options": [
      "PCI Express de 64 bits.",
      "ISA clássico industrial de 16 bits.",
      "VME (VERSA Module Europe) com processadores Intel em arquitetura PC.",
      "Barramento serial USB 3.0 militar."
    ],
    "answer": "VME (VERSA Module Europe) com processadores Intel em arquitetura PC.",
    "explanation": "A arquitetura do SCMPA (p. 7, 62) é padronizada no barramento Eurocard VME (VERSA Module Europe), utilizando processadores Intel integrados em arquitetura de computador industrial (PC/VME).",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Distribuição das Estações no Centro de Controle de Máquinas (CCM): Como é composto fisicamente o console principal localizado no CCM?",
    "options": [
      "2 consoles independentes sem asas e 1 armário de relés.",
      "Três Módulos Básicos (MB1-BB, MB2-Central e MB3-BE) e dois Módulos Asas Laterais (AL1-BB e AL2-BE).",
      "4 Módulos Básicos de visualização e 2 impressoras a laser.",
      "1 console único monobloco com telas sensíveis ao toque."
    ],
    "answer": "Três Módulos Básicos (MB1-BB, MB2-Central e MB3-BE) e dois Módulos Asas Laterais (AL1-BB e AL2-BE).",
    "explanation": "O console principal do CCM (p. 7, 62) possui estrutura física composta por três Módulos Básicos (MB1-Bombordo, MB2-Central e MB3-Boreste) e dois Módulos de Asas Laterais (AL1-BB e AL2-BE).",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Função e Classificação das Estações do CCM: Dentre as três estações de trabalho situadas no CCM, quais são classificadas operacionalmente como SCADA e qual atua como VIEW?",
    "options": [
      "MB1 (BB) e MB3 (BE) operam como SCADA; MB2 (Central) atua como VIEW.",
      "MB2 (Central) atua como SCADA; MB1 (BB) e MB3 (BE) atuam como VIEW.",
      "Todas as três estações do CCM operam exclusivamente como VIEW.",
      "Todas as três estações operam como servidores SCADA redundantes."
    ],
    "answer": "MB1 (BB) e MB3 (BE) operam como SCADA; MB2 (Central) atua como VIEW.",
    "explanation": "No CCM (p. 62), MB1 (Bombordo) e MB3 (Boreste) são estações SCADA (com placas de memória refletiva conectadas diretamente às remotas); MB2 (Central) atua como estação VIEW (adquire dados via rede Ethernet a partir de uma SCADA).",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Console do Passadiço (QMC): Como se classifica a estação de trabalho do console QMC instalada no Passadiço e a qual barramento de dados ela se conecta?",
    "options": [
      "É uma estação SCADA ligada diretamente por fibra óptica às remotas.",
      "É uma IHM do tipo VIEW conectada aos consoles do CCM através da rede local Ethernet.",
      "É uma estação passiva sem capacidade de inserção de ordens ou manetes.",
      "É um terminal burro com ligação serial pura RS-232 com a máquina do leme."
    ],
    "answer": "É uma IHM do tipo VIEW conectada aos consoles do CCM através da rede local Ethernet.",
    "explanation": "O console QMC do Passadiço (p. 13, 62) é uma estação IHM do tipo VIEW, conectada à rede local Ethernet (NT-Net), recebendo seus dados operacionais de um dos servidores SCADA do CCM.",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Estrutura Interna das Unidades Remotas (RAA1 e RAA2): O que abriga o interior de cada armário metálico reforçado das Unidades Remotas RAA1 (Boreste) e RAA2 (Bombordo)?",
    "options": [
      "Apenas as baterias chumbo-ácidas de emergência do navio.",
      "Um Rack VME (contendo CPU, memórias refletivas e placas de E/S) e torres verticais montadas com componentes discretos (fotoacopladores, relés e condicionadores de sinal).",
      "Os transformadores de MAT (Muito Alta Tensão) da propulsão.",
      "Os reguladores mecânicos de contrapesos e as válvulas hidráulicas direcionais do leme."
    ],
    "answer": "Um Rack VME (contendo CPU, memórias refletivas e placas de E/S) e torres verticais montadas com componentes discretos (fotoacopladores, relés e condicionadores de sinal).",
    "explanation": "Cada remota RAA (p. 62, 63) abriga internamente um Rack VME (com placa CPU, cartões de memória refletiva 5579 e placas VMIVME de E/S) e torres verticais com condicionadores, fotoacopladores e relés de interfaceamento de campo.",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Identificação dos Cartões de Entrada e Saída (E/S): No Rack VME das estações remotas, quais são os códigos das placas responsáveis pelas entradas digitais e saídas digitais, respectivamente?",
    "options": [
      "VMIVME-3113A (entradas digitais) e VMIVME-4140 (saídas digitais).",
      "VMIVME-1129 (entradas digitais - EDIG) e VMIVME-2128 (saídas digitais - SDIG).",
      "VMIVME-7751 e VMIVME-5579.",
      "VMIVME-7452 e VMIVME-5594."
    ],
    "answer": "VMIVME-1129 (entradas digitais - EDIG) e VMIVME-2128 (saídas digitais - SDIG).",
    "explanation": "No padrão VMIVME do SCMPA (p. 24), a placa VMIVME-1129 processa entradas digitais (EDIG de 128 canais) e a placa VMIVME-2128 comanda as saídas digitais (SDIG de 128 canais).",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Cartões para Sinais Analógicos de Campo: Quais placas do Rack VME executam a conversão A/D (entradas analógicas) e D/A (saídas analógicas) nos armários das remotas?",
    "options": [
      "VMIVME-1129 (analógica de entrada) e VMIVME-2128 (analógica de saída).",
      "VMIVME-3113A (Entrada Analógica - EANA) e VMIVME-4140 (Saída Analógica - SANA).",
      "VMIVME-5579 (EANA) e VMIVME-7452 (SANA).",
      "PMC-237P e PMC-008A."
    ],
    "answer": "VMIVME-3113A (Entrada Analógica - EANA) e VMIVME-4140 (Saída Analógica - SANA).",
    "explanation": "Conforme o manual (p. 24), a placa VMIVME-3113A é responsável pelas Entradas Analógicas (EANA - conversão A/D de 12 bits) e a VMIVME-4140 pelas Saídas Analógicas (SANA - conversão D/A).",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Placa de Memória de Estado Sólido (Flash Disk): Qual é a identificação do módulo eletrônico não volátil responsável pelo armazenamento do software operacional e de controle no barramento VME?",
    "options": [
      "VMIVME-5594.",
      "VMIVME-7452 (Flash Drive removível).",
      "VMIPMC-5579.",
      "MCR-T-UI-E."
    ],
    "answer": "VMIVME-7452 (Flash Drive removível).",
    "explanation": "A placa VMIVME-7452 (p. 22, 29) é um disco de estado sólido Flash Drive não volátil montado no barramento VME, armazenando o sistema operacional de tempo real, programas de controle e arquivos de configuração.",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Fotoacopladores de Isolação (FA2 e FA5): Nas torres verticais das remotas, qual é o papel dos módulos fotoacopladores FA2 (24 Vdc) e FA5 (50 Vdc)?",
    "options": [
      "Amplificar a potência elétrica para girar os motores de arranque.",
      "Proporcionar isolamento galvânico óptico entre os sinais digitais de campo e os circuitos lógicos do rack VME.",
      "Controlar a temperatura das esteiras de cabos axiais.",
      "Retificar a corrente alternada de 115 VAC para corrente contínua."
    ],
    "answer": "Proporcionar isolamento galvânico óptico entre os sinais digitais de campo e os circuitos lógicos do rack VME.",
    "explanation": "Os módulos fotoacopladores FA2 e FA5 (p. 24, 65) promovem isolação galvânica óptica de alta tensão entre os sensores/chaves de campo e a placa de entrada digital VMIVME-1129, eliminando ruídos e laços de terra.",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Relés Eletromecânicos de Saída Digital (Série RD): Como operam os relés de saída digital (como o modelo RDA) montados nas torres das remotas ao receberem um comando da placa VMIVME-2128?",
    "options": [
      "Cortam o terra da fonte externa provocando curto-circuito temporário.",
      "A bobina do relé é alimentada pela fonte interna de 24 Vdc através da placa de saída digital, fechando os contatos secos 11 e 14 para acionar o atuador de campo.",
      "Emitem um feixe de luz infravermelha para o detector do passadiço.",
      "Desarmam o disjuntor termomagnético da respectiva torre."
    ],
    "answer": "A bobina do relé é alimentada pela fonte interna de 24 Vdc através da placa de saída digital, fechando os contatos secos 11 e 14 para acionar o atuador de campo.",
    "explanation": "Ao receber o nível lógico de comando da placa VMIVME-2128 (p. 26), a bobina de 24 Vdc do relé RDA é excitada, comutando seus contatos secos (11-comum e 14-normalmente aberto) para fechar o circuito externo do atuador de campo.",
    "topic": "Módulo 2: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Arquitetura da Rede RT-Net: Como é estruturada a rede de alta velocidade RT-Net (Memória Refletiva) no SCMPA?",
    "options": [
      "Barramento linear em cabo coaxial de cobre operando sob protocolo CSMA/CD.",
      "Anel óptico determinístico redundante em fibra óptica multimodo que interliga em tempo real as Remotas (RAA1 e RAA2) e os consoles SCADA do CCM.",
      "Rede estrela sem fio conectada a um roteador Wi-Fi centralizado no Passadiço.",
      "Malha de pares trançados de telefonia operando em 1200 bps."
    ],
    "answer": "Anel óptico determinístico redundante em fibra óptica multimodo que interliga em tempo real as Remotas (RAA1 e RAA2) e os consoles SCADA do CCM.",
    "explanation": "A RT-Net (p. 17, 63) é uma rede determinística em anel óptico de tempo real com fibra multimodo interligando as unidades remotas RAA1 e RAA2 e as estações SCADA do CCM através do compartilhamento transparente de posições de memória.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Placa de Interface da Rede RT-Net: Qual módulo de hardware é instalado no slot mezzanine das CPUs para viabilizar a comunicação na rede de memória refletiva?",
    "options": [
      "Cartão Ethernet 10/100 padrão PCI.",
      "Placa mezzanine óptica VMIPMC-5579 com conectores tipo SC.",
      "Modem V.90 padrão discado.",
      "Conversor USB-CAN industrial."
    ],
    "answer": "Placa mezzanine óptica VMIPMC-5579 com conectores tipo SC.",
    "explanation": "O hardware da RT-Net (p. 22, 24) baseia-se na placa mezzanine VMIPMC-5579, acoplada aos cartões de CPU através do conector PMC, utilizando cabos de fibra óptica multimodo com conectores ópticos tipo SC.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "HUB Óptico VMIACC-5594: Qual é a função estratégica do dispositivo VMIACC-5594 conectado à rede RT-Net?",
    "options": [
      "Interligar a impressora matricial à rede Ethernet.",
      "Atuar como repetidor de anel óptico com função de chaveamento automático para bypass de nós em caso de falha de placas de memória refletiva.",
      "Alimentar a campainha Bleeptone do Passadiço em 24 Vdc.",
      "Converter fibra óptica em sinais pneumáticos de 3 a 15 psi."
    ],
    "answer": "Atuar como repetidor de anel óptico com função de chaveamento automático para bypass de nós em caso de falha de placas de memória refletiva.",
    "explanation": "O VMIACC-5594 (p. 32) é um HUB/comutador óptico de bypass que monitora os nós do anel RT-Net; caso uma placa VMIPMC-5579 falhe ou perca alimentação, o VMIACC-5594 isola automaticamente o nó defeituoso para preservar o anel.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Sinalização nos LEDs da Placa VMIPMC-5579: Na placa de memória refletiva, o que significa a indicação visual com o LED verde (Signal Detect - SD) aceso e o LED vermelho (Fail) piscando?",
    "options": [
      "Placa completamente queimada exigindo descarte imediato.",
      "Recepção óptica perfeita no cabo RX da placa.",
      "Falha no cabo TX de transmissão.",
      "Ausência total de sinal luminoso na fibra."
    ],
    "answer": "Recepção óptica perfeita no cabo RX da placa.",
    "explanation": "Conforme a tabela de diagnóstico de LEDs da VMIPMC-5579 (p. 36), o LED verde SD aceso indica que a recepção óptica de dados no cabo RX está perfeita e operando com intensidade adequada.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Sinalização de Falha de Transmissão (TX) na RT-Net: Quando o LED verde Signal Detect (SD) apaga e o LED vermelho Fail permanece piscando na placa 5579, qual é o diagnóstico de falha?",
    "options": [
      "Cabo RX perfeito e sem falhas.",
      "Defeito no cabo TX da respectiva placa de memória refletiva.",
      "Sobretensão no barramento VME.",
      "Interrupção de energia no No-Break."
    ],
    "answer": "Defeito no cabo TX da respectiva placa de memória refletiva.",
    "explanation": "De acordo com o manual do SCMPA (p. 36), quando o LED verde SD apaga e o LED Fail pisca, há perda de recepção de sinal no nó subsequente, diagnosticando falha física no cabo de transmissão TX ou no conector óptico.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Estrutura e Função da Rede NT-Net: Qual é a configuração física e a finalidade da rede NT-Net no SCMPA?",
    "options": [
      "Anel de fibra óptica monomodo exclusivo para o comando de leme.",
      "Rede local Ethernet em estrela (100 Mbps) por cabo de par trançado CAT 5, conectando os consoles do CCM, Passadiço e a Impressora.",
      "Barramento serial militar MIL-STD-1553B para mísseis.",
      "Conexão ponto a ponto entre a boia de salvatagem e o rádio VHF."
    ],
    "answer": "Rede local Ethernet em estrela (100 Mbps) por cabo de par trançado CAT 5, conectando os consoles do CCM, Passadiço e a Impressora.",
    "explanation": "A rede NT-Net (p. 34, 63) é uma rede local Ethernet baseada no protocolo TCP/IP, topologia em estrela, com cabos CAT 5 e conectores RJ45, interligando os consoles de operação (MB1, MB2, MB3, QMC) e a impressora do sistema.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Falha no HUB Ethernet do CCM: Em caso de queima ou pane geral no HUB Ethernet da rede NT-Net localizado no CCM, quais impactos imediatos ocorrem na supervisão?",
    "options": [
      "Perda das remotas RAA1 e RAA2 e congelamento dos reguladores dos motores.",
      "Perda das estações tipo VIEW (MB2 no CCM e QMC no Passadiço) e perda de comunicação com a impressora de relatórios.",
      "Apagamento de todas as telas SCADA e parada compulsória dos MCPs.",
      "Ruptura do anel de fibra óptica da RT-Net."
    ],
    "answer": "Perda das estações tipo VIEW (MB2 no CCM e QMC no Passadiço) e perda de comunicação com a impressora de relatórios.",
    "explanation": "Na falha do HUB Ethernet (p. 41), o tráfego de dados TCP/IP é interrompido. Como as estações VIEW (MB2 e Passadiço) dependem da rede para buscar telas e dados das SCADAs, elas perdem comunicação, assim como a impressora de relatórios.",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Diferença de Redundância Ethernet entre Fragatas: Em relação à rede NT-Net (Ethernet), qual é a diferença entre a Fragata Independência e a Fragata Liberal?",
    "options": [
      "A Independência possui rede em anel e a Liberal rede em malha.",
      "A Independência possui topologia não redundante com 1 HUB comercial em Boreste, enquanto a Liberal utiliza switches redundantes (Boreste e Bombordo) em cartão VME.",
      "A Liberal não possui rede Ethernet instalada.",
      "A Independência opera em 10 Gbps e a Liberal em 10 Mbps."
    ],
    "answer": "A Independência possui topologia não redundante com 1 HUB comercial em Boreste, enquanto a Liberal utiliza switches redundantes (Boreste e Bombordo) em cartão VME.",
    "explanation": "Conforme a arquitetura naval (p. 39), a Fragata Independência possui rede Ethernet simples com 1 HUB comercial situado em Boreste, enquanto a Fragata Liberal dispõe de redundância física com dois switches VME (um em Boreste e um em Bombordo).",
    "topic": "Módulo 3: Redes de Comunicação — RT-Net e NT-Net"
  },
  {
    "question": "Sistema No-Break (UPS) Principal: Qual é a tensão, frequência e equipamento suprido pelo sistema de No-Break principal do SCMPA?",
    "options": [
      "440 VAC / 60 Hz para as bombas de óleo lubrificante de emergência.",
      "115 VAC / 60 Hz estabilizado e ininterrupto para todas as estações de trabalho do CCM, Passadiço e Unidades Remotas.",
      "24 Vdc contínuo exclusivo para a iluminação de emergência das praças de máquinas.",
      "115 VAC / 400 Hz para os radares de navegação."
    ],
    "answer": "115 VAC / 60 Hz estabilizado e ininterrupto para todas as estações de trabalho do CCM, Passadiço e Unidades Remotas.",
    "explanation": "O No-Break principal (p. 14, 66) alimenta com 115 VAC / 60 Hz ininterrupto e estabilizado todos os consoles de operação do CCM (MB1, MB2, MB3, AL1, AL2), o console do Passadiço (QMC) e os Racks VME das remotas RAA1 e RAA2.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Autonomia do No-Break nas Fragatas: Em caso de perda total da geração principal de energia do navio, qual é a autonomia garantida pelos bancos de baterias do No-Break nas Fragatas Independência e Liberal operando em plena carga?",
    "options": [
      "10 minutos na Independência e 5 minutos na Liberal.",
      "4 horas na Fragata Independência (com 3 gabinetes externos de baterias) e 20 minutos na Fragata Liberal (com 1 gabinete).",
      "24 horas contínuas em ambos os navios.",
      "Apenas 30 segundos, servindo apenas para salvar as telas."
    ],
    "answer": "4 horas na Fragata Independência (com 3 gabinetes externos de baterias) e 20 minutos na Fragata Liberal (com 1 gabinete).",
    "explanation": "O dimensionamento de baterias do No-Break (p. 34, 66) provê autonomia de até 4 horas na Fragata Independência (dotada de 3 gabinetes externos de acumuladores) e de 20 minutos na Fragata Liberal (dotada de 1 gabinete externo).",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Especificações do Inversor Estático de 400 Hz: O inversor estático modelo TCI 1.0-NAR2C recebe energia contínua e a transforma em corrente alternada de alta frequência. Quais são suas grandezas nominais de entrada e saída?",
    "options": [
      "Entrada de 24 Vdc e saída de 115 VAC / 60 Hz (500 VA).",
      "Entrada de 50 Vdc do navio (faixa de 43,75 a 58,75 Vdc) e saída de 115 VAC / 400 Hz (potência nominal de 1000 VA).",
      "Entrada de 115 VAC / 60 Hz e saída de 220 VAC trifásico.",
      "Entrada de 12 Vdc e saída de 50 Vdc com filtro ativo."
    ],
    "answer": "Entrada de 50 Vdc do navio (faixa de 43,75 a 58,75 Vdc) e saída de 115 VAC / 400 Hz (potência nominal de 1000 VA).",
    "explanation": "O inversor Tectrol TCI 1.0-NAR2C (p. 49, 50) opera com entrada de 50 Vdc do navio (faixa permitida de 43,75 a 58,75 Vdc) e entrega saída estabilizada de 115 VAC a 400 Hz senoidal com capacidade de 1000 VA.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Equipamentos Alimentados pelo Inversor de 400 Hz: Quais instrumentos do SCMPA dependem estritamente da alimentação de 115 VAC / 400 Hz fornecida pelo inversor estático?",
    "options": [
      "As telas de vídeo coloridas e o mouse trackball dos consoles.",
      "Os amplificadores de vibração das turbinas (localizados nas caixas dos controladores Diesel) e os painéis de controle de gases das turbinas.",
      "Os motores elétricos dos compressores de ar condicionado.",
      "Os aquecedores elétricos da rede de aguada sanitária."
    ],
    "answer": "Os amplificadores de vibração das turbinas (localizados nas caixas dos controladores Diesel) e os painéis de controle de gases das turbinas.",
    "explanation": "A saída de 115 VAC / 400 Hz do inversor (p. 14, 46) alimenta exclusivamente cargas de alta frequência: os amplificadores de vibração das turbinas (instalados nas caixas de junção) e os painéis de controle de temperatura de gases da TG.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Redundância das Fontes Internas de 24 Vdc: Como são arranjadas as fontes de alimentação internas de 24 Vdc (fontes de 10A e 2,5A) no interior dos armários das remotas para assegurar alta confiabilidade?",
    "options": [
      "São ligadas em série para somar 48 Vdc.",
      "São ligadas em paralelo, duas a duas, operando em modo redundante com divisão de corrente.",
      "Apenas uma opera por viagem, ficando a outra desconectada fisicamente do trilho.",
      "São ligadas através de transformadores de isolação a óleo."
    ],
    "answer": "São ligadas em paralelo, duas a duas, operando em modo redundante com divisão de corrente.",
    "explanation": "As fontes internas de 24 Vdc das remotas (p. 45) trabalham em pares redundantes paralelos (Fontes 1 e 2, Fontes 3 e 4, Fontes 5 e 6); se uma falhar, a outra assume instantaneamente a carga total sem queda de tensão.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Fonte sem Redundância no SCMPA: Existe uma única fonte de alimentação interna de 24 Vdc nas remotas que opera sem circuito paralelo de redundância. Qual carga ela alimenta?",
    "options": [
      "O circuito de lâmpadas do Passadiço.",
      "O condicionador de sinal da turbina a gás (CSS).",
      "A placa de rede Ethernet da CPU.",
      "O cooler de refrigeração da gaveta de baterias."
    ],
    "answer": "O condicionador de sinal da turbina a gás (CSS).",
    "explanation": "No projeto elétrico das remotas (p. 45), a única fonte de 24 Vdc que opera de forma isolada/sem par redundante é a fonte dedicada à alimentação do condicionador de potência CSS da Turbina a Gás.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Monitoração das Fontes Internas pela IHM: Como o SCMPA monitora e detecta no CCM a queda de tensão de uma fonte interna de 24 Vdc de uma Remota?",
    "options": [
      "Por um termostato bimetálico que mede a temperatura da carcaça.",
      "A tensão de 24 Vdc passa por um resistor de 10 kΩ gerando uma corrente de 2,4 mA, que é tratada por um condicionador (0 a 5 mA) e lida por um canal de placa analógica (EANA).",
      "Pela interrupção imediata da comunicação na fibra óptica.",
      "Por uma chave boia montada na base do gabinete."
    ],
    "answer": "A tensão de 24 Vdc passa por um resistor de 10 kΩ gerando uma corrente de 2,4 mA, que é tratada por um condicionador (0 a 5 mA) e lida por um canal de placa analógica (EANA).",
    "explanation": "Para supervisão remota contínua (p. 44), a barra de 24 Vdc é ligada a um resistor limitador de 10 kΩ que gera 2,4 mA; esse sinal é condicionado (faixa de 0 a 5 mA) e amostrado por um canal analógico da placa VMIVME-3113A.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Tensão Externa de 50 Vdc do Navio: Para que é utilizada a barra de 50 Vdc fornecida pelo sistema de retificadores/baterias do navio às caixas de junção do SCMPA?",
    "options": [
      "Alimentar os filamentos dos monitores de tubo BARCO.",
      "Alimentar o primário do Inversor Estático de 400 Hz e fornecer tensão de retenção/segurança para os circuitos de Fail-Set e fotoacopladores FA5.",
      "Fornecer energia para a buzina de ré da embarcação.",
      "Acionar o sistema de partida a ar comprimido dos MCPs."
    ],
    "answer": "Alimentar o primário do Inversor Estático de 400 Hz e fornecer tensão de retenção/segurança para os circuitos de Fail-Set e fotoacopladores FA5.",
    "explanation": "A linha contínua de 50 Vdc do navio (p. 18, 36, 48) tem dupla missão crítica: alimentar o Inversor estático de 400 Hz e manter armados os relés de travamento dos circuitos de Fail-Set e os optoacopladores FA5.",
    "topic": "Módulo 4: Alimentações Elétricas do Sistema"
  },
  {
    "question": "Conceito e Ação de FAIL-SET: Qual é a definição e a função prioritária da atuação do Fail-Set quando ativado em qualquer subsistema da propulsão (MCP, TG ou HPC)?",
    "options": [
      "Desligar e travar mecanicamente todos os eixos propulsores em menos de 1 segundo.",
      "Congelar os set-points na posição imediatamente anterior à falha (fail-freeze), mantendo a estabilidade da máquina e evitando variações perigosas.",
      "Abrir os flaps de exaustão e disparar o sistema de CO2 no compartimento.",
      "Passar automaticamente o governo do navio para o timão manual na popa."
    ],
    "answer": "Congelar os set-points na posição imediatamente anterior à falha (fail-freeze), mantendo a estabilidade da máquina e evitando variações perigosas.",
    "explanation": "O Fail-Set (p. 5, 65) é uma filosofia de fail-safe/fail-freeze: diante de falha grave de comando ou eletrônica, ele congela os atuadores de combustível e do passo do hélice na última posição válida, impedindo desvios bruscos e permitindo que o operador assuma o controle manual.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Conjuntos de Fail-Set por Bordo: Como estão distribuídos os circuitos de Fail-Set no SCMPA para a segurança da planta propulsora?",
    "options": [
      "Um circuito único centralizado que desarma todo o navio simultaneamente.",
      "Dois grupos independentes (um por bordo), abrangendo individualmente os sistemas de Boreste (MCP 1, MCP 3, TG 1 e HPC BE) e de Bombordo (MCP 2, MCP 4, TG 2 e HPC BB).",
      "4 circuitos instalados exclusivamente no console do Passadiço.",
      "Apenas um circuito dedicado para cada hélice de passo."
    ],
    "answer": "Dois grupos independentes (um por bordo), abrangendo individualmente os sistemas de Boreste (MCP 1, MCP 3, TG 1 e HPC BE) e de Bombordo (MCP 2, MCP 4, TG 2 e HPC BB).",
    "explanation": "Para garantir redundância e compartimentação (p. 5), o SCMPA possui dois grupos independentes de Fail-Set: um para Boreste (MCP1, MCP3, TG1 e HPC BE) e outro para Bombordo (MCP2, MCP4, TG2 e HPC BB).",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Causas Geradoras de Fail-Set Geral: Assinale a opção que apresenta uma falha técnica capaz de disparar o estado de Fail-Set em um subsistema:",
    "options": [
      "Falha nas fontes internas de 24 Vdc (1/2, 3/4 ou 5/6), falha na CPU da Remota ou atuação do circuito sentinela (watchdog).",
      "Troca de papel na impressora de relatórios operacionais.",
      "Seleção do modo noturno de tela no Passadiço.",
      "Operação de transferência de aguada sanitária."
    ],
    "answer": "Falha nas fontes internas de 24 Vdc (1/2, 3/4 ou 5/6), falha na CPU da Remota ou atuação do circuito sentinela (watchdog).",
    "explanation": "O estado de Fail-Set (p. 5) é acionado por anomalias críticas que comprometem o controle seguro: falha dupla nas fontes de 24 Vdc, falha de processamento na CPU da Remota, atuação do circuito Watchdog ou perda das tensões do navio.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "O Circuito Sentinela (Watchdog): Qual é o papel do circuito Watchdog (Sentinela) integrado ao sistema de controle das Unidades Remotas?",
    "options": [
      "Medir o consumo instantâneo de combustível das máquinas principais.",
      "Monitorar continuamente a execução cíclica do software de controle da CPU, desarmando e gerando Fail-Set caso a CPU trave ou pare de enviar pulsos de sincronismo.",
      "Controlar o passo do hélice durante o reboque do navio.",
      "Manter a sincronização do relógio de tempo real com os satélites GPS."
    ],
    "answer": "Monitorar continuamente a execução cíclica do software de controle da CPU, desarmando e gerando Fail-Set caso a CPU trave ou pare de enviar pulsos de sincronismo.",
    "explanation": "O circuito sentinela Watchdog (p. 5, 55) monitora a execução periódica do software da CPU; se o processador travar ou sofrer looping infinito e cessar o envio dos pulsos cíclicos, o Watchdog desarma e induz o sistema ao estado seguro de Fail-Set.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Teste do Circuito de Watchdog: Ao realizar o teste interativo do circuito Sentinela/Watchdog através da IHM na tela de diagnóstico, quais são as três mensagens possíveis retornadas pelo sistema?",
    "options": [
      "\"Sistema Aprovado\", \"Sistema Reprovado\" e \"Indeterminado\".",
      "\"Teste do Circuito OK\", \"Falha no Teste do Circuito\" e \"Falha no Circuito\".",
      "\"CPU Ativa\", \"CPU Inativa\" e \"CPU em Espera\".",
      "\"Watchdog Armado\", \"Watchdog Desarmado\" e \"Watchdog Ausente\"."
    ],
    "answer": "\"Teste do Circuito OK\", \"Falha no Teste do Circuito\" e \"Falha no Circuito\".",
    "explanation": "Ao executar o teste do circuito Watchdog pelo supervisório (p. 5, 7), a lógica de autodiagnóstico retorna exatamente uma entre três respostas: 'Teste do Circuito OK', 'Falha no Teste do Circuito' ou 'Falha no Circuito'.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Condição do Fail-Set na Inicialização do SCMPA: O que ocorre com todos os circuitos de Fail-Set do navio imediatamente após o sistema ser energizado e dar o boot inicial?",
    "options": [
      "Todos entram automaticamente rearmados e prontos em operação normal.",
      "Todos aparecem disparados por motivo de segurança e proteção intrínseca, necessitando de rearme manual pelo operador.",
      "Eles permanecem desativados até que o navio atinja 10 nós de velocidade.",
      "As lâmpadas de indicação piscam em azul aguardando autorização do Passadiço."
    ],
    "answer": "Todos aparecem disparados por motivo de segurança e proteção intrínseca, necessitando de rearme manual pelo operador.",
    "explanation": "Por projeto e requisito de segurança naval (p. 31), na energização inicial (boot) todos os circuitos de Fail-Set iniciam obrigatoriamente no estado disparado, exigindo que o operador valide os parâmetros e efetue o rearme manual nos painéis.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Painel de Rearme Físico do Fail-Set: Onde estão instalados os painéis físicos de rearme do Fail-Set e como são sinalizados visualmente os estados de cada máquina?",
    "options": [
      "No teto do Passadiço com sirenes rotativas de cores distintas.",
      "Nas Unidades Remotas do CCM/Praça de Máquinas, contendo chaves push-button de rearme e duas lâmpadas por circuito: lâmpada redonda verde (Sistema OK) e lâmpada tipo seta vermelha (Fail-Set disparado).",
      "Dentro da caixa de engrenagens redutoras com relógios mecânicos.",
      "Na impressora do sistema através de código de barras."
    ],
    "answer": "Nas Unidades Remotas do CCM/Praça de Máquinas, contendo chaves push-button de rearme e duas lâmpadas por circuito: lâmpada redonda verde (Sistema OK) e lâmpada tipo seta vermelha (Fail-Set disparado).",
    "explanation": "Os painéis de rearme físico (p. 31) ficam montados nas Unidades Remotas; cada circuito conta com botão de rearme, uma lâmpada redonda verde indicando Sistema OK e uma lâmpada em formato de seta vermelha sinalizando Fail-Set disparado.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Procedimento Operador após Fail-Set no HPC: Ocorrendo um Fail-Set no subsistema de controle do Passo da Hélice (HPC), qual ação inicial deve ser executada pelo operador no CCM para retomar a manobra do passo em modo degradado?",
    "options": [
      "Desligar o disjuntor geral de 50A do inversor estático.",
      "Comutar a chave do Painel de Controle Remoto Manual do SCA/HPC de \"AUTOMÁTICO\" para \"MANUAL\" e comandar o passo pelos botões de incremento/decremento.",
      "Soltar a amarra e fundear a embarcação imediatamente.",
      "Drenar o óleo da caixa de comando do hélice para o tanque de sedimentação."
    ],
    "answer": "Comutar a chave do Painel de Controle Remoto Manual do SCA/HPC de \"AUTOMÁTICO\" para \"MANUAL\" e comandar o passo pelos botões de incremento/decremento.",
    "explanation": "Ao atuar o Fail-Set do HPC (p. 6), para retomar a manobra o operador no CCM comuta a chave do painel SCA de 'AUTOMÁTICO' para 'MANUAL', assumindo o posicionamento angular do passo pelos botões de incremento/decremento.",
    "topic": "Módulo 5: Circuitos de Segurança, Watchdog e Fail-Set"
  },
  {
    "question": "Relação de Dependência entre Estações VIEW e SCADA: Como as estações classificadas como VIEW (Central do CCM e Passadiço) obtêm e atualizam as variáveis de medição e alarmes apresentados em suas telas?",
    "options": [
      "Efetuando a leitura direta nos sensores através de cabos coaxiais dedicados.",
      "Conectando-se via rádio modem diretamente com a praça de máquinas.",
      "Elas não se comunicam diretamente com as remotas; seus dados são adquiridos e atualizados a partir de uma estação tipo SCADA através da rede local Ethernet.",
      "Apenas por comando de atualização manual digitado pelo operador a cada 15 minutos."
    ],
    "answer": "Elas não se comunicam diretamente com as remotas; seus dados são adquiridos e atualizados a partir de uma estação tipo SCADA através da rede local Ethernet.",
    "explanation": "As estações VIEW (MB2 Central e QMC Passadiço, p. 13, 62) não possuem placas de memória refletiva para conexão direta às remotas; elas dependem integralmente de um servidor SCADA (MB1 ou MB3) que lhes envia as variáveis via rede Ethernet.",
    "topic": "Módulo 6: IHM, Estações SCADA/VIEW e Realocação de Funções"
  },
  {
    "question": "Sinalização de Suporte SCADA para o VIEW na IHM: Na barra de estado das estações em serviço na IHM, como o operador identifica qual estação SCADA está fornecendo suporte de dados para a estação VIEW em uso?",
    "options": [
      "Pelo acendimento de um triângulo amarelo sobre o relógio da tela.",
      "Por uma borda branca destacada ao redor do ícone da respectiva estação SCADA que serve de suporte.",
      "Pela mudança da tela de fundo para a cor azul marinho.",
      "Por uma mensagem piscando no rodapé com os dizeres \"Link Serial OK\"."
    ],
    "answer": "Por uma borda branca destacada ao redor do ícone da respectiva estação SCADA que serve de suporte.",
    "explanation": "Na tela de estado do sistema na IHM (p. 66), a estação SCADA que está ativamente atendendo e fornecendo pacotes de dados à estação VIEW é destacada graficamente com uma borda branca ao redor do seu ícone.",
    "topic": "Módulo 6: IHM, Estações SCADA/VIEW e Realocação de Funções"
  },
  {
    "question": "A Chave de Hardware da IHM: O software supervisório FIX Dynamics necessita de um dispositivo físico de proteção contra cópias. Onde essa chave de hardware é conectada e qual o efeito de sua ausência?",
    "options": [
      "Conectada na porta USB frontal; sua falta apenas desativa o som dos alarmes.",
      "Instalada na porta paralela DB25 da CPU; caso entre em falha ou seja removida, a estação correspondente torna-se inoperante.",
      "Ligada na tomada de 115 VAC do No-Break; sua falta desliga os ventiladores do rack.",
      "Soldada no interior da placa de rede de fibra óptica."
    ],
    "answer": "Instalada na porta paralela DB25 da CPU; caso entre em falha ou seja removida, a estação correspondente torna-se inoperante.",
    "explanation": "A Chave de Hardware (dongle do FIX Dynamics, p. 21) é instalada na porta paralela DB25 da CPU; se ela for removida ou falhar, a licença do software expira imediatamente e a estação bloqueia todas as telas e operações.",
    "topic": "Módulo 6: IHM, Estações SCADA/VIEW e Realocação de Funções"
  },
  {
    "question": "Realocação Automática por Falha do Console Central (MB2): Em operação padrão no Modo Cruzeiro, se a Estação Central (MB2 - VIEW) sofrer pane total, o que o sistema SCMPA executa automaticamente?",
    "options": [
      "Transfere compulsoriamente a condução do navio para a Asa de Boreste.",
      "Desarma as duas turbinas a gás simultaneamente por corte de combustível.",
      "Executa a realocação automática de funções, transferindo a gestão de seus comandos e telas para a estação remanescente de Boreste (MB3).",
      "Entra em modo de emergência apagando todas as lâmpadas do CCM."
    ],
    "answer": "Executa a realocação automática de funções, transferindo a gestão de seus comandos e telas para a estação remanescente de Boreste (MB3).",
    "explanation": "Pelas regras de realocação dinâmica de funções em Modo Cruzeiro (p. 66), a falha da Estação Central transfere instantaneamente a responsabilidade de visualização e controle para a estação de Boreste (MB3).",
    "topic": "Módulo 6: IHM, Estações SCADA/VIEW e Realocação de Funções"
  },
  {
    "question": "Colapso Total da Interface Homem-Máquina (IHM): Qual evento crítico provoca a inoperância simultânea e total da Interface Homem-Máquina (IHM) em todos os consoles do navio (CCM e Passadiço)?",
    "options": [
      "Falha simultânea das duas estações tipo SCADA (MB1-BB e MB3-BE), rompendo todo o enlace de comunicação supervisória com as remotas.",
      "Falta de fita de impressão na impressora Epson Stylus Color 850.",
      "Abertura da porta do armário do No-Break.",
      "Queima de uma lâmpada indicadora de ré no Passadiço."
    ],
    "answer": "Falha simultânea das duas estações tipo SCADA (MB1-BB e MB3-BE), rompendo todo o enlace de comunicação supervisória com as remotas.",
    "explanation": "Como apenas MB1 e MB3 possuem as interfaces de memória refletiva com as remotas, a queda simultânea de ambos os servidores SCADA interrompe toda a aquisição de dados do navio, tornando a IHM completamente inoperante em todos os consoles.",
    "topic": "Módulo 6: IHM, Estações SCADA/VIEW e Realocação de Funções"
  },
  {
    "question": "Comportamento das Telas em Falha Crítica de Processamento da Remota: O que ocorre visualmente nas telas da IHM dedicadas a um dos bordos caso a placa de CPU da respectiva Remota trave ou queime completamente?",
    "options": [
      "As janelas mudam para a cor branca com letras azuis.",
      "As telas correspondentes àquela remota perdem todas as suas cores normais e passam a mostrar tudo em preto, indicando perda total de telemetria.",
      "Surge uma janela piscando solicitando a inserção da chave de segurança física.",
      "O sistema comuta automaticamente as telas para a visualização das câmeras do circuito fechado de TV."
    ],
    "answer": "As telas correspondentes àquela remota perdem todas as suas cores normais e passam a mostrar tudo em preto, indicando perda total de telemetria.",
    "explanation": "Na falha total de processamento da CPU de uma remota, o enlace de dados de tempo real é rompido e a IHM perde o sinal de telemetria; as telas daquele bordo perdem todas as cores padrão e ficam inteiramente pretas.",
    "topic": "Módulo 6: IHM, Estações SCADA/VIEW e Realocação de Funções"
  }
];
