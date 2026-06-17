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

export const questions: Question[] = quizzes.telefonia;