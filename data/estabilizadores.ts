import { Question } from "../types/question";

export const estabilizadoresQuestions: Question[] = [
  {
    question: "Qual o propósito do sistema de Estabilizadores ?",
    options: [
      "Aumentar a velocidade final da embarcação em mar agitado.",
      "Reduzir o jogo do navio para prover uma plataforma estável para armamento e helicópteros.",
      "Controlar a direção e o rumo do navio de forma automática.",
      "Compensar o caturro do navio utilizando as alhetas de ré."
    ],
    answer: "Reduzir o jogo do navio para prover uma plataforma estável para armamento e helicópteros.",
    explanation: "Segundo o Capítulo 1 da apostila, o sistema anula ou minimiza o balanço lateral (jogo) da embarcação, garantindo estabilidade para o uso seguro de armas e o pouso/decolagem de aeronaves.*"
  },
  {
    question: "Como é obtida a estabilização do navio ?",
    options: [
      "Por tanques de lastro alternados automaticamente pelo sistema de bombas.",
      "Através de giroscópios internos de grande massa rotativa.",
      "Por duas aletas não retráteis (boreste e bombordo) que formam um ângulo de cerca de 45º com o plano horizontal.",
      "Por estabilizadores retráteis acionados hidraulicamente no eixo do leme."
    ],
    answer: "Por duas aletas não retráteis (boreste e bombordo) que formam um ângulo de cerca de 45º com o plano horizontal.",
    explanation: "A estabilização se dá pelo movimento (angular/torsional) dessas duas aletas em formato hidrodinâmico projetadas para fora do casco, que atuam de forma semelhante a lemes para contrariar o jogo do navio.*"
  },
  {
    question: "Quais as principais unidades que controlam o sistema de Estabilizadores das Fragatas MK-10 ?",
    options: [
      "Painel de Controle, Unidade de Controle dos Estabilizadores, Unidades de Controle da Aleta, Transmissores Combinados e Linvar do Odômetro.",
      "Giroscópio Mestre, Painel de Válvulas, Computador de Bordo e Odômetro.",
      "Motor de 45 HP, Bomba Hidráulica, Acumulador e Bloco Coletor.",
      "Unidade de Centralização, Cadeira do Estabilizador e Cilindros Hidráulicos."
    ],
    answer: "Painel de Controle, Unidade de Controle dos Estabilizadores, Unidades de Controle da Aleta, Transmissores Combinados e Linvar do Odômetro.",
    explanation: "Estas são as cinco partes principais listadas no diagrama de blocos de controle (Capítulo 2.1), responsáveis por monitorar, processar e atuar fisicamente nas correções do navio.*"
  },
  {
    question: "Qual a localização do Painel de Controle dos Estabilizadores na Fragatas MK-10 ?",
    options: [
      "No Passadiço.",
      "No Compartimento de Conversores.",
      "No Centro de Informações de Combate (CIC).",
      "No Centro de Controle da Máquina (CCM)."
    ],
    answer: "No Centro de Controle da Máquina (CCM).",
    explanation: "O Painel de Controle, que é a interface de manobra e monitoramento para os operadores, fica instalado no Centro de Controle da Máquina.*"
  },
  {
    question: "Qual a pressão oferecida pela Válvula de descompressão e escape ao sistema de Estabilizadores ?",
    options: [
      "Cerca de 100 BAR.",
      "Cerca de 150 BAR.",
      "Cerca de 200 BAR.",
      "Cerca de 50 BAR."
    ],
    answer: "Cerca de 150 BAR.",
    explanation: "Conforme os procedimentos de verificação após a partida da bomba (Item 3.3 da apostila), a pressão nominal ajustada e mantida no sistema para operação das aletas é de cerca de 150 BAR.*"
  },
  {
    question: "Quais os componentes do conjunto do sistema hidráulico do sistema de Estabilizadores ?",
    options: [
      "Apenas a bomba, motor elétrico e fluido hidráulico.",
      "Braço de comando, válvulas de escape e cilindros de travamento elétrico.",
      "Tanque, bomba, blocos coletores, acumulador, válvulas, filtros, resfriador, unidade de centralização, braço, cilindros, cadeira, aleta e lubrificador.",
      "Giroscópio, painel de circuitos impressos, transmissor de reajuste e linvar."
    ],
    answer: "Tanque, bomba, blocos coletores, acumulador, válvulas, filtros, resfriador, unidade de centralização, braço, cilindros, cadeira, aleta e lubrificador.",
    explanation: "O sistema hidráulico completo vai desde a geração de pressão (tanque, bomba, acumulador, válvulas) até os atuadores e suportes físicos (cilindros, braço, aleta, lubrificador, cadeira).*"
  },
  {
    question: "Qual o tempo em segundos, que as BB de óleo Hidráulico levam para atingir a sua plena rotação ?",
    options: [
      "3 segundos.",
      "5 segundos.",
      "Cerca de 9 segundos.",
      "15 segundos."
    ],
    answer: "Cerca de 9 segundos.",
    explanation: "O ciclo de partida automático tem um retardo de aproximadamente 9 segundos, o que permite ao motor elétrico atingir a velocidade plena sem carga antes da bomba começar a enviar pressão para o sistema.*"
  },
  {
    question: "A compensação de velocidade do navio, no Controle do Estabilizadores das Fragatas MK-10, é feita para evitar instabilidades e sobrecarga no Sistema. Descreva o ângulo respectivamente, para as seguintes velocidades: 10 a 20 Nós, 20 a 25 Nós e 25 a 30 Nós.",
    options: [
      "30º, 18º a 20º e 12º a 15º.",
      "45º, 30º e 15º.",
      "12º a 15º, 18º a 20º e 30º.",
      "30º, 25º a 28º e 18º a 20º."
    ],
    answer: "30º, 18º a 20º e 12º a 15º.",
    explanation: "Como a força gerada pela aleta aumenta com o quadrado da velocidade do navio, o sistema reduz eletronicamente o limite do ângulo de atuação da aleta em velocidades mais altas para evitar danos estruturais.*"
  },
  {
    question: "Quantas e quais as funções das válvulas de retenção (In-line check valve) ?",
    options: [
      "Uma; impede o fluxo reverso para a bomba.",
      "Duas; uma impede a transferência de óleo da câmara A para o sistema na operação normal, e a outra drena a câmara A na parada.",
      "Três; uma para cada cilindro e uma de segurança.",
      "Duas; ambas servem apenas para manter o acumulador carregado."
    ],
    answer: "Duas; uma impede a transferência de óleo da câmara A para o sistema na operação normal, e a outra drena a câmara A na parada.",
    explanation: "O sistema emprega exatamente duas válvulas de retenção desse tipo atuando em conjunto com a válvula de descompressão e escape para gerenciar a distribuição e drenagem do fluido (Item 1.2.1-C).*"
  },
  {
    question: "Qual o fabricante e o modelo da Servo-vvalvula eletro-hidráulica ?",
    options: [
      "DANFOSS, modelo ORBITROL.",
      "VOSPER, modelo MK-10.",
      "MOOG, modelo 72.103.",
      "MUIRHEAD, modelo K-373."
    ],
    answer: "MOOG, modelo 72.103.",
    explanation: "A apostila cita especificamente a firma MOOG e o modelo 72.103 como fabricante desta válvula, que converte os sinais elétricos de comando em vazão hidráulica proporcional.*"
  },
  {
    question: "Descreva a alimentação dos motores elétricos das bombas hidráulicas no Sistema de Controle do Estabilizadores das Fragatas MK-10, e qual o valor (em graus) que as aletas formam em relação ao plano horizontal do navio ?",
    options: [
      "115V / 60 Hz e as aletas formam 30º.",
      "24V CC e as aletas formam 45º.",
      "440V, 3 fases, 60 Hz e as aletas formam cerca de 45º.",
      "440V, monofásico, 400Hz e as aletas formam 15º."
    ],
    answer: "440V, 3 fases, 60 Hz e as aletas formam cerca de 45º.",
    explanation: "A alimentação pesada dos motores das bombas provém da rede principal do navio (440V tri-fásico, 60Hz), enquanto as aletas projetam-se do casco num ângulo de 45º (plano horizontal).*"
  },
  {
    question: "Qual cartão de circuito impresso (PBC) é responsável por alimentar o síncro CX1, existente na unidade de giroscópio do painel da Muirhead, com 115VCA/400Hz no Sistema de Controle do Estabilizadores das Fragatas MK-10 ?",
    options: [
      "Cartão do Oscilador (PCB 965) e Amplificador de Potência (PCB 966).",
      "Cartão do Demodulador (PCB 963) e Integrador (PCB 1143).",
      "Cartão do Diferenciador (PCB 967) e Modulador (C).",
      "Cartão Amplificador de Saída (PCB 969) e Amplificador de Adição (PCB 968)."
    ],
    answer: "Cartão do Oscilador (PCB 965) e Amplificador de Potência (PCB 966).",
    explanation: "Estes dois cartões (letras D e E do \"Mother Board\") funcionam juntos num circuito tipo Ponte WIEN e com o transformador T3 para fornecer a alimentação exata de 400Hz necessária ao síncro.*"
  },
  {
    question: "Qual a função da unidade centralizadora das aletas ?",
    options: [
      "Regular automaticamente o jogo das aletas de acordo com a velocidade do navio.",
      "Trazer a aleta para a posição a meio (centro) em emergências, havendo ou não pressão hidráulica disponível.",
      "Sincronizar o movimento da aleta de boreste com a de bombordo.",
      "Fornecer pressão extra para o acumulador durante manobras evasivas."
    ],
    answer: "Trazer a aleta para a posição a meio (centro) em emergências, havendo ou não pressão hidráulica disponível.",
    explanation: "Conhecida como \"Orbitrol\" (fabricada pela Danfoss), ela possui um volante manual que atua como bomba de emergência, permitindo alinhar as aletas a 0º caso haja avaria total no sistema.*"
  },
  {
    question: "Disserte sobre o dispositivo mecânico de travamento da aleta.",
    options: [
      "Sistema eletro-hidráulico que trava as aletas em 45º ao desligar as bombas.",
      "Mecanismo puramente mecânico com mola espiral que insere um pino no braço de comando para imobilizar o estabilizador.",
      "Freio a disco acoplado ao motor principal de 45 HP.",
      "Sistema pneumático acionado remotamente pelo Painel de Controle no CCM."
    ],
    answer: "Mecanismo puramente mecânico com mola espiral que insere um pino no braço de comando para imobilizar o estabilizador.",
    explanation: "Não utiliza pressão hidráulica; uma mola muito forte empurra fisicamente o pino de aço para dentro de um orifício no braço de comando da aleta. A sua liberação requer girar manualmente a porca de extração.*"
  },
  {
    question: "No Sistema de Controle dos Estabilizadores das Fragatas MK-10, a válvula direcional é operada através de qual dispositivo ?",
    options: [
      "Por um solenóide controlado por um interruptor no Painel de Controle.",
      "Mecanicamente pelo volante da Unidade de Centralização.",
      "Por cabos de aço ligados ao passadiço.",
      "Pelo Cartão Diferenciador da placa mãe (Mother Board)."
    ],
    answer: "Por um solenóide controlado por um interruptor no Painel de Controle.",
    explanation: "O solenóide atua eletromagneticamente para alterar a posição do carretel na válvula, e sua alimentação (24V) é acionada diretamente pelos comandos do operador no painel do CCM.*"
  },
  {
    question: "Descreva as funções da válvula de descompressão e escape constante no sistema hidráulico dos Estabilizadores das Fragatas MK-10.",
    options: [
      "Fechar o circuito hidráulico e resfriar o fluido através do intercambiador de calor.",
      "Controlar a pressão do sistema durante a operação e aliviar a bomba devolvendo óleo ao tanque quando não há demanda.",
      "Injetar nitrogênio a 830 lb/pol² no saco de borracha do acumulador.",
      "Travar automaticamente as aletas em caso de queda de energia elétrica."
    ],
    answer: "Controlar a pressão do sistema durante a operação e aliviar a bomba devolvendo óleo ao tanque quando não há demanda.",
    explanation: "Esta válvula gerencia o esforço da bomba. Mantém a pressão do sistema constante em atividade (via mola ajustável) e redireciona (by-pass) o óleo sobressalente direto para o tanque, evitando que o motor trabalhe com sobrecarga inútil.*"
  },
  {
    question: "Disserte sobre a Cadeira do Estabilizador.",
    options: [
      "É o assento do operador do Painel de Controle no CCM.",
      "É uma armação de aço que suporta os mancais superior e inferior, a caixa de gaxetas e serve de base para os cilindros hidráulicos.",
      "É a caixa de liga de alumínio estanque à água que protege os circuitos impressos.",
      "É o mecanismo giratório que acopla as aletas ao navio, isolando-as eletricamente."
    ],
    answer: "É uma armação de aço que suporta os mancais superior e inferior, a caixa de gaxetas e serve de base para os cilindros hidráulicos.",
    explanation: "Trata-se da estrutura física de fundação (Top-plate), soldada na estrutura do próprio casco, que abriga o eixo da aleta e serve de leito para a instalação de todos os atuadores locais (cilindros, mancais e transmissores).*"
  },
  {
    question: "Qual unidade do sistema de controle dos Estabilizadores é considerada o CÉREBRO DO SISTEMA ?",
    options: [
      "O Painel de Controle do Sistema.",
      "O Giroscópio Mestre.",
      "A Unidade de Controle dos Estabilizadores.",
      "O Transmissor Combinado de Reajuste."
    ],
    answer: "A Unidade de Controle dos Estabilizadores.",
    explanation: "A apostila define a \"Unidade de Controle dos Estabilizadores\" (que contém o Mother Board, o giroscópio e os circuitos de cálculo) como o cérebro que lê os sensores e decide os movimentos das aletas.*"
  },
  {
    question: "Qual a função do Linvar do Odômetro e onde fica localizado ?",
    options: [
      "Fornecer a indicação de nível de óleo; localizado no tanque de expansão.",
      "Enviar sinal elétrico para partida das bombas; localizado no CCM.",
      "Fornecer um sinal proporcional à velocidade para a compensação automática do sistema; instalado no odômetro do navio.",
      "Informar a aceleração do jogo do navio; instalado na Unidade de Giroscópio."
    ],
    answer: "Fornecer um sinal proporcional à velocidade para a compensação automática do sistema; instalado no odômetro do navio.",
    explanation: "A palavra Linvar (Variômetro Linear) refere-se ao transdutor montado diretamente no equipamento odômetro. Seu sinal instrui o sistema a limitar o ângulo da aleta quando o navio ganha velocidade.*"
  },
  {
    question: "No Sistema de Controle dos Estabilizadores das Fragatas MK-10, estando os pinos de travamento na posição TRAVADO, é possível que seja dada partida nos motores elétricos das bombas de óleo hidráulicos ? Explique.",
    options: [
      "Sim, as bombas partem, porém as aletas permanecem paradas.",
      "Sim, o sistema tem um by-pass automático que evita a sobrecarga.",
      "Não, um micro-interruptor acionado pelo pino engrazado corta o circuito elétrico de partida.",
      "Não, pois a válvula direcional bloqueia hidraulicamente a admissão do motor elétrico."
    ],
    answer: "Não, um micro-interruptor acionado pelo pino engrazado corta o circuito elétrico de partida.",
    explanation: "Trata-se de uma proteção contra falha operacional. Se o pino mecânico estiver fisicamente cravado no braço, o sistema elétrico impede que a bomba inicie e destrua o mecanismo, disparando simultaneamente um alarme de \"Pino engrazado\".*"
  },
  {
    question: "Quais as alimentações ficam disponíveis quando colocamos a chave Controle dos Estabilizadores na posição ON ?",
    options: [
      "Apenas 440V / 60 Hz para as bombas principais e ventilação.",
      "115V / 400 Hz para o giroscópio e 50V para manutenção.",
      "24V CC para indicadores e controle remoto; e 115V / 60 Hz para os circuitos de controle.",
      "220V CA para painéis auxiliares e 12V CC para alarmes visuais."
    ],
    answer: "24V CC para indicadores e controle remoto; e 115V / 60 Hz para os circuitos de controle.",
    explanation: "Ao girar a chave principal do painel para ON/LIGA, o navio libera estas voltagens menores (24V e 115V) apenas para \"acordar\" os sensores, relés, painéis luminosos e o computador, deixando-os prontos para dar a partida nas bombas pesadas.*"
  },
  {
    question: "Qual a principal precaução de segurança quando encontrado um vazamento no sistema hidráulico do sistema de estabilizadores ?",
    options: [
      "Colocar baldes para recolher o fluido, mantendo a operação até a atracação.",
      "Aumentar a pressão do acumulador para compensar a perda volumétrica.",
      "Parar o sistema imediatamente, sendo proibido trabalhar com o equipamento sob pressão.",
      "Substituir os anéis de vedação das aletas com o sistema operando em modo MANUAL."
    ],
    answer: "Parar o sistema imediatamente, sendo proibido trabalhar com o equipamento sob pressão.",
    explanation: "Regra estrita de segurança de sistemas de altíssima pressão. Fluidos hidráulicos a 150 BAR podem causar danos severos ou amputações (injeção de óleo na pele); todo o maquinário deve ser parado e despressurizado antes da inspeção.*"
  }
];
