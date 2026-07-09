import type { Question } from "../types/question";
import circuito121 from "../assets/circuitos/121.jpg";
import circuito126 from "../assets/circuitos/126.jpg";
import circuito127 from "../assets/circuitos/127.jpg";
import circuito129 from "../assets/circuitos/129.jpg";
import circuito131 from "../assets/circuitos/131.jpg";
import circuito133 from "../assets/circuitos/133.jpg";
import circuito134 from "../assets/circuitos/134.jpg";
import demuxDiagram from "../assets/circuitos/demux_diagram_1.png";
import rampaDiagram from "../assets/circuitos/rampa_diagram_1.png";
import triangularDiagram from "../assets/circuitos/triangular_diagram_1.png";

export const eletronica2P2Questions: Question[] = [
  {
    "question": "Canais de entrada, entrada de seleção e saída de informação são características fundamentais de qual bloco lógico?",
    "options": [
      "Multiplex.",
      "Conversor A/D.",
      "Demultiplex.",
      "Conversor D/A.",
      "Mux/Demux."
    ],
    "answer": "Multiplex.",
    "topic": "2.3 - Multiplex [Múltipla Escolha]"
  },
  {
    "question": "Nos circuitos multiplex de 3, 15, 25 e 36 canais, serão usadas, respectivamente, quantas variáveis de seleção?",
    "options": [
      "2, 4, 5 e 6.",
      "1, 3, 5 e 6.",
      "2, 3, 5 e 6.",
      "1, 4, 5 e 6.",
      "3, 4, 5 e 6."
    ],
    "answer": "2, 4, 5 e 6.",
    "topic": "2.3 - Multiplex [Múltipla Escolha]"
  },
  {
    "question": "Um circuito Multiplexador (MUX) com 6 canais de entrada necessita de, no mínimo, quantas variáveis de seleção?",
    "options": [
      "3 variáveis de seleção (2^3 = 8 >= 6).",
      "2 variáveis de seleção.",
      "4 variáveis de seleção.",
      "6 variáveis de seleção.",
      "5 variáveis de seleção."
    ],
    "answer": "3 variáveis de seleção (2^3 = 8 >= 6).",
    "topic": "2.3 - Multiplex [Questão Direta]"
  },
  {
    "question": "No projeto de um circuito MUX, quantas variáveis de seleção seriam necessárias, no mínimo, para selecionar 42 linhas de entrada?",
    "options": [
      "6 variáveis de seleção (2^6 = 64 >= 42).",
      "5 variáveis de seleção (2^5 = 32).",
      "7 variáveis de seleção.",
      "4 variáveis de seleção.",
      "8 variáveis de seleção."
    ],
    "answer": "6 variáveis de seleção (2^6 = 64 >= 42).",
    "topic": "2.3 - Multiplex [Questão Direta]"
  },
  {
    "question": "No projeto de um circuito MUX, quantas variáveis de seleção seriam necessárias para selecionar exatamente 16 linhas de entrada?",
    "options": [
      "4 variáveis de seleção (2^4 = 16).",
      "3 variáveis de seleção.",
      "5 variáveis de seleção.",
      "2 variáveis de seleção.",
      "8 variáveis de seleção."
    ],
    "answer": "4 variáveis de seleção (2^4 = 16).",
    "topic": "2.3 - Multiplex [Questão Direta]"
  },
  {
    "question": "Qual o desenho ou estrutura de um MUX que desempenhe uma função lógica NOR na saída?",
    "options": [
      "Um Multiplexador padrão seguido de um inversor na saída principal Y, ou com a porta somadora final configurada como NOR.",
      "Um MUX cujas linhas de seleção são aterradas.",
      "Um MUX sem portas AND na matriz de decodificação.",
      "Um DEMUX ligado ao contrário.",
      "Um contador síncrono de 4 bits."
    ],
    "answer": "Um Multiplexador padrão seguido de um inversor na saída principal Y, ou com a porta somadora final configurada como NOR.",
    "topic": "2.3 - Multiplex [Questão Discursiva]"
  },
  {
    "question": "Desenhe ou descreva o diagrama de bloco de um MUX 16x1, especificando suas entradas e saídas.",
    "options": [
      "Possui 16 linhas de entrada de dados (D0 a D15), 4 linhas de seleção de endereço (S0 a S3) para decodificar qual canal será roteado, e 1 linha de saída de dados (Y).",
      "Possui 1 linha de entrada, 4 linhas de seleção e 16 saídas.",
      "Possui 16 entradas de dados, nenhuma linha de seleção e 16 saídas.",
      "Possui 8 entradas de dados, 3 seleções e 2 saídas.",
      "Possui apenas portas NAND em cascata sem seleção."
    ],
    "answer": "Possui 16 linhas de entrada de dados (D0 a D15), 4 linhas de seleção de endereço (S0 a S3) para decodificar qual canal será roteado, e 1 linha de saída de dados (Y).",
    "topic": "2.3 - Multiplex [Questão Discursiva]"
  },
  {
    "question": "Em um circuito DEMUX de 16 canais de saída, quando as variáveis de seleção estiverem na condição ABCD = 1100 (onde A é o MSB), a entrada de dados estará ligada a qual saída?",
    "options": [
      "Saída 12.",
      "Saída 10.",
      "Saída 14.",
      "Saída 15.",
      "Saída 8."
    ],
    "answer": "Saída 12.",
    "topic": "2.4 - Demultiplex [Múltipla Escolha]"
  },
  {
    "question": "No projeto de um circuito DEMUX, quantas variáveis de seleção seriam necessárias, no mínimo, para selecionar 65 canais na saída?",
    "options": [
      "7 variáveis de seleção (2^7 = 128 > 65).",
      "6 variáveis de seleção (2^6 = 64).",
      "8 variáveis de seleção.",
      "5 variáveis de seleção.",
      "9 variáveis de seleção."
    ],
    "answer": "7 variáveis de seleção (2^7 = 128 > 65).",
    "topic": "2.4 - Demultiplex [Questão Direta]"
  },
  {
    "question": "Qual é a estrutura de circuito lógico de um DEMUX de quatro canais de saída (1x4)?",
    "image": demuxDiagram,
    "options": [
      "É constituído por 4 portas AND cujas saídas representam Y0 a Y3; cada porta AND recebe a linha comum de dados de entrada e uma das 4 combinações decodificadas de 2 variáveis de seleção.",
      "É formado por 4 flip-flops D em anel.",
      "Constitui-se apenas de uma porta OR de 4 entradas.",
      "É formado por um conversor analógico-digital de 4 canais.",
      "É composto por 4 diodos zener em paralelo."
    ],
    "answer": "É constituído por 4 portas AND cujas saídas representam Y0 a Y3; cada porta AND recebe a linha comum de dados de entrada e uma das 4 combinações decodificadas de 2 variáveis de seleção.",
    "topic": "2.4 - Demultiplex (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "No projeto de um circuito DEMUX de 4 canais de saída (1x4), quais são as equações lógicas das saídas Y0, Y1, Y2 e Y3 em função da entrada de dados D e das seleções A e B?",
    "image": demuxDiagram,
    "options": [
      "Y0 = D·A'·B', Y1 = D·A'·B, Y2 = D·A·B' e Y3 = D·A·B.",
      "Y0 = D+A+B, Y1 = D+A'+B, Y2 = D+A+B' e Y3 = D+A'+B'.",
      "Y0 = A·B, Y1 = A'·B, Y2 = A·B' e Y3 = A'·B'.",
      "Y0 = D·A, Y1 = D·B, Y2 = D·(A+B) e Y3 = D.",
      "Y0 = Y1 = Y2 = Y3 = D·(A⊕B)."
    ],
    "answer": "Y0 = D·A'·B', Y1 = D·A'·B, Y2 = D·A·B' e Y3 = D·A·B.",
    "topic": "2.4 - Demultiplex (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "O código EBCDIC (Extended Binary Coded Decimal Interchange Code) possui quantos bits para cada caractere?",
    "options": [
      "8 bits.",
      "7 bits.",
      "6 bits.",
      "16 bits.",
      "4 bits."
    ],
    "answer": "8 bits.",
    "topic": "2.5 - Códigos e Transmissão [Múltipla Escolha]"
  },
  {
    "question": "Quantas codificações ou caracteres possíveis o código EBCDIC de 8 bits possui?",
    "options": [
      "256 codificações possíveis (2^8).",
      "128 codificações possíveis.",
      "512 codificações possíveis.",
      "64 codificações possíveis.",
      "1024 codificações possíveis."
    ],
    "answer": "256 codificações possíveis (2^8).",
    "topic": "2.5 - Códigos e Transmissão [Questão Direta]"
  },
  {
    "question": "Qual é a diferença fundamental entre os códigos ASCII e EBCDIC?",
    "options": [
      "O código ASCII padrão utiliza 7 bits (128 combinações de caracteres), enquanto o EBCDIC utiliza 8 bits (256 combinações de caracteres).",
      "O código ASCII é numérico e o EBCDIC é analógico.",
      "O código EBCDIC não permite representar símbolos especiais.",
      "O código ASCII possui 16 bits e o EBCDIC 4 bits.",
      "Não há diferença no número de bits ou na tabela de caracteres."
    ],
    "answer": "O código ASCII padrão utiliza 7 bits (128 combinações de caracteres), enquanto o EBCDIC utiliza 8 bits (256 combinações de caracteres).",
    "topic": "2.5 - Códigos e Transmissão [Questão Discursiva]"
  },
  {
    "question": "Além de números, um computador deve reconhecer letras, sinais de pontuação e caracteres especiais através de códigos. Como são conhecidos esses códigos?",
    "options": [
      "Códigos alfanuméricos.",
      "Códigos BCD puros.",
      "Códigos decimais sem sinal.",
      "Códigos de gray.",
      "Códigos analógicos discretos."
    ],
    "answer": "Códigos alfanuméricos.",
    "topic": "2.5 - Códigos e Transmissão [Questão Direta]"
  },
  {
    "question": "Descreva para que serve o método de paridade (bit de paridade) na transmissão de dados digitais.",
    "options": [
      "Serve para a detecção de erros ocorridos durante a transmissão ou armazenamento de dados, adicionando um bit extra para que o número total de bits '1' seja par (paridade par) ou ímpar (paridade ímpar).",
      "Serve para corrigir automaticamente qualquer número de bits alterados sem precisar de retransmissão.",
      "Serve para dobrar a velocidade de transmissão no cabo.",
      "Serve para criptografar a mensagem contra leitura não autorizada.",
      "Serve para sincronizar a voltagem da fonte de alimentação."
    ],
    "answer": "Serve para a detecção de erros ocorridos durante a transmissão ou armazenamento de dados, adicionando um bit extra para que o número total de bits '1' seja par (paridade par) ou ímpar (paridade ímpar).",
    "topic": "2.5 - Códigos e Transmissão [Questão Discursiva]"
  },
  {
    "question": "Qual deve ser o valor do BIT de paridade para uma paridade ímpar que deve ser adicionado à informação 1001100 antes da transmissão?",
    "options": [
      "0 (pois a palavra 1001100 já possui três bits '1', que é ímpar).",
      "1 (para tornar a quantidade total ímpar).",
      "Depende do primeiro bit da palavra.",
      "Sempre 1 no início da transmissão.",
      "Sempre 0 independentemente dos dados."
    ],
    "answer": "0 (pois a palavra 1001100 já possui três bits '1', que é ímpar).",
    "topic": "2.5 - Códigos e Transmissão [Questão Direta]"
  },
  {
    "question": "A afirmativa: 'Através do bit de paridade, podemos determinar exatamente qual dos bits de uma informação está errado' é verdadeira ou falsa? Justifique.",
    "options": [
      "Falsa. O bit de paridade simples permite apenas detectar a ocorrência de um erro em número ímpar de bits, mas não é capaz de localizar a posição exata do bit corrompido.",
      "Verdadeira. O bit de paridade indica o índice exato do erro na palavra.",
      "Verdadeira se o código utilizado for ASCII 7 bits.",
      "Falsa, pois a paridade não detecta nenhum erro digital.",
      "Verdadeira apenas em comunicações ópticas."
    ],
    "answer": "Falsa. O bit de paridade simples permite apenas detectar a ocorrência de um erro em número ímpar de bits, mas não é capaz de localizar a posição exata do bit corrompido.",
    "topic": "2.5 - Códigos e Transmissão [Questão Discursiva]"
  },
  {
    "question": "Qual é a melhor maneira de se transmitir dados digitais a longas distâncias entre sistemas?",
    "options": [
      "Transmissão em série, pois requer menos condutores (menor custo) e apresenta muito menor interferência (crosstalk) em comparação com cabos paralelos.",
      "Transmissão em paralelo com barramento de 64 fios.",
      "Transmissão analógica sem conversão.",
      "Transmissão por cabo paralelo não blindado.",
      "Transmissão em alta tensão sem clock."
    ],
    "answer": "Transmissão em série, pois requer menos condutores (menor custo) e apresenta muito menor interferência (crosstalk) em comparação com cabos paralelos.",
    "topic": "2.5 - Códigos e Transmissão [Questão Direta]"
  },
  {
    "question": "Cite duas (2) características fundamentais da transmissão de dados no modo série.",
    "options": [
      "Os bits são enviados sequencialmente um após o outro por um único canal de comunicação, sendo ideal para longas distâncias e necessitando de registradores de deslocamento na transmissão e recepção.",
      "Envia todos os bits da palavra simultaneamente por múltiplos fios paralelos.",
      "Requer cabos muito mais espessos que a transmissão paralela.",
      "Não necessita de sincronismo por clock ou bits de start/stop.",
      "Apresenta alta interferência mútua entre canais adjacentes."
    ],
    "answer": "Os bits são enviados sequencialmente um após o outro por um único canal de comunicação, sendo ideal para longas distâncias e necessitando de registradores de deslocamento na transmissão e recepção.",
    "topic": "2.5 - Códigos e Transmissão [Questão Discursiva]"
  },
  {
    "question": "Onde a transmissão em série de dados se mostra mais útil e recomendada?",
    "options": [
      "Em comunicações entre computadores e periféricos distantes, redes de telecomunicações e conexões de longa distância.",
      "Apenas nas ligações internas entre os registradores da ULA na CPU.",
      "Exclusivamente para displays de 7 segmentos na mesma placa.",
      "Apenas em circuitos que não utilizam relógio digital.",
      "Quando a distância é inferior a 1 centímetro."
    ],
    "answer": "Em comunicações entre computadores e periféricos distantes, redes de telecomunicações e conexões de longa distância.",
    "topic": "2.5 - Códigos e Transmissão [Questão Direta]"
  },
  {
    "question": "A afirmativa: 'Os problemas de interferência entre os sinais, em uma transmissão de dados em paralelo, são resolvidos com o aumento da espessura dos condutores' é verdadeira ou falsa? Justifique.",
    "options": [
      "Falsa. O aumento da espessura dos condutores não elimina o acoplamento capacitivo e indutivo entre fios paralelos próximos; a solução adequada envolve blindagem, trançamento ou conversão para transmissão série.",
      "Verdadeira. Fios mais espessos impedem campos magnéticos.",
      "Verdadeira apenas em cabos coaxiais.",
      "Falsa, pois a interferência em cabos paralelos não existe.",
      "Verdadeira se a tensão for zerada."
    ],
    "answer": "Falsa. O aumento da espessura dos condutores não elimina o acoplamento capacitivo e indutivo entre fios paralelos próximos; a solução adequada envolve blindagem, trançamento ou conversão para transmissão série.",
    "topic": "2.5 - Códigos e Transmissão [Questão Discursiva]"
  },
  {
    "question": "Qual é o código de 7 bits amplamente utilizado em computadores para transformar os caracteres de teclado em representação binária padrão?",
    "options": [
      "Código ASCII (American Standard Code for Information Interchange).",
      "Código EBCDIC.",
      "Código BCD 8421.",
      "Código de Gray.",
      "Código Hamming de 8 bits."
    ],
    "answer": "Código ASCII (American Standard Code for Information Interchange).",
    "topic": "2.5 - Códigos e Transmissão [Questão Direta]"
  },
  {
    "question": "No que se refere à troca de dados com outros componentes do sistema, qual é a memória de acesso aleatório, volátil e de escrita/leitura?",
    "options": [
      "RAM.",
      "ROM.",
      "PROM.",
      "EPROM.",
      "EEPROM."
    ],
    "answer": "RAM.",
    "topic": "2.6 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "Qual tipo de memória permite o apagamento dos dados armazenados através da exposição de sua pastilha semicondutora à luz ultravioleta?",
    "options": [
      "EPROM.",
      "EEPROM.",
      "PROM.",
      "DRAM.",
      "Flash ROM."
    ],
    "answer": "EPROM.",
    "topic": "2.6 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "Quanto ao armazenamento e retenção de dados na ausência de energia elétrica, como podem ser classificadas as memórias?",
    "options": [
      "Voláteis (perdem os dados quando a alimentação é desligada, ex.: RAM) e Não Voláteis (retêm os dados mesmo sem energia, ex.: ROM/EPROM/Flash).",
      "Analógicas e Digitais exclusivamente.",
      "Síncronas e Assíncronas apenas.",
      "Estáticas e Magnéticas apenas.",
      "Unidirecionais e Bidirecionais."
    ],
    "answer": "Voláteis (perdem os dados quando a alimentação é desligada, ex.: RAM) e Não Voláteis (retêm os dados mesmo sem energia, ex.: ROM/EPROM/Flash).",
    "topic": "2.6 - Memórias [Questão Discursiva]"
  },
  {
    "question": "Uma memória de capacidade 32k x 8 possui quais características de posições, total de bits e linhas de endereço?",
    "options": [
      "32768 posições, 262144 bits e 15 linhas de endereços.",
      "32000 posições, 256000 bits e 15 linhas de endereços.",
      "32768 posições, 262144 bits e 16 linhas de endereços.",
      "16384 posições, 131072 bits e 14 linhas de endereços.",
      "32768 posições, 32768 bits e 8 linhas de endereços."
    ],
    "answer": "32768 posições, 262144 bits e 15 linhas de endereços.",
    "topic": "2.6 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "Qual é a capacidade total em bits que uma memória estruturada como 16K x 2 pode armazenar?",
    "options": [
      "32.768 bits (16.384 * 2).",
      "16.384 bits.",
      "65.536 bits.",
      "131.072 bits.",
      "8.192 bits."
    ],
    "answer": "32.768 bits (16.384 * 2).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "Quantas linhas de endereço são necessárias para acessar uma memória estruturada como 4K x 2?",
    "options": [
      "12 linhas de endereço (2^12 = 4096 = 4K).",
      "10 linhas de endereço.",
      "14 linhas de endereço.",
      "8 linhas de endereço.",
      "16 linhas de endereço."
    ],
    "answer": "12 linhas de endereço (2^12 = 4096 = 4K).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "No mínimo, quantas linhas de endereço são necessárias para acessar o endereço hexadecimal 03FFh em uma memória?",
    "options": [
      "10 linhas de endereço (03FFh = 1023 decimal, totalizando 1024 posições = 2^10).",
      "8 linhas de endereço.",
      "12 linhas de endereço.",
      "16 linhas de endereço.",
      "9 linhas de endereço."
    ],
    "answer": "10 linhas de endereço (03FFh = 1023 decimal, totalizando 1024 posições = 2^10).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "No mínimo, quantas linhas de endereço necessitaríamos para acessar o endereço hexadecimal 01FFh?",
    "options": [
      "9 linhas de endereço (01FFh = 511 decimal, totalizando 512 posições = 2^9).",
      "8 linhas de endereço.",
      "10 linhas de endereço.",
      "12 linhas de endereço.",
      "7 linhas de endereço."
    ],
    "answer": "9 linhas de endereço (01FFh = 511 decimal, totalizando 512 posições = 2^9).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "Quais são os sinais de controle utilizados no endereçamento em duas etapas em uma memória DRAM?",
    "options": [
      "CAS (Column Address Strobe) e RAS (Row Address Strobe).",
      "OE e CE apenas.",
      "CLK e RESET.",
      "WR e CS apenas.",
      "RW e INT."
    ],
    "answer": "CAS (Column Address Strobe) e RAS (Row Address Strobe).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "O uso da multiplexação de endereços veio para reduzir o número de pinos dos CIs de memória. Uma DRAM de 1 MB (1 M x 1), usando multiplexação de endereços, necessita de quantas linhas físicas de endereço no CI?",
    "options": [
      "10 linhas físicas de endereço (multiplexando 10 bits de linha e 10 bits de coluna para formar 20 bits de endereço total).",
      "20 linhas físicas de endereço.",
      "16 linhas físicas de endereço.",
      "8 linhas físicas de endereço.",
      "12 linhas físicas de endereço."
    ],
    "answer": "10 linhas físicas de endereço (multiplexando 10 bits de linha e 10 bits de coluna para formar 20 bits de endereço total).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual é a DRAM em arquitetura de computador que possui duas portas (ou duas entradas) para acesso independente e simultâneo?",
    "options": [
      "VRAM (Video RAM) ou Dual-Port RAM.",
      "SRAM assíncrona.",
      "EPROM UV.",
      "PROM fusível.",
      "SDRAM padrão de porta única."
    ],
    "answer": "VRAM (Video RAM) ou Dual-Port RAM.",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual tipo de memória permite fazer o apagamento e regravação elétrica seletiva diretamente no circuito por setor ou bloco?",
    "options": [
      "Memória Flash (ou EEPROM por bloco).",
      "Memória ROM mascarada.",
      "Memória EPROM por ultravioleta.",
      "Memória PROM descartável.",
      "Memória de núcleo magnético."
    ],
    "answer": "Memória Flash (ou EEPROM por bloco).",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "Que memória foi construída a partir da junção e evolução das memórias EPROM e EEPROM, oferecendo alta densidade e apagamento elétrico em setores?",
    "options": [
      "Memória Flash.",
      "Memória SRAM estática.",
      "Memória DRAM em coluna.",
      "Memória PROM térmica.",
      "Memória cache L1."
    ],
    "answer": "Memória Flash.",
    "topic": "2.6 - Memórias [Questão Direta]"
  },
  {
    "question": "Qual é a principal desvantagem da memória DRAM em relação à memória SRAM?",
    "options": [
      "Necessidade de ciclos periódicos de refrescamento (refresh) para manter os dados nas capacitâncias e menor velocidade de operação.",
      "Maior consumo em repouso por célula.",
      "Ocupa mais área de silício por bit.",
      "Custo muito superior por Megabyte.",
      "Não permite reescrita de dados."
    ],
    "answer": "Necessidade de ciclos periódicos de refrescamento (refresh) para manter os dados nas capacitâncias e menor velocidade de operação.",
    "topic": "2.6 - Memórias [Questão Discursiva]"
  },
  {
    "question": "Das características de uma memória, defina o que é TEMPO DE ACESSO (Access Time).",
    "options": [
      "O tempo decorrido entre a aplicação de um endereço válido no CI de memória e o momento em que os dados correspondentes estão estáveis e disponíveis nos pinos de saída.",
      "O tempo necessário para resfriar a pastilha após a escrita.",
      "O intervalo mínimo entre duas energizações do computador.",
      "A frequência máxima de operação do clock da CPU.",
      "O tempo de gravação permanente em uma ROM."
    ],
    "answer": "O tempo decorrido entre a aplicação de um endereço válido no CI de memória e o momento em que os dados correspondentes estão estáveis e disponíveis nos pinos de saída.",
    "topic": "2.6 - Memórias [Questão Discursiva]"
  },
  {
    "question": "A memória PIPELINE BURST, amplamente usada como cache rápida em computadores, é classificada como que tipo de memória?",
    "options": [
      "SRAM síncrona com registradores internos de pipeline.",
      "DRAM assíncrona convencional.",
      "EEPROM serial lenta.",
      "ROM magnética.",
      "EPROM de alta voltagem."
    ],
    "answer": "SRAM síncrona com registradores internos de pipeline.",
    "topic": "2.6 - Memórias [Múltipla Escolha]"
  },
  {
    "question": "A afirmativa: 'Uma memória DDR-SDRAM trabalha com uma frequência real que é o dobro daquela usada na SDRAM-SDR, para poder transferir o dobro da taxa de dados' é verdadeira ou falsa? Justifique.",
    "options": [
      "Falsa. A frequência de clock real pode ser a mesma; a DDR-SDRAM transfere o dobro de dados porque realiza transferências em ambas as bordas do clock (subida e descida).",
      "Verdadeira. A DDR sempre dobra o clock físico de silício.",
      "Verdadeira apenas em placas-mãe sem barramento de dados.",
      "Falsa, pois a DDR opera com metade da taxa da SDR.",
      "Verdadeira se a tensão for de 5V."
    ],
    "answer": "Falsa. A frequência de clock real pode ser a mesma; a DDR-SDRAM transfere o dobro de dados porque realiza transferências em ambas as bordas do clock (subida e descida).",
    "topic": "2.6 - Memórias [Questão Discursiva]"
  },
  {
    "question": "Qual é a taxa de transferência de dados de um barramento que opera a 50 MHz com largura de palavra de 32 bits (4 bytes)?",
    "options": [
      "200 MB/s (50 MHz * 4 bytes).",
      "100 MB/s.",
      "400 MB/s.",
      "50 MB/s.",
      "1600 MB/s."
    ],
    "answer": "200 MB/s (50 MHz * 4 bytes).",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "Qual é a taxa de transferência de dados de um barramento que opera a 150 MHz com largura de palavra de 64 bits (8 bytes)?",
    "options": [
      "1.200 MB/s ou 1,2 GB/s (150 MHz * 8 bytes).",
      "800 MB/s.",
      "600 MB/s.",
      "2.400 MB/s.",
      "9.600 MB/s."
    ],
    "answer": "1.200 MB/s ou 1,2 GB/s (150 MHz * 8 bytes).",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "Qual é a taxa de transferência de dados de um barramento que opera a 180 MHz com largura de palavra de 64 bits (8 bytes)?",
    "options": [
      "1.440 MB/s ou 1,44 GB/s (180 MHz * 8 bytes).",
      "1.200 MB/s.",
      "900 MB/s.",
      "2.880 MB/s.",
      "360 MB/s."
    ],
    "answer": "1.440 MB/s ou 1,44 GB/s (180 MHz * 8 bytes).",
    "topic": "2.6 - Barramentos [Questão Direta]"
  },
  {
    "question": "Observando a Figura 121 (Barramentos do Sistema), como são estruturados e classificados os três barramentos de interligação entre CPU, Memória e Unidades de E/S?",
    "image": circuito121,
    "options": [
      "Barramento de Endereços (unidirecional da CPU para memória/dispositivos), Barramento de Dados (bidirecional) e Barramento de Controle (sinais de leitura/escrita e sincronismo).",
      "Barramento Primário, Barramento Secundário e Barramento Terciário.",
      "Barramento TTL, Barramento CMOS e Barramento ECL.",
      "Barramento Analógico, Barramento Digital e Barramento Misto.",
      "Barramento de Entrada, Barramento de Saída e Barramento de Terra."
    ],
    "answer": "Barramento de Endereços (unidirecional da CPU para memória/dispositivos), Barramento de Dados (bidirecional) e Barramento de Controle (sinais de leitura/escrita e sincronismo).",
    "topic": "2.6 - Barramentos (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "Na comunicação entre as unidades de um computador mostrado no esquema de barramentos, defina o que é e qual a função do BARRAMENTO DE ENDEREÇOS.",
    "image": circuito121,
    "options": [
      "Um conjunto de condutores unidirecionais pelos quais a CPU envia a identificação (endereço numérico) da posição de memória ou dispositivo com o qual deseja se comunicar.",
      "Um barramento bidirecional que transporta os dados de áudio do sistema.",
      "As linhas que alimentam o circuito integrado com 5 V e terra.",
      "As linhas exclusivas para sinal de clock de alta frequência.",
      "Um barramento analógico de controle de ganho."
    ],
    "answer": "Um conjunto de condutores unidirecionais pelos quais a CPU envia a identificação (endereço numérico) da posição de memória ou dispositivo com o qual deseja se comunicar.",
    "topic": "2.6 - Barramentos (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "Qual unidade funcional de um microcomputador é responsável por transferir os dados processados internamente para os dispositivos do mundo exterior?",
    "options": [
      "Unidade de Saída.",
      "Unidade Lógica e Aritmética (ULA).",
      "Unidade de Controle.",
      "Unidade de Memória.",
      "Unidade de Temporização."
    ],
    "answer": "Unidade de Saída.",
    "topic": "2.6 - Arquitetura [Múltipla Escolha]"
  },
  {
    "question": "O que significa e como se comporta um sinal analógico no mundo real em oposição a um sinal digital?",
    "options": [
      "É um sinal que varia de forma contínua no tempo, podendo assumir infinitos valores intermediários de amplitude (tensão ou corrente) dentro de uma faixa.",
      "É um sinal que assume apenas dois valores discretos 0 V e 5 V.",
      "É um sinal imune a atenuação em linhas de transmissão.",
      "É um sinal que ocorre apenas dentro de registradores CMOS.",
      "É uma onda retangular pura de 50% de ciclo de trabalho."
    ],
    "answer": "É um sinal que varia de forma contínua no tempo, podendo assumir infinitos valores intermediários de amplitude (tensão ou corrente) dentro de uma faixa.",
    "topic": "3.1 - Conversores D/A [Questão Discursiva]"
  },
  {
    "question": "Qual é a finalidade principal do uso de Amplificadores Operacionais na saída de conversores D/A (Digital-Analógico)?",
    "image": circuito126,
    "options": [
      "Atuar como somador de correntes e conversor corrente-tensão, fornecendo uma saída analógica em tensão proporcional à palavra binária com baixa impedância de saída.",
      "Gerar pulsos de clock de altíssima frequência.",
      "Multiplexar os canais analógicos de entrada.",
      "Substituir a referência de tensão zener.",
      "Digitalizar a onda analógica em bits discretos."
    ],
    "answer": "Atuar como somador de correntes e conversor corrente-tensão, fornecendo uma saída analógica em tensão proporcional à palavra binária com baixa impedância de saída.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "Quantos níveis de tensão analógicos discretos diferentes um conversor D/A de 12 bits é capaz de produzir em sua saída?",
    "options": [
      "4.096 níveis (2^12).",
      "1.024 níveis.",
      "2.048 níveis.",
      "65.536 níveis.",
      "256 níveis."
    ],
    "answer": "4.096 níveis (2^12).",
    "topic": "3.1 - Conversores D/A [Questão Direta]"
  },
  {
    "question": "Podemos construir um conversor digital-analógico com chave seletora digital na entrada. Neste caso, a chave seletora será formada por quais componentes eletrônicos típicos?",
    "image": circuito133,
    "options": [
      "Transistores MOS / portas CMOS operando como chaves analógicas.",
      "Relés eletromecânicos de potência.",
      "Transformadores em núcleo de ar.",
      "Pontes de diodos zener.",
      "Lâmpadas incandescentes."
    ],
    "answer": "Transistores MOS / portas CMOS operando como chaves analógicas.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Múltipla Escolha]"
  },
  {
    "question": "Que circuito devemos usar para aumentar ou amplificar o valor da tensão de fundo de escala na saída de um conversor D/A básico?",
    "image": circuito126,
    "options": [
      "Um amplificador operacional na configuração amplificadora (somador/não-inversor) com resistores de ganho ajustados.",
      "Um simples diodo zener em série.",
      "Mais portas NAND na entrada.",
      "Um capacitor de acoplamento de alto valor.",
      "Um transformador abaixador."
    ],
    "answer": "Um amplificador operacional na configuração amplificadora (somador/não-inversor) com resistores de ganho ajustados.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "Com base no circuito do conversor D/A da Figura 126 com Vref = -16 V e amplificador operacional inversor, qual é a tensão de saída Vs produzida para a combinação de entrada apresentada?",
    "image": circuito126,
    "options": [
      "-9,6 V.",
      "-6,0 V.",
      "-7,2 V.",
      "-8,4 V.",
      "-4,8 V."
    ],
    "answer": "-9,6 V.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Múltipla Escolha]"
  },
  {
    "question": "Analisando a Figura 127 (Conversor D/A com código BCD 8421), explique a relação entre os resistores de entrada e o peso dos bits.",
    "image": circuito127,
    "options": [
      "Os resistores possuem valores inversamente proporcionais aos pesos dos bits (R, 2R, 4R, 8R), gerando correntes proporcionais ao valor numérico BCD.",
      "Todos os resistores têm exatamente o mesmo valor em ohms.",
      "Os resistores são idênticos aos de uma memória ROM.",
      "O bit LSB utiliza o menor resistor da rede.",
      "Não há relação entre a resistência e o peso binário."
    ],
    "answer": "Os resistores possuem valores inversamente proporcionais aos pesos dos bits (R, 2R, 4R, 8R), gerando correntes proporcionais ao valor numérico BCD.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "No conversor D/A utilizando a rede em escada R-2R da Figura 129, onde Vcc = 6 V, qual é a tensão analógica Vs na saída quando a entrada binária é A B C D = 1 0 0 0 (onde A é o MSB)?",
    "image": circuito129,
    "options": [
      "3,0 V (metade da tensão Vcc para o MSB isolado).",
      "1,5 V.",
      "4,5 V.",
      "6,0 V.",
      "0,75 V."
    ],
    "answer": "3,0 V (metade da tensão Vcc para o MSB isolado).",
    "topic": "3.1 - Conversores D/A (Com Figura) [Múltipla Escolha]"
  },
  {
    "question": "No conversor D/A da Figura 129 com Vcc = 6 V, qual será a tensão de saída Vs quando a entrada for A = 1, B = 1, C = 1 e D = 0?",
    "image": circuito129,
    "options": [
      "5,25 V (soma das contribuições: 3,0 V + 1,5 V + 0,75 V).",
      "4,5 V.",
      "3,5 V.",
      "2,5 V.",
      "6,0 V."
    ],
    "answer": "5,25 V (soma das contribuições: 3,0 V + 1,5 V + 0,75 V).",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "Na Figura 133 (Conversor D/A chaveado), qual é o papel e o funcionamento dos transistores ou portas CMOS operando como chaves eletrônicas analógicas?",
    "image": circuito133,
    "options": [
      "Comutar com precisão cada ramo da rede resistiva entre a tensão de referência (Vref) e o terra, conforme o estado '1' ou '0' de cada bit digital.",
      "Atuar como retificadores de potência para a fonte de alimentação.",
      "Gerar a frequência de clock de 10 MHz.",
      "Amplificar o sinal de áudio de saída.",
      "Proteger o circuito contra curtos-circuitos."
    ],
    "answer": "Comutar com precisão cada ramo da rede resistiva entre a tensão de referência (Vref) e o terra, conforme o estado '1' ou '0' de cada bit digital.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "Observando a Figura 134 (Conversor D/A com rede R-2R e Amp Op na saída), explique duas vantagens importantes dessa configuração em circuitos integrados.",
    "image": circuito134,
    "options": [
      "Utiliza apenas dois valores nominais de resistores (R e 2R), garantindo excelente estabilidade térmica e facilidade de fabricação e balanceamento em circuito integrado.",
      "Requer resistores com valores que variam de 1 ohm até 1 megaohm.",
      "Não necessita de fonte de referência analógica.",
      "Consome corrente variável da fonte de referência dependendo do código de entrada.",
      "Opera apenas em temperaturas criogênicas."
    ],
    "answer": "Utiliza apenas dois valores nominais de resistores (R e 2R), garantindo excelente estabilidade térmica e facilidade de fabricação e balanceamento em circuito integrado.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "Em um conversor D/A BCD 8421 elementar (Fig. 3.7 / Fig. 3.8 da apostila, equivalente ao esquema da Fig. 127), onde o LSB (bit D) produz 1 mV de saída, qual será a tensão analógica de saída para a palavra de entrada binária 1101 (A=1, B=1, C=0, D=1)?",
    "image": circuito127,
    "options": [
      "13 mV (pois A=8 mV, B=4 mV e D=1 mV, somando 8 + 4 + 1 = 13 mV).",
      "11 mV.",
      "15 mV.",
      "10 mV.",
      "7 mV."
    ],
    "answer": "13 mV (pois A=8 mV, B=4 mV e D=1 mV, somando 8 + 4 + 1 = 13 mV).",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "No conversor D/A com amplificador operacional da Fig. 3.14 da apostila (esquematizado na Fig. 126, com Vcc = 16 V e resistores Ro = R = 5 kΩ), qual é a tensão analógica na saída para a entrada binária 0011 (A=0, B=0, C=1, D=1)?",
    "image": circuito126,
    "options": [
      "3,0 V (soma dos pesos C=2V e D=1V).",
      "1,5 V.",
      "4,5 V.",
      "6,0 V.",
      "12,0 V."
    ],
    "answer": "3,0 V (soma dos pesos C=2V e D=1V).",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "No conversor D/A com amplificador operacional da Fig. 3.14 da apostila (esquematizado na Fig. 126, com Vcc = 16 V), qual será a tensão analógica de saída quando a entrada for 0111 (A=0, B=1, C=1, D=1)?",
    "image": circuito126,
    "options": [
      "7,0 V (soma das contribuições B=4V, C=2V e D=1V).",
      "8,0 V.",
      "5,0 V.",
      "14,0 V.",
      "3,5 V."
    ],
    "answer": "7,0 V (soma das contribuições B=4V, C=2V e D=1V).",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "Para o circuito conversor D/A da Fig. 3.17 da apostila (esquematizado na Fig. 126), determine a tensão analógica de saída para a palavra de entrada binária 0010.",
    "image": circuito126,
    "options": [
      "-2,4 V.",
      "-4,8 V.",
      "-1,2 V.",
      "-9,6 V.",
      "-3,6 V."
    ],
    "answer": "-2,4 V.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "Para o circuito conversor D/A da Fig. 3.17 da apostila (esquematizado na Fig. 126), determine a tensão analógica de saída para a palavra de entrada binária 0100.",
    "image": circuito126,
    "options": [
      "-4,8 V.",
      "-2,4 V.",
      "-7,2 V.",
      "-9,6 V.",
      "-10,8 V."
    ],
    "answer": "-4,8 V.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "Para o circuito conversor D/A da Fig. 3.17 da apostila (esquematizado na Fig. 126), determine a tensão analógica de saída para a palavra de entrada binária 1001.",
    "image": circuito126,
    "options": [
      "-10,8 V.",
      "-12,0 V.",
      "-9,6 V.",
      "-18,0 V.",
      "-8,4 V."
    ],
    "answer": "-10,8 V.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "Para o circuito conversor D/A da Fig. 3.17 da apostila (esquematizado na Fig. 126), determine a tensão analógica de saída para a palavra de entrada binária 1111 (fundo de escala).",
    "image": circuito126,
    "options": [
      "-18,0 V.",
      "-15,0 V.",
      "-12,0 V.",
      "-24,0 V.",
      "-16,2 V."
    ],
    "answer": "-18,0 V.",
    "topic": "3.1 - Conversores D/A (Com Figura) [Questão Direta]"
  },
  {
    "question": "No conversor A/D integrado ADC0804 mostrado na Figura 131, quais são as funções principais dos pinos de controle CS (Chip Select) e RD (Read)?",
    "image": circuito131,
    "options": [
      "CS ativo em nível baixo seleciona/habilita o chip no barramento; RD ativo em nível baixo habilita as saídas digitais tri-state para leitura do dado convertido.",
      "CS inicia o clock interno; RD reseta os registradores SAR.",
      "CS calibra o zero analógico; RD inverte a polaridade.",
      "CS e RD alimentam o amplificador de instrumentação interno.",
      "CS e RD são saídas de alarme térmico."
    ],
    "answer": "CS ativo em nível baixo seleciona/habilita o chip no barramento; RD ativo em nível baixo habilita as saídas digitais tri-state para leitura do dado convertido.",
    "topic": "3.2 - Conversores A/D (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "No conversor ADC0804 da Figura 131, qual é a função específica dos pinos INTR (Interrupt, pino 5) e WR (Write, pino 3)?",
    "image": circuito131,
    "options": [
      "WR em pulso baixo inicia uma nova conversão analógico-digital; INTR vai a nível baixo quando a conversão é concluída, avisando o microprocessador.",
      "WR grava um programa na memória do conversor; INTR desliga a alimentação.",
      "WR seleciona a entrada diferencial; INTR ajusta a frequência de clock.",
      "WR aumenta a resolução de 8 para 10 bits; INTR reseta o contador.",
      "WR e INTR são entradas de sinal de áudio."
    ],
    "answer": "WR em pulso baixo inicia uma nova conversão analógico-digital; INTR vai a nível baixo quando a conversão é concluída, avisando o microprocessador.",
    "topic": "3.2 - Conversores A/D (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "No conversor A/D ADC0804 da Figura 131 com fundo de escala analógico ajustado para 5,0 V, se a tensão analógica aplicada na entrada for 2,0 V, qual será aproximadamente a palavra binária de 8 bits na saída?",
    "image": circuito131,
    "options": [
      "01100110 (equivalente a 102 decimal, pois 102 * (5,0V / 255) ≈ 2,0 V).",
      "11001000.",
      "01001100.",
      "00100110.",
      "11111111."
    ],
    "answer": "01100110 (equivalente a 102 decimal, pois 102 * (5,0V / 255) ≈ 2,0 V).",
    "topic": "3.2 - Conversores A/D (Com Figura) [Múltipla Escolha]"
  },
  {
    "question": "Em um conversor A/D similar ao da Figura 131, com a escala analógica total calibrada para 4,0 VDC, qual será o valor digital de saída (em decimal) para uma entrada analógica de 0,8 V?",
    "image": circuito131,
    "options": [
      "51 decimal (pois 0,8 V / 4,0 V = 20% da escala total de 255 ≈ 51).",
      "128 decimal.",
      "100 decimal.",
      "25 decimal.",
      "200 decimal."
    ],
    "answer": "51 decimal (pois 0,8 V / 4,0 V = 20% da escala total de 255 ≈ 51).",
    "topic": "3.2 - Conversores A/D (Com Figura) [Questão Direta]"
  },
  {
    "question": "No circuito do conversor A/D ADC0804 da Fig. 3.27 da apostila (esquematizado na Fig. 131), modificando a escala total de tensão analógica para 7,6 V (resolução = 29,8 mV/bit), qual será a saída digital em binário para uma entrada analógica de 0,9 V?",
    "image": circuito131,
    "options": [
      "00011110 (equivalente ao valor inteiro 30 decimal, pois 0,9 V / 0,0298 V = 30,2).",
      "00110010 (50 decimal).",
      "01000110 (70 decimal).",
      "00001111 (15 decimal).",
      "00100000 (32 decimal)."
    ],
    "answer": "00011110 (equivalente ao valor inteiro 30 decimal, pois 0,9 V / 0,0298 V = 30,2).",
    "topic": "3.2 - Conversores A/D (Com Figura) [Questão Direta]"
  },
  {
    "question": "No circuito do conversor A/D ADC0804 da Fig. 3.27 da apostila (esquematizado na Fig. 131) com escala total analógica de 7,6 V (resolução = 29,8 mV/bit), calcule a palavra digital binária na saída para uma entrada analógica de 1,5 V.",
    "image": circuito131,
    "options": [
      "00110010 (equivalente ao valor inteiro 50 decimal, pois 1,5 V / 0,0298 V = 50,3).",
      "00011110 (30 decimal).",
      "01000110 (70 decimal).",
      "00111100 (60 decimal).",
      "01010000 (80 decimal)."
    ],
    "answer": "00110010 (equivalente ao valor inteiro 50 decimal, pois 1,5 V / 0,0298 V = 50,3).",
    "topic": "3.2 - Conversores A/D (Com Figura) [Questão Direta]"
  },
  {
    "question": "No circuito do conversor A/D ADC0804 da Fig. 3.27 da apostila (esquematizado na Fig. 131) com escala total analógica de 7,6 V (resolução = 29,8 mV/bit), calcule a palavra digital binária na saída para uma entrada analógica de 2,1 V.",
    "image": circuito131,
    "options": [
      "01000110 (equivalente ao valor inteiro 70 decimal, pois 2,1 V / 0,0298 V = 70,4).",
      "00110010 (50 decimal).",
      "01011010 (90 decimal).",
      "00100110 (38 decimal).",
      "01100100 (100 decimal)."
    ],
    "answer": "01000110 (equivalente ao valor inteiro 70 decimal, pois 2,1 V / 0,0298 V = 70,4).",
    "topic": "3.2 - Conversores A/D (Com Figura) [Questão Direta]"
  },
  {
    "question": "Quais são os circuitos e blocos funcionais essenciais utilizados na arquitetura de Geradores de Formas de Onda Digitais programáveis?",
    "image": rampaDiagram,
    "options": [
      "Um contador digital acionado por clock, acoplado a uma memória ROM com tabela de amostras e um conversor D/A na saída.",
      "Apenas retificadores em ponte e filtros capacitivos.",
      "Exclusivamente transformadores de isolação sem clock.",
      "Apenas portas NAND CMOS auto-oscilantes.",
      "Um motor de passo acoplado a um potenciômetro mecânico."
    ],
    "answer": "Um contador digital acionado por clock, acoplado a uma memória ROM com tabela de amostras e um conversor D/A na saída.",
    "topic": "3.3 - Geradores de Formas de Onda (Com Figura) [Questão Discursiva]"
  },
  {
    "question": "Especifique qual tipo de contador digital é utilizado para gerar uma forma de onda triangular simétrica através de um conversor D/A.",
    "image": triangularDiagram,
    "options": [
      "Um contador crescente/decrescente (Up/Down Counter) que sobe até a contagem máxima e inverte automaticamente para decrescer até zero.",
      "Um contador crescente simples que zera abruptamente.",
      "Um contador Johnson em anel.",
      "Um flip-flop D em configuração de divisão por 2.",
      "Um registrador de deslocamento serial sem realimentação."
    ],
    "answer": "Um contador crescente/decrescente (Up/Down Counter) que sobe até a contagem máxima e inverte automaticamente para decrescer até zero.",
    "topic": "3.3 - Geradores de Formas de Onda (Com Figura) [Questão Direta]"
  },
  {
    "question": "Como é obtida a forma de onda 'dente de serra' (sawtooth) em um gerador digital com conversor D/A?",
    "image": rampaDiagram,
    "options": [
      "Utilizando um contador crescente que incrementa uniformemente até o valor máximo e, ao atingir o topo, transita instantaneamente para zero no ciclo seguinte.",
      "Utilizando um contador crescente/decrescente que sobe e desce na mesma velocidade.",
      "Através de um filtro passa-baixa analógico sem contador digital.",
      "Invertendo a alimentação do conversor D/A periodicamente.",
      "Desligando o pino MSB em ciclos alternados."
    ],
    "answer": "Utilizando um contador crescente que incrementa uniformemente até o valor máximo e, ao atingir o topo, transita instantaneamente para zero no ciclo seguinte.",
    "topic": "3.3 - Geradores de Formas de Onda (Com Figura) [Questão Discursiva]"
  }
];
