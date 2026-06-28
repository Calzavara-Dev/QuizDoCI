import type { Question } from "../types/question";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getShuffledQuestions(quizId = "telefonia"): Question[] {
  const q = (quizzes as Record<string, Question[]>)[quizId] ?? quizzes[Object.keys(quizzes)[0]];
  function inferTopicFromText(text: string): string | undefined {
    const t = text.toLowerCase();
    if (t.includes("ttl") || t.includes("74") || t.includes("54")) return "Tópico: 1.4 - Família TTL";
    if (t.includes("cmos") || t.includes("4000") || t.includes("vdd")) return "Tópico: 1.5 - Família CMOS";
    if (t.includes("fan-out") || t.includes("fan out") || t.includes("fanout")) return "Tópico: 1.1 - Conceitos e parâmetros (Fan-Out)";
    if (t.includes("vih") || t.includes("vil") || t.includes("nível alto") || t.includes("nível baixo")) return "Tópico: 1.4 - Níveis de entrada/saída (VIH/VIL)";
    if (t.includes("dtmf") || t.includes("dual tone")) return "Tópico: DTMF";
    if (t.includes("voip") || t.includes("codec") || t.includes("jitter") || t.includes("latência")) return "Tópico: VoIP / CODECs";
    if (t.includes("matriz") || t.includes("produtos canônicos")) return "Tópico: Geração de produtos canônicos / Matrizes";
    if (t.includes("mux") || t.includes("multiplexador") || t.includes("demultiplex")) return "Tópico: Multiplex / Mux";
    if (t.includes("porta") || t.includes("nand") || t.includes("nor") || t.includes("and") || t.includes("or")) return "Tópico: Portas Lógicas";
    if (t.includes("temperatura") || t.includes("graus")) return "Tópico: Faixas de temperatura / Séries";
    return undefined;
  }

  return q
    .map((item) => ({
      ...item,
      options: shuffleArray(item.options),
      topic: item.topic ?? inferTopicFromText(item.question),
    }))
    .sort(() => Math.random() - 0.5);
}

