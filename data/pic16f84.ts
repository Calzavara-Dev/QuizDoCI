import type { Question } from "../types/question";

export const pic16f84Questions: Question[] = [
  {
    "question": "Linha 1: LIST P=PIC16F84 - Qual é a real utilidade da diretiva LIST P=PIC16F84?",
    "options": [
      "Define que a velocidade de clock do circuito será alta.",
      "Informa ao software montador (Assembler) qual é o modelo exato do microcontrolador para o qual estamos programando.",
      "Aloca espaço de memória para as variáveis do programa.",
      "Lista os erros do código durante a compilação."
    ],
    "answer": "Informa ao software montador (Assembler) qual é o modelo exato do microcontrolador para o qual estamos programando."
  },
  {
    "question": "Linha 2: INCLUDE <P16F84.INC> - O que o código faz ao encontrar o comando INCLUDE?",
    "options": [
      "Inclui uma rotina pronta de temporizador (timer).",
      "Chama um arquivo externo padronizado que já contém o nome e o mapeamento de endereços de todos os registradores especiais do PIC (ex: PORTA, TRISA, STATUS).",
      "Aciona um sistema interno de biblioteca de LEDs.",
      "Pula para a configuração das portas de I/O."
    ],
    "answer": "Chama um arquivo externo padronizado que já contém o nome e o mapeamento de endereços de todos os registradores especiais do PIC (ex: PORTA, TRISA, STATUS)."
  },
  {
    "question": "Linha 4: BSF STATUS,5 - O que essa instrução muda fisicamente no microcontrolador?",
    "options": [
      "Setar (colocar em 1) o bit 5 do registrador STATUS seleciona o Banco 1 da memória RAM, permitindo o acesso aos registradores de controle TRIS.",
      "Define o pino 5 da porta principal como nível alto.",
      "Limpa a memória interna do chip (Clear Status).",
      "Prepara a porta para receber dados."
    ],
    "answer": "Setar (colocar em 1) o bit 5 do registrador STATUS seleciona o Banco 1 da memória RAM, permitindo o acesso aos registradores de controle TRIS."
  },
  {
    "question": "Linha 5: CLRF TRISB - Ao usar o comando CLRF (Clear F) no TRISB, qual é a consequência nos pinos físicos do PIC?",
    "options": [
      "Desliga fisicamente os resistores de pull-up do PORTB.",
      "Zera os registradores TRISB, o que configura todos os 8 pinos da porta B (PORTB) como saídas.",
      "Configura o PORTB inteiramente como porta de entradas.",
      "Zera a saída de tensão para apagar os LEDs."
    ],
    "answer": "Zera os registradores TRISB, o que configura todos os 8 pinos da porta B (PORTB) como saídas."
  },
  {
    "question": "Linhas 6 e 7: MOVLW 0x1F / MOVWF TRISA - A linha 6 carrega 0x1F (em binário: 00011111) em W, e a linha 7 passa esse valor para TRISA. O que isso determina na configuração do PORTA?",
    "options": [
      "Acende os 5 primeiros LEDs ligados no PORTA.",
      "Atribui nível lógico 1, ou seja, configura os pinos RA0 a RA4 como entradas (Inputs).",
      "Atribui nível lógico 0, configurando o PORTA inteiramente como saída.",
      "Libera o PORTA para uso como conversor analógico-digital."
    ],
    "answer": "Atribui nível lógico 1, ou seja, configura os pinos RA0 a RA4 como entradas (Inputs)."
  },
  {
    "question": "Linha 8: BCF STATUS,5 - Após configurar os TRIS, usamos o BCF (Bit Clear F). Por quê?",
    "options": [
      "Para limpar qualquer erro ocorrido no setup.",
      "Para limpar para 0 o bit 5 do STATUS, retornando o PIC ao Banco 0 de memória para manipular diretamente as saídas dos PORTs.",
      "Para resetar o microcontrolador via software.",
      "Para desligar o bit de configuração e iniciar a contagem."
    ],
    "answer": "Para limpar para 0 o bit 5 do STATUS, retornando o PIC ao Banco 0 de memória para manipular diretamente as saídas dos PORTs."
  },
  {
    "question": "Linha 10: PRESS1 BTFSC PORTA,4 - Qual teste lógico está acontecendo no comando BTFSC?",
    "options": [
      "Se o pino 4 do PORTA estiver em nível 1 (Alto), pula a próxima linha.",
      "Se o pino 4 do PORTA estiver em nível 0 (Clear - apertado), pula a próxima linha (o GOTO), avançando no código.",
      "Inverte o bit 4 do PORTA para mudar seu estado.",
      "Copia o bit 4 do PORTA para o bit CARRY do Status."
    ],
    "answer": "Se o pino 4 do PORTA estiver em nível 0 (Clear - apertado), pula a próxima linha (o GOTO), avançando no código."
  },
  {
    "question": "Linha 11: GOTO PRESS1 - Qual é o comportamento gerado se a condição da linha 10 for falsa (botão não apertado)?",
    "options": [
      "O código trava para sempre em um erro.",
      "Executa o GOTO, retornando para PRESS1, criando um laço (loop) infinito até o botão ser pressionado.",
      "Pula para a rotina de encerramento do código.",
      "Vai acender a luz vermelha de erro."
    ],
    "answer": "Executa o GOTO, retornando para PRESS1, criando um laço (loop) infinito até o botão ser pressionado."
  },
  {
    "question": "Linhas 12 e 13: MOVLW 0xAA / MOVWF PORTB - Lembrando que 0xAA é 10101010 em binário, o que a linha 13 faz fisicamente no circuito?",
    "options": [
      "Inverte as chaves de entrada.",
      "Passa esse padrão para o PORTB, acendendo metade dos LEDs e apagando a outra metade, de forma intercalada.",
      "Soma 0xAA ao valor antigo do PORTB.",
      "Salva 0xAA na memória interna EEPROM."
    ],
    "answer": "Passa esse padrão para o PORTB, acendendo metade dos LEDs e apagando a outra metade, de forma intercalada."
  },
  {
    "question": "Linha 14 e 15: SPRESS1 BTFSS PORTA,4 / GOTO SPRESS1 - Agora usamos BTFSS em vez de BTFSC. O que essa rotina de duas linhas (anti-repique) garante?",
    "options": [
      "Aguarda o botão ser solto, pois só vai pular o GOTO caso o pino RA4 volte para nível alto 1 (Set).",
      "Aguarda o botão ser pressionado mais forte.",
      "Reinicia o loop inicial do botão (PRESS1).",
      "Configura RA4 como saída temporária."
    ],
    "answer": "Aguarda o botão ser solto, pois só vai pular o GOTO caso o pino RA4 volte para nível alto 1 (Set)."
  },
  {
    "question": "Linha 16: COMF PORTB - Imediatamente após constatar que o botão foi solto, chama-se COMF PORTB. O que ocorre?",
    "options": [
      "Desliga totalmente a energia do PORTB.",
      "Compara se o W é igual ao PORTB.",
      "Inverte (complementa) os estados de todos os pinos de saída, invertendo assim o padrão dos LEDs acesos.",
      "Desfaz a ação anterior (0xAA) tornando-a 0x00."
    ],
    "answer": "Inverte (complementa) os estados de todos os pinos de saída, invertendo assim o padrão dos LEDs acesos."
  },
  {
    "question": "Linhas 17 e 18: PRESS2 BTFSC PORTA,4 / GOTO PRESS2 - O que essas duas linhas estão aguardando?",
    "options": [
      "O terceiro pressionar do botão.",
      "Um segundo toque (botão ser pressionado de novo) para iniciar o funcionamento final (loop infinito).",
      "O término do tempo de delay.",
      "Que os LEDs queimem."
    ],
    "answer": "Um segundo toque (botão ser pressionado de novo) para iniciar o funcionamento final (loop infinito)."
  },
  {
    "question": "Linha 19: ETERNO COMF PORTB - O rótulo ETERNO associado a essa inversão de LEDs (COMF) indica o início de quê?",
    "options": [
      "Do programa principal.",
      "Da rotina de temporizador interno.",
      "De um laço que vai manter os LEDs invertendo seu estado para gerar o efeito \"pisca-pisca\".",
      "Da checagem infinita do estado do botão 2."
    ],
    "answer": "De um laço que vai manter os LEDs invertendo seu estado para gerar o efeito \"pisca-pisca\"."
  },
  {
    "question": "Linha 20: CALL DELAY - Em relação ao fluxo de execução, o que o microcontrolador faz ao ler CALL?",
    "options": [
      "Ele desvia incondicionalmente sem se lembrar de onde estava.",
      "Salva o endereço de retorno (onde ele estava) na memória Stack e salta para executar as linhas da rotina \"DELAY\".",
      "Interrompe todas as ações elétricas do circuito.",
      "Exige a entrada de dados numéricos antes de prosseguir."
    ],
    "answer": "Salva o endereço de retorno (onde ele estava) na memória Stack e salta para executar as linhas da rotina \"DELAY\"."
  },
  {
    "question": "Linha 21: GOTO ETERNO - A linha logo após retornar do delay é GOTO ETERNO. Qual o impacto de desenhar a lógica dessa maneira?",
    "options": [
      "O PIC trava após uma única volta.",
      "A inversão e a pausa se repetem em um ciclo infinito, garantindo o efeito ininterrupto das luzes.",
      "Ele espera um terceiro pressionamento do botão para continuar.",
      "O microcontrolador será desligado ao final."
    ],
    "answer": "A inversão e a pausa se repetem em um ciclo infinito, garantindo o efeito ininterrupto das luzes."
  },
  {
    "question": "Linhas 24 a 29: (MOVLW / MOVWF 0CH, 0DH, 0EH) - Vemos o carregamento de variáveis como .252 (decimal) e .6 em endereços como 0x0C, 0x0D, 0x0E (Registradores GPR). O que são essas variáveis no contexto desta rotina?",
    "options": [
      "O valor exato em milissegundos que o timer contará diretamente por hardware.",
      "Os contadores dos 3 laços de repetição (\"for loops\") encaixados que, juntos, farão o processador perder tempo.",
      "Pinos virtuais do PIC sendo configurados.",
      "Constantes matemáticas de conversão AD."
    ],
    "answer": "Os contadores dos 3 laços de repetição (\"for loops\") encaixados que, juntos, farão o processador perder tempo."
  },
  {
    "question": "Linha 30: LOOP1 NOP - A instrução NOP (No Operation) não altera registradores. Qual é a utilidade dela dentro de LOOP1?",
    "options": [
      "Indicar ao software o início de uma macro.",
      "Ativar a limpeza de memória da porta.",
      "Consumir exatamente 1 ciclo de instrução (no caso de cristal de 4MHz, 1 microssegundo) apenas para \"ajustar/gastar tempo\" na contabilidade do laço de repetição.",
      "Reiniciar o Watchdog Timer."
    ],
    "answer": "Consumir exatamente 1 ciclo de instrução (no caso de cristal de 4MHz, 1 microssegundo) apenas para \"ajustar/gastar tempo\" na contabilidade do laço de repetição."
  },
  {
    "question": "Linha 31: INCFSZ 0EH - A instrução INCFSZ manipula a contagem. O que ocorre nesta linha especificamente?",
    "options": [
      "Subtrai 1 do registrador 0x0E e pula quando atinge 0.",
      "Incrementa (+1) o conteúdo do registrador 0x0E. Se o resultado atingir o limite (gerar overflow de 255 para 0), ele pula o GOTO da linha abaixo.",
      "Substitui o registrador 0x0E pelo registrador STATUS.",
      "Compara se 0x0E é menor que W."
    ],
    "answer": "Incrementa (+1) o conteúdo do registrador 0x0E. Se o resultado atingir o limite (gerar overflow de 255 para 0), ele pula o GOTO da linha abaixo."
  },
  {
    "question": "Linha 32, 34 e 36: GOTO LOOP1 / LOOP2 / LOOP3 - O que acontece sempre que o comando INCFSZ não atinge o valor zero?",
    "options": [
      "O PIC executa a linha abaixo (um desses GOTO), o que o faz retornar ao início de seu respectivo laço, repetindo o incremento e gastando mais tempo.",
      "O código trava indicando erro no Stack.",
      "A rotina encerra imediatamente pulando para o RETURN.",
      "Acelera o relógio do microcontrolador temporariamente."
    ],
    "answer": "O PIC executa a linha abaixo (um desses GOTO), o que o faz retornar ao início de seu respectivo laço, repetindo o incremento e gastando mais tempo."
  },
  {
    "question": "Linha 37: RETURN - O que o comando RETURN faz de diferente de um simples GOTO?",
    "options": [
      "Ele finaliza o programa e trava o chip.",
      "Ele lê a última posição gravada na memória RAM e deleta o dado.",
      "Ele busca na memória Stack o endereço de retorno guardado lá em cima na linha 20 (CALL) e desvia a execução de volta exatamente para a linha 21.",
      "Ele inverte a execução de hardware do PIC."
    ],
    "answer": "Ele busca na memória Stack o endereço de retorno guardado lá em cima na linha 20 (CALL) e desvia a execução de volta exatamente para a linha 21."
  },
  {
    "question": "Linha 38: END - O que a diretiva END sinaliza?",
    "options": [
      "Envia um sinal para o pino de Reset físico.",
      "Desliga a energia elétrica do microcontrolador.",
      "Indica ao montador (software) que o programa fonte terminou e nenhuma linha abaixo dela deve ser traduzida para código de máquina (hexadecimal).",
      "Reinicia o loop principal do programa."
    ],
    "answer": "Indica ao montador (software) que o programa fonte terminou e nenhuma linha abaixo dela deve ser traduzida para código de máquina (hexadecimal)."
  }
];
