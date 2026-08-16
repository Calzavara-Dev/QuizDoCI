import type { Question } from "../types/question";

export const redesGagauQuestions: Question[] = [
  {
    "question": "Qual o principal fator levado em consideração na escolha entre cabos de par trançado e coaxial, para as redes de computador?",
    "options": [
      "A velocidade máxima de transmissão apenas.",
      "O nível de interferência eletromagnética.",
      "O custo dos roteadores na rede.",
      "A necessidade de uso de multiplexadores analógicos.",
      "O tamanho físico da placa de rede."
    ],
    "answer": "O nível de interferência eletromagnética.",
    "explanation": "A alternativa correta é a letra B. O nível de interferência eletromagnética."
  },
  {
    "question": "Qual o conector mais utilizado em cabos coaxiais?",
    "options": [
      "RJ-45",
      "DB-9",
      "AUI",
      "BNC",
      "USB"
    ],
    "answer": "BNC",
    "explanation": "A alternativa correta é a letra D. BNC"
  },
  {
    "question": "Qual método de identificação foi usado na transmissão a seguir? \"Transmissões em que o campo de nome TYPE FIELD é usado para especificar o conteúdo dos frames.\"",
    "options": [
      "Tipo de frame implícito.",
      "Tipo de frame explícito.",
      "Tipo de frame em rajada.",
      "Tipo de frame de banda base.",
      "Tipo de frame dinâmico."
    ],
    "answer": "Tipo de frame explícito.",
    "explanation": "A alternativa correta é a letra B. Tipo de frame explícito."
  },
  {
    "question": "Como o computador consegue lidar com os dados da rede sem interromper o uso da CPU?",
    "options": [
      "Utilizando uma topologia em anel, onde o tráfego é organizado automaticamente.",
      "Através de um roteador dedicado que processa tudo e envia os dados diretamente para a tela.",
      "Através da Placa de Interface de Rede (NIC), que possui um circuito capaz de enviar e receber bits independentemente e só avisa a CPU por interrupção ao terminar a tarefa.",
      "Enviando os dados apenas quando a CPU não está em uso, através de comandos da BIOS.",
      "Desativando o protocolo TCP/IP e usando apenas a camada física."
    ],
    "answer": "Através da Placa de Interface de Rede (NIC), que possui um circuito capaz de enviar e receber bits independentemente e só avisa a CPU por interrupção ao terminar a tarefa.",
    "explanation": "A alternativa correta é a letra C. Através da Placa de Interface de Rede (NIC), que possui um circuito capaz de enviar e receber bits independentemente e só avisa a CPU por interrupção ao terminar a tarefa."
  },
  {
    "question": "Quais fatores na rede são amplificados pelo evento a seguir? \"Em uma empresa com uma rede local concebida originalmente para um cabeamento de 50 m, teve sua rede alterada por uma reforma onde o cabeamento foi aumentado para 160 m sem nenhum outro equipamento tenha entrado na rede.\"",
    "options": [
      "A largura de banda e o ritmo de transferência da rede.",
      "A quantidade de endereços IP e a máscara de sub-rede.",
      "Os erros em cascata e o tamanho dos pacotes (Jumbo frames).",
      "O número de computadores na rede e as colisões no hub.",
      "O delay (atraso) e a atenuação de sinal do cabo."
    ],
    "answer": "O delay (atraso) e a atenuação de sinal do cabo.",
    "explanation": "A alternativa correta é a letra E. O delay (atraso) e a atenuação de sinal do cabo."
  },
  {
    "question": "O que é Internet?",
    "options": [
      "Uma rede local de altíssima velocidade e curta distância (LAN).",
      "Um tipo de cabeamento que não utiliza conectores BNC ou repetidores.",
      "Uma conexão entre redes, formando um grupo de redes interconectadas por roteadores usando um serviço universal.",
      "Um sistema de transmissão analógico focado apenas em topologias estrela.",
      "O termo utilizado para classificar qualquer computador que acessa um switch."
    ],
    "answer": "Uma conexão entre redes, formando um grupo de redes interconectadas por roteadores usando um serviço universal.",
    "explanation": "A alternativa correta é a letra C. Uma conexão entre redes, formando um grupo de redes interconectadas por roteadores usando um serviço universal."
  },
  {
    "question": "Assinale a topologia de rede que tem todos os computadores interligados a um único ponto.",
    "options": [
      "Barramento",
      "Anel",
      "Estrela",
      "Malha",
      "Árvore"
    ],
    "answer": "Estrela",
    "explanation": "A alternativa correta é a letra C. Estrela"
  },
  {
    "question": "Assinale a opção que contém o sistema utilizado para coordenar as transmissões em uma rede de barramento ethernet:",
    "options": [
      "Através do CARRIER SENSE MULTIPLE AC.",
      "Através do controle exclusivo do servidor.",
      "Todos os computadores podem transmitir a qualquer hora, sem coordenação.",
      "Através do CARRIER SENSE MULTIPLE ACCESS WITH COLISION DETECT (CSMA/CD).",
      "Os computadores só recebem no barramento Ethernet, nunca transmitem."
    ],
    "answer": "Através do CARRIER SENSE MULTIPLE ACCESS WITH COLISION DETECT (CSMA/CD).",
    "explanation": "A alternativa correta é a letra D. Através do CARRIER SENSE MULTIPLE ACCESS WITH COLISION DETECT (CSMA/CD)."
  },
  {
    "question": "Os erros em transmissões de rede são variáveis indesejáveis mas reais. Assinale a opção que contém o nome do erro que só altera um (1) bit da mensagem enviada.",
    "options": [
      "Erro",
      "Erro em cascata",
      "Erro de bit",
      "Erro de Byte",
      "Erro de Mbits"
    ],
    "answer": "Erro de bit",
    "explanation": "A alternativa correta é a letra C. Erro de bit"
  },
  {
    "question": "Marque a opção que contém uma característica de uma transmissão de BROADCASTING.",
    "options": [
      "O tráfego atinge exclusivamente os computadores do administrador da rede.",
      "Todas as estações na rede recebem cópias dos dados enviados.",
      "Somente a estação de destino especificada no IP recebe a mensagem.",
      "As mensagens são obrigatoriamente barradas por switches locais.",
      "A mensagem é dividida em fragmentos menores para evitar sobrecarga."
    ],
    "answer": "Todas as estações na rede recebem cópias dos dados enviados.",
    "explanation": "A alternativa correta é a letra B. Todas as estações na rede recebem cópias dos dados enviados."
  },
  {
    "question": "Redes com BRIDGES são mais eficientes que as com repetidores. Com o devido cuidado na sua organização, podemos ter redes com segmentos que podem se comunicar, independentemente do outro. Assinale a alternativa que contém uma exigência para que isso seja possível.",
    "options": [
      "Ligar os computadores apenas com cabos Thin Ethernet.",
      "Impedir o uso de máscaras de sub-rede nas interfaces.",
      "Colocar computadores que se comuniquem com mais frequência no mesmo segmento de rede.",
      "Configurar todos os computadores para o modo de transmissão sem conexão.",
      "Instalar apenas repetidores analógicos de banda larga."
    ],
    "answer": "Colocar computadores que se comuniquem com mais frequência no mesmo segmento de rede.",
    "explanation": "A alternativa correta é a letra C. Colocar computadores que se comuniquem com mais frequência no mesmo segmento de rede."
  },
  {
    "question": "A empresa KARHU S/A possui uma rede para permitir a comunicação de suas unidades, fazendo uso de meios alugados para permitir a interligação de suas estações. Assinale a opção que contém uma característica dessa rede em relação à propriedade.",
    "options": [
      "LAN Pública",
      "WAN Pública",
      "LAN Privada",
      "WAN Privada",
      "MAN Governamental"
    ],
    "answer": "WAN Privada",
    "explanation": "A alternativa correta é a letra D. WAN Privada"
  },
  {
    "question": "Ao analisarmos o desempenho de uma rede de dados encontramos um parâmetro importante que é o DELAY. Sabendo que essa característica é inerente às redes de forma distinta, uma rede com quatro computadores, dois repetidores, dois SWITCH e 50 metros de cabo terá um DELAY prioritariamente de:",
    "options": [
      "Delay de Propagação",
      "Switching Delay (SWITCHING)",
      "Delay de Enfileiramento",
      "Delay de Acesso",
      "Delay Estático"
    ],
    "answer": "Switching Delay (SWITCHING)",
    "explanation": "A alternativa correta é a letra B. Switching Delay (SWITCHING)"
  },
  {
    "question": "Sabendo que a camada de sessão adicionou um dado a um pacote que será transmitido na rede, assinale a opção com a camada responsável por retirar essa informação na recepção.",
    "options": [
      "Camada Física",
      "Camada de Enlace",
      "Camada de Transporte",
      "Camada de Aplicação",
      "Camada de Sessão"
    ],
    "answer": "Camada de Sessão",
    "explanation": "A alternativa correta é a letra E. Camada de Sessão"
  },
  {
    "question": "Qual é a principal utilização dos Frames em uma rede local?",
    "options": [
      "Agir como filtros de interferência eletromagnética (EMI).",
      "Atuar como \"envelopes\" para encapsular os pacotes, adicionando endereços de hardware (endereços MA",
      "para permitir a transmissão e direcionamento pelo meio compartilhado. C) Reduzir o tempo de processamento da CPU transmitindo dados de forma analógica em ondas de rádio.",
      "Amplificar o sinal em cabos de longa distância substituindo roteadores e repetidores.",
      "Traduzir nomes de domínio simbólicos para endereços IP através do servidor DNS."
    ],
    "answer": "Atuar como \"envelopes\" para encapsular os pacotes, adicionando endereços de hardware (endereços MA",
    "explanation": "A alternativa correta é a letra B. Atuar como \"envelopes\" para encapsular os pacotes, adicionando endereços de hardware (endereços MA"
  },
  {
    "question": "Como um computador na rede consegue aceitar apenas as mensagens direcionadas a ele?",
    "options": [
      "O processador analisa todas as mensagens em tempo real e descarta as inválidas através de um firewall.",
      "O hub direciona a energia elétrica apenas para a porta que possui o computador alvo.",
      "A placa de rede examina o \"Endereço de Destino\" do frame que passa pelo meio; se o endereço for igual ao seu endereço físico, ela o aceita e repassa ao sistema, caso contrário, descarta o frame.",
      "Utilizando criptografia avançada onde só o destinatário possui a chave de desencriptação.",
      "Utilizando o endereço IP em todos os segmentos sem que a interface de hardware precise processar nada."
    ],
    "answer": "A placa de rede examina o \"Endereço de Destino\" do frame que passa pelo meio; se o endereço for igual ao seu endereço físico, ela o aceita e repassa ao sistema, caso contrário, descarta o frame.",
    "explanation": "A alternativa correta é a letra C. A placa de rede examina o \"Endereço de Destino\" do frame que passa pelo meio; se o endereço for igual ao seu endereço físico, ela o aceita e repassa ao sistema, caso contrário, descarta o frame."
  },
  {
    "question": "Como se conceitua o \"Serviço Universal\" (Universal Service) no contexto de redes?",
    "options": [
      "O direito de todo usuário acessar redes WiFi de forma gratuita.",
      "Um esquema que permite a comunicação transparente entre quaisquer computadores, independentemente de estarem ligados a tipos de redes e tecnologias físicas completamente diferentes.",
      "Uma regra do protocolo IP que define que todo computador deve ter um endereço MAC estático.",
      "O método exclusivo pelo qual cabos de par trançado se comunicam com cabos de fibra óptica sem precisar de hubs.",
      "Uma aplicação de correio eletrônico que padroniza os anexos enviados."
    ],
    "answer": "Um esquema que permite a comunicação transparente entre quaisquer computadores, independentemente de estarem ligados a tipos de redes e tecnologias físicas completamente diferentes.",
    "explanation": "A alternativa correta é a letra B. Um esquema que permite a comunicação transparente entre quaisquer computadores, independentemente de estarem ligados a tipos de redes e tecnologias físicas completamente diferentes."
  },
  {
    "question": "Qual é a principal finalidade de se utilizar o cabo de par trançado na fiação de redes de computadores?",
    "options": [
      "Aumentar a largura de banda para suportar transmissões de vídeo em 4K.",
      "Minimizar a interferência eletromagnética (tanto a emitida pelo cabo quanto a recebida de fora).",
      "Permitir a conexão direta com cabos de fibra óptica sem o uso de conversores.",
      "Evitar o uso de conectores RJ-45.",
      "Garantir que o endereçamento MAC mude dinamicamente."
    ],
    "answer": "Minimizar a interferência eletromagnética (tanto a emitida pelo cabo quanto a recebida de fora).",
    "explanation": "A alternativa correta é a letra B. Minimizar a interferência eletromagnética (tanto a emitida pelo cabo quanto a recebida de fora)."
  },
  {
    "question": "No mecanismo CSMA/CD, o que caracteriza tecnicamente uma colisão?",
    "options": [
      "A falha na camada de sessão ao entregar datagramas UDP.",
      "O desconhecimento do endereço IP pelo protocolo ARP.",
      "A perda de pacotes devido à falta de memória no buffer do switch.",
      "A interferência entre dois ou mais sinais elétricos viajando no mesmo cabo ao mesmo tempo.",
      "O rompimento físico do cabo principal de rede."
    ],
    "answer": "A interferência entre dois ou mais sinais elétricos viajando no mesmo cabo ao mesmo tempo.",
    "explanation": "A alternativa correta é a letra D. A interferência entre dois ou mais sinais elétricos viajando no mesmo cabo ao mesmo tempo."
  },
  {
    "question": "Qual a função do endereço de broadcast (broadcast address) em uma rede local?",
    "options": [
      "Garantir que os dados sejam fortemente criptografados antes do envio.",
      "Realizar a transmissão de dados para uma larga audiência, permitindo que todos os computadores da rede recebam uma cópia dos dados.",
      "Limitar o envio de mensagens apenas para servidores e hubs.",
      "Estabelecer uma rede virtual privada (VPN) para usuários remotos de forma invisível.",
      "Eliminar completamente as colisões no meio físico de transmissão."
    ],
    "answer": "Realizar a transmissão de dados para uma larga audiência, permitindo que todos os computadores da rede recebam uma cópia dos dados.",
    "explanation": "A alternativa correta é a letra B. Realizar a transmissão de dados para uma larga audiência, permitindo que todos os computadores da rede recebam uma cópia dos dados."
  },
  {
    "question": "Qual o objetivo da instalação de um terminal nas extremidades do cabo principal em sistemas Thick Ethernet?",
    "options": [
      "Converter sinais analógicos em digitais automaticamente.",
      "Conectar o cabo AUI à placa de rede do servidor.",
      "Evitar que o sinal elétrico seja “refletido” ao chegar ao fim do cabo, o que causaria severas interferências.",
      "Amplificar o sinal elétrico para que ele atinja áreas metropolitanas (MAN).",
      "Fazer a função de firewall para proteger a rede contra intrusos externos."
    ],
    "answer": "Evitar que o sinal elétrico seja “refletido” ao chegar ao fim do cabo, o que causaria severas interferências.",
    "explanation": "A alternativa correta é a letra C. Evitar que o sinal elétrico seja “refletido” ao chegar ao fim do cabo, o que causaria severas interferências."
  },
  {
    "question": "Qual a vantagem funcional de uma bridge em relação a um repetidor analógico?",
    "options": [
      "A bridge consegue apenas amplificar a tensão do sinal elétrico, enquanto o repetidor filtra vírus.",
      "A bridge opera exclusivamente na conversão de pulsos elétricos para luz (fibra óptica).",
      "A bridge ignora completamente os endereços MAC, repassando os dados mais rapidamente.",
      "A bridge consegue identificar frames completos e verifica se eles chegam intactos antes de enviá-los, além de não transmitir frames desnecessariamente (filtro).",
      "A bridge diminui propositalmente a taxa de transferência para evitar sobrecarga."
    ],
    "answer": "A bridge consegue identificar frames completos e verifica se eles chegam intactos antes de enviá-los, além de não transmitir frames desnecessariamente (filtro).",
    "explanation": "A alternativa correta é a letra D. A bridge consegue identificar frames completos e verifica se eles chegam intactos antes de enviá-los, além de não transmitir frames desnecessariamente (filtro)."
  },
  {
    "question": "De acordo com o modelo de camadas OSI, qual camada é responsável por organizar os dados em frames e transmiti-los pela rede?",
    "options": [
      "Camada 1: Física",
      "Camada 2: Enlace",
      "Camada 3: Rede",
      "Camada 4: Transporte",
      "Camada 7: Aplicação"
    ],
    "answer": "Camada 2: Enlace",
    "explanation": "A alternativa correta é a letra B. Camada 2: Enlace"
  },
  {
    "question": "As fibras ópticas apresentam vantagens em relação aos fios de cobre porque:",
    "options": [
      "São mais baratas e fáceis de instalar.",
      "A luz não sofre nem produz interferência elétrica.",
      "Não necessitam de equipamentos especiais para união de fibras.",
      "Utilizam sinais elétricos para codificar informações.",
      "Possuem baixa largura de banda."
    ],
    "answer": "A luz não sofre nem produz interferência elétrica.",
    "explanation": "A alternativa correta é a letra B. A luz não sofre nem produz interferência elétrica."
  },
  {
    "question": "No padrão RS-232, o receptor utiliza o start bit para:",
    "options": [
      "Marcar o fim de um caractere.",
      "Iniciar um timer para reconhecer os tempos dos bits sucessivos.",
      "Manter a tensão negativa no fio.",
      "Atuar como um bit fantasma de parada.",
      "Realizar a modulação por fase."
    ],
    "answer": "Iniciar um timer para reconhecer os tempos dos bits sucessivos.",
    "explanation": "A alternativa correta é a letra B. Iniciar um timer para reconhecer os tempos dos bits sucessivos."
  },
  {
    "question": "Na topologia de estrela, o ponto central ao qual todos os computadores se conectam é chamado de:",
    "options": [
      "Segmento",
      "Ether",
      "Hub",
      "Anel",
      "Bus"
    ],
    "answer": "Hub",
    "explanation": "A alternativa correta é a letra C. Hub"
  },
  {
    "question": "Um endereço físico estático é aquele que:",
    "options": [
      "É determinado automaticamente ao ligar a estação.",
      "Muda sempre que o hardware é reiniciado.",
      "É configurado manualmente pelo usuário via software.",
      "É definido pelo fabricante e é único no mundo.",
      "Depende dos endereços de outros computadores conectados na mesma rede."
    ],
    "answer": "É definido pelo fabricante e é único no mundo.",
    "explanation": "A alternativa correta é a letra D. É definido pelo fabricante e é único no mundo."
  },
  {
    "question": "O sistema de cabeamento 10Base-T utiliza qual tipo de conector para a placa de rede?",
    "options": [
      "BNC",
      "AUI",
      "RJ-45",
      "DB-9",
      "Transceiver"
    ],
    "answer": "RJ-45",
    "explanation": "A alternativa correta é a letra C. RJ-45"
  },
  {
    "question": "Os hubs ativos possuem como característica principal:",
    "options": [
      "Serem simples caixas de junção sem alimentação elétrica.",
      "Não realizarem a amplificação de sinais.",
      "Regenerarem ativamente os sinais entre os dispositivos.",
      "Funcionarem apenas como painéis de fios de manobra.",
      "Serem imunes a colisões no barramento."
    ],
    "answer": "Regenerarem ativamente os sinais entre os dispositivos.",
    "explanation": "A alternativa correta é a letra C. Regenerarem ativamente os sinais entre os dispositivos."
  },
  {
    "question": "O ritmo de transferência (throughput) de uma rede é definido como:",
    "options": [
      "O tempo total que um bit leva para ir de um computador a outro.",
      "A taxa de bits que podem entrar na rede por unidade de tempo.",
      "A velocidade de propagação do sinal no cabo ou fibra.",
      "O delay de enfileiramento dentro de um pacote switch.",
      "A largura de banda total suportada fisicamente pelo hardware."
    ],
    "answer": "A taxa de bits que podem entrar na rede por unidade de tempo.",
    "explanation": "A alternativa correta é a letra B. A taxa de bits que podem entrar na rede por unidade de tempo."
  },
  {
    "question": "No modelo de camadas OSI, a Camada 4 é a camada de:",
    "options": [
      "Aplicação",
      "Rede",
      "Sessão",
      "Transporte",
      "Apresentação"
    ],
    "answer": "Transporte",
    "explanation": "A alternativa correta é a letra D. Transporte"
  },
  {
    "question": "Explique como funciona o mecanismo de Acesso Múltiplo com Sensoriamento da Portadora (CSM",
    "options": [
      "antes de um computador transmitir um frame: A) O computador envia uma mensagem de requisição ao servidor, que emite um sinal de autorização para a transmissão.",
      "O computador monitora o cabo buscando por uma portadora; se o cabo estiver livre, ele transmite; se houver um sinal ativo, ele aguarda o término da transmissão em andamento.",
      "O computador simplesmente transmite seus dados em intervalos aleatórios e retransmite caso ocorra uma perda.",
      "A placa de rede emite pulsos luminosos de alerta para as outras máquinas pararem seus envios antes dela iniciar o seu.",
      "O computador envia um broadcast constante para reservar o cabo em sua totalidade durante a comunicação."
    ],
    "answer": "O computador monitora o cabo buscando por uma portadora; se o cabo estiver livre, ele transmite; se houver um sinal ativo, ele aguarda o término da transmissão em andamento.",
    "explanation": "A alternativa correta é a letra B. O computador monitora o cabo buscando por uma portadora; se o cabo estiver livre, ele transmite; se houver um sinal ativo, ele aguarda o término da transmissão em andamento."
  },
  {
    "question": "Qual a principal diferença de funcionamento entre um hub e um switch em relação ao tráfego de dados?",
    "options": [
      "O hub usa endereços de broadcast para se comunicar com roteadores, enquanto o switch bloqueia totalmente broadcasts.",
      "O hub funciona apenas em conexões via fibra óptica e o switch em cabos trançados.",
      "O hub simula um segmento único e compartilhado, onde apenas dois computadores podem trocar informações simultaneamente; já o switch trabalha de forma paralela simulando uma rede com bridges, permitindo que vários pares de computadores se comuniquem ao mesmo tempo.",
      "O hub impede as colisões ativamente através de hardware, enquanto o switch só resolve problemas usando a técnica CSMA/CD.",
      "O hub opera na camada de rede (Camada 3) e o switch opera na camada física (Camada 1)."
    ],
    "answer": "O hub simula um segmento único e compartilhado, onde apenas dois computadores podem trocar informações simultaneamente; já o switch trabalha de forma paralela simulando uma rede com bridges, permitindo que vários pares de computadores se comuniquem ao mesmo tempo.",
    "explanation": "A alternativa correta é a letra C. O hub simula um segmento único e compartilhado, onde apenas dois computadores podem trocar informações simultaneamente; já o switch trabalha de forma paralela simulando uma rede com bridges, permitindo que vários pares de computadores se comuniquem ao mesmo tempo."
  },
  {
    "question": "O que descreve corretamente o funcionamento do sistema \"store and forward\" utilizado em packet switches de redes WAN?",
    "options": [
      "O switch armazena os pacotes em servidores remotos antes de continuar.",
      "O switch converte endereços físicos em nomes de domínio temporários.",
      "O switch descarta qualquer pacote duplicado assim que ele entra no buffer, gerando latência zero.",
      "O switch cria buffer e guarda na memória uma cópia exata do frame que chega (store); em seguida, o processador examina o cabeçalho para decidir por qual interface enviar e inicia a transmissão (forward).",
      "O switch transmite o pacote cegamente para todas as portas de imediato (forward) e depois guarda um registro (store) para faturamento."
    ],
    "answer": "O switch cria buffer e guarda na memória uma cópia exata do frame que chega (store); em seguida, o processador examina o cabeçalho para decidir por qual interface enviar e inicia a transmissão (forward).",
    "explanation": "A alternativa correta é a letra D. O switch cria buffer e guarda na memória uma cópia exata do frame que chega (store); em seguida, o processador examina o cabeçalho para decidir por qual interface enviar e inicia a transmissão (forward)."
  }
];