export const quizzes: Record<string, Question[]> = {
  telefonia: [
  {
    question: "Qual é a finalidade da telefonia?",
    options: [
      "A transmissão da voz humana transformada em energia elétrica que, após amplificada e conduzida por diversos meios, é novamente transformada em energia sonora no destino.",
      "A transmissão de dados digitais através de cabos de fibra ótica.",
      "A comunicação via ondas de rádio entre antenas.",
      "O armazenamento de mensagens de voz em servidores digitais."
    ],
    answer: "A transmissão da voz humana transformada em energia elétrica que, após amplificada e conduzida por diversos meios, é novamente transformada em energia sonora no destino."
  },
{
    question: "Quem construiu um aparelho rudimentar de telegrafia nos EUA em 1835?",
    options: [
      "Alexander Graham Bell.",
      "Samuel F.B. Morse.",
      "Thomas Edison.",
      "Guglielmo Marconi."
    ],
    answer: "Samuel F.B. Morse."
  },
  {
    question: "Qual o marco inicial prático da telefonia?",
    options: [
      "As experiências do físico Phillip Reisz, baseadas em descrições de Charles Bourseul.",
      "A invenção do telefone por Alexander Graham Bell.",
      "A criação do telégrafo por Samuel Morse.",
      "O desenvolvimento do primeiro celular."
    ],
    answer: "As experiências do físico Phillip Reisz, baseadas em descrições de Charles Bourseul."
  },
  {
    question: "Quem é considerado o inventor do telefone?",
    options: [
      "Samuel F.B. Morse.",
      "Thomas Edison.",
      "Alexander Graham Bell, que obteve a patente em 1875.",
      "Phillip Reisz."
    ],
    answer: "Alexander Graham Bell, que obteve a patente em 1875."
  },
  {
    question: "Quais os principais meios de transmissão na telefonia?",
    options: [
      "Apenas cabos de cobre.",
      "Fios, ondas de rádio, cabos de fibra ótica e satélites.",
      "Somente ondas de rádio.",
      "Exclusivamente satélites."
    ],
    answer: "Fios, ondas de rádio, cabos de fibra ótica e satélites."
  },
  {
    question: "O que é o som do ponto de vista físico?",
    options: [
      "É uma onda eletromagnética.",
      "É a variação de pressão e a criação de uma onda que se propaga através de um meio natural.",
      "É uma vibração elétrica.",
      "É um sinal digital."
    ],
    answer: "É a variação de pressão e a criação de uma onda que se propaga através de um meio natural."
  },
  {
    question: "O que é inteligibilidade?",
    options: [
      "É a capacidade de ouvir sons baixos.",
      "É o percentual de palavras perfeitamente reconhecidas em uma conversação.",
      "É a qualidade do sinal de voz.",
      "É a velocidade de transmissão da voz."
    ],
    answer: "É o percentual de palavras perfeitamente reconhecidas em uma conversação."
  },
  {
    question: "O que é timbre em acústica?",
    options: [
      "É a altura do som.",
      "É a intensidade do som.",
      "É a característica que permite distinguir sons de mesma altura e intensidade produzidos por diferentes fontes.",
      "É a frequência do som."
    ],
    answer: "É a característica que permite distinguir sons de mesma altura e intensidade produzidos por diferentes fontes."
  },
  {
    question: "Qual o parâmetro que determina a potência de uma voz (Amplitude)?",
    options: [
      "É a frequência da voz.",
      "É a altura do som.",
      "É a função da potência com que o som é produzido; de acordo com ela, o som é classificado como fraco ou forte.",
      "É o timbre da voz."
    ],
    answer: "É a função da potência com que o som é produzido; de acordo com ela, o som é classificado como fraco ou forte."
  },
  {
    question: "Qual a faixa de frequência padrão para transmissão de palavras?",
    options: [
      "De 20 a 20.000 Hz.",
      "De 300 a 3.400 Hz.",
      "De 0 a 1000 Hz.",
      "De 100 a 10.000 Hz."
    ],
    answer: "De 300 a 3.400 Hz."
  },
  {
    question: "Como são classificados os sinais quanto à descrição matemática?",
    options: [
      "Como analógicos ou digitais.",
      "Como determinísticos (equação conhecida) ou aleatórios (médias estatísticas).",
      "Como contínuos ou discretos.",
      "Como periódicos ou aperiódicos."
    ],
    answer: "Como determinísticos (equação conhecida) ou aleatórios (médias estatísticas)."
  },
  {
    question: "Qual a velocidade do som na água?",
    options: [
      "Cerca de 340 metros por segundo.",
      "Cerca de 1.500 metros por segundo.",
      "Cerca de 3.000 metros por segundo.",
      "Cerca de 500 metros por segundo."
    ],
    answer: "Cerca de 1.500 metros por segundo."
  },
  {
    question: "Qual a função da cápsula receptora?",
    options: [
      "Converter ondas sonoras em sinais elétricos.",
      "Converter a tensão alternada que chega em ondas sonoras.",
      "Amplificar o sinal de voz.",
      "Filtra ruídos da linha."
    ],
    answer: "Converter a tensão alternada que chega em ondas sonoras."
  },
  {
    question: "O que é DTMF?",
    options: [
      "Um tipo de modulação de voz.",
      "Sigla para Dual Tone MultiFrequential, tons de duas frequências usados na discagem moderna.",
      "Um protocolo de comunicação digital.",
      "Um tipo de cabo telefônico."
    ],
    answer: "Sigla para Dual Tone MultiFrequential, tons de duas frequências usados na discagem moderna."
  },
  {
    question: "Quais as frequências usadas no DTMF?",
    options: [
      "Apenas uma frequência de 1000 Hz.",
      "Uma combinação de frequências \"baixas\" (697 a 941 Hz) e \"altas\" (1209 a 1477 Hz).",
      "Frequências de 300 a 3400 Hz.",
      "Frequências de 20 a 20000 Hz."
    ],
    answer: "Uma combinação de frequências \"baixas\" (697 a 941 Hz) e \"altas\" (1209 a 1477 Hz)."
  },
  {
    question: "Como telefones antigos transmitiam números?",
    options: [
      "Através de sinais digitais.",
      "Através do disco decádico, informando a central via impulsos de corrente contínua.",
      "Através de tons DTMF.",
      "Através de sinais de rádio."
    ],
    answer: "Através do disco decádico, informando a central via impulsos de corrente contínua."
  },
  {
    question: "Qual a faixa de frequência transmissível da cápsula receptora?",
    options: [
      "Até aproximadamente 20.000 Hz.",
      "Até aproximadamente 3.500 Hz.",
      "Até aproximadamente 8.000 Hz.",
      "Até aproximadamente 1.000 Hz."
    ],
    answer: "Até aproximadamente 3.500 Hz."
  },
  {
    question: "Como vibrações mecânicas são convertidas nos microfones?",
    options: [
      "Através de processamento digital.",
      "No de carvão, as ondas sonoras pressionam grânulos de carvão, variando a resistência elétrica e a corrente. No piezoelétrico, a deformação de um cristal gera força eletromotriz.",
      "Através de indução eletromagnética apenas.",
      "Através de capacitância variável."
    ],
    answer: "No de carvão, as ondas sonoras pressionam grânulos de carvão, variando a resistência elétrica e a corrente. No piezoelétrico, a deformação de um cristal gera força eletromotriz."
  },
  {
    question: "O que é a tecnologia Power over Ethernet (PoE)?",
    options: [
      "Uma tecnologia de transmissão de voz.",
      "Transporte de alimentação de dispositivos através do próprio cabo de rede.",
      "Um protocolo de segurança.",
      "Um tipo de conector telefônico."
    ],
    answer: "Transporte de alimentação de dispositivos através do próprio cabo de rede."
  },
  {
    question: "Qual foi a contribuição de Michel I. Pupin?",
    options: [
      "A invenção do telefone.",
      "Sugeriu o uso de bobinas toroidais para viabilizar linhas de longa distância sem interferências próximas.",
      "O desenvolvimento do DTMF.",
      "A criação do primeiro satélite de comunicação."
    ],
    answer: "Sugeriu o uso de bobinas toroidais para viabilizar linhas de longa distância sem interferências próximas."
  },
  {
    question: "Qual a diferença entre canal e circuito?",
    options: [
      "São a mesma coisa.",
      "O canal é para transmissão unidirecional (de A para B); o circuito é o conjunto de canais de ida e retorno.",
      "O circuito é unidirecional e o canal é bidirecional.",
      "O canal é analógico e o circuito é digital."
    ],
    answer: "O canal é para transmissão unidirecional (de A para B); o circuito é o conjunto de canais de ida e retorno."
  },
  {
    question: "O que é uma ROTA?",
    options: [
      "Um tipo de cabo telefônico.",
      "O conjunto de troncos urbanos que interligam as centrais entre si.",
      "Um protocolo de comunicação.",
      "Uma central telefônica."
    ],
    answer: "O conjunto de troncos urbanos que interligam as centrais entre si."
  },
  {
    question: "Quais os estágios de uma central?",
    options: [
      "Entrada, processamento e saída.",
      "Concentração, Comutação (ou Enlace) e Expansão.",
      "Transmissão, recepção e roteamento.",
      "Codificação, modulação e transmissão."
    ],
    answer: "Concentração, Comutação (ou Enlace) e Expansão."
  },
  {
    question: "Diferença entre central analógica e digital (CPA)?",
    options: [
      "Não há diferença significativa.",
      "Analógicas usam dispositivos mecânicos/eletromecânicos (relés); digitais usam circuitos integrados e computadores para gerir processos.",
      "Analógicas são mais modernas.",
      "Digitais usam apenas relés."
    ],
    answer: "Analógicas usam dispositivos mecânicos/eletromecânicos (relés); digitais usam circuitos integrados e computadores para gerir processos."
  },
  {
    question: "O que é uma central TANDEM?",
    options: [
      "Uma central de assinantes.",
      "Central destinada a interligar centrais locais em grandes centros urbanos.",
      "Uma central de longa distância.",
      "Uma central móvel."
    ],
    answer: "Central destinada a interligar centrais locais em grandes centros urbanos."
  },
  {
    question: "Defina as categorias de ramais:",
    options: [
      "Público e privado.",
      "Privilegiado (acesso automático à rede pública), Semi-Restrito (acesso via mesa operadora) e Restrito (apenas ligações internas).",
      "Analógico e digital."
    ],
    answer: "Privilegiado (acesso automático à rede pública), Semi-Restrito (acesso via mesa operadora) e Restrito (apenas ligações internas)."
  },
  {
    question: "Qual é a função da central?",
    options: [
      "Transmitir voz.",
      "Estabelecer o caminho da chamada, receber o número e avisar o destinatário.",
      "Codificar sinais digitais.",
      "Amplificar o sinal de voz."
    ],
    answer: "Estabelecer o caminho da chamada, receber o número e avisar o destinatário."
  },
  {
    question: "O que é o Tom de Discar?",
    options: [
      "Sinal de ocupado.",
      "Sinal que indica que a central está pronta para receber os números teclados.",
      "Sinal de erro.",
      "Sinal de chamada."
    ],
    answer: "Sinal que indica que a central está pronta para receber os números teclados."
  },
  {
    question: "O que indica o Tom de Ocupado?",
    options: [
      "Que a central está funcionando.",
      "Que o chamado está ocupado, o número é inacessível, há congestionamento ou erro de discagem.",
      "Que a linha está livre.",
      "Que a chamada foi completada."
    ],
    answer: "Que o chamado está ocupado, o número é inacessível, há congestionamento ou erro de discagem."
  },
  {
    question: "O que são Sinais para Frente e para Trás?",
    options: [
      "Sinais de ida e volta.",
      "Sinais gerados pelo originador da chamada (frente) ou pelo lado do chamado (trás).",
      "Sinais de entrada e saída.",
      "Sinais analógicos e digitais."
    ],
    answer: "Sinais gerados pelo originador da chamada (frente) ou pelo lado do chamado (trás)."
  },
  {
    question: "Qual o objetivo da telefonia IP?",
    options: [
      "Substituir totalmente a telefonia tradicional.",
      "Prover alternativa aos sistemas tradicionais integrando voz, dados e vídeo em redes de pacotes.",
      "Reduzir custos de infraestrutura.",
      "Aumentar a velocidade de transmissão."
    ],
    answer: "Prover alternativa aos sistemas tradicionais integrando voz, dados e vídeo em redes de pacotes."
  },
  {
    question: "O que é um CODEC?",
    options: [
      "Um tipo de cabo.",
      "Dispositivo que converte sinal analógico de voz em digital (compressão) e vice-versa.",
      "Um protocolo de comunicação.",
      "Uma central telefônica."
    ],
    answer: "Dispositivo que converte sinal analógico de voz em digital (compressão) e vice-versa."
  },
  {
    question: "Quais os parâmetros de QoS em VoIP?",
    options: [
      "Velocidade, largura de banda e latência.",
      "Jitter (variação de tempo), Perda de Pacotes e Latência (atraso).",
      "Frequência, amplitude e fase.",
      "Tensão, corrente e potência."
    ],
    answer: "Jitter (variação de tempo), Perda de Pacotes e Latência (atraso)."
  },
  {
    question: "O que é um PBX híbrido?",
    options: [
      "Um PBX apenas digital.",
      "Aquele que integra tecnologias TDM (analógica/digital) e IP (VoIP).",
      "Um PBX apenas analógico.",
      "Um PBX móvel."
    ],
    answer: "Aquele que integra tecnologias TDM (analógica/digital) e IP (VoIP)."
  },
  {
    question: "Em qual slot deve ser instalada a placa E1 ou 2E1?",
    options: [
      "No slot 1.",
      "No slot 11, ao lado da CPU.",
      "No slot 5.",
      "Em qualquer slot."
    ],
    answer: "No slot 11, ao lado da CPU."
  },
  {
    question: "Qual o comando para reset total (voltar ao padrão de fábrica)?",
    options: [
      "* + 1234 + *.",
      "* + 13 + 1234 (senha padrão) + * + 99 + *.",
      "* + 99 + *.",
      "* + 13 + *."
    ],
    answer: "* + 13 + 1234 (senha padrão) + * + 99 + *."
  },
  {
    question: "Qual o comando para ouvir toda a configuração do ramal?",
    options: [
      "Comando 99.",
      "Comando 86.",
      "Comando 13.",
      "Comando 00."
    ],
    answer: "Comando 86."
  },
  {
    question: "Quantos ramais IP o terminal TIP 200 e TIP 300 suportam?",
    options: [
      "TIP 200 (até 5 contas SIP) e TIP 300 (até 10 contas SIP).",
      "TIP 200 (até 2 contas SIP) e TIP 300 (até 3 contas SIP).",
      "TIP 200 (até 1 conta SIP) e TIP 300 (até 2 contas SIP).",
      "Ambos suportam apenas 1 conta SIP."
    ],
    answer: "TIP 200 (até 2 contas SIP) e TIP 300 (até 3 contas SIP)."
  },
  {
    question: "O que acontece ao programar um desvio (Siga-me)?",
    options: [
      "O ramal continua recebendo chamadas normalmente.",
      "O ramal fica com tom de discar interno com advertência e não recebe chamadas até ser desprogramado.",
      "O ramal é bloqueado permanentemente.",
      "O desvio é ativado automaticamente."
    ],
    answer: "O ramal fica com tom de discar interno com advertência e não recebe chamadas até ser desprogramado."
  },
  {
    question: "Qual a potência máxima dissipada pela Impacta 300R?",
    options: [
      "100W.",
      "210W.",
      "500W.",
      "150W."
    ],
    answer: "210W."
  },
  {
    question: "Qual a capacidade de ramais IP da central?",
    options: [
      "Até 50 ramais IP.",
      "Até 120 ramais IP.",
      "Até 200 ramais IP.",
      "Até 500 ramais IP."
    ],
    answer: "Até 120 ramais IP."
  },
  {
    question: "Qual meio propaga o som com menos perdas: o ar ou os sólidos?",
    options: [
      "Os sólidos, devido à sua maior densidade.",
      "O ar, por ser mais leve e permitir propagação mais rápida.",
      "Ambos propagam o som com perdas idênticas.",
      "O vácuo, por não oferecer resistência à onda sonora."
    ],
    answer: "Os sólidos, devido à sua maior densidade."
  },
  {
    question: "O que é o \"Período\" de uma onda sonora?",
    options: [
      "É o intervalo de tempo no qual uma onda se reproduz.",
      "É a distância percorrida pela onda em um segundo.",
      "É a amplitude máxima da onda sonora.",
      "É o número de ciclos por segundo da onda."
    ],
    answer: "É o intervalo de tempo no qual uma onda se reproduz."
  },
  {
    question: "Qual a fórmula matemática do comprimento de onda (λ)?",
    options: [
      "λ = v/f, onde v é a velocidade de propagação e f a frequência.",
      "λ = f/v, onde f é a frequência e v a velocidade.",
      "λ = v × f, onde v é a velocidade e f a frequência.",
      "λ = 1/(v × f), onde v é a velocidade e f a frequência."
    ],
    answer: "λ = v/f, onde v é a velocidade de propagação e f a frequência."
  },
  {
    question: "Diferencie uma forma de onda simples de uma complexa.",
    options: [
      "A simples possui uma única frequência; a complexa é composta por duas ou mais frequências, sendo a mais baixa a fundamental.",
      "A simples é analógica; a complexa é sempre digital.",
      "A simples possui amplitude constante; a complexa varia aleatoriamente.",
      "A simples é periódica; a complexa nunca se repete."
    ],
    answer: "A simples possui uma única frequência; a complexa é composta por duas ou mais frequências, sendo a mais baixa a fundamental."
  },
  {
    question: "Quais os dois tipos de sons que formam a voz humana?",
    options: [
      "Sons \"sonoros\" (vibrantes das cordas vocais) e sons \"surdos\" (passagem forçada do ar pela região buconasal).",
      "Sons agudos e sons graves produzidos exclusivamente pelas cordas vocais.",
      "Sons analógicos e sons digitais gerados pelo aparelho fonador.",
      "Sons internos (traqueia) e sons externos (lábios e língua)."
    ],
    answer: "Sons \"sonoros\" (vibrantes das cordas vocais) e sons \"surdos\" (passagem forçada do ar pela região buconasal)."
  },
  {
    question: "Qual o limite de frequência do mecanismo de produção da voz humana e qual o limite adotado pelos sistemas telefônicos?",
    options: [
      "O mecanismo humano chega a 10 kHz, mas os sistemas telefônicos limitam o sinal a 3,4 kHz.",
      "O mecanismo humano chega a 20 kHz, mas os sistemas telefônicos limitam o sinal a 8 kHz.",
      "O mecanismo humano chega a 3,4 kHz, mas os sistemas telefônicos limitam o sinal a 10 kHz.",
      "O mecanismo humano chega a 4 kHz, mas os sistemas telefônicos limitam o sinal a 20 kHz."
    ],
    answer: "O mecanismo humano chega a 10 kHz, mas os sistemas telefônicos limitam o sinal a 3,4 kHz."
  },
  {
    question: "Qual a frequência fundamental média das cordas vocais para o homem e para a mulher?",
    options: [
      "Aproximadamente 125 Hz para o homem e 250 Hz para a mulher.",
      "Aproximadamente 250 Hz para o homem e 125 Hz para a mulher.",
      "Aproximadamente 500 Hz para o homem e 1000 Hz para a mulher.",
      "Aproximadamente 80 Hz para o homem e 160 Hz para a mulher."
    ],
    answer: "Aproximadamente 125 Hz para o homem e 250 Hz para a mulher."
  },
  {
    question: "Em qual frequência o ouvido humano apresenta sua maior sensibilidade?",
    options: [
      "Em 3.000 Hz.",
      "Em 125 Hz.",
      "Em 10.000 Hz.",
      "Em 20.000 Hz."
    ],
    answer: "Em 3.000 Hz."
  },
  {
    question: "Como é medido o nível sonoro (NS) de um locutor?",
    options: [
      "Geralmente em função da intensidade da voz a um metro da boca do mesmo.",
      "Em função da frequência fundamental das cordas vocais.",
      "Pela distância máxima em que a voz ainda é inteligível.",
      "Pelo volume máximo registrado no microfone do aparelho telefônico."
    ],
    answer: "Geralmente em função da intensidade da voz a um metro da boca do mesmo."
  },
  {
    question: "Quais as tensões e correntes típicas de funcionamento de um telefone no gancho?",
    options: [
      "Tensão contínua de –48 V e corrente de 20 a 80 mA.",
      "Tensão contínua de +12 V e corrente de 5 a 10 mA.",
      "Tensão alternada de 110 V e corrente de 100 a 200 mA.",
      "Tensão contínua de –24 V e corrente de 1 a 5 mA."
    ],
    answer: "Tensão contínua de –48 V e corrente de 20 a 80 mA."
  },
  {
    question: "Qual a função básica do microfone (cápsula transmissora)?",
    options: [
      "Produzir variações de corrente mediante a incidência de ondas sonoras.",
      "Converter tensão alternada em ondas sonoras audíveis.",
      "Amplificar o sinal de voz recebido da central telefônica.",
      "Gerar impulsos de discagem para a central."
    ],
    answer: "Produzir variações de corrente mediante a incidência de ondas sonoras."
  },
  {
    question: "Como funciona a cápsula receptora?",
    options: [
      "Utiliza bobinas sobre um ímã permanente para fazer vibrar uma membrana de aço, convertendo tensão alternada em ondas sonoras.",
      "Utiliza um cristal piezoelétrico que gera corrente elétrica a partir da vibração sonora.",
      "Utiliza grânulos de carvão cujas variações de resistência modulam a corrente de voz.",
      "Utiliza um diafragma capacitivo que armazena energia sonora em um capacitor."
    ],
    answer: "Utiliza bobinas sobre um ímã permanente para fazer vibrar uma membrana de aço, convertendo tensão alternada em ondas sonoras."
  },
  {
    question: "O que caracteriza uma campainha polarizada?",
    options: [
      "O uso de um ímã permanente para criar equilíbrio magnético, permitindo que a corrente alternada de chamada gere o movimento oscilatório do badalo.",
      "A utilização de duas bobinas opostas que cancelam o campo magnético em repouso.",
      "A alimentação exclusiva por bateria local do aparelho telefônico.",
      "A geração de tons DTMF para sinalizar chamadas recebidas."
    ],
    answer: "O uso de um ímã permanente para criar equilíbrio magnético, permitindo que a corrente alternada de chamada gere o movimento oscilatório do badalo."
  },
  {
    question: "Quais as frequências utilizadas na tecla \"5\" do teclado DTMF?",
    options: [
      "A soma de uma senoide de 1336 Hz (coluna) com uma de 770 Hz (linha).",
      "A soma de uma senoide de 1477 Hz (coluna) com uma de 697 Hz (linha).",
      "A soma de uma senoide de 1209 Hz (coluna) com uma de 852 Hz (linha).",
      "A soma de uma senoide de 941 Hz (coluna) com uma de 770 Hz (linha)."
    ],
    answer: "A soma de uma senoide de 1336 Hz (coluna) com uma de 770 Hz (linha)."
  },
  {
    question: "Como funciona o microfone piezoelétrico?",
    options: [
      "Gera força eletromotriz a partir da deformação de um cristal quando sujeito a esforço mecânico (pressão).",
      "Varia a resistência elétrica de grânulos de carvão comprimidos por ondas sonoras.",
      "Induz corrente alternada em bobinas móveis dentro de um campo magnético fixo.",
      "Altera a capacitância entre duas placas metálicas separadas por ar."
    ],
    answer: "Gera força eletromotriz a partir da deformação de um cristal quando sujeito a esforço mecânico (pressão)."
  },
  {
    question: "Qual a diferença entre telefone de bateria local e bateria central?",
    options: [
      "O de bateria local possui fonte própria para o transmissor; o de bateria central é alimentado pelo sistema de energia da central telefônica.",
      "O de bateria local é alimentado pela central; o de bateria central possui bateria interna recarregável.",
      "O de bateria local funciona apenas em linhas digitais; o de bateria central em linhas analógicas.",
      "Não há diferença funcional; são apenas nomenclaturas comerciais distintas."
    ],
    answer: "O de bateria local possui fonte própria para o transmissor; o de bateria central é alimentado pelo sistema de energia da central telefônica."
  },
  {
    question: "Por que vias interurbanas utilizam circuitos a quatro fios?",
    options: [
      "Porque utilizam amplificadores que são unidirecionais, exigindo a individualização dos canais de ida e retorno.",
      "Porque o sinal de voz precisa ser transmitido em frequências mais altas que 20 kHz.",
      "Porque a sinalização SS#7 exige exclusivamente quatro pares de fios.",
      "Porque reduz o custo de instalação em relação ao circuito a dois fios."
    ],
    answer: "Porque utilizam amplificadores que são unidirecionais, exigindo a individualização dos canais de ida e retorno."
  },
  {
    question: "Qual a função do dispositivo \"Híbrida\"?",
    options: [
      "Realizar a conversão de montagens a 4 fios para 2 fios e vice-versa.",
      "Amplificar sinais de voz em linhas de longa distância.",
      "Codificar sinais analógicos em formato PCM digital.",
      "Gerar tons de sinalização acústica para o assinante."
    ],
    answer: "Realizar a conversão de montagens a 4 fios para 2 fios e vice-versa."
  },
  {
    question: "A partir de qual tempo de retardo o eco se torna perceptível em uma linha?",
    options: [
      "Acima de 65 ms.",
      "Acima de 10 ms.",
      "Acima de 150 ms.",
      "Acima de 500 ms."
    ],
    answer: "Acima de 65 ms."
  },
  {
    question: "O que significa a sigla DDR?",
    options: [
      "Discagem Direta ao Ramal.",
      "Discagem Digital Remota.",
      "Distribuição Direta de Rede.",
      "Dupla Detecção de Ring."
    ],
    answer: "Discagem Direta ao Ramal."
  },
  {
    question: "Qual a finalidade da sinalização acústica?",
    options: [
      "Indicar aos assinantes o estado de operação dos sistemas telefônicos sob forma sonora.",
      "Transmitir o sinal de voz codificado entre centrais telefônicas.",
      "Estabelecer o caminho físico da chamada na matriz de comutação.",
      "Comprimir o sinal de voz para transmissão em troncos digitais."
    ],
    answer: "Indicar aos assinantes o estado de operação dos sistemas telefônicos sob forma sonora."
  },
  {
    question: "O que caracteriza a sinalização MFC (Multifrequencial Compelida)?",
    options: [
      "Cada sinal enviado obriga (compele) o registrador de destino a emitir um sinal de volta, caso contrário a ligação é interrompida.",
      "Utiliza um único tom de frequência fixa para todas as operações de sinalização.",
      "Transmite sinalização exclusivamente por impulsos de corrente contínua no disco decádico.",
      "Compartilha o canal de voz com os sinais de controle da chamada."
    ],
    answer: "Cada sinal enviado obriga (compele) o registrador de destino a emitir um sinal de volta, caso contrário a ligação é interrompida."
  },
  {
    question: "Qual a vantagem da sinalização por Canal Comum (SS#7)?",
    options: [
      "Permite tratar milhares de chamadas em um único canal de dados independente dos canais de voz.",
      "Elimina a necessidade de troncos digitais entre centrais.",
      "Transmite sinalização e voz no mesmo time slot do quadro PCM.",
      "Reduz a latência de todas as chamadas a menos de 10 ms."
    ],
    answer: "Permite tratar milhares de chamadas em um único canal de dados independente dos canais de voz."
  },
  {
    question: "Qual canal do tronco digital geralmente transporta a sinalização SS#7 no Brasil?",
    options: [
      "O canal 16.",
      "O canal 1.",
      "O canal 32.",
      "O canal 0."
    ],
    answer: "O canal 16."
  },
  {
    question: "O que define uma Central CPA-T?",
    options: [
      "Uma central controlada por programa armazenado onde a matriz de comutação possui estágios temporais.",
      "Uma central analógica com comutação exclusivamente espacial por relés eletromecânicos.",
      "Uma central móvel utilizada em estações base de telefonia celular.",
      "Uma central de entroncamento para ligações internacionais exclusivamente."
    ],
    answer: "Uma central controlada por programa armazenado onde a matriz de comutação possui estágios temporais."
  },
  {
    question: "Defina Interface Z e Interface A.",
    options: [
      "Interface Z é analógica a 2 fios para assinantes; Interface A é digital a 4 fios para conexão entre centrais a 2048 kbps.",
      "Interface Z é digital a 4 fios para troncos; Interface A é analógica a 2 fios para assinantes.",
      "Interface Z conecta ramais IP; Interface A conecta linhas analógicas externas.",
      "Interface Z opera a 64 kbps; Interface A opera a 2048 kbps para assinantes residenciais."
    ],
    answer: "Interface Z é analógica a 2 fios para assinantes; Interface A é digital a 4 fios para conexão entre centrais a 2048 kbps."
  },
  {
    question: "Como as palavras de código são armazenadas no comutador temporal?",
    options: [
      "De forma cíclica nas posições da memória de conversação (ex: time slot 1 no endereço 1).",
      "De forma aleatória conforme a disponibilidade de memória RAM.",
      "Exclusivamente no endereço zero para todas as chamadas ativas.",
      "Em disco rígido externo para posterior recuperação em caso de falha."
    ],
    answer: "De forma cíclica nas posições da memória de conversação (ex: time slot 1 no endereço 1)."
  },
  {
    question: "Cite três exemplos de Circuitos de Serviço em centrais digitais.",
    options: [
      "Gerador de Tom, Gravador de Mensagens e Circuitos de Conferência.",
      "Amplificador de linha, Híbrida e Disco decádico.",
      "Microfone, Campainha e Teclado DTMF.",
      "CODEC G.711, SIP e PBX IP."
    ],
    answer: "Gerador de Tom, Gravador de Mensagens e Circuitos de Conferência."
  },
  {
    question: "Qual a vantagem da estabilidade na geração de tom digital?",
    options: [
      "O uso de memória ROM garante estabilidade em frequência sem necessidade de casamento de impedância.",
      "A geração analógica por osciladores LC oferece maior precisão de frequência.",
      "O casamento de impedância elimina a necessidade de memória digital.",
      "A modulação FM garante tom estável independentemente da temperatura ambiente."
    ],
    answer: "O uso de memória ROM garante estabilidade em frequência sem necessidade de casamento de impedância."
  },
  {
    question: "Qual o critério de Harry Nyquist para a digitalização?",
    options: [
      "A frequência de amostragem deve ser maior ou igual ao dobro da frequência mais alta presente no sinal.",
      "A frequência de amostragem deve ser igual à frequência fundamental do sinal.",
      "A frequência de amostragem deve ser metade da frequência mais baixa do sinal.",
      "A frequência de amostragem deve ser 8 vezes a frequência mais alta presente no sinal."
    ],
    answer: "A frequência de amostragem deve ser maior ou igual ao dobro da frequência mais alta presente no sinal."
  },
  {
    question: "Por que a voz digitalizada padrão resulta em 64 Kbps?",
    options: [
      "Porque utiliza 8.000 amostragens por segundo codificadas em 8 bits cada (8000 × 8).",
      "Porque utiliza 4.000 amostragens por segundo codificadas em 16 bits cada.",
      "Porque utiliza 64.000 amostragens por segundo codificadas em 1 bit cada.",
      "Porque utiliza 8.000 amostragens por segundo codificadas em 4 bits cada."
    ],
    answer: "Porque utiliza 8.000 amostragens por segundo codificadas em 8 bits cada (8000 × 8)."
  },
  {
    question: "O que são os CODECs G.711 e G.729A?",
    options: [
      "G.711 opera a 64 kbit/s com qualidade padrão; G.729A opera a 8 kbit/s com baixo atraso (35 ms) para economia de banda.",
      "G.711 opera a 8 kbit/s com baixa qualidade; G.729A opera a 64 kbit/s com alta qualidade.",
      "G.711 é um protocolo de sinalização; G.729A é um protocolo de transporte de pacotes.",
      "G.711 comprime voz em 32 kbit/s; G.729A comprime voz em 128 kbit/s."
    ],
    answer: "G.711 opera a 64 kbit/s com qualidade padrão; G.729A opera a 8 kbit/s com baixo atraso (35 ms) para economia de banda."
  },
  {
    question: "Defina Jitter e Latência em VoIP.",
    options: [
      "Jitter é a variação de tempo no envio dos pacotes; Latência é o atraso total na entrega da mensagem (não deve exceder 150 ms).",
      "Jitter é a perda total de pacotes na rede; Latência é a velocidade de transmissão do CODEC.",
      "Jitter é o atraso fixo de 150 ms; Latência é a variação de frequência do sinal de voz.",
      "Jitter e Latência são sinônimos que descrevem a qualidade do CODEC G.711."
    ],
    answer: "Jitter é a variação de tempo no envio dos pacotes; Latência é o atraso total na entrega da mensagem (não deve exceder 150 ms)."
  },
  {
    question: "O que é o protocolo SIP?",
    options: [
      "Session Initiation Protocol, protocolo para sinalização de sessões multimídia (estabelecer, modificar e terminar sessões).",
      "Simple Internet Protocol, protocolo para transporte de pacotes de voz codificados em G.729A.",
      "Signal Integration Protocol, protocolo para comutação temporal em centrais digitais.",
      "Secure IP Protocol, protocolo exclusivo para criptografia de chamadas VoIP."
    ],
    answer: "Session Initiation Protocol, protocolo para sinalização de sessões multimídia (estabelecer, modificar e terminar sessões)."
  },
  {
    question: "Qual a largura de banda aproximada necessária para o CODEC G.711 na rede interna considerando cabeçalhos?",
    options: [
      "Cerca de 85 Kbps.",
      "Cerca de 64 Kbps exatos, sem overhead adicional.",
      "Cerca de 8 Kbps.",
      "Cerca de 2048 Kbps."
    ],
    answer: "Cerca de 85 Kbps."
  }
  ]
};

