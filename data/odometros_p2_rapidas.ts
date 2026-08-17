import type { Question } from "../types/question";

export const odometrosP2RapidasQuestions: Question[] = [
  {
    "question": "1–Descreva as precauções de segurança que devemos tomar no Odômetro AGI-LOG, durante a troca de vários módulos da S.D.T.U.",
    "options": [
      "Isole as alimentações da SDTU antes de qualquer procedimento. Ao trocar os módulos, tome cuidado com a alavanca de travamento para evitar danos, sendo recomendada a sua completa retirada da SDTU, soltando ambas as colunas de montagem igualmente.",
      "Desligar apenas os fusíveis secundários da repetidora de passadiço e manter os módulos energizados ao puxá-los.",
      "Substituir todos os módulos simultaneamente sem desconectar o cabo da bobina do sensor do casco para evitar surtos.",
      "Lavar os contatos do backplane com água destilada e aplicar graxa condutiva nos terminais antes da inserção."
    ],
    "answer": "Isole as alimentações da SDTU antes de qualquer procedimento. Ao trocar os módulos, tome cuidado com a alavanca de travamento para evitar danos, sendo recomendada a sua completa retirada da SDTU, soltando ambas as colunas de montagem igualmente.",
    "explanation": "O isolamento da alimentação e a retirada cuidadosa da alavanca de travamento soltando as colunas de montagem evitam acidentes elétricos e danos mecânicos nas guias e conectores da SDTU."
  },
  {
    "question": "2–Descreva os quatro (4) tipos de sensores montados no casco do navio, que podem ser usados com o sistema do Odômetro AGI-LOG e onde é empregado cada um deles.",
    "options": [
      "Haste retrátil: Quando são requeridas precisão externa e capacidade de recolhimento para manutenção. Sensor fixo estilo OTAN: Quando é requerida precisão externa. Sensor de perfil de barbatana: Projetado especialmente para barcos de patrulha (lanchas). Sensor Revés: Sem proteção para fora do casco, fornecido para operação em águas rasas.",
      "Sensor Óptico Doppler- águas profundas; Haste Magnética Telescópica- submarinos nucleares; Eletrodo de Titânio Fixo- lanchas rápidas; Sensor Ultrassônico de Quilha- navios mercantes.",
      "Haste de Carbono Inclinável- porta-aviões; Sensor Piezocerâmico Duplo- corvetas; Flange OTAN de Alumínio- rebocadores; Haste com Rotor de Hélices- quebra-gelos.",
      "Sensor Indutivo Hidrodinâmico- fragatas; Haste Flutuante- navios tanque; Sensor Eletrostático de Proa- navios de pesquisa; Haste Dupla de Cobre- veículos anfíbios."
    ],
    "answer": "Haste retrátil: Quando são requeridas precisão externa e capacidade de recolhimento para manutenção. Sensor fixo estilo OTAN: Quando é requerida precisão externa. Sensor de perfil de barbatana: Projetado especialmente para barcos de patrulha (lanchas). Sensor Revés: Sem proteção para fora do casco, fornecido para operação em águas rasas.",
    "explanation": "Cada sensor atende a um perfil operacional específico de embarcação: haste retrátil (manutenção n'água), haste fixa OTAN (robustez e precisão externa), barbatana (lanchas rápidas) e revés (águas rasas sem projeção)."
  },
  {
    "question": "3–Descreva o princípio de funcionamento do sensor (Haste) no Odômetro AGI-LOG.",
    "options": [
      "Uma bobina interna gera um campo magnético alternado. Conforme a água (condutor) flui e corta as linhas de força magnética, é induzida entre os dois botões eletrodos uma Força Eletromotriz (FEM) diretamente proporcional à velocidade do navio, na ordem de microvolts por nó (μV/nó).",
      "A haste possui um pequeno rotor hidráulico interno com pás de titânio cuja rotação gera pulsos ópticos infravermelhos proporcionais ao fluxo.",
      "O sensor emite feixes sônicos de alta frequência para o fundo marinho e calcula a velocidade pelo deslocamento de frequência Doppler.",
      "Um par de termistores mede a variação da temperatura da água causada pelo atrito cinético no casco convertendo em nós."
    ],
    "answer": "Uma bobina interna gera um campo magnético alternado. Conforme a água (condutor) flui e corta as linhas de força magnética, é induzida entre os dois botões eletrodos uma Força Eletromotriz (FEM) diretamente proporcional à velocidade do navio, na ordem de microvolts por nó (μV/nó).",
    "explanation": "Baseado no princípio da indução eletromagnética de Faraday, o corte das linhas do campo magnético alternado pelo fluxo de água do mar induz uma microtensão diferencial diretamente proporcional à velocidade de deslocamento."
  },
  {
    "question": "4–No Odômetro AGI-LOG, os controles consistem de cinco teclas de ação momentânea e um regulador de intensidade luminosa do display (DIMMER). Assim, fale quais os modos que operam a tecla MODE.",
    "options": [
      "Altera o modo de operação da SDTU entre o modo normal (utilizando o sinal real da haste) e o modo simulado (utilizando velocidades geradas internamente para teste).",
      "Desliga a alimentação dos circuitos de potência do Módulo 08 para economizar bateria em fundeio longo.",
      "Comuta a indicação dos displays frontais entre unidades métricas (km/h) e unidades imperiais marítimas (nós e milhas).",
      "Executa o teste de curto-circuito dos eletrodos no mar aplicando 115 Volts contínuos para limpar cracas."
    ],
    "answer": "Altera o modo de operação da SDTU entre o modo normal (utilizando o sinal real da haste) e o modo simulado (utilizando velocidades geradas internamente para teste).",
    "explanation": "A tecla MODE comuta a SDTU entre o modo normal de navegação (medição real captada pela haste no mar) e o modo simulado (que gera internamente sinais para teste de todo o processamento)."
  },
  {
    "question": "5–No Odômetro AGI-LOG, os controles consistem de cinco teclas de ação momentânea e um regulador de intensidade luminosa do display (DIMMER). Assim, fale quais as seleções que operam a tecla PROBE (Sensor).",
    "options": [
      "Permite selecionar entre a Haste 1 e a Haste 2, indicado pelos LEDs vermelhos P1 e P2 (quando só uma haste está instalada, P1 e P2 podem indicar a mesma haste).",
      "Ativa e desativa a alimentação de +21 Volts dedicada ao aquecimento do cabeçote da caixa de junção.",
      "Seleciona o ganho de amplificação diferencial do Módulo 04 entre alto ganho (águas claras) e baixo ganho (águas turvas).",
      "Alterna a leitura serial RS-422 entre o canal NMEA de velocidade na água e velocidade sobre o fundo."
    ],
    "answer": "Permite selecionar entre a Haste 1 e a Haste 2, indicado pelos LEDs vermelhos P1 e P2 (quando só uma haste está instalada, P1 e P2 podem indicar a mesma haste).",
    "explanation": "A tecla PROBE escolhe qual sensor (P1 ou P2) está ativamente enviando sinais para a SDTU, com sinalização luminosa dedicada nos LEDs frontais."
  },
  {
    "question": "6–No Odômetro AGI-LOG, os controles consistem de cinco teclas de ação momentânea e um regulador de intensidade luminosa do display (DIMMER). Assim, fale quais as seleções que operam a tecla CURVE.",
    "options": [
      "Permite selecionar os dados de calibração da Curva 1 ou da Curva 2 para a haste ativa, sendo indicado pelos LEDs vermelhos C1 ou C2.",
      "Muda o formato da curva de resposta do alarme de velocidade de logarítmica para exponencial nos circuitos de relé.",
      "Ajusta a inclinação física da haste retrátil em 5 ou 10 graus em relação ao plano axial da quilha.",
      "Zera o contador de milhas acumuladas da memória não volátil RAM e inicia um novo registro de viagem."
    ],
    "answer": "Permite selecionar os dados de calibração da Curva 1 ou da Curva 2 para a haste ativa, sendo indicado pelos LEDs vermelhos C1 ou C2.",
    "explanation": "A tecla CURVE alterna entre duas tabelas de calibração gravadas em memória (Curva 1 ou Curva 2) para adaptar o processamento a diferentes condições de calado ou hidrodinâmica do navio."
  },
  {
    "question": "7–No Odômetro AGI-LOG, os controles consistem de cinco teclas de ação momentânea e um regulador de intensidade luminosa do display (DIMMER). Assim, fale sobre o Dimmer Display.",
    "options": [
      "É o controle de luminosidade acessado ao baixar o painel de vidro; sua função é controlar o brilho dos displays de NÓS e de MILHAS NAVEGADAS, bem como das teclas iluminadas.",
      "Insira o cartão magnético do oficial no slot lateral e digite a senha no teclado numérico.",
      "Gire a chave mecânica de segurança localizada no Módulo 08 no sentido horário até soltar a trava.",
      "Desconecte o cabo de alimentação de 115V no painel traseiro e puxe a gaveta do chassi para fora."
    ],
    "answer": "É o controle de luminosidade acessado ao baixar o painel de vidro; sua função é controlar o brilho dos displays de NÓS e de MILHAS NAVEGADAS, bem como das teclas iluminadas.",
    "explanation": "Acessado ao soltar o visor e baixar o painel de vidro, o controle DIMMER ajusta com precisão a intensidade da iluminação dos mostradores e teclas para operação noturna ou diurna no passadiço."
  },
  {
    "question": "8–Descreva sobre o princípio de funcionamento da S.D.T.U. no Odômetro AGI-LOG.",
    "options": [
      "O Cartão Analógico (Módulo 4) recebe e amplifica o sinal da haste, processando-o por multiplicação para eliminar sinais indesejados de quadratura e gerando uma onda quadrada digital (HI/LO). O Cartão Microprocessador (Módulo 2) processa essa onda e a compara com os dados de calibração gravados em memória não volátil, calculando a velocidade verdadeira e a distância percorrida.",
      "é uma central hidrostática que converte a pressão da água captada no tubo de Pitot em sinais pneumáticos para o repetidor do leme.",
      "é um transmissor de rádio responsável por enviar as coordenadas GPS da embarcação para o controle de tráfego portuário.",
      "é um retificador trifásico de alta potência que alimenta o motor elétrico de içamento e recolhimento mecânico da haste."
    ],
    "answer": "O Cartão Analógico (Módulo 4) recebe e amplifica o sinal da haste, processando-o por multiplicação para eliminar sinais indesejados de quadratura e gerando uma onda quadrada digital (HI/LO). O Cartão Microprocessador (Módulo 2) processa essa onda e a compara com os dados de calibração gravados em memória não volátil, calculando a velocidade verdadeira e a distância percorrida.",
    "explanation": "O processamento da SDTU ocorre em duas etapas essenciais: condicionamento/demodulação analógica no Módulo 04 (com rejeição de quadratura) seguido de cálculo numérico e calibração digital na CPU (Módulo 02)."
  },
  {
    "question": "9–Descreva sobre a construção da S.D.T.U. no Odômetro AGI-LOG.",
    "options": [
      "É alojada em uma caixa de alumínio robusta e à prova d'água sob conceito modular, contendo 7 módulos eletrônicos padrões de fácil substituição. Possui um Tempo Médio para Reparo (MTTR) de aproximadamente 30 minutos quando auxiliada pelo BITE.",
      "A SDTU é construída em um bloco único de resina epóxi selado a vácuo, exigindo que a unidade inteira seja substituída no estaleiro em caso de falha.",
      "A estrutura da SDTU é feita de chapas de aço inoxidável soldadas sem conectores internos com todos os chips montados no vidro.",
      "O chassi é composto por um único cartão-mãe circular fixado ao teto da praça de máquinas com MTTR superior a 24 horas por soldagem."
    ],
    "answer": "É alojada em uma caixa de alumínio robusta e à prova d'água sob conceito modular, contendo 7 módulos eletrônicos padrões de fácil substituição. Possui um Tempo Médio para Reparo (MTTR) de aproximadamente 30 minutos quando auxiliada pelo BITE.",
    "explanation": "A robustez militar em caixa hermética de alumínio combinada com o chassi modular e o autodiagnóstico BITE confere à SDTU excelente manutenibilidade a bordo, mantendo o MTTR em cerca de 30 minutos."
  },
  {
    "question": "10–Descreva sobre a precisão na especificação quanto ao que se refere ao instrumento na unidade da S.D.T.U. no sistema do Odômetro AGI-LOG.",
    "options": [
      "O instrumento possui precisão de 0.1% da escala completa e resolução de 0.01 nó.",
      "As saídas analógicas de sincro possuem erro fixo de +/- 2,5 nós independente da velocidade real.",
      "A saída serial RS-422 apresenta desvio padrão de 5% da escala total em temperaturas acima de 45°C.",
      "Os relés pulsados de distância possuem imprecisão de 1 milha náutica a cada 10 milhas percorridas."
    ],
    "answer": "O instrumento possui precisão de 0.1% da escala completa e resolução de 0.01 nó.",
    "explanation": "A precisão intrínseca dos circuitos eletrônicos do instrumento na SDTU é de 0,1% do fundo de escala, permitindo exibir variações de velocidade com resolução de 0,01 nó."
  },
  {
    "question": "11–Descreva os procedimentos para a partida da operação do sistema do Odômetro AGI-LOG.",
    "options": [
      "Ligue a alimentação externa de 115V (ou 230V) no Painel de Distribuição do navio. Ligue a chave interna Liga/Desliga (SW-1) na Fonte de Alimentação (Módulo 8). Selecione na tecla MODE o modo de funcionamento desejado (normal ou simulado).",
      "Remova o fusível F3 do Módulo 08, injete 500 mA contínuos nos terminais C e D e pressione SIM UP até o display zerar completamente.",
      "Gire a alavanca do flange no casco para a posição de travamento, conecte o osciloscópio no Módulo 04 e ligue a chave por 5 segundos.",
      "Desparafuse os conectores da haste retrátil, ligue o disjuntor de 230V na casa de leme e digite o código de calibração no teclado numérico."
    ],
    "answer": "Ligue a alimentação externa de 115V (ou 230V) no Painel de Distribuição do navio. Ligue a chave interna Liga/Desliga (SW-1) na Fonte de Alimentação (Módulo 8). Selecione na tecla MODE o modo de funcionamento desejado (normal ou simulado).",
    "explanation": "Os passos corretos de partida envolvem a energização do disjuntor no painel do navio, a verificação da chave geral interna SW-1 no Módulo 08 e a seleção do modo operacional com a tecla MODE."
  },
  {
    "question": "12–Descreva sobre o circuito de teste integrado (BITE) na S.D.T.U. do Odômetro AGI-LOG.",
    "options": [
      "É um circuito de autodiagnóstico (Built-In Test Equipment) que opera com um algoritmo capaz de identificar aproximadamente 95% das falhas da unidade, atuando em dois níveis: restrito e completo.",
      "É uma rotina mecânica que vibra os conectores do chassi a 60 Hz para eliminar oxidação nas trilhas do backplane.",
      "Trata-se de um software externo executado exclusivamente por notebook militar via porta USB no estaleiro.",
      "É um circuito analógico de alta voltagem que queima intencionalmente transistores com fuga no Módulo 04 para abrir o fusível."
    ],
    "answer": "É um circuito de autodiagnóstico (Built-In Test Equipment) que opera com um algoritmo capaz de identificar aproximadamente 95% das falhas da unidade, atuando em dois níveis: restrito e completo.",
    "explanation": "O Built-In Test Equipment (BITE) garante autonomia de diagnóstico ao sistema, verificando continuamente ou em profundidade cerca de 95% das falhas nos cartões internos da SDTU."
  },
  {
    "question": "13–Descreva o que ocorre quando uma falha é detectada no Odômetro AGI-LOG.",
    "options": [
      "Sob o BITE restrito, ao detectar uma avaria, os displays de NÓS e de MILHAS NAVEGADAS piscam a 0,5 Hz, mantendo ativas as funções não afetadas. Ao abrir a tampa dianteira, o BITE completo é ativado e exibe códigos numéricos de falha nos displays para apontar o módulo avariado.",
      "O sistema desliga imediatamente a fonte de alimentação Módulo 08 para evitar incêndio e soa sirene contínua no passadiço.",
      "A memória EPROM é apagada por segurança e o display exibe erro fatal, impedindo qualquer leitura pelo resto da viagem.",
      "A bobina do sensor é desconectada do Módulo 08 e o odômetro assume velocidade fixa de 15 nós por estimativa de rotação."
    ],
    "answer": "Sob o BITE restrito, ao detectar uma avaria, os displays de NÓS e de MILHAS NAVEGADAS piscam a 0,5 Hz, mantendo ativas as funções não afetadas. Ao abrir a tampa dianteira, o BITE completo é ativado e exibe códigos numéricos de falha nos displays para apontar o módulo avariado.",
    "explanation": "A resposta do sistema à falha é inteligente: alerta o operador com displays piscando a 0,5 Hz no modo restrito (com a tampa fechada) e, ao abrir a tampa, ativa o BITE completo mostrando códigos precisos para a troca modular."
  },
  {
    "question": "14–Descreva sobre a calibração da S.D.T.U. no Odômetro AGI-LOG.",
    "options": [
      "Durante as provas de mar (\"corrida à milha\"), o técnico acessa o Terminal de Calibração (Módulo 12) (ativado ao remover a tampa dianteira) e insere pelo teclado numérico os dados comparativos de Velocidade Média Verdadeira (VMV) e Velocidade Média do Odômetro (VMH), que ficam gravados na memória não volátil do processador.",
      "A calibração é feita girando manualmente um potenciômetro de fio no Módulo 04 com chave de fenda cerâmica no porto.",
      "O sistema é auto-calibrado via satélite GPS ao ligar o Módulo 01, dispensando qualquer microchave ou procedimento frontal.",
      "Para calibrar a SDTU, deve-se retirar a memória EPROM do Módulo 02 e regravá-la em gravador UV na oficina de terra."
    ],
    "answer": "Durante as provas de mar (\"corrida à milha\"), o técnico acessa o Terminal de Calibração (Módulo 12) (ativado ao remover a tampa dianteira) e insere pelo teclado numérico os dados comparativos de Velocidade Média Verdadeira (VMV) e Velocidade Média do Odômetro (VMH), que ficam gravados na memória não volátil do processador.",
    "explanation": "O ajuste de calibração é efetuado com precisão digital durante a corrida à milha no mar, utilizando o terminal interno M-12 para correlacionar a velocidade média do odômetro (VMH) com a velocidade média verdadeira (VMV)."
  },
  {
    "question": "15–Cite os tipos de manutenções empregados no Odômetro AGI-LOG.",
    "options": [
      "Manutenção por diagnóstico, manutenção corretiva e manutenção preventiva.",
      "Manutenção preditiva térmica, manutenção por termografia e manutenção de estaleiro pesado.",
      "Manutenção remota via rádio, manutenção por usinagem mecânica e manutenção hidráulica.",
      "Manutenção corretiva de componente, manutenção destrutiva de teste e calibração barométrica."
    ],
    "answer": "Manutenção por diagnóstico, manutenção corretiva e manutenção preventiva.",
    "explanation": "As três vertentes de suporte técnico do AGI-LOG são: Diagnóstico (via circuitos BITE), Corretiva (substituição rápida de módulos) e Preventiva (cuidados e verificações de rotina)."
  },
  {
    "question": "16–Descreva sobre a manutenção por diagnóstico do Odômetro AGI-LOG.",
    "options": [
      "Baseia-se no uso do circuito BITE para localizar ~95% das avarias através de dois níveis operacionais: o BITE restrito (monitoramento contínuo em operação normal) e o BITE completo (diagnóstico profundo).",
      "É realizada exclusivamente conectando um multímetro de bancada aos eletrodos da haste a cada 6 meses operando em Nível AC e DC.",
      "Depende do envio dos cartões para o estaleiro para varredura por raios-X industrial em Nível Óptico e Nível Magnético.",
      "Consiste em inspecionar visualmente os LEDs frontais sem capacidade de autodiagnóstico interno pela CPU do Módulo 02."
    ],
    "answer": "Baseia-se no uso do circuito BITE para localizar ~95% das avarias através de dois níveis operacionais: o BITE restrito (monitoramento contínuo em operação normal) e o BITE completo (diagnóstico profundo).",
    "explanation": "A manutenção por diagnóstico apoia-se no autoteste BITE que cobre cerca de 95% de detecção de falhas dividindo-se entre operação restrita contínua e verificação completa aprofundada."
  },
  {
    "question": "17–Descreva sobre a manutenção por diagnóstico em nível baixo do Odômetro AGI-LOG.",
    "options": [
      "É o BITE restrito, que atua continuamente com a tampa dianteira fechada sem interferir na operação normal. Se detectar falha, faz os displays piscarem a 0,5 Hz.",
      "Desliga os circuitos analógicos do Módulo 04 e força o display a exibir continuamente 'HALT 99' até a parada do navio.",
      "Ocorre apenas quando o navio está atracado sem energia CA, usando bateria de 9V para testar a resistência dos cabos do sensor.",
      "Bloqueia a transmissão de dados NMEA para os radares e aciona um relé de curto-circuito na praça de máquinas."
    ],
    "answer": "É o BITE restrito, que atua continuamente com a tampa dianteira fechada sem interferir na operação normal. Se detectar falha, faz os displays piscarem a 0,5 Hz.",
    "explanation": "O BITE restrito (nível baixo) monitora o odômetro durante toda a viagem com a tampa fechada, mantendo os dados válidos operando e sinalizando anomalias com os displays piscando a 0,5 Hz."
  },
  {
    "question": "18–Descreva sobre a manutenção por diagnóstico em nível alto do Odômetro AGI-LOG.",
    "options": [
      "É o BITE completo, acionado automaticamente quando a tampa dianteira é removida. Executa um teste em toda a SDTU e exibe códigos de erro nos displays apontando a causa mais provável e até duas fontes alternativas de avaria.",
      "Consiste em aplicar sobretensão de 230V na entrada da bobina para medir corrente de fuga com alicate amperímetro no passadiço.",
      "É a rotina que exige a retirada física de todos os 12 cartões do chassi para limpeza com álcool isopropílico e borracha.",
      "Exige o mergulho de mergulhadores sob o casco para inspecionar visualmente a alavanca do flange e apertar o cabeçote."
    ],
    "answer": "É o BITE completo, acionado automaticamente quando a tampa dianteira é removida. Executa um teste em toda a SDTU e exibe códigos de erro nos displays apontando a causa mais provável e até duas fontes alternativas de avaria.",
    "explanation": "Abertura ou basculamento do painel frontal aciona o BITE completo (nível alto), realizando varredura integral da eletrônica para exibir códigos que apontam o módulo primário defeituoso e até duas suspeitas alternativas."
  },
  {
    "question": "19–Descreva sobre a manutenção corretiva do Odômetro AGI-LOG.",
    "options": [
      "Baseia-se na filosofia de reparo por substituição direta dos seguintes componentes: fusíveis, módulos de 1 a 12, painel de controle e cartão de relé da haste.",
      "O reparo corretivo a bordo exige a troca de componentes discretos com ferro de solda e lupa diretamente nas placas de circuito.",
      "Baseia-se na substituição integral da caixa da SDTU e da fiação do navio sempre que houver variação superior a 0,5 nó.",
      "A manutenção corretiva resume-se à troca periódica do fluido hidráulico da caixa de junção e da guarnição de neoprene."
    ],
    "answer": "Baseia-se na filosofia de reparo por substituição direta dos seguintes componentes: fusíveis, módulos de 1 a 12, painel de controle e cartão de relé da haste.",
    "explanation": "A doutrina corretiva de 1º escalão preconiza a troca rápida de cartões (Módulos de 1 a 12), fusíveis, painel ou cartão de relé por sobressalentes testados, garantindo o imediato reestabelecimento operacional."
  },
  {
    "question": "20–Descreva sobre os procedimentos de remoção e substituição na manutenção corretiva na S.D.T.U. do Odômetro AGI-LOG.",
    "options": [
      "Isole as alimentações antes de mexer na unidade. Tome cuidado com descargas estáticas nos dispositivos CMOS, evite danificar os conectores na ponta dos cartões ao retirá-los e lembre-se de que o Módulo 2 (Microprocessador) só pode ser substituído por outro gravado com a mesma programação/opções do navio.",
      "Pode-se remover ou inserir os módulos de 01 a 12 com o sistema energizado em 115V desde que o operador use luvas de borracha grossa.",
      "Antes de remover um módulo, deve-se curto-circuitar os terminais 1 e 2 do sensor com uma chave para descarregar a bobina.",
      "Os cartões devem ser lavados em água salgada para remover poeira marinha antes de serem recolocados nos slots do backplane."
    ],
    "answer": "Isole as alimentações antes de mexer na unidade. Tome cuidado com descargas estáticas nos dispositivos CMOS, evite danificar os conectores na ponta dos cartões ao retirá-los e lembre-se de que o Módulo 2 (Microprocessador) só pode ser substituído por outro gravado com a mesma programação/opções do navio.",
    "explanation": "Os cuidados envolvem isolar a alimentação elétricamente, proteger componentes CMOS contra descargas estáticas (ESD), preservar os conectores e assegurar que o Módulo 2 de reposição possua o firmware e opções corretas daquela embarcação."
  },
  {
    "question": "21–Descreva sobre a precisão na especificação quanto ao que se refere à exibição na unidade da S.D.T.U. no sistema do Odômetro AGI-LOG.",
    "options": [
      "Haste Fixa: 0 a 10 nós = ± 0.1 nó; acima de 10 nós = 1% (condicionado a calibração/posicionamento corretos). Haste Revés: 0 a 10 nós = ± 0.2 nó (condicionado a calibração/posicionamento corretos). (Nota: O tempo para estabilização da leitura ao ligar é de 30 segundos).",
      "Velocidade em qualquer faixa = +/- 0,5 nó fixo sem necessidade de calibração em corrida de milhas.",
      "De 0 a 20 nós = +/- 1% da leitura; acima de 20 nós = erro fixo de +/- 0,05 nó em mar calmo.",
      "A precisão da velocidade exibida é sempre de 0,01 nó para hastes retráteis e 0,5 nó para hastes fixas OTAN."
    ],
    "answer": "Haste Fixa: 0 a 10 nós = ± 0.1 nó; acima de 10 nós = 1% (condicionado a calibração/posicionamento corretos). Haste Revés: 0 a 10 nós = ± 0.2 nó (condicionado a calibração/posicionamento corretos). (Nota: O tempo para estabilização da leitura ao ligar é de 30 segundos).",
    "explanation": "A precisão da exibição varia conforme o tipo de sensor: na Haste Fixa mantém-se em ± 0,1 nó (até 10 nós) ou 1% (acima disso), enquanto o Sensor Revés possui tolerância de ± 0,2 nó, com tempo de estabilização térmica e eletrônica de 30 segundos ao ligar."
  },
  {
    "question": "22–Descreva sobre a precisão na especificação quanto ao que se refere à distância da unidade da S.D.T.U. no sistema do Odômetro AGI-LOG.",
    "options": [
      "A distância é função do tempo e da velocidade; sua precisão de leitura é de 0.07% somada à precisão/erro da velocidade.",
      "A precisão do totalizador de milhas é fixa em +/- 1 milha náutica a cada 1.000 milhas navegadas independentemente da velocidade.",
      "O erro de distância é de exatamente 0,5% do tempo de navegação subtraído da temperatura da água captada nos eletrodos.",
      "A leitura de distância possui erro zero por ser integrada digitalmente em cristal de quartzo de 100 MHz sem relação com o mar."
    ],
    "answer": "A distância é função do tempo e da velocidade; sua precisão de leitura é de 0.07% somada à precisão/erro da velocidade.",
    "explanation": "Sendo a distância o resultado da integração da velocidade no tempo, sua precisão final incorpora o erro do integrador numérico da CPU (0,07%) somado diretamente ao erro da medição de velocidade no instante."
  },
  {
    "question": "23–Qual é o propósito do Odômetro AGI-LOG?",
    "options": [
      "Medir a velocidade do navio em relação à água e calcular a distância navegada, retransmitindo esses dados para repetidoras, computadores e sistemas de armas. É instalado a bordo de submarinos e fragatas da classe Niterói.",
      "Serve para medir a profundidade exata do leito marinho e registrar a salinidade da água em corvetas e rebocadores.",
      "Tem o propósito de controlar a rotação do motor principal e a inclinação das pás da hélice de passo controlável.",
      "É um sistema de navegação por radar anticolisão instalado no mastro principal de navios varredores de minas."
    ],
    "answer": "Medir a velocidade do navio em relação à água e calcular a distância navegada, retransmitindo esses dados para repetidoras, computadores e sistemas de armas. É instalado a bordo de submarinos e fragatas da classe Niterói.",
    "explanation": "Além do cálculo preciso de velocidade (STW) e distância, o AGI-LOG retransmite dados vitais de navegação para computadores e sistemas de armas de navios de combate navais, tais como as Fragatas da Classe Niterói e Submarinos."
  },
  {
    "question": "24–Quantas partes possui o Odômetro AGI-LOG?",
    "options": [
      "4 partes principais: Hastes/Sensores (normalmente 2), Unidade Transmissora (SDTU), Unidade de Retransmissão (RTU) e Unidades Indicadoras (VCS).",
      "2 partes principais: Apenas a caixa do processador de passadiço e a bobina magnética de quilha.",
      "3 partes principais: Transmissor síncro da casa de leme, Caixa de junção de porão e Bateria de emergência de 24V.",
      "5 partes principais: Antena GPS externa, Computador principal, Módulo de potência, Haste sônica e Girocompasso."
    ],
    "answer": "4 partes principais: Hastes/Sensores (normalmente 2), Unidade Transmissora (SDTU), Unidade de Retransmissão (RTU) e Unidades Indicadoras (VCS).",
    "explanation": "O sistema divide-se em 4 subconjuntos fundamentais: Sensores de Casco (Hastes), a central eletrônica SDTU (Unidade Transmissora), a unidade distribuidora RTU (Retransmissora) e os repetidores visuais VCS (Unidades Indicadoras)."
  },
  {
    "question": "25–Qual é a alimentação do Odômetro AGI-LOG?",
    "options": [
      "115V 50/60Hz monofásico ou 230V 50/60Hz monofásico.",
      "24V DC contínuos provenientes diretamente do banco de baterias de emergência do porão.",
      "440V/60Hz trifásico alimentado diretamente pelo gerador principal do navio sem transformador.",
      "12V DC regulados via conversor solar do passadiço com retaguarda de gerador eólico."
    ],
    "answer": "115V 50/60Hz monofásico ou 230V 50/60Hz monofásico.",
    "explanation": "A Fonte de Alimentação da SDTU (Módulo 08) é projetada para as redes de corrente alternada navais padrão, sendo comutável/adaptável para 115 VAC ou 230 VAC monofásico nas frequências de 50 Hz ou 60 Hz."
  },
  {
    "question": "26–Qual é a potência consumida no Odômetro AGI-LOG?",
    "options": [
      "Menor que 170 VA.",
      "Potência de 1.500 Watts devido ao aquecimento contínuo da bobina magnética de alta corrente no mar.",
      "Aproximadamente 15 Watts funcionando como um dispositivo de baixíssimo consumo de bateria.",
      "Exatamente 500 VA em 115 Volts e 1.000 VA quando configurado para operar em 230 Volts."
    ],
    "answer": "Menor que 170 VA.",
    "explanation": "O consumo de todo o sistema da SDTU em operação plena (incluindo a excitação magnética de corrente alternada da bobina no fundo do mar) é eficiente e mantido abaixo de 170 VA."
  },
  {
    "question": "27–Que precisão possui a haste fixa na velocidade de 0 a 10 nós?",
    "options": [
      "± 0.1 nó.",
      "+/- 1% da velocidade exibida pelo display principal de nós.",
      "+/- 0,5 nó em mar calmo e +/- 1,5 nó em mar agitado com ondulação.",
      "+/- 0,01 nó, sendo considerada precisão de laboratório metrológico."
    ],
    "answer": "± 0.1 nó.",
    "explanation": "Na faixa baixa (de 0 até 10 nós), a tolerância do erro na haste fixa é de apenas décimos de nó (± 0,1 nó), garantindo alta precisão em manobras."
  },
  {
    "question": "28–Quantas partes componentes possuem os sensores (haste) tipo OTAN do Odômetro AGI-LOG?",
    "options": [
      "Possuem 1 bobina (para gerar o campo magnético), 2 botões eletrodos (para captar a FEM induzida) e 4 terminais/fios de ligação.",
      "Possui 1 único bloco cerâmico sem bobina magnética interna com apenas 2 fios coaxeis de sinal digital.",
      "Possui 5 válvulas eletromecânicas com 10 pinos dourados rosqueados diretamente ao chassi do Módulo 04.",
      "Possui 4 rotores hidráulicos independentes com conector multipino militar de 24 contatos para transmissão óptica."
    ],
    "answer": "Possuem 1 bobina (para gerar o campo magnético), 2 botões eletrodos (para captar a FEM induzida) e 4 terminais/fios de ligação.",
    "explanation": "O sensor OTAN é estruturado de forma coesa com a bobina de excitação no centro, os 2 botões eletrodos nas laterais para coleta da tensão na água e um cabo multicondutor com 4 terminais principais de ligação."
  },
  {
    "question": "29–Em quais terminais da haste do Odômetro AGI está a alimentação da bobina?",
    "options": [
      "Nos terminais A e B.",
      "Nos terminais C e D por onde flui o micro-sinal diferencial induzido da água em milivolts.",
      "No terminal S (ou E) destinado à malha de blindagem do cabo e ao terra de referência.",
      "Nos terminais de saída síncro 400 Hz diretamente para o repetidor analógico do leme."
    ],
    "answer": "Nos terminais A e B.",
    "explanation": "Os terminais A e B (que correspondem a 1 e 2 na numeração numérica) recebem a tensão de corrente alternada gerada na fonte para excitar a bobina magnética."
  },
  {
    "question": "30–Em qual terminal da haste está o terra/blindagem?",
    "options": [
      "No terminal S (ou E / Screen / Blindagem), enquanto os sinais dos eletrodos saem nos terminais C e D.",
      "Nos terminais A e B por onde chega a tensão de excitação de 57 Volts da fonte Módulo 08.",
      "Exclusivamente nos terminais 9 e 10 da caixa de junção sem interligação com o cabo da haste.",
      "Nos terminais de saída de relé no Módulo 07 para alarme sonoro de falha do sistema."
    ],
    "answer": "No terminal S (ou E / Screen / Blindagem), enquanto os sinais dos eletrodos saem nos terminais C e D.",
    "explanation": "O terminal S (Screen / Blindagem, também codificado como E ou 5/6) aterra a blindagem do cabo contra interferências, enquanto os sinais milivolt dos eletrodos fluem limpos pelos terminais C e D (3 e 4)."
  },
  {
    "question": "31–Quais os tipos de sensores (haste) que podem ser usados com o Odômetro AGI-LOG?",
    "options": [
      "Haste retrátil, Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés.",
      "Haste telescópica hidráulica, sensor de Doppler laser, eletrodo de platina e válvula de esfera.",
      "Sensor de tubo de Pitot de cobre, haste rotativa com hélices, sensor acústico de quilha e boia rebocada.",
      "Haste de fibra de carbono, sensor magnético de proa, haste articulada de popa e transdutor piezoelétrico."
    ],
    "answer": "Haste retrátil, Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés.",
    "explanation": "O odômetro suporta os 4 perfis de sensores padronizados do fabricante para diferentes demandas hidrodinâmicas e operacionais de embarcações navais."
  },
  {
    "question": "32–Onde é empregada a Haste Retrátil do Odômetro AGI-LOG?",
    "options": [
      "Onde se requer precisão externa e capacidade de recolhimento para manutenção com o navio na água.",
      "Empregada exclusivamente no mastro principal da embarcação para medir a velocidade e direção real do vento aparente.",
      "Utilizada apenas em submarinos de mergulho profundo para suportar pressões hidrostáticas superiores a 50 bar sem deformação.",
      "Montada no interior da caixa de mar do gerador principal para medir a vazão de água de resfriamento das camisas."
    ],
    "answer": "Onde se requer precisão externa e capacidade de recolhimento para manutenção com o navio na água.",
    "explanation": "A haste retrátil com válvula de esfera possibilita içar o sensor para inspeção, limpeza ou substituição com a embarcação n'água sem necessidade de docagem no estaleiro."
  },
  {
    "question": "33–Onde é empregada a Haste Fixa (estilo OTAN) do Odômetro AGI-LOG?",
    "options": [
      "Onde se requer precisão externa permanente (fixada no casco).",
      "Utilizada em pequenas embarcações de pesca artesanal ou veleiros civis por ser o modelo de menor custo.",
      "Montada em rebocadores portuários que operam exclusivamente em água doce sem necessidade de bobina de excitação.",
      "Empregada em embarcações anfíbias durante o trajeto em terra firme para medir a rotação das rodas motrizes."
    ],
    "answer": "Onde se requer precisão externa permanente (fixada no casco).",
    "explanation": "O modelo Fixo Estilo OTAN é aparafusado em flange permanente de casco, sendo ideal para navios militares que exigem precisão contínua e máxima resistência mecânica a choques."
  },
  {
    "question": "34–Onde é empregada a Haste com Perfil de Barbatana do Odômetro AGI-LOG?",
    "options": [
      "Projetada especificamente para lanchas e barcos de patrulha.",
      "Instalada no fundo de navios quebra-gelos polares por ter lâminas de corte capazes de despedaçar blocos espessos.",
      "Utilizada na popa de navios varredores de minas para gerar pulsos magnéticos de alta potência capazes de detonar minas.",
      "Empregada em submarinos nucleares para atuar simultaneamente como leme direcional e estabilizador lateral da quilha."
    ],
    "answer": "Projetada especificamente para lanchas e barcos de patrulha.",
    "explanation": "O perfil hidrodinâmico de barbatana diminui consideravelmente o arrasto e evita turbulência e cavitação em embarcações velozes como barcos de patrulha e lanchas de ataque."
  },
  {
    "question": "35–Onde é empregado o Sensor Revés do Odômetro AGI-LOG?",
    "options": [
      "Em navios que operam em águas rasas, pois não possui nenhuma proteção projetada para fora do casco.",
      "Exclusivamente no topo da cabine de comando para medir o retorno das ondas de rádio do radar em dias de neblina.",
      "No interior do tanque de combustível pesado para registrar a quantidade de óleo consumido pelos motores durante a viagem.",
      "Na saída da descarga do motor principal para monitorar o volume de gases e calcular a velocidade de cruzeiro econômica."
    ],
    "answer": "Em navios que operam em águas rasas, pois não possui nenhuma proteção projetada para fora do casco.",
    "explanation": "O Sensor Revés fica nivelado com a chaparia do casco (flush), sendo crucial em águas rasas ou com detritos/gelo onde hastes salientes seriam avariadas ao tocar no fundo."
  },
  {
    "question": "36–Qual é o propósito da S.D.T.U. do Odômetro AGI-LOG?",
    "options": [
      "Converter o pequeno sinal de FEM induzido no sensor em informações digitais e analógicas precisas de velocidade e distância, disponibilizando-as local e remotamente.",
      "Gerar a energia trifásica de 440 Volts que alimenta todo o sistema de iluminação de emergência dos passadiços e conveses.",
      "Funcionar como piloto automático hidráulico movimentando as bombas mecânicas do leme para manter o navio no rumo magnético.",
      "Armazenar no disco rígido as comunicações de voz da casa de leme e as marcações de radar para auditoria de acidentes."
    ],
    "answer": "Converter o pequeno sinal de FEM induzido no sensor em informações digitais e analógicas precisas de velocidade e distância, disponibilizando-as local e remotamente.",
    "explanation": "A SDTU (Signal Distribution Terminal Unit) processa a micro-tensão captada nos eletrodos e a transforma em sinais digitais de display e analógicos de retransmissão para todo o navio."
  },
  {
    "question": "37–A S.D.T.U. do Odômetro AGI-LOG é modular. Qual é o seu tempo médio para reparo (MTTR)?",
    "options": [
      "Aproximadamente 30 minutos.",
      "Superior a 48 horas devido à necessidade de cura de resina de blindagem térmica no estaleiro.",
      "Cerca de 10 segundos, pois o chassi conta com troca automática robótica de cartões redundantes.",
      "De 1 a 2 dias úteis de trabalho exigindo a recalibração de todas as agulhas magnéticas do passadiço."
    ],
    "answer": "Aproximadamente 30 minutos.",
    "explanation": "A combinação dos códigos de erro exatos do diagnóstico BITE com a facilidade de extração/inserção dos cartões modulares no chassi garante um MTTR de aproximadamente 30 minutos a bordo."
  },
  {
    "question": "38–Qual é a função do Módulo 01 (Cartão de Identificação / Interface) do Odômetro AGI-LOG?",
    "options": [
      "Faz a interface entre o Microprocessador (Módulo 2), o painel e os circuitos de entrada/saída, aciona os displays do Módulo 10 e gera o protocolo de mensagens digital serial padrão (RS-422).",
      "Responsável por gerar a tensão alternada de 57 Volts / 60 Hz em alta potência para alimentar a bobina magnética da haste.",
      "Cartão que aloja a chave mecânica principal ON/OFF do equipamento e a ponte retificadora de entrada da rede CA do navio.",
      "Módulo de relés de potência de estado sólido responsável pelo acionamento bifásico dos motores de passo das repetidoras."
    ],
    "answer": "Faz a interface entre o Microprocessador (Módulo 2), o painel e os circuitos de entrada/saída, aciona os displays do Módulo 10 e gera o protocolo de mensagens digital serial padrão (RS-422).",
    "explanation": "O Módulo 01 coordena a identificação e interface da central, comandando a comunicação com o painel, a multiplexação de display no Módulo 10 e a emissão do protocolo digital serial RS-422."
  },
  {
    "question": "39–Qual é a função do Módulo 02 (Cartão Microprocessador e memórias) do Odômetro AGI-LOG?",
    "options": [
      "É o \"coração da SDTU\". Executa todos os cálculos de velocidade e distância, gerencia a rotina de diagnósticos BITE, processa/armazena os dados de calibração e distribui as informações para os cartões de saída (Módulos 1, 5, 6 e 7).",
      "Atua exclusivamente como regulador de tensão analógico de -15 Volts para os pré-amplificadores operacionais do Módulo 04.",
      "Serve apenas como conversor óptico que transforma a leitura serial RS-422 em pulsos síncronos mecânicos de 400 Hz.",
      "É o cartão de fusíveis e proteção contra surtos de raio abrigando também os terminais de rosca para os cabos da haste."
    ],
    "answer": "É o \"coração da SDTU\". Executa todos os cálculos de velocidade e distância, gerencia a rotina de diagnósticos BITE, processa/armazena os dados de calibração e distribui as informações para os cartões de saída (Módulos 1, 5, 6 e 7).",
    "explanation": "Como cérebro digital e coração da unidade, o Módulo 02 roda o firmware de processamento, realiza as integrações matemáticas, executa o autoteste BITE e coordena todas as placas de saída e interface."
  },
  {
    "question": "40–Que função a Memória EPROM do Módulo 02 exerce?",
    "options": [
      "Armazena o programa operacional fixo (firmware) do sistema.",
      "Armazena temporariamente os dados de velocidade instantânea que são perdidos ao desligar a chave de 115V.",
      "Grava os áudios e alarmes sonoros do passadiço em formato MP3 para reprodução no alto-falante de alarme do Módulo 07.",
      "Serve apenas como memória buffer de vídeo para os displays de LED vermelho piscarem na cadência de 0,5 Hz durante falha."
    ],
    "answer": "Armazena o programa operacional fixo (firmware) do sistema.",
    "explanation": "A memória permanente EPROM contém de forma não volátil todo o Sistema Operacional, algoritmos e rotinas fixas de cálculo e diagnóstico que a CPU executa ao ser energizada."
  },
  {
    "question": "41–Que função a Memória RAM do Módulo 02 exerce?",
    "options": [
      "Armazena os dados e variáveis temporárias processados em tempo de execução.",
      "Contém as trilhas de cobre de alta corrente que distribuem 115 Volts da rede da embarcação para os demais cartões.",
      "É responsável por decodificar as sentenças de GPS externas que chegam via antena satelital e convertê-las em sinais síncro.",
      "Armazena a chave criptográfica de segurança que impede que tripulantes não autorizados abram a tampa frontal."
    ],
    "answer": "Armazena os dados e variáveis temporárias processados em tempo de execução.",
    "explanation": "A RAM é a memória de trabalho do microprocessador, registrando em tempo real as variáveis do cálculo de integração de distância e os dados temporários de calibração e operação."
  },
  {
    "question": "42–Qual é a função do Módulo 03 do Odômetro AGI-LOG?",
    "options": [
      "É um cartão opcional configurável para atender a exigências ou funções especiais solicitadas pelo cliente.",
      "Fonte de alimentação secundária de emergência acionada por baterias de lítio internas de 24 Volts.",
      "Módulo amplificador magnético principal responsável por gerar os 375 mV nos terminais da haste.",
      "Cartão de disjuntores e chaves faca que interrompe a rede de 230V em caso de alagamento do porão."
    ],
    "answer": "É um cartão opcional configurável para atender a exigências ou funções especiais solicitadas pelo cliente.",
    "explanation": "O slot do Módulo 03 é reservado como opcional/customizável, permitindo adicionar circuitos especializados, interfaces ou temporizações particulares conforme a especificação do navio cliente."
  },
  {
    "question": "43–Qual é a função do Módulo 04 (Cartão Analógico) do Odômetro AGI-LOG?",
    "options": [
      "Recebe, amplifica e demodula o sinal analógico da haste, multiplicando-o para eliminar sinais indesejados de quadratura e convertendo-o em uma onda quadrada digital (HI/LO) proporcional para o microprocessador.",
      "Converte a tensão contínua de bateria de 12 Volts da embarcação em corrente alternada bifásica de 400 Hz.",
      "Recebe sinais digitais seriais em formato NMEA do radar e os transforma em tensões analógicas contínuas de 0 a 10 Volts.",
      "Gera a tensão alternada nominal de 57V para excitação da bobina da haste através de transformador toroidal interno."
    ],
    "answer": "Recebe, amplifica e demodula o sinal analógico da haste, multiplicando-o para eliminar sinais indesejados de quadratura e convertendo-o em uma onda quadrada digital (HI/LO) proporcional para o microprocessador.",
    "explanation": "O Módulo 04 atua na aquisição e condicionamento analógico: amplifica os milivolts da água, efetua rejeição por quadratura de ruídos induzidos e gera a onda quadrada (A/D) para leitura no processador."
  },
  {
    "question": "44–Qual é a função dos Módulos 05 e 06 (Cartões de Saída Síncrona) do Odômetro AGI-LOG?",
    "options": [
      "São cartões opcionais idênticos que convertem os dados digitais de velocidade em saídas analógicas síncronas de 400 Hz, equivalentes a síncros 15CX4, para alimentar repetidoras e sistemas remotos.",
      "Obrigatoriamente instalados em todos os odômetros para atuar como fontes comutadas de alta frequência para a bobina.",
      "Cartões de memória de massa que efetuam o backup diário de todas as manobras e milhas navegadas nos últimos 10 anos.",
      "Conversores que transformam a tensão alternada da rede CA em tensão contínua de +5 Volts sem uso de transformador."
    ],
    "answer": "São cartões opcionais idênticos que convertem os dados digitais de velocidade em saídas analógicas síncronas de 400 Hz, equivalentes a síncros 15CX4, para alimentar repetidoras e sistemas remotos.",
    "explanation": "Os Módulos 05 e 06 convertem o valor digital (D/A) calculado pela CPU em sinais síncronos analógicos em 400 Hz equivalentes a transmissores 15CX4, essenciais para instrumentos eletromecânicos militares."
  },
  {
    "question": "45–Qual é a função do Módulo 07 (Cartão de Saída Auxiliar) do Odômetro AGI-LOG?",
    "options": [
      "Fornece duas saídas analógicas de tensão (potenciômetro simulado em Volts/Nó) e quatro contatos de relé livres de potencial configuráveis para: pulsos de distância (100, 200 ou 400 PPM), alarmes de alta/baixa velocidade e indicação de saída válida.",
      "Responsável por acender e apagar a iluminação de fundo do teclado numérico e ajustar o contraste do display de vidro.",
      "Recebe a alimentação da rede do navio em 230V e a distribui diretamente para as tomadas de serviço na mesa do passadiço.",
      "Módulo com microchave interna de teste que força a queima controlada dos fusíveis de proteção durante o autoteste BITE."
    ],
    "answer": "Fornece duas saídas analógicas de tensão (potenciômetro simulado em Volts/Nó) e quatro contatos de relé livres de potencial configuráveis para: pulsos de distância (100, 200 ou 400 PPM), alarmes de alta/baixa velocidade e indicação de saída válida.",
    "explanation": "O Cartão Auxiliar M-07 é a grande central de interfaces analógicas e de relés: entrega tensões proporcionais de Volts/Nó e pulsos cadenciados por milha (100, 200 ou 400 PPM) ao lado de relés para alarme de velocidade e status válido."
  },
  {
    "question": "46–Qual é a função do Módulo 08 (Fonte de Alimentação - PSU) do Odômetro AGI-LOG?",
    "options": [
      "Recebe a alimentação externa monofásica (115V ou 230V) e gera todas as tensões operacionais necessárias: +5V e -15V CC para a eletrônica interna, +21V CC para exigências especiais e 57V CA para a bobina do sensor.",
      "Alimentada exclusivamente com bateria automotiva de 12 Volts produzindo saída única de 440 Volts CA para a antena do radar.",
      "Recebe 440V trifásicos sem proteção e gera apenas tensão contínua não regulada de +30V DC para alimentar os displays.",
      "Alimentada por painéis solares em 24V DC gerando saídas síncronas de 400 Hz diretamente sem necessidade do processador."
    ],
    "answer": "Recebe a alimentação externa monofásica (115V ou 230V) e gera todas as tensões operacionais necessárias: +5V e -15V CC para a eletrônica interna, +21V CC para exigências especiais e 57V CA para a bobina do sensor.",
    "explanation": "A Fonte de Alimentação retifica e converte a energia CA da embarcação nas linhas contínuas reguladas do barramento (+5V, -15V, +21V) e na tensão alternada de excitação do campo magnético da haste (57 VAC)."
  },
  {
    "question": "47–Quais as saídas que o Módulo 08 (Fonte de Alimentação) produz para os diversos circuitos?",
    "options": [
      "57V CA (50/60 Hz) para a bobina da haste; +5V e -15V CC para os circuitos das unidades; e +21V CC para exigências especiais.",
      "12V CA para iluminação da sala de leme; -48V DC para o sistema telefônico de bordo; e 100V contínuos para o motor do leme.",
      "220V CA puros para as tomadas de serviço do navio e 3,3V contínuos para o processador satelital de GPS externo.",
      "1.000 Volts de corrente pulsada de alta frequência para limpeza eletrolítica automática dos eletrodos do sensor."
    ],
    "answer": "57V CA (50/60 Hz) para a bobina da haste; +5V e -15V CC para os circuitos das unidades; e +21V CC para exigências especiais.",
    "explanation": "A distribuição exata provida pela PSU consiste na linha de excitação da bobina (57 VAC em 50/60 Hz) combinada com as linhas de corrente contínua (+5 VDC para lógica, -15 VDC para analógico e +21 VDC para uso auxiliar)."
  },
  {
    "question": "48–Quais são as especificações e características do barramento de distribuição e suporte no backplane (Módulo 09 e Módulo 10) da S.D.T.U.?",
    "options": [
      "O Módulo 09 (Chassis) abriga a estrutura física e o Cartão do Relé da Haste, enquanto o Módulo 10 (Cartão de Display) contém os circuitos acionadores dos LEDs e interliga o Terminal de Calibração.",
      "O Módulo 09 aloja o transformador de isolação em 440V e o Módulo 10 possui as chaves contatoras do motor elétrico da haste.",
      "Ambos os módulos operam exclusivamente como memórias flash de reserva para armazenar as coordenadas de GPS em caso de falha.",
      "Trata-se de módulos hidráulicos contendo válvulas solenoides de corte de água salgada para evitar alagamento da caixa de junção."
    ],
    "answer": "O Módulo 09 (Chassis) abriga a estrutura física e o Cartão do Relé da Haste, enquanto o Módulo 10 (Cartão de Display) contém os circuitos acionadores dos LEDs e interliga o Terminal de Calibração.",
    "explanation": "No chassi da SDTU, o Módulo 09 dá o suporte físico/elétrico e comuta/isola as hastes pelo cartão de relés, enquanto o Módulo 10 aciona a multiplexação dos LEDs visuais e gerencia o terminal de calibração."
  },
  {
    "question": "49–Cite as funções dos Módulos 09 e 10 do Odômetro AGI-LOG:",
    "options": [
      "Módulo 09 (Chassis): Abriga a estrutura física, placa-mãe e o Cartão do Relé da Haste (que comuta a alimentação e sinais entre a Haste 1 e a Haste 2 e provê isolamento por transformador). Módulo 10 (Cartão de Display): Contém os circuitos acionadores dos LEDs dos displays de NÓS e de MILHAS NAVEGADAS e interliga o Terminal de Calibração ao microprocessador.",
      "M-09 é a bateria de lítio de reserva e o M-10 é a antena transceptora de rádio de emergência do porão.",
      "M-09 abriga o transformador de isolação de 440 Volts e o M-10 possui os relés eletromecânicos do alarme de abandono.",
      "M-09 e M-10 são cartões magnéticos externos que o oficial passa no leitor frontal para autorizar o ligamento do navio."
    ],
    "answer": "Módulo 09 (Chassis): Abriga a estrutura física, placa-mãe e o Cartão do Relé da Haste (que comuta a alimentação e sinais entre a Haste 1 e a Haste 2 e provê isolamento por transformador). Módulo 10 (Cartão de Display): Contém os circuitos acionadores dos LEDs dos displays de NÓS e de MILHAS NAVEGADAS e interliga o Terminal de Calibração ao microprocessador.",
    "explanation": "O Módulo 09 é a base de montagem e comutação segura com isolamento de transformador entre Haste 1 e Haste 2, e o Módulo 10 é o responsável por iluminar os mostradores digitais de velocidade/distância e interligar o terminal M-12."
  },
  {
    "question": "50–Cite as funções dos Módulos 11 e 12 do Odômetro AGI-LOG:",
    "options": [
      "Módulo 11 (Painel de Operação): Contém os displays visuais, LEDs de status, as 5 teclas de operação diária (MODE, PROBE, CURVE, SIM UP, SIM DOWN) e o controle DIMMER. Módulo 12 (Terminal de Calibração): Painel interno com teclado numérico e display LCD próprio, utilizado pelo mantenedor durante as provas de mar para inserir dados de calibração na memória e verificar códigos de erro no diagnóstico BITE completo.",
      "M-11 é o motor de acionamento mecânico da haste no porão e o M-12 é o painel de fusíveis de alta tensão no gerador.",
      "M-11 é o cartão de fibra óptica para comunicação com satélite e o M-12 é o giroscópio de estado sólido do leme.",
      "M-11 e M-12 são caixas plásticas de derivação à prova d'água montadas no convés principal para ligação da sirene."
    ],
    "answer": "Módulo 11 (Painel de Operação): Contém os displays visuais, LEDs de status, as 5 teclas de operação diária (MODE, PROBE, CURVE, SIM UP, SIM DOWN) e o controle DIMMER. Módulo 12 (Terminal de Calibração): Painel interno com teclado numérico e display LCD próprio, utilizado pelo mantenedor durante as provas de mar para inserir dados de calibração na memória e verificar códigos de erro no diagnóstico BITE completo.",
    "explanation": "O Módulo 11 constitui a interface frontal de operação diária (displays, teclas momentâneas e DIMMER). O Módulo 12 é o terminal oculto acessível ao baixar a tampa, equipado com LCD e teclado numérico para aferições na corrida à milha e leitura de erros BITE."
  },
  {
    "question": "1) Qual é a potência consumida Odômetro AGI-LOG?",
    "options": [
      "menor que 170 VA",
      "exatamente 1.500 Watts devido à bobina de excitação",
      "aproximadamente 15 Watts em modo de espera",
      "500 VA em 115V e 1.000 VA em 230V"
    ],
    "answer": "menor que 170 VA",
    "explanation": "A potência total consumida pela central SDTU e pelo campo magnético da haste na água é inferior a 170 VA."
  },
  {
    "question": "2) Que precisão possuiu a haste fixa velocidade de 0 a 10 nós?",
    "options": [
      "± 0.1 nó",
      "± 1% da velocidade lida",
      "± 0,5 nó em mar calmo",
      "± 0,01 nó metrológico"
    ],
    "answer": "± 0.1 nó",
    "explanation": "Em faixas baixas de velocidade (entre 0 e 10 nós), a tolerância máxima do erro com haste fixa é rigorosamente mantida em ± 0,1 nó."
  },
  {
    "question": "3) Quantas partes componentes possuí os sensores (haste) tipo OTAN do Odômetro AGI-LOG?",
    "options": [
      "03 partes (1 bobina, 2 botões eletrodos e cabos)",
      "01 bloco único sem bobina",
      "05 válvulas de titânio",
      "04 rotores com hélices"
    ],
    "answer": "03 partes (1 bobina, 2 botões eletrodos e cabos)",
    "explanation": "O sensor OTAN possui 03 componentes funcionais essenciais no cabeçote: 1 bobina (para gerar o campo magnético), 2 botões eletrodos (para captar a FEM induzida) e terminais/cabos de ligação."
  },
  {
    "question": "4) Em quais terminais do sensor (haste) tipo OTAN do Odômetro AGI-LOG está à alimentação da bobina?",
    "options": [
      "Nos terminais A e B (ou terminais 1 e 2).",
      "Nos terminais C e D (Sinal de Velocidade).",
      "No terminal S (ou E - Terra e Blindagem).",
      "Terminais 9 e 10 de saída síncro 400 Hz."
    ],
    "answer": "Nos terminais A e B (ou terminais 1 e 2).",
    "explanation": "A alimentação alternada nominal de 57V gerada pelo Módulo 08 chega à bobina do sensor pelos terminais designados por A e B."
  },
  {
    "question": "5) Em quais terminais do sensor (haste) tipo OTAN do Odômetro AGI-LOG está o Sinal de Velocidade?",
    "options": [
      "Nos terminais C e D (ou terminais 3 e 4).",
      "Nos terminais A e B (alimentação da bobina).",
      "No terminal S (ou E - Terra e Blindagem).",
      "Terminais 7 e 8 de saída serial NMEA RS-422."
    ],
    "answer": "Nos terminais C e D (ou terminais 3 e 4).",
    "explanation": "A microtensão proporcional à velocidade induzida entre os botões eletrodos na água retorna à central pelos terminais C e D."
  },
  {
    "question": "6) Em quais terminais do sensor (haste) tipo OTAN do Odômetro AGI-LOG está o terra?",
    "options": [
      "No terminal S (ou E / Screen / Blindagem e Terra).",
      "Nos terminais A e B (alimentação da bobina).",
      "Nos terminais C e D (Sinal de Velocidade).",
      "Terminais 11 e 12 de relés de alarme."
    ],
    "answer": "No terminal S (ou E / Screen / Blindagem e Terra).",
    "explanation": "O terminal S (ou E na codificação alfabética) garante a aterramento da blindagem do cabo do sensor para proteger o sinal contra ruídos e interferências."
  },
  {
    "question": "7) Qual é a Alimentação da bobina do sensor (haste) tipo OTAN do Odômetro AGI-LOG?",
    "options": [
      "57V CA (na faixa de 54 a 60V) / 60Hz",
      "12 v DC contínuos da bateria",
      "115 v / 60hz direto da rede CA",
      "440 v / 60hz trifásico da casa de máquinas"
    ],
    "answer": "57V CA (na faixa de 54 a 60V) / 60Hz",
    "explanation": "A corrente alternada de excitação que o Módulo 08 fornece à bobina opera com tensão nominal típica de 57 VAC em 50/60 Hz (faixa de 54 a 60V)."
  },
  {
    "question": "8) A S.D.T.U. do Odômetro AGI-LOG é uma unidade alojada em caixa de alumínio robusta e à prova de água, sendo de conceito modular. Qual é o tempo de reparo médio (MTTR)?",
    "options": [
      "Aproximadamente 30 minutos",
      "48 horas de estaleiro",
      "10 segundos por troca automática",
      "2 dias úteis com recalibração"
    ],
    "answer": "Aproximadamente 30 minutos",
    "explanation": "A arquitetura modular plug-and-play aliada às informações precisas de falha do autoteste BITE assegura um MTTR baixo de cerca de 30 minutos por troca de cartões."
  },
  {
    "question": "9) Qual é a função do Módulo 01 (Cartão de Identificação) do Odômetro AGI-LOG?",
    "options": [
      "Faz a interface entre o Microprocessador (Módulo 2), o painel e os circuitos de entrada/saída, aciona os displays do Módulo 10 e gera o protocolo serial RS-422.",
      "Responsável por gerar a tensão alternada de 57 Volts / 60 Hz para a bobina da haste.",
      "Cartão que aloja a chave mecânica principal ON/OFF do equipamento e retificadores.",
      "Módulo de relés de potência responsável pelo acionamento dos motores de passo."
    ],
    "answer": "Faz a interface entre o Microprocessador (Módulo 2), o painel e os circuitos de entrada/saída, aciona os displays do Módulo 10 e gera o protocolo serial RS-422.",
    "explanation": "O Cartão de Interface/Identificação M-01 interliga o processador frontalmente, comanda a multiplexação no Módulo 10 e emite o protocolo serial padrão RS-422."
  },
  {
    "question": "10) Qual é a função do Módulo 02 (Cartão do Micro Processador e memórias)do Odômetro AGI LOG?",
    "options": [
      "É o coração da SDTU: executa todos os cálculos de velocidade e distância, gerencia diagnósticos BITE, processa calibrações e distribui dados aos cartões de saída.",
      "Atua exclusivamente como regulador de tensão analógico de -15 Volts para os pré-amplificadores.",
      "Serve apenas como conversor óptico que transforma a leitura serial em pulsos síncronos de 400 Hz.",
      "É o cartão de fusíveis e proteção contra surtos abrigando os terminais de rosca para os cabos."
    ],
    "answer": "É o coração da SDTU: executa todos os cálculos de velocidade e distância, gerencia diagnósticos BITE, processa calibrações e distribui dados aos cartões de saída.",
    "explanation": "O Módulo 02 centraliza o processamento digital: calcula velocidade e distância, roda as rotinas algorítmicas de autoteste BITE e comanda todas as interfaces e placas de saída da central."
  },
  {
    "question": "11) Qual é a função do Módulo 04 (Conversor de Sinais A/D)do Odômetro AGI-LOG?",
    "options": [
      "Recebe, amplifica e demodula o sinal analógico da haste, convertendo-o por multiplicação (com rejeição de quadratura) em onda quadrada digital proporcional para a CPU.",
      "Converte a tensão contínua de bateria de 12 Volts da embarcação em corrente alternada de 400 Hz.",
      "Recebe sinais digitais em formato NMEA do radar e os transforma em tensões de 0 a 10 Volts.",
      "Gera a tensão alternada nominal de 57V para excitação da bobina através de transformador toroidal."
    ],
    "answer": "Recebe, amplifica e demodula o sinal analógico da haste, convertendo-o por multiplicação (com rejeição de quadratura) em onda quadrada digital proporcional para a CPU.",
    "explanation": "O Cartão Analógico M-04 amplifica o micro-sinal diferencial em milivolts captado na água e o demodula, gerando a onda quadrada digital limpa para a leitura no processador M-02."
  },
  {
    "question": "12) Qual é a função dos Módulos 05 e 06 (Conversores de Sinais D/A = opcional) do Odômetro AGI-LOG?",
    "options": [
      "São cartões opcionais idênticos que convertem os dados digitais de velocidade em saídas analógicas síncronas de 400 Hz, equivalentes a síncros 15CX4, para alimentar repetidoras.",
      "Obrigatoriamente instalados em todos os odômetros para atuar como fontes comutadas de alta frequência.",
      "Cartões de memória de massa que efetuam o backup diário de todas as milhas navegadas no navio.",
      "Conversores que transformam a tensão alternada da rede em tensão contínua de +5 Volts."
    ],
    "answer": "São cartões opcionais idênticos que convertem os dados digitais de velocidade em saídas analógicas síncronas de 400 Hz, equivalentes a síncros 15CX4, para alimentar repetidoras.",
    "explanation": "Quando instalados, os módulos opcionais D/A (M-05 e M-06) emitem sinais síncronos de 400 Hz equivalentes a transmissores 15CX4 para acionamento de repetidores analógicos militares e de passadiço."
  }
];
