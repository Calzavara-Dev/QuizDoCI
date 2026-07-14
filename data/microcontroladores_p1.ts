import type { Question } from "../types/question";

export const microcontroladoresP1Questions: Question[] = [
  {
    question: "Qual das funções internas NÃO é comum à maioria dos modelos de PIC?",
    options: [
      "Unidade de memória.",
      "Unidade de GPS.",
      "Watchdog.",
      "Unidade de entrada/saída.",
      "Unidade Central de Processamento (CPU)."
    ],
    answer: "Unidade de GPS.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "É o recurso disponível do Micro que incrementa um contador RC independente e toda vez que este contador extrapola o seu valor máximo retornando a zero, é provocada a reinicialização do sistema (reset)?",
    options: [
      "Watchdog.",
      "Conversor analógico-digital.",
      "Unidade de temporização.",
      "Unidade Central de Processamento (CPU).",
      "Unidade de GPS."
    ],
    answer: "Watchdog.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "Estabelece o fluxo de controle dos direcionamentos da memória que o código do programa contém?",
    options: [
      "Contador de Programa (PC).",
      "Barramentos.",
      "Comunicação série.",
      "Unidade de temporização.",
      "Conversor analógico-digital."
    ],
    answer: "Contador de Programa (PC).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "A função da instrução CLRWDT dentro de um programa é:",
    options: [
      "impedir que o Watchdog transborde.",
      "desligar o temporizador do Watchdog.",
      "resetar o temporizador do Watchdog de 255 para 0.",
      "impedir o travamento do programa.",
      "ligar o temporizador do Watchdog."
    ],
    answer: "impedir que o Watchdog transborde.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "De qual fator depende o número de linhas em um barramento de endereços?",
    options: [
      "Quantidade de periféricos.",
      "Velocidade do processador.",
      "Taxa de transferência da conexão serial.",
      "Tipo de arquitetura da CPU.",
      "Quantidade de memória que se deseja endereçar."
    ],
    answer: "Quantidade de memória que se deseja endereçar.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "Define as regras usadas na troca de dados?",
    options: [
      "Watchdog.",
      "Contador de Programa (PC).",
      "Protocolo.",
      "CPU.",
      "Barramentos."
    ],
    answer: "Protocolo.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "Quais os 03 tipos de endereçamento que são usados no PC?",
    options: [
      "imediato",
      "exclusivo e indireto.",
      "direto",
      "rotativo e imediato.",
      "alternativo",
      "rotativo",
      "indireto.",
      "direto",
      "indireto e imediato.",
      "direto",
      "alternativo e indireto."
    ],
    answer: "direto, indireto e imediato.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "Na arquitetura ____________, os barramentos de dados e endereços são compartilhados entre memórias de programas e de dados na comunicação com a CPU.",
    options: [
      "Clássica.",
      "Complexa.",
      "RISC.",
      "Von-Neumann.",
      "Harvard."
    ],
    answer: "Von-Neumann.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "É a arquitetura na qual em um único ciclo de máquina, faz a busca de nova instrução e a execução da instrução buscada anteriormente:",
    options: [
      "Principal.",
      "CISC.",
      "Complexa.",
      "Harvard.",
      "Von-Neumann."
    ],
    answer: "Harvard.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "É a técnica que faz a execução da instrução e localização do código da instrução seguinte em um único ciclo:",
    options: [
      "Pipeline.",
      "Decodificação.",
      "Microcódigo.",
      "CISC.",
      "Endereçamento."
    ],
    answer: "Pipeline.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "O ciclo de instrução do PIC16F877 com um clock externo de 10MHz, é:",
    options: [
      "0",
      "05ms.",
      "200us.",
      "0",
      "1ms.",
      "0",
      "4us.",
      "0",
      "50us."
    ],
    answer: "0,4us.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Registro similar ao registro PC que aponta para a memória de dados RAM:",
    options: [
      "STATUS.",
      "FSR.",
      "SFR.",
      "INTCON.",
      "OPTION_REG."
    ],
    answer: "FSR.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Qual a faixa de alimentação do microcontrolador PIC16F877?",
    options: [
      "3V a 5V.",
      "2V a 5",
      "5V.",
      "2",
      "5V a 5",
      "5V.",
      "2V a 5V.",
      "2",
      "5V a 5V."
    ],
    answer: "2V a 5,5V.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "A Pilha serve para:",
    options: [
      "armazenar o endereço do salto (sub-rotina).",
      "selecionar o tipo de oscilador.",
      "selecionar o Banco a ser usado.",
      "armazenar o endereço de retorno após uma instrução de desvio.",
      "acessar o endereçamento indireto."
    ],
    answer: "armazenar o endereço de retorno após uma instrução de desvio.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "A opção verdadeira abaixo é:",
    options: [
      "PORTA é de 6 bits e PORTB é de 8 bits.",
      "PORTA é de 5 bits e PORTB é de 8 bits.",
      "PORTA é de 8 bits e PORTB é de 6 bits.",
      "PORTA é de 8 bits e PORTB é de 5 bits.",
      "PORTA é de 6 bits e PORTB é de 7 bits."
    ],
    answer: "PORTA é de 6 bits e PORTB é de 8 bits.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "O conjunto de instruções do PIC16F877 é formado por:",
    options: [
      "08 instruções.",
      "13 instruções.",
      "14 instruções.",
      "35 instruções.",
      "16 instruções."
    ],
    answer: "35 instruções.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Quantos e quais são os Timers do PIC16F877 da Microchip?",
    options: [
      "1; Timer 0.",
      "4; Timer 0",
      "Timer 1",
      "Timer 2 e Timer 3.",
      "Nenhum.",
      "2; Timer 0 e Timer 1.",
      "3; Timer 0",
      "Timer 1 e Timer 2."
    ],
    answer: "3; Timer 0, Timer 1 e Timer 2.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Quais os blocos internos do PIC16F877 da Microchip?",
    options: [
      "Processador",
      "Memória de Programa",
      "Memória de Dados",
      "Periféricos e Indutores.",
      "Processador",
      "Memória de Programa",
      "Memória de Dados",
      "Periféricos",
      "Contadores.",
      "Processador",
      "Memória de Programa",
      "Memória de Dados",
      "Gerador de Rampa",
      "Contadores.",
      "Processador",
      "Oscilador à Cristal",
      "Memória de Dados",
      "Periféricos",
      "Contadores.",
      "Processador",
      "Memória de Programa",
      "Memória de Dados",
      "USB e Contadores."
    ],
    answer: "Processador, Memória de Programa, Memória de Dados, Periféricos, Contadores.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Quantos bits o Contador de Programa (PC) possui para direcionar os 8K de memória Flash de programa?",
    options: [
      "8.",
      "13.",
      "15.",
      "2.",
      "14."
    ],
    answer: "13.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "No PIC16F877 da Microchip, qual é a frequência do clock interno?",
    options: [
      "Ckext / 8.",
      "Ckext / 2.",
      "CKext / 4.",
      "3xCKext / 4.",
      "Ckext."
    ],
    answer: "CKext / 4.",
    topic: "Capítulo 2 - PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "O endereço contido no PC durante uma instrução GOTO é formado pelo:",
    options: [
      "opcode da instrução mais os bits RP1 e RP0 do registro de STATUS.",
      "opcode da instrução mais os bits <12:8> do registro PCH.",
      "opcode da instrução mais os bits <4:3> do registro PCLATH.",
      "endereço da sub-rotina mais os bits <4:0> do registro PCLATH.",
      "opcode da instrução mais os bits IRP",
      "RP1 e RP0 do registro de STATUS."
    ],
    answer: "opcode da instrução mais os bits <4:3> do registro PCLATH.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "O registro que nos mostra o estado geral da ULA é o:",
    options: [
      "STATUS.",
      "FSR.",
      "INTCON.",
      "INDF.",
      "OPTION_REG."
    ],
    answer: "STATUS.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Na escrita ou leitura indiretamente de um registro, usam-se os registros:",
    options: [
      "INDF e FSR.",
      "STATUS e FSR.",
      "PCLATH e FSR.",
      "INTCON e INDF.",
      "STATUS e INDF."
    ],
    answer: "INDF e FSR.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "O registro que nos permite o controle geral das interrupções é o:",
    options: [
      "STATUS.",
      "INDF.",
      "OPTION_REG.",
      "FSR.",
      "INTCON."
    ],
    answer: "INTCON.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Qual o bit responsável pela habilitação de entrada externa de interrupção no pino RB0/INT?",
    options: [
      "RBPU do registro INTCON.",
      "INTEDG do registro OPTION_REG.",
      "T0IE do registro INTCON.",
      "INTE do registro INTCON.",
      "RBIF do registro INTCON."
    ],
    answer: "INTE do registro INTCON.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Assinale a alternativa INCORRETA, referente à Pilha do PIC16F877:",
    options: [
      "não há bits de status para indicar condições de stack overflow (pilha cheia).",
      "a pilha não pode ser lida ou escrita diretamente.",
      "a função básica da Pilha é guardar o valor do PC quando ocorrerem saltos do programa principal para o endereço de um subprograma a ser executado.",
      "a pilha opera como um buffer circular do tipo LIFO caracterizada por apresentar oito pontos de acesso denominado Topo da Pilha.",
      "a pilha possui oito níveis com endereços de 14 bits."
    ],
    answer: "a pilha opera como um buffer circular do tipo LIFO caracterizada por apresentar oito pontos de acesso denominado Topo da Pilha.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Qual o bit responsável pela habilitação geral das interrupções no PIC16F877?",
    options: [
      "GIE do registro STATUS.",
      "GIE do registro INDF.",
      "INTE do registro STATUS.",
      "INTE do registro INTCON.",
      "GIE do registro INTCON."
    ],
    answer: "GIE do registro INTCON.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "A porta que pode usar resistores de pull-ups internos é a:",
    options: [
      "D.",
      "C.",
      "E.",
      "B.",
      "A."
    ],
    answer: "B.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Segundo a organização e características das memórias de dados do PIC16F877 podemos afirmar que:",
    options: [
      "a memória RAM está toda disponível ao usuário.",
      "cada banco da memória RAM possui 128 bytes.",
      "a memória EEPROM armazena dados que podem ser perdidos quando o micro fica sem alimentação.",
      "os registros especiais são nomeados pelo programador.",
      "os registros de propósitos gerais fazem parte apenas do banco 1 e 3."
    ],
    answer: "cada banco da memória RAM possui 128 bytes.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "No endereçamento direto de um registro, a seleção dos 4 bancos é feita pelos:",
    options: [
      "bit 7 do registro FSR e bit IRP do registro de STATUS.",
      "bits RP1 e RP0 do registro de STATUS.",
      "bits IRP",
      "RP1 e RP0 do registro de STATUS.",
      "registros INDF e FSR.",
      "registros de STATUS e FSR."
    ],
    answer: "bits RP1 e RP0 do registro de STATUS.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "O endereço contido no PC no retorno de uma sub-rotina é formado pelo:",
    options: [
      "opcode da instrução mais os bits RP1 e RP0 do registro de STATUS.",
      "opcode da instrução mais os bits <4:0> do registro PCLATH.",
      "endereço da sub-rotina mais os bits <4:0> do registro PCLATH.",
      "opcode da instrução mais os bits <12:8> do registro PCH.",
      "endereço contido na Pilha."
    ],
    answer: "endereço contido na Pilha.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Com relação ao registro de STATUS, podemos afirmar:",
    options: [
      "controla o registro INDF.",
      "possui o bit que muda o prescaler entre Timer0 e Watchdog.",
      "controla o registro FSR.",
      "possui bits de interrupções.",
      "indica o estado geral do Micro."
    ],
    answer: "indica o estado geral do Micro.",
    topic: "Capítulo 3 - Registros e Memória RAM [Múltipla Escolha]"
  },
  {
    question: "Qual das opções seguintes define que os pinos do PORTB estão metade como entrada (RB0 a RB3) e a outra metade (RB4 a RB7) como saída?",
    options: [
      "TRISC=11111000b.",
      "TRISB=00111111b.",
      "TRISB=00011111b.",
      "TRISB=11110000b.",
      "TRISB=00001111b."
    ],
    answer: "TRISB=00001111b.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Quando os pinos do registro PORTA do PIC16F877 estiverem sendo utilizados como entradas analógicas, como devem estar os bits do registro TRISA?",
    options: [
      "Deverão se manter setados.",
      "Deverão se manter em nível baixo.",
      "Impedindo que a PORTA trabalhe com o conversor A/D.",
      "Apenas o bit RA4 deverá estar setado.",
      "Somente os bits MSB deverão ser zero (0)."
    ],
    answer: "Deverão se manter setados.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Qual a operação lógica que passam as saídas diferentes dos pinos de entrada (RB7:RB4) que são comparados com valores antigos armazenados na última leitura da porta B para gerar a interrupção por mudança na própria porta B?",
    options: [
      "OU.",
      "EX-NOR.",
      "NAND.",
      "NOR.",
      "EX-OR."
    ],
    answer: "EX-OR.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Quais são as portas usadas com o Conversor Analógico-Digital?",
    options: [
      "A e E.",
      "D e A.",
      "A e B.",
      "B e E.",
      "C e E."
    ],
    answer: "A e E.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Qual é o recurso que permite que os pinos de I/O no PIC tenham outras funções?",
    options: [
      "Multiplexação.",
      "Pipeline.",
      "Espelhamento.",
      "Seleção de banco.",
      "Duplexação."
    ],
    answer: "Multiplexação.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "É o registro de direção de dados para o pino correspondente ao PORTE:",
    options: [
      "PORTA.",
      "PCLAT e PCL.",
      "EEADR e FSR.",
      "TRISE.",
      "PORTB."
    ],
    answer: "TRISE.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Um bit do registro TRISD apagado (0), fará com que o pino correspondente da PORTD seja uma _______.",
    options: [
      "entrada.",
      "duplexação.",
      "falha.",
      "multiplexação.",
      "saída."
    ],
    answer: "saída.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "A leitura é feita diretamente no pino, enquanto a escrita passa por um Latch. Qual é a consequência desta operação?",
    options: [
      "Dupla execução da mesma instrução.",
      "A execução imediata das operações de I/O.",
      "Atraso entre a escrita e leitura.",
      "Falha nas operações de I/O.",
      "Ativação de uma função Multiplexada."
    ],
    answer: "Atraso entre a escrita e leitura.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Assinale a alternativa INCORRETA quanto ao PSPMODE:",
    options: [
      "ativada pelo bit PSPMODE",
      "TRISE<4>.",
      "interface de 8 bits com outros PICs.",
      "é uma Porta Paralela Escrava disponível no PIC.",
      "controlada leitura por WR ou por escrita RD.",
      "é multiplexada com o PORTD."
    ],
    answer: "controlada leitura por WR ou por escrita RD.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Quais são as funções associadas ao PORTE?",
    options: [
      "Portas de I/O digitais",
      "portas de entradas analógicas e PWM.",
      "Portas de I/O digitais",
      "portas de entradas e saídas analógicas e porta de controle do PSP.",
      "PSP",
      "Portas de I/O digitais e portas de entradas e saídas analógicas.",
      "Portas de I/O digitais",
      "buffer de dados e porta de controle do PSP.",
      "Portas de I/O digitais",
      "Portas de entradas Analógicas e Porta de controle do PSP."
    ],
    answer: "Portas de I/O digitais, Portas de entradas Analógicas e Porta de controle do PSP.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Durante a escrita na memória FLASH de programa, qual registro deve ser carregado com os valores 0x55 e 0xAA sequencialmente para proteção da escrita?",
    options: [
      "EEDATA.",
      "EEDATH.",
      "EECON1.",
      "EECON2.",
      "EEADR."
    ],
    answer: "EECON2.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "É o bit utilizado para selecionar entre memórias EEPROM ou Flash:",
    options: [
      "EEPGD do registro EECON1.",
      "4 do registro EECON2.",
      "GIE do registro INTCON.",
      "6 do registro EEADR.",
      "2 do registro EEDATA."
    ],
    answer: "EEPGD do registro EECON1.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "Após a leitura da memória EEPROM de dados, o dado lido é armazenado no registro:",
    options: [
      "EEADR.",
      "STATUS.",
      "EEDATA.",
      "PCLATH.",
      "PC."
    ],
    answer: "EEDATA.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "Qual é a função do bit EEIF (PIR2<4>), na operação de escrita da Flash de Programa?",
    options: [
      "Proteger a Memória Flash de Programa contra a escrita durante o Power-UP.",
      "Desabilitar as interrupções durante a escrita.",
      "Tratar uma interrupção ao final da escrita.",
      "Habilitar as interrupções gerais do PIC.",
      "Permitir interromper a operação da escrita a qualquer momento."
    ],
    answer: "Tratar uma interrupção ao final da escrita.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "Qual é a indicação de que a operação de escrita finalizou?",
    options: [
      "bit WRERR (EECON1<3>) estará setado.",
      "bit EEPGD (EECON1<7>) estará resetado.",
      "flag INTCON",
      "T0IF ficará setado.",
      "bit WR (EECON1<1>) estará resetado.",
      "bit WREN (EECON1<2>) estará resetado."
    ],
    answer: "bit WR (EECON1<1>) estará resetado.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "Quais os registros são utilizados para leitura da memória EEPROM de Dados?",
    options: [
      "STATUS e INDF.",
      "EEDATA e FSR.",
      "EEADR e EEDATA.",
      "EEADR e FSR.",
      "EEDATA e SFR."
    ],
    answer: "EEADR e EEDATA.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "No processo de leitura, qual é a próxima etapa após o dado lido na EEPROM de Dados ser armazenado no EEDATA?",
    options: [
      "O bit WR será apagado automaticamente pelo hardware.",
      "O flag RD será apagado automaticamente pelo hardware.",
      "O bit T0IF será apagado automaticamente pelo hardware.",
      "O bit RD será apagado pelo software.",
      "O processo de escrita será finalizado."
    ],
    answer: "O flag RD será apagado automaticamente pelo hardware.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "No processo de leitura da Memória Flash de Programa, em virtude de possuir a capacidade de 8Kb, quais os registros que receberão o endereço e os dados respectivamente?",
    options: [
      "STATUS e INDF.",
      "EECON1 e EECON2.",
      "EECON1 e EEDATA.",
      "PCL",
      "PCH e PCLAT",
      "PCLATH.",
      "EEADR",
      "EEADRH e EEDATA",
      "EEDATAH."
    ],
    answer: "EEADR, EEADRH e EEDATA, EEDATAH.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "Qual é o bit do registro de configuração que protege a Memória Flash de Programa contra escrita durante a execução do programa?",
    options: [
      "WRT.",
      "WR.",
      "WREN.",
      "RD.",
      "CS."
    ],
    answer: "WRT.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "Qual é a função do bit WREN no registro de configuração / EECON1?",
    options: [
      "Habilitar as interrupções durante o processo de escrita.",
      "Proteger a Memória EEPROM de Dados contra a escrita durante a execução do programa.",
      "Permitir escrita sem verificação de paridade.",
      "Proteger a Memória Flash de Programa contra a escrita durante a execução do programa.",
      "Proteger a Memória Flash de Programa contra a escrita durante no Power-UP."
    ],
    answer: "Proteger a Memória Flash de Programa contra a escrita durante no Power-UP.",
    topic: "Capítulo 5 - Memória Flash e EEPROM [Múltipla Escolha]"
  },
  {
    question: "1) Como é composto um sistema computacional?",
    options: [
      "Por uma unidade de processamento, memórias e portas de (I/O).",
      "Apenas por uma Unidade Central de Processamento e disco rígido.",
      "Por circuitos puramente analógicos e fontes de alimentação.",
      "Exclusivamente por barramentos de endereço e registradores de uso geral."
    ],
    answer: "Por uma unidade de processamento, memórias e portas de (I/O).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "2) Defina microcontroladores:",
    options: [
      "Sistema computacional integrado em um único chip com CPU, memórias e periféricos.",
      "Chip de memória Flash de alta capacidade sem unidade de processamento interna.",
      "Circuito integrado analógico destinado à amplificação de sinais de rádio.",
      "Placa de circuito impresso contendo múltiplos processadores e conectores externos."
    ],
    answer: "Sistema computacional integrado em um único chip com CPU, memórias e periféricos.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "3) Qual família de microcontroladores foi lançada no começo da década de 80 pela INTEL?",
    options: [
      "Família 8051.",
      "Família PIC16.",
      "Família AVR / ATmega.",
      "Família 68000."
    ],
    answer: "Família 8051.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "4) Em qual família de microcontroladores os códigos das instruções são extremamente compatíveis entre todos os modelos, permitindo a migração de um micro para outro?",
    options: [
      "Família PIC (Interface Controladora de Periféricos).",
      "Família Z80.",
      "Família x86 da Intel.",
      "Família ARM Cortex-A."
    ],
    answer: "Família PIC (Interface Controladora de Periféricos).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "5) Como são classificados os modelos PIC?",
    options: [
      "Em três grandes grupos: Pequenas, Médias e Grandes aplicações.",
      "Apenas em dois grupos: Analógicos e Digitais.",
      "Em classes por número de transistores: Baixo e Alto consumo.",
      "Em quatro categorias exclusivas pela voltagem: 3V, 5V, 9V e 12V."
    ],
    answer: "Em três grandes grupos: Pequenas, Médias e Grandes aplicações.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "6) Qual a pinagem do PIC16F877?",
    options: [
      "Possui 40 pinos.",
      "Possui 8 pinos.",
      "Possui 18 pinos.",
      "Possui 28 pinos."
    ],
    answer: "Possui 40 pinos.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "7) No PIC16F877 como podem ser as unidades de memória?",
    options: [
      "De 2 tipos: ROM (memória de programa) e RAM (memória de dados/registros).",
      "Apenas memória RAM dinâmica externa ao chip.",
      "Exclusivamente memória EEPROM para dados e instruções unificadas.",
      "Apenas memória magnética e registradores de pilha."
    ],
    answer: "De 2 tipos: ROM (memória de programa) e RAM (memória de dados/registros).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "8) No PIC16F877 qual componente é responsável por coordenar o trabalho dos outros blocos e executar o programa do utilizador?",
    options: [
      "Unidade Central de Processamento (CPU).",
      "Conversor Analógico-Digital (A/D).",
      "Unidade de Temporização e Watchdog.",
      "Porta Paralela Escrava (PSP)."
    ],
    answer: "Unidade Central de Processamento (CPU).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "9) No PIC16F877 qual componente é usado na interligação entre CPU e outros blocos, fisicamente corresponde a um grupo de 8, 16 ou mais condutores?",
    options: [
      "Barramentos.",
      "Acopladores ópticos.",
      "Conectores seriais I2C.",
      "Pinos de alimentação TTL."
    ],
    answer: "Barramentos.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "10) Quais os tipos de barramentos?",
    options: [
      "De dados e de endereço.",
      "Apenas barramento serial e USB.",
      "De alimentação e de aterramento.",
      "De clock e de reset incondicional."
    ],
    answer: "De dados e de endereço.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "11) No PIC16F877 quais unidades ligam o microcontrolador ao mundo exterior?",
    options: [
      "Unidades de entrada/saída, comumente chamadas de portas.",
      "Exclusivamente o contador de programa PC.",
      "Apenas o pino de reset MCLR.",
      "Apenas a memória de programa Flash."
    ],
    answer: "Unidades de entrada/saída, comumente chamadas de portas.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "12) Qual barramento é usado para atenuar o custo na transferência de dados em longas distâncias onde o alto custo é indesejado?",
    options: [
      "Barramento série (a transmissão ocorre bit a bit).",
      "Barramento paralelo de 32 bits.",
      "Barramento de endereço multiplexado.",
      "Barramento de memória de alta velocidade."
    ],
    answer: "Barramento série (a transmissão ocorre bit a bit).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "13) Como é usado o Barramento Série?",
    options: [
      "Com uma linha para receber, outra para transmitir e uma terceira como referência.",
      "Com 16 fios condutores simultâneos sem linha de referência.",
      "Apenas com um único fio condutor para alimentação e dados misturados.",
      "Com 8 linhas para dados e 16 linhas para endereço."
    ],
    answer: "Com uma linha para receber, outra para transmitir e uma terceira como referência.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "14) As regras usadas na troca de dados são chamadas de PROTOCOLO.",
    options: [
      "Verdadeiro, o conjunto de regras na comunicação recebe o nome de Protocolo.",
      "Falso, as regras de troca de dados chamam-se Microcódigo.",
      "Falso, chamam-se exclusivamente Baud Rate.",
      "Falso, são chamadas de Pipeline de dados."
    ],
    answer: "Verdadeiro, o conjunto de regras na comunicação recebe o nome de Protocolo.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "15) Depois que os dados vêm da memória eles são lidos e armazenados na MEMÓRIA.",
    options: [
      "Verdadeiro, são lidos da memória de programa/dados para processamento e armazenamento.",
      "Falso, dados lidos da memória são descartados e nunca mais armazenados.",
      "Falso, vão exclusivamente para a porta serial.",
      "Falso, são armazenados apenas no cristal oscilador."
    ],
    answer: "Verdadeiro, são lidos da memória de programa/dados para processamento e armazenamento.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "16) Como é composta a Unidade de Temporização?",
    options: [
      "Por um contador que na realidade é um registro cujo conteúdo aumenta num intervalo fixo de tempo.",
      "Por um conversor A/D que amostra tensões analógicas contínuas.",
      "Por um bloco resistivo sem qualquer registro interno.",
      "Exclusivamente por uma chave externa de acionamento mecânico."
    ],
    answer: "Por um contador que na realidade é um registro cujo conteúdo aumenta num intervalo fixo de tempo.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "17) Qual recurso disponível no PIC que parte de princípio que todo sistema é passível de falha?",
    options: [
      "Watchdog Timer (cão de guarda).",
      "Brown-Out Reset (BOR) apenas.",
      "Conversor A/D de 10 bits.",
      "Módulo de captura e comparação CCP."
    ],
    answer: "Watchdog Timer (cão de guarda).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "18) No PIC16F877 quando é provocada a reinicialização do sistema?",
    options: [
      "Quando o contador do Watchdog (incrementado por oscilador RC independente) transborda e retorna a zero.",
      "Apenas quando o usuário desliga e religa a chave principal de energia.",
      "Quando o contador de programa PC atinge a metade da memória RAM.",
      "Sempre que uma instrução aritmética gera resultado negativo na ULA."
    ],
    answer: "Quando o contador do Watchdog (incrementado por oscilador RC independente) transborda e retorna a zero.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "19) Com o sistema funcionando corretamente qual instrução é responsável por zerar o valor do contador acima, impedindo que o mesmo chegue ao valor máximo?",
    options: [
      "CLRWDT (Clear Watchdog Timer).",
      "SLEEP.",
      "RESET.",
      "CLRF STATUS."
    ],
    answer: "CLRWDT (Clear Watchdog Timer).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "20) Quando o WATCHDOG vai estourar?",
    options: [
      "Quando algo de errado ocorrer, travando o microcontrolador em um loop sem executar CLRWDT.",
      "A cada ciclo de máquina normal durante o processamento correto.",
      "Sempre que o microcontrolador entrar em modo SLEEP.",
      "Quando a tensão de alimentação for superior a 5,5V."
    ],
    answer: "Quando algo de errado ocorrer, travando o microcontrolador em um loop sem executar CLRWDT.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "21) O período normal de estouro do Watchdog Timer é de aproximadamente 18ms.",
    options: [
      "Verdadeiro, o tempo nominal de estouro do WDT sem prescaler é de cerca de 18 ms.",
      "Falso, o período fixo é sempre exatamente 1 segundo sem variação.",
      "Falso, o tempo normal é de apenas 200 ns.",
      "Falso, o estouro ocorre em exatamente 400 microsegundos."
    ],
    answer: "Verdadeiro, o tempo nominal de estouro do WDT sem prescaler é de cerca de 18 ms.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "22) O que se deve fazer quando o período acima não for suficiente para executar o programa?",
    options: [
      "Alocar o recurso de um prescaler para aumentar o período de temporização do WDT.",
      "Substituir o cristal oscilador principal por um de frequência menor.",
      "Desativar a memória RAM e usar apenas a memória EEPROM.",
      "Dobrar a tensão da fonte de alimentação do chip."
    ],
    answer: "Alocar o recurso de um prescaler para aumentar o período de temporização do WDT.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "23) Qual componente é responsável por converter os sinais analógicos dos periféricos para o formato digital?",
    options: [
      "Conversor A/D (Analógico-Digital).",
      "Módulo USART / SCI.",
      "Timer 0 com prescaler.",
      "Registro STATUS da ULA."
    ],
    answer: "Conversor A/D (Analógico-Digital).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "24) Defina programa:",
    options: [
      "Conjunto completo de instruções que descreve exatamente o que fazer a cada passo de sua operação.",
      "Sinal de clock gerado pelo cristal para sincronizar o hardware.",
      "Conjunto de componentes físicos de cobre que interligam os pinos I/O.",
      "Tensão contínua aplicada aos terminais VDD e VSS do circuito integrado."
    ],
    answer: "Conjunto completo de instruções que descreve exatamente o que fazer a cada passo de sua operação.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "25) PROGRAMAÇÃO é o ato de escrever um programa.",
    options: [
      "Verdadeiro, programação é o ato de desenvolver e escrever o conjunto de instruções do programa.",
      "Falso, programação é a fabricação física do silício do microcontrolador.",
      "Falso, é exclusivamente a soldagem do chip na placa de circuito impresso.",
      "Falso, refere-se apenas ao cálculo do consumo em Watts do circuito."
    ],
    answer: "Verdadeiro, programação é o ato de desenvolver e escrever o conjunto de instruções do programa.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "26) Como os programas são colocados na memória?",
    options: [
      "De forma binária, tendo cada instrução um código único (opcode).",
      "Em formato de texto decimal codificado diretamente em ASCII na Flash.",
      "Através de sinais analógicos gravados em capacitores variáveis.",
      "Por meio de ondas magnéticas sem formato numérico definido."
    ],
    answer: "De forma binária, tendo cada instrução um código único (opcode).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "27) Quais as linguagens de programação mais usadas?",
    options: [
      "ASSEMBLER (baixo nível/rápida), C (mais fácil/organizada) e BASIC (instruções simples).",
      "Apenas HTML, CSS e JavaScript.",
      "Exclusivamente SQL e COBOL de mainframe.",
      "Apenas código de máquina binário digitado manualmente sem montador."
    ],
    answer: "ASSEMBLER (baixo nível/rápida), C (mais fácil/organizada) e BASIC (instruções simples).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "28) Qual componente estabelece o fluxo de controle dos direcionamentos da memória que o código do programa contém?",
    options: [
      "Contador de Programa (PC).",
      "Registro de trabalho W.",
      "Prescaler do Timer 0.",
      "Registro OPTION_REG."
    ],
    answer: "Contador de Programa (PC).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "29) Na maioria das instruções o CONTADOR DE PROGRAMA (PC) incrementa-se automaticamente para apontar a instrução seguinte.",
    options: [
      "Verdadeiro, o PC é incrementado automaticamente após a busca/execução de cada instrução sequencial.",
      "Falso, o PC deve ser incrementado manualmente pelo programador a cada linha com GOTO.",
      "Falso, o PC só é alterado quando ocorre um reset geral no sistema.",
      "Falso, o PC permanece sempre apontando para o endereço 0x0000."
    ],
    answer: "Verdadeiro, o PC é incrementado automaticamente após a busca/execução de cada instrução sequencial.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "30) No PIC16F877 quais os tipos de endereçamento (direcionamento)?",
    options: [
      "Imediato (dado no opcode), Direto (endereço na instrução) e Indireto (endereço via registro FSR).",
      "Apenas endereçamento de pilha e endereçamento serial assíncrono.",
      "Exclusivamente endereçamento virtual de 64 bits e paginação de disco.",
      "Apenas endereçamento analógico e digital multiplexado."
    ],
    answer: "Imediato (dado no opcode), Direto (endereço na instrução) e Indireto (endereço via registro FSR).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "31) Quais os tipos de arquitetura mais utilizada em microcontroladores e microprocessadores?",
    options: [
      "Von-Neumann e Harvard.",
      "Von-Neumann e x86-64 apenas.",
      "Harvard e RISC-V exclusivamente.",
      "CISC e superscalar unificada."
    ],
    answer: "Von-Neumann e Harvard.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "32) Qual arquitetura utiliza o mesmo barramento para a memória de programa e para a memória de dados, impedindo acesso simultâneo às duas memórias e exigindo microcódigo?",
    options: [
      "Arquitetura Von-Neumann.",
      "Arquitetura Harvard.",
      "Arquitetura Harvard Modificada.",
      "Arquitetura RISC Pura."
    ],
    answer: "Arquitetura Von-Neumann.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "33) Defina MICROCÓDIGO:",
    options: [
      "Sequência interna de operações (comum em Von-Neumann/CISC) que instrui a ULA a executar passos de uma instrução complexa.",
      "Pequeno programa escrito em linguagem BASIC para piscar um LED.",
      "Código de erro emitido pelo Watchdog Timer quando o sistema trava.",
      "Endereço inicial de 4 bits na memória EEPROM do microcontrolador."
    ],
    answer: "Sequência interna de operações (comum em Von-Neumann/CISC) que instrui a ULA a executar passos de uma instrução complexa.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "34) Qual arquitetura possui 2 barramentos (dados e programa separados), necessitando apenas 1 ciclo por instrução (sem microcódigos) e permitindo busca e execução simultâneas?",
    options: [
      "Arquitetura Harvard.",
      "Arquitetura Von-Neumann.",
      "Arquitetura de barramento único compartilhado.",
      "Arquitetura analógica paralela."
    ],
    answer: "Arquitetura Harvard.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "35) O sistema de busca/execução simultânea é conhecido como SEGMENTAÇÃO OU PIPELINE.",
    options: [
      "Verdadeiro, o pipeline permite buscar a próxima instrução enquanto a atual é executada.",
      "Falso, a busca simultânea recebe o nome exclusivo de Watchdog.",
      "Falso, é chamado de multiplexação no domínio do tempo.",
      "Falso, esse processo chama-se de paginação de memória ROM."
    ],
    answer: "Verdadeiro, o pipeline permite buscar a próxima instrução enquanto a atual é executada.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "36) Qual a vantagem da arquitetura HARVARD?",
    options: [
      "Enquanto uma instrução é executada, a próxima é buscada, reduzindo a quantidade de ciclos de máquina necessários.",
      "Utilizar um único barramento físico para economizar pinos no encapsulamento.",
      "Eliminar totalmente a necessidade de memória RAM interna no chip.",
      "Permitir o uso de tensões de alimentação acima de 240 Volts diretos."
    ],
    answer: "Enquanto uma instrução é executada, a próxima é buscada, reduzindo a quantidade de ciclos de máquina necessários.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "37) A arquitetura VON-NEUMANN utiliza predominantemente qual conjunto de instruções?",
    options: [
      "CISC (conjunto complexo de instruções), necessitando de vários ciclos e microcódigo por instrução.",
      "RISC (conjunto reduzido de instruções) de ciclo único constante.",
      "Apenas instruções puramente analógicas de ponto flutuante.",
      "Instruções ortogonais de palavra larga sem decodificador."
    ],
    answer: "CISC (conjunto complexo de instruções), necessitando de vários ciclos e microcódigo por instrução.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "38) A arquitetura HARVARD utiliza predominantemente qual conjunto de instruções?",
    options: [
      "RISC (conjunto reduzido de instruções), executando em um ciclo sem necessidade de microcódigo.",
      "CISC (conjunto complexo de instruções) com múltiplos ciclos de clock.",
      "Código de máquina de 64 bits com microcódigo interno obrigatório.",
      "Apenas instruções de salto incondicional e chamadas de pilha."
    ],
    answer: "RISC (conjunto reduzido de instruções), executando em um ciclo sem necessidade de microcódigo.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Discursiva]"
  },
  {
    question: "39) A arquitetura PIC segue o MODELO HARVARD (barramentos diferentes para dados e instruções), usa instruções RISC e a técnica de PIPELINE.",
    options: [
      "Verdadeiro, o PIC adota arquitetura Harvard, instruções RISC de palavra larga (14 bits no 16F877) e pipeline.",
      "Falso, os microcontroladores PIC seguem estritamente o modelo Von-Neumann e CISC.",
      "Falso, o PIC possui barramento unificado e não suporta pipeline.",
      "Falso, os modelos PIC operam exclusivamente sem memória de programa."
    ],
    answer: "Verdadeiro, o PIC adota arquitetura Harvard, instruções RISC de palavra larga (14 bits no 16F877) e pipeline.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "40) Qual o nome da técnica utilizada quando se deseja compensar a demora real de um microprocessador sobrepondo busca e execução?",
    options: [
      "Pipeline (segmentação).",
      "Brown-Out Detection.",
      "LIFO (Last-In, First-Out).",
      "Pull-up ativo."
    ],
    answer: "Pipeline (segmentação).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "41) Na execução das instruções RISC é usada a técnica de SEGMENTAÇÃO OU PIPELINE.",
    options: [
      "Verdadeiro, a técnica de pipeline garante a execução de instruções RISC em 1 ciclo (exceto desvios).",
      "Falso, o pipeline só é aplicável a processadores analógicos sem relógio.",
      "Falso, instruções RISC proíbem o uso de pipeline na arquitetura do chip.",
      "Falso, o pipeline serve apenas para gerenciar a porta serial I2C."
    ],
    answer: "Verdadeiro, a técnica de pipeline garante a execução de instruções RISC em 1 ciclo (exceto desvios).",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Questão Direta]"
  },
  {
    question: "42) No PIC16F877 todas as instruções possuem o mesmo tempo de processamento (1 ciclo - 200ns a 20MHz), exceto:",
    options: [
      "As instruções de salto (como GOTO e CALL), que consomem 2 ciclos (400ns).",
      "As instruções de adição (ADDLW e ADDWF), que consomem 4 ciclos.",
      "As instruções de movimentação de dados (MOVWF), que consomem 8 ciclos.",
      "As operações lógicas bit a bit (ANDLW), que consomem 3 ciclos."
    ],
    answer: "As instruções de salto (como GOTO e CALL), que consomem 2 ciclos (400ns).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "43) Cite as principais características do PIC 16F877:",
    options: [
      "RISC, 35 instruções de 14 bits, até 20MHz, Flash 8K, RAM 512B, EEPROM 256B, 14 interrupções e 5 portas I/O.",
      "CISC, 120 instruções de 8 bits, clock de 1GHz, sem memória Flash e com apenas 1 porta de saída.",
      "Arquitetura Von-Neumann, palavra de 32 bits, sem interrupções e sem conversor analógico-digital.",
      "Processador analógico sem relógio, 2K de RAM dinâmica e alimentação fixa em 12 Volts."
    ],
    answer: "RISC, 35 instruções de 14 bits, até 20MHz, Flash 8K, RAM 512B, EEPROM 256B, 14 interrupções e 5 portas I/O.",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Discursiva]"
  },
  {
    question: "44) Cite as características dos periféricos do PIC 16F877:",
    options: [
      "3 Timers, 2 módulos CCP (PWM), Conversor A/D 10 bits, Porta Serial Síncrona, USART/SCI e Porta Paralela PSP.",
      "Apenas 1 temporizador simples e sem qualquer suporte a conversores ou portas seriais.",
      "Exclusivamente placa de rede Ethernet integrada, saída de vídeo HDMI e controlador de disco Sata.",
      "Apenas 4 portas analógicas sem temporizadores digitais ou módulos de PWM."
    ],
    answer: "3 Timers, 2 módulos CCP (PWM), Conversor A/D 10 bits, Porta Serial Síncrona, USART/SCI e Porta Paralela PSP.",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Discursiva]"
  },
  {
    question: "45) Qual registro sempre aponta a próxima instrução a ser executada na memória de programa?",
    options: [
      "Contador de Programa (PC) de 13 bits.",
      "Registro STATUS de 8 bits.",
      "Registro FSR (File Select Register).",
      "Registro de interrupção INTCON."
    ],
    answer: "Contador de Programa (PC) de 13 bits.",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "46) Possui 8 níveis, não pode ser lida ou escrita diretamente pelo usuário e funciona como um buffer temporal de endereços?",
    options: [
      "PILHA (Stack).",
      "Memória RAM GPR.",
      "Registro PCLATH.",
      "Conversor A/D."
    ],
    answer: "PILHA (Stack).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "47) Quando ocorre uma instrução CALL, o endereço do PC é armazenado na PILHA para posterior recuperação quando de uma instrução RETURN, RETLW ou RETFIE.",
    options: [
      "Verdadeiro, o endereço de retorno é salvo no Stack (PUSH) e recuperado ao final da sub-rotina (POP).",
      "Falso, o endereço de retorno é armazenado diretamente no registro W e apaga os dados da RAM.",
      "Falso, a instrução CALL apaga a pilha e reinicia o microcontrolador no endereço 0x0000.",
      "Falso, o endereço é gravado permanentemente na memória EEPROM a cada CALL."
    ],
    answer: "Verdadeiro, o endereço de retorno é salvo no Stack (PUSH) e recuperado ao final da sub-rotina (POP).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "48) Qual registro se carrega com o opcode toda vez que a ULA solicita uma nova instrução a ser processada?",
    options: [
      "Registro de Instruções.",
      "Contador de Programa (PC).",
      "Registro W (Work).",
      "Registro TRISA."
    ],
    answer: "Registro de Instruções.",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "49) É um registro encarregado de anotar o estado atual do sistema (como flags Z, C, DC e seleção de banco), todas as vezes em que uma instrução for executada?",
    options: [
      "Registro STATUS.",
      "Registro OPTION_REG.",
      "Registro PCON.",
      "Registro INTCON."
    ],
    answer: "Registro STATUS.",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "50) Qual registro cumpre uma função similar à do Contador de Programa (PC), mas direcionando para a RAM (operando como ponteiro no endereçamento indireto)?",
    options: [
      "FSR (File Select Register).",
      "PCLATH.",
      "EEDATA.",
      "TRISB."
    ],
    answer: "FSR (File Select Register).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "51) Qual Timer pode contar os impulsos de um oscilador externo mesmo quando o microcontrolador estiver em modo SLEEP?",
    options: [
      "TIMER 1 (de 16 bits).",
      "TIMER 0 (de 8 bits).",
      "TIMER 2 (com prescaler/postscaler).",
      "Watchdog Timer apenas."
    ],
    answer: "TIMER 1 (de 16 bits).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "52) Qual Timer é utilizado como base de tempo para a geração de sinal PWM no módulo CCP?",
    options: [
      "TIMER 2 (de 8 bits, com prescaler e postscaler programáveis).",
      "TIMER 0 (de 8 bits sem postscaler).",
      "TIMER 1 (de 16 bits assíncrono).",
      "Watchdog Timer RC."
    ],
    answer: "TIMER 2 (de 8 bits, com prescaler e postscaler programáveis).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "53) Como pode ser calculado o clock interno de processamento do PIC16F877?",
    options: [
      "É equivalente à frequência de clock externa dividida por quatro (CKint = CKext / 4).",
      "É igual à frequência do cristal externa multiplicada por dois (CKint = 2 * CKext).",
      "É exatamente igual ao valor da frequência externa sem qualquer divisão.",
      "É fixo em 1 kHz independentemente do cristal conectado aos pinos OSC1/OSC2."
    ],
    answer: "É equivalente à frequência de clock externa dividida por quatro (CKint = CKext / 4).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "54) Com um cristal de 4MHz a frequência interna é de 1MHz, com isso o ciclo de máquina (CM ou Tcy) será:",
    options: [
      "Tcy = 1 / CKint = 1 µs (um microsegundo).",
      "Tcy = 200 ns (duzentos nanosegundos).",
      "Tcy = 4 µs (quatro microsegundos).",
      "Tcy = 18 ms (dezoito milissegundos)."
    ],
    answer: "Tcy = 1 / CKint = 1 µs (um microsegundo).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "55) Como se chama a característica de buscar a informação em um ciclo de máquina e executá-la no próximo, permitindo execução efetiva em 1 ciclo?",
    options: [
      "Pipeline (segmentação).",
      "Multiplexação por divisão de tempo.",
      "Acesso Direto à Memória (DMA).",
      "Interrupção vetoriada."
    ],
    answer: "Pipeline (segmentação).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "56) Normalmente 1 ciclo de instrução (ciclo de máquina) consome 4 ciclos de relógio (clock externo).",
    options: [
      "Verdadeiro, cada ciclo de instrução Tcy corresponde a 4 períodos de clock do oscilador (Q1, Q2, Q3, Q4).",
      "Falso, cada ciclo de instrução requer exatamente 16 ciclos do oscilador externo.",
      "Falso, o ciclo de instrução é igual a 1 único pulso de clock do cristal.",
      "Falso, consome sempre 256 ciclos de clock independentemente do oscilador."
    ],
    answer: "Verdadeiro, cada ciclo de instrução Tcy corresponde a 4 períodos de clock do oscilador (Q1, Q2, Q3, Q4).",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Questão Direta]"
  },
  {
    question: "57) O PIC 16F877 possui 2 BLOCOS DE MEMÓRIA separados (dados e programa), agrupados em 3 TIPOS DE MEMÓRIA.",
    options: [
      "Verdadeiro, possui blocos separados para dados/programa agrupados em Flash (programa), RAM e EEPROM (dados).",
      "Falso, possui 4 blocos unificados em apenas um único tipo de memória magnética.",
      "Falso, possui apenas memória RAM estática sem separação entre programa e dados.",
      "Falso, o PIC16F877 possui exclusivamente memória ROM externa e não possui RAM."
    ],
    answer: "Verdadeiro, possui blocos separados para dados/programa agrupados em Flash (programa), RAM e EEPROM (dados).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "58) Qual a função da Memória de Programa FLASH?",
    options: [
      "Armazenar de forma não volátil o código do programa executável escrito pelo usuário.",
      "Armazenar variáveis temporárias que são perdidas ao desligar a alimentação.",
      "Armazenar unicamente os endereços de retorno das instruções de chamada CALL.",
      "Alimentar diretamente as portas analógicas com referência de tensão fixa."
    ],
    answer: "Armazenar de forma não volátil o código do programa executável escrito pelo usuário.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "59) No PIC 16F877 a Memória de Dados se divide em: RAM E EEPROM.",
    options: [
      "Verdadeiro, a memória de dados é dividida entre RAM (volátil/registros) e EEPROM (não volátil/dados persistentes).",
      "Falso, divide-se apenas entre registradores W e pilha LIFO.",
      "Falso, a memória de dados é composta unicamente pela memória Flash de 8K.",
      "Falso, a memória de dados divide-se em registradores virtuais e cache L1."
    ],
    answer: "Verdadeiro, a memória de dados é dividida entre RAM (volátil/registros) e EEPROM (não volátil/dados persistentes).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "60) Na MEMÓRIA RAM parte é usada como registros SFR e parte usada como registros GPR.",
    options: [
      "Verdadeiro, os endereços da RAM dividem-se em SFR (funções especiais/controle) e GPR (uso geral/variáveis).",
      "Falso, a RAM é composta 100% por registradores especiais sem espaço para variáveis do usuário.",
      "Falso, todos os endereços da RAM são exclusivos do Watchdog Timer e não possuem GPR.",
      "Falso, a memória RAM armazena apenas as páginas da memória de programa FLASH."
    ],
    answer: "Verdadeiro, os endereços da RAM dividem-se em SFR (funções especiais/controle) e GPR (uso geral/variáveis).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "61) Qual memória armazena dados que não podem ser perdidos quando o micro fica sem alimentação?",
    options: [
      "Memória de dados EEPROM (256 x 8 bits).",
      "Memória RAM estática GPR.",
      "Registro de trabalho W.",
      "Pilha de endereços (Stack)."
    ],
    answer: "Memória de dados EEPROM (256 x 8 bits).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "62) A memória EEPROM e os REGISTROS DE USO GERAL (GPR) na RAM constituem o bloco para dados.",
    options: [
      "Verdadeiro, ambos formam a estrutura do bloco de memória de dados do microcontrolador.",
      "Falso, apenas a memória Flash de 14 bits é considerada bloco de dados no PIC.",
      "Falso, a EEPROM faz parte exclusivamente do contador de programa PC.",
      "Falso, os GPR não pertencem ao bloco de dados, sendo componentes analógicos."
    ],
    answer: "Verdadeiro, ambos formam a estrutura do bloco de memória de dados do microcontrolador.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "63) Qual memória é regravável eletronicamente do tipo FLASH (8K x 14 bits), podendo ser acessada por software e usada como expansão da memória EEPROM de dados?",
    options: [
      "Memória de Programa FLASH.",
      "Memória RAM do Banco 0.",
      "Pilha (Stack) de 8 níveis.",
      "Registro STATUS."
    ],
    answer: "Memória de Programa FLASH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "64) Que endereço da Memória de Programa usa o Vetor de Reset?",
    options: [
      "0x0000 (0000h).",
      "0x0004 (0004h).",
      "0x00FF (00FFh).",
      "0x1FFF (1FFFh)."
    ],
    answer: "0x0000 (0000h).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "65) Que endereço da Memória de Programa usa o Vetor de Interrupção?",
    options: [
      "0x0004 (0004h).",
      "0x0000 (0000h).",
      "0x0008 (0008h).",
      "0x0080 (0080h)."
    ],
    answer: "0x0004 (0004h).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "66) Qual memória possui capacidade de 8K x 14 bits (8192 posições ou endereços) e está dividida em 4 páginas de 2K (2048 posições/endereços)?",
    options: [
      "Memória de Programa FLASH.",
      "Memória RAM de dados.",
      "Memória EEPROM de dados.",
      "Memória cache do processador."
    ],
    answer: "Memória de Programa FLASH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "67) Na memória FLASH por que foi criado o conceito de paginação?",
    options: [
      "Porque as instruções CALL e GOTO possuem apenas 11 bits para endereço no opcode (alcançando 2K), exigindo paginação para cobrir os 8K totais.",
      "Para reduzir a velocidade do processador e evitar superaquecimento da ULA.",
      "Porque o barramento de dados é de apenas 4 bits na arquitetura Harvard.",
      "Para permitir a gravação de músicas analógicas em formato MP3 no chip."
    ],
    answer: "Porque as instruções CALL e GOTO possuem apenas 11 bits para endereço no opcode (alcançando 2K), exigindo paginação para cobrir os 8K totais.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "68) Na memória FLASH quais bits, após configurados manualmente, passam a operar como CHAVE SELETORA da página de programa?",
    options: [
      "Bits 3 e 4 do registro PCLATH.",
      "Bits 5 e 6 (RP0 e RP1) do registro STATUS.",
      "Bits PS0 a PS2 do registro OPTION_REG.",
      "Bits GIE e PEIE do registro INTCON."
    ],
    answer: "Bits 3 e 4 do registro PCLATH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "69) Por que não é necessário acionar os bits 3 e 4 (PCLATH) para as instruções de retorno (p. ex. RETURN ou RETFIE)?",
    options: [
      "Porque o endereço de retorno completo (de 13 bits) é fornecido diretamente pela PILHA (Stack).",
      "Porque as instruções de retorno reiniciam sempre o programa na página 0 (endereço 0x0000).",
      "Porque o registro W armazena automaticamente a página de retorno sem usar a pilha.",
      "Porque o compilador proíbe o uso de sub-rotinas fora da primeira página de 2K."
    ],
    answer: "Porque o endereço de retorno completo (de 13 bits) é fornecido diretamente pela PILHA (Stack).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "70) Defina PILHA (stack):",
    options: [
      "Local fisicamente separado da memória de programa/dados onde são armazenados os endereços de retorno nas chamadas CALL ou interrupções.",
      "Área temporária da memória EEPROM onde ficam salvos os resultados de multiplicações.",
      "Conjunto de registradores de 8 bits no Banco 3 destinados a variáveis do usuário.",
      "Circuito externo que amplifica o sinal do cristal de 20 MHz."
    ],
    answer: "Local fisicamente separado da memória de programa/dados onde são armazenados os endereços de retorno nas chamadas CALL ou interrupções.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "71) Quantos níveis de Pilha possui o PIC 16F877?",
    options: [
      "8 níveis (possibilitando o armazenamento de 8 endereços / 8 chamadas aninhadas).",
      "2 níveis apenas.",
      "16 níveis de 14 bits.",
      "64 níveis em memória RAM externa."
    ],
    answer: "8 níveis (possibilitando o armazenamento de 8 endereços / 8 chamadas aninhadas).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "72) Explique o funcionamento da PILHA:",
    options: [
      "Ao executar CALL/interrupção, o endereço de retorno (PC + 1) é armazenado na pilha para que, ao final (RETURN), o programa volte ao ponto de origem.",
      "A pilha converte automaticamente dados digitais em sinais analógicos na porta A.",
      "A cada instrução de soma, a pilha armazena o bit de carry e limpa o registro W.",
      "A pilha funciona como chave seletora manual para chavear entre o Banco 0 e o Banco 1 da RAM."
    ],
    answer: "Ao executar CALL/interrupção, o endereço de retorno (PC + 1) é armazenado na pilha para que, ao final (RETURN), o programa volte ao ponto de origem.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "72) [Bis] A operação de colocar o valor do PC na pilha tem o nome de PUSH. A operação de retirar o valor do PC da pilha recebe o nome de POP.",
    options: [
      "Verdadeiro, empilhar é chamado PUSH e desempilhar é chamado POP.",
      "Falso, colocar na pilha chama-se BANKSEL e retirar chama-se TRIS.",
      "Falso, empilhar recebe o nome de FETCH e retirar recebe o nome de EXECUTE.",
      "Falso, empilhar é chamado de GOTO e retirar de CLRWDT."
    ],
    answer: "Verdadeiro, empilhar é chamado PUSH e desempilhar é chamado POP.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "73) A pilha opera como um BUFFER CIRCULAR do tipo LIFO (último a entrar primeiro a sair).",
    options: [
      "Verdadeiro, opera em modo LIFO (Last-In, First-Out) em estrutura circular de 8 níveis.",
      "Falso, opera exclusivamente no modo FIFO (First-In, First-Out) linear.",
      "Falso, é uma memória aleatória de acesso direto via registro INDF.",
      "Falso, a pilha é um buffer estático que trava o micro ao atingir o segundo nível."
    ],
    answer: "Verdadeiro, opera em modo LIFO (Last-In, First-Out) em estrutura circular de 8 níveis.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "74) Como é composta e para que serve a Memória de dados RAM?",
    options: [
      "É composta por registros (bytes de 8 bits voláteis) e serve para guardar variáveis e registros de controle (SFR e GPR).",
      "É composta por transistores de potência para acionamento direto de relés externos.",
      "Serve unicamente para armazenar o programa executável de forma permanente mesmo sem energia.",
      "É uma memória ROM de 14 bits destinada exclusivamente ao vetor de interrupção."
    ],
    answer: "É composta por registros (bytes de 8 bits voláteis) e serve para guardar variáveis e registros de controle (SFR e GPR).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "76) Na memória RAM qual a função dos GPR (registros de propósitos gerais)?",
    options: [
      "São endereços livres da RAM destinados a armazenar variáveis do programador (podem ser lidos ou escritos).",
      "Controlam o funcionamento dos periféricos de hardware, como Timer 0 e portas I/O.",
      "Armazenam permanentemente a tabela de calibração do oscilador interno.",
      "Servem apenas como buffers de alta impedância para a porta paralela escrava."
    ],
    answer: "São endereços livres da RAM destinados a armazenar variáveis do programador (podem ser lidos ou escritos).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "77) Como podem ser acessados os GPR?",
    options: [
      "De forma direta (endereço na instrução + bits de banco) ou indireta (através dos registros FSR e INDF).",
      "Apenas por chamadas de sub-rotina com a instrução CALL.",
      "Exclusivamente através da porta serial USART em modo síncrono.",
      "Apenas durante a rotina de interrupção através do vetor 0x0004."
    ],
    answer: "De forma direta (endereço na instrução + bits de banco) ou indireta (através dos registros FSR e INDF).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "78) São registros usados pela CPU para controlar a operação desejada do dispositivo, sendo implementados como SRAM e podendo ser lidos ou escritos tanto pelo usuário quanto pelo hardware?",
    options: [
      "Registros de Funções Especiais (SFR - Special Function Registers).",
      "Registros de Propósitos Gerais (GPR).",
      "Células de Memória EEPROM de Dados.",
      "Páginas de Memória Flash de Programa."
    ],
    answer: "Registros de Funções Especiais (SFR - Special Function Registers).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "79) Como podem ser classificados os SFR?",
    options: [
      "Em dois grupos: Relacionados ao núcleo (CPU/controle) e Relacionados aos periféricos (I/O, Timers, A/D, etc.).",
      "Em registros analógicos de alta tensão e registros digitais de 32 bits.",
      "Apenas em registros de somente leitura (ROM) e registros de desvio condicional.",
      "Em registradores de pilha superior e registradores de pilha inferior."
    ],
    answer: "Em dois grupos: Relacionados ao núcleo (CPU/controle) e Relacionados aos periféricos (I/O, Timers, A/D, etc.).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "80) A arquitetura PIC está preparada para operar com uma RAM de 512 bytes (368 bytes GPR, 77 SFR, 19 indisponíveis e 48 não implementados).",
    options: [
      "Verdadeiro, essa é a distribuição do espaço de endereçamento da memória RAM de dados no PIC16F877.",
      "Falso, o PIC16F877 possui 64 KB de RAM livre para variáveis e nenhum registro SFR.",
      "Falso, a RAM possui apenas 16 bytes divididos igualmente em 2 bancos.",
      "Falso, todos os 512 bytes da RAM são exclusivamente destinados a registros SFR."
    ],
    answer: "Verdadeiro, essa é a distribuição do espaço de endereçamento da memória RAM de dados no PIC16F877.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "81) Por que a memória de dados RAM foi dividida em BANCOS?",
    options: [
      "Porque a instrução possui apenas 7 bits para endereço (gerenciando 128 posições), dividindo os 512 bytes em 4 bancos de 128 bytes.",
      "Para isolar fisicamente os registradores analógicos das interferências digitais do clock.",
      "Porque o barramento de dados possui apenas 2 condutores na arquitetura Harvard.",
      "Para permitir que a memória EEPROM seja acessada na mesma velocidade da Flash."
    ],
    answer: "Porque a instrução possui apenas 7 bits para endereço (gerenciando 128 posições), dividindo os 512 bytes em 4 bancos de 128 bytes.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "82) Na memória de dados RAM como é feito o acesso direto?",
    options: [
      "Através dos bits de seleção de banco RP1 (bit 6) e RP0 (bit 5) do registro STATUS.",
      "Através dos bits 3 e 4 do registro PCLATH.",
      "Usando apenas o registrador de pilha e a instrução POP.",
      "Configurando o pino externo RA4 em modo Schmitt Trigger."
    ],
    answer: "Através dos bits de seleção de banco RP1 (bit 6) e RP0 (bit 5) do registro STATUS.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "83) Na memória de dados RAM qual a outra forma de acesso direto (via montador/compilador)?",
    options: [
      "Através das diretivas BANKSEL e BANK no código fonte.",
      "Através das diretivas INCLUDE e DEFINE apenas.",
      "Usando a instrução SLEEP acompanhada de CLRWDT.",
      "Através do pino de interrupção externa RB0."
    ],
    answer: "Através das diretivas BANKSEL e BANK no código fonte.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "84) Na memória de dados RAM como é efetuado o acesso indireto?",
    options: [
      "Através dos registros FSR e INDF (sendo a chave seletora de bancos o bit 7 IRP do STATUS).",
      "Através dos registros PCH e PCL juntamente com a pilha LIFO.",
      "Apenas executando a instrução GOTO em um loop de 8 bits.",
      "Lendo diretamente os pinos analógicos da porta A com o conversor A/D."
    ],
    answer: "Através dos registros FSR e INDF (sendo a chave seletora de bancos o bit 7 IRP do STATUS).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "85) Cite as características do registro especial W (WORK):",
    options: [
      "Não é mapeado na RAM, serve de destino para operações da ULA, não atua como fonte em diversas e faz ponte entre registros 'f'.",
      "É mapeado no endereço 0x00 da RAM e armazena o vetor de interrupção principal.",
      "Possui 16 bits de largura e controla a contagem de tempo do Watchdog Timer.",
      "É um registro somente leitura que indica a tensão da fonte de alimentação do chip."
    ],
    answer: "Não é mapeado na RAM, serve de destino para operações da ULA, não atua como fonte em diversas e faz ponte entre registros 'f'.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "86) Qual registro de arquivo é usado para verificação do estado geral do micro, podendo ser também o destino para qualquer instrução e estando presente em todos os bancos?",
    options: [
      "Registro STATUS.",
      "Registro OPTION_REG.",
      "Registro FSR.",
      "Registro TRISB."
    ],
    answer: "Registro STATUS.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "87) Quais os endereços do registro STATUS nos quatro bancos da memória RAM?",
    options: [
      "03h (Banco 0), 83h (Banco 1), 103h (Banco 2) e 183h (Banco 3).",
      "00h, 80h, 100h e 180h.",
      "05h, 85h, 105h e 185h.",
      "0Bh, 8Bh, 10Bh e 18Bh."
    ],
    answer: "03h (Banco 0), 83h (Banco 1), 103h (Banco 2) e 183h (Banco 3).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "88) Qual registro contém o estado aritmético da ULA (<2:0>), estado do RESET (<4:3>) e os bits de seleção do Banco para a memória de dados RAM (<7:5>)?",
    options: [
      "Registro STATUS.",
      "Registro INTCON.",
      "Registro PCON.",
      "Registro ADCON0."
    ],
    answer: "Registro STATUS.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "89) No registro STATUS os bits 5 (RP0) e 6 (RP1) são usados no ENDEREÇAMENTO DIRETO e o bit 7 (IRP) no ENDEREÇAMENTO INDIRETO.",
    options: [
      "Verdadeiro, RP0/RP1 selecionam bancos no acesso direto e IRP seleciona bancos (0-1 ou 2-3) no indireto.",
      "Falso, RP0 e RP1 controlam o prescaler do Timer 0 e IRP desliga a alimentação do micro.",
      "Falso, o bit 7 serve exclusivamente para zerar o contador do Watchdog.",
      "Falso, todos os bits do STATUS são exclusivos para indicar carry aritmético na ULA."
    ],
    answer: "Verdadeiro, RP0/RP1 selecionam bancos no acesso direto e IRP seleciona bancos (0-1 ou 2-3) no indireto.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "90) O que ocorre quando o registro STATUS for o destino de uma instrução que afeta os bits Z, DC ou C?",
    options: [
      "A escrita nestes 3 bits fica desabilitada, pois eles são atualizados pelo resultado aritmético da ULA.",
      "O microcontrolador entra automaticamente em modo de programação em baixa tensão.",
      "A memória Flash de programa é apagada e o sistema reinicia no endereço 0x0004.",
      "Todos os pinos da porta B são configurados como saídas de alto nível."
    ],
    answer: "A escrita nestes 3 bits fica desabilitada, pois eles são atualizados pelo resultado aritmético da ULA.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "91) No registro STATUS por que não se pode escrever nos bits TO (Time-Out) e PD (Power-Down)?",
    options: [
      "Porque estes bits são de somente leitura (setados ou limpos exclusivamente por hardware durante eventos como Reset, Sleep ou WDT).",
      "Porque eles pertencem à memória ROM e são soldados na fábrica de silício.",
      "Porque o compilador C exige uma licença especial para alterar esses dois bits.",
      "Porque a escrita neles queimaria os resistores de pull-up internos da porta B."
    ],
    answer: "Porque estes bits são de somente leitura (setados ou limpos exclusivamente por hardware durante eventos como Reset, Sleep ou WDT).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "92) O que ocorre quando é implementada a instrução CLRF STATUS?",
    options: [
      "Zera os 3 bits MSB (IRP, RP1, RP0), preserva T0 e PD (somente leitura), preserva DC/C e seta o bit Z (=1).",
      "Apaga todos os 8 bits de STATUS para zero, desligando completamente a ULA do microcontrolador.",
      "Altera o banco da RAM para o Banco 3 e reinicia o contador do Watchdog.",
      "Inverte o estado lógico dos pinos da porta A e coloca a porta C em alta impedância."
    ],
    answer: "Zera os 3 bits MSB (IRP, RP1, RP0), preserva T0 e PD (somente leitura), preserva DC/C e seta o bit Z (=1).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "93) Quais instruções devem ser usadas para alterar os bits de seleção de banco no registro STATUS sem afetar acidentalmente os bits Z, C e DC?",
    options: [
      "BCF, BSF, SWAPF e MOVWF.",
      "ADDWF, SUBWF, ANDWF e IORWF.",
      "INCF, DECF e RLF.",
      "CLRF e XORWF unicamente."
    ],
    answer: "BCF, BSF, SWAPF e MOVWF.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "94) ATT LER PÁG 3-17 E 99) ATT LER PAG 3-19",
    options: [
      "Recomendação da apostila para estudo detalhado das tabelas e resumos de registros SFR e seus endereços.",
      "Instrução em Assembly para apagar os setores de memória Flash nas páginas 17 e 19.",
      "Código de erro emitido pelo compilador quando a memória RAM ultrapassa o limite de 368 bytes.",
      "Comando para ativar a porta paralela escrava nos pinos do módulo CCP1 e CCP2."
    ],
    answer: "Recomendação da apostila para estudo detalhado das tabelas e resumos de registros SFR e seus endereços.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "95) Qual registro de leitura e escrita contém vários bits de controle para configurar o prescaler TMR0/WDT, resistores pull-up na porta B, borda de interrupção externa, etc.?",
    options: [
      "OPTION_REG.",
      "STATUS.",
      "INTCON.",
      "TRISA."
    ],
    answer: "OPTION_REG.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "96) Quais os endereços usados no registro OPTION_REG?",
    options: [
      "81h (Banco 1) e 181h (Banco 3).",
      "01h (Banco 0) e 101h (Banco 2).",
      "08h (Banco 0) e 88h (Banco 1).",
      "0Fh (Banco 0) e 8Fh (Banco 1)."
    ],
    answer: "81h (Banco 1) e 181h (Banco 3).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "97) No registro OPTION_REG quais os bits configuram o fator de divisão do prescaler?",
    options: [
      "Bits 2 (PS2), 1 (PS1) e 0 (PS0).",
      "Bits 7 (RPPU) e 6 (INTEDG).",
      "Bits 5 (T0CS) e 4 (T0SE).",
      "Bits 4 (PSA) e 3 (PSA)."
    ],
    answer: "Bits 2 (PS2), 1 (PS1) e 0 (PS0).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "98) No registro OPTION_REG o que ocorre se colocarmos o bit RPPU a zero (0)?",
    options: [
      "Habilitaremos os resistores de pull-up internos da porta B para os pinos configurados como entrada.",
      "Desligaremos todas as interrupções do sistema de forma imediata.",
      "Ativaremos o modo SLEEP de baixo consumo no processador.",
      "Zeraremos a contagem de tempo do Timer 0 e do Watchdog simultaneamente."
    ],
    answer: "Habilitaremos os resistores de pull-up internos da porta B para os pinos configurados como entrada.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "100) Qual registro contém os bits de flags para permitir a diferenciação entre um reset durante a alimentação (POR), queda de energia (BOR), Watchdog (WDT) ou pino externo (MCLR)?",
    options: [
      "Registro PCON (Power Control).",
      "Registro STATUS.",
      "Registro OPTION_REG.",
      "Registro EECON1."
    ],
    answer: "Registro PCON (Power Control).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "101) Qual o endereço do registro PCON?",
    options: [
      "8Eh (Banco 1).",
      "0Eh (Banco 0).",
      "10Eh (Banco 2).",
      "80h (Banco 1)."
    ],
    answer: "8Eh (Banco 1).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "102) Qual componente possui 13 bits, é responsável pelo controle da sequência das instruções no PIC, apontando sempre para a próxima instrução a ser executada pela CPU?",
    options: [
      "PC (Contador de Programa).",
      "FSR (File Select Register).",
      "PCLATH.",
      "INDF."
    ],
    answer: "PC (Contador de Programa).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "103) No PIC o que deve ser feito para se alterar o fluxo do programa (como em saltos e desvios)?",
    options: [
      "Alterar o conteúdo do Contador de Programa (PC).",
      "Escrever o valor 0xFF diretamente no registro STATUS.",
      "Desligar momentaneamente a alimentação dos pinos VDD.",
      "Inverter o estado dos resistores pull-up na porta B."
    ],
    answer: "Alterar o conteúdo do Contador de Programa (PC).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "104) Como se divide fisicamente e logicamente o PC (Contador de Programa)?",
    options: [
      "Em dois registros: PCL (8 bits menos significativos, acessível) e PCH (5 bits mais significativos, inacessível diretamente).",
      "Em quatro bancos de 8 bits denominados PC0, PC1, PC2 e PC3.",
      "Em duas memórias independentes: ROM superior e RAM inferior.",
      "Apenas em um único registro de 8 bits chamado exclusivo PCL."
    ],
    answer: "Em dois registros: PCL (8 bits menos significativos, acessível) e PCH (5 bits mais significativos, inacessível diretamente).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "105) Qual registro de leitura e escrita é usado para acessar os 8 bits menos significativos (7:0) do PC?",
    options: [
      "PCL.",
      "PCH.",
      "PCLATH.",
      "FSR."
    ],
    answer: "PCL.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "106) Quais os endereços do registro PCL?",
    options: [
      "02h, 82h, 102h e 182h (presente em todos os 4 bancos).",
      "0Ah, 8Ah, 10Ah e 18Ah.",
      "04h, 84h, 104h e 184h.",
      "00h, 80h, 100h e 180h."
    ],
    answer: "02h, 82h, 102h e 182h (presente em todos os 4 bancos).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "107) Qual registro é usado para armazenar internamente os 5 bits mais significativos (12:8) do PC?",
    options: [
      "PCH.",
      "PCL.",
      "PCLATH.",
      "INDF."
    ],
    answer: "PCH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "108) Quais os endereços do registro PCH na tabela da apostila?",
    options: [
      "0Ah, 8Ah, 10Ah e 18Ah (nota: o PCH não é diretamente acessível por software).",
      "02h, 82h, 102h e 182h.",
      "03h, 83h, 103h e 183h.",
      "0Fh, 8Fh, 10Fh e 18Fh."
    ],
    answer: "0Ah, 8Ah, 10Ah e 18Ah (nota: o PCH não é diretamente acessível por software).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "109) Como o PCH não pode ser lido ou escrito diretamente pelo usuário, qual registro é usado como buffer para transferência de dados aos 5 bits mais significativos do PC?",
    options: [
      "PCLATH (bits <4:0>).",
      "FSR.",
      "STATUS.",
      "EEDATA."
    ],
    answer: "PCLATH (bits <4:0>).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "110) O PCLATH não é modificado automaticamente por chamadas CALL, RETURN, etc.",
    options: [
      "Verdadeiro, o PCLATH é apenas um buffer de escrita para o PCH e não é alterado pelo hardware em desvios ou retornos.",
      "Falso, o PCLATH é zerado automaticamente sempre que ocorre uma instrução CALL.",
      "Falso, o PCLATH incrementa em uma unidade a cada ciclo do Watchdog Timer.",
      "Falso, o PCLATH é modificado sempre que a ULA executa uma soma com carry."
    ],
    answer: "Verdadeiro, o PCLATH é apenas um buffer de escrita para o PCH e não é alterado pelo hardware em desvios ou retornos.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "111) Por que não é necessário acionar os bits PCLATH (4:3) para instruções de retorno?",
    options: [
      "Porque o endereço completo de retorno (de 13 bits) é restaurado diretamente da pilha para o PC.",
      "Porque o retorno ocorre exclusivamente dentro dos primeiros 256 bytes da memória Flash.",
      "Porque o registro W assume a função do PCLATH durante a execução de um RETURN.",
      "Porque os bits 4 e 3 do PCLATH são de somente leitura e não podem ser alterados."
    ],
    answer: "Porque o endereço completo de retorno (de 13 bits) é restaurado diretamente da pilha para o PC.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "112) Como pode ocorrer a interação entre os registros PC, PCL, PCH e PCLATH?",
    options: [
      "De 4 formas: 1. Escrita no PCL (PCH = PCLATH<4:0>); 2. GOTO (11 bits opcode + 2 bits PCLATH); 3. CALL (idem GOTO + PUSH); 4. Retornos (POP direto no PC).",
      "Apenas por meio do barramento serial I2C durante a leitura da memória EEPROM externa.",
      "Exclusivamente durante o reset de inicialização POR, quando todos recebem 0xFF.",
      "Através da instrução CLRF aplicada diretamente no vetor 0x0004 de interrupção."
    ],
    answer: "De 4 formas: 1. Escrita no PCL (PCH = PCLATH<4:0>); 2. GOTO (11 bits opcode + 2 bits PCLATH); 3. CALL (idem GOTO + PUSH); 4. Retornos (POP direto no PC).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "113) O que ocorre na execução de uma instrução CALL?",
    options: [
      "O endereço de retorno (PC + 1) é salvo na pilha (PUSH) e o PC recebe 11 bits do opcode mais 2 bits de PCLATH<4:3>.",
      "O conteúdo da RAM é totalmente transferido para a EEPROM e o micro reinicia.",
      "O processador desliga os circuitos analógicos e entra em modo de economia de energia SLEEP.",
      "O registro STATUS é limpo e a porta A assume o estado de alta impedância."
    ],
    answer: "O endereço de retorno (PC + 1) é salvo na pilha (PUSH) e o PC recebe 11 bits do opcode mais 2 bits de PCLATH<4:3>.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "114) O que ocorre na execução das instruções de retorno: RETURN, RETLW ou RETFIE?",
    options: [
      "O PC é totalmente carregado (13 bits) com o valor desempilhado da pilha (POP), sem utilizar o PCLATH.",
      "O contador do Watchdog é zerado e o processador executa um salto para 0x0000.",
      "A pilha é limpa por completo (todos os 8 níveis vão a zero) e as interrupções são desativadas.",
      "O conteúdo do registro PCLATH é copiado para o registro STATUS, alterando o banco da RAM."
    ],
    answer: "O PC é totalmente carregado (13 bits) com o valor desempilhado da pilha (POP), sem utilizar o PCLATH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "115) Nos PICs com menos de 2K de memória não é necessário utilizar o REGISTRO PCLATH em qualquer desvio.",
    options: [
      "Verdadeiro, pois 11 bits no opcode de GOTO/CALL cobrem exatamente 2048 endereços (2K), não exigindo paginação via PCLATH.",
      "Falso, mesmo em chips de 256 bytes é obrigatório configurar o PCLATH antes de qualquer GOTO.",
      "Falso, o PCLATH não existe em microcontroladores com mais de 1K de memória Flash.",
      "Falso, o PCLATH é obrigatório apenas para configurar as portas digitais e não a memória."
    ],
    answer: "Verdadeiro, pois 11 bits no opcode de GOTO/CALL cobrem exatamente 2048 endereços (2K), não exigindo paginação via PCLATH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "116) Quais registros são usados para ACESSO INDIRETO a uma posição de uma memória RAM de dados?",
    options: [
      "INDF (00h, 80h, 100h e 180h) e FSR (04h, 84h, 104h e 184h).",
      "PCL e PCH no endereço 02h da memória de programa.",
      "TRISA e PORTA no Banco 0 da RAM.",
      "EECON1 e EEDATA na memória de dados não volátil."
    ],
    answer: "INDF (00h, 80h, 100h e 180h) e FSR (04h, 84h, 104h e 184h).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "117) Quais os modos de endereçamento da memória de dados RAM?",
    options: [
      "Direto (usando bits RP0/RP1 do STATUS e endereço na instrução) e Indireto (usando bit IRP do STATUS, FSR e INDF).",
      "Apenas endereçamento imediato por acumulador de 16 bits.",
      "Exclusivamente endereçamento vetoriado serial por DMA.",
      "Apenas endereçamento virtual paged de 32 bits."
    ],
    answer: "Direto (usando bits RP0/RP1 do STATUS e endereço na instrução) e Indireto (usando bit IRP do STATUS, FSR e INDF).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "118) O registro INDF não é um registro físico no chip.",
    options: [
      "Verdadeiro, ler ou escrever em INDF é uma operação virtual que acessa o endereço apontado pelo conteúdo do FSR.",
      "Falso, o INDF é um chip de memória externa conectado ao barramento serial.",
      "Falso, é um registro físico de 16 bits localizado no endereço 0xFF da EEPROM.",
      "Falso, o INDF armazena fisicamente a tensão de referência do conversor A/D."
    ],
    answer: "Verdadeiro, ler ou escrever em INDF é uma operação virtual que acessa o endereço apontado pelo conteúdo do FSR.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "119) Qual a função do registro FSR (File Select Register no acesso indireto)?",
    options: [
      "Especificar o endereço (ponteiro) do registro da memória RAM que se deseja acessar indiretamente via INDF.",
      "Contar o tempo decorrido desde o último reset de inicialização.",
      "Armazenar a configuração de velocidade em bauds da porta serial USART.",
      "Bloquear a gravação de dados em setores protegidos da memória Flash."
    ],
    answer: "Especificar o endereço (ponteiro) do registro da memória RAM que se deseja acessar indiretamente via INDF.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "120) Qual a função do registro INDF (acesso indireto)?",
    options: [
      "É o registro virtual usado para realizar a leitura ou escrita na posição de memória RAM cujo endereço está em FSR.",
      "Armazenar o código de erro gerado por uma falha de paridade na memória RAM.",
      "Configurar a polaridade do sinal PWM gerado no pino CCP1.",
      "Desativar as interrupções externas durante a comunicação com a memória EEPROM."
    ],
    answer: "É o registro virtual usado para realizar a leitura ou escrita na posição de memória RAM cujo endereço está em FSR.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "121) Qual registro de leitura e escrita possui bits de habilitação geral/individual e bits de flags usados no CONTROLE DAS INTERRUPÇÕES DO MICRO?",
    options: [
      "INTCON (endereços 0Bh, 8Bh, 10Bh e 18Bh, presente em todos os bancos).",
      "STATUS (endereços 03h, 83h, 103h e 183h).",
      "OPTION_REG (endereços 81h e 181h).",
      "PCON (endereço 8Eh)."
    ],
    answer: "INTCON (endereços 0Bh, 8Bh, 10Bh e 18Bh, presente em todos os bancos).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "122) Como se divide logicamente o registro INTCON?",
    options: [
      "Controle Geral de Interrupção (GIE, PEIE), Controle Individual de Habilitação (T0IE, INTE, RBIE) e Flags Sinalizadores (T0IF, INTF, RBIF).",
      "Em bits exclusivos para controle do conversor A/D e bits para o temporizador Watchdog.",
      "Apenas em 4 bits de paridade par e 4 bits de paridade ímpar.",
      "Em duas metades: uma para endereço de memória ROM e outra para dados RAM."
    ],
    answer: "Controle Geral de Interrupção (GIE, PEIE), Controle Individual de Habilitação (T0IE, INTE, RBIE) e Flags Sinalizadores (T0IF, INTF, RBIF).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "123) No registro INTCON por que é preciso zerar os bits flags antes ou após habilitar/atender as interrupções?",
    options: [
      "Para evitar falsos disparos ou reentradas infinitas na rotina de interrupção, pois o hardware não limpa a flag de solicitação automaticamente.",
      "Para não queimar os transistores internos do circuito INTEDG.",
      "Porque o compilador impede a compilação de código sem a instrução CLRF INTCON.",
      "Para permitir que a memória Flash de programa seja alimentada com 5 Volts."
    ],
    answer: "Para evitar falsos disparos ou reentradas infinitas na rotina de interrupção, pois o hardware não limpa a flag de solicitação automaticamente.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Discursiva]"
  },
  {
    question: "124) No registro INTCON o que ocorre quando o bit GIE (Global Interrupt Enable) estiver apagado/zerado (0)?",
    options: [
      "Nenhuma interrupção será atendida pela CPU, mesmo que as flags e habilitações individuais estejam ativas.",
      "O microcontrolador entra em reset imediato e apaga a memória RAM.",
      "A porta paralela escrava PSP assume o controle do barramento de dados.",
      "Apenas as interrupções do Timer 0 continuam funcionando, enquanto as outras são bloqueadas."
    ],
    answer: "Nenhuma interrupção será atendida pela CPU, mesmo que as flags e habilitações individuais estejam ativas.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Questão Direta]"
  },
  {
    question: "125) Quantas portas possui o PIC16F877?",
    options: [
      "Cinco portas (PORTA, PORTB, PORTC, PORTD e PORTE).",
      "Apenas duas portas (PORTA e PORTB).",
      "Oito portas de 8 bits cada.",
      "Três portas analógicas e duas digitais."
    ],
    answer: "Cinco portas (PORTA, PORTB, PORTC, PORTD e PORTE).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "126) Qual porta possui 6 I/O (pinos bidirecionais de entrada e saída)?",
    options: [
      "PORTA 'A' (RA0 a RA5).",
      "PORTA 'B' (RB0 a RB7).",
      "PORTA 'E' (RE0 a RE2).",
      "PORTA 'D' (RD0 a RD7)."
    ],
    answer: "PORTA 'A' (RA0 a RA5).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "128) Quais portas possuem 8 I/O (8 pinos bidirecionais)?",
    options: [
      "PORTAS B, C e D.",
      "PORTAS A, E e PSP.",
      "Apenas a PORTA B e a PORTA E.",
      "Exclusivamente a PORTA A e a PORTA C."
    ],
    answer: "PORTAS B, C e D.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "129) Na Porta A (bidirecional de 6 bits), qual o registro de direção correspondente?",
    options: [
      "TRISA.",
      "TRISB.",
      "PORTA.",
      "ADCON1."
    ],
    answer: "TRISA.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "130) Qual o endereço da Porta A na memória RAM de dados?",
    options: [
      "05h (Banco 0).",
      "85h (Banco 1).",
      "06h (Banco 0).",
      "00h (Banco 0)."
    ],
    answer: "05h (Banco 0).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "131) Qual o endereço do registro TRISA na memória RAM de dados?",
    options: [
      "85h (085h no Banco 1).",
      "05h (Banco 0).",
      "86h (Banco 1).",
      "185h (Banco 3)."
    ],
    answer: "85h (085h no Banco 1).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "132) O que ocorrerá quando um bit do TRISA for setado (1)?",
    options: [
      "Fará com que o pino correspondente da porta A seja configurado como uma ENTRADA (alta impedância / alta Z).",
      "Fará com que o pino correspondente forneça imediatamente 5 Volts na saída.",
      "Desligará o pino de alimentação da memória EEPROM.",
      "Ativará a interrupção externa por mudança de estado naquele pino."
    ],
    answer: "Fará com que o pino correspondente da porta A seja configurado como uma ENTRADA (alta impedância / alta Z).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "133) O que ocorrerá quando um bit do TRISA for apagado (0)?",
    options: [
      "Fará com que o pino correspondente da porta A seja configurado como uma SAÍDA (drivers de saída ativados).",
      "Fará com que o pino correspondente opere como entrada analógica do conversor A/D.",
      "Inverterá a polaridade do sinal de clock no pino OSC1.",
      "Colocará a porta A no modo de economia de energia tri-state permanente."
    ],
    answer: "Fará com que o pino correspondente da porta A seja configurado como uma SAÍDA (drivers de saída ativados).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "134) Na porta A qual componente interno é responsável por armazenar a configuração (setar/1 ou apagar/0) de um bit do TRISA?",
    options: [
      "TRIS LATCH.",
      "DATA LATCH.",
      "SCHMITT TRIGGER.",
      "BUFFER TTL."
    ],
    answer: "TRIS LATCH.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "135) Explique as operações de escrita em portas I/O do tipo leitura-modificação-escrita (read-modify-write):",
    options: [
      "A escrita na porta implica que os pinos físicos são lidos, o dado é modificado pela ULA e escrito novamente no latch de dados (Data Latch).",
      "O processador lê o código fonte, modifica o arquivo e o grava na memória Flash externa.",
      "A tensão de alimentação é medida, comparada com o Brown-Out Reset e gravada no STATUS.",
      "O conteúdo da memória EEPROM é lido, somado ao registro W e devolvido à porta serial."
    ],
    answer: "A escrita na porta implica que os pinos físicos são lidos, o dado é modificado pela ULA e escrito novamente no latch de dados (Data Latch).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "136) Por que não é recomendável efetuar uma operação de leitura imediatamente após a alteração de uma saída, devendo-se aguardar pelo menos 1 ciclo de máquina entre as duas operações?",
    options: [
      "Porque pode ocorrer um atraso de propagação (devido à capacitância/carga do pino) entre o comando de escrita e a efetiva alteração na saída.",
      "Porque o processador trava o barramento de dados por 16 ciclos após qualquer instrução BSF.",
      "Porque o Watchdog Timer consome 1 ciclo para verificar a paridade do pino.",
      "Porque o registro W perde o seu conteúdo caso a porta seja lida consecutivamente."
    ],
    answer: "Porque pode ocorrer um atraso de propagação (devido à capacitância/carga do pino) entre o comando de escrita e a efetiva alteração na saída.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "137) Na porta A como estão divididos eletricamente os seus 6 pinos quanto aos buffers de entrada?",
    options: [
      "5 pinos (RA0 a RA3, RA5) possuem entrada tipo TTL e 1 pino (RA4/T0CKI) possui entrada tipo SCHMITT TRIGGER.",
      "Todos os 6 pinos possuem buffers exclusivamente CMOS com pull-up ativo.",
      "3 pinos são do tipo relé eletromecânico e 3 são do tipo coletor aberto.",
      "Todos os pinos são entradas analógicas puras e não aceitam sinais digitais."
    ],
    answer: "5 pinos (RA0 a RA3, RA5) possuem entrada tipo TTL e 1 pino (RA4/T0CKI) possui entrada tipo SCHMITT TRIGGER.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "138) Na porta A quais pinos são multiplexados/ligados ao Conversor A/D (entradas analógicas)?",
    options: [
      "RA0, RA1, RA2, RA3 e RA5 (possuem níveis TTL no modo digital e drivers de saída CMOS).",
      "Apenas o pino RA4 (Schmitt Trigger).",
      "RA0 a RA7 em todos os 8 bits da porta.",
      "Apenas os pinos RB0 e RB1 da porta vizinha."
    ],
    answer: "RA0, RA1, RA2, RA3 e RA5 (possuem níveis TTL no modo digital e drivers de saída CMOS).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "139) Na porta A o pino RA4 é do tipo SCHMITT TRIGGER (e possui saída em dreno aberto / open-drain no modo digital).",
    options: [
      "Verdadeiro, o pino RA4/T0CKI possui buffer de entrada Schmitt Trigger e saída tipo dreno aberto.",
      "Falso, o pino RA4 possui entrada analógica pura com saída totem-pole.",
      "Falso, o pino RA4 é o único que possui relé interno de acionamento em 12V.",
      "Falso, o RA4 não pode ser usado como entrada de clock externo para o Timer 0."
    ],
    answer: "Verdadeiro, o pino RA4/T0CKI possui buffer de entrada Schmitt Trigger e saída tipo dreno aberto.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "140) Na porta A quem controla a direção dos pinos, mesmo que estes estejam sendo usados como entradas analógicas?",
    options: [
      "O registro TRISA, que deve estar com os seus bits setados (1) para evitar conflito com os drivers de saída.",
      "O registro ADCON0 unicamente, ignorando por completo o TRISA.",
      "O registro INTCON, que força os pinos em alta impedância.",
      "O pino MCLR, que chaveia entre modo analógico e modo serial."
    ],
    answer: "O registro TRISA, que deve estar com os seus bits setados (1) para evitar conflito com os drivers de saída.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "141) Na porta A qual componente interno é responsável por armazenar os dados de saída?",
    options: [
      "DATA LATCH.",
      "TRIS LATCH.",
      "STACK BUFFER.",
      "W REGISTER."
    ],
    answer: "DATA LATCH.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "142) Na Porta B (bidirecional de 8 bits), qual o registro de direção correspondente?",
    options: [
      "TRISB.",
      "TRISA.",
      "PORTB.",
      "OPTION_REG."
    ],
    answer: "TRISB.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "143) Qual o endereço da Porta B na memória RAM de dados?",
    options: [
      "06h (Banco 0) e 106h (Banco 2).",
      "05h (Banco 0) e 105h (Banco 2).",
      "07h (Banco 0) e 87h (Banco 1).",
      "08h (Banco 0) e 108h (Banco 2)."
    ],
    answer: "06h (Banco 0) e 106h (Banco 2).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "144) Qual o endereço do registro TRISB na memória RAM de dados?",
    options: [
      "86h (Banco 1) e 186h (Banco 3).",
      "06h (Banco 0) e 106h (Banco 2).",
      "85h (Banco 1) e 185h (Banco 3).",
      "87h (Banco 1) e 187h (Banco 3)."
    ],
    answer: "86h (Banco 1) e 186h (Banco 3).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "145) O que ocorrerá quando um bit do TRISB for setado (1)?",
    options: [
      "Fará com que o pino correspondente da porta B seja uma ENTRADA (a saída fica num estado de alta impedância Z).",
      "Fará com que o pino de saída force o nível lógico 1 (+5V) no circuito externo.",
      "Ativará o conversor A/D no pino RB0 da porta B.",
      "Bloqueará a leitura da porta serial síncrona."
    ],
    answer: "Fará com que o pino correspondente da porta B seja uma ENTRADA (a saída fica num estado de alta impedância Z).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "146) O que ocorrerá quando um bit do TRISB for apagado (0)?",
    options: [
      "Fará com que o pino correspondente da porta B seja uma SAÍDA digital.",
      "Colocará o pino da porta B no modo de alta impedância pura.",
      "Ativará a interrupção por mudança de estado em todos os 8 pinos.",
      "Desativará os resistores pull-up internos em todas as portas do chip."
    ],
    answer: "Fará com que o pino correspondente da porta B seja uma SAÍDA digital.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "147) Na porta B quais pinos são multiplexados com a função de Programação em Baixa Tensão (LVP/ICSP)?",
    options: [
      "RB3 (PGM), RB6 (PGC / Clock) e RB7 (PGD / Dados).",
      "RB0 (INT), RB1 e RB2.",
      "RB4, RB5 e RB7.",
      "Apenas os pinos RA0 e RA1 da porta A."
    ],
    answer: "RB3 (PGM), RB6 (PGC / Clock) e RB7 (PGD / Dados).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "148) Cite uma característica elétrica especial da porta B:",
    options: [
      "Possui resistores de pull-up internos FET (configuráveis por software via bit RPPU do OPTION_REG).",
      "Suporta entradas de até 120 Volts em corrente alternada direto no pino.",
      "Possui saídas a relé óptico para chaveamento de motores industriais.",
      "Não consome corrente alguma, possuindo resistências internas infinitas em qualquer modo."
    ],
    answer: "Possui resistores de pull-up internos FET (configuráveis por software via bit RPPU do OPTION_REG).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "149) Qual o tipo de pinagem (buffers de entrada) da porta B?",
    options: [
      "Toda a pinagem da porta B é do tipo TTL (exceto RB0 quando usado em interrupção externa e RB3/RB6/RB7 em programação, que são Schmitt Trigger).",
      "Todos os 8 pinos da porta B possuem exclusivamente buffers Schmitt Trigger em qualquer operação.",
      "Os pinos de RB0 a RB3 são analógicos puros e os de RB4 a RB7 são saídas tri-state sem buffer.",
      "A porta B é a única que utiliza entradas diferenciais de corrente de malha de 20mA."
    ],
    answer: "Toda a pinagem da porta B é do tipo TTL (exceto RB0 quando usado em interrupção externa e RB3/RB6/RB7 em programação, que são Schmitt Trigger).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "150) Na porta B quais pinos são interligados à interrupção por mudança de estado (change-on-interrupt) quando configurados como entrada?",
    options: [
      "RB4 a RB7 (os 4 pinos mais significativos da porta B: RB4, RB5, RB6 e RB7).",
      "RB0 a RB3 apenas.",
      "Apenas o pino RB0 isoladamente.",
      "Todos os 8 pinos de RB0 a RB7 simultaneamente."
    ],
    answer: "RB4 a RB7 (os 4 pinos mais significativos da porta B: RB4, RB5, RB6 e RB7).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "151) Na porta B qual pino é associado diretamente à interrupção externa (INT), desde que configurado como entrada?",
    options: [
      "RB0 (pino RB0/INT).",
      "RB7 (pino RB7/PGD).",
      "RB4 (pino de mudança de estado).",
      "RB3 (pino PGM)."
    ],
    answer: "RB0 (pino RB0/INT).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "152) Na porta B o que permite a fácil interligação com teclados matriciais sem o uso de resistores externos?",
    options: [
      "A interrupção por mudança de estado (em RB4-RB7) combinada com os resistores pull-up internos configuráveis por software.",
      "O conversor A/D integrado que mede a resistência exata de cada tecla pressionada.",
      "A porta paralela escrava PSP, que varre o teclado automaticamente em 1 ciclo.",
      "O módulo PWM do Timer 2, que emite pulsos de áudio ao pressionar uma tecla."
    ],
    answer: "A interrupção por mudança de estado (em RB4-RB7) combinada com os resistores pull-up internos configuráveis por software.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "153) Na Porta C (bidirecional de 8 bits), qual o registro de direção correspondente?",
    options: [
      "TRISC.",
      "TRISB.",
      "PORTC.",
      "ADCON0."
    ],
    answer: "TRISC.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "154) Qual o endereço da Porta C na memória RAM de dados?",
    options: [
      "07h (Banco 0).",
      "87h (Banco 1).",
      "06h (Banco 0).",
      "08h (Banco 0)."
    ],
    answer: "07h (Banco 0).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "155) Qual o endereço do registro TRISC na memória RAM de dados?",
    options: [
      "87h (Banco 1).",
      "07h (Banco 0).",
      "187h (Banco 3).",
      "88h (Banco 1)."
    ],
    answer: "87h (Banco 1).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "156) O que ocorrerá quando um bit do TRISC for setado (1)?",
    options: [
      "Fará com que o pino correspondente da porta C seja configurado como uma ENTRADA (alta impedância Z).",
      "Ativará a transmissão de dados no pino RC6 do módulo USART.",
      "Fará com que o pino forneça corrente máxima de 25 mA na saída.",
      "Desligará o oscilador de cristal do Timer 1 nos pinos RC0 e RC1."
    ],
    answer: "Fará com que o pino correspondente da porta C seja configurado como uma ENTRADA (alta impedância Z).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "157) O que ocorrerá quando um bit do TRISC for apagado (0)?",
    options: [
      "Fará com que o pino correspondente da porta C seja configurado como uma SAÍDA digital.",
      "Colocará o pino em modo tri-state para recepção de sinais analógicos.",
      "Acionará o reset por queda de tensão BOR na porta C.",
      "Inverterá a ordem dos bits na comunicação serial SPI."
    ],
    answer: "Fará com que o pino correspondente da porta C seja configurado como uma SAÍDA digital.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "158) Qual o tipo de pinagem (buffers de entrada) da porta C?",
    options: [
      "Seus pinos possuem buffers de entrada SCHMITT TRIGGER (garantindo maior imunidade a ruídos em periféricos como I2C/SPI/USART).",
      "Todos os 8 pinos possuem buffers puramente TTL sem histerese.",
      "A porta C possui apenas entradas analógicas multiplexadas com o comparador.",
      "Os pinos são opto-isolados por diodos emissores de luz internos."
    ],
    answer: "Seus pinos possuem buffers de entrada SCHMITT TRIGGER (garantindo maior imunidade a ruídos em periféricos como I2C/SPI/USART).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "159) Na porta C como os pinos 3 (RC3/SCL) e 4 (RC4/SDA) podem ser configurados quando o módulo I2C é habilitado?",
    options: [
      "São configurados e controlados em seus níveis de tensão e especificação I2C/SMBus pelo bit CKE (bit 6 do registro SSPSTAT).",
      "São configurados como saídas analógicas de 12 Volts pelo registro STATUS.",
      "São controlados exclusivamente pelos bits PS0 a PS2 do prescaler do Timer 0.",
      "Tornam-se pinos de alimentação auxiliar para o módulo de memória EEPROM."
    ],
    answer: "São configurados e controlados em seus níveis de tensão e especificação I2C/SMBus pelo bit CKE (bit 6 do registro SSPSTAT).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "160) Na porta C quais cuidados devem ser tomados quando funções periféricas (como SPI ou I2C) são habilitadas?",
    options: [
      "As instruções do tipo leitura-modificação-escrita (como BSF, BCF, XORWF) devem ser evitadas quando tiverem a porta/TRISC como destino.",
      "Deve-se obrigatoriamente desconectar a alimentação VDD durante a transmissão serial.",
      "Os pinos RC0 a RC7 devem ser ligados ao terra com capacitores de 100 µF.",
      "O processador deve operar apenas com cristal de 32 kHz para evitar conflitos no buffer."
    ],
    answer: "As instruções do tipo leitura-modificação-escrita (como BSF, BCF, XORWF) devem ser evitadas quando tiverem a porta/TRISC como destino.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "161) Na Porta D (bidirecional de 8 bits no encapsulamento de 40 pinos), qual o registro de direção correspondente?",
    options: [
      "TRISD.",
      "TRISC.",
      "PORTD.",
      "PCON."
    ],
    answer: "TRISD.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "162) Qual o endereço da Porta D na memória RAM de dados?",
    options: [
      "08h (Banco 0).",
      "88h (Banco 1).",
      "09h (Banco 0).",
      "108h (Banco 2)."
    ],
    answer: "08h (Banco 0).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "163) Qual o endereço do registro TRISD na memória RAM de dados?",
    options: [
      "88h (Banco 1).",
      "08h (Banco 0).",
      "89h (Banco 1).",
      "188h (Banco 3)."
    ],
    answer: "88h (Banco 1).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "164) Qual o tipo de pinagem (buffers de entrada) da porta D em operação normal de I/O digital?",
    options: [
      "Seus pinos possuem buffers de entrada SCHMITT TRIGGER.",
      "Possui exclusivamente buffers de entrada tipo TTL em qualquer modo.",
      "Seus pinos possuem buffers analógicos CMOS diferenciais sem proteção.",
      "A porta D não possui buffers de entrada, operando como coletor aberto."
    ],
    answer: "Seus pinos possuem buffers de entrada SCHMITT TRIGGER.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "165) Como a porta D pode ser configurada para operar como uma PORTA PARALELA ESCRAVA (PSP - Parallel Slave Port)?",
    options: [
      "Pela ativação do bit de controle PSPMODE (bit 4 do registro TRISE / TRISE<4>).",
      "Pela ativação do bit SPEN (bit 7) no registro RCSTA da USART.",
      "Escrevendo o valor 0xFF no registro TRISD do Banco 1.",
      "Conectando 5 Volts ao pino externo RD0 e ativando a interrupção no INTCON."
    ],
    answer: "Pela ativação do bit de controle PSPMODE (bit 4 do registro TRISE / TRISE<4>).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "166) Como é a pinagem (buffers de entrada) da porta D quando operando no modo PSP (Porta Paralela Escrava)?",
    options: [
      "Neste modo PSP, os buffers de entrada da porta D assumem comportamento TTL (compatível com barramentos de microprocessadores).",
      "No modo PSP, os buffers tornam-se Schmitt Trigger de alta histerese.",
      "No modo PSP, os pinos tornam-se exclusivamente saídas analógicas de 10 bits.",
      "Os buffers são desligados e a porta opera por acoplamento magnético."
    ],
    answer: "Neste modo PSP, os buffers de entrada da porta D assumem comportamento TTL (compatível com barramentos de microprocessadores).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "167) A porta D no modo PSP é ASSÍNCRONA.",
    options: [
      "Verdadeiro, no modo PSP a transferência de dados e controle (CS, RD, WR) é assíncrona ao clock do microcontrolador.",
      "Falso, no modo PSP a transferência depende estritamente do sinal de clock do Timer 1.",
      "Falso, a porta D só funciona de modo síncrono com baud rate gerado pela USART.",
      "Falso, o modo PSP exige sincronismo por fibra óptica entre as duas CPUs."
    ],
    answer: "Verdadeiro, no modo PSP a transferência de dados e controle (CS, RD, WR) é assíncrona ao clock do microcontrolador.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "168) Na Porta E (de 3 bits: RE0, RE1 e RE2 no encapsulamento de 40 pinos), qual o registro de direção correspondente?",
    options: [
      "TRISE.",
      "TRISD.",
      "PORTE.",
      "ADCON1."
    ],
    answer: "TRISE.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "169) Qual o endereço da Porta E na memória RAM de dados?",
    options: [
      "09h (Banco 0).",
      "89h (Banco 1).",
      "08h (Banco 0).",
      "0Ah (Banco 0)."
    ],
    answer: "09h (Banco 0).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "170) Qual o endereço do registro TRISE na memória RAM de dados?",
    options: [
      "89h (Banco 1).",
      "09h (Banco 0).",
      "189h (Banco 3).",
      "8Ah (Banco 1)."
    ],
    answer: "89h (Banco 1).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "171) Qual o tipo de pinagem (buffers de entrada) da porta E em operação digital I/O?",
    options: [
      "Seus pinos possuem buffers de entrada SCHMITT TRIGGER no modo digital.",
      "Seus pinos possuem buffers puramente TTL incondicionais.",
      "Os pinos da porta E não possuem buffers, sendo apenas saídas de potência a relé.",
      "A porta E utiliza buffers bipolares diferenciais de alta frequência."
    ],
    answer: "Seus pinos possuem buffers de entrada SCHMITT TRIGGER no modo digital.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "172) Na porta E qual registro e bit é responsável por controlar a operação da Porta Paralela Escrava (PSP)?",
    options: [
      "Registro TRISE, bit 4 (bit PSPMODE / TRISE<4>).",
      "Registro STATUS, bit RP0 (bit 5).",
      "Registro INTCON, bit GIE (bit 7).",
      "Registro OPTION_REG, bit T0CS (bit 5)."
    ],
    answer: "Registro TRISE, bit 4 (bit PSPMODE / TRISE<4>).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Direta]"
  },
  {
    question: "173) Na porta E como devem estar configurados os bits de controle no registro ADCON1 quando os pinos RE0, RE1 e RE2 são selecionados para entradas digitais?",
    options: [
      "Os bits de controle da palavra PCFG (no ADCON1) devem ser setados (por exemplo, 0x06 ou 0x07) para configurar os pinos em modo digital.",
      "Todos os bits de ADCON1 devem ser limpos (0x00), forçando o modo digital em todas as portas.",
      "O bit PSPMODE em TRISE deve ser limpo a zero e a alimentação desligada.",
      "O registro TRISA deve ser carregado com o valor hexadecimal 0xFF."
    ],
    answer: "Os bits de controle da palavra PCFG (no ADCON1) devem ser setados (por exemplo, 0x06 ou 0x07) para configurar os pinos em modo digital.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "174) Na porta E como devem estar os pinos/configurações em ADCON1 quando selecionados para entradas analógicas do conversor A/D?",
    options: [
      "Os bits de controle no ADCON1 devem ser configurados (apagados/0 nas posições correspondentes de PCFG) e o TRISE setado (=1).",
      "A porta E deve ser configurada em modo de programação serial síncrona com clock no pino RE1.",
      "O bit PSPMODE deve estar em 1 e os resistores pull-up do OPTION_REG ativados.",
      "Os pinos RE0, RE1 e RE2 devem ser curto-circuitados ao pino de referência VREF+."
    ],
    answer: "Os bits de controle no ADCON1 devem ser configurados (apagados/0 nas posições correspondentes de PCFG) e o TRISE setado (=1).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "175) Como trabalha a Porta Paralela Escrava (PSP) implementada no PIC16F877?",
    options: [
      "Trabalha unicamente no modo escravo (assíncrona ao clock), sendo controlada por linhas externas RD, WR e CS para leitura e escrita em PORTD.",
      "Atua como mestre principal no barramento, comandando memórias e outros microcontroladores de 32 bits.",
      "Opera exclusivamente em modo serial síncrono para transferência de áudio digital a 44,1 kHz.",
      "Funciona como gerador automático de sinal PWM com 8 canais independentes na porta D."
    ],
    answer: "Trabalha unicamente no modo escravo (assíncrona ao clock), sendo controlada por linhas externas RD, WR e CS para leitura e escrita em PORTD.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "176) Qual a outra aplicação principal da Porta Paralela Escrava (PSP)?",
    options: [
      "Pode ser usada como interface de comunicação paralela para conexão direta com outros microcontroladores ou microprocessadores de 8 bits.",
      "Substituir o cristal oscilador principal quando o chip entra no modo Brown-Out Reset.",
      "Fornecer alimentação de +12 Volts para a gravação da memória Flash sem fonte externa.",
      "Operar como saída analógica direta para alto-falantes e transdutores piezelétricos."
    ],
    answer: "Pode ser usada como interface de comunicação paralela para conexão direta com outros microcontroladores ou microprocessadores de 8 bits.",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
];
