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
  },
  {
    question: "Qual é a principal função de um roteador em uma rede?",
    options: [
      "Conectar dispositivos na mesma LAN.",
      "Interligar redes diferentes e encaminhar pacotes entre elas.",
      "Fornecer energia elétrica para dispositivos PoE.",
      "Converter sinais digitais em analógicos.",
      "Armazenar em cache o conteúdo de sites acessados com frequência."
    ],
    answer: "Interligar redes diferentes e encaminhar pacotes entre elas.",
    explanation: "Roteadores operam na camada 3 (Rede) do modelo OSI, decidindo as rotas e encaminhando dados entre redes distintas (ex: LAN para WAN)."
  },
  {
    question: "Qual protocolo é o responsável por traduzir nomes de domínio (como www.site.com) em endereços IP numéricos?",
    options: [
      "DHCP",
      "FTP",
      "DNS",
      "HTTP",
      "SMTP"
    ],
    answer: "DNS",
    explanation: "O DNS (Domain Name System) atua como um diretório, resolvendo nomes legíveis por humanos para os endereços IP necessários para o roteamento."
  },
  {
    question: "O que é um endereço IP e qual a sua finalidade principal?",
    options: [
      "Um endereço físico inalterável gravado na placa de rede do hardware.",
      "Um identificador lógico numérico atribuído a um dispositivo para permitir seu endereçamento e roteamento na rede.",
      "Uma chave de segurança usada para criptografar a rede sem fio.",
      "Um protocolo que define a velocidade máxima da conexão de internet.",
      "Um sistema que bloqueia acessos não autorizados à rede local."
    ],
    answer: "Um identificador lógico numérico atribuído a um dispositivo para permitir seu endereçamento e roteamento na rede.",
    explanation: "O endereço IP identifica univocamente um dispositivo em uma rede lógica, sendo essencial para que os dados saibam para onde devem ir e de onde vieram."
  },
  {
    question: "Que protocolo e serviço distribui e atribui automaticamente endereços IP para as máquinas clientes em uma rede?",
    options: [
      "DNS",
      "NAT",
      "DHCP",
      "ARP",
      "ICMP"
    ],
    answer: "DHCP",
    explanation: "O DHCP (Dynamic Host Configuration Protocol) automatiza a entrega de IPs, máscaras, gateways e DNS para os clientes, evitando configuração manual."
  },
  {
    question: "Qual é o propósito do protocolo ARP (Address Resolution Protocol) numa rede local?",
    options: [
      "Resolver nomes de domínio em endereços IP públicos.",
      "Descobrir e mapear o endereço físico (MAC) que corresponde a um determinado endereço lógico (IP) conhecido.",
      "Garantir a entrega confiável e ordenada de pacotes via handshake.",
      "Mapear múltiplos IPs privados para um único IP público na saída para a internet.",
      "Verificar a latência e se um host destino está ativo (ping)."
    ],
    answer: "Descobrir e mapear o endereço físico (MAC) que corresponde a um determinado endereço lógico (IP) conhecido.",
    explanation: "Para enviar um frame na rede local ethernet, o emissor precisa do MAC de destino. O ARP descobre qual MAC pertence ao IP alvo na LAN."
  },
  {
    question: "Qual é a diferença fundamental entre as arquiteturas Cliente-Servidor e P2P (Peer-to-Peer)?",
    options: [
      "Cliente-Servidor usa apenas cabos coaxiais, enquanto P2P usa Wi-Fi.",
      "Em Cliente-Servidor há servidores dedicados e clientes, enquanto em P2P todos os nós podem atuar simultaneamente como clientes e servidores.",
      "Cliente-Servidor é usado apenas para WAN, enquanto P2P é para LAN.",
      "P2P exige um servidor central potente para coordenar todas as transferências.",
      "Cliente-Servidor não utiliza endereços IP, apenas endereços MAC."
    ],
    answer: "Em Cliente-Servidor há servidores dedicados e clientes, enquanto em P2P todos os nós podem atuar simultaneamente como clientes e servidores.",
    explanation: "Na arquitetura P2P, a carga é distribuída entre os participantes (pares), diferente do modelo cliente-servidor, que centraliza os recursos e serviços em servidores dedicados."
  },
  {
    question: "Na transmissão de dados, o que caracteriza a 'Comutação de Pacotes' em comparação com a 'Comutação de Circuitos' (usada na telefonia tradicional)?",
    options: [
      "A comutação de pacotes reserva uma banda fixa e dedicada de ponta a ponta durante toda a conexão.",
      "A comutação de pacotes envia dados de forma analógica, sem fragmentação.",
      "A comutação de pacotes divide a mensagem em pequenos blocos que compartilham os recursos da rede dinamicamente, sem reservar um caminho fixo.",
      "A comutação de circuitos é mais rápida para o tráfego intermitente da Internet.",
      "Ambas operam exatamente da mesma forma física."
    ],
    answer: "A comutação de pacotes divide a mensagem em pequenos blocos que compartilham os recursos da rede dinamicamente, sem reservar um caminho fixo.",
    explanation: "A Internet usa comutação de pacotes, permitindo maior eficiência no compartilhamento de links, pois pacotes de diferentes usuários se intercalam, diferente da reserva fixa de recursos da comutação de circuitos."
  },
  {
    question: "No estudo de atrasos de rede, qual a diferença entre Atraso de Transmissão e Atraso de Propagação?",
    options: [
      "Não há diferença, ambos medem o tempo que a CPU gasta para processar os pacotes.",
      "Atraso de transmissão é o tempo para processar o protocolo na CPU; propagação é o tempo na fila do roteador.",
      "Atraso de transmissão é o tempo necessário para empurrar todos os bits do pacote no link; propagação é o tempo que o sinal físico leva para viajar de uma ponta à outra do meio.",
      "Transmissão ocorre apenas em redes Wi-Fi, propagação apenas em cabos de fibra.",
      "Propagação depende do tamanho do arquivo, transmissão depende da distância do cabo."
    ],
    answer: "Atraso de transmissão é o tempo necessário para empurrar todos os bits do pacote no link; propagação é o tempo que o sinal físico leva para viajar de uma ponta à outra do meio.",
    explanation: "O atraso de transmissão depende da largura de banda (vazão) e do tamanho do pacote. A propagação depende exclusivamente da distância física e da velocidade da luz no meio de transmissão."
  },
  {
    question: "Qual é a principal diferença entre os protocolos TCP e UDP na camada de transporte?",
    options: [
      "O UDP é mais seguro e garante a entrega, enquanto o TCP é rápido mas perde pacotes.",
      "O TCP é um protocolo orientado à conexão que garante a entrega ordenada e confiável dos dados, enquanto o UDP não fornece essas garantias (best-effort).",
      "O TCP é usado apenas para streaming de vídeo ao vivo, e o UDP para envio de emails.",
      "Ambos funcionam apenas na camada de rede (Camada 3).",
      "O UDP exige um processo de handshake de 3 vias (three-way handshake) antes de transmitir."
    ],
    answer: "O TCP é um protocolo orientado à conexão que garante a entrega ordenada e confiável dos dados, enquanto o UDP não fornece essas garantias (best-effort).",
    explanation: "O TCP verifica erros, retransmite perdas e ordena os pacotes. O UDP é focado em rapidez e menor sobrecarga, não garantindo a entrega, sendo ideal para aplicações como VoIP e jogos online."
  },
  {
    question: "Para que servem os números de Porta (Port Numbers) no modelo TCP/IP?",
    options: [
      "Identificar fisicamente o conector RJ-45 atrás do computador.",
      "Permitir que diferentes aplicações ou serviços no mesmo dispositivo sejam endereçados e distinguidos pela camada de transporte.",
      "Definir a voltagem que será enviada pelo cabo UTP.",
      "Realizar o roteamento físico de pacotes entre diferentes redes mundiais.",
      "Substituir o uso de endereços IP em redes locais fechadas."
    ],
    answer: "Permitir que diferentes aplicações ou serviços no mesmo dispositivo sejam endereçados e distinguidos pela camada de transporte.",
    explanation: "Enquanto o endereço IP localiza a máquina correta na rede, a porta (ex: 80 para HTTP, 443 para HTTPS) direciona os dados para o aplicativo ou serviço correto dentro daquela máquina."
  },
  {
    question: "O que é a 'Vazão' (Throughput) em redes de computadores?",
    options: [
      "É a velocidade teórica máxima anunciada no cabo de rede (ex: 100 Mbps).",
      "É a taxa efetiva real em que os dados estão sendo transferidos entre emissor e receptor em um dado momento.",
      "É a quantidade total de colisões que ocorrem em um segmento Ethernet.",
      "É o tempo exato de latência de resposta a um comando ping (ICMP).",
      "É o número de roteadores que um pacote atravessa até seu destino (Hop count)."
    ],
    answer: "É a taxa efetiva real em que os dados estão sendo transferidos entre emissor e receptor em um dado momento.",
    explanation: "O throughput (vazão) mede a transferência real, sendo frequentemente limitado pelo link de menor capacidade na rota (gargalo/bottleneck) e pelas condições momentâneas de tráfego."
  },
  {
    question: "Quantas camadas possuem, respectivamente, o modelo de referência OSI e a arquitetura TCP/IP na sua forma prática?",
    options: [
      "OSI: 4 camadas; TCP/IP: 7 camadas.",
      "Ambos possuem exatamente 5 camadas, sendo idênticos estruturalmente.",
      "OSI: 7 camadas; TCP/IP: 4 (ou 5 dependendo da literatura) camadas.",
      "OSI: 3 camadas; TCP/IP: 6 camadas.",
      "OSI: 2 camadas; TCP/IP: 3 camadas."
    ],
    answer: "OSI: 7 camadas; TCP/IP: 4 (ou 5 dependendo da literatura) camadas.",
    explanation: "O modelo OSI é um referencial teórico de 7 camadas (Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace, Física). O TCP/IP agrupa essas funções em menos camadas, tipicamente 4: Aplicação, Transporte, Internet e Acesso à Rede."
  },
  {
    question: "Sobre o endereço MAC (Media Access Control), é correto afirmar que:",
    options: [
      "É atribuído dinamicamente pelo servidor DHCP cada vez que o computador se conecta à rede.",
      "É um endereço físico de 48 bits, gravado na placa de rede (NIC) pelo fabricante, servindo para comunicação na camada de enlace.",
      "É o identificador responsável pelo roteamento global de pacotes através da Internet.",
      "Representa as portas lógicas para uso direto dos protocolos TCP e UDP.",
      "É composto por 32 bits, dividido em quatro octetos decimais (ex: 192.168.0.1)."
    ],
    answer: "É um endereço físico de 48 bits, gravado na placa de rede (NIC) pelo fabricante, servindo para comunicação na camada de enlace.",
    explanation: "O MAC opera na Camada 2 (Enlace) e identifica univocamente o hardware em uma rede local. Geralmente não muda, diferente do IP que é lógico e pode variar."
  },
  {
    question: "Qual é a função da 'Máscara de Sub-rede' associada a um endereço IP?",
    options: [
      "Criptografar o IP para evitar ataques e varreduras de portas na internet.",
      "Ocultar o IP verdadeiro do computador em relação ao provedor de acesso.",
      "Determinar qual porção do endereço IP identifica a Rede e qual porção identifica o Host (dispositivo) dentro dessa rede.",
      "Aumentar a velocidade de transmissão (vazão) da placa de rede local.",
      "Substituir o uso do servidor DNS em intranets corporativas restritas."
    ],
    answer: "Determinar qual porção do endereço IP identifica a Rede e qual porção identifica o Host (dispositivo) dentro dessa rede.",
    explanation: "A máscara de sub-rede permite aos dispositivos (e roteadores) saberem se um endereço de destino está na mesma rede local ou se o tráfego precisa ser enviado para o roteador (Gateway)."
  },
  {
    question: "No contexto do envio de dados e roteamento, o que é o 'Gateway Padrão' (Default Gateway)?",
    options: [
      "É o sistema de antivírus da máquina que atua filtrando pacotes maliciosos.",
      "É o cabo de rede principal (backbone) que conecta o servidor aos computadores locais.",
      "É o endereço IP do roteador da rede local responsável por encaminhar os pacotes cujo destino final está fora daquela LAN.",
      "É o serviço em nuvem que converte endereços MAC em endereços IP roteáveis.",
      "É a placa-mãe de hardware do servidor principal de arquivos da corporação."
    ],
    answer: "É o endereço IP do roteador da rede local responsável por encaminhar os pacotes cujo destino final está fora daquela LAN.",
    explanation: "Quando um dispositivo precisa enviar dados para uma máquina fora da sua própria sub-rede (como para a Internet), ele envia esses dados para o Gateway Padrão, que é a sua 'porta de saída'."
  },
  {
    question: "O que define, formalmente, um 'Protocolo' no contexto de redes de computadores?",
    options: [
      "É um software antivírus instalado no roteador da rede.",
      "É um conjunto de regras e formatos que governa o formato e a ordem das mensagens trocadas, bem como as ações tomadas na transmissão e recepção de mensagens.",
      "É o tipo de cabo utilizado na conexão física entre computadores e switches.",
      "É o nome do servidor principal que gerencia o tráfego da rede corporativa.",
      "É a velocidade de transmissão medida em Megabits por segundo."
    ],
    answer: "É um conjunto de regras e formatos que governa o formato e a ordem das mensagens trocadas, bem como as ações tomadas na transmissão e recepção de mensagens.",
    explanation: "Um protocolo define as regras do jogo. Sem ele, os dispositivos enviam sinais elétricos que o outro lado não conseguiria interpretar de forma lógica."
  },
  {
    question: "Qual é a função principal de um Provedor de Serviços de Internet (ISP)?",
    options: [
      "Traduzir endereços MAC em endereços de hardware físico localmente.",
      "Fornecer acesso, roteamento e conectividade dos computadores e redes locais dos clientes à infraestrutura global da Internet.",
      "Aumentar o clock do processador dos computadores dos usuários finais.",
      "Substituir a necessidade de roteadores físicos nas empresas.",
      "Criar e hospedar todas as páginas da World Wide Web."
    ],
    answer: "Fornecer acesso, roteamento e conectividade dos computadores e redes locais dos clientes à infraestrutura global da Internet.",
    explanation: "ISPs (como operadoras de telecomunicações e provedores regionais) formam a rede que conecta as bordas (usuários) ao núcleo da Internet."
  },
  {
    question: "Na distinção de meios de transmissão, o que difere os 'Meios Guiados' dos 'Meios Não Guiados'?",
    options: [
      "Meios guiados utilizam cabos (cobre, fibra ótica) onde o sinal segue um caminho físico contido; meios não guiados propagam sinais livremente pelo espaço (ondas de rádio, Wi-Fi).",
      "Meios guiados não sofrem nenhuma atenuação, ao passo que os não guiados não sofrem de interferência externa.",
      "Meios guiados transmitem dados digitalmente e meios não guiados enviam energia analógica.",
      "Meios guiados requerem roteadores caros, enquanto meios não guiados usam apenas hubs passivos.",
      "Meios não guiados utilizam fios de ouro, enquanto meios guiados utilizam silício ou plástico."
    ],
    answer: "Meios guiados utilizam cabos (cobre, fibra ótica) onde o sinal segue um caminho físico contido; meios não guiados propagam sinais livremente pelo espaço (ondas de rádio, Wi-Fi).",
    explanation: "Cabos físicos guiam o sinal de ponta a ponta. Redes sem fio, por outro lado, utilizam propagação pelo ar, caracterizando um meio não guiado (irradiação)."
  },
  {
    question: "O protocolo HTTP (HyperText Transfer Protocol) opera sobre qual protocolo da camada de transporte e qual a sua função primária?",
    options: [
      "UDP; é focado apenas em transmitir e-mails de texto puro.",
      "TCP; é responsável por solicitar e transferir documentos web (páginas HTML, imagens) entre cliente e servidor web.",
      "ICMP; é usado unicamente para testar se um servidor de páginas está online.",
      "TCP; atua convertendo o nome de domínio para endereço de IP antes do acesso.",
      "ARP; descobre o MAC Address do servidor web localizado na Internet."
    ],
    answer: "TCP; é responsável por solicitar e transferir documentos web (páginas HTML, imagens) entre cliente e servidor web.",
    explanation: "O HTTP usa a confiabilidade do TCP (geralmente na porta 80 ou 443 para HTTPS) para garantir que as páginas e recursos carreguem perfeitamente e sem corrompimentos."
  },
  {
    question: "No contexto do envio e recebimento de e-mails, quais são os papéis respectivos do SMTP e de protocolos como POP3 ou IMAP?",
    options: [
      "SMTP cifra a mensagem; POP3 traduz o endereço para IP e IMAP compacta os anexos.",
      "SMTP recebe os emails dos servidores no cliente; POP3 envia as respostas de volta ao servidor original.",
      "SMTP é usado para enviar as mensagens (push) do cliente para o servidor e entre servidores; POP3 ou IMAP são usados para o cliente puxar (pull) e ler os emails armazenados em seu servidor.",
      "SMTP opera na camada física; POP3 e IMAP operam na camada de enlace de dados.",
      "Não há diferença prática; todos os três realizam exatamente a mesma transferência em todas as direções de forma concorrente."
    ],
    answer: "SMTP é usado para enviar as mensagens (push) do cliente para o servidor e entre servidores; POP3 ou IMAP são usados para o cliente puxar (pull) e ler os emails armazenados em seu servidor.",
    explanation: "O SMTP (Simple Mail Transfer Protocol) 'empurra' a mensagem até o servidor de destino. Para ler a caixa de entrada no seu computador, o seu aplicativo 'puxa' os dados usando IMAP ou POP3."
  },
  {
    question: "Qual das seguintes afirmações melhor descreve uma rede PAN (Personal Area Network)?",
    options: [
      "É uma rede mundial interligada por satélites e cabos submarinos.",
      "É uma rede metropolitana focada em cobrir o sinal de TV de um município.",
      "É uma pequena rede focada em interligar dispositivos pessoais no alcance de alguns metros, tipicamente usando Bluetooth ou USB.",
      "É a infraestrutura de fibra ótica de alta velocidade exclusiva para datacenters de grandes corporações.",
      "É uma rede configurada pelo governo para gerenciar comunicações criptografadas corporativas restritas (VPN)."
    ],
    answer: "É uma pequena rede focada em interligar dispositivos pessoais no alcance de alguns metros, tipicamente usando Bluetooth ou USB.",
    explanation: "PAN (Personal Area Network) refere-se a um ambiente pessoal minúsculo, como a conexão do smartphone com fones de ouvido sem fio ou um smartwatch."
  },
  {
    question: "O que é um 'Socket' no desenvolvimento de aplicações de rede?",
    options: [
      "É a tomada física de três pinos que garante o aterramento de um switch no rack.",
      "É uma interface de software (API) criada pelo sistema operacional, funcionando como uma 'porta' lógica por onde as aplicações emitem ou recebem mensagens da rede.",
      "É um chip específico na placa de rede encarregado de calcular o Checksum dos pacotes IP.",
      "É o pino de trava de plástico de um conector RJ-45, essencial para fixação no hardware.",
      "É o registro principal (A Record) dentro do servidor DNS que contém o IP raiz da máquina."
    ],
    answer: "É uma interface de software (API) criada pelo sistema operacional, funcionando como uma 'porta' lógica por onde as aplicações emitem ou recebem mensagens da rede.",
    explanation: "O socket atua como a porta de comunicação lógica entre a Camada de Aplicação e a Camada de Transporte. A aplicação escreve/lê no socket e o SO gerencia o tráfego via TCP ou UDP."
  },
  {
    question: "Na arquitetura DNS (Domain Name System), o que caracteriza uma consulta 'Iterativa' em oposição à 'Recursiva'?",
    options: [
      "Na iterativa, o servidor DNS resolve tudo por conta própria e devolve a resposta final completada.",
      "Na iterativa, se o servidor consultado não sabe a resposta, ele apenas informa ao cliente qual é o próximo servidor DNS que deve ser contatado, transferindo o trabalho de continuar a busca de volta para o cliente.",
      "Consultas iterativas usam exclusivamente UDP estrito, enquanto recursivas usam cabos cruzados físicos.",
      "Consultas iterativas são proibidas na internet atual por gerarem tráfego excessivo que causa lentidão.",
      "Na recursiva, ocorre primeiramente a tradução de endereços MAC locais antes de subir para a internet mundial."
    ],
    answer: "Na iterativa, se o servidor consultado não sabe a resposta, ele apenas informa ao cliente qual é o próximo servidor DNS que deve ser contatado, transferindo o trabalho de continuar a busca de volta para o cliente.",
    explanation: "Na consulta recursiva, o servidor assume a responsabilidade de ir até o fim e retornar a resposta. Na iterativa, ele retorna a 'melhor pista' (endereço do próximo servidor) para o solicitante prosseguir."
  },
  {
    question: "A arquitetura da Internet separa conceitualmente a rede em duas categorias principais: a Borda (Edge) e o Núcleo (Core). O que compõe a 'Borda da Rede'?",
    options: [
      "Apenas os enormes cabos transoceânicos submarinos de comunicação global.",
      "Exclusivamente os datacenters de provedores Tier-1 nos continentes.",
      "O conjunto central de todos os roteadores OSPF no backbone de um país.",
      "Os sistemas finais ou hosts, como computadores de usuários residenciais, smartphones, servidores web e dispositivos IoT.",
      "As antigas centrais telefônicas que conectam circuitos estáticos regionais (PBX)."
    ],
    answer: "Os sistemas finais ou hosts, como computadores de usuários residenciais, smartphones, servidores web e dispositivos IoT.",
    explanation: "A borda da rede é onde as aplicações e os usuários residem. O núcleo (core) é a intrincada teia de roteadores e links físicos que apenas repassam os pacotes entre as redes de borda."
  },
  {
    question: "No modelo de comunicação do protocolo HTTP, qual é a vantagem fundamental das conexões 'Persistentes' frente às conexões 'Não Persistentes'?",
    options: [
      "A conexão persistente exige que os cookies sejam desativados, protegendo o usuário.",
      "A conexão persistente mantém a mesma conexão TCP aberta após enviar uma resposta, permitindo que vários objetos web sejam baixados sem a sobrecarga de abrir um novo canal TCP a cada arquivo; a não persistente fecha o TCP logo após transferir apenas um arquivo.",
      "A conexão não persistente é a única homologada capaz de realizar downloads de streaming de vídeo contínuo em tempo real.",
      "Conexões persistentes funcionam exclusivamente na porta 443, garantindo segurança extrema, e as não persistentes atuam na 80.",
      "Nenhuma distinção prática, pois as duas tratam exclusivamente dos métodos de criptografia ponta a ponta."
    ],
    answer: "A conexão persistente mantém a mesma conexão TCP aberta após enviar uma resposta, permitindo que vários objetos web sejam baixados sem a sobrecarga de abrir um novo canal TCP a cada arquivo; a não persistente fecha o TCP logo após transferir apenas um arquivo.",
    explanation: "Conexões persistentes (HTTP/1.1 em diante) economizam enorme tempo ao evitar o processo de abertura (Three-way handshake) do TCP múltiplas vezes para baixar dezenas de pequenas imagens de uma mesma página web."
  },
  {
    question: "O que causa primariamente a 'Perda de Pacotes' (Packet Loss) em roteadores no núcleo da Internet?",
    options: [
      "A interferência magnética que destrói pacotes de fibra ótica.",
      "O excesso de pacotes chegando ao roteador, o que faz com que a sua memória de buffer (fila) fique cheia, forçando-o a descartar pacotes subsequentes.",
      "Um recurso de segurança do roteador para evitar acesso de usuários não cadastrados.",
      "O erro de verificação de CRC exclusivamente na camada física de antenas RF.",
      "A conversão incompatível de endereços IP de IPv4 para IPv6 nos datacenters."
    ],
    answer: "O excesso de pacotes chegando ao roteador, o que faz com que a sua memória de buffer (fila) fique cheia, forçando-o a descartar pacotes subsequentes.",
    explanation: "Como os roteadores possuem espaço de armazenamento finito para enfileiramento (queuing), se os pacotes chegam mais rápido do que o link de saída pode repassá-los, a fila enche e os pacotes novos são descartados (drop)."
  },
  {
    question: "Na Comutação de Circuitos, quais são as duas principais técnicas utilizadas para multiplexar e compartilhar a capacidade do link entre múltiplas conexões contínuas?",
    options: [
      "TCP (Transmission Control) e UDP (User Datagram).",
      "FDM (Multiplexação por Divisão de Frequência) e TDM (Multiplexação por Divisão de Tempo).",
      "CSMA/CD (Carrier Sense) e Token Ring.",
      "IPv4 e IPv6 dinâmicos.",
      "HTTP (HyperText) e FTP (File Transfer)."
    ],
    answer: "FDM (Multiplexação por Divisão de Frequência) e TDM (Multiplexação por Divisão de Tempo).",
    explanation: "Na comutação de circuitos, o canal físico é dividido em faixas de frequências contínuas (FDM) ou em minúsculas frações de tempo periódicas (TDM) atribuídas fixamente a cada chamada telefônica."
  },
  {
    question: "Sobre as redes de acesso banda larga, qual é a principal característica arquitetônica da tecnologia HFC (Cable/Cabo) em contraste com o DSL?",
    options: [
      "O HFC utiliza cabos telefônicos de par trançado dedicados, enquanto o DSL utiliza satélites.",
      "O HFC não consegue atingir velocidades maiores que 1 Mbps, sendo inferior ao DSL.",
      "O HFC utiliza infraestrutura de TV a cabo (coaxial) sendo um meio de transmissão compartilhado entre os domicílios da vizinhança, enquanto o DSL fornece um link físico dedicado do usuário até a central telefônica.",
      "O HFC usa comunicação exclusiva por ondas de rádio (RF) curtas.",
      "O HFC requer protocolos de roteamento dinâmico complexos BGP do lado do cliente doméstico."
    ],
    answer: "O HFC utiliza infraestrutura de TV a cabo (coaxial) sendo um meio de transmissão compartilhado entre os domicílios da vizinhança, enquanto o DSL fornece um link físico dedicado do usuário até a central telefônica.",
    explanation: "O link DSL (Digital Subscriber Line) é um par de fios exclusivo da casa até a central. Na internet a cabo (HFC - Hybrid Fiber Coaxial), a vizinhança inteira compartilha a mesma malha física, o que pode reduzir a velocidade em horários de pico."
  },
  {
    question: "No contexto das ameaças à segurança de redes, qual a principal diferença comportamental entre um Vírus e um Worm?",
    options: [
      "Um Vírus ataca o hardware do computador, enquanto o Worm ataca o software.",
      "Um Vírus requer interação humana (ex: clicar em um anexo infectado) para se espalhar, enquanto o Worm é capaz de se replicar e espalhar sozinho pela rede através de vulnerabilidades sistêmicas.",
      "Um Vírus rouba senhas silenciosamente, enquanto o Worm apenas apaga arquivos de texto.",
      "Um Vírus só infecta servidores de núcleo Linux, e o Worm infecta clientes Windows na borda.",
      "Não há nenhuma diferença técnica, são apenas nomenclaturas comerciais distintas para o mesmo malware."
    ],
    answer: "Um Vírus requer interação humana (ex: clicar em um anexo infectado) para se espalhar, enquanto o Worm é capaz de se replicar e espalhar sozinho pela rede através de vulnerabilidades sistêmicas.",
    explanation: "Worms (vermes) varrem a rede ativamente buscando máquinas vulneráveis para executarem a si mesmos remotamente, criando grandes epidemias globais sem precisar que o usuário faça nada."
  },
  {
    question: "O que caracteriza um ataque DDoS (Distributed Denial of Service)?",
    options: [
      "Uma técnica de criptografia forte usada pelo atacante para bloquear o acesso do próprio usuário (Ransomware).",
      "Uma técnica onde o atacante tenta adivinhar a senha do roteador local executando um dicionário de força bruta.",
      "Um ataque coordenado onde milhares de máquinas comprometidas (botnet) enviam requisições ou tráfego simultâneo para um único servidor alvo, sobrecarregando sua banda ou seus recursos e tornando-o indisponível para usuários legítimos.",
      "Um software disfarçado de jogo que rouba informações de cartão de crédito no navegador.",
      "A interceptação passiva de pacotes em uma rede LAN pública."
    ],
    answer: "Um ataque coordenado onde milhares de máquinas comprometidas (botnet) enviam requisições ou tráfego simultâneo para um único servidor alvo, sobrecarregando sua banda ou seus recursos e tornando-o indisponível para usuários legítimos.",
    explanation: "O ataque Distribuído de Negação de Serviço não visa roubar dados, mas sim paralisar um serviço inundando o servidor com tráfego inútil gerado por uma gigantesca rede zumbi."
  },
  {
    question: "O que significa e como funciona a técnica criminosa de 'IP Spoofing'?",
    options: [
      "A clonagem do endereço MAC físico da placa de rede de um roteador legítimo.",
      "O monitoramento, leitura e captura passiva de pacotes de dados de terceiros que trafegam na rede.",
      "O envio de pacotes maliciosos na rede utilizando um Endereço IP de origem falso (forjado) no cabeçalho, com o intuito de enganar o receptor sobre quem realmente originou a requisição.",
      "O desligamento remoto de serviços vitais usando requisições malformadas na porta HTTP (80).",
      "O redirecionamento do tráfego através de servidores DNS anônimos localizados na dark web."
    ],
    answer: "O envio de pacotes maliciosos na rede utilizando um Endereço IP de origem falso (forjado) no cabeçalho, com o intuito de enganar o receptor sobre quem realmente originou a requisição.",
    explanation: "Ao alterar o campo 'IP de origem' no pacote de dados para o IP de uma máquina de confiança (spoofing), o atacante pode burlar firewalls ou forjar respostas não solicitadas."
  },
  {
    question: "Como o protocolo HTTP, sendo 'stateless' (sem estado/memória), permite que lojas virtuais 'lembrem' quem você é ou o que está no seu carrinho de compras entre diferentes cliques?",
    options: [
      "Mantendo uma conexão TCP ininterrupta 24 horas por dia desde o login do cliente.",
      "Utilizando ativamente o endereço MAC da placa de rede do cliente como chave primária estática no banco de dados do servidor.",
      "Através da tecnologia de Cookies, que são pequenos tokens de texto gerados pelo servidor, armazenados no navegador do usuário e automaticamente reenviados a cada nova requisição para identificar o cliente.",
      "Lendo o endereço IPv4 fixo que todos os computadores no mundo obrigatoriamente possuem.",
      "O HTTP não é 'stateless', ele naturalmente retém o estado da aplicação em campos fixos no roteador mais próximo do usuário."
    ],
    answer: "Através da tecnologia de Cookies, que são pequenos tokens de texto gerados pelo servidor, armazenados no navegador do usuário e automaticamente reenviados a cada nova requisição para identificar o cliente.",
    explanation: "Sem os cookies, o servidor trataria cada clique em uma loja online como se fosse o mesmíssimo primeiro acesso de um usuário totalmente novo e desconhecido."
  },
  {
    question: "Qual é o principal benefício técnico de implantar um Web Cache (Servidor Proxy) na rede de uma instituição com muitos usuários?",
    options: [
      "Evita totalmente a necessidade de firewalls, barrando ataques vindos da camada de rede.",
      "Substitui a necessidade de consultar os servidores DNS mundiais para toda e qualquer aplicação.",
      "Atua como intermediário, armazenando localmente cópias dos objetos e páginas web recém acessadas; se outro usuário requisitar a mesma página, o proxy a entrega quase instantaneamente, economizando banda no link da operadora e reduzindo a latência.",
      "Aumenta a vazão máxima teórica da fibra óptica contratada usando técnicas de compressão analógica.",
      "Garante criptografia ponto a ponto para todo o tráfego HTTP convertendo-o para HTTPS no roteador."
    ],
    answer: "Atua como intermediário, armazenando localmente cópias dos objetos e páginas web recém acessadas; se outro usuário requisitar a mesma página, o proxy a entrega quase instantaneamente, economizando banda no link da operadora e reduzindo a latência.",
    explanation: "Caches/Proxys reduzem o tráfego que sai pelo link principal em direção à Internet (economizando dinheiro/banda) e entregam o conteúdo aos usuários com velocidade de rede local (muito mais rápido)."
  },
  {
    question: "O tradicional protocolo FTP (File Transfer Protocol) é notável por estabelecer duas conexões TCP paralelas para operar. Qual é a finalidade dessa divisão estrutural?",
    options: [
      "Significa que ele envia os dados através de 'Conexões In-band', trafegando o arquivo e os dados de login no exato mesmo canal criptografado.",
      "Ele utiliza uma conexão separada apenas para enviar o arquivo original e outra como backup em caso de corrupção do primeiro.",
      "O FTP utiliza uma conexão de Controle 'Fora de banda' (Out-of-band) na porta 21 dedicada apenas ao envio de comandos e autenticação, abrindo e fechando conexões de Dados avulsas na porta 20 (ou outra dinâmica) para a efetiva transferência dos arquivos.",
      "Ele usa uma conexão restrita UDP para autenticar os comandos rapidamente e outra conexão TCP dedicada à transferência segura dos arquivos pesados.",
      "Utiliza simultaneamente as portas lógicas 80 e 443 integradas para garantir acesso pelos navegadores de internet modernos."
    ],
    answer: "O FTP utiliza uma conexão de Controle 'Fora de banda' (Out-of-band) na porta 21 dedicada apenas ao envio de comandos e autenticação, abrindo e fechando conexões de Dados avulsas na porta 20 (ou outra dinâmica) para a efetiva transferência dos arquivos.",
    explanation: "Enquanto o HTTP trafega comandos (cabeçalhos) e o próprio conteúdo (o HTML) dentro da mesma e única conexão (In-band), o FTP tem a particularidade de manter os comandos e as transferências de dados rodando em caminhos (portas) estritamente separados."
  },
  {
    question: "No contexto do protocolo de compartilhamento P2P BitTorrent, qual é a função estrita de um servidor 'Tracker'?",
    options: [
      "É o próprio arquivo gigantesco consolidado antes de ser desfragmentado e espalhado.",
      "É o servidor supercomputador que hospeda e semeia sozinho as cópias do arquivo pesado.",
      "É um servidor central de infraestrutura que atua apenas acompanhando o registro com os IPs de todos os 'peers' (usuários) que estão atualmente ativos em um enxame (swarm), ajudando novos usuários a descobrirem os demais parceiros de download.",
      "É o módulo de software cliente instalado na máquina do usuário para limitar sua velocidade de upload (choking).",
      "É o roteador da provedora de internet que restringe o tráfego de redes torrent na porta local."
    ],
    answer: "É um servidor central de infraestrutura que atua apenas acompanhando o registro com os IPs de todos os 'peers' (usuários) que estão atualmente ativos em um enxame (swarm), ajudando novos usuários a descobrirem os demais parceiros de download.",
    explanation: "O Tracker não possui sequer uma única parte do arquivo baixado. Ele é literalmente apenas uma lista de contatos que interliga (apresenta) computadores comuns que estão interessados em trocar as peças entre si."
  },
  {
    question: "Qual é o mecanismo lógico (filosofia de algoritmo) utilizado pelo BitTorrent para incentivar os usuários a compartilharem ativamente (upload) e punir os nós egoístas (leechers)?",
    options: [
      "O banimento automático pelo endereço MAC físico na infraestrutura do provedor de acesso.",
      "O algoritmo conhecido como 'Tit-for-tat' (Olho por olho/Toma lá dá cá), onde o seu cliente passa a priorizar o envio de dados (unchoking) aos pares que estão atualmente lhe fornecendo as melhores taxas de upload em retribuição.",
      "O uso compulsório de criptografia que se corrompe ao cancelar o envio do arquivo.",
      "A exclusão irreversível do IP do usuário pelo servidor Tracker do enxame.",
      "A exigência de compra antecipada de créditos virtuais processados na camada de aplicação."
    ],
    answer: "O algoritmo conhecido como 'Tit-for-tat' (Olho por olho/Toma lá dá cá), onde o seu cliente passa a priorizar o envio de dados (unchoking) aos pares que estão atualmente lhe fornecendo as melhores taxas de upload em retribuição.",
    explanation: "Se você estrangular a sua taxa de upload (se recusando a contribuir com o enxame coletivo), os outros pares da rede BitTorrent eventualmente perceberão sua falta de retorno e irão interromper (choke) progressivamente os envios para você."
  },
  {
    question: "O que é uma CDN (Content Distribution Network) e como ela ajuda a escalar serviços globais de vídeo sob demanda, como a Netflix?",
    options: [
      "É um gigantesco serviço global de backup de dados operando em unidades de fita magnética de longa duração.",
      "É uma rede secreta de dispositivos IoT utilizados para compartilhar o processamento das faturas e recomendações dos clientes da plataforma.",
      "É uma malha de milhares de servidores espalhados geograficamente pelo globo que armazenam cópias (cache) do conteúdo pesado bem próximo fisicamente ao usuário final, evadindo a necessidade de transitar todos os vídeos constantemente pelos oceanos e engarrafar o núcleo da Internet.",
      "É o novo termo para definir os grossos cabos de fibra ótica submarinos que interligam os datacenters de dois continentes em linha reta.",
      "É um protocolo de segurança em hardware que impede a cópia pirata dos vídeos trafegados no ar."
    ],
    answer: "É uma malha de milhares de servidores espalhados geograficamente pelo globo que armazenam cópias (cache) do conteúdo pesado bem próximo fisicamente ao usuário final, evadindo a necessidade de transitar todos os vídeos constantemente pelos oceanos e engarrafar o núcleo da Internet.",
    explanation: "Para não entupir a internet enviando o mesmo vídeo diretamente de um servidor mestre nos EUA para 1 milhão de brasileiros diferentes, as empresas instalam servidores CDN diretamente dentro dos provedores de internet (ISPs) aqui no Brasil."
  },
  {
    question: "No contexto dos Registros de Recurso do DNS (Resource Records), qual é a utilidade e a diferença central entre um registro do Tipo A e um registro do Tipo CNAME?",
    options: [
      "Nenhuma, ambos existem estritamente para associar nomes simples a endereços físicos MAC.",
      "O registro Tipo A associa o nome de domínio a um endereço de e-mail; o CNAME associa o domínio a um arquivo do servidor.",
      "O registro Tipo A aponta um nome diretamente para o endereço IPv4 do host hospedeiro; o registro CNAME atua como um 'apelido', apontando um nome alternativo para um outro nome real e canônico.",
      "O registro Tipo CNAME aponta exclusivamente para endereços IPv6 extensos, e o Tipo A para os endereços IPv4 tradicionais.",
      "O Tipo A é usado pelos roteadores locais da rede em malha e o CNAME é processado apenas pelos switches passivos da rede LAN."
    ],
    answer: "O registro Tipo A aponta um nome diretamente para o endereço IPv4 do host hospedeiro; o registro CNAME atua como um 'apelido', apontando um nome alternativo para um outro nome real e canônico.",
    explanation: "Exemplo prático: O nome 'www.empresa.com' (CNAME) aponta para o verdadeiro nome canônico do servidor, que poderia ser 'server221.empresa.net'. Já esse nome de servidor teria finalmente um registro Tipo A apontando para o IP numérico final '192.0.2.1'."
  },
  {
    question: "Como opera a tecnologia de streaming de vídeo adaptativo DASH (Dynamic Adaptive Streaming over HTTP)?",
    options: [
      "O servidor principal decide unicamente qual resolução enviar para todo e qualquer cliente ao redor do mundo, forçando uma transmissão paralela em UDP independentemente da banda do usuário.",
      "O vídeo pré-gravado é codificado em várias qualidades distintas (ex: 480p, 1080p, 4K) e particionado em pedaços pequenos. O cliente (player) mede constantemente a banda disponível de download e, inteligentemente, requisita via HTTP os próximos trechos no nível de qualidade ideal que evite travamentos no momento.",
      "Ele exige baixar, usando o protocolo FTP, o arquivo em sua íntegra na qualidade selecionada para o disco rígido do usuário antes de permitir sequer o primeiro segundo de reprodução do vídeo.",
      "Ele injeta fragmentos visuais brutos um por vez na rede local através de consultas recursivas incessantes aos servidores DNS raízes.",
      "Sustenta fluxos imensos de dados contínuos usando de modo exclusivo as velhas portas SMTP legadas."
    ],
    answer: "O vídeo pré-gravado é codificado em várias qualidades distintas (ex: 480p, 1080p, 4K) e particionado em pedaços pequenos. O cliente (player) mede constantemente a banda disponível de download e, inteligentemente, requisita via HTTP os próximos trechos no nível de qualidade ideal que evite travamentos no momento.",
    explanation: "Toda a 'inteligência' do DASH reside no aplicativo do próprio cliente (no seu player do YouTube ou Netflix). Se alguém na sua casa começa a fazer um grande download, seu player percebe a perda de banda e silenciosamente solicita o próximo trecho do vídeo na versão de 480p, sem que o vídeo precise parar para carregar (buffering)."
  },
  {
    question: "A arquitetura TCP/IP é vista como simplificada frente ao modelo teórico OSI. Quais são as duas camadas do modelo conceitual OSI que NÃO possuem camadas distintas ou equivalentes diretos separados no modelo TCP/IP prático, tendo suas teóricas responsabilidades absorvidas majoritariamente pela Camada de Aplicação?",
    options: [
      "Camada de Enlace e Física.",
      "Camada de Transporte e Rede.",
      "Camada de Apresentação e Camada de Sessão.",
      "Camada de Roteamento Dinâmico e Comutação.",
      "Camada de Criptografia Base e Compressão Quântica."
    ],
    answer: "Camada de Apresentação e Camada de Sessão.",
    explanation: "Na teoria OSI, a camada de Apresentação lidaria formalmente com a formatação (ex: ASN.1) e criptografia de dados, e a de Sessão faria o controle rígido do diálogo. Na prática do mundo real, a robusta e generalista Camada de Aplicação do TCP/IP (com o apoio das próprias ferramentas de software como SSL/TLS) implementa internamente o que precisar dessas funções, descartando a obrigatoriedade dessas camadas extras."
  },
  {
    question: "O banco de dados do DNS é altamente distribuído pelo mundo para evitar um ponto único de falha. Como está estruturada a sua hierarquia principal de pesquisa de cima para baixo?",
    options: [
      "Servidores Locais -> Servidores Globais -> Servidores Virtuais.",
      "Servidores Raiz (Root) -> Servidores TLD (Top-Level Domain, ex: .com, .edu) -> Servidores Autoritativos (ex: ns1.empresa.com).",
      "Servidores Primários -> Servidores Secundários -> Servidores Terciários.",
      "Servidores de Borda -> Servidores de Núcleo -> Servidores P2P.",
      "Servidores DNS -> Servidores DHCP -> Servidores NAT."
    ],
    answer: "Servidores Raiz (Root) -> Servidores TLD (Top-Level Domain, ex: .com, .edu) -> Servidores Autoritativos (ex: ns1.empresa.com).",
    explanation: "Se o servidor DNS local não sabe a resposta, ele pergunta ao servidor Raiz (Root), que o direciona para o servidor TLD (.com). O TLD, por fim, indica o servidor Autoritativo da própria empresa, onde o IP real está gravado."
  },
  {
    question: "Na comunicação HTTP, os pacotes de resposta do servidor contêm 'Códigos de Status'. O que indicam, respectivamente, os famosos códigos 200 e 404?",
    options: [
      "200: Requisição Negada; 404: Página Redirecionada para novo domínio.",
      "200: O servidor está em manutenção; 404: O cliente está sem conexão à internet.",
      "200: Arquivo corrompido durante a transmissão; 404: Conexão persistente estabelecida com sucesso.",
      "200: O servidor exige senha (Unauthorized); 404: O arquivo HTML solicitado é grande demais.",
      "200: OK (A requisição foi bem-sucedida e o objeto está na resposta); 404: Not Found (O documento solicitado não existe no servidor)."
    ],
    answer: "200: OK (A requisição foi bem-sucedida e o objeto está na resposta); 404: Not Found (O documento solicitado não existe no servidor).",
    explanation: "A série de códigos HTTP é padrão: 2xx indica sucesso na requisição, 3xx redirecionamento de URL, 4xx erro causado pelo cliente (ex: pediu um arquivo inexistente) e 5xx erro de servidor interno."
  },
  {
    question: "Apesar de HTTP e SMTP serem ambos protocolos da Camada de Aplicação usados para transferir arquivos, há uma distinção fundamental no modo de comunicação entre eles. Qual é?",
    options: [
      "O HTTP opera via UDP sem garantias, enquanto o SMTP exige conexões TCP persistentes exclusivas.",
      "O HTTP é predominantemente um protocolo 'Push' (Empurrar), e o SMTP é um protocolo 'Pull' (Puxar).",
      "O HTTP não transfere texto, apenas imagens e vídeos compilados, enquanto o SMTP transfere apenas texto simples em código ASCII.",
      "O HTTP exige criptografia nativa em hardware, enquanto o SMTP opera totalmente sem criptografia no roteador.",
      "O HTTP é predominantemente um protocolo 'Pull' (Puxar - o usuário solicita e puxa a página web), enquanto o SMTP é primariamente um protocolo 'Push' (Empurrar - o remetente força o envio do e-mail para o servidor destino)."
    ],
    answer: "O HTTP é predominantemente um protocolo 'Pull' (Puxar - o usuário solicita e puxa a página web), enquanto o SMTP é primariamente um protocolo 'Push' (Empurrar - o remetente força o envio do e-mail para o servidor destino).",
    explanation: "Na Web, o navegador puxa as informações contidas nos servidores. No envio de correio eletrônico, o aplicativo do cliente empurra o arquivo contendo a mensagem em direção ao servidor provedor do destinatário."
  },
  {
    question: "O programa utilitário 'Traceroute' (ou Tracert no Windows) é amplamente abordado ao se estudar atrasos de rede. Qual é a sua função diagnóstica principal?",
    options: [
      "Calcular a velocidade exata teórica de download e upload que a placa de rede suporta.",
      "Descobrir a rota completa listando o endereço IP de todos os roteadores intermediários entre o host de origem e o de destino, medindo os atrasos (latência) até cada um deles.",
      "Apagar permanentemente a memória cache de rota do DNS armazenada de forma indevida no roteador local.",
      "Verificar através de loopback se a placa de rede da máquina queimou ou se o cabo principal foi removido.",
      "Criptografar emergencialmente a comunicação criando um túnel seguro (VPN) ponto a ponto até o destino."
    ],
    answer: "Descobrir a rota completa listando o endereço IP de todos os roteadores intermediários entre o host de origem e o de destino, medindo os atrasos (latência) até cada um deles.",
    explanation: "O traceroute é a ferramenta de diagnóstico fundamental para rastrear a cadeia de roteadores em uma viagem de pacotes e detectar exatamente em qual país ou nó do meio do caminho a rede encontra lentidão."
  },
  {
    question: "De acordo com o Capítulo 1, o 'Atraso Total Nodal' sofrido por um pacote em cada roteador que cruza a rede é a soma matemática de quatro atrasos específicos distintos. Quais são eles?",
    options: [
      "Atraso de Criptografia, Atraso de Firewall, Atraso de Varredura de Vírus e Atraso de Sessão.",
      "Atraso de CSMA, Atraso de Endereço MAC, Atraso de ARP e Atraso de ICMP.",
      "Atraso de Aplicação HTTP, Atraso FTP, Atraso SMTP e Atraso de Banco de Dados.",
      "Atraso Analógico, Atraso Digital, Atraso de Mídia de Fibra e Atraso de Cobre.",
      "Atraso de Processamento (ler cabeçalho e rotear), Atraso de Enfileiramento (esperar na fila do buffer), Atraso de Transmissão (colocar todos os bits no link) e Atraso de Propagação (tempo de viagem pelo fio)."
    ],
    answer: "Atraso de Processamento (ler cabeçalho e rotear), Atraso de Enfileiramento (esperar na fila do buffer), Atraso de Transmissão (colocar todos os bits no link) e Atraso de Propagação (tempo de viagem pelo fio).",
    explanation: "Todo pacote que atinge um nó da rede gasta: tempo para ser lido e direcionado (Processamento), tempo aguardando tráfego escoar (Fila), tempo condicionado à capacidade/vazão da porta para ejetar os dados (Transmissão) e o tempo fixo cobrado pela física no deslocamento do cabo (Propagação)."
  }
];
