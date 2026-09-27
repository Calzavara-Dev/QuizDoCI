import { Question } from "../types/question";

export const scmpaQuestions: Question[] = [
  {
    "question": "Quais são as falhas causadoras de FAIL-SET no SCMPA?",
    "options": [
      "Circuito sentinela, falha nas fontes 24VDC 1 e 2, 3 e 4, 5 e 6 da remota, alimentação 115VAC da remota, CPU da remota, tensão 24VDC e 40VDC do navio, controladores das TG's, controladores de passo, controladores dos MCP's e tensão do painel do 723.",
      "Falha na rede Ethernet do passadiço, curto-circuito na iluminação do CCM e perda temporária do sinal do telégrafo analógico.",
      "Apenas sobrecarga no gerador de serviço número 1 e desarme das bombas de esgoto da praça de máquinas.",
      "Desarme do disjuntor de força de 440VAC e sobreaquecimento da água de arrefecimento dos motores diesel."
    ],
    "answer": "Circuito sentinela, falha nas fontes 24VDC 1 e 2, 3 e 4, 5 e 6 da remota, alimentação 115VAC da remota, CPU da remota, tensão 24VDC e 40VDC do navio, controladores das TG's, controladores de passo, controladores dos MCP's e tensão do painel do 723.",
    "explanation": "O estado de Fail-Set é acionado quando ocorrem falhas críticas de hardware e controle: circuito sentinela (watchdog), falhas nas fontes de 24VDC (1 a 6) ou na alimentação 115VAC da remota, falha na CPU da remota, falhas nas tensões de 24VDC e 40VDC do navio, falhas nos controladores das TG's, nos controladores de passo (HPC), nos controladores dos MCP's ou na tensão do painel do regulador 723."
  },
  {
    "question": "O operador pode retomar o controle do passo através de quais modos?",
    "options": [
      "Nos modos de operação remoto/manual ou local.",
      "Apenas pelo modo automático via SCADA central.",
      "Exclusivamente através do telégrafo de emergência no passadiço.",
      "Somente acionando a bomba elétrica auxiliar no modo combate."
    ],
    "answer": "Nos modos de operação remoto/manual ou local.",
    "explanation": "No SCMPA, quando ocorre perda ou necessidade de intervenção direta no controle do passo do hélice (HPC), o operador pode reassumir e operar através dos modos remoto/manual ou localmente junto ao equipamento."
  },
  {
    "question": "O motor Diesel (MCP) pode ser controlado por dois controladores distintos. Quais são eles?",
    "options": [
      "Controlador eletrônico (723) e controlador pneumático (PGA).",
      "Controlador hidráulico (Woodward) e controlador eletromecânico (CML).",
      "Controlador digital (SCADA) e controlador por cabo teleflex.",
      "Controlador servoassistido (MUIRED) e controlador analógico (VCS)."
    ],
    "answer": "Controlador eletrônico (723) e controlador pneumático (PGA).",
    "explanation": "Os motores diesel propulsores (MCPs) contam com redundância de controle: o regulador eletrônico Woodward 723 e o regulador pneumático PGA."
  },
  {
    "question": "Para que o set point do PGA é posicionado 10% acima do 723?",
    "options": [
      "Para que o 723 seja normalmente selecionado como controlador ativo.",
      "Para garantir que o PGA assuma imediatamente a carga máxima da máquina em caso de manobra rápida.",
      "Para proteger o motor contra sobrevelocidade em caso de aceleração brusca no passadiço.",
      "Para reduzir a pressão do ar de controle do sistema pneumático da máquina principal."
    ],
    "answer": "Para que o 723 seja normalmente selecionado como controlador ativo.",
    "explanation": "O sistema reconhece como prioritário o controlador que solicitar o menor set point ('o menor ganha'). Mantendo o PGA ajustado 10% acima, o regulador eletrônico 723 atua como controlador ativo no regime normal, assumindo o PGA caso o 723 falhe."
  },
  {
    "question": "O que é necessário para acessar a área de manutenção no SCMPA?",
    "options": [
      "Que a chave de segurança esteja posicionada na manutenção.",
      "Apenas efetuar login como operador do CCM no teclado padrão.",
      "Reiniciar o servidor SCADA e desconectar o console de boreste.",
      "Inserir a senha mestre de navegação no painel do passadiço."
    ],
    "answer": "Que a chave de segurança esteja posicionada na manutenção.",
    "explanation": "O acesso à área e funções restritas de manutenção exige fisicamente que a chave de segurança instalada no painel da remota esteja posicionada no modo 'Manutenção'."
  },
  {
    "question": "Para os usuários com senha de supervisor, só devem ser acessíveis as quatro primeiras funções do menu manutenção. Quais são elas?",
    "options": [
      "Módulo teste (Boreste), Módulo teste (Bombordo), Configuração estações e Ver tabelas.",
      "Formatação de disco, Calibração de sensores, Modo Combate e Reset de CPU.",
      "Histórico de alarmes, Controle de bombas, By-pass geral e Telégrafo reserva.",
      "Ajuste de ganhos do 723, Configuração de IP, Teste de lâmpadas e Limpeza de filtros."
    ],
    "answer": "Módulo teste (Boreste), Módulo teste (Bombordo), Configuração estações e Ver tabelas.",
    "explanation": "No menu de manutenção do SCMPA, os usuários com privilégio de supervisor possuem permissão de acesso para as quatro primeiras funções: Módulo teste (Boreste), Módulo teste (Bombordo), Configuração estações e Ver tabelas."
  },
  {
    "question": "No modo funcionalidade ('módulo de teste'), existem quatro configurações em que se pode colocar o sistema de propulsão. Quais são elas?",
    "options": [
      "Normal, Engine Test, CPP test e Manual.",
      "Cruzeiro, Combate, Manobra e Emergência.",
      "Local, Remoto, Telégrafo e Automático.",
      "Seca, Molhada, Teste de Voo e Desarme."
    ],
    "answer": "Normal, Engine Test, CPP test e Manual.",
    "explanation": "No módulo de teste de manutenção, o sistema de propulsão pode ser configurado em quatro modos: Normal, Engine Test (teste dos motores), CPP test (teste do passo controlável / HPC) e Manual."
  },
  {
    "question": "Qual a primeira tela que surge nos monitores das estações de trabalho, tanto do Passadiço (QMC) como no CCM?",
    "options": [
      "Tela de apresentação.",
      "Tela geral da propulsão.",
      "Tela de diagnóstico de rede.",
      "Tela de controle das auxiliares."
    ],
    "answer": "Tela de apresentação.",
    "explanation": "Ao inicializar os consoles e estações de trabalho do SCMPA no passadiço e no CCM, a primeira tela que surge nos monitores é a Tela de Apresentação."
  },
  {
    "question": "Como é feita a troca entre o 'Modo Diurno' e o 'Modo Noturno' na IHM do SCMPA?",
    "options": [
      "Por ícones circundados.",
      "Por uma chave seletora física de 2 posições no painel frontal.",
      "Automaticamente por um sensor fotoelétrico instalado no mastro.",
      "Através do atalho de teclado ALT + N."
    ],
    "answer": "Por ícones circundados.",
    "explanation": "A alternância entre o esquema de cores diurno e noturno (visando não prejudicar a visão noturna da guarnição) é feita clicando nos ícones circundados específicos na interface do SCMPA."
  },
  {
    "question": "Qual é a finalidade das funções adicionais no SCMPA?",
    "options": [
      "Fornecer informações para auxiliar o operador na tomada de decisões ou consulta apurada do estado do sistema.",
      "Permitir a alteração manual do firmware dos controladores lógicos programáveis.",
      "Executar o desligamento forçado das turbinas em caso de combate naval.",
      "Desabilitar todos os alarmes sonoros e visuais durante exercícios de manobra."
    ],
    "answer": "Fornecer informações para auxiliar o operador na tomada de decisões ou consulta apurada do estado do sistema.",
    "explanation": "As funções adicionais do SCMPA destinam-se a subsidiar o operador com informações refinadas para tomada de decisão e consulta analítica do estado de todos os subsistemas monitorados."
  },
  {
    "question": "O SCMPA é composto por quantas estações de trabalho?",
    "options": [
      "São 4 estações: uma no passadiço e 3 no CCM.",
      "São 2 estações: uma no passadiço e uma na praça de máquinas.",
      "São 5 estações: duas no passadiço, duas no CCM e uma no COC.",
      "São 3 estações: todas localizadas no Centro de Controle de Máquinas."
    ],
    "answer": "São 4 estações: uma no passadiço e 3 no CCM.",
    "explanation": "A arquitetura do SCMPA conta com 4 estações de trabalho principais: 1 instalada no Passadiço e 3 dispostas no Centro de Controle de Máquinas (CCM)."
  },
  {
    "question": "Qual teclado da estação de trabalho possui comandos de emergência?",
    "options": [
      "Teclado funcional.",
      "Teclado padrão (QWERTY).",
      "Teclado numérico da estação Vista.",
      "Teclado virtual do sistema operacional."
    ],
    "answer": "Teclado funcional.",
    "explanation": "Os comandos de emergência (ex: Tudo Adiante, Tudo Atrás, Cancela Seleção e Contorna Desarme TP) ficam localizados no teclado funcional dedicado do console."
  },
  {
    "question": "Qual nível de acesso precisa da chave inserida na remota para operar?",
    "options": [
      "Manutenção e Supervisores (para acessar algumas funções).",
      "Operadores do CCM e do Passadiço.",
      "Apenas visitantes e estagiários.",
      "Todos os níveis operacionais sem distinção."
    ],
    "answer": "Manutenção e Supervisores (para acessar algumas funções).",
    "explanation": "Os níveis de acesso que requerem a chave física de segurança na remota são Manutenção e Supervisores (este último para acesso a funções específicas de configuração/manutenção)."
  },
  {
    "question": "Qual a tela inicial que aparece no SCADA de BB e BE quando se liga o SCMPA na FINDEP?",
    "options": [
      "Controle dos MCP's Bombordo e Boreste.",
      "Tela Geral de Auxiliares de Incêndio e Aguada.",
      "Página de Diagnóstico de Redes e Memória Refletiva.",
      "Tela de Parâmetros e Calibração dos Reguladores 723."
    ],
    "answer": "Controle dos MCP's Bombordo e Boreste.",
    "explanation": "Na Fragata Independência (FINDEP), ao inicializar o SCADA nos consoles laterais (BB e BE), a tela inicial exibida é a de Controle dos MCP's Bombordo e Boreste."
  },
  {
    "question": "O que representam as caixas retangulares na área de objetos de indicação das estações de trabalho em serviço?",
    "options": [
      "Remotas BB e BE.",
      "As bombas de esgoto de ré e de vante.",
      "Os geradores de serviço diesel 1 e 2.",
      "Os compressores de ar condicionado principal."
    ],
    "answer": "Remotas BB e BE.",
    "explanation": "Na área gráfica que indica os nós e estações em serviço, as caixas retangulares simbolizam as unidades Remotas de Bombordo (BB) e Boreste (BE)."
  },
  {
    "question": "Descreva os objetos que compõem a área de navegação na IHM do SCMPA:",
    "options": [
      "Boreste, Bombordo, auxiliares, controladores, parâmetros, diagnóstico, manutenção e utilitários.",
      "Passadiço, Praça D'Armas, Convés de Voo, Máquina do Leme e Paiol de Munição.",
      "Rumo da agulha, Velocidade pelo fundo, Latitude, Longitude e Odômetro.",
      "Telégrafo, Piloto automático, Linvar, Válvula de manobra e Ejetor."
    ],
    "answer": "Boreste, Bombordo, auxiliares, controladores, parâmetros, diagnóstico, manutenção e utilitários.",
    "explanation": "A barra/área de navegação da IHM organiza o acesso aos subsistemas através das opções: Boreste, Bombordo, Auxiliares, Controladores, Parâmetros, Diagnóstico, Manutenção e Utilitários."
  },
  {
    "question": "Quais os tipos de partida previstos para a Turbina a Gás (TG)?",
    "options": [
      "Normal, Seca e Teste.",
      "Rápida, Lenta e de Cruzeiro.",
      "Pneumática, Hidráulica e Elétrica.",
      "Combate, Econômica e Emergencial."
    ],
    "answer": "Normal, Seca e Teste.",
    "explanation": "O procedimento operacional das turbinas a gás contempla três modos de partida: Normal (ciclo completo de ignição), Seca (crank sem injeção para ventilação/purga) e Teste."
  },
  {
    "question": "No modo de operação DEM, em que situação os comandos passam a ser visualizados na estação VISTA/CCM?",
    "options": [
      "Em falha nas estações de Bombordo ou Boreste.",
      "Quando a velocidade do navio ultrapassar 25 nós em mar aberto.",
      "Durante o acionamento manual da chave de emergência no passadiço.",
      "Sempre que a estação central for reiniciada pelo oficial de quarto."
    ],
    "answer": "Em falha nas estações de Bombordo ou Boreste.",
    "explanation": "No modo DEM, caso ocorra falha em uma das estações laterais (Bombordo ou Boreste), os comandos são automaticamente transferidos e passam a ser visualizados na estação Vista do CCM."
  },
  {
    "question": "Na tela do sistema HPC, a área do 'tanque de gravidade' possui quais alarmes?",
    "options": [
      "Nível alto e nível baixo.",
      "Temperatura crítica e alta pressão de retorno.",
      "Vazamento externo e saturação de ar comprimido.",
      "Contaminação por água e baixa densidade do fluido."
    ],
    "answer": "Nível alto e nível baixo.",
    "explanation": "O tanque de gravidade do sistema de Hélice de Passo Controlado (HPC) é monitorado pelos alarmes operacionais de Nível Alto e Nível Baixo."
  },
  {
    "question": "Na realocação automática de funções, no caso de falha nos SCADAs BB/BE o que acontece?",
    "options": [
      "O sistema passa a ser inoperante devido à falta de SCADAs.",
      "A estação Vista do Passadiço assume diretamente a comunicação com as remotas.",
      "O sistema opera normalmente sem controle supervisório.",
      "Os comandos de propulsão são transferidos para o Centro de Informações de Combate (CIC)."
    ],
    "answer": "O sistema passa a ser inoperante devido à falta de SCADAs.",
    "explanation": "Como apenas as estações SCADA possuem a infraestrutura de comunicação direta com as remotas e sustentam o supervisório, a perda simultânea dos SCADAs de BB e BE torna o sistema inoperante para supervisão."
  },
  {
    "question": "Qual o procedimento técnico na presença de falha em uma placa de entrada ou saída (I/O) no SCMPA?",
    "options": [
      "Substituição da placa avariada (vide manual de manutenção).",
      "Reprogramação dos fusíveis de proteção da placa via software na IHM.",
      "Soldagem direta dos terminais danificados em bancada sob tensão.",
      "Desabilitação permanente do canal sem substituição do hardware."
    ],
    "answer": "Substituição da placa avariada (vide manual de manutenção).",
    "explanation": "Ao ser constatada avaria em placa de entrada/saída (I/O) das remotas, a norma determina a substituição física do módulo avariado por um sobressalente, conforme instruído no manual de manutenção."
  },
  {
    "question": "Na página de diagnóstico de redes, o que simboliza a falha na rede Ethernet?",
    "options": [
      "O quadrado que simboliza a rede muda de verde para piscando em vermelho.",
      "O ícone da rede desaparece completamente da tela de diagnóstico.",
      "Um triângulo amarelo com ponto de exclamação surge sobre o relógio.",
      "O monitor de vídeo desliga e soa uma campainha contínua no console."
    ],
    "answer": "O quadrado que simboliza a rede muda de verde para piscando em vermelho.",
    "explanation": "Na tela de diagnóstico de rede, o estado de enlace normal é representado por um quadrado verde; havendo falha de comunicação Ethernet, o símbolo muda para vermelho piscando."
  },
  {
    "question": "Quais os equipamentos que pertencem ao grupo FAIL SET no SCMPA?",
    "options": [
      "Grupo de BE: MCP1 e MCP3, TG1 e HPC-BE. Grupo de BB: MCP2 e MCP4, TG2 e HPC-BB.",
      "Grupo de BE: MCA1 e MCA3. Grupo de BB: MCA2 e MCA4.",
      "Grupo de BE: Bombas de incêndio 1 e 3. Grupo de BB: Bombas de incêndio 2 e 4.",
      "Grupo de BE: Leme de Boreste. Grupo de BB: Leme de Bombordo."
    ],
    "answer": "Grupo de BE: MCP1 e MCP3, TG1 e HPC-BE. Grupo de BB: MCP2 e MCP4, TG2 e HPC-BB.",
    "explanation": "O grupo de Fail-Set é dividido por bordo: no bordo de Boreste (BE) engloba MCP1, MCP3, TG1 e HPC-BE; no bordo de Bombordo (BB) engloba MCP2, MCP4, TG2 e HPC-BB."
  },
  {
    "question": "Quais as funções presentes no menu de manutenção do SCMPA?",
    "options": [
      "Módulo teste boreste, Módulo teste Bombordo, Configuração estação e Ver tabelas.",
      "Formatação de partição, Reset de fábrica, Teste de carga e Histórico de falhas.",
      "Controle de óleo combustível, Monitor de aguada, Sistema de ar e Válvulas de dreno.",
      "Calibração dos bicos injetores, Alinhamento de eixos e Teste de passo máximo."
    ],
    "answer": "Módulo teste boreste, Módulo teste Bombordo, Configuração estação e Ver tabelas.",
    "explanation": "O menu de manutenção engloba os utilitários de diagnóstico e parametrização: Módulo teste boreste, Módulo teste bombordo, Configuração estação e Ver tabelas."
  },
  {
    "question": "Quais as teclas de atalho para os motores de Boreste (BE) na FINDEP?",
    "options": [
      "CTRL + M",
      "CTRL + B",
      "ALT + F4",
      "SHIFT + ENTER"
    ],
    "answer": "CTRL + M",
    "explanation": "Na Fragata Independência (FINDEP), o atalho de teclado padronizado para acessar o painel dos motores de Boreste é CTRL + M."
  },
  {
    "question": "Quantos e quais são os tipos de janelas na IHM do SCMPA?",
    "options": [
      "2 tipos: Quadro de diálogos e Janelas.",
      "3 tipos: Pop-ups, Menus suspensos e Telas cheias.",
      "4 tipos: Telas de alarme, Telas gráficas, Tabelas e Scripts.",
      "Apenas 1 tipo: Janelas fixas sem sobreposição."
    ],
    "answer": "2 tipos: Quadro de diálogos e Janelas.",
    "explanation": "A interface do SCMPA organiza a interação em 2 categorias estruturais de janelas: Quadros de diálogos (para confirmações e comandos rápidos) e Janelas (para telas de monitoração e navegação)."
  },
  {
    "question": "Quais estações não têm comunicação direta com as remotas?",
    "options": [
      "Estações Vista.",
      "Estações SCADA de Boreste.",
      "Estações SCADA de Bombordo.",
      "Painéis das Remotas de Vante e Ré."
    ],
    "answer": "Estações Vista.",
    "explanation": "As estações Vista dependem das estações SCADA para receber dados e enviar comandos às remotas; elas não possuem ligação física/lógica direta com as remotas."
  },
  {
    "question": "Qual a localização das chaves de emergência no SCMPA da Fragata Liberal (F-43)?",
    "options": [
      "No painel frontal das remotas.",
      "Na parte de trás do painel das remotas.",
      "Exclusivamente no console central do Passadiço.",
      "Junto às caixas redutoras na Praça de Máquinas."
    ],
    "answer": "No painel frontal das remotas.",
    "explanation": "Na Fragata Liberal (F-43), as chaves que colocam os equipamentos em emergência estão situadas no painel frontal das unidades Remotas."
  },
  {
    "question": "Na realocação automática de funções, se a estação central falhar, para qual estação vão os comandos?",
    "options": [
      "Para a estação de boreste.",
      "Para a estação de bombordo.",
      "Para a estação do passadiço.",
      "Para o terminal de emergência da máquina do leme."
    ],
    "answer": "Para a estação de boreste.",
    "explanation": "Pela regra de contingência e realocação automática de funções, ocorrendo a perda da estação Central, seus comandos são transferidos para a estação de Boreste."
  },
  {
    "question": "O que significa o ponto de interrogação (?) na simbologia das válvulas de combustíveis na IHM?",
    "options": [
      "Válvula num estado indeterminado.",
      "Válvula totalmente aberta com fluxo normal.",
      "Válvula em processo de manutenção preventiva.",
      "Válvula com atuador elétrico desconectado."
    ],
    "answer": "Válvula num estado indeterminado.",
    "explanation": "O ponto de interrogação exibido sobre uma válvula indica discrepância ou transição: os sensores de fim de curso não confirmam se está aberta ou fechada (estado indeterminado)."
  },
  {
    "question": "No SCMPA existem 2 controles para os motores propulsores. Qual o controle primário que o sistema reconhece?",
    "options": [
      "Aquele que solicita menor set point ganha o controle.",
      "Aquele que solicita a rotação mais elevada ganha o controle.",
      "O controlador pneumático PGA sempre tem prioridade absoluta sobre o eletrônico.",
      "O controle é alternado aleatoriamente a cada 5 segundos pelo SCADA."
    ],
    "answer": "Aquele que solicita menor set point ganha o controle.",
    "explanation": "A lógica de arbitragem do sistema reconhece como mestre o controlador que estiver requisitando o menor set point ('o menor ganha'), prevenindo sobrevelocidade descontrolada."
  },
  {
    "question": "Qual o controlador dos motores tem o SET POINT ajustado 10% a mais que o outro controlador?",
    "options": [
      "PGA.",
      "723.",
      "Woodward 2301A.",
      "SCADA Master."
    ],
    "answer": "PGA.",
    "explanation": "O regulador pneumático PGA tem sua referência calibrada 10% acima do regulador eletrônico 723 para atuar como retaguarda de segurança caso o 723 falhe."
  },
  {
    "question": "No caso de FAIL SET no HPC, quais os modos de operação o sistema permite ao operador?",
    "options": [
      "Remoto, manual e local.",
      "Apenas automático e combate.",
      "Exclusivamente controle por cabo de aço a partir do convés.",
      "Somente modo de cruzeiro assistido."
    ],
    "answer": "Remoto, manual e local.",
    "explanation": "Sob condição de Fail-Set do sistema hidráulico do passo (HPC), as opções viáveis para manter a manobrabilidade são Remoto, Manual e Local."
  },
  {
    "question": "Quais são as quatro teclas de emergência do SCMPA no teclado funcional?",
    "options": [
      "Tudo adiante, tudo atrás, cancela seleção e contorna desarme TP.",
      "Parada rápida, disparo de CO2, alarme geral e silenciar corneta.",
      "Fogo na máquina, colisão iminente, homem ao mar e abandonar navio.",
      "Partida de emergência TG, corte de diesel, leme manual e bomba de esgoto."
    ],
    "answer": "Tudo adiante, tudo atrás, cancela seleção e contorna desarme TP.",
    "explanation": "As teclas de emergência do teclado funcional são: Tudo Adiante, Tudo Atrás, Cancela Seleção e Contorna Desarme TP."
  },
  {
    "question": "Explique a configuração do SCMPA para os modos de operação CRUZEIRO e COMBATE:",
    "options": [
      "Cruzeiro: 1 operador no passadiço e 1 operador no CCM; Combate: 1 operador no passadiço, 3 no CCM e teclas de emergência liberadas.",
      "Cruzeiro: nenhum operador no CCM e 2 no passadiço; Combate: controle total no Centro de Informações de Combate.",
      "Cruzeiro: apenas operação manual local; Combate: comando exclusivo por telégrafo acústico.",
      "Cruzeiro: 2 operadores em cada estação; Combate: comando centralizado na Praça de Máquinas de ré."
    ],
    "answer": "Cruzeiro: 1 operador no passadiço e 1 operador no CCM; Combate: 1 operador no passadiço, 3 no CCM e teclas de emergência liberadas.",
    "explanation": "Em Cruzeiro, a lotação de serviço opera com 1 operador no passadiço e 1 no CCM. Em Combate, posicionam-se 1 operador no passadiço e 3 no CCM, com as teclas de emergência totalmente liberadas."
  },
  {
    "question": "Fale sobre os indicadores de temperatura no SCMPA e seu funcionamento:",
    "options": [
      "São usados para indicar temperatura e são sensitivos: ao passar o cursor sobre eles aparece uma legenda descrevendo a origem da temperatura.",
      "São termômetros analógicos de mercúrio fixados diretamente nas laterais dos consoles.",
      "Indicam apenas valores binários (quente ou frio) através de LEDs monocromáticos verdes.",
      "Exigem clique duplo do mouse para atualizar a leitura a cada dez minutos."
    ],
    "answer": "São usados para indicar temperatura e são sensitivos: ao passar o cursor sobre eles aparece uma legenda descrevendo a origem da temperatura.",
    "explanation": "Os instrumentos gráficos de temperatura na tela são interativos (sensitivos): o operador visualiza a leitura e, ao posicionar o cursor sobre o componente, é exibida uma legenda descritiva de sua proveniência."
  },
  {
    "question": "Qual a ação do operador caso ocorra uma falha na estação do passadiço?",
    "options": [
      "Os comandos serão enviados através do sistema CI ao CCM, que aciona comandos através do respectivo teclado funcional.",
      "O navio deve ser fundeado imediatamente até que o servidor do passadiço seja reiniciado.",
      "O controle da máquina é transferido automaticamente para o Centro de Operações de Voo.",
      "O operador assume o governo diretamente nas bombas de injeção da máquina de boreste."
    ],
    "answer": "Os comandos serão enviados através do sistema CI ao CCM, que aciona comandos através do respectivo teclado funcional.",
    "explanation": "Havendo inoperância no console do passadiço, as ordens de manobra trafegam via Comunicações Interiores (CI) para o CCM, onde o operador de máquinas atua pelo teclado funcional."
  },
  {
    "question": "Qual a diferença entre os alarmes de primeiro nível e segundo nível nos tanques de gravidade?",
    "options": [
      "Primeiro nível: gerados com sensores digitais; Segundo nível: gerados com sensores analógicos.",
      "Primeiro nível: gerados por sensores térmicos; Segundo nível: gerados por boias mecânicas.",
      "Primeiro nível: gerados no CCM; Segundo nível: gerados exclusivamente no COC.",
      "Primeiro nível: desligam a bomba; Segundo nível: apenas emitem sinal luminoso."
    ],
    "answer": "Primeiro nível: gerados com sensores digitais; Segundo nível: gerados com sensores analógicos.",
    "explanation": "No monitoramento dos tanques de gravidade, os alarmes de 1º nível são detectados por chaves e sensores discretos (digitais), enquanto os de 2º nível são calculados por transdutores contínuos (analógicos)."
  },
  {
    "question": "Descreva a função da tela geral da propulsão do SCMPA:",
    "options": [
      "Apresentar um panorama geral do sistema de propulsão e de alguns sistemas auxiliares.",
      "Executar o diagnóstico avançado de hardware das placas de rede das remotas.",
      "Permitir a calibração de todos os instrumentos analógicos de bordo.",
      "Registrar a escala de serviço e horários da guarnição de máquinas."
    ],
    "answer": "Apresentar um panorama geral do sistema de propulsão e de alguns sistemas auxiliares.",
    "explanation": "A Tela Geral da Propulsão tem por escopo fornecer uma síntese holística do trem de força (turbinas, motores, redutoras, embreagens, eixos) e subsistemas auxiliares correlatos."
  },
  {
    "question": "Cite 4 equipamentos que têm chave de emergência no painel da remota de Bombordo (BB):",
    "options": [
      "Bomba elétrica HPC#2, Bomba de suplemento #2, Bomba transferência O.C #2 e Bomba transferência O.L.",
      "Bomba de incêndio principal, Compressor de alta pressão, Gerador diesel #1 e Guincho de vante.",
      "Turbina de passo #1, Separadora centrífuga #3, Evaporador #2 e Destilador de água.",
      "Ventilador da praça #1, Bomba de esgoto principal, Bomba de lastro e Leme de boreste."
    ],
    "answer": "Bomba elétrica HPC#2, Bomba de suplemento #2, Bomba transferência O.C #2 e Bomba transferência O.L.",
    "explanation": "No painel frontal/traseiro da remota de Bombordo, as chaves de emergência contemplam a Bomba elétrica HPC#2, a Bomba de suplemento #2, a Bomba de transferência de Óleo Combustível #2 e a Bomba de transferência de Óleo Lubrificante."
  },
  {
    "question": "Explique a utilidade da função 'transferência de carga leve' no SCMPA:",
    "options": [
      "Fazer pequenas mudanças no valor de DESSI (ajuste fino), principalmente durante a transferência de carga leve entre 2 navios, somente utilizada pelo passadiço.",
      "Transferir óleo combustível entre os tanques de vante e ré sem intervenção do CCM.",
      "Descarregar as baterias de emergência do navio em caso de docagem seca.",
      "Equilibrar a distribuição de carga elétrica entre os geradores de serviço durante manobra de fundeio."
    ],
    "answer": "Fazer pequenas mudanças no valor de DESSI (ajuste fino), principalmente durante a transferência de carga leve entre 2 navios, somente utilizada pelo passadiço.",
    "explanation": "Durante manobras de Reabastecimento no Mar (RAS) / Transferência de Carga Leve, o passadiço necessita de controle milimétrico da velocidade do navio; essa função permite ajuste fino da DESSI."
  },
  {
    "question": "Após o teste no circuito WATCHDOG (sentinela), cite 3 mensagens que a IHM pode apresentar:",
    "options": [
      "Teste do CKT OK, Falha no teste do CKT e Falha no CKT.",
      "Watchdog Ativo, Watchdog Desabilitado e Watchdog em Sobrecarga.",
      "Circuito Conectado, Circuito Ausente e Circuito em Curto.",
      "Sinal Normal, Sinal Intermitente e Falha de Comunicação."
    ],
    "answer": "Teste do CKT OK, Falha no teste do CKT e Falha no CKT.",
    "explanation": "O teste de verificação do circuito sentinela (Watchdog) retorna um dos 3 diagnósticos na IHM: Teste do CKT OK, Falha no teste do CKT ou Falha no CKT."
  },
  {
    "question": "Cite 4 falhas que venham a causar FAIL SET no sistema:",
    "options": [
      "Falha na alimentação de 115CA da remota, Falha na CPU da remota, Falha tensão 24v do navio e Falha tensão 40v/50v do navio.",
      "Queima da lâmpada de teto do CCM, falha no teclado padrão, mouse desconectado e perda do sinal de TV.",
      "Vazamento de água doce na cozinha, queda do disjuntor da lavanderia, baixa pressão na buzina e falha no radar.",
      "Filtro de ar condicionado sujo, alarme de porta aberta na oficina, nível baixo de sabão e óleo sujo no cárter do gerador de emergência."
    ],
    "answer": "Falha na alimentação de 115CA da remota, Falha na CPU da remota, Falha tensão 24v do navio e Falha tensão 40v/50v do navio.",
    "explanation": "O Fail-Set é desencadeado por falhas severas na alimentação de 115VAC da remota, falha na placa de CPU da remota, queda de tensão de 24VDC do navio ou perda da alimentação de 40V/50VDC."
  },
  {
    "question": "Para manutenção do sistema existe o 'módulo de teste'. Cite as 4 configurações em que se pode colocar o sistema de propulsão usando o 'módulo de teste':",
    "options": [
      "Normal, Engine test, CPP test e Manual.",
      "Combate, Cruzeiro, Reboque e Fundeio.",
      "Velocidade Econômica, Força Máxima, Ré Rápida e Parada.",
      "Boreste Ativo, Bombordo Ativo, Ambos Ativos e Nenhum Ativo."
    ],
    "answer": "Normal, Engine test, CPP test e Manual.",
    "explanation": "Ao ingressar no módulo de teste de manutenção, o operador pode simular ou rodar a propulsão em 4 configurações: Normal, Engine test, CPP test e Manual."
  },
  {
    "question": "Cite 4 falhas que podem ocorrer para que o sistema detecte falha na remota:",
    "options": [
      "Falha no cartão da CPU, Falha nos cartões de memórias refletivas, Falha na alimentação e Falha no cabeamento.",
      "Falha no disco rígido do PC pessoal, falha no trackball do passadiço, tela com pixels mortos e perda de login do operador.",
      "Baixa pressão na linha de vapor, alta temperatura na chaminé, alagamento no porão de ré e quebra do eixo propulsor.",
      "Falta de lubrificação nas engrenagens redutoras, desgaste nas buchas da madre do leme, vibração na hélice e cavitação."
    ],
    "answer": "Falha no cartão da CPU, Falha nos cartões de memórias refletivas, Falha na alimentação e Falha no cabeamento.",
    "explanation": "Uma falha de remota é diagnosticada quando ocorrem avarias nos cartões de CPU, nos módulos de memória refletiva, defeitos na fonte/alimentação elétrica ou rompimento/ruído no cabeamento de barramento."
  },
  {
    "question": "Como é feito o teste do teclado no SCMPA?",
    "options": [
      "Pressionando qualquer tecla nos teclados, acende-se na tela a tecla correspondente indicando o bom funcionamento; caso contrário, continua apagada.",
      "Digitando uma sequência de 1 a 0 no bloco numérico e verificando o som do buzzer.",
      "Mantendo pressionada a barra de espaço por 10 segundos até o reinício do terminal.",
      "Executando um script em linha de comando no prompt do sistema operacional."
    ],
    "answer": "Pressionando qualquer tecla nos teclados, acende-se na tela a tecla correspondente indicando o bom funcionamento; caso contrário, continua apagada.",
    "explanation": "Na rotina de teste de teclado, cada tecla física acionada pelo operador deve acender o respectivo botão gráfico na tela, confirmando o fechamento do contato elétrico."
  },
  {
    "question": "Quais as teclas de atalho para acessar a temperatura de Boreste (BE) na FINDEP?",
    "options": [
      "CTRL + R",
      "CTRL + T",
      "SHIFT + B",
      "ALT + F2"
    ],
    "answer": "CTRL + R",
    "explanation": "No console do SCMPA da Fragata Independência, pressionar CTRL + R direciona o operador instantaneamente à tela de temperaturas de Boreste (BE)."
  },
  {
    "question": "Quais as operações que a IHM permite ao operador no modo normal de operação do sistema?",
    "options": [
      "Partida e parada de máquinas, seleção e troca de máquinas, monitoração e comando de sistemas auxiliares, solicitação e comando de DESSI.",
      "Alteração de firmware das remotas, calibração manual de strain gauges e desligamento de geradores em carga.",
      "Navegação por GPS, cálculo de tiro tático do armamento e controle das comunicações VHF.",
      "Ajuste do passo das pás por martelo pneumático e controle manual da válvula de governo."
    ],
    "answer": "Partida e parada de máquinas, seleção e troca de máquinas, monitoração e comando de sistemas auxiliares, solicitação e comando de DESSI.",
    "explanation": "O regime normal da IHM engloba: partida/parada de MCPs e TGs, troca e seleção de máquinas ativas, supervisão/comando das bombas e auxiliares, e inserção de comandos de demanda de velocidade (DESSI)."
  },
  {
    "question": "O que ocorre no sistema IHM quando uma chave de emergência de um equipamento é acionada?",
    "options": [
      "Faz com que todos os comandos para esse equipamento fiquem desabilitados (inclusive os locais).",
      "O equipamento passa a operar na potência máxima em regime contínuo.",
      "Apenas o alerta sonoro é ativado no passadiço, sem afetar os botões de comando.",
      "Os comandos são transferidos compulsoriamente para a estação Vista do CCM."
    ],
    "answer": "Faz com que todos os comandos para esse equipamento fiquem desabilitados (inclusive os locais).",
    "explanation": "O disparo de uma chave de emergência isola completamente o equipamento, bloqueando todos os botões e sinais de acionamento tanto na IHM quanto nas botoeiras locais por motivo de segurança."
  },
  {
    "question": "Qual indicação o sistema apresenta na tela se houver uma falha nas memórias refletivas?",
    "options": [
      "O retângulo que simboliza a memória muda de verde para vermelho piscando.",
      "A tela inteira congela com fundo azul e texto branco.",
      "Um sino de alarme soa e o ícone da memória fica amarelo fixo.",
      "O ícone da memória desliga-se completamente e fica cinza escuro."
    ],
    "answer": "O retângulo que simboliza a memória muda de verde para vermelho piscando.",
    "explanation": "As memórias refletivas mantêm a base de dados sincronizada em tempo real; em caso de falha de transmissão óptica, seu retângulo indicador passa a piscar na cor vermelha."
  },
  {
    "question": "No modo DEM, em que situação de falha os comandos vão para a estação central?",
    "options": [
      "Caso a vista do passadiço venha a falhar através de comunicação interior e se falharem as estações SCADA de BE e BB.",
      "Sempre que a pressão do ar de partida cair abaixo de 20 bar.",
      "Quando o operador do passadiço solicitar auxílio pelo interfone de manobra.",
      "Somente durante a partida em modo seco das duas turbinas simultaneamente."
    ],
    "answer": "Caso a vista do passadiço venha a falhar através de comunicação interior e se falharem as estações SCADA de BE e BB.",
    "explanation": "Na contingência DEM, os comandos são concentrados na estação central se o console do passadiço falhar (comunicando por CI) somado à falha concomitante dos SCADAs de Bombordo e Boreste."
  },
  {
    "question": "Qual a localização das chaves de emergência na Fragata Independência (F-44) e na Fragata Liberal (F-43)?",
    "options": [
      "F-44: Na parte de trás do painel das Remotas; F-43: Na parte frontal das Remotas.",
      "F-44: No teto da cabine de manobra; F-43: Abaixo do piso do CCM.",
      "F-44: No passadiço; F-43: No Centro de Operações de Combate.",
      "Ambas possuem as chaves localizadas exclusivamente na parte frontal das Remotas."
    ],
    "answer": "F-44: Na parte de trás do painel das Remotas; F-43: Na parte frontal das Remotas.",
    "explanation": "Existe diferença construtiva entre os navios: na Fragata Independência (F-44) as chaves ficam na traseira do painel das remotas, enquanto na Fragata Liberal (F-43) ficam na parte frontal."
  },
  {
    "question": "Quais os teclados envolvidos na manutenção de teste do teclado?",
    "options": [
      "Chama a tela através dos botões utilitários e representa os teclados funcionais e padrão.",
      "Apenas o teclado numérico auxiliar da mesa de cartas.",
      "Teclado do radar de navegação e teclado de comunicação interna.",
      "Somente o teclado do console de controle de avarias (CAv)."
    ],
    "answer": "Chama a tela através dos botões utilitários e representa os teclados funcionais e padrão.",
    "explanation": "Ao ativar o teste de teclado via menu Utilitários, a interface reproduz o leiaute do teclado funcional e do teclado padrão para validação de todas as teclas."
  },
  {
    "question": "Quantos grupos de FAIL-SET possui o SCMPA?",
    "options": [
      "2 grupos (MCP's dois para cada bordo, HPC, e Turbina a gás).",
      "4 grupos divididos em vante, ré, boreste e bombordo.",
      "1 grupo único que engloba todas as máquinas principais e auxiliares.",
      "3 grupos correspondentes a elétrico, hidráulico e pneumático."
    ],
    "answer": "2 grupos (MCP's dois para cada bordo, HPC, e Turbina a gás).",
    "explanation": "O SCMPA possui 2 grupos de Fail-Set: Grupo de Boreste (MCP1, MCP3, TG1 e HPC-BE) e Grupo de Bombordo (MCP2, MCP4, TG2 e HPC-BB)."
  },
  {
    "question": "No menu manutenção, quais funções os usuários com senha de supervisor acessam?",
    "options": [
      "Todas as funções dos grupos de usuário operadores, Configurar alarme, Configurar parâmetros e Configurar funções do sistema.",
      "Apenas alteração do relógio do sistema e limpeza do histórico de eventos.",
      "Exclusivamente a calibração de instrumentos do passadiço e teste de buzina.",
      "Somente visualização de tabelas e troca de senha dos operadores."
    ],
    "answer": "Todas as funções dos grupos de usuário operadores, Configurar alarme, Configurar parâmetros e Configurar funções do sistema.",
    "explanation": "Os supervisores herdam todas as permissões dos operadores normais e ganham privilégios para: Configurar alarme, Configurar parâmetros e Configurar funções do sistema."
  },
  {
    "question": "Qual estação não possui comunicação direta com as remotas?",
    "options": [
      "Vistas do passadiço e CCM.",
      "SCADA de Boreste.",
      "SCADA de Bombordo.",
      "Console do Operador de Máquinas."
    ],
    "answer": "Vistas do passadiço e CCM.",
    "explanation": "As estações do tipo Vista (Passadiço e CCM) recebem seus dados através dos servidores SCADA e não possuem barramento de comunicação físico direto com as remotas."
  },
  {
    "question": "Quais os níveis de acesso que não necessitam da chave de segurança?",
    "options": [
      "Operadores, CCM e Passadiço.",
      "Manutenção e Engenheiros de Sistemas.",
      "Supervisores e Inspetores Navais.",
      "Comandante do Navio e Imediato."
    ],
    "answer": "Operadores, CCM e Passadiço.",
    "explanation": "A operação rotineira do navio (Operadores do CCM e Passadiço) não demanda o giro da chave de segurança na remota, restrita aos modos técnicos avançados."
  },
  {
    "question": "Quais níveis de acesso geram alarme informando às demais estações quando são ativados?",
    "options": [
      "Supervisores e Manutenção.",
      "Operador do CCM e Operador do Passadiço.",
      "Visitante e Monitor.",
      "Nenhum nível gera alarme sonoro ou visual."
    ],
    "answer": "Supervisores e Manutenção.",
    "explanation": "O ingresso nos níveis de Supervisor ou Manutenção altera parâmetros vitais de controle e, portanto, gera um alarme de alerta para todas as outras estações do navio."
  },
  {
    "question": "O que significa o ponto de interrogação quando se comanda a abertura de uma válvula?",
    "options": [
      "Válvula num estado indeterminado.",
      "Válvula com falha mecânica de assentamento.",
      "Válvula operando com fluxo invertido.",
      "Comando cancelado por interloque de segurança."
    ],
    "answer": "Válvula num estado indeterminado.",
    "explanation": "O ponto de interrogação avisa visualmente ao operador que a válvula está em trânsito ou seus sensores de posição não informam se está aberta ou fechada com certeza."
  },
  {
    "question": "Caso ocorra falha na estação Vista do CCM, quem assume suas funções?",
    "options": [
      "Telégrafo: os comandos serão divididos pelas estações laterais BB e BE; Realocação automática de função: as suas funções são transferidas para a estação SCADA de boreste.",
      "A estação do Passadiço assume o controle total imediatamente sem divisão de tarefas.",
      "O controle do navio deve ser passado para o posto de governo secundário na máquina do leme.",
      "O sistema entra em Fail-Set e desliga todos os motores propulsores."
    ],
    "answer": "Telégrafo: os comandos serão divididos pelas estações laterais BB e BE; Realocação automática de função: as suas funções são transferidas para a estação SCADA de boreste.",
    "explanation": "Em falha do Vista do CCM, as ordens do telégrafo são repartidas entre os SCADAs de BB e BE, enquanto a realocação automática transfere as funções de supervisão para o SCADA de Boreste."
  },
  {
    "question": "No SCMPA da FINDEP, qual a indicação de funcionamento normal nos cartões da remota?",
    "options": [
      "Cartão fica na cor cinza claro e o LED piscando.",
      "Cartão fica verde escuro com todos os LEDs apagados.",
      "Cartão fica na cor amarela com LED vermelho fixo.",
      "Cartão fica azul brilhante e pisca alternadamente."
    ],
    "answer": "Cartão fica na cor cinza claro e o LED piscando.",
    "explanation": "Na tela de representação das remotas da FINDEP, o cartão íntegro é exibido em cinza claro com a pulsação do LED gráfico indicando atividade de ciclo de varredura."
  },
  {
    "question": "Qual a indicação que o sistema apresenta se houver falha nas memórias refletivas?",
    "options": [
      "Na Remota: é gerado um alarme; No SCADA: a estação e suas conexões ficam em vermelho.",
      "Na Remota: a CPU desliga; No SCADA: a tela assume cor cinza com ícone de interrogação.",
      "Em ambas as estações: surge um pop-up solicitando reinicialização pelo operador.",
      "Não há indicação visual nas estações, ocorrendo apenas bloqueio do telégrafo."
    ],
    "answer": "Na Remota: é gerado um alarme; No SCADA: a estação e suas conexões ficam em vermelho.",
    "explanation": "A perda do anel óptico de memória refletiva gera alarme imediato nas remotas e, no SCADA, o ícone da estação e seus links passam a ser coloridos em vermelho vivo."
  },
  {
    "question": "Quais os dois controladores dos motores de combustão principal (MCPs)?",
    "options": [
      "Eletrônico (723) e Pneumático (PGA).",
      "Digital (Woodward Peak 150) e Mecânico (Centrífugo).",
      "Hidráulico (Bosch Rexroth) e Eletropneumático (Festo).",
      "Analógico (VCS 775) e Térmico (Danfoss)."
    ],
    "answer": "Eletrônico (723) e Pneumático (PGA).",
    "explanation": "Cada MCP possui o atuador de governo eletrônico Woodward 723 e o regulador pneumático auxiliar Woodward PGA."
  },
  {
    "question": "Qual a tecla de atalho para acessar a tela de temperatura na FINDEP?",
    "options": [
      "CTRL + R para Boreste (BE) e CTRL + SHIFT + R para Bombordo (BB).",
      "ALT + T para Boreste e ALT + SHIFT + T para Bombordo.",
      "CTRL + B para ambos os bordos simultaneamente.",
      "F5 para Boreste e F6 para Bombordo."
    ],
    "answer": "CTRL + R para Boreste (BE) e CTRL + SHIFT + R para Bombordo (BB).",
    "explanation": "O operador acessa as temperaturas de Boreste usando CTRL + R e as de Bombordo usando CTRL + SHIFT + R."
  },
  {
    "question": "Para se ter acesso à área de manutenção, o que o usuário deve fazer?",
    "options": [
      "Inserir senha de supervisor e colocar a chave de segurança na remota.",
      "Apenas digitar a senha de operador no teclado padrão do passadiço.",
      "Desconectar o cabo de rede da remota e aguardar o reset.",
      "Girar a chave de emergência da bomba elétrica de combustível."
    ],
    "answer": "Inserir senha de supervisor e colocar a chave de segurança na remota.",
    "explanation": "O acesso de manutenção exige autenticação biométrica/senha de supervisor associada à inserção e acionamento da chave física no painel da remota."
  },
  {
    "question": "Descreva os indicadores de temperatura e a sinalização de alarme no SCMPA:",
    "options": [
      "São indicadores sensitivos (ao passar o cursor surge a legenda da temperatura). Em alarme: a moldura pisca em amarelo; se persistir após reconhecimento, o fundo permanece amarelo; se a causa cessar, apaga.",
      "São termômetros analógicos em que o alarme dispara uma sirene contínua e fecha a válvula de arrefecimento.",
      "Ficam permanentemente vermelhos quando a máquina está em carga e verdes quando parada.",
      "Apresentam apenas código de falha numérico sem legenda explicativa."
    ],
    "answer": "São indicadores sensitivos (ao passar o cursor surge a legenda da temperatura). Em alarme: a moldura pisca em amarelo; se persistir após reconhecimento, o fundo permanece amarelo; se a causa cessar, apaga.",
    "explanation": "Os instrumentos sensitivos mostram a legenda ao passar o mouse. Se houver alarme, a borda pisca em amarelo; após reconhecimento pelo operador, fica fixo amarelo se continuar fora da faixa, e apaga se a temperatura normalizar."
  },
  {
    "question": "Em quais categorias os telégrafos se dividem?",
    "options": [
      "Partida e parada das máquinas, Seleção de máquinas e Demanda de potência.",
      "Frente, Ré e Parar.",
      "Máquinas de Vante, Máquinas de Ré e Auxiliares.",
      "Manual, Automático e Emergência."
    ],
    "answer": "Partida e parada das máquinas, Seleção de máquinas e Demanda de potência.",
    "explanation": "Os telégrafos do SCMPA são agrupados em 3 funções estratégicas: Partida e parada das máquinas, Seleção de máquinas e Demanda de potência (DESSI)."
  },
  {
    "question": "No modo DEM, descreva a ação do operador caso ocorra uma falha do Vista no passadiço:",
    "options": [
      "Os comandos serão enviados através do sistema de comunicações interiores ao CCM, que aciona comandos através do respectivo teclado funcional.",
      "O operador deve correr ao passadiço e assumir o leme pelo modo manual mecânico.",
      "As máquinas devem ser paradas imediatamente pelo botão de emergência.",
      "O controle do navio deve ser transferido para o COC através da rede secundária."
    ],
    "answer": "Os comandos serão enviados através do sistema de comunicações interiores ao CCM, que aciona comandos através do respectivo teclado funcional.",
    "explanation": "Se o console Vista do passadiço falhar no modo DEM, as instruções de propulsão são repassadas via fonoclama/CI para o CCM, onde o operador comanda pelos teclados funcionais."
  },
  {
    "question": "Descreva a diferença entre interloques e inibições no SCMPA:",
    "options": [
      "Interloques podem ser contornados (by-passando); Inibições não podem ser contornadas.",
      "Interloques impedem a partida de emergência; Inibições são apenas informativos.",
      "Interloques atuam apenas nas turbinas; Inibições atuam apenas nos motores diesel.",
      "Interloques não podem ser contornados; Inibições podem ser contornadas pelo operador."
    ],
    "answer": "Interloques podem ser contornados (by-passando); Inibições não podem ser contornadas.",
    "explanation": "Interloques representam travas de segurança que admitem desvio operacional consciente (by-pass pelo operador); inibições são condições impeditivas absolutas impostas pelo sistema para evitar catástrofe mecânica."
  },
  {
    "question": "Cite quatro subdivisões presentes na tela 'Sistema Hidráulico do HPC':",
    "options": [
      "Pressão do sistema HPC, Caixa comando HPC, Tanque de gravidade e Tanque de dreno (além de Bomba elétrica e Bomba de suplemento).",
      "Pressão do óleo combustível, Tanque de decantação, Centrifugadora e Coletor de vapor.",
      "Circuito de água salgada, Condensador de ar, Filtro de admissão e Descarga de gases.",
      "Leme principal, Madre do leme, Cilindro do leme e Válvula solenoide direcional."
    ],
    "answer": "Pressão do sistema HPC, Caixa comando HPC, Tanque de gravidade e Tanque de dreno (além de Bomba elétrica e Bomba de suplemento).",
    "explanation": "A tela do sistema hidráulico do HPC subdivide-se nas seções: Pressão do sistema HPC, Caixa comando HPC, Tanque de gravidade, Tanque de dreno, Bomba elétrica e Bomba de suplemento."
  },
  {
    "question": "No SCMPA da FINDEP, descreva a função da tela 'Geral da Propulsão':",
    "options": [
      "É representar um panorama geral do sistema de propulsão e de alguns sistemas auxiliares.",
      "Apresentar o histórico completo de avarias elétricas dos últimos 30 dias.",
      "Controlar individualmente as luzes de navegação e projetores do navio.",
      "Realizar a medição de emissões de fumaça na chaminé da turbina a gás."
    ],
    "answer": "É representar um panorama geral do sistema de propulsão e de alguns sistemas auxiliares.",
    "explanation": "Na Fragata Independência, a Tela Geral da Propulsão visa oferecer a imagem sinótica e integrada de todo o trem de força e auxiliares vitais do navio."
  },
  {
    "question": "Quais são os significados das siglas DESSI, HPC, SCA, SCADA e SCMPA?",
    "options": [
      "DESSI: Indicador da Velocidade Efetiva Desejada do eixo; HPC: Hélice de passo controlado; SCA: Sistema de Controle e Acionamento; SCADA: Aquisição de dados e controle de supervisão; SCMPA: Sistema de controle e Monitoração de Propulsão e Auxiliares.",
      "DESSI: Dispositivo Elétrico de Sobrecarga; HPC: Hidráulica de Pressão Contínua; SCA: Sistema de Combate Avançado; SCADA: Sistema de Controle de Avarias; SCMPA: Sistema de Comunicação Militar.",
      "DESSI: Demanda Efetiva de Segurança de Sinal; HPC: Hélice Principal Central; SCA: Sensor de Controle Angular; SCADA: Servidor Central de Apoio e Dados; SCMPA: Sala de Controle de Máquinas e Propulsão.",
      "DESSI: Desvio de Rumo Instantâneo; HPC: Hélice Propulsora de Combate; SCA: Seletor de Carga Auxiliar; SCADA: Software de Coleta e Análise de Dados; SCMPA: Sistema Central de Manobra e Pilotagem."
    ],
    "answer": "DESSI: Indicador da Velocidade Efetiva Desejada do eixo; HPC: Hélice de passo controlado; SCA: Sistema de Controle e Acionamento; SCADA: Aquisição de dados e controle de supervisão; SCMPA: Sistema de controle e Monitoração de Propulsão e Auxiliares.",
    "explanation": "Definições técnicas da doutrina naval: DESSI (Velocidade Efetiva Desejada), HPC (Hélice de Passo Controlado), SCA (Sistema de Controle e Acionamento), SCADA (Supervisory Control and Data Acquisition) e SCMPA (Sistema de Controle e Monitoração de Propulsão e Auxiliares)."
  },
  {
    "question": "Qual estação de trabalho, além de suportar a IHM, hospeda o subsistema supervisório e tem a capacidade de comunicação com as remotas?",
    "options": [
      "Estação SCADA.",
      "Estação Vista.",
      "Terminal de emergência da praça de máquinas.",
      "Console do radar de navegação."
    ],
    "answer": "Estação SCADA.",
    "explanation": "A Estação SCADA é o nó principal do sistema, rodando o motor supervisório e mantendo comunicação física/lógica direta com as remotas."
  },
  {
    "question": "Qual estação permite a mesma funcionalidade operacional das estações SCADA, sem possuir o recurso de comunicação com as remotas e hospedar as funcionalidades de supervisão?",
    "options": [
      "Estação Vista.",
      "Estação SCADA.",
      "Painel Remota.",
      "Posto Local de Manobra."
    ],
    "answer": "Estação Vista.",
    "explanation": "A Estação Vista é uma estação cliente IHM leve: reproduz todas as telas de manobra, mas consome os dados e comandos despachados através do SCADA."
  },
  {
    "question": "Como é dividida fisicamente a estação de trabalho do SCMPA?",
    "options": [
      "Monitor de vídeo, Teclado funcional, Teclado padrão e Track-ball.",
      "Monitor touch-screen, Joystick analógico e Painel de disjuntores.",
      "Tela CRT, Teclado militarizado de silicone e Mouse óptico.",
      "Terminal de texto, Impressora de linha e Gravador de fita magnética."
    ],
    "answer": "Monitor de vídeo, Teclado funcional, Teclado padrão e Track-ball.",
    "explanation": "Cada console físico do SCMPA compreende: 1 monitor de vídeo colorido de alta resolução, 1 teclado funcional com teclas de comando dedicadas, 1 teclado padrão de dados e 1 trackball militar."
  },
  {
    "question": "No teclado funcional, cujas teclas são dedicadas a comandos específicos do sistema, quais são os tipos de comandos?",
    "options": [
      "Comandos de emergência, Comandos de propulsão e Telégrafos.",
      "Comandos de navegação, Comandos de tiro e Comunicações.",
      "Controle de luzes, Ventilação e Esgoto de porões.",
      "Funções multimídia, Ajuste de brilho e Reinicialização de sistema."
    ],
    "answer": "Comandos de emergência, Comandos de propulsão e Telégrafos.",
    "explanation": "As teclas do teclado funcional são agrupadas em: Comandos de Emergência, Comandos de Propulsão e Telégrafos de Manobra."
  },
  {
    "question": "Por quem as configurações do SCMPA só podem ser efetuadas?",
    "options": [
      "Classe supervisor ou superior.",
      "Qualquer operador logado no passadiço.",
      "Apenas operadores do CCM de quarto de serviço.",
      "Nível visitante em modo de demonstração."
    ],
    "answer": "Classe supervisor ou superior.",
    "explanation": "Alterações de parâmetros e configurações do sistema são restritas a usuários da classe Supervisor ou perfil de Manutenção."
  },
  {
    "question": "Qual tecla retarda a ocorrência do desarme da TP (Turbina de Potência) enquanto for mantida pressionada?",
    "options": [
      "Contorna Desarme da TP.",
      "Tudo Adiante Emergência.",
      "Cancela Seleção.",
      "Reset de Watchdog."
    ],
    "answer": "Contorna Desarme da TP.",
    "explanation": "A tecla de emergência 'Contorna Desarme da TP' permite ao operador sobrepor temporariamente o desarme automático da turbina de potência durante situações críticas em que a manutenção da propulsão é vital."
  },
  {
    "question": "Quais são as 4 diferentes classes de usuários no SCMPA?",
    "options": [
      "Operadores do CCM, Operadores do Passadiço, Supervisores e Manutenção.",
      "Oficiais, Suboficiais, Sargentos e Marinheiros.",
      "Comando, Navegação, Máquinas e Armamento.",
      "Administrador, Convidado, Técnico e Instrutor."
    ],
    "answer": "Operadores do CCM, Operadores do Passadiço, Supervisores e Manutenção.",
    "explanation": "O modelo de segurança do SCMPA contempla 4 perfis de privilégios de acesso: Operadores do CCM, Operadores do Passadiço, Supervisores e Manutenção."
  },
  {
    "question": "Qual é a tela inicial exibida na Estação Central (Vista)?",
    "options": [
      "Com informações de algumas auxiliares: incêndio, aguada, GOR e Ar condicionado.",
      "Tela de controle das turbinas a gás em regime de combate.",
      "Visão esquemática das caixas redutoras e linhas de eixo.",
      "Diagnóstico de links ópticos de memórias refletivas."
    ],
    "answer": "Com informações de algumas auxiliares: incêndio, aguada, GOR e Ar condicionado.",
    "explanation": "A Estação Central (Vista) abre por padrão a tela sinótica dos serviços essenciais de apoio: incêndio, aguada, GOR (Geração de Óleo e Resíduos) e Ar Condicionado."
  },
  {
    "question": "Como é indicado onde está o controle da propulsão no objeto da área de indicações de estações de trabalho em serviço?",
    "options": [
      "Se dá através de uma flecha vermelha.",
      "Por um círculo verde piscando.",
      "Por um texto em negrito sublinhado.",
      "Pela mudança de cor do fundo da tela inteira."
    ],
    "answer": "Se dá através de uma flecha vermelha.",
    "explanation": "A custódia do controle ativo da propulsão (Passadiço ou CCM) é apontada graficamente por uma flecha vermelha indicativa na barra de estações."
  },
  {
    "question": "Como se indica qual estação está servindo como SCADA para o Vista que está exibindo a tela?",
    "options": [
      "O bordo branco em volta do quadrado indica.",
      "Por um asterisco ao lado do nome da estação.",
      "Por um sinal sonoro emitido ao clicar no console.",
      "Pela ausência do ícone do trackball na barra de status."
    ],
    "answer": "O bordo branco em volta do quadrado indica.",
    "explanation": "Uma moldura/bordo branco destacado ao redor do ícone quadrado da estação identifica qual SCADA está servindo de fonte de dados para aquele console Vista."
  },
  {
    "question": "O estado de cada estação é mostrado através de um código de cores. Quais são essas cores e seus significados?",
    "options": [
      "Verde claro: ativa e com operador; Verde escuro: só estação de BB e BE estão ativas; Cinza: estação ativa mas não logada; Vermelho: estação com falha.",
      "Azul: online; Amarelo: em espera; Verde: desligada; Preto: erro de barramento.",
      "Branco: passadiço ativo; Laranja: CCM em combate; Verde: manutenção; Roxo: falha geral.",
      "Verde: operacional; Amarelo: aviso; Vermelho: desarme total; Preto: desconectada."
    ],
    "answer": "Verde claro: ativa e com operador; Verde escuro: só estação de BB e BE estão ativas; Cinza: estação ativa mas não logada; Vermelho: estação com falha.",
    "explanation": "A convenção de cores nas estações é rigorosa: Verde Claro = em serviço logada; Verde Escuro = estações de bordos ativas; Cinza = console ligado sem operador autenticado; Vermelho = nó com falha."
  },
  {
    "question": "Nos objetos que indicam o estado das remotas, qual o significado dos textos 'force' e 'fontes'?",
    "options": [
      "Texto 'force': amarelo se existir canal na remota forçado (cinza se não forçado); Texto 'fontes': amarelo se houver problema nas fontes da remota (cinza se normal).",
      "Texto 'force': amarelo indica sobrecarga mecânica; Texto 'fontes': amarelo indica bateria do navio descarregada.",
      "Texto 'force': cinza indica falha de CPU; Texto 'fontes': cinza indica desligamento geral.",
      "Texto 'force': vermelho indica comando rejeitado; Texto 'fontes': vermelho indica desarme de 440V."
    ],
    "answer": "Texto 'force': amarelo se existir canal na remota forçado (cinza se não forçado); Texto 'fontes': amarelo se houver problema nas fontes da remota (cinza se normal).",
    "explanation": "Nos indicadores de diagnóstico da remota: 'force' amarelo avisa que uma entrada/saída física foi forçada manualmente via software (cinza = livre); 'fontes' amarelo alerta anomalia de tensão/alimentação nas fontes da remota (cinza = alimentações nominais)."
  },
  {
    "question": "O texto 'FORCE' em preto com o fundo piscando em vermelho indica que a remota está em estado de:",
    "options": [
      "FAIL SET (alarme).",
      "Funcionamento normal com sobrecarga térmica.",
      "Modo teste de bancada desconectado.",
      "Sincronismo de rede concluído com sucesso."
    ],
    "answer": "FAIL SET (alarme).",
    "explanation": "Quando o campo FORCE exibe texto em preto sobre fundo vermelho piscante, a remota entrou em estado crítico de alarme FAIL SET."
  },
  {
    "question": "No caso de desativação ou falha de uma das estações, qual é a hierarquia de prioridade das estações?",
    "options": [
      "1º Central, 2º Bombordo (BB), 3º Boreste (BE).",
      "1º Passadiço, 2º Boreste (BE), 3º Bombordo (BB).",
      "1º Boreste (BE), 2º Central, 3º Bombordo (BB).",
      "1º Bombordo (BB), 2º Boreste (BE), 3º Central."
    ],
    "answer": "1º Central, 2º Bombordo (BB), 3º Boreste (BE).",
    "explanation": "A ordem hierárquica sucessória para absorver o comando e supervisão em caso de avaria é: 1º Estação Central, seguida de 2º Bombordo (BB) e 3º Boreste (BE)."
  },
  {
    "question": "Sobre os indicadores de temperatura sensitivos, o que acontece no caso de alarme?",
    "options": [
      "A moldura pisca em amarelo; se o alarme persistir após o reconhecimento, fixa acesa continuamente; se a causa cessar após o reconhecimento, a lâmpada apaga.",
      "O indicador pisca em vermelho e desarma imediatamente a máquina sem intervenção do operador.",
      "A tela emite aviso sonoro e desabilita a visualização do bordo afetado.",
      "A cor do texto muda para azul e o sensor é reinicializado automaticamente."
    ],
    "answer": "A moldura pisca em amarelo; se o alarme persistir após o reconhecimento, fixa acesa continuamente; se a causa cessar após o reconhecimento, a lâmpada apaga.",
    "explanation": "Dinâmica do alarme de temperatura: moldura pisca amarelo para chamar atenção; após ser reconhecida pelo operador, permanece acesa fixa em amarelo se o valor ainda estiver fora dos limites; extingue-se assim que a temperatura retornar à faixa normal."
  },
  {
    "question": "Quais são as 3 formas de reconhecimento para os alarmes no SCMPA?",
    "options": [
      "1. Clicando com a tecla do meio do Track-ball sobre a linha de alarme; 2. Clicando com a tecla do meio sobre o objeto que indica o alarme; 3. Clicando com o botão direito sobre a linha ou objeto e selecionando 'aceitar' ou 'aceitar todos'.",
      "1. Pressionar ESC duas vezes; 2. Girar a chave de emergência; 3. Digitar a senha de supervisor no console.",
      "1. Pressionar a barra de espaço; 2. Reiniciar o monitor de vídeo; 3. Ligar para o passadiço via interfone.",
      "1. Clicar duas vezes com o botão esquerdo no relógio; 2. Desligar o alarme sonoro na chave geral; 3. Efetuar logoff."
    ],
    "answer": "1. Clicando com a tecla do meio do Track-ball sobre a linha de alarme; 2. Clicando com a tecla do meio sobre o objeto que indica o alarme; 3. Clicando com o botão direito sobre a linha ou objeto e selecionando 'aceitar' ou 'aceitar todos'.",
    "explanation": "O operador pode reconhecer alarmes de 3 modos: clicando com o botão do meio do trackball na lista de alarmes, no objeto gráfico emissor, ou acionando com o botão direito para o menu contextual ('aceitar' / 'aceitar todos')."
  },
  {
    "question": "Qualquer que seja o modo de partida da TG (normal, seca ou teste), na ocorrência de uma condição de inibição o que acontece se tentar ligar a turbina?",
    "options": [
      "Isso não será possível na condição inibição e será exibida uma mensagem.",
      "A turbina partirá normalmente em potência reduzida de emergência.",
      "O sistema contorna a inibição automaticamente após 30 segundos de insistência.",
      "A partida prosseguirá apenas se a chave de segurança estiver inserida."
    ],
    "answer": "Isso não será possível na condição inibição e será exibida uma mensagem.",
    "explanation": "As inibições bloqueiam categoricamente a sequência de disparo e acendimento da turbina a gás, notificando o operador através de mensagem de advertência na tela."
  },
  {
    "question": "Ao clicar no botão de 'Visualizações das Inibições', o que acontece caso alguma das inibições de partida esteja ativa?",
    "options": [
      "O motor não poderá partir e tanto o botão quanto as lâmpadas indicativas sinalizarão isto mudando de verde para vermelho.",
      "O motor partirá normalmente, mas as lâmpadas piscarão em azul.",
      "O operador poderá by-passar a condição clicando com o botão direito do track-ball.",
      "Apenas a corneta sonora do CCM tocará, mantendo os botões verdes."
    ],
    "answer": "O motor não poderá partir e tanto o botão quanto as lâmpadas indicativas sinalizarão isto mudando de verde para vermelho.",
    "explanation": "Com inibição ativa, a partida é eletricamente bloqueada e a interface destaca a condição impeditiva comutando a sinalização de verde para vermelho vivo."
  },
  {
    "question": "Ao clicar no botão de 'Visualização de Interloques', se algum deles não for cumprido o que acontecerá?",
    "options": [
      "A máquina só partirá desde que seja contornado pelo operador, e o botão e as lâmpadas indicativas sinalizarão isto mudando de verde para amarelo.",
      "A máquina nunca poderá partir até que a falha física seja reparada, sem possibilidade de contorno.",
      "O sistema desliga compulsoriamente os geradores de serviço e ativa o modo combate.",
      "O comando é transferido compulsoriamente para o controle local de emergência."
    ],
    "answer": "A máquina só partirá desde que seja contornado pelo operador, e o botão e as lâmpadas indicativas sinalizarão isto mudando de verde para amarelo.",
    "explanation": "Ao contrário das inibições, os interloques sinalizam pendências em amarelo, permitindo que o operador execute o procedimento de contorno (by-pass) para viabilizar a partida da máquina."
  },
  {
    "question": "Quais são os objetos presentes na tela 'Sistema Hidráulico do HPC'?",
    "options": [
      "Pressão do sistema HPC de BB e BE, Tanque de gravidade de BB e BE, Tanque de dreno de BB e BE, Bomba de suplemento de BB e BE e Temperatura de BB e BE.",
      "Cilindro de ar comprimido, Reservatório de graxa das aletas, Bomba de esgoto e Ejetor de vácuo.",
      "Medidor de cavitação, Válvula de fundo de mar, Sensor de salinidade e Odômetro de fundo.",
      "Circuito de combustível pesado, Aquecedor elétrico, Visor de chama e Bomba dosadora."
    ],
    "answer": "Pressão do sistema HPC de BB e BE, Tanque de gravidade de BB e BE, Tanque de dreno de BB e BE, Bomba de suplemento de BB e BE e Temperatura de BB e BE.",
    "explanation": "A tela do sistema hidráulico do HPC monitora: Pressões do HPC (BB/BE), Tanques de gravidade (BB/BE), Tanques de dreno (BB/BE), Bombas de suplemento (BB/BE) e Temperaturas do óleo hidráulico (BB/BE)."
  },
  {
    "question": "Qual é a função da tela Geral de Propulsão no SCMPA?",
    "options": [
      "Apresentar um panorama geral do sistema de propulsão e de alguns sistemas auxiliares relevantes diretamente envolvidos na propulsão.",
      "Configurar a arquitetura de rede TCP/IP das placas Ethernet do navio.",
      "Monitorar os níveis de água potável e água servida de todos os conveses.",
      "Exibir a situação tática da superfície e alvos aéreos para o oficial de manobra."
    ],
    "answer": "Apresentar um panorama geral do sistema de propulsão e de alguns sistemas auxiliares relevantes diretamente envolvidos na propulsão.",
    "explanation": "A Tela Geral de Propulsão consolida a visualização executiva de todos os componentes primários de propulsão e serviços essenciais associados."
  },
  {
    "question": "Quais objetos a tela Geral de Propulsão apresenta esquematicamente?",
    "options": [
      "Turbinas 1 e 2, MCP's 1, 2, 3 e 4, Engrenagens redutora e Elevadoras e Embreagens, parte do sistema de Óleo Combustível, Óleo Lubrificante, Hidráulico do HPC e Descarga de gases.",
      "Canhões de proa, Lançadores de mísseis, Radares de tiro e Sonar de casco.",
      "Apenas o esquema elétrico unifilar dos quatro geradores a diesel de 440VCA.",
      "Somente o diagrama de ventilação mecânica e condicionadores de ar das praças de máquinas."
    ],
    "answer": "Turbinas 1 e 2, MCP's 1, 2, 3 e 4, Engrenagens redutora e Elevadoras e Embreagens, parte do sistema de Óleo Combustível, Óleo Lubrificante, Hidráulico do HPC e Descarga de gases.",
    "explanation": "A sinóptica exibe: Turbinas 1 e 2, MCPs 1 a 4, caixas redutoras/elevadoras, embreagens, linhas de combustível, óleo lubrificante, óleo do HPC e coletores de descarga de gases de combustão."
  },
  {
    "question": "O que acontece quando o painel de uma remota é colocado em emergência?",
    "options": [
      "A lâmpada de emergência passa a ficar acesa em vermelho sem piscar e todos os botões de comando da IHM ficam desabilitados.",
      "Todos os motores do navio aceleram imediatamente para a velocidade máxima de emergência.",
      "Apenas a estação do passadiço perde o controle, mantendo os comandos ativos no CCM.",
      "O sistema apaga as telas dos monitores e ativa o telégrafo mecânico de emergência."
    ],
    "answer": "A lâmpada de emergência passa a ficar acesa em vermelho sem piscar e todos os botões de comando da IHM ficam desabilitados.",
    "explanation": "Ao ativar a emergência na remota, a lâmpada vermelha de emergência fixa acesa contínua e a IHM bloqueia os botões para evitar interferências de comando remotas."
  },
  {
    "question": "O que acontece caso o controle esteja com o CCM e aparecer na tela a janela 'ESTAÇÃO DO PASSADIÇO SOLICITA CONTROLE CONFIRMAR'?",
    "options": [
      "Os botões ficam todos desabilitados e só haverá a opção YES ou NO; clicando em YES, a janela se fecha e o operador CCM passa o controle para o passadiço.",
      "O controle é transferido imediatamente de forma compulsória sem depender de resposta do operador.",
      "A janela é puramente informativa e não bloqueia nenhuma operação na tela do CCM.",
      "Caso o operador clique em NO, a estação do passadiço é desconectada da rede por segurança."
    ],
    "answer": "Os botões ficam todos desabilitados e só haverá a opção YES ou NO; clicando em YES, a janela se fecha e o operador CCM passa o controle para o passadiço.",
    "explanation": "Na transferência de controle do CCM para o Passadiço, a janela de confirmação retém a atenção travando comandos até que o operador selecione YES (efetivando a passagem de controle) ou NO (recusando a solicitação)."
  },
  {
    "question": "Como são disponibilizados e acessados os relatórios de operação no sistema SCMPA?",
    "options": [
      "Por meio de um conjunto de relatórios pré-definidos acessados pelo botão \"Utilitários\" na área de navegação, permitindo consultas filtradas por data e hora.",
      "Através do menu de manutenção avançada, mediante inserção da chave física de segurança na remota do CCM.",
      "Exclusivamente por exportação automática diária enviada às estações VISTA localizadas no passadiço.",
      "Através de comandos manuais no terminal SCADA executados apenas durante o modo FINDEP."
    ],
    "answer": "Por meio de um conjunto de relatórios pré-definidos acessados pelo botão \"Utilitários\" na área de navegação, permitindo consultas filtradas por data e hora.",
    "explanation": "Os relatórios no SCMPA são pré-definidos (alarmes, eventos e variáveis analógicas) e acessados pelo botão 'Utilitários' na área de navegação, permitindo consulta por data e hora."
  },
  {
    "question": "Na janela 'Detalhar Horímetro' da Turbina a Gás (TG), como são categorizadas as faixas de temperatura T.E.T.P. para o registro do tempo efetivo das Condições A, B, C e D?",
    "options": [
      "Condição A (T.E.T.P. acima de 635 °C), Condição B (595 a 635 °C), Condição C (555 a 595 °C) e Condição D (200 a 555 °C).",
      "Condição A (T.E.T.P. acima de 800 °C), Condição B (600 a 800 °C), Condição C (400 a 600 °C) e Condição D (abaixo de 400 °C).",
      "Condição A (T.E.T.P. acima de 500 °C), Condição B (400 a 500 °C), Condição C (300 a 400 °C) e Condição D (100 a 300 °C).",
      "Condição A (T.E.T.P. acima de 700 °C), Condição B (550 a 700 °C), Condição C (350 a 550 °C) e Condição D (150 a 350 °C)."
    ],
    "answer": "Condição A (T.E.T.P. acima de 635 °C), Condição B (595 a 635 °C), Condição C (555 a 595 °C) e Condição D (200 a 555 °C).",
    "explanation": "A janela do Horímetro divide as faixas de T.E.T.P. em: Condição A (> 635 °C), Condição B (595 a 635 °C), Condição C (555 a 595 °C) e Condição D (200 a 555 °C)."
  },
  {
    "question": "No SCMPA, qual é a regra de seleção automática e a sinalização visual na IHM para os sensores redundantes de rotação (MT1/MT2) e de passo (P8A/P8B)?",
    "options": [
      "Estando ambos confiáveis (com 'tick'), o SCMPA seleciona o sensor principal (MT1 ou P8A), indicando a seleção ao mudar a cor do título de cinza escuro para verde.",
      "O operador deve obrigatoriamente selecionar manualmente o sensor ativo; a seleção é sinalizada por um ícone de chave amarela no painel.",
      "O sistema alterna automaticamente o uso dos sensores a cada 30 minutos, piscando o fundo do indicador na cor vermelha.",
      "O sensor secundário (MT2 ou P8B) possui prioridade permanente sobre o principal, ficando com o título na cor azul."
    ],
    "answer": "Estando ambos confiáveis (com 'tick'), o SCMPA seleciona o sensor principal (MT1 ou P8A), indicando a seleção ao mudar a cor do título de cinza escuro para verde.",
    "explanation": "Quando ambos os sensores estão confiáveis (marcados com 'tick'), o SCMPA seleciona o principal (MT1/P8A) e altera a cor do título de cinza escuro para verde."
  },
  {
    "question": "Qual é a regra de permissão de acesso à tela 'Sistema de Óleo Combustível' nos consoles de operação do SCMPA?",
    "options": [
      "Em condições normais, só pode ser exibida pelo Console Central (CCM), sendo bloqueada para BB e BE, a menos que a Estação Central esteja fora de operação ou em configuração especial.",
      "Pode ser exibida de forma simultânea e sem restrições por todas as estações de trabalho (Central, BB, BE e Passadiço).",
      "Trata-se de uma tela de acesso exclusivo do Passadiço para garantir o controle da manobra de transferência.",
      "Pode ser acessada apenas por operadores do nível Manutenção com a chave física alojada na remota."
    ],
    "answer": "Em condições normais, só pode ser exibida pelo Console Central (CCM), sendo bloqueada para BB e BE, a menos que a Estação Central esteja fora de operação ou em configuração especial.",
    "explanation": "Em operação normal, a tela do Sistema de Óleo Combustível é restrita ao Console Central, ficando bloqueada para BB e BE, salvo se a estação central estiver fora de operação."
  },
  {
    "question": "Quantas configurações de máquinas o SCMPA contempla para a planta CODOG e o que representam especificamente as opções numeradas de 17 a 24?",
    "options": [
      "Contempla 24 configurações no total, sendo as opções de 17 a 24 representativas da operação em monoeixo (um eixo ativo e o outro desativado, indicado por 'XX').",
      "Contempla 12 configurações no total, sendo as opções de 17 a 24 reservadas para o modo de operação de emergência (DEM).",
      "Contempla 24 configurações no total, sendo as opções de 17 a 24 exclusivas para o alinhamento simultâneo das duas Turbinas a Gás.",
      "Contempla 16 configurações padrão e 8 configurações de teste ativadas apenas na FINDEP."
    ],
    "answer": "Contempla 24 configurações no total, sendo as opções de 17 a 24 representativas da operação em monoeixo (um eixo ativo e o outro desativado, indicado por 'XX').",
    "explanation": "A tabela do sistema CODOG contempla 24 configurações de máquinas; da 17 à 24, a marcação 'XX' em um dos bordos indica operação monoeixo."
  },
  {
    "question": "Nas réguas analógicas de medição do módulo da Turbina a Gás (TG), em quais unidades de medida são apresentadas a Vibração (da T.P. e G.G.) e a Queda de Pressão no Conduto de Admissão?",
    "options": [
      "Vibração em micrômetros (µm) e Queda de pressão em polegadas de água (in H2O).",
      "Vibração em milímetros por segundo (mm/s) e Queda de pressão em bar (bar).",
      "Vibração em hertz (Hz) e Queda de pressão em quilopascal (kPa).",
      "Vibração em rotações por minuto (rpm) e Queda de pressão em libras por polegada quadrada (psi)."
    ],
    "answer": "Vibração em micrômetros (µm) e Queda de pressão em polegadas de água (in H2O).",
    "explanation": "No painel e alarmes da TG, a vibração (T.P. e G.G.) é lida em micrômetros (µm) e a queda de pressão de admissão em polegadas de água (in H2O)."
  }
];
