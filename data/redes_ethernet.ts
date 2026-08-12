import type { Question } from "../types/question";

export const redesEthernetQuestions: Question[] = [
  {
    "question": "De acordo com o texto, qual é o principal motivo pelo qual os fios de cobre são usados como meio principal de conexão entre computadores?",
    "options": [
      "Elevada imunidade a interferências eletromagnéticas.",
      "Capacidade infinita de transmissão de banda larga.",
      "Baixo custo, facilidade de instalação e baixa resistência elétrica.",
      "Exclusividade para conexões de longa distância.",
      "Maior segurança física contra interceptação de dados."
    ],
    "answer": "Baixo custo, facilidade de instalação e baixa resistência elétrica.",
    "explanation": "A alternativa correta é a letra C. Baixo custo, facilidade de instalação e baixa resistência elétrica."
  },
  {
    "question": "A especificação \"100 Base - T\" de um cabo de par trançado indica, respectivamente:",
    "options": [
      "Distância de 100 metros, transmissão analógica, e tipologia em anel.",
      "Velocidade de 100 Mbps, transmissão digital (banda base), e tipo par trançado.",
      "Capacidade de 100 usuários, transmissão de banda larga, e cabo coaxial.",
      "Frequência de 100 MHz, transmissão analógica, e fibra óptica.",
      "Velocidade de 100 Gbps, transmissão digital, e cabo telefônico."
    ],
    "answer": "Velocidade de 100 Mbps, transmissão digital (banda base), e tipo par trançado.",
    "explanation": "A alternativa correta é a letra B. Velocidade de 100 Mbps, transmissão digital (banda base), e tipo par trançado."
  },
  {
    "question": "Sobre as categorias e blindagens dos cabos de par trançado, assinale a alternativa CORRETA:",
    "options": [
      "O cabo UTP possui revestimento metálico em todos os pares e exige aterramento rigoroso.",
      "Os cabos de par trançado são categorizados de 1 a 10, com base apenas na atenuação.",
      "O cabo ScTP possui todos os pares revestidos por uma capa metálica em conjunto, exigindo maiores cuidados quanto ao aterramento.",
      "O cabo UTP é imune a interferências, podendo ser instalado próximo a qualquer equipamento gerador de ruído.",
      "Cabos blindados dispensam a utilização de conectores RJ-45 com parte metálica."
    ],
    "answer": "O cabo ScTP possui todos os pares revestidos por uma capa metálica em conjunto, exigindo maiores cuidados quanto ao aterramento.",
    "explanation": "A alternativa correta é a letra C. O cabo ScTP possui todos os pares revestidos por uma capa metálica em conjunto, exigindo maiores cuidados quanto ao aterramento."
  },
  {
    "question": "Na interligação de dispositivos de rede utilizando cabos de par trançado, como se diferenciam os cabos \"pino-a-pino\" (direto) e \"cross-over\" (cruzado)?",
    "options": [
      "O pino-a-pino utiliza padrões diferentes nas extremidades, enquanto o cross-over usa o mesmo padrão.",
      "O cross-over é usado exclusivamente para cabos ScTP, e o pino-a-pino para cabos UTP.",
      "O pino-a-pino efetua conexões entre dispositivos de categorias diferentes (ex: PC e Switch), enquanto o cross-over é usado para interligar equipamentos da mesma categoria (ex: PC com PC).",
      "Ambos utilizam o conector BNC, mas o cross-over é restrito a conexões analógicas.",
      "Não há diferença prática, ambos interligam equipamentos da mesma categoria com a mesma eficiência."
    ],
    "answer": "O pino-a-pino efetua conexões entre dispositivos de categorias diferentes (ex: PC e Switch), enquanto o cross-over é usado para interligar equipamentos da mesma categoria (ex: PC com PC).",
    "explanation": "A alternativa correta é a letra C. O pino-a-pino efetua conexões entre dispositivos de categorias diferentes (ex: PC e Switch), enquanto o cross-over é usado para interligar equipamentos da mesma categoria (ex: PC com PC)."
  },
  {
    "question": "A respeito dos cabos coaxiais, julgue as afirmativas: I - Em vez de trançar os fios, utiliza-se um anel metálico em volta de um núcleo, mantendo capacitância constante e baixa. II - O cabo coaxial de banda larga tem impedância de 75 Ohms, blindagem geralmente amarela e tamanho máximo de 500 metros. III - Para ligação ao computador, utiliza-se o conector BNC, o que barateia a instalação em comparação ao RJ-45. Está(ão) correta(s):",
    "options": [
      "Apenas I.",
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I e III.",
      "I, II e III."
    ],
    "answer": "Apenas I e II.",
    "explanation": "A alternativa correta é a letra B. Apenas I e II."
  },
  {
    "question": "Em relação às Fibras Ópticas e outros meios de transmissão sem fio, assinale a INCORRETA:",
    "options": [
      "As fibras ópticas utilizam luz para transmitir dados (LED ou laser) e são imunes à interferência elétrica.",
      "Satélites contêm transponders que recebem o sinal de RF, o amplificam e o retransmitem em um ângulo diferente do de chegada.",
      "Microondas operam em frequências mais altas que as ondas de rádio, têm forte direcionamento, mas não penetram em metais.",
      "O infravermelho tem como vantagem a necessidade obrigatória de antenas de grande porte, barateando conexões de longo alcance.",
      "O laser transmite dados através de um feixe de luz que se mantém no foco a longas distâncias, exigindo mira entre transmissor e receptor fixados em torres."
    ],
    "answer": "O infravermelho tem como vantagem a necessidade obrigatória de antenas de grande porte, barateando conexões de longo alcance.",
    "explanation": "A alternativa correta é a letra D. O infravermelho tem como vantagem a necessidade obrigatória de antenas de grande porte, barateando conexões de longo alcance."
  },
  {
    "question": "Sobre a comunicação local assíncrona, taxas de envio e falhas, qual das seguintes definições está de acordo com o texto?",
    "options": [
      "Baud rate é sinônimo absoluto de Bit rate, ambos medindo 0's e 1's transmitidos por segundo.",
      "Uma comunicação assíncrona exige que emissor e receptor se coordenem e se sincronizem antes de qualquer dado ser transmitido.",
      "O erro de rajada ocorre obrigatoriamente em bits dispostos em sequência imediata.",
      "O teorema de Nyquist prova que é possível superar as leis da física utilizando a codificação adequada de dados, ignorando os ruídos.",
      "Bit rate mede o número de bits de dados transmitidos em um segundo, enquanto Baud rate é o número de vezes que um sinal no canal muda seu estado."
    ],
    "answer": "Bit rate mede o número de bits de dados transmitidos em um segundo, enquanto Baud rate é o número de vezes que um sinal no canal muda seu estado.",
    "explanation": "A alternativa correta é a letra E. Bit rate mede o número de bits de dados transmitidos em um segundo, enquanto Baud rate é o número de vezes que um sinal no canal muda seu estado."
  },
  {
    "question": "O que justifica a utilização dos \"Jumbo Frames\" em redes Gigabit Ethernet?",
    "options": [
      "Eles diminuem o tamanho do frame para 1500 bytes, evitando colisões.",
      "Reduzem a carga do processador ao verificar o CRC de pacotes maiores (ex: 9000 bytes) e diminuem a perda causada pelos bytes adicionais de endereçamento.",
      "São usados para permitir o envio de pacotes TCP/IP apenas para redes sem fio.",
      "Servem para dividir um pacote IP grande em frames menores de 26 bytes.",
      "Limitam a velocidade da placa de rede a 10 megabits, compatibilizando antigas e novas arquiteturas."
    ],
    "answer": "Reduzem a carga do processador ao verificar o CRC de pacotes maiores (ex: 9000 bytes) e diminuem a perda causada pelos bytes adicionais de endereçamento.",
    "explanation": "A alternativa correta é a letra B. Reduzem a carga do processador ao verificar o CRC de pacotes maiores (ex: 9000 bytes) e diminuem a perda causada pelos bytes adicionais de endereçamento."
  },
  {
    "question": "Em relação ao CSMA/CD em uma topologia de barramento Ethernet, como o protocolo lida com múltiplas colisões sucessivas?",
    "options": [
      "Utilizando o algoritmo de Dijkstra para definir a nova rota.",
      "Aplicando o conceito de \"Binary Exponential Backoff\", dobrando o limite do delay máximo escolhido randomicamente após cada colisão.",
      "Emitindo um token (ficha) para a estação que falhou, garantindo sua vez.",
      "Desligando a interface de rede do computador emissor para evitar travamento da rede.",
      "Alterando de banda base para banda larga automaticamente."
    ],
    "answer": "Aplicando o conceito de \"Binary Exponential Backoff\", dobrando o limite do delay máximo escolhido randomicamente após cada colisão.",
    "explanation": "A alternativa correta é a letra B. Aplicando o conceito de \"Binary Exponential Backoff\", dobrando o limite do delay máximo escolhido randomicamente após cada colisão."
  },
  {
    "question": "A tecnologia FDDI (Fiber Distributed Data Interface) foi desenvolvida para solucionar fragilidades da topologia em anel. Qual é a principal característica que a diferencia?",
    "options": [
      "Uso de topologia física em estrela e lógica em barramento.",
      "Existência de dois anéis completos, utilizando redundância (Self Healing) caso o primeiro anel falhe.",
      "Capacidade de conectar redes usando infravermelho de longo alcance.",
      "Uso de cabo coaxial banda larga de 75 ohms com 5 anéis concêntricos.",
      "Restrição ao uso exclusivo de sinais analógicos de baixa frequência."
    ],
    "answer": "Existência de dois anéis completos, utilizando redundância (Self Healing) caso o primeiro anel falhe.",
    "explanation": "A alternativa correta é a letra B. Existência de dois anéis completos, utilizando redundância (Self Healing) caso o primeiro anel falhe."
  },
  {
    "question": "Como o hardware de uma LAN interage com os endereços físicos (MAC Address) dos pacotes que trafegam num meio compartilhado?",
    "options": [
      "O hardware de rede repassa todos os frames diretamente à CPU para que ela decida o que descartar.",
      "A CPU verifica o endereço de cada frame na rede, independente da placa de rede.",
      "A interface de rede examina os frames operando independentemente da CPU, aceitando apenas aqueles cujo destinatário seja igual ao da estação (ou broadcast/multicast).",
      "Os endereços físicos não são usados em LANs, apenas endereços IP.",
      "O hardware só analisa o endereço de origem, ignorando o destinatário."
    ],
    "answer": "A interface de rede examina os frames operando independentemente da CPU, aceitando apenas aqueles cujo destinatário seja igual ao da estação (ou broadcast/multicast).",
    "explanation": "A alternativa correta é a letra C. A interface de rede examina os frames operando independentemente da CPU, aceitando apenas aqueles cujo destinatário seja igual ao da estação (ou broadcast/multicast)."
  },
  {
    "question": "Existem diferentes formatos para definir um endereço físico. Assinale a correlação CORRETA:",
    "options": [
      "Endereço Estático: Determinado dinamicamente quando o PC é ligado.",
      "Endereço Dinâmico: Nunca muda e é definido pelo fabricante em todo o mundo.",
      "Endereço Configurável: Inalterável pelo usuário, embutido na ROM.",
      "Endereço Dinâmico: Fornecido automaticamente quando a estação é ligada, permitindo endereços menores na rede.",
      "Endereço Estático: Exige configuração manual constante do consumidor a cada envio de frame."
    ],
    "answer": "Endereço Dinâmico: Fornecido automaticamente quando a estação é ligada, permitindo endereços menores na rede.",
    "explanation": "A alternativa correta é a letra D. Endereço Dinâmico: Fornecido automaticamente quando a estação é ligada, permitindo endereços menores na rede."
  },
  {
    "question": "A diferença entre Broadcasting e Multicasting em LANs consiste em:",
    "options": [
      "O Broadcasting é ineficiente porque envia cópias para todos os PCs, desperdiçando CPU nos descartes. O Multicasting envia a um grupo específico e a própria interface de rede (hardware) decide aceitá-lo ou não, poupando a CPU.",
      "O Multicasting envia pacotes a todas as redes mundiais, enquanto o Broadcasting é restrito à rede local.",
      "O Broadcasting usa endereços da Classe D do IP, enquanto o Multicast usa endereços MAC configuráveis.",
      "O Broadcasting é mais eficiente pois não requer análise da CPU.",
      "Não há diferença prática; ambos causam colapso de congestionamento em redes FDDI."
    ],
    "answer": "O Broadcasting é ineficiente porque envia cópias para todos os PCs, desperdiçando CPU nos descartes. O Multicasting envia a um grupo específico e a própria interface de rede (hardware) decide aceitá-lo ou não, poupando a CPU.",
    "explanation": "A alternativa correta é a letra A. O Broadcasting é ineficiente porque envia cópias para todos os PCs, desperdiçando CPU nos descartes. O Multicasting envia a um grupo específico e a própria interface de rede (hardware) decide aceitá-lo ou não, poupando a CPU."
  },
  {
    "question": "Acerca da identificação do tipo de frame e de análise de redes, é correto afirmar:",
    "options": [
      "No tipo de frame implícito, o hardware de rede inclui o tipo de frame explicitamente no cabeçalho.",
      "Um computador que intercepta pacotes usando \"escuta\" no canal pode coletar dados sigilosos; para evitar isso, os administradores devem usar criptografia.",
      "Analisadores de rede são malwares que causam colisões intencionalmente.",
      "A análise de rede é impossível em topologias de barramento.",
      "No tipo de frame explícito, emissor e receptor devem adivinhar o conteúdo observando a voltagem da rede."
    ],
    "answer": "Um computador que intercepta pacotes usando \"escuta\" no canal pode coletar dados sigilosos; para evitar isso, os administradores devem usar criptografia.",
    "explanation": "A alternativa correta é a letra B. Um computador que intercepta pacotes usando \"escuta\" no canal pode coletar dados sigilosos; para evitar isso, os administradores devem usar criptografia."
  },
  {
    "question": "Sobre os três sistemas de cabeamento suportados originalmente pela Ethernet, qual das afirmações é FALSA?",
    "options": [
      "Thicknet (Thick Ethernet): O transceiver lida com dados analógicos e é externo à placa de rede, conectado ao computador por um cabo AUI.",
      "Pode-se utilizar um Multiplexador de Conexão para permitir que vários computadores usem um único transceiver na rede Thicknet.",
      "Thinnet (Thin Ethernet): O cabo é ligado à placa de rede com conector BNC, a função de transceiver é embutida na placa, mas se uma máquina for desconectada, todo o resto da rede cai (ponto-a-ponto).",
      "Par Trançado: Emula o cabo coaxial usando um dispositivo eletrônico central chamado Hub, imune a desconexões acidentais em série porque a ligação é em paralelo.",
      "Uma placa de rede moderna pode ter conectores para Thicknet, Thinnet e Par Trançado, e ela pode transmitir dados simultaneamente pelos três conectores, triplicando sua velocidade. CAPÍTULO II - FUNCIONAMENTO DE REDES"
    ],
    "answer": "Uma placa de rede moderna pode ter conectores para Thicknet, Thinnet e Par Trançado, e ela pode transmitir dados simultaneamente pelos três conectores, triplicando sua velocidade. CAPÍTULO II - FUNCIONAMENTO DE REDES",
    "explanation": "A alternativa correta é a letra E. Uma placa de rede moderna pode ter conectores para Thicknet, Thinnet e Par Trançado, e ela pode transmitir dados simultaneamente pelos três conectores, triplicando sua velocidade. CAPÍTULO II - FUNCIONAMENTO DE REDES"
  },
  {
    "question": "Sobre os equipamentos de extensão de LANs (Hubs, Repetidores, Bridges e Switches), avalie as proposições: I - Hubs Passivos funcionam como um painel de fios, sem amplificação de sinal, sendo meras caixas de junção. II - Hubs Ativos regeneram o sinal e requerem ligação elétrica, funcionando como repetidores. III - Repetidores conseguem identificar frames completos e fazem verificação rigorosa de erros antes de retransmitir. IV - Bridges conectam dois segmentos de rede, conseguem identificar frames e filtram o tráfego baseado no endereço MAC para não enviar dados desnecessariamente para outro segmento. Estão corretas:",
    "options": [
      "I, II e III apenas.",
      "II, III e IV apenas.",
      "I, II e IV apenas.",
      "I e IV apenas.",
      "Todas estão corretas."
    ],
    "answer": "I, II e IV apenas.",
    "explanation": "A alternativa correta é a letra C. I, II e IV apenas."
  },
  {
    "question": "O que caracteriza os estados de \"Startup\" e \"Steady State\" de uma rede interligada por Bridges?",
    "options": [
      "No Startup a bridge já conhece todas as rotas; no Steady State ela apaga essas rotas.",
      "No Startup, a bridge não conhece as localizações e transmite os pacotes para aprender; no Steady State (estabilidade), ela envia o frame apenas para o segmento onde se encontra o destinatário.",
      "Startup é o boot do computador; Steady State é quando a ponte sofre colisão de pacotes.",
      "No Steady State, a bridge funciona como um Hub, replicando o sinal para todas as portas.",
      "No Startup a bridge bloqueia todos os pacotes até intervenção humana."
    ],
    "answer": "No Startup, a bridge não conhece as localizações e transmite os pacotes para aprender; no Steady State (estabilidade), ela envia o frame apenas para o segmento onde se encontra o destinatário.",
    "explanation": "A alternativa correta é a letra B. No Startup, a bridge não conhece as localizações e transmite os pacotes para aprender; no Steady State (estabilidade), ela envia o frame apenas para o segmento onde se encontra o destinatário."
  },
  {
    "question": "Qual é a principal diferença de comportamento entre Roteadores e Bridges/Switches?",
    "options": [
      "Roteadores direcionam pacotes entre redes diferentes usando endereços lógicos (IP) e possuem múltiplas interfaces como gateways de sub-redes; Bridges direcionam pacotes na mesma rede física usando MAC address.",
      "Roteadores não utilizam tabelas de roteamento, dependendo de broadcast.",
      "Switches encaminham pacotes baseados no IP de destino.",
      "Roteadores não encapsulam pacotes de volta na camada de enlace; eles entregam o datagrama cru.",
      "Roteadores ligam segmentos da mesma sub-rede, não exigindo endereço IP na interface."
    ],
    "answer": "Roteadores direcionam pacotes entre redes diferentes usando endereços lógicos (IP) e possuem múltiplas interfaces como gateways de sub-redes; Bridges direcionam pacotes na mesma rede física usando MAC address.",
    "explanation": "A alternativa correta é a letra A. Roteadores direcionam pacotes entre redes diferentes usando endereços lógicos (IP) e possuem múltiplas interfaces como gateways de sub-redes; Bridges direcionam pacotes na mesma rede física usando MAC address."
  },
  {
    "question": "Ao comparar a atuação de Hubs e Switches, o texto afirma que:",
    "options": [
      "Um Switch funciona externamente como um Hub, mas internamente simula um cabo coaxial único.",
      "O Switch simula uma rede de bridges com um computador por segmento, reduzindo congestionamentos e aumentando a velocidade do tráfego em comparação ao Hub.",
      "A ligação de um Hub em uma porta de um Switch resulta na falha imediata da rede por excesso de colisões CSMA/CD.",
      "Hubs identificam os pacotes pelo cabeçalho do frame, enquanto Switches não identificam.",
      "Não existe diferença no nível lógico, ambos atuam na camada de rede."
    ],
    "answer": "O Switch simula uma rede de bridges com um computador por segmento, reduzindo congestionamentos e aumentando a velocidade do tráfego em comparação ao Hub.",
    "explanation": "A alternativa correta é a letra B. O Switch simula uma rede de bridges com um computador por segmento, reduzindo congestionamentos e aumentando a velocidade do tráfego em comparação ao Hub."
  },
  {
    "question": "Nas grandes redes (WANs), como atua o equipamento chamado \"Packet Switch\" e o conceito de \"Store and Forward\"?",
    "options": [
      "Ele roteia datagramas ignorando o hardware. Store and Forward descarta os pacotes para economizar memória.",
      "O packet switch move pacotes inteiros; o sistema Store and Forward armazena o pacote recebido em memória, examina o cabeçalho e, assim que a interface de saída estiver livre, envia o pacote.",
      "O packet switch só envia pacotes se a porta de destino for da classe A. Store and Forward envia apenas pacotes fragmentados.",
      "O packet switch armazena pacotes permanentemente para criar logs de segurança.",
      "O método Store and Forward é utilizado exclusivamente em LANs, não em WANs."
    ],
    "answer": "O packet switch move pacotes inteiros; o sistema Store and Forward armazena o pacote recebido em memória, examina o cabeçalho e, assim que a interface de saída estiver livre, envia o pacote.",
    "explanation": "A alternativa correta é a letra B. O packet switch move pacotes inteiros; o sistema Store and Forward armazena o pacote recebido em memória, examina o cabeçalho e, assim que a interface de saída estiver livre, envia o pacote."
  },
  {
    "question": "Em relação ao roteamento numa WAN, como o \"Next-Hop Forward\" e o mecanismo de \"Rota Padrão\" (Default Route) se comportam?",
    "options": [
      "O packet switch armazena o roteiro completo desde a origem até o destino; a rota padrão duplica essas tabelas.",
      "O packet switch tem informações apenas do \"próximo pulo\" para o destino; a Rota Padrão simplifica a tabela eliminando a necessidade de listar roteadores repetidos e usando um pulo padrão.",
      "Next-Hop significa que o pacote irá pular roteadores aleatoriamente até chegar ao destino.",
      "A Rota Padrão exige a utilização de endereços MAC estáticos globais.",
      "O Next-Hop Forward elimina a utilidade do protocolo de distância vetorial."
    ],
    "answer": "O packet switch tem informações apenas do \"próximo pulo\" para o destino; a Rota Padrão simplifica a tabela eliminando a necessidade de listar roteadores repetidos e usando um pulo padrão.",
    "explanation": "A alternativa correta é a letra B. O packet switch tem informações apenas do \"próximo pulo\" para o destino; a Rota Padrão simplifica a tabela eliminando a necessidade de listar roteadores repetidos e usando um pulo padrão."
  },
  {
    "question": "Para a construção de Tabelas de Roteamento (Routing Tables), dois tipos de roteamento dinâmico são discutidos no texto, baseados em métricas de caminho. Quais são eles?",
    "options": [
      "CSMA/CD e CSMA/CA.",
      "Multicasting e Broadcasting.",
      "Distância Vetorial (soma de pesos) e Link-State Routing / SPF (que utiliza algoritmo de Dijkstra baseado no status dos links repassados por mensagens).",
      "Thicknet Routing e Thinnet Routing.",
      "Roteamento Base e Roteamento de Banda Larga."
    ],
    "answer": "Distância Vetorial (soma de pesos) e Link-State Routing / SPF (que utiliza algoritmo de Dijkstra baseado no status dos links repassados por mensagens).",
    "explanation": "A alternativa correta é a letra C. Distância Vetorial (soma de pesos) e Link-State Routing / SPF (que utiliza algoritmo de Dijkstra baseado no status dos links repassados por mensagens)."
  },
  {
    "question": "Qual das opções a seguir descreve corretamente o conceito de VPN (Virtual Private Network) de acordo com o texto fornecido?",
    "options": [
      "Uma rede física isolada e impenetrável montada exclusivamente por cabos de fibra óptica dedicados de uma empresa.",
      "Uma rede que utiliza os fios das redes públicas, mas dispensa hardwares ou softwares específicos.",
      "Um sistema que utiliza redes públicas como meio de transmissão, codificando os pacotes na origem e decodificando no destino através de hardwares/softwares específicos nas extremidades.",
      "Um servidor centralizado que bloqueia acesso à internet, mantendo os usuários apenas em LAN.",
      "Um conjunto de roteadores não configurados que aceitam roteamento dinâmico sem restrições."
    ],
    "answer": "Um sistema que utiliza redes públicas como meio de transmissão, codificando os pacotes na origem e decodificando no destino através de hardwares/softwares específicos nas extremidades.",
    "explanation": "A alternativa correta é a letra C. Um sistema que utiliza redes públicas como meio de transmissão, codificando os pacotes na origem e decodificando no destino através de hardwares/softwares específicos nas extremidades."
  },
  {
    "question": "Ao tratar do desempenho de redes, o texto separa os conceitos de \"Ritmo de Transferência\" (Throughput/Velocidade) e \"Delay\". Assinale a correlação INCORRETA:",
    "options": [
      "Delay especifica quanto tempo um bit de dados demora para ir de um computador ao outro.",
      "Delay de propagação é causado pela demora do sinal viajar num fio ou fibra.",
      "Delay de acesso é o tempo de espera até o meio de comunicação estar livre para transmissão.",
      "Delay de enfileiramento (Queuing delay) ocorre num switch/roteador aguardando a fila do store-and-forward.",
      "Ritmo de transferência e delay são sinônimos absolutos e podem ser usados de forma intercambiável para medir a velocidade de pacotes."
    ],
    "answer": "Ritmo de transferência e delay são sinônimos absolutos e podem ser usados de forma intercambiável para medir a velocidade de pacotes.",
    "explanation": "A alternativa correta é a letra E. Ritmo de transferência e delay são sinônimos absolutos e podem ser usados de forma intercambiável para medir a velocidade de pacotes."
  },
  {
    "question": "O modelo de camadas (Layering Model) visa facilitar o desenvolvimento dos softwares de protocolos. Qual é o papel prático das pilhas (Stacks) de protocolos na emissão de um frame?",
    "options": [
      "O software do emissor remove informações de cabeçalho camada por camada até o dado ficar puro no meio físico.",
      "Na emissão, os módulos não interagem entre si, agindo independentemente do topo à base.",
      "Cada camada do computador emissor adiciona informações (cabeçalhos) aos dados que estão descendo a pilha; a mesma camada no receptor extrairá e processará essas informações.",
      "A camada de aplicação adiciona o MAC address, e a camada física adiciona o endereço IP.",
      "Cabeçalhos abrigados nunca são aplicados no TCP/IP, apenas no modelo OSI original."
    ],
    "answer": "Cada camada do computador emissor adiciona informações (cabeçalhos) aos dados que estão descendo a pilha; a mesma camada no receptor extrairá e processará essas informações.",
    "explanation": "A alternativa correta é a letra C. Cada camada do computador emissor adiciona informações (cabeçalhos) aos dados que estão descendo a pilha; a mesma camada no receptor extrairá e processará essas informações."
  },
  {
    "question": "As redes baseadas em protocolo de Internet formam uma \"Rede Virtual\". Esse conceito ocorre porque:",
    "options": [
      "O hardware de roteadores substitui a necessidade de cabos.",
      "O protocolo IP manipula informações e oculta os detalhes da rede física (heterogênea), dando a impressão abstrata de que tudo é uma única rede uniforme.",
      "O serviço universal rejeita redes locais (LANs), operando exclusivamente em ambientes virtuais de nuvem.",
      "Os datagramas não trafegam de fato, sendo apenas simulados pelo CPU.",
      "O TCP/IP não possui a camada de enlace de dados, operando de forma 100% sem fio."
    ],
    "answer": "O protocolo IP manipula informações e oculta os detalhes da rede física (heterogênea), dando a impressão abstrata de que tudo é uma única rede uniforme.",
    "explanation": "A alternativa correta é a letra B. O protocolo IP manipula informações e oculta os detalhes da rede física (heterogênea), dando a impressão abstrata de que tudo é uma única rede uniforme."
  },
  {
    "question": "As técnicas usadas em protocolos (ex: TCP) para lidar com falhas da rede incluem:",
    "options": [
      "Uso de números de sequência para ordenar pacotes fora de ordem e eliminar os duplicados.",
      "Envio de Jumbo Frames para colapsar congestionamentos menores.",
      "Uso de CSMA/CD na camada de Transporte.",
      "Troca do endereço IP dinamicamente para enganar o roteador congestionado.",
      "Descarte obrigatório de todos os pacotes sempre que um errar a ordem (serviço a qualquer custo estrito). CAPÍTULO III - MECANISMOS DE CONFIGURAÇÃO DE REDE"
    ],
    "answer": "Uso de números de sequência para ordenar pacotes fora de ordem e eliminar os duplicados.",
    "explanation": "A alternativa correta é a letra A. Uso de números de sequência para ordenar pacotes fora de ordem e eliminar os duplicados."
  },
  {
    "question": "No esquema de endereçamento do protocolo IP, os endereços são hierárquicos e divididos em duas partes fundamentais. Quais são elas?",
    "options": [
      "Gateway e Loopback.",
      "MAC de Origem e MAC de Destino.",
      "Rota Padrão e Rota Alternativa.",
      "Prefixo (identifica a rede) e Sufixo (identifica o host na rede local).",
      "Classe e Máscara."
    ],
    "answer": "Prefixo (identifica a rede) e Sufixo (identifica o host na rede local).",
    "explanation": "A alternativa correta é a letra D. Prefixo (identifica a rede) e Sufixo (identifica o host na rede local)."
  },
  {
    "question": "Segundo as Classes dos Endereços IP, um endereço que inicia no primeiro octeto com \"10\" (decimal) pertence a qual classe e possui qual máscara de rede padrão (em bits)?",
    "options": [
      "Classe B, 16 bits.",
      "Classe C, 24 bits.",
      "Classe A, 8 bits (255.0.0.0).",
      "Classe E, reservada.",
      "Classe A, 16 bits."
    ],
    "answer": "Classe A, 8 bits (255.0.0.0).",
    "explanation": "A alternativa correta é a letra C. Classe A, 8 bits (255.0.0.0)."
  },
  {
    "question": "Identifique a classe a qual o endereço IP 192.168.1.1 pertence e seu propósito original:",
    "options": [
      "Classe B (redes médias).",
      "Classe A (redes muito grandes).",
      "Classe C (redes pequenas, suporta até 254 hosts, máscara padrão 24 bits).",
      "Classe D (redes multicast).",
      "Classe E (redes experimentais futuras)."
    ],
    "answer": "Classe C (redes pequenas, suporta até 254 hosts, máscara padrão 24 bits).",
    "explanation": "A alternativa correta é a letra C. Classe C (redes pequenas, suporta até 254 hosts, máscara padrão 24 bits)."
  },
  {
    "question": "A Classe D do protocolo IPv4 (intervalo 224 a 239) foi criada com que finalidade?",
    "options": [
      "Suportar endereços privados para pequenas empresas.",
      "Permitir Multicasting, não possuindo uma máscara de rede padrão para hosts individuais.",
      "Atuar exclusivamente como loopback (127.0.0.1).",
      "Ser endereços reservados para pesquisa militar.",
      "Indicar o default gateway das WANs."
    ],
    "answer": "Permitir Multicasting, não possuindo uma máscara de rede padrão para hosts individuais.",
    "explanation": "A alternativa correta é a letra B. Permitir Multicasting, não possuindo uma máscara de rede padrão para hosts individuais."
  },
  {
    "question": "Qual a função de se aplicar a operação de \"AND\" lógico, bit a bit, entre um Endereço IP e sua respectiva Máscara de Rede?",
    "options": [
      "Descobrir a classe do IP, que se esconde nos últimos bits.",
      "Converter a notação decimal em notação binária.",
      "Isolar e descobrir o prefixo, ou seja, o endereço da Rede a qual pertence o host.",
      "Descobrir o número exato de colisões no barramento Ethernet.",
      "Gerar o endereço de Broadcast (transferência direta)."
    ],
    "answer": "Isolar e descobrir o prefixo, ou seja, o endereço da Rede a qual pertence o host.",
    "explanation": "A alternativa correta é a letra C. Isolar e descobrir o prefixo, ou seja, o endereço da Rede a qual pertence o host."
  },
  {
    "question": "Qual é o procedimento descrito no texto para descobrir o Identificador exclusivo de um Host (o \"sufixo\") dentro de uma sub-rede?",
    "options": [
      "Executar um \"AND\" lógico entre o endereço IP e a própria Máscara de Rede.",
      "Efetuar o complemento da máscara de rede (inverter 0s e 1s) e aplicar a lógica \"AND\" bit a bit entre esse resultado e o endereço IP.",
      "Fazer a soma aritmética (OR lógico) dos 4 octetos.",
      "Dividir o endereço IP pela máscara usando aritmética decimal.",
      "Olhar apenas para o último octeto independentemente da classe."
    ],
    "answer": "Efetuar o complemento da máscara de rede (inverter 0s e 1s) e aplicar a lógica \"AND\" bit a bit entre esse resultado e o endereço IP.",
    "explanation": "A alternativa correta é a letra B. Efetuar o complemento da máscara de rede (inverter 0s e 1s) e aplicar a lógica \"AND\" bit a bit entre esse resultado e o endereço IP."
  },
  {
    "question": "Sobre o conceito de Sub-Rede (Subnetting) e alteração de máscaras descrito no texto (Ex: transformar a rede 172.18.0.0/16 em sub-redes /22):",
    "options": [
      "Alterar a máscara de /16 para /22 \"empresta\" bits do sufixo (área de host) para o prefixo (área de rede), aumentando a quantidade de sub-redes disponíveis e reduzindo o número de hosts por sub-rede.",
      "Alterar a máscara não altera o número de hosts, apenas muda a forma como o roteador exibe os endereços.",
      "Sub-redes só podem ser criadas utilizando os endereços de classe C.",
      "Máscaras com final \"/22\" são ilegais no protocolo TCP/IP moderno.",
      "A divisão em sub-redes aumenta o número total de endereços IP globais disponíveis."
    ],
    "answer": "Alterar a máscara de /16 para /22 \"empresta\" bits do sufixo (área de host) para o prefixo (área de rede), aumentando a quantidade de sub-redes disponíveis e reduzindo o número de hosts por sub-rede.",
    "explanation": "A alternativa correta é a letra A. Alterar a máscara de /16 para /22 \"empresta\" bits do sufixo (área de host) para o prefixo (área de rede), aumentando a quantidade de sub-redes disponíveis e reduzindo o número de hosts por sub-rede."
  },
  {
    "question": "O texto cita \"Endereços Especiais do IP\". Qual a diferença prática entre o \"Endereço da Rede\" e o \"Endereço de Transferência Direta\" (Broadcast)?",
    "options": [
      "O Endereço da Rede tem o prefixo em zero, enquanto a Transferência Direta tem o prefixo em um.",
      "O Endereço da Rede (sufixo todo em zeros) identifica a rede, mas não pode ser usado como destino de pacotes. O Endereço de Transferência Direta (sufixo todo em uns) envia o pacote a todos os hosts daquela rede específica.",
      "Não há diferença; ambos funcionam como ping de loopback.",
      "O Endereço da Rede é usado apenas em VPNs, e o de Transferência Direta para IPsec.",
      "A Transferência Direta envia o pacote a todas as redes do planeta."
    ],
    "answer": "O Endereço da Rede (sufixo todo em zeros) identifica a rede, mas não pode ser usado como destino de pacotes. O Endereço de Transferência Direta (sufixo todo em uns) envia o pacote a todos os hosts daquela rede específica.",
    "explanation": "A alternativa correta é a letra B. O Endereço da Rede (sufixo todo em zeros) identifica a rede, mas não pode ser usado como destino de pacotes. O Endereço de Transferência Direta (sufixo todo em uns) envia o pacote a todos os hosts daquela rede específica."
  },
  {
    "question": "A respeito de outros endereços IP especiais descritos no texto, qual a função do endereço de \"Loopback\"?",
    "options": [
      "Atuar como Default Gateway para redes WAN privadas.",
      "Reiniciar a interface de rede fisicamente sempre que acionado.",
      "Testar aplicativos de rede no próprio host, sendo representado pelo prefixo 127 na Classe A; pacotes enviados para loopback nunca trafegam na rede externa.",
      "Buscar automaticamente um endereço DHCP caso a máquina reinicie.",
      "Identificar fisicamente roteadores da Classe C."
    ],
    "answer": "Testar aplicativos de rede no próprio host, sendo representado pelo prefixo 127 na Classe A; pacotes enviados para loopback nunca trafegam na rede externa.",
    "explanation": "A alternativa correta é a letra C. Testar aplicativos de rede no próprio host, sendo representado pelo prefixo 127 na Classe A; pacotes enviados para loopback nunca trafegam na rede externa."
  },
  {
    "question": "O bloco de IPs 10.0.0.0/8 a 10.255.255.255/8, entre outros (como 192.168.x.x), enquadra-se na classificação de:",
    "options": [
      "Endereços Públicos globais.",
      "Endereços Multicast Classe D.",
      "Endereços Privados (RFC 1918), que não são roteados no backbone da internet pública, sendo descartados por roteadores de internet.",
      "Endereços de Transferência Limitada, usados apenas no BOOTP.",
      "Endereços Exclusivos para Multi-homed hosts."
    ],
    "answer": "Endereços Privados (RFC 1918), que não são roteados no backbone da internet pública, sendo descartados por roteadores de internet.",
    "explanation": "A alternativa correta é a letra C. Endereços Privados (RFC 1918), que não são roteados no backbone da internet pública, sendo descartados por roteadores de internet."
  },
  {
    "question": "Qual a característica de um \"Multi-Homed Host\"?",
    "options": [
      "Um host que virtualiza diversos sistemas operacionais na mesma placa de rede.",
      "Um hospedeiro que converte endereços MAC em IPv6 dinamicamente.",
      "Um mesmo host que se conecta a várias redes simultaneamente (possuindo mais de um endereço IP), criando rotas alternativas e melhorando o desempenho, podendo não necessitar passar pelo roteador para certas rotas.",
      "Um computador restrito à utilização de endereços loopback.",
      "Um computador com vírus de rede que multiplica seu tráfego para causar congestionamento."
    ],
    "answer": "Um mesmo host que se conecta a várias redes simultaneamente (possuindo mais de um endereço IP), criando rotas alternativas e melhorando o desempenho, podendo não necessitar passar pelo roteador para certas rotas.",
    "explanation": "A alternativa correta é a letra C. Um mesmo host que se conecta a várias redes simultaneamente (possuindo mais de um endereço IP), criando rotas alternativas e melhorando o desempenho, podendo não necessitar passar pelo roteador para certas rotas."
  },
  {
    "question": "Para a determinação de endereços em TCP/IP, dependendo do tipo de rede, o protocolo pode usar as seguintes táticas, EXCETO:",
    "options": [
      "Busca em tabelas (em WANs).",
      "Cálculo computacional (em redes configuráveis).",
      "Troca de mensagens (em LANs que têm endereçamento estático, como ARP).",
      "Dedução algorítmica por frequência de onda eletromagnética."
    ],
    "answer": "Dedução algorítmica por frequência de onda eletromagnética.",
    "explanation": "A alternativa correta é a letra D. Dedução algorítmica por frequência de onda eletromagnética."
  },
  {
    "question": "A principal \"Motivação para a Mudança\" do protocolo IPv4 para o IPv6 destacada no texto foi:",
    "options": [
      "A incompatibilidade do IPv4 com os antigos fios de cobre.",
      "O esgotamento iminente de endereços devido à limitação de 32 bits do IPv4 face ao crescimento da internet.",
      "A criação de pacotes muito grandes pelo IPv4 que estouram a MTU do CSMA/CD.",
      "A incapacidade total do IPv4 de usar máscaras de sub-rede.",
      "O modelo OSI exigir um protocolo de versão 6 para sua camada de Rede."
    ],
    "answer": "O esgotamento iminente de endereços devido à limitação de 32 bits do IPv4 face ao crescimento da internet.",
    "explanation": "A alternativa correta é a letra B. O esgotamento iminente de endereços devido à limitação de 32 bits do IPv4 face ao crescimento da internet."
  },
  {
    "question": "Quais atributos listados são inovações destacadas no IPv6 em relação ao IPv4, segundo o texto?",
    "options": [
      "Extensibilidade flexível, divisão das opções em Cabeçalhos de Extensão subsequentes e suporte nativo aperfeiçoado para caminhos de alta qualidade para áudio e vídeo (tempo real).",
      "Redução do tamanho do IP para 16 bits para acelerar o roteamento.",
      "Criação de um único formato de cabeçalho unificado rígido, sem extensões.",
      "Remoção do multicasting em favor do amplo uso de broadcasting universal.",
      "Uso obrigatório de topologia Token Ring em detrimento do Ethernet."
    ],
    "answer": "Extensibilidade flexível, divisão das opções em Cabeçalhos de Extensão subsequentes e suporte nativo aperfeiçoado para caminhos de alta qualidade para áudio e vídeo (tempo real).",
    "explanation": "A alternativa correta é a letra A. Extensibilidade flexível, divisão das opções em Cabeçalhos de Extensão subsequentes e suporte nativo aperfeiçoado para caminhos de alta qualidade para áudio e vídeo (tempo real)."
  },
  {
    "question": "O protocolo IP opera sob uma filosofia de \"Serviço a Qualquer Custo\" (Best-Effort). O que isso implica no que tange a erros no IP?",
    "options": [
      "O IP garante 100% de entrega e ordena automaticamente todos os pacotes perdidos usando seu cabeçalho.",
      "O IP não detecta absolutamente nenhum erro, delegando toda e qualquer verificação ao usuário.",
      "Datagramas podem ser perdidos, atrasados ou entregues fora de ordem, contudo, o IP se esforça usando um \"Checksum\" para proteger o cabeçalho. Em caso de erro do checksum, o pacote é imediatamente descartado.",
      "O IP apenas repara pacotes alterados e os repassa adiante sem checksum.",
      "\"A qualquer custo\" significa que o provedor cobrará taxas extras em caso de rotas congestionadas."
    ],
    "answer": "Datagramas podem ser perdidos, atrasados ou entregues fora de ordem, contudo, o IP se esforça usando um \"Checksum\" para proteger o cabeçalho. Em caso de erro do checksum, o pacote é imediatamente descartado.",
    "explanation": "A alternativa correta é a letra C. Datagramas podem ser perdidos, atrasados ou entregues fora de ordem, contudo, o IP se esforça usando um \"Checksum\" para proteger o cabeçalho. Em caso de erro do checksum, o pacote é imediatamente descartado."
  },
  {
    "question": "O ICMP (Internet Control Message Protocol) tem como principal funcionalidade:",
    "options": [
      "Substituir o IPv4 na camada física da rede.",
      "Transportar arquivos pesados criptografados via protocolo FTP.",
      "Reportar erros ocorridos na rede (falhas em rotas, hosts inalcançáveis) enviando mensagens pré-formatadas utilizando o próprio protocolo IP para transportá-las.",
      "Criar o roteamento dinâmico SPF Dijkstra na WAN.",
      "Bloquear invasões de portas agindo como firewall."
    ],
    "answer": "Reportar erros ocorridos na rede (falhas em rotas, hosts inalcançáveis) enviando mensagens pré-formatadas utilizando o próprio protocolo IP para transportá-las.",
    "explanation": "A alternativa correta é a letra C. Reportar erros ocorridos na rede (falhas em rotas, hosts inalcançáveis) enviando mensagens pré-formatadas utilizando o próprio protocolo IP para transportá-las."
  },
  {
    "question": "A ferramenta \"Ping\" usa primariamente quais mensagens ICMP para testar o alcance de uma máquina?",
    "options": [
      "Time Exceeded e Parameter Problem.",
      "Echo Request e Echo Reply.",
      "Destination Unreachable e Source Quench.",
      "Router Advertisement e Router Solicitation.",
      "Redirect e Information Request."
    ],
    "answer": "Echo Request e Echo Reply.",
    "explanation": "A alternativa correta é a letra B. Echo Request e Echo Reply."
  },
  {
    "question": "O funcionamento da ferramenta \"Traceroute\" aproveita qual regra do protocolo IP associada ao ICMP para traçar uma rota?",
    "options": [
      "O roteador não processa pacotes UDP.",
      "O uso de requisições de Echo Request enviadas simultaneamente a todos os roteadores usando Broadcast.",
      "O traceroute altera o campo MAC do pacote em cada salto.",
      "O traceroute aproveita o contador \"Tempo de Vida\" (TTL); enviando pacotes com TTL gradualmente crescente (1, 2, 3...). Quando o TTL zera num roteador, ele descarta o pacote e retorna a mensagem ICMP \"Time Exceeded\" para o emissor.",
      "O traceroute utiliza mensagens BGP para interrogar os roteadores passivamente."
    ],
    "answer": "O traceroute aproveita o contador \"Tempo de Vida\" (TTL); enviando pacotes com TTL gradualmente crescente (1, 2, 3...). Quando o TTL zera num roteador, ele descarta o pacote e retorna a mensagem ICMP \"Time Exceeded\" para o emissor.",
    "explanation": "A alternativa correta é a letra D. O traceroute aproveita o contador \"Tempo de Vida\" (TTL); enviando pacotes com TTL gradualmente crescente (1, 2, 3...). Quando o TTL zera num roteador, ele descarta o pacote e retorna a mensagem ICMP \"Time Exceeded\" para o emissor."
  },
  {
    "question": "Em algumas versões, quando o Traceroute atinge finalmente a máquina de destino enviando um datagrama UDP para uma porta inativa, qual mensagem ICMP ele espera receber para confirmar a chegada?",
    "options": [
      "ICMP Echo Reply.",
      "ICMP Time Exceeded.",
      "ICMP Source Quench.",
      "ICMP Destination Unreachable (Destino Inalcançável).",
      "ICMP Redirect."
    ],
    "answer": "ICMP Destination Unreachable (Destino Inalcançável).",
    "explanation": "A alternativa correta é a letra D. ICMP Destination Unreachable (Destino Inalcançável)."
  },
  {
    "question": "Sobre o serviço que o protocolo TCP fornece, julgue as assertivas: I - TCP é orientado à conexão, exigindo concordância entre partes antes da transferência. II - É de comunicação Ponto a Ponto e Full Duplex. III - Oferece \"Interface Corrente\" (Stream Interface), sem garantir que os dados cheguem fragmentados no mesmo bloco (registro) em que foram enviados, mas na exata ordem. Está(ão) correta(s):",
    "options": [
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I.",
      "Apenas III.",
      "I, II e III."
    ],
    "answer": "I, II e III.",
    "explanation": "A alternativa correta é a letra E. I, II e III."
  },
  {
    "question": "Por que a conexão do TCP é chamada de \"Conexão Virtual\"?",
    "options": [
      "Porque ela utiliza fios fantasmas de ondas milimétricas.",
      "Porque o sistema físico base de internet (IP) não tem suporte a conexões fixas em hardware; o TCP modula a troca de mensagens em software simulando a ilusão de um circuito conectado.",
      "Porque ela atua apenas em ambientes de máquinas virtuais (VMware, VirtualBox).",
      "Porque não carrega dados reais, apenas cabeçalhos.",
      "Porque desconsidera o Endereço IP do destinatário e envia apenas pelo MAC Address."
    ],
    "answer": "Porque o sistema físico base de internet (IP) não tem suporte a conexões fixas em hardware; o TCP modula a troca de mensagens em software simulando a ilusão de um circuito conectado.",
    "explanation": "A alternativa correta é a letra B. Porque o sistema físico base de internet (IP) não tem suporte a conexões fixas em hardware; o TCP modula a troca de mensagens em software simulando a ilusão de um circuito conectado."
  },
  {
    "question": "Como o TCP lida primariamente com a ocorrência de \"Perda de Pacotes\" em trânsito pela rede?",
    "options": [
      "Ignora as perdas, pois seu foco é velocidade.",
      "Solicita que a Camada Física resete a conexão e comece do zero.",
      "Utiliza o esquema de Reconhecimento (Acknowledgment) e Retransmissão. O emissor inicia um \"timer\"; se o tempo expirar sem resposta, o emissor retransmite o dado.",
      "Utiliza cabos em anel (FDDI) para que os pacotes girem infinitamente até chegar.",
      "Delega ao usuário a responsabilidade de verificar os dados faltantes através de checksums manuais."
    ],
    "answer": "Utiliza o esquema de Reconhecimento (Acknowledgment) e Retransmissão. O emissor inicia um \"timer\"; se o tempo expirar sem resposta, o emissor retransmite o dado.",
    "explanation": "A alternativa correta é a letra C. Utiliza o esquema de Reconhecimento (Acknowledgment) e Retransmissão. O emissor inicia um \"timer\"; se o tempo expirar sem resposta, o emissor retransmite o dado."
  },
  {
    "question": "Como funciona a \"Retransmissão Adaptativa\" (Adaptive Retransmission) implementada no protocolo TCP contemporâneo?",
    "options": [
      "O TCP usa um timer fixo igual a 200 ms independentemente do delay real da rede, exigido pela RFC.",
      "O TCP monitora o delay (RTT - Round Trip Time) continuamente em cada conexão e ajusta dinamicamente (reage e adapta) o timer de retransmissão conforme as condições de lentidão ou explosão de tráfego (congestionamento).",
      "O TCP delega ao protocolo ICMP o controle de timer e retransmissão de dados.",
      "O TCP ajusta a voltagem elétrica do cabo para forçar pacotes a andarem mais rápido.",
      "O timer adaptativo diminui sempre para zero se houver perda de pacote, interrompendo a comunicação. MISTO DE FIXAÇÃO AVANÇADA (DETALHES FINOS DO TEXTO)"
    ],
    "answer": "O TCP monitora o delay (RTT - Round Trip Time) continuamente em cada conexão e ajusta dinamicamente (reage e adapta) o timer de retransmissão conforme as condições de lentidão ou explosão de tráfego (congestionamento).",
    "explanation": "A alternativa correta é a letra B. O TCP monitora o delay (RTT - Round Trip Time) continuamente em cada conexão e ajusta dinamicamente (reage e adapta) o timer de retransmissão conforme as condições de lentidão ou explosão de tráfego (congestionamento)."
  },
  {
    "question": "O texto define que o \"Delay Máximo\" num mecanismo CSMA/CD de colisão, após seguidas tentativas:",
    "options": [
      "Diminui linearmente.",
      "Mantém-se constante para evitar starvation (fome).",
      "O padrão força o computador a escolher randomicamente um delay menor que \"d\". Com uma segunda colisão, dobra-se o limite de delay possível para escolha, espalhando as tentativas.",
      "Torna a máquina prioritária na rede.",
      "Força o switch a intervir eletricamente na placa de rede."
    ],
    "answer": "O padrão força o computador a escolher randomicamente um delay menor que \"d\". Com uma segunda colisão, dobra-se o limite de delay possível para escolha, espalhando as tentativas.",
    "explanation": "A alternativa correta é a letra C. O padrão força o computador a escolher randomicamente um delay menor que \"d\". Com uma segunda colisão, dobra-se o limite de delay possível para escolha, espalhando as tentativas."
  },
  {
    "question": "Num sistema Thick Ethernet, qual o nome do cabo/interface que conecta a placa de rede do computador (NIC) ao circuito analógico externo (Transceiver)?",
    "options": [
      "BNC T-Connector.",
      "UTP RJ-45.",
      "AUI (Attachment Unit Interface).",
      "ScTP Serial.",
      "Fibra Fotossensível."
    ],
    "answer": "AUI (Attachment Unit Interface).",
    "explanation": "A alternativa correta é a letra C. AUI (Attachment Unit Interface)."
  },
  {
    "question": "Um administrador de rede substituiu os \"Hubs Burros\" de sua empresa por \"Switches\". O que ele alcançou com isso sob o prisma do \"Switching\" explicado no texto?",
    "options": [
      "Transformou o sistema paralelo de cabos num grande anel redundante.",
      "Os Switches começaram a atuar como meio único compartilhado gerando mais CSMA/CD.",
      "Ele passou a simular uma rede com \"várias bridges\", onde cada computador está num segmento isolado, evitando que a rede fique congestionada por tráfego cruzado não relacionado.",
      "Ele diminuiu a segurança, uma vez que o Switch envia pacotes para todos como um broadcast.",
      "A velocidade diminuiu, mas a rede barateou."
    ],
    "answer": "Ele passou a simular uma rede com \"várias bridges\", onde cada computador está num segmento isolado, evitando que a rede fique congestionada por tráfego cruzado não relacionado.",
    "explanation": "A alternativa correta é a letra C. Ele passou a simular uma rede com \"várias bridges\", onde cada computador está num segmento isolado, evitando que a rede fique congestionada por tráfego cruzado não relacionado."
  },
  {
    "question": "Ao explicar as diferenças de taxas (Bit Rate vs Baud Rate), o que define que um único \"Baud\" possa representar mais ou menos do que um \"Bit\"?",
    "options": [
      "O erro de rajada na fibra óptica.",
      "O uso obrigatório de cabos pino-a-pino.",
      "A técnica de modulação usada.",
      "O protocolo ICMP limitante.",
      "O tipo de endereço configurável na WAN."
    ],
    "answer": "A técnica de modulação usada.",
    "explanation": "A alternativa correta é a letra C. A técnica de modulação usada."
  },
  {
    "question": "Quando uma organização contrata uma WAN e aluga as conexões de uma operadora para criar uma rede corporativa fechada e sem internet. Essa estrutura recai sobre qual conceito de \"Proprietário de Rede\"?",
    "options": [
      "Rede Pública de acesso liberado.",
      "Rede Privada (WAN privada), na qual apesar de o meio físico ser das operadoras, não há acesso de dados de outras corporações na via contratada.",
      "Intranet baseada em broadcast.",
      "Extranet colaborativa.",
      "VLAN de Camada 2 puramente lógica."
    ],
    "answer": "Rede Privada (WAN privada), na qual apesar de o meio físico ser das operadoras, não há acesso de dados de outras corporações na via contratada.",
    "explanation": "A alternativa correta é a letra B. Rede Privada (WAN privada), na qual apesar de o meio físico ser das operadoras, não há acesso de dados de outras corporações na via contratada."
  },
  {
    "question": "Em relação às falhas de equipamentos (reinício de máquinas/\"boot\"), qual é o principal risco tratado na sessão \"Alcançando Confiança\" do TCP?",
    "options": [
      "O recebimento de pacotes duplicados atrasados de conexões antigas (encerradas de forma abrupta) que o computador recém-reiniciado pode erroneamente acatar como sendo de uma nova conexão.",
      "A destruição da placa de rede pelo ping da morte.",
      "O IPv6 perder sua capacidade de multicast.",
      "O timer da retransmissão adaptativa ficar negativo.",
      "O servidor DNS apagar seus registros locais."
    ],
    "answer": "O recebimento de pacotes duplicados atrasados de conexões antigas (encerradas de forma abrupta) que o computador recém-reiniciado pode erroneamente acatar como sendo de uma nova conexão.",
    "explanation": "A alternativa correta é a letra A. O recebimento de pacotes duplicados atrasados de conexões antigas (encerradas de forma abrupta) que o computador recém-reiniciado pode erroneamente acatar como sendo de uma nova conexão."
  },
  {
    "question": "No contexto de congestionamento de rede em técnicas usadas nos protocolos de redes de computadores, o que é um \"Colapso de Congestionamento\"?",
    "options": [
      "Quando o protocolo TCP/IP desliga a placa de rede por segurança energética.",
      "Quando os fios de cobre aquecem e perdem a blindagem.",
      "A persistência do congestionamento resultando num ciclo onde roteadores ficam sem memória, descartam pacotes e pacotes são maciçamente retransmitidos, tornando a rede toda instável e inoperante.",
      "O descarte proposital de jumbo frames em favor de frames Ethernet convencionais.",
      "A parada de funcionamento de redes do tipo Anel quando quebra um único nó."
    ],
    "answer": "A persistência do congestionamento resultando num ciclo onde roteadores ficam sem memória, descartam pacotes e pacotes são maciçamente retransmitidos, tornando a rede toda instável e inoperante.",
    "explanation": "A alternativa correta é a letra C. A persistência do congestionamento resultando num ciclo onde roteadores ficam sem memória, descartam pacotes e pacotes são maciçamente retransmitidos, tornando a rede toda instável e inoperante."
  },
  {
    "question": "O endereço de loopback, reservado no IP (Classe A, prefixo 127), tem como funcionalidade:",
    "options": [
      "Enviar um broadcast reverso para descobrir endereços MAC (ARP inverso).",
      "Ser invisível na rede externa; utilizado internamente no host para testes de software de rede.",
      "Servir de gateway padrão em caso de falha de DNS.",
      "Ativar o modo redundante FDDI na interface TCP/IP.",
      "Encaminhar pacotes danificados a roteadores analíticos."
    ],
    "answer": "Ser invisível na rede externa; utilizado internamente no host para testes de software de rede.",
    "explanation": "A alternativa correta é a letra B. Ser invisível na rede externa; utilizado internamente no host para testes de software de rede."
  },
  {
    "question": "Qual camada do modelo TCP/IP engloba e organiza as funções da estrutura, envio, formato e roteamento de datagramas através da internet, correspondendo ao hardware básico?",
    "options": [
      "Aplicação.",
      "Transporte.",
      "Internet / Rede (onde opera o IP e ICMP).",
      "Interface de Rede / Enlace (lidando com os frames e topologia).",
      "Sessão e Apresentação."
    ],
    "answer": "Interface de Rede / Enlace (lidando com os frames e topologia).",
    "explanation": "A alternativa correta é a letra D. Interface de Rede / Enlace (lidando com os frames e topologia)."
  },
  {
    "question": "Em relação aos métodos que avisam ao receptor qual é o tipo de conteúdo do pacote, como age o tipo de frame implícito?",
    "options": [
      "O hardware anexa um campo fixo com código de hexadecimais explícitos para o tipo (Ex: IPv4=0x0800).",
      "O hardware não insere um tipo fixo de frame. Envia apenas os dados; logo emissor e receptor já devem ter acordado sobre o que transitam, ou usam um pedaço arbitrário do cabeçalho dos dados.",
      "O pacote é envolvido num certificado SSL, invisível ao roteador.",
      "O frame não carrega nada exceto ruído e a bridge deduz o dado por heurística.",
      "Transforma todo arquivo em hipertexto (HTTP) independentemente do conteúdo."
    ],
    "answer": "O hardware não insere um tipo fixo de frame. Envia apenas os dados; logo emissor e receptor já devem ter acordado sobre o que transitam, ou usam um pedaço arbitrário do cabeçalho dos dados.",
    "explanation": "A alternativa correta é a letra B. O hardware não insere um tipo fixo de frame. Envia apenas os dados; logo emissor e receptor já devem ter acordado sobre o que transitam, ou usam um pedaço arbitrário do cabeçalho dos dados."
  },
  {
    "question": "O \"Default Gateway\" em uma LAN conectada à internet tem como principal característica lógica, pelo ponto de vista do host:",
    "options": [
      "Filtrar as colisões vindas do Backbone da operadora usando CSMA/CD.",
      "Ser consultado sempre que o host precisar enviar um pacote cujo \"prefixo de rede\" IP (endereço da rede de destino) não faça parte da sua mesma sub-rede local.",
      "Distribuir IPs na LAN inviabilizando o uso de DHCP.",
      "Proibir que redes mistas usem cabos Thinnet.",
      "Traduzir endereços MAC estáticos em endereços dinâmicos."
    ],
    "answer": "Ser consultado sempre que o host precisar enviar um pacote cujo \"prefixo de rede\" IP (endereço da rede de destino) não faça parte da sua mesma sub-rede local.",
    "explanation": "A alternativa correta é a letra B. Ser consultado sempre que o host precisar enviar um pacote cujo \"prefixo de rede\" IP (endereço da rede de destino) não faça parte da sua mesma sub-rede local."
  },
  {
    "question": "O TCP fornece a função de um \"Ótimo fim de Conexão\". O que essa característica atesta aos programas envolvidos?",
    "options": [
      "Que se o cabo for arrancado, os dados perdidos ressurgem no destino.",
      "Um programa pode abrir uma conexão e fechá-la, garantindo que o TCP não cortará a via bruscamente antes de garantir a entrega de todos os dados pendentes de envio e confirmação.",
      "Que nenhum erro de rajada acontecerá ao final do dia.",
      "Que apenas o emissor pode fechar o link.",
      "Fecha a porta no firewall definitivamente bloqueando outras sessões."
    ],
    "answer": "Um programa pode abrir uma conexão e fechá-la, garantindo que o TCP não cortará a via bruscamente antes de garantir a entrega de todos os dados pendentes de envio e confirmação.",
    "explanation": "A alternativa correta é a letra B. Um programa pode abrir uma conexão e fechá-la, garantindo que o TCP não cortará a via bruscamente antes de garantir a entrega de todos os dados pendentes de envio e confirmação."
  },
  {
    "question": "\"Multiplexador de conexão\" foi apresentado no contexto do cabeamento \"Thick Ethernet\" para resolver qual questão prática?",
    "options": [
      "Interligar computadores a redes de satélites diretamente.",
      "Multiplicar a banda máxima disponível do cabo coaxial por 10.",
      "Permitir que vários computadores utilizassem o mesmo transceptor (transceiver), diminuindo custos, número e furos de AUIs.",
      "Transformar cabos coaxiais 50 ohms em 75 ohms.",
      "Suprir a ausência de máscaras de sub-rede."
    ],
    "answer": "Permitir que vários computadores utilizassem o mesmo transceptor (transceiver), diminuindo custos, número e furos de AUIs.",
    "explanation": "A alternativa correta é a letra C. Permitir que vários computadores utilizassem o mesmo transceptor (transceiver), diminuindo custos, número e furos de AUIs."
  },
  {
    "question": "Ao relacionar TCP/IP e ICMP, por que os protocolos são ditos \"co-dependentes\" no fluxo da arquitetura de comunicação?",
    "options": [
      "O ICMP gera datagramas UDP cegos enquanto o IP os traduz em TCP.",
      "O TCP não funciona sem ICMP para ordenamento, e o ICMP precisa do TCP para confiabilidade.",
      "O IP utiliza o ICMP quando precisa gerar/reportar falhas lógicas e mensagens de erro, mas o ICMP é envelopado e \"pega carona\" (transportado) como carga (payload) em cima de um datagrama IP comum para trafegar até o destino.",
      "Eles competem na camada física por pulsos analógicos.",
      "O ICMP altera a MAC address e o IP refaz o CRC."
    ],
    "answer": "O IP utiliza o ICMP quando precisa gerar/reportar falhas lógicas e mensagens de erro, mas o ICMP é envelopado e \"pega carona\" (transportado) como carga (payload) em cima de um datagrama IP comum para trafegar até o destino.",
    "explanation": "A alternativa correta é a letra C. O IP utiliza o ICMP quando precisa gerar/reportar falhas lógicas e mensagens de erro, mas o ICMP é envelopado e \"pega carona\" (transportado) como carga (payload) em cima de um datagrama IP comum para trafegar até o destino."
  },
  {
    "question": "Segundo a regra (N² - N) / 2 exposta na teoria de Topologias LAN (Conexão direta Ponto-a-Ponto estrita), para ligarmos 4 computadores unicamente entre si em malha total, precisaríamos de:",
    "options": [
      "4 conexões.",
      "6 conexões.",
      "8 conexões.",
      "12 conexões.",
      "2 conexões em hub."
    ],
    "answer": "6 conexões.",
    "explanation": "A alternativa correta é a letra B. 6 conexões."
  },
  {
    "question": "As informações abaixo relativas a cabos Thinnet (Thin Ethernet), são apontadas pelo texto, EXCETO:",
    "options": [
      "Usa fio mais fino e mais flexível que Thicknet.",
      "Geralmente mais barato de se implantar que a Thicknet.",
      "Usa o Conector tipo T com travas BNC.",
      "O Transceiver fica alojado em uma central telefônica e não embutido na placa.",
      "Uma desconexão acidental de uma máquina rompe a corrente lógica do segmento todo."
    ],
    "answer": "O Transceiver fica alojado em uma central telefônica e não embutido na placa.",
    "explanation": "A alternativa correta é a letra D. O Transceiver fica alojado em uma central telefônica e não embutido na placa."
  },
  {
    "question": "Considerando o método Dijkstra associado a rotas Link-State (SPF), assinale a correta:",
    "options": [
      "Os roteadores trocam apenas as tabelas de roteamento prontas, poupando processamento local.",
      "Esse modelo evita Dijkstra por considerá-lo lento, substituindo por Random Walk.",
      "O protocolo espalha mensagens com o \"status do link\" (qualidade/custo) de suas adjacências, cada roteador acumula essa visão (grafo global) e calcula seu próprio caminho mais curto a partir de si mesmo.",
      "Link state exige que todos os roteadores do mundo estejam rodando na classe A do IPv4.",
      "O estado do link baseia-se unicamente em contagem de pulos físicos (hop count)."
    ],
    "answer": "O protocolo espalha mensagens com o \"status do link\" (qualidade/custo) de suas adjacências, cada roteador acumula essa visão (grafo global) e calcula seu próprio caminho mais curto a partir de si mesmo.",
    "explanation": "A alternativa correta é a letra C. O protocolo espalha mensagens com o \"status do link\" (qualidade/custo) de suas adjacências, cada roteador acumula essa visão (grafo global) e calcula seu próprio caminho mais curto a partir de si mesmo."
  },
  {
    "question": "Como as sub-redes atenuaram o problema de endereços IP no passado, permitindo uma gestão eficiente?",
    "options": [
      "Multiplicaram 32 bits para 128 bits.",
      "Reduziram a quantidade de protocolos TCP no mundo.",
      "Dividiram classes estritas (como A ou",
      "que seriam desperdiçadas em empresas menores, usando os bits \"roubados\" da porção de hosts e mudando a máscara, viabilizando redes mais enxutas.",
      "Transferiram todos os IPs da classe D para o serviço público.",
      "Usaram jumbo frames para codificar endereços dinamicamente em hexadecimal."
    ],
    "answer": "Dividiram classes estritas (como A ou",
    "explanation": "A alternativa correta é a letra C. Dividiram classes estritas (como A ou"
  },
  {
    "question": "Sobre falhas na Ethernet em Anel (Ring) desprovida da inteligência FDDI:",
    "options": [
      "Se a placa de um computador for desligada, o pacote desvia pelas portas BNC de escape.",
      "A falha ou desconexão física num único equipamento/cabo paralisa ou desabilita o fluxo de toda a rede naquele anel.",
      "O anel inverte a rotação dos bits em 10 milissegundos baseado em TCP.",
      "As redes Token Ring baseadas em Hub ignoram máquinas inativas.",
      "Um sinal infravermelho de backup assume o datagrama."
    ],
    "answer": "A falha ou desconexão física num único equipamento/cabo paralisa ou desabilita o fluxo de toda a rede naquele anel.",
    "explanation": "A alternativa correta é a letra B. A falha ou desconexão física num único equipamento/cabo paralisa ou desabilita o fluxo de toda a rede naquele anel."
  },
  {
    "question": "Na transmissão \"Banda Larga\" do cabo coaxial do texto, a impedância citada é de:",
    "options": [
      "50 Ohms.",
      "60 Ohms.",
      "75 Ohms.",
      "100 Ohms.",
      "120 Ohms."
    ],
    "answer": "75 Ohms.",
    "explanation": "A alternativa correta é a letra C. 75 Ohms."
  },
  {
    "question": "E a transmissão \"Banda Base\" do cabo coaxial, segundo o texto, apresenta a impedância de:",
    "options": [
      "30 Ohms.",
      "50 Ohms.",
      "75 Ohms.",
      "80 Ohms.",
      "100 Ohms."
    ],
    "answer": "50 Ohms.",
    "explanation": "A alternativa correta é a letra B. 50 Ohms."
  },
  {
    "question": "O fenômeno de atenuação de sinais no cabo longo da LAN (limitação pela distância) significa:",
    "options": [
      "O sinal elétrico aumenta exponencialmente seu ganho, gerando ruído acima da suportabilidade.",
      "Aumento brutal na precisão criptográfica.",
      "Os pulsos elétricos começam a se perder e sofrer degradação no fio de cobre em virtude da grande extensão resistiva e capacitiva do cabo físico.",
      "Os datagramas TCP corrompem unicamente a Camada 7 do OSI.",
      "O hub passivo reflete a onda eletromagnética apagando os endereços MAC."
    ],
    "answer": "Os pulsos elétricos começam a se perder e sofrer degradação no fio de cobre em virtude da grande extensão resistiva e capacitiva do cabo físico.",
    "explanation": "A alternativa correta é a letra C. Os pulsos elétricos começam a se perder e sofrer degradação no fio de cobre em virtude da grande extensão resistiva e capacitiva do cabo físico."
  },
  {
    "question": "Quando abordamos o uso de cabeçalhos nas pilhas (\"Software em Camadas\"), o conceito padrão em encapsulamento é que:",
    "options": [
      "A camada adiciona sua informação ao final (tail) dos dados unicamente.",
      "Os cabeçalhos são todos abrigados lado a lado, emulando um Array num vetor único processado pela CPU.",
      "Cada camada embute informações no começo formando uma série de \"cabeçalhos abrigados\" (Nested headers), ainda que alguns protocolos permitam informações no final, como trailers de CRC.",
      "A Camada Física (1) sempre gera um cabeçalho explícito enorme em hexadecimal informando a corrente de voltagem.",
      "Os datagramas desconsideram o encapsulamento se enviados via multicasting."
    ],
    "answer": "Cada camada embute informações no começo formando uma série de \"cabeçalhos abrigados\" (Nested headers), ainda que alguns protocolos permitam informações no final, como trailers de CRC.",
    "explanation": "A alternativa correta é a letra C. Cada camada embute informações no começo formando uma série de \"cabeçalhos abrigados\" (Nested headers), ainda que alguns protocolos permitam informações no final, como trailers de CRC."
  },
  {
    "question": "Uma vantagem clara do roteamento dinâmico em relação ao estático em WANs é:",
    "options": [
      "Consumir zero porcento de CPU dos equipamentos da borda.",
      "Garantir segurança contra qualquer tipo de ataque man-in-the-middle.",
      "Construir e alterar automaticamente as tabelas baseando-se em alterações na rede ou problemas físicos (ex: queda de links), readaptando a rede.",
      "Ser impenetrável por ferramentas Traceroute e Ping limitadas pelo ICMP.",
      "Eliminar completamente os retardos (switching delay e queuing delay) do pacote com encaminhamento fixo."
    ],
    "answer": "Construir e alterar automaticamente as tabelas baseando-se em alterações na rede ou problemas físicos (ex: queda de links), readaptando a rede.",
    "explanation": "A alternativa correta é a letra C. Construir e alterar automaticamente as tabelas baseando-se em alterações na rede ou problemas físicos (ex: queda de links), readaptando a rede."
  },
  {
    "question": "Para calcularmos a quantidade de sub-redes em um IP /22 gerado a partir de um bloco /16 (172.18.0.0/16), basta verificarmos a movimentação de bits. O texto relata que esse fracionamento em /22 gerou um número X de novas redes. Que número é esse e quantos hosts no máximo (ignorando reservados) comporta teoricamente a rede /22 usando os bits restantes?",
    "options": [
      "64 novas sub-redes; até 1024 hosts totais possíveis (1022 válidos).",
      "32 novas sub-redes; até 2048 hosts possíveis.",
      "16 novas sub-redes; até 4096 hosts possíveis.",
      "128 novas sub-redes; até 512 hosts possíveis.",
      "256 novas sub-redes; até 254 hosts possíveis."
    ],
    "answer": "64 novas sub-redes; até 1024 hosts totais possíveis (1022 válidos).",
    "explanation": "A alternativa correta é a letra A. 64 novas sub-redes; até 1024 hosts totais possíveis (1022 válidos)."
  },
  {
    "question": "De acordo com o texto, documentos de padronização emitidos por agentes internacionais certificam a comunicação entre hardwares de marcas diferentes. O que, especificamente, esses padrões definem no aspecto físico?",
    "options": [
      "O tipo de criptografia que deverá ser usado em todas as redes privadas.",
      "O tempo de sinal e os detalhes exatos da voltagem e da corrente elétrica.",
      "A cor da capa isolante de cada cabo e o tipo de sistema operacional requerido.",
      "O número máximo de computadores em nível global.",
      "O endereço IP universal de todos os switches do mercado."
    ],
    "answer": "O tempo de sinal e os detalhes exatos da voltagem e da corrente elétrica.",
    "explanation": "A alternativa correta é a letra B. O tempo de sinal e os detalhes exatos da voltagem e da corrente elétrica."
  },
  {
    "question": "O texto cita um salto de evolução nas redes sobre os tempos de transmissão (Jumbo Frames). Em uma rede antiga de 10 Megabits, a transmissão de um frame consumia 1221 nanosegundos. Em uma rede Gigabit Ethernet (100 vezes mais rápida), qual é o tempo exato, citado no material, gasto para a transmissão de cada frame?",
    "options": [
      "1,22 nanosegundos.",
      "122 nanosegundos.",
      "12 nanosegundos.",
      "1000 nanosegundos.",
      "Menos de 1 nanosegundo."
    ],
    "answer": "12 nanosegundos.",
    "explanation": "A alternativa correta é a letra C. 12 nanosegundos."
  },
  {
    "question": "Comparando as Topologias de LANs em caso de rompimento de fios, o texto traça um paralelo sobre vantagens e desvantagens. Qual afirmativa traduz essa comparação?",
    "options": [
      "A topologia em Barramento requer menos fios que as demais, porém tem a mesma desvantagem da topologia em Anel: se o cabo principal for rompido ou desabilitado, toda a rede para de funcionar.",
      "A topologia de Estrela protege apenas contra queimas elétricas, mas cai se qualquer ponta romper.",
      "A topologia em Anel utiliza menos cabos que a topologia em Barramento, sendo invulnerável a rupturas físicas.",
      "O rompimento de fio no barramento gera o método self healing inerente ao CSMA/CD.",
      "A topologia de Estrela requer menos fios que o Barramento, barateando o sistema."
    ],
    "answer": "A topologia em Barramento requer menos fios que as demais, porém tem a mesma desvantagem da topologia em Anel: se o cabo principal for rompido ou desabilitado, toda a rede para de funcionar.",
    "explanation": "A alternativa correta é a letra A. A topologia em Barramento requer menos fios que as demais, porém tem a mesma desvantagem da topologia em Anel: se o cabo principal for rompido ou desabilitado, toda a rede para de funcionar."
  },
  {
    "question": "Vimos que algumas placas de rede (NICs) possuem múltiplos conectores para suportar Thicknet, Thinnet e Par Trançado. Em relação ao Endereço Físico (MAC) quando há troca do sistema de cabeamento, e a operação desses conectores, o que ocorre?",
    "options": [
      "O MAC address deve ser regravado no firmware sempre que se troca o cabo, e todos os conectores podem enviar dados juntos.",
      "O endereço muda dinamicamente assumindo o MAC da nova rede. Apenas um conector funciona de cada vez.",
      "O endereço do computador é determinado pelo tipo de cabo. Portanto, o MAC Address muda quando o cabeamento muda.",
      "O endereço físico continua inalterado, pois é determinado pela placa de rede e não pelo cabo. Contudo, apesar de possuir vários conectores, apenas um conector pode estar habilitado e funcionando por vez (decisão via software).",
      "O sistema exige três MAC addresses distintos, um para cada porta de cabeamento habilitada."
    ],
    "answer": "O endereço físico continua inalterado, pois é determinado pela placa de rede e não pelo cabo. Contudo, apesar de possuir vários conectores, apenas um conector pode estar habilitado e funcionando por vez (decisão via software).",
    "explanation": "A alternativa correta é a letra D. O endereço físico continua inalterado, pois é determinado pela placa de rede e não pelo cabo. Contudo, apesar de possuir vários conectores, apenas um conector pode estar habilitado e funcionando por vez (decisão via software)."
  },
  {
    "question": "O gerenciamento de segurança num HUB inteligente abrange a proteção contra Intrusão e Interceptação. Segundo as definições literais do texto, o que é a proteção contra Interceptação em um Hub?",
    "options": [
      "É bloquear a conexão física de microcomputadores não autorizados na porta.",
      "É enviar pacotes com vírus de volta para o atacante.",
      "Consiste em permitir que apenas IPs de classe A acessem o painel de controle.",
      "Significa que um dado transmitido só será reconhecido e válido na porta configurada com o endereço de rede correspondente ao da mensagem, sendo a mensagem inválida nas outras portas.",
      "Consiste na aplicação de criptografia WPA2 entre o hub e o repetidor de sinal."
    ],
    "answer": "Significa que um dado transmitido só será reconhecido e válido na porta configurada com o endereço de rede correspondente ao da mensagem, sendo a mensagem inválida nas outras portas.",
    "explanation": "A alternativa correta é a letra D. Significa que um dado transmitido só será reconhecido e válido na porta configurada com o endereço de rede correspondente ao da mensagem, sendo a mensagem inválida nas outras portas."
  },
  {
    "question": "No capítulo de extensão de LANs, como se dá o tipo mais simples de extensão empregando Fibra Óptica citado no texto?",
    "options": [
      "Conectando lasers diretos às portas UTP usando um alicate.",
      "O uso de um cabo de fibra e um par de \"modems de fibra óptica\", permitindo conectar um computador remoto a quilômetros de distância à rede (apesar do alto custo).",
      "Inserindo um Hub Ativo em cada extremidade da fibra para espelhar a luz.",
      "Usando roteadores BGP para fragmentar a luz.",
      "Reduzindo a espessura da malha de cobre até que se torne uma fibra óptica por fusão."
    ],
    "answer": "O uso de um cabo de fibra e um par de \"modems de fibra óptica\", permitindo conectar um computador remoto a quilômetros de distância à rede (apesar do alto custo).",
    "explanation": "A alternativa correta é a letra B. O uso de um cabo de fibra e um par de \"modems de fibra óptica\", permitindo conectar um computador remoto a quilômetros de distância à rede (apesar do alto custo)."
  },
  {
    "question": "De forma fundamental, o que separa a classificação conceitual e estrutural de uma WAN em comparação a uma simples LAN estendida?",
    "options": [
      "O tipo de criptografia (LANs usam AES; WANs não possuem proteção).",
      "A LAN estendida alcança distâncias interestelares, a WAN não.",
      "A escala e o design: uma WAN deve ser capaz de crescer o quanto for necessário para conectar quantos computadores e \"lados\" diferentes forem precisos, coisa que uma simples LAN estendida não consegue devido aos limites da tecnologia.",
      "As LANs usam exclusivamente IPv6, e as WANs, IPv4.",
      "A impossibilidade da WAN de utilizar conexões Ponto-a-Ponto."
    ],
    "answer": "A escala e o design: uma WAN deve ser capaz de crescer o quanto for necessário para conectar quantos computadores e \"lados\" diferentes forem precisos, coisa que uma simples LAN estendida não consegue devido aos limites da tecnologia.",
    "explanation": "A alternativa correta é a letra C. A escala e o design: uma WAN deve ser capaz de crescer o quanto for necessário para conectar quantos computadores e \"lados\" diferentes forem precisos, coisa que uma simples LAN estendida não consegue devido aos limites da tecnologia."
  },
  {
    "question": "Ao abordar o \"O Endereço Físico\" em uma WAN, como muitos sistemas otimizam o endereçamento para o Switch de Pacotes (Packet Switch) encaminhar frames com maior eficiência?",
    "options": [
      "Usando endereços aleatórios embaralhados a cada salto.",
      "Aplicando um sistema hierárquico em que o primeiro número indica o próprio packet switch de destino e o segundo número indica qual a porta desse switch o PC está conectado.",
      "Eliminando o endereçamento físico e usando unicamente o roteamento estático da máscara de sub-rede.",
      "Convertendo o endereço MAC hexadecimal em endereço analógico via modem de fibra.",
      "Inserindo todos os endereços da WAN em um DNS global."
    ],
    "answer": "Aplicando um sistema hierárquico em que o primeiro número indica o próprio packet switch de destino e o segundo número indica qual a porta desse switch o PC está conectado.",
    "explanation": "A alternativa correta é a letra B. Aplicando um sistema hierárquico em que o primeiro número indica o próprio packet switch de destino e o segundo número indica qual a porta desse switch o PC está conectado."
  },
  {
    "question": "Em relação à classificação baseada em Padrões de Serviço, o \"Serviço de Conexão Orientada\" possui uma vantagem muito específica para a aplicação, que é:",
    "options": [
      "Enviar dados mais rápido porque omite os cabeçalhos.",
      "Ocupar zero Megabytes de memória (buffer).",
      "A habilidade de informar a um computador imediatamente se a conexão foi cessada, já que depende de um canal estabelecido antes de comunicar.",
      "Transmitir datagramas sem verificar destino para alcançar maior largura de banda.",
      "Usar implicitamente pacotes CSMA/CD em enlaces sem fio."
    ],
    "answer": "A habilidade de informar a um computador imediatamente se a conexão foi cessada, já que depende de um canal estabelecido antes de comunicar.",
    "explanation": "A alternativa correta é a letra C. A habilidade de informar a um computador imediatamente se a conexão foi cessada, já que depende de um canal estabelecido antes de comunicar."
  },
  {
    "question": "Em características do desempenho de redes, o texto informa que a Capacidade total presente/ocupada pela rede pode ser calculada usando dois indicadores. Como é obtido o volume de dados (capacidade de dados circulantes) presentes na rede num dado instante?",
    "options": [
      "Pela soma simples do \"delay de enfileiramento\" com os \"Jumbo Frames\".",
      "Pelo produto (multiplicação) do Delay (tempo em trânsito) pelo Ritmo de Transferência (bps).",
      "Pela divisão da Largura de Banda pela atenuação do sinal.",
      "Pela raiz quadrada do exponential backoff medido em nanosegundos.",
      "Multiplicando o baud rate pelo limitador de multicasting."
    ],
    "answer": "Pelo produto (multiplicação) do Delay (tempo em trânsito) pelo Ritmo de Transferência (bps).",
    "explanation": "A alternativa correta é a letra B. Pelo produto (multiplicação) do Delay (tempo em trânsito) pelo Ritmo de Transferência (bps)."
  },
  {
    "question": "Diferente do Modelo OSI (com 7 camadas), a arquitetura TCP/IP, criada por pesquisadores que desenvolveram a arquitetura de Internet, resume-se a quantas camadas e englobadas de qual forma geral?",
    "options": [
      "3 camadas: Física, IP e UDP.",
      "5 camadas: Fio, Enlace, Rede, Transporte e Apresentação.",
      "4 camadas no TCP/IP, que correspondem/absorvem as atribuições das 7 camadas do modelo OSI (Aplicação, Transporte, Internet/Rede e Enlace de Dados/Hardware).",
      "6 camadas (omitindo apenas a camada de Sessão).",
      "7 camadas, exatamente o mesmo número do OSI, divergindo apenas nos nomes."
    ],
    "answer": "4 camadas no TCP/IP, que correspondem/absorvem as atribuições das 7 camadas do modelo OSI (Aplicação, Transporte, Internet/Rede e Enlace de Dados/Hardware).",
    "explanation": "A alternativa correta é a letra C. 4 camadas no TCP/IP, que correspondem/absorvem as atribuições das 7 camadas do modelo OSI (Aplicação, Transporte, Internet/Rede e Enlace de Dados/Hardware)."
  },
  {
    "question": "Qual é o tamanho que o Datagrama IP pode atingir (com cabeçalho + dados) segundo a especificação explícita da versão 4 apresentada pelo texto?",
    "options": [
      "Fixo em exatos 1500 Bytes.",
      "Pode conter desde um único Byte até 64 Kilobytes (64KB).",
      "Máximo de 254 Megabytes.",
      "Fixo em 26 bytes adicionais sobre os 9000 de carga útil.",
      "Exatamente o tamanho de 32 bits (4 bytes)."
    ],
    "answer": "Pode conter desde um único Byte até 64 Kilobytes (64KB).",
    "explanation": "A alternativa correta é a letra B. Pode conter desde um único Byte até 64 Kilobytes (64KB)."
  },
  {
    "question": "O endereço de IP especial chamado \"Endereço de Transferência Limitada\" serve a que propósito na rede?",
    "options": [
      "Enviar arquivos gigantescos acima de 64KB fragmentando-os por padrão.",
      "Limitar a banda gasta pelos computadores da rede em horário comercial.",
      "Fazer um broadcast estrito em \"um único fio\" (LAN local), sendo usado pelo computador recém-iniciado quando este ainda não sabe qual é o número da sua rede local (prefixo).",
      "Conectar o roteador local com as operadoras públicas em link-state.",
      "Permitir invasões limitadas para checagem de firewalls (penetration test)."
    ],
    "answer": "Fazer um broadcast estrito em \"um único fio\" (LAN local), sendo usado pelo computador recém-iniciado quando este ainda não sabe qual é o número da sua rede local (prefixo).",
    "explanation": "A alternativa correta é a letra C. Fazer um broadcast estrito em \"um único fio\" (LAN local), sendo usado pelo computador recém-iniciado quando este ainda não sabe qual é o número da sua rede local (prefixo)."
  },
  {
    "question": "O texto cita que um endereço de IP é considerado \"auto-identificável\". Na prática, o que essa propriedade da arquitetura significa para o sistema?",
    "options": [
      "Significa que o usuário não precisa configurar IP dinâmico, pois o MAC se traduz sozinho.",
      "O IP envia um pacote ICMP autônomo ao entrar na rede para identificar seu switch.",
      "O software e roteadores podem constatar e verificar a Classe do IP instantaneamente lendo apenas os primeiros bits (o prefixo) a partir do próprio endereço, sem necessitar consultar diretórios.",
      "O IP tem a capacidade de alterar sua classe sozinho (de A para",
      "caso sofra invasão.",
      "Que o Ping o reconhece nativamente sem DNS."
    ],
    "answer": "O software e roteadores podem constatar e verificar a Classe do IP instantaneamente lendo apenas os primeiros bits (o prefixo) a partir do próprio endereço, sem necessitar consultar diretórios.",
    "explanation": "A alternativa correta é a letra C. O software e roteadores podem constatar e verificar a Classe do IP instantaneamente lendo apenas os primeiros bits (o prefixo) a partir do próprio endereço, sem necessitar consultar diretórios."
  },
  {
    "question": "Embora o conceito geral de camadas determine que cada uma adicione \"cabeçalhos abrigados\", qual camada constitui a grande EXCEÇÃO por não adicionar informações sob a forma de cabeçalhos acoplados?",
    "options": [
      "Camada de Aplicação, que usa TCP puro.",
      "Camada de Apresentação.",
      "Camada de Rede (IP).",
      "Camada 1 (nível do Link Físico), pois especifica e trata o sinal elétrico ou óptico usado na transmissão em si, não adicionando um cabeçalho literal.",
      "Camada de Transporte, pois atua em datagramas e não frames."
    ],
    "answer": "Camada 1 (nível do Link Físico), pois especifica e trata o sinal elétrico ou óptico usado na transmissão em si, não adicionando um cabeçalho literal.",
    "explanation": "A alternativa correta é a letra D. Camada 1 (nível do Link Físico), pois especifica e trata o sinal elétrico ou óptico usado na transmissão em si, não adicionando um cabeçalho literal."
  },
  {
    "question": "Qual é o exato motivo citado no texto pelo qual firewalls modernos frequentemente bloqueiam o protocolo ICMP, afetando ferramentas como o Ping?",
    "options": [
      "Devido a erros de formatação nos cabeçalhos IPv6.",
      "Para evitar ataques consistentes no envio de solicitações sucessivas (Flood de Ping) até que a máquina alvo esgote sua capacidade e não consiga executar suas tarefas normais.",
      "O ICMP altera os endereços MAC sem autorização, configurando invasão.",
      "Porque o ping desabilita o \"A qualquer custo\" do TCP.",
      "Porque roteadores descartam mensagens de erro por padrão para economizar 26 bytes."
    ],
    "answer": "Para evitar ataques consistentes no envio de solicitações sucessivas (Flood de Ping) até que a máquina alvo esgote sua capacidade e não consiga executar suas tarefas normais.",
    "explanation": "A alternativa correta é a letra B. Para evitar ataques consistentes no envio de solicitações sucessivas (Flood de Ping) até que a máquina alvo esgote sua capacidade e não consiga executar suas tarefas normais."
  },
  {
    "question": "Como uma consequência técnica da \"entrega a qualquer custo\", ferramentas avançadas como o Traceroute sofrem para determinar o tempo ideal de escuta das mensagens de resposta de roteadores perdidos na rede. Como o Traceroute resolve esse impasse de cálculo de tempo?",
    "options": [
      "Ele exige uso obrigatório de IPv6 que contém o header de QoS embutido.",
      "Ele envia o sinal em broadcasting universal forçando o roteador a processá-lo imediatamente.",
      "Deixa a rede ociosa medindo pelo teorema de Nyquist.",
      "O protocolo de rede resolve matematicamente o limite pelo algoritmo OSPF.",
      "Visto que não há como saber, de antemão, quanto tempo esperar, o Traceroute delega ao próprio usuário a decisão desse tempo de espera (Timeout configurável)."
    ],
    "answer": "Visto que não há como saber, de antemão, quanto tempo esperar, o Traceroute delega ao próprio usuário a decisão desse tempo de espera (Timeout configurável).",
    "explanation": "A alternativa correta é a letra E. Visto que não há como saber, de antemão, quanto tempo esperar, o Traceroute delega ao próprio usuário a decisão desse tempo de espera (Timeout configurável)."
  },
  {
    "question": "Por que a nova versão do IP assumiu o número 6 (IPv6) e o que aconteceu com o número 5 (IPv5) na história dos protocolos segundo o texto?",
    "options": [
      "O IPv5 era para ambiente MAC e o IPv6 para Windows.",
      "Não existe justificativa técnica, foi sorteado pela IETF.",
      "A versão 5 já havia sido utilizada historicamente e em caráter fechado em um protocolo experimental focado em streams, chamado de ST.",
      "O número 5 foi banido pelo risco de \"colapso de congestionamento\".",
      "O IPv5 tratava de hardware e o IPv6 apenas de software."
    ],
    "answer": "A versão 5 já havia sido utilizada historicamente e em caráter fechado em um protocolo experimental focado em streams, chamado de ST.",
    "explanation": "A alternativa correta é a letra C. A versão 5 já havia sido utilizada historicamente e em caráter fechado em um protocolo experimental focado em streams, chamado de ST."
  },
  {
    "question": "Em relação à diferença de velocidades de computadores e da rede, o texto ressalta que se a rede acompanhar a velocidade do micro mais lento para operar, ela prejudicará a transferência dos PCs rápidos. Por causa desse dilema prático, qual é a postura adotada pelas tecnologias locais?",
    "options": [
      "As redes igualam todos os computadores a um ritmo fixo baseado no micro mais devagar, limitando picos de tráfego (Fair Use).",
      "Elas ignoram as máquinas lentas que ficam permanentemente fora do tráfego.",
      "As redes são feitas de modo a operar sempre utilizando a taxa de transferência máxima que o hardware de rede pode suportar, exigindo que a CPU lenta utilize sua placa (NIC) para reter (bufferizar) pacotes em alta velocidade.",
      "Instalação compulsória de Multiplexadores de conexão nos cabos lerdos.",
      "Usar ICMP Source Quench de maneira perpétua para manter a paridade de processamento."
    ],
    "answer": "As redes são feitas de modo a operar sempre utilizando a taxa de transferência máxima que o hardware de rede pode suportar, exigindo que a CPU lenta utilize sua placa (NIC) para reter (bufferizar) pacotes em alta velocidade.",
    "explanation": "A alternativa correta é a letra C. As redes são feitas de modo a operar sempre utilizando a taxa de transferência máxima que o hardware de rede pode suportar, exigindo que a CPU lenta utilize sua placa (NIC) para reter (bufferizar) pacotes em alta velocidade."
  },
  {
    "question": "O que assegura formalmente, segundo o texto, que a divisão das regras de protocolos em conjuntos \"separados e independentes\" (camadas) trabalhe de modo coeso, eficiente e efetivo?",
    "options": [
      "A utilização de chaves de criptografia estáticas comuns em todos os andares.",
      "O fato de que eles não compartilham dados ou estruturas jamais, mantendo-se perfeitamente isolados até baterem no hardware.",
      "A sua concepção unificada. Apesar de divididos durante o projeto em camadas menores, eles são desenvolvidos conceitualmente em conjuntos chamados \"famílias\" (ex: Família TCP/IP), projetados para lidar em harmonia com compartilhamento de informações.",
      "A ausência de colapso por distúrbios da física de Nyquist.",
      "A velocidade igual de propagação no cabo de 1221 nanosegundos."
    ],
    "answer": "A sua concepção unificada. Apesar de divididos durante o projeto em camadas menores, eles são desenvolvidos conceitualmente em conjuntos chamados \"famílias\" (ex: Família TCP/IP), projetados para lidar em harmonia com compartilhamento de informações.",
    "explanation": "A alternativa correta é a letra C. A sua concepção unificada. Apesar de divididos durante o projeto em camadas menores, eles são desenvolvidos conceitualmente em conjuntos chamados \"famílias\" (ex: Família TCP/IP), projetados para lidar em harmonia com compartilhamento de informações."
  },
  {
    "question": "Sobre o cabeçalho base e o tratamento das opções extras, como o IPv6 difere conceitualmente do IPv4?",
    "options": [
      "O IPv4 suporta extensão indefinida de campos; o IPv6 é engessado e não aceita atributos além do básico.",
      "O IPv6 codifica as informações que não são base em cabeçalhos de extensão separados e sequenciais ao cabeçalho base, diferentemente do IPv4 que englobava tudo em um único formato limitante.",
      "O IPv6 removeu o cabeçalho para focar exclusivamente nos dados \"em rajada\".",
      "No IPv6, todos os cabeçalhos usam notação decimal com ponto.",
      "IPv6 tem tamanho mínimo de 64 kilobytes em seu cabeçalho matriz, suportando vídeo 4K."
    ],
    "answer": "O IPv6 codifica as informações que não são base em cabeçalhos de extensão separados e sequenciais ao cabeçalho base, diferentemente do IPv4 que englobava tudo em um único formato limitante.",
    "explanation": "A alternativa correta é a letra B. O IPv6 codifica as informações que não são base em cabeçalhos de extensão separados e sequenciais ao cabeçalho base, diferentemente do IPv4 que englobava tudo em um único formato limitante."
  },
  {
    "question": "Em Redes com CSMA/CD, quando ocorrem colisões seguidas e o cálculo do limite (binary exponential backoff) cresce para atrasar pacotes... o que a essência desse sistema garante em termos de recuperação à LAN?",
    "options": [
      "Que ela seja desligada por segurança contra sobrecarga.",
      "Significa que o hardware da LAN pode realizar funções unicamente pelo CSMA.",
      "Na essência, esse recuo exponencial possibilita que a Ethernet se \"recupere rapidamente\" após uma colisão, porque os computadores afetados aceitam esperar e ceder tempos maiores enquanto a malha de cabo ainda está engarrafada com os dados de terceiros.",
      "Transforma fisicamente o canal de difusão de barramento em token ring.",
      "Torna o roteamento WAN infinitamente rápido baseando-se no algoritmo de Distância Vetorial."
    ],
    "answer": "Na essência, esse recuo exponencial possibilita que a Ethernet se \"recupere rapidamente\" após uma colisão, porque os computadores afetados aceitam esperar e ceder tempos maiores enquanto a malha de cabo ainda está engarrafada com os dados de terceiros.",
    "explanation": "A alternativa correta é a letra C. Na essência, esse recuo exponencial possibilita que a Ethernet se \"recupere rapidamente\" após uma colisão, porque os computadores afetados aceitam esperar e ceder tempos maiores enquanto a malha de cabo ainda está engarrafada com os dados de terceiros."
  },
  {
    "question": "As mensagens ICMP tratam os problemas listados a seguir, exceto:",
    "options": [
      "Falhas de caminho físico entre nós.",
      "Falhas nos processos de roteamento da estrutura lógica.",
      "Mensagens de testagem de alcance (Echo Request / Echo Reply).",
      "Mensagens do limite do TTL excedido em um salto de rede (Time Exceeded).",
      "Verificação de erros no bit (Checksum Header Error) no momento exato em que o pacote atinge e é rejeitado em um roteador sem envio de notificação porque o dado corrompido é instantaneamente descartado e destruído (o receptor não pode sequer confiar nos dados de emissão corrompidos)."
    ],
    "answer": "Verificação de erros no bit (Checksum Header Error) no momento exato em que o pacote atinge e é rejeitado em um roteador sem envio de notificação porque o dado corrompido é instantaneamente descartado e destruído (o receptor não pode sequer confiar nos dados de emissão corrompidos).",
    "explanation": "A alternativa correta é a letra E. Verificação de erros no bit (Checksum Header Error) no momento exato em que o pacote atinge e é rejeitado em um roteador sem envio de notificação porque o dado corrompido é instantaneamente descartado e destruído (o receptor não pode sequer confiar nos dados de emissão corrompidos)."
  },
  {
    "question": "Acerca do software responsável pela computação lógica das Classes e Endereçamento de IP (verificar destino, classe, e calcular as rotas). Qual detalhe sobre eficiência ele exige no roteador e por quê?",
    "options": [
      "Deve ser incrivelmente lento para poupar consumo elétrico do núcleo.",
      "Deve ser realizado fora do chip, via pendrive com tabela estática.",
      "Deve ser extremamente eficiente, já que computar o IP e separar prefixo/sufixo é um processo microscópico que acontece muitas vezes consecutivas para milhares/milhões de pacotes em trânsito e impacta o hardware de borda.",
      "Deve usar obrigatoriamente IPv6 se a rede local usar Thinnet.",
      "Exige obrigatoriamente o processo analógico do Transceiver Thicknet."
    ],
    "answer": "Deve ser extremamente eficiente, já que computar o IP e separar prefixo/sufixo é um processo microscópico que acontece muitas vezes consecutivas para milhares/milhões de pacotes em trânsito e impacta o hardware de borda.",
    "explanation": "A alternativa correta é a letra C. Deve ser extremamente eficiente, já que computar o IP e separar prefixo/sufixo é um processo microscópico que acontece muitas vezes consecutivas para milhares/milhões de pacotes em trânsito e impacta o hardware de borda."
  },
  {
    "question": "Um conceito central defendido no último capítulo diz: \"Nenhum outro protocolo de propósito geral provou que funciona tão bem para o problema espinhoso que ataca.\" Ao que o texto se refere?",
    "options": [
      "O Algoritmo de Dijkstra para redes Token Ring limitadas por hardware.",
      "A Máscara de rede e seus complementos de base 22.",
      "O ICMP ao fazer pings infinitos imunes a bloqueio de Firewall.",
      "O TCP (Transmission Control Protocol), porque entrega transporte 100% confiável, ordenado, sem buracos, controlando dezenas de sessões num ambiente caótico onde o IP atua \"a qualquer custo\" falhando constantemente.",
      "O Gigabit Ethernet, visto que revolucionou cabos coaxiais de 50 ohms reduzindo falhas."
    ],
    "answer": "O TCP (Transmission Control Protocol), porque entrega transporte 100% confiável, ordenado, sem buracos, controlando dezenas de sessões num ambiente caótico onde o IP atua \"a qualquer custo\" falhando constantemente.",
    "explanation": "A alternativa correta é a letra D. O TCP (Transmission Control Protocol), porque entrega transporte 100% confiável, ordenado, sem buracos, controlando dezenas de sessões num ambiente caótico onde o IP atua \"a qualquer custo\" falhando constantemente."
  }
];
