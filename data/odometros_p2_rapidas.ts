import type { Question } from "../types/question";

export const odometrosP2RapidasQuestions: Question[] = [
  {
    "question": "Quais as precauções de segurança na troca de módulos da S.D.T.U.?",
    "options": [
      "Desligar alimentação principal e usar proteção ESD.",
      "Manter a S.D.T.U. ligada e operando em modo TEST para verificar se os LEDs piscam no..",
      "Desconectar apenas o cabo do sensor externo de proa, mantendo a alimentação AC de..",
      "Aterrar diretamente o barramento de +5V do backplane com uma chave metálica antes de.."
    ],
    "answer": "Desligar alimentação principal e usar proteção ESD.",
    "explanation": "Conforme o manual e a apostila técnica do Odômetro AGI-LOG, a remoção ou inserção de cartões (m...",
    "topic": "Precauções de Segurança na Troca de Módulos da SDTU"
  },
  {
    "question": "Que cuidado mecânico e ambiental é obrigatório ao fechar a S.D.T.U.?",
    "options": [
      "Alinhar nas guias e fechar a tampa hermeticamente.",
      "Forçar a inserção do cartão com ferramenta de alavanca caso os pinos do conector..",
      "Remover o vedante de borracha (gasket) da tampa frontal para melhorar a ventilação..",
      "Aplicar graxa lubrificante à base de silicone condutivo diretamente sobre as trilhas.."
    ],
    "answer": "Alinhar nas guias e fechar a tampa hermeticamente.",
    "explanation": "O alinhamento mecânico preciso do cartão em suas guias deslizantes é crucial para evitar que os...",
    "topic": "Procedimentos de Remoção e Substituição na SDTU"
  },
  {
    "question": "Como se caracteriza a construção mecânica e o conceito arquitetônico da S.D.T.U. no Odômetro AGI-LOG?",
    "options": [
      "Caixa de alumínio à prova d'água 100% modular.",
      "É montada em rack aberto de plástico ABS sem vedação.",
      "Consiste em uma unidade submersa fixada diretamente na quilha do navio, preenchida..",
      "É um console de madeira tratada com painel analógico de ponteiros galvanométricos,.."
    ],
    "answer": "Caixa de alumínio à prova d'água 100% modular.",
    "explanation": "A S.D.T.U. do Odômetro AGI-LOG foi projetada para operar nas condições severas do ambiente nava...",
    "topic": "Construção da S.D.T.U. - Odômetro AGI-LOG"
  },
  {
    "question": "Qual é o Tempo de Reparo Médio (MTTR) típico para a substituição de um módulo no Odômetro AGI-LOG?",
    "options": [
      "15 a 30 minutos.",
      "Entre 24 e 48 horas, devido à necessidade de ressoldar os barramentos digitais em..",
      "Cerca de 7 dias úteis.",
      "Aproximadamente 4 horas de aquecimento térmico antes que a unidade permita o.."
    ],
    "answer": "15 a 30 minutos.",
    "explanation": "O conceito modular e a presença do autoteste integrado (BIT/BITE) reduzem drasticamente o MTTR...",
    "topic": "MTTR e Manutenção Modular da S.D.T.U."
  },
  {
    "question": "Qual é o propósito fundamental da S.D.T.U. (Unidade Terminal de Distribuição de Sinais/Dados) no sistema?",
    "options": [
      "Processar/exibir velocidade e distância e distribuir sinais.",
      "Exclusivamente bombear a água do mar ao redor da haste para resfriar os transdutores..",
      "Funcionar apenas como chave de transferência automática de energia de emergência..",
      "Atuar como radar anticolisão de bordo que rastreia alvos de superfície cruzando o.."
    ],
    "answer": "Processar/exibir velocidade e distância e distribuir sinais.",
    "explanation": "A S.D.T.U. é o cérebro e coração do sistema Odômetro AGI-LOG. Ela centraliza todas as etapas: a...",
    "topic": "Propósito da S.D.T.U. - Odômetro AGI-LOG"
  },
  {
    "question": "Qual é o propósito geral?",
    "options": [
      "Medir velocidade na água (STW) e distância percorrida.",
      "Medir a profundidade do fundo marinho sob a quilha para disparar alarmes fonéticos em..",
      "Determinar o posicionamento geográfico global absoluto por meio da triangulação..",
      "Medir a velocidade do vento aparente e a direção relativa da proa para sincronizar o.."
    ],
    "answer": "Medir velocidade na água (STW) e distância percorrida.",
    "explanation": "O propósito primordial do Odômetro AGI-LOG (odômetro eletromagnético) é fornecer a velocidade l...",
    "topic": "Propósito Geral do Odômetro AGI-LOG"
  },
  {
    "question": "De quantas e quais partes compõe-se o sistema completo?",
    "options": [
      "3 partes: S.D.T.U., Conjunto do Sensor e Repetidores.",
      "Apenas uma (1) parte.",
      "Cinco (5) partes.",
      "Duas (2) partes."
    ],
    "answer": "3 partes: S.D.T.U., Conjunto do Sensor e Repetidores.",
    "explanation": "A arquitetura do Odômetro AGI-LOG divide-se classicamente em três grandes blocos funcionais e e...",
    "topic": "Composição e Partes do Odômetro AGI-LOG"
  },
  {
    "question": "Qual lei física e princípio é utilizado pela haste para medir velocidade?",
    "options": [
      "Lei da Indução Eletromagnética de Faraday.",
      "Efeito piezoelétrico inverso.",
      "Variação capacitiva.",
      "Ponte de Wheatstone térmica."
    ],
    "answer": "Lei da Indução Eletromagnética de Faraday.",
    "explanation": "O Odômetro AGI-LOG opera com base na Lei de Faraday (EM Log).",
    "topic": "Princípio de Funcionamento da Haste (Lei de Faraday)"
  },
  {
    "question": "Quais os 4 tipos de hastes (sensores) usados no sistema?",
    "options": [
      "Haste Retrátil, Fixa (OTAN), Barbatana e Sensor Revés.",
      "Sensor Ultrassônico Doppler, Tubo de Pitot mecânico, Haste Piezoresistiva e Sensor..",
      "Sonda Magnética de Rumo, Haste de Bronze Fundido estática, Sensor de Ecos Sonoros e..",
      "Haste de Titânio de 12 metros, Sensor de Temperatura Digital, Transdutor de Arfagem e.."
    ],
    "answer": "Haste Retrátil, Fixa (OTAN), Barbatana e Sensor Revés.",
    "explanation": "O sistema AGI-LOG é altamente versátil e foi projetado para aceitar quatro tipos distintos de m...",
    "topic": "Os 4 Tipos de Sensores do Odômetro AGI-LOG"
  },
  {
    "question": "Aonde e com qual finalidade operacional é empregada a Haste Retrátil (Retractable Probe)?",
    "options": [
      "Navios onde se deve recolher/limpar a haste com navio na água.",
      "Exclusivamente em cascos de submarinos nucleares operando a profundidades superiores..",
      "Apenas no topo do mastro de comunicação da proa para captar a velocidade do vento em..",
      "Em embarcações de fibra de vidro ultraleves que não possuem alimentação elétrica AC.."
    ],
    "answer": "Navios onde se deve recolher/limpar a haste com navio na água.",
    "explanation": "A Haste Retrátil é montada dentro de um conjunto com válvula de fundo (sea valve / sluice valve).",
    "topic": "Aplicação da Haste Retrátil - AGI-LOG"
  },
  {
    "question": "Aonde é empregada preferencialmente a Haste Fixa (estilo OTAN / NATO Fixed Probe)?",
    "options": [
      "Navios militares (flange OTAN) onde robustez é prioritária.",
      "Em pequenos barcos de recreio e veleiros que necessitam de desinstalação diária da..",
      "Em balsas fluviais de fundo chato que operam exclusivamente em águas doces com alto..",
      "Apenas em navios petroleiros de grande calado durante as manobras exclusivas de.."
    ],
    "answer": "Navios militares (flange OTAN) onde robustez é prioritária.",
    "explanation": "A Haste Fixa estilo OTAN atende a normas de padronização mecânica e resistência a choques navai...",
    "topic": "Aplicação da Haste Fixa Estilo OTAN - AGI-LOG"
  },
  {
    "question": "Aonde e por que é empregada a Haste com Perfil de Barbatana (Fin Profile Probe)?",
    "options": [
      "Embarcações rápidas, para reduzir arrasto e cavitação.",
      "Em navios quebra-gelos para cortar blocos de gelo espessos antes que estes atinjam o..",
      "Em rebocadores portuários que operam exclusivamente à rotação zero e necessitam de..",
      "Em embarcações fluviais rasas para atuar como leme auxiliar de direção quando os.."
    ],
    "answer": "Embarcações rápidas, para reduzir arrasto e cavitação.",
    "explanation": "Em velocidades elevadas (acima de 25 a 35+ nós), hastes cilíndricas normais geram arrasto exces...",
    "topic": "Aplicação da Haste com Perfil de Barbatana - AGI-LOG"
  },
  {
    "question": "Aonde é empregado o Sensor Revés (ou Flush Mounted Probe / Sensor Almofada montado rente ao casco)?",
    "options": [
      "Submarinos e quebra-gelos, evitando saliências sob o casco.",
      "Exclusivamente no topo de superestruturas elevadas para atuar como antena de..",
      "Em navios cargueiros convencionais que navegam apenas em águas profundas..",
      "No interior dos tanques de lastro de água doce para medir a velocidade de enchimento.."
    ],
    "answer": "Submarinos e quebra-gelos, evitando saliências sob o casco.",
    "explanation": "O Sensor Revés (Flush Mounted) é instalado de modo que sua face sensora fique perfeitamente ali...",
    "topic": "Aplicação do Sensor Revés (Flush Mounted) - AGI-LOG"
  },
  {
    "question": "Quantas partes componentes estruturais e elétricas compõem tipicamente os sensores (haste) tipo OTAN?",
    "options": [
      "4 partes: Corpo/flange, Bobina, Eletrodos e Cabo/cabeçote.",
      "Apenas duas (2) partes.",
      "Seis (6) partes.",
      "Três (3) partes."
    ],
    "answer": "4 partes: Corpo/flange, Bobina, Eletrodos e Cabo/cabeçote.",
    "explanation": "A Haste Fixa padrão OTAN do AGI-LOG é um conjunto encapsulado de alta precisão composto por qua...",
    "topic": "As 4 Partes Componentes da Haste OTAN"
  },
  {
    "question": "Em quais terminais específicos do bloco de conexões da haste está ligada a alimentação elétrica da bobina de excitação magnética?",
    "options": [
      "Terminais A e B (ou 1 e 2 da excitação).",
      "Terminais C e D, que são dedicados à alimentação contínua de 24 V da bateria auxiliar..",
      "Terminais X e Y do conector serial NMEA 0183 de alta velocidade do barramento principal.",
      "Apenas no pino central de blindagem (Terra/GND) para fechar o retorno magnético em.."
    ],
    "answer": "Terminais A e B (ou 1 e 2 da excitação).",
    "explanation": "Na padronização das conexões entre o sensor/haste e a S.",
    "topic": "Terminais de Alimentação da Bobina (A e B)"
  },
  {
    "question": "Em quais terminais estão conectados os eletrodos de sinal e o terra de referência?",
    "options": [
      "Terminais C e D (Eletrodos) e Terminal E (Terra/Blindagem).",
      "Terminais A e B exclusivamente para os eletrodos de sinal e Terminal Z para a..",
      "Pinos 11 e 12 do conector RS-232, compartilhados diretamente com a linha de clock do..",
      "Terminais L1, L2 e L3 da entrada da rede trifásica principal de 440 V do quadro.."
    ],
    "answer": "Terminais C e D (Eletrodos) e Terminal E (Terra/Blindagem).",
    "explanation": "A minúscula tensão induzida na água pela movimentação do navio é captada pelos dois eletrodos d...",
    "topic": "Terminais dos Eletrodos de Sinal e Terra (C, D e E)"
  },
  {
    "question": "Quais são os modos principais operados pela tecla MODE?",
    "options": [
      "Modos Normal (RUN), Calibração (CAL) e Teste (TEST/SIM).",
      "Permite alternar apenas entre a cor dos dígitos de LED verde e vermelho e ajustar a..",
      "Serve para desligar completamente o processador central e reinicializar o relógio de..",
      "Seleciona a escala de profundidade em metros ou pés e liga o aquecedor elétrico da.."
    ],
    "answer": "Modos Normal (RUN), Calibração (CAL) e Teste (TEST/SIM).",
    "explanation": "A tecla momentânea MODE é o controle de navegação de modos operacionais da S.",
    "topic": "Teclas de Comando: Tecla MODE"
  },
  {
    "question": "No painel da S.D.T.U., quais são as seleções e funções que operam a tecla PROBE (Sensor)?",
    "options": [
      "Permite selecionar e informar ao microprocessador qual tipo/modelo de sensor (haste)..",
      "Ativa o recolhimento pneumático automático da haste no porão e trava a válvula de..",
      "Zera imediatamente o hodômetro geral cumulativo de distância das últimas 10.",
      "Desliga a alimentação de +5V da lógica digital, mantendo apenas a bobina do sensor.."
    ],
    "answer": "Permite selecionar e informar ao microprocessador qual tipo/modelo de sensor (haste)..",
    "explanation": "A tecla PROBE (Sensor) é utilizada para configurar a interface com o transdutor no mar.",
    "topic": "Teclas de Comando: Tecla PROBE (Sensor)"
  },
  {
    "question": "Quais são as seleções e funcionalidades operadas pela tecla CURVE no painel frontal da S.D.T.U.?",
    "options": [
      "Permite selecionar as diferentes curvas de calibração armazenadas na memória e..",
      "Desenha um gráfico cartesiano na tela do radar principal mostrando o consumo de..",
      "Ajusta a curvatura mecânica da haste retrátil no porão para compensar o adernamento..",
      "Altera o perfil da onda quadrada do clock interno de 8 MHz para onda senoidal de 400.."
    ],
    "answer": "Permite selecionar as diferentes curvas de calibração armazenadas na memória e..",
    "explanation": "A tecla CURVE gerencia a calibração hidrodinâmica do sistema.",
    "topic": "Teclas de Comando: Tecla CURVE"
  },
  {
    "question": "Qual é a função do regulador de intensidade luminosa denominado DIMMER (ou Dimer Display) localizado no painel frontal da S.D.T.U.?",
    "options": [
      "Ajustar de forma contínua a intensidade luminosa dos displays digitais de..",
      "Ajustar a corrente de excitação da bobina da haste entre 0 e 5 Amperes para aumentar..",
      "Regular a velocidade do microprocessador central em situações de superaquecimento da..",
      "Variar o volume do alarme fonético de avaria mecânica no alto-falante principal da.."
    ],
    "answer": "Ajustar de forma contínua a intensidade luminosa dos displays digitais de..",
    "explanation": "O controle DIMMER é o regulador de brilho do painel da S.",
    "topic": "Controles do Painel: Regulador DIMMER"
  },
  {
    "question": "Qual é a especificação de precisão intrínseca que se refere diretamente ao Instrumento (a Unidade Eletrônica S.D.T.U. isolada) no sistema?",
    "options": [
      "Precisão de conversão e processamento eletrônico muito elevada, tipicamente melhor..",
      "Precisão fixa de ±5 nós.",
      "Erro tolerado de até ±10% em toda a faixa de operação elétrica entre -20°C e +85°C da..",
      "Precisão que depende exclusivamente da tensão da bateria de emergência, variando de.."
    ],
    "answer": "Precisão de conversão e processamento eletrônico muito elevada, tipicamente melhor..",
    "explanation": "No Odômetro AGI-LOG, deve-se distinguir entre a precisão do instrumento eletrônico (a S.",
    "topic": "Precisão na Especificação do Instrumento (S.D.T.U.)"
  },
  {
    "question": "Quais são os procedimentos sequenciais corretos para a partida (energização e inicialização operacional) do sistema?",
    "options": [
      "Verificar a correta instalação e travamento da haste no casco, ligar a alimentação..",
      "Pressionar simultaneamente as teclas MODE e CURVE por 30 segundos antes de ligar o..",
      "Remover todos os módulos de 01 a 12 da caixa, energizar o chassi vazio com 24V e..",
      "Desconectar os cabos de saída para os repetidores e aplicar curto-circuito temporário.."
    ],
    "answer": "Verificar a correta instalação e travamento da haste no casco, ligar a alimentação..",
    "explanation": "Para a partida segura do sistema AGI-LOG, o técnico/operador primeiro garante a segurança físic...",
    "topic": "Procedimentos de Partida e Operação do Sistema"
  },
  {
    "question": "Como é realizada e em que consiste a calibração hidrodinâmica da S.D.T.U. no Odômetro AGI-LOG?",
    "options": [
      "Consiste na correlação entre a tensão induzida captada pelos eletrodos e a velocidade..",
      "Consiste em lixar manualmente a ponta metálica dos eletrodos com lixa abrasiva fina..",
      "Ajuste de um único trimpot analógico no Módulo 08 (Fonte) para aumentar a tensão..",
      "Preenchimento de uma tabela em papel no diário de navegação."
    ],
    "answer": "Consiste na correlação entre a tensão induzida captada pelos eletrodos e a velocidade..",
    "explanation": "O fluxo de água que banha a haste é afetado pelo perfil do casco e pela 'camada limite' (bounda...",
    "topic": "Calibração Hidrodinâmica da S.D.T.U."
  },
  {
    "question": "Qual é a resolução e precisão do mostrador de Velocidade (NÓS)?",
    "options": [
      "Exibição digital contínua em nós com resolução de 0,01 nó (ou 0,1 nó) e precisão..",
      "Exibição analógica em escala de cores graduada de 5 em 5 nós com erro de leitura..",
      "Resolução de apenas 1 nó inteiro sem casas decimais, limitando a exatidão em manobras..",
      "Precisão que decai linearmente com o aumento da profundidade do mar, apresentando.."
    ],
    "answer": "Exibição digital contínua em nós com resolução de 0,01 nó (ou 0,1 nó) e precisão..",
    "explanation": "Os mostradores digitais frontais da S.",
    "topic": "Especificação de Precisão na Exibição de Velocidade"
  },
  {
    "question": "Qual é a resolução e precisão do mostrador de Distância (MILHAS)?",
    "options": [
      "A distância percorrida é calculada pela integração matemática da velocidade em função..",
      "A distância é medida contando o número de voltas mecânicas que um pequeno hélice com..",
      "O hodômetro depende de um cronômetro a corda manual acionado a cada 4 horas pelo..",
      "A exibição de distância só é calculada se o navio estiver navegando no rumo Norte.."
    ],
    "answer": "A distância percorrida é calculada pela integração matemática da velocidade em função..",
    "explanation": "O Módulo 02 (Microprocessador) realiza a integração digital exata da medição de velocidade no d...",
    "topic": "Especificação de Precisão na Exibição de Distância"
  },
  {
    "question": "Qual é a especificação padrão para a Alimentação Elétrica Principal (Power Input) que entra no Módulo 08 da S.D.T.U.?",
    "options": [
      "115 V AC ou 230 V AC monofásica, podendo também aceitar ou contar com entrada de..",
      "Exclusivamente 440 V AC trifásica industrial de 60 Hz sem opção para transformadores..",
      "Apenas alimentação solar em 12 V DC proveniente de baterias seladas externas montadas..",
      "Alimentação de alta tensão em 3."
    ],
    "answer": "115 V AC ou 230 V AC monofásica, podendo também aceitar ou contar com entrada de..",
    "explanation": "O sistema AGI-LOG foi dimensionado para se adequar universalmente à rede elétrica padrão dos na...",
    "topic": "Alimentação Elétrica Principal do Odômetro AGI-LOG"
  },
  {
    "question": "Qual é a potência elétrica total consumida tipicamente pelo sistema (S.D.T.U. e bobina de excitação do sensor)?",
    "options": [
      "Baixíssimo consumo, tipicamente em torno de 30 Watts em operação normal contínua.",
      "Aproximadamente 1.",
      "Mais de 5.000 Watts devido ao aquecimento resistivo dos eletrodos de platina na água..",
      "Exatos 0,5 Watt, operando como circuito passivo sem necessidade de transformadores ou.."
    ],
    "answer": "Baixíssimo consumo, tipicamente em torno de 30 Watts em operação normal contínua.",
    "explanation": "Apesar de alimentar a bobina magnética submersa no mar e energizar um chassi de 12 cartões elet...",
    "topic": "Potência Consumida pelo Odômetro AGI-LOG"
  },
  {
    "question": "Que nível de precisão possui a Haste Fixa operando na faixa de baixas velocidades de 0 a 10 nós?",
    "options": [
      "Precisão de ±0,1 nó (±0,1 knot) na medição de velocidade entre 0 e 10 nós.",
      "Precisão inferior, com tolerância de ±1,5 nó em velocidades abaixo de 10 nós devido à..",
      "O sistema não consegue medir velocidades inferiores a 3 nós, mantendo o display..",
      "Precisão exata de ±0,001 nó em 0 a 10 nós, porém com desvio para ±5 nós ao.."
    ],
    "answer": "Precisão de ±0,1 nó (±0,1 knot) na medição de velocidade entre 0 e 10 nós.",
    "explanation": "Em baixas velocidades de deslocamento (de 0 a 10 nós), a precisão da medição é extremamente crí...",
    "topic": "Precisão da Haste na Faixa de 0 a 10 Nós"
  },
  {
    "question": "Como se estrutura e como funciona o Circuito de Teste Integrado (BIT / BITE - Built-In Test Equipment) localizado na S.D.T.U.?",
    "options": [
      "É um sistema de autodiagnóstico gerenciado pelo microprocessador (Módulo 02) e..",
      "É apenas uma lâmpada fluorescente instalada no topo do gabinete que acende em cor..",
      "Consiste em um alicate amperímetro mecânico solto dentro da caixa para que o..",
      "É uma sub-rotina que desliga o odômetro a cada duas horas para limpar a memória RAM e.."
    ],
    "answer": "É um sistema de autodiagnóstico gerenciado pelo microprocessador (Módulo 02) e..",
    "explanation": "O circuito BIT (Built-In Test) confere ao AGI-LOG sua alta confiabilidade de diagnóstico.",
    "topic": "Circuito de Teste Integrado (BIT) na S.D.T.U."
  },
  {
    "question": "Quais indicações visuais ocorrem quando uma falha é detectada pelo BITE?",
    "options": [
      "O sistema ativa um alarme visual no painel frontal, exibe um Código de Falha / Código..",
      "O odômetro queima o fusível principal da fonte imediatamente e libera fumaça de..",
      "A S.D.T.U. inverte a indicação de velocidade, mostrando valores negativos de nós para..",
      "O sistema desconecta a bateria do navio e aciona os motores das bombas de porão em.."
    ],
    "answer": "O sistema ativa um alarme visual no painel frontal, exibe um Código de Falha / Código..",
    "explanation": "Quando o autoteste BIT constata uma anomalia em qualquer parte da cadeia (ex: falha de RAM, per...",
    "topic": "Detecção de Falha e Comportamento do Sistema"
  },
  {
    "question": "Quais são os três (3) tipos principais de manutenções empregados na doutrina de suporte técnico e operação?",
    "options": [
      "Manutenção Preventiva, Manutenção por Diagnóstico e Manutenção Corretiva.",
      "Manutenção Hidráulica diária, Calibração Nuclear anual e Soldagem Subaquática semanal..",
      "Pintura externa do gabinete a cada 6 meses, Troca obrigatória da fiação do porão a..",
      "Manutenção via satélite por controle remoto do fabricante, Troca aleatória de.."
    ],
    "answer": "Manutenção Preventiva, Manutenção por Diagnóstico e Manutenção Corretiva.",
    "explanation": "A filosofia de manutenção do Odômetro AGI-LOG baseia-se no tripé clássico dos sistemas navais m...",
    "topic": "Os 3 Tipos de Manutenções no Odômetro AGI-LOG"
  },
  {
    "question": "Como se caracteriza e qual é a grande vantagem da Manutenção por Diagnóstico no sistema?",
    "options": [
      "É uma metodologia estruturada que utiliza a inteligência dos circuitos BIT e os..",
      "É um processo mecânico onde o técnico escuta o ruído da água passando pela haste..",
      "Consiste em enviar os dados analógicos da S.",
      "Baseia-se em curto-circuitar intencionalmente os conectores da fonte de alimentação.."
    ],
    "answer": "É uma metodologia estruturada que utiliza a inteligência dos circuitos BIT e os..",
    "explanation": "A Manutenção por Diagnóstico é o elo de transição entre a operação e o reparo.",
    "topic": "Característica da Manutenção por Diagnóstico"
  },
  {
    "question": "O que caracteriza e como é realizada a Manutenção por Diagnóstico em Nível Baixo (Low Level Diagnostic Maintenance) no Odômetro AGI-LOG?",
    "options": [
      "É realizada diretamente no painel frontal da S.",
      "Requer a remoção imediata da haste retrátil com o navio em movimento a 25 nós e..",
      "Envolve desmontar completamente os 12 módulos com chave de fenda e medir a..",
      "É executada apenas por engenheiros de fábrica utilizando analisador de espectro.."
    ],
    "answer": "É realizada diretamente no painel frontal da S.",
    "explanation": "O Nível Baixo de Diagnóstico é a primeira linha de verificação rápida.",
    "topic": "Manutenção por Diagnóstico em Nível Baixo"
  },
  {
    "question": "O que caracteriza e em que consiste a Manutenção por Diagnóstico em Nível Alto (High Level Diagnostic Maintenance) no Odômetro AGI-LOG?",
    "options": [
      "É o diagnóstico avançado realizado por pessoal técnico qualificado abrindo o gabinete..",
      "É a manutenção realizada exclusivamente no topo dos mastros para verificar os cabos..",
      "Consiste em lixar e repintar com tinta anti-incrustante a carcaça de alumínio da..",
      "Envolve a substituição dos transformadores de alta tensão da casa de máquinas por.."
    ],
    "answer": "É o diagnóstico avançado realizado por pessoal técnico qualificado abrindo o gabinete..",
    "explanation": "Quando o diagnóstico de Nível Baixo aponta falha interna na S.",
    "topic": "Manutenção por Diagnóstico em Nível Alto"
  },
  {
    "question": "Em que consiste fundamentalmente a Manutenção Corretiva na S.D.T.U. após o isolamento do defeito pela fase de diagnóstico?",
    "options": [
      "Consiste no reparo rápido e efetivo do equipamento por meio da substituição física do..",
      "Consiste em reenrolar manualmente na bancada de bordo os fios de cobre de 0,1 mm da..",
      "Envolve reprogramar em código assembly de máquina todos os transistores do Módulo 02..",
      "Resume-se a dar pancadas mecânicas controladas no gabinete de alumínio para soltar.."
    ],
    "answer": "Consiste no reparo rápido e efetivo do equipamento por meio da substituição física do..",
    "explanation": "A doutrina de Manutenção Corretiva na S.",
    "topic": "Filosofia da Manutenção Corretiva (Troca Modular)"
  },
  {
    "question": "Qual é a função específica do Módulo 01 (Cartão de Identificação / ID Card)?",
    "options": [
      "Armazenar e fornecer ao microprocessador os dados de identificação, codificação do..",
      "Atuar como conversor analógico-digital dos sinais da haste, transformando os..",
      "Transformar a energia elétrica AC de 115V do navio nas tensões contínuas de +5V e..",
      "Gerar exclusivamente a frequência de batimento acústico de 2 MHz e controlar os relés.."
    ],
    "answer": "Armazenar e fornecer ao microprocessador os dados de identificação, codificação do..",
    "explanation": "O Módulo 01 (Cartão de Identificação) é a placa de identidade eletrônica e configuração do chas...",
    "topic": "Função do Módulo 01 (Cartão de Identificação)"
  },
  {
    "question": "Qual é a função central desempenhada pelo Módulo 02 (Cartão do Micro Processador e Memórias) na S.D.T.U.?",
    "options": [
      "É o cérebro digital e controlador central do sistema.",
      "É um simples cartão retificador de diodos zener responsável por proteger as entradas..",
      "Atua exclusivamente como amplificador operacional analógico que eleva a corrente de..",
      "É uma placa passiva que serve apenas como suporte físico e terra de blindagem.."
    ],
    "answer": "É o cérebro digital e controlador central do sistema.",
    "explanation": "O Módulo 02 (Cartão do Microprocessador e Memórias) centraliza toda a inteligência computaciona...",
    "topic": "Função do Módulo 02 (Microprocessador e Memórias)"
  },
  {
    "question": "Qual é a função e o papel da Memória EPROM (Erasable Programmable Read-Only Memory)?",
    "options": [
      "Armazenar de forma permanente (não-volátil) o programa operacional principal do..",
      "Armazenar temporariamente a velocidade instantânea dos últimos 3 segundos para apagar..",
      "Alimentar com tensão contínua de 12 Volts o circuito de display fluorescente quando o..",
      "Gravar o áudio contínuo das comunicações verbais entre o oficial de quarto no.."
    ],
    "answer": "Armazenar de forma permanente (não-volátil) o programa operacional principal do..",
    "explanation": "A Memória EPROM no Módulo 02 é uma memória não-volátil (não perde os dados quando o AGI-LOG é d...",
    "topic": "Função da Memória EPROM no Módulo 02"
  },
  {
    "question": "Qual é a função específica da Memória RAM (Random Access Memory)?",
    "options": [
      "Armazenar de forma dinâmica e temporária os dados em tempo de execução, como o bloco..",
      "Guardar permanentemente o número de série de fábrica do equipamento, impedindo que o..",
      "Gerar a alta frequência de excitação mecânica para vibrar a ponta do sensor..",
      "Servir de fusível térmico rearmável que interrompe o barramento de +5V caso a.."
    ],
    "answer": "Armazenar de forma dinâmica e temporária os dados em tempo de execução, como o bloco..",
    "explanation": "A Memória RAM é a memória de trabalho de leitura e escrita do microprocessador central.",
    "topic": "Função da Memória RAM no Módulo 02"
  },
  {
    "question": "Qual é a função desempenhada pelo Módulo 03 na S.D.T.U.?",
    "options": [
      "Atuar como cartão de interface intermediário entre o barramento do Microprocessador e..",
      "Converter os sinais digitais seriais de saída para o formato analógico em corrente..",
      "Gerar a alta tensão alternada de 220V que alimenta os transformadores e bobinas do..",
      "Fornecer os pulsos mecânicos de 200 pulsos por milha exclusivamente para o.."
    ],
    "answer": "Atuar como cartão de interface intermediário entre o barramento do Microprocessador e..",
    "explanation": "O Módulo 03 faz a ponte entre o processador (Módulo 02) e a interface humana no painel frontal da S.",
    "topic": "Função do Módulo 03 (Interface de Painel/Display/Teclado)"
  },
  {
    "question": "Qual é a função essencial do Módulo 04 (Conversor de Sinais Analógico para Digital - Conversor A/D)?",
    "options": [
      "Receber, amplificar com alta impedância, filtrar e converter em palavras digitais..",
      "Receber a tensão alternada de 115V AC da rede do navio e retificá-la em corrente..",
      "Receber os pulsos de velocidade calculados pelo microprocessador e convertê-los em..",
      "Atuar como chave mecânica biposição que comuta o sinal entre a haste de proa e a.."
    ],
    "answer": "Receber, amplificar com alta impedância, filtrar e converter em palavras digitais..",
    "explanation": "O Módulo 04 (Conversor A/D) é a porta de entrada dos sinais hidrodinâmicos analógicos do transdutor.",
    "topic": "Função do Módulo 04 (Conversor A/D)"
  },
  {
    "question": "Qual é a função e a aplicação dos Módulos 05 e 06 (Conversores de Sinais Digital para Analógico - Conversores D/A, opcionais) na S.D.T.U.?",
    "options": [
      "Receber as palavras digitais processadas e calibradas de velocidade (e/ou distância)..",
      "Gerar a corrente alternada pulsada de 2 Amperes destinada a alimentar e excitar a..",
      "Servir de interface de fibra óptica ultrarrápida para descarregar o diário eletrônico..",
      "Medir a temperatura da água da quilha e converter a variação do termistor analógico.."
    ],
    "answer": "Receber as palavras digitais processadas e calibradas de velocidade (e/ou distância)..",
    "explanation": "Muitos navios utilizam repetidores remotamente instalados no camarim ou asas do passadiço com p...",
    "topic": "Função dos Módulos 05 e 06 (Conversores D/A Opcionais)"
  },
  {
    "question": "Qual é a função primordial e crítica do Módulo 07 (Cartão de Saída Auxiliar = Saídas Pulsadas / Pulse Output Card)?",
    "options": [
      "Gerar e distribuir pulsos elétricos ou fechamentos de contatos limpos/relés em taxa..",
      "Emitir pulsos acústicos de 1,1 milissegundo em direção ao fundo marinho para calcular..",
      "Fornecer pulsos magnéticos de alta voltagem para desmagnetizar periodicamente os..",
      "Enviar pulsos de reset a cada 60 segundos para o relógio de ponto da tripulação e.."
    ],
    "answer": "Gerar e distribuir pulsos elétricos ou fechamentos de contatos limpos/relés em taxa..",
    "explanation": "O Módulo 07 (Saídas Pulsadas) é a principal fonte de interface do hodômetro com os sistemas tát...",
    "topic": "Função do Módulo 07 (Saídas Pulsadas por Milha Náutica)"
  },
  {
    "question": "Qual é a dupla função técnica exercida pelo Módulo 08 (Cartão da Fonte de Alimentação / Power Supply Module) na S.D.T.U.?",
    "options": [
      "Receber a energia primária para convertê-la nas tensões reguladas que alimentam os..",
      "Atuar como bateria selada recarrega de íons de lítio que mantém os mostradores..",
      "Funcionar unicamente como transformador abaixador de isolamento analógico para..",
      "Converter os sinais analógicos do conversor A/D em formato de rádio frequência de 156.."
    ],
    "answer": "Receber a energia primária para convertê-la nas tensões reguladas que alimentam os..",
    "explanation": "O Módulo 08 é o coração de energia do AGI-LOG e cumpre duas missões vitais: 1) Retifica, filtra...",
    "topic": "Função do Módulo 08 (Fonte de Alimentação e Excitação)"
  },
  {
    "question": "Quais são especificamente as saídas de tensão contínua e sinais elétricos que o Módulo 08 (Fonte de Alimentação) produz e fornece para os circuitos internos da S.D.T.U. e para a haste?",
    "options": [
      "+5 V DC regulado para a lógica digital/CPU/memórias, ±12 V DC para os circuitos..",
      "Apenas uma tensão contínua única e fixa de +24 V DC distribuída em paralelo para..",
      "Tensões de +110 V DC para aquecimento das placas, +48 V DC para os relés de alarme..",
      "+3,3 V DC para a antena de satélite DGPS, +100 V AC para o motor do repetidor.."
    ],
    "answer": "+5 V DC regulado para a lógica digital/CPU/memórias, ±12 V DC para os circuitos..",
    "explanation": "A arquitetura eletrônica da S.",
    "topic": "Saídas Específicas do Módulo 08 (Fonte de Alimentação)"
  },
  {
    "question": "Quais são as funções e aplicações dos Módulos 09 e 10 (Cartões de Interface Digital / Saídas Seriais ou Sincro-Passo) na S.D.T.U.?",
    "options": [
      "Atuar como cartões de interface digital que transmitem os dados numéricos de..",
      "Serem placas dedicadas ao controle pneumático de abertura e fechamento da válvula de..",
      "Atuar exclusivamente como filtros passa-baixa passivos de linha telefônica para..",
      "Armazenar em cartões de memória flash removíveis as fotografias de radar capturadas.."
    ],
    "answer": "Atuar como cartões de interface digital que transmitem os dados numéricos de..",
    "explanation": "Nos navios modernos, a comunicação entre o odômetro e os computadores de navegação (IBS, ECDIS,...",
    "topic": "Função dos Módulos 09 e 10 (Interfaces Digitais/Seriais/NMEA)"
  },
  {
    "question": "Quais são as funções e as aplicações típicas dos Módulos 11 e 12 na S.D.T.U.?",
    "options": [
      "Atuar como Cartões de Expansão, Interfaces Auxiliares para múltiplos repetidores..",
      "Substituir completamente a Memória EPROM e RAM do Módulo 02 caso o microprocessador..",
      "Fornecer exclusivamente a energia elétrica trifásica de 440 Volts para alimentar as..",
      "Emitir raios ultravioleta dentro da caixa de alumínio da S."
    ],
    "answer": "Atuar como Cartões de Expansão, Interfaces Auxiliares para múltiplos repetidores..",
    "explanation": "Os slots para os Módulos 11 e 12 conferem à S.",
    "topic": "Função dos Módulos 11 e 12 (Expansão e Repetidores Remotos)"
  },
  {
    "question": "Durante a verificação de segurança no Módulo 08 (Fonte de Alimentação) e na S.D.T.U., além de desligar a rede AC principal (115/230 VAC), que outro procedimento comutado é essencial?",
    "options": [
      "Certificar-se de abrir a chave ou disjuntor da alimentação auxiliar de 24 V DC do..",
      "Conectar o transformador elevador de 440 V diretamente ao borne de aterramento da..",
      "Aterrar a antena do radar ARPA para descarregar os capacitores do conversor..",
      "Preencher a caixa de junção da proa com água destilada para resfriar os tiristores de.."
    ],
    "answer": "Certificar-se de abrir a chave ou disjuntor da alimentação auxiliar de 24 V DC do..",
    "explanation": "Como a S.D.T.U. possui um sistema redundante que comuta automaticamente para 24 V DC do banco d...",
    "topic": "Precauções de Segurança com Alimentação Redundante"
  },
  {
    "question": "Por que o manuseio do Módulo 02 exige rigorosa proteção contra ESD?",
    "options": [
      "Porque os circuitos integrados MOS/CMOS, o microprocessador e as memórias RAM/EPROM..",
      "Porque o Módulo 02 acumula tensões de 10.",
      "Porque as trilhas de ouro do Módulo 02 evaporam em contato com a oleosidade dos dedos..",
      "Porque o módulo é magnético e pode desorientar a bússola magnética de governo se for.."
    ],
    "answer": "Porque os circuitos integrados MOS/CMOS, o microprocessador e as memórias RAM/EPROM..",
    "explanation": "A tecnologia de circuitos integrados e memórias (como o microprocessador e chips EPROM/RAM em t...",
    "topic": "Proteção ESD no Módulo 02 (Microprocessador e Memórias)"
  },
  {
    "question": "O que deve ser inspecionado no backplane e no cartão antes da inserção?",
    "options": [
      "Verificar visualmente se todos os pinos de contato estão perfeitamente retos, sem..",
      "Checar se os pinos de aterramento foram limados na extremidade para permitir que..",
      "Inspecionar se a camada de resina epóxi cobre completamente os contatos de ouro para..",
      "Verificar se o cartão possui um ímã de neodímio colado em sua borda superior para.."
    ],
    "answer": "Verificar visualmente se todos os pinos de contato estão perfeitamente retos, sem..",
    "explanation": "O conceito modular em cartões deslizantes depende da integridade do conector traseiro (backplane).",
    "topic": "Inspeção Mecânica dos Conectores do Backplane"
  },
  {
    "question": "Qual a importância da manutenção no anel de vedação (gasket) da tampa da S.D.T.U.?",
    "options": [
      "Preservar a vedação hermética e à prova d'água da S.",
      "Garantir o isolamento acústico contra os ruídos de vibração das turbinas.",
      "Manter a pressão de nitrogênio de 5 atmosferas injetada internamente no chassi para..",
      "Permitir que a tampa atue como blindagem térmica, impedindo que o calor do sol.."
    ],
    "answer": "Preservar a vedação hermética e à prova d'água da S.",
    "explanation": "A caixa de alumínio robusta do AGI-LOG possui classificação naval de vedação.",
    "topic": "Manutenção da Vedação da Caixa de Alumínio da S.D.T.U."
  },
  {
    "question": "Por que a bobina de excitação da Haste é alimentada por uma Corrente Alternada (AC) ou pulsada, e NÃO por Corrente Contínua (DC)?",
    "options": [
      "Para evitar a polarização eletroquímica, a eletrólise da água do mar e a corrosão..",
      "Porque o campo magnético de corrente contínua atrai detritos de ferro e pregos..",
      "Para permitir que a haste funcione como antena receptora de rádio VLF em caso de..",
      "Porque o microprocessador Módulo 02 opera exclusivamente com sinais digitais em 60 Hz.."
    ],
    "answer": "Para evitar a polarização eletroquímica, a eletrólise da água do mar e a corrosão..",
    "explanation": "A aplicação de um campo magnético constante (DC) faria com que a corrente contínua nos eletrodo...",
    "topic": "Por que a Haste usa Excitação AC (Lei de Faraday)"
  },
  {
    "question": "Qual a relação entre velocidade e tensão induzida na haste (Lei de Faraday)?",
    "options": [
      "A relação é estritamente linear e diretamente proporcional (E = B * L * v).",
      "A relação é quadrática (E = k * v²), exigindo que a CPU calcule a raiz quadrada da..",
      "A relação é logarítmica inversa.",
      "A relação ocorre em degraus quânticos de 1 volt por cada 5 nós de acréscimo no.."
    ],
    "answer": "A relação é estritamente linear e diretamente proporcional (E = B * L * v).",
    "explanation": "Na indução eletromagnética governada pela Lei de Faraday (EM Log), a força eletromotriz induzid...",
    "topic": "Relação Linear da Indução na Lei de Faraday"
  },
  {
    "question": "Como a variação de salinidade e temperatura da água afeta a leitura da haste?",
    "options": [
      "Desde que a água possua uma condutividade elétrica mínima suficiente para fechar o..",
      "A transição para água doce paralisa completamente o odômetro.",
      "O sistema exige que o oficial de quarto ajuste manualmente um potenciômetro de..",
      "O aumento da temperatura marinha em 10 °C duplica o valor do hodômetro de distância.."
    ],
    "answer": "Desde que a água possua uma condutividade elétrica mínima suficiente para fechar o..",
    "explanation": "Uma das grandes virtudes do odômetro eletromagnético é a sua imunidade à variação das proprieda...",
    "topic": "Independência de Salinidade e Temperatura na Haste EM"
  },
  {
    "question": "Como o conjunto mecânico garante a segurança da embarcação durante a operação de recolhimento no mar?",
    "options": [
      "Através do emprego de uma válvula de fundo de esferas ou gaveta acoplada ao tubo de..",
      "Por meio de uma carga pirotécnica controlada por rádio que ejeta o sensor para fora..",
      "Através de uma câmara de vácuo hidrostática que suga o sensor automaticamente para o..",
      "Usando um anel inflável pneumático de borracha de pneu que veda o orifício do casco.."
    ],
    "answer": "Através do emprego de uma válvula de fundo de esferas ou gaveta acoplada ao tubo de..",
    "explanation": "A haste retrátil opera dentro de um caixão estanque provido de válvula de passagem plena (sea v...",
    "topic": "Segurança Mecânica e Válvula da Haste Retrátil"
  },
  {
    "question": "Por que a Haste Fixa é construída conforme especificações e flanges da OTAN?",
    "options": [
      "Para garantir padronização, intercambiabilidade de componentes navais de defesa e..",
      "Para permitir que a haste seja rosqueada diretamente no bujão de escoamento do cárter..",
      "Porque o padrão OTAN utiliza exclusivamente plástico polipropileno reciclado,..",
      "Para que o sensor possa operar sem cabo de conexão elétrica, transmitindo os sinais.."
    ],
    "answer": "Para garantir padronização, intercambiabilidade de componentes navais de defesa e..",
    "explanation": "A padronização OTAN (NATO) especifica perfis de furação, flanges, anéis de vedação, materiais n...",
    "topic": "Padronização Militar e Flange da Haste OTAN"
  },
  {
    "question": "Qual fenômeno hidrodinâmico a Haste Barbatana minimiza em alta velocidade?",
    "options": [
      "A cavitação hidrodinâmica, a turbulência excessiva e a formação de bolhas de ar sobre..",
      "A condensação de gelo polar ao redor do flange de bronze durante navegação no Círculo..",
      "A emissão de ecos de sonar indesejados que poderiam ser captados por submarinos..",
      "A vibração magnética do casco que induziria correntes de Foucault na estrutura de.."
    ],
    "answer": "A cavitação hidrodinâmica, a turbulência excessiva e a formação de bolhas de ar sobre..",
    "explanation": "Em velocidades elevadas (acima de 25 nós, como em patrulhas e corvetas), sensores cilíndricos o...",
    "topic": "Prevenção de Cavitação na Haste com Perfil de Barbatana"
  },
  {
    "question": "Em que cenário o Sensor Revés (almofada ao casco) apresenta maior vantagem?",
    "options": [
      "Em navegação em águas rasas, rios com detritos flutuantes e áreas com gelo onde..",
      "Em veleiros oceânicos que necessitam medir simultaneamente a velocidade e a..",
      "Em navios petroleiros estacionados em fundeio para medir a velocidade da correnteza..",
      "Em embarcações fluviais com casco de madeira que não possuem aterramento elétrico em.."
    ],
    "answer": "Em navegação em águas rasas, rios com detritos flutuantes e áreas com gelo onde..",
    "explanation": "O Sensor Revés (almofada ou flush mounted) é montado em um nicho faceado perfeitamente rente à...",
    "topic": "Vantagem Operacional do Sensor Revés (Flush Mounted)"
  },
  {
    "question": "Por que a Haste Fixa possui especificações técnicas e calibrações dedicadas com extrema precisão na faixa de baixas velocidades de 0 a 10 nós?",
    "options": [
      "Porque em baixas velocidades a força eletromotriz induzida é de ínfima magnitude,..",
      "Porque abaixo de 10 nós a água do mar perde sua condutividade elétrica natural e o..",
      "Porque em baixas rotações de hélice a bobina magnética da haste desliga..",
      "Porque o microprocessador Módulo 02 só calcula a média móvel de distância quando o.."
    ],
    "answer": "Porque em baixas velocidades a força eletromotriz induzida é de ínfima magnitude,..",
    "explanation": "A navegação de alta precisão em manobras delicadas de porto, canais estreitos, aproximação de p...",
    "topic": "Alta Precisão da Haste na Faixa Baixa (0 a 10 nós)"
  },
  {
    "question": "Como deve ser constituída a blindagem e a fiação do cabo de interligação entre a Haste no casco do navio e a S.D.T.U. no passadiço?",
    "options": [
      "O cabo dos eletrodos deve ser par trançado e blindado com malha de aterramento..",
      "Pode ser utilizado fio de instalação elétrica comum sem blindagem de cobre, desde que..",
      "Deve ser obrigatoriamente fibra óptica de vidro de 16 núcleos para conduzir a..",
      "A fiação deve ser composta de fios coaxiais abertos com malha exposta para captar o.."
    ],
    "answer": "O cabo dos eletrodos deve ser par trançado e blindado com malha de aterramento..",
    "explanation": "Os eletrodos da haste conduzem sinais na faixa de milivolts a longas distâncias (desde o porão...",
    "topic": "Blindagem e Aterramento da Fiação da Haste"
  },
  {
    "question": "Qual é a finalidade operacional e técnica específica do modo `SIMULATION` (Simulação)?",
    "options": [
      "Permitir que o operador ou técnico gere internamente velocidades artificiais..",
      "Simular uma avaria catastrófica no microprocessador para verificar se a sirene de..",
      "Aumentar a tensão da bobina da haste para 220 Volts por 10 segundos com a finalidade..",
      "Calcular em tempo real a profundidade do oceano baseado na simulação das ondas e.."
    ],
    "answer": "Permitir que o operador ou técnico gere internamente velocidades artificiais..",
    "explanation": "O modo `SIMULATION` (acionado via tecla MODE) desconecta logicamente a leitura da haste submers...",
    "topic": "Modo SIMULATION da Tecla MODE"
  },
  {
    "question": "Qual é o papel da tecla PROBE no painel da S.D.T.U.?",
    "options": [
      "Permitir ao operador selecionar de forma rápida qual dos sensores montados no casco..",
      "Desligar fisicamente a alimentação geral de todos os circuitos eletrônicos da casa de..",
      "Acionar a limpeza hidráulica automática com jatos de água doce sobre os eletrodos da..",
      "Calcular a distância exata em metros entre a proa do navio e a boia de sinalização do.."
    ],
    "answer": "Permitir ao operador selecionar de forma rápida qual dos sensores montados no casco..",
    "explanation": "A tecla PROBE atua na comutação das entradas de sensores no sistema.",
    "topic": "Seleção Multi-Sensor através da Tecla PROBE"
  },
  {
    "question": "Por que a tecla CURVE da S.D.T.U. permite selecionar e ajustar múltiplas curvas de calibração hidrodinâmica na memória do microprocessador?",
    "options": [
      "Para compensar de forma matemática e precisa as não linearidades da Camada Limite..",
      "Para alterar a tonalidade de cor dos LEDs do painel frontal entre verde esmeralda..",
      "Para mudar a escala do hodômetro de distância entre milhas náuticas marinhas e..",
      "Para programar o horário exato em que a S."
    ],
    "answer": "Para compensar de forma matemática e precisa as não linearidades da Camada Limite..",
    "explanation": "A hidrodinâmica ao redor de um casco de navio é complexa: a espessura e velocidade da camada li...",
    "topic": "Compensação de Camada Limite através da Tecla CURVE"
  },
  {
    "question": "Qual é a função estendida do circuito do DIMMER DISPLAY para o ambiente operacional de navegação do navio?",
    "options": [
      "Controlar de forma sincronizada a intensidade luminosa dos LEDs de alarme/status e..",
      "Desligar automaticamente a alimentação do transformador de +30V da haste na água..",
      "Aumentar o volume da sirene de alarme sonoro na mesma proporção em que a iluminação..",
      "Girar o painel frontal da S."
    ],
    "answer": "Controlar de forma sincronizada a intensidade luminosa dos LEDs de alarme/status e..",
    "explanation": "No passadiço de um navio durante a navegação noturna em mar aberto, qualquer fonte de luz inten...",
    "topic": "Preservação da Visão Noturna pelo DIMMER DISPLAY"
  },
  {
    "question": "O que acontece com o registro de milhas se a S.D.T.U. perder energia?",
    "options": [
      "O valor acumulado de distância em milhas é preservado com segurança em memória não..",
      "O hodômetro é zerado automaticamente de volta para `00000.",
      "O mostrador congela o último valor, mas ao religar a S.",
      "A distância acumulada é transferida via rádio para o satélite Inmarsat e apagada.."
    ],
    "answer": "O valor acumulado de distância em milhas é preservado com segurança em memória não..",
    "explanation": "O hodômetro de distância (Distance Display) é o documento eletrônico da totalização da viagem d...",
    "topic": "Retenção de Memória do Hodômetro de Distância"
  },
  {
    "question": "Como são formatadas as resoluções numéricas de Velocidade e Distância?",
    "options": [
      "O display de velocidade indica com resolução em décimos ou centésimos de nó (ex.",
      "O display de velocidade exibe apenas valores inteiros em metros por segundo (ex.",
      "Ambos os mostradores utilizam códigos binários de luz verde e vermelha que devem ser..",
      "A velocidade é exibida na forma de gráfico de barras analógico móvel, e a distância é.."
    ],
    "answer": "O display de velocidade indica com resolução em décimos ou centésimos de nó (ex.",
    "explanation": "Os displays de LED de 7 segmentos de alta visibilidade da S.",
    "topic": "Resolução Decimal dos Displays de Velocidade e Distância"
  },
  {
    "question": "Qual é a verificação física fundamental e prioritária antes do acionamento da chave principal?",
    "options": [
      "Verificar se a haste retrátil foi abaixada e inserida por completo através da válvula..",
      "Inspecionar se a mangueira de ar comprimido da proa está acoplada diretamente aos..",
      "Desparafusar a tampa traseira da caixa de alumínio e injetar spray lubrificante WD-40..",
      "Soltar todas as correntes de segurança da válvula de fundo para que o sensor flutue.."
    ],
    "answer": "Verificar se a haste retrátil foi abaixada e inserida por completo através da válvula..",
    "explanation": "Se a chave da S.D.T.U. for ligada com o sensor recolhido dentro da câmara da válvula de fundo n...",
    "topic": "Verificação Física da Haste Retrátil na Partida"
  },
  {
    "question": "O que ocorre no Módulo 08 durante interrupção súbita da rede AC (115/230V)?",
    "options": [
      "O Módulo 08 comuta automaticamente e sem tempo de interrupção (zero break) para a..",
      "A S.D.T.U. desliga imediatamente todas as saídas repetidoras de passadiço e passa a..",
      "O Módulo 08 dispara um micro-gerador hidráulico acoplado ao cabo da haste para gerar..",
      "O sistema entra em curto deliberado no barramento principal para queimar o fusível de.."
    ],
    "answer": "O Módulo 08 comuta automaticamente e sem tempo de interrupção (zero break) para a..",
    "explanation": "Para garantir a segurança da navegação e não deixar o radar ARPA nem o ECDIS cegos sem dados de...",
    "topic": "Comutação Automática AC/DC no Módulo 08"
  },
  {
    "question": "Como é executado o procedimento da 'Milha Medida' para calibração na S.D.T.U.?",
    "options": [
      "O navio percorre uma distância referenciada exata de 1 milha náutica entre marcos de..",
      "O técnico despeja 1 litro de água salgada calibrada com sal de cozinha em um balde no..",
      "A tripulação estica um cabo de aço de 1 milha náutica preso na popa do navio e reboca..",
      "O navio para completamente os motores ao largo do porto e espera a maré encher por 6.."
    ],
    "answer": "O navio percorre uma distância referenciada exata de 1 milha náutica entre marcos de..",
    "explanation": "A calibração definitiva de um odômetro eletromagnético compensa as perturbações reais do casco...",
    "topic": "Procedimento da Milha Medida na Calibração"
  },
  {
    "question": "Como o Circuito de Teste Integrado (BIT/BITE) informa visualmente ao técnico sobre a localização e o tipo de defeito encontrado em uma placa interna da S.D.T.U.?",
    "options": [
      "Apresentando códigos numéricos ou mensagens de erro de teste específicas nos displays..",
      "Emitindo sinais de fumaça colorida através da grade de ventilação lateral do chassi..",
      "Desligando instantaneamente toda a iluminação do passadiço do navio por 5 segundos..",
      "Imprimindo um relatório em fita de papel térmico de 80 linhas através de uma.."
    ],
    "answer": "Apresentando códigos numéricos ou mensagens de erro de teste específicas nos displays..",
    "explanation": "A inteligência do BIT (Built-In Test) no Odômetro AGI-LOG foi projetada para que o oficial de q...",
    "topic": "Indicação de Códigos e LEDs de Erro pelo BIT"
  },
  {
    "question": "O que caracteriza a Manutenção em Nível Baixo executada a bordo?",
    "options": [
      "Acionar o autoteste BIT pelo teclado frontal, observar as indicações dos LEDs e..",
      "Desconectar o cabo do sensor de quilha e medir com um megômetro de 5.",
      "Retirar os transistores de potência e amplificadores operacionais do Módulo 04 com..",
      "Desmontar o transformador toroidal do Módulo 08 e rebobinar o enrolamento secundário.."
    ],
    "answer": "Acionar o autoteste BIT pelo teclado frontal, observar as indicações dos LEDs e..",
    "explanation": "A Manutenção por Diagnóstico em Nível Baixo é o primeiro escalão de suporte técnico naval.",
    "topic": "Ações da Manutenção em Nível Baixo (Tripulação)"
  },
  {
    "question": "Que equipamento especializado é usado na Manutenção por Diagnóstico em Nível Alto?",
    "options": [
      "Um Simulador de Haste / Caixa de Teste de Milivolts, que injeta tensões diferenciais..",
      "Um gerador de micro-ondas de 10 GHz conectado diretamente aos terminais do Módulo 08..",
      "Uma bateria automotiva de 12V e 60 Amperes conectada nos terminais dos eletrodos para..",
      "Um frequencímetro óptico a laser apontado para os mostradores frontais de LED para.."
    ],
    "answer": "Um Simulador de Haste / Caixa de Teste de Milivolts, que injeta tensões diferenciais..",
    "explanation": "Na Manutenção em Nível Alto, técnicos especializados ou equipes de base utilizam o Simulador de...",
    "topic": "Uso do Simulador de Haste em Nível Alto"
  },
  {
    "question": "Qual o destino do cartão avariado após substituição a bordo?",
    "options": [
      "Reparo na oficina de terra e retorno ao estoque.",
      "Descarte no mar ou incineração dos componentes.",
      "Banho em ácido por 24 horas e banho a ouro.",
      "Soldagem na caixa principal como filtro de harmônicas."
    ],
    "answer": "Reparo na oficina de terra e retorno ao estoque.",
    "explanation": "O ciclo de vida logístico e de manutenção naval do AGI-LOG preserva os valiosos cartões modulares.",
    "topic": "Reparo a Nível de Componente na Oficina de Terra"
  },
  {
    "question": "Como a CPU utiliza os dados do Módulo 01 (Cartão ID) na inicialização?",
    "options": [
      "Informa modelo, calibração e opções, adaptando o software automaticamente.",
      "Injeta 115V nas linhas de endereço para forçar clock de 100 MHz.",
      "Atua como cartão magnético liberando teclado por senha.",
      "O Módulo 01 desliga fisicamente o barramento de dados do backplane até que o sensor.."
    ],
    "answer": "Informa modelo, calibração e opções, adaptando o software automaticamente.",
    "explanation": "O Módulo 01 (ID Card) funciona como a 'carteira de identidade' do odômetro no navio.",
    "topic": "Função de Configuração do Módulo 01 (ID Card)"
  },
  {
    "question": "Que circuito de segurança de hardware é vital no Módulo 02 para prevenir travamentos de software no mar?",
    "options": [
      "O circuito temporizador 'Watchdog Timer' (Cão de Guarda) em conjunto com o cristal..",
      "Um relé térmico bimetálico de 100 Amperes que desliga a chave principal do passadiço..",
      "Um circuito receptor de rádio AM/FM que sintoniza a frequência horária do..",
      "Um ventilador mecânico acoplado ao pino de reset que sopra ar frio sobre o chip da.."
    ],
    "answer": "O circuito temporizador 'Watchdog Timer' (Cão de Guarda) em conjunto com o cristal..",
    "explanation": "Em ambientes navais críticos, surtos eletromagnéticos de radares ou relampejos podem ocasionalm...",
    "topic": "Watchdog Timer e Segurança do Módulo 02"
  },
  {
    "question": "Por que a Memória EPROM do Módulo 02 é ideal para armazenar curvas e SO?",
    "options": [
      "Porque retém o programa de forma permanente, estável e não volátil por anos sem..",
      "Porque a memória EPROM é líquida e se autodestrói instantaneamente caso um navio..",
      "Porque a EPROM opera com tensões alternadas de 115 VAC diretamente em seus pinos de..",
      "Porque a velocidade de leitura da EPROM é 1000 vezes mais rápida que a de uma memória.."
    ],
    "answer": "Porque retém o programa de forma permanente, estável e não volátil por anos sem..",
    "explanation": "A EPROM (Erasable Programmable Read-Only Memory) garante que as rotinas complexas de cálculo da...",
    "topic": "Retenção Não Volátil na EPROM do Módulo 02"
  },
  {
    "question": "Como o Módulo 02 protege a RAM e milhas acumuladas na desenergização?",
    "options": [
      "Através da utilização de memórias RAM estáticas de baixíssimo consumo (CMOS RAM)..",
      "Gravando todos os bits da RAM em um disco rígido magnético de pratos giratórios de..",
      "Imprimindo o conteúdo da memória RAM em um cartão perfurado que deve ser..",
      "Transferindo a carga da RAM para as bobinas do motor de passo do repetidor analógico.."
    ],
    "answer": "Através da utilização de memórias RAM estáticas de baixíssimo consumo (CMOS RAM)..",
    "explanation": "Enquanto a EPROM guarda o programa fixo, a RAM armazena as variáveis que mudam a cada segundo,...",
    "topic": "Proteção com Bateria de Backup na RAM do Módulo 02"
  },
  {
    "question": "Como o Módulo 03 gerencia a leitura do teclado evitando falsos contatos?",
    "options": [
      "Realiza a varredura multiplexada dos botões e aplica circuitos ou rotinas de filtro..",
      "Aplica uma tensão contínua de 115 Volts nos botões do painel para que a centelha..",
      "Desliga o microprocessador principal por 5 segundos a cada toque de tecla para que a..",
      "Utiliza válvulas de ar pneumáticas acopladas atrás de cada tecla para enviar pulsos.."
    ],
    "answer": "Realiza a varredura multiplexada dos botões e aplica circuitos ou rotinas de filtro..",
    "explanation": "Teclas mecânicas geram ruídos eletromecânicos intensos de fechamento (bouncing) durante alguns...",
    "topic": "Multiplexação e Debouncing no Módulo 03"
  },
  {
    "question": "Que circuitos analógicos especializados estão presentes no Módulo 04 (Conversor A/D) antes da digitalização?",
    "options": [
      "Pré-amplificadores de alta impedância, filtros e circuitos CMRR.",
      "Um transdutor piezoelétrico ultrassônico que converte a tensão DC em ondas sonoras..",
      "Um transformador de alta tensão que eleva os milivolts da água para 10.",
      "Um relé eletromagnético que vibra a 400 Hz para curtocircuitar os eletrodos com o.."
    ],
    "answer": "Pré-amplificadores de alta impedância, filtros e circuitos CMRR.",
    "explanation": "A conversão Analógico-Digital no Módulo 04 é uma obra de engenharia de precisão.",
    "topic": "Pré-Amplificação e Rejeição de Ruído no Módulo 04 (A/D)"
  },
  {
    "question": "Por que as saídas analógicas dos Módulos 05 e 06 possuem isolação galvânica?",
    "options": [
      "Evitar loops de aterramento e proteção contra surtos.",
      "Para que as saídas analógicas possam ser ligadas diretamente em rede elétrica AC de..",
      "Porque a isolação galvânica converte as correntes analógicas de 4-20 mA em feixes de..",
      "Para impedir que o calor gerado pelos conversores D/A aqueça a bateria do.."
    ],
    "answer": "Evitar loops de aterramento e proteção contra surtos.",
    "explanation": "Em um navio, a consola do radar ARPA ou do ECDIS pode estar aterrada em um ponto do casco com p...",
    "topic": "Isolação Galvânica das Saídas D/A (Módulos 05 e 06)"
  },
  {
    "question": "Que contatos de relé de segurança fundamentais o Módulo 07 disponibiliza?",
    "options": [
      "Contatos secos de relé dedicados ao Alarme de Falha do Sistema e, configuravelmente,..",
      "Contatos de potência de 100 Amperes para acionar automaticamente as bombas de porão e..",
      "Relés de alta frequência que conectam a antena parabólica de TV por satélite da..",
      "Contatos que curtocircuitam as baterias de emergência de 24V com o chassi do navio.."
    ],
    "answer": "Contatos secos de relé dedicados ao Alarme de Falha do Sistema e, configuravelmente,..",
    "explanation": "O Módulo 07 (Saída Auxiliar / Pulsada) é a grande interface de saídas discretas do AGI-LOG.",
    "topic": "Contatos de Relé de Alarme no Módulo 07"
  },
  {
    "question": "Que sintomas técnicos em componentes devem ser verificados de imediato com osciloscópio e multímetro?",
    "options": [
      "Verificar se as tensões reguladas estão rigorosamente dentro da tolerância, se não há..",
      "Inspecionar se os diodos emissores de luz azul estão acesos com brilho máximo de 1000..",
      "Verificar se o cabo principal de 115 VAC está soldado diretamente na cápsula de metal..",
      "Medir a resistência entre o barramento de +5V e o terra com a S."
    ],
    "answer": "Verificar se as tensões reguladas estão rigorosamente dentro da tolerância, se não há..",
    "explanation": "A maioria das falhas intermitentes e comportamentos erráticos no microprocessador (Módulo 02) o...",
    "topic": "Inspeção de Ripple e Tensão no Módulo 08 (Fonte)"
  },
  {
    "question": "Qual o formato padronizado das sentenças NMEA 0183 emitidas em RS-422?",
    "options": [
      "Sentenças seriais ASCII NMEA ($VDVHW e $VDVLW).",
      "Arquivos binários compactados no formato `.",
      "Pulsos analógicos de áudio em código Morse internacional com tons de 1.",
      "Sentenças de radar meteorológico com prefixo `$WXRAD` que indicam a temperatura da.."
    ],
    "answer": "Sentenças seriais ASCII NMEA ($VDVHW e $VDVLW).",
    "explanation": "A integração digital do passadiço (Integrated Bridge System - IBS) depende do protocolo NMEA 01...",
    "topic": "Sentenças NMEA 0183 ($VDVHW / $VDVLW) nos Módulos 09 e 10"
  },
  {
    "question": "Como funciona a saída 'Passo a Passo' dos Módulos 09, 10 ou 11?",
    "options": [
      "Sequências bifásicas/trifásicas para motor de passo.",
      "O módulo emite um jato de ar pneumático de 10 PSI em um tubo flexível que sopra..",
      "O módulo gira um cabo mecânico de aço de 50 metros de comprimento por meio de um..",
      "O módulo aquece dois fios bimetálicos dentro do mostrador repetidor até que a.."
    ],
    "answer": "Sequências bifásicas/trifásicas para motor de passo.",
    "explanation": "Repetidores analógicos tradicionais (com mostrador de ponteiro e hodômetro mecânico de roletes...",
    "topic": "Funcionamento da Saída Sincro/Passo (Step-by-Step)"
  },
  {
    "question": "Por que posições expansíveis para Módulos 11 e 12 são estrategicamente vantajosas?",
    "options": [
      "Expansão modular plug-and-play e customização com interfaces.",
      "Porque permite que a tripulação guarde cartas de baralho e ferramentas manuais dentro..",
      "Porque os slots 11 e 12 contêm aquecedores elétricos de 500 Volts que mantêm a..",
      "Porque, se os módulos 01 a 10 forem removidos, o navio pode continuar navegando.."
    ],
    "answer": "Expansão modular plug-and-play e customização com interfaces.",
    "explanation": "A filosofia de arquitetura aberta e modular da S.",
    "topic": "Modularidade Estratégica e Expansão (Módulos 11 e 12)"
  },
  {
    "question": "Qual é a principal função (SDTU)?",
    "options": [
      "Medir velocidade (STW) e distância, transmitindo para repetidoras.",
      "Medir a profundidade do fundo marinho utilizando pulsos acústicos de eco-sonda e..",
      "Calcular a posição global por satélite e transmitir as coordenadas geográficas para o..",
      "Monitorar a temperatura e a salinidade da água do mar em tempo real para controle do.."
    ],
    "answer": "Medir velocidade (STW) e distância, transmitindo para repetidoras.",
    "explanation": "A função principal da SDTU (Unidade Terminal de Distribuição de Sinais) do Odômetro AGI-LOG é m...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que significa a sigla \"BITE\" amplamente utilizada no AGI-LOG?",
    "options": [
      "Significa Circuito de Teste Integrado.",
      "Significa Barramento de Interface de Transmissão de Emergência.",
      "Significa Bloco de Isolamento Térmico e Elétrico.",
      "Significa Bateria Interna de Tempo de Espera."
    ],
    "answer": "Significa Circuito de Teste Integrado.",
    "explanation": "A sigla BITE refere-se a Built-In Test Equipment (Equipamento/Circuito de Teste Integrado), um...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O manual prevê quatro tipos físicos de sensores (hastes) para o sistema. Quais são eles?",
    "options": [
      "Haste retrátil, Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés.",
      "Haste rotativa de palhetas, Sensor ultrassônico de quilha, Sensor óptico de laser e..",
      "Haste magnética de tubo de Pitot, Sensor piezoresistivo de proa, Sensor giroscópico..",
      "Haste telescópica hidráulica, Sensor de pressão estática, Sensor acústico de efeito.."
    ],
    "answer": "Haste retrátil, Sensor fixo estilo OTAN, Sensor de perfil de barbatana e Sensor Revés.",
    "explanation": "O sistema AGI-LOG suporta quatro configurações de transdutores (sensores/hastes) adaptadas às n...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é o princípio eletromagnético físico usado para ler a velocidade da água?",
    "options": [
      "A bobina no sensor gera um campo magnético, e a água corta essas linhas de fluxo.",
      "O sensor emite ondas sonoras de alta frequência que se refletem nas partículas em..",
      "A passagem da água gira uma pequena turbina magnética interna na haste, cuja..",
      "A água do mar altera a capacitância de dois eletrodos de platina expostos na quilha,.."
    ],
    "answer": "A bobina no sensor gera um campo magnético, e a água corta essas linhas de fluxo.",
    "explanation": "O odômetro eletromagnético baseia-se na Lei da Indução de Faraday: uma bobina no sensor cria um...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é o consumo elétrico e a faixa de alimentação tolerada pela SDTU do AGI-LOG?",
    "options": [
      "Menos de 170 VA em 115/230V AC (50/60Hz).",
      "Consome 500 Watts e exige alimentação trifásica de 380V ou 440V em 60Hz fixos.",
      "Consome apenas 24 Watts e é alimentado diretamente por baterias de corrente contínua..",
      "Consome exatamente 1200 VA e necessita de inversor dedicado de 115V com frequência.."
    ],
    "answer": "Menos de 170 VA em 115/230V AC (50/60Hz).",
    "explanation": "A SDTU apresenta alta eficiência e versatilidade de instalação na rede de bordo, consumindo men...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quanto tempo exato a eletrônica exige após ligada para estabilizar e exibir uma velocidade precisa?",
    "options": [
      "O tempo necessário para se obter uma velocidade estável a partir da alimentação do..",
      "O sistema requer no mínimo 15 minutos de pré-aquecimento térmico dos cartões..",
      "A exibição da velocidade é instantânea (< 1 segundo) assim que a chave principal..",
      "O microprocessador exige exatamente 5 minutos de varredura BITE de inicialização.."
    ],
    "answer": "O tempo necessário para se obter uma velocidade estável a partir da alimentação do..",
    "explanation": "Após a energização (chave ON/OFF ligada), os circuitos de alimentação, processamento analógico...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é a função central do Cartão Microprocessador (Módulo 2)?",
    "options": [
      "Computação central, calibração em RAM e rotinas do BITE.",
      "É responsável exclusivamente por retificar a tensão de rede e gerar os barramentos de..",
      "Atua apenas como amplificador de potência operacional para impulsionar a bobina de..",
      "Converte diretamente os sinais analógicos do mar em sinais síncronos mecânicos de.."
    ],
    "answer": "Computação central, calibração em RAM e rotinas do BITE.",
    "explanation": "O Módulo 2 (Cartão Microprocessador) é a unidade de processamento central da SDTU.",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que o Cartão Analógico (Módulo 4) faz com o sinal sujo oriundo do mar?",
    "options": [
      "Amplificação e remoção de ruídos de quadratura por multiplicação.",
      "Ele digitaliza diretamente o sinal bruto utilizando um conversor flash de 32 bits e..",
      "Ele retifica o sinal alternado em corrente contínua pura através de pontes de diodos..",
      "Ele inverte a polaridade da tensão induzida a cada 5 segundos para desmagnetizar os.."
    ],
    "answer": "Amplificação e remoção de ruídos de quadratura por multiplicação.",
    "explanation": "O micro-sinal vindo dos eletrodos contém ruídos de quadratura e interferências da água.",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é o papel do Cartão de Interface (Módulo 1)?",
    "options": [
      "Ativação dos displays frontais e saída serial RS-422.",
      "Ele atua como transformador de isolamento galvanizado recebendo os fios brutos da..",
      "Ele controla exclusivamente a excitação de corrente pulsada em 57V enviada ao relé de..",
      "Ele aloja as baterias de chumbo-ácido de backup que mantêm a contagem de milhas em.."
    ],
    "answer": "Ativação dos displays frontais e saída serial RS-422.",
    "explanation": "O Módulo 1 (Cartão de Interface) faz a ponte entre o processamento central e o mundo externo di...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que os Cartões de Saída Síncro (Módulos 5 e 6) geram?",
    "options": [
      "Conversores digital-síncro para saídas síncronas mecânicas.",
      "Eles geram tensões contínuas variáveis de 0 a 10 Volts e pulsos luminosos em fibra..",
      "Eles emitem sinais de áudio em 400 Hz para os alto-falantes do passadiço em caso de..",
      "Eles produzem alimentação trifásica pura de 380V para alimentar os motores elétricos.."
    ],
    "answer": "Conversores digital-síncro para saídas síncronas mecânicas.",
    "explanation": "Os Módulos 5 e 6 são placas dedicadas a sistemas que necessitam de dados de velocidade no forma...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual a versatilidade do Cartão de Saída Auxiliar (Módulo 7)?",
    "options": [
      "Ele fornece saídas do tipo potenciômetro simulado e disponibiliza quatro contatos de..",
      "Ele converte sinais de satélite GPS em coordenadas cartesianas e injeta pulsos de..",
      "Ele atua como amplificador de reserva que assume a excitação da bobina caso o relé..",
      "Ele gera exclusivamente uma interface de rede Ethernet Gigabit com protocolo TCP/IP.."
    ],
    "answer": "Ele fornece saídas do tipo potenciômetro simulado e disponibiliza quatro contatos de..",
    "explanation": "O Módulo 7 confere grande flexibilidade de interfaceamento à SDTU, entregando saídas analógicas...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quais os componentes contidos na Fonte de Alimentação (Módulo 8)?",
    "options": [
      "Capacitores, retificadores, reguladores e chave principal ON/OFF.",
      "Aloja microprocessadores de backup, chips de memória flash não volátil e o conector..",
      "Aloja o transformador isolador de entrada de sinal do mar T-1, os relés RL-1 e RL-2 e..",
      "Aloja conversores analógico-síncros, bobinas de choque de rádio frequência e os.."
    ],
    "answer": "Capacitores, retificadores, reguladores e chave principal ON/OFF.",
    "explanation": "O Módulo 8 é a Fonte de Alimentação da SDTU.",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual a função tática do Terminal de Calibração (Módulo 12)?",
    "options": [
      "Inserir tabelas de calibração das provas de mar na memória.",
      "Acionar remotamente a descida e a subida hidráulica da haste retrátil no fundo do..",
      "Gravar as comunicações de voz da ponte de comando e armazenar o histórico de..",
      "Gerar uma carga fictícia de teste (dummy load) para dissipar a energia da bobina de.."
    ],
    "answer": "Inserir tabelas de calibração das provas de mar na memória.",
    "explanation": "O Módulo 12 (Terminal de Calibração) é uma interface tática e de manutenção que permite a digit...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Para que serve o Cartão de Display (Módulo 10)?",
    "options": [
      "Circuitos dos LEDs de NÓS/MILHAS e microchave do BITE (SW1).",
      "Ele converte sinais analógicos de tensão do mar em pulsos de fibra óptica e controla..",
      "Ele processa exclusivamente os sinais seriais NMEA 0183 recebidos de outros radares..",
      "Ele gera as ondas quadradas de 57V para excitação dos eletrodos do transdutor.."
    ],
    "answer": "Circuitos dos LEDs de NÓS/MILHAS e microchave do BITE (SW1).",
    "explanation": "O Módulo 10 é a placa de circuito do painel frontal de visualização.",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é a finalidade elétrica do Relé de Seleção RL-1 localizado sob a placa mãe?",
    "options": [
      "Roteia 57V para excitar a bobina da haste selecionada.",
      "Ele desconecta automaticamente a alimentação de 115V da fonte Módulo 8 em caso de..",
      "Ele comuta as linhas seriais RS-422 entre o computador principal de armas e o..",
      "Ele aciona os alarmes sonoros da ponte de comando sempre que a velocidade do navio.."
    ],
    "answer": "Roteia 57V para excitar a bobina da haste selecionada.",
    "explanation": "O Relé RL-1, montado no chassi inferior sob a placa-mãe (motherboard), tem a função chave de co...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que o Relé de Transferência RL-2 faz com a escuta do mar?",
    "options": [
      "Recebe o micro-sinal e o direciona ao transformador isolador (T-1).",
      "Ele converte o micro-sinal analógico em pulsos digitais PWM antes de injetá-los no..",
      "Ele aterra instantaneamente os eletrodos da haste caso detecte a aproximação de raios..",
      "Ele mistura o sinal captado pela água com as sentenças NMEA do GPS para calcular a.."
    ],
    "answer": "Recebe o micro-sinal e o direciona ao transformador isolador (T-1).",
    "explanation": "O Relé de Transferência RL-2 trabalha em conjunto com a seleção de haste: ele recebe os micro-s...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O sinal de recepção passa pelo Transformador T-1. Quais são as suas duas funções de blindagem?",
    "options": [
      "Isolamento galvânico entre água e SDTU e cancelamento de ruídos.",
      "Elevar a tensão do micro-sinal de 200 μV para 115V AC e retificar a corrente para..",
      "Inverter a fase do sinal de água em 180 graus e gerar um sinal de clock estático de..",
      "Medir a impedância térmica dos cabos do transdutor e desconectar os eletrodos caso a.."
    ],
    "answer": "Isolamento galvânico entre água e SDTU e cancelamento de ruídos.",
    "explanation": "O Transformador T-1 desempenha um papel duplo e vital no estágio de entrada: 1) Oferece total i...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Como a SDTU calcula a \"Velocidade Média Verdadeira\" (VMV) para exibir no display?",
    "options": [
      "Ela capta a velocidade analógica (VMH) e compara sua amplitude com uma curva de..",
      "Ela multiplica a rotação mecânica da haste pela velocidade do vento medida no..",
      "Ela faz uma média aritmética das últimas 10 milhas percorridas por coordenadas GPS e..",
      "Ela adiciona uma constante fixa de +1,5 nó sobre a leitura bruta dos eletrodos para.."
    ],
    "answer": "Ela capta a velocidade analógica (VMH) e compara sua amplitude com uma curva de..",
    "explanation": "A tensão induzida na haste fornece uma medição bruta hidrodinâmica chamada VMH (Velocidade Médi...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Na ponte do Cartão Analógico, o erro é convertido num sinal chamado HI/LO. O que é isso?",
    "options": [
      "Onda quadrada cuja proporção sinal/zero ajusta a estimativa.",
      "É uma tensão analógica bipolada que oscila entre -12V (velocidade ré) e +12V para..",
      "É um pulso óptico infravermelho que pisca em alta frequência (HI) no modo normal e em..",
      "É um código serial de 8 bits em que HI representa a parte inteira dos nós e LO.."
    ],
    "answer": "Onda quadrada cuja proporção sinal/zero ajusta a estimativa.",
    "explanation": "No circuito de malha fechada do Cartão Analógico, o erro entre o sinal do transdutor e a tensão...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quais são as faixas (magnitude) dos micro-sinais captados nos sensores pela SDTU?",
    "options": [
      "Saída alta: 275 a 425 μV/nó; Saída baixa: 80 a 200 μV/nó.",
      "Todos os sensores geram tensões padronizadas na faixa de 1 a 5 Volts por cada nó de..",
      "Os sensores de saída alta entregam de 10 a 20 mV/nó, e os de saída baixa mandam de 1..",
      "Os sensores operam com sinais de corrente pulsada entre 4 mA e 20 mA.."
    ],
    "answer": "Saída alta: 275 a 425 μV/nó; Saída baixa: 80 a 200 μV/nó.",
    "explanation": "Os eletrodos do odômetro eletromagnético induzem tensões extremamente minúsculas (microvolts).",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O visor (LCD) principal impõe limites físicos para a leitura de NÓS e MILHAS. Quais são?",
    "options": [
      "NÓS: 4 dígitos (-25 a +60); MILHAS: 7 dígitos (0 a 9999,99).",
      "O display de NÓS exibe 3 dígitos variando de 0 a 100 nós, enquanto o de MILHAS exibe..",
      "O display de NÓS exibe 5 dígitos variando de -50 a +99 nós, enquanto o de MILHAS..",
      "O display de NÓS exibe 2 dígitos para números inteiros de 0 a 50 nós, e o de MILHAS.."
    ],
    "answer": "NÓS: 4 dígitos (-25 a +60); MILHAS: 7 dígitos (0 a 9999,99).",
    "explanation": "A matriz frontal de visualização dispõe de 4 dígitos para velocidade em NÓS, com capacidade de...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Para que serve e o que ilumina a Tecla MODE no teclado do painel?",
    "options": [
      "Alterna o sistema entre a operação normal de \"haste\" e o modo de simulação, acendendo..",
      "Alterna entre a exibição da velocidade em nós náuticos e quilômetros por hora (km/h),..",
      "Aciona o desligamento temporário dos alarmes sonoros do passadiço e ilumina o LED..",
      "Muda a taxa de transmissão serial RS-422 entre 4800 e 38400 bps, piscando o LED de.."
    ],
    "answer": "Alterna o sistema entre a operação normal de \"haste\" e o modo de simulação, acendendo..",
    "explanation": "A tecla emborrachada MODE do painel frontal alterna o modo fundamental de trabalho do odômetro...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é a utilidade operacional da Tecla CURVE (Curva)?",
    "options": [
      "Alterna entre curvas de calibração C1 e C2 na memória.",
      "Permite suavizar a leitura de velocidade no visor aplicando um filtro exponencial..",
      "Serve para arquivar a velocidade instantânea em um gráfico de histórico de curva de..",
      "Aciona a recalibração automática de ganho analógico dos eletrodos quando o navio.."
    ],
    "answer": "Alterna entre curvas de calibração C1 e C2 na memória.",
    "explanation": "O sistema AGI-LOG permite armazenar em memória duas curvas ou tabelas de calibração distintas p...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Se o usuário segurar o botão \"SIM UP\" na faina de testes, o que a placa processa?",
    "options": [
      "A velocidade simulada dispara em crescimento contínuo enquanto o botão é pressionado.",
      "O sistema aumenta gradativamente o ganho de amplificação em milivolts até que o..",
      "A contagem das milhas navegadas avança no ritmo acelerado de 10 milhas por segundo..",
      "A tensão de alimentação de +21V sobe em degraus de 1V até o limite de teste de.."
    ],
    "answer": "A velocidade simulada dispara em crescimento contínuo enquanto o botão é pressionado.",
    "explanation": "No modo de simulação (SIM), pressionar e manter pressionado o botão emborrachado \"SIM UP\" instr...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Como o painel sinaliza luminosamente ao marinheiro que a SDTU está rodando de forma perigosa no \"modo descalibrado\"?",
    "options": [
      "O indicador numérico de curva apropriado (C1 ou C2) começará a piscar para emitir um..",
      "O display principal exibe a mensagem de texto \"CAL ERR\" piscando em cor vermelha..",
      "Todos os cinco botões do teclado emborrachado acendem e apagam simultaneamente em..",
      "O visor de MILHAS NAVEGADAS é zerado automaticamente e o LED verde da chave ON/OFF.."
    ],
    "answer": "O indicador numérico de curva apropriado (C1 ou C2) começará a piscar para emitir um..",
    "explanation": "Se a memória não possui dados de calibração válidos ou se o odômetro está operando sem a devida...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O controle DIMMER age sobre a claridade de quais partes na carcaça?",
    "options": [
      "Ele atua ditando o brilho analógico da matriz dos displays e também das cinco teclas..",
      "Ele regula exclusivamente a intensidade das luzes piloto dos repetidores mecânicos..",
      "Ele ajusta a tensão de iluminação de fundo do display LCD secundário localizado..",
      "Ele controla a corrente dos quatro LEDs de diagnóstico de tensão montados na face do.."
    ],
    "answer": "Ele atua ditando o brilho analógico da matriz dos displays e também das cinco teclas..",
    "explanation": "O potenciômetro ou controle DIMMER frontal da carcaça ajusta de forma suave e analógica a inten...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que acontece visualmente no painel quando ocorre o BITE Nível Restrito (com a tampa de metal aparafusada e fechada)?",
    "options": [
      "Displays piscam a 0,5 Hz indicando anomalia interna à CPU.",
      "Os displays apagam por completo e um alarme sonoro contínuo de 85 dB soa no painel..",
      "A velocidade é congelada no valor de 0,00 nó e as repetidoras do passadiço recebem..",
      "O indicador amarelo de \"SIM\" pisca 3 vezes e o sistema reinicia automaticamente em um.."
    ],
    "answer": "Displays piscam a 0,5 Hz indicando anomalia interna à CPU.",
    "explanation": "Durante a operação normal (tampa de metal fechada e aparafusada), a CPU executa continuamente o...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Como o técnico engatilha o nível supremo de diagnóstico (BITE Completo)?",
    "options": [
      "Retirando os quatro parafusos e soltando a tampa dianteira para fora.",
      "Pressionando simultaneamente as teclas MODE e CURVE por 10 segundos até que os..",
      "Conectando um cabo de serviço RS-232 no Módulo 1 e enviando o comando de terminal..",
      "Desligando e ligando a chave mecânica do Módulo 8 por três vezes consecutivas dentro.."
    ],
    "answer": "Retirando os quatro parafusos e soltando a tampa dianteira para fora.",
    "explanation": "O BITE Completo (autoteste profundo do hardware) é engatilhado por intervenção mecânica: quando...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que ocorre com os repasses de dados da SDTU ao navio enquanto a tampa está aberta e o BITE Completo roda?",
    "options": [
      "Funções operacionais interrompidas e saídas inválidas.",
      "A SDTU continua enviando os últimos dados de velocidade salvos na memória RAM sem..",
      "As saídas seriais RS-422 duplicam a taxa de transmissão para reportar os códigos de..",
      "Os módulos síncros assumem uma velocidade fixa de segurança de 15 nós vante para.."
    ],
    "answer": "Funções operacionais interrompidas e saídas inválidas.",
    "explanation": "Quando a tampa está aberta e o BITE Completo entra em execução, a SDTU sai do modo de navegação...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O diagnóstico BITE Completo terminou. Onde o maquinista lê a causa exata do defeito?",
    "options": [
      "Os displays cravam códigos numéricos de falha.",
      "Em uma fita de papel impressa por um micro-registrador térmico embutido na parte..",
      "Apenas através da contagem do número de piscadas do LED verde de status montado no..",
      "Por meio da conexão obrigatória de um notebook de serviço executando o software.."
    ],
    "answer": "Os displays cravam códigos numéricos de falha.",
    "explanation": "Ao finalizar os testes do BITE Completo, a SDTU apresenta o diagnóstico diretamente nos display...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Se os LEDs de 7 segmentos do vidro principal estilhaçarem ou queimarem, o navio ficará cego para manutenções de BITE?",
    "options": [
      "Não; o Módulo 12 funciona organicamente como um display escravo paralelo (redundante)..",
      "Sim; sem o painel principal de 7 segmentos é impossível ler qualquer código de erro,..",
      "Não; os códigos de falha passam a ser transmitidos em áudio codificado em Morse..",
      "Sim; a queima dos LEDs interrompe o barramento multiplexado do display, paralisando.."
    ],
    "answer": "Não; o Módulo 12 funciona organicamente como um display escravo paralelo (redundante)..",
    "explanation": "A arquitetura do AGI-LOG prevê redundância para missões críticas: caso a matriz frontal de LEDs...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual ordem o soldado deve atacar?",
    "options": [
      "Priorizar o código do display superior (NÓS) de maior probabilidade.",
      "Ele deve trocar primeiro os módulos indicados no painel inferior (MILHAS) porque eles..",
      "Ele deve substituir o Módulo 2 (CPU) imediatamente por ser o responsável pelo..",
      "Ele deve retirar todos os três módulos avariados simultaneamente e substituí-los por.."
    ],
    "answer": "Priorizar o código do display superior (NÓS) de maior probabilidade.",
    "explanation": "A metodologia de reparo do BITE estabelece uma hierarquia clara de probabilidade de falha: quan...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que acontece no sistema AGI-LOG ao se atarraxar novamente a tampa dianteira após os reparos?",
    "options": [
      "Apertar SW1 para restabelecer a operação normal dos módulos saudáveis.",
      "O sistema entra em um modo de espera (standby) de 15 minutos até que a tripulação..",
      "O microprocessador apaga automaticamente todos os dados de calibração do mar e exige..",
      "A fonte de alimentação executa uma descarga de alta tensão nos capacitores para.."
    ],
    "answer": "Apertar SW1 para restabelecer a operação normal dos módulos saudáveis.",
    "explanation": "Quando os parafusos da tampa frontal são reapertados, a estrutura de metal aciona fisicamente a...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Em qual bit/padrão industrial o Módulo 1 (Cartão Interface) digitaliza o sinal de velocidade para conversar com radares e computadores modernos?",
    "options": [
      "Caracteres ASCII em transmissão serial balanceada RS-422.",
      "Ele emprega transmissão paralela de 16 bits em padrão TTL não balanceado através de..",
      "Ele modula o sinal em protocolo CAN Bus industrial a uma velocidade fixa de 1 Mbps..",
      "Ele utiliza sinais de corrente analógica na faixa industrial 4-20 mA modulados com.."
    ],
    "answer": "Caracteres ASCII em transmissão serial balanceada RS-422.",
    "explanation": "Para integração com sistemas modernos de passadiço, computadores de bordo e radares, o Módulo 1...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "As chaves/relés do Módulo 7 (Cartão Auxiliar) podem acionar a cadência mecânica da \"Distância\". Quais são os cravos de pulsos disponíveis para os cabos (PPM)?",
    "options": [
      "Pulsos isolados na cadência de 100, 200 ou 400 PPM.",
      "Podem ser configuradas para emitir pulsos na cadência fixa e única de 1000, 2000 ou..",
      "Fornecem apenas 1 pulso por nó de velocidade (1 PPN), independentemente da distância..",
      "Operam com cadências de 10, 25 e 50 pulsos por minuto (PPM) sincronizadas com o.."
    ],
    "answer": "Pulsos isolados na cadência de 100, 200 ou 400 PPM.",
    "explanation": "O Módulo 7 (Cartão Auxiliar) possui saídas de relé de estado sólido que podem ser configuradas/...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quais alarmes independentes esses quatro relés do Módulo 7 podem sinalizar aos marinheiros da fragata?",
    "options": [
      "Alarmes de velocidade alta/baixa, Falha SDTU ou Modo Simulado.",
      "Eles podem alertar sobre alta temperatura do mar, presença de gelo no casco, bateria..",
      "Sinalizam apenas perda de sincronismo satelital, falha no girocompasso, desarme da..",
      "Indicam exclusivamente desvio de rumo, inclinação excessiva de balanço, sobrecarga da.."
    ],
    "answer": "Alarmes de velocidade alta/baixa, Falha SDTU ou Modo Simulado.",
    "explanation": "Os quatro relés de estado sólido do Módulo 7 são canais versáteis de alarme e status operacional.",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O painel AGI-LOG emite um Relé contínuo de Falha de Alimentação. O que esse relé monitora nas placas base?",
    "options": [
      "Contato isolado (1A) atestando presença do barramento de +5 VDC.",
      "Monitora a presença da tensão alternada de entrada (115V/230V AC) no disjuntor de..",
      "Verifica a corrente de excitação de 57V AC da bobina do sensor para garantir que a..",
      "Controla a carga da bateria de 12V DC da luz de emergência do painel do terminal de.."
    ],
    "answer": "Contato isolado (1A) atestando presença do barramento de +5 VDC.",
    "explanation": "O relé de Falha de Alimentação (Power Failure Relay) possui contatos isolados tolerando 1A e é...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual a voltagem DC produzida pela PSU (Módulo 8) no pino exclusivo e restritivo apenas para \"exigências especiais/opcionais\" das marinhas?",
    "options": [
      "O Módulo 8 possui uma via cravada de +21 Vdc deixada acessível no bloco terminal..",
      "Possui uma saída estabilizada de +48 Vdc destinada ao carregamento direto de..",
      "Fornece um terminal com saída regulada de -24 Vdc utilizada para a proteção catódica..",
      "Disponibiliza uma linha de +3,3 Vdc de baixa potência exclusiva para alimentação de.."
    ],
    "answer": "O Módulo 8 possui uma via cravada de +21 Vdc deixada acessível no bloco terminal..",
    "explanation": "Além das tensões padrão de operação dos cartões (+5V, +12V e -12V), a Fonte de Alimentação Módu...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é o Tempo Médio Para Reparo (MTTR) prometido para a faina?",
    "options": [
      "Aproximadamente apenas 30 minutos em caso de troca ostensiva.",
      "Cerca de 4 a 6 horas em oficina de manutenção com uso obrigatório de osciloscópio de..",
      "Menos de 60 segundos por meio de auto-regeneração de firmware acionada no botão de..",
      "Exatamente 12 horas úteis para permitir a estabilização térmica completa da nova.."
    ],
    "answer": "Aproximadamente apenas 30 minutos em caso de troca ostensiva.",
    "explanation": "A divisão funcional em cartões modulares facilmente removíveis (Módulos 01 ao 12), combinada ao...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é a regra de substituição absolutamente restritiva aplicada ao Cartão Microprocessador (Módulo 2)?",
    "options": [
      "Ele não aceita permutas aleatórias de almoxarifado.",
      "O Módulo 2 deve ser substituído sempre aos pares com o Módulo 8, independentemente do..",
      "O cartão novo só pode ser inserido após ser pré-aquecido a uma temperatura estrita de..",
      "É obrigatório raspar e ressoldar todos os 64 pinos do conector de fundo para cada.."
    ],
    "answer": "Ele não aceita permutas aleatórias de almoxarifado.",
    "explanation": "O Módulo 2 (Microprocessador) contém as memórias EPROM/RAM com o firmware e as configurações e...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quais circuitos integrados utilizados no AGI demandam proteção contra toque direto das mãos?",
    "options": [
      "As placas foram concebidas em tecnologia \"CMOS\" sensíveis.",
      "As placas são construídas com transistores de potência a vácuo (valvulados)..",
      "Os cartões utilizam exclusivamente circuitos TTL de cerâmica militar à prova de..",
      "Os módulos possuem relés mecânicos abertos de prata pura que oxidam com a oleosidade.."
    ],
    "answer": "As placas foram concebidas em tecnologia \"CMOS\" sensíveis.",
    "explanation": "Os cartões eletrônicos do odômetro AGI-LOG utilizam extensivamente circuitos integrados em tecn...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quantos LEDs existem e o que indicam ao eletricista?",
    "options": [
      "Possui quatro LEDs brilhantes na cor verde engatilhados quando \"as quatro tensões..",
      "Possui dois LEDs vermelhos que acendem apenas em caso de curto-circuito na linha do..",
      "Possui um único LED amarelo intermitente que pisca proporcionalmente à frequência da..",
      "Possui oito LEDs coloridos em barra tipo VU-meter que indicam o consumo percentual de.."
    ],
    "answer": "Possui quatro LEDs brilhantes na cor verde engatilhados quando \"as quatro tensões..",
    "explanation": "Na parte frontal interna do Módulo 8 (Fonte de Alimentação) existem quatro LEDs verdes de monit...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "O que deve ser feito primariamente no quadro energético do navio ANTES do soldado sequer puxar uma placa modular eletrônica?",
    "options": [
      "Alimentação principal deve ser isolada no Painel de Distribuição.",
      "O técnico deve apenas colocar a chave frontal ON/OFF da SDTU na posição OFF, mantendo..",
      "É necessário aumentar a tensão da rede para 240V a fim de descarregar os capacitores..",
      "Deve-se mergulhar a tampa frontal de alumínio em água doce do mar para equalizar o.."
    ],
    "answer": "Alimentação principal deve ser isolada no Painel de Distribuição.",
    "explanation": "Devido à presença de tensões perigosas de rede (115V ou 230V AC) no interior do chassi e ao ext...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual o número que os displays frontais (7 segmentos) precisam rolar em teste para atestar higidez total?",
    "options": [
      "Varredura com SIM UP/DOWN rodando algarismos de 0 a 9 em cada casa.",
      "Os técnicos pressionam MODE para exibir o número fixo e invariável de 8888,88 milhas..",
      "A tela deve rolar exclusivamente a sequência alfanumérica de letras \"A-B-C-D-E-F\"..",
      "O painel precisa piscar o número 0000 dez vezes seguidas sem emitir nenhum ruído de.."
    ],
    "answer": "Varredura com SIM UP/DOWN rodando algarismos de 0 a 9 em cada casa.",
    "explanation": "Na inspeção e verificação preventiva de rotina (manutenção trimestral), a integridade dos segme...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual o valor limitador exato e absurdo de limite extremo numérico que o painel trava no \"SIM UP\" trimestral se testado à exaustão?",
    "options": [
      "A velocidade de limite superior mecânico computacional batida no teste cravará..",
      "O mostrador para na marcação exata de 99,99 nós e emite dois bipes curtos no..",
      "O sistema reinicia a contagem em 0,00 nó em um ciclo infinito assim que ultrapassa o..",
      "A contagem é bloqueada no limite estrito de 45,50 nós, coincidente com a velocidade.."
    ],
    "answer": "A velocidade de limite superior mecânico computacional batida no teste cravará..",
    "explanation": "Durante o teste de simulação em subida contínua pressionando \"SIM UP\" até a exaustão da escala,...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Um navio está fundeado com a haste totalmente fora d'água no dique. O mantenedor vai realizar a inspeção visual semestral. O que ele TEM QUE usar sob risco de explodir o sensor?",
    "options": [
      "O marinheiro é proibido de emitir a seco.",
      "O mantenedor deve cobrir a ponta da haste com um balde de gelo picado para manter a..",
      "Deve envolver a haste com fita isolante de alta tensão e aterrar os eletrodos..",
      "É obrigatório ligar em paralelo um resistor de carvão de 10."
    ],
    "answer": "O marinheiro é proibido de emitir a seco.",
    "explanation": "A bobina do sensor eletromagnético gera campo magnético e dissipa calor, sendo projetada para t...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Que produto químico é ordenado na faina preventiva a fim de lacrar a tampa robusta de alumínio das placas para navegação marítima?",
    "options": [
      "Aplicar leve camada de graxa de silicone apenas nas vedações.",
      "Aplicar uma camada espessa de graxa grafitada à base de lítio em todos os pinos de..",
      "Pulverizar querosene industrial ou óleo WD-40 diretamente sobre a placa-mãe e dentro..",
      "Vedar a junção da tampa com cola de silicone selante à base de ácido acético para.."
    ],
    "answer": "Aplicar leve camada de graxa de silicone apenas nas vedações.",
    "explanation": "Na manutenção preventiva e fechamento do chassi do odômetro, a norma técnica ordena a aplicação...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "De quantas vias no total é formada a arquitetura para gravação de curva calibrada de arrasto no sistema de \"águas\"?",
    "options": [
      "Gravação de até 14 pontos físicos de calibração por Haste.",
      "A calibração é feita por um único ponto fixo em 10 nós, assumindo uma linha reta..",
      "O sistema exige exatamente 100 pontos de calibração espaçados de 0,5 em 0,5 nó,..",
      "A curva é gravada por meio de 4 pontos cardeais fixados em 0, 15, 30 e 45 nós com.."
    ],
    "answer": "Gravação de até 14 pontos físicos de calibração por Haste.",
    "explanation": "Para compensar as não-linearidades do fluxo de água ao redor do casco e da haste (curva de arra...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Onde está localizado o \"Cartão do Relé da Haste\" segundo o diagrama das baias da placa?",
    "options": [
      "Ele é englobado e anexado aos pés físicos/bases do esqueleto interno.",
      "Está montado externamente em uma caixa de junção impermeável fixada no porão do..",
      "É soldado diretamente sobre a superfície superior do Cartão Microprocessador (Módulo..",
      "Encontra-se embutido dentro do invólucro do transdutor submerso em quilha, envolvido.."
    ],
    "answer": "Ele é englobado e anexado aos pés físicos/bases do esqueleto interno.",
    "explanation": "O Cartão do Relé da Haste (ou conjunto de relés de seleção do transdutor) não é um módulo plug-...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Quais resistências as saídas de relé isoladas (livres de potencial) suportam sem derreter?",
    "options": [
      "Chaves aguentando 1A sob 125 VAC RMS para cargas resistivas.",
      "Suportam no máximo 100 mA sob 12 Volts DC.",
      "Aguentam cargas pesadas de até 15 Ampères sob 380 Volts trifásicos AC, dispensando o..",
      "São projetadas para suportar 5 Ampères em 24 Volts DC e zero tensão alternada,.."
    ],
    "answer": "Chaves aguentando 1A sob 125 VAC RMS para cargas resistivas.",
    "explanation": "Os quatro contatos de relé opto/magneticamente isolados do Módulo 7 possuem especificações elét...",
    "topic": "Capítulo 3 - Odômetro Eletromagnético AGI-LOG"
  },
  {
    "question": "Qual é a potência consumida pelo Odômetro AGI-LOG?",
    "options": [
      "Até 160 VA",
      "Até 500 VA",
      "Aproximadamente 1.500 VA",
      "Inferior a 15 VA"
    ],
    "answer": "Até 160 VA",
    "explanation": "Conforme as especificações técnicas gerais do Odômetro eletromagnético AGI-LOG, a potência máxi...",
    "topic": "Especificações Técnicas - Potência Consumida"
  },
  {
    "question": "Que precisão possui a haste fixa na velocidade de 0 a 10 nós?",
    "options": [
      "+/- 0,1 nó",
      "+/- 0,5 nó",
      "+/- 1,0 nó",
      "+/- 0,01 nó"
    ],
    "answer": "+/- 0,1 nó",
    "explanation": "Na faixa de baixa velocidade (de 0 a 10 nós), onde a precisão é crítica para manobras e navegaç...",
    "topic": "Especificações do Sensor - Precisão da Haste Fixa"
  },
  {
    "question": "Quantas partes componentes possuem os sensores (haste) tipo OTAN?",
    "options": [
      "03",
      "02",
      "04",
      "05"
    ],
    "answer": "03",
    "explanation": "O conjunto do sensor (haste) tipo OTAN do Odômetro AGI-LOG é composto estrutural e operacionalm...",
    "topic": "Sensores - Componentes da Haste Tipo OTAN"
  },
  {
    "question": "Em quais terminais do sensor (haste) tipo OTAN está a alimentação da bobina?",
    "options": [
      "Terminais 1 e 2 (alimentação da bobina).",
      "Terminais 3 e 4 (alimentação da bobina).",
      "Terminais 5 e 6 (alimentação da bobina).",
      "Terminais A e B (alimentação da bobina)."
    ],
    "answer": "Terminais 1 e 2 (alimentação da bobina).",
    "explanation": "Nas conexões do sensor tipo OTAN do Odômetro AGI-LOG, a alimentação de corrente alternada para...",
    "topic": "Sensores - Conexões e Terminais da Haste OTAN"
  },
  {
    "question": "Em quais terminais do sensor (haste) tipo OTAN está o Sinal de Velocidade?",
    "options": [
      "Terminais 3 e 4 (Sinal de Velocidade).",
      "Terminais 1 e 2 (Sinal de Velocidade).",
      "Terminais 5 e 6 (Sinal de Velocidade).",
      "Terminais 7 e 8 (Sinal de Velocidade)."
    ],
    "answer": "Terminais 3 e 4 (Sinal de Velocidade).",
    "explanation": "A minúscula tensão de milivolts induzida pelo movimento da água através do campo magnético é ca...",
    "topic": "Sensores - Conexões e Terminais da Haste OTAN"
  },
  {
    "question": "Em quais terminais do sensor (haste) tipo OTAN está o terra?",
    "options": [
      "Terminais 5 e 6 (Terra).",
      "Terminais 1 e 2 (Terra).",
      "Terminais 3 e 4 (Terra).",
      "Apenas no Terminal 8 (Terra)."
    ],
    "answer": "Terminais 5 e 6 (Terra).",
    "explanation": "A blindagem e a referência de terra (contato com a água do mar e carcaça do sensor) são ligadas...",
    "topic": "Sensores - Conexões e Terminais da Haste OTAN"
  },
  {
    "question": "Qual é a Alimentação da bobina do sensor (haste) tipo OTAN?",
    "options": [
      "54 a 60 v / 60hz",
      "115 v / 400 hz",
      "24 v dc contínuos",
      "12 v / 50 hz"
    ],
    "answer": "54 a 60 v / 60hz",
    "explanation": "A bobina magnética de excitação da haste tipo OTAN do Odômetro AGI-LOG é alimentada com tensão...",
    "topic": "Especificações Elétricas - Alimentação da Bobina"
  },
  {
    "question": "A S.D.T.U. é uma unidade alojada em caixa de alumínio robusta e à prova de água, sendo de conceito modular. Qual é o tempo de reparo médio (MTTR)?",
    "options": [
      "30 minutos",
      "2 horas",
      "10 minutos",
      "24 horas"
    ],
    "answer": "30 minutos",
    "explanation": "Devido ao conceito totalmente modular e aos circuitos de autodiagnóstico (BIT/BITE) integrados na S.",
    "topic": "Manutenção da S.D.T.U. - MTTR"
  },
  {
    "question": "Qual é a função do Módulo 01 (Cartão de Identificação)?",
    "options": [
      "Utilizado para fazer a interface entre o processador (M-02) e o painel de controle (M-11).",
      "Gerar a tensão alternada de 54 a 60 V para excitação da bobina do sensor na água.",
      "Realizar a conversão analógico-digital dos sinais de milivolts vindos dos eletrodos..",
      "Fornecer alimentação de emergência em 24 V DC para a memória EPROM da S.D.T.U."
    ],
    "answer": "Utilizado para fazer a interface entre o processador (M-02) e o painel de controle (M-11).",
    "explanation": "O Módulo 01 (Cartão de Identificação / Interface) tem a função específica de realizar o interfa...",
    "topic": "S.D.T.U. - Funções dos Módulos (Módulo 01)"
  },
  {
    "question": "Qual é a função do Módulo 02 (Cartão do Micro Processador e memórias)?",
    "options": [
      "Tem a função de processar o sinal proveniente da haste, fornecendo saídas de..",
      "Atuar exclusivamente como filtro de linha AC de 115 V para proteger o painel contra..",
      "Converter o sinal analógico diferencial da haste em sinal digital de 16 bits para o..",
      "Gerar sinais síncronos de 400 Hz para alimentar diretamente a agulha giroscópica e o.."
    ],
    "answer": "Tem a função de processar o sinal proveniente da haste, fornecendo saídas de..",
    "explanation": "O Módulo 02 é o cérebro da S.",
    "topic": "S.D.T.U. - Funções dos Módulos (Módulo 02)"
  },
  {
    "question": "Qual é a função do Módulo 04 (Conversor de Sinais A/D)?",
    "options": [
      "Tem a função de converter o sinal proveniente da haste, em um sinal digital..",
      "Gerar as saídas de relé isoladas para os alarmes sonoros da ponte e registradores de..",
      "Fazer a interface entre os mostradores digitais de 7 segmentos do painel frontal e as..",
      "Distribuir a alimentação secundária de +5 V, +12 V e -12 V para os demais cartões do.."
    ],
    "answer": "Tem a função de converter o sinal proveniente da haste, em um sinal digital..",
    "explanation": "O Módulo 04 (Conversor A/D) recebe o sinal analógico de baixo nível induzido nos eletrodos da h...",
    "topic": "S.D.T.U. - Funções dos Módulos (Módulo 04)"
  },
  {
    "question": "Qual é a função dos Módulos 05 e 06 (Conversores de Sinais D/A = opcional)?",
    "options": [
      "Proporcionam saídas síncronas de 400 Hz.",
      "Proporcionam saídas em corrente contínua 4-20 mA para monitoramento das bombas do..",
      "Realizam o teste de isolamento elétrico da bobina do sensor contra a quilha da..",
      "Conferem redundância à fonte de alimentação, comutando automaticamente para bateria.."
    ],
    "answer": "Proporcionam saídas síncronas de 400 Hz.",
    "explanation": "Os Módulos 05 e 06 (Conversores D/A opcionais) são cartões de interface de saída responsáveis p...",
    "topic": "S.D.T.U. - Funções dos Módulos (Módulos 05 e 06)"
  }
];