// Optional human-friendly titles for quizzes. Keys must match the quizzes object keys.
export const quizTitles: Record<string, string> = {
  telefonia: "Telefonia",
  /* voip title removed */
  "eletronica-digital-2": "Eletrônica Digital 2",
  "exercicios-moodle-et-d2": "Exercicios Moodle ET.D2",
  "manutencao-dos-sistemas-telefonicos-2": "Manutenção dos Sistemas Telefônicos 2",
};

// Quiz de Eletrônica Digital II
quizzes["eletronica-digital-2"] = [
  // Questões de múltipla escolha
  {
    question: "Os circuitos integrados TTL, de uso geral, são dimensionados para operar na faixa de temperatura de:",
    options: ["-55°C a +125°C","-55°C a +85°C","-40°C a +85°C","-40°C a +80°C","0°C a +70°C"],
    answer: "-55°C a +125°C"
  },
  {
    question: "A vantagem do CI TTL padrão sobre o CI MOS, padrão, é o(a):",
    options: ["FAN-OUT","dissipação de potência","imunidade ao ruído","larga faixa de alimentação de tensão","tempo de atraso de propagação"],
    answer: "FAN-OUT"
  },
  {
    question: "O tipo de lógica e a porta apresentada pelo circuito da Fig.100 são, respectivamente:",
    options: ["positiva e OR","positiva e NAND","negativa e AND","positiva e AND","negativa e NOR"],
    answer: "positiva e OR"
  },
  {
    question: "Os níveis lógicos de entrada e saída em um circuito digital são representados por tensões referentes à sua fonte de alimentação; o valor máximo de um nível alto em circuitos TTL é de quantos Volts?",
    options: ["0,8","1,2","2,0","5,0","5,8"],
    answer: "5,0"
  },
  {
    question: "De acordo com o circuito da Figura 105, para que a saída (S) tenha nível lógico 0, as suas entradas A, B e G deverão estar, respectivamente, nos seguintes níveis lógicos:",
    options: ["0,1 e 1","1,1 e 1","1,1 e 0","0,0 e 1","0,0 e 0"],
    answer: "1, 1 e 0"
  },
  {
    question: "Além dos blocos comuns (STANDARD), a família TTL possui outras versões de circuitos lógicos. A que fornece a maior velocidade é:",
    options: ["ADVANCED","SCHOTTKY","ADVANCED SCHOTTKY","FAST","LOW POWER SCHOTTKY"],
    answer: "ADVANCED SCHOTTKY"
  },
  {
    question: "Nas séries comuns, os circuitos integrados CMOS são dimensionados para operar na faixa de temperatura de:",
    options: ["-40°C a +85°C","-40°C a +80°C","-40°C a +150°C","-150°C a +300°C","-30°C a +85°C"],
    answer: "-40°C a +85°C"
  },
  {
    question: "A desvantagem do CI CMOS padrão, com relação ao CI TTL padrão, é o(a):",
    options: ["FAN-OUT","dissipação de potência","imunidade ao ruído","larga faixa de alimentação de tensão","tempo de atraso de propagação"],
    answer: "tempo de atraso de propagação"
  },
  {
    question: "Ao analisarmos o funcionamento do circuito da Figura 109, concluímos que ele se comporta como uma porta do tipo:",
    options: ["NOR","AND","OR","NAND","OU Exclusivo"],
    answer: "NOR"
  },
  {
    question: "A menor tensão de entrada para que um circuito TTL STANDARD, reconheça como nível ALTO, é de quantos V?",
    options: ["0,4","0,8","2,0","2,4","3,5"],
    answer: "2,4"
  },
  {
    question: "A maior tensão de entrada, para que um circuito TTL STANDARD reconheça como nível BAIXO, é de:",
    options: ["0,4 V","3,5 V","2,0 V","2,4 V","0,8 V"],
    answer: "0,8 V"
  },
  {
    question: "Quantas portas estão contidas nos integrados da escala SSI?",
    options: ["13 a 99 portas","Até 12 portas","Até 1000 portas","100 a 1000 portas","1000 a 99.999 portas"],
    answer: "Até 12 portas"
  },
  {
    question: "O funcionamento do circuito da Fig. 102, em lógica positiva, é de uma porta:",
    options: ["NOR","OR","NAND","AND","OU Exclusivo"],
    answer: "NAND"
  },
  {
    question: "O circuito lógico básico da família TTL é composto por portas:",
    options: ["NAND","AND","NOT","OR","NOR"],
    answer: "NAND"
  },
  {
    question: "Um CI digital, contendo 150 portas, é classificado como:",
    options: ["SSI","MSI","LSI","ULSI","GSI"],
    answer: "MSI"
  },
  {
    question: "A família lógica pertencente a série 4000 e 4000B é:",
    options: ["MOS","TTL","CMOS","DTL","HTL"],
    answer: "CMOS"
  },
  {
    question: "Apesar de executarem a mesma função lógica, as séries 54 e 74 TTL apresentam uma característica diferente; assinale-a.",
    options: ["Imunidade a ruído","Alimentação","Número de pinos","Temperatura de operação","Velocidade"],
    answer: "Temperatura de operação"
  },
  {
    question: "As séries 54 operam na faixa de temperatura de quantos graus?",
    options: ["0°C a +85°C","0°C a +75°C","-55°C a +70°C","-55°C a +85°C","-55°C a +125°C"],
    answer: "-55°C a +125°C"
  },
  {
    question: "O CI SN 54/74S00 é um TTL da subfamília:",
    options: ["STANDARD","FAST","SCHOTTKY","LOW POWER SCHOTTKY","ADVANCED SCHOTTKY"],
    answer: "SCHOTTKY"
  },
  {
    question: "A tensão de alimentação do CI SN 7400 é de:",
    options: ["15,0 V ±5%","12,0 V ± 5%","5,0 V±5%","5,0 V ±20%","3,0 V ± 5%"],
    answer: "5,0 V±5%"
  },
  {
    question: "O CI SN-74S00 utiliza, nos seus circuitos:",
    options: ["transistores de junção e diodos SCHOTTKY","transistores de efeito de campo e diodos SCHOTTKY","MOSFET e transistores de junção","transistores bipolares e diodos retificadores","apenas diodos SCHOTTKY"],
    answer: "transistores de junção e diodos SCHOTTKY"
  },
  {
    question: "Tensão máxima de alimentação que o CI SN 54F00 pode suportar.",
    options: ["3,0 V","5,0 V","5,25 V","5,5 V","15,0 V"],
    answer: "5,5 V"
  },
  {
    question: "Qual o valor máximo de Vdd para os circuitos integrados da série 4000B?",
    options: ["20V","18V","15V","10V","5V"],
    answer: "18V"
  },
  {
    question: "Das TTL, a que apresenta menor consumo de potência é a:",
    options: ["7400","74ALS00","74F00","74LS00","74S00"],
    answer: "74LS00"
  },
  {
    question: "Família que apresenta o maior FAN-OUT.",
    options: ["C-MOS","TTL","ECL","DTL","HTL"],
    answer: "C-MOS"
  },
  {
    question: "Tipo de estrutura interna que nos permite a confecção de blocos lógicos em CIs.",
    options: ["Bloco lógico","Porta lógica","Circuito lógico","Família lógica","Circuito combinacional"],
    answer: "Bloco lógico"
  },
  {
    question: "A capacidade de um bloco lógico alimentar, blocos da mesma família, é chamada:",
    options: ["FAN-OUT","lógica positiva","níveis de tensão","lógica negativa","tempo de atraso"],
    answer: "FAN-OUT"
  },
  {
    question: "Qual o FAN-OUT da família TTL?",
    options: ["Indeterminada","Maior que 10","Igual a 10","Menor que 10","Mínima"],
    answer: "Igual a 10"
  },
  {
    question: "No CI SN 74ALSOON, o significado das letras SN é:",
    options: ["função lógica","faixa de temperatura","prefixo do fabricante","baixo consumo","tipo de encapsulamento"],
    answer: "prefixo do fabricante"
  },
  {
    question: "Série TTL que usa um diodo especial para reduzir o tempo de chaveamento.",
    options: ["74HC","74S","74HCT","74F","74ACT"],
    answer: "74S"
  },
  {
    question: "Corrente que flui para a saída de um bloco lógico, quando essa saída estiver em nível lógico ALTO.",
    options: ["IIH","IIL","IOL","IOS","IOH"],
    answer: "IOH"
  },
  {
    question: "A capacidade que um bloco lógico possui de NÃO receber influências elétricas ou magnéticas, denomina-se:",
    options: ["imunidade ao ruído","margem de ruído","FAN-OUT","tempo de atraso de propagação","requisitos de potência"],
    answer: "imunidade ao ruído"
  },
  {
    question: "O valor de VIH de uma TTL padrão é:",
    options: ["0,4V","0,8V","2,0V","2,4V","2,8V"],
    answer: "2,4V"
  },
  {
    question: "Quando uma saída TTL acionar mais cargas do que o normal, teremos:",
    options: ["redução de IOL","perda do nível lógico","nenhuma alteração","redução de IOH","redução de VOL"],
    answer: "redução de IOH"
  },
  {
    question: "Lógica que combina as melhores características da CMOS e Bipolar.",
    options: ["74AC","74C","74HCT","BICMOS","74ACT"],
    answer: "BICMOS"
  },
  {
    question: "Com VDD = 15V, a margem de ruído para uma CMOS padrão será:",
    options: ["0,4V","2,0V","2,75V","6,75V","7,5V"],
    answer: "6,75V"
  },
  {
    question: "O fator que determina o FAN-OUT de dispositivos CMOS é:",
    options: ["máximo atraso de propagação permitido","capacitância de saída de cada carga","tensão de alimentação","mínimo atraso de propagação permitido","mínima margem de ruído permitida"],
    answer: "capacitância de saída de cada carga"
  },
  {
    question: "Corrente que flui para a entrada de um bloco lógico, quando essa entrada está em nível lógico alto.",
    options: ["IOH","IIL","IIH","IOS","IOL"],
    answer: "IIH"
  },
  {
    question: "O consumo médio de um circuito integrado TTL, onde IccH=6mA e IccL = 12mA, é de:",
    options: ["90 mW","45 W","30 mW","45 mW","90 W"],
    answer: "90 mW"
  },
  {
    question: "A margem de ruído no nível alto para uma TTL, onde VIH = 2V, VIL = 0,8V, VOH = 2,4V e VOL=0,4V, é de:",
    options: ["0,4V","0,8V","2,4V","2,8V","4,4V"],
    answer: "0,4V"
  },
  {
    question: "É eletricamente compatível com TTL.",
    options: ["74AC","74HCT","74LV","74HC","74C"],
    answer: "74HCT"
  },
  {
    question: "Com uma saída TTL padrão em nível lógico 0, o máximo valor de corrente absorvido será de:",
    options: ["0,4 mA","1,6 mA","2,4 mA","16 mA","18 mA"],
    answer: "16 mA"
  },
  {
    question: "Com Vdd = 12V, a margem de ruído para uma CMOS padrão será:",
    options: ["0,4 V","2,0 V","2,75 V","5,4 V","7,5 V"],
    answer: "5,4 V"
  },
  {
    question: "Uma CMOS 4000B é alimentada com valor máximo permitido de Vdd. O máximo valor de VIL será de:",
    options: ["12,6V","7,5V","5,4V","4,5V","0,05V"],
    answer: "4,5V"
  },
  {
    question: "Quando uma TTL aciona uma CMOS, onde Vdd >>Vcc, devemos:",
    options: ["usar um BUFFER coletor aberto como interface","efetuar a ligação diretamente entre os dispositivos","usar um resistor de PULL-UP","usar uma saída TRI-STATE","usar uma interface conversora de níveis de correntes"],
    answer: "usar uma interface conversora de níveis de correntes"
  },
  {
    question: "O número de portas E, necessárias para construir um gerador de produtos canônicos de 5 variáveis, que usa matriz de simples encadeamento, é:",
    options: ["60","256","508","512","1024"],
    answer: "512"
  },
  {
    question: "Valor de VIL de uma TTL padrão é:",
    options: ["menor ou igual a 0,8V","maior ou igual a 0,4V","maior ou igual a 2V","maior ou igual a 2,4V","menor ou igual a 2,4V"],
    answer: "menor ou igual a 0,8V"
  },
  {
    question: "Sua função é receber o sinal de saída do acionador e condicioná-lo de modo a tomá-lo compatível com os requisitos da carga. Estamos nos referindo a:",
    options: ["demultiplex","circuito TTL","circuito de interface","lógica combinacional","multiplex"],
    answer: "circuito de interface"
  },
  {
    question: "Circuito combinacional dedicado, cuja finalidade é selecionar qual das saídas deve receber a informação presente em sua entrada.",
    options: ["Memória","Demultiplex","Gerador de paridade","Multiplex","Gerador de produtos canônicos"],
    answer: "Multiplex"
  },
  {
    question: "No circuito da figura 137, A = 1, B = 0, C=0, D = 1. Com estes níveis lógicos na entrada a porta ativa em nível um é:",
    options: ["P3","P6","P7","P10","P11"],
    answer: "P7"
  },
  {
    question: "No circuito da figura 102, quando A=0 e B = 1, podemos afirmar que D1, D2 e S estarão nas seguintes situações:",
    options: ["D1 conduzindo, D2 cortado e S = 0","D1 cortado, D2 conduzindo e S = 1","D1 conduzindo, D2 cortado e S = 0","D1 cortado, D2 conduzindo e S = 0","D1 conduzindo, D2 cortado e S = 1"],
    answer: "D1 cortado, D2 conduzindo e S = 1"
  },
  {
    question: "De acordo com o circuito da figura 104, quando tivermos S em nível 0, os transistores estarão nas seguintes condições:",
    options: ["T2 e T4 saturados e T3 cortado","T2 e T4 cortados e T3 saturado","T3 e T4 saturados e T2 cortado","T3 e T2 saturados e T4 cortado","T2 e T3 cortados e T4 saturado"],
    answer: "T3 e T4 saturados e T2 cortado"
  },
  {
    question: "O bloco lógico que permite o controle externo da corrente de coletor é o:",
    options: ["totem pole","toletor aberto","TRISTATE","CMOS padrão","PULL UP"],
    answer: "toletor aberto"
  },
  {
    question: "Qual é a estrutura básica de entrada do bloco lógico TTL?",
    options: ["Vários emissores","Porta XOR","Rede resistiva","Bloco injetor","Porta NOR"],
    answer: "Vários emissores"
  },
  {
    question: "Como é chamado o tempo que um bloco lógico leva para passar do estado ALTO para o estado BAIXO ou vice-versa?",
    options: ["Tempo de propagação","Tempo de subida","Tempo de estabilização","Tempo de comutação","Tempo de setup"],
    answer: "Tempo de propagação"
  },
  {
    question: "Quantas portas AND devemos usar para três variáveis de entrada, se quisermos gerar os produtos canônicos com portas AND e INVERSORES?",
    options: ["6","8","4","3","16"],
    answer: "8"
  },
  {
    question: "Qual a configuração de saída do Bloco Lógico da família TTL que permite o controle externo da corrente de coletor?",
    options: ["Open-collector","Totem-pole","Tri-state","Push-pull","Emitter follower"],
    answer: "Open-collector"
  },
  {
    question: "Qual a matriz mais utilizada no processo de geração de produtos canônicos, por apresentar uma rápida resposta, com o menor número de portas AND?",
    options: ["Matriz de Duplo Encadeamento","Matriz de Simples Encadeamento","Matriz de Soma de Produto","Matriz de Karnaugh","Matriz de De Morgan"],
    answer: "Matriz de Duplo Encadeamento"
  },
  {
    question: "Qual o nível lógico interpretado pela entrada de um circuito lógico, se a tensão de entrada estiver entre VIL e VIH?",
    options: ["Indefinido","Alto","Baixo","Tri-state","Superposição"],
    answer: "Indefinido"
  },
  {
    question: "Qual a denominação para o número máximo de portas da mesma família, que podem ser ligadas à saída de uma outra, também da mesma família?",
    options: ["Fan-Out","Margem de ruido","Impedância de saída","Ganho","Fator de carga"],
    answer: "Fan-Out"
  },
  {
    question: "Qual é o estado de entrada de uma TTL em que flui maior corrente?",
    options: ["Nível baixo","Nível alto","Tri-state","Flutuante","Curto-circuito"],
    answer: "Nível baixo"
  },
  {
    question: "Por que usamos o desacoplamento da fonte de alimentação?",
    options: ["Evitar picos de tensão","Melhorar a velocidade","Aumentar a corrente","Reduzir o ruído de sinal digital","Diminuir a impedância"],
    answer: "Evitar picos de tensão"
  },
  {
    question: "Qual é a função das entradas de seleção de um MUX?",
    options: ["Escolher a entrada a ser ligada à saída","Incrementar o endereço","Gerar paridade","Fornecer clock","Multiplicar sinais"],
    answer: "Escolher a entrada a ser ligada à saída"
  },
  {
    question: "O que acontecerá na saída de um bloco lógico, se o FAN-OUT for excedido?",
    options: ["Queda do nível 1 de saída","Aumento da velocidade","Queda do nível 0 de saída","Nenhuma alteração","Aumento do VOH"],
    answer: "Queda do nível 1 de saída"
  },
  {
    question: "Qual é a denominação para a medida quantitativa de ruído?",
    options: ["Margem de ruído","Imunidade ao ruído","Ruído peak-to-peak","Fator de ruído","SNR"],
    answer: "Margem de ruído"
  },
  {
    question: "Como são determinadas as escalas de integração?",
    options: ["Pelo número de portas ou dispositivos no chip","Pelo tipo de encapsulamento","Pela tensão de alimentação","Pela velocidade de comutação","Pela temperatura de operação"],
    answer: "Pelo número de portas ou dispositivos no chip"
  },
  {
    question: "Quais os dispositivos na escala de integração SSI?",
    options: ["Portas e flip-flops","Memórias e CPUs","Conversores ADC","Amplificadores e filtros","Transmissores RF"],
    answer: "Portas e flip-flops"
  },
  {
    question: "Como um circuito TTL responde a uma entrada em flutuação?",
    options: ["Assume nível 1","Assume nível 0","Permanece indefinido","Queima o circuito","Se torna tri-state"],
    answer: "Assume nível 1"
  },
  {
    question: "Em qual estado de saída de uma TTL flui maior quantidade de corrente?",
    options: ["Nível lógico baixo","Nível lógico alto","Tri-state","Flutuante","Curto-circuito"],
    answer: "Nível lógico baixo"
  },
  {
    question: "Qual será o nível lógico na saída de uma porta NAND TTL que possui todas as entradas desconectadas?",
    options: ["0","1","Tri-state","Indefinido","Vdd/2"],
    answer: "0"
  },
  {
    question: "Quais as duas (2) maneiras aceitáveis de lidar com entradas NÃO usadas, em uma porta E?",
    options: ["Ligá-las a VCC por resistor de 1kΩ","Deixá-las desconectadas","Ligá-las ao terra sem resistor","Ligá-las a uma das entradas já em uso","Usar pull-down ativo"],
    answer: "Ligá-las a VCC por resistor de 1kΩ"
  },
  {
    question: "Qual das subfamílias TTL é melhor em altas frequências?",
    options: ["54AS/74AS","74LS","74HC","74HC(T)","74S"],
    answer: "54AS/74AS"
  },
  {
    question: "Qual fator limita o FAN-OUT de dispositivos CMOS?",
    options: ["Frequência de operação","Tensão de alimentação","Temperatura","Número de pinos","Corrente de fuga"],
    answer: "Frequência de operação"
  },
  {
    question: "Qual subfamília combina as melhores características da lógica unipolar e da bipolar?",
    options: ["BICMOS","CMOS","TTL","ECL","DTL"],
    answer: "BICMOS"
  },
  {
    question: "Qual a vantagem de um Cl de alta densidade?",
    options: ["Menor espaço e menor consumo","Maior consumo","Maior temperatura","Maior ruído","Maior tensão"],
    answer: "Menor espaço e menor consumo"
  },
  {
    question: "Qual a série de baixa tensão que é eletricamente compatível com TTL?",
    options: ["74LVT","74HC","74LS","74HCT","74ACT"],
    answer: "74LVT"
  },
  {
    question: "Como uma CMOS, com VDD > 5V, pode interfacear outra TTL?",
    options: ["Usando conversor de níveis","Ligando diretamente","Usando apenas resistores","Usando diodos Schottky","Não é possível"],
    answer: "Usando conversor de níveis"
  },
  {
    question: "Em um circuito de interface, qual a função de um conversor de níveis?",
    options: ["Converter alta tensão para baixa e vice-versa","Amplificar sinais","Filtrar ruídos","Sincronizar clocks","Multiplexar canais"],
    answer: "Converter alta tensão para baixa e vice-versa"
  },
  {
    question: "Quantas variáveis de seleção, no mínimo, são necessárias para o dispositivo, sabendo que um certo multiplexador pode chavear de 1 a 48 canais de dados de entrada para saída?",
    options: ["5","6","4","7","8"],
    answer: "6"
  },
  {
    question: "Quantas entradas possuem as portas AND, utilizadas na confecção do gerador de produtos canônicos, pelo processo de matriz de simples encadeamento?",
    options: ["2","3","4","5","8"],
    answer: "2"
  },
  {
    question: "De que forma podemos calcular o número de portas de uma matriz de simples encadeamento?",
    options: ["N = 2^(n+1) - 4","N = 2^n","N = n^2","N = 2^(n-1)","N = 2^(2n) - 1"],
    answer: "N = 2^(n+1) - 4"
  },
  {
    question: "Qual é o circuito utilizado para enviar um certo número de informações, contidas em vários canais de entrada, à um só canal de saída?",
    options: ["Multiplexador","Demultiplexador","Mux-Demux","Switch","Multiplicador"],
    answer: "Multiplexador"
  },
  {
    question: "Qual é a interface usada para interligar um circuito CMOS a um TTL?",
    options: ["Buffers conversores / séries HC/HCT","Ligação direta","Resistores pull-up","Diodos zener","Transformadores"],
    answer: "Buffers conversores / séries HC/HCT"
  },
  {
    question: "Quais são os limites de tensão de entrada de um circuito CMOS, na faixa de nível lógico baixo?",
    options: ["0 a 30% do VDD","0 a 50% do VDD","30 a 70% do VDD","50 a 100% do VDD","10 a 40% do VDD"],
    answer: "0 a 30% do VDD"
  },
  {
    question: "Quais são as duas (2) vantagens da família CMOS em relação a TTL?",
    options: ["Menor consumo e maior densidade","Maior consumo e maior velocidade","Maior imunidade e maior tensão","Menor velocidade e menor densidade","Maior fan-out e maior consumo"],
    answer: "Menor consumo e maior densidade"
  },
  {
    question: "Quais são os três (3) estados encontrados na configuração de bloco lógico TRI STATE?",
    options: ["Alto, baixo e alta impedância","Alto, baixo e indefinido","Entrada, saída e tri-state","Set, reset e hold","0,1 e X"],
    answer: "Alto, baixo e alta impedância"
  },
  {
    question: "O que devemos fazer com as entradas NÃO usadas de portas NAND, confeccionadas com família TTL?",
    options: ["Ligá-las a VCC por resistor 1kΩ","Deixá-las flutuando","Ligá-las ao terra direto","Usar pull-down ativo","Conectar a uma entrada usada"],
    answer: "Ligá-las a VCC por resistor 1kΩ"
  },
  {
    question: "Para que serve o número 192 da nomenclatura MM74C192N?",
    options: ["Define a função do CI: contador síncrono crescente/decrescente de 4 bits","Define a voltagem de trabalho","Define o encapsulamento","Define o fabricante","Define a série"],
    answer: "Define a função do CI: contador síncrono crescente/decrescente de 4 bits"
  },
  {
    question: "O FAN-OUT está relacionado com as tensões de saída e de entrada dos blocos lógicos. Justifique.",
    options: ["Está relacionado primordialmente com as correntes máximas de saída e de entrada","Está relacionado apenas com tensões","Está relacionado com o número de pinos","Está relacionado com a temperatura","Está relacionado com a impedância de entrada"],
    answer: "Está relacionado primordialmente com as correntes máximas de saída e de entrada"
  },
  {
    question: "De que depende a quantidade de portas dentro de um CI?",
    options: ["Da escala de integração (SSI, MSI, LSI, etc.)","Da voltagem de alimentação","Do tipo de encapsulamento","Da velocidade de comutação","Do fabricante"],
    answer: "Da escala de integração (SSI, MSI, LSI, etc.)"
  },
  {
    question: "Qual o comportamento do MOS canal N, quando a tensão de limiar, VT, for maior do que VGS?",
    options: ["Não conduz","Conduz fortemente","Fica em curto","Opera em saturação","Opera em linear"],
    answer: "Não conduz"
  },
  {
    question: "Qual a faixa de temperatura para as séries 54 e 74 da família TTL?",
    options: ["Série 74: 0°C a +70°C; Série 54: -55°C a +125°C","Série 74: -40°C a +85°C; Série 54: -55°C a +125°C","Série 74: 0°C a +85°C; Série 54: -55°C a +125°C","Série 74: 0°C a +70°C; Série 54: -40°C a +85°C","Série 74: -55°C a +125°C; Série 54: 0°C a +70°C"],
    answer: "Série 74: 0°C a +70°C; Série 54: -55°C a +125°C"
  },
  {
    question: "Quais as maneiras corretas de se ligar entradas NÃO usadas de uma porta NOU?",
    options: ["Ligar a uma das entradas usadas ou ligar ao terra (nível 0)","Deixar flutuando","Ligar a VCC direto","Usar resistor de pull-down e pull-up simultaneamente","Conectar a um capacitor"],
    answer: "Ligar a uma das entradas usadas ou ligar ao terra (nível 0)"
  },
  {
    question: "O que devemos fazer para evitar que pulsos de alta frequência gerados na linha de alimentação prejudiquem o sistema?",
    options: ["Usar capacitores de desacoplamento entre VCC e terra perto de cada CI","Aumentar a tensão de alimentação","Diminuir a frequência de clock","Usar apenas resistores de pull-up","Substituir por CI CMOS"],
    answer: "Usar capacitores de desacoplamento entre VCC e terra perto de cada CI"
  },
  {
    question: "Descreva o funcionamento da porta NAND TTL quando a entrada A está em 0 e B em 1.",
    options: ["Saída será nível lógico alto","Saída será nível lógico baixo","Saída será tri-state","Saída será indefinida","Saída alterna"],
    answer: "Saída será nível lógico alto"
  },
  {
    question: "Descreva em que situação usamos um circuito de Interface.",
    options: ["Quando é necessário interligar dispositivos com características elétricas diferentes","Quando queremos aumentar a largura de banda","Quando precisamos multiplexar vários sinais","Quando queremos reduzir o consumo de potência","Quando precisamos de isolamento galvânico"],
    answer: "Quando é necessário interligar dispositivos com características elétricas diferentes"
  },
  {
    question: "Justifique por que o consumo de potência aumenta com a frequência em circuitos CMOS.",
    options: ["Porque mais comutações por segundo carregam/descarregam capacitâncias de carga","Porque a tensão aumenta com a frequência","Porque o número de portas aumenta","Porque a resistência interna aumenta","Porque o calor dissipa menos"],
    answer: "Porque mais comutações por segundo carregam/descarregam capacitâncias de carga"
  },
  {
    question: "Por que componentes CMOS são mais indicados para ambientes ruidosos que os TTLs?",
    options: ["Porque possuem maior margem de ruído","Porque consomem mais potência","Porque são mais rápidos","Porque operam em tensões mais altas","Porque têm mais pinos"],
    answer: "Porque possuem maior margem de ruído"
  },
  {
    question: "Por que a velocidade de comutação do CMOS aumenta com a tensão de alimentação?",
    options: ["Porque a resistência interna RON diminui com VDD","Porque a tensão aumenta a temperatura","Porque a capacitância aumenta","Porque a corrente diminui","Porque o ganho de transistor cai"],
    answer: "Porque a resistência interna RON diminui com VDD"
  },
  {
    question: "O aumento na densidade gerou redução do consumo? Justifique.",
    options: ["Não: maior densidade aumentou consumo por unidade de área, exigindo redução de tensão","Sim: reduz necessariamente o consumo","Sim: aumenta a eficiência termal","Não: aumenta a impedância","Depende do encapsulamento"],
    answer: "Não: maior densidade aumentou consumo por unidade de área, exigindo redução de tensão"
  },
  {
    question: "Como os fabricantes resolveram problemas de isolamento em CIs de alta densidade?",
    options: ["Reduzindo tensões de alimentação","Aumentando o encapsulamento","Usando materiais isolantes especiais","Separando pinos","Aplicando shield metálico"],
    answer: "Reduzindo tensões de alimentação"
  },
  {
    question: "Cite duas vantagens do aumento na densidade de integração.",
    options: ["Redução do tpd e economia de espaço","Aumento do consumo e aumento do preço","Maior temperatura e menor vida útil","Mais pinos e maior tensão","Maior ruído e menor precisão"],
    answer: "Redução do tpd e economia de espaço"
  },
  {
    question: "Quais as características combinadas na lógica BICMOS?",
    options: ["Baixo consumo da CMOS e alta velocidade da bipolar","Alta tensão e baixo consumo","Maior fan-out e menor VIL","Mais portas e menor custo","Maior temperatura e menor tolerância"],
    answer: "Baixo consumo da CMOS e alta velocidade da bipolar"
  },
  {
    question: "Descreva o funcionamento da porta NOR CMOS (Figura 109) quando as entradas A e B estão em nível 0.",
    options: ["Transistores P conduzem e N cortam resultando em saída 1","Transistores N conduzem e P cortam resultando em saída 0","Ambos conduzem resultando em curto","Nenhum conduz resultando em X","Transistores alternam estado"],
    answer: "Transistores P conduzem e N cortam resultando em saída 1"
  },
  {
    question: "Defina Tempo de Atraso de Propagação.",
    options: ["Intervalo de tempo para um bloco mudar de estado após mudança na entrada","Tempo para estabilizar a alimentação","Tempo de subida do sinal","Tempo de chegada do clock","Tempo de amostragem"],
    answer: "Intervalo de tempo para um bloco mudar de estado após mudança na entrada"
  },
  {
    question: "Descreva o tipo de encapsulamento PLCC.",
    options: ["Pinos em formato J curvados sob o CI","Pinos estilo DIP","Encapsulamento SMD sem pinos","Encapsulamento TO-220","Encapsulamento BGA"],
    answer: "Pinos em formato J curvados sob o CI"
  },
  {
    question: "Descreva o tipo de matriz muito usado na estrutura de memórias.",
    options: ["Matriz de Duplo Encadeamento","Matriz de Simples Encadeamento","Matriz de Karnaugh","Matriz de Soma de Produto","Matriz de De Morgan"],
    answer: "Matriz de Duplo Encadeamento"
  }
];

