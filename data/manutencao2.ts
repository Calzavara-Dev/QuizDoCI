import type { Question } from "../types/question";

export const manutencao2Questions: Question[] = [
  // 2.1 INTRODUÇÃO E DESCRIÇÃO GERAL
  {
    question: "O que é a central Impacta 300?",
    options: [
      "A central Impacta 300 é uma solução para integração de redes de voz e dados ideal para pequenas e médias empresas.",
      "Um sistema de comutação telefônica exclusivo para centrais públicas de grande porte.",
      "Um aparelho telefônico analógico sem suporte a redes de dados ou VoIP.",
      "Um roteador de internet de banda larga sem funções de central telefônica."
    ],
    answer: "A central Impacta 300 é uma solução para integração de redes de voz e dados ideal para pequenas e médias empresas."
  },
  {
    question: "Quais funções habituais a central Impacta apresenta?",
    options: [
      "Apresenta as funções habituais de uma CPCT (Central Privada de Comutação Telefônica).",
      "Apenas comutação de pacotes de internet de alta velocidade sem suporte a voz.",
      "Exclusivamente gravação de áudio em cartões de memória externos.",
      "Transmissão via satélite de sinais de televisão digital."
    ],
    answer: "Apresenta as funções habituais de uma CPCT (Central Privada de Comutação Telefônica)."
  },
  {
    question: "Além das funções habituais, que função adicional a central Impacta exerce?",
    options: [
      "Exerce a função de gateway, interligando duas redes e permitindo chamadas VoIP (Voz sobre IP).",
      "Funciona como servidor web principal para armazenamento em nuvem.",
      "Atua como gerador de energia elétrica de emergência para os terminais.",
      "Opera exclusivamente como distribuidor de sinal de vídeo analógico."
    ],
    answer: "Exerce a função de gateway, interligando duas redes e permitindo chamadas VoIP (Voz sobre IP)."
  },
  {
    question: "Para que tipo de empresa a central Impacta é destinada?",
    options: [
      "É destinada a empresas que necessitam atender de 16 a 336 ramais em um único local, como uma filial.",
      "Residências unifamiliares com no máximo 4 ramais analógicos.",
      "Grandes operadoras multinacionais com mais de 10.000 ramais.",
      "Empresas que utilizam unicamente telefones celulares sem cabeamento fixo."
    ],
    answer: "É destinada a empresas que necessitam atender de 16 a 336 ramais em um único local, como uma filial."
  },
  {
    question: "Quais são as duas configurações de capacidade máxima do sistema Impacta 300?",
    options: [
      "Primeira opção: 90 linhas + 336 ramais; Segunda opção: 60 linhas + 240 ramais.",
      "Primeira opção: 100 linhas + 500 ramais; Segunda opção: 50 linhas + 100 ramais.",
      "Primeira opção: 30 linhas + 120 ramais; Segunda opção: 15 linhas + 60 ramais.",
      "Primeira opção: 120 linhas + 400 ramais; Segunda opção: 80 linhas + 300 ramais."
    ],
    answer: "Primeira opção: 90 linhas + 336 ramais; Segunda opção: 60 linhas + 240 ramais."
  },
  {
    question: "Como é composta a primeira opção de configuração da Impacta 300?",
    options: [
      "30 linhas IP, 60 linhas digitais, 216 ramais analógicos e 120 ramais IP.",
      "60 linhas analógicas, 30 linhas digitais, 100 ramais digitais e 50 ramais IP.",
      "90 linhas analógicas, 100 ramais digitais e 200 ramais sem fio.",
      "15 linhas IP, 30 linhas digitais, 120 ramais analógicos e 60 ramais IP."
    ],
    answer: "30 linhas IP, 60 linhas digitais, 216 ramais analógicos e 120 ramais IP."
  },
  {
    question: "Como é composta a segunda opção de configuração da Impacta 300?",
    options: [
      "60 linhas digitais e 240 ramais analógicos.",
      "30 linhas analógicas e 120 ramais digitais.",
      "90 linhas IP e 336 ramais IP.",
      "45 linhas digitais e 180 ramais mistos."
    ],
    answer: "60 linhas digitais e 240 ramais analógicos."
  },
  {
    question: "Qual é a quantidade máxima de ramais na Impacta 300?",
    options: [
      "A quantidade máxima é de 336 ramais.",
      "A quantidade máxima é de 240 ramais.",
      "A quantidade máxima é de 500 ramais.",
      "A quantidade máxima é de 128 ramais."
    ],
    answer: "A quantidade máxima é de 336 ramais."
  },
  {
    question: "Como pode ser expandida a capacidade da central Impacta 300?",
    options: [
      "A capacidade pode ser expandida pela inserção de placas de circuito até o limite do fabricante.",
      "Através da atualização exclusiva de software pelo programador web sem adicionar placas.",
      "Trocando a fonte de alimentação por uma de maior voltagem.",
      "Conectando um segundo gabinete via cabo USB simples."
    ],
    answer: "A capacidade pode ser expandida pela inserção de placas de circuito até o limite do fabricante."
  },
  {
    question: "Quais são as placas possíveis na Impacta 300 e suas quantidades máximas?",
    options: [
      "CPU (1); E1/2E1 (1); Tronco analógico (3); Ramal analógico (10); Ramal digital (3); Ramal misto (10); VoIP ICIP (1); Comandos (1); Tronco/ramal (11); Tronco GSM (1 ou 2, até 8 troncos); 48 terminais inteligentes.",
      "CPU (2); E1/2E1 (4); Tronco analógico (5); Ramal analógico (20); Ramal digital (10); sem suporte a placas VoIP ou GSM.",
      "CPU (1); apenas placas mistas ilimitadas e até 100 terminais inteligentes sem placas de comandos.",
      "CPU (1); E1/2E1 (2); Tronco analógico (10); Ramal analógico (5); Ramal digital (15); VoIP ICIP (3); Tronco GSM (5 placas)."
    ],
    answer: "CPU (1); E1/2E1 (1); Tronco analógico (3); Ramal analógico (10); Ramal digital (3); Ramal misto (10); VoIP ICIP (1); Comandos (1); Tronco/ramal (11); Tronco GSM (1 ou 2, até 8 troncos); 48 terminais inteligentes."
  },
  {
    question: "Onde fica a fonte de alimentação da central Impacta 300?",
    options: [
      "A fonte de alimentação vem fixada no gabinete da central.",
      "Fica instalada em um rack externo independente, conectada por cabo de força de 10 metros.",
      "É integrada diretamente no chip processador da placa CPU.",
      "Instala-se dentro do aparelho telefone terminal TIP 300."
    ],
    answer: "A fonte de alimentação vem fixada no gabinete da central."
  },
  {
    question: "Qual é a voltagem de funcionamento da fonte da Impacta 300?",
    options: [
      "Pode ser ligada em 110 ou 220 V (50/60 Hz), com seleção automática. Potência superior a 210W.",
      "Exclusivamente 110 V com chave seletora manual e potência de 100W.",
      "Apenas em corrente contínua 48 V (DC) e potência de 50W.",
      "Exclusivamente 220 V (50 Hz), sem seleção automática e potência de 500W."
    ],
    answer: "Pode ser ligada em 110 ou 220 V (50/60 Hz), com seleção automática. Potência superior a 210W."
  },
  {
    question: "O que deve ser utilizado para evitar a interrupção do funcionamento da central?",
    options: [
      "Deve-se utilizar um no break ou short break.",
      "Apenas um estabilizador de tensão comum de uso doméstico.",
      "Um fusível de alta amperagem na entrada da fonte de alimentação.",
      "Conectar a central a um transformador isolador sem bateria."
    ],
    answer: "Deve-se utilizar um no break ou short break."
  },
  {
    question: "Com que tipos de interface o sistema Impacta 300 se comunica com o meio externo?",
    options: [
      "Com interfaces digitais, analógicas e por VoIP.",
      "Apenas por interfaces analógicas tradicionais de 2 fios.",
      "Exclusivamente via conexões ópticas de redes Metro Ethernet.",
      "Somente por sinais de rádio frequência Bluetooth e Wi-Fi."
    ],
    answer: "Com interfaces digitais, analógicas e por VoIP."
  },
  // 2.1.2 ESTRUTURA DO SISTEMA / 2.2 MODULARIDADE
  {
    question: "Qual é a função da placa backplane?",
    options: [
      "Funciona como uma placa-mãe da central, conectando todas as outras placas.",
      "Gerenciar unicamente os ramais analógicos de longa distância.",
      "Fornecer sinal de internet sem fio para os computadores da rede local.",
      "Armazenar o banco de dados de tarifação e arquivos de áudio da música de espera."
    ],
    answer: "Funciona como uma placa-mãe da central, conectando todas as outras placas."
  },
  {
    question: "Onde a placa backplane é instalada?",
    options: [
      "É montada no interior do gabinete e recebe alimentação da fonte.",
      "É fixada na parte externa traseira da central para facilitar a troca.",
      "Instalada diretamente na parede, fora do gabinete metálico.",
      "Conectada dentro do módulo de expansão de teclas MOD 350."
    ],
    answer: "É montada no interior do gabinete e recebe alimentação da fonte."
  },
  {
    question: "Quantos slots a placa backplane possui?",
    options: [
      "Possui 12 slots para conexão de placas.",
      "Possui 8 slots para conexão de placas.",
      "Possui 16 slots para conexão de placas.",
      "Possui 24 slots para conexão de placas."
    ],
    answer: "Possui 12 slots para conexão de placas."
  },
  {
    question: "Qual posição é ocupada pela placa CPU na backplane?",
    options: [
      "A primeira posição.",
      "A última posição (slot 12).",
      "A posição central (slot 6).",
      "Qualquer posição livre do barramento."
    ],
    answer: "A primeira posição."
  },
  {
    question: "De que é composto o sistema Impacta 300?",
    options: [
      "É composto por várias placas de circuito impresso interligadas através de barramentos seriais comuns, via backplane.",
      "Por um bloco único e selado de resina sem peças modulares substituíveis.",
      "Apenas por um terminal de computador rodando o software programador web.",
      "Por roteadores interconectados exclusivamente via cabos de rede Ethernet independentes."
    ],
    answer: "É composto por várias placas de circuito impresso interligadas através de barramentos seriais comuns, via backplane."
  },
  {
    question: "Onde está localizado o controle central do equipamento?",
    options: [
      "Na placa CPU.",
      "Na fonte de alimentação.",
      "Na placa de ramal misto.",
      "No terminal telefônico do operador (TIP 300)."
    ],
    answer: "Na placa CPU."
  },
  // 2.2.1 PLACA CPU / 2.2.2 PLACA TRONCO GSM
  {
    question: "O que é o cartão CPU?",
    options: [
      "É a unidade central de processamento do sistema.",
      "Uma placa adaptadora para conversão de áudio analógico para digital.",
      "O módulo responsável pela alimentação elétrica de emergência.",
      "O cartão de memória onde são gravadas as chamadas dos ramais."
    ],
    answer: "É a unidade central de processamento do sistema."
  },
  {
    question: "Quais funções estão localizadas no cartão CPU?",
    options: [
      "Todas as funções básicas necessárias ao funcionamento do sistema.",
      "Apenas a conversão de voltagem da fonte e resfriamento por coolers.",
      "Exclusivamente a amplificação de sinal das antenas GSM.",
      "Somente a interface de conexão para linhas digitais E1."
    ],
    answer: "Todas as funções básicas necessárias ao funcionamento do sistema."
  },
  {
    question: "Qual é a função da placa Tronco GSM?",
    options: [
      "Integra a telefonia móvel à telefonia fixa, permitindo o uso compartilhado da linha celular pelos ramais do PABX.",
      "Conectar o PABX à rede de fibra ótica de internet da concessionária.",
      "Gravar as chamadas telefônicas em um cartão Micro SD de segurança.",
      "Fornecer energia elétrica por cabo de rede (PoE) para os telefones IP."
    ],
    answer: "Integra a telefonia móvel à telefonia fixa, permitindo o uso compartilhado da linha celular pelos ramais do PABX."
  },
  {
    question: "Quais versões existem da placa Tronco GSM?",
    options: [
      "Uma com 4 canais e outra com 8 canais GSM.",
      "Uma com 2 canais e outra com 16 canais GSM.",
      "Apenas a versão de 1 canal GSM individual.",
      "Versões de 10 canais e 30 canais GSM."
    ],
    answer: "Uma com 4 canais e outra com 8 canais GSM."
  },
  {
    question: "Para que serve o conector SMA fêmea na placa GSM?",
    options: [
      "Para ligar a antena e melhorar a recepção da operadora.",
      "Para conectar o cabo de alimentação contínua de 5V da fonte.",
      "Para conectar o cabo CHAMP de 25 pares aos ramais.",
      "Para inserir o cartão SD de gravação de chamadas."
    ],
    answer: "Para ligar a antena e melhorar a recepção da operadora."
  },
  {
    question: "O que indica o LED de status da placa GSM quando está apagado?",
    options: [
      "Que a placa não foi inicializada.",
      "Que a placa está funcionando perfeitamente sem falhas.",
      "Que todos os canais GSM estão ocupados em ligação.",
      "Que a antena está com sinal máximo de recepção."
    ],
    answer: "Que a placa não foi inicializada."
  },
  {
    question: "O que indica o LED piscando rapidamente (100 ms ON/100 ms OFF) na placa GSM?",
    options: [
      "Que a placa está inicializando ou não recebeu o ID correto da central.",
      "Que a central está operando em modo de economia de energia.",
      "Que existe uma chamada em espera no ramal da telefonista.",
      "Que o chip GSM foi bloqueado por código PIN incorreto."
    ],
    answer: "Que a placa está inicializando ou não recebeu o ID correto da central."
  },
  {
    question: "O que indica o LED piscando lentamente (500 ms ON/500 ms OFF) na placa GSM?",
    options: [
      "Que a placa está inicializada e com ID correto.",
      "Que ocorreu um curto-circuito no barramento serial da backplane.",
      "Que o software de tarifação Controller está desconectado.",
      "Que a fonte de alimentação está operando acima da voltagem nominal."
    ],
    answer: "Que a placa está inicializada e com ID correto."
  },
  {
    question: "Em que posição pode ser conectada a placa Tronco GSM?",
    options: [
      "Em qualquer posição disponível da placa Backplane.",
      "Exclusivamente no slot 1, substituindo a placa CPU.",
      "Apenas no slot 11, obrigatoriamente ao lado da placa E1.",
      "Somente no último slot da central (posição 12)."
    ],
    answer: "Em qualquer posição disponível da placa Backplane."
  },
  {
    question: "Qual é o limite máximo de canais GSM na central Impacta?",
    options: [
      "O limite é de 8 canais GSM por central (1 placa de 8 ou 2 placas de 4).",
      "O limite é de 16 canais GSM por central.",
      "O limite é de 4 canais GSM por central.",
      "O limite é de 30 canais GSM, igual à capacidade da placa E1."
    ],
    answer: "O limite é de 8 canais GSM por central (1 placa de 8 ou 2 placas de 4)."
  },
  // 2.2.3 PLACA BASE E CODEC ICIP 30 / 2.2.4 PLACAS 1E1 E 2E1
  {
    question: "O que a placa ICIP adiciona à central Impacta 300?",
    options: [
      "Permite comunicação VoIP com 120 ramais SIP e 30 troncos SIP.",
      "Adiciona 240 ramais analógicos com conector CHAMP.",
      "Habilita a conexão de 8 linhas de celulares GSM via antena externa.",
      "Permite a tarifação impressa sem necessidade de software bilhetador."
    ],
    answer: "Permite comunicação VoIP com 120 ramais SIP e 30 troncos SIP."
  },
  {
    question: "O que é VoIP?",
    options: [
      "É a transmissão de voz pela internet ou rede privada usando o protocolo SIP.",
      "Um sistema de cabeamento estruturado exclusivo para linhas analógicas.",
      "Um conector de 180 graus utilizado nas placas de ramais mistos.",
      "Um software de gravação de chamadas em cartão Micro SD."
    ],
    answer: "É a transmissão de voz pela internet ou rede privada usando o protocolo SIP."
  },
  {
    question: "Quais são as vantagens imediatas da placa ICIP?",
    options: [
      "Diminuição dos custos de ligações, unificação de numeração, acesso via WEB e redução de custos operacionais.",
      "Eliminação total da necessidade de usar fontes de alimentação na central.",
      "Aumento da voltagem da central de 110V para 380V trifásico.",
      "Substituição automática de todos os telefones antigos por aparelhos sem fio sem configurar rede."
    ],
    answer: "Diminuição dos custos de ligações, unificação de numeração, acesso via WEB e redução de custos operacionais."
  },
  {
    question: "De que é composta a Placa Base e Codec ICIP 30?",
    options: [
      "Placa Base ICIP 30, Placa CODEC ICIP 30 e Chave de Hardware.",
      "Placa CPU, Cartão SD e Fonte DC5V.",
      "Barramento Backplane, Conector CHAMP e Cabo CAT.3.",
      "Módulo ATA, Terminal TIP 200 e Módulo MOD 350."
    ],
    answer: "Placa Base ICIP 30, Placa CODEC ICIP 30 e Chave de Hardware."
  },
  {
    question: "Qual é a função da Placa Base ICIP 30?",
    options: [
      "Processar informações de rede e conexões à internet (e canais VoIP disponíveis na placa).",
      "Apenas refrigerar a central acionando os 2 coolers do gabinete.",
      "Gerar o sinal de campainha de 75 V para os telefones analógicos antigos.",
      "Armazenar em ROM a senha de fábrica 1234 da central."
    ],
    answer: "Processar informações de rede e conexões à internet (e canais VoIP disponíveis na placa)."
  },
  {
    question: "Qual é a função da Placa CODEC ICIP 30?",
    options: [
      "Processar sinais de voz e convertê-los em pacotes de dados.",
      "Conectar cabos coaxiais de antenas de rádio frequência.",
      "Bloquear chamadas a cobrar e ligações internacionais no PABX.",
      "Medir a temperatura da fonte de alimentação e evitar sobrecarga."
    ],
    answer: "Processar sinais de voz e convertê-los em pacotes de dados."
  },
  {
    question: "Quantos canais e ramais cada CODEC habilita?",
    options: [
      "10 canais VoIP e 40 ramais SIP.",
      "30 canais VoIP e 120 ramais SIP.",
      "4 canais GSM e 16 ramais analógicos.",
      "2 contas SIP e 2 ramais analógicos."
    ],
    answer: "10 canais VoIP e 40 ramais SIP."
  },
  {
    question: "Quantas posições há para conexão da chave de hardware ICIP?",
    options: [
      "Três posições, atingindo até 30 canais VoIP.",
      "Uma única posição para até 10 canais.",
      "Doze posições no barramento da backplane.",
      "Oito posições para canais GSM."
    ],
    answer: "Três posições, atingindo até 30 canais VoIP."
  },
  {
    question: "Qual é a capacidade das placas 1E1 e 2E1?",
    options: [
      "Até 30 ou 60 linhas digitais, respectivamente.",
      "Até 10 ou 20 ramais analógicos.",
      "Até 4 ou 8 canais GSM.",
      "Até 120 ou 240 ramais IP."
    ],
    answer: "Até 30 ou 60 linhas digitais, respectivamente."
  },
  {
    question: "Qual é a função das placas 1E1 e 2E1?",
    options: [
      "Permitem conexão com companhias telefônicas que usam protocolos RS Digital ou RDSI.",
      "Permitem conectar telefones sem fio Bluetooth à central.",
      "Servem exclusivamente para expandir a memória RAM da placa CPU.",
      "Convertem sinais de satélite em ramais internos para elevadores."
    ],
    answer: "Permitem conexão com companhias telefônicas que usam protocolos RS Digital ou RDSI."
  },
  {
    question: "Quem define o tipo de protocolo usado nas placas E1?",
    options: [
      "A concessionária local (operadora de telefonia).",
      "O usuário final através do telefone TIP 200.",
      "A placa fonte de alimentação automaticamente pela voltagem.",
      "O software de tarifação Bilhetador durante a instalação."
    ],
    answer: "A concessionária local (operadora de telefonia)."
  },
  {
    question: "Onde a placa E1 deve ser instalada?",
    options: [
      "No slot 11, ao lado da CPU.",
      "Em qualquer slot livre da backplane.",
      "No primeiro slot da central (posição 1).",
      "Diretamente conectada na placa Tronco GSM."
    ],
    answer: "No slot 11, ao lado da CPU."
  },
  // 2.3 TERMINAIS IP / 2.3.1 TERMINAL TIP 200
  {
    question: "O que é um telefone IP?",
    options: [
      "É um telefone digital com display e funções de conferência, agenda e histórico, conectado por rede Ethernet.",
      "Um aparelho analógico simples com discagem decádica por pulso.",
      "Um telefone celular satelital sem conexão à internet.",
      "Um intercomunicador de porta sem teclado numérico ou visor."
    ],
    answer: "É um telefone digital com display e funções de conferência, agenda e histórico, conectado por rede Ethernet."
  },
  {
    question: "Qual é a diferença de um telefone IP para um digital comum?",
    options: [
      "A conexão é feita por porta Ethernet (rede de dados).",
      "O telefone IP não possui teclado, funcionando apenas por comando de voz.",
      "O telefone digital comum utiliza cabos de fibra óptica direto na central.",
      "Apenas a cor do aparelho e o tamanho do display LCD."
    ],
    answer: "A conexão é feita por porta Ethernet (rede de dados)."
  },
  {
    question: "Como é feita a conexão do telefone IP com o PBX?",
    options: [
      "Através de uma porta Ethernet do telefone ao switch da rede local.",
      "Por um cabo de engate rápido CHAMP conectado diretamente na placa de ramal.",
      "Através de antena Wi-Fi pareada com a placa GSM do PABX.",
      "Por fiação telefônica analógica de 2 fios ligada à placa base."
    ],
    answer: "Através de uma porta Ethernet do telefone ao switch da rede local."
  },
  {
    question: "Quantas portas Ethernet um telefone IP geralmente possui?",
    options: [
      "Duas portas: uma para o switch (rede) e outra para o PC desktop (computador).",
      "Apenas uma porta Ethernet exclusiva para o roteador.",
      "Quatro portas Ethernet para conectar outros telefones em série.",
      "Nenhuma porta física, comunicando-se exclusivamente por infravermelho."
    ],
    answer: "Duas portas: uma para o switch (rede) e outra para o PC desktop (computador)."
  },
  {
    question: "Quantas contas SIP o TIP 200 suporta?",
    options: [
      "Até duas contas SIP.",
      "Até três contas SIP.",
      "Apenas uma conta SIP.",
      "Até dez contas SIP simultâneas."
    ],
    answer: "Até duas contas SIP."
  },
  {
    question: "Quais são as características do TIP 200?",
    options: [
      "Display 2x15, compatibilidade com headset e alimentação PoE.",
      "Tela sensível ao toque colorida de 10 polegadas sem suporte a PoE.",
      "Alimentação exclusiva por pilhas alcalinas e sem entrada para headset.",
      "Suporte para 40 teclas programáveis sem necessidade de módulo externo."
    ],
    answer: "Display 2x15, compatibilidade com headset e alimentação PoE."
  },
  {
    question: "O TIP 200 pode ser usado com quais equipamentos?",
    options: [
      "Com operadora VoIP ou Central IP (não possui interface analógica).",
      "Exclusivamente em linhas de cobre analógicas da concessionária pública.",
      "Apenas acoplado a telefones celulares via cabo USB.",
      "Somente em centrais telefônicas que utilizem cartões de memória SDHC."
    ],
    answer: "Com operadora VoIP ou Central IP (não possui interface analógica)."
  },
  {
    question: "O que são teclas DSS?",
    options: [
      "Teclas usadas para discagem rápida e monitoramento de ramais.",
      "Teclas de emergência para desligar a central em caso de curto-circuito.",
      "Botões exclusivos para ajuste do volume da campainha e brilho do display.",
      "Comandos físicos na placa CPU para resetar a senha de fábrica."
    ],
    answer: "Teclas usadas para discagem rápida e monitoramento de ramais."
  },
  {
    question: "Quais são as teclas fixas e suas funções no terminal IP?",
    options: [
      "Mensagens (acessar correio de voz); Conference (conferência a 3); Hold (colocar em espera/reiniciar); Flash (transferir chamada); Redial (rediscar último número).",
      "Power (ligar/desligar); Eject (ejetar cartão SD); Mute (desativar microfone); Volume (controlar som).",
      "Menu (configurações); DND (não perturbe); History (histórico); Phonebook (agenda de contatos).",
      "Reset (configuração de fábrica); Lock (cadeado de chamadas); BINA (identificador); NTP (hora/data)."
    ],
    answer: "Mensagens (acessar correio de voz); Conference (conferência a 3); Hold (colocar em espera/reiniciar); Flash (transferir chamada); Redial (rediscar último número)."
  },
  // 2.3.2 TERMINAL TIP 300 / 2.3.3 MÓDULO MOD 350 / 2.3.4 ATA / 2.3.5 REGISTRO
  {
    question: "Quantas contas SIP o TIP 300 suporta?",
    options: [
      "Até três contas SIP.",
      "Até duas contas SIP.",
      "Até oito contas SIP.",
      "Apenas uma conta SIP."
    ],
    answer: "Até três contas SIP."
  },
  {
    question: "Qual é a função do MOD 350?",
    options: [
      "Módulo de expansão de teclas programáveis para o TIP 300 / TIP 300S.",
      "Placa de expansão de troncos analógicos instalada na backplane.",
      "Adaptador para ligar telefones analógicos em redes VoIP.",
      "Fonte de alimentação ininterrupta no break para a central Impacta."
    ],
    answer: "Módulo de expansão de teclas programáveis para o TIP 300 / TIP 300S."
  },
  {
    question: "Quantas teclas físicas o MOD 350 possui?",
    options: [
      "20 teclas físicas e mais 20 com mudança de página no display.",
      "10 teclas físicas sem possibilidade de mudança de página.",
      "40 teclas mecânicas individuais distribuídas em duas colunas.",
      "12 teclas numéricas e 4 teclas de navegação do menu."
    ],
    answer: "20 teclas físicas e mais 20 com mudança de página no display."
  },
  {
    question: "Quantos módulos MOD 350 podem ser usados juntos?",
    options: [
      "Até dois módulos, totalizando 40 programações físicas (ou 80 com paginação).",
      "Apenas um módulo por terminal IP.",
      "Até quatro módulos interligados em série.",
      "Sem limite de módulos, dependendo apenas da capacidade do switch."
    ],
    answer: "Até dois módulos, totalizando 40 programações físicas (ou 80 com paginação)."
  },
  {
    question: "O que é o módulo ATA GKM 2210 T?",
    options: [
      "Um adaptador de telefone analógico com roteador, compatível com SIP e alta qualidade de áudio.",
      "Uma placa de circuito interno da central para recepção de rádio FM.",
      "O software de gravação de chamadas para cartão SD na placa CPU.",
      "Um terminal telefônico digital de mesa com display 2x15."
    ],
    answer: "Um adaptador de telefone analógico com roteador, compatível com SIP e alta qualidade de áudio."
  },
  {
    question: "Quantas contas SIP o ATA GKM 2210 T suporta?",
    options: [
      "Duas contas SIP.",
      "Uma conta SIP.",
      "Quatro contas SIP.",
      "Trinta contas SIP."
    ],
    answer: "Duas contas SIP."
  },
  {
    question: "Quantos ramais analógicos podem ser instalados no ATA?",
    options: [
      "Até dois ramais analógicos.",
      "Até dez ramais analógicos.",
      "Apenas um ramal analógico.",
      "Oito ramais analógicos e dois digitais."
    ],
    answer: "Até dois ramais analógicos."
  },
  {
    question: "O que é registrar um telefone IP na central?",
    options: [
      "Atribuir ao telefone IP um número virtual de ramal (1º passo: Programador Web; 2º passo: no telefone TIP 200/300).",
      "Conectar o cabo de energia na tomada de 220V e ligar a chave geral.",
      "Cadastrar a impressão digital do usuário no software Bilhetador.",
      "Formatar o cartão Micro SD e inseri-lo na placa base ICIP."
    ],
    answer: "Atribuir ao telefone IP um número virtual de ramal (1º passo: Programador Web; 2º passo: no telefone TIP 200/300)."
  },
  // 2.4 TIPOS DE CONEXÃO NAS PLACAS / 2.4.3 INSTALAÇÃO / 2.4.4 INSTALAÇÃO MOD 350
  {
    question: "Quais são os tipos de conectores utilizados nas placas da Impacta 300?",
    options: [
      "FM plug 180 graus e CHAMP.",
      "RJ-45 e USB Tipo C.",
      "Conectores BNC e RCA de áudio/vídeo.",
      "Conectores coaxiais SMA macho e fêmea exclusivamente."
    ],
    answer: "FM plug 180 graus e CHAMP."
  },
  {
    question: "Quantos ramais comporta um conector FM plug 180 graus?",
    options: [
      "Dois ramais (4 fios).",
      "Oito ramais (16 fios).",
      "Dezesseis ramais (32 fios).",
      "Um único ramal analógico de 2 fios."
    ],
    answer: "Dois ramais (4 fios)."
  },
  {
    question: "Onde é usado o conector CHAMP?",
    options: [
      "Nas placas de 16 e 24 ramais.",
      "Na placa de CPU para conexão com o computador.",
      "Exclusivamente na placa de tronco GSM para antena.",
      "Na saída da fonte de alimentação de 210W."
    ],
    answer: "Nas placas de 16 e 24 ramais."
  },
  {
    question: "Qual cabo é utilizado na conexão CHAMP?",
    options: [
      "Cabo CHAMP CAT.3 24 AWG de 25 pares e conector CN50P/M.",
      "Cabo de fibra óptica monomodo com conector SC/APC.",
      "Cabo coaxial RG-59 de 75 Ohms com malha de cobre.",
      "Cabo elétrico paralelo de 2,5 mm² flexível."
    ],
    answer: "Cabo CHAMP CAT.3 24 AWG de 25 pares e conector CN50P/M."
  },
  {
    question: "Como é feita a instalação do terminal IP?",
    options: [
      "Conectando a porta internet do telefone ao switch e a fonte DC5V (ou via PoE).",
      "Ligando os fios par trançado diretamente aos terminais de parafuso do gabinete.",
      "Conectando o cabo CHAMP de 25 pares na traseira do aparelho telefônico.",
      "Através de pareamento Bluetooth com a placa E1 do slot 11."
    ],
    answer: "Conectando a porta internet do telefone ao switch e a fonte DC5V (ou via PoE)."
  },
  {
    question: "Quando o uso da fonte no terminal IP é dispensado?",
    options: [
      "Quando o equipamento de rede (switch) suporta tecnologia PoE.",
      "Quando o telefone é utilizado em modo de economia de tela apagada.",
      "Sempre que a central estiver operando com bateria externa de no break.",
      "Quando o terminal for configurado com o IP de fábrica 10.0.0.2."
    ],
    answer: "Quando o equipamento de rede (switch) suporta tecnologia PoE."
  },
  {
    question: "O que é PoE?",
    options: [
      "Power over Ethernet, tecnologia que fornece energia elétrica pelo cabo de rede.",
      "Protocolo de roteamento óptico externo para linhas digitais RDSI.",
      "Programa operacional executado na placa CPU para bilhetagem.",
      "Padrão de criptografia de voz para chamadas sigilosas entre ramais."
    ],
    answer: "Power over Ethernet, tecnologia que fornece energia elétrica pelo cabo de rede."
  },
  {
    question: "Como deve ser conectada a porta PC do telefone IP?",
    options: [
      "Com cabo de rede ligado diretamente à torre ou placa de rede do computador desktop.",
      "À porta LAN de outro telefone IP para formar uma cascata infinita.",
      "Na porta de console serial da central telefônica.",
      "Diretamente na entrada de modem analógico da operadora telefônica."
    ],
    answer: "Com cabo de rede ligado diretamente à torre ou placa de rede do computador desktop."
  },
  {
    question: "Em qual terminal o módulo MOD 350 deve ser instalado?",
    options: [
      "Exclusivamente no TIP 300 / TIP 300S.",
      "Em qualquer telefone analógico com conector RJ-11.",
      "No terminal básico TIP 200 ou no módulo ATA.",
      "Diretamente no painel frontal da central Impacta 300."
    ],
    answer: "Exclusivamente no TIP 300 / TIP 300S."
  },
  {
    question: "Como é feita a alimentação do MOD 350?",
    options: [
      "Pelo próprio telefone IP ou por fonte de 5V conectada ao módulo.",
      "Por bateria interna recarregável de íons de lítio.",
      "Exclusivamente por cabo de força de 220V com tomada de 3 pinos.",
      "Através do barramento de 48V do cabo CHAMP do PABX."
    ],
    answer: "Pelo próprio telefone IP ou por fonte de 5V conectada ao módulo."
  },
  // 2.5 SOFTWARE / 2.5.1 WEB / 2.5.2 MESA VIRTUAL / 2.5.3 CONTROLLER / 2.5.4 GRAVAÇÃO
  {
    question: "Que tipos de software a central Impacta 300 oferece?",
    options: [
      "Programador Web, Mesa Virtual, Controller e Software de gravação.",
      "Apenas sistema operacional Linux em linha de comando sem interface gráfica.",
      "Exclusivamente antivírus de rede e firewall de bloqueio de portas.",
      "Somente planilhas eletrônicas offline de exportação em CSV."
    ],
    answer: "Programador Web, Mesa Virtual, Controller e Software de gravação."
  },
  {
    question: "O que é o Programador Web?",
    options: [
      "Software de operação e manutenção com gerenciamento via navegador web.",
      "Um editor de código-fonte para programar jogos em centrais telefônicas.",
      "Um aplicativo exclusivo para smartphones Android de tarifação.",
      "Um módulo de hardware que substitui a placa CPU em caso de falha."
    ],
    answer: "Software de operação e manutenção com gerenciamento via navegador web."
  },
  {
    question: "O que é a Mesa Virtual?",
    options: [
      "Software que controla remotamente a central telefônica, auxiliando o telefonista a gerenciar todas as ligações.",
      "Uma mesa de reuniões física com alto-falantes e microfones embutidos.",
      "O banco de dados FDB onde as chamadas perdidas são arquivadas.",
      "Uma ferramenta de calibração para as voltagens de 110/220V da fonte."
    ],
    answer: "Software que controla remotamente a central telefônica, auxiliando o telefonista a gerenciar todas as ligações."
  },
  {
    question: "Quais são os níveis de usuário da Mesa Virtual?",
    options: [
      "Operador (nível mais baixo - visualiza), Supervisor (intermediário - gerencia configurações) e Administrador.",
      "Convidado, Usuário Padrão e Root.",
      "Telefonista 1, Telefonista 2 e Gerente Geral.",
      "Estagiário, Técnico e Engenheiro de Rede."
    ],
    answer: "Operador (nível mais baixo - visualiza), Supervisor (intermediário - gerencia configurações) e Administrador."
  },
  {
    question: "Quais funções são exclusivas do Administrador na Mesa Virtual?",
    options: [
      "Gerenciar configurações de conexão e cadastro de usuários.",
      "Apenas atender e transferir chamadas locais no pêndulo.",
      "Trocar o turno diurno e noturno pelo teclado numérico.",
      "Ouvir o bip de BINA audível através do comando *87*."
    ],
    answer: "Gerenciar configurações de conexão e cadastro de usuários."
  },
  {
    question: "O que é o Controller Corporate/Professional?",
    options: [
      "Software de tarifação que gera relatórios e gráficos gerenciais de consumo.",
      "O controle remoto sem fio para ajuste do volume dos alto-falantes do PABX.",
      "O chip processador principal responsável pelo barramento serial da backplane.",
      "Um utilitário de disco para formatar cartões SD da placa de gravação."
    ],
    answer: "Software de tarifação que gera relatórios e gráficos gerenciais de consumo."
  },
  {
    question: "Qual é a finalidade do Controller?",
    options: [
      "Permitir acesso às informações do bilhetador e calcular os valores monetários das chamadas.",
      "Controlar a rotação dos 2 coolers de refrigeração da fonte de alimentação.",
      "Conectar o PABX aos servidores de hora NTP da internet sem usar IP.",
      "Impedir que ramais analógicos utilizem o desvio de chamada Siga-me."
    ],
    answer: "Permitir acesso às informações do bilhetador e calcular os valores monetários das chamadas."
  },
  {
    question: "O que é o Bilhetador?",
    options: [
      "Programa que comunica com o PABX, coletando informações das chamadas em um arquivo de banco de dados extensão .FDB.",
      "Um impressora térmica conectada à central para emitir cupons de ligações.",
      "O leitor de cartão magnético usado pelo operador para autenticar no TIP 300.",
      "Um alarme sonoro que dispara quando o limite de canais GSM é atingido."
    ],
    answer: "Programa que comunica com o PABX, coletando informações das chamadas em um arquivo de banco de dados extensão .FDB."
  },
  {
    question: "Qual é a função do software de gravação?",
    options: [
      "Gravar chamadas telefônicas armazenando os arquivos em cartão SD na placa CPU.",
      "Gravar o firmware de boot diretamente nas placas de ramais analógicos.",
      "Registrar em fita cassete o histórico de alarmes de voltagem da fonte.",
      "Garantir a compressão de voz dos canais VoIP da placa CODEC ICIP 30."
    ],
    answer: "Gravar chamadas telefônicas armazenando os arquivos em cartão SD na placa CPU."
  },
  {
    question: "Que tipo de cartão SD é compatível com a gravação de chamadas na Impacta?",
    options: [
      "Tipo SDHC, classe 6 ou superior (Micro SD não é compatível; ideal que seja a cada hora).",
      "Qualquer cartão Micro SD de 2 GB ou inferior de classe 4.",
      "Apenas cartões de memória proprietários Intelbras de formato magnético.",
      "Pendrives USB ou HDs externos portáteis formatados em FAT16."
    ],
    answer: "Tipo SDHC, classe 6 ou superior (Micro SD não é compatível; ideal que seja a cada hora)."
  },
  // 2.6 PROGRAMAÇÃO VIA PLACA ICIP / 2.7 FACILIDADES PROGRAMADAS
  {
    question: "Qual é o padrão de fábrica de IP LAN da central Impacta?",
    options: [
      "Endereço IP 10.0.0.2.",
      "Endereço IP 192.168.0.1.",
      "Endereço IP 172.16.0.254.",
      "Endereço IP 127.0.0.1."
    ],
    answer: "Endereço IP 10.0.0.2."
  },
  {
    question: "O que permite o submenu \"Interfaces\" no Programador Web?",
    options: [
      "Configurar a disposição das placas conectadas no barramento backplane.",
      "Alterar a imagem de fundo e as cores do display dos aparelhos TIP 200.",
      "Ativar a conexão Bluetooth com fones de ouvido sem fio.",
      "Calibrar a sensibilidade da antena da placa tronco GSM."
    ],
    answer: "Configurar a disposição das placas conectadas no barramento backplane."
  },
  {
    question: "O que permite o submenu NTP?",
    options: [
      "Configurar servidores NTP para sincronização automática de hora e data na central.",
      "Definir as regras de tarifação de ligações internacionais de longa distância.",
      "Cadastrar novos números de ramais virtuais para telefones SIP.",
      "Realizar o reset total da central para o padrão de fábrica 1234."
    ],
    answer: "Configurar servidores NTP para sincronização automática de hora e data na central."
  },
  {
    question: "O que permite o submenu Proxy na programação ICIP?",
    options: [
      "Configurar a conexão entre a central telefônica e o provedor de serviço VoIP.",
      "Bloquear o acesso dos funcionários a sites de redes sociais na rede Ethernet.",
      "Interligar dois módulos de expansão MOD 350 na mesma mesa.",
      "Mapear as portas físicas dos conectores CHAMP nas placas de 24 ramais."
    ],
    answer: "Configurar a conexão entre a central telefônica e o provedor de serviço VoIP."
  },
  {
    question: "O que é cadastrado no submenu Numeração?",
    options: [
      "Os ramais que geram e recebem ligações VoIP na central.",
      "Os números de série dos cartões SDHC instalados na placa CPU.",
      "A quantidade de parafusos de fixação do aterramento de proteção.",
      "A voltagem nominal de 110V ou 220V selecionada pela fonte de alimentação."
    ],
    answer: "Os ramais que geram e recebem ligações VoIP na central."
  },
  {
    question: "Qual é a função dos CODECs no sistema de telefonia IP?",
    options: [
      "Reduzir a largura de banda dos sinais de voz usando algoritmos de compressão de áudio.",
      "Aumentar a voltagem do sinal de toque para tocar campainhas mecânicas distantes.",
      "Converter ligações VoIP em chamadas de rádio frequência analógica.",
      "Impedir o superaquecimento da placa base desligando os canais inativos."
    ],
    answer: "Reduzir a largura de banda dos sinais de voz usando algoritmos de compressão de áudio."
  },
  {
    question: "Quais portas TCP/UDP devem ser habilitadas para os softwares via ICIP?",
    options: [
      "Mesa Virtual (7001), Programador Web (51001), Bilhetador (52001) e Monitor E1 (53001).",
      "HTTP (80), HTTPS (443), FTP (21) e SSH (22).",
      "SIP (5060), RTP (10000), SMTP (25) e DNS (53).",
      "Portas 1, 2, 3 e 4 correspondentes aos canais da placa GSM."
    ],
    answer: "Mesa Virtual (7001), Programador Web (51001), Bilhetador (52001) e Monitor E1 (53001)."
  },
  {
    question: "O que define a facilidade \"requisição de senha\"?",
    options: [
      "Define se a central exige ou não uma senha de segurança para permitir programações e configurações.",
      "Obrigação de digitar PIN antes de cada discagem de número local.",
      "A solicitação de senha de Wi-Fi no display do terminal TIP 200.",
      "O bloqueio automático da central quando a voltagem cai abaixo de 110V."
    ],
    answer: "Define se a central exige ou não uma senha de segurança para permitir programações e configurações."
  },
  {
    question: "Qual é a senha do ramal?",
    options: [
      "Senha numérica de até 8 dígitos, exclusiva e individual de cada ramal.",
      "A senha geral de fábrica 1234 que não pode ser modificada pelo usuário.",
      "O código alfanumérico impresso no chip da placa backplane.",
      "Um código de 4 dígitos compartilhado por toda a filial da empresa."
    ],
    answer: "Senha numérica de até 8 dígitos, exclusiva e individual de cada ramal."
  },
  {
    question: "O que é o desvio de chamadas (Siga-me)?",
    options: [
      "Facilidade que permite que as chamadas dirigidas a um ramal sejam automaticamente desviadas para outro ramal, grupo ou número externo.",
      "O cancelamento de uma ligação em andamento em caso de ruído na linha.",
      "A transferência manual de chamada utilizando a tecla Flash e o gancho.",
      "A gravação oculta da conversa no cartão SD da placa de processamento."
    ],
    answer: "Facilidade que permite que as chamadas dirigidas a um ramal sejam automaticamente desviadas para outro ramal, grupo ou número externo."
  },
  {
    question: "O que é a facilidade Hotline?",
    options: [
      "Acesso automático a outro ramal ou número predeterminado ao tirar o fone do gancho (com retardo de 1 a 4 seg ou sem retardo de 0 seg).",
      "Uma linha telefônica exclusiva para ligações de emergência de bombeiros e polícia.",
      "A campainha de volume máximo acionada durante o modo noturno da central.",
      "O conector de antena externo na placa GSM para áreas de baixa recepção."
    ],
    answer: "Acesso automático a outro ramal ou número predeterminado ao tirar o fone do gancho (com retardo de 1 a 4 seg ou sem retardo de 0 seg)."
  },
  // 2.8 OPERAÇÃO / CADEADO / TRANSFERÊNCIA / PÊNDULO / TURNO
  {
    question: "O que é o cadeado no PABX?",
    options: [
      "Bloqueio programado do ramal para impedir a realização de chamadas externas ou de certos tipos.",
      "Uma trava física com chave metálica na porta do gabinete da central Impacta.",
      "A desativação permanente da porta Ethernet do terminal TIP 300 pelo supervisor.",
      "O bloqueio do cartão de memória SDHC contra regravação de chamadas."
    ],
    answer: "Bloqueio programado do ramal para impedir a realização de chamadas externas ou de certos tipos."
  },
  {
    question: "Como bloquear chamadas utilizando a facilidade cadeado?",
    options: [
      "Pressione * + 51 + senha do ramal + 1 + tipo de bloqueio + *.",
      "Pressione # + 3 + senha do ramal + 0 + *.",
      "Pressione Flash + 7 + número do ramal + *.",
      "Pressione * + 13 + 1234 + * + 99 + *."
    ],
    answer: "Pressione * + 51 + senha do ramal + 1 + tipo de bloqueio + *."
  },
  {
    question: "Como liberar chamadas travadas com o cadeado?",
    options: [
      "Pressione * + 51 + senha do ramal + 0 + tipo de bloqueio + *.",
      "Pressione # + 5 + número do ramal + *.",
      "Pressione Flash + 5 + * no terminal do operador.",
      "Pressione * + 87 + 0 + *."
    ],
    answer: "Pressione * + 51 + senha do ramal + 0 + tipo de bloqueio + *."
  },
  {
    question: "Quais são os códigos dos tipos de chamadas na programação do cadeado?",
    options: [
      "1: locais; 2: DDD; 3: DDI; 4: regionais; 5: celular local; 6: celular DDD; 7: celular DDI; 8: celular regional; 9: total.",
      "1: chamadas internas; 2: chamadas externas; 3: VoIP; 4: analógicas; 5: digitais; 6: conferência.",
      "1: emergência; 2: portaria; 3: administração; 4: diretoria; 5: supervisão; 6: operação.",
      "1: ramal analógico; 2: ramal digital; 3: ramal IP; 4: tronco GSM; 5: placa E1."
    ],
    answer: "1: locais; 2: DDD; 3: DDI; 4: regionais; 5: celular local; 6: celular DDD; 7: celular DDI; 8: celular regional; 9: total."
  },
  {
    question: "Qual é o exemplo de comando para bloqueio com senha 5454 para chamadas DDD (tipo 2) e DDI (tipo 3)?",
    options: [
      "* + 51 + 5454 + * + 1 + 2 + * e * + 51 + 5454 + * + 1 + 3 + *.",
      "# + 3 + 5454 + * + 2 + 3 + *.",
      "* + 13 + 5454 + * + 99 + *.",
      "Flash + 5454 + 2 + 3."
    ],
    answer: "* + 51 + 5454 + * + 1 + 2 + * e * + 51 + 5454 + * + 1 + 3 + *."
  },
  {
    question: "Como transferir uma chamada em andamento para outro ramal?",
    options: [
      "Pressione a tecla Flash + número do ramal desejado e coloque o fone no gancho.",
      "Pressione * + 86 + número do ramal e mantenha o telefone fora do gancho.",
      "Desligue o telefone imediatamente e ligue novamente para o ramal de destino.",
      "Pressione # + 5 + 0000 e aguarde o sinal de confirmação sonora."
    ],
    answer: "Pressione a tecla Flash + número do ramal desejado e coloque o fone no gancho."
  },
  {
    question: "O que é a função Pêndulo?",
    options: [
      "Facilidade que permite trocar a chamada corrente por outra que está em espera na fila.",
      "O balanço de carga automático entre os 8 canais da placa Tronco GSM.",
      "A oscilação de voltagem da fonte de alimentação em horários de pico.",
      "A alternância de sincronismo do relógio entre servidores NTP principal e secundário."
    ],
    answer: "Facilidade que permite trocar a chamada corrente por outra que está em espera na fila."
  },
  {
    question: "Como usar o comando da função Pêndulo no aparelho?",
    options: [
      "Pressione Flash + 5 + *.",
      "Pressione Flash + 7.",
      "Pressione # + 3 + *.",
      "Pressione * + 51 + 1 + *."
    ],
    answer: "Pressione Flash + 5 + *."
  },
  {
    question: "O que é a troca de turno de operação no sistema Impacta?",
    options: [
      "Alternar o modo de atendimento da central entre modo diurno e modo noturno.",
      "Substituir o operador logado no software Mesa Virtual sem reiniciar a central.",
      "A transição de gravação do cartão SD principal para o cartão secundário.",
      "A mudança automática de alimentação da fonte elétrica 220V para a bateria do no break."
    ],
    answer: "Alternar o modo de atendimento da central entre modo diurno e modo noturno."
  },
  {
    question: "Como trocar manualmente o turno de operação pelo telefone?",
    options: [
      "Pressione # + 3 + senha geral + * + número do turno + * (onde 1 = diurno e 2 = noturno).",
      "Pressione Flash + 3 + 1234 + *.",
      "Pressione * + 13 + 99 + *.",
      "Pressione * + 51 + senha + 0 + *."
    ],
    answer: "Pressione # + 3 + senha geral + * + número do turno + * (onde 1 = diurno e 2 = noturno)."
  },
  {
    question: "Qual é a senha geral padrão de fábrica da central Impacta 300?",
    options: [
      "1234.",
      "0000.",
      "88888888.",
      "admin."
    ],
    answer: "1234."
  },
  {
    question: "Na sequência de comandos da central Impacta, qual o papel das senhas numéricas de programação?",
    options: [
      "Autenticar o usuário ou administrador para permitir alterações de parâmetros e permissões de ramais.",
      "Aumentar a velocidade do processamento de áudio nos canais VoIP.",
      "Substituir o endereço IP físico da placa de rede LAN.",
      "Sincronizar a velocidade dos coolers de refrigeração da placa CPU."
    ],
    answer: "Autenticar o usuário ou administrador para permitir alterações de parâmetros e permissões de ramais."
  },
  {
    question: "O que é o estacionamento de chamada?",
    options: [
      "Colocar uma chamada atendida em espera em uma posição do sistema para ser capturada depois por outro ramal.",
      "Desligar temporariamente o ramal para evitar receber novas ligações.",
      "Armazenar o número de telefone de um cliente na agenda da Mesa Virtual.",
      "Fixar o terminal IP na mesa de trabalho utilizando o suporte metálico."
    ],
    answer: "Colocar uma chamada atendida em espera em uma posição do sistema para ser capturada depois por outro ramal."
  },
  {
    question: "Como estacionar uma chamada no PABX?",
    options: [
      "Pressione Flash + 7.",
      "Pressione Flash + 5 + *.",
      "Pressione # + 5 + *.",
      "Pressione * + 87 + *."
    ],
    answer: "Pressione Flash + 7."
  },
  {
    question: "O que é a captura de chamada?",
    options: [
      "Atender chamadas que estão tocando em outros ramais que não foram atendidas ou estão chamando.",
      "Gravar o áudio da conversa de um ramal sem que o usuário perceba.",
      "Identificar o número de telefone do chamador no visor de BINA do TIP 200.",
      "Bloquear um número indesejado para que não consiga mais ligar para a empresa."
    ],
    answer: "Atender chamadas que estão tocando em outros ramais que não foram atendidas ou estão chamando."
  },
  {
    question: "Como capturar uma chamada de um ramal específico?",
    options: [
      "Pressione # + 5 + número do ramal + *.",
      "Pressione Flash + 5 + *.",
      "Pressione * + 51 + senha + 1 + *.",
      "Pressione # + 3 + senha + * + 1 + *."
    ],
    answer: "Pressione # + 5 + número do ramal + *."
  },
  // 2.9 MANUTENÇÃO / RESET TOTAL / QUESTÕES MANUSCRITAS (PÁG 9)
  {
    question: "Quais comandos fornecem informações audíveis de teste na Impacta 300?",
    options: [
      "*87 para BINA audível; *86 para configuração do ramal; 60993 para IP WAN; 60992 para máscara WAN; 60991 para IP LAN; 60990 para máscara LAN.",
      "Apenas o comando #99 para ouvir a voltagem da fonte e temperatura do cooler.",
      "O comando *00 para ouvir o histórico de ligações gravadas no cartão SD.",
      "Os comandos 10.0.0.2 e 5060 digitados diretamente no monofone analógico."
    ],
    answer: "*87 para BINA audível; *86 para configuração do ramal; 60993 para IP WAN; 60992 para máscara WAN; 60991 para IP LAN; 60990 para máscara LAN."
  },
  {
    question: "Como realizar o reset das programações (reset total) para retornar à condição de fábrica?",
    options: [
      "Pressione * + 13 + senha geral (1234) + * + código do reset (99) + *.",
      "Pressione Flash + 7 + 99 + * com a central desconectada da tomada.",
      "Pressione # + 5 + 1234 + * durante a inicialização dos LEDs da placa GSM.",
      "Desligue o no break por 10 segundos e remova a placa Backplane do gabinete."
    ],
    answer: "Pressione * + 13 + senha geral (1234) + * + código do reset (99) + *."
  },
  {
    question: "Qual é a senha geral de fábrica utilizada no comando de reset da central?",
    options: [
      "1234.",
      "9999.",
      "5454.",
      "00000000."
    ],
    answer: "1234."
  },
  {
    question: "Qual é o código numérico que representa o reset total na central Impacta?",
    options: [
      "Código 99.",
      "Código 13.",
      "Código 51.",
      "Código 87."
    ],
    answer: "Código 99."
  },
  {
    question: "O que faz exatamente o reset total executado na central?",
    options: [
      "Apaga todas as programações personalizadas e retorna a central à condição original padrão de fábrica.",
      "Formata apenas o cartão de memória SD na placa CPU mantendo os ramais.",
      "Reinicia os dois coolers e alterna a voltagem da fonte de 110V para 220V.",
      "Desconecta todas as chamadas VoIP ativas no provedor sem alterar configurações."
    ],
    answer: "Apaga todas as programações personalizadas e retorna a central à condição original padrão de fábrica."
  },
  {
    question: "Qual a sintaxe exata do comando para executar o reset total da central?",
    options: [
      "*13 + senha geral (1234) + * + 99 + *.",
      "#3 + 1234 + * + 1 + *.",
      "*51 + 1234 + * + 0 + 9 + *.",
      "Flash + 5 + * + 99 + *."
    ],
    answer: "*13 + senha geral (1234) + * + 99 + *."
  },
  {
    question: "Qual deve ser a condição de instalação do gabinete da Central Impacta 300 em relação ao espaço livre e interferências?",
    options: [
      "Deve ser instalada em local com 40 cm de espaço livre ao redor, longe de cabos de energia elétrica, televisores ou equipamentos de rádio frequência.",
      "Pode ser encostada diretamente em paredes úmidas ou dentro de armários fechados sem ventilação.",
      "Deve ser fixada obrigatoriamente no teto ao lado de transformadores de alta tensão.",
      "Instala-se dentro do rack de servidores encostada nas fontes de alimentação ininterrupta."
    ],
    answer: "Deve ser instalada em local com 40 cm de espaço livre ao redor, longe de cabos de energia elétrica, televisores ou equipamentos de rádio frequência."
  },
  {
    question: "Quem é responsável pelo aterramento de proteção dos ramais na central Impacta?",
    options: [
      "Os parafusos de fixação do equipamento e conectores de aterramento.",
      "Apenas o pino central do cabo de rede Ethernet de 4 fios.",
      "A antena da placa Tronco GSM.",
      "O cartão de memória SDHC instalado na CPU."
    ],
    answer: "Os parafusos de fixação do equipamento e conectores de aterramento."
  },
  {
    question: "Cada placa Tronco analógico da central Impacta tem a possibilidade de receber quantas linhas telefônicas?",
    options: [
      "8 linhas telefônicas por placa.",
      "2 linhas telefônicas por placa.",
      "16 linhas telefônicas por placa.",
      "30 linhas telefônicas por placa."
    ],
    answer: "8 linhas telefônicas por placa."
  },
  {
    question: "O que é um Sistema Gerenciador de Banco de Dados (SGBD) no contexto de tarifação como o Controller?",
    options: [
      "É um sistema composto de um ou mais programas que controla e fornece o acesso às informações que são armazenadas em um banco de dados.",
      "Uma placa física de circuito impresso que substitui o processador da central.",
      "Um cabo de rede especial com conector CHAMP de 25 pares para dados.",
      "O conjunto de alto-falantes e microfones do terminal TIP 300."
    ],
    answer: "É um sistema composto de um ou mais programas que controla e fornece o acesso às informações que são armazenadas em um banco de dados."
  },
  {
    question: "Como se define um Banco de Dados (base de dados) utilizado pelo bilhetador (arquivo .FDB)?",
    options: [
      "Conjunto de informações organizadas em uma determinada estrutura e agrupadas para uma finalidade específica.",
      "Um chip de memória temporária RAM que perde os dados ao desligar o PABX.",
      "O manual impresso de instruções operacionais entregue pela operadora telefônica.",
      "O sinal elétrico de voz transformado em ondas de rádio frequência no satélite."
    ],
    answer: "Conjunto de informações organizadas em uma determinada estrutura e agrupadas para uma finalidade específica."
  },
  {
    question: "Onde no Programador Web é possível configurar os parâmetros gerais do provedor de serviço de telefonia VoIP da Placa ICIP 30 canais?",
    options: [
      "No Menu VoIP, especificamente no Submenu Proxy.",
      "No Submenu NTP de hora e data do sistema.",
      "No Menu Interfaces da placa Backplane.",
      "No comando de telefone *51 para bloqueio de cadeado."
    ],
    answer: "No Menu VoIP, especificamente no Submenu Proxy."
  },
  {
    question: "Qual submenu permite configurar a conexão entre a central Impacta e o provedor VoIP?",
    options: [
      "Submenu Proxy.",
      "Submenu Numeração.",
      "Submenu CODECs.",
      "Submenu BINA audível."
    ],
    answer: "Submenu Proxy."
  },
  {
    question: "Qual é o valor padrão de fábrica da porta de comunicação do servidor VoIP (SIP)?",
    options: [
      "Porta 5060.",
      "Porta 80.",
      "Porta 7001.",
      "Porta 10000."
    ],
    answer: "Porta 5060."
  }
];
