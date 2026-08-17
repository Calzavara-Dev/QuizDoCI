import re
import json

raw_text_1 = """1) Qual o principal fator levado em consideração na escolha entre cabos de par trançado e coaxial, para as redes de computador? A) A velocidade máxima de transmissão apenas. B) O nível de interferência eletromagnética. C) O custo dos roteadores na rede. D) A necessidade de uso de multiplexadores analógicos. E) O tamanho físico da placa de rede.
2) Qual o conector mais utilizado em cabos coaxiais? A) RJ-45 B) DB-9 C) AUI D) BNC E) USB
3) Qual método de identificação foi usado na transmissão a seguir? "Transmissões em que o campo de nome TYPE FIELD é usado para especificar o conteúdo dos frames." A) Tipo de frame implícito. B) Tipo de frame explícito. C) Tipo de frame em rajada. D) Tipo de frame de banda base. E) Tipo de frame dinâmico.
4) Como o computador consegue lidar com os dados da rede sem interromper o uso da CPU? A) Utilizando uma topologia em anel, onde o tráfego é organizado automaticamente. B) Através de um roteador dedicado que processa tudo e envia os dados diretamente para a tela. C) Através da Placa de Interface de Rede (NIC), que possui um circuito capaz de enviar e receber bits independentemente e só avisa a CPU por interrupção ao terminar a tarefa. D) Enviando os dados apenas quando a CPU não está em uso, através de comandos da BIOS. E) Desativando o protocolo TCP/IP e usando apenas a camada física.
5) Quais fatores na rede são amplificados pelo evento a seguir? "Em uma empresa com uma rede local concebida originalmente para um cabeamento de 50 m, teve sua rede alterada por uma reforma onde o cabeamento foi aumentado para 160 m sem nenhum outro equipamento tenha entrado na rede." A) A largura de banda e o ritmo de transferência da rede. B) A quantidade de endereços IP e a máscara de sub-rede. C) Os erros em cascata e o tamanho dos pacotes (Jumbo frames). D) O número de computadores na rede e as colisões no hub. E) O delay (atraso) e a atenuação de sinal do cabo.
6) O que é Internet? A) Uma rede local de altíssima velocidade e curta distância (LAN). B) Um tipo de cabeamento que não utiliza conectores BNC ou repetidores. C) Uma conexão entre redes, formando um grupo de redes interconectadas por roteadores usando um serviço universal. D) Um sistema de transmissão analógico focado apenas em topologias estrela. E) O termo utilizado para classificar qualquer computador que acessa um switch.
7) Assinale a topologia de rede que tem todos os computadores interligados a um único ponto. A) Barramento B) Anel C) Estrela D) Malha E) Árvore
8) Assinale a opção que contém o sistema utilizado para coordenar as transmissões em uma rede de barramento ethernet: A) Através do CARRIER SENSE MULTIPLE AC. B) Através do controle exclusivo do servidor. C) Todos os computadores podem transmitir a qualquer hora, sem coordenação. D) Através do CARRIER SENSE MULTIPLE ACCESS WITH COLISION DETECT (CSMA/CD). E) Os computadores só recebem no barramento Ethernet, nunca transmitem.
9) Os erros em transmissões de rede são variáveis indesejáveis mas reais. Assinale a opção que contém o nome do erro que só altera um (1) bit da mensagem enviada. A) Erro B) Erro em cascata C) Erro de bit D) Erro de Byte E) Erro de Mbits
10) Marque a opção que contém uma característica de uma transmissão de BROADCASTING. A) O tráfego atinge exclusivamente os computadores do administrador da rede. B) Todas as estações na rede recebem cópias dos dados enviados. C) Somente a estação de destino especificada no IP recebe a mensagem. D) As mensagens são obrigatoriamente barradas por switches locais. E) A mensagem é dividida em fragmentos menores para evitar sobrecarga.
11) Redes com BRIDGES são mais eficientes que as com repetidores. Com o devido cuidado na sua organização, podemos ter redes com segmentos que podem se comunicar, independentemente do outro. Assinale a alternativa que contém uma exigência para que isso seja possível. A) Ligar os computadores apenas com cabos Thin Ethernet. B) Impedir o uso de máscaras de sub-rede nas interfaces. C) Colocar computadores que se comuniquem com mais frequência no mesmo segmento de rede. D) Configurar todos os computadores para o modo de transmissão sem conexão. E) Instalar apenas repetidores analógicos de banda larga.
12) A empresa KARHU S/A possui uma rede para permitir a comunicação de suas unidades, fazendo uso de meios alugados para permitir a interligação de suas estações. Assinale a opção que contém uma característica dessa rede em relação à propriedade. A) LAN Pública B) WAN Pública C) LAN Privada D) WAN Privada E) MAN Governamental
13) Ao analisarmos o desempenho de uma rede de dados encontramos um parâmetro importante que é o DELAY. Sabendo que essa característica é inerente às redes de forma distinta, uma rede com quatro computadores, dois repetidores, dois SWITCH e 50 metros de cabo terá um DELAY prioritariamente de: A) Delay de Propagação B) Switching Delay (SWITCHING) C) Delay de Enfileiramento D) Delay de Acesso E) Delay Estático
14) Sabendo que a camada de sessão adicionou um dado a um pacote que será transmitido na rede, assinale a opção com a camada responsável por retirar essa informação na recepção. A) Camada Física B) Camada de Enlace C) Camada de Transporte D) Camada de Aplicação E) Camada de Sessão
15) Qual é a principal utilização dos Frames em uma rede local? A) Agir como filtros de interferência eletromagnética (EMI). B) Atuar como "envelopes" para encapsular os pacotes, adicionando endereços de hardware (endereços MAC) para permitir a transmissão e direcionamento pelo meio compartilhado. C) Reduzir o tempo de processamento da CPU transmitindo dados de forma analógica em ondas de rádio. D) Amplificar o sinal em cabos de longa distância substituindo roteadores e repetidores. E) Traduzir nomes de domínio simbólicos para endereços IP através do servidor DNS.
16) Como um computador na rede consegue aceitar apenas as mensagens direcionadas a ele? A) O processador analisa todas as mensagens em tempo real e descarta as inválidas através de um firewall. B) O hub direciona a energia elétrica apenas para a porta que possui o computador alvo. C) A placa de rede examina o "Endereço de Destino" do frame que passa pelo meio; se o endereço for igual ao seu endereço físico, ela o aceita e repassa ao sistema, caso contrário, descarta o frame. D) Utilizando criptografia avançada onde só o destinatário possui a chave de desencriptação. E) Utilizando o endereço IP em todos os segmentos sem que a interface de hardware precise processar nada.
17) Como se conceitua o "Serviço Universal" (Universal Service) no contexto de redes? A) O direito de todo usuário acessar redes WiFi de forma gratuita. B) Um esquema que permite a comunicação transparente entre quaisquer computadores, independentemente de estarem ligados a tipos de redes e tecnologias físicas completamente diferentes. C) Uma regra do protocolo IP que define que todo computador deve ter um endereço MAC estático. D) O método exclusivo pelo qual cabos de par trançado se comunicam com cabos de fibra óptica sem precisar de hubs. E) Uma aplicação de correio eletrônico que padroniza os anexos enviados."""