quizzes["exercicios-moodle-et-d2"] = [
  {
    question: "O que caracteriza a l�gica positiva?",
    options: [
      "O estado l�gico 1 � representado por tens�o negativa.",
      "O estado l�gico 1 � superior ao estado l�gico 0 e � representado por uma tens�o positiva.",
      "O estado l�gico 0 � representado por tens�o positiva e o estado 1 por 0 V.",
      "Os estados l�gicos n�o dependem da tens�o."
    ],
    answer: "O estado l�gico 1 � superior ao estado l�gico 0 e � representado por uma tens�o positiva."
  },
  {
    question: "Qual dos exemplos representa corretamente a l�gica positiva?",
    options: [
      "-5 V = 1 e 0 V = 0.",
      "+5 V = 0 e 0 V = 1.",
      "+5 V = 1 e 0 V = 0.",
      "+12 V = 0 e -12 V = 1."
    ],
    answer: "+5 V = 1 e 0 V = 0."
  },
  {
    question: "O que caracteriza a l�gica negativa?",
    options: [
      "O estado l�gico 1 � superior ao estado l�gico 0.",
      "O estado l�gico 0 � superior ao estado l�gico 1 e o n�vel l�gico 1 � representado por tens�o negativa.",
      "O estado l�gico 1 sempre corresponde a +5 V.",
      "O estado l�gico 0 � representado por tens�o positiva obrigatoriamente."
    ],
    answer: "O estado l�gico 0 � superior ao estado l�gico 1 e o n�vel l�gico 1 � representado por tens�o negativa."
  },
  {
    question: "O que determina as escalas de integra��o dos circuitos integrados?",
    options: [
      "O tipo de encapsulamento.",
      "A tens�o de alimenta��o.",
      "A quantidade de portas ou dispositivos contidos no chip.",
      "O n�mero de pinos."
    ],
    answer: "A quantidade de portas ou dispositivos contidos no chip."
  },
  {
    question: "Segundo a classifica��o GSI, um circuito integrado possui, no m�nimo, quantas portas?",
    options: [
      "10.000 portas.",
      "100.000 portas.",
      "500.000 portas.",
      "1.000.000 de portas."
    ],
    answer: "1.000.000 de portas."
  },
  {
    question: "Qual � a densidade da escala LSI (Large Scale Integration)?",
    options: [
      "10 a 99 portas por chip.",
      "100 a 999 portas por chip.",
      "1.000 a 9.999 portas por chip.",
      "Acima de 1 milh�o de portas."
    ],
    answer: "100 a 999 portas por chip."
  },
  {
    question: "Qual dispositivo � t�pico da escala ULSI?",
    options: [
      "Rel� eletromec�nico.",
      "Microprocessador avan�ado.",
      "Diodo Zener.",
      "Transistor bipolar discreto."
    ],
    answer: "Microprocessador avan�ado."
  },
  {
    question: "Qual � o tipo de configura��o de sa�da da maioria das portas l�gicas TTL?",
    options: [
      "Open Collector.",
      "Tri-State.",
      "Totem-Pole.",
      "Push-Pull CMOS."
    ],
    answer: "Totem-Pole."
  },
  {
    question: "Em uma porta NAND TTL, qual ser� o n�vel l�gico de sa�da quando a entrada estiver em aberto?",
    options: [
      "N�vel l�gico 1.",
      "Alta imped�ncia.",
      "N�vel l�gico 0.",
      "Indeterminado."
    ],
    answer: "N�vel l�gico 0."
  },
  {
    question: "Qual inova��o tecnol�gica foi utilizada na entrada dos circuitos TTL?",
    options: [
      "Transistores Darlington.",
      "MOSFET de canal P.",
      "Transistores bipolares multiemissores.",
      "Amplificadores operacionais."
    ],
    answer: "Transistores bipolares multiemissores."
  },
  {
    question: "A fam�lia TTL � derivada de qual fam�lia l�gica?",
    options: [
      "RTL.",
      "CMOS.",
      "DTL.",
      "ECL."
    ],
    answer: "DTL."
  },
  {
    question: "Qual � a tens�o m�nima de alimenta��o da s�rie TTL 74XXX?",
    options: [
      "4,0 V.",
      "4,5 V.",
      "4,75 V.",
      "5,5 V."
    ],
    answer: "4,75 V."
  },
  {
    question: "Qual � a faixa de alimenta��o da s�rie TTL 54XXX?",
    options: [
      "3,3 V a 5 V.",
      "4,5 V a 5,5 V.",
      "5 V a 6 V.",
      "4,75 V a 5,25 V."
    ],
    answer: "4,5 V a 5,5 V."
  },
  {
    question: "Qual � o fan-out t�pico da fam�lia TTL padr�o?",
    options: [
      "5 blocos.",
      "8 blocos.",
      "10 blocos.",
      "20 blocos."
    ],
    answer: "10 blocos."
  },
  {
    question: "Qual � o tempo m�dio de atraso de propaga��o da TTL padr�o?",
    options: [
      "1 ns.",
      "5 ns.",
      "10 ns.",
      "100 ns."
    ],
    answer: "10 ns."
  },
  {
    question: "Qual � a imunidade ao ru�do da fam�lia TTL?",
    options: [
      "0,2 V.",
      "0,4 V.",
      "1,0 V.",
      "5,0 V."
    ],
    answer: "0,4 V."
  },
  {
    question: "Qual bloco l�gico TTL n�o possui resistor de coletor ligado ao +VCC internamente?",
    options: [
      "Totem-Pole.",
      "Tri-State.",
      "Open Collector.",
      "Buffer."
    ],
    answer: "Open Collector."
  },
  {
    question: "Quem controla externamente a corrente de coletor em uma sa�da Open Collector?",
    options: [
      "Capacitor.",
      "Diodo.",
      "Resistor Pull-up.",
      "Indutor."
    ],
    answer: "Resistor Pull-up."
  },
  {
    question: "Qual a principal vantagem do aumento da corrente de coletor?",
    options: [
      "Reduz a tens�o de alimenta��o.",
      "Aumenta a frequ�ncia de opera��o.",
      "Permite aumentar o fan-out.",
      "Reduz a temperatura do circuito."
    ],
    answer: "Permite aumentar o fan-out."
  },
  {
    question: "Qual tipo de sa�da apresenta um terceiro estado de alta imped�ncia?",
    options: [
      "Totem-Pole.",
      "Open Collector.",
      "Tri-State.",
      "Darlington."
    ],
    answer: "Tri-State."
  },
  {
    question: "Ao selecionar uma fam�lia l�gica, quais caracter�sticas devem ser consideradas?",
    options: [
      "Peso e tamanho.",
      "Velocidade e pot�ncia.",
      "N�mero de pinos e cor.",
      "Temperatura e encapsulamento."
    ],
    answer: "Velocidade e pot�ncia."
  },
  {
    question: "Qual � a vers�o TTL mais r�pida?",
    options: [
      "74LS.",
      "74ALS.",
      "74AS.",
      "74C."
    ],
    answer: "74AS."
  },
  {
    question: "Quais subfam�lias TTL possuem menor consumo de pot�ncia?",
    options: [
      "74S e 74AS.",
      "74LS e 74ALS.",
      "74H e 74AS.",
      "74F e 74S."
    ],
    answer: "74LS e 74ALS."
  },
  {
    question: "Qual � o tipo de sa�da do CI 7406?",
    options: [
      "Totem-Pole.",
      "Tri-State.",
      "Coletor Aberto.",
      "Buffer CMOS."
    ],
    answer: "Coletor Aberto."
  },
  {
    question: "Onde normalmente s�o utilizados os CIs que cont�m buffers?",
    options: [
      "Em reguladores de tens�o.",
      "Em interfaces para aumentar a capacidade de corrente.",
      "Em fontes chaveadas.",
      "Em osciladores."
    ],
    answer: "Em interfaces para aumentar a capacidade de corrente."
  },
  {
    question: "Que tipo de transistor � utilizado na fam�lia CMOS?",
    options: [
      "Bipolar NPN.",
      "Bipolar PNP.",
      "MOS complementares (canal N e canal P).",
      "JFET."
    ],
    answer: "MOS complementares (canal N e canal P)."
  },
  {
    question: "Qual tipo de MOSFET � utilizado nos CIs digitais CMOS?",
    options: [
      "Deple��o.",
      "Enriquecimento (modo de indu��o).",
      "Canal duplo.",
      "MOS de pot�ncia."
    ],
    answer: "Enriquecimento (modo de indu��o)."
  },
  {
    question: "Quais s�o as s�ries comerciais da fam�lia CMOS?",
    options: [
      "74LS, 74ALS e 74AS.",
      "54C/74C, 4000A e 4000B.",
      "74HC e 74HCT apenas.",
      "RTL e DTL."
    ],
    answer: "54C/74C, 4000A e 4000B."
  },
  {
    question: "Qual � a faixa de temperatura t�pica dos CIs CMOS comuns?",
    options: [
      "0�C a 70�C.",
      "-20�C a 80�C.",
      "-40�C a +85�C.",
      "-55�C a +125�C."
    ],
    answer: "-40�C a +85�C."
  },
  {
    question: "Qual � a faixa de alimenta��o da s�rie CMOS 4000B?",
    options: [
      "1 V a 5 V.",
      "3 V a 18 V.",
      "5 V a 12 V.",
      "10 V a 15 V."
    ],
    answer: "3 V a 18 V."
  },
  {
    question: "Em um CI CMOS alimentado com VDD = 10 V, qual � o valor m�nimo aproximado de VOH?",
    options: [
      "5 V.",
      "7 V.",
      "9,95 V.",
      "10,5 V."
    ],
    answer: "9,95 V."
  },
  {
    question: "Qual melhoria foi introduzida na s�rie CMOS 4000B em rela��o � 4000?",
    options: [
      "Mem�ria interna.",
      "Buffer na sa�da.",
      "Alimenta��o dupla.",
      "Oscilador interno."
    ],
    answer: "Buffer na sa�da."
  },
  {
    question: "No c�digo MM74C192N, o n�mero 192 identifica:",
    options: [
      "O fabricante.",
      "A s�rie CMOS.",
      "A fun��o espec�fica do dispositivo.",
      "A tens�o de alimenta��o."
    ],
    answer: "A fun��o espec�fica do dispositivo."
  },
  {
    question: "Quando utilizamos um circuito Multiplexador (MUX)?",
    options: [
      "Quando desejamos dividir um sinal em v�rias sa�das.",
      "Quando precisamos selecionar uma entre v�rias entradas e envi�-la para uma �nica sa�da.",
      "Para amplificar sinais anal�gicos.",
      "Para armazenar dados permanentemente."
    ],
    answer: "Quando precisamos selecionar uma entre v�rias entradas e envi�-la para uma �nica sa�da."
  },
  {
    question: "Qual � a finalidade da entrada de sele��o em um MUX?",
    options: [
      "Alimentar o circuito.",
      "Definir a frequ�ncia de opera��o.",
      "Escolher qual entrada ser� conectada � sa�da.",
      "Aumentar a corrente de sa�da."
    ],
    answer: "Escolher qual entrada ser� conectada � sa�da."
  }
];

