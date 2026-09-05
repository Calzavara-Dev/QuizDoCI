import type { Question } from "../types/question";

export const governoP1Questions: Question[] = [
  {
    question: "Quantos lemes possui a Fragata MK-10?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2",
    explanation: "A Fragata possui 2 lemes mecanicamente interligados."
  },
  {
    question: "Como os lemes da Fragata MK-10 estão interligados?",
    options: [
      "Eletronicamente",
      "Hidraulicamente",
      "Mecanicamente",
      "Pneumaticamente"
    ],
    answer: "Mecanicamente",
    explanation: "Eles são mecanicamente interligados."
  },
  {
    question: "Que mecanismo transmite o torque para os lemes?",
    options: [
      "Servo motor elétrico",
      "Servo mecanismo hidráulico",
      "Correntes de transmissão",
      "Engrenagens de redução"
    ],
    answer: "Servo mecanismo hidráulico",
    explanation: "A transmissão de torque é feita por um servo mecanismo hidráulico."
  },
  {
    question: "Qual a constituição do servo mecanismo hidráulico?",
    options: [
      "Um cilindro simples",
      "Um par de cilindros com êmbolos de duplo efeito",
      "Dois motores rotativos",
      "Três atuadores lineares"
    ],
    answer: "Um par de cilindros com êmbolos de duplo efeito",
    explanation: "Constituído por um par de cilindros com êmbolos de duplo efeito."
  },
  {
    question: "Quantas unidades de potência hidráulica geram a pressão do sistema?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2",
    explanation: "Existem 2 unidades de potência hidráulica."
  },
  {
    question: "O que interconecta os sistemas de controle elétrico e o hidráulico?",
    options: [
      "Bombas centrífugas",
      "Transformadores isoladores",
      "Válvulas solenoides direcionais",
      "Odômetro do navio"
    ],
    answer: "Válvulas solenoides direcionais",
    explanation: "As válvulas solenoides direcionais são a interconexão."
  },
  {
    question: "Qual é a alimentação das válvulas solenoides direcionais?",
    options: [
      "440V 60Hz",
      "24Vcc",
      "115V 400Hz",
      "115V 60Hz"
    ],
    answer: "115V 60Hz",
    explanation: "São alimentadas com 115V 60Hz."
  },
  {
    question: "Quais são os 3 modos de governo que definem a geração do sinal elétrico?",
    options: [
      "Manual, Secundário, Terciário",
      "Automático, Principal, Ângulos",
      "Remoto, Local, Off",
      "Sincro, Asíncrono, Fixo"
    ],
    answer: "Automático, Principal, Ângulos",
    explanation: "Os modos são Automático, Principal ou Ângulos."
  },
  {
    question: "Como se divide o grande sistema de governo nas Fragatas Niterói?",
    options: [
      "BB e BE",
      "Hidráulico e Elétrico",
      "Controle e Potência",
      "Transmissão e Recepção"
    ],
    answer: "Controle e Potência",
    explanation: "Divide-se em subsistema de controle e subsistema de potência."
  },
  {
    question: "O subsistema de potência é constituído principalmente pelo quê?",
    options: [
      "Painéis e chaves",
      "Bombas e lemes",
      "Conversores e trafos",
      "Giroscópica e odômetro"
    ],
    answer: "Bombas e lemes",
    explanation: "Constituído principalmente pelas bombas e pelos lemes."
  },
  {
    question: "Como o subsistema de controle se divide?",
    options: [
      "Passadiço e CCM",
      "115V e 440V",
      "Primário, Secundário e Emergência",
      "Auto, Principal e Ângulos"
    ],
    answer: "Primário, Secundário e Emergência",
    explanation: "O controle se divide em Primário, Secundário e Emergência.\n\n1.2 Sistema de Controle Hidráulico"
  },
  {
    question: "Quantas unidades de potência fornecem carga aos lemes ao mesmo tempo?",
    options: [
      "Apenas uma",
      "As duas sempre",
      "Nenhuma no modo auto",
      "Duas em emergência"
    ],
    answer: "Apenas uma",
    explanation: "Apenas uma unidade de cada vez fornece potência."
  },
  {
    question: "Se as duas bombas funcionarem juntas, o que acontece com a primeira a alcançar a pressão de recalque?",
    options: [
      "Desliga a outra",
      "Aciona um pressostato",
      "Abre a válvula de alívio",
      "Queima o fusível"
    ],
    answer: "Aciona um pressostato",
    explanation: "Ela aciona um pressostato."
  },
  {
    question: "O pressostato acionado pela bomba ativa opera qual componente?",
    options: [
      "Solenoide inibidora",
      "Conversor de 400Hz",
      "Alarme sonoro",
      "Odômetro"
    ],
    answer: "Solenoide inibidora",
    explanation: "Opera uma solenoide inibidora."
  },
  {
    question: "O que a solenoide inibidora faz com a segunda unidade (bomba)?",
    options: [
      "Desliga o motor de 440V",
      "Mantém a unidade recirculando",
      "Envia o fluxo em reverso",
      "Aciona a válvula direcional"
    ],
    answer: "Mantém a unidade recirculando",
    explanation: "Mantém a outra unidade recirculando (em standby)."
  },
  {
    question: "O que acontece se a primeira unidade de potência falhar?",
    options: [
      "O operador deve ir ao CML ligar a outra",
      "O alarme soa e o navio perde governo",
      "A unidade em recirculação toma a carga automaticamente",
      "O sistema muda para modo Ângulos"
    ],
    answer: "A unidade em recirculação toma a carga automaticamente",
    explanation: "A unidade em standby toma a carga automaticamente."
  },
  {
    question: "Onde pode ser dada a partida do motor das bombas?",
    options: [
      "Apenas no Passadiço",
      "Local (CML) ou remotamente (CCM)",
      "Somente no CCM",
      "No quadro de 24Vcc"
    ],
    answer: "Local (CML) ou remotamente (CCM)",
    explanation: "Pode ser feito no local (Máquina do Leme) ou remoto (CCM)."
  },
  {
    question: "Se a bomba está ligada mas não há sinal de controle, qual a condição da bomba principal?",
    options: [
      "Pressão máxima",
      "Desligada",
      "Débito nulo",
      "Rotacionando o leme"
    ],
    answer: "Débito nulo",
    explanation: "Permanece na condição de débito nulo."
  },
  {
    question: "Qual a primeira parada do óleo sob pressão saindo da bomba de recalque no painel de válvulas?",
    options: [
      "Cilindros do leme",
      "Solenoides de seleção do sistema",
      "Filtro de óleo",
      "Tanque de expansão"
    ],
    answer: "Solenoides de seleção do sistema",
    explanation: "Ele encontra inicialmente as solenoides de seleção."
  },
  {
    question: "Quantos pares de solenoides de controle direcional existem na saída de cada solenoide de seleção?",
    options: [
      "1 par",
      "2 pares",
      "3 pares",
      "4 pares"
    ],
    answer: "2 pares",
    explanation: "Existem 2 pares de solenoides de controle direcional."
  },
  {
    question: "Onde está localizada a chave rotativa que seleciona qual par de solenoides direcionais será usado?",
    options: [
      "Passadiço",
      "CCM",
      "Controlador (Starter) do motor",
      "VCS 773"
    ],
    answer: "Controlador (Starter) do motor",
    explanation: "A chave fica no Starter das bombas hidráulicas."
  },
  {
    question: "O óleo fluindo pela válvula direcional vai para onde?",
    options: [
      "Retorna ao tanque",
      "Vai para a solenoide inibidora",
      "Para o cilindro de controle",
      "Para os motores de 440V"
    ],
    answer: "Para o cilindro de controle",
    explanation: "Vai ao lado apropriado do cilindro de controle."
  },
  {
    question: "O que o êmbolo do cilindro de controle posiciona fisicamente?",
    options: [
      "O próprio leme",
      "O controle de inclinação do prato da bomba principal",
      "A chave de emergência",
      "O pressostato"
    ],
    answer: "O controle de inclinação do prato da bomba principal",
    explanation: "Ele aciona o controle de inclinação do prato da bomba (cuba).\n\n1.3 Modos de Emergência e Eletro-Mecânico"
  },
  {
    question: "Qual a condição para usar o Controle Eletro-Mecânico?",
    options: [
      "Falha dos motores de 440V",
      "Falha nos sistemas elétricos de controle, mas com motor e geração hidráulica disponíveis",
      "Falta de óleo",
      "Falha total do CCM"
    ],
    answer: "Falha nos sistemas elétricos de controle, mas com motor e geração hidráulica disponíveis",
    explanation: "Exige disponibilidade da bomba hidráulica principal."
  },
  {
    question: "Como funciona o Controle Eletro-Mecânico?",
    options: [
      "Volante manual",
      "Acionamento manual de uma bomba hidráulica menor",
      "Puxando cabos de aço",
      "Chave elétrica reserva"
    ],
    answer: "Acionamento manual de uma bomba hidráulica menor",
    explanation: "Feito através do acionamento manual de uma bomba hidráulica."
  },
  {
    question: "Qual a condição para usar o Governo Mecânico-Hidráulico?",
    options: [
      "Queda da rede 24Vcc",
      "Falha dos sistemas elétricos de controle",
      "Falha de alimentação dos motores elétricos",
      "Vazamento no atuador"
    ],
    answer: "Falha de alimentação dos motores elétricos",
    explanation: "Usado quando os motores elétricos principais falham."
  },
  {
    question: "De onde vem a potência no modo Mecânico-Hidráulico?",
    options: [
      "Baterias",
      "Esforço do operador no gerador da bomba (manobra simplificada)",
      "Motor a diesel reserva",
      "Pressão residual"
    ],
    answer: "Esforço do operador no gerador da bomba (manobra simplificada)",
    explanation: "A geração de potência é mecânica pelo esforço do operador."
  },
  {
    question: "No Sistema de Emergência, qual componente é engrazado?",
    options: [
      "O Starter",
      "O Volante de Emergência",
      "O Linvar",
      "O Pressostato"
    ],
    answer: "O Volante de Emergência",
    explanation: "Usa-se o volante de emergência engrazado."
  },
  {
    question: "Com a bomba principal disponível, qual a relação do volante de emergência?",
    options: [
      "1 grau = 1 volta",
      "1 grau = 3 voltas",
      "1 grau = 6 voltas",
      "3 graus = 1 volta"
    ],
    answer: "1 grau = 3 voltas",
    explanation: "A cada grau de leme tem-se 3 voltas no volante."
  },
  {
    question: "Sem a bomba principal disponível, qual a relação do volante de emergência?",
    options: [
      "1 grau = 1 volta",
      "1 grau = 3 voltas",
      "1 grau = 6 voltas",
      "6 graus = 1 volta"
    ],
    answer: "1 grau = 6 voltas",
    explanation: "Sem a bomba, o esforço é maior: 6 voltas para 1 grau.\n\n1.4 Fontes de Alimentação"
  },
  {
    question: "Qual a tensão de alimentação normal do motor da bomba BE?",
    options: [
      "115V 400Hz",
      "115V 60Hz",
      "440V 60Hz trifásica",
      "24Vcc"
    ],
    answer: "440V 60Hz trifásica",
    explanation: "440V 60Hz trifásica."
  },
  {
    question: "De qual Centro de Distribuição vem a energia NORMAL do motor BE?",
    options: [
      "CDE 1-34",
      "CDE 2-39",
      "CDE 2-66",
      "CDE 2-24-1"
    ],
    answer: "CDE 2-66",
    explanation: "Vem do CDE 2-66 (disjuntor 4)."
  },
  {
    question: "De qual CDE vem a energia ALTERNATIVA do motor BE?",
    options: [
      "CDE 1-34",
      "CDE 2-39",
      "CDE 2-66",
      "CDE 2-24-1"
    ],
    answer: "CDE 2-24-1",
    explanation: "Alternativa pelo disjuntor 15 do CDE 2-24-1."
  },
  {
    question: "Qual a alimentação normal do motor BB?",
    options: [
      "Disjuntor 15 do CDE 2-39",
      "Disjuntor 14 do CDE 1-34",
      "Disjuntor 4 do CDE 2-66",
      "Disjuntor 15 do CDE 2-24-1"
    ],
    answer: "Disjuntor 15 do CDE 2-39",
    explanation: "Normal do motor BB é CDE 2-39."
  },
  {
    question: "Qual a alimentação alternativa do motor BB?",
    options: [
      "CDE 2-39",
      "CDE 1-34",
      "CDE 2-66",
      "CDE 2-24-1"
    ],
    answer: "CDE 1-34",
    explanation: "Alternativa do BB é CDE 1-34."
  },
  {
    question: "Qual a tensão fornecida pelos conversores estáticos de frequência?",
    options: [
      "440V 60Hz",
      "115V 60Hz",
      "115V 400Hz",
      "24Vcc"
    ],
    answer: "115V 400Hz",
    explanation: "Eles geram 115V 400Hz."
  },
  {
    question: "Qual a tensão fornecida pelos transformadores isoladores?",
    options: [
      "440V 60Hz",
      "115V 60Hz",
      "115V 400Hz",
      "24Vcc"
    ],
    answer: "115V 60Hz",
    explanation: "Fornecem 115V 60Hz."
  },
  {
    question: "De onde os conversores estáticos e transformadores recebem energia primária?",
    options: [
      "Do Passadiço",
      "Do painel de alarmes",
      "Através do controlador (Starter) do motor elétrico",
      "De baterias auxiliares"
    ],
    answer: "Através do controlador (Starter) do motor elétrico",
    explanation: "São alimentados pelo Starter do motor elétrico."
  },
  {
    question: "O que acontece com o sistema de controle se o Starter estiver em \"OFF\"?",
    options: [
      "Funciona com baterias",
      "Fica alimentado pelas alternativas",
      "O sistema não é alimentado",
      "Entra em auto-teste"
    ],
    answer: "O sistema não é alimentado",
    explanation: "Na posição OFF, não há alimentação."
  },
  {
    question: "Quais posições do Starter permitem alimentação dos conversores?",
    options: [
      "OFF e Local",
      "Local e Remote",
      "Remote e OFF",
      "Apenas Remote"
    ],
    answer: "Local e Remote",
    explanation: "Posições Remote ou Local."
  },
  {
    question: "Qual equipamento é alimentado por 115V 60Hz do painel de fusíveis (2-24-1-02-2)?",
    options: [
      "Sirene principal",
      "Odômetro",
      "Aquecedores anticondensação",
      "Motor principal"
    ],
    answer: "Aquecedores anticondensação",
    explanation: "Os aquecedores usam essa fonte direta."
  },
  {
    question: "Qual a tensão do circuito de alarmes e indicações?",
    options: [
      "440V",
      "115V",
      "24Vcc",
      "12Vcc"
    ],
    answer: "24Vcc",
    explanation: "Utiliza-se 24Vcc."
  },
  {
    question: "De onde provém a energia de 24Vcc?",
    options: [
      "Baterias do rádio",
      "Seção mantida do quadro de distribuição de 24Vcc",
      "Transformador de 440V direto",
      "Gerador do motor diesel"
    ],
    answer: "Seção mantida do quadro de distribuição de 24Vcc",
    explanation: "Seção mantida do quadro 24Vcc."
  },
  {
    question: "Qual a tensão das válvulas solenoides direcionais?",
    options: [
      "115V 60Hz",
      "115V 400Hz",
      "24Vcc",
      "440V 60Hz"
    ],
    answer: "115V 60Hz",
    explanation: "Alimentadas em 115V 60Hz.\n\n1.5 Alarmes (VCS 221 e 784"
  },
  {
    question: "Quais os alarmes provenientes do sistema hidráulico?",
    options: [
      "Baixa temperatura, alto nível, fluxo reverso",
      "Alta temperatura, baixo nível e baixa pressão do óleo",
      "Vibração, curto-circuito, alta pressão",
      "Falha de giro e odômetro"
    ],
    answer: "Alta temperatura, baixo nível e baixa pressão do óleo",
    explanation: "Alta temp, baixo nível e baixa pressão."
  },
  {
    question: "Onde fica o console de monitoramento do sistema no CCM?",
    options: [
      "Antepara de boreste",
      "Antepara de bombordo, próximo ao Main Gauge Board",
      "Centro do teto",
      "Fora do compartimento"
    ],
    answer: "Antepara de bombordo, próximo ao Main Gauge Board",
    explanation: "Antepara de bombordo do CCM."
  },
  {
    question: "Quais componentes existem no console de bombordo do CCM?",
    options: [
      "Apenas VCS 772",
      "VCS 784, VCS 221 e buzina",
      "VCS 775 e manche",
      "Conversores e trafos"
    ],
    answer: "VCS 784, VCS 221 e buzina",
    explanation: "Há uma VCS 784, uma VCS 221 e uma buzina por subsistema."
  },
  {
    question: "Para que serve a VCS 784?",
    options: [
      "Mostrar alarmes de óleo",
      "Controle remoto de partida/parada dos motores e parada de emergência",
      "Acionar os solenoides direcionais",
      "Ajustar o rumo do navio"
    ],
    answer: "Controle remoto de partida/parada dos motores e parada de emergência",
    explanation: "Controle de partida, parada e emergência."
  },
  {
    question: "A chave de parada de emergência na VCS 784 pode ser usada quando?",
    options: [
      "Apenas se a velocidade for baixa",
      "A qualquer tempo",
      "Só após autorização do Passadiço",
      "Só no modo Auto"
    ],
    answer: "A qualquer tempo",
    explanation: "Pode parar o motor da bomba a qualquer tempo."
  },
  {
    question: "Qual o intertravamento relacionado à chave de emergência na VCS 784?",
    options: [
      "O leme trava em 0 graus",
      "O navio para",
      "O motor da bomba não demarra se a chave estiver em STOP",
      "A buzina não desliga"
    ],
    answer: "O motor da bomba não demarra se a chave estiver em STOP",
    explanation: "Se estiver em STOP, a bomba não liga."
  },
  {
    question: "Qual a indicação 1 do Painel de Alarmes VCS 221?",
    options: [
      "Motor aquecido",
      "Baixo nível de óleo",
      "Falta de alimentação (440V 60Hz, 3F)",
      "Baixa pressão"
    ],
    answer: "Falta de alimentação (440V 60Hz, 3F)",
    explanation: "A indicação 1 é Falta de alimentação 440V."
  },
  {
    question: "A indicação 2 do VCS 221 refere-se a quê?",
    options: [
      "Motor aquecido",
      "Baixo nível",
      "Alta temp",
      "Volante engrazado"
    ],
    answer: "Motor aquecido",
    explanation: "Motor aquecido."
  },
  {
    question: "A indicação 3 do VCS 221 alerta sobre o quê?",
    options: [
      "Pressão",
      "Nível baixo de óleo",
      "Motor",
      "Energia"
    ],
    answer: "Nível baixo de óleo",
    explanation: "Nível baixo de óleo."
  },
  {
    question: "O que indica a luz 4 do VCS 221?",
    options: [
      "Baixa temperatura",
      "Alta temperatura do óleo",
      "Fogo",
      "Volante engrazado"
    ],
    answer: "Alta temperatura do óleo",
    explanation: "Alta temperatura do óleo."
  },
  {
    question: "A luz 5 do VCS 221 avisa sobre:",
    options: [
      "Baixa pressão do óleo",
      "Alta pressão",
      "Entupimento de filtro",
      "Falha elétrica"
    ],
    answer: "Baixa pressão do óleo",
    explanation: "Baixa pressão do óleo."
  },
  {
    question: "A luz 6 do VCS 221 indica o quê?",
    options: [
      "Porta aberta",
      "Chave em STOP",
      "Volante de emergência engrazado",
      "Modo automático ativado"
    ],
    answer: "Volante de emergência engrazado",
    explanation: "Volante engrazado."
  },
  {
    question: "Como a buzina de alarme é silenciada?",
    options: [
      "Desligando a energia",
      "Calcando a tecla que estiver lampejando (piscando)",
      "Girando a chave para STOP",
      "Acionando o volante"
    ],
    answer: "Calcando a tecla que estiver lampejando (piscando)",
    explanation: "O alarme sonoro é cancelado calcando a tecla lampejante."
  },
  {
    question: "Um alarme visual na VCS 221 aciona obrigatoriamente um alarme sonoro?",
    options: [
      "Não, só em falha de 440V",
      "Sim, sempre que houver alarme visual haverá alarme sonoro",
      "Apenas se programado",
      "Depende do modo de governo"
    ],
    answer: "Sim, sempre que houver alarme visual haverá alarme sonoro",
    explanation: "Sempre que houver visual, haverá sonoro."
  },
  {
    question: "Na VCS 784, quais indicações luminosas de estado estão presentes?",
    options: [
      "Erro de rumo, falha giro, falha odom",
      "Controle disponível, motor funcionando e bomba em carga",
      "BB e BE",
      "Primário e Secundário"
    ],
    answer: "Controle disponível, motor funcionando e bomba em carga",
    explanation: "O texto cita \"indicações de controle disponível, motor funcionando e bomba em carga\"."
  },
  {
    question: "Cada subsistema do CCM (Bombordo e Boreste) possui seu próprio par de painéis VCS 784 e 221?",
    options: [
      "Sim",
      "Não, é apenas um para todo o navio",
      "Apenas Boreste possui",
      "Apenas o Passadiço possui"
    ],
    answer: "Sim",
    explanation: "O texto diz \"Cada sub sistema contém uma VCS 784 e uma VCS 221\".\n\n1.6 Dados de Performance (Entradas/Saídas"
  },
  {
    question: "Qual a frequência do sinal de rumo recebido pela giroscópica?",
    options: [
      "60Hz",
      "400Hz",
      "50Hz",
      "CC"
    ],
    answer: "400Hz",
    explanation: "Sinal de rumo de 400Hz."
  },
  {
    question: "O sinal de velocidade do navio é proveniente de qual equipamento?",
    options: [
      "GPS",
      "Giroscópica",
      "Odômetro",
      "Anemômetro"
    ],
    answer: "Odômetro",
    explanation: "Proveniente do odômetro."
  },
  {
    question: "Qual a frequência do sinal do odômetro?",
    options: [
      "60Hz",
      "400Hz",
      "50Hz",
      "DC"
    ],
    answer: "400Hz",
    explanation: "400Hz."
  },
  {
    question: "A posição mecânica do leme atua no sistema como uma:",
    options: [
      "Entrada",
      "Saída",
      "Alarme",
      "Rede elétrica"
    ],
    answer: "Entrada",
    explanation: "É listada como uma entrada mecânica."
  },
  {
    question: "Para os controles das bombas de BB e BE da máquina do leme, o sistema provê qual sinal de saída?",
    options: [
      "24Vcc",
      "115V 400Hz",
      "115V 60Hz",
      "440V 60Hz"
    ],
    answer: "115V 60Hz",
    explanation: "Sinais de 115V 60Hz."
  },
  {
    question: "Para as solenoides de seleção, qual a tensão do sinal de saída?",
    options: [
      "24Vcc",
      "115V 400Hz",
      "115V 60",
      "440V"
    ],
    answer: "115V 60",
    explanation: "115V 60."
  },
  {
    question: "Quais alarmes de performance (saídas externas) são gerados pelo sistema?",
    options: [
      "Alta temperatura, Baixo nível",
      "Falha da giro, saiu rumo e falha do odômetro",
      "Fogo e inundação",
      "Falha de 440V e motor aquecido"
    ],
    answer: "Falha da giro, saiu rumo e falha do odômetro",
    explanation: "Falha da giro, saiu rumo e falha do odômetro."
  },
  {
    question: "Quantas alimentações de 115V 400Hz o sistema requer no total (para ambos os canais)?",
    options: [
      "1",
      "2 (uma para cada canal)",
      "3",
      "4"
    ],
    answer: "2 (uma para cada canal)",
    explanation: "Duas, separadas (uma por canal)."
  },
  {
    question: "Quantas alimentações de 115V 60Hz (separadas) são requeridas para os canais do sistema?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2",
    explanation: "Duas separadas, uma para cada canal."
  },
  {
    question: "Qual a especificação da alimentação para a iluminação do console?",
    options: [
      "115V 60Hz (externamente variável entre 0 e 35V)",
      "24Vcc fixa",
      "440V 60Hz trifásica",
      "Bateria 12V"
    ],
    answer: "115V 60Hz (externamente variável entre 0 e 35V)",
    explanation: "115V 60Hz, variável entre 0 e 35V.\n\nCapítulo 2: Governo por Ângulos (VCS 773"
  },
  {
    question: "Qual a finalidade da unidade VCS 773?",
    options: [
      "Guiar o navio automaticamente",
      "Controlar manualmente as solenoides de controle direcional",
      "Ligar as bombas de 440V",
      "Silenciar alarmes"
    ],
    answer: "Controlar manualmente as solenoides de controle direcional",
    explanation: "Controla as solenoides diretamente."
  },
  {
    question: "A unidade VCS 773 necessita de quais tensões como entradas elétricas principais?",
    options: [
      "440V de BB e BE",
      "115V 60Hz de BE e BB",
      "24Vcc apenas",
      "115V 400Hz"
    ],
    answer: "115V 60Hz de BE e BB",
    explanation: "Recebe 115V 60Hz de BB e de BE."
  },
  {
    question: "Como a VCS 773 provê a deflexão? É um controle proporcional?",
    options: [
      "Sim, exato",
      "Não, fornece um sinal direto e contínuo (não proporcional)",
      "Sim, controlado por potenciômetro",
      "Depende do mar"
    ],
    answer: "Não, fornece um sinal direto e contínuo (não proporcional)",
    explanation: "É ação direta, operação não proporcional."
  },
  {
    question: "Para manter a solenoide operada usando a manete da VCS 773, o que o operador deve fazer?",
    options: [
      "Clicar uma vez",
      "Manter a manete defletida com firmeza",
      "Ajustar um dial",
      "Ligar a bomba"
    ],
    answer: "Manter a manete defletida com firmeza",
    explanation: "Continuará operada até que a manete seja liberada."
  },
  {
    question: "O que acontece quando a lâmpada na extremidade da manete acende?",
    options: [
      "Falha no leme",
      "Indica que o Governo por Ângulos foi selecionado (controle disponível)",
      "Alta temperatura",
      "Modo Automático ativo"
    ],
    answer: "Indica que o Governo por Ângulos foi selecionado (controle disponível)",
    explanation: "Acende quando governo por ângulos é selecionado."
  },
  {
    question: "Quantas unidades VCS 773 existem no navio?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "3",
    explanation: "Três unidades (Passadiço, CCM, Máq Leme)."
  },
  {
    question: "Quantas unidades VCS 773 podem comandar o leme simultaneamente?",
    options: [
      "Todas as 3",
      "Apenas 2",
      "Apenas 1 de cada vez",
      "Depende do disjuntor"
    ],
    answer: "Apenas 1 de cada vez",
    explanation: "Apenas uma de cada vez pode controlar."
  },
  {
    question: "No passadiço, qual chave seleciona o governo por ângulos?",
    options: [
      "VCS 772",
      "VCS 773",
      "VCS 775",
      "Aft Control Panel"
    ],
    answer: "VCS 775",
    explanation: "No passadiço é a VCS 775."
  },
  {
    question: "No CCM, qual chave seleciona o controle?",
    options: [
      "VCS 775",
      "VCS 772",
      "VCS 773",
      "VCS 784"
    ],
    answer: "VCS 772",
    explanation: "No CCM é a VCS 772."
  },
  {
    question: "No compartimento da Máquina do Leme, como é selecionado o modo secundário?",
    options: [
      "VCS 775",
      "VCS 772",
      "Chave Aft Control Panel",
      "Disjuntor 440V"
    ],
    answer: "Chave Aft Control Panel",
    explanation: "Pela chave do Aft Control Panel."
  },
  {
    question: "Quais componentes mecânicos básicos a VCS 773 possui no painel frontal?",
    options: [
      "Volante e engrenagem",
      "Manete, molas de centralização e um par de chaves",
      "Dial de 35 graus e botões",
      "Tela LCD e joystick"
    ],
    answer: "Manete, molas de centralização e um par de chaves",
    explanation: "Aloja manete, molas e chaves."
  },
  {
    question: "O que há no painel traseiro da VCS 773?",
    options: [
      "Soquete de 32 pinos e resistor de 1 ohm",
      "Fusíveis de 100A",
      "Bomba manual",
      "Conectores hidráulicos"
    ],
    answer: "Soquete de 32 pinos e resistor de 1 ohm",
    explanation: "Soquete 32 pinos e resistor 1 ohm."
  },
  {
    question: "As chaves internas S1 e S2 do circuito da VCS 773 são acionadas por qual mecanismo?",
    options: [
      "Relés de tempo",
      "Percussores (Strikers) operados mecanicamente",
      "Pressão de óleo",
      "Sensores ópticos"
    ],
    answer: "Percussores (Strikers) operados mecanicamente",
    explanation: "Operadas por percussores mecânicos ligados à manete."
  },
  {
    question: "Qual chave interna é operada se a manete for para bombordo (BB)?",
    options: [
      "S1",
      "? A) S1 B) S2",
      "S3",
      "L1"
    ],
    answer: "S1",
    explanation: "Movimento para BB fecha S1."
  },
  {
    question: "Qual chave interna é operada se a manete for para boreste (BE)?",
    options: [
      "S1",
      "S2",
      "S3",
      "L1"
    ],
    answer: "S2",
    explanation: "Movimento para BE fecha S2."
  },
  {
    question: "As micro-chaves S1 e S2 são unipolares ou bipolares?",
    options: [
      "Unipolares",
      "Bipolares",
      "Tripolares",
      "Estado sólido"
    ],
    answer: "Bipolares",
    explanation: "São bipolares."
  },
  {
    question: "Se S1 é bipolar, o que acontece quando a manete é levada para bombordo?",
    options: [
      "Apenas 1 polo fecha",
      "Ambos os polos fecham, mas só o polo ligado ao sistema selecionado/subordinado é energizado",
      "Ambos os polos enviam tensão e geram curto",
      "O polo de BE é travado mecanicamente"
    ],
    answer: "Ambos os polos fecham, mas só o polo ligado ao sistema selecionado/subordinado é energizado",
    explanation: "Os dois polos fecham fisicamente, mas a energia só flui pelo que estiver ativo."
  },
  {
    question: "Do que depende o ângulo final do movimento do leme no governo por ângulos?",
    options: [
      "Do potenciômetro calibrado em 35 graus",
      "Do piloto automático",
      "Do espaço de tempo de deflexão da manete (habilidade do operador)",
      "Da pressão da bomba de 440V"
    ],
    answer: "Do espaço de tempo de deflexão da manete (habilidade do operador)",
    explanation: "Depende unicamente do operador e do tempo que ele segura a manete."
  },
  {
    question: "Quantas posições possui a manete da VCS 773?",
    options: [
      "2",
      "3",
      "5",
      "Variável infinita"
    ],
    answer: "3",
    explanation: "Três posições: Repouso, BB, BE."
  },
  {
    question: "Em governo por ângulos, qual a influência do piloto automático no leme?",
    options: [
      "Correção de 5 graus",
      "Correção contínua",
      "Nenhuma (feito exclusivamente por ação do homem)",
      "Monitora apenas desvio"
    ],
    answer: "Nenhuma (feito exclusivamente por ação do homem)",
    explanation: "O controle é exclusivo por ação do homem.\n\nVCS 772 (Seletora"
  },
  {
    question: "O que a VCS 772 instalada no CCM permite selecionar inicialmente?",
    options: [
      "Bombordo ou Boreste",
      "Auto ou Manual",
      "Controle entre Passadiço e CCM",
      "Motor 1 ou 2"
    ],
    answer: "Controle entre Passadiço e CCM",
    explanation: "Ela define quem tem o controle: Passadiço ou CCM."
  },
  {
    question: "Se a VCS 772 estiver com o controle no CCM, qual é a sua segunda função de seleção?",
    options: [
      "Selecionar se o Governo por Ângulos usará o sistema de BB ou de BE",
      "Ligar a bomba manual",
      "Acionar o volante",
      "Desligar o Passadiço"
    ],
    answer: "Selecionar se o Governo por Ângulos usará o sistema de BB ou de BE",
    explanation: "Permite seleção do sistema BB ou BE."
  },
  {
    question: "Como as estações asseguram fisicamente que a seleção não será mudada acidentalmente?",
    options: [
      "Senha digital",
      "Travamento por chave (inserida no local e que pode ser retirada e guardada)",
      "Tampa de acrílico",
      "Alarmes sonoros contínuos"
    ],
    answer: "Travamento por chave (inserida no local e que pode ser retirada e guardada)",
    explanation: "A posição pode ser travada por uma chave física."
  },
  {
    question: "No painel da VCS 772, além das chaves, o que há de indicativo?",
    options: [
      "Rumo do navio",
      "Lâmpadas indicadoras de disponibilidade de alimentação (BB/BE)",
      "Velocidade da bomba",
      "Manômetro de óleo"
    ],
    answer: "Lâmpadas indicadoras de disponibilidade de alimentação (BB/BE)",
    explanation: "Tem lâmpadas de disponibilidade de alimentação."
  },
  {
    question: "Qual o código da chave que seleciona BB ou BE na VCS 772?",
    options: [
      "S1",
      "S2",
      "S3",
      "L1"
    ],
    answer: "S2",
    explanation: "Chave S2."
  },
  {
    question: "Qual o código da chave que faz o teste de lâmpadas na VCS 772?",
    options: [
      "S1",
      "S2",
      "S3",
      "L2"
    ],
    answer: "S3",
    explanation: "Chave S3 é o botão de teste de lâmpadas."
  },
  {
    question: "No compartimento do leme, como chama-se a chave que transfere o controle para lá?",
    options: [
      "VCS 775",
      "Remote / Port / Starboard",
      "S2 / S3",
      "VCS 221"
    ],
    answer: "Remote / Port / Starboard",
    explanation: "Chave Remote/Port/Starboard (no Aft Control Panel)."
  },
  {
    question: "Se a chave na máquina do leme estiver em \"Remote\", quem controla o navio?",
    options: [
      "O próprio painel da máquina do leme",
      "As estações remotas (Passadiço ou CCM)",
      "O Piloto Automático exclusivamente",
      "Ninguém"
    ],
    answer: "As estações remotas (Passadiço ou CCM)",
    explanation: "O controle fica liberado para as estações remotas."
  },
  {
    question: "Se a chave na máquina do leme for colocada em \"Port\", o que ocorre?",
    options: [
      "O controle passa para o CCM",
      "O controle remoto é desativado e o modo secundário de Bombordo é selecionado na máquina do leme",
      "O motor para",
      "O alarme dispara"
    ],
    answer: "O controle remoto é desativado e o modo secundário de Bombordo é selecionado na máquina do leme",
    explanation: "Seleciona modo secundário local usando o sistema Bombordo (Port)."
  },
  {
    question: "A chave VCS 775, que transfere para a VCS 773 do Passadiço, determina qual solenoide de seleção de sistema está operada?",
    options: [
      "Sim, através de uma chave BB/BE",
      "Não, isso é automático",
      "Não, quem faz isso é o odômetro",
      "Depende do giro"
    ],
    answer: "Sim, através de uma chave BB/BE",
    explanation: "A posição da chave BB/BE na VCS 775 determina qual solenoide será operada."
  },
  {
    question: "Por que o governo por ângulos é considerado \"não proporcional\"?",
    options: [
      "Porque ele se movimenta em ângulos matematicamente definidos por processador",
      "Porque um movimento de X graus na manete não reflete X graus no leme, mas sim um comando contínuo enquanto defletido",
      "Porque a bomba tem débito variável inversamente proporcional",
      "Porque as solenoides são digitais"
    ],
    answer: "Porque um movimento de X graus na manete não reflete X graus no leme, mas sim um comando contínuo enquanto defletido",
    explanation: "Ação é direta; o comando continua existindo enquando a chave está fechada, não há proporção com a posição da alavanca."
  },
  {
    question: "A operação das solenoides por 115V 60Hz no modo ângulos desvia a lógica normal automática. Verdadeiro ou Falso?",
    options: [
      "Verdadeiro, o controle é puramente humano",
      "Falso, o piloto automático atua por trás",
      "Falso, requer aprovação do odômetro",
      "Depende do CCM"
    ],
    answer: "Verdadeiro, o controle é puramente humano",
    explanation: "É um controle de ação direta comandado exclusivamente pela habilidade do operador, sobrepondo lógicas automatizadas."
  },
  {
    question: "Os aquecedores anticondensação são alimentados pelo painel de fusíveis de 115V 60Hz (2-24-1-02-2). Qual é o fusível específico que protege o Motor da Unidade de Boreste (BE)?",
    options: [
      "Fusível n° 4",
      "Fusível n° 7",
      "Fusível n° 8",
      "Fusível n° 10"
    ],
    answer: "Fusível n° 8",
    explanation: "Conforme o Cap. 1.4, alínea \"a\", o motor BE usa o fusível nº 8)."
  },
  {
    question: "Ainda sobre o painel de fusíveis dos aquecedores, qual fusível protege o Motor da Unidade de Bombordo (BB)?",
    options: [
      "Fusível n° 4",
      "? A) Fusível n° 4 B) Fusível n° 7",
      "Fusível n° 8",
      "Fusível n° 10"
    ],
    answer: "? A) Fusível n° 4 B) Fusível n° 7",
    explanation: "Cap. 1.4, alínea \"b\", o motor BB usa o fusível nº 7)."
  },
  {
    question: "Qual fusível fornece alimentação de aquecimento para o Painel de Controle do Leme à Ré (CML)?",
    options: [
      "Fusível n° 4",
      "Fusível n° 7",
      "Fusível n° 8",
      "Fusível n° 10"
    ],
    answer: "Fusível n° 10",
    explanation: "Cap. 1.4, alínea \"c\", o painel a ré usa o fusível nº 10)."
  },
  {
    question: "A lâmpada indicadora L1 da VCS 773 (Governo por Ângulos) acende quando o controle está disponível. Em caso de alimentação por 0V a 50V 60Hz, em quais pinos do soquete essa tensão é aplicada?",
    options: [
      "Pinos 1 e 2",
      "Pinos 16 e 18",
      "Pinos 18 e 19",
      "Pinos 31 e 32"
    ],
    answer: "Pinos 18 e 19",
    explanation: "Cap. 2.1.5 detalha que os 0-50V 60Hz são aplicados entre os pinos 18 e 19)."
  },
  {
    question: "Caso a lâmpada L1 da VCS 773 seja alimentada por 24Vcc (dependendo do local da instalação), a tensão é aplicada em quais pinos?",
    options: [
      "Pinos 1 e 2",
      "Pinos 16 e 18",
      "Pinos 18 e 19",
      "Pinos 31 e 32"
    ],
    answer: "Pinos 16 e 18",
    explanation: "Cap. 2.1.5, a tensão de 24Vcc usa os pinos 16 e 18)."
  },
  {
    question: "Na Chave Seletora de Controle (VCS 772) no CCM, quando a seleção está na posição CCN, os primários dos transformadores T1 e T2 recebem 115V 60Hz. Qual é a tensão na saída destes transformadores para acender as lâmpadas indicadoras de disponibilidade?",
    options: [
      "115V 400Hz",
      "50V 60Hz",
      "24Vcc",
      "24V 60Hz"
    ],
    answer: "24V 60Hz",
    explanation: "Cap. 2.3 descreve que a saída dos transformadores abaixadores T1 e T2 é de 24V 60Hz em corrente alternada)."
  },
  {
    question: "Ainda no circuito do painel frontal da VCS 772, a que se referem as marcações LP1, LP2 e LP3 do diagrama esquemático?",
    options: [
      "Sensores de pressão (Low Pressure 1, 2 e 3)",
      "LP1 e LP2 referem-se às lâmpadas de alimentação (BB e BE), e LP3 à lâmpada de governo no compartimento da máquina do leme.",
      "Terminais de saída de potência para os lemes (Leme Power 1, 2 e 3)",
      "Conectores do circuito de alarmes sonoros"
    ],
    answer: "LP1 e LP2 referem-se às lâmpadas de alimentação (BB e BE), e LP3 à lâmpada de governo no compartimento da máquina do leme.",
    explanation: "Cap. 2.3 descreve que LP1 e LP2 são as lâmpadas de alimentação e LP3 indica governo no CML)."
  }
];
