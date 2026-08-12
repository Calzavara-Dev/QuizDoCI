import json
import re

text = """PARTE 1: Diretivas e Configurações (Linhas 1 a 8)
Linha 1: LIST P=PIC16F84 Q1. Qual é a real utilidade da diretiva LIST P=PIC16F84? a) Define que a velocidade de clock do circuito será alta. b) Informa ao software montador (Assembler) qual é o modelo exato do microcontrolador para o qual estamos programando. c) Aloca espaço de memória para as variáveis do programa. d) Lista os erros do código durante a compilação.

Linha 2: INCLUDE <P16F84.INC> Q2. O que o código faz ao encontrar o comando INCLUDE? a) Inclui uma rotina pronta de temporizador (timer). b) Chama um arquivo externo padronizado que já contém o nome e o mapeamento de endereços de todos os registradores especiais do PIC (ex: PORTA, TRISA, STATUS). c) Aciona um sistema interno de biblioteca de LEDs. d) Pula para a configuração das portas de I/O.

Linha 4: BSF STATUS,5 Q3. O que essa instrução muda fisicamente no microcontrolador? a) Setar (colocar em 1) o bit 5 do registrador STATUS seleciona o Banco 1 da memória RAM, permitindo o acesso aos registradores de controle TRIS. b) Define o pino 5 da porta principal como nível alto. c) Limpa a memória interna do chip (Clear Status). d) Prepara a porta para receber dados.

Linha 5: CLRF TRISB Q4. Ao usar o comando CLRF (Clear F) no TRISB, qual é a consequência nos pinos físicos do PIC? a) Desliga fisicamente os resistores de pull-up do PORTB. b) Zera os registradores TRISB, o que configura todos os 8 pinos da porta B (PORTB) como saídas. c) Configura o PORTB inteiramente como porta de entradas. d) Zera a saída de tensão para apagar os LEDs.

Linhas 6 e 7: MOVLW 0x1F / MOVWF TRISA Q5. A linha 6 carrega 0x1F (em binário: 00011111) em W, e a linha 7 passa esse valor para TRISA. O que isso determina na configuração do PORTA? a) Acende os 5 primeiros LEDs ligados no PORTA. b) Atribui nível lógico 1, ou seja, configura os pinos RA0 a RA4 como entradas (Inputs). c) Atribui nível lógico 0, configurando o PORTA inteiramente como saída. d) Libera o PORTA para uso como conversor analógico-digital.

Linha 8: BCF STATUS,5 Q6. Após configurar os TRIS, usamos o BCF (Bit Clear F). Por quê? a) Para limpar qualquer erro ocorrido no setup. b) Para limpar para 0 o bit 5 do STATUS, retornando o PIC ao Banco 0 de memória para manipular diretamente as saídas dos PORTs. c) Para resetar o microcontrolador via software. d) Para desligar o bit de configuração e iniciar a contagem.

Gabarito Parte 1: 1) b | 2) b | 3) a | 4) b | 5) b | 6) b

PARTE 2: Lógica de Botões (Linhas 10 a 16)
Linha 10: PRESS1 BTFSC PORTA,4 Q7. Qual teste lógico está acontecendo no comando BTFSC? a) Se o pino 4 do PORTA estiver em nível 1 (Alto), pula a próxima linha. b) Se o pino 4 do PORTA estiver em nível 0 (Clear - apertado), pula a próxima linha (o GOTO), avançando no código. c) Inverte o bit 4 do PORTA para mudar seu estado. d) Copia o bit 4 do PORTA para o bit CARRY do Status.

Linha 11: GOTO PRESS1 Q8. Qual é o comportamento gerado se a condição da linha 10 for falsa (botão não apertado)? a) O código trava para sempre em um erro. b) Executa o GOTO, retornando para PRESS1, criando um laço (loop) infinito até o botão ser pressionado. c) Pula para a rotina de encerramento do código. d) Vai acender a luz vermelha de erro.

Linhas 12 e 13: MOVLW 0xAA / MOVWF PORTB Q9. Lembrando que 0xAA é 10101010 em binário, o que a linha 13 faz fisicamente no circuito? a) Inverte as chaves de entrada. b) Passa esse padrão para o PORTB, acendendo metade dos LEDs e apagando a outra metade, de forma intercalada. c) Soma 0xAA ao valor antigo do PORTB. d) Salva 0xAA na memória interna EEPROM.

Linha 14 e 15: SPRESS1 BTFSS PORTA,4 / GOTO SPRESS1 Q10. Agora usamos BTFSS em vez de BTFSC. O que essa rotina de duas linhas (anti-repique) garante? a) Aguarda o botão ser solto, pois só vai pular o GOTO caso o pino RA4 volte para nível alto 1 (Set). b) Aguarda o botão ser pressionado mais forte. c) Reinicia o loop inicial do botão (PRESS1). d) Configura RA4 como saída temporária.

Linha 16: COMF PORTB Q11. Imediatamente após constatar que o botão foi solto, chama-se COMF PORTB. O que ocorre? a) Desliga totalmente a energia do PORTB. b) Compara se o W é igual ao PORTB. c) Inverte (complementa) os estados de todos os pinos de saída, invertendo assim o padrão dos LEDs acesos. d) Desfaz a ação anterior (0xAA) tornando-a 0x00.

Gabarito Parte 2: 7) b | 8) b | 9) b | 10) a | 11) c

PARTE 3: Segunda Ação e Loop Eterno (Linhas 17 a 21)
Linhas 17 e 18: PRESS2 BTFSC PORTA,4 / GOTO PRESS2 Q12. O que essas duas linhas estão aguardando? a) O terceiro pressionar do botão. b) Um segundo toque (botão ser pressionado de novo) para iniciar o funcionamento final (loop infinito). c) O término do tempo de delay. d) Que os LEDs queimem.

Linha 19: ETERNO COMF PORTB Q13. O rótulo ETERNO associado a essa inversão de LEDs (COMF) indica o início de quê? a) Do programa principal. b) Da rotina de temporizador interno. c) De um laço que vai manter os LEDs invertendo seu estado para gerar o efeito "pisca-pisca". d) Da checagem infinita do estado do botão 2.

Linha 20: CALL DELAY Q14. Em relação ao fluxo de execução, o que o microcontrolador faz ao ler CALL? a) Ele desvia incondicionalmente sem se lembrar de onde estava. b) Salva o endereço de retorno (onde ele estava) na memória Stack e salta para executar as linhas da rotina "DELAY". c) Interrompe todas as ações elétricas do circuito. d) Exige a entrada de dados numéricos antes de prosseguir.

Linha 21: GOTO ETERNO Q15. A linha logo após retornar do delay é GOTO ETERNO. Qual o impacto de desenhar a lógica dessa maneira? a) O PIC trava após uma única volta. b) A inversão e a pausa se repetem em um ciclo infinito, garantindo o efeito ininterrupto das luzes. c) Ele espera um terceiro pressionamento do botão para continuar. d) O microcontrolador será desligado ao final.

Gabarito Parte 3: 12) b | 13) c | 14) b | 15) b

PARTE 4: Rotina de Atraso (Delay) e Final (Linhas 23 a 38)
Linhas 24 a 29: (MOVLW / MOVWF 0CH, 0DH, 0EH) Q16. Vemos o carregamento de variáveis como .252 (decimal) e .6 em endereços como 0x0C, 0x0D, 0x0E (Registradores GPR). O que são essas variáveis no contexto desta rotina? a) O valor exato em milissegundos que o timer contará diretamente por hardware. b) Os contadores dos 3 laços de repetição ("for loops") encaixados que, juntos, farão o processador perder tempo. c) Pinos virtuais do PIC sendo configurados. d) Constantes matemáticas de conversão AD.

Linha 30: LOOP1 NOP Q17. A instrução NOP (No Operation) não altera registradores. Qual é a utilidade dela dentro de LOOP1? a) Indicar ao software o início de uma macro. b) Ativar a limpeza de memória da porta. c) Consumir exatamente 1 ciclo de instrução (no caso de cristal de 4MHz, 1 microssegundo) apenas para "ajustar/gastar tempo" na contabilidade do laço de repetição. d) Reiniciar o Watchdog Timer.

Linha 31: INCFSZ 0EH Q18. A instrução INCFSZ manipula a contagem. O que ocorre nesta linha especificamente? a) Subtrai 1 do registrador 0x0E e pula quando atinge 0. b) Incrementa (+1) o conteúdo do registrador 0x0E. Se o resultado atingir o limite (gerar overflow de 255 para 0), ele pula o GOTO da linha abaixo. c) Substitui o registrador 0x0E pelo registrador STATUS. d) Compara se 0x0E é menor que W.

Linha 32, 34 e 36: GOTO LOOP1 / LOOP2 / LOOP3 Q19. O que acontece sempre que o comando INCFSZ não atinge o valor zero? a) O PIC executa a linha abaixo (um desses GOTO), o que o faz retornar ao início de seu respectivo laço, repetindo o incremento e gastando mais tempo. b) O código trava indicando erro no Stack. c) A rotina encerra imediatamente pulando para o RETURN. d) Acelera o relógio do microcontrolador temporariamente.

Linha 37: RETURN Q20. O que o comando RETURN faz de diferente de um simples GOTO? a) Ele finaliza o programa e trava o chip. b) Ele lê a última posição gravada na memória RAM e deleta o dado. c) Ele busca na memória Stack o endereço de retorno guardado lá em cima na linha 20 (CALL) e desvia a execução de volta exatamente para a linha 21. d) Ele inverte a execução de hardware do PIC.

Linha 38: END Q21. O que a diretiva END sinaliza? a) Envia um sinal para o pino de Reset físico. b) Desliga a energia elétrica do microcontrolador. c) Indica ao montador (software) que o programa fonte terminou e nenhuma linha abaixo dela deve ser traduzida para código de máquina (hexadecimal). d) Reinicia o loop principal do programa.

Gabarito Parte 4: 16) b | 17) c | 18) b | 19) a | 20) c | 21) c"""