gabarito_1 = {1: 'B', 2: 'D', 3: 'B', 4: 'C', 5: 'E', 6: 'C', 7: 'C', 8: 'D', 9: 'C', 10: 'B', 11: 'C', 12: 'D', 13: 'B', 14: 'E', 15: 'B', 16: 'C', 17: 'B'}

raw_text_2 = """1. Qual é a principal finalidade de se utilizar o cabo de par trançado na fiação de redes de computadores? A) Aumentar a largura de banda para suportar transmissões de vídeo em 4K. B) Minimizar a interferência eletromagnética (tanto a emitida pelo cabo quanto a recebida de fora). C) Permitir a conexão direta com cabos de fibra óptica sem o uso de conversores. D) Evitar o uso de conectores RJ-45. E) Garantir que o endereçamento MAC mude dinamicamente.
2. No mecanismo CSMA/CD, o que caracteriza tecnicamente uma colisão? A) A falha na camada de sessão ao entregar datagramas UDP. B) O desconhecimento do endereço IP pelo protocolo ARP. C) A perda de pacotes devido à falta de memória no buffer do switch. D) A interferência entre dois ou mais sinais elétricos viajando no mesmo cabo ao mesmo tempo. E) O rompimento físico do cabo principal de rede.
3. Qual a função do endereço de broadcast (broadcast address) em uma rede local? A) Garantir que os dados sejam fortemente criptografados antes do envio. B) Realizar a transmissão de dados para uma larga audiência, permitindo que todos os computadores da rede recebam uma cópia dos dados. C) Limitar o envio de mensagens apenas para servidores e hubs. D) Estabelecer uma rede virtual privada (VPN) para usuários remotos de forma invisível. E) Eliminar completamente as colisões no meio físico de transmissão.
4. Qual o objetivo da instalação de um terminal nas extremidades do cabo principal em sistemas Thick Ethernet? A) Converter sinais analógicos em digitais automaticamente. B) Conectar o cabo AUI à placa de rede do servidor. C) Evitar que o sinal elétrico seja “refletido” ao chegar ao fim do cabo, o que causaria severas interferências. D) Amplificar o sinal elétrico para que ele atinja áreas metropolitanas (MAN). E) Fazer a função de firewall para proteger a rede contra intrusos externos.
5. Qual a vantagem funcional de uma bridge em relação a um repetidor analógico? A) A bridge consegue apenas amplificar a tensão do sinal elétrico, enquanto o repetidor filtra vírus. B) A bridge opera exclusivamente na conversão de pulsos elétricos para luz (fibra óptica). C) A bridge ignora completamente os endereços MAC, repassando os dados mais rapidamente. D) A bridge consegue identificar frames completos e verifica se eles chegam intactos antes de enviá-los, além de não transmitir frames desnecessariamente (filtro). E) A bridge diminui propositalmente a taxa de transferência para evitar sobrecarga.
6. De acordo com o modelo de camadas OSI, qual camada é responsável por organizar os dados em frames e transmiti-los pela rede? A) Camada 1: Física B) Camada 2: Enlace C) Camada 3: Rede D) Camada 4: Transporte E) Camada 7: Aplicação
7. As fibras ópticas apresentam vantagens em relação aos fios de cobre porque: A) São mais baratas e fáceis de instalar. B) A luz não sofre nem produz interferência elétrica. C) Não necessitam de equipamentos especiais para união de fibras. D) Utilizam sinais elétricos para codificar informações. E) Possuem baixa largura de banda.
8. No padrão RS-232, o receptor utiliza o start bit para: A) Marcar o fim de um caractere. B) Iniciar um timer para reconhecer os tempos dos bits sucessivos. C) Manter a tensão negativa no fio. D) Atuar como um bit fantasma de parada. E) Realizar a modulação por fase.
9. Na topologia de estrela, o ponto central ao qual todos os computadores se conectam é chamado de: A) Segmento B) Ether C) Hub D) Anel E) Bus
10. Um endereço físico estático é aquele que: A) É determinado automaticamente ao ligar a estação. B) Muda sempre que o hardware é reiniciado. C) É configurado manualmente pelo usuário via software. D) É definido pelo fabricante e é único no mundo. E) Depende dos endereços de outros computadores conectados na mesma rede.
11. O sistema de cabeamento 10Base-T utiliza qual tipo de conector para a placa de rede? A) BNC B) AUI C) RJ-45 D) DB-9 E) Transceiver
12. Os hubs ativos possuem como característica principal: A) Serem simples caixas de junção sem alimentação elétrica. B) Não realizarem a amplificação de sinais. C) Regenerarem ativamente os sinais entre os dispositivos. D) Funcionarem apenas como painéis de fios de manobra. E) Serem imunes a colisões no barramento.
13. O ritmo de transferência (throughput) de uma rede é definido como: A) O tempo total que um bit leva para ir de um computador a outro. B) A taxa de bits que podem entrar na rede por unidade de tempo. C) A velocidade de propagação do sinal no cabo ou fibra. D) O delay de enfileiramento dentro de um pacote switch. E) A largura de banda total suportada fisicamente pelo hardware.
14. No modelo de camadas OSI, a Camada 4 é a camada de: A) Aplicação B) Rede C) Sessão D) Transporte E) Apresentação
15. Explique como funciona o mecanismo de Acesso Múltiplo com Sensoriamento da Portadora (CSMA) antes de um computador transmitir um frame: A) O computador envia uma mensagem de requisição ao servidor, que emite um sinal de autorização para a transmissão. B) O computador monitora o cabo buscando por uma portadora; se o cabo estiver livre, ele transmite; se houver um sinal ativo, ele aguarda o término da transmissão em andamento. C) O computador simplesmente transmite seus dados em intervalos aleatórios e retransmite caso ocorra uma perda. D) A placa de rede emite pulsos luminosos de alerta para as outras máquinas pararem seus envios antes dela iniciar o seu. E) O computador envia um broadcast constante para reservar o cabo em sua totalidade durante a comunicação.
16. Qual a principal diferença de funcionamento entre um hub e um switch em relação ao tráfego de dados? A) O hub usa endereços de broadcast para se comunicar com roteadores, enquanto o switch bloqueia totalmente broadcasts. B) O hub funciona apenas em conexões via fibra óptica e o switch em cabos trançados. C) O hub simula um segmento único e compartilhado, onde apenas dois computadores podem trocar informações simultaneamente; já o switch trabalha de forma paralela simulando uma rede com bridges, permitindo que vários pares de computadores se comuniquem ao mesmo tempo. D) O hub impede as colisões ativamente através de hardware, enquanto o switch só resolve problemas usando a técnica CSMA/CD. E) O hub opera na camada de rede (Camada 3) e o switch opera na camada física (Camada 1).
17. O que descreve corretamente o funcionamento do sistema "store and forward" utilizado em packet switches de redes WAN? A) O switch armazena os pacotes em servidores remotos antes de continuar. B) O switch converte endereços físicos em nomes de domínio temporários. C) O switch descarta qualquer pacote duplicado assim que ele entra no buffer, gerando latência zero. D) O switch cria buffer e guarda na memória uma cópia exata do frame que chega (store); em seguida, o processador examina o cabeçalho para decidir por qual interface enviar e inicia a transmissão (forward). E) O switch transmite o pacote cegamente para todas as portas de imediato (forward) e depois guarda um registro (store) para faturamento."""

