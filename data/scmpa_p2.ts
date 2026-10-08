import { Question } from "../types/question";

export const scmpaP2Questions: Question[] = [
  {
    "question": "As falhas remotas podem ser divididas em:",
    "options": [
      "6 categorias: CPU; memórias refletivas; alimentação; entrada e saída (E/S); componentes eletrônicos; cabeamento.",
      "4 categorias: rede; energia; processamento; tela.",
      "3 categorias: hardware; software; firmware.",
      "5 categorias: telégrafo; comunicação; painel; botões; sirenes."
    ],
    "answer": "6 categorias: CPU; memórias refletivas; alimentação; entrada e saída (E/S); componentes eletrônicos; cabeamento.",
    "explanation": "As falhas na remota subdividem-se em 6 categorias: 1. Falha no cartão da CPU; 2. Falha nos cartões de memórias refletivas; 3. Falha na alimentação; 4. Falha nos cartões de entrada e saída (E/S); 5. Falha nos componentes eletrônicos; 6. Falha no cabeamento."
  },
  {
    "question": "O que acontece quando os cartões estão em bom funcionamento?",
    "options": [
      "O cartão de processamento é exibido na cor cinza claro e seu LED indicador permanece piscando.",
      "Eles piscam em vermelho e a tela congela.",
      "Os LEDs ficam completamente apagados e o cartão fica na cor preta.",
      "Os cartões ficam amarelos e soam uma buzina continuamente."
    ],
    "answer": "O cartão de processamento é exibido na cor cinza claro e seu LED indicador permanece piscando.",
    "explanation": "O cartão de processamento é exibido na cor cinza claro e seu LED indicador permanece piscando."
  },
  {
    "question": "Ao detectar uma falha nas placas de entrada ou de saída, qual o procedimento de manutenção?",
    "options": [
      "O procedimento de manutenção padrão é a substituição da placa avariada.",
      "Reiniciar o servidor SCADA e aguardar a reconexão automática.",
      "Limpar os conectores da placa com álcool isopropílico e reposicioná-la no rack.",
      "Fazer um bypass no circuito sentinela e operar em modo manual."
    ],
    "answer": "O procedimento de manutenção padrão é a substituição da placa avariada.",
    "explanation": "O procedimento de manutenção padrão é a substituição da placa avariada."
  },
  {
    "question": "Como detectar a falha no cartão da CPU?",
    "options": [
      "As telas referentes a essa remota perdem suas cores normais, passando a mostrar tudo em preto, indicando a inoperância do sistema.",
      "Aparece uma mensagem pop-up de 'Erros de CPU' em todas as estações do navio.",
      "Ocorre o desarme imediato de todos os motores propulsores.",
      "O alarme sonoro principal do navio dispara sem indicação visual na tela."
    ],
    "answer": "As telas referentes a essa remota perdem suas cores normais, passando a mostrar tudo em preto, indicando a inoperância do sistema.",
    "explanation": "A falha no cartão da CPU da remota faz com que as telas referentes a essa remota percam suas cores normais, passando a mostrar tudo em preto, indicando a inoperância do sistema."
  },
  {
    "question": "O que acontece quando ocorre uma falha em um dos cartões de memórias reflexivas?",
    "options": [
      "É gerado um alarme. A outra placa de memória refletiva assume a operação automaticamente, sem prejuízo para a monitoração.",
      "A remota para imediatamente e entra no modo de falha crítica, congelando todos os parâmetros.",
      "O sistema desliga e só pode ser religado com a chave de manutenção.",
      "Ocorre a perda de comunicação entre os SCADAs, forçando a operação local."
    ],
    "answer": "É gerado um alarme. A outra placa de memória refletiva assume a operação automaticamente, sem prejuízo para a monitoração.",
    "explanation": "É gerado um alarme no sistema. Automaticamente, a outra placa de memória refletiva assume a operação, sem prejuízo para a monitoração do sistema. (Obs.: Se ambas falharem, a remota fica inoperante e as telas ficam pretas)."
  },
  {
    "question": "Defina falha nas redes:",
    "options": [
      "É a falha em pelo menos uma placa da respectiva rede (placa Ethernet ou memória refletiva) ou a falha física no meio de transmissão (cabos).",
      "É a desconexão apenas da rede sem fio dos sensores.",
      "É a falta de energia nos painéis de iluminação.",
      "É um erro de calibração nos indicadores analógicos do telégrafo."
    ],
    "answer": "É a falha em pelo menos uma placa da respectiva rede (placa Ethernet ou memória refletiva) ou a falha física no meio de transmissão (cabos).",
    "explanation": "É a falha em pelo menos uma placa da respectiva rede (placa Ethernet ou placa de memória refletiva) ou a falha física no meio de transmissão (cabos de fibra/cobre)."
  },
  {
    "question": "Descreva o símbolo da falha nas memórias reflexivas:",
    "options": [
      "O objeto indicador do estado da rede e as conexões da estação SCADA afetada mudam da cor verde para vermelho (ou retângulo piscando em vermelho).",
      "Um ícone de bateria fraca amarelo surge no canto superior.",
      "Um X azul aparece no lugar da indicação de rpm.",
      "A tela inteira fica cinza com listras pretas."
    ],
    "answer": "O objeto indicador do estado da rede e as conexões da estação SCADA afetada mudam da cor verde para vermelho (ou retângulo piscando em vermelho).",
    "explanation": "O objeto indicador do estado da rede e as conexões da estação SCADA afetada com as demais estações mudam da cor verde para vermelho (ou retângulo/símbolo piscando em vermelho)."
  },
  {
    "question": "Descreva o símbolo da falha na rede Ethernet:",
    "options": [
      "No Diagrama Geral de Estado, a estação ou o trecho afetado é representado com um 'X' vermelho sobre a estação e/ou linhas de conexão vermelhas.",
      "Aparece um ícone de cabo desconectado amarelo.",
      "A placa pisca em azul na tela de diagnóstico.",
      "O painel remoto exibe a mensagem 'NO LAN' de forma permanente."
    ],
    "answer": "No Diagrama Geral de Estado, a estação ou o trecho afetado é representado com um 'X' vermelho sobre a estação e/ou linhas de conexão vermelhas.",
    "explanation": "No Diagrama Geral de Estado do Sistema, a estação ou o trecho da rede afetado é representado com um 'X' vermelho sobre a estação e/ou linhas de conexão na cor vermelha."
  },
  {
    "question": "Após o teste do circuito de Watchdog, poderá aparecer uma entre 3 mensagens, quais são elas?",
    "options": [
      "1. 'Teste do Circuito OK'; 2. 'Falha no Teste do Circuito'; 3. 'Falha no Circuito'.",
      "1. 'Aprovado'; 2. 'Recusado'; 3. 'Em andamento'.",
      "1. 'Watchdog on'; 2. 'Watchdog off'; 3. 'Standby'.",
      "1. 'Erro de rede'; 2. 'Erro de hardware'; 3. 'Erro de software'."
    ],
    "answer": "1. 'Teste do Circuito OK'; 2. 'Falha no Teste do Circuito'; 3. 'Falha no Circuito'.",
    "explanation": "1. 'Teste do Circuito OK'; 2. 'Falha no Teste do Circuito'; 3. 'Falha no Circuito'."
  },
  {
    "question": "Quais são as falhas causadoras de fail-set?",
    "options": [
      "Circuito sentinela; falhas nas fontes de 24VDC (1/2, 3/4, 5/6) ou 115VAC da remota; falha de CPU/watchdog; tensões do navio (24VDC/50VDC); controladores TG/Passo/MCP; tensão 24VDC do painel 723.",
      "Curto-circuito na iluminação do CCM, falha na rede Ethernet do passadiço e perda temporária do sinal do telégrafo analógico.",
      "Desarme do disjuntor de força de 440VAC e sobreaquecimento da água de arrefecimento dos motores diesel.",
      "Apenas sobrecarga no gerador de serviço número 1 e desarme das bombas de esgoto da praça de máquinas."
    ],
    "answer": "Circuito sentinela; falhas nas fontes de 24VDC (1/2, 3/4, 5/6) ou 115VAC da remota; falha de CPU/watchdog; tensões do navio (24VDC/50VDC); controladores TG/Passo/MCP; tensão 24VDC do painel 723.",
    "explanation": "Atuação do circuito sentinela; Falha nas fontes de 24VDC (fontes 1/2, 3/4 ou 5/6) do Painel da Remota; Falha na alimentação de 115VAC da Remota; Falha na CPU da Remota / circuitos de watchdog; Falha nas tensões de 24VDC ou 50VDC do navio; Falha nos controladores das TGs, do Passo (HPC) ou dos MCPs; Falha na tensão de 24VDC do painel do 723 ou chave de manutenção na posição 'DESL'."
  },
  {
    "question": "O operador pode retomar o controle do passo através de quais modos?",
    "options": [
      "Através dos modos Remoto / Manual (no painel remoto manual do SCA/HPC no CCM) ou Local (no painel local do HPC).",
      "Apenas pelo modo automático via SCADA central.",
      "Exclusivamente através do telégrafo de emergência no passadiço.",
      "Somente acionando a bomba elétrica auxiliar no modo combate."
    ],
    "answer": "Através dos modos Remoto / Manual (no painel remoto manual do SCA/HPC no CCM) ou Local (no painel local do HPC).",
    "explanation": "O operador pode retomar o controle através dos modos Remoto / Manual (no painel remoto manual do SCA/HPC no CCM) ou Local (no painel local do HPC)."
  },
  {
    "question": "O motor Diesel pode ser controlado por dois controladores distintos. Quais são eles?",
    "options": [
      "O regulador eletrônico digital Woodward 723 e o regulador pneumático PGA.",
      "Controlador hidráulico (Woodward) e controlador eletromecânico (CML).",
      "Controlador servoassistido (MUIRED) e controlador analógico (VCS).",
      "Controlador digital (SCADA) e controlador por cabo teleflex."
    ],
    "answer": "O regulador eletrônico digital Woodward 723 e o regulador pneumático PGA.",
    "explanation": "O regulador eletrônico digital Woodward 723 e o regulador pneumático PGA."
  },
  {
    "question": "Para que o set point PGA é posicionado 10% acima do 723?",
    "options": [
      "Para garantir que o controlador eletrônico digital Woodward 723 seja selecionado automaticamente como o regulador ativo, pois o SCMPA seleciona o de menor set point.",
      "Para garantir que o PGA assuma imediatamente a carga máxima da máquina em caso de manobra rápida.",
      "Para proteger o motor contra sobrevelocidade em caso de aceleração brusca no passadiço.",
      "Para reduzir a pressão do ar de controle do sistema pneumático da máquina principal."
    ],
    "answer": "Para garantir que o controlador eletrônico digital Woodward 723 seja selecionado automaticamente como o regulador ativo, pois o SCMPA seleciona o de menor set point.",
    "explanation": "Para garantir que o controlador eletrônico digital Woodward 723 seja selecionado automaticamente pelo sistema como o regulador primário/ativo em operação normal, visto que o SCMPA seleciona o controlador com o menor set point."
  },
  {
    "question": "O que é necessário para acessar a área de manutenção?",
    "options": [
      "Login com senha das classes Supervisor ou Manutenção e a inserção da chave física de segurança no modo Manutenção no painel da Remota.",
      "Apenas efetuar login como operador do CCM no teclado padrão.",
      "Reiniciar o servidor SCADA e desconectar o console de boreste.",
      "Inserir a senha mestre de navegação no painel do passadiço."
    ],
    "answer": "Login com senha das classes Supervisor ou Manutenção e a inserção da chave física de segurança no modo Manutenção no painel da Remota.",
    "explanation": "É necessário login com senha das classes Supervisor ou Manutenção e a inserção da chave física de segurança no modo Manutenção no painel da Remota."
  },
  {
    "question": "Para os usuários com senha de supervisor, só devem ser acessíveis as quatro primeiras funções. Quais são elas?",
    "options": [
      "Módulo Teste - Boreste; Módulo Teste - Bombordo; Configuração Estações; Ver Tabelas.",
      "Histórico de alarmes, Controle de bombas, By-pass geral e Telégrafo reserva.",
      "Formatação de disco, Calibração de sensores, Modo Combate e Reset de CPU.",
      "Ajuste de ganhos do 723, Configuração de IP, Teste de lâmpadas e Limpeza de filtros."
    ],
    "answer": "Módulo Teste - Boreste; Módulo Teste - Bombordo; Configuração Estações; Ver Tabelas.",
    "explanation": "Módulo Teste - Boreste; Módulo Teste - Bombordo; Configuração Estações; Ver Tabelas."
  },
  {
    "question": "No modo funcionalidade (Módulo de Teste), existem quatro configurações que pode colocar o sistema de propulsão. Quais são elas?",
    "options": [
      "Normal; Engine Test (Teste do Motor); CPP Test (Teste do Passo/HPC); Manual.",
      "Local, Remoto, Telégrafo e Automático.",
      "Cruzeiro, Combate, Manobra e Emergência.",
      "Seca, Molhada, Teste de Voo e Desarme."
    ],
    "answer": "Normal; Engine Test (Teste do Motor); CPP Test (Teste do Passo/HPC); Manual.",
    "explanation": "Normal; Engine Test (Teste do Motor); CPP Test (Teste do Passo/HPC); Manual."
  },
  {
    "question": "Realoção de Estações SCADA e Colapso da IHM: Se ocorrer uma falha grave simultânea nas duas estações de trabalho do tipo SCADA (localizadas em Bombordo e Boreste no CCM), qual será o impacto direto no funcionamento do SCMPA?",
    "options": [
      "Todo o sistema de IHM fica inoperante para todas as estações, devido à perda da comunicação direta com as remotas.",
      "A estação VISTA do Passadiço assume automaticamente a hospedagem do sistema supervisório.",
      "O sistema passa a funcionar em Modo Combate, liberando os acionamentos do telégrafo.",
      "A estação Central assume a comunicação direta com a Remota 1 via cabo RS-232."
    ],
    "answer": "Todo o sistema de IHM fica inoperante para todas as estações, devido à perda da comunicação direta com as remotas.",
    "explanation": "As estações SCADA (BB e BE) são as únicas com enlace direto para as Remotas. A perda simultânea de ambas deixa todo o sistema de IHM inoperante."
  },
  {
    "question": "Diagnóstico e Recurso de 'Force' em Canais de E/S: Para testar e diagnosticar uma suspeita de falha em um canal analógico ou digital de uma placa de entrada/saída (E/S) da Remota, qual recurso a IHM disponibiliza ao operador?",
    "options": [
      "Recurso de 'Forçar' (Force) o canal para um valor desejado e medir com multímetro/voltímetro a saída física da placa.",
      "Acionamento da chave física de emergência no gabinete da remota.",
      "Reinicialização do circuito de Watchdog do SCADA 1.",
      "Comutação do telégrafo de manobra para o modo FINDEP."
    ],
    "answer": "Recurso de 'Forçar' (Force) o canal para um valor desejado e medir com multímetro/voltímetro a saída física da placa.",
    "explanation": "O recurso de Force permite ao operador atribuir um valor fixo a um canal e verificar com instrumento de medição no painel físico da placa se a saída responde corretamente."
  },
  {
    "question": "Procedimento do Operador do CCM em Falha da Remota: Na ocorrência de uma falha completa em uma das Unidades Remotas, qual deve ser a ação imediata do operador no CCM para manter a operação da planta propulsora?",
    "options": [
      "Passar a Turbina para manual local, o HPC para remoto/manual (SCA) e o Diesel para remoto/manual (Woodward 723).",
      "Desligar o No-Break e acionar a bomba de emergência do HPC.",
      "Inserir a chave de segurança na posição 'DESL' e reiniciar a estação SCADA de Boreste.",
      "Alternar a seleção de máquinas para o modo monoeixo 24."
    ],
    "answer": "Passar a Turbina para manual local, o HPC para remoto/manual (SCA) e o Diesel para remoto/manual (Woodward 723).",
    "explanation": "Perante a perda da Remota, o operador no CCM assume o controle da TG em manual local, do HPC via SCA (remoto/manual) e do MCP via regulador 723."
  },
  {
    "question": "Conceito e Atuação do Fail-Set: Qual é a finalidade primária do sistema de Fail-Set quando ativado em um dos subsistemas da propulsão (MCP, TG ou HPC)?",
    "options": [
      "Congelar os set-points fornecidos, mantendo o estado do subsistema igual ao de imediatamente antes da falha.",
      "Desarmar e desligar imediatamente todos os motores Diesel por corte de combustível.",
      "Transferir automaticamente o controle da manobra para as Asas do Passadiço.",
      "Esvaziar os acoplamentos fluídos dos eixos de Bombordo e Boreste."
    ],
    "answer": "Congelar os set-points fornecidos, mantendo o estado do subsistema igual ao de imediatamente antes da falha.",
    "explanation": "A função básica do Fail-Set é o congelamento de segurança dos set-points na posição imediatamente anterior à falha."
  },
  {
    "question": "Retorno ao Modo Automático no Controle do Passo (HPC): Após sanada a causa da falha que provocou o Fail-Set no HPC, quais posições das chaves do painel local e do painel remoto do SCA são exigidas para retornar o controle do passo ao Modo Automático?",
    "options": [
      "Chave do Painel Local em 'REMOTO' e Chave do Painel Remoto em 'AUTOMÁTICO'.",
      "Chave do Painel Local em 'LOCAL' e Chave do Painel Remoto em 'MANUAL'.",
      "Chave do Painel Local em 'TESTE' e Chave do Painel Remoto em 'DESLIGADO'.",
      "Ambas as chaves na posição 'EMERGÊNCIA'."
    ],
    "answer": "Chave do Painel Local em 'REMOTO' e Chave do Painel Remoto em 'AUTOMÁTICO'.",
    "explanation": "Para reestabelecer o modo automático do passo, a chave local do HPC deve estar em 'REMOTO' e a chave remota em 'AUTOMÁTICO'."
  },
  {
    "question": "Causas Específicas de Fail-Set nos Motores Diesel (MCPs): Qual das alternativas abaixo apresenta uma condição que NÃO provoca o estado de Fail-Set nos MCPs?",
    "options": [
      "Seleção da tela do sistema de óleo combustível pelo console Central do CCM.",
      "Falha na alimentação de 115VAC da Remota.",
      "Chave de manutenção na posição 'DESL' (24V 723).",
      "Falha na tensão de 24VDC no painel do 723."
    ],
    "answer": "Seleção da tela do sistema de óleo combustível pelo console Central do CCM.",
    "explanation": "A abertura da tela de Óleo Combustível no console Central é um procedimento operacional normal. As demais opções são causas diretas de Fail-Set nos MCPs."
  },
  {
    "question": "Operação Degrada da Turbina a Gás (TG): Em caso de falha nos circuitos de Watchdog da CPU da Remota ou divergência entre a referência e o retorno do controlador da Turbina, qual é o único modo de operação permitido para a TG?",
    "options": [
      "Operação exclusiva em Modo Local (no painel local PLTG).",
      "Operação em Modo Cruzeiro via Passadiço.",
      "Operação em Modo D.E.M. com confirmação em Bombordo.",
      "Operação remota pelo teclado funcional da estação VISTA."
    ],
    "answer": "Operação exclusiva em Modo Local (no painel local PLTG).",
    "explanation": "Falhas graves de processamento/alimentação associadas à TG forçam a transferência do controle para o modo manual/local direto no PLTG."
  },
  {
    "question": "Módulo de Manutenção e Sincronismo dos SCADAs: No Módulo de Manutenção do SCMPA, qual é a função do comando 'Sincronizar' entre o SCADA 1 e o SCADA 2?",
    "options": [
      "Eliminar diferenças entre os bancos de dados dos dois SCADAs, garantindo que possuam o mesmo conteúdo de tabelas.",
      "Igualar as velocidades de rotação dos eixos de Bombordo e Boreste.",
      "Alinhar o ângulo de passo das duas hélices no valor zero.",
      "Transferir as permissões de acesso do nível Operador para o nível Manutenção."
    ],
    "answer": "Eliminar diferenças entre os bancos de dados dos dois SCADAs, garantindo que possuam o mesmo conteúdo de tabelas.",
    "explanation": "O comando Sincronizar elimina discrepâncias de tabelas e parâmetros entre os bancos de dados dos dois servidores SCADA."
  },
  {
    "question": "Regras Encadeadas de Realocação Automática de Funções (Seção 2.1): Caso ocorram falhas em sequência nas estações de trabalho do CCM, qual é a regra exata de transferência/realocação de funções aplicada pelo SCMPA?",
    "options": [
      "Se BB ou BE falhar, as funções vão para a estação Central; se a Central não estiver funcionando, vão para a de Boreste; se 2 estações do CCM falharem, todas as funções vão para a restante.",
      "Se BB falhar, vai para BE; se BE falhar, vai para o Passadiço; se o Passadiço falhar, o sistema desliga.",
      "Qualquer falha em estação do CCM transfere imediatamente os comandos para a estação VISTA do Passadiço.",
      "As funções de Bombordo só podem ser transferidas para Boreste, nunca para a Central."
    ],
    "answer": "Se BB ou BE falhar, as funções vão para a estação Central; se a Central não estiver funcionando, vão para a de Boreste; se 2 estações do CCM falharem, todas as funções vão para a restante.",
    "explanation": "A regra de realocação é encadeada: se falhar BB ou BE, transfere para a Central; se a Central falhar, transfere para BE; se duas do CCM falharem, transfere para a restante. Se falharem BB e BE (as duas SCADA), o sistema para por falta dos SCADAs."
  },
  {
    "question": "Falha Dupla de Memórias Refletivas na Remota (Seção 2.2): O que ocorre no sistema quando ambas as placas de memória refletiva de uma mesma Unidade Remota falham simultaneamente?",
    "options": [
      "A remota fica inoperante, suas telas mostram tudo em preto e ela fica incapaz de detectar o alarme de 'Falha Watchdog' da outra remota.",
      "A remota continua operando normalmente usando a placa Ethernet sobressalente.",
      "O controle de manobra é transferido automaticamente para a estação VISTA do Passadiço.",
      "O sistema comanda o disparo automático dos flaps de fechamento rápido de todos os MCPs."
    ],
    "answer": "A remota fica inoperante, suas telas mostram tudo em preto e ela fica incapaz de detectar o alarme de 'Falha Watchdog' da outra remota.",
    "explanation": "Se ambas as memórias refletivas da remota falharem, as informações na tela ficam em preto e essa remota perde a capacidade de detectar o alarme de 'Falha Watchdog' da outra."
  },
  {
    "question": "Sequência de Retorno do Passo (HPC) ao Modo Automático (Seção 2.4): Após sanar a causa de um Fail-Set no HPC, qual é a sequência exata de passos que o operador deve seguir para retornar o sistema de passo ao Modo Automático?",
    "options": [
      "Ajustar o DESSI ou a posição atual do passo para eliminar o alarme de desvio Referência/Retorno, verificar/rearmar o fail-set e retornar a chave do painel remoto do SCA para 'AUTOMÁTICO'.",
      "Desligar o painel local, zerar o DESSI e pressionar a tecla 'Tudo Atrás'.",
      "Inserir a chave de segurança na remota, trocar a CPU e selecionar o modo Engine Test.",
      "Alternar a seleção de máquinas para o modo monoeixo 24 e reiniciar o SCADA 1."
    ],
    "answer": "Ajustar o DESSI ou a posição atual do passo para eliminar o alarme de desvio Referência/Retorno, verificar/rearmar o fail-set e retornar a chave do painel remoto do SCA para 'AUTOMÁTICO'.",
    "explanation": "A sequência de retorno ao automático pós Fail-Set no HPC exige: 1) Ajustar DESSI/passo para eliminar alarme de desvio; 2) Rearmar fail-set; 3) Retornar chave do SCA para 'AUTOMÁTICO'."
  },
  {
    "question": "Teclas de Atalho de Aceleração da Navegação (Seção 2.5): No SCMPA, quais são as combinações de teclas do teclado utilizadas para chamar rapidamente as telas do Sistema HPC e do Sistema de Óleo Combustível?",
    "options": [
      "[Ctrl] + [H] para o HPC e [Ctrl] + [C] para Óleo Combustível.",
      "[Alt] + [P] para o HPC e [Alt] + [O] para Óleo Combustível.",
      "[Shift] + [H] para o HPC e [Shift] + [F] para Óleo Combustível.",
      "[F1] para o HPC e [F5] para Óleo Combustível."
    ],
    "answer": "[Ctrl] + [H] para o HPC e [Ctrl] + [C] para Óleo Combustível.",
    "explanation": "Na tabela de teclas de navegação do menu de manutenção, [Ctrl] + [H] abre a tela do HPC e [Ctrl] + [C] abre a tela do Óleo Combustível."
  },
  {
    "question": "Função da Tecla Especial [Shift] + [DESSI] (Seção 2.5): Qual ação é executada ao pressionar a combinação especial de teclas [Shift] + [DESSI] na IHM do SCMPA?",
    "options": [
      "Abre a janela para solicitar o valor de DESSI para ambos os lados (Bombordo e Boreste) simultaneamente.",
      "Cancela imediatamente todas as seleções de máquinas ativas.",
      "Restaura todas as janelas que estavam minimizadas no rodapé.",
      "Dispara o alarme sonoro de teste da buzina de emergência."
    ],
    "answer": "Abre a janela para solicitar o valor de DESSI para ambos os lados (Bombordo e Boreste) simultaneamente.",
    "explanation": "A combinação de teclas especiais [Shift] + [DESSI] abre a janela para solicitar a alteração de DESSI para ambos os bordos simultaneamente."
  },
  {
    "question": "Substituição de Placa de CPU / Estação Sobressalente (Seção 2.5): Ao inicializar uma estação pela primeira vez após ter sido substituída uma placa de CPU por uma sobressalente, como o usuário informa ao sistema a classe dessa nova estação?",
    "options": [
      "A janela 'IHM - Configuração' surge na tela na inicialização para selecionar a classe (CCM/Boreste, CCM/Bombordo, CCM/Centro, Passadiço ou Sobressalente) e clicar em 'Re-iniciar'.",
      "O sistema lê automaticamente a etiqueta RFID gravada no gabinete do console.",
      "É necessário regravar o firmware via cabo serial conectado à remota do Passadiço.",
      "O sistema assume por padrão o perfil de Estação Central sem permitir alteração."
    ],
    "answer": "A janela 'IHM - Configuração' surge na tela na inicialização para selecionar a classe (CCM/Boreste, CCM/Bombordo, CCM/Centro, Passadiço ou Sobressalente) e clicar em 'Re-iniciar'.",
    "explanation": "Na substituição de placa de CPU por sobressalente, surge a janela de configuração na inicialização para o usuário informar a classe da estação (BB, BE, Central, Passadiço ou Sobressalente) e reiniciar a estação."
  }
];
