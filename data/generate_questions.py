import json
import re

text = """O valor máximo da contagem na saída do Timer0 com prescaler de 1:64 é: A) 256 eventos B) 1024 eventos C) 8192 eventos D) 16384 eventos (Correta) E) 32768 eventos

Registro de controle T1CON é usado na operação do módulo: A) Timer0 B) Timer1 (Correta) C) Timer2 D) ADC E) USART

Como podemos ampliar a contagem do TMR0? A) Alterando o cristal externo B) Usando o Watchdog Timer C) Configurando o Prescaler (Correta) D) Usando o Módulo CCP E) Habilitando a interrupção global

O módulo TMR0 possui as seguintes características, EXCETO: A) É um temporizador/contador de 8 bits B) Pode ser lido mas, não escrito (Correta) C) Possui prescaler de 8 bits programável D) Seleção de clock interno ou externo E) Gera interrupção no overflow (transbordamento) de FFh para 00h

_____ é selecionado no MUX pelo bit T0CS (OPTION_REG<5>). Neste modo, o módulo Timer0 incrementará livremente a cada ciclo de instrução, isto é, Fosc/4 (sem prescaler). A) Modo Captura B) Modo Contador C) Modo Síncrono D) Modo PWM E) Modo Temporizador (Correta)

Qual é o pino no PIC16F877 que, ao ser inserido um clock externo, possibilita incrementar o módulo Timer0? A) RA0/AN0 B) RA4/T0CK1 (Correta) C) RB0/INT D) RC0/T1OSO E) RC2/CCP1

Qual recurso, no PIC16F877, permite que o TIMER1 continue a sua contagem durante o SLEEP? A) Oscilador RC interno B) Oscilador externo (Correta) C) Watchdog Timer D) Prescaler do Timer0 E) Módulo CCP

Como é feita, no PIC16F877, a sincronização do clock externo e o interno no TIMER1? A) O temporizador incrementa a cada borda de descida do clock de entrada RC2 B) O temporizador incrementa a cada borda de subida do clock de entrada RC0 ou RC1 (Correta) C) Por interrupção no pino RB0 D) Através do comparador analógico E) O clock externo substitui o Fosc/4 diretamente sem sincronização

Assinale a alternativa correta com relação ao módulo TMR2. A) É um temporizador de 16 bits B) Possui apenas Prescaler C) Opera durante o SLEEP D) possui Prescaler e Postscaler programáveis (Correta) E) É usado para contar eventos externos

Quanto ao Módulo TMR1, assinale a alternativa INCORRETA. A) É um temporizador/contador de 16 bits B) Pode operar no modo síncrono ou assíncrono C) limite de contagem vai de 00h até FFh (Correta) D) Pode ser usado com oscilador próprio E) Interrompe no overflow de FFFFh para 0000h

O módulo CCP no modo Captura possui a função de: A) Gerar sinais PWM B) contagem de tempo entre dois eventos (Correta) C) Comparar valores analógicos D) Converter sinais analógicos em digitais E) Transmitir dados serialmente

O módulo CCP no modo Compare possui a função de: A) Comparar constantemente os registros TMR1 (L e H) e CCPRx (L e H) (Correta) B) Comparar a tensão de dois pinos analógicos C) Gerar interrupção quando TMR2 atinge o valor PR2 D) Comparar os bits do registro STATUS E) Comparar dados recebidos via USART

Assinale a opção que NÃO corresponde ao módulo CCP no modo Compare: A) Força o pino CCPx a nível alto na igualdade B) Força o pino CCPx a nível baixo na igualdade C) Gera uma interrupção na igualdade D) comparar sinais analógicos (Correta) E) Aciona um Evento Especial (Special Event Trigger)

Como está dividido o registro CCP1? A) CCP1CON e CCP1STAT B) CCPR1L e CCPR1H (Correta) C) CCP1LOW e CCP1HIGH D) TMR1 e CCP1 E) PR2 e CCP1

Em que situação ocorre um evento especial de disparo (special event trigger) no CCP2CON? A) Quando houver transbordamento no Timer0 B) Quando ocorrer uma interrupção externa no pino RB0 C) Quando houver igualdade na comparação com o Timer1 (Correta) D) Ao receber um dado na USART E) Quando o Watchdog Timer estourar

No Modo Capture, no momento em que ocorre um evento nos pinos RC2/CCP1 ou RC1/CCP2, é gerado um sinal de captura que copia a contagem atual dos registros _____ e _____ para o par de registros _____ e _____. A) TMR0, PR2; CCPRxL, CCPRxH B) TMR1L, TMR1H; CCPRxL, CCPRxH (Correta) C) TMR2, PR2; TMR1L, TMR1H D) ADRESH, ADRESL; CCPRxL, CCPRxH E) CCPRxL, CCPRxH; TMR1L, TMR1H

Quais os bits do CCPxCON que habilitam as opções tanto no Modo Capture quanto no Modo Compare? A) <7,6> B) <5,4> C) <0,3> (Correta) D) <1,2> E) <4,7>

Como os Módulos CCP1 e CCP2 operam no SLEEP, nos seus modos de operação? A) Capture operante, Compare operante e PWM inoperante B) Capture operante, Compare inoperante e PWM operante C) Capture inoperante, Compare inoperante e PWM inoperante (Correta) D) Apenas o modo PWM continua operante E) Todos os modos continuam operantes normalmente

Quando o Módulo CCP está operando no Modo PWM, qual registro é utilizado como temporizador para todas as ações? A) TMR0 B) TMR1 C) TMR2 (Correta) D) PR2 E) WDT

Qual é a resolução e o valor de PR2 para um pulso PWM de frequência 78,125 kHz, frequência do oscilador principal de 20 MHz e Prescaler do Timer2 ajustado em 1:1? A) 31 e 10 bits B) 63 e 8 bits (Correta) C) 127 e 7 bits D) 255 e 8 bits E) 63 e 10 bits

Na operação da porta MSSP no modo I²C, pelo usuário, quando se inicia uma condição Start? A) Automaticamente na inicialização do módulo B) Quando o pino SDA vai a zero C) Quando da habilitação do bit SEN (SSPCON2<0>) (Correta) D) Quando ocorre uma interrupção da USART E) Escrevendo no registro SSPBUF

A função do bit ACK em uma transmissão mestre/escravo é: A) Iniciar a comunicação I²C B) Informar ao mestre do sucesso ou não da operação (Correta) C) Finalizar a transmissão (Stop bit) D) Configurar a velocidade da transmissão E) Selecionar o escravo a ser endereçado

O número máximo de dispositivos ligados ao barramento I²C é função: A) Do tamanho do registro de deslocamento B) Do número de pinos disponíveis no microcontrolador C) Da velocidade do clock D) Da capacitância máxima do barramento (Correta) E) Do tamanho do endereço (7 ou 10 bits)

No barramento I²C, a condição na qual ocorre uma transição negativa na linha SDA enquanto a linha SCL estiver em nível lógico alto é conhecida como: A) STOP B) ACK C) NACK D) START (Correta) E) DATA

O módulo _____ é uma interface série síncrona usada para a comunicação com outros periféricos ou dispositivos microcontroladores. A) USART B) Master Synchronous Serial Port (MSSP) (Correta) C) CCP D) Comparador Analógico E) PORTA

Recurso que permite ao dispositivo mestre endereçar todos os dispositivos escravos simultaneamente: A) Endereçamento de 10 bits B) Endereço de Chamada Geral (Correta) C) Condição de Start Repetida D) Baud Rate Generator E) Operação Multimestre

O dispositivo mestre não diferencia automaticamente o tipo de comunicação em 7 ou 10 bits; ele somente transmite e recebe informações de ___ bits. A) 7 B) 8 (Correta) C) 9 D) 10 E) 16

O que representa o estado do bit ACKSTAT = 1? A) Ocorreu um erro na escrita (Correta) B) A transmissão foi bem sucedida C) O barramento está livre D) Um dispositivo escravo está solicitando atenção E) Condição de STOP foi recebida

Qual é a diferença numa transmissão de um dispositivo Mestre num endereçamento de 10 bits para um endereçamento de 7 bits? A) endereço de 7 bits transmite 1 Byte; endereço de 10 bits, 2 Bytes (Correta) B) endereço de 7 bits usa a USART; de 10 bits usa o MSSP C) endereço de 7 bits transmite mais rápido D) endereço de 10 bits não permite bit de ACK E) Nenhuma, ambos transmitem 1 Byte para o endereço

Qual é a diferença da transmissão para a recepção de um dispositivo Mestre num endereçamento de 10 bits? A) Na recepção não há ACK B) A necessidade do dispositivo de gerar uma condição de re-START após o envio do segundo byte (Correta) C) O dispositivo não pode receber dados em 10 bits, apenas transmitir D) A velocidade deve ser reduzida pela metade E) O endereço deve ser enviado invertido

A função do Gerador de Baud Rate (BRG) do módulo USART é: A) Sincronizar o clock I²C B) determinar a quantidade de bits que pode ser transmitida por segundo (Correta) C) Gerar interrupções de tempo real D) Calcular o checksum dos dados E) Dividir o clock do Timer0

Os modos em que pode ser configurado o módulo USART são: A) analógico e digital B) mestre e escravo C) capture e compare D) síncrono e assíncrono (Correta) E) sleep e ativo

Na Recepção Assíncrona da USART, depois de receber o bit de STOP, os dados acumulados no registro RSR são transferidos para o registro de dados _____ (se estiver vazio). A) TXREG B) SPBRG C) RCREG (Correta) D) SSPBUF E) PIR1

Qual dos modos deve ser configurado o módulo USART para a comunicação com computadores? A) Síncrono Mestre B) Síncrono Escravo C) I²C D) SPI E) Assíncrono (Correta)

Quais registros fazem o controle dos estados da transmissão e da recepção no módulo USART, respectivamente? A) SPBRG e RCREG B) TXREG e RCREG C) TXSTA e RCSTA (Correta) D) PIE1 e PIR1 E) STATUS e OPTION_REG

O módulo USART Assíncrono consiste dos seguintes blocos, EXCETO: A) Gerador de Baud Rate (BRG) B) Circuito de amostragem C) Transmissor assíncrono D) Receptor síncrono (Correta) E) Receptor assíncrono

Qual PORTA/PINOS estão associados ao módulo USART? A) PORTB/0,1 B) PORTA/2,3 C) PORTC/6,7 (Correta) D) PORTD/4,5 E) PORTE/0,1,2

Qual é o primeiro passo para configurar a transmissão Síncrona Mestra da USART? A) Setar o bit TXEN B) Inicializar o registro SPBRG com a baud rate apropriada (Correta) C) Habilitar a interrupção global D) Configurar os pinos RX/TX como entradas E) Escrever o dado no TXREG

Qual é o primeiro passo para configurar a transmissão Síncrona Escrava da USART? A) Setar o bit SYNC B) Habilitar a Porta Série Síncrona Escrava (Correta) C) Configurar o SPBRG D) Limpar o bit SPEN E) Habilitar o bit TXEN

Qual é o passo para configurar as interrupções na Recepção Síncrona Mestra da USART, além de ativar o bit RCIE (PIE1<5>)? A) Habilitar o bit TXIE B) Habilitar os bits GIE (INTCON<7>) e PEIE (INTCON<6>) (Correta) C) Limpar o flag RCIF D) Setar o bit CREN E) Desabilitar o Watchdog Timer

Para que o módulo conversor A/D opere durante o Sleep, é necessário que: A) Use oscilador externo a cristal B) Use oscilador RC interno (Correta) C) Habilite a USART antes de dormir D) Desligue as interrupções E) Coloque todos os pinos como saída

O módulo Conversor Analógico/Digital no PIC16F877 contém: A) um conversor, 8 bits e 10 canais B) um conversor, 12 bits e 4 canais C) um conversor, 10 bits e 8 canais (Correta) D) dois conversores de 8 bits e 4 canais E) um conversor de 16 bits e 1 canal

Assinale a alternativa INCORRETA quanto ao Módulo Conversor A/D. A) O resultado possui 10 bits B) Possui 8 canais de entrada C) Não opera no Modo SLEEP (Correta) D) Os canais são multiplexados E) A tensão de referência pode ser configurada

O Módulo Conversor A/D possui os registros abaixo, EXCETO: A) ADCON0 B) ADCON1 C) ADRESH D) ADRESL E) ADCON2 (Correta)

Em quais registros do Módulo Conversor A/D são armazenados os dados da conversão? A) ADCON0 e ADCON1 B) STATUS e W C) PORTA e TRISA D) ADRESH e ADRESL (Correta) E) TMR1H e TMR1L

Qual a situação que indica o fim da conversão no Módulo Conversor A/D? A) O bit GO/DONE setado pelo Hardware B) O bit ADON apagado C) O bit GO/DONE apagado pelo Hardware e o bit ADIF setado (Correta) D) O bit RCIF setado E) Uma interrupção no pino RB0

Qual será a resposta do Módulo Conversor A/D se, no Modo SLEEP, o clock estiver configurado para externo? A) A conversão ocorrerá normalmente B) A conversão será abortada (Correta) C) O microcontrolador acordará do SLEEP imediatamente D) O resultado será preenchido com 1's E) A conversão será pausada e retomada ao acordar

Como estarão os dados dos registros ADRESH:ADRESL após a ocorrência de um POR (Power On Reset)? A) Em FFh e FFh B) Em 00h e 00h C) Os dados serão desconhecidos (Correta) D) Em AAh e 55h E) Preservam o último valor convertido

Qual é o bit que ativa/desativa o Módulo Conversor A/D? A) CHS0 B) GO/DONE C) ADON (ADCON0<0>) (Correta) D) PCFG3 E) ADFM

No registro ADCON1, com o bit ADFM (ADCON1<7>) setado, como estarão dispostos os 10 bits nos registros ADRESH:ADRESL? A) 8 Msb nos ADRESH<7:0> e 2 Lsb nos ADRESL<7:6> B) 8 Lsb nos ADRESL<7:0> e 2 Msb nos ADRESH<1:0> (Correta) C) Centralizados nos dois registros D) Os 10 bits ficam apenas no ADRESH E) Os 10 bits ficam divididos em blocos de 5 bits

Qual a instrução que determina o fim de uma sub-rotina de interrupção? A) RETURN B) RETLW C) END D) RETFIE (Correta) E) GOTO

O endereço do registro CONFIG na memória Flash é: A) 0000h B) 0004h C) 1FFFh D) 2007h (Correta) E) FFFFh

É um evento externo ao programa que provoca a parada de sua execução, a verificação e tratamento do referido evento pelo micro e em seguida o retorno ao programa. A isto chamamos de: A) Polling B) Watchdog Reset C) Sub-rotina (CALL) D) Interrupção (Correta) E) Brown-out Reset

Reseta o micro sempre que a tensão de alimentação cair abaixo de 4 volts: A) Power On Reset (POR) B) Watchdog Timer (WDT) C) Master Clear (MCLR) D) Brown-out Reset (BOR) (Correta) E) Timer0 Overflow

São características especiais configuradas pelo Registro CONFIG, EXCETO: A) Seleção do oscilador B) Habilitação do Watchdog Timer C) Proteção de código D) Direcionamento do PORTA (Correta) E) Habilitação do Brown-out Reset

Qual é a diferença do Oscillator Start-up Timer (OST) para o Power-up Timer (PWRT)? A) O OST aguarda a alimentação e o PWRT aguarda o cristal se estabilizar B) O OST aguarda o cristal se estabilizar e o PWRT aguarda a alimentação (Correta) C) Não há diferença, são o mesmo temporizador D) O OST é para oscilador RC e o PWRT para cristal E) O OST opera em 10 bits e o PWRT em 8 bits

O que representa o trecho " _CONFIG _WDT_OFF & _CP_OFF" da diretiva CONFIG? A) Watchdog está habilitado e a memória desprotegida B) Watchdog está desabilitado e a memória de programa protegida C) Watchdog está desabilitado e a memória de programa desprotegida contra leitura (Correta) D) Watchdog está habilitado e a memória protegida E) Configura o oscilador como RC e desliga proteção

Quais os modos dos osciladores nos quais se utiliza um cristal ou ressonador de cerâmica nos pinos OSC1 e OSC2 do PIC? A) RC e LP B) XT, LP e HS (Correta) C) Apenas HS D) INTOSC e RC E) EC e EXTRC

Quanto às interrupções, assinale a alternativa correta. A) Se o GIE estiver zerado, nenhuma flag de interrupção pode ser setada B) Se a interrupção ocorrer, o bit de flag será setado independentemente dos GIE, individual e periférico (Correta) C) O bit de flag só é setado se o bit de habilitação (IE) estiver em 1 D) As flags são limpas automaticamente ao atender a interrupção E) O PIC16F877 suporta até 128 vetores de interrupção diferentes

Qual é o recurso que possibilita alguns PICs serem programados diretamente nos circuitos, através de cinco pinos, gravando sinais diretamente na placa? A) JTAG B) ICSP (In-circuit Serial Programming) (Correta) C) UART Bootloader D) SPI Flash E) EEPROM paralela

Como é composta a instrução no PIC16F877? A) OPCODE apenas B) Operandos apenas C) OPCODE e Operandos (Correta) D) Mnemônico e comentários E) Rótulos e Diretivas

Como estão agrupadas as instruções no PIC16F877? A) Matemáticas, Lógicas e de Desvio B) Operações orientadas a byte, Orientadas a bit, e de Literal e de controle (Correta) C) Leitura, Escrita e Execução D) Registradores, Memória e I/O E) Aritméticas e Manipulação de String

Para instruções orientadas a Byte, se d for 0 ou W, onde será armazenado o resultado? A) No registro f B) Na memória EEPROM C) No registro W (Correta) D) No PC (Program Counter) E) Descartado

O que representa k, para operações com literal e de controle? A) Um registro da memória de dados B) Um ponteiro para a EEPROM C) Uma flag do registro STATUS D) Uma constante de 8 ou 11 bits ou um valor literal (Correta) E) O pino de uma porta de I/O

Como ocorre a execução do segundo ciclo numa instrução de salto? A) É executado normalmente B) Busca o próximo opcode da RAM C) Executado como NOP (Correta) D) Reinicia o Watchdog E) Salva o contexto na pilha

Qual é o tempo de execução de uma instrução de teste verdadeiro, cuja frequência do oscilador é de 10 MHz? A) 0,4 µs (1 ciclo de instrução) B) 0,8 µs (2 ciclos de instrução) (Correta) C) 1,0 µs D) 2,0 µs E) 4,0 µs

A instrução BTFSC pertence a qual grupo de instruções? A) Orientadas a Byte B) Literais C) Desvio D) Orientadas à BIT (Correta) E) Controle

Nas instruções do tipo MNEMÔNICO k, quais as duas formas que k poderá ser usado? A) Somado a FSR ou INDF B) Armazenado no Registro W ou usado com endereço de destino para desvios (Correta) C) Salvo no PORTA ou PORTB D) Incrementado ou decrementado E) Deslocado à esquerda ou à direita

Assinale a instrução que possui um desvio com retorno. A) GOTO B) RETLW C) RETURN D) CALL (Correta) E) BTFSS

Nos _____, o fluxo do programa é desviado para outro endereço, seguindo então a partir de lá. Podem ser dos tipos condicionais e incondicionais. A) Desvios sem retorno (Correta) B) Sub-rotinas C) Operandos literais D) Loops aninhados E) Interrupções

PDF 2: Provas de Introdução aos Microcontroladores (Convertidas)
(Questões previamente de múltipla escolha mantiveram seu formato, apenas as diretas e discursivas foram adaptadas)

Quantas interrupções diferentes possui o PIC16F877 ? A) 4 interrupções B) 8 interrupções C) 12 interrupções D) 14 interrupções (Correta) E) 16 interrupções

Qual registro pode-se habilitar e desabilitar o Watchdog durante a programação? A) INTCON B) OPTION_REG C) STATUS D) PCLATH E) Registro CONFIG (Correta)

Por que o TIMER2 não pode ser usado como contador de eventos? A) Porque ele conta apenas pulsos decrescentes B) Porque ele tem apenas 8 bits C) Porque não dispõe de uma entrada externa de clock (Correta) D) Porque ele é reservado apenas para o conversor A/D E) Porque ele não possui bit de interrupção

Qual o endereço do registro CONFIG na memória Flash ? A) 0000h B) 0004h C) 01FFh D) 2007h (Correta) E) FFFFh

Qual temporizador está relacionado com o modo PWM do módulo CCP ? A) Timer0 B) Timer1 C) Timer2 (Correta) D) Watchdog Timer E) Power-up Timer

Em um microcontrolador PIC16F84, funcionando com um clock externo de 4MHZ, qual o tempo de retardo (delay) se o TIMER0 estiver trabalhando com um PREESCALER ajustado com um fator de divisão 64:1 e o valor inicial de TMR0 = 64? (Considerando contagem até o overflow 256) A) 1024 µs B) 4096 µs C) 8192 µs D) 12288 µs (Correta) (Resolução: Tins = 1µs; Passos = 256 - 64 = 192; Delay = 192 * 64 * 1µs = 12288µs) E) 16384 µs

Em um microcontrolador PIC16F84, foi conectado um led ao pino RB4. Sabendo que o led estará diretamente polarizado quando houver nível lógico alto no pino RB4 e sabendo-se também que o registrador TRISB = 45h, além do registrador PORTB = AAh. Pergunta-se: O led está aceso ou apagado? Justifique. A) Aceso, pois o pino RB4 está como entrada (1 no TRISB) B) Aceso, pois o pino RB4 está como saída (0 no TRISB) e o nível do PORTB é baixo (0) C) Apagado, pois o pino RB4 está configurado como saída (0 no TRISB) e em nível baixo (0 no PORTB) (Correta) (45h = 0100 0101b, RB4 = 0 (saída). AAh = 1010 1010b, RB4 = 0 (baixo)) D) Apagado, pois o pino RB4 está configurado como entrada E) Aceso intermitentemente devido ao clock externo

Qual das opções seguintes define que os pinos do PORTC estão metade como SAÍDA (RC0 A RC3) e a outra metade (RC4 a RC7) como ENTRADA? A) TRISC = 00001111b. B) TRISC = 00011111b. C) TRISC = 00111111b. D) TRISC = 11110000b. (Correta) E) PORTC = 11111000b.

No endereçamento direto de um registro, a seleção de banco é feita por (pelo): A) Registros de STATUS e FSR B) Bits IRP, RP1 e RP0 do registro de STATUS C) Bit 7 do registro FSR e bit IRP do registro de STATUS. D) Registros INDF e FSR E) Bits RP1 e RP0 do registro de STATUS (Correta)

Se a frequência do clock externo do PIC16F877 for de 16MHz pode-se afirmar que sua frequência interna será de: A) 3 KHz . B) 4 MHz . (Correta - O gabarito visual possivelmente conteria esta alternativa, a opção B na transcrição diz 4 KHz, mas Fosc/4 de 16MHz = 4MHz) C) 8 KHz . D) 10 KHz . E) 12 KHz .

O registro que nos mostra o estado geral do microcontrolador é: A) OPTION_REG B) INTCON C) STATUS (Correta) D) INDF E) FSR

Qual o bit responsável pela habilitação geral das interrupções no PIC16F877 ? A) GIE do registro INDF; B) GIE do registro STATUS; C) GIE do registro INTCON; (Correta) D) INTE do registro STATUS; E) INTE do registro INTCON.

Qual a chamada de uma sub-rotina que não tem retorno ? A) CALL B) RETURN C) RETLW D) GOTO (Correta) E) RETFIE

Como se limpa um Flag de interrupção ? A) Utilizando a instrução CLRF STATUS B) O hardware limpa automaticamente todas as flags C) Limpando o respectivo bit no registrador apropriado (ex: PIR1, INTCON) via software com a instrução BCF (Correta) D) Executando a instrução RETFIE E) Resentando o microcontrolador

Qual a instrução que limpa um registro completo ? A) CLRW B) CLRF (Correta) C) BCF D) MOVLW 00h E) ANDLW 00h

No pic16f84 como o programador realiza a mudança do banco 0 para o banco 1? A) BCF STATUS, RP0 B) BSF STATUS, RP0 (Correta) C) BSF STATUS, RP1 D) MOVWF BANK1 E) GOTO BANK1

O endereço contido no PC durante uma instrução GOTO é formado por: A) Endereço da sub-rotina mais os bits <4:0> do registro PCLATH. B) Opcode da instrução mais os bits IRP, RP1 e RP0 do registro de STATUS. C) Opcode da instrução mais os bits RP1 e RP0 do registro de STATUS. D) Opcode da instrução mais os bits <4:3> do registro PCLATH. (Correta) E) Opcode da instrução mais os bits <12:8> do registro PCH.

Observe o desenho de um hardware com um cristal de 8MHz. Qual a frequência interna de operação do microcontrolador? A) 8 MHz B) 16 MHz C) 2 MHz (Correta) (8MHz / 4) D) 4 MHz E) 1 MHz

Baseado num diagrama de hardware de um PIC onde o pino MCLR está conectado através de um resistor de 10K ao VCC, qual é a função desse pino? A) Habilitar a escrita na EEPROM B) Servir como entrada analógica exclusiva C) Gerar interrupção de mudança de estado D) Causar o reset físico do microcontrolador quando colocado em nível baixo (Correta) E) Alimentar o núcleo do processador

Em um circuito onde LEDs estão ligados a pinos através de um resistor ao terra (GND), com que nível lógico do pino eles acendem? A) Nível lógico '0' (Baixo) B) Nível lógico '1' (Alto) (Correta) C) Alta impedância (High-Z) D) Estado flutuante E) Tensões negativas

Para realizar um atraso (delay) longo por software (ex: 2 segundos), a técnica adequada em linguagem Assembly é: A) Chamar a instrução SLEEP por 2 segundos B) Utilizar uma sequência de 2 milhões de NOPs C) Configurar o Watchdog Timer para estourar em 2 segundos D) Aninhar múltiplos loops (usando registradores como contadores) que decrementam até zero com a instrução INCFSZ ou DECFSZ (Correta) E) Conectar um capacitor de 2 Farads no pino de oscilador

Qual o endereço do vetor de interrupção na memória Flash ? A) 0000h B) 0004h (Correta) C) 0008h D) 2007h E) FFFFh

Em qual modo a operação de captura, do TIMER 1, pode não funcionar? A) Modo síncrono com clock interno B) Modo assíncrono com oscilador externo no SLEEP (Correta) (Modo de captura depende do clock do sistema operando normalmente) C) Modo contador simples D) Em frequências acima de 1MHz E) Quando o GIE está desativado

O valor máximo da contagem na saída do Timer0 com prescaler de 1:64 é: A) 512 eventos. B) 4096 eventos. C) 8192 eventos. D) 16384 eventos. (Correta) E) 32768 eventos.

O módulo CCP no modo Captura possui a função de: A) Comparar constantemente os registros TMR1 (L e H) e CCPRx (L e H). B) Contagem de tempo entre dois eventos. (Correta) C) Gerar o ciclo ativo D) Gerar um sinal de frequência fixa. E) Comparar constantemente os registros TMR2 (L e H) e CCPRx (L e H).

Para que o módulo conversor A/D opere durante o Sleep é necessário que: A) Use oscilador RC externo. B) Use oscilador interno a cristal. C) Use oscilador LC externo. D) Use oscilador externo a cristal. E) Use oscilador RC interno. (Correta)

Qual a instrução que determina o fim de uma sub-rotina de interrupção? A) RETURN B) END C) RETFIE (Correta) D) RETSUB E) RETLW

Durante um teste de bit, encontramos o bit Z (STATUS<2>) em nível lógico '1'. O que aconteceu para que este bit assumisse tal estado? A) Ocorreu um overflow aritmético (Carry) B) O watchdog timer reiniciou o sistema C) Um operando negativo foi carregado em W D) O resultado de uma operação lógica ou aritmética foi igual a zero (0) (Correta) E) A pilha (stack) sofreu overflow

A instrução 'incfsz f,d' serve para: A) Incrementar f, e se o resultado for zero pula a próxima instrução (Correta) B) Inicializar o registro f com zero C) Incluir um arquivo fonte D) Testar se f é igual a d E) Incrementar FSR

A instrução 'btfss f,b' serve para: A) Limpar o bit b do registro f B) Setar o bit b do registro f C) Testar o bit b de f, e saltar se for '1' (Correta) D) Testar o bit b de f, e saltar se for '0' E) Mover o bit b de f para o STATUS

Qual Bit, nível lógico e registro que nos mostra que o Watchdog provocou resete do micro? A) Bit Z = 1 ; STATUS B) Bit 4 (TO) = 0 ; STATUS (Correta) C) Bit PD = 0 ; STATUS D) Bit 3 (PD) = 1 ; STATUS E) Bit WDTEN = 0 ; CONFIG

Qual a função do Contador de Programa (PC)? A) Contar o número de interrupções B) Armazenar valores matemáticos da ALU C) Estabelecer o fluxo de controle dos direcionamentos da memória que o código do programa contém (Correta) D) Contar o número de ciclos de instrução do Timer0 E) Selecionar o banco de memória RAM

Qual o valor armazenado no registro destino (W) e qual o valor dos bits Z, DC e C do registro STATUS no final do programa (MOVLW 02h, SUBLW 00h)? A) W = 02h, Z=0, DC=1, C=1 B) W = 00h, Z=1, DC=0, C=0 C) W = FEh, Z=0, DC=0, C=0 (Correta) (00h - 02h = FEh) D) W = FEh, Z=1, DC=1, C=1 E) W = FFh, Z=0, DC=1, C=0

Defina Pipeline. A) É um barramento de comunicação serial de alta velocidade B) É a área de memória usada para proteger o código C) É a busca e execução de uma instrução num ciclo de máquina, onde enquanto uma executa a outra é buscada (Correta) D) É a estrutura de dados LIFO da pilha E) É o conversor de sinais A/D

Quais os modos de funcionamento da USART? A) Analógica e Digital B) Multiplexada e Simples C) Síncrona e Assíncrona (Correta) D) Mestre e Escrava E) Direta e Indireta

Os bits de configuração do oscilador, registro CONFIG (bit 1-0 FOSC1:FOSC0 ) estão ambos em nível lógico “1”. Qual tipo de oscilador foi selecionado? A) XT B) HS C) LP D) RC (Correta) E) INTOSC

Cite quatro tipos de Interrupções. A) Power-On, Brown-out, MCLR, Watchdog B) TIMER0, PORTA PARALELA, GRAVAÇÃO DA EEPROM e TIMER2 (Correta) C) Analógica, Digital, Serial, Paralela D) Interna, Externa, Mascarável, Não-Mascarável E) GOTO, CALL, RETURN, RETFIE

O que é necessário para que ocorra uma interrupção e o micro tome conhecimento? A) O microcontrolador deve estar em SLEEP B) Apenas que o evento físico (ex: mudança de pino) aconteça C) Além de o evento acontecer, é necessário que os bits de habilitação geral (GIE), de periféricos (PEIE) e individual estejam setados (Correta) D) O Watchdog Timer deve estourar E) O registro STATUS deve estar no banco 0

Para escrever um programa em Assembly que liga um LED em RA2 enquanto o botão em RB7 estiver pressionado (nível 0), a rotina de leitura deve utilizar: A) Instruções BTFSS / BTFSC verificando o pino RB7 e acionando BSF / BCF no pino RA2 (Correta) B) Instruções de conversão A/D no pino RB7 C) Apenas a instrução MOVF PORTB, W D) Um temporizador configurado em PWM E) Interrupção da USART

Qual a instrução que determina o retorno de uma sub-rotina, recuperando o último endereço da pilha? A) RETFIE B) RETURN (Correta) C) GOTO D) POP E) END

Qual registro controla a operação da porta D como porta paralela escrava? A) TRISE B) PORTD C) STATUS D) TRISE / PSPMODE (Correta) E) INTCON

Qual o período normal de estouro do Watchdog Timer no PIC16F877 (sem prescaler)? A) Aproximadamente 1 ms B) Aproximadamente 18 ms (Correta) C) Aproximadamente 1 segundo D) Exatamente 100 µs E) Exatamente 256 ciclos de máquina

Na memória FLASH quais bits, após configurados manualmente, passam a operar como CHAVE SELETORA da página de programa? A) RP0 e RP1 do STATUS B) GIE e PEIE do INTCON C) CHS0 a CHS2 do ADCON0 D) bits <4:3> do PCLATH (PCLATH<4:3>) (Correta) E) FOSC0 e FOSC1 do CONFIG

Quantas instruções podem ser armazenadas na memória Flash do PIC 16F877? A) 1024 (1K) B) 2048 (2K) C) 4096 (4K) D) 8192 (8K) (Correta) E) 16384 (16K)

No endereçamento indireto, qual registro aponta para a memória RAM? A) INDF B) PCLATH C) STATUS D) FSR (Correta) E) W

A família de microcontroladores “PIC” pertencem a qual fabricante? A) Microchip. (Correta) B) Atmel. C) Intel. D) Motorola. E) Siemens.

De acordo com as características do PIC16F877, marque a opção INCORRETA: A) O espelhamento facilita ao programador evitando trocas constantes de banco; B) Não há bits de status para indicar condições de stack overflow (pilha cheia); C) Este microcontrolador possui 7 tipos de interrupções podendo chegar a 14 tipos ; (Correta - O PIC16F877 possui 14 fontes de interrupção e um só vetor. A afirmação contém um formato estranho no original que a caracteriza como errada no contexto de 7 tipos) D) O registro de instruções se carrega cada vez que a ALU solicita uma nova instrução; E) Todos registros especiais possuem 8 bits.

A frequência do clock externo do PIC16F877 com um ciclo de instrução de 200 ns, é: A) 200 Hz . B) 100 KHz . C) 200 KHz . D) 20 MHz . (Correta) (Se ciclo = 200ns -> freq de ciclo = 5MHz. Freq externa = 4 * 5MHz = 20MHz) E) 100 MHz .

Após a leitura da memória EEPROM de dados, o dado lido é armazenado na (no): A) Flash de programa B) Registro EEDATA (Correta) C) Registro de STATUS D) RAM de dados E) Registro EEADR

A porta que pode usar resistores de pull-up internos, é: A) B (Correta) (PORTB possui resistores pull-up internos ativáveis pelo bit RBPU do OPTION_REG) B) D C) C D) E E) A

Explique o porquê do uso do termo Banco, relativo a memória RAM: A) Refere-se à organização física da memória de dados em blocos (bancos) selecionáveis, permitindo acessar mais endereços de memória utilizando os mesmos poucos bits de endereçamento direto da instrução (Correta) B) Refere-se ao espaço onde o programa principal é armazenado C) Trata-se do local da EEPROM destinado a senhas e dados monetários D) É o circuito responsável por fornecer a corrente de reset (BOR) E) É a técnica de salvar os dados da pilha em um local seguro

Cite as características do registro especial W (WORK): A) Fica sempre no Banco 1, não precisa de endereçamento, tem 16 bits B) Controla os pinos do PORTA C) É o registrador de trabalho, de 8 bits, que atua como destino ou origem principal das operações lógicas e matemáticas com a ULA (ALU), e não possui endereço mapeado na RAM (Correta) D) É utilizado unicamente para direcionar o Program Counter (PC) E) Zera todos os registros periféricos quando o microcontrolador é iniciado

Como é conhecido o reset que atua quando a tensão de alimentação cai abaixo de 4V durante um intervalo de tempo maior que 100 microsegundos? A) MCLR B) Power-On Reset (POR) C) Watchdog Timer Reset (WDT) D) Stack Underflow Reset E) Brown-out Reset (BOR) (Correta)

O PIC16F877 possui um total de quantas interrupções diferentes ? A) 4 B) 8 C) 14 (Correta) D) 16 E) 32

Em um microcontrolador PIC16F84, foi conectado um led ao pino RA0. Sabendo que o led estará diretamente polarizado quando houver nível lógico alto no pino RB4 e sabendo-se também que o registrador TRISA = F2h, além do registrador PORTA = EEh. Pergunta-se: O led está aceso ou apagado? A) Aceso, pois o pino está como entrada B) Aceso, pois o pino está como saída e com nível lógico alto (1) C) Apagado, pois no bit do TRISA correspondente ao pino RA0 (bit 0) está configurado como saída (0), e no registrador PORTA o bit correspondente está em nível baixo (0, já que EEh = 1110 1110b), logo o led não recebe tensão (Correta) D) Apagado por falha no cristal E) Aceso porque todos os resistores de pull-up estão ativos"""

