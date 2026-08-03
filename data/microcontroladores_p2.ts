import type { Question } from "../types/question";

export const microcontroladoresP2Questions: Question[] = [
  {
    "question": "O valor máximo da contagem na saída do Timer0 com prescaler de 1:64 é:",
    "options": [
      "256 eventos",
      "1024 eventos",
      "8192 eventos",
      "16384 eventos",
      "32768 eventos"
    ],
    "answer": "16384 eventos"
  },
  {
    "question": "Registro de controle T1CON é usado na operação do módulo:",
    "options": [
      "Timer0",
      "Timer1",
      "Timer2",
      "ADC",
      "USART"
    ],
    "answer": "Timer1"
  },
  {
    "question": "Como podemos ampliar a contagem do TMR0?",
    "options": [
      "Alterando o cristal externo",
      "Usando o Watchdog Timer",
      "Configurando o Prescaler",
      "Usando o Módulo CCP",
      "Habilitando a interrupção global"
    ],
    "answer": "Configurando o Prescaler"
  },
  {
    "question": "O módulo TMR0 possui as seguintes características, EXCETO:",
    "options": [
      "É um temporizador/contador de 8 bits",
      "Pode ser lido mas, não escrito",
      "Possui prescaler de 8 bits programável",
      "Seleção de clock interno ou externo",
      "Gera interrupção no overflow (transbordamento) de FFh para 00h"
    ],
    "answer": "Pode ser lido mas, não escrito"
  },
  {
    "question": "_____ é selecionado no MUX pelo bit T0CS (OPTION_REG<5>). Neste modo, o módulo Timer0 incrementará livremente a cada ciclo de instrução, isto é, Fosc/4 (sem prescaler).",
    "options": [
      "Modo Captura",
      "Modo Contador",
      "Modo Síncrono",
      "Modo PWM",
      "Modo Temporizador"
    ],
    "answer": "Modo Temporizador"
  },
  {
    "question": "Qual é o pino no PIC16F877 que, ao ser inserido um clock externo, possibilita incrementar o módulo Timer0?",
    "options": [
      "RA0/AN0",
      "RA4/T0CK1",
      "RB0/INT",
      "RC0/T1OSO",
      "RC2/CCP1"
    ],
    "answer": "RA4/T0CK1"
  },
  {
    "question": "Qual recurso, no PIC16F877, permite que o TIMER1 continue a sua contagem durante o SLEEP?",
    "options": [
      "Oscilador RC interno",
      "Oscilador externo",
      "Watchdog Timer",
      "Prescaler do Timer0",
      "Módulo CCP"
    ],
    "answer": "Oscilador externo"
  },
  {
    "question": "Como é feita, no PIC16F877, a sincronização do clock externo e o interno no TIMER1?",
    "options": [
      "O temporizador incrementa a cada borda de descida do clock de entrada RC2",
      "O temporizador incrementa a cada borda de subida do clock de entrada RC0 ou RC1",
      "Por interrupção no pino RB0",
      "Através do comparador analógico",
      "O clock externo substitui o Fosc/4 diretamente sem sincronização"
    ],
    "answer": "O temporizador incrementa a cada borda de subida do clock de entrada RC0 ou RC1"
  },
  {
    "question": "Assinale a alternativa correta com relação ao módulo TMR2.",
    "options": [
      "É um temporizador de 16 bits",
      "Possui apenas Prescaler",
      "Opera durante o SLEEP",
      "possui Prescaler e Postscaler programáveis",
      "É usado para contar eventos externos"
    ],
    "answer": "possui Prescaler e Postscaler programáveis"
  },
  {
    "question": "Quanto ao Módulo TMR1, assinale a alternativa INCORRETA.",
    "options": [
      "É um temporizador/contador de 16 bits",
      "Pode operar no modo síncrono ou assíncrono",
      "limite de contagem vai de 00h até FFh",
      "Pode ser usado com oscilador próprio",
      "Interrompe no overflow de FFFFh para 0000h"
    ],
    "answer": "limite de contagem vai de 00h até FFh"
  },
  {
    "question": "O módulo CCP no modo Captura possui a função de:",
    "options": [
      "Gerar sinais PWM",
      "contagem de tempo entre dois eventos",
      "Comparar valores analógicos",
      "Converter sinais analógicos em digitais",
      "Transmitir dados serialmente"
    ],
    "answer": "contagem de tempo entre dois eventos"
  },
  {
    "question": "O módulo CCP no modo Compare possui a função de:",
    "options": [
      "Comparar constantemente os registros TMR1 (L e H) e CCPRx (L e H)",
      "Comparar a tensão de dois pinos analógicos",
      "Gerar interrupção quando TMR2 atinge o valor PR2",
      "Comparar os bits do registro STATUS",
      "Comparar dados recebidos via USART"
    ],
    "answer": "Comparar constantemente os registros TMR1 (L e H) e CCPRx (L e H)"
  },
  {
    "question": "Assinale a opção que NÃO corresponde ao módulo CCP no modo Compare:",
    "options": [
      "Força o pino CCPx a nível alto na igualdade",
      "Força o pino CCPx a nível baixo na igualdade",
      "Gera uma interrupção na igualdade",
      "comparar sinais analógicos",
      "Aciona um Evento Especial (Special Event Trigger)"
    ],
    "answer": "comparar sinais analógicos"
  },
  {
    "question": "Como está dividido o registro CCP1?",
    "options": [
      "CCP1CON e CCP1STAT",
      "CCPR1L e CCPR1H",
      "CCP1LOW e CCP1HIGH",
      "TMR1 e CCP1",
      "PR2 e CCP1"
    ],
    "answer": "CCPR1L e CCPR1H"
  },
  {
    "question": "Em que situação ocorre um evento especial de disparo (special event trigger) no CCP2CON?",
    "options": [
      "Quando houver transbordamento no Timer0",
      "Quando ocorrer uma interrupção externa no pino RB0",
      "Quando houver igualdade na comparação com o Timer1",
      "Ao receber um dado na USART",
      "Quando o Watchdog Timer estourar"
    ],
    "answer": "Quando houver igualdade na comparação com o Timer1"
  },
  {
    "question": "No Modo Capture, no momento em que ocorre um evento nos pinos RC2/CCP1 ou RC1/CCP2, é gerado um sinal de captura que copia a contagem atual dos registros _____ e _____ para o par de registros _____ e _____.",
    "options": [
      "TMR0, PR2; CCPRxL, CCPRxH",
      "TMR1L, TMR1H; CCPRxL, CCPRxH",
      "TMR2, PR2; TMR1L, TMR1H",
      "ADRESH, ADRESL; CCPRxL, CCPRxH",
      "CCPRxL, CCPRxH; TMR1L, TMR1H"
    ],
    "answer": "TMR1L, TMR1H; CCPRxL, CCPRxH"
  },
  {
    "question": "Quais os bits do CCPxCON que habilitam as opções tanto no Modo Capture quanto no Modo Compare?",
    "options": [
      "<7,6>",
      "<5,4>",
      "<0,3>",
      "<1,2>",
      "<4,7>"
    ],
    "answer": "<0,3>"
  },
  {
    "question": "Como os Módulos CCP1 e CCP2 operam no SLEEP, nos seus modos de operação?",
    "options": [
      "Capture operante, Compare operante e PWM inoperante",
      "Capture operante, Compare inoperante e PWM operante",
      "Capture inoperante, Compare inoperante e PWM inoperante",
      "Apenas o modo PWM continua operante",
      "Todos os modos continuam operantes normalmente"
    ],
    "answer": "Capture inoperante, Compare inoperante e PWM inoperante"
  },
  {
    "question": "Quando o Módulo CCP está operando no Modo PWM, qual registro é utilizado como temporizador para todas as ações?",
    "options": [
      "TMR0",
      "TMR1",
      "TMR2",
      "PR2",
      "WDT"
    ],
    "answer": "TMR2"
  },
  {
    "question": "Qual é a resolução e o valor de PR2 para um pulso PWM de frequência 78,125 kHz, frequência do oscilador principal de 20 MHz e Prescaler do Timer2 ajustado em 1:1?",
    "options": [
      "31 e 10 bits",
      "63 e 8 bits",
      "127 e 7 bits",
      "255 e 8 bits",
      "63 e 10 bits"
    ],
    "answer": "63 e 8 bits"
  },
  {
    "question": "Na operação da porta MSSP no modo I²C, pelo usuário, quando se inicia uma condição Start?",
    "options": [
      "Automaticamente na inicialização do módulo",
      "Quando o pino SDA vai a zero",
      "Quando da habilitação do bit SEN (SSPCON2<0>)",
      "Quando ocorre uma interrupção da USART",
      "Escrevendo no registro SSPBUF"
    ],
    "answer": "Quando da habilitação do bit SEN (SSPCON2<0>)"
  },
  {
    "question": "A função do bit ACK em uma transmissão mestre/escravo é:",
    "options": [
      "Iniciar a comunicação I²C",
      "Informar ao mestre do sucesso ou não da operação",
      "Finalizar a transmissão (Stop bit)",
      "Configurar a velocidade da transmissão",
      "Selecionar o escravo a ser endereçado"
    ],
    "answer": "Informar ao mestre do sucesso ou não da operação"
  },
  {
    "question": "O número máximo de dispositivos ligados ao barramento I²C é função:",
    "options": [
      "Do tamanho do registro de deslocamento",
      "Do número de pinos disponíveis no microcontrolador",
      "Da velocidade do clock",
      "Da capacitância máxima do barramento",
      "Do tamanho do endereço (7 ou 10 bits)"
    ],
    "answer": "Da capacitância máxima do barramento"
  },
  {
    "question": "No barramento I²C, a condição na qual ocorre uma transição negativa na linha SDA enquanto a linha SCL estiver em nível lógico alto é conhecida como:",
    "options": [
      "STOP",
      "ACK",
      "NACK",
      "START",
      "DATA"
    ],
    "answer": "START"
  },
  {
    "question": "O módulo _____ é uma interface série síncrona usada para a comunicação com outros periféricos ou dispositivos microcontroladores.",
    "options": [
      "USART",
      "Master Synchronous Serial Port (MSSP)",
      "CCP",
      "Comparador Analógico",
      "PORTA"
    ],
    "answer": "Master Synchronous Serial Port (MSSP)"
  },
  {
    "question": "Recurso que permite ao dispositivo mestre endereçar todos os dispositivos escravos simultaneamente:",
    "options": [
      "Endereçamento de 10 bits",
      "Endereço de Chamada Geral",
      "Condição de Start Repetida",
      "Baud Rate Generator",
      "Operação Multimestre"
    ],
    "answer": "Endereço de Chamada Geral"
  },
  {
    "question": "O dispositivo mestre não diferencia automaticamente o tipo de comunicação em 7 ou 10 bits; ele somente transmite e recebe informações de ___ bits.",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "16"
    ],
    "answer": "8"
  },
  {
    "question": "O que representa o estado do bit ACKSTAT = 1?",
    "options": [
      "Ocorreu um erro na escrita",
      "A transmissão foi bem sucedida",
      "O barramento está livre",
      "Um dispositivo escravo está solicitando atenção",
      "Condição de STOP foi recebida"
    ],
    "answer": "Ocorreu um erro na escrita"
  },
  {
    "question": "Qual é a diferença numa transmissão de um dispositivo Mestre num endereçamento de 10 bits para um endereçamento de 7 bits?",
    "options": [
      "endereço de 7 bits transmite 1 Byte; endereço de 10 bits, 2 Bytes",
      "endereço de 7 bits usa a USART; de 10 bits usa o MSSP",
      "endereço de 7 bits transmite mais rápido",
      "endereço de 10 bits não permite bit de ACK",
      "Nenhuma, ambos transmitem 1 Byte para o endereço"
    ],
    "answer": "endereço de 7 bits transmite 1 Byte; endereço de 10 bits, 2 Bytes"
  },
  {
    "question": "Qual é a diferença da transmissão para a recepção de um dispositivo Mestre num endereçamento de 10 bits?",
    "options": [
      "Na recepção não há ACK",
      "A necessidade do dispositivo de gerar uma condição de re-START após o envio do segundo byte",
      "O dispositivo não pode receber dados em 10 bits, apenas transmitir",
      "A velocidade deve ser reduzida pela metade",
      "O endereço deve ser enviado invertido"
    ],
    "answer": "A necessidade do dispositivo de gerar uma condição de re-START após o envio do segundo byte"
  },
  {
    "question": "A função do Gerador de Baud Rate (BRG) do módulo USART é:",
    "options": [
      "Sincronizar o clock I²C",
      "determinar a quantidade de bits que pode ser transmitida por segundo",
      "Gerar interrupções de tempo real",
      "Calcular o checksum dos dados",
      "Dividir o clock do Timer0"
    ],
    "answer": "determinar a quantidade de bits que pode ser transmitida por segundo"
  },
  {
    "question": "Os modos em que pode ser configurado o módulo USART são:",
    "options": [
      "analógico e digital",
      "mestre e escravo",
      "capture e compare",
      "síncrono e assíncrono",
      "sleep e ativo"
    ],
    "answer": "síncrono e assíncrono"
  },
  {
    "question": "Na Recepção Assíncrona da USART, depois de receber o bit de STOP, os dados acumulados no registro RSR são transferidos para o registro de dados _____ (se estiver vazio).",
    "options": [
      "TXREG",
      "SPBRG",
      "RCREG",
      "SSPBUF",
      "PIR1"
    ],
    "answer": "RCREG"
  },
  {
    "question": "Qual dos modos deve ser configurado o módulo USART para a comunicação com computadores?",
    "options": [
      "Síncrono Mestre",
      "Síncrono Escravo",
      "I²C",
      "SPI",
      "Assíncrono"
    ],
    "answer": "Assíncrono"
  },
  {
    "question": "Quais registros fazem o controle dos estados da transmissão e da recepção no módulo USART, respectivamente?",
    "options": [
      "SPBRG e RCREG",
      "TXREG e RCREG",
      "TXSTA e RCSTA",
      "PIE1 e PIR1",
      "STATUS e OPTION_REG"
    ],
    "answer": "TXSTA e RCSTA"
  },
  {
    "question": "O módulo USART Assíncrono consiste dos seguintes blocos, EXCETO:",
    "options": [
      "Gerador de Baud Rate (BRG)",
      "Circuito de amostragem",
      "Transmissor assíncrono",
      "Receptor síncrono",
      "Receptor assíncrono"
    ],
    "answer": "Receptor síncrono"
  },
  {
    "question": "Qual PORTA/PINOS estão associados ao módulo USART?",
    "options": [
      "PORTB/0,1",
      "PORTA/2,3",
      "PORTC/6,7",
      "PORTD/4,5",
      "PORTE/0,1,2"
    ],
    "answer": "PORTC/6,7"
  },
  {
    "question": "Qual é o primeiro passo para configurar a transmissão Síncrona Mestra da USART?",
    "options": [
      "Setar o bit TXEN",
      "Inicializar o registro SPBRG com a baud rate apropriada",
      "Habilitar a interrupção global",
      "Configurar os pinos RX/TX como entradas",
      "Escrever o dado no TXREG"
    ],
    "answer": "Inicializar o registro SPBRG com a baud rate apropriada"
  },
  {
    "question": "Qual é o primeiro passo para configurar a transmissão Síncrona Escrava da USART?",
    "options": [
      "Setar o bit SYNC",
      "Habilitar a Porta Série Síncrona Escrava",
      "Configurar o SPBRG",
      "Limpar o bit SPEN",
      "Habilitar o bit TXEN"
    ],
    "answer": "Habilitar a Porta Série Síncrona Escrava"
  },
  {
    "question": "Qual é o passo para configurar as interrupções na Recepção Síncrona Mestra da USART, além de ativar o bit RCIE (PIE1<5>)?",
    "options": [
      "Habilitar o bit TXIE",
      "Habilitar os bits GIE (INTCON<7>) e PEIE (INTCON<6>)",
      "Limpar o flag RCIF",
      "Setar o bit CREN",
      "Desabilitar o Watchdog Timer"
    ],
    "answer": "Habilitar os bits GIE (INTCON<7>) e PEIE (INTCON<6>)"
  },
  {
    "question": "Para que o módulo conversor A/D opere durante o Sleep, é necessário que:",
    "options": [
      "Use oscilador externo a cristal",
      "Use oscilador RC interno",
      "Habilite a USART antes de dormir",
      "Desligue as interrupções",
      "Coloque todos os pinos como saída"
    ],
    "answer": "Use oscilador RC interno"
  },
  {
    "question": "O módulo Conversor Analógico/Digital no PIC16F877 contém:",
    "options": [
      "um conversor, 8 bits e 10 canais",
      "um conversor, 12 bits e 4 canais",
      "um conversor, 10 bits e 8 canais",
      "dois conversores de 8 bits e 4 canais",
      "um conversor de 16 bits e 1 canal"
    ],
    "answer": "um conversor, 10 bits e 8 canais"
  },
  {
    "question": "Assinale a alternativa INCORRETA quanto ao Módulo Conversor A/D.",
    "options": [
      "O resultado possui 10 bits",
      "Possui 8 canais de entrada",
      "Não opera no Modo SLEEP",
      "Os canais são multiplexados",
      "A tensão de referência pode ser configurada"
    ],
    "answer": "Não opera no Modo SLEEP"
  },
  {
    "question": "O Módulo Conversor A/D possui os registros abaixo, EXCETO:",
    "options": [
      "ADCON0",
      "ADCON1",
      "ADRESH",
      "ADRESL",
      "ADCON2"
    ],
    "answer": "ADCON2"
  },
  {
    "question": "Em quais registros do Módulo Conversor A/D são armazenados os dados da conversão?",
    "options": [
      "ADCON0 e ADCON1",
      "STATUS e W",
      "PORTA e TRISA",
      "ADRESH e ADRESL",
      "TMR1H e TMR1L"
    ],
    "answer": "ADRESH e ADRESL"
  },
  {
    "question": "Qual a situação que indica o fim da conversão no Módulo Conversor A/D?",
    "options": [
      "O bit GO/DONE setado pelo Hardware",
      "O bit ADON apagado",
      "O bit GO/DONE apagado pelo Hardware e o bit ADIF setado",
      "O bit RCIF setado",
      "Uma interrupção no pino RB0"
    ],
    "answer": "O bit GO/DONE apagado pelo Hardware e o bit ADIF setado"
  },
  {
    "question": "Qual será a resposta do Módulo Conversor A/D se, no Modo SLEEP, o clock estiver configurado para externo?",
    "options": [
      "A conversão ocorrerá normalmente",
      "A conversão será abortada",
      "O microcontrolador acordará do SLEEP imediatamente",
      "O resultado será preenchido com 1's",
      "A conversão será pausada e retomada ao acordar"
    ],
    "answer": "A conversão será abortada"
  },
  {
    "question": "Como estarão os dados dos registros ADRESH:ADRESL após a ocorrência de um POR (Power On Reset)?",
    "options": [
      "Em FFh e FFh",
      "Em 00h e 00h",
      "Os dados serão desconhecidos",
      "Em AAh e 55h",
      "Preservam o último valor convertido"
    ],
    "answer": "Os dados serão desconhecidos"
  },
  {
    "question": "Qual é o bit que ativa/desativa o Módulo Conversor A/D?",
    "options": [
      "CHS0",
      "GO/DONE",
      "ADON (ADCON0<0>)",
      "PCFG3",
      "ADFM"
    ],
    "answer": "ADON (ADCON0<0>)"
  },
  {
    "question": "No registro ADCON1, com o bit ADFM (ADCON1<7>) setado, como estarão dispostos os 10 bits nos registros ADRESH:ADRESL?",
    "options": [
      "8 Msb nos ADRESH<7:0> e 2 Lsb nos ADRESL<7:6>",
      "8 Lsb nos ADRESL<7:0> e 2 Msb nos ADRESH<1:0>",
      "Centralizados nos dois registros",
      "Os 10 bits ficam apenas no ADRESH",
      "Os 10 bits ficam divididos em blocos de 5 bits"
    ],
    "answer": "8 Lsb nos ADRESL<7:0> e 2 Msb nos ADRESH<1:0>"
  },
  {
    "question": "Qual a instrução que determina o fim de uma sub-rotina de interrupção?",
    "options": [
      "RETURN",
      "RETLW",
      "END",
      "RETFIE",
      "GOTO"
    ],
    "answer": "RETFIE"
  },
  {
    "question": "O endereço do registro CONFIG na memória Flash é:",
    "options": [
      "0000h",
      "0004h",
      "1FFFh",
      "2007h",
      "FFFFh"
    ],
    "answer": "2007h"
  },
  {
    "question": "É um evento externo ao programa que provoca a parada de sua execução, a verificação e tratamento do referido evento pelo micro e em seguida o retorno ao programa. A isto chamamos de:",
    "options": [
      "Polling",
      "Watchdog Reset",
      "Sub-rotina (CALL)",
      "Interrupção",
      "Brown-out Reset"
    ],
    "answer": "Interrupção"
  },
  {
    "question": "Reseta o micro sempre que a tensão de alimentação cair abaixo de 4 volts:",
    "options": [
      "Power On Reset (POR)",
      "Watchdog Timer (WDT)",
      "Master Clear (MCLR)",
      "Brown-out Reset (BOR)",
      "Timer0 Overflow"
    ],
    "answer": "Brown-out Reset (BOR)"
  },
  {
    "question": "São características especiais configuradas pelo Registro CONFIG, EXCETO:",
    "options": [
      "Seleção do oscilador",
      "Habilitação do Watchdog Timer",
      "Proteção de código",
      "Direcionamento do PORTA",
      "Habilitação do Brown-out Reset"
    ],
    "answer": "Direcionamento do PORTA"
  },
  {
    "question": "Qual é a diferença do Oscillator Start-up Timer (OST) para o Power-up Timer (PWRT)?",
    "options": [
      "O OST aguarda a alimentação e o PWRT aguarda o cristal se estabilizar",
      "O OST aguarda o cristal se estabilizar e o PWRT aguarda a alimentação",
      "Não há diferença, são o mesmo temporizador",
      "O OST é para oscilador RC e o PWRT para cristal",
      "O OST opera em 10 bits e o PWRT em 8 bits"
    ],
    "answer": "O OST aguarda o cristal se estabilizar e o PWRT aguarda a alimentação"
  },
  {
    "question": "O que representa o trecho \" _CONFIG _WDT_OFF & _CP_OFF\" da diretiva CONFIG?",
    "options": [
      "Watchdog está habilitado e a memória desprotegida",
      "Watchdog está desabilitado e a memória de programa protegida",
      "Watchdog está desabilitado e a memória de programa desprotegida contra leitura",
      "Watchdog está habilitado e a memória protegida",
      "Configura o oscilador como RC e desliga proteção"
    ],
    "answer": "Watchdog está desabilitado e a memória de programa desprotegida contra leitura"
  },
  {
    "question": "Quais os modos dos osciladores nos quais se utiliza um cristal ou ressonador de cerâmica nos pinos OSC1 e OSC2 do PIC?",
    "options": [
      "RC e LP",
      "XT, LP e HS",
      "Apenas HS",
      "INTOSC e RC",
      "EC e EXTRC"
    ],
    "answer": "XT, LP e HS"
  },
  {
    "question": "Quanto às interrupções, assinale a alternativa correta.",
    "options": [
      "Se o GIE estiver zerado, nenhuma flag de interrupção pode ser setada",
      "Se a interrupção ocorrer, o bit de flag será setado independentemente dos GIE, individual e periférico",
      "O bit de flag só é setado se o bit de habilitação (IE) estiver em 1",
      "As flags são limpas automaticamente ao atender a interrupção",
      "O PIC16F877 suporta até 128 vetores de interrupção diferentes"
    ],
    "answer": "Se a interrupção ocorrer, o bit de flag será setado independentemente dos GIE, individual e periférico"
  },
  {
    "question": "Qual é o recurso que possibilita alguns PICs serem programados diretamente nos circuitos, através de cinco pinos, gravando sinais diretamente na placa?",
    "options": [
      "JTAG",
      "ICSP (In-circuit Serial Programming)",
      "UART Bootloader",
      "SPI Flash",
      "EEPROM paralela"
    ],
    "answer": "ICSP (In-circuit Serial Programming)"
  },
  {
    "question": "Como é composta a instrução no PIC16F877?",
    "options": [
      "OPCODE apenas",
      "Operandos apenas",
      "OPCODE e Operandos",
      "Mnemônico e comentários",
      "Rótulos e Diretivas"
    ],
    "answer": "OPCODE e Operandos"
  },
  {
    "question": "Como estão agrupadas as instruções no PIC16F877?",
    "options": [
      "Matemáticas, Lógicas e de Desvio",
      "Operações orientadas a byte, Orientadas a bit, e de Literal e de controle",
      "Leitura, Escrita e Execução",
      "Registradores, Memória e I/O",
      "Aritméticas e Manipulação de String"
    ],
    "answer": "Operações orientadas a byte, Orientadas a bit, e de Literal e de controle"
  },
  {
    "question": "Para instruções orientadas a Byte, se d for 0 ou W, onde será armazenado o resultado?",
    "options": [
      "No registro f",
      "Na memória EEPROM",
      "No registro W",
      "No PC (Program Counter)",
      "Descartado"
    ],
    "answer": "No registro W"
  },
  {
    "question": "O que representa k, para operações com literal e de controle?",
    "options": [
      "Um registro da memória de dados",
      "Um ponteiro para a EEPROM",
      "Uma flag do registro STATUS",
      "Uma constante de 8 ou 11 bits ou um valor literal",
      "O pino de uma porta de I/O"
    ],
    "answer": "Uma constante de 8 ou 11 bits ou um valor literal"
  },
  {
    "question": "Como ocorre a execução do segundo ciclo numa instrução de salto?",
    "options": [
      "É executado normalmente",
      "Busca o próximo opcode da RAM",
      "Executado como NOP",
      "Reinicia o Watchdog",
      "Salva o contexto na pilha"
    ],
    "answer": "Executado como NOP"
  },
  {
    "question": "Qual é o tempo de execução de uma instrução de teste verdadeiro, cuja frequência do oscilador é de 10 MHz?",
    "options": [
      "0,4 µs (1 ciclo de instrução)",
      "0,8 µs (2 ciclos de instrução)",
      "1,0 µs",
      "2,0 µs",
      "4,0 µs"
    ],
    "answer": "0,8 µs (2 ciclos de instrução)"
  },
  {
    "question": "A instrução BTFSC pertence a qual grupo de instruções?",
    "options": [
      "Orientadas a Byte",
      "Literais",
      "Desvio",
      "Orientadas à BIT",
      "Controle"
    ],
    "answer": "Orientadas à BIT"
  },
  {
    "question": "Nas instruções do tipo MNEMÔNICO k, quais as duas formas que k poderá ser usado?",
    "options": [
      "Somado a FSR ou INDF",
      "Armazenado no Registro W ou usado com endereço de destino para desvios",
      "Salvo no PORTA ou PORTB",
      "Incrementado ou decrementado",
      "Deslocado à esquerda ou à direita"
    ],
    "answer": "Armazenado no Registro W ou usado com endereço de destino para desvios"
  },
  {
    "question": "Assinale a instrução que possui um desvio com retorno.",
    "options": [
      "GOTO",
      "RETLW",
      "RETURN",
      "CALL",
      "BTFSS"
    ],
    "answer": "CALL"
  },
  {
    "question": "Nos _____, o fluxo do programa é desviado para outro endereço, seguindo então a partir de lá. Podem ser dos tipos condicionais e incondicionais.",
    "options": [
      "Desvios sem retorno",
      "Sub-rotinas",
      "Operandos literais",
      "Loops aninhados",
      "Interrupções"
    ],
    "answer": "Desvios sem retorno"
  },
  {
    "question": "Quantas interrupções diferentes possui o PIC16F877 ?",
    "options": [
      "4 interrupções",
      "8 interrupções",
      "12 interrupções",
      "14 interrupções",
      "16 interrupções"
    ],
    "answer": "14 interrupções"
  },
  {
    "question": "Qual registro pode-se habilitar e desabilitar o Watchdog durante a programação?",
    "options": [
      "INTCON",
      "OPTION_REG",
      "STATUS",
      "PCLATH",
      "Registro CONFIG"
    ],
    "answer": "Registro CONFIG"
  },
  {
    "question": "Por que o TIMER2 não pode ser usado como contador de eventos?",
    "options": [
      "Porque ele conta apenas pulsos decrescentes",
      "Porque ele tem apenas 8 bits",
      "Porque não dispõe de uma entrada externa de clock",
      "Porque ele é reservado apenas para o conversor A/D",
      "Porque ele não possui bit de interrupção"
    ],
    "answer": "Porque não dispõe de uma entrada externa de clock"
  },
  {
    "question": "Qual o endereço do registro CONFIG na memória Flash ?",
    "options": [
      "0000h",
      "0004h",
      "01FFh",
      "2007h",
      "FFFFh"
    ],
    "answer": "2007h"
  },
  {
    "question": "Qual temporizador está relacionado com o modo PWM do módulo CCP ?",
    "options": [
      "Timer0",
      "Timer1",
      "Timer2",
      "Watchdog Timer",
      "Power-up Timer"
    ],
    "answer": "Timer2"
  },
  {
    "question": "Em um microcontrolador PIC16F84, funcionando com um clock externo de 4MHZ, qual o tempo de retardo (delay) se o TIMER0 estiver trabalhando com um PREESCALER ajustado com um fator de divisão 64:1 e o valor inicial de TMR0 = 64? (Considerando contagem até o overflow 256)",
    "options": [
      "1024 µs",
      "4096 µs",
      "8192 µs",
      "12288 µs",
      "16384 µs"
    ],
    "answer": "12288 µs"
  },
  {
    "question": "Em um microcontrolador PIC16F84, foi conectado um led ao pino RB4. Sabendo que o led estará diretamente polarizado quando houver nível lógico alto no pino RB4 e sabendo-se também que o registrador TRISB = 45h, além do registrador PORTB = AAh. Pergunta-se: O led está aceso ou apagado? Justifique.",
    "options": [
      "Aceso, pois o pino RB4 está como entrada (1 no TRISB)",
      "Aceso, pois o pino RB4 está como saída (0 no TRISB) e o nível do PORTB é baixo (0)",
      "Apagado, pois o pino RB4 está configurado como saída (0 no TRISB) e em nível baixo (0 no PORTB)",
      "Apagado, pois o pino RB4 está configurado como entrada",
      "Aceso intermitentemente devido ao clock externo"
    ],
    "answer": "Apagado, pois o pino RB4 está configurado como saída (0 no TRISB) e em nível baixo (0 no PORTB)"
  },
  {
    "question": "Qual das opções seguintes define que os pinos do PORTC estão metade como SAÍDA (RC0 A RC3) e a outra metade (RC4 a RC7) como ENTRADA?",
    "options": [
      "TRISC = 00001111b.",
      "TRISC = 00011111b.",
      "TRISC = 00111111b.",
      "TRISC = 11110000b.",
      "PORTC = 11111000b."
    ],
    "answer": "TRISC = 11110000b."
  },
  {
    "question": "No endereçamento direto de um registro, a seleção de banco é feita por (pelo):",
    "options": [
      "Registros de STATUS e FSR",
      "Bits IRP, RP1 e RP0 do registro de STATUS",
      "Bit 7 do registro FSR e bit IRP do registro de STATUS.",
      "Registros INDF e FSR",
      "Bits RP1 e RP0 do registro de STATUS"
    ],
    "answer": "Bits RP1 e RP0 do registro de STATUS"
  },
  {
    "question": "Se a frequência do clock externo do PIC16F877 for de 16MHz pode-se afirmar que sua frequência interna será de:",
    "options": [
      "3 KHz .",
      "4 MHz .",
      "8 KHz .",
      "10 KHz .",
      "12 KHz ."
    ],
    "answer": "4 MHz ."
  },
  {
    "question": "O registro que nos mostra o estado geral do microcontrolador é:",
    "options": [
      "OPTION_REG",
      "INTCON",
      "STATUS",
      "INDF",
      "FSR"
    ],
    "answer": "STATUS"
  },
  {
    "question": "Qual o bit responsável pela habilitação geral das interrupções no PIC16F877 ?",
    "options": [
      "GIE do registro INDF;",
      "GIE do registro STATUS;",
      "GIE do registro INTCON;",
      "INTE do registro STATUS;",
      "INTE do registro INTCON."
    ],
    "answer": "GIE do registro INTCON;"
  },
  {
    "question": "Qual a chamada de uma sub-rotina que não tem retorno ?",
    "options": [
      "CALL",
      "RETURN",
      "RETLW",
      "GOTO",
      "RETFIE"
    ],
    "answer": "GOTO"
  },
  {
    "question": "Como se limpa um Flag de interrupção ?",
    "options": [
      "Utilizando a instrução CLRF STATUS",
      "O hardware limpa automaticamente todas as flags",
      "Limpando o respectivo bit no registrador apropriado (ex: PIR1, INTCON) via software com a instrução BCF",
      "Executando a instrução RETFIE",
      "Resentando o microcontrolador"
    ],
    "answer": "Limpando o respectivo bit no registrador apropriado (ex: PIR1, INTCON) via software com a instrução BCF"
  },
  {
    "question": "Qual a instrução que limpa um registro completo ?",
    "options": [
      "CLRW",
      "CLRF",
      "BCF",
      "MOVLW 00h",
      "ANDLW 00h"
    ],
    "answer": "CLRF"
  },
  {
    "question": "No pic16f84 como o programador realiza a mudança do banco 0 para o banco 1?",
    "options": [
      "BCF STATUS, RP0",
      "BSF STATUS, RP0",
      "BSF STATUS, RP1",
      "MOVWF BANK1",
      "GOTO BANK1"
    ],
    "answer": "BSF STATUS, RP0"
  },
  {
    "question": "O endereço contido no PC durante uma instrução GOTO é formado por:",
    "options": [
      "Endereço da sub-rotina mais os bits <4:0> do registro PCLATH.",
      "Opcode da instrução mais os bits IRP, RP1 e RP0 do registro de STATUS.",
      "Opcode da instrução mais os bits RP1 e RP0 do registro de STATUS.",
      "Opcode da instrução mais os bits <4:3> do registro PCLATH.",
      "Opcode da instrução mais os bits <12:8> do registro PCH."
    ],
    "answer": "Opcode da instrução mais os bits <4:3> do registro PCLATH."
  },
  {
    "question": "Observe o desenho de um hardware com um cristal de 8MHz. Qual a frequência interna de operação do microcontrolador?",
    "options": [
      "8 MHz",
      "16 MHz",
      "2 MHz",
      "4 MHz",
      "1 MHz"
    ],
    "answer": "2 MHz"
  },
  {
    "question": "Baseado num diagrama de hardware de um PIC onde o pino MCLR está conectado através de um resistor de 10K ao VCC, qual é a função desse pino?",
    "options": [
      "Habilitar a escrita na EEPROM",
      "Servir como entrada analógica exclusiva",
      "Gerar interrupção de mudança de estado",
      "Causar o reset físico do microcontrolador quando colocado em nível baixo",
      "Alimentar o núcleo do processador"
    ],
    "answer": "Causar o reset físico do microcontrolador quando colocado em nível baixo"
  },
  {
    "question": "Em um circuito onde LEDs estão ligados a pinos através de um resistor ao terra (GND), com que nível lógico do pino eles acendem?",
    "options": [
      "Nível lógico '0' (Baixo)",
      "Nível lógico '1' (Alto)",
      "Alta impedância (High-Z)",
      "Estado flutuante",
      "Tensões negativas"
    ],
    "answer": "Nível lógico '1' (Alto)"
  },
  {
    "question": "Para realizar um atraso (delay) longo por software (ex: 2 segundos), a técnica adequada em linguagem Assembly é:",
    "options": [
      "Chamar a instrução SLEEP por 2 segundos",
      "Utilizar uma sequência de 2 milhões de NOPs",
      "Configurar o Watchdog Timer para estourar em 2 segundos",
      "Aninhar múltiplos loops (usando registradores como contadores) que decrementam até zero com a instrução INCFSZ ou DECFSZ",
      "Conectar um capacitor de 2 Farads no pino de oscilador"
    ],
    "answer": "Aninhar múltiplos loops (usando registradores como contadores) que decrementam até zero com a instrução INCFSZ ou DECFSZ"
  },
  {
    "question": "Qual o endereço do vetor de interrupção na memória Flash ?",
    "options": [
      "0000h",
      "0004h",
      "0008h",
      "2007h",
      "FFFFh"
    ],
    "answer": "0004h"
  },
  {
    "question": "Em qual modo a operação de captura, do TIMER 1, pode não funcionar?",
    "options": [
      "Modo síncrono com clock interno",
      "Modo assíncrono com oscilador externo no SLEEP",
      "Modo contador simples",
      "Em frequências acima de 1MHz",
      "Quando o GIE está desativado"
    ],
    "answer": "Modo assíncrono com oscilador externo no SLEEP"
  },
  {
    "question": "O valor máximo da contagem na saída do Timer0 com prescaler de 1:64 é:",
    "options": [
      "512 eventos.",
      "4096 eventos.",
      "8192 eventos.",
      "16384 eventos.",
      "32768 eventos."
    ],
    "answer": "16384 eventos."
  },
  {
    "question": "O módulo CCP no modo Captura possui a função de:",
    "options": [
      "Comparar constantemente os registros TMR1 (L e H) e CCPRx (L e H).",
      "Contagem de tempo entre dois eventos.",
      "Gerar o ciclo ativo",
      "Gerar um sinal de frequência fixa.",
      "Comparar constantemente os registros TMR2 (L e H) e CCPRx (L e H)."
    ],
    "answer": "Contagem de tempo entre dois eventos."
  },
  {
    "question": "Para que o módulo conversor A/D opere durante o Sleep é necessário que:",
    "options": [
      "Use oscilador RC externo.",
      "Use oscilador interno a cristal.",
      "Use oscilador LC externo.",
      "Use oscilador externo a cristal.",
      "Use oscilador RC interno."
    ],
    "answer": "Use oscilador RC interno."
  },
  {
    "question": "Qual a instrução que determina o fim de uma sub-rotina de interrupção?",
    "options": [
      "RETURN",
      "END",
      "RETFIE",
      "RETSUB",
      "RETLW"
    ],
    "answer": "RETFIE"
  },
  {
    "question": "Durante um teste de bit, encontramos o bit Z (STATUS<2>) em nível lógico '1'. O que aconteceu para que este bit assumisse tal estado?",
    "options": [
      "Ocorreu um overflow aritmético (Carry)",
      "O watchdog timer reiniciou o sistema",
      "Um operando negativo foi carregado em W",
      "O resultado de uma operação lógica ou aritmética foi igual a zero (0)",
      "A pilha (stack) sofreu overflow"
    ],
    "answer": "O resultado de uma operação lógica ou aritmética foi igual a zero (0)"
  },
  {
    "question": "A instrução 'incfsz f,d' serve para:",
    "options": [
      "Incrementar f, e se o resultado for zero pula a próxima instrução",
      "Inicializar o registro f com zero",
      "Incluir um arquivo fonte",
      "Testar se f é igual a d",
      "Incrementar FSR"
    ],
    "answer": "Incrementar f, e se o resultado for zero pula a próxima instrução"
  },
  {
    "question": "A instrução 'btfss f,b' serve para:",
    "options": [
      "Limpar o bit b do registro f",
      "Setar o bit b do registro f",
      "Testar o bit b de f, e saltar se for '1'",
      "Testar o bit b de f, e saltar se for '0'",
      "Mover o bit b de f para o STATUS"
    ],
    "answer": "Testar o bit b de f, e saltar se for '1'"
  },
  {
    "question": "Qual Bit, nível lógico e registro que nos mostra que o Watchdog provocou resete do micro?",
    "options": [
      "Bit Z = 1 ; STATUS",
      "Bit 4 (TO) = 0 ; STATUS",
      "Bit PD = 0 ; STATUS",
      "Bit 3 (PD) = 1 ; STATUS",
      "Bit WDTEN = 0 ; CONFIG"
    ],
    "answer": "Bit 4 (TO) = 0 ; STATUS"
  },
  {
    "question": "Qual a função do Contador de Programa (PC)?",
    "options": [
      "Contar o número de interrupções",
      "Armazenar valores matemáticos da ALU",
      "Estabelecer o fluxo de controle dos direcionamentos da memória que o código do programa contém",
      "Contar o número de ciclos de instrução do Timer0",
      "Selecionar o banco de memória RAM"
    ],
    "answer": "Estabelecer o fluxo de controle dos direcionamentos da memória que o código do programa contém"
  },
  {
    "question": "Qual o valor armazenado no registro destino (W) e qual o valor dos bits Z, DC e C do registro STATUS no final do programa (MOVLW 02h, SUBLW 00h)?",
    "options": [
      "W = 02h, Z=0, DC=1, C=1",
      "W = 00h, Z=1, DC=0, C=0",
      "W = FEh, Z=0, DC=0, C=0",
      "W = FEh, Z=1, DC=1, C=1",
      "W = FFh, Z=0, DC=1, C=0"
    ],
    "answer": "W = FEh, Z=0, DC=0, C=0"
  },
  {
    "question": "Defina Pipeline.",
    "options": [
      "É um barramento de comunicação serial de alta velocidade",
      "É a área de memória usada para proteger o código",
      "É a busca e execução de uma instrução num ciclo de máquina, onde enquanto uma executa a outra é buscada",
      "É a estrutura de dados LIFO da pilha",
      "É o conversor de sinais A/D"
    ],
    "answer": "É a busca e execução de uma instrução num ciclo de máquina, onde enquanto uma executa a outra é buscada"
  },
  {
    "question": "Quais os modos de funcionamento da USART?",
    "options": [
      "Analógica e Digital",
      "Multiplexada e Simples",
      "Síncrona e Assíncrona",
      "Mestre e Escrava",
      "Direta e Indireta"
    ],
    "answer": "Síncrona e Assíncrona"
  },
  {
    "question": "Os bits de configuração do oscilador, registro CONFIG (bit 1-0 FOSC1:FOSC0 ) estão ambos em nível lógico “1”. Qual tipo de oscilador foi selecionado?",
    "options": [
      "XT",
      "HS",
      "LP",
      "RC",
      "INTOSC"
    ],
    "answer": "RC"
  },
  {
    "question": "Cite quatro tipos de Interrupções.",
    "options": [
      "Power-On, Brown-out, MCLR, Watchdog",
      "TIMER0, PORTA PARALELA, GRAVAÇÃO DA EEPROM e TIMER2",
      "Analógica, Digital, Serial, Paralela",
      "Interna, Externa, Mascarável, Não-Mascarável",
      "GOTO, CALL, RETURN, RETFIE"
    ],
    "answer": "TIMER0, PORTA PARALELA, GRAVAÇÃO DA EEPROM e TIMER2"
  },
  {
    "question": "O que é necessário para que ocorra uma interrupção e o micro tome conhecimento?",
    "options": [
      "O microcontrolador deve estar em SLEEP",
      "Apenas que o evento físico (ex: mudança de pino) aconteça",
      "Além de o evento acontecer, é necessário que os bits de habilitação geral (GIE), de periféricos (PEIE) e individual estejam setados",
      "O Watchdog Timer deve estourar",
      "O registro STATUS deve estar no banco 0"
    ],
    "answer": "Além de o evento acontecer, é necessário que os bits de habilitação geral (GIE), de periféricos (PEIE) e individual estejam setados"
  },
  {
    "question": "Para escrever um programa em Assembly que liga um LED em RA2 enquanto o botão em RB7 estiver pressionado (nível 0), a rotina de leitura deve utilizar:",
    "options": [
      "Instruções BTFSS / BTFSC verificando o pino RB7 e acionando BSF / BCF no pino RA2",
      "Instruções de conversão A/D no pino RB7",
      "Apenas a instrução MOVF PORTB, W",
      "Um temporizador configurado em PWM",
      "Interrupção da USART"
    ],
    "answer": "Instruções BTFSS / BTFSC verificando o pino RB7 e acionando BSF / BCF no pino RA2"
  },
  {
    "question": "Qual a instrução que determina o retorno de uma sub-rotina, recuperando o último endereço da pilha?",
    "options": [
      "RETFIE",
      "RETURN",
      "GOTO",
      "POP",
      "END"
    ],
    "answer": "RETURN"
  },
  {
    "question": "Qual registro controla a operação da porta D como porta paralela escrava?",
    "options": [
      "TRISE",
      "PORTD",
      "STATUS",
      "TRISE / PSPMODE",
      "INTCON"
    ],
    "answer": "TRISE / PSPMODE"
  },
  {
    "question": "Qual o período normal de estouro do Watchdog Timer no PIC16F877 (sem prescaler)?",
    "options": [
      "Aproximadamente 1 ms",
      "Aproximadamente 18 ms",
      "Aproximadamente 1 segundo",
      "Exatamente 100 µs",
      "Exatamente 256 ciclos de máquina"
    ],
    "answer": "Aproximadamente 18 ms"
  },
  {
    "question": "Na memória FLASH quais bits, após configurados manualmente, passam a operar como CHAVE SELETORA da página de programa?",
    "options": [
      "RP0 e RP1 do STATUS",
      "GIE e PEIE do INTCON",
      "CHS0 a CHS2 do ADCON0",
      "bits <4:3> do PCLATH (PCLATH<4:3>)",
      "FOSC0 e FOSC1 do CONFIG"
    ],
    "answer": "bits <4:3> do PCLATH (PCLATH<4:3>)"
  },
  {
    "question": "Quantas instruções podem ser armazenadas na memória Flash do PIC 16F877?",
    "options": [
      "1024 (1K)",
      "2048 (2K)",
      "4096 (4K)",
      "8192 (8K)",
      "16384 (16K)"
    ],
    "answer": "8192 (8K)"
  },
  {
    "question": "No endereçamento indireto, qual registro aponta para a memória RAM?",
    "options": [
      "INDF",
      "PCLATH",
      "STATUS",
      "FSR",
      "W"
    ],
    "answer": "FSR"
  },
  {
    "question": "A família de microcontroladores “PIC” pertencem a qual fabricante?",
    "options": [
      "Microchip.",
      "Atmel.",
      "Intel.",
      "Motorola.",
      "Siemens."
    ],
    "answer": "Microchip."
  },
  {
    "question": "De acordo com as características do PIC16F877, marque a opção INCORRETA:",
    "options": [
      "O espelhamento facilita ao programador evitando trocas constantes de banco;",
      "Não há bits de status para indicar condições de stack overflow (pilha cheia);",
      "Este microcontrolador possui 7 tipos de interrupções podendo chegar a 14 tipos ;",
      "O registro de instruções se carrega cada vez que a ALU solicita uma nova instrução;",
      "Todos registros especiais possuem 8 bits."
    ],
    "answer": "Este microcontrolador possui 7 tipos de interrupções podendo chegar a 14 tipos ;"
  },
  {
    "question": "A frequência do clock externo do PIC16F877 com um ciclo de instrução de 200 ns, é:",
    "options": [
      "200 Hz .",
      "100 KHz .",
      "200 KHz .",
      "20 MHz .",
      "100 MHz ."
    ],
    "answer": "20 MHz ."
  },
  {
    "question": "Após a leitura da memória EEPROM de dados, o dado lido é armazenado na (no):",
    "options": [
      "Flash de programa",
      "Registro EEDATA",
      "Registro de STATUS",
      "RAM de dados",
      "Registro EEADR"
    ],
    "answer": "Registro EEDATA"
  },
  {
    "question": "A porta que pode usar resistores de pull-up internos, é:",
    "options": [
      "B",
      "D",
      "C",
      "E",
      "A"
    ],
    "answer": "B"
  },
  {
    "question": "Explique o porquê do uso do termo Banco, relativo a memória RAM:",
    "options": [
      "Refere-se à organização física da memória de dados em blocos (bancos) selecionáveis, permitindo acessar mais endereços de memória utilizando os mesmos poucos bits de endereçamento direto da instrução",
      "Refere-se ao espaço onde o programa principal é armazenado",
      "Trata-se do local da EEPROM destinado a senhas e dados monetários",
      "É o circuito responsável por fornecer a corrente de reset (BOR)",
      "É a técnica de salvar os dados da pilha em um local seguro"
    ],
    "answer": "Refere-se à organização física da memória de dados em blocos (bancos) selecionáveis, permitindo acessar mais endereços de memória utilizando os mesmos poucos bits de endereçamento direto da instrução"
  },
  {
    "question": "Cite as características do registro especial W (WORK):",
    "options": [
      "Fica sempre no Banco 1, não precisa de endereçamento, tem 16 bits",
      "Controla os pinos do PORTA",
      "É o registrador de trabalho, de 8 bits, que atua como destino ou origem principal das operações lógicas e matemáticas com a ULA (ALU), e não possui endereço mapeado na RAM",
      "É utilizado unicamente para direcionar o Program Counter (PC)",
      "Zera todos os registros periféricos quando o microcontrolador é iniciado"
    ],
    "answer": "É o registrador de trabalho, de 8 bits, que atua como destino ou origem principal das operações lógicas e matemáticas com a ULA (ALU), e não possui endereço mapeado na RAM"
  },
  {
    "question": "Como é conhecido o reset que atua quando a tensão de alimentação cai abaixo de 4V durante um intervalo de tempo maior que 100 microsegundos?",
    "options": [
      "MCLR",
      "Power-On Reset (POR)",
      "Watchdog Timer Reset (WDT)",
      "Stack Underflow Reset",
      "Brown-out Reset (BOR)"
    ],
    "answer": "Brown-out Reset (BOR)"
  },
  {
    "question": "O PIC16F877 possui um total de quantas interrupções diferentes ?",
    "options": [
      "4",
      "8",
      "14",
      "16",
      "32"
    ],
    "answer": "14"
  },
  {
    "question": "Em um microcontrolador PIC16F84, foi conectado um led ao pino RA0. Sabendo que o led estará diretamente polarizado quando houver nível lógico alto no pino RB4 e sabendo-se também que o registrador TRISA = F2h, além do registrador PORTA = EEh. Pergunta-se: O led está aceso ou apagado?",
    "options": [
      "Aceso, pois o pino está como entrada",
      "Aceso, pois o pino está como saída e com nível lógico alto (1)",
      "Apagado, pois no bit do TRISA correspondente ao pino RA0 (bit 0) está configurado como saída (0), e no registrador PORTA o bit correspondente está em nível baixo (0, já que EEh = 1110 1110b), logo o led não recebe tensão",
      "Apagado por falha no cristal",
      "Aceso porque todos os resistores de pull-up estão ativos"
    ],
    "answer": "Apagado, pois no bit do TRISA correspondente ao pino RA0 (bit 0) está configurado como saída (0), e no registrador PORTA o bit correspondente está em nível baixo (0, já que EEh = 1110 1110b), logo o led não recebe tensão"
  },
  {
    "question": "Em um microcontrolador PIC16F84, funcionando com um clock externo de 8MHz, qual o tempo de retardo (delay) gerado pelo TIMER0 se ele estiver trabalhando com um PREESCALER ajustado em 64:1 e o valor inicial do TMR0 for igual a 56?",
    "explanation": "Primeiro, calcula-se o ciclo de máquina (Tcy) que é Fosc / 4. Sendo 8MHz, o clock interno é 2MHz e Tcy = 0,5 µs. O Timer0 conta de 56 até estourar em 256, ou seja, necessita de 256 - 56 = 200 incrementos. Como o prescaler é 64, ele precisa de 200 * 64 = 12.800 ciclos de máquina. Multiplicando pelo tempo: 12.800 * 0,5 µs = 6.400 µs (ou 6,4 ms). (Capítulo 6).",
    "options": [
      "3,2 ms",
      "6,4 ms",
      "12,8 ms",
      "25,6 ms",
      "100 µs"
    ],
    "answer": "6,4 ms"
  },
  {
    "question": "Analisando a configuração do Timer0 (registro OPTION_REG), quais são os bits e níveis lógicos corretos para selecionar o clock interno como fonte e atribuir o prescaler especificamente ao Timer0?",
    "explanation": "Conforme o Capítulo 6 (item 6.1.7), o bit T0CS = 0 seleciona o clock interno (Fosc/4) operando no modo temporizador. Já o bit PSA = 0 garante que o Prescaler seja atribuído ao módulo Timer0 (se PSA fosse 1, seria atribuído ao Watchdog).",
    "options": [
      "T0CS = 1 e PSA = 1",
      "T0CS = 0 e PSA = 1",
      "T0CS = 1 e PSA = 0",
      "T0CS = 0 e PSA = 0",
      "T0SE = 0 e PSA = 0"
    ],
    "answer": "T0CS = 0 e PSA = 0"
  },
  {
    "question": "Qual(is) módulo(s) interno(s) do PIC16F877 pode(m) ser usado(s) especificamente para a comunicação serial com outros periféricos ou dispositivos microcontrolados?",
    "explanation": "Os Capítulos 8 e 9 abordam as interfaces de comunicação. O microcontrolador se comunica com o mundo exterior serialmente por meio do módulo MSSP (usando os protocolos SPI e I²C) e do módulo USART (Modo Assíncrono ou Síncrono).",
    "options": [
      "Apenas a Porta Paralela Escrava (PSP)",
      "Módulo MSSP e Módulo USART",
      "Apenas o módulo CCP",
      "Módulo ADC e Timer2",
      "Apenas o Watchdog Timer"
    ],
    "answer": "Módulo MSSP e Módulo USART"
  },
  {
    "question": "Na palavra de configuração (registro CONFIG), os bits de seleção do oscilador (FOSC1:FOSC0) foram gravados com os níveis lógicos \\"11\\". Qual tipo de oscilador foi selecionado para o PIC?",
    "explanation": "Conforme o Capítulo 11 (item 11.2.1), a combinação 11 nos bits FOSC1:FOSC0 seleciona o Oscilador RC. As outras combinações seriam: 10 para HS, 01 para XT e 00 para LP.",
    "options": [
      "Cristal de alta frequência (HS).",
      "Cristal/Ressonador padrão (XT).",
      "Cristal de baixa potência (LP).",
      "Oscilador RC (Resistor/Capacitor).",
      "Oscilador interno com PLL."
    ],
    "answer": "Oscilador RC (Resistor/Capacitor)."
  },
  {
    "question": "Qual a instrução em linguagem Assembly do PIC16F877 que limpa (zera) um registro completo de 8 bits e, simultaneamente, aciona a flag Z no registro STATUS?",
    "explanation": "O Capítulo 12 (item 12.2.6) descreve a instrução CLRF f, que apaga (zera) o valor do registro especificado pela variável 'f' e, como o resultado matemático da operação é zero, seta automaticamente o flag Z (Z = 1). A instrução CLRW apenas limpa o registro W.",
    "options": [
      "CLRW",
      "NOP",
      "BCF",
      "CLRF",
      "RRF"
    ],
    "answer": "CLRF"
  },
  {
    "question": "Durante os testes condicionais de um programa, o bit Z (Zero) do registro STATUS assumiu o nível lógico '1'. O que causou essa mudança de estado?",
    "explanation": "No Capítulo 12 e Capítulo 3 (item 3.4.3), o Bit 2 do registro STATUS é chamado de Zero Bit (Z). Ele assume o valor lógico 1 sempre que o resultado de uma operação (seja aritmética como ADDWF, ou lógica como ANDLW) resultar em 00h.",
    "options": [
      "Ocorreu um transbordo (overflow) no Timer0.",
      "O resultado da operação lógica ou aritmética anterior executada pela ULA foi igual a zero (0).",
      "Houve um empréstimo (borrow) durante uma subtração de rotina.",
      "O pino de interrupção externa foi acionado.",
      "A instrução executada foi um GOTO, forçando um desvio."
    ],
    "answer": "O resultado da operação lógica ou aritmética anterior executada pela ULA foi igual a zero (0)."
  },
  {
    "question": "Qual é o tempo exato de execução de uma instrução de desvio incondicional (como GOTO ou CALL), sabendo que o microcontrolador está operando com um cristal externo de 4MHz?",
    "explanation": "Conforme a Figura 12.3 do Capítulo 12, a frequência do ciclo de instrução (Tcy) é Fosc/4. Para um cristal de 4MHz, temos uma frequência interna de 1MHz, o que nos dá um tempo de ciclo de 1 µs. Como instruções que mudam o fluxo do programa (saltos ou desvios) precisam \\"limpar\\" o pipeline, elas necessitam de 2 ciclos de máquina para serem concluídas, resultando em um tempo total de 2 µs.",
    "options": [
      "1 µs",
      "2 µs",
      "4 µs",
      "200 ns",
      "8 µs"
    ],
    "answer": "2 µs"
  },
  {
    "question": "Em um microcontrolador da família PIC, um LED foi conectado ao pino RB4 e acende com nível alto. Sabendo que o registrador TRISB = 45h e o registrador PORTB = AAh, qual a configuração do pino e o estado do LED, respectivamente?",
    "explanation": "Como explicado na folha de resolução (Questão 1), o valor 45h em binário é 0100 0101. O bit 4 é 0, logo o pino está configurado como Saída. O valor enviado ao PORTB é AAh, que em binário é 1010 1010. O bit 4 é 0 (nível lógico baixo ou 0V). Como o enunciado diz que o LED acende com nível lógico alto, ele estará Apagado.",
    "options": [
      "Entrada ; Aceso",
      "Saída ; Apagado",
      "Saída ; Aceso",
      "Entrada ; Apagado",
      "Alta impedância ; Queimado"
    ],
    "answer": "Saída ; Apagado"
  },
  {
    "question": "Em um circuito semelhante, um LED está em RB4 (acende com nível alto). O software envia os seguintes valores binários: TRISB = 0100 0101 e PORTB = 1011 1010. O que ocorrerá com este LED?",
    "explanation": "Resolvido na Questão 2 do PDF de apoio. O bit 4 de TRISB é 0 (Saída). O bit 4 de PORTB é 1 (Nível Alto - 5V). Portanto, o pino envia energia suficiente e o LED fica Aceso.",
    "options": [
      "Ficará apagado, pois o pino atua como entrada.",
      "Ficará apagado, pois o PORTB enviou nível lógico baixo.",
      "Ficará aceso, pois o pino é saída e está enviando nível lógico alto.",
      "Ficará piscando com base no Timer0.",
      "Sofrerá curto-circuito."
    ],
    "answer": "Ficará aceso, pois o pino é saída e está enviando nível lógico alto."
  },
  {
    "question": "Avaliando um hardware com o microcontrolador PIC rodando sob um Cristal Oscilador externo de 8MHz. Qual será a sua frequência interna de operação (Ciclo de Máquina) e qual a função do pino MCLR?",
    "explanation": "Conforme o Bloco 2 da resolução, a frequência interna de processamento (frequência de máquina) de um PIC é sempre a frequência do clock externo dividida por 4. Logo, 8MHz / 4 = 2 MHz. O pino MCLR (Master Clear) atua como o botão de Reset de hardware do microcontrolador.",
    "options": [
      "8 MHz ; Pino de clock secundário.",
      "4 MHz ; Pino de interrupção do Timer1.",
      "2 MHz ; Pino de Master Clear responsável pelo Reset externo.",
      "2 MHz ; Habilitação da porta paralela.",
      "1 MHz ; Pino do oscilador interno."
    ],
    "answer": "2 MHz ; Pino de Master Clear responsável pelo Reset externo."
  },
  {
    "question": "Em uma análise do módulo Timer0 com prescaler ajustado em 1:32, considere que o \\"clock interno\\" de processamento (frequência de máquina) seja de 2 MHz. Qual o tempo exato que um pulso demora para incrementar o registrador TMR0, e qual o tempo total que ele leva para transbordar (estourar) partindo do zero?",
    "explanation": "De acordo com os cálculos da folha de resolução: se a frequência interna (Fcy) é de 2MHz, cada ciclo de instrução (Tcy) dura 1 / 2.000.000 = 0,5 µs. Como o prescaler é de 1:32, são necessários 32 ciclos para gerar um único incremento: 32 * 0,5 µs = 16 µs. Para o contador de 8 bits (TMR0) transbordar, ele precisa de 256 incrementos: 16 µs * 256 = 4.096 µs (ou 4,096 ms).",
    "options": [
      "1 µs e 8,192 ms",
      "16 µs e 4,096 ms",
      "32 µs e 8,192 ms",
      "64 µs e 16,384 ms",
      "0,5 µs e 2,048 ms"
    ],
    "answer": "16 µs e 4,096 ms"
  },
  {
    "question": "Na prova, pede-se o cálculo de tempo de uma rotina. Em um PIC16F84 com clock externo de 4MHz, qual será o atraso total de tempo (delay) gerado pelo TIMER0, se o Prescaler for ajustado na razão 1:128 e o valor inicial carregado no TMR0 for igual a 0?",
    "explanation": "Clock externo de 4MHz resulta em um ciclo de máquina de 1 µs. Como o valor inicial de TMR0 é zero, ele realizará 256 incrementos até o transbordo. A fórmula do delay é: Contagens * Prescaler * Tcy. Assim: 256 * 128 * 1 µs = 32.768 µs (ou seja, 32,768 ms).",
    "options": [
      "16,384 ms",
      "32,768 ms",
      "65,536 ms",
      "12,288 ms",
      "8,192 ms"
    ],
    "answer": "32,768 ms"
  },
  {
    "question": "Nas implementações de botões e chaves pedidas nas provas, as instruções BTFSS e BTFSC são vitais. O que a instrução lógica BTFSS PORTA, 0 instrui a CPU a fazer?",
    "explanation": "Conforme o Capítulo 12 e as resoluções do Bloco 3, BTFSS significa \\"Bit Test f, Skip if Set\\". A CPU avalia o estado do bit especificado; se ele for nível lógico 1 (Set), a instrução imediatamente seguinte no código é \\"pulada\\" (ignorada), gastando 2 ciclos de máquina. Se for 0, o programa segue o fluxo normalmente.",
    "options": [
      "Seta o bit 0 da porta A para nível lógico 1.",
      "Limpa o bit 0 da porta A.",
      "Testa o bit 0 do registrador PORTA e pula a próxima linha de instrução caso este bit seja 1 (Set).",
      "Testa o bit 0 do registrador PORTA e pula a próxima linha de instrução caso este bit seja 0 (Clear).",
      "Move a informação do pino 0 para o registrador W."
    ],
    "answer": "Testa o bit 0 do registrador PORTA e pula a próxima linha de instrução caso este bit seja 1 (Set)."
  },
  {
    "question": "Em uma questão discursiva que pede a descrição das instruções, qual é a ação exata da instrução lógica ANDLW k no PIC?",
    "explanation": "Segundo a tabela do Capítulo 12 (Instruções), a instrução ANDLW atua processando uma porta lógica AND entre o valor atualmente guardado no acumulador (Work register) e o valor literal 'k' passado no código. O resultado dessa comparação binária é armazenado no próprio registrador W, e a flag Z é afetada caso o resultado seja 00h.",
    "options": [
      "Incrementa o registro W e salta se for zero.",
      "Efetua uma operação lógica \"E\" (AND) entre uma constante literal ('k') e o valor que já estava gravado no registrador W.",
      "Soma uma literal 'k' ao registrador 'f'.",
      "Zera o conteúdo do Watchdog Timer.",
      "Realiza o complemento de 2 em um valor na memória."
    ],
    "answer": "Efetua uma operação lógica \"E\" (AND) entre uma constante literal ('k') e o valor que já estava gravado no registrador W."
  },
  {
    "question": "Por que o TIMER2 não pode ser usado como contador de eventos externos?",
    "explanation": "Conforme o Capítulo 6 (item 6.3.1), o Timer2 funciona somente no modo temporizador, pois a sua base de tempo provém obrigatoriamente do clock interno (Fosc/4). Ele não dispõe de entrada externa de clock, o que impossibilita o seu uso como contador de eventos externos.",
    "options": [
      "Porque ele possui apenas 8 bits de contagem e estoura rapidamente.",
      "Porque ele não possui pino de entrada para clock externo, operando apenas com o clock interno.",
      "Porque ele está exclusivamente dedicado ao módulo Watchdog.",
      "Porque ele não possui prescaler nem postscaler configuráveis.",
      "Porque sua interrupção é permanentemente mascarada pelo módulo ADC."
    ],
    "answer": "Porque ele não possui pino de entrada para clock externo, operando apenas com o clock interno."
  },
  {
    "question": "Qual o valor máximo da contagem na saída do Timer0 com o prescaler ajustado em 1:64?",
    "explanation": "O Timer0 é um contador de 8 bits, ou seja, conta até 256 (0 a 255). Com um prescaler configurado para dividir os impulsos de entrada por 64, o número total de eventos necessários para transbordar (estourar) o contador é 256 × 64 = 16.384 eventos.",
    "options": [
      "512 eventos.",
      "4096 eventos.",
      "8192 eventos.",
      "16384 eventos.",
      "32768 eventos."
    ],
    "answer": "16384 eventos."
  },
  {
    "question": "Qual temporizador está diretamente relacionado com o controle do modo PWM do módulo CCP no PIC16F877?",
    "explanation": "De acordo com o Capítulo 7 (item 7.4.1), o período do sinal PWM é controlado diretamente pelo Timer2 através do registro PR2. Quando o Timer2 atinge o valor de PR2, o ciclo do PWM é reiniciado.",
    "options": [
      "Timer0.",
      "Timer1.",
      "Timer2.",
      "Watchdog Timer.",
      "Timer Externo (RC)."
    ],
    "answer": "Timer2."
  },
  {
    "question": "O módulo CCP configurado no modo Captura (Capture) possui a função principal de:",
    "explanation": "No Capítulo 7 (item 7.2), o modo Capture é utilizado para a contagem de tempo entre dois eventos ocorridos em um pino (mudanças de borda). Ele copia o valor atual do Timer1 (16 bits) para os registradores do CCP (CCPRxH e CCPRxL).",
    "options": [
      "Gerar uma frequência fixa de clock para o microcontrolador.",
      "Converter sinais analógicos em digitais com resolução de 10 bits.",
      "Funcionar como uma chave de proteção contra falhas de software.",
      "Medir o tempo (período) de um sinal externo, capturando o valor do Timer1.",
      "Comparar dois registradores para acionar automaticamente o Timer0."
    ],
    "answer": "Medir o tempo (período) de um sinal externo, capturando o valor do Timer1."
  },
  {
    "question": "Quais são os modos de funcionamento suportados pelo módulo USART (Universal Synchronous Asynchronous Receiver Transmitter)?",
    "explanation": "De acordo com o Capítulo 9 (item 9.1.1), a USART pode ser configurada de dois modos diferentes: Assíncrono (full duplex, geralmente usado para comunicação com PCs) ou Síncrono (half duplex, para comunicação com periféricos como conversores A/D e EEPROMs).",
    "options": [
      "Capture, Compare e PWM.",
      "Mestre I2C e Escravo I2C.",
      "Temporizador e Contador.",
      "Síncrono e Assíncrono.",
      "Analógico e Digital."
    ],
    "answer": "Síncrono e Assíncrono."
  },
  {
    "question": "Para que o módulo conversor A/D (ADC) consiga operar enquanto o microcontrolador está no modo Sleep (baixo consumo), é necessário que:",
    "explanation": "De acordo com o Capítulo 10 (item 10.3), para que o módulo ADC funcione com a CPU em repouso (SLEEP), o clock de conversão deve ser configurado no modo RC interno (ADCS1:ADCS0 = 11). Se for usado o clock do sistema, a conversão é abortada ao entrar em Sleep.",
    "options": [
      "O oscilador principal (cristal) seja configurado para a função HS.",
      "A interrupção global do Timer0 seja ativada.",
      "O clock do conversor seja derivado do oscilador RC interno dedicado.",
      "O Watchdog Timer seja desabilitado por software.",
      "O pino MCLR receba nível lógico baixo continuamente."
    ],
    "answer": "O clock do conversor seja derivado do oscilador RC interno dedicado."
  },
  {
    "question": "Quantas fontes de interrupção diferentes possui o microcontrolador PIC16F877?",
    "explanation": "O Capítulo 11 (item 11.5.1) destaca explicitamente que este modelo de PIC possui um total de 14 interrupções diferentes, combinando fontes internas (periféricos) e externas.",
    "options": [
      "8.",
      "10.",
      "12.",
      "14.",
      "16."
    ],
    "answer": "14."
  },
  {
    "question": "Qual é o endereço do vetor de interrupção na memória Flash?",
    "explanation": "Quando qualquer evento de interrupção habilitada ocorre, a instrução em andamento é completada, o PC (endereço de retorno) é salvo na pilha e o programa é invariavelmente desviado para o vetor de interrupção, que fica no endereço 0x0004h (Capítulo 11, item 11.5.2).",
    "options": [
      "0000h.",
      "0004h.",
      "0008h.",
      "2007h.",
      "2000h."
    ],
    "answer": "0004h."
  },
  {
    "question": "Qual registro nos mostra o estado geral das interrupções e contém a chave de habilitação global (GIE)?",
    "explanation": "O registro INTCON (Interrupt Control) é o responsável por conter os bits de habilitações e flags globais do microcontrolador, incluindo o GIE (Global Interrupt Enable) no bit 7.",
    "options": [
      "STATUS.",
      "OPTION_REG.",
      "INTCON.",
      "PIE1.",
      "PIR1."
    ],
    "answer": "INTCON."
  },
  {
    "question": "Como se deve limpar uma Bandeira (Flag) de interrupção após a mesma ter ocorrido?",
    "explanation": "O Capítulo 11 (item 11.5.3) alerta que os flags das interrupções (na grande maioria das vezes) não são limpos automaticamente pelo sistema. Se o programador não os limpar via software antes de reabilitar as interrupções, o microcontrolador entrará em loop infinito de interrupção.",
    "options": [
      "A flag é limpa automaticamente pelo hardware assim que o vetor 0004h é atingido.",
      "A flag é limpa gerando-se um reset no pino MCLR.",
      "A flag deve ser limpa obrigatoriamente por software, pelo programador, dentro da rotina de tratamento.",
      "A flag é limpa automaticamente quando o Timer correspondente transborda novamente.",
      "A flag é limpa pela instrução RETFIE no final da sub-rotina."
    ],
    "answer": "A flag deve ser limpa obrigatoriamente por software, pelo programador, dentro da rotina de tratamento."
  },
  {
    "question": "Qual o período nominal de estouro do Watchdog Timer (WDT) no PIC16F877 sem a utilização de divisores (prescaler)?",
    "explanation": "O Capítulo 11 (item 11.7) explica que o período normal de estouro do WDT (acionado por um oscilador RC interno independente) é de aproximadamente 18 ms.",
    "options": [
      "1 ms.",
      "18 ms.",
      "72 ms.",
      "100 ms.",
      "1 segundo."
    ],
    "answer": "18 ms."
  },
  {
    "question": "Como é conhecido o reset gerado pelo hardware quando a tensão de alimentação cai abaixo de 4V por um intervalo superior a 100 microssegundos?",
    "explanation": "O Capítulo 11 (item 11.4.4) descreve o Brown-out Reset (BOR). Ele garante que o microcontrolador não opere de forma errática durante falhas e quedas temporárias de energia (tensão abaixo de 4V).",
    "options": [
      "Power-On Reset (POR).",
      "Watchdog Timer Reset (WDT).",
      "Master Clear Reset (MCLR).",
      "Brown-out Reset (BOR).",
      "In-Circuit Reset (ICR)."
    ],
    "answer": "Brown-out Reset (BOR)."
  },
  {
    "question": "Qual o endereço da memória Flash destinado à Palavra de Configuração (Registro CONFIG), o qual só pode ser acessado durante a gravação/programação do PIC?",
    "explanation": "O Capítulo 11 (item 11.2) afirma que a Palavra de Configuração fica mapeada no endereço 2007h e não pode ser lida nem escrita pelo código do usuário em tempo de execução, apenas pelo gravador externo.",
    "options": [
      "0000h.",
      "0004h.",
      "07FFh.",
      "1FFFh.",
      "2007h."
    ],
    "answer": "2007h."
  },
  {
    "question": "Após um evento de Reset, analisando-se o registro STATUS, qual bit em nível lógico '0' nos indica especificamente que o Watchdog provocou o reinício do micro?",
    "explanation": "Conforme o Capítulo 11 (Tabela 11.5 e item 11.6.3), o bit /TO é zerado pelo hardware toda vez que o contador do WDT estoura e provoca o reinício da CPU.",
    "options": [
      "Bit Z.",
      "Bit /POR.",
      "Bit /BOR.",
      "Bit /TO (Time-Out).",
      "Bit /PD (Power-Down)."
    ],
    "answer": "Bit /TO (Time-Out)."
  },
  {
    "question": "Qual das instruções abaixo determina o retorno de uma sub-rotina de interrupção, recuperando o endereço de retorno da pilha e religando a chave geral de interrupções (GIE)?",
    "explanation": "No Capítulo 12 (item 12.2.6), a instrução RETFIE faz o retorno da interrupção (colocando o valor do Topo da Pilha (TOS) no Program Counter) e simultaneamente executa a ação de 1 -> GIE, reabilitando novas interrupções.",
    "options": [
      "RETURN.",
      "RETLW.",
      "RETFIE.",
      "GOTO.",
      "CALL."
    ],
    "answer": "RETFIE."
  },
  {
    "question": "A instrução incfsz é muito utilizada em loops. Ela executa a seguinte operação:",
    "explanation": "No Capítulo 12, a sigla INCFSZ (Increment f, Skip if Zero) significa que o valor contido no registro 'f' será somado em 1. Se o resultado dessa operação alcançar 00h (após o 255), a próxima instrução do código será pulada, gerando um desvio condicional de 2 ciclos de máquina.",
    "options": [
      "Incrementa o registro W e salta a próxima instrução se o resultado for zero.",
      "Incrementa um registro 'f' (File) e salta a próxima instrução caso o resultado do incremento seja zero.",
      "Decrementa um registro 'f' e salta a próxima instrução caso o resultado seja zero.",
      "Testa um bit específico de 'f' e salta se ele for zero.",
      "Limpa o registro 'f' e salta incondicionalmente para a próxima rotina."
    ],
    "answer": "Incrementa um registro 'f' (File) e salta a próxima instrução caso o resultado do incremento seja zero."
  },
  {
    "question": "Qual a instrução responsável por transferir o fluxo do programa para uma sub-rotina (desvio com retorno), garantindo que o endereço atual seja salvo na Pilha (Stack)?",
    "explanation": "O Capítulo 12 destaca que a instrução CALL é um desvio com retorno. Antes de efetuar o salto, o PC+1 (endereço da próxima instrução) é salvo no Topo da Pilha (TOS) para que possa ser recuperado posteriormente pelas instruções de retorno.",
    "options": [
      "GOTO.",
      "DECFSZ.",
      "BTFSS.",
      "RETURN.",
      "CALL."
    ],
    "answer": "CALL."
  },
  {
    "question": "Analise o seguinte trecho de código em linguagem Assembly. Qual será o valor armazenado no registro destino e o estado dos flags Z, DC e C do registro STATUS ao término da execução?\n\nMOVLW 02h\nSUBLW 00h",
    "explanation": "A instrução MOVLW 02h carrega o registro Work (W) com o valor literal 02h. A instrução SUBLW 00h subtrai o valor atual de W de uma constante k (Operação: k - W). Assim, temos 00h - 02h. O resultado matemático é -2, o que resulta em um estouro negativo. Portanto, teremos Borrow/Empréstimo (Flag C = 0 e Flag DC = 0). O resultado não é zero (Z = 0). O valor -2 em complemento de dois de 8 bits é FEh, que ficará armazenado no próprio registro W.",
    "options": [
      "W = 02h, Z = 0, DC = 1, C = 1",
      "W = FEh, Z = 0, DC = 0, C = 0",
      "W = 00h, Z = 1, DC = 1, C = 1",
      "W = FEh, Z = 1, DC = 0, C = 1",
      "W = 02h, Z = 0, DC = 0, C = 0"
    ],
    "answer": "W = FEh, Z = 0, DC = 0, C = 0"
  }
];
