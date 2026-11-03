import { Question } from "../types/question";

export const scmpaP3Questions: Question[] = [
  {
    "question": "Composição dos Consoles no CCM: O console principal localizado no Centro de Controle de Máquinas (CCM) possui uma estrutura física modular padronizada. Como se divide a composição de hardware deste console?",
    "options": [
      "2 Módulos Básicos e 4 Módulos Asas Laterais.",
      "3 Módulos Básicos (MB1-BB, MB2-Central, MB3-BE) e 2 Módulos Asas Laterais (AL1-BB e AL2-BE).",
      "4 Módulos Básicos operando em barramento VME independente sem asas laterais.",
      "1 Módulo Central SCADA e 3 Módulos VISTA integrados num único rack."
    ],
    "answer": "3 Módulos Básicos (MB1-BB, MB2-Central, MB3-BE) e 2 Módulos Asas Laterais (AL1-BB e AL2-BE).",
    "explanation": "O console principal do CCM possui uma estrutura física modular composta por 3 Módulos Básicos (MB1-BB, MB2-Central e MB3-BE) e 2 Módulos Asas Laterais (AL1-BB e AL2-BE).",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Estações SCADA vs. VISTA: No SCMPA, as estações de trabalho dividem-se em duas categorias operacionais: SCADA e VISTA. Qual é a diferença funcional e de conectividade entre elas?",
    "options": [
      "As estações VISTA conectam-se diretamente às remotas via cabo coaxial, enquanto as SCADA são dedicadas apenas à impressora.",
      "As estações SCADA hospedam o subsistema supervisório, suportam a IHM e possuem comunicação direta com as Unidades Remotas; as estações VISTA dependem de uma estação SCADA para acessar os dados.",
      "As estações SCADA ficam exclusivas no Passadiço e as VISTA no CCM.",
      "Apenas as estações VISTA possuem suporte a teclados operacionais funcionais."
    ],
    "answer": "As estações SCADA hospedam o subsistema supervisório, suportam a IHM e possuem comunicação direta com as Unidades Remotas; as estações VISTA dependem de uma estação SCADA para acessar os dados.",
    "explanation": "As estações do tipo SCADA (MB1 e MB3) hospedam o subsistema supervisório, suportam a IHM e comunicam-se diretamente com as Unidades Remotas através da rede de memória refletiva (RTNet). As estações VISTA (MB2 Central e QMC Passadiço) dependem da rede Ethernet e de uma estação SCADA para acessar os dados.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Barramento e Placas Eletrônicas da CPU: A arquitetura eletrônica das Unidades Remotas (RAA1 e RAA2) e dos Módulos Básicos é estruturada no barramento VME. Qual é a composição do conjunto de cartões eletrônicos da CPU no Rack VME das remotas?",
    "options": [
      "Placa CPU Pentium II (VMIVME-7696 ou 7751), cartão \"L\" da CPU, cartão de adaptação PMC008A, cartão de expansão PMC237P e placas de memória refletiva 5579.",
      "Placa CPU ARM Cortex com cartão SD externo e interface RS-485 integrada.",
      "Placa CPU PowerPC 604 com placa de vídeo PCI dedicada e módulo ISA.",
      "Cartão mãe ATX comercial com processador Intel Core i7 e disco SATA."
    ],
    "answer": "Placa CPU Pentium II (VMIVME-7696 ou 7751), cartão \"L\" da CPU, cartão de adaptação PMC008A, cartão de expansão PMC237P e placas de memória refletiva 5579.",
    "explanation": "O Rack VME das remotas e estações SCADA utiliza a placa CPU Pentium II (VMIVME-7696/664 ou 7751), cartões \"L\", PMC008A, PMC237P e memórias refletivas VMIPMC-5579.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Identificação e Funções das Placas de E/S (VMIVME): As placas de Interface de Entrada e Saída (E/S) no barramento VME processam os sinais digitais e analógicos de campo. Assinale a associação CORRETA entre a placa e sua respectiva especificação:",
    "options": [
      "VMIVME-1129: Saída Analógica de 32 canais e VMIVME-4140: Entrada Digital.",
      "VMIVME-1129 (Entrada Digital - 128 bits), VMIVME-2128 (Saída Digital - 128 bits), VMIVME-3113A (Entrada Analógica - 64 canais, 12 bits) e VMIVME-4140 (Saída Analógica - 32 canais, 12 bits).",
      "VMIVME-3113A: Saída Digital de alta potência e VMIVME-2128: Entrada Analógica diferencial.",
      "VMIVME-4140: Entrada de Termopar tipo K e VMIVME-1129: Saída de Tacogerador."
    ],
    "answer": "VMIVME-1129 (Entrada Digital - 128 bits), VMIVME-2128 (Saída Digital - 128 bits), VMIVME-3113A (Entrada Analógica - 64 canais, 12 bits) e VMIVME-4140 (Saída Analógica - 32 canais, 12 bits).",
    "explanation": "As placas VMIVME de E/S dividem-se em: 1129 (Entrada Digital - 128 bits), 2128 (Saída Digital - 128 bits), 3113A (Entrada Analógica - 64 canais, 12 bits) e 4140 (Saída Analógica - 32 canais, 12 bits).",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Placa de Memória Sólida (Flash Drive): Qual é a identificação e a aplicação da placa VMIVME-7452-461 no sistema SCMPA?",
    "options": [
      "Amplificador de vibração da turbina de potência.",
      "Placa de memória sólida não-volátil (Flash Drive / Disco rígido removível) usada no barramento VME para armazenar o sistema operacional, softwares e banco de dados.",
      "Fonte chaveada interna de 50 VDC para 24 VDC.",
      "Cartão de controle do telégrafo de manobra do Passadiço."
    ],
    "answer": "Placa de memória sólida não-volátil (Flash Drive / Disco rígido removível) usada no barramento VME para armazenar o sistema operacional, softwares e banco de dados.",
    "explanation": "A placa VMIVME-7452-461 é um disco rígido de estado sólido não-volátil (Flash Drive removível) montado no barramento VME para armazenar o sistema operacional, softwares de controle e banco de dados.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Dispositivo Sonoro do Passadiço (Bleeptone): O console do Passadiço (QMC) possui um dispositivo sonoro específico para avisos do telégrafo de ordem de manobra e alterações de DESSI. Qual é a especificação desse componente?",
    "options": [
      "Sirene eletromecânica rotativa alimentada em 115 VAC.",
      "Campainha eletrônica Bleeptone (rótulo preto) alimentada em 24 VDC, que emite um som levemente grave e contínuo.",
      "Buzina pneumática de baixa frequência ligada ao ar de controle de 20 psi.",
      "Alto-falante de bobina móvel emitindo bipe agudo intermitente."
    ],
    "answer": "Campainha eletrônica Bleeptone (rótulo preto) alimentada em 24 VDC, que emite um som levemente grave e contínuo.",
    "explanation": "O console do Passadiço (QMC) possui uma campainha eletrônica Bleeptone (rótulo preto) alimentada em 24 VDC, emitindo tom sonoro levemente grave e contínuo para ordens de manobra e alterações do DESSI.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Diferenciação Lógica das Remotas RAA1 e RAA2: As Unidades Remotas RAA1 (Boreste) e RAA2 (Bombordo) são mecanicamente e eletronicamente equivalentes. Como o sistema diferencia logicamente uma remota da outra?",
    "options": [
      "Por chaves seletoras mecânicas instaladas no painel da porta frontal.",
      "Pelo direcionamento dos cabos de sinal de campo e pelos endereços de memória refletiva dedicados (0x101 para BE e 0x102 para BB).",
      "Pela cor da pintura externa do armário metálico.",
      "Através de portas seriais RS-232 exclusivas no console Central."
    ],
    "answer": "Pelo direcionamento dos cabos de sinal de campo e pelos endereços de memória refletiva dedicados (0x101 para BE e 0x102 para BB).",
    "explanation": "A diferenciação lógica entre RAA1 (Boreste) e RAA2 (Bombordo) é determinada pelos cabos de sinal de campo e pelos endereços de memória refletiva dedicados (0x101 para BE e 0x102 para BB).",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Finalidade do Rack VME: O gabinete do Rack VME possui um barramento de comunicação e distribuição de energia. Qual é a finalidade principal desse rack nas remotas e Módulos Básicos?",
    "options": [
      "Roteamento exclusivo dos cabos de fibra óptica do navio.",
      "Acomodar, estruturar fisicamente e fornecer o barramento eletrônico de interconexão e alimentação entre a CPU, memórias e placas de E/S.",
      "Servir como transformador de tensão de 440 VAC para 115 VAC.",
      "Proteger os disjuntores magnéticos de entrada do navio."
    ],
    "answer": "Acomodar, estruturar fisicamente e fornecer o barramento eletrônico de interconexão e alimentação entre a CPU, memórias e placas de E/S.",
    "explanation": "O Rack VME serve para acomodar, estruturar fisicamente e fornecer o barramento eletrônico traseiro de alta velocidade para interconexão e alimentação da CPU, cartões de memória e placas de E/S.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Recurso de Autoteste nas Placas de E/S: Em relação às placas de entrada digital VMIVME-1129 e saída digital VMIVME-2128, qual recurso embutido garante a integridade do hardware?",
    "options": [
      "Fusíveis de vidro em cada conector Euro.",
      "Lógica de autoteste embutida (built-in test) para detecção e isolamento de falhas em tempo real.",
      "Diodos zener externos em cada canal de borneira.",
      "Resistores manuais de ajuste de zero e span."
    ],
    "answer": "Lógica de autoteste embutida (built-in test) para detecção e isolamento de falhas em tempo real.",
    "explanation": "As placas VMIVME de entrada e saída contam com lógica de autoteste embutida (Built-In Test - BITS), permitindo diagnosticar e isolar falhas funcionais em tempo de execução.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Interface de Operação nos Consoles: No Módulo Básico do Passadiço (QMC) e no CCM, como é realizada a interface direta do operador humano com as telas do supervisório?",
    "options": [
      "Apenas por comandos de voz via microfone de bordo.",
      "Por meio de monitor de vídeo, teclado superior (funcional), teclado inferior (padrão) e trackball.",
      "Exclusivamente por chaves alavanca e manômetros analógicos.",
      "Por terminal de linha de comando em texto puro sem elementos gráficos."
    ],
    "answer": "Por meio de monitor de vídeo, teclado superior (funcional), teclado inferior (padrão) e trackball.",
    "explanation": "A interface homem-máquina direta é composta por monitor de vídeo, teclado superior com teclas funcionais dedicadas, teclado inferior padrão alfanumérico e trackball industrial.",
    "topic": "Módulo 1: Arquitetura de Hardware, Consoles e Barramento VME"
  },
  {
    "question": "Topologia e Desempenho da Rede RTNet: A rede RTNet (Memória Refletiva) promove a comunicação entre as remotas e estações SCADA. Quais são suas especificações técnicas de infraestrutura e velocidade?",
    "options": [
      "Cabo metálico par trançado CAT 6 operando a 10 Mbps.",
      "Anel óptico determinístico de tempo real via placas VMIPMC-5579 e cabos de fibra óptica multimodo 62,5/125 µm com conectores SC, atingindo até 13,2 MB/s.",
      "Rede sem fio industrial padrão Wi-Fi 802.11b em 2,4 GHz.",
      "Cabo coaxial fino (10Base-2) com conectores BNC de 50 ohms."
    ],
    "answer": "Anel óptico determinístico de tempo real via placas VMIPMC-5579 e cabos de fibra óptica multimodo 62,5/125 µm com conectores SC, atingindo até 13,2 MB/s.",
    "explanation": "A rede RTNet é um anel óptico determinístico de tempo real interligando placas VMIPMC-5579 através de fibras ópticas multimodo 62,5/125 µm com conectores SC, operando com taxas de transferência de até 13,2 MB/s.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Equipamentos Interligados na Rede Ethernet: Quais equipamentos do SCMPA estão diretamente interligados na Rede Ethernet do sistema?",
    "options": [
      "Apenas as remotas RAA1 e RAA2 e os controladores Woodward 723.",
      "Todos os Módulos Básicos do CCM (MB1, MB2, MB3), o Módulo Básico do Passadiço (QMC) e a Impressora do sistema.",
      "Exclusivamente a impressora e o inversor de 400 Hz.",
      "Os painéis locais do HPC e os atuadores pneumáticos PGA."
    ],
    "answer": "Todos os Módulos Básicos do CCM (MB1, MB2, MB3), o Módulo Básico do Passadiço (QMC) e a Impressora do sistema.",
    "explanation": "A rede Ethernet do SCMPA interliga todos os Módulos Básicos do CCM (MB1, MB2, MB3), o Módulo Básico do Passadiço (QMC) e a Impressora do sistema.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Impressora do Sistema e Conexão de Rede: A impressora do SCMPA é utilizada para a emissão de relatórios operacionais e registros de alarmes. Qual é o modelo do equipamento e como ele se conecta à rede do navio?",
    "options": [
      "Impressora matricial de impacto conectada via porta paralela ECP no MB2.",
      "Impressora jato de tinta Epson Stylus Color 850, contendo um cartão eletrônico de interface de rede interno (modelo C82362) RJ45 10Base-T ligado à Ethernet.",
      "Impressora a laser HP LaserJet ligada por cabo USB à Remota de Boreste.",
      "Plotter térmica ligada via barramento RS-485 ao Passadiço."
    ],
    "answer": "Impressora jato de tinta Epson Stylus Color 850, contendo um cartão eletrônico de interface de rede interno (modelo C82362) RJ45 10Base-T ligado à Ethernet.",
    "explanation": "A impressora é o modelo jato de tinta Epson Stylus Color 850, equipada com o cartão eletrônico de rede interno modelo C82362 com terminação RJ45 10Base-T conectado diretamente ao HUB Ethernet.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Padrão de Cabeamento Ethernet: A montagem dos cabos de rede Ethernet do SCMPA obedece a padrões específicos de cabeamento estruturado. Qual cabo e conector são empregados nessa montagem?",
    "options": [
      "Cabos de par trançado metálico Categoria 5 (4 pares) com conectores RJ45 conforme norma EIA/TIA 568.",
      "Cabos coaxiais RG-58 com conectores BNC de solda.",
      "Cabos de fibra monomodo com conectores ST polidos.",
      "Fios telefônicos chatos de 2 vias com conectores RJ11."
    ],
    "answer": "Cabos de par trançado metálico Categoria 5 (4 pares) com conectores RJ45 conforme norma EIA/TIA 568.",
    "explanation": "A infraestrutura da rede Ethernet utiliza cabos de par trançado Categoria 5 (CAT 5 de 4 pares) com conectores RJ45 montados de acordo com o padrão EIA/TIA 568.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Chave Uplink no Hub do Passadiço: No Hub Ethernet do sistema, existe uma porta de conexão que permite o enlace de expansão (uplink) entre o CCM e o Passadiço. Como é configurada essa chave de operação no QMC?",
    "options": [
      "Chave posicionada no modo NORMAL na porta 1.",
      "Chave comutada para a posição UPLINK na porta 8 do Hub do QMC.",
      "Chave em posição BYPASS no conector de fibra.",
      "Chave seletora em posição LOOPBACK no rack VME."
    ],
    "answer": "Chave comutada para a posição UPLINK na porta 8 do Hub do QMC.",
    "explanation": "Para realizar a conexão em cascata entre os Hubs do CCM e do Passadiço, a chave seletora da porta 8 do Hub no QMC é comutada para a posição UPLINK.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Função do Hub de Fibra Óptica VMIACC-5594: O dispositivo VMIACC-5594 é empregado na rede de memória refletiva. Qual é sua função principal?",
    "options": [
      "Converter sinal Ethernet para RS-232 em rajada.",
      "HUB para fibra óptica com chaveamento automático para bypass de nós e monitoração da rede RTNet.",
      "Inversor de tensão contínua para alternada.",
      "Filtro de linha para supressão de ruído no barramento VME."
    ],
    "answer": "HUB para fibra óptica com chaveamento automático para bypass de nós e monitoração da rede RTNet.",
    "explanation": "O dispositivo VMIACC-5594 é um concentrador (HUB) óptico comutador que realiza o bypass automático de nós com defeito na rede RTNet, garantindo a continuidade do anel de dados.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Indicação de Falha no Cabo RX da Placa 5579: Como o software supervisório e os cartões de memória refletiva sinalizam localmente na placa VMIPMC-5579 uma falha no cabo RX de fibra óptica?",
    "options": [
      "LED verde aceso fixo e LED vermelho apagado.",
      "LED verde (Signal Detect - SD) aceso e LED vermelho (Fail) piscando.",
      "Todos os LEDs piscando na cor amarela.",
      "Apagamento completo de todos os indicadores visuais do cartão."
    ],
    "answer": "LED verde (Signal Detect - SD) aceso e LED vermelho (Fail) piscando.",
    "explanation": "Na placa VMIPMC-5579, a ocorrência de anomalia ou sinal instável no canal de recepção óptico (RX) é diagnosticada com o LED verde (Signal Detect) aceso e o LED vermelho (Fail) piscando.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Desconexão Total de Fibra Óptica na RTNet: Se ambos os cabos de fibra óptica de uma placa de memória refletiva forem desconectados ou romperem, qual alarme é gerado no sistema?",
    "options": [
      "Alarme de \"Sobretensão na Entrada\".",
      "Alarme de \"Falha na Memória Refletiva\" e indicação visual com símbolo/conexão em vermelho na tela.",
      "Alarme de \"Falta de Ar de Partida\".",
      "Desarme automático imediato do inversor de 400 Hz."
    ],
    "answer": "Alarme de \"Falha na Memória Refletiva\" e indicação visual com símbolo/conexão em vermelho na tela.",
    "explanation": "A desconexão completa dos cabos de fibra de uma placa gera o alarme de \"Falha na Memória Refletiva\", e na tela do supervisório a representação gráfica do nó e conexões passa para a cor vermelha.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Diagnóstico de Presença na Rede NT-NET: O software supervisório utilizado nas IHMs do SCMPA (Fix Dynamics / SCADAVIEW) executa diagnósticos na rede Ethernet (NT-NET). Como o sistema valida as estações ativas?",
    "options": [
      "Cada estação SCADA procura periodicamente na rede a presença das outras três estações de trabalho.",
      "Envia um sinal de interrupção física a cada 1 segundo para a impressora.",
      "Mede a resistência elétrica do cabo de rede CAT 5.",
      "Exige confirmação manual por senha do operador a cada hora."
    ],
    "answer": "Cada estação SCADA procura periodicamente na rede a presença das outras três estações de trabalho.",
    "explanation": "O software supervisório valida as conexões fazendo com que cada estação SCADA monitore e interrogue periodicamente a presença das outras três estações na rede Ethernet.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Consequências da Perda do HUB Ethernet do CCM: Caso ocorra a perda total do HUB Ethernet do CCM, quais funcionalidades ficam comprometidas no sistema?",
    "options": [
      "Perda imediata de todos os reguladores digitais Woodward 723.",
      "Perda da comunicação com as estações VIEW (Central e Passadiço), perda da impressora e da conexão de diagnóstico externo.",
      "Desligamento compulsório de todas as turbinas a gás.",
      "Congelamento permanente dos manômetros do painel local."
    ],
    "answer": "Perda da comunicação com as estações VIEW (Central e Passadiço), perda da impressora e da conexão de diagnóstico externo.",
    "explanation": "A falha do HUB Ethernet isola as estações que dependem da LAN para receber dados das SCADAs: perde-se a estação Central (MB2), a estação do Passadiço (QMC) e o acesso à impressora.",
    "topic": "Módulo 2: Redes de Comunicação (RTNet e Ethernet) e Periféricos"
  },
  {
    "question": "Regulação Dupla do MCP (Woodward 723 vs. PGA-EG): Cada Motor de Combustão Principal Diesel (MCP) conta com regulação dupla de velocidade. Quais são os dois reguladores empregados e qual é o regulador primário ativo?",
    "options": [
      "Woodward 723 (Digital) e PGA-EG (Pneumático); o 723 é o primário porque o SCMPA escolhe o menor set point e o PGA é mantido 10% acima.",
      "PGA-EG (Primário) e Woodward 723 (Reserva ajustado 20% abaixo).",
      "Regulador hidráulico UG-8 e regulador mecânico de contrapesos.",
      "Controlador PID da IHM e inversor de frequência escalar."
    ],
    "answer": "Woodward 723 (Digital) e PGA-EG (Pneumático); o 723 é o primário porque o SCMPA escolhe o menor set point e o PGA é mantido 10% acima.",
    "explanation": "O SCMPA aplica a regra do menor set point selecionado. O regulador pneumático PGA-EG fica regulado 10% acima do regulador eletrônico digital Woodward 723 para que este último seja o controlador primário em operação normal.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Modos de Atuação do SCA-HPC: O subsistema de controle do Passo do Hélice (HPC / SCA-HPC) opera a deflexão das pales. Quais são os três modos de atuação desse sistema?",
    "options": [
      "Modo Alto, Modo Médio e Modo Baixo.",
      "Automático (via IHM/DESSI), Remoto / Manual (no painel SCA do CCM) e Local (no painel local junto ao atuador).",
      "Modo Cruzeiro, Modo DEM e Modo Combate.",
      "Eletrônico, Hidráulico e Pneumático puro."
    ],
    "answer": "Automático (via IHM/DESSI), Remoto / Manual (no painel SCA do CCM) e Local (no painel local junto ao atuador).",
    "explanation": "O subsistema SCA-HPC possui 3 modos: Automático (calculado pelo SCMPA/DESSI), Remoto/Manual (comandado através do painel SCA no CCM) e Local (controlado no painel local junto ao atuador hidráulico no compartimento de máquinas).",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Condicionadores Especiais de Rotação (TT1 a TT9): Para converter a tensão trifásica fornecida pelos tacogeradores dos motores, turbinas e eixos em sinais analógicos de 0 a 10 VDC, o SCMPA utiliza condicionadores especiais. Quantos são esses condicionadores e quais seus códigos?",
    "options": [
      "2 condicionadores (CV0 e CV1).",
      "5 condicionadores especiais: TT1 (Diesel), TT3 (TP), TT4 (Compressor), TT6 (TG) e TT9 (Eixo).",
      "10 condicionadores de sinal tipo CSK.",
      "4 relês de proteção de frequência tipo RA2."
    ],
    "answer": "5 condicionadores especiais: TT1 (Diesel), TT3 (TP), TT4 (Compressor), TT6 (TG) e TT9 (Eixo).",
    "explanation": "Os 5 condicionadores especiais convertem os sinais trifásicos dos tacogeradores em sinais contínuos de 0 a 10 VDC: TT1 (Diesel - 15,28 Vrms), TT3 (TP - 35,21 Vrms), TT4 (Compressor - 30,4 Vrms), TT6 (TG - 60 Vrms) e TT9 (Eixo - 94 Vrms).",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Velocidade e Tempo Limite de Partida a Ar do MCP: Durante a sequência de partida automática de um MCP pelo SCMPA, qual é a velocidade de rotação e o tempo limite para que o ar de partida faça o motor virar?",
    "options": [
      "Rotação acima de 90 rpm em até 3 segundos após o acionamento da válvula de ar.",
      "Rotação de 500 rpm em 1 segundo.",
      "Rotação de 1500 rpm imediata.",
      "Rotação de ralanti de 300 rpm em 10 segundos."
    ],
    "answer": "Rotação acima de 90 rpm em até 3 segundos após o acionamento da válvula de ar.",
    "explanation": "Ao acionar a válvula solenoide de ar de partida, o sistema verifica se a rotação do motor atinge 90 rpm em até 3 segundos para confirmar que o ar está girando o motor.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Injeção e Confirmação de Partida do MCP: Após o motor MCP atingir 90 rpm na partida com ar, qual é a próxima etapa executada pelo sistema de controle?",
    "options": [
      "Desligamento imediato das bombas de óleo de reserva.",
      "Liberação da válvula de combustível, aguardando que o motor atinja 500 rpm em até 6 segundos para confirmar a partida.",
      "Acoplamento forçado da embreagem SSS.",
      "Enchimento do acoplamento fluido no nível máximo."
    ],
    "answer": "Liberação da válvula de combustível, aguardando que o motor atinja 500 rpm em até 6 segundos para confirmar a partida.",
    "explanation": "Ao atingir 90 rpm, o SCMPA comanda a liberação do combustível; o motor deve inflamar e acelerar até a velocidade de corte/ralanti de 500 rpm dentro do prazo máximo de 6 segundos.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Seleção Automática de Sensores Redundantes: No SCMPA, os sensores de rotação das turbinas (MT1 e MT2) e de posição de passo do HPC (P8A e P8B) são redundantes. Qual é a regra de seleção automática do sensor ativo?",
    "options": [
      "O operador precisa comutar manualmente uma chave física no painel.",
      "Se ambos estiverem confiáveis (com \"tick\"), o SCMPA seleciona o sensor principal (MT1 ou P8A), alterando a cor do título de cinza escuro para verde.",
      "O sensor secundário (MT2 ou P8B) tem prioridade permanente.",
      "O sistema alterna entre os dois sensores a cada 5 minutos."
    ],
    "answer": "Se ambos estiverem confiáveis (com \"tick\"), o SCMPA seleciona o sensor principal (MT1 ou P8A), alterando a cor do título de cinza escuro para verde.",
    "explanation": "Quando ambos os sensores estão íntegros e validados com o indicador \"tick\", o SCMPA seleciona o sensor principal (MT1 ou P8A), sinalizando sua condição ativa com o título na cor verde.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Curva da Tabela de DESSI: A demanda de potência e manobra do navio é regida pelo indicador DESSI (Desired Effective Shaft Speed Indicator). O que representa a curva da \"Tabela de DESSI\" na IHM?",
    "options": [
      "A contagem de horas trabalhadas de cada motor.",
      "O lugar geométrico de todos os pares possíveis de set-points (Rotação X Passo) correspondentes a um determinado DESSI solicitado.",
      "A temperatura média dos gases de exaustão da turbina.",
      "A pressão de descarga das bombas de óleo lubrificante."
    ],
    "answer": "O lugar geométrico de todos os pares possíveis de set-points (Rotação X Passo) correspondentes a um determinado DESSI solicitado.",
    "explanation": "A Tabela de DESSI define a curva de compatibilização hidrodinâmica ideal, representando o lugar geométrico de todos os pares de set-points possíveis (Rotação do Motor e Passo da Hélice) para cada valor de DESSI.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Alarme de Excesso de Tempo de Partida da TG: Se uma etapa da sequência de partida da Turbina a Gás (TG) exceder o tempo limite estabelecido nos parâmetros do supervisório, como a IHM alerta o operador?",
    "options": [
      "Dispara o corte de combustível do gerador de emergência.",
      "Apresenta a janela de aviso com a mensagem \"Excesso de Tempo de Partida\" e interrompe o processo.",
      "Reduz automaticamente o passo do hélice para ré máxima.",
      "Alterna o SCADA ativo para o modo de manutenção."
    ],
    "answer": "Apresenta a janela de aviso com a mensagem \"Excesso de Tempo de Partida\" e interrompe o processo.",
    "explanation": "Se qualquer estágio do sequenciamento de partida da turbina a gás estourar o limite de tempo configurado, a IHM apresenta a janela com a mensagem \"Excesso de Tempo de Partida\" e interrompe a sequência por segurança.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Pré-condições para Acoplamento do MCP: Para que um motor Diesel (MCP) possa ser selecionado e acoplado ao eixo, quais pré-condições básicas devem ser satisfeitas?",
    "options": [
      "Motor ligado, cremalheira na posição mínima, acoplamento fluido vazio e ausência de bloqueios de partida.",
      "Motor desligado com embreagem travada em ré.",
      "Turbina a gás pronta em velocidade máxima de combate.",
      "Reservatório de aguada completamente cheio."
    ],
    "answer": "Motor ligado, cremalheira na posição mínima, acoplamento fluido vazio e ausência de bloqueios de partida.",
    "explanation": "Para que o MCP possa ser acoplado, as condições essenciais incluem: motor em funcionamento de ralanti, cremalheira na posição de combustível mínimo, acoplamento fluido esvaziado e ausência de intertravamentos de trip/bloqueio.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Função dos Moderadores de Passo e Cremalheira: Qual é a função do \"Moderador de Passo\" e do \"Moderador de Cremalheira\" no sistema de controle do SCMPA?",
    "options": [
      "Aumentar a velocidade do motor acima dos limites de projeto em emergências.",
      "Limitar a taxa de variação da demanda e proteger o maquinário contra sobrecargas mecânicas e térmicas bruscas.",
      "Drenar o óleo lubrificante do cárter para o tanque de dreno.",
      "Desligar os ventiladores exaustores do compartimento da TG."
    ],
    "answer": "Limitar a taxa de variação da demanda e proteger o maquinário contra sobrecargas mecânicas e térmicas bruscas.",
    "explanation": "Os moderadores controlam a taxa máxima de rampa na alteração de combustível (cremalheira) e ângulo de pá (passo), prevenindo sobrecargas térmicas, excesso de torque e fumaça preta em acelerações rápidas.",
    "topic": "Módulo 3: Controladores da Propulsão (MCP, TG e HPC)"
  },
  {
    "question": "Especificações do Inversor TCI 1.0-NAR2C: O inversor estático de tensão do SCMPA (modelo TCI 1.0-NAR2C, fabricante Tectrol) possui especificações elétricas bem definidas. Quais são seus valores de entrada e saída?",
    "options": [
      "Entrada de 115 VAC / 60 Hz e saída de 24 VDC (potência 500 VA).",
      "Entrada de 50 VDC (faixa de 43,75 a 58,75 VDC) e saída de 115 VAC / 400 Hz (potência de 1000 VA).",
      "Entrada de 220 VAC trifásico e saída de 12 VDC.",
      "Entrada de 24 VDC e saída de 220 VAC / 60 Hz."
    ],
    "answer": "Entrada de 50 VDC (faixa de 43,75 a 58,75 VDC) e saída de 115 VAC / 400 Hz (potência de 1000 VA).",
    "explanation": "O inversor estático Tectrol TCI 1.0-NAR2C é alimentado pela tensão de 50 VDC do navio (faixa de 43,75 a 58,75 VDC) e entrega 115 VAC a 400 Hz com potência nominal de 1000 VA.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Sinalizações de Falha do Inversor de 400 Hz: Quais são os 4 alertas/sinalizações de falha indicados no painel do Inversor estático de 400 Hz?",
    "options": [
      "Defeito no inversor, Sobrecarga na saída, Subtensão CC na entrada e Temperatura alta.",
      "Falta de água, Pressão de óleo, Falha de rede e Porta aberta.",
      "Excesso de Rotação, Falha de CPU, Cabo desconectado e Bateria fraca.",
      "Frequência alta, Disjuntor aberto, Fusível queimado e Erro de paridade."
    ],
    "answer": "Defeito no inversor, Sobrecarga na saída, Subtensão CC na entrada e Temperatura alta.",
    "explanation": "Os 4 LEDs de alarme no painel frontal do inversor indicam: Defeito no inversor, Sobrecarga na saída, Subtensão CC na entrada e Temperatura alta.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Alimentação Ininterrupta de 115 VAC / 60 Hz: Como é fornecida a alimentação de 115 VAC / 60 Hz ininterrupta para os Módulos Básicos e Remotas do SCMPA?",
    "options": [
      "Diretamente do gerador de cola da máquina principal sem filtragem.",
      "Através do Sistema No-Break (UPS) de 10 KVA alimentado pela rede do navio ou baterias.",
      "Por alternadores de automóvel acoplados aos MCPs.",
      "Por pilhas secas alcalinas instaladas dentro dos consoles."
    ],
    "answer": "Através do Sistema No-Break (UPS) de 10 KVA alimentado pela rede do navio ou baterias.",
    "explanation": "A alimentação estabilizada e sem interrupção de 115 VAC / 60 Hz provém do sistema No-Break (UPS) de 10 KVA, que alimenta as CPUs, periféricos e racks VME.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Diferença de No-Breaks entre Fragata Independência e Liberal: Qual é a diferença construtiva entre o sistema No-Break da Fragata Independência e o da Fragata Liberal?",
    "options": [
      "O da Independência tem potência de 50 KVA e o da Liberal de 5 KVA.",
      "Ambas possuem No-Break de 10 KVA com 20 min de autonomia, mas a Independência utiliza 3 módulos externos de baterias e a Liberal utiliza 1 módulo externo.",
      "O da Liberal opera em corrente contínua pura e o da Independência não possui baterias.",
      "A Liberal não utiliza No-Break nas remotas."
    ],
    "answer": "Ambas possuem No-Break de 10 KVA com 20 min de autonomia, mas a Independência utiliza 3 módulos externos de baterias e a Liberal utiliza 1 módulo externo.",
    "explanation": "Ambos os no-breaks possuem capacidade de 10 KVA e garantem 20 minutos de autonomia, mas a Fragata Independência utiliza 3 módulos externos de baterias e a Liberal utiliza 1 módulo externo.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Modos de Operação do No-Break (UPS): Quais são os 3 modos de operação de um sistema No-Break (UPS) industrial no navio?",
    "options": [
      "Modo Alto, Modo Médio e Modo Baixo.",
      "Modo Normal (Rede alimentando e carregando), Modo Bateria (Inversor alimentado pelas baterias) e Modo Bypass (Rede direta alimentando a carga).",
      "Modo Local, Modo Remoto e Modo Teste.",
      "Modo Carga, Modo Descarga e Modo Curto-circuito."
    ],
    "answer": "Modo Normal (Rede alimentando e carregando), Modo Bateria (Inversor alimentado pelas baterias) e Modo Bypass (Rede direta alimentando a carga).",
    "explanation": "Os 3 modos operacionais do UPS são: Modo Normal (alimenta a carga e recarrega as baterias), Modo Bateria (inversor alimentado exclusivamente pelo banco de baterias) e Modo Bypass (alimentação direta da rede sem passar pelo inversor).",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Aplicação da Tensão de 50 VDC: Para que serve a tensão de 50 VDC gerada pelo sistema de baterias/retificadores do navio no SCMPA?",
    "options": [
      "Iluminação das lâmpadas fluorescentes do Passadiço.",
      "Alimentar a entrada do inversor estático de 400 Hz e atuar como alimentação de contingência para circuitos de controle.",
      "Acionar a partida elétrica dos motores auxiliares MCA.",
      "Alimentar a impressora jato de tinta Epson."
    ],
    "answer": "Alimentar a entrada do inversor estático de 400 Hz e atuar como alimentação de contingência para circuitos de controle.",
    "explanation": "A tensão contínua de 50 VDC do navio alimenta o Inversor Estático de 400 Hz e serve de barramento de segurança para circuitos de comando e intertravamentos de proteção.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Função dos Fotoacopladores FA2 e FA5: Qual é a função dos fotoacopladores (modelos FA2 de 24 VDC e FA5 de 50 VDC) nas remotas do SCMPA?",
    "options": [
      "Converter frequência em tensão proporcional.",
      "Promover a isolação galvânica/óptica entre os sinais de entrada digital provenientes do campo e os circuitos eletrônicos internos do rack VME.",
      "Medir a temperatura interna do gabinete da remota.",
      "Controlar a velocidade do exaustor de ar do console."
    ],
    "answer": "Promover a isolação galvânica/óptica entre os sinais de entrada digital provenientes do campo e os circuitos eletrônicos internos do rack VME.",
    "explanation": "Os fotoacopladores FA2 (24 VDC) e FA5 (50 VDC) fornecem isolação galvânica óptica, protegendo as placas do Rack VME contra transientes e ruídos da fiação de campo.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Aplicação dos Condicionadores CSK e CST: Em relação aos condicionadores de sinal analógico (CV1, CA4, CSK, CST, CSR), qual é a aplicação dos modelos CSK e CST?",
    "options": [
      "Medição de pressão hidráulica de 0 a 10 bar.",
      "Condicionadores para sensores termopar tipo K (CSK) e tipo T (CST) para medição de temperatura (0 a 33,3 mV).",
      "Medição de corrente alternada de 4 a 20 mA.",
      "Contagem de impulsos do horímetro digital."
    ],
    "answer": "Condicionadores para sensores termopar tipo K (CSK) e tipo T (CST) para medição de temperatura (0 a 33,3 mV).",
    "explanation": "Os módulos CSK e CST condicionam sinais milivolt de termopares para monitoração térmica: CSK para termopares tipo K e CST para termopares tipo T (faixa de 0 a 33,3 mV).",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Alimentação de Alarme e Telas no CCM: Como é feita a alimentação da buzina de alarme e iluminação das telas nos módulos do CCM?",
    "options": [
      "Recebem 115 VAC fornecidos pelo No-Break e 24 VDC das baterias/fontes reguladas internas.",
      "Funcionam apenas com energia solar via painéis do convés.",
      "Dependem de geradores manuais de manivela.",
      "Utilizam tensão de 440 VAC trifásica direta."
    ],
    "answer": "Recebem 115 VAC fornecidos pelo No-Break e 24 VDC das baterias/fontes reguladas internas.",
    "explanation": "Os consoles utilizam 115 VAC estabilizado pelo No-Break para alimentar os monitores de vídeo e CPUs, e 24 VDC das fontes reguladas e baterias para buzinas e sinalizadores.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Falha nas Fontes de 24 VDC da Remota: Em caso de falha nas fontes internas de 24 VDC (Fontes 1/2, 3/4 ou 5/6) de uma Unidade Remota, qual alarme e condição são ativados no supervisório?",
    "options": [
      "O sistema ignora a falha e mantém a operação.",
      "É ativado o alarme de \"Falha de Fontes\" na IHM (indicador amarelo aceso) e o subsistema pode ser levado ao estado de FAIL-SET.",
      "A impressora imprime um relatório de manutenção em branco.",
      "A tela comuta automaticamente para o Modo Noturno."
    ],
    "answer": "É ativado o alarme de \"Falha de Fontes\" na IHM (indicador amarelo aceso) e o subsistema pode ser levado ao estado de FAIL-SET.",
    "explanation": "A queda de redundância nas fontes de 24 VDC gera alarme de \"Falha de Fontes\" com indicação em amarelo na tela; falhas que afetem saídas críticas podem induzir o estado de Fail-Set.",
    "topic": "Módulo 4: Sistemas de Alimentação Elétrica, Inversores e No-Breaks"
  },
  {
    "question": "Classes de Acesso no SCMPA: Quais são as 4 classes de acesso de usuários cadastradas no SCMPA?",
    "options": [
      "Almirante, Comandante, Oficial e Praça.",
      "Operadores do Passadiço, Operadores do CCM, Supervisores e Manutenção (ou Engenharia).",
      "Administrador, Convidado, Teste e Bloqueado.",
      "Piloto, Maquinista, Eletricista e Radioperador."
    ],
    "answer": "Operadores do Passadiço, Operadores do CCM, Supervisores e Manutenção (ou Engenharia).",
    "explanation": "O sistema define 4 perfis hierárquicos: 1. Operadores do Passadiço, 2. Operadores do CCM, 3. Supervisores e 4. Manutenção (ou Engenharia).",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Acesso à Área de Manutenção: O que é necessário para acessar a área de funções restritas de Manutenção no SCMPA?",
    "options": [
      "Apenas clicar no botão \"Manutenção\" em qualquer tela.",
      "Login com senha de perfil Supervisor ou Manutenção e a inserção da chave física de segurança no modo Manutenção no painel da Remota.",
      "Desligar o No-Break e religar após 5 segundos.",
      "Autorização verbal do Passadiço via fonoclama."
    ],
    "answer": "Login com senha de perfil Supervisor ou Manutenção e a inserção da chave física de segurança no modo Manutenção no painel da Remota.",
    "explanation": "Para acessar as funções de manutenção é indispensável digitar a senha de Supervisor/Manutenção e inserir e girar a chave física de segurança para o modo Manutenção na Remota.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Funções de Manutenção do Perfil Supervisor: Para os usuários logados com perfil de Supervisor, o menu de Manutenção limita o acesso às quatro primeiras funções. Quais são elas?",
    "options": [
      "Liga Bombas, Desliga TG, Zera Horímetro e Ajusta DESSI.",
      "Módulo Teste - Boreste, Módulo Teste - Bombordo, Configuração Estações e Ver Tabelas.",
      "Formatar HD, Trocar IP, Teste de Carga e Backup.",
      "Modo Cruzeiro, Modo DEM, Modo Combate e FINDEP."
    ],
    "answer": "Módulo Teste - Boreste, Módulo Teste - Bombordo, Configuração Estações e Ver Tabelas.",
    "explanation": "Com senha de Supervisor, o menu de manutenção libera apenas 4 funções: Módulo Teste - Boreste, Módulo Teste - Bombordo, Configuração Estações e Ver Tabelas.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Configurações Operacionais no Módulo de Teste: A janela \"Módulo de Teste\" permite colocar o sistema da propulsão em 4 configurações operacionais. Quais são essas configurações?",
    "options": [
      "Alto, Médio, Baixo e Desligado.",
      "Normal, Engine Test (Teste do Motor), CPP Test (Teste do Passo/HPC) e Manual.",
      "Cruzeiro, DEM, Combate e Emergência.",
      "Partida, Parada, Ralanti e Carga."
    ],
    "answer": "Normal, Engine Test (Teste do Motor), CPP Test (Teste do Passo/HPC) e Manual.",
    "explanation": "O Módulo de Teste disponibiliza 4 configurações operacionais de validação: Normal, Engine Test (teste do motor), CPP Test (teste do passo) e Manual.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Modos Operacionais de Operação do Navio: Quais são os 3 Modos Operacionais do navio previstos no SCMPA no que tange à alocação de operadores nos consoles?",
    "options": [
      "Modo Manhã, Modo Tarde e Modo Noite.",
      "Modo Cruzeiro (1 Passadiço, 1 Central CCM), Modo D.E.M. (1 Passadiço, 3 no CCM - BB, Central, BE) e Modo Combate (mesmo de D.E.M., com acionamento direto de emergências sem confirmação).",
      "Modo Velocidade, Modo Econômico e Modo Parado.",
      "Modo Manual, Modo Semi-automático e Modo Automático."
    ],
    "answer": "Modo Cruzeiro (1 Passadiço, 1 Central CCM), Modo D.E.M. (1 Passadiço, 3 no CCM - BB, Central, BE) e Modo Combate (mesmo de D.E.M., com acionamento direto de emergências sem confirmação).",
    "explanation": "Os 3 Modos de Operação do navio são: Modo Cruzeiro (1 operador no Passadiço e 1 no CCM Central), Modo D.E.M. (1 no Passadiço e 3 no CCM) e Modo Combate (equipe de D.E.M., com ações críticas sem necessidade de diálogo de confirmação).",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Diferença do Modo Combate em Relação ao Modo D.E.M.: Qual é a principal diferença operacional do Modo Combate em relação ao Modo D.E.M.?",
    "options": [
      "No Modo Combate os motores funcionam sem óleo lubrificante.",
      "No Modo Combate as teclas funcionais de emergência (ex: Tudo Adiante, Tudo Atrás) possuem acionamento direto, dispensando a janela de confirmação do operador na IHM.",
      "No Modo Combate a tela fica totalmente apagada para visão noturna.",
      "No Modo Combate o Passadiço perde o controle da manobra."
    ],
    "answer": "No Modo Combate as teclas funcionais de emergência (ex: Tudo Adiante, Tudo Atrás) possuem acionamento direto, dispensando a janela de confirmação do operador na IHM.",
    "explanation": "No Modo Combate, comandos vitais e de emergência nas teclas funcionais atuam instantaneamente, suprimindo caixas de diálogo e pedidos de confirmação na IHM para máxima agilidade.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Rebalanceamento de Funções na Falha da Estação Central (MB2): Caso ocorra uma falha na Estação Central (MB2) do CCM durante a operação no Modo Cruzeiro, para qual estação suas funções são automaticamente rebalançadas?",
    "options": [
      "Para o console do Passadiço (QMC).",
      "Para a estação de Boreste (MB3) do CCM.",
      "Para a impressora do sistema.",
      "O sistema encerra a operação de todas as máquinas."
    ],
    "answer": "Para a estação de Boreste (MB3) do CCM.",
    "explanation": "Em Modo Cruzeiro, se a estação Central (MB2) falhar, suas responsabilidades e telas são automaticamente transferidas para a estação de Boreste (MB3).",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Falha Simultânea das Estações SCADA MB1 e MB3: Se ocorrer a falha simultânea das duas estações tipo SCADA (MB1-Bombordo e MB3-Boreste), qual será o efeito no SCMPA?",
    "options": [
      "A estação Central assume a comunicação direta com as remotas.",
      "Todo o sistema de IHM torna-se inoperante, pois faltam as únicas estações capazes de se comunicar diretamente com as remotas.",
      "O Passadiço assume o controle via rede de rádio.",
      "O navio entra em modo de posicionamento dinâmico."
    ],
    "answer": "Todo o sistema de IHM torna-se inoperante, pois faltam as únicas estações capazes de se comunicar diretamente com as remotas.",
    "explanation": "Apenas MB1 e MB3 possuem as interfaces de memória refletiva para leitura/escrita direta nas remotas. Sua perda simultânea invalida a visualização e controle de todo o sistema de IHM.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Conceito e Finalidade do Estado de FAIL-SET: O que é o estado de FAIL-SET (Controle Falhas) no SCMPA e qual a sua finalidade?",
    "options": [
      "É o desligamento imediato e definitivo de todos os geradores do navio.",
      "É o congelamento de segurança dos set-points e atuadores na última posição válida mantida imediatamente antes da falha grave.",
      "É a inversão do sentido de rotação dos eixos propulsores.",
      "É o disparo de água na praça de máquinas para extinção de incêndio."
    ],
    "answer": "É o congelamento de segurança dos set-points e atuadores na última posição válida mantida imediatamente antes da falha grave.",
    "explanation": "O Fail-Set é uma medida de segurança passiva do SCMPA que congela os sinais de comando e os atuadores na última posição mantida antes da ocorrência da falha grave.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Procedimento em Falha da CPU da Remota: Na ocorrência de uma falha completa em uma Unidade Remota (perda de CPU/memória), qual deve ser o procedimento imediato do operador no CCM para manter o controle das máquinas?",
    "options": [
      "Inserir a chave física de segurança na posição DESL e reiniciar o No-Break.",
      "Passar a operação da TG para manual local (no PLTG), o HPC para remoto/manual (no painel SCA) e o Diesel para remoto/manual (no regulador Woodward 723).",
      "Chamar a assistência técnica do fabricante via telefone satelital.",
      "Desconectar os cabos da impressora e ligar no Passadiço."
    ],
    "answer": "Passar a operação da TG para manual local (no PLTG), o HPC para remoto/manual (no painel SCA) e o Diesel para remoto/manual (no regulador Woodward 723).",
    "explanation": "Com a falha da CPU da remota, a tela correspondente apaga/fica preta. O operador deve assumir imediatamente: a TG em manual local no PLTG, o HPC no painel remoto/manual SCA e o motor Diesel no regulador Woodward 723.",
    "topic": "Módulo 5: Segurança, Níveis de Acesso, Falhas e Emergências"
  },
  {
    "question": "Senhas de Acesso no Terminal Hand-Held: Para alterar ou consultar a lista de parâmetros internos do regulador eletrônico digital Woodward 723 PLUS DCS por meio do programador portátil (Hand-Held Programmer), quais são os valores numéricos configurados nas senhas ENABLE CONFIGURE e ENABLE SERVICE, respectivamente?",
    "options": [
      "723 e 723.",
      "1113 e 1111.",
      "2536 e 1000.",
      "4000 e 5000."
    ],
    "answer": "1113 e 1111.",
    "explanation": "Na Tabela 3.16 (Senha) do manual do SCMPA, os valores configurados no Hand-Held Programmer são: ENABLE CONFIGURE = 1113 e ENABLE SERVICE = 1111 (sendo o default de fábrica 723 em ambos).",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Configuração do Número de Pulsos e Rotação do MCP: Na tela ENGINE SPEED do programador Hand-Held, a contagem de pulsos por revolução dos sensores magnéticos de rotação (MPU) foi reconfigurada em relação ao padrão de fábrica (default de 155). Qual é o valor adotado nos prompts PULSES/REV #1 e PULSES/REV #2 para os MCPs?",
    "options": [
      "30 pulsos/rev.",
      "60 pulsos/rev.",
      "100 pulsos/rev.",
      "120 pulsos/rev."
    ],
    "answer": "60 pulsos/rev.",
    "explanation": "Conforme a Tabela 3.17 (Velocidade do motor), os prompts PULSES/REV #1 e PULSES/REV #2 foram configurados para 60 pulsos/rev (o padrão de fábrica original da Woodward era 155).",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Parametrização da Saída de Corrente do Atuador: No menu FINAL DRIVER do Woodward 723, a atuação da corrente de saída do atuador foi invertida para garantir a segurança da cremalheira do motor Diesel. Quais são os valores ajustados nos prompts ACTUATOR mA @ 0%, ACTUATOR mA @ 100% e REVERSE ACTING?",
    "options": [
      "10 mA, 180 mA e FALSE.",
      "0 mA, 200 mA e FALSE.",
      "160 mA, 20 mA e TRUE.",
      "4 mA, 20 mA e TRUE."
    ],
    "answer": "160 mA, 20 mA e TRUE.",
    "explanation": "De acordo com a Tabela 3.18 (Atuador final), a calibração de saída utiliza: ACTUATOR mA @ 0% = 160 mA, ACTUATOR mA @ 100% = 20 mA e REVERSE ACTING? = TRUE para assegurar corte de injeção em segurança.",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Alteração da Entrada Digital TB30 no Woodward 723: Originalmente, a entrada digital da borneira TB30 do Woodward 723 era destinada ao comando INCREASE SPEED/LOAD. Como essa entrada foi modificada e reaproveitada no SCMPA?",
    "options": [
      "Para receber o sinal da chave de parada de emergência do Passadiço.",
      "Para receber a proteção adicional de Filtro de Óleo do Motor Obstruído.",
      "Para acionar o aquecedor de combustível de caldeirinha.",
      "Para comutar o sistema para o modo de manobra silenciosa."
    ],
    "answer": "Para receber a proteção adicional de Filtro de Óleo do Motor Obstruído.",
    "explanation": "Por não ser utilizada em sua função original, a entrada digital TB30 foi reaproveitada no SCMPA para receber o sinal do pressostato diferencial de Proteção de Filtro de Óleo do Motor Obstruído.",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Alteração da Entrada Digital TB32 no Woodward 723: Na borneira TB32 do Woodward 723, a especificação original do fabricante previa o sinal de CLUTCH ENGAGED (embreagem engrazada). Qual sinal proveniente do campo foi escolhido por conveniência na aplicação do SCMPA?",
    "options": [
      "Sinal de Válvula de Ar de Partida Aberta.",
      "Sinal de Acoplamento Fluido Cheio.",
      "Sinal de Pressão Alta no Cárter.",
      "Sinal de Catraca do Eixo Engatada."
    ],
    "answer": "Sinal de Acoplamento Fluido Cheio.",
    "explanation": "O sinal de campo utilizado na borneira TB32 do regulador 723 é o sinal de Acoplamento Fluido Cheio, selecionado por conveniência técnica em substituição ao sinal de embreagem engrazada.",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Alteração da Entrada Analógica TB48/TB49 no Woodward 723: As entradas analógicas da borneira TB48 e TB49 do Woodward 723 (CHARGE AIR PRESSURE) foram modificadas na aplicação do navio. Qual grandeza física passou a ser monitorada nessa entrada para proteção do motor?",
    "options": [
      "Pressão do Óleo Lubrificante da Caixa Redutora.",
      "Temperatura do Ar de Admissão (proteção LBG contra temperatura alta de entrada).",
      "Nível do Tanque de Dreno de Óleo Combustível.",
      "Tensão do Banco de Baterias de 50 VDC."
    ],
    "answer": "Temperatura do Ar de Admissão (proteção LBG contra temperatura alta de entrada).",
    "explanation": "As entradas analógicas TB48 e TB49 foram adaptadas para monitorar a Temperatura do Ar de Admissão (em vez da pressão), atuando na proteção LBG do motor contra ar de admissão superaquecido.",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Faixa de Corrente da Saída do Atuador (TB21 e TB22): Qual é a faixa de corrente fornecida pelos terminais TB21 e TB22 (ACTUATOR OUTPUT) da placa do Woodward 723 diretamente para a bobina do atuador do motor Diesel no campo?",
    "options": [
      "0 a 20 mA.",
      "4 a 20 mA.",
      "0 a 200 mA.",
      "0 a 10 VDC."
    ],
    "answer": "0 a 200 mA.",
    "explanation": "Os terminais TB21 e TB22 (ACTUATOR OUTPUT) fornecem uma saída de corrente de 0 a 200 mA (configurada por jumper de hardware) para comandar o atuador do motor Diesel no campo.",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Condição para Reset de Falha do MPU no Terminal RUN/STOP (TB29): A entrada digital TB29 (RUN/STOP) permite dar o comando de fechamento do atuador e atua como reset de falhas dos sensores de velocidade MPU. Qual condição de frequência deve ser satisfeita para que esse reset funcione?",
    "options": [
      "A frequência dos sensores MPU deve estar abaixo de 350 Hz e o período de parada (Rundown Time) ter terminado.",
      "A frequência deve estar acima de 2000 Hz em regime permanente.",
      "O motor deve estar operando em carga máxima com o acoplamento vazio.",
      "A chave de manutenção da remota deve estar na posição DESL."
    ],
    "answer": "A frequência dos sensores MPU deve estar abaixo de 350 Hz e o período de parada (Rundown Time) ter terminado.",
    "explanation": "A função de reset de falhas dos sensores magnéticos (MPU) pelo contato TB29 só tem validade se a rotação do motor estiver abaixo de 350 Hz e o tempo de parada (Rundown Time Period) tiver finalizado.",
    "topic": "Parametrização do Woodward 723 e Terminal Hand-Held"
  },
  {
    "question": "Função do Cartão Adaptador 4L0134SKM no Atuador Elétrico: O Cartão Adaptador 4L0134SKM foi desenvolvido especificamente pela SKM para ser instalado no interior do Atuador Elétrico do hélice de passo (HPC). Qual é a sua função primária?",
    "options": [
      "Converter a tensão de 115 VAC em 400 Hz para alimentar o motor do atuador.",
      "Permitir a seleção externa entre os modos Automático e Manual, simulando a posição \"Down\" na Switch 7 e \"Up\" na Switch 8 quando em automático (e invertendo em manual).",
      "Drenar o óleo hidráulico da caixa redutora em caso de sobrepressão.",
      "Medir a rotação do eixo através de um captador magnético redundante."
    ],
    "answer": "Permitir a seleção externa entre os modos Automático e Manual, simulando a posição \"Down\" na Switch 7 e \"Up\" na Switch 8 quando em automático (e invertendo em manual).",
    "explanation": "O Cartão Adaptador 4L0134SKM permite a seleção remota externa dos modos Automático e Manual no interior do atuador, simulando as posições das chaves Switch 7 e Switch 8.",
    "topic": "Cartões do Subsistema SCA-HPC e Atuador Elétrico"
  },
  {
    "question": "Função e Sinal de Fail-Set no Cartão Local 4L0128SKM: No subsistema de controle do passo (SCA-HPC), a função de Fail-Set é implementada no Cartão do Painel de Controle Local 4L0128SKM. Como esse cartão reage quando ocorre um evento de Fail-Set?",
    "options": [
      "Aumenta a saída para 20 mA forçando o hélice para ré máxima.",
      "Ocorre o corte da tensão de 50 VDC no borne de entrada, fazendo o cartão cortar o sinal de saída e congelar o passo na última posição mantida.",
      "Zera a posição do atuador elétrico e desliga a bomba hidráulica do HPC.",
      "Dispara o sinal de teste de lâmpadas do painel do Passadiço."
    ],
    "answer": "Ocorre o corte da tensão de 50 VDC no borne de entrada, fazendo o cartão cortar o sinal de saída e congelar o passo na última posição mantida.",
    "explanation": "Ao ocorrer Fail-Set, a interrupção da tensão de 50 VDC no cartão 4L0128SKM provoca o corte imediato do sinal de comando para o atuador elétrico, congelando as pás do hélice na última posição mantida.",
    "topic": "Cartões do Subsistema SCA-HPC e Atuador Elétrico"
  },
  {
    "question": "Configuração dos Jumpers no Cartão Local do HPC: Para a correta integração do Cartão de Controle Local do HPC com o SCMPA, qual é a configuração obrigatória dos jumpers de HW (J1 a J5) e o efeito sobre os potenciômetros P1 e P2?",
    "options": [
      "Jumpers J1, J3 e J5 fechados; J2 e J4 abertos (potenciômetros operam como ganho).",
      "Jumpers J1, J3 e J5 ABERTOS; J2 e J4 FECHADOS (os potenciômetros P1 e P2 perdem a função).",
      "Todos os jumpers fechados (potenciômetros ajustam a rotação de ralanti).",
      "Todos os jumpers abertos (potenciômetros definem a faixa de 0 a 10 V)."
    ],
    "answer": "Jumpers J1, J3 e J5 ABERTOS; J2 e J4 FECHADOS (os potenciômetros P1 e P2 perdem a função).",
    "explanation": "A configuração padronizada para integração com o SCMPA requer jumpers J1, J3 e J5 abertos e J2 e J4 fechados. Nessa configuração, os potenciômetros P1 e P2 perdem a função de ajuste.",
    "topic": "Cartões do Subsistema SCA-HPC e Atuador Elétrico"
  },
  {
    "question": "Relação de Sinal de Corrente (mA) X Ângulo do Passo no HPC: Na integração do SCA-HPC com o SCMPA, qual é a correspondência exata entre o sinal de corrente gerado pelo sistema de controle e a deflexão angular do passo da hélice?",
    "options": [
      "4 mA corresponde ao passo zero (0°) e 20 mA ao máximo a vante (+32°).",
      "4 mA corresponde ao Máximo A Vante (+32°) e 20 mA ao Máximo A Ré (-17,45°).",
      "0 mA corresponde a ré máxima (-17,45°) e 10 mA a vante máximo (+32°).",
      "4 mA corresponde ao modo de manobra silenciosa e 20 mA ao modo de emergência."
    ],
    "answer": "4 mA corresponde ao Máximo A Vante (+32°) e 20 mA ao Máximo A Ré (-17,45°).",
    "explanation": "O sinal de controle de corrente da malha de passo define 4 mA para a posição de Máximo a Vante (+32 graus) e 20 mA para a posição de Máximo a Ré (-17,45 graus).",
    "topic": "Cartões do Subsistema SCA-HPC e Atuador Elétrico"
  },
  {
    "question": "Sinalização do LED LD1 no Cartão Local 4L0128SKM: No Cartão de Controle Local do HPC (4L0128SKM), qual estado do LED LD1 indica o funcionamento normal da alimentação e dos circuitos de entrada?",
    "options": [
      "LED LD1 apague completamente.",
      "LED LD1 acionado/aceso (indicando condição normal de funcionamento).",
      "LED LD1 pisca na cor amarela indicando falha na CPU.",
      "LED LD1 acende apenas quando o modo manual local é selecionado."
    ],
    "answer": "LED LD1 acionado/aceso (indicando condição normal de funcionamento).",
    "explanation": "O LED LD1 no cartão local 4L0128SKM permanece continuamente acionado/aceso quando a alimentação e os sinais de entrada estão em sua condição normal de funcionamento.",
    "topic": "Cartões do Subsistema SCA-HPC e Atuador Elétrico"
  },
  {
    "question": "Pinagem do Cabo de Vídeo do Monitor BARCO: O cabo de vídeo especial construído pelo CTMSP interliga a placa de CPU ao monitor de vídeo BARCO. Ele utiliza um conector DB15 VGA macho em uma extremidade e conectores BNC coaxiais de 75 ohms na outra. Qual é a distribuição dos sinais nos pinos do DB15?",
    "options": [
      "Pinos 1, 2 e 3 para alimentação de 24 VDC; pinos 13 e 14 para rede Ethernet.",
      "Pino 1 (Vermelho - R), Pino 2 (Verde - G), Pino 3 (Azul - B), Pino 13 (Sincronismo Horizontal - H) e Pino 14 (Sincronismo Vertical - V).",
      "Pinos 1 a 8 para dados paralelos e pinos 9 a 15 para aterramento do invólucro.",
      "Pino 1 para comunicação RS-422 e pino 15 para sinal de áudio."
    ],
    "answer": "Pino 1 (Vermelho - R), Pino 2 (Verde - G), Pino 3 (Azul - B), Pino 13 (Sincronismo Horizontal - H) e Pino 14 (Sincronismo Vertical - V).",
    "explanation": "No conector DB15 VGA do cabo construído pelo CTMSP para o monitor BARCO, a distribuição é: Pino 1 = Vermelho (R), Pino 2 = Verde (G), Pino 3 = Azul (B), Pino 13 = Sincronismo Horizontal (H) e Pino 14 = Sincronismo Vertical (V).",
    "topic": "Pinagem dos Cabos Especiais do CTMSP e Periféricos"
  },
  {
    "question": "Pinagem e Conectores do Cabo de Teclado do CTMSP: Como é montado o cabo de teclado especial do console, responsável por conectar o teclado operacional à placa de CPU do Módulo Básico?",
    "options": [
      "Conector DB25 macho ligado a um conector RJ45 de 8 pinos.",
      "Conector DB9 fêmea ligado a um conector Mini-DIN macho PS/2 de 6 pinos (Pino 1=Data, Pino 2=Clock, Pino 4=GND, Pino 5=+5V).",
      "Conector USB tipo A ligado a um conector BNC de 50 ohms.",
      "Conector Centronics de 36 pinos ligado ao barramento VME."
    ],
    "answer": "Conector DB9 fêmea ligado a um conector Mini-DIN macho PS/2 de 6 pinos (Pino 1=Data, Pino 2=Clock, Pino 4=GND, Pino 5=+5V).",
    "explanation": "O cabo de teclado é montado com um conector DB9 fêmea na ponta do teclado e um Mini-DIN macho padrão PS/2 de 6 pinos na CPU (Pino 1 = Data, Pino 2 = Clock, Pino 4 = GND e Pino 5 = +5V).",
    "topic": "Pinagem dos Cabos Especiais do CTMSP e Periféricos"
  },
  {
    "question": "Localização e Instalação da Chave de Hardware (Dongle): A Chave de Hardware (Dongle de proteção de software da IHM Fix Dynamics) é um componente essencial em todas as estações de trabalho. Em qual conector físico da CPU ela deve ser conectada?",
    "options": [
      "No conector serial DB9 (COM1).",
      "No conector da Porta Paralela DB25 fêmea.",
      "Na tomada de saída do Inversor de 400 Hz.",
      "No slot PMC da placa de memória refletiva."
    ],
    "answer": "No conector da Porta Paralela DB25 fêmea.",
    "explanation": "A Chave de Hardware de proteção do software FIX Dynamics é instalada diretamente no conector padrão da Porta Paralela (DB25 fêmea) da placa de CPU do Módulo Básico.",
    "topic": "Pinagem dos Cabos Especiais do CTMSP e Periféricos"
  },
  {
    "question": "Sinalização dos LEDs da Placa CPU VMIVME-7751: Na placa de CPU das remotas (VMIVME-7751), o espelho frontal possui 4 LEDs de diagnóstico. Assinale a alternativa que indica CORRETAMENTE o significado do LED BOOT:",
    "options": [
      "Indica que o disjuntor de 50 VDC está desarmado.",
      "Acende durante todo o processo de inicialização/carregamento da CPU.",
      "Indica falha irreparável na placa de memória refletiva.",
      "Sinaliza que o cartão de saída analógica 4140 está forçado."
    ],
    "answer": "Acende durante todo o processo de inicialização/carregamento da CPU.",
    "explanation": "Na placa VMIVME-7751, o LED Boot permanece aceso durante todo o ciclo de inicialização/carregamento da CPU, apagando cerca de 10 segundos após a conclusão com sucesso do boot.",
    "topic": "Pinagem dos Cabos Especiais do CTMSP e Periféricos"
  },
  {
    "question": "Simbologia de Bloco Conversor DC/DC com Isolamento: Nos diagramas e esquemas elétricos funcionais da apostila do SCMPA, como é representado o bloco funcional de um Conversor DC/DC com Isolamento Galvânico?",
    "options": [
      "Um retângulo com uma chave de um polo e duas posições.",
      "Um quadrado/retângulo dividido por uma linha diagonal, contendo o símbolo de traço contínuo em cima e embaixo, cortado por uma barra de isolamento.",
      "Um círculo com uma seta apontando para baixo e a letra \"µC\".",
      "Um triângulo com as letras \"D/A\" inscritas no interior."
    ],
    "answer": "Um quadrado/retângulo dividido por uma linha diagonal, contendo o símbolo de traço contínuo em cima e embaixo, cortado por uma barra de isolamento.",
    "explanation": "Na simbologia do SCMPA (item 3.1.2), o conversor DC/DC com isolamento é desenhado como um bloco retangular/quadrado dividido por linha diagonal, com símbolos de corrente contínua em cima e embaixo e uma linha de isolamento galvânico cortando o símbolo.",
    "topic": "Simbologia Eletrônica nos Esquemas do SCMPA"
  },
  {
    "question": "Simbologia de Filtro Passa-Baixa: Qual é a representação gráfica padronizada nos esquemas do SCMPA para um Filtro Passa-Baixa em malhas de condicionamento de sinal analógico?",
    "options": [
      "Um bloco quadrado contendo duas linhas senoidais paralelas.",
      "Um bloco quadrado contendo o símbolo de um diodo zener em paralelo.",
      "Um retângulo com o símbolo de um transformador de dois enrolamentos.",
      "Um losango contendo a inscrição \"U,I -> U\"."
    ],
    "answer": "Um bloco quadrado contendo duas linhas senoidais paralelas.",
    "explanation": "Na simbologia normatizada do SCMPA (item 3.1.2), o Filtro Passa-Baixa é esquematizado como um bloco quadrado contendo duas ondas senoidais sobrepostas.",
    "topic": "Simbologia Eletrônica nos Esquemas do SCMPA"
  },
  {
    "question": "Sequência de Energização Manual do Inversor TCI 1.0-NAR2C: Para energizar manualmente o Inversor Estático de 400 Hz (modelo TCI 1.0-NAR2C) no campo, qual é o procedimento correto e o tempo de espera antes de aplicar as cargas?",
    "options": [
      "Armar imediatamente o disjuntor de 50A e ligar as cargas sem acionar a pré-carga.",
      "Com o disjuntor desligado e cabos conectados, pressionar o botão de pré-carga até acender o LED \"Pré-carga completada\", armar o disjuntor de entrada (50A) e aguardar aproximadamente 10 segundos antes de ligar as chaves das cargas.",
      "Ligar primeiro as cargas de 115 VAC, apertar o botão de emergência e ligar a chave de 24 VDC.",
      "Desligar o No-Break do navio e aguardar 5 minutos até a lâmpada de sobrecarga piscar."
    ],
    "answer": "Com o disjuntor desligado e cabos conectados, pressionar o botão de pré-carga até acender o LED \"Pré-carga completada\", armar o disjuntor de entrada (50A) e aguardar aproximadamente 10 segundos antes de ligar as chaves das cargas.",
    "explanation": "O roteiro técnico de energização do inversor Tectrol exige: disjuntor de entrada desligado, acionamento da chave de pré-carga até acender o LED de \"Pré-carga completa\", ligar o disjuntor no painel e aguardar 10 segundos antes de alimentar as cargas.",
    "topic": "Energização do Inversor e Operação do BITS"
  }
];
