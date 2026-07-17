import type { Question } from "../types/question";

export const odometrosP2Questions: Question[] = [
  // ============================================================================
  // SEÇÃO 1: SEGURANÇA, PRECAUÇÕES E CONSTRUÇÃO DA S.D.T.U. (Q1, Q8, Q9, Q20, Q24, Q36, Q37)
  // ============================================================================
  {
    question: "Quais são as principais precauções de segurança elétrica que devemos tomar durante a troca de módulos na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Desligar a alimentação elétrica principal antes de remover ou inserir qualquer cartão eletrônico e adotar procedimentos de proteção contra Descargas Eletrostáticas (ESD).",
      "Manter a S.D.T.U. ligada e operando em modo TEST para verificar se os LEDs piscam no momento da extração do cartão.",
      "Desconectar apenas o cabo do sensor externo de proa, mantendo a alimentação AC de 115V ligada ao chassi durante a substituição.",
      "Aterrar diretamente o barramento de +5V do backplane com uma chave metálica antes de puxar os cartões de circuito impresso."
    ],
    answer: "Desligar a alimentação elétrica principal antes de remover ou inserir qualquer cartão eletrônico e adotar procedimentos de proteção contra Descargas Eletrostáticas (ESD).",
    explanation: "Conforme o manual e a apostila técnica do Odômetro AGI-LOG, a remoção ou inserção de cartões (módulos) com a S.D.T.U. energizada pode causar arcos elétricos, picos sobretensão e curtos-circuitos no barramento (backplane), danificando severamente os componentes de estado sólido e circuitos integrados CMOS/MOS. Além disso, o uso de pulseira de aterramento (proteção ESD) é indispensável ao manusear placas eletrônicas sensíveis, como o Módulo 02 (Microprocessador e memórias).",
    topic: "Precauções de Segurança na Troca de Módulos da SDTU"
  },
  {
    question: "Durante a remoção e substituição física de um módulo defeituoso na S.D.T.U. do Odômetro AGI-LOG, que cuidado mecânico e ambiental é obrigatório para preservar o equipamento?",
    options: [
      "Alinhar perfeitamente o cartão com as guias deslizantes do chassi antes de empurrá-lo contra o conector de fundo e garantir que a tampa de alumínio da caixa à prova d'água seja hermeticamente fechada após a troca.",
      "Forçar a inserção do cartão com ferramenta de alavanca caso os pinos do conector traseiro apresentem desalinhamento superior a 5 mm.",
      "Remover o vedante de borracha (gasket) da tampa frontal para melhorar a ventilação convectiva sobre o Módulo 08 (Fonte de Alimentação).",
      "Aplicar graxa lubrificante à base de silicone condutivo diretamente sobre as trilhas de cobre e conectores de ouro de cada cartão eletrônico."
    ],
    answer: "Alinhar perfeitamente o cartão com as guias deslizantes do chassi antes de empurrá-lo contra o conector de fundo e garantir que a tampa de alumínio da caixa à prova d'água seja hermeticamente fechada após a troca.",
    explanation: "O alinhamento mecânico preciso do cartão em suas guias deslizantes é crucial para evitar que os pinos do conector de fundo (backplane) entortem ou quebrem durante a inserção. Após a substituição e verificação, a vedação da caixa de alumínio robusta deve ser integralmente restabelecida com seu anel de vedação limpo e bem fechado, preservando a proteção hermética à prova d'água contra a umidade e maresia do passadiço.",
    topic: "Procedimentos de Remoção e Substituição na SDTU"
  },
  {
    question: "Como se caracteriza a construção mecânica e o conceito arquitetônico da S.D.T.U. (Signal Distribution / Sensor Distribution Terminal Unit) no Odômetro AGI-LOG?",
    options: [
      "É alojada em uma caixa de alumínio robusta e à prova d'água, estruturada com um conceito totalmente modular onde cartões eletrônicos individuais deslizam em guias até se conectarem ao backplane.",
      "É montada em rack aberto de plástico ABS sem vedação, onde todos os circuitos estão soldados de forma definitiva em uma única placa-mãe sem possibilidade de remoção de módulos.",
      "Consiste em uma unidade submersa fixada diretamente na quilha do navio, preenchida com resina epóxi selada para evitar contato com a atmosfera do passadiço.",
      "É um console de madeira tratada com painel analógico de ponteiros galvanométricos, alimentado exclusivamente por baterias de níquel-cádmio não recarregáveis."
    ],
    answer: "É alojada em uma caixa de alumínio robusta e à prova d'água, estruturada com um conceito totalmente modular onde cartões eletrônicos individuais deslizam em guias até se conectarem ao backplane.",
    explanation: "A S.D.T.U. do Odômetro AGI-LOG foi projetada para operar nas condições severas do ambiente naval. Sua caixa de alumínio fundido de alta resistência garante imunidade a choques e vedação à prova d'água (grau militar/naval). O conceito modular divide as funções em cartões plug-in (Módulos 01 a 12), permitindo expansão, isolamento de falhas por módulo e fácil substituição.",
    topic: "Construção da S.D.T.U. - Odômetro AGI-LOG"
  },
  {
    question: "Graças à construção em conceito modular da S.D.T.U. alojada em caixa robusta e à prova de água, qual é o Tempo de Reparo Médio (MTTR - Mean Time To Repair) típico para a substituição de um módulo no Odômetro AGI-LOG?",
    options: [
      "Extremamente reduzido, tipicamente inferior a 15 minutos (ou na faixa de 15 a 30 minutos) na substituição do cartão avariado.",
      "Entre 24 e 48 horas, devido à necessidade de ressoldar os barramentos digitais em laboratório de terra.",
      "Cerca de 7 dias úteis, pois exige a recalibração mecânica de toda a quilha e docagem do navio para qualquer falha eletrônica.",
      "Aproximadamente 4 horas de aquecimento térmico antes que a unidade permita o destravamento mecânico do chassi."
    ],
    answer: "Extremamente reduzido, tipicamente inferior a 15 minutos (ou na faixa de 15 a 30 minutos) na substituição do cartão avariado.",
    explanation: "O conceito modular e a presença do autoteste integrado (BIT/BITE) reduzem drasticamente o MTTR (Mean Time To Repair). Uma vez que o diagnóstico indica qual módulo falhou (ex: Módulo 04 ou Módulo 08), o técnico de bordo abre a caixa, puxa a placa defeituosa das guias e insere um cartão sobressalente funcional, restabelecendo a operação do odômetro em menos de 15 minutos.",
    topic: "MTTR e Manutenção Modular da S.D.T.U."
  },
  {
    question: "Qual é o propósito fundamental da S.D.T.U. (Unidade Terminal de Distribuição de Sinais/Dados) no sistema do Odômetro AGI-LOG?",
    options: [
      "Atuar como unidade central que gera a excitação da bobina da haste, processa a tensão induzida dos eletrodos via microprocessador, exibe a velocidade e a distância percorrida e distribui esses sinais aos repetidores do navio.",
      "Exclusivamente bombear a água do mar ao redor da haste para resfriar os transdutores sônicos de 2 MHz de efeito Doppler.",
      "Funcionar apenas como chave de transferência automática de energia de emergência entre os geradores principais e as baterias do passadiço.",
      "Atuar como radar anticolisão de bordo que rastreia alvos de superfície cruzando o azimute da proa e calcula o rumo magnético."
    ],
    answer: "Atuar como unidade central que gera a excitação da bobina da haste, processa a tensão induzida dos eletrodos via microprocessador, exibe a velocidade e a distância percorrida e distribui esses sinais aos repetidores do navio.",
    explanation: "A S.D.T.U. é o cérebro e coração do sistema Odômetro AGI-LOG. Ela centraliza todas as etapas: alimenta a bobina do sensor na água, recebe o sinal induzido proporcional à velocidade da água, realiza a conversão A/D e o processamento matemático com curvas de calibração, apresenta a leitura nos displays digitais frontais e disponibiliza saídas digitais, analógicas e pulsadas para os sistemas repetidores, radar ARPA, ECDIS e agulha giroscópica.",
    topic: "Propósito da S.D.T.U. - Odômetro AGI-LOG"
  },
  {
    question: "Qual é o propósito geral do Odômetro AGI-LOG no contexto da navegação e dos sistemas navais do navio?",
    options: [
      "Medir com precisão a velocidade da embarcação em relação à água (Speed Through the Water), totalizar a distância navegada em milhas náuticas e fornecer essas informações aos sistemas táticos e de navegação de bordo.",
      "Medir a profundidade do fundo marinho sob a quilha para disparar alarmes fonéticos em caso de risco iminente de encalhe em águas rasas.",
      "Determinar o posicionamento geográfico global absoluto (latitude e longitude) por meio da triangulação contínua com satélites orbitais.",
      "Medir a velocidade do vento aparente e a direção relativa da proa para sincronizar o piloto automático com o leme."
    ],
    answer: "Medir com precisão a velocidade da embarcação em relação à água (Speed Through the Water), totalizar a distância navegada em milhas náuticas e fornecer essas informações aos sistemas táticos e de navegação de bordo.",
    explanation: "O propósito primordial do Odômetro AGI-LOG (odômetro eletromagnético) é fornecer a velocidade linear do navio em relação à massa de água envolvente (STW) e calcular a distância total navegada pela integração do tempo. Esses dados alimentam a navegação estimada do passadiço e são distribuídos para sistemas críticos como radares anticolisão, ECDIS, registradores de viagem e centrais de controle de tiro.",
    topic: "Propósito Geral do Odômetro AGI-LOG"
  },
  {
    question: "De quantas partes constituintes principais (ou conjuntos fundamentais de hardware) compõe-se o sistema completo do Odômetro AGI-LOG?",
    options: [
      "Três (3) partes principais: A Unidade S.D.T.U., o Conjunto do Sensor (Haste e caixa de junção no casco) e os Repetidores/Periféricos externos de distribuição.",
      "Apenas uma (1) parte: um mostrador digital compacto com bateria solar acoplado diretamente no leme.",
      "Cinco (5) partes: Antena parabólica, transdutor giroscópico, S.D.T.U., gravador magnético de fita e gerador hidráulico.",
      "Duas (2) partes: O painel solar de convés e o motor síncrono de avanço de passo no porão."
    ],
    answer: "Três (3) partes principais: A Unidade S.D.T.U., o Conjunto do Sensor (Haste e caixa de junção no casco) e os Repetidores/Periféricos externos de distribuição.",
    explanation: "A arquitetura do Odômetro AGI-LOG divide-se classicamente em três grandes blocos funcionais e estruturais: 1) A S.D.T.U. no passadiço (processamento e controle); 2) O Conjunto do Sensor/Haste com o caixão de conexão (Hull Fitting/Junction Box) instalado na quilha/casco em contato com a água; e 3) As Unidades Repetidoras e interfaces de navegação distribuídas pelo navio (proa, popa, passadiço, CCM).",
    topic: "Composição e Partes do Odômetro AGI-LOG"
  },

  // ============================================================================
  // SEÇÃO 2: SENSORES (HASTES), PRINCÍPIO DE FUNCIONAMENTO E CONEXÕES (Q2, Q3, Q28-Q35)
  // ============================================================================
  {
    question: "Qual é a lei física e o princípio de funcionamento eletromagnético utilizado pela Haste (Sensor) do Odômetro AGI-LOG para medir a velocidade do navio na água?",
    options: [
      "Lei da Indução Eletromagnética de Faraday: uma bobina no sensor gera um campo magnético na água; como a água do mar é condutora e está em movimento, induz uma tensão proporcional à velocidade nos eletrodos da haste.",
      "Efeito piezoelétrico inverso: cristais na haste emitem feixes ultrassônicos de 2 MHz que refletem no fundo do mar, calculando o desvio Doppler de frequência.",
      "Variação capacitiva: a pressão mecânica exercida pela água sobre a membrana flexível do sensor altera a capacitância entre duas placas metálicas na proporção do quadrado da velocidade.",
      "Ponte de Wheatstone térmica: dois termistores aquecidos perdem calor para o fluxo da corrente marinha e a diferença de temperatura indica o deslocamento."
    ],
    answer: "Lei da Indução Eletromagnética de Faraday: uma bobina no sensor gera um campo magnético na água; como a água do mar é condutora e está em movimento, induz uma tensão proporcional à velocidade nos eletrodos da haste.",
    explanation: "O Odômetro AGI-LOG opera com base na Lei de Faraday (EM Log). A bobina de excitação interna da haste é alimentada por corrente alternada da SDTU e cria um campo magnético ao redor da extremidade submersa. A água do mar atua como o condutor em movimento cortando as linhas de fluxo magnético. Esse deslocamento induz uma força eletromotriz (E = B * L * v) diretamente linear e proporcional à velocidade do navio através da água, que é captada em milivolts pelos dois eletrodos metálicos de contato.",
    topic: "Princípio de Funcionamento da Haste (Lei de Faraday)"
  },
  {
    question: "Quais são os quatro (4) tipos de sensores (hastes) que podem ser usados com o sistema do Odômetro AGI-LOG montados no casco do navio?",
    options: [
      "Haste Retrátil, Haste Fixa (estilo OTAN), Haste com Perfil de Barbatana e Sensor Revés (Montagem Plana/Almofada ao casco).",
      "Sensor Ultrassônico Doppler, Tubo de Pitot mecânico, Haste Piezoresistiva e Sensor Ótico a Laser de superfície.",
      "Sonda Magnética de Rumo, Haste de Bronze Fundido estática, Sensor de Ecos Sonoros e Boia Hidráulica rebocada.",
      "Haste de Titânio de 12 metros, Sensor de Temperatura Digital, Transdutor de Arfagem e Eletrodo Galvânico de Zinco."
    ],
    answer: "Haste Retrátil, Haste Fixa (estilo OTAN), Haste com Perfil de Barbatana e Sensor Revés (Montagem Plana/Almofada ao casco).",
    explanation: "O sistema AGI-LOG é altamente versátil e foi projetado para aceitar quatro tipos distintos de montagem de sensores hidrodinâmicos no casco: 1) Haste Retrátil (Retractable Probe); 2) Haste Fixa estilo OTAN (NATO Fixed Probe); 3) Haste com Perfil de Barbatana (Fin Profile Probe); e 4) Sensor Revés / Flush Mounted Probe (almofada/faceado). O tipo utilizado é selecionado e configurado no microprocessador da SDTU via teclado.",
    topic: "Os 4 Tipos de Sensores do Odômetro AGI-LOG"
  },
  {
    question: "Aonde e com qual finalidade operacional é empregada a Haste Retrátil (Retractable Probe) do Odômetro AGI-LOG?",
    options: [
      "Em navios mercantes, de passageiros e embarcações navais onde é necessário recolher (retrair) ou inspecionar/limpar a haste com o navio na água sem necessidade de docagem, ou para protegê-la ao navegar em águas muito rasas.",
      "Exclusivamente em cascos de submarinos nucleares operando a profundidades superiores a 400 metros para resistir à pressão hidrostática extrema sem válvulas.",
      "Apenas no topo do mastro de comunicação da proa para captar a velocidade do vento em relação à superestrutura do navio.",
      "Em embarcações de fibra de vidro ultraleves que não possuem alimentação elétrica AC de bordo, usando o recolhimento manual para gerar carga nas baterias."
    ],
    answer: "Em navios mercantes, de passageiros e embarcações navais onde é necessário recolher (retrair) ou inspecionar/limpar a haste com o navio na água sem necessidade de docagem, ou para protegê-la ao navegar em águas muito rasas.",
    explanation: "A Haste Retrátil é montada dentro de um conjunto com válvula de fundo (sea valve / sluice valve). Ela permite que a tripulação recolha a haste para dentro do casco ou a remova inteiramente para limpeza de cracas ou substituição sem que o navio precise ir para o dique seco (docagem). Também é recolhida ao adentrar portos rasos ou rios com entulhos submersos que poderiam quebrar o sensor.",
    topic: "Aplicação da Haste Retrátil - AGI-LOG"
  },
  {
    question: "Aonde é empregada preferencialmente a Haste Fixa (estilo OTAN / NATO Fixed Probe) do Odômetro AGI-LOG?",
    options: [
      "Em navios de guerra, submarinos e embarcações militares ou especiais construídas com furações e flanges padronizados pela OTAN, onde a máxima robustez estrutural contra choques mecânicos é prioritária sobre a remoção flutuando.",
      "Em pequenos barcos de recreio e veleiros que necessitam de desinstalação diária da haste sem ferramentas especializadas.",
      "Em balsas fluviais de fundo chato que operam exclusivamente em águas doces com alto teor de lodo e cascalho solto.",
      "Apenas em navios petroleiros de grande calado durante as manobras exclusivas de aproximação de terminais marítimos a 0,5 nó."
    ],
    answer: "Em navios de guerra, submarinos e embarcações militares ou especiais construídas com furações e flanges padronizados pela OTAN, onde a máxima robustez estrutural contra choques mecânicos é prioritária sobre a remoção flutuando.",
    explanation: "A Haste Fixa estilo OTAN atende a normas de padronização mecânica e resistência a choques navais de alto impacto da Organização do Tratado do Atlântico Norte. Por ser aparafusada e fixada de forma permanente ao flange de casco, ela não pode ser recolhida com o navio flutuando (exige docagem ou mergulhador para troca), sendo escolhida quando a rigidez estrutural sob condições de combate ou altas pressões é o requisito crítico.",
    topic: "Aplicação da Haste Fixa Estilo OTAN - AGI-LOG"
  },
  {
    question: "Aonde e por que é empregada a Haste com Perfil de Barbatana (Fin Profile Probe) do Odômetro AGI-LOG?",
    options: [
      "Em embarcações de alta velocidade (como patrulhas rápidas, corvetas e fragatas), pois seu formato hidrodinâmico otimizado reduz o arrasto, a turbulência e o risco de cavitação/aeração dos eletrodos em velocidades elevadas.",
      "Em navios quebra-gelos para cortar blocos de gelo espessos antes que estes atinjam o hélice principal na popa da embarcação.",
      "Em rebocadores portuários que operam exclusivamente à rotação zero e necessitam de simulação magnética artificial contínua.",
      "Em embarcações fluviais rasas para atuar como leme auxiliar de direção quando os motores principais perdem tração mecânica."
    ],
    answer: "Em embarcações de alta velocidade (como patrulhas rápidas, corvetas e fragatas), pois seu formato hidrodinâmico otimizado reduz o arrasto, a turbulência e o risco de cavitação/aeração dos eletrodos em velocidades elevadas.",
    explanation: "Em velocidades elevadas (acima de 25 a 35+ nós), hastes cilíndricas normais geram arrasto excessivo, descolamento da camada limite e cavitação (bolhas de ar) que cegam ou distorcem o sinal nos eletrodos. A Haste com Perfil de Barbatana (Fin Profile) possui contorno aerodinâmico/hidrodinâmico afiado que corta a água suavemente, garantindo fluxo laminar e medições limpas de microvolts em embarcações velozes.",
    topic: "Aplicação da Haste com Perfil de Barbatana - AGI-LOG"
  },
  {
    question: "Aonde é empregado o Sensor Revés (ou Flush Mounted Probe / Sensor Almofada montado rente ao casco) do Odômetro AGI-LOG?",
    options: [
      "Em submarinos, embarcações de águas muito rasas, quebra-gelos e navios onde qualquer projeção/protrusão sob o casco é inaceitável ou altamente vulnerável a impactos com o fundo ou gelo.",
      "Exclusivamente no topo de superestruturas elevadas para atuar como antena de referência diferencial do satélite DGPS do passadiço.",
      "Em navios cargueiros convencionais que navegam apenas em águas profundas transoceânicas e necessitam de hastes projetadas 2 metros para fora da camada limite.",
      "No interior dos tanques de lastro de água doce para medir a velocidade de enchimento das bombas centrífugas primárias."
    ],
    answer: "Em submarinos, embarcações de águas muito rasas, quebra-gelos e navios onde qualquer projeção/protrusão sob o casco é inaceitável ou altamente vulnerável a impactos com o fundo ou gelo.",
    explanation: "O Sensor Revés (Flush Mounted) é instalado de modo que sua face sensora fique perfeitamente alinhada (rente/faceada) com a chapa exterior do casco da embarcação, sem se projetar para a água. É a solução ideal e segura para submarinos e embarcações que operam em águas rasas, canais congelados (onde o gelo arrancaria uma haste saliente) ou missões táticas onde não pode haver saliências na quilha.",
    topic: "Aplicação do Sensor Revés (Flush Mounted) - AGI-LOG"
  },
  {
    question: "Quantas partes componentes estruturais e elétricas compõem tipicamente os sensores (haste) tipo OTAN do Odômetro AGI-LOG?",
    options: [
      "Quatro (4) partes principais: Corpo mecânico da haste/flange, Bobina de excitação magnética interna, Eletrodos de detecção de sinal em metal nobre e Cabeçote/Cabo de interligação para a caixa de junção.",
      "Apenas duas (2) partes: Um ânodo de sacrifício de zinco e uma lâmpada indicadora de estibordo com fio de aterramento.",
      "Seis (6) partes: Motor síncrono, engrenagem helicoidal, rotor de pás, amplificador óptico, diodo emissor de luz e conector BNC de rádio.",
      "Três (3) partes: Tubo exterior de vidro temperado, mercúrio líquido interno e termopar de chromel-alumel de compensação térmica."
    ],
    answer: "Quatro (4) partes principais: Corpo mecânico da haste/flange, Bobina de excitação magnética interna, Eletrodos de detecção de sinal em metal nobre e Cabeçote/Cabo de interligação para a caixa de junção.",
    explanation: "A Haste Fixa padrão OTAN do AGI-LOG é um conjunto encapsulado de alta precisão composto por quatro partes fundamentais que trabalham em conjunto: o corpo robusto com flange para montagem no casco; a bobina magnética na extremidade inferior que gera o campo alternado; o par de eletrodos metálicos de contato na superfície que capta a força eletromotriz induzida; e o cabo/cabeçote superior com vedação para ligação à caixa de junção da embarcação.",
    topic: "As 4 Partes Componentes da Haste OTAN"
  },
  {
    question: "Em quais terminais específicos do bloco de conexões da haste do Odômetro AGI-LOG está ligada a alimentação elétrica da bobina de excitação magnética?",
    options: [
      "Terminais A e B (ou terminais 1 e 2 do circuito de excitação), que recebem a corrente alternada/pulsada fornecida pelo Módulo 08 da S.D.T.U.",
      "Terminais C e D, que são dedicados à alimentação contínua de 24 V da bateria auxiliar do passadiço.",
      "Terminais X e Y do conector serial NMEA 0183 de alta velocidade do barramento principal.",
      "Apenas no pino central de blindagem (Terra/GND) para fechar o retorno magnético em loop simples com a quilha."
    ],
    answer: "Terminais A e B (ou terminais 1 e 2 do circuito de excitação), que recebem a corrente alternada/pulsada fornecida pelo Módulo 08 da S.D.T.U.",
    explanation: "Na padronização das conexões entre o sensor/haste e a S.D.T.U. (passando pela caixa de junção), os Terminais A e B são estritamente reservados para o circuito da Bobina de Excitação magnética. Eles conduzem a corrente regulada alternada vinda do Módulo 08 (Fonte de Alimentação) para criar o campo magnético na água. Identificar corretamente os terminais A e B é vital para testes de continuidade e impedância da bobina sem danificar os eletrodos de sinal.",
    topic: "Terminais de Alimentação da Bobina (A e B)"
  },
  {
    question: "Em quais terminais específicos da haste do Odômetro AGI-LOG estão conectados os eletrodos de captação do sinal diferencial de milivolts e a blindagem/terra de referência?",
    options: [
      "Terminais C, D (Eletrodo 1 e Eletrodo 2 de sinal diferencial induzido) e Terminal E (Terra de Referência / Blindagem e contato com a água do mar).",
      "Terminais A e B exclusivamente para os eletrodos de sinal e Terminal Z para a alimentação da bobina magnética.",
      "Pinos 11 e 12 do conector RS-232, compartilhados diretamente com a linha de clock do processador central.",
      "Terminais L1, L2 e L3 da entrada da rede trifásica principal de 440 V do quadro elétrico do convés inferior."
    ],
    answer: "Terminais C, D (Eletrodo 1 e Eletrodo 2 de sinal diferencial induzido) e Terminal E (Terra de Referência / Blindagem e contato com a água do mar).",
    explanation: "A minúscula tensão induzida na água pela movimentação do navio é captada pelos dois eletrodos diferenciais conectados aos Terminais C e D. O Terminal E corresponde à blindagem e ao terra de referência (referência da água do mar e carcaça do sensor). Essa configuração em três terminais (C, D e E) é conectada diretamente à entrada de alta impedância do Módulo 04 (Conversor A/D e pré-amplificação diferencial) da S.D.T.U., garantindo imunidade a ruídos.",
    topic: "Terminais dos Eletrodos de Sinal e Terra (C, D e E)"
  },

  // ============================================================================
  // SEÇÃO 3: CONTROLES, TECLAS E PAINEL FRONTAL DA S.D.T.U. (Q4, Q5, Q6, Q7)
  // ============================================================================
  {
    question: "No painel frontal da S.D.T.U. do Odômetro AGI-LOG, que possui cinco teclas de ação momentânea, quais são os modos principais operados pela tecla MODE?",
    options: [
      "Permite alternar entre o Modo Normal de Operação (RUN / Velocidade e Distância), o Modo de Calibração (CAL / Calibration) e o Modo de Teste ou Simulação (TEST / SIM / BITE).",
      "Permite alternar apenas entre a cor dos dígitos de LED verde e vermelho e ajustar a frequência do alarme sonoro.",
      "Serve para desligar completamente o processador central e reinicializar o relógio de tempo real da BIOS interna em modo de segurança.",
      "Seleciona a escala de profundidade em metros ou pés e liga o aquecedor elétrico da válvula de fundo do porão."
    ],
    answer: "Permite alternar entre o Modo Normal de Operação (RUN / Velocidade e Distância), o Modo de Calibração (CAL / Calibration) e o Modo de Teste ou Simulação (TEST / SIM / BITE).",
    explanation: "A tecla momentânea MODE é o controle de navegação de modos operacionais da S.D.T.U. Pressionando-a sequencialmente, o operador transita entre o modo padrão de leitura diária (`RUN`, que exibe velocidade atual em nós e distância em milhas), o modo de ajuste técnico de curvas de velocidade (`CAL`) e o modo de diagnóstico/simulação (`TEST`/`SIM`), que gera sinais internos para testar circuitos e repetidores sem o navio se mover.",
    topic: "Teclas de Comando: Tecla MODE"
  },
  {
    question: "No painel da S.D.T.U. do Odômetro AGI-LOG, quais são as seleções e funções que operam a tecla PROBE (Sensor)?",
    options: [
      "Permite selecionar e informar ao microprocessador qual tipo/modelo de sensor (haste) está instalado (ex: Retrátil, OTAN, Barbatana, Revés) ou selecionar o canal/status da sonda ativa na configuração do sistema.",
      "Ativa o recolhimento pneumático automático da haste no porão e trava a válvula de fundo em 5 segundos.",
      "Zera imediatamente o hodômetro geral cumulativo de distância das últimas 10.000 milhas sem requerer senha do oficial.",
      "Desliga a alimentação de +5V da lógica digital, mantendo apenas a bobina do sensor energizada com 220V em modo contínuo."
    ],
    answer: "Permite selecionar e informar ao microprocessador qual tipo/modelo de sensor (haste) está instalado (ex: Retrátil, OTAN, Barbatana, Revés) ou selecionar o canal/status da sonda ativa na configuração do sistema.",
    explanation: "A tecla PROBE (Sensor) é utilizada para configurar a interface com o transdutor no mar. Através dela, o operador ou técnico seleciona o tipo exato de haste que está acoplada à S.D.T.U., permitindo que o Módulo 02 (Microprocessador) selecione na memória EPROM os parâmetros corretos de excitação magnética e ganho diferencial de entrada (Módulo 04) adequados à geometria hidrodinâmica daquela sonda específica.",
    topic: "Teclas de Comando: Tecla PROBE (Sensor)"
  },
  {
    question: "Quais são as seleções e funcionalidades operadas pela tecla CURVE no painel frontal da S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Permite selecionar as diferentes curvas de calibração armazenadas na memória (ex: Curva 1, Curva 2) e acessar/ajustar os pontos de linearização de velocidade ao longo da faixa de operação.",
      "Desenha um gráfico cartesiano na tela do radar principal mostrando o consumo de combustível por milha percorrida.",
      "Ajusta a curvatura mecânica da haste retrátil no porão para compensar o adernamento lateral do navio durante tempestades.",
      "Altera o perfil da onda quadrada do clock interno de 8 MHz para onda senoidal de 400 Hz nos repetidores giroscópicos."
    ],
    answer: "Permite selecionar as diferentes curvas de calibração armazenadas na memória (ex: Curva 1, Curva 2) e acessar/ajustar os pontos de linearização de velocidade ao longo da faixa de operação.",
    explanation: "A tecla CURVE gerencia a calibração hidrodinâmica do sistema. Como o fluxo de água ao redor do casco sofre distorções não-lineares (camada limite / boundary layer) que variam com o calado, trim e velocidade do navio, a S.D.T.U. armazena curvas multiponto na EPROM/EEPROM. A tecla CURVE permite selecionar qual curva aplicar ou navegar pelos pontos de calibração durante as provas em milha medida.",
    topic: "Teclas de Comando: Tecla CURVE"
  },
  {
    question: "Qual é a função do regulador de intensidade luminosa denominado DIMMER (ou Dimer Display) localizado no painel frontal da S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Ajustar de forma contínua a intensidade luminosa dos displays digitais de velocidade/distância e dos indicadores LED do painel frontal, otimizando a visualização para navegação diurna ou noturna sem ofuscar a visão do oficial no passadiço.",
      "Ajustar a corrente de excitação da bobina da haste entre 0 e 5 Amperes para aumentar o alcance de medição em águas profundas.",
      "Regular a velocidade do microprocessador central em situações de superaquecimento da caixa de alumínio em regiões tropicais.",
      "Variar o volume do alarme fonético de avaria mecânica no alto-falante principal da ponte de comando."
    ],
    answer: "Ajustar de forma contínua a intensidade luminosa dos displays digitais de velocidade/distância e dos indicadores LED do painel frontal, otimizando a visualização para navegação diurna ou noturna sem ofuscar a visão do oficial no passadiço.",
    explanation: "O controle DIMMER é o regulador de brilho do painel da S.D.T.U. Durante a navegação noturna no passadiço (ponte de comando escurecida), um brilho excessivo nos mostradores comprometeria a adaptação visual noturna dos oficiais. O DIMMER permite atenuar suavemente a luz dos dígitos e LEDs para a noite ou aumentá-la para o máximo brilho sob luz solar intensa durante o dia.",
    topic: "Controles do Painel: Regulador DIMMER"
  },

  // ============================================================================
  // SEÇÃO 4: PARTIDA, CALIBRAÇÃO, ESPECIFICAÇÕES E PRECISÃO (Q10, Q11, Q14, Q21-Q23, Q25-Q27)
  // ============================================================================
  {
    question: "Qual é a especificação de precisão intrínseca que se refere diretamente ao Instrumento (a Unidade Eletrônica S.D.T.U. isolada) no sistema do Odômetro AGI-LOG?",
    options: [
      "Precisão de conversão e processamento eletrônico muito elevada, tipicamente melhor que ±0,1 nó (ou ±0,1% da leitura) na indicação de velocidade e totalização de distância na própria unidade.",
      "Precisão fixa de ±5 nós, devido a perdas térmicas inevitáveis nos transformadores de isolamento do painel.",
      "Erro tolerado de até ±10% em toda a faixa de operação elétrica entre -20°C e +85°C da caixa de alumínio.",
      "Precisão que depende exclusivamente da tensão da bateria de emergência, variando de ±2 nós a ±8 nós conforme a carga."
    ],
    answer: "Precisão de conversão e processamento eletrônico muito elevada, tipicamente melhor que ±0,1 nó (ou ±0,1% da leitura) na indicação de velocidade e totalização de distância na própria unidade.",
    explanation: "No Odômetro AGI-LOG, deve-se distinguir entre a precisão do instrumento eletrônico (a S.D.T.U. em si) e a precisão do sistema global na água. Em termos instrumentais puros (conversão A/D no Módulo 04, cálculos digitais de 16/32 bits na CPU Módulo 02 e geração de saídas no Módulo 05/07), a S.D.T.U. apresenta exatidão superior a ±0,1 nó, garantindo que o processamento eletrônico não introduza erros na medição hidrodinâmica.",
    topic: "Precisão na Especificação do Instrumento (S.D.T.U.)"
  },
  {
    question: "Quais são os procedimentos sequenciais corretos para a partida (energização e inicialização operacional) do sistema do Odômetro AGI-LOG?",
    options: [
      "Verificar a correta instalação e travamento da haste no casco, ligar a alimentação elétrica principal da S.D.T.U., aguardar e acompanhar a execução automática do autoteste inicial (Power-On BIT) e verificar a entrada automática no modo normal RUN e o acendimento correto dos displays.",
      "Pressionar simultaneamente as teclas MODE e CURVE por 30 segundos antes de ligar o disjuntor de força de 115V AC, forçando a formatação completa da memória EPROM.",
      "Remover todos os módulos de 01 a 12 da caixa, energizar o chassi vazio com 24V e inserir cartão por cartão a cada 5 minutos com o sistema ligado para auto-reconhecimento.",
      "Desconectar os cabos de saída para os repetidores e aplicar curto-circuito temporário nos terminais C e D dos eletrodos durante a energização da fonte."
    ],
    answer: "Verificar a correta instalação e travamento da haste no casco, ligar a alimentação elétrica principal da S.D.T.U., aguardar e acompanhar a execução automática do autoteste inicial (Power-On BIT) e verificar a entrada automática no modo normal RUN e o acendimento correto dos displays.",
    explanation: "Para a partida segura do sistema AGI-LOG, o técnico/operador primeiro garante a segurança física da haste submersa. Em seguida, aciona a chave principal da S.D.T.U. Ao receber energia, o microprocessador inicia o autoteste (BIT de partida), acendendo todos os segmentos dos mostradores (teste visual) e verificando memórias e conversores. Concluído com sucesso o BIT, o equipamento entra no modo `RUN` mostrando a velocidade e distância em tempo real.",
    topic: "Procedimentos de Partida e Operação do Sistema"
  },
  {
    question: "Como é realizada e em que consiste a calibração hidrodinâmica da S.D.T.U. no Odômetro AGI-LOG?",
    options: [
      "Consiste na correlação entre a tensão induzida captada pelos eletrodos e a velocidade real do navio através da água, realizando passagens em uma milha medida (ou com referência DGPS em sentidos opostos para anular correntes) e ajustando na memória da SDTU, via teclas MODE e CURVE, os pontos de calibração que compensam a camada limite.",
      "Consiste em lixar manualmente a ponta metálica dos eletrodos com lixa abrasiva fina debaixo d'água até que o mostrador digital indique exatamente 10 nós com o navio ancorado no porto.",
      "Ajuste de um único trimpot analógico no Módulo 08 (Fonte) para aumentar a tensão nominal da bobina até o ponteiro do repetidor bater na escala máxima.",
      "Preenchimento de uma tabela em papel no diário de navegação, pois a S.D.T.U. do AGI-LOG possui arquitetura fixa e não permite gravação de fatores de correção em memória digital."
    ],
    answer: "Consiste na correlação entre a tensão induzida captada pelos eletrodos e a velocidade real do navio através da água, realizando passagens em uma milha medida (ou com referência DGPS em sentidos opostos para anular correntes) e ajustando na memória da SDTU, via teclas MODE e CURVE, os pontos de calibração que compensam a camada limite.",
    explanation: "O fluxo de água que banha a haste é afetado pelo perfil do casco e pela 'camada limite' (boundary layer). Por isso, a calibração é feita em mar aberto em uma base medida (corridas em sentidos opostos para eliminar o efeito da corrente de maré/vento). O técnico entra no modo `CAL` e ajusta através da tecla `CURVE` os coeficientes digitais de ganho/linearização na memória da S.D.T.U. para coincidir com a velocidade real do navio na água.",
    topic: "Calibração Hidrodinâmica da S.D.T.U."
  },
  {
    question: "Qual é a precisão e a resolução na especificação quanto ao que se refere à Exibição de Velocidade (Speed Display) no mostrador frontal da S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Exibição digital contínua em nós com resolução de 0,01 nó (ou 0,1 nó) e precisão instrumental típica de ±0,1 nó em toda a faixa operacional de velocidade da embarcação.",
      "Exibição analógica em escala de cores graduada de 5 em 5 nós com erro de leitura visual de até ±2 nós no ponteiro do passadiço.",
      "Resolução de apenas 1 nó inteiro sem casas decimais, limitando a exatidão em manobras finas de atracação de frota naval.",
      "Precisão que decai linearmente com o aumento da profundidade do mar, apresentando desvios de ±1,5 nó em águas superiores a 1.000 metros."
    ],
    answer: "Exibição digital contínua em nós com resolução de 0,01 nó (ou 0,1 nó) e precisão instrumental típica de ±0,1 nó em toda a faixa operacional de velocidade da embarcação.",
    explanation: "Os mostradores digitais frontais da S.D.T.U. fornecem a leitura imediata de velocidade da embarcação em nós (knots). A resolução e exatidão eletrônica do display garantem que a velocidade seja apresentada em incrementos de centésimos ou décimos de nó (com precisão instrumental global na casa de ±0,1 nó), permitindo que o oficial de serviço detecte acelerações ou desacelerações mínimas em tempo real.",
    topic: "Especificação de Precisão na Exibição de Velocidade"
  },
  {
    question: "Qual é a precisão e o método de funcionamento quanto à Exibição de Distância (Distance Display / Hodômetro) no mostrador digital da S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "A distância percorrida é calculada pela integração matemática da velocidade em função do tempo pelo microprocessador e totalizada em um mostrador cumulativo com resolução de 0,01 milha náutica e precisão eletrônica melhor que ±0,1% da distância navegada.",
      "A distância é medida contando o número de voltas mecânicas que um pequeno hélice com engrenagens dá sob a quilha, apresentando erro de ±15 milhas a cada 100 milhas.",
      "O hodômetro depende de um cronômetro a corda manual acionado a cada 4 horas pelo oficial, somando saltos fixos de 1 milha náutica.",
      "A exibição de distância só é calculada se o navio estiver navegando no rumo Norte magnético verdadeiro; nos demais rumos, o mostrador permanece travado em zero."
    ],
    answer: "A distância percorrida é calculada pela integração matemática da velocidade em função do tempo pelo microprocessador e totalizada em um mostrador cumulativo com resolução de 0,01 milha náutica e precisão eletrônica melhor que ±0,1% da distância navegada.",
    explanation: "O Módulo 02 (Microprocessador) realiza a integração digital exata da medição de velocidade no decorrer do tempo ($\int v(t) dt$) para totalizar a distância percorrida na água. Esse hodômetro digital de alta resolução (0,01 nm ou 0,1 nm) atinge precisão instrumental superior a ±0,1% da distância total efetuada, sendo a base primária para o registro de milhas navegadas no livro de quarto de navegação.",
    topic: "Especificação de Precisão na Exibição de Distância"
  },
  {
    question: "Qual é a especificação padrão para a Alimentação Elétrica Principal (Power Input) que entra no Módulo 08 da S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "115 V AC ou 230 V AC monofásica (50 Hz / 60 Hz, selecionável internamente ou em transformador), podendo também aceitar ou contar com entrada de emergência em 24 V DC das baterias do navio.",
      "Exclusivamente 440 V AC trifásica industrial de 60 Hz sem opção para transformadores de abaixamento para 115V.",
      "Apenas alimentação solar em 12 V DC proveniente de baterias seladas externas montadas no teto do passadiço.",
      "Alimentação de alta tensão em 3.300 V AC gerada por turbo-alternador principal da casa de máquinas do navio."
    ],
    answer: "115 V AC ou 230 V AC monofásica (50 Hz / 60 Hz, selecionável internamente ou em transformador), podendo também aceitar ou contar com entrada de emergência em 24 V DC das baterias do navio.",
    explanation: "O sistema AGI-LOG foi dimensionado para se adequar universalmente à rede elétrica padrão dos navios mercantes e navais. A S.D.T.U. (através do seu Módulo 08 de Fonte de Alimentação e transformador primário) opera de série com 115 VAC ou 230 VAC em 50/60 Hz (com versões navais compatíveis com 400 Hz), e frequentemente possui entrada e comutação para operação contínua em 24 V DC de baterias do passadiço em caso de blecaute.",
    topic: "Alimentação Elétrica Principal do Odômetro AGI-LOG"
  },
  {
    question: "Qual é a potência elétrica total consumida tipicamente pelo sistema do Odômetro AGI-LOG (S.D.T.U. e bobina de excitação do sensor)?",
    options: [
      "Baixíssimo consumo, tipicamente em torno de 30 Watts (na faixa típica de 25 W a 35 W) em operação normal contínua.",
      "Aproximadamente 1.500 Watts, requerendo sistema de ar condicionado dedicado e disjuntor térmico trifásico de 30 Amperes.",
      "Mais de 5.000 Watts devido ao aquecimento resistivo dos eletrodos de platina na água para evitar congelamento.",
      "Exatos 0,5 Watt, operando como circuito passivo sem necessidade de transformadores ou conversores digitais internos."
    ],
    answer: "Baixíssimo consumo, tipicamente em torno de 30 Watts (na faixa típica de 25 W a 35 W) em operação normal contínua.",
    explanation: "Apesar de alimentar a bobina magnética submersa no mar e energizar um chassi de 12 cartões eletrônicos com microprocessadores e conversores D/A, a eficiência do projeto AGI-LOG (tecnologia CMOS e fontes reguladas de alto rendimento no Módulo 08) limita a potência absorvida da rede elétrica do navio a apenas cerca de 30 Watts, não sobrecarregando os quadros de navegação ou baterias de emergência.",
    topic: "Potência Consumida pelo Odômetro AGI-LOG"
  },
  {
    question: "Na especificação do Odômetro AGI-LOG, que nível de precisão possui a Haste Fixa operando na faixa de baixas velocidades de 0 a 10 nós?",
    options: [
      "Precisão de ±0,1 nó (±0,1 knot) na medição de velocidade entre 0 e 10 nós.",
      "Precisão inferior, com tolerância de ±1,5 nó em velocidades abaixo de 10 nós devido à baixa indução magnética.",
      "O sistema não consegue medir velocidades inferiores a 3 nós, mantendo o display zerado por falta de fluxo dinâmico.",
      "Precisão exata de ±0,001 nó em 0 a 10 nós, porém com desvio para ±5 nós ao ultrapassar os 12 nós de velocidade."
    ],
    answer: "Precisão de ±0,1 nó (±0,1 knot) na medição de velocidade entre 0 e 10 nós.",
    explanation: "Em baixas velocidades de deslocamento (de 0 a 10 nós), a precisão da medição é extremamente crítica para a segurança em manobras portuárias, aproximação de cais, atracação, navegação em canais estreitos e operações dinâmicas de navios militares/científicos. O Odômetro AGI-LOG garante com a haste fixa uma exatidão rigorosa de ±0,1 nó em toda essa faixa sensível (0 a 10 nós).",
    topic: "Precisão da Haste na Faixa de 0 a 10 Nós"
  },

  // ============================================================================
  // SEÇÃO 5: MANUTENÇÃO PREVENTIVA, DIAGNÓSTICA E CORRETIVA / CIRCUITO BIT (Q12, Q13, Q15-Q19)
  // ============================================================================
  {
    question: "Como se estrutura e como funciona o Circuito de Teste Integrado (BIT / BITE - Built-In Test Equipment) localizado na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "É um sistema de autodiagnóstico gerenciado pelo microprocessador (Módulo 02) e circuitos de monitoramento que verifica continuamente ou sob comando a integridade das tensões da fonte (Módulo 08), das memórias EPROM/RAM, da conversão A/D, continuidade da bobina e cartões de saída.",
      "É apenas uma lâmpada fluorescente instalada no topo do gabinete que acende em cor azul quando a temperatura interna excede 60°C.",
      "Consiste em um alicate amperímetro mecânico solto dentro da caixa para que o tripulante meça manualmente a corrente do transformador a cada manhã.",
      "É uma sub-rotina que desliga o odômetro a cada duas horas para limpar a memória RAM e reinicializar as portas de rede sem alertar o passadiço."
    ],
    answer: "É um sistema de autodiagnóstico gerenciado pelo microprocessador (Módulo 02) e circuitos de monitoramento que verifica continuamente ou sob comando a integridade das tensões da fonte (Módulo 08), das memórias EPROM/RAM, da conversão A/D, continuidade da bobina e cartões de saída.",
    explanation: "O circuito BIT (Built-In Test) confere ao AGI-LOG sua alta confiabilidade de diagnóstico. O Módulo 02 inspeciona ativamente o hardware do chassi: monitora se o Módulo 08 entrega exatamente +5V e ±12V, valida os checksums da EPROM e leitura/escrita da RAM, injeta referências no conversor A/D (Módulo 04) para verificar calibração do canal analógico e supervisiona o loop da bobina do sensor e barramentos de saída.",
    topic: "Circuito de Teste Integrado (BIT) na S.D.T.U."
  },
  {
    question: "O que ocorre exatamente e quais indicações visuais são geradas pela S.D.T.U. quando uma falha (avaria técnica) é detectada pelo circuito BIT ou pelo microprocessador do Odômetro AGI-LOG?",
    options: [
      "O sistema ativa um alarme visual no painel frontal, exibe um Código de Falha / Código de Erro de diagnóstico nos mostradores digitais identificando o módulo ou circuito avariado, e pode travar ou sinalizar as saídas para evitar o envio de dados erráticos aos sistemas de navegação (como Radar/ECDIS).",
      "O odômetro queima o fusível principal da fonte imediatamente e libera fumaça de enxofre para alertar a tripulação por via olfativa no passadiço.",
      "A S.D.T.U. inverte a indicação de velocidade, mostrando valores negativos de nós para que o oficial saiba que deve navegar em marcha à ré para casa de máquinas.",
      "O sistema desconecta a bateria do navio e aciona os motores das bombas de porão em velocidade máxima por precaução."
    ],
    answer: "O sistema ativa um alarme visual no painel frontal, exibe um Código de Falha / Código de Erro de diagnóstico nos mostradores digitais identificando o módulo ou circuito avariado, e pode travar ou sinalizar as saídas para evitar o envio de dados erráticos aos sistemas de navegação (como Radar/ECDIS).",
    explanation: "Quando o autoteste BIT constata uma anomalia em qualquer parte da cadeia (ex: falha de RAM, perda do sinal da haste ou falha da tensão ±12V), a S.D.T.U. alerta o passadiço acionando o indicador visual de alarme e exibindo o código de diagnóstico correspondente no display frontal. Para preservar a segurança da navegação, a unidade sinaliza como inválidos os pulsos e dados seriais enviados ao Radar ARPA, ECDIS e giroscópica.",
    topic: "Detecção de Falha e Comportamento do Sistema"
  },
  {
    question: "Quais são os três (3) tipos principais de manutenções empregados na doutrina de suporte técnico e operação do Odômetro AGI-LOG?",
    options: [
      "Manutenção Preventiva (inspeções de rotina, limpeza e verificação), Manutenção por Diagnóstico (uso sistemático do BIT para monitoramento e isolamento) e Manutenção Corretiva (substituição do módulo ou componente defeituoso).",
      "Manutenção Hidráulica diária, Calibração Nuclear anual e Soldagem Subaquática semanal de eletrodos no mar.",
      "Pintura externa do gabinete a cada 6 meses, Troca obrigatória da fiação do porão a cada viagem e Desmagnetização por desmagnetizador de quilha.",
      "Manutenção via satélite por controle remoto do fabricante, Troca aleatória de resistores da placa A1 e Limpeza com ácido sulfúrico da haste."
    ],
    answer: "Manutenção Preventiva (inspeções de rotina, limpeza e verificação), Manutenção por Diagnóstico (uso sistemático do BIT para monitoramento e isolamento) e Manutenção Corretiva (substituição do módulo ou componente defeituoso).",
    explanation: "A filosofia de manutenção do Odômetro AGI-LOG baseia-se no tripé clássico dos sistemas navais modernos: 1) Manutenção Preventiva (garantir vedação, limpeza mecânica das lentes/eletrodos e verificação das conexões); 2) Manutenção por Diagnóstico (tirar máximo proveito dos recursos inteligentes de autoteste e códigos de erro do BIT); e 3) Manutenção Corretiva (ação de restabelecimento rápido via troca de cartões modulares ou reparo físico da haste).",
    topic: "Os 3 Tipos de Manutenções no Odômetro AGI-LOG"
  },
  {
    question: "Como se caracteriza e qual é a grande vantagem da Manutenção por Diagnóstico no sistema do Odômetro AGI-LOG?",
    options: [
      "É uma metodologia estruturada que utiliza a inteligência dos circuitos BIT e os códigos de erro do microprocessador para monitorar, localizar e isolar hierarquicamente as avarias em Nível Baixo e Nível Alto, sem necessidade de testes demorados em bancada para descobrir a placa falha.",
      "É um processo mecânico onde o técnico escuta o ruído da água passando pela haste usando um estetoscópio médico para detectar cavitação no transdutor.",
      "Consiste em enviar os dados analógicos da S.D.T.U. via rádio em ondas curtas para a capitania dos portos realizar o diagnóstico em terra e retornar um fax de aprovação.",
      "Baseia-se em curto-circuitar intencionalmente os conectores da fonte de alimentação para observar qual diodo emite luz vermelha no painel interno."
    ],
    answer: "É uma metodologia estruturada que utiliza a inteligência dos circuitos BIT e os códigos de erro do microprocessador para monitorar, localizar e isolar hierarquicamente as avarias em Nível Baixo e Nível Alto, sem necessidade de testes demorados em bancada para descobrir a placa falha.",
    explanation: "A Manutenção por Diagnóstico é o elo de transição entre a operação e o reparo. O AGI-LOG aproveita sua arquitetura microprocessada e modular para auto-inspecionar seus circuitos em duas camadas de profundidade (Nível Baixo para operadores e Nível Alto para técnicos), localizando com velocidade e exatidão qual dos 12 cartões ou subconjuntos apresentou defeito sem exigir análise intrusiva com soldador ou multímetro na ponte.",
    topic: "Característica da Manutenção por Diagnóstico"
  },
  {
    question: "O que caracteriza e como é realizada a Manutenção por Diagnóstico em Nível Baixo (Low Level Diagnostic Maintenance) no Odômetro AGI-LOG?",
    options: [
      "É realizada diretamente no painel frontal da S.D.T.U. pelo operador/técnico sem abrir o gabinete ou usar instrumentos externos, baseando-se na leitura dos códigos de falha visuais do autoteste inicial/contínuo e na verificação do modo TEST via teclado para isolar se a falha é na alimentação de bordo, na haste ou na unidade central.",
      "Requer a remoção imediata da haste retrátil com o navio em movimento a 25 nós e medição da corrente de curto da água com amperímetro analógico.",
      "Envolve desmontar completamente os 12 módulos com chave de fenda e medir a capacitância individual de cada capacitor de tântalo debaixo de lupa.",
      "É executada apenas por engenheiros de fábrica utilizando analisador de espectro militar conectado à antena de radar do passadiço superior."
    ],
    answer: "É realizada diretamente no painel frontal da S.D.T.U. pelo operador/técnico sem abrir o gabinete ou usar instrumentos externos, baseando-se na leitura dos códigos de falha visuais do autoteste inicial/contínuo e na verificação do modo TEST via teclado para isolar se a falha é na alimentação de bordo, na haste ou na unidade central.",
    explanation: "O Nível Baixo de Diagnóstico é a primeira linha de verificação rápida. Operado sem abrir a S.D.T.U. e sem qualquer multímetro, o tripulante observa o comportamento inicial do Power-On BIT, checa se há códigos de alarme ou falha nos displays e interage através do teclado (`MODE` / `TEST` / `PROBE`) para verificar imediatamente se a alimentação primária está chegando, se o cabo externo/haste está respondendo ou se a avaria é interna.",
    topic: "Manutenção por Diagnóstico em Nível Baixo"
  },
  {
    question: "O que caracteriza e em que consiste a Manutenção por Diagnóstico em Nível Alto (High Level Diagnostic Maintenance) no Odômetro AGI-LOG?",
    options: [
      "É o diagnóstico avançado realizado por pessoal técnico qualificado abrindo o gabinete da S.D.T.U., executando sub-rotinas de teste especializadas, verificando os pontos de teste (test points) nos cartões individuais e fontes com multímetro/osciloscópio ou simulador para isolar com exatidão o cartão eletrônico avariado.",
      "É a manutenção realizada exclusivamente no topo dos mastros (acima de 20 metros de altura no passadiço superior) para verificar os cabos de descida do radar.",
      "Consiste em lixar e repintar com tinta anti-incrustante a carcaça de alumínio da S.D.T.U. a cada três anos em dique seco na presença de inspetor classificatório.",
      "Envolve a substituição dos transformadores de alta tensão da casa de máquinas por modelos chaveados de 400 Hz antes da saída para o mar."
    ],
    answer: "É o diagnóstico avançado realizado por pessoal técnico qualificado abrindo o gabinete da S.D.T.U., executando sub-rotinas de teste especializadas, verificando os pontos de teste (test points) nos cartões individuais e fontes com multímetro/osciloscópio ou simulador para isolar com exatidão o cartão eletrônico avariado.",
    explanation: "Quando o diagnóstico de Nível Baixo aponta falha interna na S.D.T.U., entra em ação o Nível Alto. Executado por especialistas de eletrônica com a tampa da unidade aberta, envolve checar os pontos de teste (P.T.) nos slots do backplane, inspecionar as tensões do Módulo 08 com multímetro, usar simuladores de sinal na entrada do Módulo 04 e aplicar rotinas de teste detalhadas para discriminar exatamente qual cartão (Módulo 01 a 12) apresenta avaria no chassi.",
    topic: "Manutenção por Diagnóstico em Nível Alto"
  },
  {
    question: "Em que consiste fundamentalmente a Manutenção Corretiva na S.D.T.U. do Odômetro AGI-LOG após o isolamento do defeito pela fase de diagnóstico?",
    options: [
      "Consiste no reparo rápido e efetivo do equipamento por meio da substituição física do cartão/módulo eletrônico identificado como defeituoso por um módulo sobressalente testado (conceito plug-and-play modular), restabelecendo o funcionamento com baixíssimo MTTR.",
      "Consiste em reenrolar manualmente na bancada de bordo os fios de cobre de 0,1 mm da bobina de excitação submersa na água durante a navegação em mar grosso.",
      "Envolve reprogramar em código assembly de máquina todos os transistores do Módulo 02 com um gravador manual de EPROM em alto mar a cada falha de energia.",
      "Resume-se a dar pancadas mecânicas controladas no gabinete de alumínio para soltar relés travados por oxidação nos cartões de conversão D/A."
    ],
    answer: "Consiste no reparo rápido e efetivo do equipamento por meio da substituição física do cartão/módulo eletrônico identificado como defeituoso por um módulo sobressalente testado (conceito plug-and-play modular), restabelecendo o funcionamento com baixíssimo MTTR.",
    explanation: "A doutrina de Manutenção Corretiva na S.D.T.U. do AGI-LOG em nível de bordo não prevê o reparo de componentes avulsos soldados nas placas (como trocar resistores ou transistores na bancada). Graças à sua arquitetura modular, a ação corretiva padrão é a extração e substituição direta da placa avariada (por exemplo, trocar o Módulo 04 ou Módulo 07 inteiro) por uma sobressalente do estoque do navio, garantindo a retomada imediata da medição.",
    topic: "Filosofia da Manutenção Corretiva (Troca Modular)"
  },

  // ============================================================================
  // SEÇÃO 6: ARQUITETURA MODULAR COMPLETA DA S.D.T.U. - MÓDULOS 01 A 12 (Q38-Q50)
  // ============================================================================
  {
    question: "Na estrutura modular da S.D.T.U. do Odômetro AGI-LOG, qual é a função específica do Módulo 01 (Cartão de Identificação / ID Card)?",
    options: [
      "Armazenar e fornecer ao microprocessador os dados de identificação, codificação do modelo, número de série da unidade e configuração/opções de hardware instaladas no chassi, garantindo a perfeita compatibilidade do sistema.",
      "Atuar como conversor analógico-digital dos sinais da haste, transformando os milivolts induzidos na água em palavras digitais de 16 bits para a RAM.",
      "Transformar a energia elétrica AC de 115V do navio nas tensões contínuas de +5V e ±12V exigidas para alimentar os barramentos do backplane.",
      "Gerar exclusivamente a frequência de batimento acústico de 2 MHz e controlar os relés mecânicos de saída de rumo para o repetidor de popa."
    ],
    answer: "Armazenar e fornecer ao microprocessador os dados de identificação, codificação do modelo, número de série da unidade e configuração/opções de hardware instaladas no chassi, garantindo a perfeita compatibilidade do sistema.",
    explanation: "O Módulo 01 (Cartão de Identificação) é a placa de identidade eletrônica e configuração do chassi da S.D.T.U. Ele contém codificações, jumpers e memórias de identificação que dizem ao Módulo 02 (Microprocessador) qual é a versão exata do equipamento, que opcionais estão habilitados (ex: conversores D/A 05/06 instalados ou canais duplos) e qual o número de série/modelo, assegurando que o firmware execute as rotinas corretas para aquele hardware.",
    topic: "Função do Módulo 01 (Cartão de Identificação)"
  },
  {
    question: "Qual é a função central desempenhada pelo Módulo 02 (Cartão do Micro Processador e Memórias) na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "É o cérebro digital e controlador central do sistema: abriga a CPU, gerencia os barramentos de dados/endereço, executa o firmware operacional da EPROM, executa os testes BIT, processa os dados do conversor A/D com as curvas de calibração na RAM e controla os displays e saídas.",
      "É um simples cartão retificador de diodos zener responsável por proteger as entradas do teclado contra surtos eletrostáticos dos dedos do operador.",
      "Atua exclusivamente como amplificador operacional analógico que eleva a corrente de 4-20 mA para alimentar o galvanômetro mecânico do camarim de navegação.",
      "É uma placa passiva que serve apenas como suporte físico e terra de blindagem eletromagnética para o cabo coaxial principal que chega da quilha do navio."
    ],
    answer: "É o cérebro digital e controlador central do sistema: abriga a CPU, gerencia os barramentos de dados/endereço, executa o firmware operacional da EPROM, executa os testes BIT, processa os dados do conversor A/D com as curvas de calibração na RAM e controla os displays e saídas.",
    explanation: "O Módulo 02 (Cartão do Microprocessador e Memórias) centraliza toda a inteligência computacional e lógica digital de controle da S.D.T.U. Ele coordena o ritmo de amostragem dos eletrodos no Módulo 04, aplica as equações e curvas de linearização hidrodinâmica para computar velocidade em nós, calcula a integração da distância em milhas, supervisiona o circuito BIT de diagnóstico em tempo real e comanda as placas de saída analógicas, digitais e pulsadas.",
    topic: "Função do Módulo 02 (Microprocessador e Memórias)"
  },
  {
    question: "Dentro do Módulo 02 (Cartão do Micro Processador e Memórias) do Odômetro AGI-LOG, qual é a função e o papel da Memória EPROM (Erasable Programmable Read-Only Memory)?",
    options: [
      "Armazenar de forma permanente (não-volátil) o programa operacional principal do sistema (Firmware), as rotinas de autoteste BIT/BITE, os algoritmos matemáticos de cálculo hidrodinâmico e as curvas/tabelas de calibração do odômetro.",
      "Armazenar temporariamente a velocidade instantânea dos últimos 3 segundos para apagar assim que o navio mudar de curso ou a chave for desligada.",
      "Alimentar com tensão contínua de 12 Volts o circuito de display fluorescente quando o disjuntor de força de bordo sofrer um curto-circuito na linha.",
      "Gravar o áudio contínuo das comunicações verbais entre o oficial de quarto no passadiço e a praça de máquinas durante situações de emergência no mar."
    ],
    answer: "Armazenar de forma permanente (não-volátil) o programa operacional principal do sistema (Firmware), as rotinas de autoteste BIT/BITE, os algoritmos matemáticos de cálculo hidrodinâmico e as curvas/tabelas de calibração do odômetro.",
    explanation: "A Memória EPROM no Módulo 02 é uma memória não-volátil (não perde os dados quando o AGI-LOG é desligado da rede do navio). É nela que repousa o software de sistema (firmware) gravado na fábrica e/ou durante a calibração, contendo todo o conjunto de instruções, rotinas de autodiagnóstico do BIT, tabelas de conversão A/D e as curvas definitivas de compensação da camada limite que traduzem os milivolts da água em nós exatos de velocidade.",
    topic: "Função da Memória EPROM no Módulo 02"
  },
  {
    question: "No Módulo 02 (Cartão do Micro Processador e Memórias) da S.D.T.U. do Odômetro AGI-LOG, qual é a função específica da Memória RAM (Random Access Memory)?",
    options: [
      "Armazenar de forma dinâmica e temporária os dados em tempo de execução, como o bloco de rascunho de cálculos da CPU, as leituras digitalizadas em tempo real, as seleções de teclado em uso e o valor contínuo do hodômetro de distância acumulada.",
      "Guardar permanentemente o número de série de fábrica do equipamento, impedindo que o operador apague a identificação ao trocar o Módulo 01 no passadiço.",
      "Gerar a alta frequência de excitação mecânica para vibrar a ponta do sensor piezoelétrico no porão a 400 ciclos por segundo.",
      "Servir de fusível térmico rearmável que interrompe o barramento de +5V caso a corrente da bobina da haste exceda 2 Amperes no painel."
    ],
    answer: "Armazenar de forma dinâmica e temporária os dados em tempo de execução, como o bloco de rascunho de cálculos da CPU, as leituras digitalizadas em tempo real, as seleções de teclado em uso e o valor contínuo do hodômetro de distância acumulada.",
    explanation: "A Memória RAM é a memória de trabalho de leitura e escrita do microprocessador central. Ela aloca as variáveis de tempo de execução (como resultados intermediários das multiplicações da curva de calibração), armazena as amostras mais recentes vindas do conversor A/D para cálculo de médias, retém as opções de teclado selecionadas pelo oficial (`MODE`/`CURVE`) e atualiza a todo instante a totalização dinâmica da distância navegada (que é retida com backup ou salva no desligamento).",
    topic: "Função da Memória RAM no Módulo 02"
  },
  {
    question: "Qual é a função desempenhada pelo Módulo 03 (Cartão de Interface de Controle de Temporização / Interface com Painel, Display e Teclado) na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Atuar como cartão de interface intermediário entre o barramento do Microprocessador e os periféricos do painel frontal: controla a varredura e drive dos displays digitais de velocidade/distância, faz a leitura multiplexada das teclas de ação momentânea e condiciona o sinal do DIMMER.",
      "Converter os sinais digitais seriais de saída para o formato analógico em corrente 4-20 mA para o repetidor do camarim do comandante.",
      "Gerar a alta tensão alternada de 220V que alimenta os transformadores e bobinas do conjunto de excitação da válvula de fundo no porão.",
      "Fornecer os pulsos mecânicos de 200 pulsos por milha exclusivamente para o registrador em fita de papel de dados oceanográficos da sala de cartas."
    ],
    answer: "Atuar como cartão de interface intermediário entre o barramento do Microprocessador e os periféricos do painel frontal: controla a varredura e drive dos displays digitais de velocidade/distância, faz a leitura multiplexada das teclas de ação momentânea e condiciona o sinal do DIMMER.",
    explanation: "O Módulo 03 faz a ponte entre o processador (Módulo 02) e a interface humana no painel frontal da S.D.T.U. Ele gerencia o acionamento (display drive/varredura multiplexada) dos mostradores de LEDs ou 7-segmentos de velocidade e distância, faz a varredura anti-repique (debouncing) das 5 teclas momentâneas (`MODE`, `PROBE`, `CURVE`, etc.), converte/condiciona o ajuste contínuo do potenciômetro DIMMER e sincroniza os clocks auxiliares do chassi.",
    topic: "Função do Módulo 03 (Interface de Painel/Display/Teclado)"
  },
  {
    question: "Na S.D.T.U. do Odômetro AGI-LOG, qual é a função essencial do Módulo 04 (Conversor de Sinais Analógico para Digital - Conversor A/D)?",
    options: [
      "Receber, amplificar com alta impedância, filtrar e converter em palavras digitais numéricas a minúscula tensão induzida diferencial de milivolts captada pelos eletrodos da haste/sensor na água do mar, enviando esses dados para o barramento do microprocessador.",
      "Receber a tensão alternada de 115V AC da rede do navio e retificá-la em corrente contínua estabilizada de +5V DC para alimentar os chips de memória RAM do chassi.",
      "Receber os pulsos de velocidade calculados pelo microprocessador e convertê-los em onda sonora subaquática de 2 MHz transmitida pelos cristais sônicos da quilha.",
      "Atuar como chave mecânica biposição que comuta o sinal entre a haste de proa e a haste de popa em intervalos fixos de 10 minutos de navegação."
    ],
    answer: "Receber, amplificar com alta impedância, filtrar e converter em palavras digitais numéricas a minúscula tensão induzida diferencial de milivolts captada pelos eletrodos da haste/sensor na água do mar, enviando esses dados para o barramento do microprocessador.",
    explanation: "O Módulo 04 (Conversor A/D) é a porta de entrada dos sinais hidrodinâmicos analógicos do transdutor. Como a tensão induzida pela Lei de Faraday nos eletrodos da haste (conectados em C, D e E) possui amplitude na casa de microvolts ou milivolts e está sobreposta a ruídos marinhos, o Módulo 04 pré-amplifica com alta rejeição de modo comum, filtra o ruído e executa a conversão analógico-digital de alta precisão, gerando o dado binário que o microprocessador processa.",
    topic: "Função do Módulo 04 (Conversor A/D)"
  },
  {
    question: "Qual é a função e a aplicação dos Módulos 05 e 06 (Conversores de Sinais Digital para Analógico - Conversores D/A, opcionais) na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Receber as palavras digitais processadas e calibradas de velocidade (e/ou distância) enviadas pelo Módulo 02 e convertê-las em tensões ou correntes analógicas contínuas padronizadas (ex: 0 a +10V, -10 a +10V ou 4-20 mA) para alimentar repetidores e agulhas analógicas do navio.",
      "Gerar a corrente alternada pulsada de 2 Amperes destinada a alimentar e excitar a bobina magnética nos terminais A e B da haste submersa.",
      "Servir de interface de fibra óptica ultrarrápida para descarregar o diário eletrônico de navegação do microprocessador em computadores portáteis de terra.",
      "Medir a temperatura da água da quilha e converter a variação do termistor analógico em alarme digital no painel de controle de avarias da casa de máquinas."
    ],
    answer: "Receber as palavras digitais processadas e calibradas de velocidade (e/ou distância) enviadas pelo Módulo 02 e convertê-las em tensões ou correntes analógicas contínuas padronizadas (ex: 0 a +10V, -10 a +10V ou 4-20 mA) para alimentar repetidores e agulhas analógicas do navio.",
    explanation: "Muitos navios utilizam repetidores remotamente instalados no camarim ou asas do passadiço com ponteiros mecânicos/galvanômetros ou sistemas antigos que requerem sinal analógico contínuo proporcional à velocidade. Os Módulos 05 e 06 (Conversores D/A opcionais) cumprem esse papel: transformam as palavras digitais de velocidade exatas calculadas pela CPU em saídas analógicas limpas e isoladas em tensão (ex: 0-10V) ou loop de corrente industrial (4-20mA).",
    topic: "Função dos Módulos 05 e 06 (Conversores D/A Opcionais)"
  },
  {
    question: "Na S.D.T.U. do Odômetro AGI-LOG, qual é a função primordial e crítica do Módulo 07 (Cartão de Saída Auxiliar = Saídas Pulsadas / Pulse Output Card)?",
    options: [
      "Gerar e distribuir pulsos elétricos ou fechamentos de contatos limpos/relés em taxa estritamente proporcional à distância navegada (ex: saídas padrão de 200 pulsos por milha náutica - 200 pulses/nm) para alimentar sistemas críticos como Radar ARPA, ECDIS e VDR do navio.",
      "Emitir pulsos acústicos de 1,1 milissegundo em direção ao fundo marinho para calcular a profundidade de água livre abaixo da quilha principal.",
      "Fornecer pulsos magnéticos de alta voltagem para desmagnetizar periodicamente os eletrodos de platina da haste retrátil contra corrosão galvânica.",
      "Enviar pulsos de reset a cada 60 segundos para o relógio de ponto da tripulação e para a sirene geral de alarme de abandono de embarcação."
    ],
    answer: "Gerar e distribuir pulsos elétricos ou fechamentos de contatos limpos/relés em taxa estritamente proporcional à distância navegada (ex: saídas padrão de 200 pulsos por milha náutica - 200 pulses/nm) para alimentar sistemas críticos como Radar ARPA, ECDIS e VDR do navio.",
    explanation: "O Módulo 07 (Saídas Pulsadas) é a principal fonte de interface do hodômetro com os sistemas táticos e de navegação que requerem pulsos de distância. A cada fração de milha percorrida (integrada pela CPU), o Módulo 07 emite um pulso de saída temporizado de precisão (por exemplo, no padrão universal de 200 pulsos/milha ou 100/400 pulsos/milha). Essa entrada é utilizada por Radares de varredura (ARPA), Sistemas ECDIS, pilotos automáticos e gravadores VDR para plotar o movimento real do navio na carta gráfica.",
    topic: "Função do Módulo 07 (Saídas Pulsadas por Milha Náutica)"
  },
  {
    question: "Qual é a dupla função técnica exercida pelo Módulo 08 (Cartão da Fonte de Alimentação / Power Supply Module) na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Receber a energia primária (115/230 VAC ou 24 VDC do navio) para convertê-la nas tensões reguladas (+5V e ±12V/±15V) que alimentam os cartões da S.D.T.U., e gerar a corrente alternada/pulsada regulada para excitação da bobina magnética da haste submersa.",
      "Atuar como bateria selada recarrega de íons de lítio que mantém os mostradores frontais acesos por até 72 horas em caso de afundamento total do convés.",
      "Funcionar unicamente como transformador abaixador de isolamento analógico para alimentar a luz incandescente de iluminação da bússola magnética do convés.",
      "Converter os sinais analógicos do conversor A/D em formato de rádio frequência de 156 MHz para transmitir sem fio até as asas boreste e bombordo do passadiço."
    ],
    answer: "Receber a energia primária (115/230 VAC ou 24 VDC do navio) para convertê-la nas tensões reguladas (+5V e ±12V/±15V) que alimentam os cartões da S.D.T.U., e gerar a corrente alternada/pulsada regulada para excitação da bobina magnética da haste submersa.",
    explanation: "O Módulo 08 é o coração de energia do AGI-LOG e cumpre duas missões vitais: 1) Retifica, filtra e regula a energia primária do navio em tensões contínuas altamente estabilizadas (+5V para os circuitos digitais TTL/CMOS/CPU e ±12V ou ±15V para amplificadores operacionais e conversores A/D-D/A); e 2) Fornece a energia de excitação de corrente controlada (AC ou pulsada) que flui até os Terminais A e B da bobina da haste para criar o campo magnético na água.",
    topic: "Função do Módulo 08 (Fonte de Alimentação e Excitação)"
  },
  {
    question: "Quais são especificamente as saídas de tensão contínua e sinais elétricos que o Módulo 08 (Fonte de Alimentação) do Odômetro AGI-LOG produz e fornece para os circuitos internos da S.D.T.U. e para a haste?",
    options: [
      "+5 V DC regulado para a lógica digital/CPU/memórias, ±12 V DC (ou ±15 V DC, compostas por +12V/+15V e -12V/-15V) para os circuitos analógicos/conversores A/D e D/A, e a Saída Específica de Excitação da Bobina (Probe Excitation Output) nos terminais A e B da haste.",
      "Apenas uma tensão contínua única e fixa de +24 V DC distribuída em paralelo para todos os cartões, microprocessador e bobina externa sem regulação diferencial.",
      "Tensões de +110 V DC para aquecimento das placas, +48 V DC para os relés de alarme externo e -5 V DC exclusivamente para o aterramento do chassi de alumínio.",
      "+3,3 V DC para a antena de satélite DGPS, +100 V AC para o motor do repetidor giroscópico mecânico e corrente senoidal de 400 Hz para o teclado do painel."
    ],
    answer: "+5 V DC regulado para a lógica digital/CPU/memórias, ±12 V DC (ou ±15 V DC, compostas por +12V/+15V e -12V/-15V) para os circuitos analógicos/conversores A/D e D/A, e a Saída Específica de Excitação da Bobina (Probe Excitation Output) nos terminais A e B da haste.",
    explanation: "A arquitetura eletrônica da S.D.T.U. exige tensões separadas com rigorosa estabilidade: o barramento digital opera com +5 V DC (lógica microprocessada Módulo 02); o barramento analógico de precisão (amplificadores diferenciais de entrada do Módulo 04 e conversores D/A Módulos 05/06) necessita de tensões bipolares simétricas de ±12 V DC (ou ±15 V DC, com trilhas positivas e negativas); e a bobina magnética necessita de sua saída dedicada de corrente de excitação controlada via pinos A e B.",
    topic: "Saídas Específicas do Módulo 08 (Fonte de Alimentação)"
  },
  {
    question: "Quais são as funções e aplicações dos Módulos 09 e 10 (Cartões de Interface Digital / Saídas Seriais ou Sincro-Passo) na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Atuar como cartões de interface digital que transmitem os dados numéricos de velocidade e distância calculados pelo microprocessador utilizando protocolos seriais navais padronizados (como NMEA 0183 RS-422/RS-232, sentenças $VDVHW/$VDVLW) ou sinais Sincro/Passo para repetidores e sistemas integrados de passadiço (IBS).",
      "Serem placas dedicadas ao controle pneumático de abertura e fechamento da válvula de fundo da haste retrátil no porão por meio de eletroválvulas de 24V.",
      "Atuar exclusivamente como filtros passa-baixa passivos de linha telefônica para conectar o fone do passadiço com a central Impacta 300 da sala de rádio.",
      "Armazenar em cartões de memória flash removíveis as fotografias de radar capturadas durante colisões ou incidentes de aproximação no mar."
    ],
    answer: "Atuar como cartões de interface digital que transmitem os dados numéricos de velocidade e distância calculados pelo microprocessador utilizando protocolos seriais navais padronizados (como NMEA 0183 RS-422/RS-232, sentenças $VDVHW/$VDVLW) ou sinais Sincro/Passo para repetidores e sistemas integrados de passadiço (IBS).",
    explanation: "Nos navios modernos, a comunicação entre o odômetro e os computadores de navegação (IBS, ECDIS, Agulhas Giroscópicas e VDR) ocorre por barramentos digitais. Os Módulos 09 e 10 cumprem essa tarefa de comunicação: eles formatam as informações contínuas calculadas pela CPU em sentenças seriais padrão internacional (NMEA 0183 em padrão RS-422 ou RS-232, com prefixo `$VD` para Velocity Sensor/Doppler/Log), ou em sinais digitais de sincro (Synchro/Stepper) para repetidores analógicos de bússolas e indicadores remotos.",
    topic: "Função dos Módulos 09 e 10 (Interfaces Digitais/Seriais/NMEA)"
  },
  {
    question: "Quais são as funções e as aplicações típicas dos Módulos 11 e 12 na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "Atuar como Cartões de Expansão, Interfaces Auxiliares para múltiplos repetidores remotos adicionais (asas do passadiço, CCM, camarim) ou Cartões de Diagnóstico e Teste especializado para funções customizadas ou militares da embarcação.",
      "Substituir completamente a Memória EPROM e RAM do Módulo 02 caso o microprocessador sofra superaquecimento catastrófico durante batalhas navais.",
      "Fornecer exclusivamente a energia elétrica trifásica de 440 Volts para alimentar as bombas principais de porão e de incêndio na casa de máquinas do navio.",
      "Emitir raios ultravioleta dentro da caixa de alumínio da S.D.T.U. para esterilizar os componentes contra fungos marinhos e bactérias halófilas tropicais."
    ],
    answer: "Atuar como Cartões de Expansão, Interfaces Auxiliares para múltiplos repetidores remotos adicionais (asas do passadiço, CCM, camarim) ou Cartões de Diagnóstico e Teste especializado para funções customizadas ou militares da embarcação.",
    explanation: "Os slots para os Módulos 11 e 12 conferem à S.D.T.U. do AGI-LOG sua notável flexibilidade de expansão naval. Quando uma embarcação de grande porte ou navio de guerra exige a distribuição da informação de velocidade e distância para inúmeras estações remotas simultâneas (por exemplo, repetidores nas asas de bombordo e boreste do passadiço, sala de controle de máquinas - CCM, camarim de navegação, estações de controle de avarias e centrais de combate), ou necessita de circuitos de teste/isolamento adicionais, os Módulos 11 e 12 são instalados para suprir essas saídas auxiliares e customizações.",
    topic: "Função dos Módulos 11 e 12 (Expansão e Repetidores Remotos)"
  },

  // ============================================================================
  // SEÇÃO 7: DESTRINCHANDO A PROFUNDIDADE - SEGURANÇA ELÉTRICA E PROCEDIMENTOS (Q48-Q51)
  // ============================================================================
  {
    question: "Durante a verificação de segurança no Módulo 08 (Fonte de Alimentação) e na S.D.T.U. do Odômetro AGI-LOG, além de desligar a rede AC principal (115/230 VAC), que outro procedimento comutado é essencial?",
    options: [
      "Certificar-se de abrir a chave ou disjuntor da alimentação auxiliar de 24 V DC do banco de baterias do passadiço, para evitar que o circuito de comutação automática mantenha o chassi energizado internamente.",
      "Conectar o transformador elevador de 440 V diretamente ao borne de aterramento da haste no porão.",
      "Aterrar a antena do radar ARPA para descarregar os capacitores do conversor digital-analógico do Módulo 05.",
      "Preencher a caixa de junção da proa com água destilada para resfriar os tiristores de potência."
    ],
    answer: "Certificar-se de abrir a chave ou disjuntor da alimentação auxiliar de 24 V DC do banco de baterias do passadiço, para evitar que o circuito de comutação automática mantenha o chassi energizado internamente.",
    explanation: "Como a S.D.T.U. possui um sistema redundante que comuta automaticamente para 24 V DC do banco de baterias de emergência caso a rede AC falhe ou seja cortada, o técnico deve obrigatoriamente seccionar tanto a alimentação principal (AC) quanto a alimentação de reserva (DC) antes de iniciar qualquer substituição de cartões ou medição ohmica.",
    topic: "Precauções de Segurança com Alimentação Redundante"
  },
  {
    question: "Por que o manuseio específico do Módulo 02 (Cartão do Microprocessador e Memórias) exige rigorosa proteção contra Descargas Eletrostáticas (ESD) durante a manutenção?",
    options: [
      "Porque os circuitos integrados MOS/CMOS, o microprocessador e as memórias RAM/EPROM de alta densidade no Módulo 02 possuem portas isoladas extremamente sensíveis, podendo ser destruídas por tensões estáticas invisíveis geradas pelo corpo humano.",
      "Porque o Módulo 02 acumula tensões de 10.000 Volts em seus capacitores de tântalo, apresentando risco de choque fatal ao operador se tocado sem luvas de borracha classe 4.",
      "Porque as trilhas de ouro do Módulo 02 evaporam em contato com a oleosidade dos dedos se a temperatura ambiente estiver abaixo de 15 °C.",
      "Porque o módulo é magnético e pode desorientar a bússola magnética de governo se for manuseado sem blindagem de chumbo."
    ],
    answer: "Porque os circuitos integrados MOS/CMOS, o microprocessador e as memórias RAM/EPROM de alta densidade no Módulo 02 possuem portas isoladas extremamente sensíveis, podendo ser destruídas por tensões estáticas invisíveis geradas pelo corpo humano.",
    explanation: "A tecnologia de circuitos integrados e memórias (como o microprocessador e chips EPROM/RAM em tecnologia MOS/CMOS) apresenta altíssima impedância de entrada. Uma simples descarga eletrostática de poucos centenas ou milhares de volts (imperceptível ao tato humano) acumulada na roupa ou corpo do operador é suficiente para perfurar o óxido da porta dos transistores do chip, inutilizando o Módulo 02.",
    topic: "Proteção ESD no Módulo 02 (Microprocessador e Memórias)"
  },
  {
    question: "O que deve ser criteriosamente inspecionado de forma mecânica nos pinos do conector de fundo (backplane) e no cartão plug-in da S.D.T.U. antes da inserção de um novo módulo sobressalente?",
    options: [
      "Verificar visualmente se todos os pinos de contato estão perfeitamente retos, sem entortamentos, corrosão verde, oxidação ou corpos estranhos nos soquetes, pois forçar um cartão desalinhado causará danos mecânicos e curtos graves.",
      "Checar se os pinos de aterramento foram limados na extremidade para permitir que entrem 5 mm antes dos pinos de alimentação.",
      "Inspecionar se a camada de resina epóxi cobre completamente os contatos de ouro para impedir a passagem de corrente contínua.",
      "Verificar se o cartão possui um ímã de neodímio colado em sua borda superior para acionar o reed switch de travamento do rack."
    ],
    answer: "Verificar visualmente se todos os pinos de contato estão perfeitamente retos, sem entortamentos, corrosão verde, oxidação ou corpos estranhos nos soquetes, pois forçar um cartão desalinhado causará danos mecânicos e curtos graves.",
    explanation: "O conceito modular em cartões deslizantes depende da integridade do conector traseiro (backplane). A introdução de uma placa sobre pinos empenados ou oxidados pode dobrar os terminais do chassi, provocar curto-circuito entre barramentos de alimentação (+5V/±15V) e linhas de dados do microprocessador e exigir um reparo prolongado de bancada.",
    topic: "Inspeção Mecânica dos Conectores do Backplane"
  },
  {
    question: "Qual é a importância da manutenção corretiva e preventiva sobre o anel de vedação de borracha (gasket) da tampa de alumínio da caixa da S.D.T.U. após cada abertura do gabinete?",
    options: [
      "Preservar a vedação hermética e à prova d'água da S.D.T.U., impedindo a penetração de ar salino, umidade marinha e maresia do passadiço que causariam oxidação galvânica no backplane e fugas de milivolts nos circuitos sensíveis.",
      "Garantir o isolamento acústico contra os ruídos de vibração das turbinas, para que o microprocessador não entre em ressonância ultrassônica.",
      "Manter a pressão de nitrogênio de 5 atmosferas injetada internamente no chassi para resfriamento convectivo.",
      "Permitir que a tampa atue como blindagem térmica, impedindo que o calor do sol dissipe pelas paredes laterais do gabinete."
    ],
    answer: "Preservar a vedação hermética e à prova d'água da S.D.T.U., impedindo a penetração de ar salino, umidade marinha e maresia do passadiço que causariam oxidação galvânica no backplane e fugas de milivolts nos circuitos sensíveis.",
    explanation: "A caixa de alumínio robusta do AGI-LOG possui classificação naval de vedação. Se o anel de vedação (gasket) ficar mordido, ressecado ou sujo ao fechar a tampa, a maresia e umidade penetrarão rapidamente no chassi. Como o sinal vindo da haste é da ordem de poucos milivolts e alta impedância no Módulo 04, qualquer filme de salina nas placas gerará correntes de fuga e medições erráticas.",
    topic: "Manutenção da Vedação da Caixa de Alumínio da S.D.T.U."
  },

  // ============================================================================
  // SEÇÃO 8: DESTRINCHANDO SENSORES, LEI DE FARADAY E TERMINAIS (Q52-Q60)
  // ============================================================================
  {
    question: "Por que a bobina de excitação da Haste do Odômetro AGI-LOG é alimentada por uma Corrente Alternada (AC) ou pulsada, e NÃO por Corrente Contínua (DC)?",
    options: [
      "Para evitar a polarização eletroquímica, a eletrólise da água do mar e a corrosão galvânica acelerada nos eletrodos de contato, além de permitir rejeitar potenciais DC espúrios gerados pelo casco do navio.",
      "Porque o campo magnético de corrente contínua atrai detritos de ferro e pregos flutuantes que grudam na extremidade do sensor.",
      "Para permitir que a haste funcione como antena receptora de rádio VLF em caso de emergência no passadiço.",
      "Porque o microprocessador Módulo 02 opera exclusivamente com sinais digitais em 60 Hz sincronizados com a rede AC do navio."
    ],
    answer: "Para evitar a polarização eletroquímica, a eletrólise da água do mar e a corrosão galvânica acelerada nos eletrodos de contato, além de permitir rejeitar potenciais DC espúrios gerados pelo casco do navio.",
    explanation: "A aplicação de um campo magnético constante (DC) faria com que a corrente contínua nos eletrodos em contato com a água salgada causasse intensa eletrólise, acumulação de íons em redor dos eletrodos (polarização) e severa corrosão galvânica. Com a excitação em Corrente Alternada (AC), o sinal induzido também é alternado, eliminando a eletrólise e possibilitando que o Módulo 04 (Conversor A/D) filtre facilmente tensões contínuas parasitas provenientes da proteção catódica do casco do navio.",
    topic: "Por que a Haste usa Excitação AC (Lei de Faraday)"
  },
  {
    question: "Como é descrita matematicamente e na prática a relação entre a velocidade linear do navio e a força eletromotriz (tensão em milivolts) induzida nos eletrodos da haste de acordo com a Lei de Faraday?",
    options: [
      "A relação é estritamente linear e diretamente proporcional (E = B * L * v); dobrando-se a velocidade do fluxo de água, dobra-se exatamente a amplitude do sinal de milivolts induzido.",
      "A relação é quadrática (E = k * v²), exigindo que a CPU calcule a raiz quadrada da tensão captada para encontrar a velocidade em nós.",
      "A relação é logarítmica inversa, onde em baixas velocidades a tensão é máxima (10 V) e em altas velocidades cai para zero milivolts.",
      "A relação ocorre em degraus quânticos de 1 volt por cada 5 nós de acréscimo no deslocamento do navio."
    ],
    answer: "A relação é estritamente linear e diretamente proporcional (E = B * L * v); dobrando-se a velocidade do fluxo de água, dobra-se exatamente a amplitude do sinal de milivolts induzido.",
    explanation: "Na indução eletromagnética governada pela Lei de Faraday (EM Log), a força eletromotriz induzida E é proporcional à densidade do fluxo magnético (B), à distância entre os eletrodos (L) e à velocidade de corte do condutor/água (v). Como B e L são constantes construtivas e controladas pela SDTU, a tensão AC induzida em milivolts é perfeitamente linear e diretamente proporcional à velocidade da embarcação em relação à água.",
    topic: "Relação Linear da Indução na Lei de Faraday"
  },
  {
    question: "De que maneira a variação de salinidade e temperatura da água do mar (por exemplo, ao transitar do oceano salgado para um rio de água doce) afeta a precisão da leitura hidrodinâmica do Odômetro AGI-LOG?",
    options: [
      "Desde que a água possua uma condutividade elétrica mínima suficiente para fechar o circuito entre os eletrodos, a medição é teoricamente independente das variações de salinidade e temperatura.",
      "A transição para água doce paralisa completamente o odômetro, pois a Lei de Faraday só é válida quando a salinidade excede 35 gramas por litro.",
      "O sistema exige que o oficial de quarto ajuste manualmente um potenciômetro de salinidade a cada mudança de densidade da água para evitar erro de 50%.",
      "O aumento da temperatura marinha em 10 °C duplica o valor do hodômetro de distância devido à expansão térmica dos terminais de bronze."
    ],
    answer: "Desde que a água possua uma condutividade elétrica mínima suficiente para fechar o circuito entre os eletrodos, a medição é teoricamente independente das variações de salinidade e temperatura.",
    explanation: "Uma das grandes virtudes do odômetro eletromagnético é a sua imunidade à variação das propriedades físicas da água. A tensão induzida é gerada no próprio fluido que se move através do campo magnético. Desde que a água não seja água destilada pura (ou seja, desde que contenha íons e condutividade suficiente para que os eletrodos captem a tensão sem queda de potencial por impedância infinita), o sinal induzido independe da temperatura, densidade ou concentração salina.",
    topic: "Independência de Salinidade e Temperatura na Haste EM"
  },
  {
    question: "No caso de utilização da Haste Retrátil (Retractable Probe) no Odômetro AGI-LOG, como o conjunto mecânico garante a segurança da embarcação durante a operação de recolhimento no mar?",
    options: [
      "Através do emprego de uma válvula de fundo (sluice/sea valve) de esferas ou gaveta acoplada ao tubo de montagem, em conjunto com travas, hastes de guia e correntes de segurança que impedem a ejeção acidental pela pressão da água.",
      "Por meio de uma carga pirotécnica controlada por rádio que ejeta o sensor para fora da quilha em menos de 1 segundo quando o navio toca no fundo.",
      "Através de uma câmara de vácuo hidrostática que suga o sensor automaticamente para o interior do porão sempre que a velocidade ultrapassa 15 nós.",
      "Usando um anel inflável pneumático de borracha de pneu que veda o orifício do casco unicamente por pressão do compressor principal de ar."
    ],
    answer: "Através do emprego de uma válvula de fundo (sluice/sea valve) de esferas ou gaveta acoplada ao tubo de montagem, em conjunto com travas, hastes de guia e correntes de segurança que impedem a ejeção acidental pela pressão da água.",
    explanation: "A haste retrátil opera dentro de um caixão estanque provido de válvula de passagem plena (sea valve). Para inspecionar ou limpar a haste flutuando, o operador afrouxa a porca de engaxeta, puxa a haste para cima até a câmara intermediária com o auxílio das correntes e hastes de segurança (que evitam que a pressão da água empurre violentamente o tubo contra o técnico), fecha a válvula de fundo para estancar a água e, finalmente, retira o sensor por completo em segurança.",
    topic: "Segurança Mecânica e Válvula da Haste Retrátil"
  },
  {
    question: "Por que a Haste Fixa (estilo OTAN / NATO Fixed Probe) é construída de acordo com normas e flanges padronizados pelas especificações militares da OTAN?",
    options: [
      "Para garantir padronização, intercambiabilidade de componentes navais de defesa e máxima resistência estrutural contra choques balísticos, vibrações extremas e altas pressões hidrostáticas em navios de guerra e submarinos.",
      "Para permitir que a haste seja rosqueada diretamente no bujão de escoamento do cárter do motor de propulsão sem necessidade de perfurar o casco na quilha.",
      "Porque o padrão OTAN utiliza exclusivamente plástico polipropileno reciclado, tornando o sensor indetectável por minas magnéticas de fundo.",
      "Para que o sensor possa operar sem cabo de conexão elétrica, transmitindo os sinais de milivolts por wi-fi diretamente através do aço do casco."
    ],
    answer: "Para garantir padronização, intercambiabilidade de componentes navais de defesa e máxima resistência estrutural contra choques balísticos, vibrações extremas e altas pressões hidrostáticas em navios de guerra e submarinos.",
    explanation: "A padronização OTAN (NATO) especifica perfis de furação, flanges, anéis de vedação, materiais não ferrosos de alta resistência mecânica e conectores estanques de grau militar. Isso garante que a Haste Fixa suporte condições extremas de combate, pressões hidrostáticas profundas (em aplicações submarinas) e ondas de choque provocadas por explosões subaquáticas sem apresentar rompimento estrutural ou infiltração no casco do navio.",
    topic: "Padronização Militar e Flange da Haste OTAN"
  },
  {
    question: "Qual é o fenômeno físico hidrodinâmico adverso que a Haste com Perfil de Barbatana (Fin Profile Probe) foi projetada para minimizar em embarcações de alta velocidade?",
    options: [
      "A cavitação hidrodinâmica, a turbulência excessiva e a formação de bolhas de ar sobre os eletrodos de contato, que causariam perda de sinal ou leituras de velocidade flutuantes e incorretas.",
      "A condensação de gelo polar ao redor do flange de bronze durante navegação no Círculo Ártico a 30 nós.",
      "A emissão de ecos de sonar indesejados que poderiam ser captados por submarinos hostis em águas profundas.",
      "A vibração magnética do casco que induziria correntes de Foucault na estrutura de proa da embarcação."
    ],
    answer: "A cavitação hidrodinâmica, a turbulência excessiva e a formação de bolhas de ar sobre os eletrodos de contato, que causariam perda de sinal ou leituras de velocidade flutuantes e incorretas.",
    explanation: "Em velocidades elevadas (acima de 25 nós, como em patrulhas e corvetas), sensores cilíndricos ou rombudos geram esteiras turbulentas e zonas de baixa pressão local que provocam cavitação (fervura da água por baixa pressão e bolhas de ar). Se essas bolhas passarem sobre os eletrodos, o contato elétrico é interrompido e a medição do odômetro falha. O perfil aerodinâmico/hidrodinâmico em forma de barbatana (fin profile) mantém o fluxo de água laminar e suave sobre os eletrodos mesmo em velocidades extremas.",
    topic: "Prevenção de Cavitação na Haste com Perfil de Barbatana"
  },
  {
    question: "Em que cenário de navegação ou arquitetura naval o Sensor Revés (Flush Mounted Probe / Sensor Almofada) apresenta sua maior vantagem técnica sobre as hastes projetadas?",
    options: [
      "Em navegação em águas rasas, rios com detritos flutuantes e áreas com gelo onde sensores salientes seriam arrancados, ou em cascos onde se exige arrasto hidrodinâmico absolutamente zero.",
      "Em veleiros oceânicos que necessitam medir simultaneamente a velocidade e a temperatura da água na ponta do mastro de vela.",
      "Em navios petroleiros estacionados em fundeio para medir a velocidade da correnteza marinha a 50 metros de profundidade sob a quilha.",
      "Em embarcações fluviais com casco de madeira que não possuem aterramento elétrico em suas cavernas de cavername."
    ],
    answer: "Em navegação em águas rasas, rios com detritos flutuantes e áreas com gelo onde sensores salientes seriam arrancados, ou em cascos onde se exige arrasto hidrodinâmico absolutamente zero.",
    explanation: "O Sensor Revés (almofada ou flush mounted) é montado em um nicho faceado perfeitamente rente à superfície externa do casco do navio, sem nenhuma parte protuberante apontando para a água. Assim, é imune ao arrasto mecânico e impossível de ser quebrado por troncos de árvores, blocos de gelo ou encalhes leves em bancos de areia em águas rasas.",
    topic: "Vantagem Operacional do Sensor Revés (Flush Mounted)"
  },
  {
    question: "Por que a Haste Fixa do Odômetro AGI-LOG possui especificações técnicas e calibrações dedicadas com extrema precisão na faixa de baixas velocidades de 0 a 10 nós?",
    options: [
      "Porque em baixas velocidades (críticas para manobras portuárias, atracação, posições de combate e navegação restrita) a força eletromotriz induzida é de ínfima magnitude (milivolts muito baixos), exigindo pré-amplificação de alta estabilidade e baixo ruído para garantir exatidão de ±0,1 nó.",
      "Porque abaixo de 10 nós a água do mar perde sua condutividade elétrica natural e o conversor A/D precisa injetar 50 Volts nos eletrodos para obter retorno.",
      "Porque em baixas rotações de hélice a bobina magnética da haste desliga automaticamente para economizar a carga do banco de baterias do passadiço.",
      "Porque o microprocessador Módulo 02 só calcula a média móvel de distância quando o navio ultrapassa a barreira sônica de 10 nós."
    ],
    answer: "Porque em baixas velocidades (críticas para manobras portuárias, atracação, posições de combate e navegação restrita) a força eletromotriz induzida é de ínfima magnitude (milivolts muito baixos), exigindo pré-amplificação de alta estabilidade e baixo ruído para garantir exatidão de ±0,1 nó.",
    explanation: "A navegação de alta precisão em manobras delicadas de porto, canais estreitos, aproximação de plataformas ou operações militares exige conhecimento exato e contínuo do deslocamento do navio entre 0 e 10 nós. Como o sinal gerado é diretamente proporcional à velocidade ($E = B \cdot L \cdot v$), em 1 nó a tensão induzida nos eletrodos é extremamente pequena. O sistema AGI-LOG garante nessa faixa baixa um pré-processamento de precisão ultraestável no Módulo 04 para não mascarar a leitura com ruído térmico.",
    topic: "Alta Precisão da Haste na Faixa Baixa (0 a 10 nós)"
  },
  {
    question: "Como deve ser constituída a blindagem e a fiação do cabo de interligação entre a Haste no casco do navio e a S.D.T.U. no passadiço?",
    options: [
      "O cabo dos eletrodos deve ser par trançado e blindado com malha de aterramento contínua ligada corretamente à referência do sistema, para evitar a indução de ruídos eletromagnéticos de radares, rádios e cabos de força adjacentes no navio.",
      "Pode ser utilizado fio de instalação elétrica comum sem blindagem de cobre, desde que seja passado dentro de eletroduto plástico de PVC não flexível.",
      "Deve ser obrigatoriamente fibra óptica de vidro de 16 núcleos para conduzir a corrente alternada de +30V da bobina de excitação marinha.",
      "A fiação deve ser composta de fios coaxiais abertos com malha exposta para captar o campo magnético terrestre como referência de azimute."
    ],
    answer: "O cabo dos eletrodos deve ser par trançado e blindado com malha de aterramento contínua ligada corretamente à referência do sistema, para evitar a indução de ruídos eletromagnéticos de radares, rádios e cabos de força adjacentes no navio.",
    explanation: "Os eletrodos da haste conduzem sinais na faixa de milivolts a longas distâncias (desde o porão de quilha até o passadiço superior). Se esse cabo não possuir blindagem eficaz com par trançado perfeitamente aterrado na caixa de junção e no chassi da SDTU, ele funcionará como uma antena, captando interferências severas de radares de bordo, transmissores de rádio HF/VHF e cabos de energia AC de 440V, o que corromperia totalmente a medição da velocidade da água.",
    topic: "Blindagem e Aterramento da Fiação da Haste"
  },

  // ============================================================================
  // SEÇÃO 9: DESTRINCHANDO CONTROLES, TECLAS, DIMMER E PARTIDA (Q61-Q68)
  // ============================================================================
  {
    question: "Dentro das funcionalidades selecionáveis pela tecla MODE na S.D.T.U., qual é a finalidade operacional e técnica específica do modo `SIMULATION` (Simulação)?",
    options: [
      "Permitir que o operador ou técnico gere internamente velocidades artificiais programáveis para verificar a resposta dos mostradores, testar saídas analógicas/pulsadas e validar equipamentos integrados (como Radar ARPA e ECDIS) com o navio parado no porto ou sem sinal da haste.",
      "Simular uma avaria catastrófica no microprocessador para verificar se a sirene de abandono de navio dispara automaticamente após 3 minutos.",
      "Aumentar a tensão da bobina da haste para 220 Volts por 10 segundos com a finalidade de expulsar cardumes de peixes da quilha.",
      "Calcular em tempo real a profundidade do oceano baseado na simulação das ondas e marés captadas pelo sensor na superfície."
    ],
    answer: "Permitir que o operador ou técnico gere internamente velocidades artificiais programáveis para verificar a resposta dos mostradores, testar saídas analógicas/pulsadas e validar equipamentos integrados (como Radar ARPA e ECDIS) com o navio parado no porto ou sem sinal da haste.",
    explanation: "O modo `SIMULATION` (acionado via tecla MODE) desconecta logicamente a leitura da haste submersa e permite inserir pelo teclado uma velocidade simulada fixa ou variável. É um recurso inestimável de diagnóstico e treinamento para validar o funcionamento do próprio display da SDTU e para testar se os radares anticolisão (ARPA), registradores de viagem (VDR) e repetidores de passadiço estão recebendo corretamente as sentenças de velocidade NMEA 0183 e pulsos sem precisar que o navio saia ao mar.",
    topic: "Modo SIMULATION da Tecla MODE"
  },
  {
    question: "Em embarcações equipadas com mais de um sensor no casco (por exemplo, Sensor de Proa e Sensor de Popa, ou Haste Retrátil + Haste Fixa), qual é o papel da tecla PROBE no painel da S.D.T.U.?",
    options: [
      "Permitir ao operador selecionar de forma rápida qual dos sensores montados no casco (Probe 1, Probe 2, etc.) será a fonte ativa do sinal hidrodinâmico processado para a leitura corrente da velocidade e distância.",
      "Desligar fisicamente a alimentação geral de todos os circuitos eletrônicos da casa de máquinas durante manobras de emergência.",
      "Acionar a limpeza hidráulica automática com jatos de água doce sobre os eletrodos da haste sem a intervenção de marinheiros.",
      "Calcular a distância exata em metros entre a proa do navio e a boia de sinalização do canal de navegação mais próximo."
    ],
    answer: "Permitir ao operador selecionar de forma rápida qual dos sensores montados no casco (Probe 1, Probe 2, etc.) será a fonte ativa do sinal hidrodinâmico processado para a leitura corrente da velocidade e distância.",
    explanation: "A tecla PROBE atua na comutação das entradas de sensores no sistema. Navios de grande porte ou militares frequentemente instalam dois ou mais sensores de velocidade (ex: um perto da proa para águas profundas e outro na popa ou centro para manobras, ou sensor de bombordo/boreste para compensar adernamento). A tecla PROBE permite ao oficial selecionar qual sensor está enviando o sinal ativo ou comutar em caso de avaria ou incrustação de uma das hastes.",
    topic: "Seleção Multi-Sensor através da Tecla PROBE"
  },
  {
    question: "Por que a tecla CURVE da S.D.T.U. permite selecionar e ajustar múltiplas curvas de calibração hidrodinâmica na memória do microprocessador do Odômetro AGI-LOG?",
    options: [
      "Para compensar de forma matemática e precisa as não linearidades da Camada Limite (Boundary Layer) da água ao redor do casco em diferentes calados do navio (ex: navio carregado em calado máximo vs navio em lastro) e faixas de velocidade.",
      "Para alterar a tonalidade de cor dos LEDs do painel frontal entre verde esmeralda para o dia e vermelho escuro para navegação noturna.",
      "Para mudar a escala do hodômetro de distância entre milhas náuticas marinhas e quilômetros terrestres padrão aeronáutico.",
      "Para programar o horário exato em que a S.D.T.U. deve entrar no modo de hibernação profunda para poupar baterias durante a madrugada."
    ],
    answer: "Para compensar de forma matemática e precisa as não linearidades da Camada Limite (Boundary Layer) da água ao redor do casco em diferentes calados do navio (ex: navio carregado em calado máximo vs navio em lastro) e faixas de velocidade.",
    explanation: "A hidrodinâmica ao redor de um casco de navio é complexa: a espessura e velocidade da camada limite de água que flui junto à quilha variam drasticamente dependendo se o navio está leve (em lastro, com pouco calado) ou pesado (carregado até a linha d'água máxima), bem como entre baixas e altas velocidades. A tecla CURVE permite armazenar e comutar entre curvas de calibração multiponto na CPU para garantir exatidão absoluta em qualquer condição de calado da embarcação.",
    topic: "Compensação de Camada Limite através da Tecla CURVE"
  },
  {
    question: "Além de modular o brilho dos mostradores digitais frontais da S.D.T.U., qual é a função estendida do circuito do DIMMER DISPLAY para o ambiente operacional de navegação do navio?",
    options: [
      "Controlar de forma sincronizada a intensidade luminosa dos LEDs de alarme/status e dos mostradores dos repetidores remotos compatíveis de passadiço, preservando a visão noturna adaptada do oficial de quarto durante a escuta à noite.",
      "Desligar automaticamente a alimentação do transformador de +30V da haste na água quando a luz do sol atinge o sensor crepuscular do mastro.",
      "Aumentar o volume da sirene de alarme sonoro na mesma proporção em que a iluminação da sala do passadiço é reduzida no anoitecer.",
      "Girar o painel frontal da S.D.T.U. em 45 graus para facilitar a visualização do display pelo timoneiro sentado na cadeira de governo."
    ],
    answer: "Controlar de forma sincronizada a intensidade luminosa dos LEDs de alarme/status e dos mostradores dos repetidores remotos compatíveis de passadiço, preservando a visão noturna adaptada do oficial de quarto durante a escuta à noite.",
    explanation: "No passadiço de um navio durante a navegação noturna em mar aberto, qualquer fonte de luz intensa ou ofuscante prejudica severamente a visão noturna adaptada (escotópica) do oficial de quarto e da equipe de navegação que procura por boias, faróis ou outros navios. O DIMMER DISPLAY permite a atenuação suave até níveis muito tênues, tanto dos displays da S.D.T.U. quanto de repetidores interligados, sem comprometer a leitura nítida de dia sob sol forte.",
    topic: "Preservação da Visão Noturna pelo DIMMER DISPLAY"
  },
  {
    question: "O que acontece com o registro de milhas acumuladas no mostrador de distância (Hodômetro / Distance Display) se a S.D.T.U. for desligada ou se ocorrer uma queda total de energia na embarcação?",
    options: [
      "O valor acumulado de distância em milhas é preservado com segurança em memória não volátil (EPROM/EEPROM ou RAM suportada por bateria interna no Módulo 02), não sendo zerado pela falta de energia.",
      "O hodômetro é zerado automaticamente de volta para `00000.00` milhas assim que a tensão AC cai abaixo de 90 Volts.",
      "O mostrador congela o último valor, mas ao religar a S.D.T.U., subtrai automaticamente 10 milhas como margem de segurança de erro de navegação.",
      "A distância acumulada é transferida via rádio para o satélite Inmarsat e apagada permanentemente da memória local de bordo."
    ],
    answer: "O valor acumulado de distância em milhas é preservado com segurança em memória não volátil (EPROM/EEPROM ou RAM suportada por bateria interna no Módulo 02), não sendo zerado pela falta de energia.",
    explanation: "O hodômetro de distância (Distance Display) é o documento eletrônico da totalização da viagem do navio, sendo usado na navegação estimada e no registro de manutenção. Por projeto, a CPU (Módulo 02) armazena em tempo real cada milha percorrida em memória não volátil ou suportada por bateria com autonomia de longa duração, garantindo que o acumulador não se perca durante desligamentos de manutenção ou blecautes de bordo.",
    topic: "Retenção de Memória do Hodômetro de Distância"
  },
  {
    question: "Como são formatadas as indicações numéricas e suas resoluções decimais nos mostradores de Velocidade (Speed) e Distância (Distance) do painel frontal da S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "O display de velocidade indica com resolução em décimos ou centésimos de nó (ex: `18.5` nós), enquanto o display de distância acumula e totaliza em milhas náuticas com casas decimais programáveis e capacidade de reset ou bloqueio.",
      "O display de velocidade exibe apenas valores inteiros em metros por segundo (ex: `10` m/s), e o display de distância exibe apenas quilômetros inteiros sem vírgula.",
      "Ambos os mostradores utilizam códigos binários de luz verde e vermelha que devem ser convertidos manualmente pela tabela do diário de bordo.",
      "A velocidade é exibida na forma de gráfico de barras analógico móvel, e a distância é mostrada por ponteiro mecânico em escala de 0 a 100 milhas."
    ],
    answer: "O display de velocidade indica com resolução em décimos ou centésimos de nó (ex: `18.5` nós), enquanto o display de distância acumula e totaliza em milhas náuticas com casas decimais programáveis e capacidade de reset ou bloqueio.",
    explanation: "Os displays de LED de 7 segmentos de alta visibilidade da S.D.T.U. fornecem leitura direta e exata. A velocidade (Speed Through Water) apresenta décimos ou centésimos de nó de resolução (indicando inclusive velocidades de marcha à ré / astern com sinal negativo quando configurável), e o totalizador de distância (Distance) apresenta de 6 a 8 dígitos acumulando milhas náuticas navegadas desde a última reinicialização autorizada.",
    topic: "Resolução Decimal dos Displays de Velocidade e Distância"
  },
  {
    question: "Durante os procedimentos de partida do sistema AGI-LOG em navio equipado com Haste Retrátil, qual é a verificação física fundamental e prioritária antes do acionamento da chave principal?",
    options: [
      "Verificar se a haste retrátil foi abaixada e inserida por completo através da válvula de fundo na posição correta de trabalho na água e se a trava mecânica de segurança está firmemente travada.",
      "Inspecionar se a mangueira de ar comprimido da proa está acoplada diretamente aos terminais de milivolts para pressurizar o cabo do sensor.",
      "Desparafusar a tampa traseira da caixa de alumínio e injetar spray lubrificante WD-40 diretamente sobre a memória EPROM do Módulo 02.",
      "Soltar todas as correntes de segurança da válvula de fundo para que o sensor flutue livremente no porão caso haja adernamento da embarcação."
    ],
    answer: "Verificar se a haste retrátil foi abaixada e inserida por completo através da válvula de fundo na posição correta de trabalho na água e se a trava mecânica de segurança está firmemente travada.",
    explanation: "Se a chave da S.D.T.U. for ligada com o sensor recolhido dentro da câmara da válvula de fundo no porão (ou seja, sem contato com o fluxo de água do mar aberta e cercado por metal), o autoteste inicial ou a indicação de velocidade indicarão falha de sensor (`FAIL` / erro de sinal) ou velocidade zero com ruído severo. Além disso, garantir o travamento mecânico da haste abaixada evita o acidente de o sensor ser empurrado para dentro pela força hidrodinâmica ao navio zarpar.",
    topic: "Verificação Física da Haste Retrátil na Partida"
  },
  {
    question: "Qual é o comportamento exato da transição de energia no Módulo 08 (Fonte de Alimentação) quando ocorre a interrupção súbita da rede AC principal de 115 ou 230 Volts do navio?",
    options: [
      "O Módulo 08 comuta automaticamente e sem tempo de interrupção (zero break) para a entrada auxiliar de 24 V DC do banco de baterias de emergência do passadiço, mantendo o odômetro em operação contínua e acionando o alarme de falha AC.",
      "A S.D.T.U. desliga imediatamente todas as saídas repetidoras de passadiço e passa a exibir uma contagem regressiva de 10 minutos para autodesligamento final.",
      "O Módulo 08 dispara um micro-gerador hidráulico acoplado ao cabo da haste para gerar eletricidade a partir da água em movimento no casco.",
      "O sistema entra em curto deliberado no barramento principal para queimar o fusível de entrada de bateria, evitando sobretensão nos microprocessadores."
    ],
    answer: "O Módulo 08 comuta automaticamente e sem tempo de interrupção (zero break) para a entrada auxiliar de 24 V DC do banco de baterias de emergência do passadiço, mantendo o odômetro em operação contínua e acionando o alarme de falha AC.",
    explanation: "Para garantir a segurança da navegação e não deixar o radar ARPA nem o ECDIS cegos sem dados de velocidade durante um blecaute do navio, a fonte de alimentação do AGI-LOG (Módulo 08) possui entradas independentes e comutação automática sem interrupção de serviço. O circuito comuta instantaneamente para a rede de 24 V DC das baterias e sinaliza a avaria na alimentação AC, continuando a excitar a bobina no mar e a calcular a velocidade com exatidão.",
    topic: "Comutação Automática AC/DC no Módulo 08"
  },

  // ============================================================================
  // SEÇÃO 10: DESTRINCHANDO BIT, CALIBRAÇÃO E MANUTENÇÃO (Q69-Q73)
  // ============================================================================
  {
    question: "Como é executado na prática da navegação técnica o procedimento tradicional da 'Milha Medida' (Measured Mile) para calibrar o fator de correção hidrodinâmico na S.D.T.U. do Odômetro AGI-LOG?",
    options: [
      "O navio percorre uma distância referenciada exata de 1 milha náutica entre marcos de terra (ou via DGPS de precisão) em ambos os sentidos (ida e volta) para anular o efeito da correnteza marinha; compara-se a média das velocidades lidas na S.D.T.U. com a velocidade real, inserindo o fator de correção resultante através do teclado no modo CALIBRATION/CURVE.",
      "O técnico despeja 1 litro de água salgada calibrada com sal de cozinha em um balde no porão e mergulha a haste, girando o parafuso do Módulo 04 até ler 10 milhas no display.",
      "A tripulação estica um cabo de aço de 1 milha náutica preso na popa do navio e reboca uma boia até que o cabo se rompa por tração mecânica a 15 nós.",
      "O navio para completamente os motores ao largo do porto e espera a maré encher por 6 horas enquanto o microprocessador autocalibra a gravidade local da Terra."
    ],
    answer: "O navio percorre uma distância referenciada exata de 1 milha náutica entre marcos de terra (ou via DGPS de precisão) em ambos os sentidos (ida e volta) para anular o efeito da correnteza marinha; compara-se a média das velocidades lidas na S.D.T.U. com a velocidade real, inserindo o fator de correção resultante através do teclado no modo CALIBRATION/CURVE.",
    explanation: "A calibração definitiva de um odômetro eletromagnético compensa as perturbações reais do casco na água. No teste de Milha Medida (ou com DGPS RTK de alta precisão), navegar em rumos opostos (ex: rumo Norte e depois rumo Sul) é essencial para cancelar matematicamente o vetor da corrente marítima local ($V_{real} = (V_{ida} + V_{volta})/2$). A relação entre essa velocidade real e a lida pelo odômetro determina o coeficiente/fator de escala que é gravado no modo CAL da CPU do Módulo 02.",
    topic: "Procedimento da Milha Medida na Calibração"
  },
  {
    question: "Como o Circuito de Teste Integrado (BIT/BITE) do Odômetro AGI-LOG informa visualmente ao técnico sobre a localização e o tipo de defeito encontrado em uma placa interna da S.D.T.U.?",
    options: [
      "Apresentando códigos numéricos ou mensagens de erro de teste específicas nos displays digitais (ex: `ERR 02`, `FAIL`, etc.) e acionando LEDs de alarme em vermelho que identificam diretamente qual cartão modular ou circuito (CPU, A/D ou Haste) está com falha.",
      "Emitindo sinais de fumaça colorida através da grade de ventilação lateral do chassi para indicar que os capacitores de tântalo sofreram avaria térmica.",
      "Desligando instantaneamente toda a iluminação do passadiço do navio por 5 segundos sempre que um cartão falha na leitura de memória RAM.",
      "Imprimindo um relatório em fita de papel térmico de 80 linhas através de uma mini-impressora embutida dentro do conector de fundo do Módulo 01."
    ],
    answer: "Apresentando códigos numéricos ou mensagens de erro de teste específicas nos displays digitais (ex: `ERR 02`, `FAIL`, etc.) e acionando LEDs de alarme em vermelho que identificam diretamente qual cartão modular ou circuito (CPU, A/D ou Haste) está com falha.",
    explanation: "A inteligência do BIT (Built-In Test) no Odômetro AGI-LOG foi projetada para que o oficial de quarto ou eletricista de bordo não precise de ferramentas complexas para localizar o problema. Ao rodar o BIT (seja ao ligar ou pressionando a tecla MODE -> TEST), a CPU testa memórias, barramentos e conversores A/D e D/A. Se um módulo não responde corretamente, o display numérico mostra o código da falha e o LED correspondente acende no painel frontal ou na própria borda da placa avariada.",
    topic: "Indicação de Códigos e LEDs de Erro pelo BIT"
  },
  {
    question: "Que conjunto de ações práticas caracteriza estritamente a Manutenção por Diagnóstico em Nível Baixo executada pela tripulação do navio sem recorrer a instrumentos externos de laboratório?",
    options: [
      "Acionar o autoteste BIT pelo teclado frontal, observar as indicações dos LEDs e códigos de display, inspecionar visualmente os fusíveis do Módulo 08 e os conectores externos e identificar qual módulo modular avariado deve ser trocado pelo sobressalente.",
      "Desconectar o cabo do sensor de quilha e medir com um megômetro de 5.000 Volts a isolação das trilhas de cobre do barramento backplane do chassi.",
      "Retirar os transistores de potência e amplificadores operacionais do Módulo 04 com ferro de solda na mesa de navegação e testar o ganho Beta dos semicondutores.",
      "Desmontar o transformador toroidal do Módulo 08 e rebobinar o enrolamento secundário de +30V manualmente utilizando fio de cobre esmaltado calibre 22."
    ],
    answer: "Acionar o autoteste BIT pelo teclado frontal, observar as indicações dos LEDs e códigos de display, inspecionar visualmente os fusíveis do Módulo 08 e os conectores externos e identificar qual módulo modular avariado deve ser trocado pelo sobressalente.",
    explanation: "A Manutenção por Diagnóstico em Nível Baixo é o primeiro escalão de suporte técnico naval. Sua doutrina baseia-se na exploração rápida do autoteste do equipamento (BITE) e verificação dos itens físicos óbvios (fusíveis, cabos soltos, oxidação ou alarme visual) para segregar o defeito até o nível de cartão (SRU - Shop Replaceable Unit) e trocá-lo em poucos minutos, restaurando a operacionalidade do navio no mar.",
    topic: "Ações da Manutenção em Nível Baixo (Tripulação)"
  },
  {
    question: "Quando um defeito persistente na S.D.T.U. exige Manutenção por Diagnóstico em Nível Alto com a embarcação no porto ou sem sinal de mar, que equipamento de teste especializado é conectado às entradas do sensor?",
    options: [
      "Um Simulador de Haste / Caixa de Teste de Milivolts (Probe Simulator), que injeta tensões diferenciais AC calibradas exatas (simulando ex: 10, 15 ou 20 nós) para verificar o ganho do Conversor A/D Módulo 04 e a resposta do microprocessador independentemente da água do mar.",
      "Um gerador de micro-ondas de 10 GHz conectado diretamente aos terminais do Módulo 08 para verificar a reatância capacitiva dos diodos retificadores.",
      "Uma bateria automotiva de 12V e 60 Amperes conectada nos terminais dos eletrodos para testar se o barramento de +5V do backplane suporta curto-circuito térmico.",
      "Um frequencímetro óptico a laser apontado para os mostradores frontais de LED para contar a taxa de piscada dos segmentos digitais na velocidade sônica."
    ],
    answer: "Um Simulador de Haste / Caixa de Teste de Milivolts (Probe Simulator), que injeta tensões diferenciais AC calibradas exatas (simulando ex: 10, 15 ou 20 nós) para verificar o ganho do Conversor A/D Módulo 04 e a resposta do microprocessador independentemente da água do mar.",
    explanation: "Na Manutenção em Nível Alto, técnicos especializados ou equipes de base utilizam o Simulador de Haste (Probe Simulator). Como a haste na água gera milivolts proporcionais à velocidade por indução da Lei de Faraday, o simulador substitui a haste real, recebendo a tensão de excitação da bobina (+30V AC) do odômetro e retornando um sinal preciso em milivolts simulando velocidades estáticas. Isso permite aferir com perfeição osciloscópica se a falha está no conversor A/D, nas memórias ou na fiação do navio.",
    topic: "Uso do Simulador de Haste em Nível Alto"
  },
  {
    question: "Após a substituição de um módulo avariado a bordo do navio (Manutenção Corretiva modular de 1º escalão), qual é o destino e o tratamento técnico conferido ao cartão eletrônico defeituoso na oficina de terra?",
    options: [
      "O cartão é enviado a um laboratório ou oficina naval onde passa por Manutenção Corretiva detalhada a nível de componente com osciloscópio, trocando-se os circuitos integrados, capacitores ou transistores avariados para calibrá-lo e devolvê-lo ao estoque de sobressalentes testados.",
      "O cartão defeituoso é imediatamente incinerado ou jogado no mar, pois circuitos integrados CMOS e memórias de navio não podem ser ressoldados sob nenhuma circunstância.",
      "O cartão é mergulhado por 24 horas em ácido sulfúrico para dissolver o verniz marinho e depois é banhado a ouro puro antes de voltar para o passadiço.",
      "O módulo é soldado permanentemente na caixa principal de disjuntores da casa de máquinas para funcionar como filtro passivo de harmônicas do gerador principal."
    ],
    answer: "O cartäo é enviado a um laboratório ou oficina naval onde passa por Manutenção Corretiva detalhada a nível de componente com osciloscópio, trocando-se os circuitos integrados, capacitores ou transistores avariados para calibrá-lo e devolvê-lo ao estoque de sobressalentes testados.",
    explanation: "O ciclo de vida logístico e de manutenção naval do AGI-LOG preserva os valiosos cartões modulares. A substituição a bordo garante um MTTR curto (navio operando). O cartão com avaria (ex: Módulo 04 ou 08) é encaminhado para a oficina de eletrônica de terra (2º/3º escalão), onde técnicos com manuais esquemáticos, injetores de sinal e estação de solda localizam o componente discreto exato que queimou (ex: um chip A/D ou capacitor de filtro), consertam, testam em bancada e restabelecem o cartão no estoque de spare parts.",
    topic: "Reparo a Nível de Componente na Oficina de Terra"
  },

  // ============================================================================
  // SEÇÃO 11: DESTRINCHANDO CIRCUITOS DOS MÓDULOS 01 A 12 (Q74-Q85)
  // ============================================================================
  {
    question: "De que forma o microprocessador do Módulo 02 utiliza as informações de hardware gravadas ou chaveadas (jumpers/chaves DIP) no Módulo 01 (Cartão de Identificação / ID Card) durante a inicialização do sistema?",
    options: [
      "O Módulo 01 informa à CPU o modelo exato do odômetro, os parâmetros de calibração padrão do casco, a taxa de pulsos configurada para o navio e a presença de módulos opcionais instalados, adaptando o software do sistema automaticamente ao hardware existente sem reescrever a EPROM.",
      "O Módulo 01 injeta 115 Volts diretamente nas linhas de endereço do microprocessador para obrigar a CPU a rodar o código na velocidade máxima de 100 MHz.",
      "O cartão de identificação atua apenas como um cartão magnético de ponto, liberando o teclado da S.D.T.U. somente quando o capitão digita sua senha pessoal.",
      "O Módulo 01 desliga fisicamente o barramento de dados do backplane até que o sensor na água detecte que a temperatura do mar subiu para mais de 5 °C."
    ],
    answer: "O Módulo 01 informa à CPU o modelo exato do odômetro, os parâmetros de calibração padrão do casco, a taxa de pulsos configurada para o navio e a presença de módulos opcionais instalados, adaptando o software do sistema automaticamente ao hardware existente sem reescrever a EPROM.",
    explanation: "O Módulo 01 (ID Card) funciona como a 'carteira de identidade' do odômetro no navio. Como o mesmo firmware de EPROM no Módulo 02 pode ser usado em dezenas de navios diferentes (veleiros, fragatas, petroleiros, com sensores retráteis ou fixos), o Módulo 01 informa ao microprocessador via barramento no boot quais são as opções contratadas, tipo de haste, fator de divisão de pulsos e configuração, permitindo modularidade universal e plug-and-play.",
    topic: "Função de Configuração do Módulo 01 (ID Card)"
  },
  {
    question: "Além do chip microprocessador principal, dos buffers de barramento e das memórias, que circuito de segurança de hardware é vital no Módulo 02 para prevenir travamentos de software no mar?",
    options: [
      "O circuito temporizador 'Watchdog Timer' (Cão de Guarda) em conjunto com o cristal oscilador mestre, que reinicia automaticamente o microprocessador caso ocorra um travamento na execução do código provocado por ruído elétrico severo ou surto transiente na rede do navio.",
      "Um relé térmico bimetálico de 100 Amperes que desliga a chave principal do passadiço se o microprocessador demorar mais de 2 segundos para calcular uma raiz quadrada.",
      "Um circuito receptor de rádio AM/FM que sintoniza a frequência horária do observatório de Greenwich para sincronizar o clock da CPU por antena de ferrite.",
      "Um ventilador mecânico acoplado ao pino de reset que sopra ar frio sobre o chip da CPU toda vez que a velocidade do navio excede 20 nós."
    ],
    answer: "O circuito temporizador 'Watchdog Timer' (Cão de Guarda) em conjunto com o cristal oscilador mestre, que reinicia automaticamente o microprocessador caso ocorra um travamento na execução do código provocado por ruído elétrico severo ou surto transiente na rede do navio.",
    explanation: "Em ambientes navais críticos, surtos eletromagnéticos de radares ou relampejos podem ocasionalmente corromper o ponteiro de programa de um microprocessador, fazendo o software travar em um loop infinito. O 'Watchdog Timer' no Módulo 02 é um contador de hardware que precisa ser zerado periodicamente pela CPU; se a CPU travar e parar de zerar o watchdog, o circuito gera um pulso de RESET automático em milissegundos, destravando o odômetro imediatamente sem intervenção do operador.",
    topic: "Watchdog Timer e Segurança do Módulo 02"
  },
  {
    question: "Por que a Memória EPROM (ou EEPROM/Flash nas versões avançadas) do Módulo 02 é a tecnologia ideal para armazenar o sistema operacional do odômetro e as curvas hidrodinâmicas da embarcação?",
    options: [
      "Porque retém o programa de forma permanente, estável e não volátil por anos sem necessidade de energia elétrica, ao mesmo tempo em que permite a regravação ou atualização controlada quando o navio passa por modificações no casco ou calibração em dique seco.",
      "Porque a memória EPROM é líquida e se autodestrói instantaneamente caso um navio inimigo tente capturar o equipamento eletrônico de navegação durante um conflito.",
      "Porque a EPROM opera com tensões alternadas de 115 VAC diretamente em seus pinos de endereço, dispensando o uso do transformador do Módulo 08.",
      "Porque a velocidade de leitura da EPROM é 1000 vezes mais rápida que a de uma memória RAM dinâmica, permitindo calcular o efeito Doppler sônico em nanosegundos."
    ],
    answer: "Porque retém o programa de forma permanente, estável e não volátil por anos sem necessidade de energia elétrica, ao mesmo tempo em que permite a regravação ou atualização controlada quando o navio passa por modificações no casco ou calibração em dique seco.",
    explanation: "A EPROM (Erasable Programmable Read-Only Memory) garante que as rotinas complexas de cálculo da Lei de Faraday, autoteste BIT e tabelas de curvas do Odômetro AGI-LOG não se percam quando o equipamento é desligado. Nas manutenções maiores ou evoluções de software, a EPROM pode ser apagada por luz ultravioleta (ou reprogramada via chave de calibração se EEPROM), atualizando o odômetro com máxima confiabilidade militar.",
    topic: "Retenção Não Volátil na EPROM do Módulo 02"
  },
  {
    question: "Como o Módulo 02 (Microprocessador e Memórias) protege a Memória RAM e seus dados vitais (como o acumulador de milhas navegadas e parâmetros temporários) durante a desenergização da S.D.T.U.?",
    options: [
      "Através da utilização de memórias RAM estáticas de baixíssimo consumo (CMOS RAM) alimentadas em standby por uma bateria de lítio ou supercapacitor montado diretamente na placa do Módulo 02, mantendo os dados intactos por anos de desligamento.",
      "Gravando todos os bits da RAM em um disco rígido magnético de pratos giratórios de 5.400 RPM alojado dentro do compartimento à prova d'água da caixa.",
      "Imprimindo o conteúdo da memória RAM em um cartão perfurado que deve ser reintroduzido na fenda do Módulo 01 toda vez que o operador ligar o equipamento.",
      "Transferindo a carga da RAM para as bobinas do motor de passo do repetidor analógico do passadiço através do barramento de +30 Volts."
    ],
    answer: "Através da utilização de memórias RAM estáticas de baixíssimo consumo (CMOS RAM) alimentadas em standby por uma bateria de lítio ou supercapacitor montado diretamente na placa do Módulo 02, mantendo os dados intactos por anos de desligamento.",
    explanation: "Enquanto a EPROM guarda o programa fixo, a RAM armazena as variáveis que mudam a cada segundo, principalmente o totalizador contínuo do hodômetro de distância (milhas percorridas). Para que esse número não zere quando o navio desliga a chave geral no porto, a RAM estática (CMOS) no Módulo 02 recebe uma tensão contínua de suporte (backup) de uma bateria de longa duração ou supercapacitor embarcado na própria placa-mãe do cartão.",
    topic: "Proteção com Bateria de Backup na RAM do Módulo 02"
  },
  {
    question: "Como o Módulo 03 (Cartão de Interface de Controle de Temporização / Interface com Teclado e Display) gerencia a leitura das 5 teclas momentâneas do painel sem sobrecarregar a CPU com falsos contatos mecânicos?",
    options: [
      "Realiza a varredura multiplexada dos botões e aplica circuitos ou rotinas de filtro anti-rebote (debouncing), eliminando as vibrações dos contatos mecânicos e entregando à CPU do Módulo 02 apenas interrupções digitais limpas e exatas de tecla pressionada.",
      "Aplica uma tensão contínua de 115 Volts nos botões do painel para que a centelha elétrica do toque solde temporariamente os contatos até o final do comando.",
      "Desliga o microprocessador principal por 5 segundos a cada toque de tecla para que a EPROM tenha tempo suficiente para resfriar antes de aceitar uma nova ordem.",
      "Utiliza válvulas de ar pneumáticas acopladas atrás de cada tecla para enviar pulsos de pressão sonora até os transdutores do conversor A/D."
    ],
    answer: "Realiza a varredura multiplexada dos botões e aplica circuitos ou rotinas de filtro anti-rebote (debouncing), eliminando as vibrações dos contatos mecânicos e entregando à CPU do Módulo 02 apenas interrupções digitais limpas e exatas de tecla pressionada.",
    explanation: "Teclas mecânicas geram ruídos eletromecânicos intensos de fechamento (bouncing) durante alguns milissegundos. Se o processador Módulo 02 lidasse diretamente com o teclado cru, um único toque na tecla MODE ou CURVE poderia ser interpretado como 10 ou 20 cliques rápidos. O Módulo 03 faz a temporização, multiplexação de varredura dos displays de LED e debouncing eletrônico do teclado, libertando a CPU para o cálculo hidrodinâmico contínuo.",
    topic: "Multiplexação e Debouncing no Módulo 03"
  },
  {
    question: "Sabendo que o sinal diferencial induzido na haste na água é da ordem de poucos milivolts e alta impedância, que circuitos analógicos especializados estão presentes no Módulo 04 (Conversor A/D) antes da digitalização?",
    options: [
      "Estágios pré-amplificadores de instrumentação de altíssima impedância de entrada, filtros analógicos passa-baixa e circuitos de rejeição de modo comum (CMRR) para eliminar ruídos da rede do navio e amplificar o sinal limpo antes de entregá-lo ao conversor A/D de precisão.",
      "Um transdutor piezoelétrico ultrassônico que converte a tensão DC em ondas sonoras audíveis que são captadas por um microfone de eletreto soldado na placa.",
      "Um transformador de alta tensão que eleva os milivolts da água para 10.000 Volts com a finalidade de acionar diodos varactores de tubo de raios catódicos.",
      "Um relé eletromagnético que vibra a 400 Hz para curtocircuitar os eletrodos com o terra do navio a cada segundo, zerando a carga salina acumulada."
    ],
    answer: "Estágios pré-amplificadores de instrumentação de altíssima impedância de entrada, filtros analógicos passa-baixa e circuitos de rejeição de modo comum (CMRR) para eliminar ruídos da rede do navio e amplificar o sinal limpo antes de entregá-lo ao conversor A/D de precisão.",
    explanation: "A conversão Analógico-Digital no Módulo 04 é uma obra de engenharia de precisão. O sinal em milivolts captado pelos eletrodos traz consigo ruídos de 50/60 Hz e potenciais galvânicos de modo comum. O Módulo 04 utiliza amplificadores de instrumentação diferenciais com elevado CMRR (Common Mode Rejection Ratio) e filtros ativos passa-baixa para limpar a onda de milivolts induzida pela água antes de digitalizá-la em palavras binárias exactas para a CPU.",
    topic: "Pré-Amplificação e Rejeição de Ruído no Módulo 04 (A/D)"
  },
  {
    question: "Qual é a razão técnica indispensável para que as saídas analógicas proporcionais à velocidade (ex: 4-20 mA ou 0-10 V) geradas pelos Módulos 05 e 06 (Conversores D/A) possuam isolação galvânica?",
    options: [
      "Para evitar que loops de aterramento (ground loops), diferenças de potencial elétrico entre consolas do passadiço ou curtos-circuitos em cabos de radares/repetidores externos retornem e danifiquem a S.D.T.U. ou distorçam a medição de milivolts na haste.",
      "Para que as saídas analógicas possam ser ligadas diretamente em rede elétrica AC de 230 Volts sem queimar os fusíveis de vidro do painel principal.",
      "Porque a isolação galvânica converte as correntes analógicas de 4-20 mA em feixes de raios laser visíveis que trafegam pelo ar até o radar anticolisão.",
      "Para impedir que o calor gerado pelos conversores D/A aqueça a bateria do microprocessador e cause evaporação do eletrólito de lítio no Módulo 02."
    ],
    answer: "Para evitar que loops de aterramento (ground loops), diferenças de potencial elétrico entre consolas do passadiço ou curtos-circuitos em cabos de radares/repetidores externos retornem e danifiquem a S.D.T.U. ou distorçam a medição de milivolts na haste.",
    explanation: "Em um navio, a consola do radar ARPA ou do ECDIS pode estar aterrada em um ponto do casco com potencial elétrico ligeiramente diferente do terra da S.D.T.U. Se os Módulos 05 e 06 enviassem o sinal de velocidade analógico sem isolação galvânica (acoplamento óptico ou por transformador de isolamento), correntes de terra circulariam pelos cabos do odômetro, introduzindo erros absurdos no conversor A/D da haste ou queimando as placas em caso de surto elétrico em outros equipamentos do passadiço.",
    topic: "Isolação Galvânica das Saídas D/A (Módulos 05 e 06)"
  },
  {
    question: "Além de fornecer saídas pulsadas proporcionais à distância (ex: 100 ou 200 pulsos/milha) para hodômetros e ECDIS, que contatos de relé de segurança fundamentais o Módulo 07 (Cartão de Saída Auxiliar) disponibiliza?",
    options: [
      "Contatos secos de relé dedicados ao Alarme de Falha do Sistema (System Fail Alarm) e, configuravelmente, a alarmes de limite de velocidade (alta/baixa velocidade ou profundidade compatível), que sinalizam à central de alarmes do passadiço caso ocorra qualquer avaria no odômetro.",
      "Contatos de potência de 100 Amperes para acionar automaticamente as bombas de porão e os motores de arriamento de botes salvavidas quando a velocidade excede 30 nós.",
      "Relés de alta frequência que conectam a antena parabólica de TV por satélite da tripulação ao barramento de áudio do microfone de ordens gerais da embarcação.",
      "Contatos que curtocircuitam as baterias de emergência de 24V com o chassi do navio para aquecer a água ao redor do sensor durante invernos rigorosos."
    ],
    answer: "Contatos secos de relé dedicados ao Alarme de Falha do Sistema (System Fail Alarm) e, configuravelmente, a alarmes de limite de velocidade (alta/baixa velocidade ou profundidade compatível), que sinalizam à central de alarmes do passadiço caso ocorra qualquer avaria no odômetro.",
    explanation: "O Módulo 07 (Saída Auxiliar / Pulsada) é a grande interface de saídas discretas do AGI-LOG. Além de enviar trens de pulsos de distância que fazem avançar contadores mecânicos ou sistemas eletrônicos em cada fração de milha navegada, ele incorpora os relés de vigilância de alarme (`FAIL ALARM`). Se o BIT detectar falha no sensor, no conversor ou perda de energia, o relé do Módulo 07 abre/fecha seus contatos secos, disparando a campainha visual e sonora no painel central de alarmes da navegação.",
    topic: "Contatos de Relé de Alarme no Módulo 07"
  },
  {
    question: "Durante a inspeção de manutenção de rotina ou corretiva sobre o Módulo 08 (Fonte de Alimentação), que sintomas técnicos em componentes devem ser verificados de imediato com osciloscópio e multímetro?",
    options: [
      "Verificar se as tensões reguladas (+5 V, ±12/15 V e +30 V da bobina) estão rigorosamente dentro da tolerância, se não há 'ripple' (ondulação AC residual) excessivo nos capacitores eletrolíticos e se os dissipadores térmicos não apresentam superaquecimento.",
      "Inspecionar se os diodos emissores de luz azul estão acesos com brilho máximo de 1000 lumens e se o transformador toroidal está resfriado por gel de silicone líquido congelado.",
      "Verificar se o cabo principal de 115 VAC está soldado diretamente na cápsula de metal do transistor de potência sem passar pelos fusíveis ou transformador de entrada.",
      "Medir a resistência entre o barramento de +5V e o terra com a S.D.T.U. ligada para confirmar que o multímetro indica exatamente zero ohms em curto absoluto."
    ],
    answer: "Verificar se as tensões reguladas (+5 V, ±12/15 V e +30 V da bobina) estão rigorosamente dentro da tolerância, se não há 'ripple' (ondulação AC residual) excessivo nos capacitores eletrolíticos e se os dissipadores térmicos não apresentam superaquecimento.",
    explanation: "A maioria das falhas intermitentes e comportamentos erráticos no microprocessador (Módulo 02) ou nas conversões analógicas da haste (Módulo 04) provém da degradação térmica e envelhecimento de capacitores de filtro no Módulo 08. Quando um capacitor eletrolítico da fonte seca ou perde capacidade, surge 'ripple' (ondulação AC) sobre o barramento de +5 V DC. O técnico com osciloscópio deve checar se a ondulação residual é mínima e se as tensões de referência são perfeitamente estáveis.",
    topic: "Inspeção de Ripple e Tensão no Módulo 08 (Fonte)"
  },
  {
    question: "Nos Módulos 09 e 10 (Cartões de Interface Digital / Saída Serial), qual é o formato internacional padronizado das sentenças de dados NMEA 0183 emitidas em RS-422 para transmitir a velocidade na água e a distância para o ECDIS e Radar?",
    options: [
      "Sentenças seriais ASCII que utilizam cabeçalhos padronizados marítimos de odômetro de água, tais como `$VDVHW` (Water Speed and Heading) para velocidade através da água e `$VDVLW` (Distance Traveled through Water) para o hodômetro de milhas acumuladas.",
      "Arquivos binários compactados no formato `.ZIP` ou `.PDF` transmitidos pela porta USB 3.0 do painel frontal a cada 24 horas de navegação ininterrupta.",
      "Pulsos analógicos de áudio em código Morse internacional com tons de 1.000 Hz transmitidos no canal 16 do rádio VHF do passadiço.",
      "Sentenças de radar meteorológico com prefixo `$WXRAD` que indicam a temperatura da atmosfera superior e a velocidade das nuvens sobre o mastro principal."
    ],
    answer: "Sentenças seriais ASCII que utilizam cabeçalhos padronizados marítimos de odômetro de água, tais como `$VDVHW` (Water Speed and Heading) para velocidade através da água e `$VDVLW` (Distance Traveled through Water) para o hodômetro de milhas acumuladas.",
    explanation: "A integração digital do passadiço (Integrated Bridge System - IBS) depende do protocolo NMEA 0183 (sobre padrão elétrico diferencial RS-422 de alta imunidade a ruído). Os Módulos 09 e 10 codificam em tempo real as medições contínuas da CPU em sentenças ASCII universalmente reconhecidas por qualquer fabricante naval: `$VDVHW` informando a velocidade em nós em relação à água (`STW`) e `$VDVLW` relatando as milhas náuticas totais e parciais percorridas desde o reset do hodômetro.",
    topic: "Sentenças NMEA 0183 ($VDVHW / $VDVLW) nos Módulos 09 e 10"
  },
  {
    question: "Como funciona na prática a saída do tipo 'Passo a Passo' (Step by Step / Sincro) disponibilizada pelos Módulos 09, 10 ou 11 para acionar repetidores mecânicos de ponteiro em navios clássicos ou militares?",
    options: [
      "O módulo gera sequências de comutação de tensão bifásicas ou trifásicas em relés de potência de estado sólido (ex: em 24V ou 35V DC) que energizam sucessivamente as bobinas do estator do motor de passo no repetidor, girando o ponteiro de velocidade com precisão mecânica sincronizada com a água.",
      "O módulo emite um jato de ar pneumático de 10 PSI em um tubo flexível que sopra diretamente sobre as pás de uma mini-turbina acoplada atrás do ponteiro do mostrador analógico.",
      "O módulo gira um cabo mecânico de aço de 50 metros de comprimento por meio de um motor elétrico no passadiço acoplado diretamente às engrenagens do repetidor de proa.",
      "O módulo aquece dois fios bimetálicos dentro do mostrador repetidor até que a dilatação térmica entorte o ponteiro para a posição exata de velocidade em nós."
    ],
    answer: "O módulo gera sequências de comutação de tensão bifásicas ou trifásicas em relés de potência de estado sólido (ex: em 24V ou 35V DC) que energizam sucessivamente as bobinas do estator do motor de passo no repetidor, girando o ponteiro de velocidade com precisão mecânica sincronizada com a água.",
    explanation: "Repetidores analógicos tradicionais (com mostrador de ponteiro e hodômetro mecânico de roletes no passadiço e asas) operam pelo sistema 'Step-by-Step' (Sincro-Passo). Para comandá-los sem perda de passos, os Módulos 09/10 ou cartões especiais embutem chaves eletrônicas (transistores de potência ou relés de estado sólido) que comutam os passos de bobina do repetidor na razão exata de avanço hidrodinâmico (ex: 1 passo por cada centésimo de milha), movendo o ponteiro instantaneamente sem lag.",
    topic: "Funcionamento da Saída Sincro/Passo (Step-by-Step)"
  },
  {
    question: "Por que a existência de posições livres ou expansíveis para os Módulos 11 e 12 no backplane confere uma vantagem estratégica ao Odômetro AGI-LOG em aplicações navais de defesa e frotas comerciais?",
    options: [
      "Porque permite a expansão modular plug-and-play e a customização do sistema com interfaces dedicadas (ex: cartões para múltiplas repetidoras em todas as estações de combate, canais extras de saídas pulsadas ou redes digitais militares) sem qualquer necessidade de reformar o gabinete ou o backplane principal do navio.",
      "Porque permite que a tripulação guarde cartas de baralho e ferramentas manuais dentro das fendas vazias do chassi durante longas travessias oceânicas no passadiço.",
      "Porque os slots 11 e 12 contêm aquecedores elétricos de 500 Volts que mantêm a temperatura da S.D.T.U. em 80 °C em águas equatoriais.",
      "Porque, se os módulos 01 a 10 forem removidos, o navio pode continuar navegando utilizando exclusivamente o Módulo 12 como bússola solar de emergência."
    ],
    answer: "Porque permite a expansão modular plug-and-play e a customização do sistema com interfaces dedicadas (ex: cartões para múltiplas repetidoras em todas as estações de combate, canais extras de saídas pulsadas ou redes digitais militares) sem qualquer necessidade de reformar o gabinete ou o backplane principal do navio.",
    explanation: "A filosofia de arquitetura aberta e modular da S.D.T.U. AGI-LOG prevê que cada classe de navio tenha exigências de interface únicas. Em um navio mercante simples, os Módulos 11 e 12 podem ficar como slots de reserva; já em um navio de guerra (fragata ou porta-aviões), esses slots são povoados por cartões customizados de alta segurança que distribuem saídas analógicas, pulsadas e digitais para centros de controle de tiro (FCS), radares táticos e dezenas de repetidores blindados ao longo de todo o casco.",
    topic: "Modularidade Estratégica e Expansão (Módulos 11 e 12)"
  },
  // ============================================================================
  // QUESTIONÁRIO DE DETALHAMENTO TÉCNICO: CAPÍTULO 3 - ODÔMETRO ELETROMAGNÉTICO AGI-LOG (Q1 A Q50)
  // ============================================================================
  // --- Princípios Básicos e Sensores ---
  {
    question: "Qual é a principal função do Odômetro AGI-LOG (SDTU)?",
    options: [
      "Medir a velocidade do navio em relação à água e a distância percorrida, transmitindo esses dados para repetidoras e sistemas de armas.",
      "Medir a profundidade do fundo marinho utilizando pulsos acústicos de eco-sonda e enviar os dados para a carta náutica eletrônica.",
      "Calcular a posição global por satélite e transmitir as coordenadas geográficas para o piloto automático do navio.",
      "Monitorar a temperatura e a salinidade da água do mar em tempo real para controle do sistema de ar condicionado de bordo."
    ],
    answer: "Medir a velocidade do navio em relação à água e a distância percorrida, transmitindo esses dados para repetidoras e sistemas de armas.",
    explanation: "A função principal da SDTU (Unidade Terminal de Distribuição de Sinais) do Odômetro AGI-LOG é medir com precisão a velocidade do navio em relação à água e integrar essa velocidade para calcular a distância percorrida, distribuindo essas informações para repetidoras, radares e sistemas de armas.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que significa a sigla \"BITE\" amplamente utilizada no AGI-LOG?",
    options: [
      "Significa Circuito de Teste Integrado (Built-In Test Equipment).",
      "Significa Barramento de Interface de Transmissão de Emergência (Bus Interface Transmission Emergency).",
      "Significa Bloco de Isolamento Térmico e Elétrico (Block of Insulation for Thermal Equipment).",
      "Significa Bateria Interna de Tempo de Espera (Backup Internal Time Equipment)."
    ],
    answer: "Significa Circuito de Teste Integrado (Built-In Test Equipment).",
    explanation: "A sigla BITE refere-se a Built-In Test Equipment (Equipamento/Circuito de Teste Integrado), um recurso orgânico de autodiagnóstico que monitora continuamente ou por comando os circuitos da SDTU para identificar falhas nos módulos.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O manual prevê quatro tipos físicos de sensores (hastes) para o sistema. Quais são eles?",
    options: [
      "Haste retrátil, Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés (para águas rasas).",
      "Haste rotativa de palhetas, Sensor ultrassônico de quilha, Sensor óptico de laser e Sensor térmico diferencial.",
      "Haste magnética de tubo de Pitot, Sensor piezoresistivo de proa, Sensor giroscópico axial e Sensor de arrasto de popa.",
      "Haste telescópica hidráulica, Sensor de pressão estática, Sensor acústico de efeito Doppler e Sensor de fibra óptica."
    ],
    answer: "Haste retrátil, Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés (para águas rasas).",
    explanation: "O sistema AGI-LOG suporta quatro configurações de transdutores (sensores/hastes) adaptadas às necessidades operacionais das embarcações: Haste retrátil (padrão com válvula de gaveta), Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés projetado para águas rasas.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual é o princípio eletromagnético físico usado para ler a velocidade da água?",
    options: [
      "A bobina no sensor gera um campo magnético, e a água (agindo como condutor) corta essas linhas de fluxo; pela Lei de Faraday, isso induz uma Força Eletromotriz (FEM) nos eletrodos estritamente proporcional à velocidade do navio.",
      "O sensor emite ondas sonoras de alta frequência que se refletem nas partículas em suspensão na água, medindo o desvio de frequência pelo Efeito Doppler proporcional à velocidade.",
      "A passagem da água gira uma pequena turbina magnética interna na haste, cuja frequência de rotação induz pulsos de corrente contínua diretamente proporcionais ao arrasto.",
      "A água do mar altera a capacitância de dois eletrodos de platina expostos na quilha, gerando uma variação de impedância proporcional ao fluxo de velocidade."
    ],
    answer: "A bobina no sensor gera um campo magnético, e a água (agindo como condutor) corta essas linhas de fluxo; pela Lei de Faraday, isso induz uma Força Eletromotriz (FEM) nos eletrodos estritamente proporcional à velocidade do navio.",
    explanation: "O odômetro eletromagnético baseia-se na Lei da Indução de Faraday: uma bobina no sensor cria um campo magnético alternado na água circundante. Como a água do mar é um condutor elétrico em movimento, o corte das linhas de fluxo induz uma Força Eletromotriz (tensão) nos eletrodos da haste, sendo essa tensão linearmente proporcional à velocidade do navio em relação à água.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual é o consumo elétrico e a faixa de alimentação tolerada pela SDTU do AGI-LOG?",
    options: [
      "Consome menos que 170 VA e opera recebendo 115V (50/60Hz) ou 230V (50/60Hz) monofásico.",
      "Consome 500 Watts e exige alimentação trifásica de 380V ou 440V em 60Hz fixos.",
      "Consome apenas 24 Watts e é alimentado diretamente por baterias de corrente contínua (DC) de 12V ou 24V do navio.",
      "Consome exatamente 1200 VA e necessita de inversor dedicado de 115V com frequência estritamente militar de 400Hz."
    ],
    answer: "Consome menos que 170 VA e opera recebendo 115V (50/60Hz) ou 230V (50/60Hz) monofásico.",
    explanation: "A SDTU apresenta alta eficiência e versatilidade de instalação na rede de bordo, consumindo menos de 170 VA de potência aparente e podendo ser configurada para operar com rede monofásica de 115V ou 230V, em frequências industriais/navais de 50 ou 60 Hz.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Quanto tempo exato a eletrônica exige após ligada para estabilizar e exibir uma velocidade precisa?",
    options: [
      "O tempo necessário para se obter uma velocidade estável a partir da alimentação do sistema é de 30 segundos.",
      "O sistema requer no mínimo 15 minutos de pré-aquecimento térmico dos cartões analógicos antes de liberar leituras válidas no visor.",
      "A exibição da velocidade é instantânea (< 1 segundo) assim que a chave principal ON/OFF é acionada.",
      "O microprocessador exige exatamente 5 minutos de varredura BITE de inicialização antes de computar os sinais de FEM da água."
    ],
    answer: "O tempo necessário para se obter uma velocidade estável a partir da alimentação do sistema é de 30 segundos.",
    explanation: "Após a energização (chave ON/OFF ligada), os circuitos de alimentação, processamento analógico e microprocessamento do AGI-LOG necessitam de apenas 30 segundos de aquecimento e estabilização para fornecer medições de velocidade precisas e confiáveis no painel frontal.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  // --- Módulos da Unidade SDTU (Funções de Hardware) ---
  {
    question: "Qual é a função central do Cartão Microprocessador (Módulo 2)?",
    options: [
      "É o coração da SDTU, responsável por efetuar toda a computação, armazenar os dados de calibração em memória não volátil (RAM) e administrar as rotinas do BITE.",
      "É responsável exclusivamente por retificar a tensão de rede e gerar os barramentos de +5V, +12V e -12V para os demais módulos.",
      "Atua apenas como amplificador de potência operacional para impulsionar a bobina de excitação do sensor no fundo do casco.",
      "Converte diretamente os sinais analógicos do mar em sinais síncronos mecânicos de 115V para alimentar repetidoras remotas."
    ],
    answer: "É o coração da SDTU, responsável por efetuar toda a computação, armazenar os dados de calibração em memória não volátil (RAM) e administrar as rotinas do BITE.",
    explanation: "O Módulo 2 (Cartão Microprocessador) é a unidade de processamento central da SDTU. Ele realiza os cálculos matemáticos de velocidade (aplicando as curvas de calibração salvas em sua memória não volátil), integra a velocidade para obter as milhas navegadas e controla as rotinas de autoteste (BITE).",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que o Cartão Analógico (Módulo 4) faz com o sinal sujo oriundo do mar?",
    options: [
      "Ele amplifica o sinal e remove ruídos de quadratura por meio de um rigoroso processo de multiplicação, só deixando passar sinais que estejam em fase com a bobina do sensor.",
      "Ele digitaliza diretamente o sinal bruto utilizando um conversor flash de 32 bits e descarta frequências acima de 100 kHz por meio de um filtro passa-baixa passivo.",
      "Ele retifica o sinal alternado em corrente contínua pura através de pontes de diodos e zener antes de enviá-lo ao mostrador de LEDs.",
      "Ele inverte a polaridade da tensão induzida a cada 5 segundos para desmagnetizar os eletrodos de platina da haste retrátil."
    ],
    answer: "Ele amplifica o sinal e remove ruídos de quadratura por meio de um rigoroso processo de multiplicação, só deixando passar sinais que estejam em fase com a bobina do sensor.",
    explanation: "O micro-sinal vindo dos eletrodos contém ruídos de quadratura e interferências da água. O Módulo 4 amplifica esse sinal e realiza uma demodulação síncrona (processo rigoroso de multiplicação), filtrando ruídos indesejados e deixando passar apenas o componente de tensão que está perfeitamente em fase com a corrente da bobina de excitação do sensor.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual é o papel do Cartão de Interface (Módulo 1)?",
    options: [
      "Ele ativa os displays frontais (NÓS e MILHAS) e processa digitalmente as informações para prover a saída serial de comunicação padrão RS-422.",
      "Ele atua como transformador de isolamento galvanizado recebendo os fios brutos da haste antes da amplificação analógica.",
      "Ele controla exclusivamente a excitação de corrente pulsada em 57V enviada ao relé de seleção da bobina do sensor.",
      "Ele aloja as baterias de chumbo-ácido de backup que mantêm a contagem de milhas em caso de blackout total do navio."
    ],
    answer: "Ele ativa os displays frontais (NÓS e MILHAS) e processa digitalmente as informações para prover a saída serial de comunicação padrão RS-422.",
    explanation: "O Módulo 1 (Cartão de Interface) faz a ponte entre o processamento central e o mundo externo digital: ele codifica e aciona a exibição nos displays frontais de velocidade (NÓS) e distância (MILHAS NAVEGADAS), além de formatar e transmitir as informações em padrão serial balanceado RS-422 para os sistemas externos do navio.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que os Cartões de Saída Síncro (Módulos 5 e 6) geram?",
    options: [
      "Eles contêm conversores digital-síncro que transformam a velocidade digital em saídas síncronas mecânicas (equivalentes a síncros 15CX4) para alimentar outros equipamentos.",
      "Eles geram tensões contínuas variáveis de 0 a 10 Volts e pulsos luminosos em fibra óptica para a central de navegação por inércia.",
      "Eles emitem sinais de áudio em 400 Hz para os alto-falantes do passadiço em caso de alarme de excesso de velocidade.",
      "Eles produzem alimentação trifásica pura de 380V para alimentar os motores elétricos das bombas de porão e leme."
    ],
    answer: "Eles contêm conversores digital-síncro que transformam a velocidade digital em saídas síncronas mecânicas (equivalentes a síncros 15CX4) para alimentar outros equipamentos.",
    explanation: "Os Módulos 5 e 6 são placas dedicadas a sistemas que necessitam de dados de velocidade no formato analógico síncrono tradicional. Eles possuem conversores Digital-para-Síncro (D/S) que geram sinais elétricos síncronos de três fios equivalentes a transmissores mecânicos padrão 15CX4 para acionar repetidoras analógicas e sistemas de armas.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual a versatilidade do Cartão de Saída Auxiliar (Módulo 7)?",
    options: [
      "Ele fornece saídas do tipo potenciômetro simulado (analógico em Volts/Nó) e disponibiliza quatro contatos de relé de estado sólido totalmente livres de potencial.",
      "Ele converte sinais de satélite GPS em coordenadas cartesianas e injeta pulsos de tempo de 1 PPS no relógio principal da fragata.",
      "Ele atua como amplificador de reserva que assume a excitação da bobina caso o relé principal RL-1 sofra superaquecimento.",
      "Ele gera exclusivamente uma interface de rede Ethernet Gigabit com protocolo TCP/IP para envio de dados à nuvem da marinha."
    ],
    answer: "Ele fornece saídas do tipo potenciômetro simulado (analógico em Volts/Nó) e disponibiliza quatro contatos de relé de estado sólido totalmente livres de potencial.",
    explanation: "O Módulo 7 confere grande flexibilidade de interfaceamento à SDTU, entregando saídas analógicas proporcionais (como um potenciômetro simulado em Volts/Nó para registradores de velocidade) e fornecendo quatro relés de estado sólido (opticamente isolados/livres de potencial) configuráveis para envio de pulsos de distância ou alarmes independentes.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Quais os componentes contidos na Fonte de Alimentação (Módulo 8)?",
    options: [
      "Aloja capacitores, pontes retificadoras, reguladores de tensão e a chave mecânica principal ON/OFF (Liga/Desliga).",
      "Aloja microprocessadores de backup, chips de memória flash não volátil e o conector de antena de satélite.",
      "Aloja o transformador isolador de entrada de sinal do mar T-1, os relés RL-1 e RL-2 e a microchave de teste SW1.",
      "Aloja conversores analógico-síncros, bobinas de choque de rádio frequência e os drivers de LED de 7 segmentos dos visores."
    ],
    answer: "Aloja capacitores, pontes retificadoras, reguladores de tensão e a chave mecânica principal ON/OFF (Liga/Desliga).",
    explanation: "O Módulo 8 é a Fonte de Alimentação da SDTU. Ele abriga os circuitos de retificação (pontes), filtragem (capacitores de potência), regulação das tensões operacionais contínuas (+5V, +12V, -12V, +21V) e o disjuntor/chave mecânica de alavanca frontal ON/OFF que energiza todo o equipamento.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual a função tática do Terminal de Calibração (Módulo 12)?",
    options: [
      "Permitir que o usuário insira as tabelas de calibração resultantes das provas de mar na memória do equipamento, além de servir como display redundante para exibir falhas (BITE) caso as telas principais pifem.",
      "Acionar remotamente a descida e a subida hidráulica da haste retrátil no fundo do casco durante emergências de combate.",
      "Gravar as comunicações de voz da ponte de comando e armazenar o histórico de velocidade dos últimos 10 anos de navegação.",
      "Gerar uma carga fictícia de teste (dummy load) para dissipar a energia da bobina de excitação quando o navio estiver em doca seca."
    ],
    answer: "Permitir que o usuário insira as tabelas de calibração resultantes das provas de mar na memória do equipamento, além de servir como display redundante para exibir falhas (BITE) caso as telas principais pifem.",
    explanation: "O Módulo 12 (Terminal de Calibração) é uma interface tática e de manutenção que permite a digitação e gravação dos perfis de curvas de calibração obtidos durante as provas de mar. Além disso, por possuir um display LCD isolado, funciona como visor redundante vital, permitindo ler códigos de diagnóstico (BITE) mesmo se os displays principais da tampa frontal quebrarem.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Para que serve o Cartão de Display (Módulo 10)?",
    options: [
      "Ele abriga os circuitos de acionamento que iluminam os LEDs de 7 segmentos dos displays de NÓS e de MILHAS NAVEGADAS, e instala a microchave do teste BITE completo (SW1).",
      "Ele converte sinais analógicos de tensão do mar em pulsos de fibra óptica e controla a chave principal ON/OFF da fonte.",
      "Ele processa exclusivamente os sinais seriais NMEA 0183 recebidos de outros radares para comparar com a velocidade do odômetro.",
      "Ele gera as ondas quadradas de 57V para excitação dos eletrodos do transdutor submerso e filtra interferências de rádio."
    ],
    answer: "Ele abriga os circuitos de acionamento que iluminam os LEDs de 7 segmentos dos displays de NÓS e de MILHAS NAVEGADAS, e instala a microchave do teste BITE completo (SW1).",
    explanation: "O Módulo 10 é a placa de circuito do painel frontal de visualização. Ele contém os drivers que multiplexam e acendem os displays numéricos de LED de 7 segmentos (velocidade em NÓS e distância em MILHAS NAVEGADAS) e monta estrategicamente a microchave SW1, que detecta a abertura da tampa frontal para acionar o diagnóstico BITE Completo.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  // --- Processamento Analógico e Relés ---
  {
    question: "Qual é a finalidade elétrica do Relé de Seleção RL-1 localizado sob a placa mãe?",
    options: [
      "Ele roteia ativamente a tensão de 57V para excitar a bobina da haste que foi selecionada no painel.",
      "Ele desconecta automaticamente a alimentação de 115V da fonte Módulo 8 em caso de superaquecimento do chassi.",
      "Ele comuta as linhas seriais RS-422 entre o computador principal de armas e o terminal de calibração secundário.",
      "Ele aciona os alarmes sonoros da ponte de comando sempre que a velocidade do navio excede o limite mecânico de 60 nós."
    ],
    answer: "Ele roteia ativamente a tensão de 57V para excitar a bobina da haste que foi selecionada no painel.",
    explanation: "O Relé RL-1, montado no chassi inferior sob a placa-mãe (motherboard), tem a função chave de comutar a corrente elétrica de excitação (57V AC) para a bobina do sensor que estiver selecionado pelo operador no painel da SDTU.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que o Relé de Transferência RL-2 faz com a escuta do mar?",
    options: [
      "Ele recebe o micro-sinal captado da água pelo sensor ativo e o direciona para o transformador isolador de entrada (T-1).",
      "Ele converte o micro-sinal analógico em pulsos digitais PWM antes de injetá-los no barramento do microprocessador.",
      "Ele aterra instantaneamente os eletrodos da haste caso detecte a aproximação de raios ou descargas atmosféricas marítimas.",
      "Ele mistura o sinal captado pela água com as sentenças NMEA do GPS para calcular a corrente oceânica de deriva."
    ],
    answer: "Ele recebe o micro-sinal captado da água pelo sensor ativo e o direciona para o transformador isolador de entrada (T-1).",
    explanation: "O Relé de Transferência RL-2 trabalha em conjunto com a seleção de haste: ele recebe os micro-sinais de milivolts induzidos nos eletrodos da haste ativa (escuta do mar) e os direciona com máxima integridade para o transformador de entrada de sinal T-1.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O sinal de recepção passa pelo Transformador T-1. Quais são as suas duas funções de blindagem?",
    options: [
      "Prover isolamento galvânico/elétrico absoluto entre a agressiva água do mar e as placas da SDTU, e cancelar ruídos de fundo induzidos nas linhas balanceadas.",
      "Elevar a tensão do micro-sinal de 200 μV para 115V AC e retificar a corrente para alimentar os circuitos de display LED.",
      "Inverter a fase do sinal de água em 180 graus e gerar um sinal de clock estático de 10 MHz para sincronizar a placa CPU.",
      "Medir a impedância térmica dos cabos do transdutor e desconectar os eletrodos caso a salinidade da água caia a zero."
    ],
    answer: "Prover isolamento galvânico/elétrico absoluto entre a agressiva água do mar e as placas da SDTU, e cancelar ruídos de fundo induzidos nas linhas balanceadas.",
    explanation: "O Transformador T-1 desempenha um papel duplo e vital no estágio de entrada: 1) Oferece total isolamento galvânico (elétrico) entre o ambiente hostil da água do mar (eletrodos) e os circuitos sensíveis da SDTU; e 2) Atua com rejeição em modo comum na linha balanceada para cancelar ruídos elétricos induzidos nos longos cabos que vêm do fundo do casco.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Como a SDTU calcula a \"Velocidade Média Verdadeira\" (VMV) para exibir no display?",
    options: [
      "Ela capta a velocidade analógica (VMH) e compara sua amplitude com uma curva de correção (dados de calibração VMV vs VMH) que o usuário gravou permanentemente na memória não volátil (RAM) do Módulo 2.",
      "Ela multiplica a rotação mecânica da haste pela velocidade do vento medida no anemômetro de mastro e subtrai a deriva de bússola.",
      "Ela faz uma média aritmética das últimas 10 milhas percorridas por coordenadas GPS e descarta as leituras analógicas do transdutor.",
      "Ela adiciona uma constante fixa de +1,5 nó sobre a leitura bruta dos eletrodos para compensar o arrasto hidrodinâmico do casco."
    ],
    answer: "Ela capta a velocidade analógica (VMH) e compara sua amplitude com uma curva de correção (dados de calibração VMV vs VMH) que o usuário gravou permanentemente na memória não volátil (RAM) do Módulo 2.",
    explanation: "A tensão induzida na haste fornece uma medição bruta hidrodinâmica chamada VMH (Velocidade Média da Haste). O microprocessador do Módulo 2 consulta a tabela/curva de calibração gravada pelo usuário na memória não volátil (que mapeia VMH em relação à VMV) e faz a interpolação digital para exibir no painel a Velocidade Média Verdadeira do navio em nós.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Na ponte do Cartão Analógico, o erro é convertido num sinal chamado HI/LO. O que é isso?",
    options: [
      "É uma onda quadrada onde a relação sinal/zero aponta a diferença entre a leitura real do mar e a estimativa do processador. Quando a proporção é 1:1, a velocidade calculada tornou-se perfeitamente igual à verdadeira.",
      "É uma tensão analógica bipolada que oscila entre -12V (velocidade ré) e +12V (velocidade vante) para alimentar os motores síncronos.",
      "É um pulso óptico infravermelho que pisca em alta frequência (HI) no modo normal e em baixa frequência (LO) no modo de falha BITE.",
      "É um código serial de 8 bits em que HI representa a parte inteira dos nós e LO representa a parte decimal das milhas náuticas."
    ],
    answer: "É uma onda quadrada onde a relação sinal/zero aponta a diferença entre a leitura real do mar e a estimativa do processador. Quando a proporção é 1:1, a velocidade calculada tornou-se perfeitamente igual à verdadeira.",
    explanation: "No circuito de malha fechada do Cartão Analógico, o erro entre o sinal do transdutor e a tensão de referência do DAC é convertido no sinal HI/LO (onda quadrada ou razão de ciclo de trabalho). A largura relativa dos pulsos (relação sinal/zero) indica ao processador o erro de medição; quando a relação atinge exatamente o equilíbrio (proporção 1:1 ou 50% duty cycle), a velocidade computada é igual à leitura real do mar.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Quais são as faixas (magnitude) dos micro-sinais captados nos sensores pela SDTU?",
    options: [
      "Os sensores de saída alta entregam de 275 a 425 μV/nó, e os de saída baixa mandam apenas 80 a 200 μV/nó para o sistema.",
      "Todos os sensores geram tensões padronizadas na faixa de 1 a 5 Volts por cada nó de velocidade atingido pela embarcação.",
      "Os sensores de saída alta entregam de 10 a 20 mV/nó, e os de saída baixa mandam de 1 a 5 mV/nó em corrente contínua.",
      "Os sensores operam com sinais de corrente pulsada entre 4 mA e 20 mA independentemente da velocidade do fluxo de água."
    ],
    answer: "Os sensores de saída alta entregam de 275 a 425 μV/nó, e os de saída baixa mandam apenas 80 a 200 μV/nó para o sistema.",
    explanation: "Os eletrodos do odômetro eletromagnético induzem tensões extremamente minúsculas (microvolts). Conforme as especificações do sistema AGI-LOG, sensores classificados como de saída alta fornecem sinais entre 275 e 425 μV por cada nó de velocidade, enquanto sensores de saída baixa geram apenas de 80 a 200 μV por nó.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  // --- Painel, Teclado e Operação ---
  {
    question: "O visor (LCD) principal impõe limites físicos para a leitura de NÓS e MILHAS. Quais são?",
    options: [
      "O display de NÓS exibe 4 dígitos variando de -25 a +60 nós, enquanto o de MILHAS exibe 7 dígitos cravados na faixa de 0 a 9999,99 milhas.",
      "O display de NÓS exibe 3 dígitos variando de 0 a 100 nós, enquanto o de MILHAS exibe 5 dígitos limitados a 999,99 milhas.",
      "O display de NÓS exibe 5 dígitos variando de -50 a +99 nós, enquanto o de MILHAS exibe 8 dígitos variando de 0 a 99999,99 milhas.",
      "O display de NÓS exibe 2 dígitos para números inteiros de 0 a 50 nós, e o de MILHAS exibe 4 dígitos sem casas decimais (0 a 9999)."
    ],
    answer: "O display de NÓS exibe 4 dígitos variando de -25 a +60 nós, enquanto o de MILHAS exibe 7 dígitos cravados na faixa de 0 a 9999,99 milhas.",
    explanation: "A matriz frontal de visualização dispõe de 4 dígitos para velocidade em NÓS, com capacidade de indicação de velocidade a ré e a vante na faixa operacional de -25 a +60 nós; o hodômetro de MILHAS NAVEGADAS possui 7 dígitos, registrando distâncias cumulativas na faixa precisa de 0 até 9999,99 milhas náuticas.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Para que serve e o que ilumina a Tecla MODE no teclado do painel?",
    options: [
      "Alterna o sistema entre a operação normal de \"haste\" (acionando as luzes de PROBE/CURVE) e o modo de simulação, acendendo o LED \"SIM\" no visor superior.",
      "Alterna entre a exibição da velocidade em nós náuticos e quilômetros por hora (km/h), acendendo o LED \"METRIC\" no painel.",
      "Aciona o desligamento temporário dos alarmes sonoros do passadiço e ilumina o LED vermelho de \"SILENCE\" na placa mãe.",
      "Muda a taxa de transmissão serial RS-422 entre 4800 e 38400 bps, piscando o LED de comunicação \"TX/RX\" no teclado."
    ],
    answer: "Alterna o sistema entre a operação normal de \"haste\" (acionando as luzes de PROBE/CURVE) e o modo de simulação, acendendo o LED \"SIM\" no visor superior.",
    explanation: "A tecla emborrachada MODE do painel frontal alterna o modo fundamental de trabalho do odômetro entre a operação real de navegação com o transdutor (\"Haste/Probe\", acendendo os indicadores PROBE e CURVE) e o modo de teste interno simulado (onde o operador testa os circuitos sem o sensor d'água, acendendo o LED \"SIM\").",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual é a utilidade operacional da Tecla CURVE (Curva)?",
    options: [
      "Permite alternar entre os dados de calibração da \"Curva 1\" (C1) ou da \"Curva 2\" (C2) armazenados em memória para aquele determinado sensor.",
      "Permite suavizar a leitura de velocidade no visor aplicando um filtro exponencial matemático contra ondulações violentas do mar.",
      "Serve para arquivar a velocidade instantânea em um gráfico de histórico de curva de aceleração exportável via porta serial.",
      "Aciona a recalibração automática de ganho analógico dos eletrodos quando o navio executa curvas acentuadas em alta velocidade."
    ],
    answer: "Permite alternar entre os dados de calibração da \"Curva 1\" (C1) ou da \"Curva 2\" (C2) armazenados em memória para aquele determinado sensor.",
    explanation: "O sistema AGI-LOG permite armazenar em memória duas curvas ou tabelas de calibração distintas para o transdutor (por exemplo, calibrações em condições diferentes de calado ou tipo de haste). A tecla CURVE permite ao marinheiro selecionar de forma rápida e segura qual curva de correção hidrodinâmica (\"C1\" ou \"C2\") está sendo aplicada ao cálculo da velocidade.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Se o usuário segurar o botão \"SIM UP\" na faina de testes, o que a placa processa?",
    options: [
      "A velocidade simulada dispara em crescimento contínuo enquanto o botão é pressionado; ao largá-lo, o número é imediatamente fixado (congelado) no painel de NÓS.",
      "O sistema aumenta gradativamente o ganho de amplificação em milivolts até que o alarme de saturação do amplificador analógico dispare.",
      "A contagem das milhas navegadas avança no ritmo acelerado de 10 milhas por segundo para teste de transbordamento dos 7 dígitos.",
      "A tensão de alimentação de +21V sobe em degraus de 1V até o limite de teste de esforço da fonte de alimentação do Módulo 8."
    ],
    answer: "A velocidade simulada dispara em crescimento contínuo enquanto o botão é pressionado; ao largá-lo, o número é imediatamente fixado (congelado) no painel de NÓS.",
    explanation: "No modo de simulação (SIM), pressionar e manter pressionado o botão emborrachado \"SIM UP\" instrui a CPU a incrementar continuamente a velocidade simulada exibida no mostrador frontal. No momento em que o operador solta a tecla, a contagem para e a velocidade simulada fica congelada naquele valor exato para verificações e acionamento de repetidoras.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Como o painel sinaliza luminosamente ao marinheiro que a SDTU está rodando de forma perigosa no \"modo descalibrado\"?",
    options: [
      "O indicador numérico de curva apropriado (C1 ou C2) começará a piscar para emitir um alerta visual ao usuário.",
      "O display principal exibe a mensagem de texto \"CAL ERR\" piscando em cor vermelha intensa no lugar dos 4 dígitos de velocidade.",
      "Todos os cinco botões do teclado emborrachado acendem e apagam simultaneamente em intervalos rápidos de 1 segundo.",
      "O visor de MILHAS NAVEGADAS é zerado automaticamente e o LED verde da chave ON/OFF muda para a cor âmbar constante."
    ],
    answer: "O indicador numérico de curva apropriado (C1 ou C2) começará a piscar para emitir um alerta visual ao usuário.",
    explanation: "Se a memória não possui dados de calibração válidos ou se o odômetro está operando sem a devida compensação hidrodinâmica (modo descalibrado), a SDTU alerta o operador de passadiço fazendo com que o indicador luminoso da curva selecionada (LED C1 ou C2) pisque intermitentemente no painel.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O controle DIMMER age sobre a claridade de quais partes na carcaça?",
    options: [
      "Ele atua ditando o brilho analógico da matriz dos displays (NÓS e MILHAS NAVEGADAS) e também das cinco teclas emborrachadas iluminadas adjacentes.",
      "Ele regula exclusivamente a intensidade das luzes piloto dos repetidores mecânicos remotos espalhados pelo passadiço.",
      "Ele ajusta a tensão de iluminação de fundo do display LCD secundário localizado internamente no Módulo 12 (Terminal de Calibração).",
      "Ele controla a corrente dos quatro LEDs de diagnóstico de tensão (+5V, +12V, -12V, +21V) montados na face do Módulo 8."
    ],
    answer: "Ele atua ditando o brilho analógico da matriz dos displays (NÓS e MILHAS NAVEGADAS) e também das cinco teclas emborrachadas iluminadas adjacentes.",
    explanation: "O potenciômetro ou controle DIMMER frontal da carcaça ajusta de forma suave e analógica a intensidade luminosa de todos os elementos visuais do painel frontal: os dígitos de LEDs de 7 segmentos (velocidade e distância) e a retroiluminação das cinco teclas de borracha do teclado de operação.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  // --- Diagnóstico BITE (Built-In Test Equipment) ---
  {
    question: "O que acontece visualmente no painel quando ocorre o BITE Nível Restrito (com a tampa de metal aparafusada e fechada)?",
    options: [
      "Sem parar as transmissões do navio, os displays de NÓS e de MILHAS NAVEGADAS começam a piscar a 0,5 Hz de forma intermitente indicando que a CPU achou uma anomalia interna.",
      "Os displays apagam por completo e um alarme sonoro contínuo de 85 dB soa no painel até que o botão MODE seja pressionado.",
      "A velocidade é congelada no valor de 0,00 nó e as repetidoras do passadiço recebem uma sentença de falha com código 999.",
      "O indicador amarelo de \"SIM\" pisca 3 vezes e o sistema reinicia automaticamente em um ciclo contínuo a cada 10 segundos."
    ],
    answer: "Sem parar as transmissões do navio, os displays de NÓS e de MILHAS NAVEGADAS começam a piscar a 0,5 Hz de forma intermitente indicando que a CPU achou uma anomalia interna.",
    explanation: "Durante a operação normal (tampa de metal fechada e aparafusada), a CPU executa continuamente o BITE Nível Restrito sem interromper o processamento da navegação. Se uma anomalia não fatal ou falha interna for detectada durante essa varredura, os displays frontais de NÓS e MILHAS passam a piscar em uma frequência de 0,5 Hz (uma vez a cada 2 segundos) alertando a tripulação.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Como o técnico engatilha o nível supremo de diagnóstico (BITE Completo)?",
    options: [
      "Retirando os quatro parafusos e soltando a tampa dianteira para fora; isso libera fisicamente a microchave SW1 que alimenta um \"zero\" lógico na placa para forçar um reset completo.",
      "Pressionando simultaneamente as teclas MODE e CURVE por 10 segundos até que os displays exibam a palavra \"FULL TEST\".",
      "Conectando um cabo de serviço RS-232 no Módulo 1 e enviando o comando de terminal militar `#START_FULL_BITE`.",
      "Desligando e ligando a chave mecânica do Módulo 8 por três vezes consecutivas dentro de um intervalo máximo de 5 segundos."
    ],
    answer: "Retirando os quatro parafusos e soltando a tampa dianteira para fora; isso libera fisicamente a microchave SW1 que alimenta um \"zero\" lógico na placa para forçar um reset completo.",
    explanation: "O BITE Completo (autoteste profundo do hardware) é engatilhado por intervenção mecânica: quando o técnico solta os 4 parafusos da tampa frontal e a abre, a microchave intertravada SW1 (montada no Módulo 10) é liberada. Isso injeta um sinal de \"zero lógico\" ao Módulo 2, forçando um reset da CPU e iniciando a varredura completa de diagnóstico de todos os cartões.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que ocorre com os repasses de dados da SDTU ao navio enquanto a tampa está aberta e o BITE Completo roda?",
    options: [
      "Todas as funções operacionais essenciais da SDTU são severamente interrompidas, e as saídas não serão corretas nem críveis para navegação.",
      "A SDTU continua enviando os últimos dados de velocidade salvos na memória RAM sem nenhuma alteração na navegação.",
      "As saídas seriais RS-422 duplicam a taxa de transmissão para reportar os códigos de erro em tempo real ao radar de busca.",
      "Os módulos síncros assumem uma velocidade fixa de segurança de 15 nós vante para manter a estabilização das plataformas de armas."
    ],
    answer: "Todas as funções operacionais essenciais da SDTU são severamente interrompidas, e as saídas não serão corretas nem críveis para navegação.",
    explanation: "Quando a tampa está aberta e o BITE Completo entra em execução, a SDTU sai do modo de navegação operacional. Todas as funções normais de processamento de velocidade e pulso são interrompidas; por consequência, as saídas analógicas, síncronas e seriais emitidas durante o teste não representam a velocidade real da água e não devem ser utilizadas pelos sistemas do navio.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O diagnóstico BITE Completo terminou. Onde o maquinista lê a causa exata do defeito?",
    options: [
      "Os displays cravam códigos numéricos de falha. A falha prioritária fica no visor superior (NÓS), e até duas falhas alternativas secundárias ficam no visor inferior (MILHAS NAVEGADAS).",
      "Em uma fita de papel impressa por um micro-registrador térmico embutido na parte inferior da caixa de alumínio do chassi.",
      "Apenas através da contagem do número de piscadas do LED verde de status montado no painel frontal da Fonte Módulo 8.",
      "Por meio da conexão obrigatória de um notebook de serviço executando o software proprietário AGI-LOG Diagnostic Tools."
    ],
    answer: "Os displays cravam códigos numéricos de falha. A falha prioritária fica no visor superior (NÓS), e até duas falhas alternativas secundárias ficam no visor inferior (MILHAS NAVEGADAS).",
    explanation: "Ao finalizar os testes do BITE Completo, a SDTU apresenta o diagnóstico diretamente nos displays de 7 segmentos: o código do módulo apontado como falha primária (maior probabilidade de defeito) é fixado no visor de NÓS (superior), enquanto até dois códigos de falha secundária ou alternativa são exibidos no mostrador de MILHAS NAVEGADAS (inferior).",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Se os LEDs de 7 segmentos do vidro principal estilhaçarem ou queimarem, o navio ficará cego para manutenções de BITE?",
    options: [
      "Não; o Módulo 12 (Terminal de Calibração) funciona organicamente como um display escravo paralelo (redundante) exibindo no seu próprio crivo isolado de LCD os códigos de pane para resguardar as frotas.",
      "Sim; sem o painel principal de 7 segmentos é impossível ler qualquer código de erro, exigindo a substituição imediata da tampa frontal.",
      "Não; os códigos de falha passam a ser transmitidos em áudio codificado em Morse através de um buzzer na placa do Módulo 1.",
      "Sim; a queima dos LEDs interrompe o barramento multiplexado do display, paralisando todas as rotinas de diagnóstico da CPU."
    ],
    answer: "Não; o Módulo 12 (Terminal de Calibração) funciona organicamente como um display escravo paralelo (redundante) exibindo no seu próprio crivo isolado de LCD os códigos de pane para resguardar as frotas.",
    explanation: "A arquitetura do AGI-LOG prevê redundância para missões críticas: caso a matriz frontal de LEDs de 7 segmentos do painel se quebre ou queime, o Módulo 12 (Terminal de Calibração montado no interior do chassi) atua como display escravo paralelo, apresentando em sua própria tela de cristal líquido (LCD) isolada todas as mensagens e códigos do BITE para os mantenedores.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Caso o diagnóstico jogue na tela 3 códigos de módulos danificados ao mesmo tempo, qual ordem o soldado deve atacar?",
    options: [
      "Ele deve realizar a troca focando obrigatoriamente primeiro no código com \"maior probabilidade\", ou seja, o erro gritado isoladamente no painel superior (NÓS).",
      "Ele deve trocar primeiro os módulos indicados no painel inferior (MILHAS) porque eles representam as falhas de alimentação e interface base.",
      "Ele deve substituir o Módulo 2 (CPU) imediatamente por ser o responsável pelo diagnóstico, independentemente dos códigos na tela.",
      "Ele deve retirar todos os três módulos avariados simultaneamente e substituí-los por sobressalentes antes de ligar a chave ON/OFF."
    ],
    answer: "Ele deve realizar a troca focando obrigatoriamente primeiro no código com \"maior probabilidade\", ou seja, o erro gritado isoladamente no painel superior (NÓS).",
    explanation: "A metodologia de reparo do BITE estabelece uma hierarquia clara de probabilidade de falha: quando múltiplos códigos aparecem, o mantenedor deve substituir primeiro e isoladamente o cartão indicado no mostrador superior (NÓS), pois este representa o módulo que tem a maior probabilidade técnica de ter originado a pane e cascateado erros nos demais cartões.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que acontece no sistema AGI-LOG ao se atarraxar novamente a tampa dianteira após os reparos?",
    options: [
      "O botão SW1 é apertado pelo metal e a CPU sai do congelamento para restabelecer sumariamente a operação de navio normal de todos os módulos que estiverem saudáveis.",
      "O sistema entra em um modo de espera (standby) de 15 minutos até que a tripulação confirme o reset na tecla MODE da tampa frontal.",
      "O microprocessador apaga automaticamente todos os dados de calibração do mar e exige que o operador digite novamente a Curva 1.",
      "A fonte de alimentação executa uma descarga de alta tensão nos capacitores para limpar a memória cache de falhas antigas do BITE."
    ],
    answer: "O botão SW1 é apertado pelo metal e a CPU sai do congelamento para restabelecer sumariamente a operação de navio normal de todos os módulos que estiverem saudáveis.",
    explanation: "Quando os parafusos da tampa frontal são reapertados, a estrutura de metal aciona fisicamente a microchave SW1. Esse fechamento de contato indica ao Módulo 2 o encerramento da manutenção, tirando a CPU do modo de diagnóstico/congelamento e restabelecendo de imediato o funcionamento normal e operacional de navegação em todos os cartões saudáveis.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  // --- Protocolos, Portas e Saídas para o Navio ---
  {
    question: "Em qual bit/padrão industrial o Módulo 1 (Cartão Interface) digitaliza o sinal de velocidade para conversar com radares e computadores modernos?",
    options: [
      "Ele usa caracteres estritos em código ASCII encapsulados na transmissão serial balanceada formato RS-422.",
      "Ele emprega transmissão paralela de 16 bits em padrão TTL não balanceado através de conectores de fita de 37 pinos.",
      "Ele modula o sinal em protocolo CAN Bus industrial a uma velocidade fixa de 1 Mbps com codificação Manchester.",
      "Ele utiliza sinais de corrente analógica na faixa industrial 4-20 mA modulados com protocolo digital HART."
    ],
    answer: "Ele usa caracteres estritos em código ASCII encapsulados na transmissão serial balanceada formato RS-422.",
    explanation: "Para integração com sistemas modernos de passadiço, computadores de bordo e radares, o Módulo 1 (Cartão de Interface) processa e emite os dados de velocidade e distância utilizando caracteres padronizados em código ASCII transmitidos via interface serial balanceada de alta imunidade a ruídos em padrão RS-422.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "As chaves/relés do Módulo 7 (Cartão Auxiliar) podem acionar a cadência mecânica da \"Distância\". Quais são os cravos de pulsos disponíveis para os cabos (PPM)?",
    options: [
      "Elas podem ser conectadas na fábrica para despejar pulsos isolados na cadência de 100, 200 ou 400 PPM (Pulsos Por Milha).",
      "Podem ser configuradas para emitir pulsos na cadência fixa e única de 1000, 2000 ou 5000 PPM para hodômetros digitais.",
      "Fornecem apenas 1 pulso por nó de velocidade (1 PPN), independentemente da distância cumulativa percorrida.",
      "Operam com cadências de 10, 25 e 50 pulsos por minuto (PPM) sincronizadas com o relógio mestre do navio."
    ],
    answer: "Elas podem ser conectadas na fábrica para despejar pulsos isolados na cadência de 100, 200 ou 400 PPM (Pulsos Por Milha).",
    explanation: "O Módulo 7 (Cartão Auxiliar) possui saídas de relé de estado sólido que podem ser configuradas/conectadas (através de jumpers ou ligações de fábrica/instalação) para fechar contatos de pulsos de distância mecânica/eletrônica nas taxas padronizadas navais de 100, 200 ou 400 Pulsos Por Milha náutica percorrida (PPM).",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Além da distância, quais alarmes independentes esses quatro relés do Módulo 7 podem sinalizar aos marinheiros da fragata?",
    options: [
      "Eles podem gritar alarme de velocidade muito alta, alarme de velocidade muito baixa, estado de \"Falha da SDTU\", ou delatar que a SDTU está falseando sob \"Modo Simulado\".",
      "Eles podem alertar sobre alta temperatura do mar, presença de gelo no casco, bateria fraca do passadiço e curto na antena do radar.",
      "Sinalizam apenas perda de sincronismo satelital, falha no girocompasso, desarme da bomba do leme e abertura da escotilha principal.",
      "Indicam exclusivamente desvio de rumo, inclinação excessiva de balanço, sobrecarga da rede trifásica e nível baixo de óleo no motor."
    ],
    answer: "Eles podem gritar alarme de velocidade muito alta, alarme de velocidade muito baixa, estado de \"Falha da SDTU\", ou delatar que a SDTU está falseando sob \"Modo Simulado\".",
    explanation: "Os quatro relés de estado sólido do Módulo 7 são canais versáteis de alarme e status operacional. Eles podem ser dedicados para alertar a ponte e o controle de danos sobre: Velocidade excessivamente alta (High Speed Alarm), Velocidade muito baixa (Low Speed Alarm), status de avaria grave/defeito (SDTU Failure) e indicação visual/remota de que o odômetro não está lendo a água, mas rodando em Modo Simulado (Simulated Mode).",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O painel AGI-LOG emite um Relé contínuo de Falha de Alimentação. O que esse relé monitora nas placas base?",
    options: [
      "É um contato isolado fechado tolerando 1A, com a missão exclusiva de atestar a sobrevivência constante do barramento vital interno de +5 VDC (a tensão que irriga os chips CMOS).",
      "Monitora a presença da tensão alternada de entrada (115V/230V AC) no disjuntor de força do Painel de Distribuição de Bordo.",
      "Verifica a corrente de excitação de 57V AC da bobina do sensor para garantir que a haste não está cortada.",
      "Controla a carga da bateria de 12V DC da luz de emergência do painel do terminal de calibração interno."
    ],
    answer: "É um contato isolado fechado tolerando 1A, com a missão exclusiva de atestar a sobrevivência constante do barramento vital interno de +5 VDC (a tensão que irriga os chips CMOS).",
    explanation: "O relé de Falha de Alimentação (Power Failure Relay) possui contatos isolados tolerando 1A e é projetado especificamente para monitorar a integridade do barramento contínuo vital de +5 VDC no backplane (a tensão lógica responsável pela alimentação dos microprocessadores e circuitos integrados CMOS). Se a tensão de +5 VDC cair ou falhar, o relé desarma e sinaliza a perda de energia para os alarmes do navio.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual a voltagem DC produzida pela PSU (Módulo 8) no pino exclusivo e restritivo apenas para \"exigências especiais/opcionais\" das marinhas?",
    options: [
      "O Módulo 8 possui uma via cravada de +21 Vdc deixada acessível no bloco terminal unicamente para exigências elétricas especiais do navio.",
      "Possui uma saída estabilizada de +48 Vdc destinada ao carregamento direto de telefones de emergência na ponte de comando.",
      "Fornece um terminal com saída regulada de -24 Vdc utilizada para a proteção catódica ativa da quilha de alumínio.",
      "Disponibiliza uma linha de +3,3 Vdc de baixa potência exclusiva para alimentação de dispositivos de memória flash USB externos."
    ],
    answer: "O Módulo 8 possui uma via cravada de +21 Vdc deixada acessível no bloco terminal unicamente para exigências elétricas especiais do navio.",
    explanation: "Além das tensões padrão de operação dos cartões (+5V, +12V e -12V), a Fonte de Alimentação Módulo 8 gera e disponibiliza no bloco de terminais uma linha de tensão contínua especial de +21 Vdc, reservada estritamente para alimentar interfaces opcionais ou exigências específicas e customizadas de instalações navais.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  // --- Manutenção e Normas Restritivas CMOS ---
  {
    question: "Graças à sua arquitetura avançada de cartões (Módulos 1 ao 12), qual é o Tempo Médio Para Reparo (MTTR) prometido para a faina?",
    options: [
      "Aproximadamente apenas 30 minutos em caso de troca ostensiva.",
      "Cerca de 4 a 6 horas em oficina de manutenção com uso obrigatório de osciloscópio de armazenamento digital.",
      "Menos de 60 segundos por meio de auto-regeneração de firmware acionada no botão de reset do painel frontal.",
      "Exatamente 12 horas úteis para permitir a estabilização térmica completa da nova placa instalada no backplane."
    ],
    answer: "Aproximadamente apenas 30 minutos em caso de troca ostensiva.",
    explanation: "A divisão funcional em cartões modulares facilmente removíveis (Módulos 01 ao 12), combinada ao preciso diagnóstico autônomo do BITE que aponta a placa defeituosa, garante à SDTU um Tempo Médio Para Reparo (MTTR) extremamente curto, estimado em apenas cerca de 30 minutos na rotina operacional a bordo através da simples troca ostensiva do módulo avariado.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual é a regra de substituição absolutamente restritiva aplicada ao Cartão Microprocessador (Módulo 2)?",
    options: [
      "Ele não aceita permutas aleatórias de almoxarifado; O Módulo 2 só pode ser trocado obrigatoriamente por uma versão idêntica \"programada/gravada com as mesmas opções aplicáveis à instalação particular\" daquele navio na planta de software.",
      "O Módulo 2 deve ser substituído sempre aos pares com o Módulo 8 (Fonte de Alimentação), independentemente do estado da fonte.",
      "O cartão novo só pode ser inserido após ser pré-aquecido a uma temperatura estrita de 45 °C em estufa de terra.",
      "É obrigatório raspar e ressoldar todos os 64 pinos do conector de fundo para cada nova placa microprocessadora instalada."
    ],
    answer: "Ele não aceita permutas aleatórias de almoxarifado; O Módulo 2 só pode ser trocado obrigatoriamente por uma versão idêntica \"programada/gravada com as mesmas opções aplicáveis à instalação particular\" daquele navio na planta de software.",
    explanation: "O Módulo 2 (Microprocessador) contém as memórias EPROM/RAM com o firmware e as configurações e tabelas de calibração exclusivas do casco e dos transdutores daquela embarcação específica. Por norma técnica severa, ele não pode ser trocado por um módulo genérico de almoxarifado: o substituto deve estar obrigatoriamente programado com a exata versão de software e opções aplicáveis àquela instalação naval.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Quais circuitos integrados utilizados no AGI demandam proteção contra toque direto das mãos devido ao perigo de eletricidade estática (implosão orgânica)?",
    options: [
      "As placas foram concebidas em tecnologia \"CMOS\" sensíveis; sendo impositiva a proteção anti-estática de descarga humana sob pena de morte dos chips durante a puxada na baia.",
      "As placas são construídas com transistores de potência a vácuo (valvulados) superaquecidos que exigem luvas térmicas de amianto.",
      "Os cartões utilizam exclusivamente circuitos TTL de cerâmica militar à prova de choques elétricos de até 10.000 Volts.",
      "Os módulos possuem relés mecânicos abertos de prata pura que oxidam com a oleosidade e acidez natural dos dedos humanos."
    ],
    answer: "As placas foram concebidas em tecnologia \"CMOS\" sensíveis; sendo impositiva a proteção anti-estática de descarga humana sob pena de morte dos chips durante a puxada na baia.",
    explanation: "Os cartões eletrônicos do odômetro AGI-LOG utilizam extensivamente circuitos integrados em tecnologia CMOS (Complementary Metal-Oxide-Semiconductor). Esses dispositivos possuem camadas de óxido extremamente finas em seus gates, sendo altamente vulneráveis à ruptura dielétrica e destruição instantânea por Descargas Eletrostáticas (ESD) geradas pelo corpo humano durante o manuseio sem pulseira de aterramento.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "No painel interno de manobra visual do Módulo 8 (Fonte), quantos LEDs existem e o que indicam ao eletricista?",
    options: [
      "Possui quatro LEDs brilhantes na cor verde engatilhados quando \"as quatro tensões operatórias cravadas DC estiverem saudáveis e jorrando na saída contínua do bastidor da PSU\".",
      "Possui dois LEDs vermelhos que acendem apenas em caso de curto-circuito na linha do mar ou superaquecimento do transformador.",
      "Possui um único LED amarelo intermitente que pisca proporcionalmente à frequência da corrente alternada recebida da rede do navio.",
      "Possui oito LEDs coloridos em barra tipo VU-meter que indicam o consumo percentual de potência da fonte entre 0% e 100%."
    ],
    answer: "Possui quatro LEDs brilhantes na cor verde engatilhados quando \"as quatro tensões operatórias cravadas DC estiverem saudáveis e jorrando na saída contínua do bastidor da PSU\".",
    explanation: "Na parte frontal interna do Módulo 8 (Fonte de Alimentação) existem quatro LEDs verdes de monitoramento visual de status. O acendimento brilhante e contínuo de cada um desses quatro LEDs atesta ao eletricista/mantenedor que as quatro tensões contínuas operacionais geradas pela fonte (+5V, +12V, -12V e +21V DC) estão saudáveis, reguladas e normais no barramento do chassi.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "O que deve ser feito primariamente no quadro energético do navio ANTES do soldado sequer puxar uma placa modular eletrônica para diagnóstico no AGI?",
    options: [
      "As tensões agressivas nominais de 115V ou 230V são fatais às vias CMOS, impondo que a \"alimentação principal do equipamento SDTU deve ser terminantemente ISOLADA na chave fusível do Painel de Distribuição de Bordo do Navio\" antes do destravamento da alavanca.",
      "O técnico deve apenas colocar a chave frontal ON/OFF da SDTU na posição OFF, mantendo o disjuntor do quadro principal de bordo ligado.",
      "É necessário aumentar a tensão da rede para 240V a fim de descarregar os capacitores de filtro antes de tocar nos conectores da placa.",
      "Deve-se mergulhar a tampa frontal de alumínio em água doce do mar para equalizar o potencial elétrico entre o chassi e a carcaça."
    ],
    answer: "As tensões agressivas nominais de 115V ou 230V são fatais às vias CMOS, impondo que a \"alimentação principal do equipamento SDTU deve ser terminantemente ISOLADA na chave fusível do Painel de Distribuição de Bordo do Navio\" antes do destravamento da alavanca.",
    explanation: "Devido à presença de tensões perigosas de rede (115V ou 230V AC) no interior do chassi e ao extremo risco de dano por arcos elétricos nos circuitos CMOS ao plugar/desplugar placas sob tensão, a norma de segurança impõe como primeiro passo obrigatório que a alimentação principal da SDTU seja totalmente isolada e desenergizada no Painel de Distribuição de Bordo (disjuntor/fusível do navio) antes de qualquer abertura ou remoção de cartões.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Durante a rotina trimestral da fragata, qual o número que os displays frontais (7 segmentos) precisam rolar em teste para atestar higidez total?",
    options: [
      "Sob a função simulada, os técnicos apertam SIM UP/DOWN varrendo exaustivamente os blocos na varredura numérica cruzada rodando os algarismos de 0 a 9 em cada casa de nó.",
      "Os técnicos pressionam MODE para exibir o número fixo e invariável de 8888,88 milhas náuticas durante 60 segundos contínuos.",
      "A tela deve rolar exclusivamente a sequência alfanumérica de letras \"A-B-C-D-E-F\" para confirmar a calibração hexadecimal da RAM.",
      "O painel precisa piscar o número 0000 dez vezes seguidas sem emitir nenhum ruído de relé mecânico interno no chassi."
    ],
    answer: "Sob a função simulada, os técnicos apertam SIM UP/DOWN varrendo exaustivamente os blocos na varredura numérica cruzada rodando os algarismos de 0 a 9 em cada casa de nó.",
    explanation: "Na inspeção e verificação preventiva de rotina (manutenção trimestral), a integridade dos segmentos de LED dos visores frontais é testada colocando a SDTU em modo Simulado (SIM) e acionando as teclas \"SIM UP\" e \"SIM DOWN\" para fazer a velocidade percorrer toda a escala. Essa varredura contínua garante que todos os algarismos de 0 a 9 sejam perfeitamente exibidos em cada dígito dos displays, identificando eventuais segmentos queimados.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Qual o valor limitador exato e absurdo de limite extremo numérico que o painel trava no \"SIM UP\" trimestral se testado à exaustão?",
    options: [
      "A velocidade de limite superior mecânico computacional batida no teste cravará exatamente na quebra de 60,99 nós, travando a conta.",
      "O mostrador para na marcação exata de 99,99 nós e emite dois bipes curtos no alto-falante de alarme da ponte.",
      "O sistema reinicia a contagem em 0,00 nó em um ciclo infinito assim que ultrapassa o limiar de 50,00 nós.",
      "A contagem é bloqueada no limite estrito de 45,50 nós, coincidente com a velocidade máxima teórica das turbinas de fragatas."
    ],
    answer: "A velocidade de limite superior mecânico computacional batida no teste cravará exatamente na quebra de 60,99 nós, travando a conta.",
    explanation: "Durante o teste de simulação em subida contínua pressionando \"SIM UP\" até a exaustão da escala, a computação da SDTU e a matriz do display de velocidade atingem o teto máximo operacional do odômetro, travando e congelando a indicação exatamente no limite superior computado de 60,99 nós.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Um navio está fundeado com a haste totalmente fora d'água no dique. O mantenedor vai realizar a inspeção visual semestral que roda o sistema. O que ele TEM QUE usar sob risco de explodir o sensor?",
    options: [
      "O marinheiro é proibido de emitir a seco. O sistema/cartões requer e exige conexões a um aparelho rústico em hardware chamado \"Simulador de Haste AGI\" enganando o painel de bordo a fim do transdutor nativo não entrar em modo \"aeração/superaquecimento destrutivo\" pelas vias abertas de escuta na bobina isolada.",
      "O mantenedor deve cobrir a ponta da haste com um balde de gelo picado para manter a bobina resfriada abaixo de 10 °C.",
      "Deve envolver a haste com fita isolante de alta tensão e aterrar os eletrodos diretamente à estrutura de aço do dique seco.",
      "É obrigatório ligar em paralelo um resistor de carvão de 10.000 Ohms entre a entrada analógica e o terra do passadiço."
    ],
    answer: "O marinheiro é proibido de emitir a seco. O sistema/cartões requer e exige conexões a um aparelho rústico em hardware chamado \"Simulador de Haste AGI\" enganando o painel de bordo a fim do transdutor nativo não entrar em modo \"aeração/superaquecimento destrutivo\" pelas vias abertas de escuta na bobina isolada.",
    explanation: "A bobina do sensor eletromagnético gera campo magnético e dissipa calor, sendo projetada para trabalhar submersa na água do mar (que atua como meio condutor e de resfriamento). Se o navio estiver em doca seca ou com a haste fora d'água e a SDTU for energizada para testes de manutenção, é expressamente obrigatório desconectar a haste real e conectar o \"Simulador de Haste AGI\" (Dummy Sensor / Simulator), evitando o superaquecimento destrutivo da bobina e danos aos circuitos do amplificador do Módulo 4.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Após verificar os terminais, que produto químico é ordenado na faina preventiva a fim de lacrar a tampa robusta de alumínio das placas para navegação marítima?",
    options: [
      "Aplicar uma \"leve camada rigorosa de graxa de puro silicone\" espalhando estritamente apenas nas emborrachadas das vedações nativas do visor da janela de tela frontão e da moldura tampa isoladora frontal pesada para prevenir asfalto/oxidação pela maresia agressiva.",
      "Aplicar uma camada espessa de graxa grafitada à base de lítio em todos os pinos de cobre dos conectores de fundo do backplane.",
      "Pulverizar querosene industrial ou óleo WD-40 diretamente sobre a placa-mãe e dentro dos potenciômetros de ajuste analógico.",
      "Vedar a junção da tampa com cola de silicone selante à base de ácido acético para colar permanentemente o painel frontal ao chassi."
    ],
    answer: "Aplicar uma \"leve camada rigorosa de graxa de puro silicone\" espalhando estritamente apenas nas emborrachadas das vedações nativas do visor da janela de tela frontão e da moldura tampa isoladora frontal pesada para prevenir asfalto/oxidação pela maresia agressiva.",
    explanation: "Na manutenção preventiva e fechamento do chassi do odômetro, a norma técnica ordena a aplicação de uma leve e uniforme camada de graxa de silicone pura exclusivamente sobre os anéis de vedação de borracha (gaskets) da tampa frontal de alumínio e da janela do display. Isso preserva a elasticidade da vedação hermética à prova d'água e impede a entrada da atmosfera agressiva, salina e úmida marítima, sem degradar a borracha ou contaminar os circuitos.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "De quantas vias no total é formada a arquitetura para gravação de curva calibrada de arrasto no sistema de \"águas\"?",
    options: [
      "As rotinas base requerem e gravam perfis escalonados em sub-tabelas interpoladas estritas em marcações de \"até 14 pontos físicos de calibração alocadas isoladas para cada Haste\" no limite entre (0 e 60 Nós de velocidade náutica).",
      "A calibração é feita por um único ponto fixo em 10 nós, assumindo uma linha reta perfeita de inclinação constante até 60 nós.",
      "O sistema exige exatamente 100 pontos de calibração espaçados de 0,5 em 0,5 nó, digitados manualmente via teclado hexadecimal.",
      "A curva é gravada por meio de 4 pontos cardeais fixados em 0, 15, 30 e 45 nós com precisão angular de bússola."
    ],
    answer: "As rotinas base requerem e gravam perfis escalonados em sub-tabelas interpoladas estritas em marcações de \"até 14 pontos físicos de calibração alocadas isoladas para cada Haste\" no limite entre (0 e 60 Nós de velocidade náutica).",
    explanation: "Para compensar as não-linearidades do fluxo de água ao redor do casco e da haste (curva de arrasto e camada limite em diferentes faixas de velocidade), a arquitetura do AGI-LOG permite gravar na memória não volátil do Módulo 2 uma curva de calibração detalhada com até 14 pontos físicos de calibração discretos distribuídos ao longo da faixa de medição de 0 a 60 nós para cada transdutor selecionado.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Onde está localizado o \"Cartão do Relé da Haste\" segundo o diagrama das baias da placa?",
    options: [
      "Ele é englobado e anexado aos pés físicos/bases do esqueleto interno; sendo conceituado como peça integral orgânica fundida em parte estrutural ao (Conjunto de Chassis / Módulo Cego 9) repousando abaixo da placa barramento mãe isoladora de base (\"motherboard\") da carcaça do Odômetro central de ponte.",
      "Está montado externamente em uma caixa de junção impermeável fixada no porão do navio, diretamente ao lado do tubo da haste retrátil.",
      "É soldado diretamente sobre a superfície superior do Cartão Microprocessador (Módulo 2) para minimizar o tempo de chaveamento lógico.",
      "Encontra-se embutido dentro do invólucro do transdutor submerso em quilha, envolvido em resina de poliuretano de alta densidade."
    ],
    answer: "Ele é englobado e anexado aos pés físicos/bases do esqueleto interno; sendo conceituado como peça integral orgânica fundida em parte estrutural ao (Conjunto de Chassis / Módulo Cego 9) repousando abaixo da placa barramento mãe isoladora de base (\"motherboard\") da carcaça do Odômetro central de ponte.",
    explanation: "O Cartão do Relé da Haste (ou conjunto de relés de seleção do transdutor) não é um módulo plug-in vertical comum nas guias de 1 a 12; ele é montado na estrutura inferior da carcaça, posicionado fisicamente abaixo da placa-mãe (motherboard/backplane) no conjunto de chassi, atuando no roteamento seguro de sinais e potência de excitação do sensor.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    question: "Quais resistências as saídas de relé isoladas (livres de potencial) suportam sem derreter nas saídas auxiliares do Módulo 7 das repetidoras navais?",
    options: [
      "São chaves de transição brutas aguentando 1 Amperè sob 125 Volts AC em RMS e suportam na tolerância cargas cegas cruas resistivas em cravado (1 Ampére e 150 Volts DC); munidas de rigoroso isolamento superior magnético nativo isolando picos acima de marca \"200 Volts\" da rede paralela naval para que o sistema de tiro nunca acione as chaves da CPU internamente.",
      "Suportam no máximo 100 mA sob 12 Volts DC, sendo estritamente proibida a ligação de qualquer carga indutiva ou tensão alternada AC.",
      "Aguentam cargas pesadas de até 15 Ampères sob 380 Volts trifásicos AC, dispensando o uso de contatoras de potência externas.",
      "São projetadas para suportar 5 Ampères em 24 Volts DC e zero tensão alternada, protegidas por microfusíveis de vidro de queima rápida."
    ],
    answer: "São chaves de transição brutas aguentando 1 Amperè sob 125 Volts AC em RMS e suportam na tolerância cargas cegas cruas resistivas em cravado (1 Ampére e 150 Volts DC); munidas de rigoroso isolamento superior magnético nativo isolando picos acima de marca \"200 Volts\" da rede paralela naval para que o sistema de tiro nunca acione as chaves da CPU internamente.",
    explanation: "Os quatro contatos de relé opto/magneticamente isolados do Módulo 7 possuem especificações elétricas robustas para interfaceamento naval: suportam cargas resistivas de até 1 Ampère com tensões de até 125 Volts AC (RMS) ou até 150 Volts DC (com corrente máxima de 1A), contando com alto isolamento dielétrico (superior a 200V/picos) que blinda os circuitos lógicos da CPU da SDTU contra surtos e retornos da rede externa do navio ou do controle de tiro.",
    topic: "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  }
];
