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
    question: "Qual a função do Contador de Programa (PC)?",
    options: [
      "Realizar operações lógicas e aritméticas.",
      "Armazenar os dados de calibração do cristal.",
      "Apontar o endereço da próxima instrução a ser executada.",
      "Controlar o estouro do Watchdog Timer."
    ],
    answer: "Apontar o endereço da próxima instrução a ser executada.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "Defina Pipeline.",
    options: [
      "Técnica que executa uma instrução enquanto busca a próxima.",
      "Barramento de comunicação serial assíncrona.",
      "Memória não-volátil para armazenamento de dados.",
      "Conversão de sinais analógicos para digitais."
    ],
    answer: "Técnica que executa uma instrução enquanto busca a próxima.",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "A família de microcontroladores \\\"PIC\\\" pertence a qual fabricante?",
    options: [
      "Intel",
      "Atmel",
      "Motorola",
      "Microchip"
    ],
    answer: "Microchip",
    topic: "Capítulo 1 - Introdução aos Microcontroladores [Múltipla Escolha]"
  },
  {
    question: "Quantas instruções podem ser armazenadas na memória Flash do PIC 16F877?",
    options: [
      "1024",
      "2048",
      "4096",
      "8192"
    ],
    answer: "8192",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Se a frequência do clock externo for 16MHz, a frequência interna será:",
    options: [
      "1 MHz",
      "4 MHz",
      "8 MHz",
      "16 MHz"
    ],
    answer: "4 MHz",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "A frequência do clock externo para um ciclo de instrução de 200 ns é:",
    options: [
      "4 MHz",
      "10 MHz",
      "16 MHz",
      "20 MHz"
    ],
    answer: "20 MHz",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "O tempo de uma instrução de salto com clock externo de 4MHz é:",
    options: [
      "1 µs",
      "2 µs",
      "4 µs",
      "8 µs"
    ],
    answer: "2 µs",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "De acordo com as características do PIC16F877, marque a opção INCORRETA:",
    options: [
      "O espelhamento facilita evitando trocas constantes de banco.",
      "Não há bits de status para indicar pilha cheia.",
      "O microcontrolador possui 7 tipos de interrupções.",
      "O registro especial STATUS está em todos os bancos."
    ],
    answer: "O microcontrolador possui 7 tipos de interrupções.",
    topic: "Capítulo 2 - Visão Geral do PIC16F877 [Múltipla Escolha]"
  },
  {
    question: "Qual o endereço do vetor de interrupção na memória Flash?",
    options: [
      "0000h",
      "0004h",
      "2007h",
      "0005h"
    ],
    answer: "0004h",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Na memória FLASH quais bits operam como CHAVE SELETORA de página nas instruções GOTO e CALL?",
    options: [
      "RP0 e RP1 do STATUS",
      "Bits <4:3> do PCLATH",
      "GIE e PEIE do INTCON",
      "PS0 e PS1 do OPTION_REG"
    ],
    answer: "Bits <4:3> do PCLATH",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Por que usamos o termo \\\"Banco\\\" para a memória RAM?",
    options: [
      "Porque a memória é dividida em páginas de 2K.",
      "Para separar fisicamente a memória de programa da de dados.",
      "Pois os 7 bits de instrução endereçam apenas 128 bytes",
      "exigindo agrupamento em bancos.",
      "Para armazenar variáveis como em um banco de dados."
    ],
    answer: "Pois os 7 bits de instrução endereçam apenas 128 bytes, exigindo agrupamento em bancos.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "No endereçamento direto, a seleção do banco de memória é feita por:",
    options: [
      "Registros INDF e FSR",
      "Bits <4:3> do PCLATH",
      "Bits RP1 e RP0 do STATUS",
      "Bit GIE do INTCON"
    ],
    answer: "Bits RP1 e RP0 do STATUS",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Cite a principal característica do registro especial W (WORK).",
    options: [
      "Mapeado no Banco 0 e aponta para a RAM.",
      "Ponte/destino de operações",
      "mas NÃO mapeado na memória RAM.",
      "Aponta para o topo da Pilha (Stack).",
      "Configura resistores de pull-up globais."
    ],
    answer: "Ponte/destino de operações, mas NÃO mapeado na memória RAM.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Qual bit e registro indicam que o Watchdog provocou o reset do micro?",
    options: [
      "Bit /POR em 0 no PCON",
      "Bit Z em 1 no STATUS",
      "Bit GIE em 0 no INTCON",
      "Bit /TO em 0 no STATUS"
    ],
    answer: "Bit /TO em 0 no STATUS",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Se, num teste, o bit Z (STATUS<2>) está em '1', o que aconteceu?",
    options: [
      "Ocorreu um estouro (overflow) na pilha.",
      "A contagem do TIMER0 estourou.",
      "O resultado da operação lógica/aritmética anterior foi zero.",
      "Houve transporte de bit (carry) na soma."
    ],
    answer: "O resultado da operação lógica/aritmética anterior foi zero.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "No endereçamento indireto, qual registro aponta para a memória RAM?",
    options: [
      "FSR",
      "INDF",
      "PCLATH",
      "STATUS"
    ],
    answer: "FSR",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "O registro que mostra o estado geral do microcontrolador é:",
    options: [
      "OPTION_REG",
      "INTCON",
      "FSR",
      "STATUS"
    ],
    answer: "STATUS",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Qual bit é a chave geral das interrupções no PIC16F877?",
    options: [
      "PEIE (INTCON)",
      "GIE (INTCON)",
      "INTE (STATUS)",
      "ADIE (PIE1)"
    ],
    answer: "GIE (INTCON)",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "O registro que mostra o estado geral das interrupções é o:",
    options: [
      "STATUS",
      "OPTION_REG",
      "INTCON",
      "PCON"
    ],
    answer: "INTCON",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "O endereço contido no PC durante a instrução GOTO é formado por:",
    options: [
      "Endereço retirado da Pilha.",
      "11 bits do Opcode + bits <4:3> do PCLATH.",
      "7 bits do Opcode + RP0 e RP1 do STATUS.",
      "Endereço absoluto apontado pelo FSR."
    ],
    answer: "11 bits do Opcode + bits <4:3> do PCLATH.",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "O endereço contido no PC no retorno de uma sub-rotina (RETURN) é formado por:",
    options: [
      "11 bits da instrução.",
      "Bits <4:3> do PCLATH.",
      "Endereço recuperado do Topo da Pilha (TOS).",
      "Endereço absoluto apontado por W."
    ],
    answer: "Endereço recuperado do Topo da Pilha (TOS).",
    topic: "Capítulo 3 - Organização da Memória do PIC [Múltipla Escolha]"
  },
  {
    question: "Qual registro controla a operação da porta D como Porta Paralela Escrava (PSP)?",
    options: [
      "TRISD",
      "TRISE",
      "PORTD",
      "OPTION_REG"
    ],
    answer: "TRISE",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Qual porta pode usar resistores de pull-up internos?",
    options: [
      "PORTA",
      "PORTB",
      "PORTC",
      "PORTD"
    ],
    answer: "PORTB",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "Qual opção define o PORTC metade SAÍDA (RC0 a RC3) e metade ENTRADA (RC4 a RC7)?",
    options: [
      "TRISC = 00001111b",
      "TRISC = 11110000b",
      "PORTC = 11110000b",
      "TRISC = 10101010b"
    ],
    answer: "TRISC = 11110000b",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Múltipla Escolha]"
  },
  {
    question: "LED ligado em RB4 (acende com nível alto). Se TRISB = 45h (0100 0101b) e PORTB = AAh (1010 1010b), o LED está:",
    options: [
      "Aceso",
      "pois é saída e recebe nível alto.",
      "Apagado",
      "pois RB4 está configurado como entrada.",
      "Apagado",
      "pois RB4 é saída (0)",
      "mas o pino recebe nível baixo (0).",
      "Aceso",
      "independentemente do registro TRISB."
    ],
    answer: "Apagado, pois RB4 é saída (0), mas o pino recebe nível baixo (0).",
    topic: "Capítulo 4 - Portas de Entrada e Saída (I/O) [Questão Discursiva]"
  },
  {
    question: "Após a leitura da memória EEPROM de dados, o dado lido é armazenado em qual registro?",
    options: [
      "EEADR",
      "Flash",
      "STATUS",
      "EEDATA"
    ],
    answer: "EEDATA",
    topic: "Capítulo 5 - Memória EEPROM e Flash [Múltipla Escolha]"
  },
];
