import type { Question } from "../types/question";

export const redesEthernetQuestions: Question[] = [
  {
    question: "Qual a principal vantagem do uso de cabos de par trançado em redes locais frente a cabos coaxiais pesados?",
    options: [
      "Total imunidade a ruídos externos e diafonia.",
      "Utilização exclusiva de sinais analógicos de alta frequência.",
      "Baixo custo, facilidade de manuseio/instalação e limitação de interferências.",
      "Dispensa a necessidade de hubs ou switches na topologia em estrela.",
      "Suporta nativamente 10 km de distância sem repetidores."
    ],
    answer: "Baixo custo, facilidade de manuseio/instalação e limitação de interferências.",
    explanation: "O par trançado é o mais usado pelo baixo custo e fácil manuseio. O trançar dos fios ajuda a cancelar as interferências magnéticas emitidas e recebidas."
  },
  {
    question: "A especificação '100BASE-TX' em redes Ethernet indica, respectivamente:",
    options: [
      "100 metros de distância, transmissão analógica e cabo coaxial.",
      "100 usuários simultâneos, conexão orientada a conexão e switch.",
      "100 Mbps de velocidade, transmissão em banda base (digital) e par trançado.",
      "100 hosts por segmento, banda larga e fibra óptica.",
      "100 MHz de frequência mínima, cabo de telefone e repetidor ativo."
    ],
    answer: "100 Mbps de velocidade, transmissão em banda base (digital) e par trançado.",
    explanation: "100 é a velocidade em Mbps, BASE indica sinal digital em banda base, e TX/T indica uso de cabo par trançado (Twisted Pair)."
  },
  {
    question: "Qual a principal diferença estrutural entre o cabo UTP e os cabos ScTP/STP?",
    options: [
      "O UTP utiliza fibra de vidro, enquanto o ScTP utiliza cobre.",
      "O UTP suporta até 10 Gbps nativamente, ao contrário do ScTP/STP.",
      "O ScTP/STP não possui pares trançados internamente.",
      "O ScTP/STP possui blindagem metálica (Foil/Malha) para maior controle de interferências eletromagnéticas, ausente no UTP.",
      "Apenas o UTP necessita de aterramento rigoroso em ambas as pontas."
    ],
    answer: "O ScTP/STP possui blindagem metálica (Foil/Malha) para maior controle de interferências eletromagnéticas, ausente no UTP.",
    explanation: "UTP (Unshielded Twisted Pair) não possui blindagem. STP e ScTP possuem revestimentos metálicos (malha ou folha) para barrar radiação e ruídos."
  },
  {
    question: "Os cabos 'cross-over' (cruzados) são comumente utilizados na montagem de cabeamento estruturado para interligar:",
    options: [
      "Equipamentos de categorias diferentes (ex: PC e Switch).",
      "Somente redes que utilizam cabo coaxial BNC.",
      "Computadores a impressoras de rede wi-fi.",
      "Equipamentos da mesma categoria e função de portas (ex: PC com PC, Switch com Switch).",
      "Modems analógicos a roteadores de fibra óptica."
    ],
    answer: "Equipamentos da mesma categoria e função de portas (ex: PC com PC, Switch com Switch).",
    explanation: "Para interligar dispositivos da mesma natureza (DTE-DTE ou DCE-DCE), cruza-se os pares de transmissão com os de recepção usando o cabo cross-over."
  },
  {
    question: "Sobre os cabos coaxiais, é correto afirmar:",
    options: [
      "Utilizam a luz como principal meio de propagação de dados em banda base.",
      "Requerem conectores RJ-45 transparentes para sua terminação adequada.",
      "Apresentam maior proteção contra radiação eletromagnética em relação ao UTP devido à sua malha cilíndrica blindada ao redor de um núcleo.",
      "A versão Thicknet (10BASE5) permite distâncias de até 5 km sem o uso de repetidores.",
      "A versão Thinnet (10BASE2) utiliza conectores AUI e multiplexadores grandes."
    ],
    answer: "Apresentam maior proteção contra radiação eletromagnética em relação ao UTP devido à sua malha cilíndrica blindada ao redor de um núcleo.",
    explanation: "O cilindro metálico forma um escudo que bloqueia radiação externa e evita que os sinais elétricos internos vazem."
  },
  {
    question: "A grande vantagem das transmissões por fibras ópticas sobre as transmissões em fios de cobre é:",
    options: [
      "Facilidade de instalação e emendas simples feitas com fitas isolantes comuns.",
      "Utilização obrigatória de três fios paralelos para formar o circuito de luz contínuo.",
      "Imunidade total à interferência elétrica e capacidade de atingir maiores distâncias sem degradação do sinal.",
      "Sua maleabilidade infinita sem quebras ao se dobrar o cabo em ângulos retos.",
      "A capacidade de distribuir energia elétrica simultaneamente para equipamentos remotos."
    ],
    answer: "Imunidade total à interferência elétrica e capacidade de atingir maiores distâncias sem degradação do sinal.",
    explanation: "Fibras ópticas não sofrem ruídos ou interferências eletromagnéticas e perdem muito pouca energia ao longo de quilômetros."
  },
  {
    question: "Na comunicação serial assíncrona (como o padrão RS-232), qual o papel do 'start bit'?",
    options: [
      "Sincronizar o relógio do emissor com o servidor de tempo atômico da rede local.",
      "Encerrar a transmissão de dados de forma segura, evitando que o cabo congele.",
      "Informar ao hardware receptor que a tensão estática foi rompida e que a transmissão de um novo caractere está começando.",
      "Aumentar a tensão do cabo para 5 volts continuamente para proteger a transmissão.",
      "Realizar a checagem de erros (CRC) do caractere antes dele ser definitivamente salvo."
    ],
    answer: "Informar ao hardware receptor que a tensão estática foi rompida e que a transmissão de um novo caractere está começando.",
    explanation: "Como a linha não fica em 0V quando inativa, o bit de início avisa que um dado está chegando e aciona o temporizador (timer) de recepção."
  },
  {
    question: "Qual a diferença conceitual fundamental entre 'baud rate' e 'bit rate' na transmissão de dados?",
    options: [
      "Baud rate mede a distância do sinal; bit rate mede o volume total do arquivo transferido.",
      "Bit rate mede a quantidade de ruídos colididos; baud rate mede os sinais analógicos atenuados.",
      "Bit rate mede a quantidade de bits transferidos por segundo; baud rate mede o número de mudanças de estado do sinal no canal por segundo.",
      "Bit rate é utilizado apenas em conexões de rede sem fio, enquanto baud rate é exclusivo para cabos LAN.",
      "Não há diferença nenhuma, ambos os termos significam estritamente a mesma grandeza física em qualquer modulação."
    ],
    answer: "Bit rate mede a quantidade de bits transferidos por segundo; baud rate mede o número de mudanças de estado do sinal no canal por segundo.",
    explanation: "Uma única mudança de estado (baud) pode transmitir mais de um bit se o sistema utilizar técnicas avançadas de modulação (como FSK avançado ou por fase)."
  },
  {
    question: "O que justifica a utilização de 'Jumbo Frames' (frames gigantes) em redes de alta velocidade (Gigabit)?",
    options: [
      "A interferência magnética causada por cabos UTP sendo passados próximos a motores.",
      "O elevado consumo e carga no processamento da máquina gerado pela verificação de CRC de milhares de frames pequenos repetidas vezes.",
      "A exigência de roteadores intercontinentais que não aceitam frames fragmentados na Internet.",
      "A mitigação drástica de colisões e ruídos que aconteciam repetidamente na topologia em anel FDDI.",
      "A ausência de bits de parada (stop bits) em modernas comunicações assíncronas via satélite."
    ],
    answer: "O elevado consumo e carga no processamento da máquina gerado pela verificação de CRC de milhares de frames pequenos repetidas vezes.",
    explanation: "Com a altíssima velocidade do meio, CPU da máquina sofre para verificar o overhead de cabeçalhos pequenos em altíssima quantidade. Frames maiores reduzem o overhead."
  },
  {
    question: "Na avaliação de confiabilidade da rede, qual a diferença entre 'erro de bit' e 'erro em rajada'?",
    options: [
      "O erro de bit ocorre apenas nas fibras ópticas, enquanto o erro de rajada se restringe aos cabos de cobre oxidados.",
      "Erro de bit afeta a camada de aplicação; erro de rajada afeta apenas os hubs locais.",
      "Erro de bit é quando apenas 1 bit isolado sofre alteração na mensagem; erro em rajada é quando 2 ou mais bits (não necessariamente sequenciais) são corrompidos.",
      "Erro em rajada acontece exclusivamente quando cabos são fisicamente partidos (link down).",
      "Não há distinção; ambos geram apenas colisões e descobrimento ativo pelo protocolo CSMA/CD."
    ],
    answer: "Erro de bit é quando apenas 1 bit isolado sofre alteração na mensagem; erro em rajada é quando 2 ou mais bits (não necessariamente sequenciais) são corrompidos.",
    explanation: "Erros de rajada envolvem múltiplos bits avariados dentro de uma mesma mensagem por eventos elétricos esporádicos."
  },
  {
    question: "O que o Teorema de Nyquist e a extensão de Claude Shannon demonstram sobre a transmissão de redes?",
    options: [
      "Calculam o tamanho mínimo exigido do cabo coaxial de banda larga e a força do transmissor laser.",
      "Provam a relação direta entre largura de banda e limite de bits por segundo, apontando que o ruído (termodinâmica) cria um limite teórico máximo instransponível.",
      "Explicam o número limite de computadores num anel lógico e os parâmetros de tolerância a falhas do hub passivo.",
      "Estipulam o tamanho exato dos Jumbo frames para evitar overhead no processamento do switch.",
      "Servem apenas para calcular as correntes de fuga nos conectores AUI da arquitetura Thicknet."
    ],
    answer: "Provam a relação direta entre largura de banda e limite de bits por segundo, apontando que o ruído (termodinâmica) cria um limite teórico máximo instransponível.",
    explanation: "Shannon estabeleceu um limite absoluto provando que as leis da física (ruído do meio) restringem a capacidade máxima de uma linha."
  },
  {
    question: "Nas topologias de LAN, o que caracteriza a topologia em ESTRELA?",
    options: [
      "Os computadores compartilham fisicamente um único fio central que atravessa todo o edifício.",
      "Os dados viajam num laço circular passando por todas as placas repetidoras.",
      "Utiliza cabos coaxiais rígidos com transceivers multiplexados em barramento.",
      "Requer conexão ponta-a-ponta entre todos os computadores para formar uma malha completa sem pontos centrais.",
      "Todos os computadores da rede são ligados individualmente a um dispositivo concentrador ou ponto central (Hub ou Switch)."
    ],
    answer: "Todos os computadores da rede são ligados individualmente a um dispositivo concentrador ou ponto central (Hub ou Switch).",
    explanation: "Na topologia estrela, a quebra de um cabo afeta apenas a máquina daquele braço da estrela, não interrompendo a rede toda."
  },
  {
    question: "O CSMA/CD atua no compartilhamento do meio Ethernet. Qual a finalidade do 'CS' (Carrier Sense - Sensoriamento da Portadora)?",
    options: [
      "Substituir os bits corrompidos lidos em um cabo de baixa qualidade no ato do recebimento.",
      "Forçar a máquina a encaminhar todos os pacotes IP num túnel em broadcast pela LAN.",
      "Ouvir o cabo da rede e verificar se há sinal de alguma portadora antes de iniciar uma nova transmissão, evitando colisões prévias.",
      "Interromper o switch ativamente até que todos os Jumbo frames tenham chegado na fila final.",
      "Estabelecer um handshake digital TCP antes que a primeira onda de rádio alcance as antenas RF."
    ],
    answer: "Ouvir o cabo da rede e verificar se há sinal de alguma portadora antes de iniciar uma nova transmissão, evitando colisões prévias.",
    explanation: "Cada placa 'escuta' o fio para checar se está silencioso. Se houver sinal elétrico de outra transmissão ativa, aguarda."
  },
  {
    question: "Se duas máquinas iniciarem transmissões simultâneas numa Ethernet gerando colisão, qual recurso o CSMA/CD usa para evitar um engarrafamento contínuo de novas colisões?",
    options: [
      "Envia um pacote mágico que reinicia todas as placas do segmento afetado por 1 minuto.",
      "Usa o recurso 'Binary Exponential Backoff', dobrando o limite do tempo de atraso aleatório a cada colisão subsequente.",
      "A rede desliga fisicamente o acesso do computador através da porta do Hub Passivo.",
      "Altera o tráfego da rede para fibra óptica via transponders satelitais.",
      "Comunica o administrador da rede emitindo um pacote Time Exceeded nativo pelo cabo AUI."
    ],
    answer: "Usa o recurso 'Binary Exponential Backoff', dobrando o limite do tempo de atraso aleatório a cada colisão subsequente.",
    explanation: "Ao dobrar a faixa do atraso de retransmissão a cada falha, diminui consideravelmente a chance de que as máquinas sorteiem o mesmo tempo novamente."
  },
  {
    question: "A rede FDDI utiliza topologia física com cabos de fibra óptica dispostos em um anel duplo com rotação contrária. Qual é o grande ganho prático disso?",
    options: [
      "Cortar os custos totais da rede ao meio, já que a luz opera por duas vias no mesmo silício.",
      "Prover o 'Self Healing' (cura automática), permitindo o retorno dos sinais pelo anel secundário caso um trecho sofra quebra acidental.",
      "Extinguir a necessidade da placa NIC ler endereços MAC globais nos cabeçalhos.",
      "Atuar como rádio RF imune à atenuação das nuvens.",
      "Elevar a tensão do anel primário, evitando a perda térmica (termodinâmica) em grandes extensões de campus universitários."
    ],
    answer: "Prover o 'Self Healing' (cura automática), permitindo o retorno dos sinais pelo anel secundário caso um trecho sofra quebra acidental.",
    explanation: "Os dados no anel secundário vão no sentido inverso. Em caso de rompimento as placas nas bordas do defeito efetuam a emenda lógica formando um anel longo (Loopback)."
  },
  {
    question: "Como o hardware (interface da placa) em uma rede local (LAN) age como filtro para não sobrecarregar a CPU principal da máquina?",
    options: [
      "Redireciona todo sinal eletromagnético diretamente para a porta serial (RS-232).",
      "Processa o Checksum em todos os HDs das redes conectadas.",
      "Examina o Endereço de hardware de Destino (Endereço MAC) de cada frame que flui pela rede, descartando e ignorando silenciosamente os frames cujo destinatário seja de outra estação.",
      "Criptografa o cabeçalho OSI usando algoritmos SPFs.",
      "Desliga fisicamente a porta RJ-45 da energia até o aplicativo remoto invocar o serviço."
    ],
    answer: "Examina o Endereço de hardware de Destino (Endereço MAC) de cada frame que flui pela rede, descartando e ignorando silenciosamente os frames cujo destinatário seja de outra estação.",
    explanation: "Se a placa não interceptar as mensagens destinadas a outros micros, a CPU gastará tempo valioso avaliando pacotes inúteis (lixo de tráfego alheio)."
  },
  {
    question: "O mecanismo da LAN que permite emitir um pacote de dados especial para alcançar TODOS os computadores da rede simultaneamente, porém com certa ineficiência (todos abrem a mensagem e interrompem suas CPUs), denomina-se:",
    options: [
      "Broadcasting",
      "Unicasting",
      "Multicasting",
      "Point-to-Point Forward",
      "Binary Spanning"
    ],
    answer: "Broadcasting",
    explanation: "O Broadcast (transmissão global) atinge e interrompe a CPU de toda máquina na LAN local."
  },
  {
    question: "A versão aprimorada da transmissão simultânea, onde apenas um pequeno e interessado grupo de computadores que assinaram um endereço aceita a mensagem no próprio hardware (poupando as demais CPUs da rede), é conhecida como:",
    options: [
      "Store and Forward Routing.",
      "Virtual LAN (VLAN).",
      "Broadcasting passivo.",
      "Multicasting.",
      "Unicasting Serial."
    ],
    answer: "Multicasting.",
    explanation: "Multicast permite que a placa seja ensinada a reconhecer apenas aquele grupo de áudio/vídeo, filtrando o frame no hardware e não aborrecendo computadores alheios."
  },
  {
    question: "No padrão original de cabeamento, o 10Base5 (também conhecido como Thicknet ou Thick Ethernet) possuía como característica arquitetônica:",
    options: [
      "Conectores RJ-45 que iam diretamente aos Hubs ou Switches.",
      "Cabos coaxiais superfinos conectados por conectores T e terminadores BNC diretamente na placa de rede.",
      "Um cabo coaxial amarelo espesso e longo no teto, onde acoplava-se um Transceiver que era ligado ao PC por um cabo AUI multipinos.",
      "Rádio Enlaces por microondas sem fios.",
      "Sistemas nativos de conexão para Jumbo frames a 1 Gigabits por segundo."
    ],
    answer: "Um cabo coaxial amarelo espesso e longo no teto, onde acoplava-se um Transceiver que era ligado ao PC por um cabo AUI multipinos.",
    explanation: "Thicknet operava perfurando o cabo grosso de barramento via derivadores transceivers."
  },
  {
    question: "Como o 10Base2 (Thinnet ou Thin Ethernet) diferia drasticamente do antigo Thick Ethernet?",
    options: [
      "Passou a usar par trançado e hubs interligando computadores passivamente.",
      "Excluiu os terminadores para operar com conectores de fibra SC.",
      "Embuteu a função do Transceiver dentro das próprias placas e as máquinas eram emendadas em série no cabo fino usando conectores em T (BNC).",
      "Operava essencialmente como redes sem fio via Access Points de barramento compartilhado.",
      "Não possuía nenhum isolamento de blindagem contra ruídos eletromagnéticos."
    ],
    answer: "Embuteu a função do Transceiver dentro das próprias placas e as máquinas eram emendadas em série no cabo fino usando conectores em T (BNC).",
    explanation: "O Thinnet facilitou e barateou a montagem eliminando as caras caixas de Transceivers."
  },
  {
    question: "O advento da topologia baseada em 'Par Trançado' (10Base-T) causou a maior revolução física das LANs, onde o barramento linear foi formalmente extinto em favor do uso de:",
    options: [
      "Concentradores eletrônicos centrais de interligação ponto a ponto denominados Hubs ou Switches.",
      "Uma rede sem fio com lasers roteando a sinalização luminosa a cada usuário.",
      "Conectores BNC-C cruzados no formato de laço Ring-Closed.",
      "Um cabo coaxial esticado pelos andares sem caixas divisoras conectadas.",
      "Roteadores passivos atuando unicamente pelo endereço IP nas portas com cabo Thicknet."
    ],
    answer: "Concentradores eletrônicos centrais de interligação ponto a ponto denominados Hubs ou Switches.",
    explanation: "Em vez de um longo fio varando todas as salas (topologia bus real), a ligação passou a ser do PC para a caixa Hub (Estrela)."
  },
  {
    question: "Qual o limite funcional e problema central ocasionado pelo uso de Repetidores (Repeaters) comuns em cascata ao alongar o cabeamento das redes LAN?",
    options: [
      "Não aceitam sinais digitais em hipótese alguma.",
      "Fazem o processamento do protocolo IP gastando demasiada memória e CPU.",
      "Os repetidores copiam de forma indiscriminada, ou seja, além de repetir frames perfeitos, amplificam e propagam colisões e ruídos destrutivos originados em outro cabo.",
      "Mudam as cores dos conectores para evitar falsos terra.",
      "Exigem autenticação LDAP de todo pacote repetido pela central."
    ],
    answer: "Os repetidores copiam de forma indiscriminada, ou seja, além de repetir frames perfeitos, amplificam e propagam colisões e ruídos destrutivos originados em outro cabo.",
    explanation: "Por serem equipamentos base de Camada Física (1), eles apenas copiam ondas elétricas sem verificar a consistência (MAC/Filtros)."
  },
  {
    question: "Bridges (Pontes) foram a evolução dos repetidores que inteligentemente separaram os ambientes de colisão de uma rede. Como uma Bridge decide barrar um pacote num trecho para não infestar os outros?",
    options: [
      "Lendo o campo de tipo de IP de dados HTTP (porta 80).",
      "Descartando apenas frames provenientes do cabo coaxial Thinnet.",
      "Examinando os frames completos e utilizando o endereço físico MAC de destino para não enviar uma cópia ao outro segmento se o destinatário da conversa já está do lado que emitiu o frame.",
      "Injetando comandos de ping (ICMP Echo) antes de transitar os pacotes.",
      "Calculando o SPF do algoritmo Link-State antes de transferir fisicamente."
    ],
    answer: "Examinando os frames completos e utilizando o endereço físico MAC de destino para não enviar uma cópia ao outro segmento se o destinatário da conversa já está do lado que emitiu o frame.",
    explanation: "Ao ler os MACs das máquinas nos frames, a Bridge sabe quem está ligado a qual lado. Com isso não afeta os outros trechos transmitindo tráfego inútil."
  },
  {
    question: "Bridges transparentes adquirem eficiência com o tempo em dois estados. O que é o comportamento de 'Startup' (Aprendizado) de uma Bridge?",
    options: [
      "O desligamento forçado das interfaces que colidem o buffer.",
      "O boot do sistema Windows na máquina do usuário local.",
      "O período nos primeiros envios onde a bridge, ignorando onde estão as máquinas, inunda a rede (forward para todas as portas) mas mapeia a localização de quem está falando nos endereços MAC de origem.",
      "A alocação de endereços de rede classe A dinamicamente para todos DHCPs.",
      "O envio simultâneo de sinais RF pela antena parabólica secundária."
    ],
    answer: "O período nos primeiros envios onde a bridge, ignorando onde estão as máquinas, inunda a rede (forward para todas as portas) mas mapeia a localização de quem está falando nos endereços MAC de origem.",
    explanation: "Ela nasce vazia e vai associando o MAC remetente à porta onde recebeu o sinal."
  },
  {
    question: "Qual aspecto é o principal diferencial técnico de um Switch em detrimento aos antigos Hubs Ethernet?",
    options: [
      "O Switch emula um barramento Thicknet apenas com conectores T blindados e transceivers coaxiais rígidos.",
      "O Switch simula uma rede interna contendo múltiplas Bridges lógicas, separando zonas de colisão e suportando tráfego simultâneo (paralelismo) com altíssima eficiência.",
      "O Switch não consegue conectar micros de categorias distintas (DCE/DTE) sem exigir conectores AUI universais.",
      "Um Hub exige roteamento complexo Camada 3 (IP) e o Switch apenas propaga sinais cegamente.",
      "O Hub faz caching de todas as consultas DNS num arquivo local."
    ],
    answer: "O Switch simula uma rede interna contendo múltiplas Bridges lógicas, separando zonas de colisão e suportando tráfego simultâneo (paralelismo) com altíssima eficiência.",
    explanation: "Com as portas comutadas (como mini bridges) vários pacotes podem transitar entre diferentes duplas de portas na mesma fração de segundo."
  },
  {
    question: "Redes WAN diferenciam-se da escala das redes LAN ou MAN por serem designadas para:",
    options: [
      "Operarem a uma distância restrita ao edifício sede da empresa conectando servidores de departamento (até 500m).",
      "Serem montadas apenas por conectores passivos de fibra tipo UTP sem energia.",
      "Suportar conexões e roteadores por áreas muito extensas que podem englobar cidades completas, países e conectar as comunicações entre oceanos.",
      "Utilizarem estritamente cabos pino-a-pino da topologia barramento em anel (Token Ring) ao redor do Campus.",
      "Apenas interligar terminais remotos do sistema telefônico aos microcontroladores PIC do ambiente industrial."
    ],
    answer: "Suportar conexões e roteadores por áreas muito extensas que podem englobar cidades completas, países e conectar as comunicações entre oceanos.",
    explanation: "WANs (Wide Area Networks) conectam grandes áreas geográficas interconectando switches globais e usando provedores."
  },
  {
    question: "Os Packet Switches das grandes redes WAN usam um mecanismo básico vital chamado de 'Store and Forward'. O que é esse conceito?",
    options: [
      "Significa processar os bits sem reter e emitir ruídos sem validação analógica.",
      "Apenas armazenar temporariamente no disco para logs os acessos dos administradores globais.",
      "O switch primeiro absorve todo o pacote que entra guardando em sua memória em buffer, depois analisa o seu destino e aguarda sua interface e fila ficarem disponíveis para encaminhá-lo e limpá-lo da memória.",
      "Criptografar as tabelas dinâmicas armazenando-as numa VPN restrita da internet.",
      "A fragmentação massiva e armazenamento na rede do cliente que tem roteador lento."
    ],
    answer: "O switch primeiro absorve todo o pacote que entra guardando em sua memória em buffer, depois analisa o seu destino e aguarda sua interface e fila ficarem disponíveis para encaminhá-lo e limpá-lo da memória.",
    explanation: "Este comportamento de armazenar, checar e repassar (com filas nas saídas) é vital."
  },
  {
    question: "Roteamento em grandes redes utiliza Tabelas de Roteamento em algoritmos avançados. O Algoritmo Baseado em Distância Vetorial difere das métricas de Shortest Path First (Link-State) porque:",
    options: [
      "Cria e calcula a menor rota baseado meramente num registro incremental e somatório de 'pesos' da distância passada aos roteadores vizinhos passivamente.",
      "Utiliza pontes de rádio fixas com topologias FDDI complexas nos backbone globais.",
      "Roteia utilizando Jumbo frames baseados no MAC Address de cada Hub repetidor.",
      "É um algoritmo onde um supercomputador envia ordens forçadas aos modems dial-up locais.",
      "É aplicado apenas em Redes Locais da Camada 2."
    ],
    answer: "Cria e calcula a menor rota baseado meramente num registro incremental e somatório de 'pesos' da distância passada aos roteadores vizinhos passivamente.",
    explanation: "Distance Vector toma a rota somando métricas fornecidas pelos vizinhos (hop counts/pesos)."
  },
  {
    question: "Uma VPN (Virtual Private Network) busca prover comunicação corporativa privada de baixo custo da seguinte maneira:",
    options: [
      "Implantando dutos subterrâneos privados e independentes da malha de cobre das teles estatais do país sede.",
      "Inabilitando o protocolo TCP e enviando sinal elétrico cru sem repetição na placa de rede.",
      "Conectando roteadores da empresa através de infraestrutura pública e barata da Internet, mas encriptando ativamente e ocultando a comunicação via túnel para garantir a confidencialidade do trânsito entre filiais.",
      "Tornando toda a rede pública em acesso livre pelo MAC Address universal.",
      "Compartilhando chaves com agências do governo e substituindo Roteadores IP por Bridges Thinnet de acesso restrito."
    ],
    answer: "Conectando roteadores da empresa através de infraestrutura pública e barata da Internet, mas encriptando ativamente e ocultando a comunicação via túnel para garantir a confidencialidade do trânsito entre filiais.",
    explanation: "A VPN simula a extensão isolada através do link aberto com recursos criptográficos em ambas as pontas."
  },
  {
    question: "Ao estudar o desempenho e latências de uma rede complexa, três tipos clássicos de Delay afetam a transmissão de um dado. O atraso originado pela espera em buffers (como do esquema Store and Forward) até que o pacote inicie a jornada pela interface é o:",
    options: [
      "Delay de Propagação Elétrica / Física.",
      "Delay de Modulação / Codificação Numérica.",
      "Delay de CSMA Randomizado Estático.",
      "Delay de Ritmo e Latência do Transceiver UTP.",
      "Delay de Enfileiramento (Queuing Delay)."
    ],
    answer: "Delay de Enfileiramento (Queuing Delay).",
    explanation: "O tempo perdido preso numa fila aguardando para utilizar o gargalo do cabo ou CPU de um link restrito."
  },
  {
    question: "No contexto dos protocolos para Internet (TCP/IP e Modelo OSI), o uso da abstração de 'Camadas' (Layering Model) busca atender à necessidade de:",
    options: [
      "Eliminar softwares que façam verificação de tráfego, barateando as NICs.",
      "Agrupar funções complexas de protocolos resolvendo as responsabilidades da comunicação em blocos independentes (como endereçamento IP e verificação MAC). Uma camada interage apenas com a vizinha, não interferindo no desenho lógico completo.",
      "Codificar dados usando criptografia analógica com a linguagem de máquina Assembly exclusivista.",
      "Evitar que o roteador utilize Jumbo frames ao lidar com transmissões RF.",
      "Concentrar todo processo num único arquivo gigante na Camada 7 sem separação de componentes elétricos e lógicos."
    ],
    answer: "Agrupar funções complexas de protocolos resolvendo as responsabilidades da comunicação em blocos independentes (como endereçamento IP e verificação MAC). Uma camada interage apenas com a vizinha, não interferindo no desenho lógico completo.",
    explanation: "Isola as dores do endereçamento da checagem elétrica e do aplicativo, construindo empilhamento simplificado."
  },
  {
    question: "O conceito visual conhecido como 'Cabeçalhos Abrigados' ou Encapsulamento de Protocolos Múltiplos decorre do fato de que:",
    options: [
      "Os computadores não podem passar dados uns aos outros sem estarem criptografados num sistema físico especial de anéis virtuais.",
      "Ao cruzar a rede física, o roteador funde as mensagens de controle numa camada isolada usando o SPF da Camada Física.",
      "À medida que um dado desce pela pilha no emissor e ganha funções de comunicação, cada camada do modelo adiciona os seus parâmetros de controle no início da mensagem original, construindo camadas progressivas lidas inversamente pelo receptor.",
      "Todas as pilhas e protocolos utilizam o mesmo header global estrito, eliminando as camadas independentemente da arquitetura da WAN ou LAN.",
      "O TCP divide a placa de vídeo e repassa bits usando cabos grossos."
    ],
    answer: "À medida que um dado desce pela pilha no emissor e ganha funções de comunicação, cada camada do modelo adiciona os seus parâmetros de controle no início da mensagem original, construindo camadas progressivas lidas inversamente pelo receptor.",
    explanation: "A camada 4 anexa seu TCP, repassa para a 3 que anexa IP, e anexa à 2 que coloca frame Ethernet (o MAC), envelopando as necessidades."
  }
];