gabarito_2 = {1: 'B', 2: 'D', 3: 'B', 4: 'C', 5: 'D', 6: 'B', 7: 'B', 8: 'B', 9: 'C', 10: 'D', 11: 'C', 12: 'C', 13: 'B', 14: 'D', 15: 'B', 16: 'C', 17: 'D'}

questions = []

def process_text(raw, gabarito):
    blocks = re.split(r'\n(?=\d+[\.\)])', raw.strip())
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        
        m = re.match(r'(\d+)[\.\)]\s*(.*?)\s*A\)\s*(.*?)\s*B\)\s*(.*?)\s*C\)\s*(.*?)\s*D\)\s*(.*?)\s*E\)\s*(.*)', block, re.DOTALL)
        if m:
            num = int(m.group(1))
            question_text = m.group(2).strip()
            opts = {
                'A': m.group(3).strip(),
                'B': m.group(4).strip(),
                'C': m.group(5).strip(),
                'D': m.group(6).strip(),
                'E': m.group(7).strip(),
            }
            
            correct_letter = gabarito.get(num, 'A')
            correct_text = opts[correct_letter]
            
            q_obj = {
                "question": question_text,
                "options": list(opts.values()),
                "answer": correct_text,
                "explanation": f"A alternativa correta é a letra {correct_letter}. {correct_text}"
            }
            questions.append(q_obj)
        else:
            print("Failed to match:", block)

process_text(raw_text_1, gabarito_1)
process_text(raw_text_2, gabarito_2)

ts_content = "import type { Question } from \"../types/question\";\n\nexport const redesGagauQuestions: Question[] = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"

with open("g:/ERICK/src/data/redes_gagau.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Processed {len(questions)} questions.")
