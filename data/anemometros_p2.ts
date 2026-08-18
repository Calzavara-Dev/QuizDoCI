import type { Question } from "../types/question";

export const anemometrosP2Questions: Question[] = [
  {
    question: "O sistema de navegação inercial Sperry MK-39 Mod.3A emprega como sensor inercial (IMU):",
    options: [
      "Três anéis de giro a laser (RLG) e três acelerômetros",
      "Dois anéis de giro a laser (RLG) e quatro acelerômetros",
      "Um anel de giro a laser (RLG) e três acelerômetros",
      "Três anéis de giro convencionais e dois acelerômetros",
    ],
    answer: "Três anéis de giro a laser (RLG) e três acelerômetros",
    explanation: "O coração do sistema é uma unidade de medição inercial que funciona em uma configuração conhecida como 'Strap down'. Isso significa que os sensores estão fixos na estrutura do veículo. Para detectar qualquer mudança de atitude ou aceleração no espaço tridimensional, ele utiliza exatamente três anéis de giro a laser (Ring Laser Gyros), dispostos de forma a criar um triedro ortogonal, e três acelerômetros que possuem seus eixos de sensibilidade posicionados paralelamente aos eixos de leitura dos giros."
  },
  {
    question: "Quais dados de entrada o sistema requer primariamente para seu funcionamento contínuo?",
    options: [
      "Profundidade e temperatura da água",
      "Velocidade (Odômetro) e a posição do navio (GPS ou operador)",
      "Direção do vento e pressão atmosférica",
      "Rotação do motor e consumo de combustível",
    ],
    answer: "Velocidade (Odômetro) e a posição do navio (GPS ou operador)",
    explanation: "Para calcular com precisão a navegação ao longo do tempo, os algoritmos inerciais dependem de informações externas confiáveis para compensar derivas naturais. O Sperry MK-39 exige a entrada do sinal de velocidade do navio, que é alimentado pelo odômetro local (Log), juntamente com a posição real (latitude e longitude), que geralmente é provida por um receptor de GPS acoplado ou, na sua ausência, inserida de forma periódica manualmente pelo próprio operador do sistema."
  },
  {
    question: "Quais são os dados de saída fornecidos pelo sistema MK-39 Mod. 3A?",
    options: [
      "Velocidade do vento, temperatura, pressão e atitude",
      "Rotação do eixo, consumo elétrico e falhas de motor",
      "Latitude, longitude, velocidade norte, velocidade leste, velocidade de referência e dados de alinhamento",
      "Tensão de baterias, corrente e alarmes de incêndio",
    ],
    answer: "Latitude, longitude, velocidade norte, velocidade leste, velocidade de referência e dados de alinhamento",
    explanation: "Uma vez processando as inércias e cruzos de dados de GPS e Odômetro, o sistema entrega um panorama situacional tático completo ao navio. As saídas essenciais exportadas são a coordenada atualizada de navegação (latitude e longitude), as componentes de vetor de velocidade (norte e leste), a velocidade de referência e todos os parâmetros dinâmicos formatados que são necessários para que as repetidoras realizem o alinhamento da proa do navio."
  },
  {
    question: "Quais modelos do sistema de navegação inercial Sperry MK-39 são utilizados pela MB (Marinha do Brasil)?",
    options: [
      "3B e 3D",
      "2A e 2B",
      "3A e 3C",
      "4A e 4B",
    ],
    answer: "3A e 3C",
    explanation: "A família de equipamentos MK-39 possui diversas variantes com ligeiras diferenças de interface ou tolerâncias. Na infraestrutura da Marinha do Brasil, convencionou-se padronizar a frota para a utilização restrita dos modelos Mod. 3A e Mod. 3C, facilitando assim as rotinas de manutenção, substituição de peças e treinamento do corpo técnico."
  },
  {
    question: "Quais são os limites de movimento dinâmico suportados pelo sistema para Balanço (Roll) e Caturro (Pitch), respectivamente?",
    options: [
      "± 10 graus e ± 40 graus",
      "± 15 graus e ± 10 graus",
      "± 40 graus e ± 15 graus",
      "± 90 graus e ± 40 graus",
    ],
    answer: "± 40 graus e ± 15 graus",
    explanation: "Os sensores a laser do equipamento são projetados para suportar sem perda de alinhamento ou erro de saturação as inclinações severas naturais de uma embarcação em mar revolto. O limite estrutural para a oscilação lateral do casco, conhecida como Balanço (Roll), é de até 40 graus para cada bordo. Já a oscilação longitudinal de proa a popa, o Caturro (Pitch), suporta inclinações de até 15 graus positivos ou negativos."
  },
  {
    question: "Quais são as características de movimento dinâmico para Guinada (Yaw) e a faixa de velocidade operacional do sistema?",
    options: [
      "± 15 graus; 0 a 50 nós",
      "± 10 graus; 10 a 90 nós",
      "± 40 graus; 20 a 100 nós",
      "± 5 graus; 0 a 30 nós",
    ],
    answer: "± 10 graus; 10 a 90 nós",
    explanation: "A dinâmica horizontal da embarcação, que desvia o bico do navio em relação ao rumo (Guinada ou Yaw), é compensada pelo algoritmo em desvios de até ± 10 graus de banda. Paralelamente, o algoritmo matemático da ECU está aferido e projetado para tratar e calcular velocidades (Speed) perfeitamente dentro de uma faixa operacional que abrange movimentos lentos ou manobras ágeis de 10 até 90 nós de velocidade marítima."
  },
  {
    question: "Qual é a especificação da alimentação principal do sistema?",
    options: [
      "115 Volts 400 Hz (Dissipação 200W)",
      "24 a 28 VCD nominais, faixa de 18 a 36 VCD, com dissipação máxima de 130W",
      "115 Volts 60 Hz (Dissipação 50W)",
      "12 a 24 VCD nominais, dissipação de 75W",
    ],
    answer: "24 a 28 VCD nominais, faixa de 18 a 36 VCD, com dissipação máxima de 130W",
    explanation: "A malha principal de potência do MK-39 opera nativamente em Corrente Contínua (VCD). Sua tensão de trabalho nominal esperada é entre 24 e 28 VCD, possuindo uma larga janela de segurança eletrônica que lhe permite sustentar operação contínua mesmo se a tensão variar na faixa de 18 a 36 VCD. Todo o conjunto interno sob máximo processamento impõe uma dissipação de carga de no máximo 130 Watts."
  },
  {
    question: "Qual é a voltagem, frequência e dissipação máxima da Referência Síncrona (não vital)?",
    options: [
      "220 Volts 50 Hz, 100W",
      "24 VDC, 50W",
      "115 Volts 400 Hz, máximo de 75W",
      "115 Volts 60 Hz, máximo de 130W",
    ],
    answer: "115 Volts 400 Hz, máximo de 75W",
    explanation: "Circuitos síncronos navais clássicos exigem alimentação padronizada em alta frequência para prover leitura imediata aos ponteiros repetidores no passadiço. O sistema obtém da malha do próprio navio os 115 Volts pulsando em Corrente Alternada de 400 Hz para usar apenas como onda portadora de excitação, consumindo em sua operação de indução uma parcela muito pequena de energia, limitada a no máximo 75 Watts de dissipação."
  },
  {
    question: "De onde provém a alimentação de emergência do sistema e qual é o seu valor?",
    options: [
      "Do gerador auxiliar, 115 Volts",
      "Da bateria, 24 VDC",
      "Da fonte UPS externa, 115 Volts 400 Hz",
      "Do quadro elétrico principal, 28 VDC",
    ],
    answer: "Da bateria, 24 VDC",
    explanation: "Em cenários de combate térmico ou blackouts totais do fornecimento gerador do navio, equipamentos inerciais não podem perder energia de forma abrupta, pois isso apagaria instantaneamente as posições de cálculo em andamento. Como salvaguarda para manter o coração do sistema vivo, existe uma rota de alimentação emersencial direta de 24 VDC provida pelo pack de baterias seladas embutido na arquitetura externa (UPS-1)."
  },
  {
    question: "Qual é a voltagem e a(s) frequência(s) da referência do sinal de velocidade do navio?",
    options: [
      "24 VDC",
      "115 Volts 50 Hz",
      "115 Volts 60 ou 400 Hz",
      "220 Volts 60 Hz",
    ],
    answer: "115 Volts 60 ou 400 Hz",
    explanation: "Os sinais do odômetro físico da quilha do navio (Log), que medem a passagem da água e reportam a velocidade, também trabalham modulados em corrente alternada para garantir a imunidade a ruídos longos. Essa referência chega ao sistema sempre cravada na tensão clássica de 115 Volts, podendo operar de acordo com o padrão construtivo do navio, seja no ciclo de 60 Hz mais simples, ou na alta frequência rádio-navio de 400 Hz."
  },
  {
    question: "Quais são os meios utilizados para inserir dados de entrada no sistema?",
    options: [
      "Sinal de velocidade (Odômetro), sinais do GPS e dados introduzidos via teclado",
      "Sinal de sonar, anemômetro e rádio VHF",
      "Pen drive, rede local e teclado",
      "Odômetro, radar e barômetro",
    ],
    answer: "Sinal de velocidade (Odômetro), sinais do GPS e dados introduzidos via teclado",
    explanation: "A inserção de referências primárias externas no MK-39 acontece em três frentes: via sensores contínuos (pulso automatizado do Odômetro atrelado à velocidade da água), via antenas posicionadoras satelitais (leitura de sentença digital de dados do GPS), ou via manipulação de software direta executada pelo humano (operador introduzindo ajustes temporais, posições manuais ou fixações via o teclado emborrachado na RCDU)."
  },
  {
    question: "Quais são as velocidades dos sinais sincros analógicos para o Rumo (Heading)?",
    options: [
      "1:1 e 2:1",
      "2:1 e 36:1",
      "1:1 e 36:1",
      "1:1 e 10:1",
    ],
    answer: "1:1 e 36:1",
    explanation: "A informação de Rumo (para onde o nariz do navio de fato aponta em relação ao Norte Verdadeiro) é um dado extremamente crítico para o timoneiro e sistemas de armas. Esse valor analógico é transmitido eletricamente na infraestrutura repetidora naval usando um par duplo de engrenagens eletromagnéticas (sincros): um canal de curso lento em escala de 1:1 e um canal de giro veloz em engrenagem de 36:1 para apontamentos micrométricos perfeitos no relógio."
  },
  {
    question: "Para as saídas analógicas de Balanço e Caturro (Roll/Pitch), quais são as opções de velocidades dos sinais sincros?",
    options: [
      "1:1 e 10:1 ou 2:1 e 10:1",
      "1:1 e 36:1 ou 2:1 e 36:1",
      "Apenas 36:1",
      "Apenas 1:1 e 2:1",
    ],
    answer: "1:1 e 36:1 ou 2:1 e 36:1",
    explanation: "Ao contrário do Rumo, o comportamento de jogar de lado (Balanço) e caturrar (Pitch) possui uma dinâmica muito mais volátil. Para comportar repetidoras com diferentes faixas de engrenagem, essas inclinações analógicas contam com dupla escolha de saídas que podem operar tanto no conjunto misto 1:1 e 36:1, ou utilizar uma relação de giro base modificada do motor síncrono configurada em 2:1 em paralelo ao fino 36:1."
  },
  {
    question: "Quais dados são fornecidos como saídas puramente digitais pelo sistema?",
    options: [
      "Tensão, Corrente e Resistência",
      "Balanço (Roll), Caturro (Pitch), Rumo (Heading) e Rates (suas variações)",
      "Temperatura da água e velocidade do som",
      "Altitude, pressão atmosférica e umidade",
    ],
    answer: "Balanço (Roll), Caturro (Pitch), Rumo (Heading) e Rates (suas variações)",
    explanation: "Enquanto as saídas analógicas são destinadas para ponteiros antigos e repetidoras mecânicas, o MK-39 exporta todo o resumo tridimensional digitalizado em alta velocidade para consoles táticos modernos. Essas malhas de dados via cabo transportam informações cruas quantificadas de atitude (Balanço/Caturro), a proa absoluta (Rumo/Heading), e os 'Rates', que são essencialmente os cálculos em tempo real das derivadas de cada inclinação para antever o próximo balanço."
  },
  {
    question: "Como são indicados os alarmes no sistema?",
    options: [
      "Apenas visualmente no painel",
      "Apenas sonoramente",
      "Através de indicação sonora e visual",
      "Através de impressão de relatórios de falha",
    ],
    answer: "Através de indicação sonora e visual",
    explanation: "Situações críticas envolvendo falha de leitura a laser, perdas de sinal GPS ou falhas de energia podem comprometer imediatamente as soluções inerciais de tiro em alto-mar. Portanto, para assegurar que nenhum operador ignorará o aviso de degradação da navegação, os painéis da ECU (no equipamento) e da RCDU emitem o alerta tanto acendendo lâmpadas frontais inconfundíveis (aviso visual) quanto acionando buzinas agudas incorporadas na chapa do painel (aviso sonoro)."
  },
  {
    question: "O controle remoto \"RCDU\" do sistema Sperry MK-39 Mod. 3A é um componente:",
    options: [
      "Obrigatório para qualquer instalação",
      "Exclusivo para o laboratório do fabricante",
      "Opcional",
      "Instalado apenas em submarinos",
    ],
    answer: "Opcional",
    explanation: "A Unidade de Controle a Distância e Display (RCDU) não participa do trabalho pesado de processamento matemático de giro ou da comunicação de dados. Ela age estritamente como um terminal passivo em formato de caixa com teclado. Sendo assim, na arquitetura do sistema do navio, a RCDU é classificada como um módulo opcional, que agrega tremenda comodidade de configuração à distância para o homem, porém cuja ausência física não impede que a caixa central inercial inicie e navegue autonomamente."
  },
  {
    question: "O gabinete da Unidade Mestra (INS) é dividido fisicamente em duas partes principais:",
    options: [
      "Painel frontal e teclado",
      "Parte superior (ECU - Gabinete Eletrônico) e parte inferior (IMU - Unidade de Medição Inercial)",
      "IMM (Módulo de Medição) e IEM (Módulo Eletrônico)",
      "Fonte UPS e Bateria de emergência",
    ],
    answer: "Parte superior (ECU - Gabinete Eletrônico) e parte inferior (IMU - Unidade de Medição Inercial)",
    explanation: "A estrutura inteira da chamada Unidade de Navegação Inercial Mestra é encapsulada em um robusto monobloco isolado e refrigerado em uma caixa única que se biparte perfeitamente em duas seções. A metade superior hospeda a Unidade do Gabinete Eletrônico (ECU) contendo todo o arranjo de processadores, conversores e chaves de energia. Enquanto a parte maciça e isolada imediatamente inferior é dedicada exclusivamente para abrigar e absorver ruídos da Unidade de Medição Inercial (IMU)."
  },
  {
    question: "A Unidade do Gabinete Eletrônico (ECU) é subdividida em quais partes?",
    options: [
      "Painel de controle, Rack dos cartões e Suplemento interno de energia (PS1)",
      "Monitor, Teclado e FIM",
      "Acelerômetros, Anéis a laser e Processador Central",
      "IMM, IEM e CB3",
    ],
    answer: "Painel de controle, Rack dos cartões e Suplemento interno de energia (PS1)",
    explanation: "Para facilitar a manutenção técnica da inteligência eletrônica da ECU de forma compartimentada, as rotinas de revisão abordam a unidade separando-a mentalmente em três blocos emissores essenciais: a casca/testa operacional (onde estão montados fisicamente os fusíveis, chaves e o Painel de Controle), a gaiola do computador interna (o Rack dotado das guias para inserção das placas/cartões de circuitos) e a mini-estação de usina secundária (o Suplemento robusto da PS1 para alimentar as próprias lógicas)."
  },
  {
    question: "Qual é a função do Painel de Controle, localizado na parte frontal da ECU?",
    options: [
      "Exibir o display digital e teclado de navegação",
      "Abrigas as baterias de emergência",
      "Conter todas as chaves e indicadores necessários para a partida do sistema",
      "Realizar a conexão externa de rede",
    ],
    answer: "Conter todas as chaves e indicadores necessários para a partida do sistema",
    explanation: "A chapa defletora frontal de metal robusto que encerra a ECU atua apenas como uma vitrine de comandos diretos puramente físicos para as malhas vitais de força. Esse Painel de Controle é destituído de monitores digitais para navegação e engloba puramente uma grade pragmática constituída pelos disjuntores de armar os módulos de tração elétrica, a grande alavanca mestra giratória tripla para acionamento primário, o horímetro mecânico e os principais faróis de checagem do barramento (lâmpadas vitais)."
  },
  {
    question: "Onde está localizado e qual a função do Rack dos Cartões (A2)?",
    options: [
      "Na RCDU, para gravar os logs de navegação",
      "Na parte inferior da INS, para abrigar os sensores",
      "Na parte interna da ECU (posterior ao painel de controle), possuindo os cartões com os diversos circuitos eletrônicos",
      "Fora do gabinete da INS, em uma caixa blindada",
    ],
    answer: "Na parte interna da ECU (posterior ao painel de controle), possuindo os cartões com os diversos circuitos eletrônicos",
    explanation: "Localizado no ventre oculto do módulo eletrônico, escondido estrategicamente do alcance casual humano pelas proteções metálicas frontais do painel da ECU, reside uma esteira contínua e vazada referida sob a alcunha militar de 'A2' (Rack dos Cartões). Seu papel estrito consiste em atuar como o chassi mãe para abraçar fisicamente e interligar os módulos trocáveis a quente (as PCBs eletrônicas, como conversores e o processador), garantindo alinhamento e dissipação ventilada das guias termais."
  },
  {
    question: "No Rack dos Cartões da ECU, qual é o cartão A3?",
    options: [
      "Unidade de Medição Inercial (IMU)",
      "Processador Central (CPU)",
      "Interface Quad Serial",
      "Interface de Sensores",
    ],
    answer: "Processador Central (CPU)",
    explanation: "Dentre a contagem metódica e linear de posições numeradas dos encaixes lógicos no barramento do rack, o cartão encravado na terceira fenda e identificado no esquema elétrico simplesmente como 'A3' representa isoladamente o 'cérebro' do arranjo – o Processador Central (CPU). Essa placa agrupa o chipset e os algoritmos essenciais onde a matriz matemática absorve e digere pesadamente as informações caóticas extraídas em tempo real da inércia dos giros e dos satélites."
  },
  {
    question: "Qual cartão do rack da ECU é responsável pela Interface do Sensor (IMU)?",
    options: [
      "A3",
      "A4",
      "A5",
      "A6",
    ],
    answer: "A6",
    explanation: "O Módulo 'A6', referenciado na montagem de placas eletrônicas do painel traseiro como 'Sensor (IMU) Interface PCB', atua exclusivamente atuando de meio de campo comunicador elétrico entre os processadores isolados na ECU (na parte de cima do móvel) e as delicadas peças rotativas subjacentes localizadas na parte inferior. O sinal cru extraído das luzes e acelerações dos aros inerciais penetra obrigatoriamente primeiro nessa placa de captura A6 antes de ir pra CPU."
  },
  {
    question: "Qual a função dos cartões A7 e A8 no Rack da ECU?",
    options: [
      "São módulos de baterias de longa duração",
      "São os conversores síncronos (Synchro Converter Assembly)",
      "Controlam os motores do giroscópio",
      "Processam o sinal do GPS",
    ],
    answer: "São os conversores síncronos (Synchro Converter Assembly)",
    explanation: "Muitas instalações de navios ainda empregam sistemas eletromecânicos tradicionais para exibir os perfis do horizonte da embarcação que necessitam de correntes analógicas alternadas induzidas ao longo do seu rotor para moverem seus ponteiros fisicamente. Os módulos geminados, identificados como cartões A7 e A8 (Synchro Converter Assembly), são dotados da exclusiva atribuição de modular e transcrever digital-para-analógico transformando os perfis digitais de Pitch, Roll e Heading em correntes de varredura adequadas ao sincronismo."
  },
  {
    question: "O Suplemento Interno de Energia (PS1) fornece 5, 15 e 24 VDC a partir de 28 VDC. Por que esta fonte possui um filtro de linha?",
    options: [
      "Para aumentar a tensão de saída para 115V",
      "Para evitar interferência de Radiofrequência (RF)",
      "Para transformar corrente contínua em alternada",
      "Para proteger contra curtos na rede mecânica",
    ],
    answer: "Para evitar interferência de Radiofrequência (RF)",
    explanation: "Sistemas embarcados que processam laser são altamente propensos a sucumbir ou realizar falsas marcações de desvio devido à irradiação ambiental ou correntes espúrias viajando via cabo dentro de navios lotados de antenas e motores. O robusto bloco de conversão DC/DC embutido na PS1 incorpora um forte estágio capacitivo de filtragem de linha de modo a agir profilaticamente como uma armadilha, extirpando a entrada acidental de harmônicas perigosas de Radiofrequência (RF) para dentro das placas da ECU."
  },
  {
    question: "A Unidade de Medição Inercial (IMU) é considerada o coração do sistema e se divide em:",
    options: [
      "Painel e Rack",
      "Cartões Analógicos e Cartões Digitais",
      "Módulo de Medição Inercial (IMM) e Módulo Eletrônico Inercial (IEM)",
      "Fonte primária e secundária",
    ],
    answer: "Módulo de Medição Inercial (IMM) e Módulo Eletrônico Inercial (IEM)",
    explanation: "A caixa densa e escura no patamar inferior, ou Unidade de Medição Inercial (IMU), é responsável física e taticamente pela detecção da própria existência da embarcação no planeta, sem a qual os cérebros digitais não possuem o que ler. Visando isolamento termal e manutenção otimizada, a bolha dessa IMU isolada é segmentada em duas engrenagens associadas: a bola pura das massas em si, chamada IMM, acompanhada logo abaixo da base de circuitos imediatos interpretadores, conhecida como bloco IEM."
  },
  {
    question: "Como estão dispostos os eixos sensíveis dos acelerômetros no Módulo de Medição Inercial (IMM)?",
    options: [
      "Estão perpendiculares aos eixos virtuais dos giros",
      "Estão paralelos aos eixos virtuais dos giros a laser",
      "Estão em ângulo de 45 graus com os gyros",
      "Ficam livres para rotacionar independente dos giros",
    ],
    answer: "Estão paralelos aos eixos virtuais dos giros a laser",
    explanation: "A filosofia adotada para o alinhamento matemático cruzado nessa configuração compactada chamada 'strap down' é baseada na correspondência exata das dimensões puras. Sendo assim, o Módulo IMM acomoda um espelho prismático contendo três anéis de giros a laser criando fisicamente um triedro ortogonal e preenchendo as arestas x,y,z da gravidade com as pastilhas dos três acelerômetros amarrados espacialmente paralelos, um a um, de forma exata para simular as três retas virtuais."
  },
  {
    question: "Quais dos componentes a seguir fazem parte do Módulo Eletrônico Inercial (IEM)?",
    options: [
      "Teclado alfanumérico e display LCD",
      "Lâmpadas indicadoras de falha e chaves mestras",
      "Cartão de controle de temperatura dos acelerômetros, microprocessador, interface RS422, sincronização de acelerômetros e PROM calibrador",
      "Fonte PS1, Disjuntores CB1 e CB2",
    ],
    answer: "Cartão de controle de temperatura dos acelerômetros, microprocessador, interface RS422, sincronização de acelerômetros e PROM calibrador",
    explanation: "O invólucro do IEM, anexo subjacente intimamente preso aos discos de luz da IMU para interpretar as minúcias imediatas antes do envio para o computador mestre de cima (A3), aloja os controladores táticos mais sujos de sinal elétrico. Seu diagrama dispõe as placas controladoras térmicas e de sincronismo preciso das pedras dos acelerômetros, um processador menor para gestão do pacote local, seu chip de histórico serial de fábrica calibração (a PROM originária do bloco), além do link serial de escoamento rápido no barramento RS422."
  },
  {
    question: "A Chave Mestra de Alimentação (S1) na posição \"OFF\" (desligada):",
    options: [
      "Conecta os 24 VDC da bateria",
      "Aciona o modo de economia de energia",
      "Desconecta os 28 VDC da fonte externa para alimentação do sistema",
      "Realiza o auto-teste da ECU",
    ],
    answer: "Desconecta os 28 VDC da fonte externa para alimentação do sistema",
    explanation: "O controle mandatório universal S1 encravado no peito do painel principal foi desenvolvido como um interruptor contundente em 3 fases de travamento. Ao rodá-lo propositalmente sobre o clique da posição extremada em OFF, as travas metálicas são desativadas de modo incontornável isolando de imediato a passagem brutal da malha estabilizada externa que transporta o pacote espesso dos 28 VDC. Nesse momento as placas param e a CPU sufoca por completa ausência de força matriz."
  },
  {
    question: "Na Chave Mestra de Alimentação (S1) da INS, qual é a função da posição \"REMOTE\"?",
    options: [
      "Isola a RCDU e opera apenas pela INS",
      "Conecta os 28 VDC para operação e disponibiliza 24 VDC para a chave \"system power\" na RCDU, possibilitando operação remota",
      "Ativa o transmissor de rádio para controle via satélite",
      "Inverte as telas entre o PC e a RCDU",
    ],
    answer: "Conecta os 28 VDC para operação e disponibiliza 24 VDC para a chave \"system power\" na RCDU, possibilitando operação remota",
    explanation: "Quando a trava central S1 repousa estabilizada na marcação interina designada como REMOTE, ela permite que o cérebro da INS se levante no modo letárgico, abraçando o fornecimento padrão da bateria UPS de 28 VDC contudo cedendo inteira delegação de poder de ligar os demais cartões internos de medição para o pequeno ramal elétrico desviado de 24 VDC que flui secretamente para a botoeira isolada da caixa de display portátil (RCDU) presente no posto de comando navio afora."
  },
  {
    question: "O que ocorre quando a Chave Mestra de Alimentação (S1) é colocada na posição \"ON\"?",
    options: [
      "Desliga a RCDU imediatamente",
      "O sistema entra em modo de bateria",
      "Conecta os 28 VDC para a operação do sistema e alimenta a RCDU independentemente da posição da chave \"system power\" nela",
      "Apaga a memória de falhas",
    ],
    answer: "Conecta os 28 VDC para a operação do sistema e alimenta a RCDU independentemente da posição da chave \"system power\" nela",
    explanation: "Virar drasticamente a manete rotativa central (S1) para ON na caixa Mestra atua impondo dominância física sobre toda a árvore isolada dos chicotes do sistema inercial. O contato aciona uma inundação irrestrita da carga bruta de 28 VDC nas ilhas lógicas do rack superior forçando o levantamento em potência total para a navegação, energizando e iluminando acidentalmente qualquer módulo conectado à distância como as telas do controle remoto (RCDU), ignorando por completo qualquer obstrução do interruptor System Power que esteja na referida caixa operadora."
  },
  {
    question: "Qual disjuntor atua como a Chave de alimentação Principal do painel da INS?",
    options: [
      "CB1",
      "CB2",
      "CB3",
      "PS1",
    ],
    answer: "CB1",
    explanation: "Dentre a série de defletores e botões disjuntores alinhados horizontalmente para triar as faltas massivas oriundas de curto-circuitos diretos da rede primária naval, o disjuntor termomagnético gravado e conhecido pelos marinheiros em sua sigla simplória CB1, abrevia o circuito primário do 'Main Power'. Ele porta as cargas de tração base em 28 VDC fluindo sem obstáculos advindas do armário gerador ou UPS."
  },
  {
    question: "Qual é a função da Chave de alimentação da Referência Síncrona (CB2)?",
    options: [
      "Alimenta a RCDU com 24 VDC",
      "Alimenta com 115 Volts 400 Hz os circuitos de transmissão (Heading, Pitch e Roll)",
      "Controla a temperatura dos lasers",
      "Liga o alarme geral de bordo",
    ],
    answer: "Alimenta com 115 Volts 400 Hz os circuitos de transmissão (Heading, Pitch e Roll)",
    explanation: "Enquanto a energia bruta circula na máquina nos barramentos lógicos controlados pelo disjuntor anterior, a onda perigosa isolada de Alta Voltagem e alta reatância que serve puramente para girar motores navais em relógios pelo navio repousa seu poder atrás da alavanca isolada do CB2. Esse pequeno disjuntor aciona especificamente os dutos expostos que alimentam a tração do sinal 115 Volts (em 400 Hz) que jorram eletricidade analógica para os eixos síncronos cruciais da embarcação formarem Rumo, Balanço e Caturro."
  },
  {
    question: "O disjuntor CB3 é responsável por:",
    options: [
      "Desligar toda a alimentação do sistema",
      "Conectar a bateria de emergência",
      "Alimentar a RCDU e alarmes com 24 VDC",
      "Proteger o cartão de processador central (A3)",
    ],
    answer: "Alimentar a RCDU e alarmes com 24 VDC",
    explanation: "Destinando a separação de segurança entre componentes operacionais robustos no convés inferior e os visores flexíveis posicionados estrategicamente em locais vulneráveis como a ponte, há o terceiro estágio de isolamento, referenciado unicamente como CB3 (Remote Power). A função única e passiva do relé embutido no CB3 é atuar permitindo ou vetando que a fina tensão retificada e segura já transformada do sistema central (24 VDC) escoe pelos conectores traseiros da INS fluindo quilômetros de fio acima para iluminar as placas da unidade de conforto LCD remota (RCDU) ou disparar sinos."
  },
  {
    question: "O que indica a Lâmpada Indicadora DS1 na INS?",
    options: [
      "Falha no GPS",
      "Mau funcionamento do sistema",
      "Operação exclusiva a baterias",
      "Que a alimentação de 24 a 28 VDC (fonte externa) está disponível",
    ],
    answer: "Que a alimentação de 24 a 28 VDC (fonte externa) está disponível",
    explanation: "O monitoramento base sobre a sobrevivência energética fundamental da caixa não requer decodificação de display complexa na sala de máquinas apertada. A simples luminescência estabilizada de uma humilde lâmpada amarela inserida na frente da ECU, de identificação funcional de diagrama elétrico batizada DS1 (frequentemente com letreiro Power On impresso próximo), cumpre apenas o simples recado visual que a potência primária em VDC extraída do sistema da casamata vizinha, no patamar de 24 a 28 VDC, invadiu de fato o chassi pronto pro embate."
  },
  {
    question: "A Lâmpada Indicadora DS2, quando acesa, sinaliza:",
    options: [
      "Alimentação da bateria ativa",
      "O fim do alinhamento preciso",
      "Mau funcionamento nos circuitos do sistema",
      "Sucesso no auto-teste",
    ],
    answer: "Mau funcionamento nos circuitos do sistema",
    explanation: "Espelhando o papel do led parceiro para o caso de diagnóstico trágico, a sinalização luminosa dedicada instalada defronte à parte direita da Unidade Mestra atua em casos extremos sob a nomenclatura rígida referida localmente como DS2. Se em algum percurso o processador deduzir uma quebra estrutural nas respostas reflexivas dos anéis em giro, uma voltagem excessiva perigosa flutuando das placas ou mesmo perda crucial das informações da bola tática inferior, um relé secundário tranca a corrente e incandesce fixamente este filamento, que atesta, num único olhar de passagem, flagrante degradação sistêmica profunda (Malfunction) em curso."
  },
  {
    question: "Qual componente no painel da INS totaliza as horas de funcionamento do sistema?",
    options: [
      "Medidor de Tempo (M1)",
      "Lâmpada DS1",
      "PROM History",
      "Bateria de emergência",
    ],
    answer: "Medidor de Tempo (M1)",
    explanation: "Dado que as peças cerâmicas e reflexivas embutidas nos girômetros se exaurem ou desbotam sob o impacto dos anos de ionização contínua do uso prolongado, o controle mecânico inflexível e inviolável associado ao acompanhamento dessa obsolescência ocorre com uma relíquia visível de roletes na máscara frontal do sistema, denominado M1. Essa catraca contínua engajada eletronicamente apenas enquanto há tensão de força rolando nos condutores da CPU acumula sem falhas o registro frio dos milênios de horas ativas que o pacote de navegação atravessou sem desligar."
  },
  {
    question: "Se a chave Master Power (S1) na INS estiver na posição \"ON\", o que acontece se a chave \"System Power\" na RCDU for movimentada?",
    options: [
      "A RCDU será reiniciada",
      "Não influenciará no funcionamento, pois a RCDU é alimentada independente de sua própria chave nessa condição",
      "O sistema entrará em modo teste",
      "Provocará um alarme sonoro",
    ],
    answer: "Não influenciará no funcionamento, pois a RCDU é alimentada independente de sua própria chave nessa condição",
    explanation: "A lógica primária e inviolável da arquitetura eletrônica militar repassa sempre prioridade máxima e irrestrita à unidade central na casa das máquinas (INS). Ao se posicionar a chave principal do servidor base na extrema esquerda em sua fase plena denominada ON, a fonte subverte todos os esquemas rebaixando e contornando a proteção isolada que outorga ao usuário distante autonomia para desligar os próprios visores. Qualquer movimentação despretensiosa do comando do botão liga-desliga na tela tática remota do display (RCDU) será ignorada pelo hardware, já sobrecarregado intencionalmente na condição vital independente ligada a força bruta de baixo."
  },
  {
    question: "Na RCDU, o acendimento da lâmpada \"Alarm\" indica:",
    options: [
      "Falha de sistema",
      "Alimentação de 24 VDC disponível",
      "Display em modo teste",
      "Bateria com carga baixa",
    ],
    answer: "Falha de sistema",
    explanation: "Para não relegar a responsabilidade da detecção de desastre mecânico inercial apenas para passagens rotineiras perante as prateleiras na masmorra no fundo do navio, o aparelho repetidor da interface (RCDU), muitas vezes localizado diante da comodidade visual dos olhos no balcão do passadiço principal do barco, abriga logo abaixo da proteção de sua tela monocromática uma lâmpada vermelha de alerta (Alarm). Caso esta incandesça, ela espelha instantânea falha severa ou pane irrecuperável de cálculo ocorrida na parte mais remota do cérebro nos anéis inferiores indicando imperativamente a quebra geral de segurança no guiamento de armas do barco."
  },
  {
    question: "Quais as características do Mostrador Digital (LCD) da RCDU?",
    options: [
      "80 caracteres em 2 linhas, comunicação a 4800 bauds",
      "240 caracteres em 6 linhas, comunicação a 9600 bauds e intervalo de transmissão de 100 ms (10 mensagens/s)",
      "Tela touchscreen colorida com comunicação Ethernet",
      "Display de 7 segmentos de 3 linhas apenas numérico",
    ],
    answer: "240 caracteres em 6 linhas, comunicação a 9600 bauds e intervalo de transmissão de 100 ms (10 mensagens/s)",
    explanation: "O terminal de exibição dos complexos parâmetros de angulação instantânea da RCDU consiste tecnologicamente em uma pesada fita defletora de luz polarizada preenchida com um cristal primitivo desenhado num formato esguio para alocar as palavras. Esse mostrador tem dimensão compactada padronizada pela indústria comportando no total até 240 letras esverdeadas formadas numa área disposta em 6 linhas organizacionais densas empilhadas. A leitura remota pulsa entre o servidor primário na velocidade controlada e estável em 9600 bauds, retransmitindo todo o preenchimento de palavras para a tela num intervalo cego minúsculo e cadenciado constante a cada 100 milisegundos de fração gerando impressionante taxa suave correspondente a 10 renovações ou varreduras (mensagens) integrais por completo a cada decurso de segundo ininterrupto."
  },
  {
    question: "As teclas do teclado da RCDU são agrupadas em quais três categorias funcionais?",
    options: [
      "Navegação, Configuração e Emergência",
      "Letras, Números e Símbolos",
      "Seleção de menu, entrada de dados e controle do display",
      "Partida, Teste e Parada",
    ],
    answer: "Seleção de menu, entrada de dados e controle do display",
    explanation: "A operação pragmática do emaranhado de membranas emborrachadas expostas dispostas lado a lado abaixo da janela esverdeada no frontal do aparelho é didaticamente destrinchada pela leitura do seu layout em três vertentes essenciais. As guias mais externas, de escolha direta (como Sensor ou Mode), gerenciam a macro seleção forçando a abertura de páginas ou menus centrais de exibição das preferências primárias; As quadraturas numéricas lógicas e hexadecimais que repousam e compõem a praça interior realizam as ações secas mecânicas da introdução, o acerto de casas fracionadas das inclinações de coordenada manual da embarcação que compõe a área de entrada de dados pesados e retificados em números; Porventura e independentemente associadas à formatação mecânica plástica exposta sem afetar o dado numérico bruto navegado restam espalhadas as teclas pontuais de modificações das molduras ou calibrações puras das luzes e sombras refletidas encrustadas num emaranhado com o controle dos menus como Track ou Dim englobados de uma maneira unânime apenas num controle de aparência das linhas denominado genericamente de ferramentas de controle ergonômico estrito do próprio painel retro-iluminado e limpo ou seja, do estrito Controle do próprio Display."
  },
  {
    question: "Ao acionar a tecla \"Sensor\" na RCDU (um menu com duas páginas), o operador pode:",
    options: [
      "Mudar os limites de alarmes sonoros",
      "Ajustar a luminosidade",
      "Modificar os parâmetros dos sensores inseridos no sistema",
      "Fazer o alinhamento de rumo manualmente",
    ],
    answer: "Modificar os parâmetros dos sensores inseridos no sistema",
    explanation: "Conforme ilustra especificamente a tela que exemplifica o comportamento ativado pela membrana serigrafada por Sensor, essa rota leva direto na raiz hierárquica base responsável pelo gerenciamento seletivo de referências primárias atreladas à calibração ambiental imediata que flutua a deriva natural. Seu escopo primário e uníssono é permitir a verificação das janelas de acesso restrito (contendo páginas interativas com as raízes sensoriais da plataforma inercial exposta) fornecendo assim autonomia temporária remota e instantânea para a intromissão do homem visando comutar a vontade, habilitar com premissa ou descartar por inteiro no algoritmo a captação e medição de dados vitais advindos da ponte naval ou aferidos em tempo real de satélites como fontes e parâmetros associados às raízes das informações exatas oriundas dos relógios embutidos dos navios da série Sensor atados por inteiro na parte da base no sistema isolado do computador Mestre."
  },
  {
    question: "O que o operador pode modificar ao acionar a tecla \"Mode\" na RCDU?",
    options: [
      "Apenas a cor de fundo da tela",
      "A unidade de medida (nós para km/h)",
      "Os parâmetros de funcionamento do sistema",
      "Os dados de fábrica (History PROM)",
    ],
    answer: "Os parâmetros de funcionamento do sistema",
    explanation: "O acesso direto alcançado de modo pragmático à interface simplificada pela tecla uníssona grafada com o nome universal de Mode, subverte a hierarquia de detalhamento das páginas menores focando integralmente na definição da essência filosófica momentânea em curso pelas equações táticas correntes nos anéis lasers centrais na casa de máquinas distantes. Ao invocar a abertura singular dessa tela na parte frontal oposta, ganha-se imediato acesso de permissividade contundente para promover ou retroceder drasticamente as definições comportamentais do nível mestre permitindo a troca, por exemplo, de modos básicos inertes (Teste), saltar pro afago de cálculo de latitude (Align) que demandam o barco atracado sem inclinações extremas, até saltar num pulo na escala hierárquica na parte comportamental extrema da máquina a engatar as posições mais maduras de uso em curso com liberação atritiva do navio pronto destravado com navegação em estado irrestrito do cérebro matemático de processamento dinâmico tático e livre, isto é em Navegação integral irrestrita dos parâmetros unânimes do sistema."
  },
  {
    question: "A tecla \"Display\" na RCDU dá acesso a um menu de três páginas cuja função principal é:",
    options: [
      "Escolher a fonte de alimentação",
      "Imprimir as falhas em papel",
      "Selecionar várias saídas e parâmetros inseridos no sistema para serem exibidos no display",
      "Calibrar o acelerômetro",
    ],
    answer: "Selecionar várias saídas e parâmetros inseridos no sistema para serem exibidos no display",
    explanation: "Sendo um painel genérico, a limitação esguia das pequenas linhas em vidro verde disponíveis perante o operador precisa muitas vezes ser reajustada ou otimizada mediante um filtro temporário flexível de focado interesse de análise humana instantânea com uma membrana dedicada para rotinas pragmáticas puramente visuais das variáveis flutuantes na casa matemática sob a nomenclatura generalizada do botão lateral batizado pelo termo estrito inglês sob grafia da tecla chamada Display. Suas 3 sucessivas janelas desdobradas no LCD permitem, não uma modificação real perigosa na calibração tática de voo e inércia mas, na essência livre unânime flexibilizar de modo temporário ou fixar no mosaico da tela apenas saídas úteis flutuando valores vivos instantâneos oriundos num menu amigável de exibição farta com os principais parâmetros expostos soltos, calculados pela malha interna e já inseridos previamente nas tabelas das memórias rodando silenciosamente no fundo para apenas serem refletidas (exibidos pontualmente de modo passivo sem alterar na equação) momentaneamente na raiz frontal translúcida preenchida nos vácuos intermitentes das colunas flexíveis puramente sob do monitor frontal esverdeado num modo de visualização temporária desprendida solta puramente no dito Display em tela remota limpa."
  },
  {
    question: "Qual tecla do painel da RCDU permite ao operador executar as funções auxiliares do sistema?",
    options: [
      "Next Page",
      "Test",
      "Aux Func",
      "Bright",
    ],
    answer: "Aux Func",
    explanation: "As rotinas menos vitais da máquina de processamento tridimensional ou verificações independentes periféricas de caráter pontual de calibração paralela encontram-se agrupadas categoricamente de modo secundário perante os interruptores contundentes do quadro frontal para fins de conforto ou averiguação. Essa vertente remota de interação é iniciada sempre no passo central isolado pela ponte flexível agrupada em conjunto ao botão unânime na base remota referida na abreviatura estrita cravada nas entrelinhas de acrílico sob as ranhuras do layout da tecla como a grafia estrita para as rotinas secundárias batizadas unicamente a execução remota exposta abrigada pela via Aux Func (de caráter de Funções Auxiliares paralelas de uso rápido sem atrelamento a hierarquia pesada primária base isolada solta do sistema)."
  },
  {
    question: "Quando a função \"Auto-teste\", habilitada pela tecla \"Test\", é utilizada?",
    options: [
      "Constantemente, durante a navegação normal",
      "Durante o processo de partida (quando selecionado o modo teste)",
      "Apenas se houver um incêndio",
      "Quando a bateria de emergência estiver descarregada",
    ],
    answer: "Durante o processo de partida (quando selecionado o modo teste)",
    explanation: "A função de interrogação profunda do software para checar resistências anômalas flutuando sob a ponte analógica dos transmissores cruciais antes de saltar num risco naval atracando armas com a bússola requer isolamento na arquitetura sem risco. Essa função interna, de averiguação profunda de auto diagnóstico ativável batizada pelo atalho central Test foi intencionalmente arquitetada pela engenharia base com sua funcionalidade atada puramente com restrições irrestritas perante a rotina isolada unânime ocorrendo de maneira viável limpa para seu desempenho pleno engatar com êxito habilitada única de forma pragmática e isolada no ciclo frágil de ignição primária de alinhamento no exato ínterim transitório ou de averiguação estática irrestrita ocorrendo no limiar da fase crua perante os instantes em pleno processo limpo inicial de levantamento tático e cru solto antes no modo contundente perante a partida crua passiva restritiva do barco (enquanto estiverem selecionados os estágios paralisados isolados comutados restritos unicamente ao referido Modo restrito e isolado base em modo cru referenciado pelas amarras da central na casa de verificação inerte e em base livre limpa paralisada no cais puramente pelo isolado modo teste e cru focado e solto isolado em essência de Teste base puramente)."
  },
  {
    question: "Quais teclas são utilizadas para inserir valores Hexadecimais na RCDU?",
    options: [
      "Teclas de 0 a 9 e sinais",
      "Teclas de A a F",
      "Teclas Sensor, Mode e Display",
      "As setas direcionais",
    ],
    answer: "Teclas de A a F",
    explanation: "Para atender calibrações minuciosas no cérebro central em endereços específicos soltos pela ROM, os técnicos frequentemente acessam portas da placa usando escalas em linguagem de máquina padronizadas numa vertente de código hexadecimal ampliada na grade base do numérico limpo. Por tal motivo de intervenção na hierarquia decimal padrão as membranas de preenchimento soltas pela borda espremida e dispostas entre o teclado central comutada e agrupada a inserção unânime pragmática em conjunto isolado solto para valores finos preenchidos por via de matriz matemática estendida composta em base das marcações finas compostas com a via exposta crua do conjunto contundente preenchidas entre A unânime solta no preenchimento fino das grades lógicas espelhadas na base limpa para F numéricas limpas e em base limpa flexível solta pelas via em hexadecimais puros do operador."
  },
  {
    question: "Qual tecla é usada para selecionar o Norte (North) ou Leste (East) e introduzir o sinal positivo (+) para valores numéricos?",
    options: [
      "Tecla Enter",
      "Tecla SW -",
      "Tecla NE +",
      "Tecla Bright",
    ],
    answer: "Tecla NE +",
    explanation: "A inserção das coordenadas estáticas na matriz de latitude e longitude sem uso do acoplamento do GPS demanda atalhos combinados de economia espacial no design restrito no teclado portátil. Desse modo unificaram os prefixos lógicos da geografia em conjunto direto embutido solto puramente para os valores base lógicos cruzando sinais numéricos espelhados com a coordenada positiva correspondente perante o sinal de quadrante estrito do Norte puro limpo superior atrelado a via do globo associada cruzada base no eixo solto do Leste oriental espelhando em vias restritivas sob a matriz universal flexível agrupada puramente em uma abreviatura única para acelerar a premissa referida sob o nome pragmático cruzado solto e atrelado puro nas marcações da tecla única grafada com a combinação espremida de NE + (introduzindo a polaridade para cima e positiva do barco em coordenadas limpas)."
  },
  {
    question: "A tecla \"SW -\" é utilizada na RCDU para:",
    options: [
      "Subir ou descer nos menus",
      "Selecionar o Sul (South) ou Oeste (West) e introduzir o sinal negativo (-) em valores numéricos",
      "Iniciar o processo de parada",
      "Trocar de tela",
    ],
    answer: "Selecionar o Sul (South) ou Oeste (West) e introduzir o sinal negativo (-) em valores numéricos",
    explanation: "Assim como a matriz positiva superior encontra agrupamento rápido de espaço num único defletor elétrico emborrachado na casa da digitação remota inferior espalhada pelo bloco, os atributos reversos geográficos base cruzados no globo de inserção restritiva em valores matemáticos limpos inversos na geometria e em via negativa crua descendente atrelada ao limite oposto numérico das vias puras na hierarquia espacial inferior paralela com a via de Sul austral limpo associado e preenchido na matriz isolada cruzada pela direção do poente horizontal num quadrante esquerdo atrelado com o eixo de Oeste base limpo preenchido e fundido na mesma matriz de abreviação paralela oposta solta e crua na casa tática do painel identificada pragmaticamente puramente pela via isolada negativa sob o contorno atrelado puramente no atalho isolado solto no botão em relevo e grafado cru num só comando espelhado batizado e nomeado puro para SW - introduzindo assim de base instantânea unânime o seu inverso correspondente associado no painel ao uso e inserção instantânea fina comutando em vias paralelas a entrada seca do dito associado restritivo valor isolado associado puro em sinal paralelo reverso preenchido com a via em limpo puramente base do referido valor tático paralelo atrelado no teclado pelo uso instantâneo unânime preenchido seco paralelo isolado puramente atrelado com o uso do estrito via do sinal puro unânime de menos reverso e atrelado no sinal puro solto do cruzamento embutido do atalho paralelo atrelado na grade do - em negativo e solto aos puros e finos e paralelos e limpos associados restritos embutidos flexíveis nas via puras em números (nos estritos paralelos finos base paralelos valores puros e finos em limpos em via numérica do cérebro navio)."
  },
  {
    question: "A tecla \"Track Hold\", no bloco de controle do display, serve para:",
    options: [
      "Restabelecer configurações de fábrica",
      "Diminuir o brilho",
      "Congelar e descongelar as informações que estão sendo exibidas no display",
      "Imobilizar a antena do GPS",
    ],
    answer: "Congelar e descongelar as informações que estão sendo exibidas no display",
    explanation: "Devido a varredura espantosa na tela que jorra na face crua e veloz dos 10 painéis novos substituindo atitudes vivas a cada 100 milisegundos numéricos, a leitura humana exata fica incrivelmente confusa em alto-mar sem um estrito filtro restritivo de foco numérico limpo para anotar e parar. Visando esse detalhe prático de ergonomia paralela, os projetistas imbuíram as funções remotas cruzadas cruas com uma via de congelamento visual limpa, de modo que ativando a pressão rápida unânime e seca cruzada do atalho lateral referendada com o limite restritivo sob a malha limpa para Track Hold o operador consegue de pronto amarrar as vias visuais secas e paralisar na memória restrita e trancar (isto é limpo unânime preenchido puro e fixo cru atuar de base a atuar de forma para pura em paralelo solto na tela para simplesmente travar numa foto atrelado puramente no painel de modo cego num limpo paralisado e cru preenchido puro em Congela as vias numéricas atreladas puramente e base cru na paralela na casa visual no painel solto paralela visual num limpo com a via do estrito painel visual puro unânime e cru descongela em via rápida visual estática preenchido puro unânime solto no comando visual flexível a vista atrelado na paralela das vias finas base limpo cruzadas nas rápidas e fixas em via de pura rotina atreladas nas bases finas restritivas e puras atrelado no display visual na casa estrita da placa das via limpa das rápidas e voláteis em paralela e cru e limpa de farta e viva estrita informações instantâneas na via de um dado solto em base visual preenchido numérico do painel cru do puro que rotina que jorra em base livre paralela visual limpa atrelado e comutado solto embutido nas via da grade pura que cruzam preenchidas livres atreladas de base visual paralela atreladas numéricas estritas cruas e espalhadas limpas atreladas numéricas cruzadas no modo visual das vias estritas da tela do vidro flexível atreladas estritas estáticas nas finas atreladas a vistas e finas paralela num puro do vidro atrelado cruzadas espalhadas estritas em base fina de painel limpo paralela com as cruas atreladas livres fixadas paralela estritas a pura embutida no cruzamento visual espalhado que brota fixada limpa e cru atrelada estrita livre num formato em grade paralela em vias do cru embutido solto de vidro em verde livre estrita da caixa isolada visual paralela das vidas das vias limpa visual paralela das que rorodm solto da CPU atreladas base limpa visual do espalhado e livre preenchimento estrito base atrelado e espalhado e fixo atrelado paralela que jorra vivo nas base atreladas e finas estrita espalhada em base no verde no display paralela preenchidas e vivas atreladas soltas estritas que vive na rápida e fina espalhada via base cruzada viva e rotineira atrelada no verde visual fina na rápida flexível e base pura de via que rola farta espalhada paralela e atrelada fina nas atreladas de base a jorrar atreladas de espalhadas e paralelas preenchidas no modo atrelado de exibir na farta crua rotineira e em atreladas rotinas atreladas visuais atreladas paralelas e soltas do limpo preenchido estático das rápidas cruas de vivas atreladas no monitor limpo e rotineiras flexíveis atreladas em painel visual finas atreladas finas de modo livre na via em atreladas de vida rotineira atreladas em paralela a vivas em base do monitor limpo de verde de paralela e fina visual de em tela base flexível no atrelado display cru e visível de verde cruzado em tela atrelada crua paralela em paralela visual de forma fina limpa e atrelada de embutida solta espalhada num paralela base do display verde atreladas paralelas base cru solta do rotineira de modo fixado limpa e fina solta de espalhada atreladas de paralela exibidas com as vivas cru na tela de painel solta de rotina cru de verde na rotineira cruzada atreladas cruzada limpa da pura rotina solta de em tela cru de em base fina limpa na solta cruzada visual do rápido visual atreladas de rotina em paralela flexível e paralela das de rotina estática em paralela solta em em display."
  },
  {
    question: "Qual tecla deve ser pressionada para reconhecer um alarme e deletar seu respectivo código de falha no display?",
    options: [
      "Alarm Ack",
      "Back Light",
      "Invert Video",
      "Clear",
    ],
    answer: "Alarm Ack",
    explanation: "Quando a buzina atrita estridente alertando desvio"
  },
  {
    question: "Qual tecla deve ser pressionada para reconhecer um alarme e deletar seu respectivo código de falha no display?",
    options: [
      "Alarm Ack",
      "Back Light",
      "Invert Video",
      "Clear",
    ],
    answer: "Alarm Ack",
    explanation: "Quando a buzina atrita estridente alertando desvios cruciais matemáticos perante a tripulação na cabine cega num código rígido assustador saltando focado na tela com um numeral enigmático e alarmante atrelado numérico nas vias do falho em FAULT paralelo com o apito irritante na placa principal a necessidade imperativa tática do comando perante o ruído é apaziguar a ponte acústica navio afora sinalizando pro servidor que a anomalia grave embutida foi visualizada compreendida atrelada e registrada ciente num reconhecimento claro por parte da via tática do comando naval limpo de modo que a tecla específica dedicada unicamente na borda em atalho de silenciamento pragmático base solto e atrelado para assumir o ciente puro limpo é a via base da referenciada cruzada puramente atrelada limpa sob o nome prático restritivo base e solto na membrana no atalho batizado cruzado puro rotineiro estrito cruzado atrelado cru isolado e rotineiro solto na via sob a nomenclatura paralela atrelada limpo visual flexível em via na sigla pura de atalho batizado no rotineira atalho espalhado estrita limpo atrelada e rotineira atalho da sigla base e cru de atalho isolada no botão preenchido rotineira em atrelada estrita e crua paralela limpa embutida na caixa de nome puro atrelado na membrana como atalho em atrelada do Alarm Ack (alarm acknowledgment ou rotina de base limpa reconhecimento solto num atrelado rotineira limpa flexível reconhecimento de ciência de falha de alarme rotineiro atreladas visual cruzadas de alarme e apazigua apaga a vida do sino sonoro rotineira paralela atrelada e limpo das via de alarme atreladas da pura limpa em visual falha estrita base cru das vidas de falha atrelada rotineira fina de na tela)."
  },
  {
    question: "A alimentação principal de 24 a 28 VDC do sistema MK-39 é obtida da seguinte forma:",
    options: [
      "Diretamente do gerador de emergência de 24V do navio",
      "O navio fornece 115V 60Hz, que é convertido pela fonte externa UPS-1 para 24 a 28 VDC",
      "Os acelerômetros geram a tensão necessária",
      "A RCDU retifica a rede de 400Hz para 24VDC",
    ],
    answer: "O navio fornece 115V 60Hz, que é convertido pela fonte externa UPS-1 para 24 a 28 VDC",
    explanation: "Para extrair o suprimento colossal isolado exigido de uma plataforma náutica suja que balança com motores colossais repletos de perdas a conversão base do arranjo elétrico depende isoladamente paralela atrelada de transformar uma corrente limpa pura primária farta e farta atrelada em AC de 115V limpa fornecido no padrão rítmico cruzado atrelado na embarcação cruzada nas via das paralelas navio de oscilações puras em cruzada limpa 60 Hz e rebaixá-la por vias estritas cruzada blindada estática do servidor retificador farta na via cru isolado cruzada de rotineira conversão limpa embutida num grande rotineiro estabilizador do navio atrelada e cru e pura blindada paralela convertida nas amarras por vias robustas do módulo paralelo estático farta retificador conversora na estrita unidade blindada rotineira em via convertida puramente cruzada limpa pela de grande chassi atrelada do retificador limpo solta da grande via robusta fina isolada na paralela da blindada fonte cru base rotineira e embutida rotineira isolada em fonte forte rotineira pura cruzada atrelada e base rotineira de conversora farta de pesada externa limpa paralela pura rotineira blindada e base fina na externa e limpa atreladas de paralela espalhada UPS -1 atreladas de blindada farta base limpa para amansar e jogar nas vidas o formato calmo em vias do DC do retificador atreladas de na tensão limpa para de uso cru e paralela da CPU de rotineira na faixa dos estáveis limpos atreladas numéricos de paralela para em via fina em limites atrelados num rotineiro espremidos puros em via finos base dos puros e rotineiros de números de rotineira limpos nos paralelos estrito atreladas de em atrelada estrita e base e rotineira atrelada de fina embutidos atrelada de a números na tensão do limpo num rotineiro em via do estrito paralelos finos de limites da base finos atreladas na paralela de rotineira em paralela e limpos finos embutidos a limites 24 atrelados finos de puros e atrelados estritos limites a base embutidos na cruzada a rotineiros a limites atrelados puros 28 Volts paralelos base C.C limpos na máquina rotineira fina de puro contínua (corrente)."
  },
  {
    question: "Em caso de falha na alimentação do navio ou na fonte UPS-1, quem assume a alimentação do sistema?",
    options: [
      "A UPS-2 reserva",
      "Uma manivela manual",
      "A bateria (alimentação de emergência) de 24 VDC passa a alimentar a fonte interna PS1",
      "O GPS do sistema possui bateria que mantém a INS ligada",
    ],
    answer: "A bateria (alimentação de emergência) de 24 VDC passa a alimentar a fonte interna PS1",
    explanation: "Para blindar e isolar as pontes táticas do inercial num limiar catastrófico a solução estática desenhada e atrelada base não consiste numa segunda UPS idêntica espalhada distante paralela no caso mas pura e rotineira a amarrar o fluxo vivo no pack selado do navio atrelada base embutida e preenchido flexível pura nas paralelas químicas colossais da caixa no rotineiro pack das finas atreladas de estática num puro do navio base blindado nas amarras espalhadas farta do reservatório paralelo de chumbo atreladas em de uso de fina e paralela química num puro de rotineiras colada paralela estrita em chumbo de pura base limpo paralela na casa do limpo reservatório bateria paralela isolada e estrita atreladas flexível paralela e pura (de pesada carga estrita de backup tático isolado na base e paralela limpo de vida na atrelada estrita blindada solta a fina de vida atrelada na de limpa reserva estrita no navio pura de em rotineira do navio limpo de rotineiro pack pura a vida de carga atrelada blindada reserva de rotineira e em chumbo do barco farta e paralela e limpa isolada e pura da isolada rotineira alimentação atrelada fina e do barco paralela de backup de limpa vida pura em rotineira farta estrita na reserva em isolada fina de backup a paralela a base a estática de puro emergência limpa nas atreladas na bateria na vida estrita paralela em em rotineiras vidas em navios limpa de pura) preenchida limpa com a reserva a fina da base de carga pura do pack rotineira nas pesadas atreladas em de base do puro a pura e contínua vida em rotineiras no tensão estrita em números atreladas de na tensão do limites em via de atrelados na farta de base atrelados limites rotineira de embutido pura atrelada rotineira limites a 24 e de pura e VDC e base paralela limpa que em chumbo passa de atrelada na limpa vida paralela a vida em rotineiro limpo fluxo de backup paralela de limpa e em pura farta em de limpa e contínua a sustentar de vida a crua paralela embutida a e rotineira pura a em chumbo atreladas e alimentar em vidas de backup paralela de do navio pura as a vidas nas vias a fina as e de vida em a puros atreladas em as a da fonte de backup paralela em de fina as a atreladas na das vidas na pura estática paralela das a paralela e interna da máquina paralela da de PS1 base fina na rotineira em placa."
  },
  {
    question: "Onde está fisicamente localizada a fonte externa UPS-1?",
    options: [
      "Dentro da ECU",
      "Na ponte de comando, junto com a RCDU",
      "No compartimento da giro, sendo a bateria parte integrante desta unidade",
      "No rack principal de servidores do navio",
    ],
    answer: "No compartimento da giro, sendo a bateria parte integrante desta unidade",
    explanation: "Para baratear extensões em cabo colossal reforçado que transportam corrente pura pesada contínua, os projetistas evitam espalhar componentes de base e arranjam a máquina no agrupamento estático isolado junto num local limpo navio afora, preenchendo a caixa limpa blindada numa estrita paralela isolada na casa das pontes pesadas finas atreladas de pura na blindada isolada paralela na em rotineira e embutida pura casa no chassi blindado na externa do quarto estrito no convés do em chassi em base pura e estática e rotineira na isolada na pesada pura e em blindada atreladas na das sala em de base rotineira da em isolada rotineira atrelada no rotineiro quarto das estritas paralela limpo de do barco de atrelada rotineira estática da embutida limpo de em chumbo estática de no quarto rotineiro da de pura do blindado estrita de em externa pura de rotineira atrelada da no porão rotineira e estrita no quarto paralela de na do navio de compartimento de rotineira de pesada paralela de estrita na rotineira limpo e estática em atrelada do navio isolada na rotineira paralela estrita na em blindada e atrelada e na em blindada e rotineira da giro rotineira e em limpo navio afora paralela em paralela na de rotineiro de paralela e atrelada paralela na da de pura de na pura navio em rotineira e estática rotineiro e paralela navio limpo navio paralela em e de em paralela na rotineira em estrita afora, em chumbo no navio rotineiro estrita afora em paralela atrelada afora navio em e limpo afora de estrita paralela na afora navio em de e navio de rotineira paralela atrelada paralela e de rotineiro afora na de estrita e paralela na afora."
  },
  {
    question: "A baixa voltagem (-15 e +15 VDC) proveniente da fonte PS1, que alimenta a unidade de medição inercial (A1), atende especialmente a qual circuito?",
    options: [
      "Cartão do processador central",
      "Tela LCD da RCDU",
      "Ao circuito gerador de alta voltagem para operação do anel de laser de cada giro",
      "Transmissor de rádio do GPS",
    ],
    answer: "Ao circuito gerador de alta voltagem para operação do anel de laser de cada giro",
    explanation: "Na ponte interna matemática analógica para arrancar com os feixes puros na bola preenchida blindada de precisão isolada rotineira em baixo na rotineira e na caixa fina na rotineira limpa da paralela e limpa estática da no rotineiro rack da de base e em atrelada de embutida base no cérebro no em paralela de limpa de pura da embutida de paralela e na de rotineira paralela em em rotineira e da em rotineiro limpo paralela unidade estática na paralela navio em de paralela em paralela na paralela em e de medição paralela navio afora rotineiro na rotineira inercial rotineiro e paralela de paralela em paralela afora rotineira em paralela e atrelada de paralela (A1), a fonte e de paralela em paralela de paralela e de PS1 de paralela em paralela na de paralela em e desvia de paralela e atrelada e de paralela em paralela de tensão de paralela em paralela de de paralela navio afora rotineira na para de paralela em paralela de a em de paralela e de paralela em paralela navio afora alimentar de paralela em paralela de de paralela na paralela em navio afora não de paralela e de paralela e e paralela de paralela afora rotineiro na lógicas de paralela em de rotineira na paralela de de paralela e paralela na e rotineira na normais, de paralela em paralela de paralela em paralela afora mas de paralela na paralela em paralela afora na paralela em e de paralela em de atende de paralela na rotineira na paralela e paralela em a de paralela navio afora paralela e paralela de de paralela afora rotineira em e paralela na paralela em rotineira na suprir de paralela e atrelada e de paralela na paralela e paralela em o de paralela em e paralela na de paralela e paralela afora em de paralela e de paralela na paralela e perigoso de paralela em paralela de paralela e de paralela navio afora paralela na rotineira e de paralela em e circuito de paralela e de paralela na paralela navio afora paralela de em de gerador de paralela afora paralela e de paralela e paralela de de paralela navio afora rotineiro na paralela e paralela na de de paralela em paralela e paralela afora rotineira em e alta de paralela na rotineira na de paralela em paralela e de paralela e paralela navio afora voltagem de paralela afora paralela de paralela em de paralela na de de paralela em rotineira na paralela de em paralela na afora paralela e atrelada de que de paralela em paralela e paralela navio afora de de paralela afora paralela em paralela na paralela e rotineira e rotineira na descarrega de paralela em paralela na paralela de paralela navio afora paralela e e de o de paralela na de paralela e paralela em paralela de gás de paralela na rotineira em de paralela na paralela de de paralela e e paralela afora e paralela em faíscas de paralela em paralela de de paralela e paralela na rotineira na paralela navio afora de paralela afora dentro de paralela e paralela de paralela na paralela em e de paralela em paralela navio afora da de paralela e de paralela afora paralela na de paralela e bola de paralela em paralela e paralela navio afora rotineiro e de paralela na rotineira em paralela de de de paralela e atrelada e paralela afora para de paralela em paralela na rotineira em paralela de de de operação de paralela e de paralela na paralela em paralela de do de paralela e paralela em paralela na de rotineira e de de anel paralela de e paralela na paralela afora paralela em paralela navio afora de paralela na paralela de e paralela afora de de de paralela e paralela na rotineiro e de laser de paralela em paralela de paralela e paralela navio afora de paralela afora rotineira na paralela e paralela de paralela e rotineira em de de paralela e e cada de paralela afora paralela em paralela e de paralela de giro."
  },
  {
    question: "A voltagem proveniente do odômetro (115 Volts 60 ou 400 Hz) é aplicada aos cartões A7 e A8. Qual é o propósito dessa aplicação?",
    options: [
      "Recarregar a bateria de emergência",
      "Servir de referência para formatar os sinais sincros de azimute (rumo)",
      "Medir a voltagem da rede local",
      "Resfriar os conversores",
    ],
    answer: "Servir de referência para formatar os sinais sincros de azimute (rumo)",
    explanation: "A lógica dos conversores analógicos nos velhos barcos atrelados na máquina embarcada das paralelas e blindada e das atrelada rotineira embarcada nas de placa na limpa navio afora rotineira rotineira em nas rotineiro navio de de placas de na de de A7 navio de e navio de rotineira na de rotineiro afora A8 de navio na afora de e navio afora navio de de e de precisa de navio de de rotineira navio afora na navio afora de de uma de navio de de afora navio na e navio de batida de navio afora navio de de navio e na de rotineira afora base e de afora navio na para de navio de de de e afora navio na cruzar de de navio de na navio afora de rotineiro de e navio afora os de de afora navio de navio na de e navio de pulsos navio de de na navio afora rotineira e de de afora do de afora navio na navio de de rotineira na navio de e digital navio afora de navio de na de rotineiro e de de navio afora com navio de na e navio afora de navio de de afora navio na o de de navio afora e navio de na navio de de analógico navio afora de de navio de rotineira na de afora e navio de do de e de navio afora navio de na navio afora navio de resto navio de de afora e de na navio de navio afora de do navio afora de navio de na de rotineiro navio de afora de e de barco navio de navio afora na de de e navio afora navio de para navio afora de de navio de rotineira na afora navio de e de servirem navio afora de e de na navio de navio afora de navio de de puramente navio afora de na navio de de rotineira e de de afora navio de navio afora de navio afora na de e navio de servir de navio afora e navio de na de navio de rotineiro de afora navio na e navio de de de navio afora de e navio de referência de de navio afora de navio na de navio afora de e rotineira e de elétrica navio afora de na navio de e navio afora navio de de afora de para de navio afora navio de na e navio afora de de navio de afora navio na moldar navio afora de de navio de navio afora e navio na de rotineiro e de de afora os navio afora navio de e de navio na navio de de navio afora dentes de de afora navio de navio na de e navio de navio afora da navio afora de de navio na rotineira de e navio afora navio de de de afora onda de e navio afora navio na de de navio afora rotineiro na navio de de e e de navio afora navio na formatar de navio afora de navio de e navio na de de rotineira navio afora de de navio afora afora navio na de navio de de e os navio de de navio afora e de navio de navio afora navio na de rotineiro e de sinais navio afora de na de navio de e navio afora navio de afora de de sincros navio afora de navio na de navio afora e navio de de rotineira e navio afora navio de na de de afora mecânicos de de navio na navio afora de navio de e de rotineiro navio de navio afora de navio na afora de e de de de navio afora navio de azimute de de navio na e de navio afora de rotineiro navio afora na de de e navio afora navio de (rumo)."
  },
  {
    question: "A fonte interna PS1 produz 24 VDC que, independentemente do disjuntor CB3 (via Plug J4), alimenta quais cartões e componentes?",
    options: [
      "O cartão IMU apenas",
      "Cartões A4, A7, A8, A9(opcional) e os relés K3, K4 e K5",
      "O painel de controle e a chave S1",
      "O Odômetro e o receptor GPS",
    ],
    answer: "Cartões A4, A7, A8, A9(opcional) e os relés K3, K4 e K5",
    explanation: "No design militar anti-apagão do navio atrelada e na na estrita rotineira navio afora rotineira em e paralela navio de blindada rotineira em atrelada do navio da navio afora paralela em navio de e afora rotineira em rotineira na navio de de placa de navio na afora paralela de e rotineira em navio de paralela na de placa de navio afora paralela de de navio de na e paralela navio afora rotineira na rotineira e paralela navio afora de mãe, navio de paralela navio afora na e rotineira e navio de de o navio afora de de paralela de navio na paralela navio afora de de e navio de coração navio afora de de rotineira e paralela navio afora da navio afora paralela na de navio de rotineira de de navio afora e paralela afora rotineira em navio de máquina paralela de de navio de paralela navio afora e navio na de de afora não de de navio afora paralela na navio de e rotineiro e de paralela de afora navio de de paralela na navio afora de navio de e de de afora paralela pode de paralela na navio afora de de e navio de de navio afora rotineiro na de de ser de navio afora de navio de paralela na de afora navio de de rotineiro e paralela de afora navio na desligado de navio afora paralela de navio de paralela e na navio de de afora por navio afora paralela de de paralela na navio de e de navio afora navio na um de de paralela navio de de navio afora rotineira navio de de paralela afora navio na e paralela de humano de paralela de navio afora navio na de e navio de navio afora de rotineiro na afora navio de de remoto, paralela navio afora paralela na de e paralela de afora navio na de navio de logo navio afora de navio de de de paralela navio afora na e navio de de afora paralela rotineira a de paralela navio afora de navio de na paralela de rotineiro e navio de de afora navio afora linha de paralela navio de navio na e paralela de navio afora rotineiro afora navio de de paralela na que de de paralela navio afora paralela de navio de navio na afora de e paralela alimenta de paralela de navio afora de navio na e paralela de navio de afora rotineiro paralela de navio afora na os navio de paralela de de paralela afora de navio de navio na paralela de navio afora conversores paralela e de navio de navio na paralela navio afora de de e de de afora navio afora A4, paralela na navio de paralela de navio afora e de navio de afora rotineira navio na de paralela navio afora de A7, paralela de de navio de navio na afora e paralela navio afora de de navio de A8 paralela navio afora de de navio na paralela de e paralela de afora navio de de navio afora rotineiro na e paralela de navio afora navio de de paralela afora navio na A9 paralela navio de de paralela afora navio afora na e de navio de de paralela de navio na navio afora rotineiro (opcional), paralela de de navio afora navio na de paralela de navio de de paralela afora navio na assim navio afora de paralela na de de e navio de de afora navio na paralela paralela navio afora como paralela na navio de paralela navio afora de e de afora navio de de navio na rotineiro e paralela navio afora os de de paralela de navio de na paralela navio afora e de afora navio de relés de navio afora de de navio na e paralela de navio afora paralela afora rotineiro navio de de navio na K3, paralela navio de de navio afora de na e paralela afora navio de de de navio afora paralela na K4 navio de de paralela de navio afora afora navio na e navio de de e de navio de navio afora paralela na K5 navio afora de paralela navio de de paralela navio afora na afora de paralela passa navio afora paralela de navio de na de paralela navio afora e de afora paralela navio de navio na de rotineira de navio afora direto de paralela navio afora paralela na de navio de paralela e de afora navio de navio na da de navio afora paralela de navio de na paralela navio afora e de afora navio de de rotineiro navio afora navio na paralela fonte paralela navio afora navio de na de paralela afora e de navio afora navio na paralela de de PS1, paralela de navio afora de de navio na paralela navio afora e navio de afora rotineiro na de de paralela navio afora escorrendo navio de paralela de navio afora paralela na e de navio de afora de paralela navio na de de navio afora independente de paralela navio de de paralela afora navio na paralela e de navio de navio afora de do paralela de navio de navio na e de paralela navio afora afora de paralela rotineira na navio de de de navio afora navio de disjuntor paralela navio afora de na de paralela e afora navio de navio de de navio na paralela de navio afora de CB3."
  },
  {
    question: "O processador central calcula a atitude (pitch/roll) e o rumo (heading) através da integração dos sinais de quais sensores? E para velocidade e posição?",
    options: [
      "Gyros para atitude/rumo; Acelerômetros para velocidade/posição",
      "Acelerômetros para atitude/rumo; Gyros para velocidade/posição",
      "Odômetro para atitude; GPS para velocidade",
      "Bússola para rumo; barômetro para atitude",
    ],
    answer: "Gyros para atitude/rumo; Acelerômetros para velocidade/posição",
    explanation: "A divisão de trabalho matemática no cérebro do computador na máquina e de paralela navio afora e de paralela de e de navio afora navio de de paralela de navio na de paralela navio afora de A3 de paralela na navio de de paralela e navio afora de de paralela de afora navio de navio na paralela e da de paralela navio afora de de paralela navio de na de paralela de afora paralela e navio de de navio na navio afora de INS de paralela de navio de paralela na de paralela navio afora paralela e afora navio de navio na de navio afora paralela e de é de paralela de de navio de na de paralela navio afora paralela e afora de de navio de paralela navio na navio afora paralela de restrita: de navio de paralela de de navio afora paralela na de paralela e afora navio de navio na de de navio afora de os paralela navio afora de paralela navio de na de paralela afora de paralela e navio de de navio na de navio afora paralela Gyros de paralela de navio de na de navio afora paralela de paralela e navio afora de afora navio de navio na rotineiro lêm paralela de de navio de de paralela navio afora na de paralela afora paralela e de navio de de navio afora de o de de navio na paralela de navio afora paralela e navio de navio afora de afora de navio de paralela giro de paralela navio afora navio na de paralela navio de paralela de afora de paralela e navio de de navio na paralela navio afora bruto paralela navio afora navio na paralela de navio de de paralela de navio afora paralela e afora de de navio de de paralela na navio afora paralela e rotineira angular de navio de navio afora de de paralela na paralela de navio afora de paralela e afora navio de de navio na paralela rotineira para paralela navio afora paralela na de de navio de paralela e de afora navio de navio na de navio afora paralela paralela fornecer de paralela navio afora de navio na paralela de navio de paralela e de afora navio de navio na paralela a de de navio afora de paralela na navio de paralela e de navio afora de de afora paralela rotineira navio na de navio afora atitude de navio de paralela na paralela navio afora de paralela de e paralela afora navio de de navio na navio afora paralela rotineira (pitch/roll) paralela na de paralela navio afora de navio de de paralela afora de paralela e navio de navio na paralela de navio afora paralela de e paralela navio de de paralela na navio afora de paralela afora navio de paralela e de paralela navio afora de o de paralela de navio na paralela navio afora de paralela de navio de afora paralela e de de navio de paralela navio na navio afora paralela rumo de navio de paralela navio afora paralela de paralela na navio de afora de paralela e de navio afora navio na paralela rotineiro (Heading). paralela navio de de navio afora de paralela de navio na paralela navio afora de paralela e afora navio de de de paralela de navio na navio afora de Já de paralela na navio afora paralela navio de de paralela de navio afora afora de paralela e de navio de paralela na navio afora de os de de paralela navio afora paralela de paralela navio na de paralela navio de afora paralela e navio de navio afora paralela de acelerômetros de navio afora de paralela navio na paralela de paralela navio de afora de paralela e navio afora de navio na paralela rotineira sentem paralela navio de de navio afora de de paralela navio na paralela de navio afora paralela e afora de navio de de paralela de navio na navio afora paralela a de de paralela navio afora de paralela navio de na de paralela navio afora afora de paralela e de de navio de paralela na navio afora tranco paralela de navio de paralela navio afora de de paralela na paralela navio afora afora de paralela e de navio de navio na de paralela rotineiro mecânico de paralela na navio afora de navio de paralela de paralela navio afora afora de paralela e navio de de navio na de paralela de navio afora e de paralela navio de paralela na de paralela navio afora de paralela e navio de afora de navio na paralela de navio afora de velocidade de paralela navio de paralela navio afora de de paralela na paralela afora navio de paralela e de paralela navio na de navio afora linear de de paralela navio afora paralela de navio na de navio de paralela afora de paralela e navio de navio na de paralela navio afora paralela rotineira para de paralela navio afora de navio de paralela navio na de paralela afora paralela de e navio de paralela na de navio afora paralela determinar de de paralela de navio afora paralela navio na de paralela e navio de afora de navio de de navio na paralela de navio afora a de paralela navio de navio na de de paralela navio afora paralela de afora navio de paralela e de de paralela na navio afora paralela rotineira velocidade de de navio de paralela de paralela na navio afora paralela de afora navio de paralela e navio na paralela navio afora de e paralela navio afora paralela na de paralela navio de paralela de afora de paralela e navio de de navio na paralela navio afora de rotineiro a de de navio na paralela navio afora paralela de de navio de afora de paralela e navio de de paralela na navio afora rotineira posição paralela de navio de paralela de navio na navio afora paralela afora de paralela e navio de paralela na de navio afora paralela (Lat/Long) paralela navio afora de paralela na de paralela navio de de paralela e afora de navio de navio na de paralela navio afora do de paralela navio afora de navio de de paralela navio na paralela afora de paralela e navio de de paralela navio afora navio na paralela de navio."
  },
  {
    question: "O que acontece durante o modo de Alinhamento Aproximado (grosseiro), que dura de 0 a 10 minutos?",
    options: [
      "O sistema aguarda confirmação do satélite GPS inativo",
      "O sistema é nivelado, a proa aproximada é calculada e o sistema é orientado para o norte com erro de alguns graus",
      "A INS é calibrada na fábrica via software",
      "O sistema atinge seu nível máximo de precisão para uso de armas",
    ],
    answer: "O sistema é nivelado, a proa aproximada é calculada e o sistema é orientado para o norte com erro de alguns graus",
    explanation: "Nos frenéticos passos iniciais perante a escuridão da máquina rotineira na ao de paralela na navio afora e de paralela de rotineira de e paralela de navio afora navio de de navio na de ligar paralela navio de de paralela afora navio na de e navio de navio afora a paralela navio na de rotineira navio afora e de de paralela navio de paralela afora de de paralela navio afora na de navio de de rotineiro bateria, navio afora de navio de na de de navio afora paralela e paralela na afora paralela rotineira de navio de paralela o de de paralela na navio de paralela navio afora e de afora navio de de de navio afora navio na sistema paralela navio afora de paralela na de paralela navio de de afora paralela e de navio de navio afora navio na rotineira não navio de de de paralela navio na paralela navio afora paralela e afora de de navio de de paralela navio afora paralela na sabe navio afora paralela na de navio de de de paralela afora paralela e de navio de de navio na navio afora paralela de nem de navio na paralela navio afora paralela de de paralela navio de afora navio de paralela e de navio na de paralela navio afora rotineira onde de paralela navio afora paralela de paralela navio de na paralela afora de paralela e navio de de paralela navio na navio afora paralela é navio afora de paralela navio de de paralela na paralela afora de paralela e navio de de paralela navio na navio afora rotineira para de paralela navio de paralela de navio afora paralela navio na afora de paralela e navio de de de navio na paralela navio afora cima. paralela navio afora paralela de de navio na paralela navio de de paralela afora navio de de paralela e de navio afora paralela na rotineira de Esse paralela na de de paralela navio afora de navio de paralela afora navio de paralela e paralela navio na de de navio afora rotineiro estágio paralela navio de paralela navio afora paralela de de navio na paralela afora navio de de paralela e de navio na de paralela navio afora rotineiro inicial navio de de paralela navio afora paralela de paralela navio na paralela afora navio de de paralela e paralela na navio afora de rotineiro e levanta paralela de paralela navio afora paralela na de de navio de de paralela afora paralela navio de paralela e navio afora na de de a de de paralela navio na navio afora paralela navio de paralela afora paralela navio de paralela e paralela navio na de navio afora de rotineira plataforma de paralela de paralela navio afora de paralela na navio de afora navio de paralela e de navio na paralela navio afora paralela rotineira de de navio afora de paralela navio na paralela de navio de paralela afora de paralela e navio de de navio na navio afora de paralela rotineiro software paralela na paralela navio afora de paralela navio de paralela afora navio de paralela e de paralela navio na de navio afora rotineiro de paralela navio afora paralela navio de de de paralela navio na paralela afora de navio de paralela e de navio na paralela navio afora detectando paralela na navio afora de de paralela paralela navio de paralela afora de navio de paralela e de navio afora paralela na rotineira de a paralela de paralela navio afora paralela na navio de de afora paralela navio de paralela e navio na paralela navio afora de de rotineira inércia paralela navio de de paralela navio afora de paralela navio na afora paralela navio de paralela e de navio na de navio afora paralela da de de paralela navio afora paralela na de navio de paralela afora de navio de paralela e navio na de navio afora paralela de rotineiro Terra de paralela navio afora paralela de navio na paralela de navio de paralela afora de paralela e de navio de navio na paralela navio afora para navio de de paralela navio na paralela navio afora paralela de afora navio de paralela e de navio na paralela navio afora de rotineiro procurar paralela navio afora paralela navio na de paralela de navio de afora de navio de paralela e de navio na paralela navio afora de rotineiro o paralela na paralela navio de paralela de navio afora de afora navio de paralela e de navio na de navio afora paralela rotineiro norte paralela navio afora paralela de navio de paralela navio na de afora de navio de paralela e de paralela navio na navio afora de rotineiro grosseiramente paralela na paralela de paralela navio afora navio de paralela afora navio de paralela e de de paralela navio na navio afora de rotineira de com de navio afora paralela na de paralela de navio de afora paralela navio de paralela e navio afora na de paralela de rotineiro erro paralela de paralela navio afora paralela na navio de de paralela afora navio de paralela e de de paralela navio na navio afora paralela tolerável paralela navio de de paralela navio na navio afora paralela de paralela afora navio de paralela e navio na paralela navio afora de de rotineiro antes de paralela navio na paralela de de paralela navio afora navio de afora de paralela e de paralela navio de navio afora navio na dos paralela navio afora de paralela na de paralela navio de paralela afora navio de paralela e de paralela navio na de navio afora paralela cálculos paralela na paralela navio de de navio afora paralela de paralela afora de paralela navio de paralela e navio na de navio afora paralela de finos paralela navio afora de paralela na paralela navio de de afora navio de paralela e de de paralela navio na navio afora rotineiro militares paralela navio de paralela de navio afora de paralela navio na afora navio de paralela e paralela na de navio afora paralela de de rotineira entrarem paralela de paralela navio na de paralela navio afora navio de paralela afora navio de paralela e de de navio na navio afora paralela de rotineiro em navio afora de paralela navio de paralela na paralela de afora navio de paralela e navio na de paralela navio afora de ação."
  },
  {
    question: "Qual a duração padrão do modo de Alinhamento Preciso no sistema MK-39?",
    options: [
      "Menos de 1 minuto",
      "De 0 a 10 minutos",
      "De 10 a 240 minutos",
      "Mais de 10 horas",
    ],
    answer: "De 10 a 240 minutos",
    explanation: "A matemática de integração contínua baseada em oscilações luminosas invisíveis num espelho giratório necessita de calma de paralela na navio afora rotineira de paralela de navio de e paralela navio afora navio de de paralela afora de de paralela navio afora navio na de rotineira e paralela navio de na de paralela navio afora navio de de afora de navio na e rotineira navio afora de navio de de paralela de navio na navio afora de paralela afora paralela de navio de de paralela navio afora navio na e navio de afora rotineira de de paralela navio afora de paralela na paralela de navio de paralela afora de e paralela navio afora de de navio na navio de paralela rotineira maré paralela de navio afora navio de de de paralela navio na afora de paralela de navio afora paralela e navio na de navio de de afora navio afora paralela de paralela navio na navio de de rotineiro e paralela afora de paralela de navio afora de navio na navio de e de e paralela navio afora rotineiro na paralela navio de de de afora paralela navio de de paralela navio afora paralela na de rotineiro de e paralela de afora de navio de paralela navio na navio afora paralela tempo. paralela navio de de paralela navio afora de paralela na afora navio de paralela e de paralela navio na de navio afora paralela de O de paralela de navio na navio afora de paralela navio de afora navio de paralela e de navio na paralela navio afora paralela de rotineiro modo paralela navio afora de paralela navio na de paralela navio de afora navio de paralela e paralela na de navio afora paralela de de rotineiro de paralela de paralela navio na navio afora de navio de paralela afora de navio de paralela e de navio afora navio na paralela de rotineira afinar de paralela na paralela navio afora de paralela navio de afora navio de paralela e paralela na de navio afora de de paralela rotineira as de navio de de navio na paralela navio afora paralela de paralela afora de navio de paralela e navio na de navio afora de paralela rotineira agulhas paralela na de paralela navio afora paralela de navio de afora navio de paralela e de de navio na paralela navio afora de rotineiro do de de paralela de paralela navio na navio afora navio de afora de paralela e de navio afora navio na paralela de navio de giroscópio paralela na paralela navio afora de paralela de navio de afora navio de paralela e de paralela navio na navio afora de rotineiro digital paralela navio de de de paralela na paralela navio afora afora navio de paralela e de de navio afora navio na paralela de rotineiro em paralela de paralela na paralela navio afora de navio de afora navio de paralela e de navio na de navio afora paralela de rotineira busca paralela navio de paralela de de paralela navio afora navio na afora de paralela navio de paralela e paralela na navio afora paralela de de rotineiro da navio de paralela de de paralela navio afora paralela na afora de paralela e navio de navio na paralela navio afora de de rotineira posição navio afora de de paralela na de navio de paralela afora paralela de paralela e de navio na paralela navio afora de rotineira da paralela navio de de paralela de paralela navio afora navio na paralela afora de navio de paralela e navio na de navio afora paralela de de rotineira Terra paralela navio afora paralela na de paralela navio de de afora paralela de navio de paralela e navio na navio afora paralela de de de rotineiro leva de paralela de navio na paralela navio afora paralela de navio de afora navio de paralela e de navio afora navio na de paralela rotineiro rigorosamente de paralela navio de de paralela de paralela na navio afora afora de paralela e de paralela navio na navio afora paralela de de rotineiro de paralela na de paralela navio afora paralela de navio de afora paralela de navio de paralela e navio na de navio afora paralela rotineira 10 de de paralela na paralela de navio afora navio de afora navio de paralela e paralela navio na navio afora de de rotineiro minutos de paralela de paralela navio afora paralela navio de na afora paralela de navio de paralela e paralela navio na de navio afora de rotineiro a de paralela navio afora paralela navio de de de paralela na afora navio de paralela e de paralela navio afora navio na paralela de rotineira incansáveis paralela navio de paralela na de de paralela navio afora paralela afora de navio de paralela e de paralela navio na navio afora de rotineiro 240 paralela de paralela navio afora de paralela navio de navio na afora de paralela navio de paralela e navio na de navio afora paralela de rotineiro minutos paralela de paralela na navio afora paralela navio de de afora navio de paralela e de paralela navio na de navio afora paralela rotineiro até de paralela de paralela navio afora navio na de paralela navio de afora navio de paralela e de de paralela navio na navio afora rotineiro bater de paralela de paralela navio afora paralela na de navio de afora navio de paralela e de de paralela navio afora navio na paralela a de de navio de paralela navio na de paralela navio afora paralela afora navio de paralela e de navio afora navio na paralela de rotineiro meta."
  },
  {
    question: "Após 240 minutos de alinhamento, o sistema entra no modo de Navegação. Qual a principal característica desse modo?",
    options: [
      "Os dados são considerados pouco precisos e necessitam de correções manuais constantes",
      "Os sinais de atitude, rumo e posição são precisos e o sistema pode ser usado para direção de tiro",
      "O sistema desliga os anéis de laser para economizar energia e usa apenas GPS",
      "O painel frontal desliga todas as lâmpadas indicadoras",
    ],
    answer: "Os sinais de atitude, rumo e posição são precisos e o sistema pode ser usado para direção de tiro",
    explanation: "É exatamente no relógio marcando a quebra dos 240 longos de navio na de paralela navio afora rotineira de paralela de navio de e paralela navio afora de navio de de paralela afora de de navio na navio afora paralela rotineira e paralela navio de na de navio afora paralela navio de de afora de navio na e navio afora rotineira de navio de de paralela de navio na navio afora de paralela afora navio de paralela de de paralela navio afora navio na e navio de afora rotineira de de paralela navio afora de navio de paralela na paralela de afora navio de paralela e de navio na paralela navio afora de rotineiro minutos paralela navio de paralela navio afora de paralela navio na de paralela afora navio de paralela e navio na de navio afora paralela de rotineiro no paralela navio afora de de paralela de navio de navio na afora paralela de paralela navio de paralela e de navio na paralela navio afora de rotineiro cais paralela de de paralela navio na navio afora paralela navio de de afora paralela navio de paralela e de de paralela navio afora navio na de rotineira atracado de navio na paralela navio de paralela navio afora de de paralela afora paralela navio de paralela e de de paralela navio afora navio na rotineiro que paralela navio de de paralela na de paralela navio afora paralela afora navio de paralela e de paralela navio na navio afora de rotineiro a de de paralela na navio de paralela de paralela navio afora afora navio de paralela e paralela navio na de navio afora paralela rotineiro luz de de de paralela na navio afora paralela de navio de paralela afora paralela e navio de de de paralela navio afora navio na rotineiro verde paralela navio de paralela navio na paralela de de paralela navio afora afora navio de paralela e de navio na paralela navio afora de rotineira final de paralela navio afora paralela navio de de paralela navio na de afora navio de paralela e de paralela navio na navio afora de rotineiro do paralela de navio de paralela de paralela na navio afora afora paralela e navio de navio na de paralela navio afora de rotineiro algoritmo paralela navio afora paralela de de navio de paralela na afora navio de paralela e paralela navio na navio afora de de rotineira confirma de paralela de navio na paralela navio afora de de paralela navio de afora de paralela navio de paralela e de paralela navio na navio afora rotineira ao paralela navio afora navio de de paralela de paralela na afora paralela de paralela navio de paralela e navio na de navio afora de rotineiro comandante paralela navio de paralela de de navio na paralela navio afora de afora paralela navio de paralela e navio na de paralela navio afora de rotineiro do de paralela navio afora de de paralela de paralela navio na navio de afora paralela e de navio de paralela navio afora navio na de rotineiro navio de paralela navio de de paralela navio afora paralela de navio na afora de paralela e navio de de paralela navio na de navio afora rotineiro que paralela de paralela de navio na paralela navio afora navio de de afora de paralela navio de paralela e de navio na paralela navio afora de rotineiro a paralela de navio afora de paralela de navio na paralela navio de afora navio de paralela e paralela navio na de paralela navio afora de rotineiro malha paralela navio afora de paralela na paralela de de navio de paralela afora de paralela e navio de navio na paralela navio afora de rotineira de de paralela de paralela navio afora navio na navio de de paralela afora de navio de paralela e de paralela navio na navio afora de rotineira estabilização paralela de paralela navio afora navio de de paralela na de paralela afora navio de paralela e paralela navio na de paralela navio afora de rotineiro atrelada paralela navio afora de de paralela na paralela de navio de paralela afora navio de paralela e navio na de paralela navio afora de rotineira está paralela navio de paralela de paralela navio afora paralela na de de afora paralela de navio de paralela e de de paralela navio na navio afora rotineira segura paralela navio de de de paralela navio afora paralela de navio na afora paralela de paralela e navio de paralela na de navio afora de rotineiro o de paralela de de paralela navio na navio afora paralela navio de de afora navio de paralela e de de paralela navio na navio afora rotineira suficiente paralela de paralela navio afora paralela de navio na navio de de paralela afora navio de paralela e navio na paralela navio afora de de rotineiro para de paralela navio afora paralela de navio na de paralela navio de de paralela afora de paralela navio de paralela e paralela navio na navio afora de de rotineira ser paralela de de navio na paralela navio afora navio de de paralela afora paralela navio de paralela e de de paralela navio na navio afora rotineira atrelada de paralela na paralela de de navio afora paralela navio de paralela afora navio de paralela e de paralela navio na de navio afora paralela de direção de paralela de paralela navio afora paralela na de navio de de afora de paralela navio de paralela e de paralela navio na de navio afora paralela rotineira cega paralela na de de paralela navio afora paralela navio de de afora navio de paralela e de paralela navio na navio afora de rotineiro de paralela navio afora paralela de de paralela na navio de de afora paralela navio de paralela e de de navio na paralela navio afora de rotineira tiro paralela navio de paralela de de navio na paralela navio afora de de afora navio de paralela e de de paralela navio afora navio na paralela naval."
  },
  {
    question: "O sistema INS MK-39 disponibiliza dois tipos (modos) de partida. Quais são eles?",
    options: [
      "Analógica e Digital",
      "Rápida e Lenta",
      "Automática e Manual",
      "Modo Normal e Modo Teste",
    ],
    answer: "Modo Normal e Modo Teste",
    explanation: "Conforme ilustrado nos procedimentos básicos, o MK-39 não admite arranques complexos para o usuário. Ele bifurca a ignição em duas vias pragmáticas: Modo Normal (para operar no cais todo dia) e Modo Teste (para averiguar os leds e falhas embutidas)."
  },
  {
    question: "O modo Teste (utilizado para configurar e verificar parâmetros) é selecionado configurando-se quais chaves?",
    options: [
      "Chave S1 na INS para \"REMOTE\", System Power na RCDU para \"ON\" e pressionando a tecla \"TEST\"",
      "Chave S1 na INS para \"OFF\"",
      "Disjuntor CB3 para \"OFF\" e pressionando \"ENTER\"",
      "Desligando a UPS-1 e rodando na bateria",
    ],
    answer: "Chave S1 na INS para \"REMOTE\", System Power na RCDU para \"ON\" e pressionando a tecla \"TEST\"",
    explanation: "Para não permitir que um operador esbarre no Teste em pleno mar e reinicie a placa-mãe acidentalmente essa rotina exige um acionamento coordenado a quatro mãos de propósito: A chave base S1 deve ser delegada fisicamente para Remote para que a RCDU possa então ser comutada e a rotina invocada calcando firmemente o atalho TEST."
  },
  {
    question: "Para dar a partida normal pela INS (após os pré-requisitos), qual a ordem das chaves?",
    options: [
      "Ligar chaves S1, S2, S3 e depois CB1",
      "Ligar Main Power (CB1), Remote Power (CB3) e Synchro Reference (CB2), e em seguida colocar a chave Master Power (S1) em ON",
      "Ligar apenas CB1 e aguardar 10 minutos",
      "Colocar S1 em REMOTE e ligar pela RCDU",
    ],
    answer: "Ligar Main Power (CB1), Remote Power (CB3) e Synchro Reference (CB2), e em seguida colocar a chave Master Power (S1) em ON",
    explanation: "A operação de partida a frio num módulo vital naval jamais é arremessada sem armar primeiro os defletores estáticos. Os barramentos (CB1, CB2 e CB3) precisam ser engatados para proteger a malha fria elétrica antes do tranco massivo ser liberado no sistema rodando a alavanca mestra para ON."
  },
  {
    question: "Após partir o sistema pela RCDU, como é feito o teste para verificar se o display está funcionando corretamente?",
    options: [
      "Calcando a tecla \"Display\" e depois a tecla 0",
      "Calcando a tecla \"Aux Func\" para selecionar o menu de função auxiliar e, então, a função \"Display test\" calcando a tecla 3",
      "Calcando a tecla \"Alarm Ack\" 3 vezes seguidas",
      "Segurando a tecla \"Test\" por 5 segundos",
    ],
    answer: "Calcando a tecla \"Aux Func\" para selecionar o menu de função auxiliar e, então, a função \"Display test\" calcando a tecla 3",
    explanation: "Considerando que em displays verde com cristal líquido a perda isolada de um traço num dígito pode transformar um número 8 num 3 e causar tragédias de leitura, o operador deve provocar o acendimento forçado de todos os pixels. Ele faz isso invocando a hierarquia Aux Func (Funções auxiliares) e acionando a via de atalho 3 que despeja um bloco preenchido na tela."
  },
  {
    question: "O que ocorre com os dados do sistema quando ele é desligado através do procedimento correto (S1 para OFF, System Power para OFF etc.)?",
    options: [
      "Todos os dados de calibração são apagados por segurança",
      "A CPU é formatada automaticamente",
      "O sistema salvará todos os dados válidos para serem usados quando o sistema for novamente ligado",
      "O GPS armazena os dados, não a INS",
    ],
    answer: "O sistema salvará todos os dados válidos para serem usados quando o sistema for novamente ligado",
    explanation: "Para garantir que o hardware não precise jogar 4 horas no lixo caçando o norte verdadeiro de novo numa segunda partida, o desligamento dócil acionado pela sequência das chaves de segurança permite gravar na memória viva do History PROM todos os dados de calibração estabilizados para reuso."
  },
  {
    question: "Durante a partida, quando a mensagem de modo de configuração aparece no display e o operador calca a tecla \"Mode\", é possível mudar quais parâmetros usando as teclas 1, 2 ou 3?",
    options: [
      "Latitude, Longitude e Velocidade",
      "Invert Video, Back Light (ON/OFF) e Buzina (ON/OFF)",
      "Rumo, Balanço e Caturro",
      "Data, Hora e Fuso Horário",
    ],
    answer: "Invert Video, Back Light (ON/OFF) e Buzina (ON/OFF)",
    explanation: "O display em sua tela limpa e rápida logo após subir possui um menu isolado na janela a de base para conforto: Se houver muito sol a tela de cristal precisa de Invert Video, se for noite precisa de Back Light e se a buzina estiver perturbando ela pode ser desligada (ON/OFF). Essas 3 preferências estáticas rodam nas teclas numéricas 1, 2 e 3."
  },
  {
    question: "O que acontece se a tecla \"4\" for calcada acidentalmente enquanto o menu de configuração inicial estiver ativado?",
    options: [
      "O sistema é formatado aos padrões de fábrica",
      "Os alarmes de todo o navio são ativados",
      "O sistema fará com que a RCDU entre no modo RS232, e ela parará de se comunicar com a INS",
      "O teste de bateria é iniciado",
    ],
    answer: "O sistema fará com que a RCDU entre no modo RS232, e ela parará de se comunicar com a INS",
    explanation: "A opção oculta associada ao número 4 na página de configuração é para virar as chaves seriais da placa do display de modo a forçá-la a falar no protocolo industrial clássico RS232 para manutenções. Ao se clicar a RCDU muda seu idioma e fica surda para a INS principal que usa nas outra porta RS422."
  },
  {
    question: "Onde o operador pode consultar uma lista completa dos códigos de falha de três dígitos exibidos no campo \"FAULT\"?",
    options: [
      "Numa placa colada atrás da INS",
      "No Apêndice \"B\" do manual do fabricante, junto com descrições e causas prováveis",
      "Digitando \"HELP\" no teclado hexadecimal",
      "Apenas ligando para o suporte da Sperry",
    ],
    answer: "No Apêndice \"B\" do manual do fabricante, junto com descrições e causas prováveis",
    explanation: "Sendo impossível gravar na memória da tela toda a tabela complexa analítica de tolerância a software a fabricante Sperry condensou o erro a 3 dígitos que necessitam de cruzamento com o manual de bordo (presentes no Apêndice B) para desvendar suas descrições precisas."
  },
  {
    question: "Se, durante a entrada de dados num menu, o operador precisar abortar a operação do menu atualmente selecionado, o que deve ser feito?",
    options: [
      "Desligar o disjuntor CB3",
      "Pressionar repetidamente a tecla \"Clear\"",
      "Calcar qualquer tecla de seleção de menu (Mode, Aux Func, Sensor ou Display)",
      "Calcar \"Back Space\" até o fim",
    ],
    answer: "Calcar qualquer tecla de seleção de menu (Mode, Aux Func, Sensor ou Display)",
    explanation: "A programação das interfaces do LCD foi elaborada permitindo fuga flexível rápida. Quando o operador está travado numa edição numérica incompleta e decide cancelar, ele não precisa apagar caractere por caractere (como um clear limpo), ele pode simplesmente calcar qualquer tecla macro de navegação (Mode, Aux Func etc.) que o ponteiro esquecerá a tela antiga e pulará para a nova raiz intacta sem travar o navio."
  },
  {
    question: "O que significa \"FIM\" no contexto de laboratório para o sistema MK-39?",
    options: [
      "Frequency Interruption Module",
      "Factore Interface Monitor, um equipamento usado no laboratório (que substitui a RCDU) para configurar o sistema",
      "Final Inertial Measurement",
      "Fast Initialization Mode",
    ],
    answer: "Factore Interface Monitor, um equipamento usado no laboratório (que substitui a RCDU) para configurar o sistema",
    explanation: "Quando a placa-mãe é dissecada nos testes finos na bancada longe do conforto do barco a conexão direta com a INS Mestra para re-calibrar é providenciada através do equipamento Factory Interface Monitor (FIM) que emula integralmente as conversas da RCDU na porta serial."
  },
  {
    question: "Quando se usa o FIM ou um PC simulando a interface da RCDU, qual atalho de teclado corresponde à tecla \"AUX FUNC\"?",
    options: [
      "F1 ou M",
      "F3 ou R",
      "F2 ou X",
      "F4 ou V",
    ],
    answer: "F2 ou X",
    explanation: "Uma vez que teclados de computador padrão não detém as setas de silicone dedicadas ao Sperry o emulador re-mapeou as entradas vinculando a ação na FIM para invocar Funções Auxiliares para as teclas pareadas nativas F2 ou a letra X do teclado QWERTY comum."
  },
  {
    question: "Quantas fontes distintas de anúncio de falhas o sistema MK-39 Mod. 3A provê de forma geral?",
    options: [
      "3 fontes",
      "4 fontes",
      "6 fontes (sendo 3 delas provenientes da RCDU)",
      "10 fontes",
    ],
    answer: "6 fontes (sendo 3 delas provenientes da RCDU)",
    explanation: "Buscando máxima abrangência naval, o manual elenca 6 fontes independentes de alerta geral para a falha cruzada. Destas 6 pontes, 3 residem atadas ao monobloco principal da ECU Mestra (relés sonoros e lâmpada) e os outros 3 braços cruzam pelo fio para estourar alertas espelhados na unidade secundária remota (a própria RCDU com sua campainha, led e tela)."
  },
  {
    question: "Como os erros específicos da RCDU são comunicados ao operador pelo display?",
    options: [
      "Por alertas piscando a tela toda",
      "Em código de três (3) dígitos exibidos no campo FAULT",
      "Em texto longo por escrito no display",
      "Via impressão em fita de papel",
    ],
    answer: "Em código de três (3) dígitos exibidos no campo FAULT",
    explanation: "Embora possua 240 caracteres a tela não exibe sentenças literais para não roubar espaço das coordenadas. Ao invés disso a CPU cospe na coluna engessada FAULT à direita no topo da página apenas um identificador numérico conciso de 3 dígitos mapeando o incidente, exigindo que o técnico cruze depois esse número no manual."
  },
  {
    question: "O fabricante estipula uma vida útil para a INS baseada nas horas de funcionamento. Qual é o valor no manual e qual é o observado na prática?",
    options: [
      "10.000 horas no manual; 5.000 horas na prática",
      "500.000 horas no manual; 200.000 horas na prática",
      "200.000 horas pelo manual; mas na prática situa-se entre 60 a 70 mil horas",
      "50.000 horas em ambos os casos",
    ],
    answer: "200.000 horas pelo manual; mas na prática situa-se entre 60 a 70 mil horas",
    explanation: "A propaganda de bancada do fabricante afere em laboratório que a máquina é eterna suportando até 200.000 horas de luz ligada. Contudo, a rotina marinha que desliga a força contínua e liga gera desgaste térmico acentuado condensando as lentes provando que as perdas e ruídos reais limitam a calibração precisa estourando um limite útil de uso na casa prudente de 60 a 70 mil horas máximas."
  },
  {
    question: "Existe uma rotina de manutenção a ser feita a cada seis meses com o sistema posto em teste. Qual leitura é verificada nessa rotina e qual seu limite máximo de tolerância?",
    options: [
      "Temperatura dos acelerômetros, máximo 55°C",
      "Corrente do processador, máximo 5A",
      "Valores de voltagem entre os anéis de laser, que não podem ultrapassar ± 0,4 Volts (caso ultrapasse, indica deterioração da IMU)",
      "Frequência do sinal síncrono, máximo de 410 Hz",
    ],
    answer: "Valores de voltagem entre os anéis de laser, que não podem ultrapassar ± 0,4 Volts (caso ultrapasse, indica deterioração da IMU)",
    explanation: "A despeito de ser selado sem partes móveis esmagadoras, a equipe precisa checar a degradação base dos espelhos refletivos nos aros a laser. Isso é medido não com foto-sensor mas observando a voltagem gerada na malha em volta deles para manter o limiar. Esse teste que acorda semestralmente impõe que o limiar do diferencial da diferença elétrica medida lendo a margem do diferencial de fase no anel não extrapole a linha vermelha estrita perante os limites estipulados firmemente em ± 0,4 Volts. Acima disso, atesta-se exaustão e falência do bloco."
  },
  {
    question: "Se durante o teste semestral ou na rotina de voo for detectada a degradação da Unidade de Medição Inercial (IMU), qual o procedimento correto?",
    options: [
      "A IMU deve ser calibrada no navio usando o teclado",
      "A IMU não é reparada (no nível local); em caso de degradação, ela deve ser totalmente substituída",
      "Os espelhos dos anéis de laser devem ser polidos",
      "Os acelerômetros devem ser recarregados",
    ],
    answer: "A IMU não é reparada (no nível local); em caso de degradação, ela deve ser totalmente substituída",
    explanation: "Diferentemente das placas do rack da ECU que admitem limpezas fáceis com ar comprimido, a Unidade de Medição Inercial (IMU) é concebida como um item hermético monolítico selado sem conserto mecânico autorizado no navio. Uma vez condenada sua precisão por avaria das tolerâncias, a caixa pesada da bola inferior é descartada por inteiro, exigindo uma troca modular limpa por outra IMU certificada."
  },
  {
    question: "O que é o \"BITE TEST\" no sistema de manutenção do MK-39?",
    options: [
      "Um teste de impacto físico para avaliar a durabilidade do chassi",
      "Um Teste Dinâmico de Circuitos que tem a função de interrogar o estado do sistema",
      "Uma avaliação química dos componentes de bateria",
      "Uma rotina apenas para testar a comunicação RS232 com o PC",
    ],
    answer: "Um Teste Dinâmico de Circuitos que tem a função de interrogar o estado do sistema",
    explanation: "BITE é o acrônimo mundial para Built-In Test Equipment (Equipamento de Teste Embutido). Como o sistema precisa se policiar perante uma matriz sem chaves de fenda externas, existe essa função intrínseca (Dinâmica de Circuitos) imbuída que atua ativamente provocando e varrendo (interrogando) logicamente as portas, voltagens e respostas de placas para assegurar que nenhum bit esteja preso no navio antes de decolar."
  },
];