lines = text.split('\\n')

questions = []

# Some parts might be joined or not parsed correctly, I'll use regex.
pattern = re.compile(r'(.*?)\s+A\)\s+(.*?)\s+B\)\s+(.*?)\s+C\)\s+(.*?)\s+D\)\s+(.*?)\s+E\)\s+(.*)')

for block in text.split('\\n\\n'):
    block = block.strip()
    if not block or block.startswith('PDF 2:'):
        continue
    
    # Check if block matches the standard format
    match = pattern.search(block)
    if match:
        q_text = match.group(1).strip()
        opt_A = match.group(2).strip()
        opt_B = match.group(3).strip()
        opt_C = match.group(4).strip()
        opt_D = match.group(5).strip()
        opt_E = match.group(6).strip()
        
        options = [opt_A, opt_B, opt_C, opt_D, opt_E]
        answer = None
        
        cleaned_options = []
        for opt in options:
            if '(Correta' in opt:
                # Remove (Correta) and everything after it
                clean_opt = re.sub(r'\(Correta.*', '', opt).strip()
                cleaned_options.append(clean_opt)
                answer = clean_opt
            else:
                cleaned_options.append(opt)
                
        if answer:
            questions.append({
                "question": q_text,
                "options": cleaned_options,
                "answer": answer
            })

ts_content = "import type { Question } from \\"../types/question\\";\\n\\n"
ts_content += "export const microcontroladoresP2Questions: Question[] = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\\n"

with open('g:/ERICK/src/data/microcontroladores_p2.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Generated {len(questions)} questions")
