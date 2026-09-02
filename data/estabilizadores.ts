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
  },
  {
    question: "Quantos sistemas eletro-hidráulicos possui a Fragata Classe Niterói?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "2",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual é a alimentação das unidades indicadoras das aletas?",
    options: [
      "24V / 60Hz",
      "115V / 60Hz",
      "440V / 60Hz",
      "50V CC"
    ],
    answer: "115V / 60Hz",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual o ângulo das aletas no sistema a 45º e o ângulo máximo?",
    options: [
      "15º / 25º máximo",
      "45º / 50º máximo",
      "45º no sistema / 30º ângulo máximo",
      "30º no sistema / 45º ângulo máximo"
    ],
    answer: "45º no sistema / 30º ângulo máximo",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Em quantos segundos as bombas atingem plena rotação e elevam a pressão para 86 bar?",
    options: [
      "5 segundos",
      "7 segundos",
      "9 segundos",
      "12 segundos"
    ],
    answer: "7 segundos",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quantos são os pontos de lubrificação?",
    options: [
      "4 pontos",
      "5 pontos",
      "7 pontos",
      "9 pontos"
    ],
    answer: "7 pontos",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quantos transmissores combinados o sistema possui?",
    options: [
      "4, sendo 2 para cada aleta",
      "1 para o sistema todo",
      "2, sendo 1 para cada aleta",
      "3, sendo 1 reserva"
    ],
    answer: "2, sendo 1 para cada aleta",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais alimentações ficam disponíveis?",
    options: [
      "24V e 115V / 60Hz",
      "50V e 440V",
      "12V e 115V / 400Hz",
      "24V e 50V CC"
    ],
    answer: "24V e 115V / 60Hz",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a causa que leva ao acendimento do painel Vosper?",
    options: [
      "Alta temperatura do óleo",
      "Queda de tensão na rede principal",
      "Nível baixo de óleo hidráulico no tanque",
      "Falha no giroscópio"
    ],
    answer: "Nível baixo de óleo hidráulico no tanque",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual é o elo de ligação?",
    options: [
      "Unidade de controle",
      "Painel de controle (Vosper)",
      "Caixa de junção",
      "Válvula direcional"
    ],
    answer: "Painel de controle (Vosper)",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O que está situado na U.C.E.?",
    options: [
      "Os reles de desarme",
      "Os conversores",
      "As válvulas Moog",
      "O motor principal"
    ],
    answer: "Os conversores",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Como é obtido o movimento torsional das aletas?",
    options: [
      "Através de um sistema eletro-hidráulico",
      "Através de engrenagens mecânicas",
      "Através de um motor elétrico de passo",
      "Através de cabos de aço e polias"
    ],
    answer: "Através de um sistema eletro-hidráulico",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual valor que está setado para alarme do painel da Vosper?",
    options: [
      "1/2 -> 50%",
      "3/4 -> 75%",
      "1/4 -> 25%",
      "1/3 -> 33%"
    ],
    answer: "1/4 -> 25%",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual é a pressão ideal?",
    options: [
      "50 Bar",
      "65 Bar",
      "86 Bar",
      "100 Bar"
    ],
    answer: "86 Bar",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual componente regula o fluxo de óleo hidráulico para o sistema?",
    options: [
      "Bomba principal",
      "Servo-válvula eletro-hidráulica (Válvula Moog)",
      "Válvula de descompressão e escape",
      "Acumulador hidráulico"
    ],
    answer: "Servo-válvula eletro-hidráulica (Válvula Moog)",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual componente é responsável por reforçar a pressão?",
    options: [
      "Bomba de escorva",
      "Tanque de expansão",
      "Acumulador hidráulico",
      "Válvula solenóide"
    ],
    answer: "Acumulador hidráulico",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quem controla as aletas?",
    options: [
      "Painel local",
      "U.C.E. (Unidade de Controle dos Estabilizadores)",
      "Giroscópio",
      "Operador no passadiço"
    ],
    answer: "U.C.E. (Unidade de Controle dos Estabilizadores)",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais os tipos de alarmes contidos no painel Vosper?",
    options: [
      "Apenas visual",
      "Apenas sonoro",
      "Visual e sonoro",
      "Luminoso e tátil"
    ],
    answer: "Visual e sonoro",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual cartão possui oscilador e amplificador de potência?",
    options: [
      "Cartão 115/60",
      "Cartão 24V CC",
      "Cartão 115/400",
      "Cartão de retificação"
    ],
    answer: "Cartão 115/400",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual componente envia um sinal elétrico para as servo-válvulas eletro-hidráulicas?",
    options: [
      "Unidade de controle das aletas",
      "Painel indicador",
      "Giroscópio",
      "Odômetro"
    ],
    answer: "Unidade de controle das aletas",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O que atua em comum no sistema?",
    options: [
      "Transmissor de ângulo e bombas",
      "Unidade de controle e painel de controle",
      "Aletas e giroscópio",
      "Tanque de óleo e acumulador"
    ],
    answer: "Unidade de controle e painel de controle",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Onde fica montado o transmissor de reajuste de ângulo?",
    options: [
      "Na praça de máquinas principal",
      "CAV 37/38, Cadeira BE/BB",
      "No mastro principal",
      "No painel do passadiço"
    ],
    answer: "CAV 37/38, Cadeira BE/BB",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a alimentação do linvar do odômetro?",
    options: [
      "115V / 400 Hz",
      "24V / 60 Hz",
      "20V / 60 Hz",
      "50V / 60 Hz"
    ],
    answer: "20V / 60 Hz",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual é a faixa de angularidade máxima a 30 nós?",
    options: [
      "12º a 15º",
      "18º a 20º",
      "25º a 30º",
      "45º"
    ],
    answer: "12º a 15º",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual é a operação utilizada em situação de guerra (NBQR)?",
    options: [
      "Automática total",
      "Centralização automática",
      "Hand Roll, Jogo Forçado (Manual)",
      "Desligamento de emergência"
    ],
    answer: "Hand Roll, Jogo Forçado (Manual)",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual ação obtém o mesmo efeito de levar automaticamente a operação?",
    options: [
      "Ligar bombas reservas",
      "Chave na posição Desligada",
      "Acionar o alarme",
      "Resetar a U.C.E."
    ],
    answer: "Chave na posição Desligada",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quantos graus as aletas formam com o plano horizontal?",
    options: [
      "30º",
      "45º em relação ao plano horizontal",
      "90º",
      "15º"
    ],
    answer: "45º em relação ao plano horizontal",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Em caso de falha do linvar do odômetro, como o operador pode introduzir a velocidade no sistema?",
    options: [
      "Através de intervenção mecânica nas aletas",
      "Digitando no terminal do C.C.M.",
      "Através da chave no painel Vosper a 40 nós",
      "O sistema não permite introdução manual"
    ],
    answer: "Através da chave no painel Vosper a 40 nós",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual válvula é responsável por manter a pressão ideal?",
    options: [
      "Válvula Moog",
      "Válvula de descompressão e escape",
      "Válvula direcional",
      "Válvula de retenção"
    ],
    answer: "Válvula de descompressão e escape",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O que se deve fazer quando encontrar vazamento no sistema?",
    options: [
      "Isolar a aleta correspondente",
      "Reduzir a pressão pela metade",
      "Desligar o sistema",
      "Ligar a bomba de reserva"
    ],
    answer: "Desligar o sistema",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a função (escala de tensão) do linvar proporcional da chave elétrica?",
    options: [
      "0 a 40 Volts",
      "10 a 50 Volts",
      "24 a 115 Volts",
      "-20 a +20 Volts"
    ],
    answer: "0 a 40 Volts",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Em qual posição a chave deve estar para dar partida local?",
    options: [
      "Automático",
      "Manual",
      "Remoto",
      "Isolado"
    ],
    answer: "Remoto",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Por quantas unidades principais o sistema é composto?",
    options: [
      "3 unidades",
      "4 unidades",
      "5 unidades",
      "7 unidades"
    ],
    answer: "5 unidades",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a duração, em segundos, da parada?",
    options: [
      "5 segundos",
      "7 segundos",
      "9 segundos",
      "12 segundos"
    ],
    answer: "9 segundos",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a alimentação das lâmpadas indicadoras?",
    options: [
      "24 VCC",
      "12 VCC",
      "50 VCC",
      "115 VCA"
    ],
    answer: "50 VCC",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O que acontece \"se der ruim\" (avaria parcial)?",
    options: [
      "O navio aderna imediatamente",
      "Inevitável redução na eficiência do sistema",
      "As aletas são ejetadas",
      "Ocorre o travamento total na posição de mergulho"
    ],
    answer: "Inevitável redução na eficiência do sistema",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a alimentação dos indicadores?",
    options: [
      "12 Volts",
      "24 Volts",
      "50 Volts",
      "115 Volts"
    ],
    answer: "24 Volts",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a alimentação de todas as lâmpadas?",
    options: [
      "24 V",
      "50 V",
      "115 V",
      "220 V"
    ],
    answer: "50 V",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a alimentação dos motores e de onde provém?",
    options: [
      "440V, 60Hz trifásico - CDG 234 e 239",
      "115V, 400Hz bifásico - C.C.M.",
      "440V, 50Hz trifásico - Painel Vosper",
      "24V CC - Baterias principais"
    ],
    answer: "440V, 60Hz trifásico - CDG 234 e 239",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O que é considerado o \"cérebro\" do sistema?",
    options: [
      "O giroscópio",
      "U.C.E. (Unidade de Controle dos Estabilizadores)",
      "Painel Vosper",
      "Válvula Moog"
    ],
    answer: "U.C.E. (Unidade de Controle dos Estabilizadores)",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O que atua como sensor do jogo do navio?",
    options: [
      "Transmissor de ângulo",
      "Odômetro",
      "Unidade Giroscópica",
      "Linvar"
    ],
    answer: "Unidade Giroscópica",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Onde fica localizado precisamente o painel de controle dos cartões?",
    options: [
      "No passadiço",
      "Na praça de máquinas",
      "Nos conversores",
      "No C.C.M."
    ],
    answer: "Na praça de máquinas",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Após solucionada a avaria, qual procedimento realizar?",
    options: [
      "Desligar bombas",
      "Trocar o óleo",
      "Rearme",
      "Calibração das aletas"
    ],
    answer: "Rearme",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Durante a partida, a válvula é energizada após quantos segundos?",
    options: [
      "5 segundos",
      "7 segundos",
      "9 segundos",
      "12 segundos"
    ],
    answer: "9 segundos",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual o propósito dos estabilizadores?",
    options: [
      "Reduzir o jogo do navio",
      "Aumentar a velocidade do navio",
      "Controlar a direção do navio",
      "Estabilizar a temperatura do motor"
    ],
    answer: "Aumentar a velocidade do navio",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais alimentações são fornecidas pelo navio e qual é exclusiva do sistema?",
    options: [
      "12V, 24V, 115/60; 440V é única do sistema",
      "24V, 50V; 115/400 e 440V são únicas do sistema",
      "24V, 50V, 115/60, 440V; 115/400 é a única que não é do navio",
      "Apenas 440V é do navio; o resto é gerado pelo sistema"
    ],
    answer: "12V, 24V, 115/60; 440V é única do sistema",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Descreva as partes componentes dos estabilizadores comuns ao controle das aletas:",
    options: [
      "Giroscópio e Bombas",
      "Painel de controle e U.C.E.",
      "Acumulador e Válvula Moog",
      "Conversores e Transmissores"
    ],
    answer: "Acumulador e Válvula Moog",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual é o propósito do sistema de estabilização das Fragatas Classe Niterói?",
    options: [
      "Reduzir o peso do navio para economizar combustível.",
      "Reduzir o jogo do navio, a fim de prover uma plataforma estável para o armamento e operações com helicóptero.",
      "Auxiliar na propulsão e direção em águas rasas.",
      "Fornecer energia hidráulica de emergência para as bombas principais."
    ],
    answer: "Reduzir o jogo do navio, a fim de prover uma plataforma estável para o armamento e operações com helicóptero.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais são as alimentações fornecidas pelo navio ao sistema de controles dos estabilizadores?",
    options: [
      "24V CC, 50V CC, 115V 60Hz e 440V 60Hz Trifásico.",
      "12V CC, 24V CC, 115V 400Hz e 220V 60Hz.",
      "50V CC, 115V 400Hz, 220V Trifásico e 440V 50Hz.",
      "Apenas 440V 60Hz Trifásico e 115V 60Hz."
    ],
    answer: "24V CC, 50V CC, 115V 60Hz e 440V 60Hz Trifásico.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "No sistema de estabilização das Fragatas MK-10, quais partes componentes são comuns ao controle das Aletas?",
    options: [
      "Acumulador hidráulico e Bomba de escorva.",
      "Unidade de giroscópio e Válvula de descompressão.",
      "Painel de controle do Sistema e Unidade de controle dos estabilizadores (U.C.E.).",
      "Painel Vosper e Painel Starter."
    ],
    answer: "Painel de controle do Sistema e Unidade de controle dos estabilizadores (U.C.E.).",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Como é constituído o transmissor combinado de reajuste e ângulo e quais as suas funções?",
    options: [
      "Por dois potenciômetros; serve para medir a velocidade e o ângulo de inclinação da proa.",
      "Por um sincro transmissor e um sincro linvar; envia ao painel de controle sinal para indicação de ângulo da aleta e fornece sinal de resposta para controle do sistema.",
      "Por um giroscópio e um acelerômetro; calcula a velocidade do vento e o jogo do navio.",
      "Por duas válvulas Moog; direcionam o óleo para o cilindro de reajuste."
    ],
    answer: "Por um sincro transmissor e um sincro linvar; envia ao painel de controle sinal para indicação de ângulo da aleta e fornece sinal de resposta para controle do sistema.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Possibilitar o controle remoto e fornecer monitoragem do funcionamento do sistema são características de que unidade e qual a sua localização?",
    options: [
      "Centro de informações de combate (CIC).",
      "Painel de controle do sistema (painel da Vosper) e Centro de controle das máquinas (C.C.M).",
      ". B) Painel de controle do sistema (painel da Vosper) e Centro de controle das máquinas (C.C.M). C) Unidade de controle das aletas (U.C.E.), no passadiço.",
      "Transmissor de ângulo, localizado no compartimento da máquina do leme."
    ],
    answer: "Painel de controle do sistema (painel da Vosper) e Centro de controle das máquinas (C.C.M).",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Onde tem origem a alimentação do sincro cx1 e quais componentes são utilizados na sua geração?",
    options: [
      "No transformador principal do navio.",
      "No painel de controle Vosper, usando retificadores.",
      "Em um oscilador no painel de cartões; utiliza um oscilador, um amplificador de potência e um transformador.",
      "Na bateria de emergência, usando um inversor de 400Hz."
    ],
    answer: "Em um oscilador no painel de cartões; utiliza um oscilador, um amplificador de potência e um transformador.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Onde se localizam as unidades de controle das aletas a bordo, qual a sua alimentação e o valor dos sinais de controle para as servo-válvulas?",
    options: [
      "Na praça de máquinas (Bravo 2), uma a \"BE\" e outra a \"BB\"; alimentação 115V 60Hz; sinal de 20V D.C 250 mA.",
      "No C.C.M; alimentação de 440V 60Hz; sinal de 50V D.C 100 mA.",
      "No passadiço; alimentação de 24V D.C; sinal de 12V D.C 500 mA.",
      "No compartimento do giroscópio; alimentação de 115V 400Hz; sinal de 20V A.C."
    ],
    answer: "Na praça de máquinas (Bravo 2), uma a \"BE\" e outra a \"BB\"; alimentação 115V 60Hz; sinal de 20V D.C 250 mA.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais os sinais de controle aplicados ao amplificador de adição e qual a origem deles?",
    options: [
      "Pressão do óleo e temperatura; origem nos sensores do tanque.",
      "Aceleração, velocidade, ângulo de jogo e banda do navio; origem na Unidade do giroscópio e unidade de banda.",
      "Posição das aletas e rotação da bomba; origem nos transmissores de ângulo.",
      "Velocidade do vento e corrente marítima; origem no anemômetro e odômetro."
    ],
    answer: "Aceleração, velocidade, ângulo de jogo e banda do navio; origem na Unidade do giroscópio e unidade de banda.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Como é produzido um jogo artificial no navio no sistema de estabilizadores?",
    options: [
      "Injetando ar comprimido nos tanques de lastro de um dos bordos.",
      "Aumentando subitamente a pressão de uma das bombas hidráulicas.",
      "Passando a chave (S11) para \"Hand Roll\" e operando alternadamente a chave boreste/bombordo, provocando com o movimento das aletas um jogo artificial.",
      "Desligando o giroscópio e permitindo que as aletas fiquem livres na água."
    ],
    answer: "Passando a chave (S11) para \"Hand Roll\" e operando alternadamente a chave boreste/bombordo, provocando com o movimento das aletas um jogo artificial.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Estando o navio com uma banda permanente, como esta é medida e como o sistema estabiliza o navio?",
    options: [
      "Por níveis de bolha mecânicos no passadiço, corrigindo pelas válvulas de escape.",
      "Um pêndulo preso ao rotor de um linvar provoca ângulo entre bobinas gerando sinal elétrico proporcional à banda; em relação à vertical ou banda do navio.",
      "Pelo odômetro e corrigido girando as aletas sempre 45 graus para baixo.",
      "Por um sensor a laser que mede a distância até a água."
    ],
    answer: "Um pêndulo preso ao rotor de um linvar provoca ângulo entre bobinas gerando sinal elétrico proporcional à banda; em relação à vertical ou banda do navio.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Como é conseguido o movimento torcional dos eixos das aletas e qual a origem do sinal elétrico para controle?",
    options: [
      "Por engrenagens mecânicas ligadas ao motor principal; sinal gerado pelo passadiço.",
      "É obtido por dois cilindros hidráulicos que atuam em um braço de comando do eixo; sinal tem origem na unidade do giroscópio do sistema.",
      "Por um motor de passo de alta potência; sinal gerado no C.C.M.",
      "Pelas bombas centrífugas diretamente no eixo; sinal gerado pelo odômetro."
    ],
    answer: "É obtido por dois cilindros hidráulicos que atuam em um braço de comando do eixo; sinal tem origem na unidade do giroscópio do sistema.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais são os quatro componentes básicos do sistema hidráulico independente de cada estabilizador?",
    options: [
      "Motor elétrico, polias, correias e lubrificador.",
      "Tanque de óleo hidráulico, Bomba hidráulica, Acumulador hidráulico e Servo-válvula eletro-hidráulica.",
      "Trocador de calor, filtro de sucção, válvula by-pass e termostato.",
      "Válvula Moog, cilindro mestre, radiador e manômetro."
    ],
    answer: "Tanque de óleo hidráulico, Bomba hidráulica, Acumulador hidráulico e Servo-válvula eletro-hidráulica.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Se as aletas estiverem travadas mecanicamente, como as bombas são impedidas de funcionar e qual a indicação?",
    options: [
      "Um sensor de pressão desarma o disjuntor principal, soando uma sirene.",
      "Uma micro-chave abre o circuito de partida da bomba e outra completa o circuito de uma lâmpada no painel de controle, indicando aleta travada.",
      "O acoplamento mecânico se rompe (pino fusível) e um alarme visual pisca no C.C.M.",
      "O fluxo de óleo é bloqueado fisicamente, desarmando o relé térmico."
    ],
    answer: "Uma micro-chave abre o circuito de partida da bomba e outra completa o circuito de uma lâmpada no painel de controle, indicando aleta travada.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais as funções da válvula de descompressão e escape no sistema hidráulico?",
    options: [
      "Controlar a temperatura do óleo e liberar vapores do tanque.",
      "Filtrar impurezas da linha de alta pressão e retornar óleo limpo.",
      "Controlar a pressão quando as aletas estão funcionando e permitir que a bomba funcione com pequena carga quando não há demanda de pressão.",
      "Direcionar o óleo para a servo-válvula e bloquear o retorno para o acumulador."
    ],
    answer: "Controlar a pressão quando as aletas estão funcionando e permitir que a bomba funcione com pequena carga quando não há demanda de pressão.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais as precauções hidráulicas que o operador deve ter com os estabilizadores?",
    options: [
      "Ao encontrar vazamento parar o sistema imediatamente e em nenhuma hipótese trabalhar no sistema sob pressão.",
      "Completar o óleo com o sistema em funcionamento máximo.",
      "Limpar os filtros apenas quando o alarme de alta temperatura tocar.",
      "Manter o sistema operando sob pressão constante mesmo com vazamentos leves para não perder estabilidade."
    ],
    answer: "Ao encontrar vazamento parar o sistema imediatamente e em nenhuma hipótese trabalhar no sistema sob pressão.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Durante a partida, ao ligar a chave controle, quais alimentações ficam disponíveis para a operação?",
    options: [
      "Apenas 440V 60Hz Trifásico.",
      "50V D.C e 115V 400Hz.",
      "24V D.C e 115V 60Hz.",
      "12V D.C e 220V 60Hz."
    ],
    answer: "24V D.C e 115V 60Hz.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Na unidade de giroscópio, existem dois sincros linvares (Cx1 e Cx2). Qual a função de cada um?",
    options: [
      "Cx1 mede temperatura e Cx2 mede pressão.",
      "Sincro Cx1 produz sinais proporcionais ao ângulo e aceleração de jogo; Sincro Cx2 produz sinal proporcional à velocidade de jogo do navio.",
      "Ambos produzem sinais redundantes para controle exclusivo da bomba de boreste.",
      "Cx1 controla a válvula de escape e Cx2 controla a válvula Moog."
    ],
    answer: "Sincro Cx1 produz sinais proporcionais ao ângulo e aceleração de jogo; Sincro Cx2 produz sinal proporcional à velocidade de jogo do navio.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Se o nível de óleo no tanque cair para determinado valor, quais relés operam e o que ocorre no painel?",
    options: [
      "RL-1 e RL-2; o sistema desliga imediatamente sem alarme sonoro.",
      "RL-8 e RL-9; a luz de \"óleo baixo\" acende na cor verde.",
      "RL-6, RL-10 e RL-11; a lâmpada de alarme (LP1) começa a piscar e o alarme sonoro atua.",
      "Apenas RL-7; a lâmpada de trava da aleta é acesa."
    ],
    answer: "RL-6, RL-10 e RL-11; a lâmpada de alarme (LP1) começa a piscar e o alarme sonoro atua.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Para evitar instabilidade e sobrecarga, compensa-se a velocidade do navio limitando o ângulo das aletas. Quais são os ângulos para as velocidades de 10-20 nós, 20-25 nós e 25-30 nós, respectivamente?",
    options: [
      "30 graus (ângulo máximo); De 18 a 20 graus; De 12 a 15 graus.",
      "45 graus; 30 graus; 15 graus.",
      "15 graus; 25 graus; 35 graus.",
      "20 graus; 15 graus; 10 graus."
    ],
    answer: "30 graus (ângulo máximo); De 18 a 20 graus; De 12 a 15 graus.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Após um alarme, como o operador deve proceder para rearmar o sistema?",
    options: [
      "Pressionar o botão vermelho de emergência e resetar os disjuntores no C.C.M.",
      "Completar o nível de óleo nos tanques e calçar o botão \"Rearme de Alarmes\" no painel de controle.",
      "Desligar e ligar a chave principal aguardando 9 segundos.",
      "Isolar o tanque de óleo e transferir o controle para modo manual."
    ],
    answer: "Completar o nível de óleo nos tanques e calçar o botão \"Rearme de Alarmes\" no painel de controle.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Durante um alarme de baixo nível, ao se calcar o botão \"Falha Aceita (BB1)\", o que ocorre com os relés e a lâmpada (LP1)?",
    options: [
      "Todos os relés são energizados e a lâmpada apaga.",
      "RL-7 opera e RL-10 e RL-11 são desenergizados; a lâmpada para de piscar e permanece acesa.",
      "Os relés são travados e a lâmpada começa a piscar mais rápido.",
      "RL-7 desenergiza, liberando a partida, e a lâmpada muda de cor."
    ],
    answer: "RL-7 opera e RL-10 e RL-11 são desenergizados; a lâmpada para de piscar e permanece acesa.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a função do acumulador hidráulico no sistema dos estabilizadores?",
    options: [
      "Armazenar óleo frio para resfriar a bomba.",
      "Filtrar partículas metálicas do fluido hidráulico.",
      "Fornecer um reforço de pressão ao sistema caso o débito exigido pelos cilindros seja maior que a capacidade da bomba.",
      "Manter o nível do tanque constante compensando a evaporação."
    ],
    answer: "Fornecer um reforço de pressão ao sistema caso o débito exigido pelos cilindros seja maior que a capacidade da bomba.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Onde o sinal para compensação da velocidade do navio pode ser introduzido e de que forma?",
    options: [
      "Apenas no C.C.M de forma automática.",
      "Linvar do odômetro (automaticamente), linvar no painel de controle (manualmente) e potenciômetro na unidade de controle (manualmente).",
      "Via rádio com o controle de máquinas, totalmente manual.",
      "No giroscópio (automaticamente) e na válvula de escape (manualmente)."
    ],
    answer: "Linvar do odômetro (automaticamente), linvar no painel de controle (manualmente) e potenciômetro na unidade de controle (manualmente).",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "A unidade considerada o \"cérebro\" do sistema (U.C.E.) integra quais componentes básicos?",
    options: [
      "Bombas, Válvulas Moog, Cilindros e Acumulador.",
      "Unidade do giroscópio, Unidade de banda, Unidade de compensação de velocidade e Unidade de jogo manual.",
      "Painel Vosper, Oscilador 115/400, Relés e Transformadores.",
      "Transmissor combinado, Linvar do odômetro, C.C.M e Starter."
    ],
    answer: "Unidade do giroscópio, Unidade de banda, Unidade de compensação de velocidade e Unidade de jogo manual.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Quais as funções da válvula solenóide direcional durante a partida e parada do sistema?",
    options: [
      "Na partida, permite que o motor atinja plena velocidade antes de receber carga. Na parada, propicia rápido decréscimo da pressão para o travamento hidráulico dos cilindros.",
      "Na partida ela fornece 86 bar diretos. Na parada ela drena todo o óleo para o porão.",
      "Na partida acende a luz indicadora. Na parada ativa o alarme sonoro.",
      "Controla a temperatura do óleo na partida e resfria a bomba na parada."
    ],
    answer: "Na partida, permite que o motor atinja plena velocidade antes de receber carga. Na parada, propicia rápido decréscimo da pressão para o travamento hidráulico dos cilindros.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Na partida, ao levar momentaneamente as chaves das bombas \"BE\" e \"BB\" para partida, qual a duração do ciclo indicado pela lâmpada e de onde pode ser dada a partida?",
    options: [
      "5 segundos; apenas do painel Vosper.",
      "9 segundos; do painel de controle no C.C.M e painel de starter na praça de máquinas (B2).",
      "7 segundos; do passadiço e do giroscópio.",
      "12 segundos; diretamente nas aletas."
    ],
    answer: "9 segundos; do painel de controle no C.C.M e painel de starter na praça de máquinas (B2).",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Que unidade permite trazer uma aleta parada com avaria para a posição a meio (zero grau) e quais as formas de operação desta unidade?",
    options: [
      "Cilindro mestre; operado apenas com chave especial.",
      "Unidade de centralização das aletas; operada manualmente com pressão hidráulica ou sem pressão hidráulica.",
      "Acumulador de emergência; automático via bateria.",
      "Válvula Moog reserva; operada pelo C.C.M."
    ],
    answer: "Unidade de centralização das aletas; operada manualmente com pressão hidráulica ou sem pressão hidráulica.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Após as verificações, quais os procedimentos do operador para a partida normal do sistema?",
    options: [
      "Ligar o giroscópio e aguardar 30 minutos.",
      "Acionar as válvulas de descompressão manualmente e ligar o disjuntor principal.",
      "Colocar a chave controle do estabilizador na posição liga e levar momentaneamente as chaves de partida das bombas de BE e BB para a posição partida.",
      "Pressionar \"Rearme de Alarmes\" e colocar a chave em \"Hand Roll\"."
    ],
    answer: "Colocar a chave controle do estabilizador na posição liga e levar momentaneamente as chaves de partida das bombas de BE e BB para a posição partida.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Qual a função das servo-válvulas eletro-hidráulicas e qual outro nome recebem a bordo?",
    options: [
      "Controlar a pressão do ar comprimido; chamadas de Válvulas de purga.",
      "Regulam o fluxo de óleo para os cilindros hidráulicos; recebem o nome de Válvulas Moogs.",
      "Evitar o retorno de óleo ao tanque; chamadas de Válvulas de retenção.",
      "Filtrar o fluido do acumulador; chamadas de Válvulas reguladoras de fluxo."
    ],
    answer: "Regulam o fluxo de óleo para os cilindros hidráulicos; recebem o nome de Válvulas Moogs.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "O sincro \"Cx1\" fornece um sinal proporcional ao jogo do navio que é dividido em dois outros sinais para melhorar a performance. Quais são esses sinais e quais cartões os produzem?",
    options: [
      "Sinais de Aceleração e ângulo de jogo do navio; produzidos pelos Cartões diferenciador e integrador.",
      "Sinais de velocidade e pressão; produzidos pelo cartão oscilador.",
      "Sinais de tensão e corrente; produzidos pelo amplificador de potência.",
      "Sinais de banda e torção; produzidos pelo cartão de alarmes."
    ],
    answer: "Sinais de Aceleração e ângulo de jogo do navio; produzidos pelos Cartões diferenciador e integrador.",
    explanation: "Gabarito oficial fornecido."
  },
  {
    question: "Descreva as partes componentes dos estabilizadores comuns ao controle das aletas:",
    options: [
      "Giroscópio e Bombas",
      "Painel de controle e U.C.E.",
      "Acumulador e Válvula Moog",
      "Conversores e Transmissores"
    ],
    answer: "Painel de controle e U.C.E.",
    explanation: "Gabarito oficial fornecido."
  },
];
