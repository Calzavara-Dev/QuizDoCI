import type { Question } from "../types/question";

export const microcontroladoresP1Questions: Question[] = [
  {
    "question": "Qual das funções internas NÃO é comum à maioria dos modelos de PIC?",
    "options": [
      "Unidade de memória.",
      "Unidade de GPS.",
      "Watchdog.",
      "Unidade de entrada/saída.",
      "Unidade Central de Processamento (CPU)."
    ],
    "answer": "Unidade de GPS.",
    "explanation": "Por que a resposta correta é \"Unidade de GPS.\"? Conforme a arquitetura dos microcontroladores PIC (Apostila EE 2006-0423), todo PIC possui internamente Unidade Central de Processamento (CPU), memória de programa e dados, temporizador Watchdog (WDT) e portas de Entrada/Saída (I/O). A Unidade de GPS é um módulo de geolocalização por satélite externo e independente, não fazendo parte da estrutura interna nativa do chip."
  },
  {
    "question": "É o recurso disponível do Micro que incrementa um contador RC independente e toda vez que este contador extrapola o seu valor máximo retornando a zero, é provocada a reinicialização do sistema (reset)?",
    "options": [
      "Watchdog.",
      "Conversor analógico-digital.",
      "Unidade de temporização.",
      "Unidade Central de Processamento (CPU).",
      "Unidade de GPS."
    ],
    "answer": "Watchdog.",
    "explanation": "Por que a resposta correta é \"Watchdog.\"? O Watchdog Timer (Cão de Guarda) é o único recurso de temporização com oscilador RC próprio e independente do clock principal. A lógica de segurança exige que o programa execute periodicamente a instrução CLRWDT (Clear Watchdog Timer). Se o código travar ou entrar em loop infinito, o CLRWDT não será acionado no tempo previsto, fazendo o contador transbordar e gerar um Reset no hardware para destravar e recuperar o sistema."
  },
  {
    "question": "Estabelece o fluxo de controle dos direcionamentos da memória que o código do programa contém?",
    "options": [
      "Contador de Programa (PC).",
      "Barramentos.",
      "Comunicação série.",
      "Unidade de temporização.",
      "Conversor analógico-digital."
    ],
    "answer": "Contador de Programa (PC).",
    "explanation": "Por que a resposta correta é \"Contador de Programa (PC).\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "A função da instrução CLRWDT dentro de um programa é:",
    "options": [
      "impedir que o Watchdog transborde.",
      "desligar o temporizador do Watchdog.",
      "resetar o temporizador do Watchdog de 255 para 0.",
      "impedir o travamento do programa.",
      "ligar o temporizador do Watchdog."
    ],
    "answer": "impedir que o Watchdog transborde.",
    "explanation": "Por que a resposta correta é \"impedir que o Watchdog transborde.\"? O Watchdog Timer (Cão de Guarda) é o único recurso de temporização com oscilador RC próprio e independente do clock principal. A lógica de segurança exige que o programa execute periodicamente a instrução CLRWDT (Clear Watchdog Timer). Se o código travar ou entrar em loop infinito, o CLRWDT não será acionado no tempo previsto, fazendo o contador transbordar e gerar um Reset no hardware para destravar e recuperar o sistema."
  },
  {
    "question": "De qual fator depende o número de linhas em um barramento de endereços?",
    "options": [
      "Quantidade de periféricos.",
      "Velocidade do processador.",
      "Taxa de transferência da conexão serial.",
      "Tipo de arquitetura da CPU.",
      "Quantidade de memória que se deseja endereçar."
    ],
    "answer": "Quantidade de memória que se deseja endereçar.",
    "explanation": "Por que a resposta correta é \"Quantidade de memória que se deseja endereçar.\"? O número de linhas em um barramento de endereços determina diretamente a capacidade máxima de endereçamento do sistema (onde N linhas permitem endereçar 2^N posições de memória). Por essa razão matemática e arquitetural, a quantidade de linhas do barramento é dimensionada em função da quantidade de memória que se deseja endereçar no projeto."
  },
  {
    "question": "Define as regras usadas na troca de dados?",
    "options": [
      "Watchdog.",
      "Contador de Programa (PC).",
      "Protocolo.",
      "CPU.",
      "Barramentos."
    ],
    "answer": "Protocolo.",
    "explanation": "Por que a resposta correta é \"Protocolo.\"? Na comunicação digital entre o processador e periféricos, um Protocolo de comunicação define rigorosamente o conjunto de regras padronizadas, temporizações (timings), níveis de tensão e formatos dos quadros de dados, garantindo que a informação seja enviada e recebida sem erros ou colisões."
  },
  {
    "question": "Quais os 03 tipos de endereçamento que são usados no PC?",
    "options": [
      "imediato, exclusivo e indireto.",
      "direto, rotativo e imediato.",
      "alternativo, rotativo, indireto.",
      "direto, indireto e imediato.",
      "direto, alternativo e indireto."
    ],
    "answer": "direto, indireto e imediato.",
    "explanation": "Por que a resposta correta é \"direto, indireto e imediato.\"? A programação em assembly para a família PIC da Microchip utiliza fundamentalmente estes três modos de endereçamento: Imediato (quando o operando numérico constante é fornecido na própria instrução), Direto (quando o endereço de memória/registrador é explícito na instrução) e Indireto (quando o endereço do registrador é apontado dinamicamente via FSR/INDF)."
  },
  {
    "question": "Na arquitetura ____________, os barramentos de dados e endereços são compartilhados entre memórias de programas e de dados na comunicação com a CPU.",
    "options": [
      "Clássica.",
      "Complexa.",
      "RISC.",
      "Von-Neumann.",
      "Harvard."
    ],
    "answer": "Von-Neumann.",
    "explanation": "Por que a resposta correta é \"Von-Neumann.\"? Na arquitetura de Von-Neumann, as memórias de programa e de dados compartilham o mesmo barramento físico e espaço de endereçamento. Isso faz com que a CPU não consiga buscar uma instrução e acessar um dado simultaneamente, gerando o chamado gargalo de Von-Neumann."
  },
  {
    "question": "É a arquitetura na qual em um único ciclo de máquina, faz a busca de nova instrução e a execução da instrução buscada anteriormente:",
    "options": [
      "Principal.",
      "CISC.",
      "Complexa.",
      "Harvard.",
      "Von-Neumann."
    ],
    "answer": "Harvard.",
    "explanation": "Por que a resposta correta é \"Harvard.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Harvard.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "É a técnica que faz a execução da instrução e localização do código da instrução seguinte em um único ciclo:",
    "options": [
      "Pipeline.",
      "Decodificação.",
      "Microcódigo.",
      "CISC.",
      "Endereçamento."
    ],
    "answer": "Pipeline.",
    "explanation": "Por que a resposta correta é \"Pipeline.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Pipeline.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O ciclo de instrução do PIC16F877 com um clock externo de 10MHz, é:",
    "options": [
      "0,05ms.",
      "200us.",
      "0,1ms.",
      "0,4us.",
      "0,50us."
    ],
    "answer": "0,4us.",
    "explanation": "Por que a resposta correta é \"0,4us.\"? Na arquitetura PIC clássica de 8 bits, o clock principal do oscilador (Fosc) é dividido internamente por 4 para gerar as quatro fases de processamento de cada instrução (busca, decodificação, execução e escrita). Assim, cada ciclo de máquina ou instrução equivale exatamente a 4 ciclos de clock (Fosc/4)."
  },
  {
    "question": "Registro similar ao registro PC que aponta para a memória de dados RAM:",
    "options": [
      "STATUS.",
      "FSR.",
      "SFR.",
      "INTCON.",
      "OPTION_REG."
    ],
    "answer": "FSR.",
    "explanation": "Por que a resposta correta é \"FSR.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"FSR.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual a faixa de alimentação do microcontrolador PIC16F877?",
    "options": [
      "3V a 5V.",
      "2V a 5,5V.",
      "2,5V a 5,5V.",
      "2V a 5V.",
      "2,5V a 5V."
    ],
    "answer": "2V a 5,5V.",
    "explanation": "Por que a resposta correta é \"2V a 5,5V.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"2V a 5,5V.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A Pilha serve para:",
    "options": [
      "armazenar o endereço do salto (sub-rotina).",
      "selecionar o tipo de oscilador.",
      "selecionar o Banco a ser usado.",
      "armazenar o endereço de retorno após uma instrução de desvio.",
      "acessar o endereçamento indireto."
    ],
    "answer": "armazenar o endereço de retorno após uma instrução de desvio.",
    "explanation": "Por que a resposta correta é \"armazenar o endereço de retorno após uma instrução de desvio.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"armazenar o endereço de retorno após uma instrução de desvio.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A opção verdadeira abaixo é:",
    "options": [
      "PORTA é de 6 bits e PORTB é de 8 bits.",
      "PORTA é de 5 bits e PORTB é de 8 bits.",
      "PORTA é de 8 bits e PORTB é de 6 bits.",
      "PORTA é de 8 bits e PORTB é de 5 bits.",
      "PORTA é de 6 bits e PORTB é de 7 bits."
    ],
    "answer": "PORTA é de 6 bits e PORTB é de 8 bits.",
    "explanation": "Por que a resposta correta é \"PORTA é de 6 bits e PORTB é de 8 bits.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"PORTA é de 6 bits e PORTB é de 8 bits.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O conjunto de instruções do PIC16F877 é formado por:",
    "options": [
      "08 instruções.",
      "13 instruções.",
      "14 instruções.",
      "35 instruções.",
      "16 instruções."
    ],
    "answer": "35 instruções.",
    "explanation": "Por que a resposta correta é \"35 instruções.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"35 instruções.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quantos e quais são os Timers do PIC16F877 da Microchip?",
    "options": [
      "1; Timer 0.",
      "4; Timer 0, Timer 1, Timer 2 e Timer 3.",
      "Nenhum.",
      "2; Timer 0 e Timer 1.",
      "3; Timer 0, Timer 1 e Timer 2."
    ],
    "answer": "3; Timer 0, Timer 1 e Timer 2.",
    "explanation": "Por que a resposta correta é \"3; Timer 0, Timer 1 e Timer 2.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"3; Timer 0, Timer 1 e Timer 2.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quais os blocos internos do PIC16F877 da Microchip?",
    "options": [
      "Processador, Memória de Programa, Memória de Dados, Periféricos e Indutores.",
      "Processador, Memória de Programa, Memória de Dados, Periféricos, Contadores.",
      "Processador, Memória de Programa, Memória de Dados, Gerador de Rampa, Contadores.",
      "Processador, Oscilador à Cristal, Memória de Dados, Periféricos, Contadores.",
      "Processador, Memória de Programa, Memória de Dados, USB e Contadores."
    ],
    "answer": "Processador, Memória de Programa, Memória de Dados, Periféricos, Contadores.",
    "explanation": "Por que a resposta correta é \"Processador, Memória de Programa, Memória de Dados, Periféricos, Contadores.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Processador, Memória de Programa, Memória de Dados, Periféricos, Contadores.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quantos bits o Contador de Programa (PC) possui para direcionar os 8K de memória Flash de programa?",
    "options": [
      "8.",
      "13.",
      "15.",
      "2.",
      "14."
    ],
    "answer": "13.",
    "explanation": "Por que a resposta correta é \"13.\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "No PIC16F877 da Microchip, qual é a frequência do clock interno?",
    "options": [
      "Ckext / 8.",
      "Ckext / 2.",
      "CKext / 4.",
      "3xCKext / 4.",
      "Ckext."
    ],
    "answer": "CKext / 4.",
    "explanation": "Por que a resposta correta é \"CKext / 4.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"CKext / 4.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O endereço contido no PC durante uma instrução GOTO é formado pelo:",
    "options": [
      "opcode da instrução mais os bits RP1 e RP0 do registro de STATUS.",
      "opcode da instrução mais os bits <12:8> do registro PCH.",
      "opcode da instrução mais os bits <4:3> do registro PCLATH.",
      "endereço da sub-rotina mais os bits <4:0> do registro PCLATH.",
      "opcode da instrução mais os bits IRP, RP1 e RP0 do registro de STATUS."
    ],
    "answer": "opcode da instrução mais os bits <4:3> do registro PCLATH.",
    "explanation": "Por que a resposta correta é \"opcode da instrução mais os bits <4:3> do registro PCLATH.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"opcode da instrução mais os bits <4:3> do registro PCLATH.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O registro que nos mostra o estado geral da ULA é o:",
    "options": [
      "STATUS.",
      "FSR.",
      "INTCON.",
      "INDF.",
      "OPTION_REG."
    ],
    "answer": "STATUS.",
    "explanation": "Por que a resposta correta é \"STATUS.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"STATUS.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Na escrita ou leitura indiretamente de um registro, usam-se os registros:",
    "options": [
      "INDF e FSR.",
      "STATUS e FSR.",
      "PCLATH e FSR.",
      "INTCON e INDF.",
      "STATUS e INDF."
    ],
    "answer": "INDF e FSR.",
    "explanation": "Por que a resposta correta é \"INDF e FSR.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"INDF e FSR.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O registro que nos permite o controle geral das interrupções é o:",
    "options": [
      "STATUS.",
      "INDF.",
      "OPTION_REG.",
      "FSR.",
      "INTCON."
    ],
    "answer": "INTCON.",
    "explanation": "Por que a resposta correta é \"INTCON.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "Qual o bit responsável pela habilitação de entrada externa de interrupção no pino RB0/INT?",
    "options": [
      "RBPU do registro INTCON.",
      "INTEDG do registro OPTION_REG.",
      "T0IE do registro INTCON.",
      "INTE do registro INTCON.",
      "RBIF do registro INTCON."
    ],
    "answer": "INTE do registro INTCON.",
    "explanation": "Por que a resposta correta é \"INTE do registro INTCON.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"INTE do registro INTCON.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Assinale a alternativa INCORRETA, referente à Pilha do PIC16F877:",
    "options": [
      "não há bits de status para indicar condições de stack overflow (pilha cheia).",
      "a pilha não pode ser lida ou escrita diretamente.",
      "a função básica da Pilha é guardar o valor do PC quando ocorrerem saltos do programa principal para o endereço de um subprograma a ser executado.",
      "a pilha opera como um buffer circular do tipo LIFO caracterizada por apresentar oito pontos de acesso denominado Topo da Pilha.",
      "a pilha possui oito níveis com endereços de 14 bits."
    ],
    "answer": "a pilha opera como um buffer circular do tipo LIFO caracterizada por apresentar oito pontos de acesso denominado Topo da Pilha.",
    "explanation": "Por que a resposta correta é \"a pilha opera como um buffer circular do tipo LIFO caracterizada por apresentar oito pontos de acesso denominado Topo da Pilha.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"a pilha opera como um buffer circular do tipo LIFO caracterizada por apresentar oito pontos de acesso denominado Topo da Pilha.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual o bit responsável pela habilitação geral das interrupções no PIC16F877?",
    "options": [
      "GIE do registro STATUS.",
      "GIE do registro INDF.",
      "INTE do registro STATUS.",
      "INTE do registro INTCON.",
      "GIE do registro INTCON."
    ],
    "answer": "GIE do registro INTCON.",
    "explanation": "Por que a resposta correta é \"GIE do registro INTCON.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "A porta que pode usar resistores de pull-ups internos é a:",
    "options": [
      "D.",
      "C.",
      "E.",
      "B.",
      "A."
    ],
    "answer": "B.",
    "explanation": "Por que a resposta correta é \"B.\"? O registrador OPTION_REG gerencia recursos globais de hardware: ativação dos resistores de Pull-up internos da porta B (bit RBPU), seleção da borda de interrupção externa INT, fonte do clock do TMR0 e a alocação e fator de divisão do divisor de frequência Prescaler (entre TMR0 ou Watchdog)."
  },
  {
    "question": "Segundo a organização e características das memórias de dados do PIC16F877 podemos afirmar que:",
    "options": [
      "a memória RAM está toda disponível ao usuário.",
      "cada banco da memória RAM possui 128 bytes.",
      "a memória EEPROM armazena dados que podem ser perdidos quando o micro fica sem alimentação.",
      "os registros especiais são nomeados pelo programador.",
      "os registros de propósitos gerais fazem parte apenas do banco 1 e 3."
    ],
    "answer": "cada banco da memória RAM possui 128 bytes.",
    "explanation": "Por que a resposta correta é \"cada banco da memória RAM possui 128 bytes.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"cada banco da memória RAM possui 128 bytes.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "No endereçamento direto de um registro, a seleção dos 4 bancos é feita pelos:",
    "options": [
      "bit 7 do registro FSR e bit IRP do registro de STATUS.",
      "bits RP1 e RP0 do registro de STATUS.",
      "bits IRP, RP1 e RP0 do registro de STATUS.",
      "registros INDF e FSR.",
      "registros de STATUS e FSR."
    ],
    "answer": "bits RP1 e RP0 do registro de STATUS.",
    "explanation": "Por que a resposta correta é \"bits RP1 e RP0 do registro de STATUS.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"bits RP1 e RP0 do registro de STATUS.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O endereço contido no PC no retorno de uma sub-rotina é formado pelo:",
    "options": [
      "opcode da instrução mais os bits RP1 e RP0 do registro de STATUS.",
      "opcode da instrução mais os bits <4:0> do registro PCLATH.",
      "endereço da sub-rotina mais os bits <4:0> do registro PCLATH.",
      "opcode da instrução mais os bits <12:8> do registro PCH.",
      "endereço contido na Pilha."
    ],
    "answer": "endereço contido na Pilha.",
    "explanation": "Por que a resposta correta é \"endereço contido na Pilha.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"endereço contido na Pilha.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Com relação ao registro de STATUS, podemos afirmar:",
    "options": [
      "controla o registro INDF.",
      "possui o bit que muda o prescaler entre Timer0 e Watchdog.",
      "controla o registro FSR.",
      "possui bits de interrupções.",
      "indica o estado geral do Micro."
    ],
    "answer": "indica o estado geral do Micro.",
    "explanation": "Por que a resposta correta é \"indica o estado geral do Micro.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "Qual das opções seguintes define que os pinos do PORTB estão metade como entrada (RB0 a RB3) e a outra metade (RB4 a RB7) como saída?",
    "options": [
      "TRISC=11111000b.",
      "TRISB=00111111b.",
      "TRISB=00011111b.",
      "TRISB=11110000b.",
      "TRISB=00001111b."
    ],
    "answer": "TRISB=00001111b.",
    "explanation": "Por que a resposta correta é \"TRISB=00001111b.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"TRISB=00001111b.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quando os pinos do registro PORTA do PIC16F877 estiverem sendo utilizados como entradas analógicas, como devem estar os bits do registro TRISA?",
    "options": [
      "Deverão se manter setados.",
      "Deverão se manter em nível baixo.",
      "Impedindo que a PORTA trabalhe com o conversor A/D.",
      "Apenas o bit RA4 deverá estar setado.",
      "Somente os bits MSB deverão ser zero (0)."
    ],
    "answer": "Deverão se manter setados.",
    "explanation": "Por que a resposta correta é \"Deverão se manter setados.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Deverão se manter setados.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual a operação lógica que passam as saídas diferentes dos pinos de entrada (RB7:RB4) que são comparados com valores antigos armazenados na última leitura da porta B para gerar a interrupção por mudança na própria porta B?",
    "options": [
      "OU.",
      "EX-NOR.",
      "NAND.",
      "NOR.",
      "EX-OR."
    ],
    "answer": "EX-OR.",
    "explanation": "Por que a resposta correta é \"EX-OR.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"EX-OR.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quais são as portas usadas com o Conversor Analógico-Digital?",
    "options": [
      "A e E.",
      "D e A.",
      "A e B.",
      "B e E.",
      "C e E."
    ],
    "answer": "A e E.",
    "explanation": "Por que a resposta correta é \"A e E.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"A e E.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual é o recurso que permite que os pinos de I/O no PIC tenham outras funções?",
    "options": [
      "Multiplexação.",
      "Pipeline.",
      "Espelhamento.",
      "Seleção de banco.",
      "Duplexação."
    ],
    "answer": "Multiplexação.",
    "explanation": "Por que a resposta correta é \"Multiplexação.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Multiplexação.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "É o registro de direção de dados para o pino correspondente ao PORTE:",
    "options": [
      "PORTA.",
      "PCLAT e PCL.",
      "EEADR e FSR.",
      "TRISE.",
      "PORTB."
    ],
    "answer": "TRISE.",
    "explanation": "Por que a resposta correta é \"TRISE.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"TRISE.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Um bit do registro TRISD apagado (0), fará com que o pino correspondente da PORTD seja uma _______.",
    "options": [
      "entrada.",
      "duplexação.",
      "falha.",
      "multiplexação.",
      "saída."
    ],
    "answer": "saída.",
    "explanation": "Por que a resposta correta é \"saída.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"saída.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A leitura é feita diretamente no pino, enquanto a escrita passa por um Latch. Qual é a consequência desta operação?",
    "options": [
      "Dupla execução da mesma instrução.",
      "A execução imediata das operações de I/O.",
      "Atraso entre a escrita e leitura.",
      "Falha nas operações de I/O.",
      "Ativação de uma função Multiplexada."
    ],
    "answer": "Atraso entre a escrita e leitura.",
    "explanation": "Por que a resposta correta é \"Atraso entre a escrita e leitura.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Atraso entre a escrita e leitura.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Assinale a alternativa INCORRETA quanto ao PSPMODE:",
    "options": [
      "ativada pelo bit PSPMODE, TRISE<4>.",
      "interface de 8 bits com outros PICs.",
      "é uma Porta Paralela Escrava disponível no PIC.",
      "controlada leitura por WR ou por escrita RD.",
      "é multiplexada com o PORTD."
    ],
    "answer": "controlada leitura por WR ou por escrita RD.",
    "explanation": "Por que a resposta correta é \"controlada leitura por WR ou por escrita RD.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"controlada leitura por WR ou por escrita RD.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quais são as funções associadas ao PORTE?",
    "options": [
      "Portas de I/O digitais, portas de entradas analógicas e PWM.",
      "Portas de I/O digitais, portas de entradas e saídas analógicas e porta de controle do PSP.",
      "PSP, Portas de I/O digitais e portas de entradas e saídas analógicas.",
      "Portas de I/O digitais, buffer de dados e porta de controle do PSP.",
      "Portas de I/O digitais, Portas de entradas Analógicas e Porta de controle do PSP."
    ],
    "answer": "Portas de I/O digitais, Portas de entradas Analógicas e Porta de controle do PSP.",
    "explanation": "Por que a resposta correta é \"Portas de I/O digitais, Portas de entradas Analógicas e Porta de controle do PSP.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Portas de I/O digitais, Portas de entradas Analógicas e Porta de controle do PSP.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Durante a escrita na memória FLASH de programa, qual registro deve ser carregado com os valores 0x55 e 0xAA sequencialmente para proteção da escrita?",
    "options": [
      "EEDATA.",
      "EEDATH.",
      "EECON1.",
      "EECON2.",
      "EEADR."
    ],
    "answer": "EECON2.",
    "explanation": "Por que a resposta correta é \"EECON2.\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "É o bit utilizado para selecionar entre memórias EEPROM ou Flash:",
    "options": [
      "EEPGD do registro EECON1.",
      "4 do registro EECON2.",
      "GIE do registro INTCON.",
      "6 do registro EEADR.",
      "2 do registro EEDATA."
    ],
    "answer": "EEPGD do registro EECON1.",
    "explanation": "Por que a resposta correta é \"EEPGD do registro EECON1.\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  },
  {
    "question": "Após a leitura da memória EEPROM de dados, o dado lido é armazenado no registro:",
    "options": [
      "EEADR.",
      "STATUS.",
      "EEDATA.",
      "PCLATH.",
      "PC."
    ],
    "answer": "EEDATA.",
    "explanation": "Por que a resposta correta é \"EEDATA.\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  },
  {
    "question": "Qual é a função do bit EEIF (PIR2<4>), na operação de escrita da Flash de Programa?",
    "options": [
      "Proteger a Memória Flash de Programa contra a escrita durante o Power-UP.",
      "Desabilitar as interrupções durante a escrita.",
      "Tratar uma interrupção ao final da escrita.",
      "Habilitar as interrupções gerais do PIC.",
      "Permitir interromper a operação da escrita a qualquer momento."
    ],
    "answer": "Tratar uma interrupção ao final da escrita.",
    "explanation": "Por que a resposta correta é \"Tratar uma interrupção ao final da escrita.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Tratar uma interrupção ao final da escrita.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual é a indicação de que a operação de escrita finalizou?",
    "options": [
      "bit WRERR (EECON1<3>) estará setado.",
      "bit EEPGD (EECON1<7>) estará resetado.",
      "flag INTCON, T0IF ficará setado.",
      "bit WR (EECON1<1>) estará resetado.",
      "bit WREN (EECON1<2>) estará resetado."
    ],
    "answer": "bit WR (EECON1<1>) estará resetado.",
    "explanation": "Por que a resposta correta é \"bit WR (EECON1<1>) estará resetado.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"bit WR (EECON1<1>) estará resetado.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quais os registros são utilizados para leitura da memória EEPROM de Dados?",
    "options": [
      "STATUS e INDF.",
      "EEDATA e FSR.",
      "EEADR e EEDATA.",
      "EEADR e FSR.",
      "EEDATA e SFR."
    ],
    "answer": "EEADR e EEDATA.",
    "explanation": "Por que a resposta correta é \"EEADR e EEDATA.\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  },
  {
    "question": "No processo de leitura, qual é a próxima etapa após o dado lido na EEPROM de Dados ser armazenado no EEDATA?",
    "options": [
      "O bit WR será apagado automaticamente pelo hardware.",
      "O flag RD será apagado automaticamente pelo hardware.",
      "O bit T0IF será apagado automaticamente pelo hardware.",
      "O bit RD será apagado pelo software.",
      "O processo de escrita será finalizado."
    ],
    "answer": "O flag RD será apagado automaticamente pelo hardware.",
    "explanation": "Por que a resposta correta é \"O flag RD será apagado automaticamente pelo hardware.\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  },
  {
    "question": "No processo de leitura da Memória Flash de Programa, em virtude de possuir a capacidade de 8Kb, quais os registros que receberão o endereço e os dados respectivamente?",
    "options": [
      "STATUS e INDF.",
      "EECON1 e EECON2.",
      "EECON1 e EEDATA.",
      "PCL, PCH e PCLAT, PCLATH.",
      "EEADR, EEADRH e EEDATA, EEDATAH."
    ],
    "answer": "EEADR, EEADRH e EEDATA, EEDATAH.",
    "explanation": "Por que a resposta correta é \"EEADR, EEADRH e EEDATA, EEDATAH.\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Qual é o bit do registro de configuração que protege a Memória Flash de Programa contra escrita durante a execução do programa?",
    "options": [
      "WRT.",
      "WR.",
      "WREN.",
      "RD.",
      "CS."
    ],
    "answer": "WRT.",
    "explanation": "Por que a resposta correta é \"WRT.\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Qual é a função do bit WREN no registro de configuração / EECON1?",
    "options": [
      "Habilitar as interrupções durante o processo de escrita.",
      "Proteger a Memória EEPROM de Dados contra a escrita durante a execução do programa.",
      "Permitir escrita sem verificação de paridade.",
      "Proteger a Memória Flash de Programa contra a escrita durante a execução do programa.",
      "Proteger a Memória Flash de Programa contra a escrita durante no Power-UP."
    ],
    "answer": "Proteger a Memória Flash de Programa contra a escrita durante no Power-UP.",
    "explanation": "Por que a resposta correta é \"Proteger a Memória Flash de Programa contra a escrita durante no Power-UP.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Proteger a Memória Flash de Programa contra a escrita durante no Power-UP.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual a função do Contador de Programa (PC)?",
    "options": [
      "Realizar operações lógicas e aritméticas.",
      "Armazenar os dados de calibração do cristal.",
      "Apontar o endereço da próxima instrução a ser executada.",
      "Controlar o estouro do Watchdog Timer."
    ],
    "answer": "Apontar o endereço da próxima instrução a ser executada.",
    "explanation": "Por que a resposta correta é \"Apontar o endereço da próxima instrução a ser executada.\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "Defina Pipeline.",
    "options": [
      "Técnica que executa uma instrução enquanto busca a próxima.",
      "Barramento de comunicação serial assíncrona.",
      "Memória não-volátil para armazenamento de dados.",
      "Conversão de sinais analógicos para digitais."
    ],
    "answer": "Técnica que executa uma instrução enquanto busca a próxima.",
    "explanation": "Por que a resposta correta é \"Técnica que executa uma instrução enquanto busca a próxima.\"? A técnica de Pipeline em microcontroladores Harvard realiza o processamento em paralelo: enquanto a CPU executa (Execute) a instrução do ciclo atual, ela busca (Fetch) simultaneamente a próxima instrução na memória Flash, fazendo com que cada instrução demore efetivamente apenas 1 ciclo de máquina."
  },
  {
    "question": "A família de microcontroladores \\\"PIC\\\" pertence a qual fabricante?",
    "options": [
      "Intel",
      "Atmel",
      "Motorola",
      "Microchip"
    ],
    "answer": "Microchip",
    "explanation": "Por que a resposta correta é \"Microchip\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Microchip\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quantas instruções podem ser armazenadas na memória Flash do PIC 16F877?",
    "options": [
      "1024",
      "2048",
      "4096",
      "8192"
    ],
    "answer": "8192",
    "explanation": "Por que a resposta correta é \"8192\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Se a frequência do clock externo for 16MHz, a frequência interna será:",
    "options": [
      "1 MHz",
      "4 MHz",
      "8 MHz",
      "16 MHz"
    ],
    "answer": "4 MHz",
    "explanation": "Por que a resposta correta é \"4 MHz\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"4 MHz\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A frequência do clock externo para um ciclo de instrução de 200 ns é:",
    "options": [
      "4 MHz",
      "10 MHz",
      "16 MHz",
      "20 MHz"
    ],
    "answer": "20 MHz",
    "explanation": "Por que a resposta correta é \"20 MHz\"? Na arquitetura PIC clássica de 8 bits, o clock principal do oscilador (Fosc) é dividido internamente por 4 para gerar as quatro fases de processamento de cada instrução (busca, decodificação, execução e escrita). Assim, cada ciclo de máquina ou instrução equivale exatamente a 4 ciclos de clock (Fosc/4)."
  },
  {
    "question": "O tempo de uma instrução de salto com clock externo de 4MHz é:",
    "options": [
      "1 µs",
      "2 µs",
      "4 µs",
      "8 µs"
    ],
    "answer": "2 µs",
    "explanation": "Por que a resposta correta é \"2 µs\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"2 µs\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "De acordo com as características do PIC16F877, marque a opção INCORRETA:",
    "options": [
      "O espelhamento facilita evitando trocas constantes de banco.",
      "Não há bits de status para indicar pilha cheia.",
      "O microcontrolador possui 7 tipos de interrupções.",
      "O registro especial STATUS está em todos os bancos."
    ],
    "answer": "O microcontrolador possui 7 tipos de interrupções.",
    "explanation": "Por que a resposta correta é \"O microcontrolador possui 7 tipos de interrupções.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"O microcontrolador possui 7 tipos de interrupções.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual o endereço do vetor de interrupção na memória Flash?",
    "options": [
      "0000h",
      "0004h",
      "2007h",
      "0005h"
    ],
    "answer": "0004h",
    "explanation": "Por que a resposta correta é \"0004h\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Na memória FLASH quais bits operam como CHAVE SELETORA de página nas instruções GOTO e CALL?",
    "options": [
      "RP0 e RP1 do STATUS",
      "Bits <4:3> do PCLATH",
      "GIE e PEIE do INTCON",
      "PS0 e PS1 do OPTION_REG"
    ],
    "answer": "Bits <4:3> do PCLATH",
    "explanation": "Por que a resposta correta é \"Bits <4:3> do PCLATH\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Por que usamos o termo \"Banco\" para a memória RAM?",
    "options": [
      "Porque a memória é dividida em páginas de 2K.",
      "Para separar fisicamente a memória de programa da de dados.",
      "Pois os 7 bits de instrução endereçam apenas 128 bytes, exigindo agrupamento em bancos.",
      "Para armazenar variáveis como em um banco de dados."
    ],
    "answer": "Pois os 7 bits de instrução endereçam apenas 128 bytes, exigindo agrupamento em bancos.",
    "explanation": "Por que a resposta correta é \"Pois os 7 bits de instrução endereçam apenas 128 bytes, exigindo agrupamento em bancos.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Pois os 7 bits de instrução endereçam apenas 128 bytes, exigindo agrupamento em bancos.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "No endereçamento direto, a seleção do banco de memória é feita por:",
    "options": [
      "Registros INDF e FSR",
      "Bits <4:3> do PCLATH",
      "Bits RP1 e RP0 do STATUS",
      "Bit GIE do INTCON"
    ],
    "answer": "Bits RP1 e RP0 do STATUS",
    "explanation": "Por que a resposta correta é \"Bits RP1 e RP0 do STATUS\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Bits RP1 e RP0 do STATUS\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Cite a principal característica do registro especial W (WORK).",
    "options": [
      "Mapeado no Banco 0 e aponta para a RAM.",
      "Ponte/destino de operações, mas NÃO mapeado na memória RAM.",
      "Aponta para o topo da Pilha (Stack).",
      "Configura resistores de pull-up globais."
    ],
    "answer": "Ponte/destino de operações, mas NÃO mapeado na memória RAM.",
    "explanation": "Por que a resposta correta é \"Ponte/destino de operações, mas NÃO mapeado na memória RAM.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Ponte/destino de operações, mas NÃO mapeado na memória RAM.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual bit e registro indicam que o Watchdog provocou o reset do micro?",
    "options": [
      "Bit /POR em 0 no PCON",
      "Bit Z em 1 no STATUS",
      "Bit GIE em 0 no INTCON",
      "Bit /TO em 0 no STATUS"
    ],
    "answer": "Bit /TO em 0 no STATUS",
    "explanation": "Por que a resposta correta é \"Bit /TO em 0 no STATUS\"? O Watchdog Timer (Cão de Guarda) é o único recurso de temporização com oscilador RC próprio e independente do clock principal. A lógica de segurança exige que o programa execute periodicamente a instrução CLRWDT (Clear Watchdog Timer). Se o código travar ou entrar em loop infinito, o CLRWDT não será acionado no tempo previsto, fazendo o contador transbordar e gerar um Reset no hardware para destravar e recuperar o sistema."
  },
  {
    "question": "Se, num teste, o bit Z (STATUS<2>) está em '1', o que aconteceu?",
    "options": [
      "Ocorreu um estouro (overflow) na pilha.",
      "A contagem do TIMER0 estourou.",
      "O resultado da operação lógica/aritmética anterior foi zero.",
      "Houve transporte de bit (carry) na soma."
    ],
    "answer": "O resultado da operação lógica/aritmética anterior foi zero.",
    "explanation": "Por que a resposta correta é \"O resultado da operação lógica/aritmética anterior foi zero.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "No endereçamento indireto, qual registro aponta para a memória RAM?",
    "options": [
      "FSR",
      "INDF",
      "PCLATH",
      "STATUS"
    ],
    "answer": "FSR",
    "explanation": "Por que a resposta correta é \"FSR\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"FSR\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O registro que mostra o estado geral do microcontrolador é:",
    "options": [
      "OPTION_REG",
      "INTCON",
      "FSR",
      "STATUS"
    ],
    "answer": "STATUS",
    "explanation": "Por que a resposta correta é \"STATUS\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"STATUS\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual bit é a chave geral das interrupções no PIC16F877?",
    "options": [
      "PEIE (INTCON)",
      "GIE (INTCON)",
      "INTE (STATUS)",
      "ADIE (PIE1)"
    ],
    "answer": "GIE (INTCON)",
    "explanation": "Por que a resposta correta é \"GIE (INTCON)\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "O registro que mostra o estado geral das interrupções é o:",
    "options": [
      "STATUS",
      "OPTION_REG",
      "INTCON",
      "PCON"
    ],
    "answer": "INTCON",
    "explanation": "Por que a resposta correta é \"INTCON\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "O endereço contido no PC durante a instrução GOTO é formado por:",
    "options": [
      "Endereço retirado da Pilha.",
      "11 bits do Opcode + bits <4:3> do PCLATH.",
      "7 bits do Opcode + RP0 e RP1 do STATUS.",
      "Endereço absoluto apontado pelo FSR."
    ],
    "answer": "11 bits do Opcode + bits <4:3> do PCLATH.",
    "explanation": "Por que a resposta correta é \"11 bits do Opcode + bits <4:3> do PCLATH.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"11 bits do Opcode + bits <4:3> do PCLATH.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O endereço contido no PC no retorno de uma sub-rotina (RETURN) é formado por:",
    "options": [
      "11 bits da instrução.",
      "Bits <4:3> do PCLATH.",
      "Endereço recuperado do Topo da Pilha (TOS).",
      "Endereço absoluto apontado por W."
    ],
    "answer": "Endereço recuperado do Topo da Pilha (TOS).",
    "explanation": "Por que a resposta correta é \"Endereço recuperado do Topo da Pilha (TOS).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Endereço recuperado do Topo da Pilha (TOS).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual registro controla a operação da porta D como Porta Paralela Escrava (PSP)?",
    "options": [
      "TRISD",
      "TRISE",
      "PORTD",
      "OPTION_REG"
    ],
    "answer": "TRISE",
    "explanation": "Por que a resposta correta é \"TRISE\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"TRISE\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Qual porta pode usar resistores de pull-up internos?",
    "options": [
      "PORTA",
      "PORTB",
      "PORTC",
      "PORTD"
    ],
    "answer": "PORTB",
    "explanation": "Por que a resposta correta é \"PORTB\"? O registrador OPTION_REG gerencia recursos globais de hardware: ativação dos resistores de Pull-up internos da porta B (bit RBPU), seleção da borda de interrupção externa INT, fonte do clock do TMR0 e a alocação e fator de divisão do divisor de frequência Prescaler (entre TMR0 ou Watchdog)."
  },
  {
    "question": "Qual opção define o PORTC metade SAÍDA (RC0 a RC3) e metade ENTRADA (RC4 a RC7)?",
    "options": [
      "TRISC = 00001111b",
      "TRISC = 11110000b",
      "PORTC = 11110000b",
      "TRISC = 10101010b"
    ],
    "answer": "TRISC = 11110000b",
    "explanation": "Por que a resposta correta é \"TRISC = 11110000b\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"TRISC = 11110000b\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "LED ligado em RB4 (acende com nível alto). Se TRISB = 45h (0100 0101b) e PORTB = AAh (1010 1010b), o LED está:",
    "options": [
      "Aceso, pois é saída e recebe nível alto.",
      "Apagado, pois RB4 está configurado como entrada.",
      "Apagado, pois RB4 é saída (0), mas o pino recebe nível baixo (0).",
      "Aceso, independentemente do registro TRISB."
    ],
    "answer": "Apagado, pois RB4 é saída (0), mas o pino recebe nível baixo (0).",
    "explanation": "Por que a resposta correta é \"Apagado, pois RB4 é saída (0), mas o pino recebe nível baixo (0).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Apagado, pois RB4 é saída (0), mas o pino recebe nível baixo (0).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Após a leitura da memória EEPROM de dados, o dado lido é armazenado em qual registro?",
    "options": [
      "EEADR",
      "Flash",
      "STATUS",
      "EEDATA"
    ],
    "answer": "EEDATA",
    "explanation": "Por que a resposta correta é \"EEDATA\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  },
  {
    "question": "Sobre a 'Unidade de GPS' no contexto dos microcontroladores PIC, é correto afirmar que:",
    "options": [
      "Não é uma função interna comum à maioria dos modelos de PIC.",
      "É a principal unidade de processamento de instruções do microcontrolador.",
      "É o temporizador responsável por evitar o travamento do sistema.",
      "É o bloco que armazena os dados não-voláteis do usuário.",
      "É responsável pela multiplexação dos pinos de entrada e saída."
    ],
    "answer": "Não é uma função interna comum à maioria dos modelos de PIC.",
    "explanation": "Por que a resposta correta é \"Não é uma função interna comum à maioria dos modelos de PIC.\"? Conforme a arquitetura dos microcontroladores PIC (Apostila EE 2006-0423), todo PIC possui internamente Unidade Central de Processamento (CPU), memória de programa e dados, temporizador Watchdog (WDT) e portas de Entrada/Saída (I/O). A Unidade de GPS é um módulo de geolocalização por satélite externo e independente, não fazendo parte da estrutura interna nativa do chip."
  },
  {
    "question": "O recurso Watchdog em um microcontrolador caracteriza-se por:",
    "options": [
      "Incrementar um contador RC independente que, ao transbordar, provoca a reinicialização (reset) do sistema.",
      "Armazenar o endereço de retorno após uma instrução de salto ou desvio.",
      "Converter sinais analógicos de sensores externos em valores digitais.",
      "Gerenciar o barramento compartilhado entre memória de programa e dados.",
      "Controlar o espelhamento da memória RAM entre os diferentes bancos."
    ],
    "answer": "Incrementar um contador RC independente que, ao transbordar, provoca a reinicialização (reset) do sistema.",
    "explanation": "Por que a resposta correta é \"Incrementar um contador RC independente que, ao transbordar, provoca a reinicialização (reset) do sistema.\"? O Watchdog Timer (Cão de Guarda) é o único recurso de temporização com oscilador RC próprio e independente do clock principal. A lógica de segurança exige que o programa execute periodicamente a instrução CLRWDT (Clear Watchdog Timer). Se o código travar ou entrar em loop infinito, o CLRWDT não será acionado no tempo previsto, fazendo o contador transbordar e gerar um Reset no hardware para destravar e recuperar o sistema."
  },
  {
    "question": "Qual é o principal papel do Contador de Programa (PC) no microcontrolador?",
    "options": [
      "Estabelecer o fluxo de controle dos direcionamentos da memória que o código do programa contém.",
      "Armazenar o estado geral da Unidade Lógica e Aritmética durante operações.",
      "Definir as regras e velocidades de transferência da comunicação serial.",
      "Controlar o estouro de tempo do conversor analógico-digital.",
      "Selecionar o banco de memória RAM ativo para endereçamento direto."
    ],
    "answer": "Estabelecer o fluxo de controle dos direcionamentos da memória que o código do programa contém.",
    "explanation": "Por que a resposta correta é \"Estabelecer o fluxo de controle dos direcionamentos da memória que o código do programa contém.\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "Para impedir que o Watchdog transborde e cause o reset indesejado do microcontrolador, o programador deve utilizar a instrução:",
    "options": [
      "CLRWDT.",
      "SLEEP.",
      "RETURN.",
      "GOTO.",
      "NOP."
    ],
    "answer": "CLRWDT.",
    "explanation": "Por que a resposta correta é \"CLRWDT.\"? O Watchdog Timer (Cão de Guarda) é o único recurso de temporização com oscilador RC próprio e independente do clock principal. A lógica de segurança exige que o programa execute periodicamente a instrução CLRWDT (Clear Watchdog Timer). Se o código travar ou entrar em loop infinito, o CLRWDT não será acionado no tempo previsto, fazendo o contador transbordar e gerar um Reset no hardware para destravar e recuperar o sistema."
  },
  {
    "question": "A quantidade de memória que se deseja endereçar em um microcontrolador determina diretamente:",
    "options": [
      "O número de linhas em um barramento de endereços.",
      "A taxa de transferência da conexão serial síncrona.",
      "A velocidade de processamento da Unidade Central de Processamento.",
      "O número de periféricos e temporizadores internos disponíveis.",
      "A quantidade de registradores no topo da pilha de chamadas."
    ],
    "answer": "O número de linhas em um barramento de endereços.",
    "explanation": "Por que a resposta correta é \"O número de linhas em um barramento de endereços.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"O número de linhas em um barramento de endereços.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O conjunto de regras preestabelecidas que governam a troca ordenada e segura de dados entre dispositivos é denominado:",
    "options": [
      "Protocolo.",
      "Pipeline.",
      "Multiplexação.",
      "Espelhamento.",
      "Microcódigo."
    ],
    "answer": "Protocolo.",
    "explanation": "Por que a resposta correta é \"Protocolo.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Protocolo.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Os modos 'direto, indireto e imediato' referem-se a:",
    "options": [
      "Quais os 03 tipos de endereçamento que são usados no PC / instruções de PIC.",
      "Os três tipos de memória não-volátil disponíveis nos microcontroladores da série 16F.",
      "As categorias de interrupção externa geradas pelas portas de entrada analógica.",
      "Os estados operacionais do Watchdog Timer durante o modo de economia de energia.",
      "Os protocolos de barramento de dados suportados pelas portas seriais e paralelas."
    ],
    "answer": "Quais os 03 tipos de endereçamento que são usados no PC / instruções de PIC.",
    "explanation": "Por que a resposta correta é \"Quais os 03 tipos de endereçamento que são usados no PC / instruções de PIC.\"? A programação em assembly para a família PIC da Microchip utiliza fundamentalmente estes três modos de endereçamento: Imediato (quando o operando numérico constante é fornecido na própria instrução), Direto (quando o endereço de memória/registrador é explícito na instrução) e Indireto (quando o endereço do registrador é apontado dinamicamente via FSR/INDF)."
  },
  {
    "question": "A arquitetura Von-Neumann diferencia-se por:",
    "options": [
      "Compartilhar os barramentos de dados e endereços entre as memórias de programas e de dados na comunicação com a CPU.",
      "Possuir barramentos físicos completamente separados para a memória de código e para a memória de dados.",
      "Executar a busca e a execução de instruções em ciclos de máquina totalmente independentes e sobrepostos.",
      "Utilizar apenas registradores de propósito geral em um banco único sem divisão de memória RAM.",
      "Não permitir o uso de pilhas de sub-rotinas nem de vetores de interrupção em hardware."
    ],
    "answer": "Compartilhar os barramentos de dados e endereços entre as memórias de programas e de dados na comunicação com a CPU.",
    "explanation": "Por que a resposta correta é \"Compartilhar os barramentos de dados e endereços entre as memórias de programas e de dados na comunicação com a CPU.\"? A arquitetura Harvard, adotada nos microcontroladores PIC, elimina o gargalo de Von-Neumann por possuir barramentos físicos e memórias totalmente independentes para instruções (Flash) e dados (RAM), permitindo acessos simultâneos."
  },
  {
    "question": "Qual arquitetura permite, por meio de barramentos separados, fazer a busca de nova instrução ao mesmo tempo em que executa a instrução buscada anteriormente em um único ciclo?",
    "options": [
      "Harvard.",
      "Von-Neumann.",
      "CISC.",
      "Clássica.",
      "Mista."
    ],
    "answer": "Harvard.",
    "explanation": "Por que a resposta correta é \"Harvard.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Harvard.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A execução da instrução atual simultaneamente com a localização do código da instrução seguinte em um único ciclo de máquina descreve a técnica de:",
    "options": [
      "Pipeline.",
      "Multiplexação.",
      "Decodificação em dois tempos.",
      "Duplexação de barramento.",
      "Espelhamento de registradores."
    ],
    "answer": "Pipeline.",
    "explanation": "Por que a resposta correta é \"Pipeline.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Pipeline.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Um tempo de ciclo de instrução de 0,4us corresponde a qual configuração de clock no PIC16F877?",
    "options": [
      "Clock externo de 10MHz.",
      "Clock externo de 4MHz.",
      "Clock externo de 20MHz.",
      "Clock externo de 16MHz.",
      "Clock externo de 8MHz."
    ],
    "answer": "Clock externo de 10MHz.",
    "explanation": "Por que a resposta correta é \"Clock externo de 10MHz.\"? Na arquitetura PIC clássica de 8 bits, o clock principal do oscilador (Fosc) é dividido internamente por 4 para gerar as quatro fases de processamento de cada instrução (busca, decodificação, execução e escrita). Assim, cada ciclo de máquina ou instrução equivale exatamente a 4 ciclos de clock (Fosc/4)."
  },
  {
    "question": "O registrador FSR no PIC16F877 tem como principal característica:",
    "options": [
      "Ser um registro similar ao PC, que aponta para a memória de dados RAM (endereçamento indireto).",
      "Conter os flags de estado geral da ULA como Zero, Carry e Digit Carry.",
      "Controlar a habilitação e desabilitação de todas as interrupções gerais e periféricas.",
      "Armazenar o byte lido da memória EEPROM após uma operação de leitura.",
      "Configurar a direção dos pinos digitais do PORTA como entradas ou saídas."
    ],
    "answer": "Ser um registro similar ao PC, que aponta para a memória de dados RAM (endereçamento indireto).",
    "explanation": "Por que a resposta correta é \"Ser um registro similar ao PC, que aponta para a memória de dados RAM (endereçamento indireto).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Ser um registro similar ao PC, que aponta para a memória de dados RAM (endereçamento indireto).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A faixa de tensão de 2V a 5,5V representa:",
    "options": [
      "A faixa de alimentação do microcontrolador PIC16F877.",
      "A tensão de disparo do reset por queda de energia (Brown-out Reset).",
      "A amplitude do sinal analógico máxima tolerada pelos pinos do PORTB.",
      "O nível de tensão de referência interna fornecido para o conversor A/D.",
      "A tensão mínima necessária para gravar dados na memória Flash."
    ],
    "answer": "A faixa de alimentação do microcontrolador PIC16F877.",
    "explanation": "Por que a resposta correta é \"A faixa de alimentação do microcontrolador PIC16F877.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"A faixa de alimentação do microcontrolador PIC16F877.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Armazenar o endereço de retorno após uma instrução de desvio ou chamada de sub-rotina é a função fundamental da:",
    "options": [
      "Pilha (Stack).",
      "Memória EEPROM de Dados.",
      "Unidade de Temporização Timer0.",
      "Porta Paralela Escrava (PSP).",
      "Memória de Programa Flash."
    ],
    "answer": "Pilha (Stack).",
    "explanation": "Por que a resposta correta é \"Pilha (Stack).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Pilha (Stack).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Sobre a largura de bits das portas PORTA e PORTB no microcontrolador PIC16F877, é correto afirmar que:",
    "options": [
      "PORTA possui 6 bits e PORTB possui 8 bits.",
      "PORTA possui 8 bits e PORTB possui 6 bits.",
      "PORTA possui 5 bits e PORTB possui 8 bits.",
      "PORTA possui 8 bits e PORTB possui 8 bits.",
      "PORTA possui 6 bits e PORTB possui 7 bits."
    ],
    "answer": "PORTA possui 6 bits e PORTB possui 8 bits.",
    "explanation": "Por que a resposta correta é \"PORTA possui 6 bits e PORTB possui 8 bits.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"PORTA possui 6 bits e PORTB possui 8 bits.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O número total de 35 instruções no PIC16F877 indica que:",
    "options": [
      "O conjunto de instruções do PIC16F877 é do tipo RISC, formado por 35 instruções.",
      "A memória Flash só pode armazenar 35 sub-rotinas no programa principal.",
      "O processador necessita de 35 ciclos de clock externos para executar cada comando.",
      "Existem 35 vetores diferentes de interrupção mapeados na memória RAM.",
      "O temporizador Watchdog possui um pre-scaler com 35 estágios divisores."
    ],
    "answer": "O conjunto de instruções do PIC16F877 é do tipo RISC, formado por 35 instruções.",
    "explanation": "Por que a resposta correta é \"O conjunto de instruções do PIC16F877 é do tipo RISC, formado por 35 instruções.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"O conjunto de instruções do PIC16F877 é do tipo RISC, formado por 35 instruções.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Os temporizadores Timer 0, Timer 1 e Timer 2 representam:",
    "options": [
      "Os 3 Timers que compõem os módulos de temporização/contagem do PIC16F877.",
      "Os únicos blocos de memória não-volátil integrados no microcontrolador.",
      "As portas de comunicação serial assíncrona, síncrona e USB do dispositivo.",
      "Os registradores de controle do oscilador à cristal e Watchdog Timer.",
      "Os conversores analógico-digitais multiplexados do PORTA e PORTE."
    ],
    "answer": "Os 3 Timers que compõem os módulos de temporização/contagem do PIC16F877.",
    "explanation": "Por que a resposta correta é \"Os 3 Timers que compõem os módulos de temporização/contagem do PIC16F877.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Os 3 Timers que compõem os módulos de temporização/contagem do PIC16F877.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Os componentes 'Processador, Memória de Programa, Memória de Dados, Periféricos, Contadores' definem:",
    "options": [
      "Quais os blocos internos do PIC16F877 da Microchip.",
      "Os barramentos externos opcionais que devem ser conectados ao PORTD.",
      "As funções que são desativadas durante o modo de suspensão (Sleep).",
      "Os módulos exclusivos da arquitetura CISC presentes nos processadores de 32 bits.",
      "Os circuitos de proteção contra descargas eletrostáticas das portas de entrada."
    ],
    "answer": "Quais os blocos internos do PIC16F877 da Microchip.",
    "explanation": "Por que a resposta correta é \"Quais os blocos internos do PIC16F877 da Microchip.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Quais os blocos internos do PIC16F877 da Microchip.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Por que o Contador de Programa (PC) no PIC16F877 possui exatamente 13 bits?",
    "options": [
      "Para conseguir direcionar/endereçar todos os 8K de palavras da memória Flash de programa.",
      "Para armazenar o opcode de 14 bits menos o bit de paridade do processador.",
      "Porque a pilha do microcontrolador possui 13 níveis independentes de armazenamento.",
      "Para permitir a seleção simultânea de todos os 4 bancos de memória RAM.",
      "Para empacotar os 8 bits de dados juntamente com os 5 bits do registro TRISA."
    ],
    "answer": "Para conseguir direcionar/endereçar todos os 8K de palavras da memória Flash de programa.",
    "explanation": "Por que a resposta correta é \"Para conseguir direcionar/endereçar todos os 8K de palavras da memória Flash de programa.\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "A relação 'CKext / 4' (frequência do clock externo dividida por quatro) define no PIC16F877:",
    "options": [
      "A frequência do clock interno (ciclo de máquina).",
      "A taxa máxima de amostragem do módulo conversor analógico-digital.",
      "A velocidade de transbordo padrão do temporizador Watchdog.",
      "A frequência de transmissão serial quando em modo assíncrono.",
      "O tempo de espera no acionamento (Power-up Timer) durante o reset."
    ],
    "answer": "A frequência do clock interno (ciclo de máquina).",
    "explanation": "Por que a resposta correta é \"A frequência do clock interno (ciclo de máquina).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"A frequência do clock interno (ciclo de máquina).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O opcode da instrução combinado com os bits <4:3> do registro PCLATH é utilizado pelo Contador de Programa (PC) para:",
    "options": [
      "Formar o endereço de desvio durante a execução de uma instrução GOTO ou CALL.",
      "Retornar ao endereço original após o término de uma sub-rotina com RETURN.",
      "Selecionar diretamente o banco de memória RAM de dados entre os bancos 0 e 3.",
      "Identificar qual pino do PORTB gerou a interrupção externa no sistema.",
      "Determinar o valor inicial do temporizador Timer0 durante a inicialização."
    ],
    "answer": "Formar o endereço de desvio durante a execução de uma instrução GOTO ou CALL.",
    "explanation": "Por que a resposta correta é \"Formar o endereço de desvio durante a execução de uma instrução GOTO ou CALL.\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "O registrador STATUS no microcontrolador PIC16F877 possui a função primordial de:",
    "options": [
      "Mostrar o estado geral da Unidade Lógica e Aritmética (ULA), indicando Zero, Carry e seleção de banco.",
      "Controlar a habilitação e o flag de interrupção de transbordo do temporizador Timer0.",
      "Armazenar indiretamente os dados quando apontado pelo registrador de ponteiro FSR.",
      "Configurar os pinos analógicos do PORTA em modo digital ou conversão A/D.",
      "Manter o endereço de retorno da pilha sempre que ocorrer uma interrupção."
    ],
    "answer": "Mostrar o estado geral da Unidade Lógica e Aritmética (ULA), indicando Zero, Carry e seleção de banco.",
    "explanation": "Por que a resposta correta é \"Mostrar o estado geral da Unidade Lógica e Aritmética (ULA), indicando Zero, Carry e seleção de banco.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "Os registradores INDF e FSR trabalham em conjunto com qual finalidade?",
    "options": [
      "Realizar a escrita ou leitura indiretamente na memória RAM de dados.",
      "Configurar as interrupções de mudança de estado nos pinos RB4 a RB7.",
      "Gerenciar o espelhamento entre a memória de programa Flash e a EEPROM.",
      "Controlar os tempos de espera dos módulos osciladores e do reset Power-up.",
      "Determinar a paridade e a velocidade dos dados na interface serial USART."
    ],
    "answer": "Realizar a escrita ou leitura indiretamente na memória RAM de dados.",
    "explanation": "Por que a resposta correta é \"Realizar a escrita ou leitura indiretamente na memória RAM de dados.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Realizar a escrita ou leitura indiretamente na memória RAM de dados.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A qual registrador especial do PIC16F877 pertence o controle geral das interrupções (GIE, PEIE, INTE, T0IE)?",
    "options": [
      "INTCON.",
      "STATUS.",
      "OPTION_REG.",
      "FSR.",
      "INDF."
    ],
    "answer": "INTCON.",
    "explanation": "Por que a resposta correta é \"INTCON.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "O bit 'INTE do registro INTCON' tem como função específica no PIC16F877:",
    "options": [
      "Habilitar a entrada externa de interrupção no pino RB0/INT.",
      "Ativar os resistores de pull-up internos em todas as linhas do PORTB.",
      "Habilitar a interrupção por transbordo de contagem do temporizador Timer0.",
      "Sinalizar a ocorrência de mudança de nível lógico nos pinos RB4 a RB7.",
      "Permitir o acesso de escrita à memória não-volátil EEPROM de dados."
    ],
    "answer": "Habilitar a entrada externa de interrupção no pino RB0/INT.",
    "explanation": "Por que a resposta correta é \"Habilitar a entrada externa de interrupção no pino RB0/INT.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "Qual característica descreve corretamente a Pilha (Stack) do PIC16F877, diferenciando-a das alternativas incorretas?",
    "options": [
      "Possui oito níveis de profundidade, endereços de 13 bits e opera como buffer circular sem flag de overflow no STATUS.",
      "Pode ser lida e escrita livremente por qualquer instrução aritmética através de ponteiros indiretos.",
      "Possui apenas 4 níveis de memória para armazenar variáveis locais de sub-rotinas e funções.",
      "É mapeada diretamente no banco 0 da memória RAM junto com os registradores de propósito geral.",
      "Emite automaticamente uma interrupção não-mascarável sempre que o oitavo nível é ultrapassado."
    ],
    "answer": "Possui oito níveis de profundidade, endereços de 13 bits e opera como buffer circular sem flag de overflow no STATUS.",
    "explanation": "Por que a resposta correta é \"Possui oito níveis de profundidade, endereços de 13 bits e opera como buffer circular sem flag de overflow no STATUS.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Possui oito níveis de profundidade, endereços de 13 bits e opera como buffer circular sem flag de overflow no STATUS.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O bit 'GIE do registro INTCON' age no sistema como:",
    "options": [
      "A chave responsável pela habilitação geral de todas as interrupções no PIC16F877.",
      "O flag que indica o término da conversão analógico-digital de 10 bits.",
      "O seletor da borda de subida ou descida para a interrupção externa em RB0/INT.",
      "O bit que liga e desliga o divisor de frequência (Prescaler) do Watchdog Timer.",
      "O indicador de estouro da pilha de endereços após múltiplas chamadas CALL."
    ],
    "answer": "A chave responsável pela habilitação geral de todas as interrupções no PIC16F877.",
    "explanation": "Por que a resposta correta é \"A chave responsável pela habilitação geral de todas as interrupções no PIC16F877.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "Qual porta do PIC16F877 é caracterizada pela capacidade exclusiva de ativar resistores de pull-up internos controlados via software?",
    "options": [
      "PORTB.",
      "PORTA.",
      "PORTC.",
      "PORTD.",
      "PORTE."
    ],
    "answer": "PORTB.",
    "explanation": "Por que a resposta correta é \"PORTB.\"? O registrador OPTION_REG gerencia recursos globais de hardware: ativação dos resistores de Pull-up internos da porta B (bit RBPU), seleção da borda de interrupção externa INT, fonte do clock do TMR0 e a alocação e fator de divisão do divisor de frequência Prescaler (entre TMR0 ou Watchdog)."
  },
  {
    "question": "A afirmação 'cada banco da memória RAM possui 128 bytes' refere-se diretamente à:",
    "options": [
      "Organização e características arquiteturais das memórias de dados do PIC16F877.",
      "Divisão estrutural da memória Flash de programa em páginas de código de 8K.",
      "Capacidade total de armazenamento da memória não-volátil EEPROM de dados.",
      "Estrutura da pilha de chamadas para sub-rotinas e tratamento de interrupções.",
      "Configuração dos registradores de direção do PORTC em modo paralela escrava."
    ],
    "answer": "Organização e características arquiteturais das memórias de dados do PIC16F877.",
    "explanation": "Por que a resposta correta é \"Organização e características arquiteturais das memórias de dados do PIC16F877.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Organização e características arquiteturais das memórias de dados do PIC16F877.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Os bits RP1 e RP0 do registro de STATUS são os responsáveis diretos pela:",
    "options": [
      "Seleção dos 4 bancos no endereçamento direto de um registrador da memória RAM.",
      "Configuração dos 4 modos de operação do temporizador Timer 1 em alta frequência.",
      "Habilitação e desabilitação dos resistores de pull-up globais e locais do PORTB.",
      "Seleção entre o oscilador interno RC e o cristal de quartzo de 20MHz externo.",
      "Definição das páginas superiores da memória Flash para saltos longos."
    ],
    "answer": "Seleção dos 4 bancos no endereçamento direto de um registrador da memória RAM.",
    "explanation": "Por que a resposta correta é \"Seleção dos 4 bancos no endereçamento direto de um registrador da memória RAM.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "Ao executar uma instrução RETURN ou RETFIE, de onde provém o endereço que é carregado no Contador de Programa (PC)?",
    "options": [
      "Do endereço recuperado diretamente do topo da Pilha (TOS).",
      "Do opcode de 11 bits da própria instrução em execução.",
      "Dos registradores especiais PCL e PCH mapeados no banco 0.",
      "Do registrador ponteiro de dados indiretos FSR.",
      "Do endereço inicial do vetor de interrupção de hardware (0004h)."
    ],
    "answer": "Do endereço recuperado diretamente do topo da Pilha (TOS).",
    "explanation": "Por que a resposta correta é \"Do endereço recuperado diretamente do topo da Pilha (TOS).\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "A afirmativa 'indica o estado geral do Micro' descreve sinteticamente o propósito do registro:",
    "options": [
      "STATUS.",
      "OPTION_REG.",
      "INTCON.",
      "INDF.",
      "PCLATH."
    ],
    "answer": "STATUS.",
    "explanation": "Por que a resposta correta é \"STATUS.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"STATUS.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A configuração TRISB=00001111b define que os pinos do PORTB operarão com qual disposição?",
    "options": [
      "Metade como entrada (RB0 a RB3) e a outra metade como saída (RB4 a RB7).",
      "Todos os 8 pinos operando exclusivamente como saídas digitais de alto ganho.",
      "Todos os 8 pinos operando exclusivamente como entradas digitais tri-state.",
      "Metade como saída (RB0 a RB3) e a outra metade como entrada (RB4 a RB7).",
      "Pinos analógicos ativados para leitura simultânea pelo módulo conversor A/D."
    ],
    "answer": "Metade como entrada (RB0 a RB3) e a outra metade como saída (RB4 a RB7).",
    "explanation": "Por que a resposta correta é \"Metade como entrada (RB0 a RB3) e a outra metade como saída (RB4 a RB7).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Metade como entrada (RB0 a RB3) e a outra metade como saída (RB4 a RB7).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Para que os pinos do PORTA possam operar corretamente como entradas analógicas para o conversor A/D, como devem estar configurados os bits do registro TRISA?",
    "options": [
      "Deverão se manter setados (em nível 1, configurados como entradas).",
      "Deverão se manter em nível baixo (em nível 0, configurados como saídas).",
      "Deverão ser espelhados no registro OPTION_REG com o bit PSPMODE ativo.",
      "Apenas o bit RA4 deverá estar setado enquanto os demais permanecem zerados.",
      "Deverão ser alternados entre 0 e 1 a cada ciclo de amostragem analógica."
    ],
    "answer": "Deverão se manter setados (em nível 1, configurados como entradas).",
    "explanation": "Por que a resposta correta é \"Deverão se manter setados (em nível 1, configurados como entradas).\"? O módulo Conversor Analógico-Digital (ADC) realiza a medição de grandezas analógicas externas (como temperatura ou tensão em um potenciômetro), convertendo essa amostra em uma palavra digital de N bits proporcional à tensão de referência Vref, possibilitando o processamento digital pela CPU."
  },
  {
    "question": "A operação lógica EX-OR realizada pelo hardware interno nos pinos de entrada RB7:RB4 em relação ao último valor lido do PORTB tem a finalidade de:",
    "options": [
      "Gerar a interrupção por mudança de estado na própria porta B (RBIF).",
      "Inverter a paridade dos dados recebidos através do canal serial USART.",
      "Decodificar os endereços de 14 bits durante a busca de instruções na Flash.",
      "Sincronizar a contagem de tempo do Timer 1 com o oscilador secundário.",
      "Ativar o buffer de travamento Latch das saídas digitais do PORTD."
    ],
    "answer": "Gerar a interrupção por mudança de estado na própria porta B (RBIF).",
    "explanation": "Por que a resposta correta é \"Gerar a interrupção por mudança de estado na própria porta B (RBIF).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Gerar a interrupção por mudança de estado na própria porta B (RBIF).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "As portas 'A e E' compartilham no PIC16F877 a funcionalidade de:",
    "options": [
      "Serem utilizadas junto com o Conversor Analógico-Digital (entradas analógicas / referências).",
      "Atuarem exclusivamente como portas paralelas escravas em comunicação com outros processadores.",
      "Possuírem resistores de pull-up internos programáveis individualmente para cada pino.",
      "Conectarem os pinos de oscilador à cristal e reset externo (MCLR) do microcontrolador.",
      "Gerarem todas as saídas de modulação por largura de pulso (PWM) dos módulos CCP."
    ],
    "answer": "Serem utilizadas junto com o Conversor Analógico-Digital (entradas analógicas / referências).",
    "explanation": "Por que a resposta correta é \"Serem utilizadas junto com o Conversor Analógico-Digital (entradas analógicas / referências).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Serem utilizadas junto com o Conversor Analógico-Digital (entradas analógicas / referências).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O recurso arquitetural que permite que um mesmo pino físico de I/O do PIC exerça múltiplas funções (como entrada analógica, saída PWM ou pino digital) é chamado de:",
    "options": [
      "Multiplexação.",
      "Pipeline.",
      "Espelhamento.",
      "Duplexação.",
      "Tri-state."
    ],
    "answer": "Multiplexação.",
    "explanation": "Por que a resposta correta é \"Multiplexação.\"? A Modulação por Largura de Pulso (PWM) gera uma onda quadrada de frequência fixa onde o tempo em nível lógico alto (Duty Cycle) é ajustado por software. Isso permite controlar a potência média entregue a cargas como motores DC (ajuste de velocidade) e LEDs (ajuste de brilho) mantendo alta eficiência energética."
  },
  {
    "question": "O registrador TRISE no microcontrolador PIC16F877 é responsável por:",
    "options": [
      "Controlar a direção de dados (entradas ou saídas) dos pinos correspondentes ao PORTE.",
      "Armazenar temporariamente o resultado da conversão A/D nos canais analógicos superiores.",
      "Selecionar o banco de memória RAM ativo nas leituras indiretas com FSR.",
      "Habilitar os resistores de pull-up nas linhas de dados do PORTB e PORTC.",
      "Configurar a contagem inicial e o divisor de frequência do temporizador Timer 2."
    ],
    "answer": "Controlar a direção de dados (entradas ou saídas) dos pinos correspondentes ao PORTE.",
    "explanation": "Por que a resposta correta é \"Controlar a direção de dados (entradas ou saídas) dos pinos correspondentes ao PORTE.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Controlar a direção de dados (entradas ou saídas) dos pinos correspondentes ao PORTE.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Quando um bit do registrador TRISD é configurado em nível baixo (0), qual comportamento o pino correspondente no PORTD adota?",
    "options": [
      "Atua como uma saída digital.",
      "Atua como uma entrada digital de alta impedância.",
      "Atua como entrada analógica conectada ao conversor A/D.",
      "Entra em modo de falha com sinal flutuante.",
      "Atua como pino multiplexado do barramento paralela escrava."
    ],
    "answer": "Atua como uma saída digital.",
    "explanation": "Por que a resposta correta é \"Atua como uma saída digital.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Atua como uma saída digital.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O fato de a leitura de uma porta ser feita diretamente no pino físico enquanto a escrita passa por um Latch intermediário pode causar qual fenômeno em operações de I/O rápidas no PIC?",
    "options": [
      "Atraso entre a escrita e a leitura, ou problemas em instruções do tipo Read-Modify-Write.",
      "A dupla execução acidental de instruções consecutivas no mesmo ciclo de máquina.",
      "O transbordo imediato do Watchdog Timer devido a correntes elevadas de saída.",
      "A perda dos dados armazenados nos registradores especiais do banco 0.",
      "O travamento permanente do conversor analógico-digital de 10 bits."
    ],
    "answer": "Atraso entre a escrita e a leitura, ou problemas em instruções do tipo Read-Modify-Write.",
    "explanation": "Por que a resposta correta é \"Atraso entre a escrita e a leitura, ou problemas em instruções do tipo Read-Modify-Write.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Atraso entre a escrita e a leitura, ou problemas em instruções do tipo Read-Modify-Write.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Sobre o modo PSPMODE (Porta Paralela Escrava), a afirmação 'controlada leitura por WR ou por escrita RD' é considerada incorreta porque:",
    "options": [
      "Na verdade, a leitura é controlada pelo sinal /RD e a escrita pelo sinal /WR, e não o inverso.",
      "O modo PSPMODE não utiliza sinais de leitura ou escrita, funcionando por interrupção serial síncrona.",
      "A ativação do PSPMODE desabilita completamente qualquer controle de leitura/escrita no PORTD.",
      "Os sinais /WR e /RD operam exclusivamente com a memória EEPROM interna e nunca com o PORTE.",
      "O controle de fluxo no PSPMODE depende apenas dos bits do Timer 0 e da USART."
    ],
    "answer": "Na verdade, a leitura é controlada pelo sinal /RD e a escrita pelo sinal /WR, e não o inverso.",
    "explanation": "Por que a resposta correta é \"Na verdade, a leitura é controlada pelo sinal /RD e a escrita pelo sinal /WR, e não o inverso.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Na verdade, a leitura é controlada pelo sinal /RD e a escrita pelo sinal /WR, e não o inverso.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "As capacidades 'Portas de I/O digitais, Portas de entradas Analógicas e Porta de controle do PSP' resumem o conjunto de funções associadas a qual porta do PIC16F877?",
    "options": [
      "PORTE.",
      "PORTA.",
      "PORTB.",
      "PORTC.",
      "PORTD."
    ],
    "answer": "PORTE.",
    "explanation": "Por que a resposta correta é \"PORTE.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"PORTE.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O carregamento sequencial dos valores 0x55 e 0xAA no registrador EECON2 é uma etapa obrigatória que serve para:",
    "options": [
      "Desbloquear a proteção e permitir o ciclo de escrita na memória FLASH ou EEPROM de dados.",
      "Calibrar automaticamente a frequência interna do oscilador à cristal de 4MHz.",
      "Apagar todos os registradores da memória RAM ao inicializar o microcontrolador.",
      "Inverter os bits da porta paralela escrava antes da recepção de novos dados.",
      "Zerar o contador do Watchdog e configurar o pre-scaler no registrador OPTION_REG."
    ],
    "answer": "Desbloquear a proteção e permitir o ciclo de escrita na memória FLASH ou EEPROM de dados.",
    "explanation": "Por que a resposta correta é \"Desbloquear a proteção e permitir o ciclo de escrita na memória FLASH ou EEPROM de dados.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Desbloquear a proteção e permitir o ciclo de escrita na memória FLASH ou EEPROM de dados.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O bit EEPGD, localizado no registrador EECON1, desempenha a função de:",
    "options": [
      "Selecionar qual memória será acessada nas operações de leitura/escrita: EEPROM de dados ou Flash de programa.",
      "Sinalizar a ocorrência de erro durante uma tentativa de gravação não autorizada na memória.",
      "Habilitar a interrupção de término de gravação ao final do ciclo interno de temporização.",
      "Ativar a proteção contra leitura externa do código objeto armazenado na memória Flash.",
      "Iniciar manualmente o processo de escrita na EEPROM após a sequência de desbloqueio."
    ],
    "answer": "Selecionar qual memória será acessada nas operações de leitura/escrita: EEPROM de dados ou Flash de programa.",
    "explanation": "Por que a resposta correta é \"Selecionar qual memória será acessada nas operações de leitura/escrita: EEPROM de dados ou Flash de programa.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Selecionar qual memória será acessada nas operações de leitura/escrita: EEPROM de dados ou Flash de programa.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O registrador EEDATA é utilizado pelo hardware do PIC16F877 para:",
    "options": [
      "Armazenar o dado de 8 bits após a conclusão da leitura da memória EEPROM de dados.",
      "Receber o endereço de 8 bits menos significativo da célula a ser lida na EEPROM.",
      "Conter a sequência de segurança de gravação 0x55 / 0xAA durante o desbloqueio.",
      "Configurar os flags de controle de interrupção do módulo de memória não-volátil.",
      "Receber os bits superiores do endereço de 14 bits ao ler a memória Flash de programa."
    ],
    "answer": "Armazenar o dado de 8 bits após a conclusão da leitura da memória EEPROM de dados.",
    "explanation": "Por que a resposta correta é \"Armazenar o dado de 8 bits após a conclusão da leitura da memória EEPROM de dados.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Armazenar o dado de 8 bits após a conclusão da leitura da memória EEPROM de dados.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A função do flag de interrupção EEIF (PIR2<4>) durante operações na memória não-volátil é:",
    "options": [
      "Sinalizar ou tratar a ocorrência de interrupção indicando o final de um ciclo de escrita.",
      "Proteger a memória contra gravações acidentais no momento de ligar a alimentação (Power-UP).",
      "Impedir que leituras simultâneas corrompam os dados mantidos no registrador EEDATA.",
      "Habilitar automaticamente o oscilador RC interno para o ciclo de gravação temporizado.",
      "Desabilitar o Watchdog Timer enquanto a escrita na Flash estiver em andamento."
    ],
    "answer": "Sinalizar ou tratar a ocorrência de interrupção indicando o final de um ciclo de escrita.",
    "explanation": "Por que a resposta correta é \"Sinalizar ou tratar a ocorrência de interrupção indicando o final de um ciclo de escrita.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Sinalizar ou tratar a ocorrência de interrupção indicando o final de um ciclo de escrita.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O término físico do ciclo interno de gravação/escrita na memória é indicado pelo hardware quando:",
    "options": [
      "O bit WR (EECON1<1>) é resetado/apagado automaticamente pelo circuito interno.",
      "O bit WREN (EECON1<2>) é automaticamente apagado pelo processador ao fim do ciclo.",
      "O bit EEPGD no registrador EECON1 alterna do nível 1 para o nível baixo 0.",
      "O bit WRERR (EECON1<3>) é setado para confirmar que os dados foram validados.",
      "O flag T0IF no registrador INTCON vai a nível alto em sincronia com o clock."
    ],
    "answer": "O bit WR (EECON1<1>) é resetado/apagado automaticamente pelo circuito interno.",
    "explanation": "Por que a resposta correta é \"O bit WR (EECON1<1>) é resetado/apagado automaticamente pelo circuito interno.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"O bit WR (EECON1<1>) é resetado/apagado automaticamente pelo circuito interno.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A dupla de registradores 'EEADR e EEDATA' é utilizada em conjunto especificamente para:",
    "options": [
      "Realizar a leitura ou escrita na memória EEPROM de dados (endereço em EEADR e dado em EEDATA).",
      "Executar o espelhamento contínuo dos registradores de trabalho entre o banco 0 e o banco 2.",
      "Configurar os endereços e palavras de calibração do oscilador interno do PIC16F877.",
      "Apontar para o topo da pilha de endereços no retorno de sub-rotinas e interrupções.",
      "Mapear as portas digitais do PORTD no barramento paralelo escravo com interrupção."
    ],
    "answer": "Realizar a leitura ou escrita na memória EEPROM de dados (endereço em EEADR e dado em EEDATA).",
    "explanation": "Por que a resposta correta é \"Realizar a leitura ou escrita na memória EEPROM de dados (endereço em EEADR e dado em EEDATA).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Realizar a leitura ou escrita na memória EEPROM de dados (endereço em EEADR e dado em EEDATA).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O flag de controle 'RD (EECON1<0>)' apresenta qual comportamento no processo de leitura da EEPROM após o dado estar disponível no EEDATA?",
    "options": [
      "É apagado/resetado automaticamente pelo hardware logo após a conclusão da leitura.",
      "Deve ser obrigatoriamente apagado pelo programador via software antes da próxima instrução.",
      "Permanece setado em nível 1 para indicar que o registrador EEADR está ocupado.",
      "Gera uma interrupção de alta prioridade no vetor 0004h da memória Flash.",
      "Trava o acesso ao barramento de dados até que a instrução NOP seja executada."
    ],
    "answer": "É apagado/resetado automaticamente pelo hardware logo após a conclusão da leitura.",
    "explanation": "Por que a resposta correta é \"É apagado/resetado automaticamente pelo hardware logo após a conclusão da leitura.\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  },
  {
    "question": "Os registradores 'EEADR, EEADRH e EEDATA, EEDATAH' são necessários durante a leitura da Memória Flash de Programa do PIC16F877 porque:",
    "options": [
      "A memória Flash possui capacidade de 8Kb (endereços de 13 bits em EEADR/EEADRH) e palavras de 14 bits (dados em EEDATA/EEDATAH).",
      "O PIC16F877 opera com arquitetura de 16 bits de dados, necessitando de dois bytes para cada registrador da RAM.",
      "A memória EEPROM de dados está dividida em dois bancos adjacentes acessados apenas por registradores duplos.",
      "As instruções de salto longo GOTO exigem que o endereço de 14 bits seja lido simultaneamente da pilha.",
      "O módulo de comunicação paralela escrava transfere dados de 16 em 16 bits com o processador mestre."
    ],
    "answer": "A memória Flash possui capacidade de 8Kb (endereços de 13 bits em EEADR/EEADRH) e palavras de 14 bits (dados em EEDATA/EEDATAH).",
    "explanation": "Por que a resposta correta é \"A memória Flash possui capacidade de 8Kb (endereços de 13 bits em EEADR/EEADRH) e palavras de 14 bits (dados em EEDATA/EEDATAH).\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "O bit de configuração WRT do PIC16F877 é responsável por:",
    "options": [
      "Proteger a Memória Flash de Programa contra escritas/gravações indesejadas durante a execução do programa.",
      "Desabilitar o temporizador de inicialização (Power-up Timer) quando a alimentação é ligada.",
      "Habilitar a verificação de paridade e correção de erro em todas as leituras da memória EEPROM.",
      "Permitir o reset por queda de tensão na alimentação (Brown-out Reset) ajustável pelo usuário.",
      "Mudar o mapeamento dos vetores de interrupção de 0004h para o topo do bloco de memória RAM."
    ],
    "answer": "Proteger a Memória Flash de Programa contra escritas/gravações indesejadas durante a execução do programa.",
    "explanation": "Por que a resposta correta é \"Proteger a Memória Flash de Programa contra escritas/gravações indesejadas durante a execução do programa.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Proteger a Memória Flash de Programa contra escritas/gravações indesejadas durante a execução do programa.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O bit WREN (Write Enable) no registrador EECON1 é utilizado com o propósito fundamental de:",
    "options": [
      "Habilitar ou desabilitar a permissão para operações de escrita/gravação na memória Flash e EEPROM.",
      "Sinalizar ao processador que o ciclo temporizado de gravação foi concluído com sucesso.",
      "Apagar automaticamente o conteúdo do registrador EEDATA antes da leitura de uma nova célula.",
      "Ativar a interrupção de alta prioridade sempre que houver tentativa de escrita sem paridade.",
      "Proteger as portas digitais de I/O contra alterações acidentais de direção no registro TRIS."
    ],
    "answer": "Habilitar ou desabilitar a permissão para operações de escrita/gravação na memória Flash e EEPROM.",
    "explanation": "Por que a resposta correta é \"Habilitar ou desabilitar a permissão para operações de escrita/gravação na memória Flash e EEPROM.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Habilitar ou desabilitar a permissão para operações de escrita/gravação na memória Flash e EEPROM.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Apontar o endereço da próxima instrução a ser executada na memória Flash é a definição da função do:",
    "options": [
      "Contador de Programa (PC).",
      "Registrador FSR.",
      "Registrador de Trabalho W (Work).",
      "Temporizador Watchdog Timer.",
      "Divisor de frequência Prescaler."
    ],
    "answer": "Contador de Programa (PC).",
    "explanation": "Por que a resposta correta é \"Contador de Programa (PC).\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "A técnica que executa uma instrução enquanto busca a próxima no mesmo ciclo de máquina é denominada:",
    "options": [
      "Pipeline.",
      "Espelhamento de banco.",
      "Multiplexação no tempo.",
      "Acesso Direto à Memória (DMA).",
      "Endereçamento Imediato."
    ],
    "answer": "Pipeline.",
    "explanation": "Por que a resposta correta é \"Pipeline.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Pipeline.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A fabricante 'Microchip' é conhecida mundialmente por desenvolver a famosa família de microcontroladores:",
    "options": [
      "PIC.",
      "AVR (ATmega).",
      "8051.",
      "ARM Cortex-M.",
      "MSP430."
    ],
    "answer": "PIC.",
    "explanation": "Por que a resposta correta é \"PIC.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"PIC.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "A capacidade de 8192 palavras (8K) na memória Flash do PIC16F877 indica que o microcontrolador é capaz de armazenar exatamente:",
    "options": [
      "8192 instruções de 14 bits.",
      "1024 instruções e 2048 bytes de variáveis na RAM.",
      "4096 instruções com suporte a duplo ciclo de barramento.",
      "16384 bytes formatados em blocos de paridade de 8 bits.",
      "2048 vetores de interrupção e sub-rotinas independentes."
    ],
    "answer": "8192 instruções de 14 bits.",
    "explanation": "Por que a resposta correta é \"8192 instruções de 14 bits.\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Uma frequência interna de ciclo de instrução de 4 MHz no microcontrolador PIC16F877 é obtida quando se utiliza um clock externo de:",
    "options": [
      "16 MHz.",
      "4 MHz.",
      "8 MHz.",
      "20 MHz.",
      "32 MHz."
    ],
    "answer": "16 MHz.",
    "explanation": "Por que a resposta correta é \"16 MHz.\"? Na arquitetura PIC clássica de 8 bits, o clock principal do oscilador (Fosc) é dividido internamente por 4 para gerar as quatro fases de processamento de cada instrução (busca, decodificação, execução e escrita). Assim, cada ciclo de máquina ou instrução equivale exatamente a 4 ciclos de clock (Fosc/4)."
  },
  {
    "question": "Um ciclo de instrução com duração de 200 ns requer a aplicação de um clock externo de:",
    "options": [
      "20 MHz.",
      "10 MHz.",
      "4 MHz.",
      "16 MHz.",
      "8 MHz."
    ],
    "answer": "20 MHz.",
    "explanation": "Por que a resposta correta é \"20 MHz.\"? Na arquitetura PIC clássica de 8 bits, o clock principal do oscilador (Fosc) é dividido internamente por 4 para gerar as quatro fases de processamento de cada instrução (busca, decodificação, execução e escrita). Assim, cada ciclo de máquina ou instrução equivale exatamente a 4 ciclos de clock (Fosc/4)."
  },
  {
    "question": "O tempo de 2 us para a execução de uma instrução de salto (como GOTO ou CALL, que gastam 2 ciclos de máquina) é obtido quando o clock externo é de:",
    "options": [
      "4 MHz.",
      "8 MHz.",
      "16 MHz.",
      "10 MHz.",
      "20 MHz."
    ],
    "answer": "4 MHz.",
    "explanation": "Por que a resposta correta é \"4 MHz.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"4 MHz.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Sobre o número de fontes/tipos de interrupções no microcontrolador PIC16F877, a afirmação 'O microcontrolador possui 7 tipos de interrupções' é INCORRETA porque:",
    "options": [
      "O PIC16F877 possui, na verdade, 14 ou 15 fontes de interrupção (entre internas e externas), e não apenas 7.",
      "O microcontrolador não possui interrupções de periféricos, contando com apenas 1 interrupção externa (INT).",
      "As interrupções foram removidas nesta arquitetura para dar lugar ao sistema de varredura por polling.",
      "O dispositivo suporta um número ilimitado de interrupções configuradas dinamicamente via software.",
      "As interrupções são divididas em exatamente 3 níveis de prioridade controlados pelo registro PCLATH."
    ],
    "answer": "O PIC16F877 possui, na verdade, 14 ou 15 fontes de interrupção (entre internas e externas), e não apenas 7.",
    "explanation": "Por que a resposta correta é \"O PIC16F877 possui, na verdade, 14 ou 15 fontes de interrupção (entre internas e externas), e não apenas 7.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "O endereço hexadecimal 0004h na memória Flash do PIC16F877 é reservado por hardware para:",
    "options": [
      "O vetor de interrupção (onde o PC desvia ao ocorrer qualquer interrupção).",
      "O vetor de reset (onde o programa inicia ao ligar o microcontrolador).",
      "A tabela de calibração do oscilador interno e opções do usuário.",
      "O endereço inicial de mapeamento dos registradores especiais de controle.",
      "O endereço de topo do primeiro banco da memória não-volátil EEPROM."
    ],
    "answer": "O vetor de interrupção (onde o PC desvia ao ocorrer qualquer interrupção).",
    "explanation": "Por que a resposta correta é \"O vetor de interrupção (onde o PC desvia ao ocorrer qualquer interrupção).\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "Os bits <4:3> do registrador PCLATH operam na memória FLASH de programa como:",
    "options": [
      "A chave seletora de página nas instruções que modificam o PC, como GOTO e CALL.",
      "Os seletores de banco da memória RAM para o endereçamento indireto via FSR.",
      "Os habilitadores individuais das interrupções do Timer 1 e da porta paralela.",
      "Os bits que determinam se o oscilador trabalhará em modo HS, XT, LP ou RC.",
      "Os indicadores de que ocorreu um estouro de contagem no temporizador Watchdog."
    ],
    "answer": "A chave seletora de página nas instruções que modificam o PC, como GOTO e CALL.",
    "explanation": "Por que a resposta correta é \"A chave seletora de página nas instruções que modificam o PC, como GOTO e CALL.\"? A memória Flash é uma tecnologia não-volátil (mantém os dados gravados mesmo quando a alimentação elétrica é cortada) e reprogramável eletricamente. Por essa confiabilidade e velocidade de regravação, é nela que se armazena de forma permanente o firmware (código do programa) do microcontrolador."
  },
  {
    "question": "O fato de os 7 bits de endereço presentes nas instruções da CPU conseguirem endereçar apenas 128 bytes por vez justifica:",
    "options": [
      "O uso do termo 'Banco' e a divisão da memória RAM em bancos selecionáveis.",
      "A limitação da pilha de chamadas (Stack) a apenas 8 níveis de armazenamento.",
      "A necessidade de utilizar dois ciclos de máquina para executar desvios incondicionais.",
      "O espelhamento do registrador STATUS apenas no banco 0 da memória de dados.",
      "A impossibilidade de ler ou gravar dados diretamente nas portas PORTD e PORTE."
    ],
    "answer": "O uso do termo 'Banco' e a divisão da memória RAM em bancos selecionáveis.",
    "explanation": "Por que a resposta correta é \"O uso do termo 'Banco' e a divisão da memória RAM em bancos selecionáveis.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"O uso do termo 'Banco' e a divisão da memória RAM em bancos selecionáveis.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "Os bits RP1 e RP0 do registrador STATUS têm a função vital de:",
    "options": [
      "Fazer a seleção do banco de memória RAM no endereçamento direto.",
      "Selecionar a página de memória Flash em instruções GOTO e CALL.",
      "Habilitar e limpar o flag de interrupção do conversor analógico-digital.",
      "Sinalizar se o reset recente foi causado pelo pino MCLR ou pelo Watchdog.",
      "Controlar o divisor de frequência programável atribuído ao Timer 0."
    ],
    "answer": "Fazer a seleção do banco de memória RAM no endereçamento direto.",
    "explanation": "Por que a resposta correta é \"Fazer a seleção do banco de memória RAM no endereçamento direto.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "Qual característica define singularmente o registrador de trabalho W (WORK) nos microcontroladores PIC?",
    "options": [
      "Atua como ponte/destino principal de operações da ULA, mas NÃO está mapeado com endereço na memória RAM.",
      "Está mapeado no endereço 00h em todos os quatro bancos da memória RAM de dados.",
      "Armazena a palavra de configuração de 14 bits gravada durante a programação do chip.",
      "É o único registrador de 16 bits disponível no PIC16F877 para operações matemáticas.",
      "Controla de forma direta os resistores de pull-up internos associados aos pinos de entrada."
    ],
    "answer": "Atua como ponte/destino principal de operações da ULA, mas NÃO está mapeado com endereço na memória RAM.",
    "explanation": "Por que a resposta correta é \"Atua como ponte/destino principal de operações da ULA, mas NÃO está mapeado com endereço na memória RAM.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Atua como ponte/destino principal de operações da ULA, mas NÃO está mapeado com endereço na memória RAM.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O bit /TO em nível baixo (0) dentro do registrador STATUS indica ao programador que:",
    "options": [
      "O temporizador Watchdog transbordou e provocou o reset do microcontrolador.",
      "O temporizador Timer0 atingiu o valor máximo de 255 sem gerar interrupção.",
      "A pilha de sub-rotinas sofreu estouro (stack overflow) durante a execução.",
      "A tensão de alimentação caiu abaixo do limiar de segurança (Brown-out).",
      "O conversor analógico-digital finalizou a conversão do canal selecionado."
    ],
    "answer": "O temporizador Watchdog transbordou e provocou o reset do microcontrolador.",
    "explanation": "Por que a resposta correta é \"O temporizador Watchdog transbordou e provocou o reset do microcontrolador.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "O resultado da operação lógica ou aritmética anterior ter sido exatamente zero faz com que o hardware modifique qual indicador do PIC?",
    "options": [
      "Coloca o bit Z (STATUS<2>) em nível lógico '1'.",
      "Coloca o bit C (Carry no STATUS<0>) em nível lógico '1'.",
      "Zera o conteúdo do registrador de trabalho W.",
      "Gera uma interrupção automática no vetor de memória 0004h.",
      "Desabilita temporariamente o transbordo do contador Watchdog."
    ],
    "answer": "Coloca o bit Z (STATUS<2>) em nível lógico '1'.",
    "explanation": "Por que a resposta correta é \"Coloca o bit Z (STATUS<2>) em nível lógico '1'.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Coloca o bit Z (STATUS<2>) em nível lógico '1'.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "No modo de endereçamento indireto, o registrador FSR desempenha qual papel?",
    "options": [
      "Aponta para o endereço da memória RAM que será lido ou escrito através de INDF.",
      "Converte o código de operação de 14 bits em um endereço da memória Flash.",
      "Armazena o valor do prescaler quando atribuído ao módulo temporizador Timer0.",
      "Sincroniza a transferência do byte de dados durante a leitura da EEPROM.",
      "Mantém o histórico dos 8 últimos saltos de sub-rotina executados pelo programa."
    ],
    "answer": "Aponta para o endereço da memória RAM que será lido ou escrito através de INDF.",
    "explanation": "Por que a resposta correta é \"Aponta para o endereço da memória RAM que será lido ou escrito através de INDF.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Aponta para o endereço da memória RAM que será lido ou escrito através de INDF.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O registrador STATUS no PIC16F877 é indispensável porque:",
    "options": [
      "Mostra o estado geral do microcontrolador e da ULA, além dos bits de seleção de banco.",
      "Contém as opções de configuração do pre-scaler e borda da interrupção externa.",
      "Armazena o byte recebido pela interface de comunicação serial assíncrona.",
      "Define se a porta D funcionará como porta digital ou porta paralela escrava.",
      "Controla a tensão de referência para os comparadores analógicos internos."
    ],
    "answer": "Mostra o estado geral do microcontrolador e da ULA, além dos bits de seleção de banco.",
    "explanation": "Por que a resposta correta é \"Mostra o estado geral do microcontrolador e da ULA, além dos bits de seleção de banco.\"? O registrador STATUS armazena as bandeiras de sinalização (Flags) da ALU: Z (Zero - sinaliza se o resultado da última operação foi zero), C (Carry - sinaliza estouro/transporte do bit 7) e DC (Digit Carry - transporte do bit 3 para o 4 em operações BCD), além dos bits de seleção de banco de memória RAM."
  },
  {
    "question": "A chave geral 'GIE (INTCON)' tem por missão no PIC16F877:",
    "options": [
      "Permitir ou bloquear globalmente todas as interrupções habilitadas individualmente no sistema.",
      "Selecionar se a interrupção externa no pino RB0 ocorrerá na borda de subida ou descida.",
      "Limpar todos os registradores da memória RAM em caso de falha na alimentação.",
      "Ativar a verificação contínua de transbordo no contador temporizador Timer 2.",
      "Desligar os periféricos analógicos para reduzir o consumo no modo Sleep."
    ],
    "answer": "Permitir ou bloquear globalmente todas as interrupções habilitadas individualmente no sistema.",
    "explanation": "Por que a resposta correta é \"Permitir ou bloquear globalmente todas as interrupções habilitadas individualmente no sistema.\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "O registrador INTCON centraliza no microcontrolador:",
    "options": [
      "O estado geral e o controle das principais interrupções (como GIE, PEIE, T0IE e INTE).",
      "A configuração da direção dos pinos de todas as 5 portas de I/O digitais.",
      "A seleção de qual canal analógico será convertido em palavra digital de 10 bits.",
      "O armazenamento temporário dos dados transmitidos pelas portas seriais I2C e SPI.",
      "O controle de acesso simultâneo às páginas de memória Flash e EEPROM de dados."
    ],
    "answer": "O estado geral e o controle das principais interrupções (como GIE, PEIE, T0IE e INTE).",
    "explanation": "Por que a resposta correta é \"O estado geral e o controle das principais interrupções (como GIE, PEIE, T0IE e INTE).\"? O registrador INTCON centraliza a habilitação e o monitoramento das interrupções do PIC, possuindo a chave geral GIE (Global Interrupt Enable), as chaves individuais de cada fonte (como T0IE para transbordo do TMR0 e INTE para o pino externo RB0/INT) e suas respectivas bandeiras de sinalização (T0IF, INTF)."
  },
  {
    "question": "A combinação dos '11 bits do Opcode + bits <4:3> do PCLATH' é utilizada para:",
    "options": [
      "Formar o endereço completo de 13 bits carregado no PC durante uma instrução GOTO.",
      "Calcular o endereço de retorno da sub-rotina armazenado no topo da pilha.",
      "Endereçar de forma indireta qualquer registrador localizado no banco 3 da RAM.",
      "Determinar o tempo exato de atraso gerado pela instrução de temporização NOP.",
      "Verificar a integridade dos dados na memória não-volátil após um ciclo de gravação."
    ],
    "answer": "Formar o endereço completo de 13 bits carregado no PC durante uma instrução GOTO.",
    "explanation": "Por que a resposta correta é \"Formar o endereço completo de 13 bits carregado no PC durante uma instrução GOTO.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Formar o endereço completo de 13 bits carregado no PC durante uma instrução GOTO.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O endereço recuperado do Topo da Pilha (TOS) é automaticamente inserido no Contador de Programa (PC) quando:",
    "options": [
      "O processador executa o retorno de uma sub-rotina (instrução RETURN ou RETLW) ou interrupção (RETFIE).",
      "Uma instrução de desvio incondicional GOTO é encontrada no meio do loop principal.",
      "O temporizador Watchdog atinge seu tempo limite durante o modo de suspensão Sleep.",
      "O pino de reset master clear (MCLR) é levado a nível baixo por um circuito externo.",
      "O programador realiza uma leitura indireta na memória RAM utilizando o registro INDF."
    ],
    "answer": "O processador executa o retorno de uma sub-rotina (instrução RETURN ou RETLW) ou interrupção (RETFIE).",
    "explanation": "Por que a resposta correta é \"O processador executa o retorno de uma sub-rotina (instrução RETURN ou RETLW) ou interrupção (RETFIE).\"? O Contador de Programa (PC - Program Counter) é o registrador que aponta continuamente para o endereço de memória da próxima instrução a ser buscada (fetch) e executada pela CPU. É ele quem comanda o fluxo sequencial do código e executa os desvios (instruções GOTO, CALL e saltos condicionais)."
  },
  {
    "question": "A operação do PORTD como Porta Paralela Escrava (PSP) de 8 bits é controlada e habilitada por bits situados em qual registrador?",
    "options": [
      "TRISE.",
      "TRISD.",
      "PORTD.",
      "OPTION_REG.",
      "INTCON."
    ],
    "answer": "TRISE.",
    "explanation": "Por que a resposta correta é \"TRISE.\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"TRISE.\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O PORTB destaca-se entre os demais portos digitais do PIC16F877 pela habilidade de:",
    "options": [
      "Usar resistores de pull-up internos ativáveis por software (via bit /RBPU no OPTION_REG).",
      "Ser o único porto capaz de gerar saídas analógicas verdadeiras com conversor D/A.",
      "Fornecer correntes de saída de até 500mA por pino para acionamento direto de relés.",
      "Operar de forma assíncrona com clock triplo em relação à frequência principal da ULA.",
      "Dispensar totalmente o uso de registradores TRIS para definir a direção de seus pinos."
    ],
    "answer": "Usar resistores de pull-up internos ativáveis por software (via bit /RBPU no OPTION_REG).",
    "explanation": "Por que a resposta correta é \"Usar resistores de pull-up internos ativáveis por software (via bit /RBPU no OPTION_REG).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"Usar resistores de pull-up internos ativáveis por software (via bit /RBPU no OPTION_REG).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O valor TRISC = 11110000b aplicado ao registrador de direção da porta C estabelece que:",
    "options": [
      "A metade inferior (RC0 a RC3) opera como SAÍDA (0) e a metade superior (RC4 a RC7) opera como ENTRADA (1).",
      "A metade inferior (RC0 a RC3) opera como ENTRADA (1) e a metade superior (RC4 a RC7) opera como SAÍDA (0).",
      "Todos os pinos do PORTC ficam desabilitados e em modo de baixo consumo tri-state.",
      "Os pinos analógicos associados ao PORTC são desligados e convertidos em I/O digital.",
      "Os canais de comunicação serial I2C e SPI assumem o controle prioritário dos pinos."
    ],
    "answer": "A metade inferior (RC0 a RC3) opera como SAÍDA (0) e a metade superior (RC4 a RC7) opera como ENTRADA (1).",
    "explanation": "Por que a resposta correta é \"A metade inferior (RC0 a RC3) opera como SAÍDA (0) e a metade superior (RC4 a RC7) opera como ENTRADA (1).\"? A arquitetura RISC (Reduced Instruction Set Computer) designa processadores que possuem um conjunto reduzido de instruções simples e otimizadas para execução rápida em 1 ciclo de instrução (como nos PICs, que têm apenas de 35 a 75 instruções), diferentemente da arquitetura CISC com instruções complexas de múltiplos ciclos."
  },
  {
    "question": "O motivo técnico para um LED ligado entre RB4 e o GND (que acende em nível alto) permanecer apagado quando TRISB = 45h (0100 0101b) e PORTB = AAh (1010 1010b) é que:",
    "options": [
      "O bit 4 no TRISB vale 0 (portanto RB4 é saída), mas o bit 4 no PORTB vale 0 (o pino recebe nível baixo 0V).",
      "O pino RB4 foi configurado no TRISB como entrada digital de alta impedância (nível 1).",
      "O sinal aplicado no PORTB em AAh força todos os pinos de saída a entrarem em proteção de sobrecorrente.",
      "O oscilador à cristal está desabilitado, impedindo a atualização do latch de saída da porta.",
      "O resistor de pull-up interno do PORTB foi desativado, impedindo a condução do LED."
    ],
    "answer": "O bit 4 no TRISB vale 0 (portanto RB4 é saída), mas o bit 4 no PORTB vale 0 (o pino recebe nível baixo 0V).",
    "explanation": "Por que a resposta correta é \"O bit 4 no TRISB vale 0 (portanto RB4 é saída), mas o bit 4 no PORTB vale 0 (o pino recebe nível baixo 0V).\"? Conforme a Apostila de Microcontroladores (Apostila EE 2006-0423), a alternativa \"O bit 4 no TRISB vale 0 (portanto RB4 é saída), mas o bit 4 no PORTB vale 0 (o pino recebe nível baixo 0V).\" reflete com exatidão a especificação, funcionamento elétrico ou organização de memória da arquitetura PIC, justificando plenamente essa escolha e descartando as demais alternativas por incongruência técnica."
  },
  {
    "question": "O registrador EEDATA cumpre qual papel fundamental ao final de uma rotina de leitura da memória EEPROM de dados?",
    "options": [
      "Armazena o byte lido da célula da EEPROM, disponibilizando-o para leitura do processador.",
      "Contém o endereço da memória EEPROM que o processador acabou de consultar no ciclo.",
      "Emite o flag de interrupção informando que a tensão na memória estabilizou após a leitura.",
      "Apaga automaticamente o endereço anterior no registrador EEADR para evitar vazamento de dados.",
      "Zera o bit RD no registrador EECON1 para sinalizar que o barramento está liberado."
    ],
    "answer": "Armazena o byte lido da célula da EEPROM, disponibilizando-o para leitura do processador.",
    "explanation": "Por que a resposta correta é \"Armazena o byte lido da célula da EEPROM, disponibilizando-o para leitura do processador.\"? A memória EEPROM interna de dados diferencia-se da RAM por ser não-volátil: ela preserva suas variáveis intactas mesmo após o microcontrolador ser desligado (power-off). É ideal para salvar configurações do usuário, calibrações de sensores, recordes ou históricos (datalogging)."
  }
];