gabarito = {}
questions = []

for line in text.split('\\n'):
    if line.startswith('Gabarito'):
        parts = line.split(':', 1)[1].split('|')
        for part in parts:
            qnum, ans = part.split(')')
            gabarito[qnum.strip()] = ans.strip()

for line in text.split('\\n'):
    if 'Q' in line and ' a) ' in line and ' b) ' in line:
        m = re.search(r'(Linha.*?) Q(\d+)\.\s+(.*?)\s+a\)\s+(.*?)\s+b\)\s+(.*?)\s+c\)\s+(.*?)\s+d\)\s+(.*)', line)
        if m:
            linha_text = m.group(1).strip()
            qnum = m.group(2).strip()
            qtext = m.group(3).strip()
            opt_a = m.group(4).strip()
            opt_b = m.group(5).strip()
            opt_c = m.group(6).strip()
            opt_d = m.group(7).strip()
            
            full_q = f"{linha_text} - {qtext}"
            options = [opt_a, opt_b, opt_c, opt_d]
            
            ans_letter = gabarito.get(qnum)
            ans_index = {'a': 0, 'b': 1, 'c': 2, 'd': 3}.get(ans_letter)
            
            if ans_index is not None:
                answer = options[ans_index]
                questions.append({
                    "question": full_q,
                    "options": options,
                    "answer": answer
                })

ts_content = "import type { Question } from \\"../types/question\\";\\n\\nexport const pic16f84Questions: Question[] = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\\n"

with open('g:/ERICK/src/data/pic16f84.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)
print(f"Generated {len(questions)} questions")
