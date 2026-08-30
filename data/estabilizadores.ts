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
  },
  {
    question: "Qual é o objetivo principal do sistema de estabilizadores do navio?",
    options: [
      "Aumentar o deslocamento e a velocidade do navio em mar grosso.",
      "Reduzir o jogo do navio, a fim de prover uma plataforma estável para armamento e operações com helicópteros.",
      "Diminuir o consumo de combustível isolando a praça de máquinas.",
      "Controlar automaticamente a direção (leme) do navio em fainas restritas."
    ],
    answer: "Reduzir o jogo do navio, a fim de prover uma plataforma estável para armamento e operações com helicópteros.",
    explanation: "O objetivo primário é atenuar o balanço lateral (jogo) da embarcação para garantir a precisão e a segurança no uso de armamentos e nas fainas de voo com helicópteros."
  },
  {
    question: "Além do seu objetivo principal, o sistema de estabilizadores faz outras operações. Qual das alternativas abaixo NÃO é uma característica ou operação do sistema?",
    options: [
      "É aconselhável para prover jogo forçado em caso de guerra NBQ (Nuclear, Biológica e Química).",
      "Reduz o jogo do navio utilizando duas aletas.",
      "Pode funcionar com metade da sua capacidade total, embora com restrições.",
      "Funciona operando três aletas simultâneas para fainas de carga leve."
    ],
    answer: "Funciona operando três aletas simultâneas para fainas de carga leve.",
    explanation: "O navio utiliza exclusivamente duas aletas (uma em cada bordo) para obter a estabilidade, e não três. Todas as demais operações (A, B e C) são características reais mencionadas no manual."
  },
  {
    question: "Qual é o ângulo aproximado que as aletas dos estabilizadores formam com o plano horizontal quando se projetam para fora do casco?",
    options: [
      "90 graus",
      "60 graus",
      "45 graus",
      "30 graus"
    ],
    answer: "45 graus",
    explanation: "As duas aletas ficam abaixo da linha d'água e formam um ângulo de aproximadamente 45 graus com o plano horizontal em relação ao casco."
  },
  {
    question: "O movimento das aletas é dado por um sistema eletro-hidráulico semelhante ao dos lemes. Sobre o comando destas aletas, é correto afirmar que:",
    options: [
      "Cada aleta possui um sistema independente para movimentá-la, porém ambas são comandadas por um único sistema de controle.",
      "As aletas compartilham o mesmo sistema hidráulico de acionamento mecânico direto.",
      "Cada aleta possui seu próprio sistema de controle primário, operando de forma autônoma e sem ligação uma com a outra.",
      "O movimento angular é comandado mecanicamente de forma manual pelo passadiço."
    ],
    answer: "Cada aleta possui um sistema independente para movimentá-la, porém ambas são comandadas por um único sistema de controle.",
    explanation: "Fisicamente, cada bordo tem seu mecanismo eletro-hidráulico independente, mas o cérebro que comanda (quando inclinar e quanto) é um único sistema de controle central."
  },
  {
    question: "Onde ficam localizados, respectivamente, o Painel de Controle (Painel da Vosper) e a Unidade de Controle do Sistema (Painel da Muirhead)?",
    options: [
      "Passadiço e COC (Centro de Operações de Combate).",
      "CCM e Compartimento dos Conversores.",
      "CCM e Passadiço.",
      "Praça de Máquinas e COC."
    ],
    answer: "CCM e Compartimento dos Conversores.",
    explanation: "O Painel da Vosper (controle remoto e monitoramento) fica no CCM (Centro de Controle de Máquinas). Já o Painel da Muirhead, considerado o cérebro do sistema, fica no compartimento dos conversores."
  },
  {
    question: "Em qual rotação (velocidade) trabalha o rotor do giroscópio do sistema de estabilizadores?",
    options: [
      "1.500 RPM",
      "2.000 RPM",
      "3.000 RPM",
      "6.000 RPM"
    ],
    answer: "3.000 RPM",
    explanation: "O giroscópio, que sente o torque gerado pelo jogo do navio, atua girando a uma velocidade fixa e contínua de cerca de 3.000 RPM."
  },
  {
    question: "No Painel de Cartões de Circuitos Impressos, qual é a função específica do Amplificador de Adição (PCB 968)?",
    options: [
      "Diferenciar os picos de energia do giroscópio.",
      "Funcionar como oscilador para alimentar o CX1 com 115V.",
      "Somar os sinais de aceleração, velocidade, ângulo e banda.",
      "Emitir a corrente final (20V 250mA) para a válvula MOOG."
    ],
    answer: "Somar os sinais de aceleração, velocidade, ângulo e banda.",
    explanation: "O próprio nome diz 'adição'. O PCB 968 soma diversas variáveis captadas pelos sensores (aceleração do navio, velocidade, ângulo das aletas e inclinação de banda) para gerar o cálculo de estabilização."
  },
  {
    question: "Qual a finalidade e a localização do 'Linvar do Odômetro'?",
    options: [
      "Localizado no CCM, sua função é dar partida no sistema elétrico de 440V.",
      "Localizado no passadiço, sua função é acionar o pino de travamento de emergência.",
      "Localizado no compartimento dos conversores, sua função é gerar os 50 VDC.",
      "Localizado na Unidade de Retransmissão do Odômetro (no COC), sua função é fornecer um sinal de compensação automática baseado na velocidade do navio."
    ],
    answer: "Localizado na Unidade de Retransmissão do Odômetro (no COC), sua função é fornecer um sinal de compensação automática baseado na velocidade do navio.",
    explanation: "A eficiência das aletas depende da velocidade do navio. O Linvar do odômetro pega a informação da velocidade real (no COC) e envia ao sistema para ele fazer a restrição ou ampliação do ângulo automaticamente."
  },
  {
    question: "O sistema utiliza vários níveis de tensão para diferentes componentes. Qual equipamento abaixo é o responsável por utilizar a tensão de 440 VCA 60Hz Trifásico?",
    options: [
      "Unidade do Giroscópio.",
      "Lâmpadas indicadoras do painel.",
      "Motores elétricos das bombas de óleo hidráulico.",
      "Indicadores de pressão e relés da válvula solenoide."
    ],
    answer: "Motores elétricos das bombas de óleo hidráulico.",
    explanation: "Como as bombas precisam de muita potência motriz para pressurizar o óleo, usam força pesada (440V Trifásico dos CDE 1-34 e 2-39). Os indicadores usam 24VDC, lâmpadas 50VDC e o controle usa 115VCA."
  },
  {
    question: "Por que a Unidade de Controle do Sistema (MUIRED) é considerada o 'cérebro' do sistema de estabilizadores?",
    options: [
      "Porque ela aciona fisicamente e diretamente as aletas em alto mar.",
      "Porque ela sente o jogo e a banda do navio, recebe o sinal de velocidade e produz os sinais de comando exatos para as aletas.",
      "Porque nela fica instalado o botão de emergência de travamento mecânico das pás.",
      "Porque distribui a energia elétrica trifásica para os motores principais."
    ],
    answer: "Porque ela sente o jogo e a banda do navio, recebe o sinal de velocidade e produz os sinais de comando exatos para as aletas.",
    explanation: "Ela centraliza todos os 'sensores' e toma a decisão eletrônica de estabilização, gerando o sinal para a Unidade de Controle da Aleta obedecer."
  },
  {
    question: "Qual a relação matemática fundamental entre o esforço das aletas para endireitar o navio e a velocidade da embarcação?",
    options: [
      "O esforço é inversamente proporcional à velocidade.",
      "O esforço é proporcional ao quadrado da velocidade do navio.",
      "O esforço é diretamente proporcional à raiz quadrada da banda do navio.",
      "A velocidade não afeta o esforço hidráulico, apenas afeta a angulação do giroscópio."
    ],
    answer: "O esforço é proporcional ao quadrado da velocidade do navio.",
    explanation: "A física de fluidos determina que a força de sustentação/pressão (esforço) cresça exponencialmente. É por isso que em velocidades muito altas, o ângulo da aleta deve ser obrigatoriamente reduzido para evitar sobrecarga."
  },
  {
    question: "Nas Fragatas MK-10, qual é o ângulo máximo imposto às aletas se o navio estiver operando em uma velocidade alta, entre 25 a 30 nós?",
    options: [
      "30°",
      "18° a 20°",
      "12° a 15°",
      "9° a 0°"
    ],
    answer: "12° a 15°",
    explanation: "O sistema escala os limites de ângulo. A 10-20 nós o máximo é 30º. De 20-25 nós restringe para 18-20º. De 25 a 30 nós, reduz para 12-15º de ângulo máximo. Acima de 30 nós é quase zerado (9º a 0º)."
  },
  {
    question: "A Unidade de Controle das Aletas fornece um sinal elétrico de saída para controlar a servo válvula eletro-hidráulica (Válvula MOOG). Qual é a especificação desse sinal elétrico?",
    options: [
      "115V 60Hz.",
      "24VDC 5A.",
      "20V 250mA.",
      "440V."
    ],
    answer: "20V 250mA.",
    explanation: "A válvula MOOG é extremamente sensível e atua baseada em um sinal de controle elétrico de baixa voltagem e corrente: 20V e 250 miliamperes."
  },
  {
    question: "Na sequência normal de parada do sistema de controle, qual ação obrigatória destaca-se no processo?",
    options: [
      "O travamento manual do pino de aço.",
      "A centralização automática das aletas.",
      "O esvaziamento imediato do tanque de gravidade.",
      "O desengate do rotor do giroscópio a 3000 RPM."
    ],
    answer: "A centralização automática das aletas.",
    explanation: "O sistema garante que, ao ser desligado, as aletas não fiquem travadas num ângulo, executando a centralização para a posição zero/neutra (paralela ao fluxo de água) para evitar arrasto."
  },
  {
    question: "Qual é a pressão ideal de operação pré-ajustada para o sistema hidráulico e qual componente a mantém?",
    options: [
      "50 bar, mantida pela bomba de gravidade.",
      "86 bar, mantida pela válvula de descompressão e escape.",
      "110 bar, mantida pela servo válvula MOOG.",
      "150 bar, mantida pelo lubrificador radial."
    ],
    answer: "86 bar, mantida pela válvula de descompressão e escape.",
    explanation: "O óleo excedente gerado pela bomba retorna ao tanque graças à válvula de descompressão e escape, mantendo a pressão operacional do fluido estável sempre em 86 bar."
  },
  {
    question: "Caso soe um alarme audiovisual no painel do sistema de controle, qual a consequência imediata de o operador apertar o botão 'FALHA ACEITA'?",
    options: [
      "Desliga as bombas principais e recolhe as aletas.",
      "Reinicia o sistema eletronicamente.",
      "Silencia o alarme (sirene) e estabelece o brilho fixo para a lâmpada indicadora.",
      "Engraza instantaneamente o pino de travamento de emergência."
    ],
    answer: "Silencia o alarme (sirene) e estabelece o brilho fixo para a lâmpada indicadora.",
    explanation: "Trata-se de uma confirmação padrão (acknowledge). A luz piscante passa a ficar fixa e o som é interrompido, mostrando que o operador registrou o evento. O problema ainda precisa ser sanado."
  },
  {
    question: "Durante a partida do sistema hidráulico, quanto tempo dura a circulação de óleo em 'by-pass' (retornando ao tanque) para que o motor da bomba adquira plena rotação antes de enviar pressão ao sistema?",
    options: [
      "2 segundos.",
      "7 segundos.",
      "15 segundos.",
      "30 segundos."
    ],
    answer: "7 segundos.",
    explanation: "Um Relé de Tempo no sistema é programado para atrasar a válvula direcional. Ele dá exatamente 7 segundos para que o motor elétrico pesado e a bomba adquiram plena rotação sem esforço hidráulico."
  },
  {
    question: "Qual das seguintes regras pertence às 'Precauções Hidráulicas' obrigatórias do sistema?",
    options: [
      "É possível fazer reapertos de mangueiras enquanto o sistema está a 86 bar.",
      "Após solucionar problema de nível baixo de óleo, o operador deve acionar o botão REARME para habilitar novas detecções.",
      "Vazamentos leves durante a operação podem ser tolerados até a atracação.",
      "A chave do suprimento 115VCA/24VCC deve ser desligada somente após a parada das bombas hidráulicas."
    ],
    answer: "Após solucionar problema de nível baixo de óleo, o operador deve acionar o botão REARME para habilitar novas detecções.",
    explanation: "Trabalhar com o sistema sob pressão e ignorar vazamentos é proibido. A chave S2 (115VCA/24VCC) deve ser desligada ANTES das bombas. O 'Rearme' no painel é o procedimento correto após sanar problemas de nível."
  },
  {
    question: "Em relação ao 'Cilindro de Travamento' (Pino de Travamento), assinale a alternativa CORRETA:",
    options: [
      "Ele é acionado de forma pneumática pelo painel do passadiço.",
      "Deve ser usado rotineiramente após desligar o sistema no final do dia.",
      "Quando está engrazado, um micro-interruptor é acionado, tornando impossível (impraticável) dar partida no sistema.",
      "Só serve para centralizar as aletas hidraulicamente."
    ],
    answer: "Quando está engrazado, um micro-interruptor é acionado, tornando impossível (impraticável) dar partida no sistema.",
    explanation: "É um recurso puramente mecânico de emergência, acionado manualmente. Se o pino for posto na haste, um sensor corta a partida elétrica por segurança, pois acionar a máquina hidraulicamente quebraria o sistema."
  },
  {
    question: "O que ocorre se o navio precisar dar máquinas para trás e o operador passar a chave 'Controle do Estabilizador' (no Painel do CCM) diretamente para a posição “Desliga” (procedimento de emergência)?",
    options: [
      "As aletas invertem seu movimento para ajudar na frenagem hidrodinâmica.",
      "Ocorre a centralização forçada das aletas.",
      "As bombas ejetam toda a graxa do lubrificador radial.",
      "A válvula MOOG perde comunicação com a Unidade de Giroscópio, travando as aletas na angulação de arrasto."
    ],
    answer: "Ocorre a centralização forçada das aletas.",
    explanation: "Bater a chave de controle para 'desligar' em uma emergência neutraliza as aletas, centralizando-as imediatamente para zero grau. Isso evita que manobras reversas repentinas rompam os eixos da aleta."
  },
  {
    question: "Qual é a função do Lubrificador Radial no sistema de estabilizadores?",
    options: [
      "Resfriar o óleo hidráulico que retorna do tanque de gravidade.",
      "Fornecer graxa para 7 pontos específicos do sistema.",
      "Lubrificar internamente as placas de circuito impresso (PCBs).",
      "Aliviar a pressão caso a válvula de descompressão falhe."
    ],
    answer: "Fornecer graxa para 7 pontos específicos do sistema.",
    explanation: "O material afirma de forma bem direta na página 66 que a função do Lubrificador Radial é fornecer graxa simultaneamente para 7 pontos do sistema de estabilizadores."
  },
  {
    question: "Como a documentação define a diferença básica entre Manutenção Preventiva e Corretiva para este sistema, e qual é o código do Cartão de Manutenção associado?",
    options: [
      "Preventiva corrige peças já quebradas; Corretiva evita que quebrem. Cartão DEN-SMP-02.",
      "Preventiva foca na limpeza visual; Corretiva foca na troca de óleo. Cartão Vosper-01.",
      "Preventiva visa prever uma avaria; Corretiva visa corrigir uma avaria, ambas para manter o sistema sem interrupções. Cartão DEN-SMP-01.",
      "Ambas têm o mesmo objetivo de trocar aletas a cada 5 anos. Cartão Muirhead-01."
    ],
    answer: "Preventiva visa prever uma avaria; Corretiva visa corrigir uma avaria, ambas para manter o sistema sem interrupções. Cartão DEN-SMP-01.",
    explanation: "A página 99 conceitua a preventiva como 'prever uma avaria' e a corretiva como 'corrigir uma avaria' mantendo o funcionamento. A página 100 finaliza o assunto indicando que a referência é o Cartão de Manutenção DEN-SMP-01."
  }
];