quizzes["manutencao-dos-sistemas-telefonicos-2"] = [
  {
    question: "A central Impacta é destinada principalmente a:",
    options: [
      "Empresas que utilizam somente telefonia IP.",
      "Empresas que necessitam atender de 16 a 336 ramais em um único local.",
      "Empresas que possuem apenas linhas analógicas.",
      "Residências com até 16 ramais.",
      "Empresas que utilizam exclusivamente telefonia móvel."
    ],
    answer: "Empresas que necessitam atender de 16 a 336 ramais em um único local."
  },
  {
    question: "A expansão da capacidade da central é realizada por meio de:",
    options: [
      "Atualização do firmware.",
      "Instalação de novos gabinetes.",
      "Inserção de placas de circuito até o limite permitido pelo fabricante.",
      "Troca da fonte de alimentação.",
      "Substituição da placa CPU."
    ],
    answer: "Inserção de placas de circuito até o limite permitido pelo fabricante."
  },
  {
    question: "A quantidade máxima de placas Tronco Analógico, Ramal Analógico e Ramal Digital é, respectivamente:",
    options: [
      "2, 8 e 2.",
      "4, 12 e 3.",
      "3, 10 e 3.",
      "3, 8 e 4.",
      "5, 10 e 5."
    ],
    answer: "3, 10 e 3."
  },
  {
    question: "A central Impacta suporta até:",
    options: [
      "24 terminais inteligentes.",
      "32 terminais inteligentes.",
      "48 terminais inteligentes.",
      "64 terminais inteligentes.",
      "96 terminais inteligentes."
    ],
    answer: "48 terminais inteligentes."
  },
  {
    question: "O sistema pode se comunicar com o meio externo através de interfaces:",
    options: [
      "Apenas digitais.",
      "Apenas analógicas.",
      "Apenas VoIP.",
      "Digitais, analógicas e VoIP.",
      "Digitais e GSM apenas."
    ],
    answer: "Digitais, analógicas e VoIP."
  },
  {
    question: "A placa Backplane é instalada:",
    options: [
      "Na placa CPU.",
      "No rack principal.",
      "No interior do gabinete metálico.",
      "Na fonte de alimentação.",
      "Na parte externa do equipamento."
    ],
    answer: "No interior do gabinete metálico."
  },
  {
    question: "A placa Tronco GSM está disponível nas versões:",
    options: [
      "2 e 4 canais.",
      "4 e 8 canais.",
      "8 e 16 canais.",
      "6 e 12 canais.",
      "12 e 24 canais."
    ],
    answer: "4 e 8 canais."
  },
  {
    question: "O conector SMA fêmea da placa GSM tem a função de:",
    options: [
      "Conectar o cabo Ethernet.",
      "Alimentar a placa.",
      "Conectar a antena para melhorar a recepção do sinal.",
      "Programar a placa.",
      "Interligar a placa CPU."
    ],
    answer: "Conectar a antena para melhorar a recepção do sinal."
  },
  {
    question: "Um LED de canal GSM aceso indica que:",
    options: [
      "O canal está desligado.",
      "O módulo apresenta defeito.",
      "O canal está ocupado em uma chamada.",
      "A placa está inicializando.",
      "O SIM Card foi removido."
    ],
    answer: "O canal está ocupado em uma chamada."
  },
  {
    question: "A chave de hardware ICIP possui:",
    options: [
      "2 posições.",
      "3 posições.",
      "4 posições.",
      "5 posições.",
      "8 posições."
    ],
    answer: "3 posições."
  },
  {
    question: "As placas 1E1 e 2E1 têm como principal finalidade:",
    options: [
      "Expandir ramais IP.",
      "Acrescentar canais GSM.",
      "Conectar a central às companhias telefônicas que utilizam RS Digital ou RDSI.",
      "Aumentar a memória da CPU.",
      "Alimentar telefones digitais."
    ],
    answer: "Conectar a central às companhias telefônicas que utilizam RS Digital ou RDSI."
  },
  {
    question: "O protocolo RS Digital ou RDSI é definido por:",
    options: [
      "Fabricante da central.",
      "Técnico instalador.",
      "Usuário administrador.",
      "Concessionária telefônica.",
      "Software Programador Web."
    ],
    answer: "Concessionária telefônica."
  },
  {
    question: "Uma função típica de um telefone IP é:",
    options: [
      "Atualizar automaticamente o firmware da central.",
      "Controlar a placa CPU.",
      "Disponibilizar agenda, histórico de chamadas, conferências e lista de contatos.",
      "Configurar protocolos E1.",
      "Gerenciar placas GSM."
    ],
    answer: "Disponibilizar agenda, histórico de chamadas, conferências e lista de contatos."
  },
  {
    question: "As teclas DSS são utilizadas para:",
    options: [
      "Reinicializar o telefone.",
      "Linha, discagem rápida, intercom e BLF.",
      "Programar ramais analógicos.",
      "Configurar a placa ICIP.",
      "Apenas realizar conferências."
    ],
    answer: "Linha, discagem rápida, intercom e BLF."
  },
  {
    question: "A tecla Hold é utilizada para:",
    options: [
      "Transferir chamadas.",
      "Encerrar ligações.",
      "Colocar uma chamada em espera.",
      "Reiniciar o terminal.",
      "Acessar o correio de voz."
    ],
    answer: "Colocar uma chamada em espera."
  },
  {
    question: "Utilizando dois módulos MOD 350 em conjunto, a capacidade máxima de programações será de:",
    options: [
      "16.",
      "24.",
      "32.",
      "80.",
      "48."
    ],
    answer: "80"
  },
  {
    question: "A porta PC do telefone IP deve ser conectada:",
    options: [
      "Ao switch principal.",
      "À placa CPU.",
      "À torre (desktop) do computador.",
      "Ao modem da operadora.",
      "À placa ICIP."
    ],
    answer: "À torre (desktop) do computador."
  },
  {
    question: "O módulo MOD 350 pode ser alimentado:",
    options: [
      "Apenas por fonte externa de 12 V.",
      "Apenas pelo switch PoE.",
      "Pelo telefone IP ou por fonte de 5 V ligada ao módulo.",
      "Apenas pela central.",
      "Exclusivamente pela placa ICIP."
    ],
    answer: "Pelo telefone IP ou por fonte de 5 V ligada ao módulo."
  },
  {
    question: "O banco de dados utilizado pela central corresponde:",
    options: [
      "Ao sistema operacional da CPU.",
      "Ao conjunto de informações organizadas em um arquivo \".FDB\".",
      "Ao firmware das placas.",
      "Ao histórico das ligações telefônicas.",
      "Ao cadastro exclusivo de usuários VoIP."
    ],
    answer: "Ao conjunto de informações organizadas em um arquivo \".FDB\"."
  },
  {
    question: "O submenu NTP permite configurar:",
    options: [
      "Os troncos analógicos.",
      "Os ramais SIP.",
      "Os servidores responsáveis por manter data e hora atualizadas.",
      "A placa GSM.",
      "O endereço IP LAN da central."
    ],
    answer: "Os servidores responsáveis por manter data e hora atualizadas."
  },
  {
    question: "No submenu Numeração da placa ICIP, devem ser cadastrados:",
    options: [
      "Apenas os ramais analógicos.",
      "Somente os troncos digitais.",
      "Todos os ramais que irão gerar e receber ligações VoIP.",
      "Apenas os ramais digitais.",
      "Somente os terminais inteligentes."
    ],
    answer: "Todos os ramais que irão gerar e receber ligações VoIP."
  },
  {
    question: "Qual das alternativas apresenta corretamente as portas padrão de comunicação dos softwares da Impacta?",
    options: [
      "Mesa Virtual (51001), Programador Web (7001), Bilhetador (53001), Monitor E1 (52001).",
      "Mesa Virtual (52001), Programador Web (7001), Bilhetador (51001), Monitor E1 (53001).",
      "Mesa Virtual (7001), Programador Web (51001), Bilhetador (52001), Monitor E1 (53001).",
      "Mesa Virtual (53001), Programador Web (52001), Bilhetador (7001), Monitor E1 (51001).",
      "Mesa Virtual (51000), Programador Web (7000), Bilhetador (52000), Monitor E1 (53000)."
    ],
    answer: "Mesa Virtual (51001), Programador Web (7001), Bilhetador (53001), Monitor E1 (52001)."
  },
  {
    question: "A função Requisição de Senha permite:",
    options: [
      "Alterar automaticamente a senha do administrador.",
      "Definir se a central exigirá senha para todas as programações.",
      "Criar uma senha para cada ramal.",
      "Bloquear chamadas internacionais.",
      "Habilitar acesso remoto."
    ],
    answer: "Definir se a central exigirá senha para todas as programações."
  },
  {
    question: "O comando para programar o Hotline em um ramal é:",
    options: [
      "* + 51 + senha + ramal + *",
      "* + 13 + senha + tempo + *",
      "* + 41 + senha + tempo + ramal + *",
      "Flash + 41 + ramal + *",
      "# + 41 + senha + *"
    ],
    answer: "* + 41 + senha + tempo + ramal + *"
  },
  {
    question: "Para realizar uma transferência de chamada utilizando um telefone comum, deve-se:",
    options: [
      "Pressionar Hold e desligar.",
      "Pressionar Flash, discar o número do ramal e colocar o fone no gancho.",
      "Pressionar Conference.",
      "Pressionar Flash + 7.",
      "Pressionar apenas o número do ramal."
    ],
    answer: "Pressionar Flash, discar o número do ramal e colocar o fone no gancho."
  },
  {
    question: "Para capturar uma chamada de um ramal específico utiliza-se:",
    options: [
      "57 + ramal.",
      "Flash + 5.",
      "# + 5 + número do ramal + *",
      "Flash + 7 + ramal.",
      "60993."
    ],
    answer: "# + 5 + número do ramal + *"
  },
  {
    question: "O comando utilizado para ouvir o endereço IP WAN da central é:",
    options: [
      "60991",
      "60992",
      "60993",
      "7001",
      "53001"
    ],
    answer: "60993"
  },
  {
    question: "O aterramento das proteções dos ramais e troncos é realizado através:",
    options: [
      "Da fonte de alimentação.",
      "Do cabo de rede.",
      "Dos parafusos de fixação dos perfis das placas.",
      "Da placa CPU.",
      "Do nobreak."
    ],
    answer: "Dos parafusos de fixação dos perfis das placas."
  },
  {
    question: "O código destinado ao reset da senha de bilhetagem é:",
    options: [
      "96",
      "97",
      "95",
      "99",
      "87"
    ],
    answer: "97"
  },
  {
    question: "O código utilizado para apagar apenas os bilhetes armazenados é:",
    options: [
      "95",
      "96",
      "97",
      "99",
      "87"
    ],
    answer: "96"
  },
  {
    question: "Durante a substituição de uma placa da central, o procedimento correto é:",
    options: [
      "Inserir a placa com a central energizada.",
      "Reiniciar apenas a CPU.",
      "Desligar o PABX, instalar a placa, religar e configurar o slot no software.",
      "Atualizar o firmware antes da instalação.",
      "Remover a CPU antes da troca."
    ],
    answer: "Desligar o PABX, instalar a placa, religar e configurar o slot no software."
  },
  {
    question: "A Impacta 300 é definida como:",
    options: [
      "Um modem para comunicação de dados.",
      "Um roteador corporativo.",
      "Uma solução de integração de redes de voz e dados para pequenas e médias empresas.",
      "Um servidor dedicado para VoIP.",
      "Um switch gerenciável."
    ],
    answer: "Uma solução de integração de redes de voz e dados para pequenas e médias empresas."
  },
  {
    question: "Além das funções tradicionais de uma CPCT, a Impacta 300 também atua como:",
    options: [
      "Firewall.",
      "Gateway entre redes, permitindo chamadas VoIP.",
      "Switch Ethernet.",
      "Servidor DHCP.",
      "Access Point."
    ],
    answer: "Gateway entre redes, permitindo chamadas VoIP."
  },
  {
    question: "Qual das alternativas representa corretamente uma configuração máxima da Impacta 300?",
    options: [
      "60 linhas e 180 ramais.",
      "90 linhas e 336 ramais.",
      "120 linhas e 240 ramais.",
      "30 linhas e 180 ramais.",
      "100 linhas e 300 ramais."
    ],
    answer: "90 linhas e 336 ramais."
  },
  {
    question: "Na configuração máxima de 90 linhas e 336 ramais, a composição correta é:",
    options: [
      "30 linhas IP, 60 linhas digitais, 216 ramais analógicos e 120 ramais IP.",
      "60 linhas IP, 30 linhas digitais, 120 ramais analógicos e 216 ramais IP.",
      "90 linhas digitais e 336 ramais IP.",
      "60 linhas digitais e 276 ramais analógicos.",
      "30 linhas analógicas e 306 ramais digitais."
    ],
    answer: "60 linhas IP, 30 linhas digitais, 120 ramais analógicos e 216 ramais IP."
  },
  {
    question: "A quantidade máxima de ramais (TDM + IP) suportada pela central é:",
    options: [
      "240.",
      "300.",
      "336.",
      "360.",
      "420."
    ],
    answer: "336."
  },
  {
    question: "Qual das placas abaixo possui limite máximo de apenas uma unidade na central?",
    options: [
      "Ramal Analógico.",
      "Tronco Analógico.",
      "CPU.",
      "Ramal Misto.",
      "Tronco/Ramal."
    ],
    answer: "CPU."
  },
  {
    question: "A fonte da Impacta 300 opera:",
    options: [
      "Somente em 110 V.",
      "Somente em 220 V.",
      "Em 110 ou 220 V com seleção automática.",
      "Apenas em 127 V.",
      "Exclusivamente em corrente contínua."
    ],
    answer: "Em 110 ou 220 V com seleção automática."
  },
  {
    question: "A potência mínima recomendada para alimentação da central é:",
    options: [
      "100 W.",
      "150 W.",
      "Superior a 210 W.",
      "300 W obrigatoriamente.",
      "500 W."
    ],
    answer: "Superior a 210 W."
  },
  {
    question: "Para evitar interrupções durante falta de energia elétrica recomenda-se utilizar:",
    options: [
      "Apenas um filtro de linha.",
      "Um estabilizador comum.",
      "Um nobreak (short break).",
      "Uma extensão elétrica.",
      "Um transformador isolador."
    ],
    answer: "Um nobreak (short break)."
  },
  {
    question: "A principal função da placa Backplane é:",
    options: [
      "Gerenciar os ramais IP.",
      "Armazenar os bilhetes das chamadas.",
      "Funcionar como a placa-mãe da central, interligando todas as demais placas.",
      "Alimentar os módulos GSM.",
      "Converter sinais analógicos em digitais."
    ],
    answer: "Funcionar como a placa-mãe da central, interligando todas as demais placas."
  },
  {
    question: "Quantos slots a placa Backplane possui?",
    options: [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    answer: "12"
  },
  {
    question: "A placa CPU deve ser instalada:",
    options: [
      "No último slot da central.",
      "Em qualquer slot disponível.",
      "Na primeira posição do Backplane.",
      "Apenas ao lado da placa E1.",
      "No slot reservado aos módulos VoIP."
    ],
    answer: "Na primeira posição do Backplane."
  },
  {
    question: "O processamento central da Impacta 300 está localizado:",
    options: [
      "Na placa E1.",
      "Na placa CPU.",
      "Na placa Backplane.",
      "Na placa ICIP.",
      "Na placa Tronco Analógico."
    ],
    answer: "Na placa CPU."
  },
  {
    question: "A placa Tronco GSM tem como principal finalidade:",
    options: [
      "Expandir ramais digitais.",
      "Integrar a telefonia móvel à telefonia fixa.",
      "Criar novos ramais SIP.",
      "Alimentar telefones IP.",
      "Gerenciar o banco de dados da central."
    ],
    answer: "Integrar a telefonia móvel à telefonia fixa."
  },
  {
    question: "O limite máximo de canais GSM suportados por uma única central é:",
    options: [
      "4",
      "6",
      "8",
      "12",
      "16"
    ],
    answer: "8"
  },
  {
    question: "Quando o LED de status da placa GSM permanece apagado, significa que:",
    options: [
      "O canal está ocupado.",
      "A placa está inicializada.",
      "A placa ainda não foi inicializada.",
      "O sistema está em manutenção.",
      "Existe excesso de chamadas."
    ],
    answer: "A placa ainda não foi inicializada."
  },
  {
    question: "Um LED piscando rapidamente na placa GSM indica que:",
    options: [
      "O canal está livre.",
      "A placa está inicializando ou ainda não possui identificação válida.",
      "Existe uma chamada em andamento.",
      "A antena foi desconectada.",
      "A placa foi bloqueada."
    ],
    answer: "A placa está inicializando ou ainda não possui identificação válida."
  },
  {
    question: "O LED piscando lentamente indica que:",
    options: [
      "A placa foi desligada.",
      "Existe falha de hardware.",
      "A placa está inicializada e com identificação correta.",
      "O canal está congestionado.",
      "O firmware precisa ser atualizado."
    ],
    answer: "A placa está inicializada e com identificação correta."
  },
  {
    question: "A placa ICIP adiciona à central:",
    options: [
      "30 ramais SIP e 120 troncos SIP.",
      "120 ramais SIP e 30 troncos SIP.",
      "Apenas 120 troncos SIP.",
      "Apenas 30 ramais SIP.",
      "240 ramais analógicos."
    ],
    answer: "120 ramais SIP e 30 troncos SIP."
  },
  {
    question: "Uma das principais vantagens da utilização da placa ICIP é:",
    options: [
      "Aumentar a potência elétrica da central.",
      "Eliminar a necessidade de ramais.",
      "Reduzir os custos das ligações e permitir acesso WEB para configuração.",
      "Substituir completamente a placa CPU.",
      "Eliminação do uso de protocolos SIP."
    ],
    answer: "Reduzir os custos das ligações e permitir acesso WEB para configuração."
  },
  {
    question: "O conjunto ICIP 30 é composto por:",
    options: [
      "CPU, Fonte e Backplane.",
      "Placa Base ICIP 30, Placa CODEC ICIP 30 e Chave de Hardware.",
      "Placa GSM, CPU e CODEC.",
      "Dois módulos CODEC e uma CPU.",
      "Backplane, CODEC e Fonte."
    ],
    answer: "Placa Base ICIP 30, Placa CODEC ICIP 30 e Chave de Hardware."
  },
  {
    question: "Cada placa CODEC habilita:",
    options: [
      "20 canais VoIP e 20 ramais SIP.",
      "30 canais VoIP e 30 ramais SIP.",
      "10 canais VoIP e 40 ramais SIP.",
      "40 canais VoIP e 10 ramais SIP.",
      "60 canais VoIP e 30 ramais SIP."
    ],
    answer: "10 canais VoIP e 40 ramais SIP."
  },
  {
    question: "A placa E1 (1E1 ou 2E1) deve ser instalada:",
    options: [
      "No slot 1.",
      "No slot 5.",
      "No slot 11, ao lado da placa CPU.",
      "No último slot da central.",
      "Em qualquer slot livre."
    ],
    answer: "No slot 11, ao lado da placa CPU."
  },
  {
    question: "A principal diferença entre um telefone IP e um telefone digital convencional é:",
    options: [
      "O telefone IP utiliza apenas comunicação via rádio.",
      "O telefone IP conecta-se através de uma interface Ethernet.",
      "O telefone IP utiliza somente cabos seriais.",
      "Telefones IP não utilizam endereços IP.",
      "Telefones digitais possuem maior capacidade de ramais."
    ],
    answer: "O telefone IP conecta-se através de uma interface Ethernet."
  },
  {
    question: "Um telefone IP normalmente possui:",
    options: [
      "Uma porta USB.",
      "Duas portas Ethernet, sendo uma para a rede e outra para o computador.",
      "Três portas RJ-11.",
      "Apenas uma porta de alimentação.",
      "Quatro portas Ethernet."
    ],
    answer: "Duas portas Ethernet, sendo uma para a rede e outra para o computador."
  },
  {
    question: "O terminal TIP 200 suporta:",
    options: [
      "Até uma conta SIP.",
      "Até duas contas SIP.",
      "Até três contas SIP.",
      "Até quatro contas SIP.",
      "Até oito contas SIP."
    ],
    answer: "Até duas contas SIP."
  },
  {
    question: "O terminal TIP 300 suporta:",
    options: [
      "Uma conta SIP.",
      "Duas contas SIP.",
      "Três contas SIP.",
      "Cinco contas SIP.",
      "Oito contas SIP."
    ],
    answer: "Cinco contas SIP."
  },
  {
    question: "O módulo ATA GKM 2210 T é:",
    options: [
      "Um gateway GSM.",
      "Um adaptador para telefone analógico que suporta duas contas SIP.",
      "Uma placa E1.",
      "Um telefone IP corporativo.",
      "Um módulo de expansão DSS."
    ],
    answer: "Um adaptador para telefone analógico que suporta duas contas SIP."
  },
  {
    question: "Os conectores utilizados nas placas da Impacta são:",
    options: [
      "RJ-45 e USB.",
      "HDMI e RJ-11.",
      "FM Plug 180° e conector CHAMP.",
      "BNC e SC.",
      "VGA e RJ-45."
    ],
    answer: "FM Plug 180° e conector CHAMP."
  },
  {
    question: "O aterramento das proteções dos ramais e troncos é realizado por meio:",
    options: [
      "Da placa CPU.",
      "Do cabo de alimentação.",
      "Dos parafusos de fixação dos perfis das placas.",
      "Do conector CHAMP.",
      "Da placa Backplane."
    ],
    answer: "Dos parafusos de fixação dos perfis das placas."
  },
  {
    question: "A Impacta 300 disponibiliza quais softwares de gerenciamento?",
    options: [
      "Mesa Virtual, Programador Web, Controller e Software de Gravação.",
      "Apenas Controller e Bilhetador.",
      "Apenas Programador Web e Mesa Virtual.",
      "Monitor E1 e ICIP Manager.",
      "Controller, DHCP Manager e Firewall."
    ],
    answer: "Mesa Virtual, Programador Web, Controller e Software de Gravação."
  },
  {
    question: "O software Controller tem como principal finalidade:",
    options: [
      "Configurar ramais digitais.",
      "Gerenciar placas GSM.",
      "Realizar tarifação das chamadas, emitindo relatórios.",
      "Atualizar automaticamente o firmware.",
      "Configurar protocolos SIP."
    ],
    answer: "Realizar tarifação das chamadas, emitindo relatórios."
  },
  {
    question: "A função do Bilhetador é:",
    options: [
      "Gravar ligações telefônicas.",
      "Coletar e armazenar os registros (bilhetes) das chamadas.",
      "Configurar ramais IP.",
      "Gerenciar usuários.",
      "Configurar troncos E1."
    ],
    answer: "Coletar e armazenar os registros (bilhetes) das chamadas."
  },
  {
    question: "O endereço IP LAN padrão de fábrica da central é:",
    options: [
      "192.168.0.1",
      "192.168.1.1",
      "10.0.0.2",
      "172.16.0.1",
      "10.1.1.1"
    ],
    answer: "192.168.1.1"
  },
  {
    question: "A porta padrão utilizada pelo servidor VoIP da central é:",
    options: [
      "80",
      "443",
      "7001",
      "5060",
      "51001"
    ],
    answer: "5060"
  },
  {
    question: "A facilidade Hotline permite:",
    options: [
      "Gravar automaticamente todas as chamadas.",
      "Efetuar uma chamada automática ao retirar o telefone do gancho.",
      "Bloquear chamadas internacionais.",
      "Encaminhar chamadas para outro PABX.",
      "Configurar troncos SIP."
    ],
    answer: "Efetuar uma chamada automática ao retirar o telefone do gancho."
  },
  {
    question: "O comando utilizado para bloquear um ramal (Cadeado) é:",
    options: [
      "* + 41 + senha + *",
      "* + 13 + senha + *",
      "* + 51 + senha + 1 + tipo + *",
      "Flash + 5 + *",
      "# + 5 + ramal + *"
    ],
    answer: "* + 51 + senha + 1 + tipo + *"
  },
  {
    question: "A função Pêndulo permite:",
    options: [
      "Transferir uma ligação.",
      "Alternar entre duas chamadas.",
      "Estacionar chamadas.",
      "Bloquear o ramal.",
      "Gravar conversas."
    ],
    answer: "Alternar entre duas chamadas."
  },
  {
    question: "O comando da função Pêndulo é:",
    options: [
      "Flash + 7",
      "Flash + 5 + *",
      "Flash + 9",
      "57 + *",
      "* + 51"
    ],
    answer: "Flash + 7"
  },
  {
    question: "Para estacionar uma chamada deve-se utilizar:",
    options: [
      "Flash + 7",
      "Flash + 5",
      "Flash + 3",
      "Flash + 8",
      "# + 57"
    ],
    answer: "Flash + 5"
  },
  {
    question: "Para capturar uma chamada estacionada utiliza-se:",
    options: [
      "Flash + 7",
      "57 + número do estacionamento + *",
      "Flash + 5 + *",
      "* + 57",
      "# + 7"
    ],
    answer: "57 + número do estacionamento + *"
  },
  {
    question: "O comando para realizar o Reset Total da central é:",
    options: [
      "* + 95 + *",
      "* + 13 + 1234 + * + 99 + *",
      "Flash + 99",
      "* + 96 + *",
      "60993"
    ],
    answer: "* + 13 + 1234 + * + 99 + *"
  },
  {
    question: "Em caso de falta de energia elétrica, ocorre:",
    options: [
      "Todos os ramais deixam de funcionar.",
      "O primeiro tronco analógico é automaticamente acoplado a determinados ramais, permitindo comunicação.",
      "Apenas os ramais IP permanecem ativos.",
      "Apenas os troncos digitais continuam funcionando.",
      "A CPU entra em modo de emergência."
    ],
    answer: "O primeiro tronco analógico é automaticamente acoplado a determinados ramais, permitindo comunicação."
  },
  {
    question: "O comando 87 fornece:",
    options: [
      "O endereço IP WAN.",
      "Informações de BINA e número do ramal.",
      "A configuração da placa ICIP.",
      "A versão do firmware.",
      "A senha de programação."
    ],
    answer: "Informações de BINA e número do ramal."
  },
  {
    question: "O comando 86 é utilizado para ouvir:",
    options: [
      "O endereço IP LAN.",
      "A configuração do ramal.",
      "A configuração da placa GSM.",
      "Os bilhetes armazenados.",
      "O estado da CPU."
    ],
    answer: "O estado da CPU."
  },
  {
    question: "O comando 60991 informa:",
    options: [
      "O endereço IP WAN.",
      "O endereço IP LAN.",
      "O número do ramal.",
      "O gateway padrão.",
      "A máscara de rede."
    ],
    answer: "O endereço IP WAN."
  },
  {
    question: "Durante o checklist de instalação de uma central IP, um dos aspectos mais importantes é:",
    options: [
      "O modelo do telefone utilizado.",
      "A infraestrutura de cabeamento.",
      "A cor do gabinete.",
      "A quantidade de teclas DSS.",
      "O tamanho do rack."
    ],
    answer: "A infraestrutura de cabeamento."
  },
  {
    question: "O principal objetivo de uma central PBX-IP é:",
    options: [
      "Substituir completamente a rede Ethernet.",
      "Permitir a comunicação entre telefones IP e analógicos.",
      "Eliminar a necessidade de ramais.",
      "Trabalhar apenas com telefonia móvel.",
      "Funcionar exclusivamente com troncos digitais."
    ],
    answer: "Permitir a comunicação entre telefones IP e analógicos."
  },
  {
    question: "A utilização da placa ICIP proporciona, entre outras vantagens:",
    options: [
      "Apenas aumento da potência elétrica.",
      "Redução de custos, unificação da numeração e configuração via WEB.",
      "Exclusivamente aumento da capacidade de ramais analógicos.",
      "Eliminação da necessidade de placas CODEC.",
      "Substituição da placa CPU."
    ],
    answer: "Redução de custos, unificação da numeração e configuração via WEB."
  },
  {
    question: "A central Impacta 300R é indicada para empresas que necessitam:",
    options: [
      "Atender até 94 ramais exclusivamente analógicos.",
      "Atender de 16 a 336 ramais, permitindo integração entre telefonia analógica, digital e VoIP.",
      "Operar somente com ramais IP.",
      "Utilizar apenas troncos digitais E1.",
      "Operar exclusivamente como gateway VoIP."
    ],
    answer: "Atender de 16 a 336 ramais, permitindo integração entre telefonia analógica, digital e VoIP."
  },
  {
    question: "A expansão da capacidade da central Impacta 300R é realizada por meio da:",
    options: [
      "Atualização do firmware.",
      "Substituição da placa CPU.",
      "Instalação de placas nos slots disponíveis, respeitando a capacidade máxima do equipamento.",
      "Alteração do banco de dados.",
      "Troca da fonte de alimentação."
    ],
    answer: "Instalação de placas nos slots disponíveis, respeitando a capacidade máxima do equipamento."
  },
  {
    question: "Segundo o manual da Impacta 300R, a quantidade máxima de placas suportadas é:",
    options: [
      "3 placas Tronco Analógico, 10 placas Ramal Analógico e 3 placas Ramal Digital.",
      "4 placas Tronco Analógico, 8 placas Ramal Analógico e 4 placas Ramal Digital.",
      "2 placas Tronco Analógico, 10 placas Ramal Analógico e 2 placas Ramal Digital.",
      "3 placas Tronco Analógico, 8 placas Ramal Analógico e 3 placas Ramal Digital.",
      "4 placas Tronco Analógico, 10 placas Ramal Analógico e 2 placas Ramal Digital."
    ],
    answer: "3 placas Tronco Analógico, 10 placas Ramal Analógico e 3 placas Ramal Digital."
  },
  {
    question: "De acordo com o manual, a quantidade máxima de Terminais Inteligentes (TI NKT 4245) suportada pela Impacta 300R é:",
    options: [
      "32",
      "40",
      "48",
      "64",
      "96"
    ],
    answer: "48"
  },
  {
    question: "A central Impacta permite comunicação com a rede pública utilizando:",
    options: [
      "Apenas troncos analógicos.",
      "Apenas troncos digitais.",
      "Apenas VoIP.",
      "Troncos analógicos, digitais (E1) e VoIP.",
      "Somente interfaces GSM."
    ],
    answer: "Troncos analógicos, digitais (E1) e VoIP."
  },
  {
    question: "A placa Backplane da Impacta 300R tem como principal função:",
    options: [
      "Gerenciar os ramais IP.",
      "Armazenar os bilhetes das chamadas.",
      "Interligar eletricamente todas as placas da central, funcionando como a placa principal do sistema.",
      "Alimentar os telefones digitais.",
      "Controlar o protocolo SIP."
    ],
    answer: "Interligar eletricamente todas as placas da central, funcionando como a placa principal do sistema."
  },
  {
    question: "Segundo o manual da Impacta 300R, a placa Tronco GSM está disponível nas versões:",
    options: [
      "2 ou 4 canais.",
      "4 ou 8 canais.",
      "8 ou 16 canais.",
      "6 ou 12 canais.",
      "12 ou 24 canais."
    ],
    answer: "4 ou 8 canais."
  },
  {
    question: "O conector SMA fêmea presente na placa Tronco GSM é utilizado para:",
    options: [
      "Alimentar a placa.",
      "Conectar o cabo Ethernet.",
      "Conectar a antena GSM.",
      "Programar a placa.",
      "Ligar o cabo serial."
    ],
    answer: "Conectar a antena GSM."
  },
  {
    question: "Na placa Tronco GSM, os LEDs de indicação têm como principal finalidade:",
    options: [
      "Mostrar a tensão da fonte.",
      "Indicar o estado de funcionamento e utilização dos canais GSM.",
      "Indicar apenas falhas na CPU.",
      "Mostrar o endereço IP da placa.",
      "Indicar o consumo de energia."
    ],
    answer: "Indicar o estado de funcionamento e utilização dos canais GSM."
  },
  {
    question: "A chave de hardware utilizada na placa ICIP é responsável por:",
    options: [
      "Alimentar a placa CPU.",
      "Liberar as licenças e recursos da placa ICIP.",
      "Conectar os troncos E1.",
      "Armazenar o banco de dados.",
      "Atualizar o firmware."
    ],
    answer: "Liberar as licenças e recursos da placa ICIP."
  },
  {
    question: "As placas 1E1 e 2E1 têm como principal finalidade:",
    options: [
      "Expandir ramais analógicos.",
      "Expandir ramais digitais.",
      "Permitir a conexão da central à rede telefônica digital E1.",
      "Gerenciar telefones IP.",
      "Aumentar a memória da CPU."
    ],
    answer: "Permitir a conexão da central à rede telefônica digital E1."
  },
  {
    question: "A placa E1 da Impacta 300R deve ser instalada:",
    options: [
      "No Slot 1.",
      "No Slot 5.",
      "No Slot 6.",
      "No Slot 11.",
      "Em qualquer slot livre."
    ],
    answer: "No Slot 11."
  },
  {
    question: "A CPU da Impacta 300R deve ser instalada:",
    options: [
      "No Slot 1.",
      "No Slot 11.",
      "No slot específico destinado à CPU.",
      "No último slot disponível.",
      "Em qualquer slot livre."
    ],
    answer: "No slot específico destinado à CPU."
  },
  {
    question: "Na Impacta 300R, o número de slots destinados às placas de expansão é:",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    answer: "12"
  },
  {
    question: "A potência máxima consumida pela Impacta 300R é:",
    options: [
      "150 W",
      "180 W",
      "200 W",
      "210 W",
      "250 W"
    ],
    answer: "210 W"
  },
  {
    question: "A alimentação elétrica da Impacta 300R é:",
    options: [
      "Apenas 127 V.",
      "Apenas 220 V.",
      "90 a 240 V com seleção automática (Full Range).",
      "Apenas 110 V.",
      "Apenas corrente contínua."
    ],
    answer: "90 a 240 V com seleção automática (Full Range)."
  },
  {
    question: "Para evitar a interrupção do funcionamento da central durante quedas de energia, recomenda-se utilizar:",
    options: [
      "Estabilizador.",
      "Transformador isolador.",
      "Filtro de linha.",
      "No-break (Short Break).",
      "Autotransformador."
    ],
    answer: "No-break (Short Break)."
  },
  {
    question: "A resistência máxima recomendada para o aterramento da central é:",
    options: [
      "1 Ω",
      "2 Ω",
      "5 Ω",
      "10 Ω",
      "20 Ω"
    ],
    answer: "5 Ω"
  },
  {
    question: "Na Impacta 300R, a proteção das programações é garantida porque:",
    options: [
      "Os dados ficam armazenados em HD.",
      "As configurações são gravadas em memória Flash.",
      "As configurações são armazenadas em RAM.",
      "A CPU envia cópia para a nuvem.",
      "O banco de dados fica no computador."
    ],
    answer: "As configurações são gravadas em memória Flash."
  },
  {
    question: "A quantidade máxima de bilhetes que a Impacta pode armazenar é:",
    options: [
      "500",
      "905",
      "1.000",
      "2.048",
      "Ilimitada"
    ],
    answer: "905"
  },
  {
    question: "No Programador Web, o submenu Numeração da placa ICIP é utilizado para:",
    options: [
      "Configurar o endereço IP da CPU.",
      "Definir a numeração dos ramais e troncos SIP disponibilizados pela placa ICIP.",
      "Alterar a senha do administrador.",
      "Configurar a placa GSM.",
      "Programar os troncos E1."
    ],
    answer: "Definir a numeração dos ramais e troncos SIP disponibilizados pela placa ICIP."
  },
  {
    question: "A porta padrão utilizada para acesso ao Programador Web da Impacta é:",
    options: [
      "80",
      "443",
      "7001",
      "51001",
      "53001"
    ],
    answer: "7001"
  },
  {
    question: "A opção Requisição de Senha tem como finalidade:",
    options: [
      "Exigir senha para determinadas programações e operações da central.",
      "Alterar automaticamente todas as senhas.",
      "Bloquear chamadas DDD.",
      "Habilitar gravação de chamadas.",
      "Liberar acesso remoto."
    ],
    answer: "Exigir senha para determinadas programações e operações da central."
  },
  {
    question: "A facilidade Hotline permite que:",
    options: [
      "Todas as ligações sejam gravadas.",
      "O ramal disque automaticamente para um número previamente programado ao retirar o monofone do gancho.",
      "O usuário bloqueie chamadas externas.",
      "O PABX realize conferências automáticas.",
      "O telefone entre em modo de economia de energia."
    ],
    answer: "O ramal disque automaticamente para um número previamente programado ao retirar o monofone do gancho."
  },
  {
    question: "Para transferir uma chamada utilizando um telefone analógico conectado à Impacta, o procedimento correto é:",
    options: [
      "Pressionar Hold.",
      "Pressionar Flash, discar o número do ramal de destino e colocar o monofone no gancho.",
      "Pressionar Conference.",
      "Digitar *57.",
      "Apenas desligar o telefone."
    ],
    answer: "Pressionar Flash, discar o número do ramal de destino e colocar o monofone no gancho."
  },
  {
    question: "Para capturar uma ligação destinada a outro ramal específico utiliza-se:",
    options: [
      "Flash + 7",
      "Código de captura seguido do número do ramal.",
      "Flash + 5",
      "Hold + Ramal",
      "Conference"
    ],
    answer: "Código de captura seguido do número do ramal."
  },
  {
    question: "O código 60993 permite ao usuário ouvir:",
    options: [
      "O endereço IP LAN.",
      "O endereço IP WAN.",
      "O Gateway.",
      "A máscara de rede.",
      "O DNS."
    ],
    answer: "O endereço IP WAN."
  },
  {
    question: "Os parafusos de fixação das placas de ramais possuem também a função de:",
    options: [
      "Fixar apenas mecanicamente as placas.",
      "Realizar o aterramento das proteções dos ramais.",
      "Alimentar os ramais digitais.",
      "Configurar a CPU.",
      "Identificar os slots."
    ],
    answer: "Realizar o aterramento das proteções dos ramais."
  },
  {
    question: "Ao instalar placas de ramais, o técnico deve:",
    options: [
      "Apertar apenas os parafusos superiores.",
      "Deixar os parafusos frouxos para facilitar manutenção.",
      "Certificar-se de que todos os parafusos estejam firmemente apertados.",
      "Utilizar apenas um parafuso por placa.",
      "Remover os parafusos após a instalação."
    ],
    answer: "Certificar-se de que todos os parafusos estejam firmemente apertados."
  },
  {
    question: "Na instalação de ramais utilizando cabeamento estruturado, recomenda-se utilizar:",
    options: [
      "Cabo coaxial.",
      "Cabo telefônico paralelo.",
      "Patch Panel e cabo CAT5.",
      "Cabo HDMI.",
      "Cabo serial."
    ],
    answer: "Patch Panel e cabo CAT5."
  },
  {
    question: "Antes de conectar um Terminal Inteligente ao sistema, deve-se verificar:",
    options: [
      "Se a fonte possui 220 V.",
      "Se não há curto-circuito ou baixo isolamento entre os fios.",
      "Apenas o endereço IP.",
      "Apenas a polaridade da bateria.",
      "O firmware do telefone."
    ],
    answer: "Se não há curto-circuito ou baixo isolamento entre os fios."
  },
  {
    question: "Na instalação utilizando cabo CAT5, os ramais devem ser conectados:",
    options: [
      "Em qualquer par disponível.",
      "Nos pares de fios entrelaçados entre si.",
      "Apenas nos pares azul e branco.",
      "Apenas nos pares verde.",
      "Apenas utilizando cabo crossover."
    ],
    answer: "Nos pares de fios entrelaçados entre si."
  },
  {
    question: "A distância máxima recomendada entre um Terminal Inteligente e a Impacta 300R utilizando cabo Multilan CAT5 é:",
    options: [
      "200 m",
      "400 m",
      "500 m",
      "600 m",
      "800 m"
    ],
    answer: "600 m"
  },
  {
    question: "Utilizando fio telefônico de 0,5 mm, a distância máxima entre o Terminal Inteligente e a Impacta 300R é:",
    options: [
      "200 m",
      "400 m",
      "600 m",
      "800 m",
      "1000 m"
    ],
    answer: "800 m"
  },
  {
    question: "Durante a instalação em cabeamento estruturado, não é permitida:",
    options: [
      "A utilização de cabo CAT5.",
      "A instalação de extensões para ramais digitais.",
      "A utilização de Patch Panel.",
      "A utilização de RJ-45.",
      "A utilização de cabo Multilan."
    ],
    answer: "A instalação de extensões para ramais digitais."
  },
  {
    question: "A quantidade máxima de ramais (TDM + SIP) suportada pela Impacta 300R é:",
    options: [
      "240",
      "300",
      "336",
      "360",
      "480"
    ],
    answer: "336"
  },
  {
    question: "Qual das placas abaixo possui limite máximo de uma unidade por central?",
    options: [
      "Tronco Analógico",
      "Ramal Analógico",
      "CPU",
      "Ramal Digital",
      "Tronco/Ramal"
    ],
    answer: "CPU"
  },
  {
    question: "A entrada de alimentação AC da Impacta 300R é:",
    options: [
      "Apenas 127 V.",
      "Apenas 220 V.",
      "90 a 240 V (50/60 Hz) Full Range.",
      "110/220 V com chave seletora.",
      "Apenas corrente contínua."
    ],
    answer: "90 a 240 V (50/60 Hz) Full Range."
  },
  {
    question: "A potência máxima consumida pela Impacta 300R é:",
    options: [
      "150 W",
      "180 W",
      "210 W",
      "250 W",
      "300 W"
    ],
    answer: "210 W"
  },
  {
  question: "Para evitar interrupções durante quedas de energia recomenda-se utilizar:",
  options: [
    "Estabilizador",
    "Filtro de linha",
    "No-break (Short Break)",
    "Transformador isolador",
    "Autotransformador"
  ],
  answer: "No-break (Short Break)"
},
{
  question: "A principal função da placa Backplane é:",
    options: [
      "Gerenciar chamadas VoIP.",
      "Alimentar os ramais.",
      "Interligar eletricamente todas as placas da central.",
      "Armazenar bilhetes.",
      "Configurar ramais."
    ],
    answer: "Interligar eletricamente todas as placas da central."
  },
  {
    question: "Na Impacta 300R, a placa E1 é instalada:",
    options: [
      "Slot 5.",
      "Slot 6.",
      "Slot 8.",
      "Slot 11.",
      "Qualquer slot."
    ],
    answer: "Slot 11."
  },
  {
    question: "A CPU da Impacta 300R:",
    options: [
      "Pode ser instalada em qualquer slot.",
      "Deve ser instalada no slot 11.",
      "Possui slot exclusivo na placa base.",
      "É integrada ao Backplane.",
      "Fica junto da placa GSM."
    ],
    answer: "Possui slot exclusivo na placa base."
  },
  {
    question: "O processamento principal da Impacta 300R é realizado pela:",
    options: [
      "Backplane.",
      "Placa GSM.",
      "ICIP.",
      "CPU.",
      "E1."
    ],
    answer: "CPU."
  },
  {
    question: "A placa Tronco GSM tem como finalidade:",
    options: [
      "Expandir ramais digitais.",
      "Integrar linhas da telefonia celular ao PABX.",
      "Gerenciar ramais SIP.",
      "Alimentar telefones IP.",
      "Gerenciar a CPU."
    ],
    answer: "Integrar linhas da telefonia celular ao PABX."
  },
  {
    question: "Quanto às placas GSM, a Impacta 300R permite instalar:",
    options: [
      "Até quatro placas GSM.",
      "Até duas placas GSM de 8 canais.",
      "Duas placas GSM de 4 canais ou uma placa GSM de 8 canais.",
      "Apenas uma placa GSM de 4 canais.",
      "Até oito canais distribuídos em quatro placas."
    ],
    answer: "Duas placas GSM de 4 canais ou uma placa GSM de 8 canais."
  },
  {
    question: "O LED de status da placa GSM é utilizado para:",
    options: [
      "Indicar tensão da fonte.",
      "Indicar o estado de funcionamento da placa.",
      "Mostrar o IP da central.",
      "Mostrar o número do SIM Card.",
      "Configurar o firmware."
    ],
    answer: "Indicar o estado de funcionamento da placa."
  },
  {
    question: "O conector SMA presente na placa GSM destina-se à conexão:",
    options: [
      "USB.",
      "Ethernet.",
      "Serial.",
      "Da antena GSM.",
      "Fonte."
    ],
    answer: "Da antena GSM."
  },
  {
    question: "Cada acesso externo da Impacta (analógico, VoIP ou digital) pertence:",
    options: [
      "A uma rota.",
      "A um feixe de linhas.",
      "A um grupo.",
      "A uma categoria.",
      "A um DDR."
    ],
    answer: "A um feixe de linhas."
  },
  {
    question: "Na programação de fábrica da Impacta 300R:",
    options: [
      "Cada linha pertence a um feixe diferente.",
      "Existem três rotas automáticas.",
      "Todas as linhas pertencem ao feixe ANA e os ramais utilizam a rota automática (rota 0).",
      "Não existe rota automática.",
      "Todas as chamadas utilizam VoIP."
    ],
    answer: "Todas as linhas pertencem ao feixe ANA e os ramais utilizam a rota automática (rota 0)."
  },
  {
    question: "A placa ICIP adiciona à Impacta 300R:",
    options: [
      "60 ramais SIP e 60 troncos SIP.",
      "Apenas troncos SIP.",
      "Apenas ramais SIP.",
      "120 ramais SIP e até 30 troncos SIP.",
      "240 ramais analógicos."
    ],
    answer: "120 ramais SIP e até 30 troncos SIP."
  },
  {
    question: "O conjunto ICIP 30 é composto por:",
    options: [
      "CPU, Fonte e Backplane.",
      "Placa Base ICIP, Placa CODEC ICIP e Chave de Hardware (Dongle).",
      "Placa GSM e CPU.",
      "Apenas Placa CODEC.",
      "Backplane e CPU."
    ],
    answer: "Placa Base ICIP, Placa CODEC ICIP e Chave de Hardware (Dongle)."
  },
  {
    question: "Cada placa CODEC ICIP disponibiliza:",
    options: [
      "20 canais VoIP.",
      "30 canais VoIP.",
      "40 canais VoIP.",
      "60 canais VoIP.",
      "120 canais VoIP."
    ],
    answer: "30 canais VoIP."
  },
  {
    question: "A principal vantagem da placa ICIP é:",
    options: [
      "Aumentar a potência elétrica da central.",
      "Substituir a CPU.",
      "Eliminar a necessidade de ramais.",
      "Permitir integração VoIP (SIP), reduzindo custos e possibilitando configuração via Web.",
      "Alimentar telefones IP."
    ],
    answer: "Permitir integração VoIP (SIP), reduzindo custos e possibilitando configuração via Web."
  },
  {
    question: "Os telefones IP Intelbras comunicam-se com a central através de:",
    options: [
      "Porta serial.",
      "Interface USB.",
      "Rede Ethernet (TCP/IP).",
      "Cabo coaxial.",
      "Interface RS-232."
    ],
    answer: "Rede Ethernet (TCP/IP)."
  },
  {
    question: "Normalmente, um telefone IP Intelbras possui:",
    options: [
      "Apenas uma porta RJ-11.",
      "Apenas uma porta USB.",
      "Duas portas RJ-45 (LAN e PC).",
      "Três portas Ethernet.",
      "Quatro portas Ethernet."
    ],
    answer: "Duas portas RJ-45 (LAN e PC)."
  },
  {
    question: "O terminal TIP 200 permite cadastrar:",
    options: [
      "Uma conta SIP.",
      "Até duas contas SIP.",
      "Quatro contas SIP.",
      "Seis contas SIP.",
      "Oito contas SIP."
    ],
    answer: "Até duas contas SIP."
  },
  {
    question: "O terminal TIP 300 suporta:",
    options: [
      "Duas contas SIP.",
      "Três contas SIP.",
      "Até quatro contas SIP.",
      "Seis contas SIP.",
      "Oito contas SIP."
    ],
    answer: "Até quatro contas SIP."
  },
  {
    question: "O equipamento ATA GKM 2210 T é:",
    options: [
      "Um Gateway GSM.",
      "Uma placa E1.",
      "Um telefone IP.",
      "Um Adaptador Telefônico Analógico (ATA) com suporte a duas contas SIP.",
      "Um módulo DSS."
    ],
    answer: "Um Adaptador Telefônico Analógico (ATA) com suporte a duas contas SIP."
  },
  {
    question: "Os principais conectores utilizados nas placas da Impacta são:",
    options: [
      "RJ-45 e USB.",
      "HDMI e VGA.",
      "RJ-11 e USB.",
      "Conector CHAMP e conectores do tipo FM Plug 180°.",
      "Apenas RJ-45."
    ],
    answer: "Conector CHAMP e conectores do tipo FM Plug 180°."
  },
  {
    question: "O software Programador Web permite:",
    options: [
      "Apenas visualizar alarmes.",
      "Apenas atualizar firmware.",
      "Programar e administrar toda a central através do navegador.",
      "Somente configurar ramais IP.",
      "Somente configurar troncos."
    ],
    answer: "Programar e administrar toda a central através do navegador."
  },
  {
    question: "O software Mesa Virtual é utilizado para:",
    options: [
      "Configurar placas GSM.",
      "Emitir relatórios de tarifação.",
      "Operar o ramal pelo computador, simulando um telefone.",
      "Atualizar firmware.",
      "Configurar o banco de dados."
    ],
    answer: "Operar o ramal pelo computador, simulando um telefone."
  },
  {
    question: "A principal função do software Controller é:",
    options: [
      "Configurar ramais digitais.",
      "Atualizar firmware.",
      "Realizar tarifação e gerenciamento dos bilhetes das chamadas.",
      "Programar a CPU.",
      "Configurar troncos SIP."
    ],
    answer: "Realizar tarifação e gerenciamento dos bilhetes das chamadas."
  },
  {
    question: "O Bilhetador tem como função:",
    options: [
      "Gravar conversas.",
      "Atualizar firmware.",
      "Configurar ramais.",
      "Coletar e armazenar os registros (bilhetes) das chamadas telefônicas.",
      "Configurar a placa ICIP."
    ],
    answer: "Coletar e armazenar os registros (bilhetes) das chamadas telefônicas."
  },
  {
    question: "O endereço IP LAN padrão da Impacta 300R é:",
    options: [
      "192.168.0.1",
      "10.0.0.2",
      "192.168.1.1",
      "172.16.0.1",
      "10.10.10.1"
    ],
    answer: "10.0.0.2"
  },
  {
    question: "A porta padrão utilizada pelo serviço SIP da Impacta 300R é:",
    options: [
      "80",
      "443",
      "7001",
      "5060",
      "51001"
    ],
    answer: "5060"
  },
  {
    question: "A facilidade Hotline permite que:",
    options: [
      "Todas as ligações sejam gravadas.",
      "Ao retirar o monofone do gancho, o ramal realize automaticamente uma chamada para um número previamente programado.",
      "O usuário bloqueie chamadas externas.",
      "Seja criada uma conferência automaticamente.",
      "O telefone entre em modo econômico."
    ],
    answer: "Ao retirar o monofone do gancho, o ramal realize automaticamente uma chamada para um número previamente programado."
  },
  {
    question: "A função Cadeado permite:",
    options: [
      "Bloquear apenas chamadas internacionais.",
      "Bloquear somente chamadas locais.",
      "Bloquear o ramal para impedir chamadas não autorizadas mediante uso de senha.",
      "Bloquear apenas chamadas VoIP.",
      "Bloquear a programação da central."
    ],
    answer: "Bloquear o ramal para impedir chamadas não autorizadas mediante uso de senha."
  },
  {
    question: "A facilidade Pêndulo permite:",
    options: [
      "Transferir chamadas automaticamente.",
      "Alternar entre duas chamadas em atendimento.",
      "Estacionar chamadas.",
      "Gravar conversas.",
      "Capturar chamadas de outro ramal."
    ],
    answer: "Alternar entre duas chamadas em atendimento."
  },
  {
    question: "Para utilizar a facilidade Pêndulo durante uma ligação utiliza-se:",
    options: [
      "Flash + 7",
      "Flash + 5",
      "Flash + 8",
      "Flash + 9",
      "Flash + 0"
    ],
    answer: "Flash + 5"
  },
  {
    question: "Para estacionar uma chamada na Impacta utiliza-se:",
    options: [
      "Flash + 7",
      "Flash + 5",
      "Flash + 3",
      "Flash + 8",
      "Flash + 9"
    ],
    answer: "Flash + 7"
  },
  {
    question: "Para recuperar uma chamada estacionada utiliza-se:",
    options: [
      "Flash + 7",
      "57 + número da posição de estacionamento",
      "Flash + 5",
      "Flash + 8",
      "Flash + 9"
    ],
    answer: "57 + número da posição de estacionamento"
  },
  {
    question: "O Reset Total da central:",
    options: [
      "Apaga somente os bilhetes.",
      "Restaura a programação de fábrica, devendo ser utilizado apenas quando necessário.",
      "Reinicia apenas a CPU.",
      "Apaga somente a agenda.",
      "Atualiza o firmware."
    ],
    answer: "Restaura a programação de fábrica, devendo ser utilizado apenas quando necessário."
  },
  {
    question: "Na falta de energia elétrica, a Impacta 300R:",
    options: [
      "Desliga completamente.",
      "Realiza o acoplamento de emergência do primeiro tronco analógico para ramais previamente definidos.",
      "Mantém apenas os ramais IP funcionando.",
      "Mantém apenas os troncos E1 ativos.",
      "Continua funcionando normalmente."
    ],
    answer: "Realiza o acoplamento de emergência do primeiro tronco analógico para ramais previamente definidos."
  },
  {
    question: "O código 87 permite ouvir:",
    options: [
      "Endereço IP WAN.",
      "Número do ramal e informações de identificação (BINA).",
      "Gateway.",
      "Máscara de rede.",
      "Firmware."
    ],
    answer: "Número do ramal e informações de identificação (BINA)."
  },
  {
    question: "O código 86 permite ao usuário ouvir:",
    options: [
      "O endereço IP da WAN.",
      "Informações referentes à configuração do ramal.",
      "A programação da CPU.",
      "Os bilhetes armazenados.",
      "O estado das placas GSM."
    ],
    answer: "Informações referentes à configuração do ramal."
  },
  {
    question: "O código 60991 informa:",
    options: [
      "O endereço IP WAN.",
      "O endereço IP LAN da central.",
      "O Gateway.",
      "O DNS.",
      "A versão do firmware."
    ],
    answer: "O endereço IP LAN da central."
  },
  {
    question: "Durante o checklist de instalação da Impacta, um dos itens mais importantes é verificar:",
    options: [
      "A cor do gabinete.",
      "A infraestrutura de cabeamento e o aterramento da instalação.",
      "O modelo do monitor.",
      "O comprimento do cabo USB.",
      "A marca do computador."
    ],
    answer: "A infraestrutura de cabeamento e o aterramento da instalação."
  },
  {
    question: "O principal objetivo da utilização da tecnologia PBX-IP na Impacta é:",
    options: [
      "Eliminar os ramais.",
      "Integrar telefonia convencional e VoIP, reduzindo custos e ampliando os recursos de comunicação.",
      "Trabalhar apenas com linhas analógicas.",
      "Substituir a CPU.",
      "Eliminar os troncos E1."
    ],
    answer: "Integrar telefonia convencional e VoIP, reduzindo custos e ampliando os recursos de comunicação."
  },
  {
    question: "Entre as principais vantagens da placa ICIP estão:",
    options: [
      "Aumento da potência elétrica da central.",
      "Integração SIP, redução de custos, acesso Web e unificação da comunicação IP.",
      "Eliminação da CPU.",
      "Eliminação das placas CODEC.",
      "Conversão automática de linhas analógicas em digitais."
    ],
    answer: "Integração SIP, redução de custos, acesso Web e unificação da comunicação IP."
  }

];

export const questions: Question[] = quizzes.telefonia;