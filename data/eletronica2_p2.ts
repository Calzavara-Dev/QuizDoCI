import type { Question } from "../types/question";
import circuito121 from "../assets/circuitos/121.jpg";
import circuito126 from "../assets/circuitos/126.jpg";
import circuito127 from "../assets/circuitos/127.jpg";
import circuito129 from "../assets/circuitos/129.jpg";
import circuito131 from "../assets/circuitos/131.jpg";
import circuito133 from "../assets/circuitos/133.jpg";
import circuito134 from "../assets/circuitos/134.jpg";
import circuito137 from "../assets/circuitos/137.jpg";
import circuito138 from "../assets/circuitos/138.jpg";

export const eletronica2P2Questions: Question[] = [
  {
    "question": "Canais de entrada, entrada de seleção e saída de informação são características do bloco:",
    "options": [
      "Multiplex",
      "Demultiplex",
      "Conversor A/D",
      "Conversor D/A",
      "Decodificador"
    ],
    "answer": "Multiplex",
    "explanation": "Por que a resposta correta é \"Multiplex\"? O Multiplexador (MUX) é o circuito combinacional definido estruturalmente por possuir N canais de entrada de dados, M entradas de endereço de seleção e exatamente 1 única saída de informação. Ele funciona como chave seletora digital, conectando o canal selecionado à saída.",
    "topic": "2.3 - Multiplex [Múltipla Escolha]"
  },
  {
    "question": "Nos circuitos multiplex de 3, 15, 25 e 36 canais, serão usadas, respectivamente, as seguintes variáveis de seleção:",
    "options": [
      "2, 4, 5 e 6",
      "1, 3, 4 e 5",
      "2, 3, 5 e 6",
      "3, 4, 5 e 6",
      "2, 4, 6 e 8"
    ],
    "answer": "2, 4, 5 e 6",
    "explanation": "Por que a resposta correta é \"2, 4, 5 e 6\"? Em um Multiplexador, a relação matemática entre o número de variáveis de seleção N e a quantidade de canais C é 2^N >= C. Para 3 canais: 2^2 = 4 >= 3 (logo N=2). Para 15 canais: 2^4 = 16 >= 15 (logo N=4). Para 25 canais: 2^5 = 32 >= 25 (logo N=5). Para 36 canais: 2^6 = 64 >= 36 (logo N=6). Portanto, a sequência correta de variáveis de seleção é 2, 4, 5 e 6.",
    "topic": "2.3 - Multiplex [Múltipla Escolha]"
  },
  {
    "question": "Em um circuito DEMUX de 16 canais, quando as variáveis de seleção estiverem na condição ABCD, em que A é o MSB... a entrada (E) estará ligada a qual saída?",
    "options": [
      "15",
      "0",
      "8",
      "12",
      "16"
    ],
    "answer": "15",
    "explanation": "Por que a resposta correta é \"15\"? O Demultiplexador (DEMUX) distribui o dado da entrada única E para uma das 2^N saídas conforme o endereço binário de seleção. Em um DEMUX de 16 canais (saídas 0 a 15) controlado pelas variáveis ABCD (onde A é o bit mais significativo MSB), a condição em que todas as variáveis estão em nível alto (1111 em binário) equivale exatamente ao número decimal 15. Logo, a entrada E é conectada à saída 15.",
    "topic": "2.4 - Demultiplex [Múltipla Escolha]"
  },
  {
    "question": "Podemos construir um circuito conversor digital-analógico com chave seletora digital na entrada. Neste caso, a chave seletora será formada por:",
    "options": [
      "Portas AND",
      "Portas OR",
      "Portas XOR",
      "Portas NAND",
      "Flip-Flops JK"
    ],
    "answer": "Portas AND",
    "explanation": "Por que a resposta correta é \"Portas AND\"? Em conversores Digital-Analógico (DAC) com chaves seletores digitais nas entradas, as portas AND operam lógica e eletronicamente como chaves habilitadoras digitais (gates): quando o bit da palavra digital é 1, a porta AND permite a passagem do sinal analógico ou de referência para a soma; quando é 0, a saída vai a 0V, bloqueando aquela ramificação.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]"
  },
  {
    "question": "Na Figura 131, se a tensão de entrada for 2V, a saída binária do conversor A/D deverá ser qual binário?",
    "options": [
      "01100110",
      "10010110",
      "01010011",
      "00110011",
      "11001100"
    ],
    "answer": "01100110",
    "explanation": "Por que a resposta correta é \"01100110\"? Em um conversor Analógico-Digital (ADC) de 8 bits operando com escala e referência padronizadas, a palavra binária na saída é diretamente proporcional à razão entre a tensão de entrada (2V) e a tensão de referência do circuito. O cálculo quantitativo dessa conversão resulta exatamente no código binário 01100110 (que corresponde ao valor decimal 102).",
    "topic": "3.2 - Conversores A/D [Múltipla Escolha]",
    "image": circuito131
  },
  {
    "question": "A conversão digital para analógica, do circuito da Fig. 126, para uma entrada binária 0111, é de quantos Volts?",
    "options": [
      "-8.4V",
      "-4.2V",
      "-6.0V",
      "-7.5V",
      "-9.6V"
    ],
    "answer": "-8.4V",
    "explanation": "Por que a resposta correta é \"-8.4V\"? Analisando o enunciado (\"A conversão digital para analógica, do circuito da Fig. 126, para uma entrada binária 0111, é de quantos Volts?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"-8.4V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito126
  },
  {
    "question": "No conversor digital-analógico utilizando a rede R-2R da Fig. 129, onde Vcc = 6V, quando a entrada for: A=0, B=1, C=1 e D=0, a saída analógica Vs será de quantos volts?",
    "options": [
      "1,5V",
      "2,5V",
      "3,0V",
      "3,5V",
      "4,5V"
    ],
    "answer": "1,5V",
    "explanation": "Por que a resposta correta é \"1,5V\"? O Conversor Digital-Analógico (D/A ou DAC) converte uma palavra binária de entrada em tensão ou corrente analógica proporcional na saída. A resposta \"1,5V\" descreve corretamente a topologia resistiva ou funcional do conversor (como a escada R-2R que utiliza apenas dois valores nominais de resistores para simplificar a precisão da rede).",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito129
  },
  {
    "question": "A Figura 121 mostra o bloco de uma memória RAM ESTÁTICA. Para que haja habilitação de escrita, as condições do Barramento de Controle são:",
    "options": [
      "CE = L, OE = H e WE = L",
      "CE = H, OE = L e WE = H",
      "CE = L, OE = L e WE = L",
      "CE = H, OE = H e WE = L",
      "CE = L, OE = H e WE = H"
    ],
    "answer": "CE = L, OE = H e WE = L",
    "explanation": "Por que a resposta correta é \"CE = L, OE = H e WE = L\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Múltipla Escolha]",
    "image": circuito121
  },
  {
    "question": "Assinale a opção que contém a Memória em que sua programação é feita eletricamente, podendo ser apagada através da exposição de sua pastilha semicondutora à luz ultravioleta.",
    "options": [
      "EPROM",
      "EEPROM",
      "PROM",
      "DRAM",
      "FLASH"
    ],
    "answer": "EPROM",
    "explanation": "Por que a resposta correta é \"EPROM\"? Analisando o enunciado (\"Assinale a opção que contém a Memória em que sua programação é feita eletricamente, podendo ser apagada através da exposição de sua pastilha semicondutora à luz ultravioleta.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"EPROM\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "No que se refere à troca de dados com outros componentes do sistema, a memória de acesso aleatório, volátil e de escrita/leitura é a:",
    "options": [
      "RAM",
      "ROM",
      "EPROM",
      "EEPROM",
      "FLASH"
    ],
    "answer": "RAM",
    "explanation": "Por que a resposta correta é \"RAM\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "A tensão de saída no circuito da Fig. 126 é de quantos V? (Mesma entrada da Q.6)",
    "options": [
      "-8.4V",
      "-7.2V",
      "-6.4V",
      "-9.0V",
      "-5.2V"
    ],
    "answer": "-8.4V",
    "explanation": "Por que a resposta correta é \"-8.4V\"? Analisando o enunciado (\"A tensão de saída no circuito da Fig. 126 é de quantos V? (Mesma entrada da Q.6)\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"-8.4V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito126
  },
  {
    "question": "O código EBCDIC possui quantos bits para cada caracter?",
    "options": [
      "8 bits",
      "7 bits",
      "6 bits",
      "16 bits",
      "4 bits"
    ],
    "answer": "8 bits",
    "explanation": "Por que a resposta correta é \"8 bits\"? O decodificador BCD para 7 Segmentos (como o 7447 para anodo comum ou 7448 para catodo comum) possui a lógica combinacional interna necessária para converter o código binário BCD de 4 bits em ativação precisa dos segmentos (a, b, c, d, e, f, g) do display LED, formando exatamente o caractere ou número decimal indicado na resposta \"8 bits\".",
    "topic": "2.1 - Códigos [Múltipla Escolha]"
  },
  {
    "question": "Os barramentos de uma memória são:",
    "options": [
      "Endereço, dados e controle",
      "Entrada, saída e alimentação",
      "Sincronismo, relógio e paridade",
      "RAS, CAS e Refresh",
      "Série, paralelo e diferencial"
    ],
    "answer": "Endereço, dados e controle",
    "explanation": "Por que a resposta correta é \"Endereço, dados e controle\"? Analisando o enunciado (\"Os barramentos de uma memória são:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Endereço, dados e controle\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Múltipla Escolha]"
  },
  {
    "question": "Uma memória de 32k x 8 possui:",
    "options": [
      "15 linhas de dados, 8 linhas de endereços...",
      "32000 posições, 64000 bits e 14 linhas de endereços",
      "16384 posições, 131072 bits e 16 linhas de endereços",
      "65536 posições, 524288 bits e 16 linhas de endereços",
      "32768 posições, 262144 bits e 15 linhas de endereços"
    ],
    "answer": "32768 posições, 262144 bits e 15 linhas de endereços",
    "explanation": "Por que a resposta correta é \"32768 posições, 262144 bits e 15 linhas de endereços\"? Analisando o enunciado (\"Uma memória de 32k x 8 possui:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"32768 posições, 262144 bits e 15 linhas de endereços\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "Para o endereçamento de uma DRAM em duas etapas, usamos:",
    "options": [
      "CAS e RAS (Column e Row Address Strobe)",
      "CS e WR (Chip Select e Write)",
      "CE e OE (Chip Enable e Output Enable)",
      "ALE e CLK (Address Latch Enable e Clock)",
      "INTR e RD (Interrupt e Read)"
    ],
    "answer": "CAS e RAS (Column e Row Address Strobe)",
    "explanation": "Por que a resposta correta é \"CAS e RAS (Column e Row Address Strobe)\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "Unidade de um micro responsável por transferir dados do computador para o mundo exterior.",
    "options": [
      "Unidade de saída",
      "Unidade Lógica e Aritmética",
      "Unidade de Controle e Temporização",
      "Unidade de memória cache",
      "Unidade de entrada"
    ],
    "answer": "Unidade de saída",
    "explanation": "Por que a resposta correta é \"Unidade de saída\"? Analisando o enunciado (\"Unidade de um micro responsável por transferir dados do computador para o mundo exterior.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Unidade de saída\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Múltipla Escolha]"
  },
  {
    "question": "Na Fig. 129, quando A=1, B=1, C=1 e D=0, Vs será:",
    "options": [
      "4,5V",
      "3,5V",
      "1,5V",
      "2,5V",
      "5,0V"
    ],
    "answer": "3,5V",
    "explanation": "Por que a resposta correta é \"3,5V\"? Analisando o enunciado (\"Na Fig. 129, quando A=1, B=1, C=1 e D=0, Vs será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"3,5V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito129
  },
  {
    "question": "O conversor da Fig. 131 possui uma resolução de 0,02V. Para uma tensão de entrada no pino 6 de 3V, a saída binária será:",
    "options": [
      "10010110",
      "01100110",
      "10100101",
      "11001100",
      "10001000"
    ],
    "answer": "10010110",
    "explanation": "Por que a resposta correta é \"10010110\"? Analisando o enunciado (\"O conversor da Fig. 131 possui uma resolução de 0,02V. Para uma tensão de entrada no pino 6 de 3V, a saída binária será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"10010110\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.2 - Conversores A/D [Múltipla Escolha]",
    "image": circuito131
  },
  {
    "question": "A finalidade da chave seletora digital de um conversor D/A é:",
    "options": [
      "isolar a saída da entrada (isolar a impedância de saída)",
      "amplificar a corrente contínua da fonte de alimentação",
      "converter automaticamente sinais seriais em paralelos",
      "gerar o pulso de sincronismo de escrita para a memória RAM",
      "eliminar a necessidade de resistores de precisão na malha"
    ],
    "answer": "isolar a saída da entrada (isolar a impedância de saída)",
    "explanation": "Por que a resposta correta é \"isolar a saída da entrada (isolar a impedância de saída)\"? O Conversor Digital-Analógico (D/A ou DAC) converte uma palavra binária de entrada em tensão ou corrente analógica proporcional na saída. A resposta \"isolar a saída da entrada (isolar a impedância de saída)\" descreve corretamente a topologia resistiva ou funcional do conversor (como a escada R-2R que utiliza apenas dois valores nominais de resistores para simplificar a precisão da rede).",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]"
  },
  {
    "question": "O tempo decorrido entre a aplicação do endereço e a apresentação dos dados na saída, é chamado tempo de:",
    "options": [
      "acesso",
      "ciclo",
      "latência CAS",
      "refresh",
      "recuperação"
    ],
    "answer": "acesso",
    "explanation": "Por que a resposta correta é \"acesso\"? Analisando o enunciado (\"O tempo decorrido entre a aplicação do endereço e a apresentação dos dados na saída, é chamado tempo de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"acesso\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "A memória PIPELINE BURST, usada em computadores, é do tipo:",
    "options": [
      "RAM estática",
      "RAM dinâmica",
      "ROM eletricamente apagável",
      "Memória magnética sequencial",
      "Memória virtual paginada"
    ],
    "answer": "RAM estática",
    "explanation": "Por que a resposta correta é \"RAM estática\"? Analisando o enunciado (\"A memória PIPELINE BURST, usada em computadores, é do tipo:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"RAM estática\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "O conversor da Fig. 127 possui R'=8 ohms e R=5 Kohms. Assim, o valor de Vs, quando A=C=5V, será:",
    "options": [
      "10mV",
      "20mV",
      "5mV",
      "15mV",
      "25mV"
    ],
    "answer": "10mV",
    "explanation": "Por que a resposta correta é \"10mV\"? Analisando o enunciado (\"O conversor da Fig. 127 possui R'=8 ohms e R=5 Kohms. Assim, o valor de Vs, quando A=C=5V, será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"10mV\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito127
  },
  {
    "question": "Na Fig. 133, a tensão de saída, quando B=C=D=9V e R=5 Kohms, será:",
    "options": [
      "2,6V",
      "3,2V",
      "4,5V",
      "1,8V",
      "5,4V"
    ],
    "answer": "2,6V",
    "explanation": "Por que a resposta correta é \"2,6V\"? Analisando o enunciado (\"Na Fig. 133, a tensão de saída, quando B=C=D=9V e R=5 Kohms, será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"2,6V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito133
  },
  {
    "question": "No conversor da Fig. 131, o valor do capacitor do pino 4 foi alterado para 100pF. A nova freqüência interna será:",
    "options": [
      "1,1 MHz",
      "606 KHz",
      "100 KHz",
      "2,2 MHz",
      "500 KHz"
    ],
    "answer": "1,1 MHz",
    "explanation": "Por que a resposta correta é \"1,1 MHz\"? Analisando o enunciado (\"No conversor da Fig. 131, o valor do capacitor do pino 4 foi alterado para 100pF. A nova freqüência interna será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"1,1 MHz\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.2 - Conversores A/D [Múltipla Escolha]",
    "image": circuito131
  },
  {
    "question": "Um conversor A/D similar ao da Fig. 131 possui seu barramento de dados de 12 bits. A resolução para esse conversor será:",
    "options": [
      "1,2 mV",
      "2,4 mV",
      "0,6 mV",
      "5,0 mV",
      "10,0 mV"
    ],
    "answer": "1,2 mV",
    "explanation": "Por que a resposta correta é \"1,2 mV\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"1,2 mV\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Múltipla Escolha]",
    "image": circuito131
  },
  {
    "question": "No conversor da Fig. 131, o valor binário na saída, quando Vin+ = 4V, será:",
    "options": [
      "11001100",
      "10110000",
      "10100101",
      "11010010",
      "10001000"
    ],
    "answer": "11001100",
    "explanation": "Por que a resposta correta é \"11001100\"? Analisando o enunciado (\"No conversor da Fig. 131, o valor binário na saída, quando Vin+ = 4V, será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"11001100\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.2 - Conversores A/D [Múltipla Escolha]",
    "image": circuito131
  },
  {
    "question": "Função lógica executada pelo MUX da Fig. 138.",
    "options": [
      "Coincidência (XNOR)",
      "OU Exclusivo (XOR)",
      "NÃO-E (NAND)",
      "NÃO-OU (NOR)",
      "Inversão dupla"
    ],
    "answer": "Coincidência (XNOR)",
    "explanation": "Por que a resposta correta é \"Coincidência (XNOR)\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"Coincidência (XNOR)\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.3 - Multiplex [Múltipla Escolha]",
    "image": circuito138
  },
  {
    "question": "Desvantagem da SRAM em relação à DRAM.",
    "options": [
      "Mais cara (e de menor densidade)",
      "Muito mais lenta nas operações de leitura e escrita",
      "Exige ciclos constantes de recarga periódica (refresh)",
      "Perde os dados quando exposta à luz ambiente",
      "Consome muito mais energia no estado de repouso"
    ],
    "answer": "Mais cara (e de menor densidade)",
    "explanation": "Por que a resposta correta é \"Mais cara (e de menor densidade)\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "O conversor da Fig. 127 é compatível com TTL e possui R'=8 Ω e R=5 KΩ... Assim, o valor de Vs, para A=C=1, é:",
    "options": [
      "10mV",
      "15mV",
      "5mV",
      "20mV",
      "12mV"
    ],
    "answer": "10mV",
    "explanation": "Por que a resposta correta é \"10mV\"? Analisando o enunciado (\"O conversor da Fig. 127 é compatível com TTL e possui R'=8 Ω e R=5 KΩ... Assim, o valor de Vs, para A=C=1, é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"10mV\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito127
  },
  {
    "question": "Na figura 127, a tensão de saída quando B=C=D=9V e R=5KOHM será:",
    "options": [
      "2,6V",
      "3,5V",
      "1,8V",
      "4,2V",
      "3,0V"
    ],
    "answer": "2,6V",
    "explanation": "Por que a resposta correta é \"2,6V\"? Analisando o enunciado (\"Na figura 127, a tensão de saída quando B=C=D=9V e R=5KOHM será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"2,6V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Múltipla Escolha]",
    "image": circuito127
  },
  {
    "question": "No conversor da Fig. 131, o conjunto RC dos pinos 4 e 19 teve os valores alterados para 8 KΩ e 100 pF. Assim, a nova freqüência interna será:",
    "options": [
      "1,1 MHz",
      "800 KHz",
      "1,5 MHz",
      "600 KHz",
      "2,0 MHz"
    ],
    "answer": "1,1 MHz",
    "explanation": "Por que a resposta correta é \"1,1 MHz\"? Analisando o enunciado (\"No conversor da Fig. 131, o conjunto RC dos pinos 4 e 19 teve os valores alterados para 8 KΩ e 100 pF. Assim, a nova freqüência interna será:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"1,1 MHz\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.2 - Conversores A/D [Múltipla Escolha]",
    "image": circuito131
  },
  {
    "question": "Qual o código de sete (7) bits, usado em pequenos sistemas de computadores, para transformar os caracteres de teclado em linguagem de computador?",
    "options": [
      "EBCDIC",
      "BCD 8421",
      "ASCII",
      "Hexadecimal",
      "Código Gray"
    ],
    "answer": "ASCII",
    "explanation": "Por que a resposta correta é \"ASCII\"? Analisando o enunciado (\"Qual o código de sete (7) bits, usado em pequenos sistemas de computadores, para transformar os caracteres de teclado em linguagem de computador?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"ASCII\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.1 - Códigos [Múltipla Escolha]"
  },
  {
    "question": "Quanto ao armazenamento, como as memórias podem ser classificadas de forma primária?",
    "options": [
      "Magnéticas e Ópticas",
      "Voláteis e Não Voláteis",
      "ROM e PROM",
      "Estáticas e Dinâmicas",
      "Sequenciais e Aleatórias"
    ],
    "answer": "Estáticas e Dinâmicas",
    "explanation": "Por que a resposta correta é \"Estáticas e Dinâmicas\"? Analisando o enunciado (\"Quanto ao armazenamento, como as memórias podem ser classificadas de forma primária?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Estáticas e Dinâmicas\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual o valor do bit de paridade para uma \"paridade ímpar\" que deve ser adicionado à informação binária 1001100 antes da transmissão?",
    "options": [
      "1, para que a soma total de bits seja ímpar.",
      "0, pois a informação já possui uma quantidade ímpar de bits \"1\" (três bits).",
      "1, pois falta um bit para fechar um byte completo.",
      "0, pois o bit de paridade ímpar é sempre zero.",
      "1, para que o sistema receptor possa detectar a posição de um possível erro."
    ],
    "answer": "0, pois a informação já possui uma quantidade ímpar de bits \"1\" (três bits).",
    "explanation": "Por que a resposta correta é \"0, pois a informação já possui uma quantidade ímpar de bits \\\"1\\\" (três bits).\"? Analisando o enunciado (\"Qual o valor do bit de paridade para uma \\\"paridade ímpar\\\" que deve ser adicionado à informação binária 1001100 antes da transmissão?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"0, pois a informação já possui uma quantidade ímpar de bits \\\"1\\\" (três bits).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.2 - Paridade [Questão Direta]"
  },
  {
    "question": "Qual é o tipo de memória DRAM projetada com duas entradas (portas), permitindo que o processador e o controlador a acessem ao mesmo tempo?",
    "options": [
      "FPM DRAM",
      "SDRAM",
      "RDRAM",
      "VRAM",
      "EDO DRAM"
    ],
    "answer": "VRAM",
    "explanation": "Por que a resposta correta é \"VRAM\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Quantas linhas de endereços, no mínimo, são necessárias para acessar todas as posições de uma memória de 4K x 2?",
    "options": [
      "8 linhas",
      "10 linhas",
      "12 linhas",
      "14 linhas",
      "16 linhas"
    ],
    "answer": "12 linhas",
    "explanation": "Por que a resposta correta é \"12 linhas\"? Analisando o enunciado (\"Quantas linhas de endereços, no mínimo, são necessárias para acessar todas as posições de uma memória de 4K x 2?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"12 linhas\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Quais os sinais de controle usados no endereçamento em duas etapas em uma memória DRAM com multiplexação de endereços?",
    "options": [
      "CS e CE",
      "WE e OE",
      "ALE e PGM",
      "Tx e Rx",
      "RAS (Row) e CAS (Column)"
    ],
    "answer": "RAS (Row) e CAS (Column)",
    "explanation": "Por que a resposta correta é \"RAS (Row) e CAS (Column)\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"RAS (Row) e CAS (Column)\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual a principal desvantagem da memória DRAM em relação à SRAM?",
    "options": [
      "Apresenta uma densidade de integração muito menor.",
      "Ocupa muito mais espaço físico na placa.",
      "É mais lenta, pois necessita de circuitos de controle para a recarga periódica de suas células (refresh).",
      "Custa muito mais caro por bit armazenado.",
      "Retém dados permanentemente, tornando a regravação difícil."
    ],
    "answer": "É mais lenta, pois necessita de circuitos de controle para a recarga periódica de suas células (refresh).",
    "explanation": "Por que a resposta correta é \"É mais lenta, pois necessita de circuitos de controle para a recarga periódica de suas células (refresh).\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Onde a transmissão de dados em série é mais útil e qual a sua principal característica?",
    "options": [
      "Em curtas distâncias, por transmitir palavras inteiras (bytes) de uma só vez.",
      "Em longas distâncias, por ser mais barata e usar taxas de transferência mais elevadas num par de fios, embora transmita bit a bit.",
      "Entre o processador e a memória cache, garantindo altíssima velocidade.",
      "Apenas dentro de sistemas microprocessados isolados de ruído.",
      "Para resolver problemas de interferências entre sinais adjacentes usando múltiplos cabos grossos."
    ],
    "answer": "Em longas distâncias, por ser mais barata e usar taxas de transferência mais elevadas num par de fios, embora transmita bit a bit.",
    "explanation": "Por que a resposta correta é \"Em longas distâncias, por ser mais barata e usar taxas de transferência mais elevadas num par de fios, embora transmita bit a bit.\"? Analisando o enunciado (\"Onde a transmissão de dados em série é mais útil e qual a sua principal característica?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Em longas distâncias, por ser mais barata e usar taxas de transferência mais elevadas num par de fios, embora transmita bit a bit.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "Qual o tipo de memória não volátil em que podemos realizar o apagamento elétrico no próprio circuito e de maneira rápida, muitas vezes separada por blocos ou setores?",
    "options": [
      "ROM Máscara",
      "EPROM",
      "SRAM Pipelined Burst",
      "FLASH",
      "RAM Dinâmica"
    ],
    "answer": "FLASH",
    "explanation": "Por que a resposta correta é \"FLASH\"? As memórias ROM (Read-Only Memory) e suas evoluções programáveis (PROM, EPROM, EEPROM, Flash) são memórias NÃO VOLÁTEIS porque mantêm os bytes armazenados intactos mesmo sem alimentação elétrica, sendo ideais para guardar o firmware executável e tabelas fixas do sistema.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual a finalidade principal do uso de Amplificadores Operacionais em um conversor Digital-Analógico (D/A)?",
    "options": [
      "Amplificar a corrente de entrada para ativar as portas NAND da rede seletora.",
      "Isolar a impedância da rede R-2R com a carga e oferecer tensão cujo fator de proporcionalidade independe do nível 1 lógico.",
      "Executar o endereçamento em duas etapas por meio do sinal RAS.",
      "Reduzir o tempo de acesso da memória SDRAM acoplada.",
      "Gerar o clock interno (pulso de strobe) para iniciar a conversão do chip ADC0804."
    ],
    "answer": "Isolar a impedância da rede R-2R com a carga e oferecer tensão cujo fator de proporcionalidade independe do nível 1 lógico.",
    "explanation": "Por que a resposta correta é \"Isolar a impedância da rede R-2R com a carga e oferecer tensão cujo fator de proporcionalidade independe do nível 1 lógico.\"? Analisando o enunciado (\"Qual a finalidade principal do uso de Amplificadores Operacionais em um conversor Digital-Analógico (D/A)?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Isolar a impedância da rede R-2R com a carga e oferecer tensão cujo fator de proporcionalidade independe do nível 1 lógico.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Questão Direta]"
  },
  {
    "question": "Quantos níveis de tensão diferentes um conversor D/A de 12 bits pode produzir na saída?",
    "options": [
      "1024",
      "2048",
      "4096",
      "8192",
      "256"
    ],
    "answer": "4096",
    "explanation": "Por que a resposta correta é \"4096\"? O Conversor Digital-Analógico (D/A ou DAC) converte uma palavra binária de entrada em tensão ou corrente analógica proporcional na saída. A resposta \"4096\" descreve corretamente a topologia resistiva ou funcional do conversor (como a escada R-2R que utiliza apenas dois valores nominais de resistores para simplificar a precisão da rede).",
    "topic": "3.1 - Conversores D/A [Questão Direta]"
  },
  {
    "question": "Um circuito Multiplexador (MUX) com 6 canais de entrada de dados precisa de, no mínimo, quantas entradas (variáveis) de seleção?",
    "options": [
      "2 entradas",
      "3 entradas",
      "4 entradas",
      "6 entradas",
      "8 entradas"
    ],
    "answer": "3 entradas",
    "explanation": "Por que a resposta correta é \"3 entradas\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"3 entradas\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.3 - Multiplex [Questão Direta]"
  },
  {
    "question": "Quantas codificações possíveis o código alfanumérico EBCDIC possui?",
    "options": [
      "64",
      "128",
      "256",
      "512",
      "1024"
    ],
    "answer": "256",
    "explanation": "Por que a resposta correta é \"256\"? O decodificador BCD para 7 Segmentos (como o 7447 para anodo comum ou 7448 para catodo comum) possui a lógica combinacional interna necessária para converter o código binário BCD de 4 bits em ativação precisa dos segmentos (a, b, c, d, e, f, g) do display LED, formando exatamente o caractere ou número decimal indicado na resposta \"256\".",
    "topic": "2.1 - Códigos [Questão Direta]"
  },
  {
    "question": "Qual a diferença estrutural principal entre os códigos ASCII e EBCDIC?",
    "options": [
      "O ASCII é usado apenas em circuitos lógicos bipolares; o EBCDIC em CMOS.",
      "O ASCII possui 8 bits (256 codificações); o EBCDIC possui 7 bits (128 codificações).",
      "O ASCII possui 7 bits (128 codificações possíveis); o EBCDIC possui 8 bits (256 codificações possíveis).",
      "O ASCII detecta erros via pulso RAS; o EBCDIC utiliza CAS.",
      "Não existe diferença na quantidade de codificações, ambos têm 8 bits."
    ],
    "answer": "O ASCII possui 7 bits (128 codificações possíveis); o EBCDIC possui 8 bits (256 codificações possíveis).",
    "explanation": "Por que a resposta correta é \"O ASCII possui 7 bits (128 codificações possíveis); o EBCDIC possui 8 bits (256 codificações possíveis).\"? O decodificador BCD para 7 Segmentos (como o 7447 para anodo comum ou 7448 para catodo comum) possui a lógica combinacional interna necessária para converter o código binário BCD de 4 bits em ativação precisa dos segmentos (a, b, c, d, e, f, g) do display LED, formando exatamente o caractere ou número decimal indicado na resposta \"O ASCII possui 7 bits (128 codificações possíveis); o EBCDIC possui 8 bits (256 codificações possíveis).\".",
    "topic": "2.1 - Códigos [Questão Direta]"
  },
  {
    "question": "Qual é a capacidade total de bits (células de memória) que uma memória do tipo 16K x 2 pode armazenar?",
    "options": [
      "8.192 bits",
      "16.384 bits",
      "32.768 bits",
      "65.536 bits",
      "131.072 bits"
    ],
    "answer": "32.768 bits",
    "explanation": "Por que a resposta correta é \"32.768 bits\"? Analisando o enunciado (\"Qual é a capacidade total de bits (células de memória) que uma memória do tipo 16K x 2 pode armazenar?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"32.768 bits\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual é a principal desvantagem do conversor Digital-Analógico (D/A) básico construído apenas com uma rede de resistores, e qual circuito adicional é normalmente empregado na saída para corrigir esse problema?",
    "options": [
      "Apresenta alta dissipação térmica; corrigido com capacitores de desacoplamento de tântalo.",
      "Exige multiplexação de dados complexa; corrigido com um CI demultiplexador na entrada.",
      "Apresenta um baixo valor de tensão analógica na saída; corrigido com o uso de um Amplificador Operacional na configuração somador.",
      "Gera correntes reversas indesejáveis; corrigido com a inserção de transistores Schottky.",
      "Sofre de atrasos de propagação excessivos; corrigido com o uso de transistores na configuração Totem-Pole."
    ],
    "answer": "Apresenta um baixo valor de tensão analógica na saída; corrigido com o uso de um Amplificador Operacional na configuração somador.",
    "explanation": "Por que a resposta correta é \"Apresenta um baixo valor de tensão analógica na saída; corrigido com o uso de um Amplificador Operacional na configuração somador.\"? Analisando o enunciado (\"Qual é a principal desvantagem do conversor Digital-Analógico (D/A) básico construído apenas com uma rede de resistores, e qual circuito adicional é normalmente empregado na saída para corrigir esse problema?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Apresenta um baixo valor de tensão analógica na saída; corrigido com o uso de um Amplificador Operacional na configuração somador.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.1 - Conversores D/A [Questão Direta]"
  },
  {
    "question": "Em relação às formas de variação das grandezas processadas em sistemas eletrônicos, como ocorrem, respectivamente, a variação de um \"sinal digital\" e a variação de um \"sinal analógico\"?",
    "options": [
      "Contínua assumindo valores em uma faixa restrita; Discreta operando em saltos.",
      "Discreta, com a passagem de um valor a outro ocorrendo por saltos finitos; Contínua, assumindo infinitos valores intermediários dentro da sua faixa.",
      "Ambas ocorrem de forma contínua, porém o sinal digital possui níveis filtrados.",
      "Aleatória e dividida em blocos de 8 bits; Estruturada rigidamente em níveis quânticos.",
      "Analógica, baseada em lógica de limiar; Digital, baseada na saturação dos transistores bipolares."
    ],
    "answer": "Discreta, com a passagem de um valor a outro ocorrendo por saltos finitos; Contínua, assumindo infinitos valores intermediários dentro da sua faixa.",
    "explanation": "Por que a resposta correta é \"Discreta, com a passagem de um valor a outro ocorrendo por saltos finitos; Contínua, assumindo infinitos valores intermediários dentro da sua faixa.\"? Analisando o enunciado (\"Em relação às formas de variação das grandezas processadas em sistemas eletrônicos, como ocorrem, respectivamente, a variação de um \\\"sinal digital\\\" e a variação de um \\\"sinal analógico\\\"?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Discreta, com a passagem de um valor a outro ocorrendo por saltos finitos; Contínua, assumindo infinitos valores intermediários dentro da sua faixa.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "1.1 - Sinais Analógicos e Digitais [Questão Direta]"
  },
  {
    "question": "Além de dados puramente numéricos, um computador precisa ser capaz de reconhecer letras, sinais de pontuação e caracteres de controle (teclado, impressoras, etc). Como são conhecidos os códigos (como o ASCII e o EBCDIC) que realizam essa representação nos sistemas digitais?",
    "options": [
      "Códigos Hexadecimais.",
      "Códigos de Paridade Ímpar.",
      "Códigos Alfanuméricos.",
      "Códigos BCD 8421.",
      "Códigos Gray."
    ],
    "answer": "Códigos Alfanuméricos.",
    "explanation": "Por que a resposta correta é \"Códigos Alfanuméricos.\"? O decodificador BCD para 7 Segmentos (como o 7447 para anodo comum ou 7448 para catodo comum) possui a lógica combinacional interna necessária para converter o código binário BCD de 4 bits em ativação precisa dos segmentos (a, b, c, d, e, f, g) do display LED, formando exatamente o caractere ou número decimal indicado na resposta \"Códigos Alfanuméricos.\".",
    "topic": "2.1 - Códigos [Questão Direta]"
  },
  {
    "question": "O método do bit de paridade é amplamente utilizado em sistemas de transmissão de dados. Avalie a afirmação a seguir sobre esse método: \"Através do bit de paridade, o sistema receptor é capaz de determinar exatamente qual dos bits de uma informação transmitida está errado, corrigindo-o ativamente\".",
    "options": [
      "Verdadeira, pois o bit extra atua como um ponteiro de endereço do erro na palavra.",
      "Falsa. O bit de paridade é capaz de detectar se houve erro na transmissão, mas não determina a sua posição (qual bit especificamente errou).",
      "Verdadeira, mas essa funcionalidade só ocorre na \"paridade par\".",
      "Falsa. O método de paridade é incapaz de detectar erros de transmissão, servindo apenas para empacotar a informação.",
      "Verdadeira, desde que acoplado a um circuito multiplexador de 16 canais no receptor."
    ],
    "answer": "Falsa. O bit de paridade é capaz de detectar se houve erro na transmissão, mas não determina a sua posição (qual bit especificamente errou).",
    "explanation": "Por que a resposta correta é \"Falsa. O bit de paridade é capaz de detectar se houve erro na transmissão, mas não determina a sua posição (qual bit especificamente errou).\"? Analisando o enunciado (\"O método do bit de paridade é amplamente utilizado em sistemas de transmissão de dados. Avalie a afirmação a seguir sobre esse método: \\\"Através do bit de paridade, o sistema receptor é capaz de determinar exatamente qual dos bits de uma informação transmitida está errado, corrigindo-o ativamente\\\".\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Falsa. O bit de paridade é capaz de detectar se houve erro na transmissão, mas não determina a sua posição (qual bit especificamente errou).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.2 - Paridade [Questão Discursiva]"
  },
  {
    "question": "Na transmissão de dados em \"paralelo\", as interferências eletromagnéticas (crosstalk) entre sinais em condutores adjacentes são problemas comuns. Como fisicamente esses problemas costumam ser resolvidos no meio de transmissão e qual é a principal consequência técnica dessa solução?",
    "options": [
      "Aumentando a tensão de alimentação dos barramentos, exigindo interfaces buffers potentes.",
      "Com o uso de blindagens físicas e sinais através de pares diferenciais, o que acaba aumentando a espessura do cabo, tornando-o mais caro e de difícil instalação.",
      "Diminuindo drasticamente a espessura dos fios e removendo o isolamento plástico, deixando o ar atuar como dielétrico.",
      "Transmitindo os sinais no vácuo em guias de onda ópticos de baixo custo.",
      "Modulando o sinal paralelo através de CIs TTL de alta potência (série FAST)."
    ],
    "answer": "Com o uso de blindagens físicas e sinais através de pares diferenciais, o que acaba aumentando a espessura do cabo, tornando-o mais caro e de difícil instalação.",
    "explanation": "Por que a resposta correta é \"Com o uso de blindagens físicas e sinais através de pares diferenciais, o que acaba aumentando a espessura do cabo, tornando-o mais caro e de difícil instalação.\"? Analisando o enunciado (\"Na transmissão de dados em \\\"paralelo\\\", as interferências eletromagnéticas (crosstalk) entre sinais em condutores adjacentes são problemas comuns. Como fisicamente esses problemas costumam ser resolvidos no meio de transmissão e qual é a principal consequência técnica dessa solução?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Com o uso de blindagens físicas e sinais através de pares diferenciais, o que acaba aumentando a espessura do cabo, tornando-o mais caro e de difícil instalação.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Discursiva]"
  },
  {
    "question": "Em um microcomputador, a Unidade Central de Processamento (CPU) é hoje implementada em um único chip chamado Microprocessador. Quais são as principais unidades internas clássicas que compõem uma CPU?",
    "options": [
      "Unidade de Memória EPROM e Registradores Dinâmicos.",
      "Controladores de Interrupção Múltipla e Barramento de Vídeo.",
      "Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).",
      "Multiplexadores de Endereços e Conversores Analógico/Digitais.",
      "Memória Cache de nível 2 e Barramento Frontal de alta velocidade."
    ],
    "answer": "Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).",
    "explanation": "Por que a resposta correta é \"Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).\"? Analisando o enunciado (\"Em um microcomputador, a Unidade Central de Processamento (CPU) é hoje implementada em um único chip chamado Microprocessador. Quais são as principais unidades internas clássicas que compõem uma CPU?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos e CPU [Questão Direta]"
  },
  {
    "question": "Na arquitetura de comunicação de um microcomputador, os sinais são escoados por um conjunto de vias. Qual é a definição exata e o comportamento direcional do Barramento de Endereços (Address Bus)?",
    "options": [
      "É um barramento bidirecional que transporta os dados já processados da memória para os periféricos.",
      "É um barramento unidirecional que conduz a informação da CPU para a memória ou dispositivos de E/S, fornecendo a posição da célula onde um dado será lido ou escrito.",
      "É um barramento multiplexado que carrega sinais de temporização (clock) para todas as placas conectadas à placa-mãe.",
      "É o barramento dedicado ao transporte de níveis lógicos entre a interface de vídeo e o monitor.",
      "É um barramento exclusivo para alertar a CPU de falhas fatais no hardware (Interrupt Bus)."
    ],
    "answer": "É um barramento unidirecional que conduz a informação da CPU para a memória ou dispositivos de E/S, fornecendo a posição da célula onde um dado será lido ou escrito.",
    "explanation": "Por que a resposta correta é \"É um barramento unidirecional que conduz a informação da CPU para a memória ou dispositivos de E/S, fornecendo a posição da célula onde um dado será lido ou escrito.\"? Analisando o enunciado (\"Na arquitetura de comunicação de um microcomputador, os sinais são escoados por um conjunto de vias. Qual é a definição exata e o comportamento direcional do Barramento de Endereços (Address Bus)?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"É um barramento unidirecional que conduz a informação da CPU para a memória ou dispositivos de E/S, fornecendo a posição da célula onde um dado será lido ou escrito.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "Das características técnicas que compõem o datasheet de uma memória semicondutora, o que expressa o chamado \"Tempo de Acesso\"?",
    "options": [
      "O tempo necessário para a inicialização total (boot) do circuito em que a ROM está instalada.",
      "O intervalo de tempo decorrido entre a aplicação de uma combinação de endereços nas entradas do CI e a apresentação efetiva do dado nas linhas de saída.",
      "O tempo máximo gasto pelo sinal RAS e CAS para ativar e desativar as linhas da DRAM.",
      "O tempo contínuo exigido para a exposição da pastilha de silício à luz ultravioleta (em memórias EPROM).",
      "O tempo médio que o usuário leva para salvar um documento na unidade de disco rígido (HD)."
    ],
    "answer": "O intervalo de tempo decorrido entre a aplicação de uma combinação de endereços nas entradas do CI e a apresentação efetiva do dado nas linhas de saída.",
    "explanation": "Por que a resposta correta é \"O intervalo de tempo decorrido entre a aplicação de uma combinação de endereços nas entradas do CI e a apresentação efetiva do dado nas linhas de saída.\"? Analisando o enunciado (\"Das características técnicas que compõem o datasheet de uma memória semicondutora, o que expressa o chamado \\\"Tempo de Acesso\\\"?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"O intervalo de tempo decorrido entre a aplicação de uma combinação de endereços nas entradas do CI e a apresentação efetiva do dado nas linhas de saída.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "A multiplexação de endereços é uma técnica usada para diminuir o tamanho dos chips e a quantidade de pinos. Em um chip DRAM cuja matriz requer um total de 20 bits de endereço para acessar sua capacidade completa de 1 Megabyte, quantas linhas físicas de endereço existirão, na prática, ligadas ao CI?",
    "options": [
      "20 linhas físicas.",
      "15 linhas físicas.",
      "10 linhas físicas.",
      "8 linhas físicas.",
      "5 linhas físicas."
    ],
    "answer": "10 linhas físicas.",
    "explanation": "Por que a resposta correta é \"10 linhas físicas.\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"10 linhas físicas.\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "A respeito da tecnologia de memórias e do processamento do pulso de clock, julgue a afirmação: \"Uma memória DDR-SDRAM trabalha com uma frequência de clock real que é o DOBRO daquela usada na SDRAM comum (SDR), para poder transferir o dobro da taxa de dados.\" Qual das opções abaixo está correta?",
    "options": [
      "A afirmação é Verdadeira. A sigla DDR (Double Data Rate) se refere ao fato de o cristal oscilador operar com o dobro de hertz no barramento frontal.",
      "A afirmação é Falsa. A memória DDR trabalha na mesma frequência real de oscilação do barramento SDR, mas ela transfere os dados tanto na subida (borda positiva) quanto na descida (borda negativa) do pulso de clock.",
      "A afirmação é Verdadeira. A arquitetura exige tensão reduzida justamente para aguentar o dobro do calor gerado pela frequência dobrada.",
      "A afirmação é Falsa. A DDR dobra a velocidade apenas por possuir dois controladores assíncronos independentes na placa-mãe.",
      "A afirmação é Verdadeira. Todo processador requer que as memórias operem a 2x o multiplicador base para simular altas taxas."
    ],
    "answer": "A afirmação é Falsa. A memória DDR trabalha na mesma frequência real de oscilação do barramento SDR, mas ela transfere os dados tanto na subida (borda positiva) quanto na descida (borda negativa) do pulso de clock.",
    "explanation": "Por que a resposta correta é \"A afirmação é Falsa. A memória DDR trabalha na mesma frequência real de oscilação do barramento SDR, mas ela transfere os dados tanto na subida (borda positiva) quanto na descida (borda negativa) do pulso de clock.\"? Analisando o enunciado (\"A respeito da tecnologia de memórias e do processamento do pulso de clock, julgue a afirmação: \\\"Uma memória DDR-SDRAM trabalha com uma frequência de clock real que é o DOBRO daquela usada na SDRAM comum (SDR), para poder transferir o dobro da taxa de dados.\\\" Qual das opções abaixo está correta?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"A afirmação é Falsa. A memória DDR trabalha na mesma frequência real de oscilação do barramento SDR, mas ela transfere os dados tanto na subida (borda positiva) quanto na descida (borda negativa) do pulso de clock.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "O conversor A/D compatível com barramentos de microcomputadores, como o ADC0804, possui pinos de controle essenciais. Entre eles, qual é a função respectiva dos pinos 1 (CS - Chip Select) e 2 (RD - Read)?",
    "options": [
      "O CS seleciona o canal do multiplexador interno; o RD inicia as sucessões matemáticas.",
      "O CS determina a conversão entre o código BCD e o ASCII; o RD desabilita os ruídos do terra analógico.",
      "O CS, quando em nível alto, habilita a conversão; o RD funciona como interrupção (INTR) que alerta o fim do processo.",
      "O CS em nível baixo ativa o circuito integrado da pastilha permitindo o funcionamento; o RD em nível baixo habilita os buffers tri-state de saída para que a CPU leia o dado resultante.",
      "Ambos fornecem tensão estabilizada para o comparador interno do chip se o gerador de clock falhar."
    ],
    "answer": "O CS em nível baixo ativa o circuito integrado da pastilha permitindo o funcionamento; o RD em nível baixo habilita os buffers tri-state de saída para que a CPU leia o dado resultante.",
    "explanation": "Por que a resposta correta é \"O CS em nível baixo ativa o circuito integrado da pastilha permitindo o funcionamento; o RD em nível baixo habilita os buffers tri-state de saída para que a CPU leia o dado resultante.\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"O CS em nível baixo ativa o circuito integrado da pastilha permitindo o funcionamento; o RD em nível baixo habilita os buffers tri-state de saída para que a CPU leia o dado resultante.\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "Considere um circuito com o conversor A/D (8 bits, variação máxima do dado igual a 255 em decimal) idêntico ao da Figura 131 da apostila. A escala total de fundo analógico foi calibrada para exatamente 6,5 Volts. Se um transdutor injetar 2,7 Volts na entrada, qual será, aproximadamente, o valor digital binário lido no barramento? (Fórmula: Decimal equivalente = V_entrada / Resolução)",
    "options": [
      "00110011",
      "10110000",
      "01101001",
      "11001100",
      "10000101"
    ],
    "answer": "01101001",
    "explanation": "Por que a resposta correta é \"01101001\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"01101001\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]",
    "image": circuito131
  },
  {
    "question": "Avaliando o desempenho do sistema através da transferência de barramento, calcule a taxa de transferência real suportada por um barramento frontal de placa-mãe que opera com uma frequência de 150 MHz e possui um tamanho (largura) de 64 bits de dados físicos por via. Lembre-se da relação Byte/bit.",
    "options": [
      "150 Megabytes por segundo (MB/s).",
      "300 Megabytes por segundo (MB/s).",
      "9.600 Megabytes por segundo (MB/s).",
      "1.200 Megabytes por segundo (MB/s) - equivalente a 1,2 GB/s.",
      "450 Megabytes por segundo (MB/s)."
    ],
    "answer": "1.200 Megabytes por segundo (MB/s) - equivalente a 1,2 GB/s.",
    "explanation": "Por que a resposta correta é \"1.200 Megabytes por segundo (MB/s) - equivalente a 1,2 GB/s.\"? Analisando o enunciado (\"Avaliando o desempenho do sistema através da transferência de barramento, calcule a taxa de transferência real suportada por um barramento frontal de placa-mãe que opera com uma frequência de 150 MHz e possui um tamanho (largura) de 64 bits de dados físicos por via. Lembre-se da relação Byte/bit.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"1.200 Megabytes por segundo (MB/s) - equivalente a 1,2 GB/s.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Discursiva]"
  },
  {
    "question": "Dispositivos dedicados conhecidos como \"Geradores de Formas de Ondas Digitais\" combinam componentes já estudados. Especifique, primariamente, os blocos essenciais que constituem o núcleo de um \"Gerador de Rampa Digital\" clássico (dente de serra).",
    "options": [
      "Um Demultiplexador e uma malha de resistores TTL.",
      "Um codificador de prioridade 8-para-3 e uma memória RAM de acesso sequencial.",
      "Um microprocessador e um comparador de limiar.",
      "Um Controlador Diferencial (PID) e uma antena transmissora acoplada a conversores D/A.",
      "Um Contador digital de 0 a \"n\" gerador de estados e um Conversor D/A acoplado na saída do mesmo."
    ],
    "answer": "Um Contador digital de 0 a \"n\" gerador de estados e um Conversor D/A acoplado na saída do mesmo.",
    "explanation": "Por que a resposta correta é \"Um Contador digital de 0 a \\\"n\\\" gerador de estados e um Conversor D/A acoplado na saída do mesmo.\"? Analisando o enunciado (\"Dispositivos dedicados conhecidos como \\\"Geradores de Formas de Ondas Digitais\\\" combinam componentes já estudados. Especifique, primariamente, os blocos essenciais que constituem o núcleo de um \\\"Gerador de Rampa Digital\\\" clássico (dente de serra).\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Um Contador digital de 0 a \\\"n\\\" gerador de estados e um Conversor D/A acoplado na saída do mesmo.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.3 - Geradores de Formas de Onda [Questão Direta]"
  },
  {
    "question": "Em um laboratório, desejamos utilizar um MUX de 4 canais como \"Circuito Combinacional\", realizando estritamente a função da porta NOR (Não-OU) para as duas variáveis de seleção 'A' e 'B'. Como devem estar polarizadas (em +Vcc ou GND) as 4 entradas de dados (I0, I1, I2 e I3) para que a saída do multiplexador respeite a tabela verdade da NOR?",
    "options": [
      "Todas as entradas (I0 a I3) devem ser amarradas ao +Vcc (nível 1).",
      "I0 conectada ao nível 1 (+Vcc); I1, I2 e I3 conectadas ao nível 0 (GND).",
      "I0 conectada ao nível 0 (GND); I1, I2 e I3 conectadas ao nível 1 (+Vcc).",
      "Apenas I3 conectada ao nível 1 (+Vcc), as restantes em nível 0 (GND).",
      "I1 e I2 conectadas ao nível 1 (+Vcc); I0 e I3 conectadas ao nível 0 (GND)."
    ],
    "answer": "I0 conectada ao nível 1 (+Vcc); I1, I2 e I3 conectadas ao nível 0 (GND).",
    "explanation": "Por que a resposta correta é \"I0 conectada ao nível 1 (+Vcc); I1, I2 e I3 conectadas ao nível 0 (GND).\"? Em um Multiplexador, a relação matemática entre o número de variáveis de seleção N e a quantidade de canais C é 2^N >= C. Para 3 canais: 2^2 = 4 >= 3 (logo N=2). Para 15 canais: 2^4 = 16 >= 15 (logo N=4). Para 25 canais: 2^5 = 32 >= 25 (logo N=5). Para 36 canais: 2^6 = 64 >= 36 (logo N=6). Portanto, a sequência correta de variáveis de seleção é 2, 4, 5 e 6.",
    "topic": "2.3 - Multiplex [Questão Direta]"
  },
  {
    "question": "O que caracteriza um \"sinal analógico\" em oposição a um sinal digital?",
    "options": [
      "Varia de forma discreta, passando de um valor a outro em saltos finitos.",
      "Varia continuamente, assumindo infinitos valores intermediários dentro de sua faixa de atuação.",
      "Assume apenas os valores lógicos 0 (terra) e 1 (+Vcc).",
      "É imune a qualquer tipo de ruído eletromagnético do ambiente.",
      "É gerado exclusivamente por flip-flops e contadores decádicos."
    ],
    "answer": "Varia continuamente, assumindo infinitos valores intermediários dentro de sua faixa de atuação.",
    "explanation": "Por que a resposta correta é \"Varia continuamente, assumindo infinitos valores intermediários dentro de sua faixa de atuação.\"? Analisando o enunciado (\"O que caracteriza um \\\"sinal analógico\\\" em oposição a um sinal digital?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Varia continuamente, assumindo infinitos valores intermediários dentro de sua faixa de atuação.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "1.1 - Sinais Analógicos e Digitais [Questão Direta]"
  },
  {
    "question": "A \"Variação Digital\" no contexto de sistemas eletrônicos é definida como:",
    "options": [
      "Uma transição que ocorre de forma discreta, ou seja, a passagem de um valor a outro se dá por saltos (níveis finitos).",
      "A variação contínua ao longo de infinitos valores em uma escala de tempo.",
      "O processo em que a tensão obedece obrigatoriamente a funções senoidais.",
      "A alteração de correntes contínuas utilizando reatores nucleares.",
      "Uma oscilação gerada por circuitos ressonantes R-C que não muda de estado."
    ],
    "answer": "Uma transição que ocorre de forma discreta, ou seja, a passagem de um valor a outro se dá por saltos (níveis finitos).",
    "explanation": "Por que a resposta correta é \"Uma transição que ocorre de forma discreta, ou seja, a passagem de um valor a outro se dá por saltos (níveis finitos).\"? Analisando o enunciado (\"A \\\"Variação Digital\\\" no contexto de sistemas eletrônicos é definida como:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Uma transição que ocorre de forma discreta, ou seja, a passagem de um valor a outro se dá por saltos (níveis finitos).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "1.1 - Sinais Analógicos e Digitais [Questão Discursiva]"
  },
  {
    "question": "Qual a principal vantagem da \"Transmissão Serial\" e onde ela é mais recomendada em detrimento da \"Transmissão Paralela\"?",
    "options": [
      "Transmite vários bytes ao mesmo tempo; útil apenas em redes intra-processador.",
      "É muito mais cara devido à espessura dos cabos; útil em curtas distâncias (< 1 metro).",
      "Envia os bits sequencialmente em um único canal, tornando a estrutura mais barata; é a mais recomendada para longas distâncias.",
      "Não sofre nenhum tipo de atenuação; ideal para comunicação entre memórias Cache e a ULA.",
      "Utiliza múltiplos condutores grossos para evitar \"crosstalk\" (interferência); é obrigatória em impressoras matriciais."
    ],
    "answer": "Envia os bits sequencialmente em um único canal, tornando a estrutura mais barata; é a mais recomendada para longas distâncias.",
    "explanation": "Por que a resposta correta é \"Envia os bits sequencialmente em um único canal, tornando a estrutura mais barata; é a mais recomendada para longas distâncias.\"? Analisando o enunciado (\"Qual a principal vantagem da \\\"Transmissão Serial\\\" e onde ela é mais recomendada em detrimento da \\\"Transmissão Paralela\\\"?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Envia os bits sequencialmente em um único canal, tornando a estrutura mais barata; é a mais recomendada para longas distâncias.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "Em um circuito Demultiplexador (DEMUX) com 4 canais de saída, qual é a estrutura lógica mínima necessária para o seu roteamento?",
    "options": [
      "4 entradas de seleção de endereço, acopladas a uma única porta OR.",
      "2 entradas de seleção (A e B), uma entrada de dados (E) e 4 portas AND que ligam a entrada \"E\" a cada uma das respectivas saídas de acordo com a seleção.",
      "1 entrada de seleção controlando 4 portas NOR em cascata.",
      "Chaves eletromecânicas acionadas por relés.",
      "4 multiplexadores invertidos funcionando por portas NAND tri-state."
    ],
    "answer": "2 entradas de seleção (A e B), uma entrada de dados (E) e 4 portas AND que ligam a entrada \"E\" a cada uma das respectivas saídas de acordo com a seleção.",
    "explanation": "Por que a resposta correta é \"2 entradas de seleção (A e B), uma entrada de dados (E) e 4 portas AND que ligam a entrada \\\"E\\\" a cada uma das respectivas saídas de acordo com a seleção.\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"2 entradas de seleção (A e B), uma entrada de dados (E) e 4 portas AND que ligam a entrada \\\"E\\\" a cada uma das respectivas saídas de acordo com a seleção.\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.4 - Demultiplex [Questão Discursiva]"
  },
  {
    "question": "Sabendo que um certo Multiplexador (MUX) necessita chavear as linhas de entrada para atender exatamente a 42 canais diferentes. Qual será o número mínimo de \"variáveis de seleção\" que o projetista precisará interligar no chip?",
    "options": [
      "4 variáveis.",
      "5 variáveis.",
      "6 variáveis.",
      "7 variáveis.",
      "42 variáveis."
    ],
    "answer": "6 variáveis.",
    "explanation": "Por que a resposta correta é \"6 variáveis.\"? Em um Multiplexador, a relação matemática entre o número de variáveis de seleção N e a quantidade de canais C é 2^N >= C. Para 3 canais: 2^2 = 4 >= 3 (logo N=2). Para 15 canais: 2^4 = 16 >= 15 (logo N=4). Para 25 canais: 2^5 = 32 >= 25 (logo N=5). Para 36 canais: 2^6 = 64 >= 36 (logo N=6). Portanto, a sequência correta de variáveis de seleção é 2, 4, 5 e 6.",
    "topic": "2.3 - Multiplex [Questão Discursiva]"
  },
  {
    "question": "Para que possamos projetar um circuito Demultiplexador capaz de rotear uma informação para 65 canais na sua saída, o número mínimo de variáveis de seleção requeridas é de:",
    "options": [
      "5 variáveis.",
      "6 variáveis.",
      "7 variáveis.",
      "8 variáveis.",
      "65 variáveis."
    ],
    "answer": "7 variáveis.",
    "explanation": "Por que a resposta correta é \"7 variáveis.\"? Em um Multiplexador, a relação matemática entre o número de variáveis de seleção N e a quantidade de canais C é 2^N >= C. Para 3 canais: 2^2 = 4 >= 3 (logo N=2). Para 15 canais: 2^4 = 16 >= 15 (logo N=4). Para 25 canais: 2^5 = 32 >= 25 (logo N=5). Para 36 canais: 2^6 = 64 >= 36 (logo N=6). Portanto, a sequência correta de variáveis de seleção é 2, 4, 5 e 6.",
    "topic": "2.4 - Demultiplex [Questão Direta]"
  },
  {
    "question": "Quantas linhas de endereçamento físicas, no mínimo, a CPU do sistema precisaria ativar para conseguir acessar perfeitamente a posição de memória que se encontra no endereço \"03FF\" (em hexadecimal)?",
    "options": [
      "8 linhas.",
      "9 linhas.",
      "10 linhas.",
      "12 linhas.",
      "16 linhas."
    ],
    "answer": "10 linhas.",
    "explanation": "Por que a resposta correta é \"10 linhas.\"? Analisando o enunciado (\"Quantas linhas de endereçamento físicas, no mínimo, a CPU do sistema precisaria ativar para conseguir acessar perfeitamente a posição de memória que se encontra no endereço \\\"03FF\\\" (em hexadecimal)?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"10 linhas.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Discursiva]"
  },
  {
    "question": "Em um microcomputador, a Unidade Central de Processamento (CPU) conta com unidades vitais para realizar todo o processamento de máquina. Quais são as nomenclaturas dessas subunidades que dividem a função central do processador?",
    "options": [
      "Placa de Vídeo e Ponte Norte (Northbridge).",
      "Barramento Frontal (FSB) e Memória de Massa.",
      "Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).",
      "Unidade de Conversão Analógica e Controlador de Interrupções.",
      "BIOS e Memória ROM."
    ],
    "answer": "Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).",
    "explanation": "Por que a resposta correta é \"Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).\"? Analisando o enunciado (\"Em um microcomputador, a Unidade Central de Processamento (CPU) conta com unidades vitais para realizar todo o processamento de máquina. Quais são as nomenclaturas dessas subunidades que dividem a função central do processador?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Unidade Lógica e Aritmética (ULA) e Unidade de Controle e Temporização (UCT).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos e CPU [Questão Direta]"
  },
  {
    "question": "Para que o microcomputador execute uma função prática (como exibir este texto), é preciso alimentar a máquina com lógicas sequenciais específicas. O que é um \"Programa\" na definição de arquitetura de computadores?",
    "options": [
      "Um dispositivo físico (hardware) que resfria a memória em funcionamento.",
      "Um conjunto completo de instruções matemáticas e lógicas elaboradas que descrevem exatamente o que o computador deve fazer a cada passo.",
      "A camada de verniz semicondutor da placa mãe.",
      "O sistema que injeta elétrons com alta energia na porta em flutuação das EPROMs.",
      "Um pulso RAS (Row Address Strobe) executado repetidamente."
    ],
    "answer": "Um conjunto completo de instruções matemáticas e lógicas elaboradas que descrevem exatamente o que o computador deve fazer a cada passo.",
    "explanation": "Por que a resposta correta é \"Um conjunto completo de instruções matemáticas e lógicas elaboradas que descrevem exatamente o que o computador deve fazer a cada passo.\"? Analisando o enunciado (\"Para que o microcomputador execute uma função prática (como exibir este texto), é preciso alimentar a máquina com lógicas sequenciais específicas. O que é um \\\"Programa\\\" na definição de arquitetura de computadores?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Um conjunto completo de instruções matemáticas e lógicas elaboradas que descrevem exatamente o que o computador deve fazer a cada passo.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos e CPU [Questão Direta]"
  },
  {
    "question": "O uso da \"multiplexação de endereços\" é vital para reduzir a quantidade de pinos externos de uma pastilha de memória. Em uma DRAM com capacidade de 1 MB (que no total necessitaria de 20 linhas teóricas de endereço), quantas linhas de endereços FÍSICAS entram efetivamente no chip?",
    "options": [
      "5 linhas.",
      "10 linhas.",
      "15 linhas.",
      "20 linhas.",
      "40 linhas."
    ],
    "answer": "10 linhas.",
    "explanation": "Por que a resposta correta é \"10 linhas.\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"10 linhas.\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Quais são os dois sinais de controle (flags) classicamente responsáveis por \"travar\" (inserir no registrador) as metades do endereço multiplexado em uma memória DRAM?",
    "options": [
      "CE (Chip Enable) e OE (Output Enable).",
      "VDD e VSS.",
      "WR (Write) e RD (Read).",
      "RAS (Row Address Strobe) e CAS (Column Address Strobe).",
      "ALE e PGM."
    ],
    "answer": "RAS (Row Address Strobe) e CAS (Column Address Strobe).",
    "explanation": "Por que a resposta correta é \"RAS (Row Address Strobe) e CAS (Column Address Strobe).\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"RAS (Row Address Strobe) e CAS (Column Address Strobe).\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "No conversor A/D compatível com microprocessadores ADC0804, a interface utiliza uma série de pinos de controle para conversar com a CPU. Se o pino número 2, chamado de RD (Read), for acionado em nível baixo (\"0\"), o que o chip executará?",
    "options": [
      "Ocorrerá o apagamento completo do registrador interno da conversão.",
      "A conversão da tensão analógica para digital é imediatamente iniciada (Start).",
      "O pino atua como uma interrupção avisando a placa mãe que houve falha geral.",
      "O pino habilita os buffers de saída (tri-state) para que os dados binários recém-convertidos fiquem disponíveis no barramento para a leitura pela CPU.",
      "A tensão de referência interna (Vref/2) será reduzida à metade."
    ],
    "answer": "O pino habilita os buffers de saída (tri-state) para que os dados binários recém-convertidos fiquem disponíveis no barramento para a leitura pela CPU.",
    "explanation": "Por que a resposta correta é \"O pino habilita os buffers de saída (tri-state) para que os dados binários recém-convertidos fiquem disponíveis no barramento para a leitura pela CPU.\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"O pino habilita os buffers de saída (tri-state) para que os dados binários recém-convertidos fiquem disponíveis no barramento para a leitura pela CPU.\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Discursiva]"
  },
  {
    "question": "Se modificarmos a escala (fundo de escala analógico) de um circuito conversor A/D de 8 bits (como o ADC0804) para exatamente 4,0 VDC. Qual será a saída digital obtida (em binário) se o sensor injetar na entrada analógica uma tensão de 0,8 Volts?",
    "options": [
      "10100101",
      "01101001",
      "00110011",
      "10110000",
      "11001100"
    ],
    "answer": "00110011",
    "explanation": "Por que a resposta correta é \"00110011\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"00110011\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "Ao construirmos um \"Gerador de Formas de Onda Digitais\" na forma de uma RAMPA (dente-de-serra), o núcleo desse aparelho é montado utilizando primariamente a cascata de dois circuitos da eletrônica digital. Quais são eles?",
    "options": [
      "Um Demultiplexador em série com decodificadores de 7 segmentos.",
      "Um MUX atuando como porta NAND e uma memória FLASH OTP.",
      "Um Contador digital (para gerar o sequenciamento numérico crescente) interligado a um Conversor D/A (para passar esse sequenciamento a níveis de tensão em rampa).",
      "Um Flip-Flop do tipo T e um sensor analógico de pressão.",
      "Uma ULA integrada com um registrador de deslocamento PISO."
    ],
    "answer": "Um Contador digital (para gerar o sequenciamento numérico crescente) interligado a um Conversor D/A (para passar esse sequenciamento a níveis de tensão em rampa).",
    "explanation": "Por que a resposta correta é \"Um Contador digital (para gerar o sequenciamento numérico crescente) interligado a um Conversor D/A (para passar esse sequenciamento a níveis de tensão em rampa).\"? Analisando o enunciado (\"Ao construirmos um \\\"Gerador de Formas de Onda Digitais\\\" na forma de uma RAMPA (dente-de-serra), o núcleo desse aparelho é montado utilizando primariamente a cascata de dois circuitos da eletrônica digital. Quais são eles?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Um Contador digital (para gerar o sequenciamento numérico crescente) interligado a um Conversor D/A (para passar esse sequenciamento a níveis de tensão em rampa).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.3 - Geradores de Formas de Onda [Questão Direta]"
  },
  {
    "question": "Já se o nosso objetivo for construir não uma rampa simples, mas sim um \"Gerador de forma de onda TRIANGULAR\", qual deve ser a principal modificação nesse contador da questão anterior?",
    "options": [
      "O contador deve ser de Década e resetar no número 9.",
      "Deve-se utilizar um Contador Crescente/Decrescente (Up/Down Counter), pois a forma de onda precisa subir e depois descer as escadas da rampa.",
      "O contador precisa obrigatoriamente trabalhar de forma Assíncrona no modo \"ripple\".",
      "É preciso adicionar filtros indutores aos flip-flops.",
      "Retira-se o contador e utiliza-se apenas um decodificador de 4 para 16 linhas."
    ],
    "answer": "Deve-se utilizar um Contador Crescente/Decrescente (Up/Down Counter), pois a forma de onda precisa subir e depois descer as escadas da rampa.",
    "explanation": "Por que a resposta correta é \"Deve-se utilizar um Contador Crescente/Decrescente (Up/Down Counter), pois a forma de onda precisa subir e depois descer as escadas da rampa.\"? Analisando o enunciado (\"Já se o nosso objetivo for construir não uma rampa simples, mas sim um \\\"Gerador de forma de onda TRIANGULAR\\\", qual deve ser a principal modificação nesse contador da questão anterior?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Deve-se utilizar um Contador Crescente/Decrescente (Up/Down Counter), pois a forma de onda precisa subir e depois descer as escadas da rampa.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.3 - Geradores de Formas de Onda [Questão Direta]"
  },
  {
    "question": "Um microprocessador precisa digitalizar a leitura de um sensor utilizando um circuito conversor A/D de 8 bits (baseado no CI ADC0804). O projetista modificou a tensão de referência para que o fundo de escala máximo suportado na entrada analógica fosse de exatamente 6,5 VDC. Se, em determinado momento, o sensor injetar 4,5 Volts no pino Vin(+), qual será a palavra binária resultante colocada no barramento de dados?",
    "options": [
      "10100101",
      "10001000",
      "10110000",
      "01101001",
      "11111111"
    ],
    "answer": "10110000",
    "explanation": "Por que a resposta correta é \"10110000\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"10110000\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "Em um outro circuito industrial equipado com o mesmo conversor A/D de 8 bits, o fundo de escala foi reduzido e ajustado para exatamente 4,0 VDC. Calcule a saída digital obtida caso a tensão analógica lida seja de 2,6 Volts.",
    "options": [
      "10110011",
      "10100101",
      "01100111",
      "00110011",
      "11001000"
    ],
    "answer": "10100101",
    "explanation": "Por que a resposta correta é \"10100101\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"10100101\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Discursiva]"
  },
  {
    "question": "O CI ADC0804 possui um gerador de clock interno que dita o seu tempo de conversão. A frequência desse clock é determinada por uma rede RC externa ligada aos pinos 4 (CLK IN) e 19 (CLK OUT), calculada pela fórmula f≈1/(1,1⋅R⋅C). Se os valores dos componentes forem alterados para R=8 kΩ e C=100 pF, a nova frequência interna de conversão será aproximadamente de:",
    "options": [
      "100 KHz",
      "909 KHz",
      "11,3 MHz",
      "1,1 MHz",
      "606 KHz"
    ],
    "answer": "1,1 MHz",
    "explanation": "Por que a resposta correta é \"1,1 MHz\"? Analisando o enunciado (\"O CI ADC0804 possui um gerador de clock interno que dita o seu tempo de conversão. A frequência desse clock é determinada por uma rede RC externa ligada aos pinos 4 (CLK IN) e 19 (CLK OUT), calculada pela fórmula f≈1/(1,1⋅R⋅C). Se os valores dos componentes forem alterados para R=8 kΩ e C=100 pF, a nova frequência interna de conversão será aproximadamente de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"1,1 MHz\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "Um conversor Digital-Analógico foi montado apenas com a rede resistiva R-2R simples (sem uso de amplificador operacional). Sabe-se que essa rede, alimentada com Vcc=6V, atribui parcelas de tensão decrescentes para os bits de entrada (Vcc/3 para o MSB, Vcc/6 para o próximo, e assim sucessivamente). Para uma palavra binária de entrada igual a 1110 (Sendo A o MSB e D o LSB), qual será a tensão analógica Vs produzida na saída da rede?",
    "options": [
      "1,5 V",
      "2,6 V",
      "3,5 V",
      "4,5 V",
      "5,0 V"
    ],
    "answer": "3,5 V",
    "explanation": "Por que a resposta correta é \"3,5 V\"? O Conversor Digital-Analógico (D/A ou DAC) converte uma palavra binária de entrada em tensão ou corrente analógica proporcional na saída. A resposta \"3,5 V\" descreve corretamente a topologia resistiva ou funcional do conversor (como a escada R-2R que utiliza apenas dois valores nominais de resistores para simplificar a precisão da rede).",
    "topic": "3.1 - Conversores D/A [Questão Direta]"
  },
  {
    "question": "Nos projetos mais eficientes de Conversores D/A, é praxe associar a rede R-2R resistiva a um Amplificador Operacional na configuração de somador inversor. Dentre as justificativas técnicas para essa topologia, destaca-se que o Amplificador Operacional:",
    "options": [
      "Transforma a corrente digital em pulsos de clock sincronizados para a CPU.",
      "Reduz drasticamente a velocidade de comutação para evitar ruídos (spikes).",
      "Funciona como um comparador de tensão, zerando a saída se a palavra for par.",
      "Permite ajustar o fator de proporcionalidade da saída sem depender da tensão do nível lógico 1, além de promover um excelente isolamento de impedância com a carga.",
      "Realiza o processo de \"refresh\" nos diodos Schottky da rede para evitar perda de resolução térmica."
    ],
    "answer": "Permite ajustar o fator de proporcionalidade da saída sem depender da tensão do nível lógico 1, além de promover um excelente isolamento de impedância com a carga.",
    "explanation": "Por que a resposta correta é \"Permite ajustar o fator de proporcionalidade da saída sem depender da tensão do nível lógico 1, além de promover um excelente isolamento de impedância com a carga.\"? O Conversor Digital-Analógico (D/A ou DAC) converte uma palavra binária de entrada em tensão ou corrente analógica proporcional na saída. A resposta \"Permite ajustar o fator de proporcionalidade da saída sem depender da tensão do nível lógico 1, além de promover um excelente isolamento de impedância com a carga.\" descreve corretamente a topologia resistiva ou funcional do conversor (como a escada R-2R que utiliza apenas dois valores nominais de resistores para simplificar a precisão da rede).",
    "topic": "3.1 - Conversores D/A [Questão Direta]"
  },
  {
    "question": "Avaliando a capacidade técnica das pastilhas de memória estática, determine o número total de células biestáveis (bits armazenados no total) em um chip cuja organização estrutural é descrita pelo fabricante como \"16K x 2\".",
    "options": [
      "8.192 bits.",
      "16.384 bits.",
      "32.768 bits.",
      "65.536 bits.",
      "131.072 bits."
    ],
    "answer": "32.768 bits.",
    "explanation": "Por que a resposta correta é \"32.768 bits.\"? Analisando o enunciado (\"Avaliando a capacidade técnica das pastilhas de memória estática, determine o número total de células biestáveis (bits armazenados no total) em um chip cuja organização estrutural é descrita pelo fabricante como \\\"16K x 2\\\".\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"32.768 bits.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Em sistemas computacionais, existem memórias com arquiteturas totalmente dedicadas ao desempenho de vídeo. A memória \"VRAM\" (Video RAM) diferencia-se drasticamente da DRAM comum porque:",
    "options": [
      "É completamente assíncrona, eliminando a necessidade de barramento local.",
      "Utiliza flip-flops do tipo T no lugar de capacitores, sendo por natureza uma memória Estática (SRAM).",
      "Possui arquitetura de \"porta dupla\" (Dual-Port), permitindo que o microprocessador a atualize ao mesmo tempo em que o controlador de vídeo lê os dados para enviar ao monitor.",
      "Opera obrigatoriamente acoplada a conversores ADC0804 para gerar gráficos 3D.",
      "Seu processo de apagamento ocorre através da emissão de raios ultravioleta pelo próprio tubo do monitor."
    ],
    "answer": "Possui arquitetura de \"porta dupla\" (Dual-Port), permitindo que o microprocessador a atualize ao mesmo tempo em que o controlador de vídeo lê os dados para enviar ao monitor.",
    "explanation": "Por que a resposta correta é \"Possui arquitetura de \\\"porta dupla\\\" (Dual-Port), permitindo que o microprocessador a atualize ao mesmo tempo em que o controlador de vídeo lê os dados para enviar ao monitor.\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Em projetos de computadores que requerem máxima performance (como as memórias Cache L2), o engenheiro deve escolher cuidadosamente o tipo de SRAM a utilizar. Qual a característica que torna a \"SRAM Pipelined Burst\" superior à \"SRAM Assíncrona\" tradicional?",
    "options": [
      "A Pipelined Burst realiza refresh a cada 20ms, o que economiza bateria.",
      "A Pipelined Burst transfere blocos contínuos de dados (rajada) em menos ciclos de clock, podendo trabalhar com barramentos (FSB) muito rápidos (até 133 MHz) sem a necessidade de introduzir estados de espera (wait states).",
      "A SRAM Assíncrona exige que o sinal RAS e CAS sejam ativados para cada leitura.",
      "A SRAM Assíncrona foi projetada exclusivamente para tecnologias de Baixa Tensão (3,3V).",
      "Não há superioridade de velocidade, ambas possuem o mesmo tempo de acesso típico de 50ns."
    ],
    "answer": "A Pipelined Burst transfere blocos contínuos de dados (rajada) em menos ciclos de clock, podendo trabalhar com barramentos (FSB) muito rápidos (até 133 MHz) sem a necessidade de introduzir estados de espera (wait states).",
    "explanation": "Por que a resposta correta é \"A Pipelined Burst transfere blocos contínuos de dados (rajada) em menos ciclos de clock, podendo trabalhar com barramentos (FSB) muito rápidos (até 133 MHz) sem a necessidade de introduzir estados de espera (wait states).\"? As memórias RAM de leitura e escrita são VOLÁTEIS porque exigem alimentação elétrica contínua; ao desligar a energia, todos os dados são perdidos. A SRAM (Estática) retém o bit em flip-flops enquanto houver energia, enquanto a DRAM (Dinâmica) armazena carga em capacitores que necessitam de ciclos periódicos de refresh.",
    "topic": "2.5 - Memórias [Questão Discursiva]"
  },
  {
    "question": "O projeto de um decodificador de memória exige a conversão exata do mapa de endereços (Memory Map). Quantas linhas físicas de endereçamento, no mínimo, a CPU precisa atracar no barramento para conseguir acessar unicamente a posição que se encontra no endereço \"01FF\" (em hexadecimal)?",
    "options": [
      "7 linhas de endereço (A0 a A6).",
      "8 linhas de endereço (A0 a A7).",
      "9 linhas de endereço (A0 a A8).",
      "10 linhas de endereço (A0 a A9).",
      "12 linhas de endereço (A0 a A11)."
    ],
    "answer": "9 linhas de endereço (A0 a A8).",
    "explanation": "Por que a resposta correta é \"9 linhas de endereço (A0 a A8).\"? O decodificador BCD para 7 Segmentos (como o 7447 para anodo comum ou 7448 para catodo comum) possui a lógica combinacional interna necessária para converter o código binário BCD de 4 bits em ativação precisa dos segmentos (a, b, c, d, e, f, g) do display LED, formando exatamente o caractere ou número decimal indicado na resposta \"9 linhas de endereço (A0 a A8).\".",
    "topic": "2.5 - Memórias [Questão Discursiva]"
  },
  {
    "question": "No conversor A/D ADC0804, há um pino muito específico (pino 9) denominado \"Vref/2\". Segundo o datasheet do componente, se este pino for deixado em aberto (desconectado externamente), o que ocorrerá internamente com a tensão de referência do circuito?",
    "options": [
      "O chip entra em curto-circuito (latch-up) térmico.",
      "O conversor paralisa todas as atividades, aguardando um sinal de Interrupção (INTR).",
      "A tensão de referência cai para zero e o chip passa a atuar como um buffer inversor.",
      "O pino assumirá automaticamente a tensão Vcc/2 (típicamente 2,5V), já que a própria tensão de alimentação (Vcc) passa a atuar como o fundo de escala (5V) por padrão.",
      "A escala analógica suportada sobe instantaneamente para 15V."
    ],
    "answer": "O pino assumirá automaticamente a tensão Vcc/2 (típicamente 2,5V), já que a própria tensão de alimentação (Vcc) passa a atuar como o fundo de escala (5V) por padrão.",
    "explanation": "Por que a resposta correta é \"O pino assumirá automaticamente a tensão Vcc/2 (típicamente 2,5V), já que a própria tensão de alimentação (Vcc) passa a atuar como o fundo de escala (5V) por padrão.\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"O pino assumirá automaticamente a tensão Vcc/2 (típicamente 2,5V), já que a própria tensão de alimentação (Vcc) passa a atuar como o fundo de escala (5V) por padrão.\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "A memória EPROM, durante muito tempo, foi o padrão para a gravação da BIOS das placas-mães. Baseando-se no conceito de semicondutores, como essa memória é efetivamente programada (escrita) e como ela deve ser apagada?",
    "options": [
      "Escrita magneticamente por um cabeçote; apagada desmagnetizando os setores cilíndricos.",
      "Escrita eletricamente, injetando elétrons com alta energia na região da porta em flutuação (flotting-gate) através de pulsos de tensão elevados (Vpp); apagada pela exposição prolongada (aprox. 20 minutos) da pastilha à luz ultravioleta (UV).",
      "Escrita pela \"queima\" destrutiva e irreversível de micro-fusíveis de titânio; impossível de ser apagada.",
      "Escrita aplicando nível lógico 0 ao pino CAS; apagada enviando um pulso em nível 1 ao pino RAS.",
      "Escrita de forma eletromecânica em fábrica (máscara de silício); apagamento feito por raios-X em câmaras de vácuo."
    ],
    "answer": "Escrita eletricamente, injetando elétrons com alta energia na região da porta em flutuação (flotting-gate) através de pulsos de tensão elevados (Vpp); apagada pela exposição prolongada (aprox. 20 minutos) da pastilha à luz ultravioleta (UV).",
    "explanation": "Por que a resposta correta é \"Escrita eletricamente, injetando elétrons com alta energia na região da porta em flutuação (flotting-gate) através de pulsos de tensão elevados (Vpp); apagada pela exposição prolongada (aprox. 20 minutos) da pastilha à luz ultravioleta (UV).\"? As memórias ROM (Read-Only Memory) e suas evoluções programáveis (PROM, EPROM, EEPROM, Flash) são memórias NÃO VOLÁTEIS porque mantêm os bytes armazenados intactos mesmo sem alimentação elétrica, sendo ideais para guardar o firmware executável e tabelas fixas do sistema.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "Ao trabalhar com comunicações entre periféricos e a CPU de um computador (como entre o Teclado e o Processador), lida-se com dispositivos que transferem dados a taxas incrivelmente distintas. Qual a arquitetura de memória projetada especificamente para atuar como um \"Buffer de Transferência\", no qual o primeiro dado armazenado é estritamente o primeiro a ser lido?",
    "options": [
      "Memória LIFO (Last-In, First-Out).",
      "Memória FIFO (First-In, First-Out).",
      "Registrador PIPO (Parallel-In, Parallel-Out).",
      "SDRAM Múltipla.",
      "Memória ROM-Máscara."
    ],
    "answer": "Memória FIFO (First-In, First-Out).",
    "explanation": "Por que a resposta correta é \"Memória FIFO (First-In, First-Out).\"? Analisando o enunciado (\"Ao trabalhar com comunicações entre periféricos e a CPU de um computador (como entre o Teclado e o Processador), lida-se com dispositivos que transferem dados a taxas incrivelmente distintas. Qual a arquitetura de memória projetada especificamente para atuar como um \\\"Buffer de Transferência\\\", no qual o primeiro dado armazenado é estritamente o primeiro a ser lido?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Memória FIFO (First-In, First-Out).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Discursiva]"
  },
  {
    "question": "O CI 74LS154 é um componente clássico da eletrônica digital atuando como Decodificador/Demultiplexador de 4 para 16 linhas. Neste chip, todas as 16 saídas são ativas em nível BAIXO. Para que a pastilha não fique em estado de alta impedância ou inativa, como devem ser polarizadas as suas duas entradas de habilitação de dados (G1 e G2)?",
    "options": [
      "Ambas em nível lógico ALTO (1 e 1).",
      "G1 em nível ALTO e G2 em nível BAIXO (1 e 0).",
      "G1 em nível BAIXO e G2 em nível ALTO (0 e 1).",
      "Ambas devem estar obrigatoriamente em nível lógico BAIXO (0 e 0).",
      "Devem ser polarizadas em Vcc/2."
    ],
    "answer": "Ambas devem estar obrigatoriamente em nível lógico BAIXO (0 e 0).",
    "explanation": "Por que a resposta correta é \"Ambas devem estar obrigatoriamente em nível lógico BAIXO (0 e 0).\"? As saídas Tri-State possuem três condições operacionais: Nível Lógico 1 (Alto), Nível Lógico 0 (Baixo) e Alta Impedância (Hi-Z). No estado de Alta Impedância, a saída se desconecta eletronicamente do circuito (circuito aberto), permitindo que múltiplos dispositivos compartilhem o mesmo barramento de dados sem causar conflitos ou curto-circuitos.",
    "topic": "2.4 - Demultiplex [Questão Discursiva]"
  },
  {
    "question": "A construção de multiplexadores de alta capacidade a partir de CIs comerciais menores exige técnica lógica. Se desejarmos construir um único sistema MUX de 16 canais de dados (16 entradas e 1 saída) utilizando exclusivamente pastilhas MUX de 8 canais, como o circuito principal deve se comportar fisicamente?",
    "options": [
      "Basta ligar as 16 entradas no primeiro chip, pois a multiplexação ocorre por divisão de frequência térmica.",
      "Precisaremos de dois CIs MUX de 8 canais atuando paralelamente, e um terceiro elemento (como um terceiro MUX ou portas lógicas) que utilizará a variável de seleção mais significativa (MSB) para decidir qual dos dois chips iniciais enviará seu dado para a saída final.",
      "Usa-se 16 pastilhas de 8 canais conectadas em cascata (daisy-chain) formando um anel.",
      "É impossível montar um sistema MUX maior sem queimar as portas de seleção internas.",
      "Conecta-se todos os pinos de saída entre si (configuração Wired-OR) e aterra-se o sinal CAS da pastilha mestre."
    ],
    "answer": "Precisaremos de dois CIs MUX de 8 canais atuando paralelamente, e um terceiro elemento (como um terceiro MUX ou portas lógicas) que utilizará a variável de seleção mais significativa (MSB) para decidir qual dos dois chips iniciais enviará seu dado para a saída final.",
    "explanation": "Por que a resposta correta é \"Precisaremos de dois CIs MUX de 8 canais atuando paralelamente, e um terceiro elemento (como um terceiro MUX ou portas lógicas) que utilizará a variável de seleção mais significativa (MSB) para decidir qual dos dois chips iniciais enviará seu dado para a saída final.\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"Precisaremos de dois CIs MUX de 8 canais atuando paralelamente, e um terceiro elemento (como um terceiro MUX ou portas lógicas) que utilizará a variável de seleção mais significativa (MSB) para decidir qual dos dois chips iniciais enviará seu dado para a saída final.\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
    "topic": "2.3 - Multiplex [Questão Direta]"
  },
  {
    "question": "Visando modernizar a automação de uma fragata, o sistema interno de dados baseia-se num barramento primário cuja frequência teórica de trabalho da placa é de 50 MHz e sua largura física de transferência (tamanho do barramento de dados) é de 32 bits de comprimento por ciclo. A Taxa de Transferência limite (em MB/s) deste canal será de:",
    "options": [
      "50 MB/s.",
      "100 MB/s.",
      "200 MB/s.",
      "800 MB/s.",
      "1.600 MB/s."
    ],
    "answer": "200 MB/s.",
    "explanation": "Por que a resposta correta é \"200 MB/s.\"? Analisando o enunciado (\"Visando modernizar a automação de uma fragata, o sistema interno de dados baseia-se num barramento primário cuja frequência teórica de trabalho da placa é de 50 MHz e sua largura física de transferência (tamanho do barramento de dados) é de 32 bits de comprimento por ciclo. A Taxa de Transferência limite (em MB/s) deste canal será de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"200 MB/s.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "(Arquitetura de Barramentos) Em uma arquitetura típica de microcomputadores, a comunicação entre a Unidade Central de Processamento (CPU) e as memórias depende de três vias principais. Qual a principal característica direcional e funcional do Barramento de Endereços (Address Bus)?",
    "options": [
      "É um barramento bidirecional controlado pelo pino INTR, usado para receber e enviar endereços.",
      "É um barramento multiplexado que carrega sinais de clock para manter a memória RAM em sincronismo.",
      "É um barramento unidirecional, conduzindo a informação exclusivamente da CPU para a memória ou dispositivos periféricos, fornecendo a posição exata em que uma leitura ou escrita ocorrerá.",
      "É unidirecional, fluindo da memória de massa para a CPU a fim de indicar que o disco rígido está pronto para transferência.",
      "Funciona de modo serial assíncrono para economizar pinos (Técnica JTAG)."
    ],
    "answer": "É um barramento unidirecional, conduzindo a informação exclusivamente da CPU para a memória ou dispositivos periféricos, fornecendo a posição exata em que uma leitura ou escrita ocorrerá.",
    "explanation": "Por que a resposta correta é \"É um barramento unidirecional, conduzindo a informação exclusivamente da CPU para a memória ou dispositivos periféricos, fornecendo a posição exata em que uma leitura ou escrita ocorrerá.\"? Analisando o enunciado (\"(Arquitetura de Barramentos) Em uma arquitetura típica de microcomputadores, a comunicação entre a Unidade Central de Processamento (CPU) e as memórias depende de três vias principais. Qual a principal característica direcional e funcional do Barramento de Endereços (Address Bus)?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"É um barramento unidirecional, conduzindo a informação exclusivamente da CPU para a memória ou dispositivos periféricos, fornecendo a posição exata em que uma leitura ou escrita ocorrerá.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Discursiva]"
  },
  {
    "question": "(Unidades Internas da CPU) O microprocessador agrupa as funções da CPU em um único chip. Dentre as unidades funcionais clássicas que operam internamente nele, qual é a subunidade estritamente responsável por buscar uma instrução da memória (enviando um endereço e um comando de leitura), decodificá-la e fornecer os sinais de sincronismo para que todo o sistema atue no tempo certo?",
    "options": [
      "Unidade Lógica e Aritmética (ULA).",
      "Unidade de Conversão de Hardware (UCH).",
      "Decodificador de Prioridade BCD.",
      "Unidade de Controle e Temporização (UCT).",
      "Unidade Aritmética de Ponto Flutuante (FPU)."
    ],
    "answer": "Unidade de Controle e Temporização (UCT).",
    "explanation": "Por que a resposta correta é \"Unidade de Controle e Temporização (UCT).\"? Analisando o enunciado (\"(Unidades Internas da CPU) O microprocessador agrupa as funções da CPU em um único chip. Dentre as unidades funcionais clássicas que operam internamente nele, qual é a subunidade estritamente responsável por buscar uma instrução da memória (enviando um endereço e um comando de leitura), decodificá-la e fornecer os sinais de sincronismo para que todo o sistema atue no tempo certo?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Unidade de Controle e Temporização (UCT).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos e CPU [Questão Direta]"
  },
  {
    "question": "(Definição de Software/Programa) A transição entre o hardware puro e o software define a computação. Na concepção de eletrônica digital e arquitetura de computadores, o que define a expressão \"Programa\"?",
    "options": [
      "A plataforma física em que são conectadas a ULA e a UCT.",
      "Um conjunto ordenado e completo de instruções lógicas e aritméticas (códigos binários) que descreve de forma precisa e passo a passo a tarefa que o computador deve executar.",
      "O circuito multiplexador que escolhe qual periférico terá prioridade no barramento PCI.",
      "Um protocolo de refresh implementado em memória de massa magnética.",
      "A tabela verdade física entalhada nos transistores de uma ROM Máscara."
    ],
    "answer": "Um conjunto ordenado e completo de instruções lógicas e aritméticas (códigos binários) que descreve de forma precisa e passo a passo a tarefa que o computador deve executar.",
    "explanation": "Por que a resposta correta é \"Um conjunto ordenado e completo de instruções lógicas e aritméticas (códigos binários) que descreve de forma precisa e passo a passo a tarefa que o computador deve executar.\"? Analisando o enunciado (\"(Definição de Software/Programa) A transição entre o hardware puro e o software define a computação. Na concepção de eletrônica digital e arquitetura de computadores, o que define a expressão \\\"Programa\\\"?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Um conjunto ordenado e completo de instruções lógicas e aritméticas (códigos binários) que descreve de forma precisa e passo a passo a tarefa que o computador deve executar.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos e CPU [Questão Direta]"
  },
  {
    "question": "(Tecnologia DDR-SDRAM) A tecnologia de memória DDR-SDRAM (Double Data Rate) proporcionou um salto imenso de desempenho nas placas-mães modernas se comparada à SDRAM comum (SDR). Qual é o princípio eletro-lógico que permite à memória DDR transferir praticamente o dobro de dados por segundo da tecnologia anterior?",
    "options": [
      "Ela utiliza cristal oscilador interno que multiplica a frequência de base do barramento frontal (FSB) por dois via hardware de PLL.",
      "Reduz a tensão da arquitetura para 3,3V, permitindo ao usuário dobrar o clock via overclocking.",
      "Substitui a matriz de capacitores comum da RAM dinâmica por flip-flops tipo D estáticos (SRAM) em configuração de anel.",
      "Ao invés de usar uma única via, utiliza dois barramentos físicos paralelos independentes controlados pelo sinal ALE.",
      "Consegue ler e entregar os dados em ambas as frentes do sinal de clock (na borda de subida/ativação e na borda de descida/desativação), dobrando a vazão sem dobrar a frequência de operação do cristal."
    ],
    "answer": "Consegue ler e entregar os dados em ambas as frentes do sinal de clock (na borda de subida/ativação e na borda de descida/desativação), dobrando a vazão sem dobrar a frequência de operação do cristal.",
    "explanation": "Por que a resposta correta é \"Consegue ler e entregar os dados em ambas as frentes do sinal de clock (na borda de subida/ativação e na borda de descida/desativação), dobrando a vazão sem dobrar a frequência de operação do cristal.\"? Analisando o enunciado (\"(Tecnologia DDR-SDRAM) A tecnologia de memória DDR-SDRAM (Double Data Rate) proporcionou um salto imenso de desempenho nas placas-mães modernas se comparada à SDRAM comum (SDR). Qual é o princípio eletro-lógico que permite à memória DDR transferir praticamente o dobro de dados por segundo da tecnologia anterior?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Consegue ler e entregar os dados em ambas as frentes do sinal de clock (na borda de subida/ativação e na borda de descida/desativação), dobrando a vazão sem dobrar a frequência de operação do cristal.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Direta]"
  },
  {
    "question": "(Cálculo Físico de Taxa de Transferência) Durante o dimensionamento do hardware de um controlador em tempo real, o engenheiro especificou que o Barramento Frontal irá operar com uma frequência real de 180 MHz, e a largura física do barramento de dados será de 64 bits por pulso. Aplicando o conhecimento teórico de organização de computadores, a taxa máxima teórica de transferência em Megabytes por segundo (MB/s) será de:",
    "options": [
      "720 MB/s.",
      "1.440 MB/s.",
      "2.880 MB/s.",
      "11.520 MB/s.",
      "180 MB/s."
    ],
    "answer": "1.440 MB/s.",
    "explanation": "Por que a resposta correta é \"1.440 MB/s.\"? Analisando o enunciado (\"(Cálculo Físico de Taxa de Transferência) Durante o dimensionamento do hardware de um controlador em tempo real, o engenheiro especificou que o Barramento Frontal irá operar com uma frequência real de 180 MHz, e a largura física do barramento de dados será de 64 bits por pulso. Aplicando o conhecimento teórico de organização de computadores, a taxa máxima teórica de transferência em Megabytes por segundo (MB/s) será de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"1.440 MB/s.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.6 - Barramentos [Questão Discursiva]"
  },
  {
    "question": "(Decodificação e Linhas de Endereço) Um certo equipamento controlador de atuadores robóticos é mapeado diretamente na memória de um microcomputador e possui o endereço de máquina 03FF (representação hexadecimal). Quantas linhas lógicas de endereçamento (fios independentes), no mínimo, a CPU necessitará ativar com nível lógico '1' ou '0' para mapear até esse dispositivo de forma correta?",
    "options": [
      "8 linhas.",
      "10 linhas.",
      "12 linhas.",
      "14 linhas.",
      "16 linhas."
    ],
    "answer": "10 linhas.",
    "explanation": "Por que a resposta correta é \"10 linhas.\"? Analisando o enunciado (\"(Decodificação e Linhas de Endereço) Um certo equipamento controlador de atuadores robóticos é mapeado diretamente na memória de um microcomputador e possui o endereço de máquina 03FF (representação hexadecimal). Quantas linhas lógicas de endereçamento (fios independentes), no mínimo, a CPU necessitará ativar com nível lógico '1' ou '0' para mapear até esse dispositivo de forma correta?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"10 linhas.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    "topic": "2.5 - Memórias [Questão Discursiva]"
  },
  {
    "question": "(Pinos de Controle em ADC0804) O Conversor A/D de aproximações sucessivas (ADC0804) se interliga ao microprocessador via pinos rígidos de controle que ditam o handshake da interface. Avaliando o uso dos pinos 3 (WR) e 5 (INTR), é correto afirmar que os seus comportamentos funcionais são, respectivamente:",
    "options": [
      "O pino WR lê o barramento externo; o INTR define a tensão de referência para as chaves operacionais.",
      "O pino WR (Write) é quem recebe a transição de alto para baixo que Inicia o processo de conversão; o INTR (Interrupt) atua indo para o nível lógico baixo no momento em que ele sinaliza o Fim da conversão para a CPU.",
      "Ambos alimentam eletricamente os comparadores no caso do terra digital (DGND) oscilar.",
      "O pino WR age esvaziando a memória temporária do CI; o INTR eleva a tensão do conversor R-2R acoplado.",
      "O pino WR liga a porta NAND tri-state; o INTR atua como barramento de entrada em 8 bits paralelos."
    ],
    "answer": "O pino WR (Write) é quem recebe a transição de alto para baixo que Inicia o processo de conversão; o INTR (Interrupt) atua indo para o nível lógico baixo no momento em que ele sinaliza o Fim da conversão para a CPU.",
    "explanation": "Por que a resposta correta é \"O pino WR (Write) é quem recebe a transição de alto para baixo que Inicia o processo de conversão; o INTR (Interrupt) atua indo para o nível lógico baixo no momento em que ele sinaliza o Fim da conversão para a CPU.\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"O pino WR (Write) é quem recebe a transição de alto para baixo que Inicia o processo de conversão; o INTR (Interrupt) atua indo para o nível lógico baixo no momento em que ele sinaliza o Fim da conversão para a CPU.\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "(Matemática do Conversor ADC de Escala Customizada) Um equipamento sonoro antigo está sendo adaptado com um CI ADC0804 (8 bits). No circuito esquemático, os pinos de calibração receberam alterações analógicas para suportar um fundo de escala integral de exatos 4,0 VDC. Calcule e determine qual seria a saída digital binária apresentada no barramento se o circuito de áudio aplicar uma tensão de 0,8 Volts na entrada positiva:",
    "options": [
      "00100000",
      "10100101",
      "01101001",
      "00110011",
      "11001100"
    ],
    "answer": "00110011",
    "explanation": "Por que a resposta correta é \"00110011\"? O Conversor Analógico-Digital (A/D ou ADC) amostra uma grandeza analógica e a converte na representação binária correspondente explicada pela alternativa \"00110011\", permitindo o processamento digital por microprocessadores.",
    "topic": "3.2 - Conversores A/D [Questão Direta]"
  },
  {
    "question": "(Topologia e Limitações do Conversor D/A) Conversores Digitais-Analógicos construídos apenas com uma simples rede resistiva direta, destituídos de qualquer filtro ativo ou amplificador na saída, raramente são aplicados na indústria devido a falhas intrínsecas, principalmente porque:",
    "options": [
      "Apresentam elevada impedância de saída que varia com o código binário de entrada, acarretando perda de precisão e queda de tensão ao alimentar cargas analógicas.",
      "Exigem alimentação simétrica de alta tensão incompatível com sistemas microprocessados.",
      "Geram oscilações de alta frequência incontroláveis em todas as portas lógicas acopladas.",
      "Consumem corrente nula da fonte de referência, impedindo a estabilização térmica dos resistores.",
      "São incapazes de converter números binários que contenham o bit mais significativo (MSB) em nível 1."
    ],
    "answer": "Apresentam elevada impedância de saída que varia com o código binário de entrada, acarretando perda de precisão e queda de tensão ao alimentar cargas analógicas.",
    "explanation": "Por que a resposta correta é \"Apresentam elevada impedância de saída que varia com o código binário de entrada, acarretando perda de precisão e queda de tensão ao alimentar cargas analógicas.\"? O Conversor Digital-Analógico (D/A ou DAC) converte uma palavra binária de entrada em tensão ou corrente analógica proporcional na saída. A resposta \"Apresentam elevada impedância de saída que varia com o código binário de entrada, acarretando perda de precisão e queda de tensão ao alimentar cargas analógicas.\" descreve corretamente a topologia resistiva ou funcional do conversor (como a escada R-2R que utiliza apenas dois valores nominais de resistores para simplificar a precisão da rede).",
    "topic": "3.1 - Conversores D/A [Questão Discursiva]"
  }
];
