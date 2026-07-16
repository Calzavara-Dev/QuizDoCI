import { manutencao2Questions } from "./manutencao2";
import { eletronica2P2Questions } from "./eletronica2_p2";
import { microcontroladoresP1Questions } from "./microcontroladores_p1";
import type { Question } from "../types/question";
import circuito100 from "../assets/circuitos/100.jpg";
import circuito102 from "../assets/circuitos/102.jpg";
import circuito104 from "../assets/circuitos/104.jpg";
import circuito105 from "../assets/circuitos/105.jpg";
import circuito109 from "../assets/circuitos/109.jpg";
import circuito137 from "../assets/circuitos/137.jpg";

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
  ],
  "manutencao-dos-sistemas-de-odometros": [
    {
      question: "Qual é o princípio fundamental utilizado pelo Odômetro SRD-331 para determinar a velocidade do navio em relação à água?",
      options: [
        "Variação de fase magnética induzida entre dois botões eletrodos no casco.",
        "Medição de distância através de ecos de sonar modulados a 12 MHz diretos no fundo do mar.",
        "Utilização da mudança de ondas de som pelo efeito \"Doppler\", através de pulsos sonoros de 2 MHz transmitidos na água.",
        "Cálculo da resistência da \"camada limite\" (\"boundary layer\") frente aos cristais transdutores de 400 Hz."
      ],
      answer: "Utilização da mudança de ondas de som pelo efeito \"Doppler\", através de pulsos sonoros de 2 MHz transmitidos na água.",
      explanation: "O equipamento utiliza o princípio de mudança das ondas de som pelo efeito \"Doppler\" a fim de se determinar a velocidade do navio em relação à água. Os sinais sensores são pulsos de som de alta frequência transmitidos para a água.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O equipamento transmite os pulsos acústicos simultaneamente na direção da proa (FORE) e da popa (AFT). Qual a finalidade estrita de calcular a diferença processada dessas duas direções opostas?",
      options: [
        "Garantir que a falha de um cristal não afete a alimentação de +28V.",
        "Determinar a média da diferença de velocidade de forma independente dos vetores dinâmicos resultantes do movimento de arfagem (\"pitch\") ou de içamento (\"heave\") do navio.",
        "Permitir a ativação simultânea do modo \"Dummy Log\" (Falso Odômetro) para distâncias em milhas.",
        "Criar a aeração necessária para proteger a lente de poliestireno do transdutor."
      ],
      answer: "Determinar a média da diferença de velocidade de forma independente dos vetores dinâmicos resultantes do movimento de arfagem (\"pitch\") ou de içamento (\"heave\") do navio.",
      explanation: "O uso de duas janelas transmitindo em direções opostas permite que a média da diferença de velocidade seja determinada independente dos movimentos de arfagem ou içamento do navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O SRD-331 processa a reflexão acústica, mas evita intencionalmente medir os retornos de águas turbulentas que colam no casco. Como o sistema contorna o problema dessa \"camada limite\" (\"boundary layer\")?",
      options: [
        "Encurtando o pulso original XMTE de 1.1 ms para 0.55 ms no microprocessador.",
        "Desligando o pré-amplificador receptor U1 durante toda a fase de recepção usando a chave TR (TR Switch).",
        "Calculando um atraso no tempo (ativado pelo sinal WTGTE) após a transmissão e antes de permitir a contagem do sinal, assegurando a leitura de águas sem perturbações.",
        "Utilizando um sinal de fase oposto no potenciômetro R19 de ajuste de potência (PWR ADJ)."
      ],
      answer: "Calculando um atraso no tempo (ativado pelo sinal WTGTE) após a transmissão e antes de permitir a contagem do sinal, assegurando a leitura de águas sem perturbações.",
      explanation: "O atraso de contagem diminui a chance de contagem de sinais refletidos pela água presa à camada de demarcação (boundary layer) do navio. A contagem só inicia quando WTGTE se torna nível alto.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em vez de calcular eletronicamente a diferença de frequência \"Doppler\" de forma direta (analógica), que método matemático a arquitetura eletrônica SRD-331 aplica para derivar a velocidade?",
      options: [
        "Compara a diferença de tempo necessária na recepção de exatos 2048 pulsos nos cristais de vante e ré, valendo-se da relação T=1/f.",
        "Usa a resistência variável da água entre eletrodos para calibrar os capacitores C1 e C2 do transdutor Y1.",
        "Subtrai 2 MHz da frequência central de 12 MHz do clock primário na CPU U19.",
        "Lê os dados EPROM em 7.7 ms e injeta cruzamentos de zero em conversores digital-analógicos de 115V."
      ],
      answer: "Compara a diferença de tempo necessária na recepção de exatos 2048 pulsos nos cristais de vante e ré, valendo-se da relação T=1/f.",
      explanation: "Em vez de detectar a frequência diretamente, o circuito compara a diferença de tempo na recepção de 2048 pulsos, sabendo que essa diferença de tempo é diretamente proporcional à diferença de frequência (T=1/f).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O Odômetro SRD-331 possui uma arquitetura física dividida logicamente. Quais são as suas unidades principais de composição estrita?",
      options: [
        "Módulo de Retransmissão (RTU), Módulo Transdutor e Falso Odômetro (\"Dummy Log\").",
        "Unidade Eletrônica, Unidade \"Master Display\" e o Módulo do Transdutor.",
        "Gaveta de Cartões Analógicos, Módulo do Transdutor Piezoelétrico e Terminal de Calibração.",
        "Unidade VCS Tipo 84, Haste Fixa (Fixed Probe) e Painel Indicador Remoto."
      ],
      answer: "Unidade Eletrônica, Unidade \"Master Display\" e o Módulo do Transdutor.",
      explanation: "O equipamento é composto por três unidades principais, que são a Unidade Eletrônica, a Unidade \"Master Display\" e o Módulo do Transdutor.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Que mecanismo específico salvaguarda a integridade dos dados acumulados (distância total) na Unidade \"Master Display\" durante falhas ou colapsos de alimentação elétrica?",
      options: [
        "Uma memória EPROM na CPU que é atualizada e travada mecanicamente a cada pulso de 24V.",
        "Um banco de resistores de 90 Ohms que acumula a voltagem do cruzamento em zero por até 2 dias.",
        "O armazenamento físico nos roletes de catraca do indicador analógico.",
        "Um circuito de suporte de baterias interno que retém os dados da distância acumulada por um período mínimo de 10 minutos."
      ],
      answer: "Um circuito de suporte de baterias interno que retém os dados da distância acumulada por um período mínimo de 10 minutos.",
      explanation: "A Unidade \"Master Display\" contém um circuito de suporte de baterias que retém a distância acumulada no caso de falta de energia por um período mínimo de 10 minutos.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O Módulo A3, A4 e A5 formam as subfunções de alimentação. Quais as especificações nominais primárias toleradas na entrada da Unidade Eletrônica deste modelo?",
      options: [
        "24V CC fornecidos pelo quadro principal de emergência.",
        "Exclusivamente 115V 400Hz para acionamento síncrono dos módulos C1 e C2.",
        "100, 115 ou 230 Volts AC, com frequências de 50 ou 60 Hz.",
        "54 a 60V com 60Hz gerando corrente de excitação de 0.9A."
      ],
      answer: "100, 115 ou 230 Volts AC, com frequências de 50 ou 60 Hz.",
      explanation: "A unidade Eletrônica opera recebendo alimentação do navio com 100, 115 ou 230 Volts AC, nas frequências de 50 ou 60 Hz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O protocolo técnico permite fazer manutenções pontuais na Unidade Eletrônica de forma separada do painel na ponte. Como a arquitetura do \"hardware\" viabiliza esse corte localizado?",
      options: [
        "Forçando um BITE (Teste Interno) até desligar ambos via linha serial RS-422.",
        "Existe um controle de alimentação interno disponível na própria Unidade Eletrônica, permitindo ligar e desligar localmente durante reparos, sem afetar o comando da \"Master Display\".",
        "Sacando fisicamente o Módulo Transmissor A1 que retém a chave geral primária de toda a estrutura.",
        "Usando a tecla \"TEST\" conjugada à tecla \"POWER OFF\"."
      ],
      answer: "Existe um controle de alimentação interno disponível na própria Unidade Eletrônica, permitindo ligar e desligar localmente durante reparos, sem afetar o comando da \"Master Display\".",
      explanation: "Há um controle interno de alimentação na Unidade Eletrônica que permite sua operação local (ligar/desligar) independente da alimentação enviada pela Unidade \"Master Display\" durante manutenções.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "No interior cego do Módulo Transdutor há um submódulo vital. Quais peças ficam fixadas ao lado dos cristais de escuta a fim de maximizar a absorção da fraca voltagem ecoada da água salgada?",
      options: [
        "Os conversores Síncrono/Digital (15CX4) para evitar perdas do cabo longo.",
        "Osciladores Mestres U9 (12 MHz) para sincronizar imediatamente o choque ultrassônico.",
        "Transformadores casadores de impedância (T1 e T2) em conjunto com capacitores para transmitir e receber os sinais com eficiência primária.",
        "Amplificadores limitadores U5B para queimar fusíveis antes que pulsos superem 1.1 ms de carga."
      ],
      answer: "Transformadores casadores de impedância (T1 e T2) em conjunto com capacitores para transmitir e receber os sinais com eficiência primária.",
      explanation: "Localizados no submódulo do transdutor estão os transformadores T1 e T2 e capacitores (C1 e C2), que funcionam como casadores de impedância entre o cabo e os cristais transmissores/receptores.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Fainas de docagem preveem limpeza de crostas no sensor SRD-331. Assinale o rigor do manual sobre a lente do transmissor/receptor:",
      options: [
        "Deve ser lixada agressivamente caso existam cracas e, em seguida, receber tinta anti-incrustante (vinílica).",
        "Ela é de poliestireno; jamais pode ser raspada, tratada com ácidos ou pintada, usando-se apenas esponja com detergente para não distorcer as características refrativas.",
        "É feita em \"G.R.P.\" elíptico e exige o ajuste em um potenciômetro RV-12 (Sensibilidade) após cada repintura naval.",
        "Permite jateamento leve apenas se for lubrificada posteriormente por uma leve camada de graxa de silicone em seus eletrodos de contato."
      ],
      answer: "Ela é de poliestireno; jamais pode ser raspada, tratada com ácidos ou pintada, usando-se apenas esponja com detergente para não distorcer as características refrativas.",
      explanation: "A superfície consiste numa lente transparente de poliestireno que nunca deve ser raspada, triturada, lixada ou limpa com ácido, bastando detergente e esponja para preservá-la. A pintura ou estrago acarreta perda da integridade.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "As condições de águas abaixo da quilha influem no eco \"Doppler\". Segundo os limites da fabricante Sperry, entre quais profundidades sobressaentes sob o casco a calibração se garante operativa?",
      options: [
        "A partir de um mínimo de 1,6 metros e limitando-se ao máximo prático de 4,8 metros para a viabilidade do processamento do pulso.",
        "Necessita somente de 1,83 metros para águas lodosas, sendo infinito para grandes oceanos.",
        "Mínimo de 4,8 metros até a profundeza abissal (limitado por 9999,9 milhas contadas).",
        "Exige 10 metros pelo menos, ou o efeito de arfagem (\"heave\") inverterá a quadratura doppler do fundo falso."
      ],
      answer: "A partir de um mínimo de 1,6 metros e limitando-se ao máximo prático de 4,8 metros para a viabilidade do processamento do pulso.",
      explanation: "A profundidade mínima de operação é de 1,6 metros e a profundidade máxima na qual os sinais refletidos são processados adequadamente é de 4,8 metros.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O longo trajeto de 9,2 m que sobe do transdutor pode induzir dados erráticos de velocidade (pulos falsos) na SDTU. Como o SRD-331 resolve a vulnerabilidade a ruído ou EMI (Interferência Eletromagnética) nesse chicote?",
      options: [
        "Utiliza a arquitetura EPROM no casco, digitalizando o sinal antes dele subir pelo navio.",
        "Faz uso estrito do cabo transmissor TTRS com quatro condutores blindados de alta proteção imune ao EMI naval.",
        "O Módulo de Calibração aciona o \"Dummy Log\" para cancelar os ruídos de 60 Hz.",
        "Exige a medição trimestral e a substituição da Memória de Acesso Randômico 8156 para purgar o chicote."
      ],
      answer: "Faz uso estrito do cabo transmissor TTRS com quatro condutores blindados de alta proteção imune ao EMI naval.",
      explanation: "O cabo utilizado entre o transdutor e a eletrônica é um cabo de proteção tipo TTRS, que fornece excelente proteção contra EMI (Interferência Eletromagnética), a qual de outro modo corromperia as leituras intermitentes.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "No evento de total avaria na recepção acústica \"Doppler\", a tripulação passa o painel para modo \"Manual\" e injeta uma velocidade estimada via teclado. Como reage o processador ao cômputo da Distância?",
      options: [
        "Zera a contagem de distância até o conserto dos cristais, deixando a Unidade apenas como um tacômetro de nós.",
        "Desliga o módulo A1 transmissor, mas passa a acumular milhas proporcionalmente utilizando a exata razão de velocidade manual recém-inserida pelo teclado.",
        "Ele paralisa a SDTU e puxa o hodômetro prévio da sub-rotina BITE Completa em 0,5Hz.",
        "A distância passará a ser processada pelos tacômetros mecânicos auxiliares do RTU sem precisão lógica de processador digital."
      ],
      answer: "Desliga o módulo A1 transmissor, mas passa a acumular milhas proporcionalmente utilizando a exata razão de velocidade manual recém-inserida pelo teclado.",
      explanation: "Ao selecionar a inserção manual, o processador assimila a nova velocidade para suas matemáticas e continua, também, a atualizar e acumular normalmente a distância com base nesta nova razão estipulada no painel.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Zerar a viagem (\"Reset Miles\") num navio moderno é uma tecla de extrema segurança para evitar acidentes de percurso. Qual o procedimento mandatório exigido pelo software deste modelo \"Doppler\" da Sperry?",
      options: [
        "Girar a chave física SW1 sob a tampa e apertar \"TEST\".",
        "Digitar a senha através do Módulo de Calibração (12) seguida da chave \"OPERATE\".",
        "A tecla \"RESET MILES\" deve obrigatoriamente ser acionada duas vezes consecutivas dentro de uma restrita janela de 5 segundos, do contrário, a placa ignora o reinício.",
        "Pressionar simultaneamente as teclas \"KNOT/MILES\" e \"DECREASE\" por 10 minutos."
      ],
      answer: "A tecla \"RESET MILES\" deve obrigatoriamente ser acionada duas vezes consecutivas dentro de uma restrita janela de 5 segundos, do contrário, a placa ignora o reinício.",
      explanation: "A zeragem segura requer pressionar \"RESET MILES\" duas vezes com intervalo máximo de cinco segundos entre os toques. Senão, o display para de piscar e o comando é renegado mantendo-se a navegação acumulada prévia.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Ao encerrar a operação em alto mar para permitir reparos internos urgentes, o mantenedor pressiona \"POWER OFF\" no botão tátil da Master Display apagando todo o sistema. Qual perigo severo de choque permeia a Eletrônica e que obriga a manobra do quadro do navio?",
      options: [
        "O gerador piezelétrico retém acúmulo radiativo na lente de poliestireno por 24 horas.",
        "As baterias auxiliares entram em curto imediato caso a carcaça seja removida sob a ordem \"POWER OFF\".",
        "Mesmo com o botão no \"OFF\", correntes letais e tensão nominal de 115V AC continuam energizando a placa de terminais, transformadores e filtros primários de linha.",
        "O relé de catraca RS-422 inverte a impedância gerando estática fulminante para peças CMOS se o aterramento da Haste estiver submerso."
      ],
      answer: "Mesmo com o botão no \"OFF\", correntes letais e tensão nominal de 115V AC continuam energizando a placa de terminais, transformadores e filtros primários de linha.",
      explanation: "O manual alerta que a tensão alta (115VAC) ainda reside perigosamente ativa na placa de bornes/terminais TB1, nos filtros e transformadores mesmo quando desligado pelo painel (Standby), exigindo o isolamento da força de bordo pelos painéis gerais.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O fenômeno agressivo da aeração no fundo marítimo pode incapacitar os sonares e o próprio odômetro SRD-331. Como as bolhas prejudicam o hardware e o resultado na ponte de comando?",
      options: [
        "Oxidando a camada de G.R.P e corroendo a resina Araldite do transdutor.",
        "Elas criam barreiras densas o suficiente para impedir a saída térmica e refletir 10 Watts de ruído no pré-amplificador, queimando-o.",
        "Se acumulam até travar os motores mecânicos síncronos de repetição de rumo e velocidade.",
        "Elas isolam/bloqueiam física e acusticamente o choque da energia para a água ou mascaram a recepção ecoada, forçando a indicação de erros intermitentes/lapsos na leitura do oficial."
      ],
      answer: "Elas isolam/bloqueiam física e acusticamente o choque da energia para a água ou mascaram a recepção ecoada, forçando a indicação de erros intermitentes/lapsos na leitura do oficial.",
      explanation: "Bolhas grandes e densas mascaram fisicamente tanto a via de saída sônica quanto o escutar dos cristais receptores, o que causa lacunas de \"cegueira\" (lapsos temporários na marcação de velocidade no display).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a duração do ciclo completo repetitivo de operação (transmissão e recepção) do Odômetro SRD-331?",
      options: [
        "Exatos 7,7 milissegundos.",
        "Exatos 2,048 milissegundos.",
        "Cerca de 60 milissegundos.",
        "Exatos 1,1 milissegundos."
      ],
      answer: "Exatos 7,7 milissegundos.",
      explanation: "A arquitetura do sistema baseia todo o seu ritmo operacional no período regular de 7,7 ms para cada ciclo de transmissão e escuta.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Dentro do ciclo de 7,7 ms, qual é a função e a duração do sinal de habilitação de transmissão (XMTE)?",
      options: [
        "Habilitar a emissão do pulso acústico de 2 MHz, com duração de 1,1 ms.",
        "Manter o equipamento em repouso por 0,55 ms.",
        "Alimentar os relés de saída da Master Display por 5 segundos.",
        "Zerar a contagem de distância percorrida a cada 10 minutos."
      ],
      answer: "Habilitar a emissão do pulso acústico de 2 MHz, com duração de 1,1 ms.",
      explanation: "Durante o sinal XMTE ativo em nível alto por 1,1 ms, ocorrem as emissões acústicas nas janelas dianteira e traseira.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais são os três circuitos integrados principais que formam o núcleo de processamento e controle na Placa A2 da Unidade Eletrônica?",
      options: [
        "Microprocessador 8085, RAM/Timer 8156 e EPROM de controle.",
        "Três amplificadores operacionais push-pull em cascata.",
        "Osciladores locais de 12 MHz, 2 MHz e 400 Hz.",
        "Conversores digital-analógicos e relés de chaveamento."
      ],
      answer: "Microprocessador 8085, RAM/Timer 8156 e EPROM de controle.",
      explanation: "O processamento e controle central do sistema são executados pela CPU 8085 (U19), pelo integrado RAM/Timer 8156 (U20) e pela EPROM (U21).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como o microprocessador do SRD-331 controla o tempo dos sinais de chaveamento XMTE (transmissão) e WTGTE (espera/recepção)?",
      options: [
        "Por meio de interrupções de hardware geradas pela saída de temporizador do CI 8156.",
        "Através de potenciômetros manuais ajustados no painel frontal.",
        "Por chaves térmicas acionadas pela temperatura da água no transdutor.",
        "Através do sinal do girocópio do navio."
      ],
      answer: "Por meio de interrupções de hardware geradas pela saída de temporizador do CI 8156.",
      explanation: "O microprocessador gerencia a temporização contando as interrupções periódicas geradas pela saída do temporizador do CI 8156 para ativar as janelas XMTE e WTGTE.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como é gerada a frequência operacional de 2 MHz para o transdutor a partir do clock principal de 12 MHz?",
      options: [
        "Um contador divisor reduz a frequência principal de 12 MHz por um fator de 6.",
        "Um diodo Zener converte a tensão em frequência harmônica de 2 MHz.",
        "Um transformador eleva a tensão CA da rede para oscilar a 2 MHz.",
        "Um circuito analógico mistura frequências de proa e popa."
      ],
      answer: "Um contador divisor reduz a frequência principal de 12 MHz por um fator de 6.",
      explanation: "Durante a habilitação de transmissão, um contador divisor reduz a frequência do clock de 12 MHz por 6, fornecendo o sinal de 2 MHz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do ajuste 'PWR ADJ' (R19) localizado na placa transmissora (A1)?",
      options: [
        "Ajustar o nível de potência de transmissão de RF enviada ao transdutor.",
        "Ajustar o brilho e o contraste do display LCD da ponte de comando.",
        "Calibrar a sensibilidade do alarme de falha de alimentação elétrica.",
        "Alternar a frequência de operação entre 50 Hz e 60 Hz."
      ],
      answer: "Ajustar o nível de potência de transmissão de RF enviada ao transdutor.",
      explanation: "O potenciômetro PWR ADJ permite calibrar a corrente de ganho do amplificador para estabilizar a saída nominal de RF.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do circuito de proteção por indução (T3) no estágio de saída de RF?",
      options: [
        "Detectar sobrecarga ou curto-circuito na linha do transdutor e limitar a potência do amplificador.",
        "Desligar a alimentação de 115 VCA de todo o navio em caso de falha.",
        "Ativar uma sirene de emergência e mudar a leitura para modo manual.",
        "Desconectar a bateria interna da Master Display."
      ],
      answer: "Detectar sobrecarga ou curto-circuito na linha do transdutor e limitar a potência do amplificador.",
      explanation: "O sensor de corrente T3 monitora a saída e atua limitando o ganho do amplificador push-pull para proteger os circuitos contra sobrecarga ou curto.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Por que o circuito exige que o pulso de comando XMTE ultrapasse um limiar de tensão de 1 Volt para habilitar a transmissão?",
      options: [
        "Para evitar que ruídos ou pulsos espúrios acionem indevidamente o amplificador de RF.",
        "Para garantir que a bateria de reserva esteja totalmente carregada.",
        "Para sincronizar a transmissão com a frequência da rede elétrica de 60 Hz.",
        "Para aquecer os cristais piezoelétricos antes da emissão."
      ],
      answer: "Para evitar que ruídos ou pulsos espúrios acionem indevidamente o amplificador de RF.",
      explanation: "O divisor resistivo na entrada impõe que o pulso ultrapasse 1 Volt, prevenindo acionamentos prematuros causados por ruídos elétricos do navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o conceito e a função da 'Chave TR' (TR Switch) no circuito do Odômetro SRD-331?",
      options: [
        "Proteger os circuitos sensíveis de recepção durante a emissão dos pulsos de alta potência de transmissão.",
        "Alternar a alimentação do equipamento entre 115 VCA e baterias de emergência.",
        "Trocar a exibição do display entre nós (velocidade) e milhas (distância).",
        "Desligar o transdutor quando a profundidade for menor que 1,6 metros."
      ],
      answer: "Proteger os circuitos sensíveis de recepção durante a emissão dos pulsos de alta potência de transmissão.",
      explanation: "A Chave TR (TR Switch) isola e protege o estágio pré-amplificador receptor contra a alta energia liberada durante o pulso de transmissão de 10 Watts.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do transformador T4 após o estágio pré-amplificador de recepção?",
      options: [
        "Casar a impedância e converter o sinal balanceado em sinal simples para os estágios seguintes.",
        "Retificar o sinal de áudio em tensão contínua de alimentação de 24 V.",
        "Amplificar a potência do sinal para acionar diretamente repetidoras remotas.",
        "Zerar os registradores de distância percorrida."
      ],
      answer: "Casar a impedância e converter o sinal balanceado em sinal simples para os estágios seguintes.",
      explanation: "T4 realiza o casamento de impedância da saída do pré-amplificador e converte a linha balanceada dupla em sinal simples (single-ended).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do comparador de limiar ('Threshold') no processamento do sinal recebido?",
      options: [
        "Verificar se o sinal de retorno possui nível suficiente sobre o ruído para autorizar a contagem Doppler.",
        "Inverter a polaridade da tensão da rede de 115 VCA.",
        "Medir a temperatura da água para corrigir a salinidade.",
        "Desconectar o cabo do transdutor quando há sobrecarga."
      ],
      answer: "Verificar se o sinal de retorno possui nível suficiente sobre o ruído para autorizar a contagem Doppler.",
      explanation: "O comparador de limiar avalia a amplitude do sinal retificado e só autoriza a abertura das portas Doppler quando o sinal supera o nível de ruído ajustado.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como o bloco 'Doppler Gate' obtém as informações para calcular o desvio de frequência Doppler?",
      options: [
        "Contando os cruzamentos em zero do sinal do eco e registrando o tempo através de pulsos de clock de 12 MHz.",
        "Medindo a resistência da água entre os dois cristais do transdutor.",
        "Comparando a voltagem da bateria principal com a bateria de reserva.",
        "Multiplicando a profundidade do oceano pela frequência de 400 Hz."
      ],
      answer: "Contando os cruzamentos em zero do sinal do eco e registrando o tempo através de pulsos de clock de 12 MHz.",
      explanation: "Os contadores do Doppler Gate acumulam os cruzamentos em zero do eco sonoro e, em paralelo, contam os ciclos do clock de 12 MHz para determinar o tempo decorrido.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O que acontece quando o contador do Doppler Gate atinge exatamente 2048 cruzamentos em zero recebidos?",
      options: [
        "A contagem é interrompida e o contador de tempo de 12 MHz associado para simultaneamente.",
        "O equipamento reinicia toda a contagem de distância percorrida.",
        "O transdutor emite um sinal de alarme sonoro de águas rasas.",
        "A alimentação principal é desligada para economia de energia."
      ],
      answer: "A contagem é interrompida e o contador de tempo de 12 MHz associado para simultaneamente.",
      explanation: "Ao registrar 2048 cruzamentos em zero, a lógica encerra a contagem daquele canal e trava o contador do clock de 12 MHz associado.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual sinal e interrupção informam ao microprocessador 8085 que os contadores de proa e popa finalizaram a contagem?",
      options: [
        "O sinal 'CRT RDY' através da interrupção de hardware RST 6.5.",
        "O alarme de bateria fraca através da porta serial RS-232.",
        "O pulso de temporização de 7,7 ms através da interrupção RST 7.5.",
        "O sinal de chave de teste frontal."
      ],
      answer: "O sinal 'CRT RDY' através da interrupção de hardware RST 6.5.",
      explanation: "Quando ambos os canais concluem a contagem, a lógica ativa o sinal 'CRT RDY', gerando a interrupção RST 6.5 para que a CPU leia os dados.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Se o sinal de eco for fraco ou incompleto e não atingir 2048 cruzamentos em um ciclo, qual é o comportamento do sistema?",
      options: [
        "O sistema mantém a contagem acumulada e continua a contagem no próximo ciclo de escuta sem perder os dados.",
        "O microprocessador zera imediatamente todas as memórias e reinicia o equipamento.",
        "O display exibe erro fatal e desliga o transmissor de RF.",
        "O odômetro passa a usar a rotação do motor do navio para calcular velocidade."
      ],
      answer: "O sistema mantém a contagem acumulada e continua a contagem no próximo ciclo de escuta sem perder os dados.",
      explanation: "Para não desperdiçar dados em águas ruidosas, o sistema inibe o sinal de reset dos contadores ('CTR RST') e conclui a contagem no ciclo seguinte.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais instrumentos de bancada são especificados pelo manual para os procedimentos de teste e alinhamento do SRD-331?",
      options: [
        "Osciloscópio de no mínimo 2 MHz com sensibilidade de 10 mV/cm, multímetro e cargas resistivas de 90 Ohms.",
        "Apenas uma chave de fenda calibra-trimpot e uma lâmpada de teste.",
        "Girocompasso de referência e termômetro infravermelho.",
        "Analisador de espectro de 10 GHz e gerador de radiofrequência de 400 MHz."
      ],
      answer: "Osciloscópio de no mínimo 2 MHz com sensibilidade de 10 mV/cm, multímetro e cargas resistivas de 90 Ohms.",
      explanation: "O manual requer osciloscópio (sensibilidade de 10 mV/cm), multímetro digital e resistores de 90 Ohms (2W) para simular o transdutor.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Onde o técnico pode inspecionar diretamente os sinais vindos do transdutor antes que passem pelos transformadores de isolamento?",
      options: [
        "No bloco de terminais TB1 da Unidade Eletrônica (submódulo A4).",
        "No display digital LCD da Master Display.",
        "Nos conectores da bateria auxiliar de 10 minutos.",
        "Na chave seletora de alimentação de 115 VCA."
      ],
      answer: "No bloco de terminais TB1 da Unidade Eletrônica (submódulo A4).",
      explanation: "As conexões puras advindas do cabo do transdutor chegam ao bloco de terminais TB1 na base da Unidade Eletrônica.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual unidade é responsável por processar e distribuir os dados de velocidade e distância para as unidades repetidoras remotas?",
      options: [
        "A Unidade Master Display.",
        "O Módulo do Transdutor no casco.",
        "O circuito da Chave TR.",
        "A fonte de alimentação primária A3."
      ],
      answer: "A Unidade Master Display.",
      explanation: "A Master Display centraliza as informações processadas pela Unidade Eletrônica e envia os dados para repetidoras e outros sistemas do navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais componentes estão localizados no submódulo A1 da Unidade Master Display?",
      options: [
        "O painel LCD, o teclado tátil de controle e o microprocessador local de visualização.",
        "Os amplificadores de potência de 10 Watts para o transdutor submarino.",
        "Os transformadores primários e a entrada da rede CA do navio.",
        "Os cristais piezoelétricos receptores de proa e popa."
      ],
      answer: "O painel LCD, o teclado tátil de controle e o microprocessador local de visualização.",
      explanation: "O submódulo A1 concentra a interface homem-máquina da ponte: o display LCD, as teclas de controle e a CPU responsável pelo painel.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como a Master Display transmite o pulso de distância percorrida para repetidoras eletromecânicas convencionais?",
      options: [
        "Através do fechamento de contatos de relés secos na unidade.",
        "Via conexão de fibra óptica de alta velocidade.",
        "Através de áudio em rede de telefonia interna.",
        "Por transmissão de rádio FM na frequência de 2 MHz."
      ],
      answer: "Através do fechamento de contatos de relés secos na unidade.",
      explanation: "Para compatibilidade com repetidoras de passadiço eletromecânicas, a Master Display fornece saída por fechamento de contatos de relés.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do botão interno 'Master Reset' presente nas placas lógicas do SRD-331?",
      options: [
        "Reiniciar o processador lógico em caso de travamento sem desligar a alimentação principal.",
        "Apagar o histórico de navegação permanente da embarcação.",
        "Calibrar a potência de saída de RF para 10 Watts.",
        "Testar a carga das baterias da Master Display."
      ],
      answer: "Reiniciar o processador lógico em caso de travamento sem desligar a alimentação principal.",
      explanation: "O botão Master Reset nas placas A1/A2 permite reinicializar os microprocessadores diretamente durante a busca de avarias.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Por que é importante pressionar a tecla 'OPERATE' após realizar ajustes no painel (como iluminação ou teste)?",
      options: [
        "Para retornar o sistema ao modo normal de medição e evitar alterações acidentais de parâmetros.",
        "Para iniciar a calibração automática do transdutor no mar.",
        "Para desligar a alimentação de alta tensão das repetidoras.",
        "Para zerar o acumulador de milhas navegadas."
      ],
      answer: "Para retornar o sistema ao modo normal de medição e evitar alterações acidentais de parâmetros.",
      explanation: "A tecla OPERATE restabelece a operação normal e bloqueia teclas de ajuste numérico contra comandos acidentais.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual indicador no display informa ao operador que a leitura apresentada na tela central representa a velocidade em nós?",
      options: [
        "A letra 'K' iluminada no painel.",
        "A letra 'M' piscando na tela.",
        "Um bipe sonoro contínuo de 1 segundo.",
        "A palavra 'TEST' acesa em vermelho."
      ],
      answer: "A letra 'K' iluminada no painel.",
      explanation: "O indicador 'K' iluminado indica visualmente que o valor exibido corresponde a nós (Knots).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O que o sistema verifica durante a sequência de auto-teste ativada pela tecla 'TEST'?",
      options: [
        "A integridade lógica da Master Display, da Unidade Eletrônica e da comunicação entre elas.",
        "O desgaste mecânico das pás da roda do transdutor de quilha.",
        "A temperatura da água do mar e a salinidade ao redor do casco.",
        "A calibração do radar de navegação do navio."
      ],
      answer: "A integridade lógica da Master Display, da Unidade Eletrônica e da comunicação entre elas.",
      explanation: "O auto-teste verifica as CPUs da Master Display e da Unidade Eletrônica, bem como o cabo e a comunicação serial entre as unidades.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função conceitual do comparador U17 no processamento dos sinais do Doppler Gate?",
      options: [
        "Converter os sinais de retorno recebidos em pulsos digitais padrão TTL em fase para o microprocessador.",
        "Gerar a tensão de 115 VCA para a fonte principal do equipamento.",
        "Medir a distância percorrida pelo navio em milhas náuticas.",
        "Proteger o painel frontal contra curtos-circuitos."
      ],
      answer: "Converter os sinais de retorno recebidos em pulsos digitais padrão TTL em fase para o microprocessador.",
      explanation: "O comparador U17 padroniza os sinais analógicos do receptor em ondas quadradas TTL em fase com o sinal principal para a leitura lógica.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quando o operador seleciona a inserção manual de velocidade no painel, o que ocorre com o módulo transdutor?",
      options: [
        "O transdutor continua emitindo pulsos normalmente, mas a CPU ignora os dados acústicos e usa a velocidade digitada.",
        "O transdutor é totalmente desligado para economizar energia do navio.",
        "A frequência acústica é alterada automaticamente para 12 MHz.",
        "O transdutor é içado para dentro do casco do navio."
      ],
      answer: "O transdutor continua emitindo pulsos normalmente, mas a CPU ignora os dados acústicos e usa a velocidade digitada.",
      explanation: "No Modo Manual, os transdutores e amplificadores permanecem energizados e ativos, porém o processador desconsidera o eco da água e calcula a distância a partir do valor inserido manualmente.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "De acordo com o manual técnico, qual procedimento é obrigatório após a substituição de uma placa eletrônica (A1 ou A2)?",
      options: [
        "Realizar o procedimento de alinhamento e calibração funcional dos circuitos da placa substituída.",
        "Substituir também o cabo TTRS do transdutor.",
        "Manter o equipamento desligado por 24 horas antes de religar.",
        "Pintar a lente de poliestireno do transdutor com resina protetora."
      ],
      answer: "Realizar o procedimento de alinhamento e calibração funcional dos circuitos da placa substituída.",
      explanation: "O manual preconiza que toda substituição das placas A1 ou A2 seja seguida por rotinas de calibração e alinhamento para garantir a precisão operacional.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do estágio de acoplamento do receptor (Q14/T9) antes do demodulador?",
      options: [
        "Fornecer uma saída balanceada de baixa impedância para alimentar o comparador de limiar sem ruído.",
        "Elevar a frequência recebida de 2 MHz para 12 MHz.",
        "Desligar os cristais receptores durante a navegação manual.",
        "Medir a tensão da bateria auxiliar do display."
      ],
      answer: "Fornecer uma saída balanceada de baixa impedância para alimentar o comparador de limiar sem ruído.",
      explanation: "O transistor Q14 acoplado ao transformador T9 produz um sinal balanceado de baixa impedância adequado para o demodulador U3.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a precaução de segurança obrigatória para o transdutor antes do esvaziamento de um dique seco?",
      options: [
        "Recolher o transdutor para o interior do casco e fechar firmemente a válvula de fundo.",
        "Desconectar os cabos de alimentação de 115 VCA no painel da ponte.",
        "Cobrir a lente do transdutor com graxa marítima e resina epóxi.",
        "Ligar a alimentação em modo contínuo para evitar o resfriamento dos cristais."
      ],
      answer: "Recolher o transdutor para o interior do casco e fechar firmemente a válvula de fundo.",
      explanation: "Para prevenir danos mecânicos graves ao transdutor durante a drenagem do dique, é obrigatório recolhê-lo e fechar a válvula de fundo antes de esvaziar a doca.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Por que o manual proíbe o uso de espátulas metálicas, lixas ou solventes na limpeza da lente do transdutor?",
      options: [
        "Porque riscos ou ataques químicos alteram as propriedades de refração acústica da lente de poliestireno, causando erros de medição.",
        "Porque podem gerar eletricidade estática que queima o fusível principal FS1.",
        "Porque removem a camada magnética que orienta a proa do navio.",
        "Porque causam curto-circuito interno na blindagem do cabo TTRS."
      ],
      answer: "Porque riscos ou ataques químicos alteram as propriedades de refração acústica da lente de poliestireno, causando erros de medição.",
      explanation: "A lente de poliestireno possui propriedades refrativas precisas para 2 MHz; arranhões profundos ou produtos agressivos degradam a propagação sonora.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o papel do circuito integrado U21 na Unidade Eletrônica?",
      options: [
        "Armazenar o firmware de controle e gerenciar portas de entrada/saída (I/O) de sinais de temporização.",
        "Amplificar a corrente de alimentação principal do navio.",
        "Exibir caracteres no visor de cristal líquido da ponte de comando.",
        "Converter diretamente os sinais analógicos do mar em áudio."
      ],
      answer: "Armazenar o firmware de controle e gerenciar portas de entrada/saída (I/O) de sinais de temporização.",
      explanation: "O CI U21 integra memória EPROM (com as rotinas operacionais) e portas de I/O programáveis que auxiliam na temporização dos circuitos.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Por meio de qual fenômeno físico os cristais piezoelétricos convertem a pressão da onda sonora refletida em sinal elétrico?",
      options: [
        "Efeito piezoelétrico (geração de tensão elétrica proporcional à pressão mecânica aplicada no cristal).",
        "Efeito termelétrico (variação de temperatura causada pela água salgada).",
        "Efeito fotoelétrico (incidência de fótons marinhos no transdutor).",
        "Efeito de Hall (alteração do fluxo magnético no fundo marítimo)."
      ],
      answer: "Efeito piezoelétrico (geração de tensão elétrica proporcional à pressão mecânica aplicada no cristal).",
      explanation: "A pressão mecânica das ondas sonoras exercida sobre a estrutura do cristal piezoelétrico induz uma diferença de potencial elétrico em seus terminais.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O cálculo do desvio Doppler realizado pelo processador apresenta diferença ao refletir em partículas minerais ou em organismos marinhos (plâncton)?",
      options: [
        "Não, qualquer partícula ou organismo em suspensão reflete o sinal sônico de 2 MHz e gera desvio Doppler proporcional à velocidade relativa.",
        "Sim, reflexões orgânicas são filtradas automaticamente por apresentarem frequência harmônica de 400 Hz.",
        "Sim, o sistema só calcula a velocidade quando o eco provém de fundo rochoso ou arenoso.",
        "Não, porém o ganho do amplificador é reduzido pela metade em águas com plâncton."
      ],
      answer: "Não, qualquer partícula ou organismo em suspensão reflete o sinal sônico de 2 MHz e gera desvio Doppler proporcional à velocidade relativa.",
      explanation: "O odômetro Doppler funciona por espalhamento em massa d'água (volume scattering); qualquer partícula ou microrganismo em suspensão reflete o som de 2 MHz igualmente para o cálculo de velocidade.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual o princípio fundamental de operação do Odômetro SRD-331 para se determinar a velocidade do navio em relação à água?",
      options: [
        "Mudança da frequência das ondas de som pelo efeito Doppler, comparando sinais acústicos transmitidos e refletidos pela massa d'água.",
        "Variação de fase por indução magnética entre eletrodos no casco em contato com a água salgada.",
        "Medição direta de tempo de voo de pulsos ultrassônicos de 12 MHz refletidos diretamente no fundo do mar.",
        "Aferição diferencial de pressão hidrostática exercida nos cristais piezoelétricos de proa e popa."
      ],
      answer: "Mudança da frequência das ondas de som pelo efeito Doppler, comparando sinais acústicos transmitidos e refletidos pela massa d'água.",
      explanation: "O SRD-331 fundamenta seu funcionamento no efeito Doppler acústico, em que a frequência da onda sonora refletida pelas partículas na água sofre desvio proporcional à velocidade do navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Cite as três unidades principais que compõem o sistema do Odômetro SRD-331:",
      options: [
        "Módulo do Transdutor, Unidade Eletrônica e Unidade Master Display.",
        "Caixa de Junção TB1, Repetidora de Passadiço e Módulo de Bateria Auxiliar.",
        "Unidade Transceptora A1, Processador Doppler Gate A2 e Fonte Chaveada A3.",
        "Transdutor de Quilha, Girocompasso Digital e Unidade Indicadora Remota."
      ],
      answer: "Módulo do Transdutor, Unidade Eletrônica e Unidade Master Display.",
      explanation: "A arquitetura do SRD-331 é dividida nessas três unidades principais: o Transdutor (no casco), a Unidade Eletrônica (processamento) e a Master Display (interface e controle).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O que define corretamente o Efeito Doppler no contexto de ondas acústicas?",
      options: [
        "Mudança da frequência percebida de uma onda quando a fonte emissora e o receptor estão em movimento relativo um em relação ao outro.",
        "Atenuação logarítmica da amplitude acústica ao atravessar camadas de diferentes densidades térmicas.",
        "Reflexão total do feixe ultrassônico quando incide com ângulo superior a 45 graus na camada limite.",
        "Conversão de pulsos elétricos de alta voltagem em ondas mecânicas de compressão por meio de cristais de quartzo."
      ],
      answer: "Mudança da frequência percebida de uma onda quando a fonte emissora e o receptor estão em movimento relativo um em relação ao outro.",
      explanation: "O efeito Doppler é o desvio aparente na frequência de uma onda causado pelo movimento relativo entre o emissor e o elemento refletor/receptor.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual a função precípua do Microprocessador na Unidade Eletrônica do SRD-331?",
      options: [
        "Realizar os cálculos matemáticos para determinar o vetor de velocidade de proa e de popa a partir dos sinais de retorno modificados pelo efeito Doppler.",
        "Gerar a potência de 10 Watts em 2 MHz para excitar diretamente as cerâmicas piezoelétricos do transdutor.",
        "Converter a tensão contínua da bateria de 32 VDC em tensões reguladas de 5 VDC e 12 VDC para o painel.",
        "Demodular o sinal analógico de áudio em níveis de limiar TTL por meio do circuito comparador U17."
      ],
      answer: "Realizar os cálculos matemáticos para determinar o vetor de velocidade de proa e de popa a partir dos sinais de retorno modificados pelo efeito Doppler.",
      explanation: "O microprocessador atua processando as contagens de tempo/frequência fornecidas pelo circuito Doppler Gate para calcular a velocidade vetorial e compensar o movimento do navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o modelo do microprocessador utilizado na Unidade Eletrônica do SRD-331?",
      options: [
        "8085",
        "Z80",
        "68000",
        "8086"
      ],
      answer: "8085",
      explanation: "O cérebro lógico da Unidade Eletrônica do SRD-331 é o microprocessador Intel 8085 (U19).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais são as tensões e frequências de alimentação primária CA aceitas pela Unidade Eletrônica do SRD-331?",
      options: [
        "100, 115 ou 230 VCA em 50 ou 60 Hz.",
        "24 ou 48 VCC contínuos.",
        "440 VCA trifásico em 60 ou 400 Hz.",
        "115 VCA exclusivamente em 400 Hz."
      ],
      answer: "100, 115 ou 230 VCA em 50 ou 60 Hz.",
      explanation: "A fonte de alimentação interna é configurável para operar com a rede do navio em 100, 115 ou 230 VCA nas frequências de 50 ou 60 Hz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quem controla o chaveamento da alimentação primária na Unidade Eletrônica durante a operação normal?",
      options: [
        "Um relé de controle interno que opera comandado por sinais enviados pela Unidade Master Display.",
        "O disjuntor térmico principal localizado diretamente no painel frontal da Unidade Eletrônica.",
        "O circuito temporizador do microprocessador 8085 após o boot da EPROM U21.",
        "A chave magnética acionada pela pressão hidrostática da válvula de fundo do transdutor."
      ],
      answer: "Um relé de controle interno que opera comandado por sinais enviados pela Unidade Master Display.",
      explanation: "A energização da Unidade Eletrônica é comandada remotamente pela Master Display através de um relé na Unidade Eletrônica.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o diferencial da Unidade Master Display em relação às Unidades Indicadoras Remotas quanto à retenção de dados?",
      options: [
        "A Master Display dispõe de uma bateria interna que retém os dados da distância acumulada por um período mínimo de 10 minutos na falta de energia.",
        "A Master Display utiliza memória EPROM flash para armazenar indefinidamente o histórico de navegação dos últimos 30 dias.",
        "As Indicadoras Remotas possuem baterias independentes, enquanto a Master Display depende exclusivamente do gerador principal.",
        "A Master Display armazena a velocidade instantânea em fita magnética interna em caso de queda de tensão."
      ],
      answer: "A Master Display dispõe de uma bateria interna que retém os dados da distância acumulada por um período mínimo de 10 minutos na falta de energia.",
      explanation: "O circuito de suporte a bateria da Master Display garante que a contagem de milhas acumuladas não seja perdida durante cortes de energia de até 10 minutos.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a potência de pulso de saída e a frequência operacional do transdutor do SRD-331?",
      options: [
        "10 Watts em 2 MHz.",
        "50 Watts em 400 kHz.",
        "100 Watts em 12 MHz.",
        "5 Watts em 1,5 MHz."
      ],
      answer: "10 Watts em 2 MHz.",
      explanation: "O transmissor gera pulsos de radiofrequência acústica de 2 MHz com potência nominal de 10 Watts durante a rajada de disparo.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Resuma a função global da Unidade Eletrônica no sistema SRD-331:",
      options: [
        "Estimular os cristais a transmitirem energia ultrassônica e processar o sinal elétrico produzido pelos cristais quando recebem o eco ultrassônico refletido.",
        "Apenas exibir os dados de velocidade no display digital e enviar repetidoras em protocolo NMEA 0183.",
        "Atuar exclusivamente como fonte de alimentação chaveada para o Módulo do Transdutor e aquecimento das lentes.",
        "Filtrar ruídos de fundo estáticos da rede de 115 VCA antes de alimentar o painel do passadiço."
      ],
      answer: "Estimular os cristais a transmitirem energia ultrassônica e processar o sinal elétrico produzido pelos cristais quando recebem o eco ultrassônico refletido.",
      explanation: "A Unidade Eletrônica concentra tanto a geração dos pulsos de excitação ultrassônica quanto a amplificação, demodulação e computação lógica do eco Doppler.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual módulo/cartão da Unidade Eletrônica é responsável pelo controle de entrada e saída dos sinais de RF com o transdutor?",
      options: [
        "Conjunto Transmissor/Receptor de RF (Cartão A1).",
        "Módulo de Processamento e Porta Doppler (Cartão A2).",
        "Fonte de Alimentação Primária (Cartão A3).",
        "Placa de Interface de Painel (Cartão A5)."
      ],
      answer: "Conjunto Transmissor/Receptor de RF (Cartão A1).",
      explanation: "O Cartão A1 aloja os amplificadores de potência de transmissão de RF e os estágios pré-amplificadores de recepção que se conectam ao transdutor.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Descreva a síntese do ciclo de funcionamento do Odômetro SRD-331:",
      options: [
        "Opera pela transmissão de pulsos ultrassônicos de curta duração e detecção do eco de retorno alterado pelo efeito Doppler; os sinais são processados pelo microprocessador para calcular a velocidade em relação à água.",
        "Emite feixes contínuos de luz laser de proa a popa, medindo a refração na água salgada para inferir o deslocamento do navio.",
        "Mede a variação de capacitância mecânica gerada pelo arrasto da água sobre uma roda de pás instalada no fundo do casco.",
        "Utiliza radares de superfície pulsados a 12 GHz para correlacionar a velocidade relativa das ondas na proa com o GPS."
      ],
      answer: "Opera pela transmissão de pulsos ultrassônicos de curta duração e detecção do eco de retorno alterado pelo efeito Doppler; os sinais são processados pelo microprocessador para calcular a velocidade em relação à água.",
      explanation: "O princípio de operação baseia-se na emissão pulsada, escuta do retorno acústico defasado por efeito Doppler e computação digital da velocidade.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em termos de canais acústicos, a função de transmissão do SRD-331 consiste em:",
      options: [
        "Dois canais idênticos (canal dianteiro/proa e canal traseiro/popa).",
        "Quatro canais multiplexados (proa, popa, bombordo e boreste).",
        "Um único canal omnidirecional operando por varredura contínua.",
        "Três canais defasados em 120 graus para cálculo tridimensional."
      ],
      answer: "Dois canais idênticos (canal dianteiro/proa e canal traseiro/popa).",
      explanation: "O sistema opera com dois canais acústicos simétricos apontados em ângulos opostos (vante e ré) para anular vetores verticais de balanço do navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função do circuito 'Doppler Gate' (Porta Doppler) na arquitetura do sistema?",
      options: [
        "Determinar com precisão a diferença de frequência entre o sinal acústico dianteiro recebido e o sinal traseiro recebido.",
        "Bloquear a entrada de tensões acima de 230 VCA na fonte de alimentação primária.",
        "Chavear automaticamente o equipamento para o modo de velocidade manual na falta do sinal de GPS.",
        "Sincronizar a varredura do display LCD com a taxa de atualização dos relés eletromecânicos."
      ],
      answer: "Determinar com precisão a diferença de frequência entre o sinal acústico dianteiro recebido e o sinal traseiro recebido.",
      explanation: "O Doppler Gate é o circuito digital que temporiza e compara os cruzamentos de zero dos ecos de vante e ré para extrair a diferença de frequência Doppler.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "As funções de fonte de alimentação e controle de energia na Unidade Eletrônica estão distribuídas em três submódulos. Quais são eles?",
      options: [
        "Submódulos A3, A4 e A5.",
        "Submódulos A1, A2 e A3.",
        "Submódulos U19, U20 e U21.",
        "Submódulos TB1, TB2 e TB3."
      ],
      answer: "Submódulos A3, A4 e A5.",
      explanation: "Na Unidade Eletrônica, os cartões A1 e A2 cuidam de RF e processamento, enquanto os submódulos A3, A4 e A5 gerenciam a fonte e controle de alimentação.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O Odômetro SRD-331 é classificado como um sistema compacto essencialmente controlado por:",
      options: [
        "Microprocessador.",
        "Amplificadores magnéticos analógicos.",
        "Válvulas termiônicas de alta potência.",
        "Relés eletromecânicos temporizados a motor."
      ],
      answer: "Microprocessador.",
      explanation: "A arquitetura do SRD-331 é baseada no controle lógico digital centralizado por microprocessador (Intel 8085).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "A aferição/medição das frequências recebidas pelos canais dianteiro e traseiro é realizada por meio de:",
      options: [
        "Circuitos contadores dedicados localizados na Unidade Eletrônica.",
        "Filtros passa-faixa analógicos passivos no painel do Master Display.",
        "Galvanômetros diferenciais acoplados aos transformadores do transdutor.",
        "Comparadores ópticos infravermelhos na caixa de terminais TB1."
      ],
      answer: "Circuitos contadores dedicados localizados na Unidade Eletrônica.",
      explanation: "Os circuitos contadores digitais da placa A2 quantificam os cruzamentos de zero e os pulsos de clock de 12 MHz para mensurar as frequências.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual componente lógico é o responsável direto por analisar a diferença matemática entre as frequências recebidas pelos dois canais?",
      options: [
        "Microprocessador 8085.",
        "Demodulador de limiar U3.",
        "Contador de Ripple U13.",
        "Transistor de Buffer Q13."
      ],
      answer: "Microprocessador 8085.",
      explanation: "Após os contadores capturarem os tempos de 2048 ciclos, a CPU 8085 calcula a diferença matemática que representa a velocidade.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual cristal piezoelétrico do transdutor é designado especificamente para transmitir e receber feixes acústicos na direção de POPA do navio?",
      options: [
        "Cristal Y2.",
        "Cristal Y1.",
        "Transformador T1.",
        "Transistor Q14."
      ],
      answer: "Cristal Y2.",
      explanation: "Na nomenclatura do SRD-331, o cristal Y1 aponta para vante (proa) e o cristal Y2 aponta para ré (popa).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a função dos transformadores T1 e T2 e onde estão localizados no sistema SRD-331?",
      options: [
        "Casar a impedância do cabo do transdutor com a dos cristais para máxima eficiência de sinal; estão fixados no submódulo interno do conjunto do Transdutor.",
        "Retificar a corrente alternada de 115 VCA em 32 VCC; estão fixados na placa A3 da Unidade Eletrônica.",
        "Isolar oticamente o sinal das repetidoras remotas; estão instalados na placa A2 da Master Display.",
        "Gerar o pulso de clock principal de 12 MHz; estão alojados na placa do microprocessador A2."
      ],
      answer: "Casar a impedância do cabo do transdutor com a dos cristais para máxima eficiência de sinal; estão fixados no submódulo interno do conjunto do Transdutor.",
      explanation: "T1 e T2 ficam dentro do módulo do transdutor no casco para garantir o casamento de impedância perfeito entre os cristais piezoelétricos e o cabo TTRS de 9,2m.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "A Unidade Master Display é composta por dois submódulos (A1 e A2). Qual deles aloja os relés de controle de alimentação, transformador, filtro de linha e placa de terminais?",
      options: [
        "Submódulo A2.",
        "Submódulo A1.",
        "Cartão A3.",
        "Painel de LCD frontal."
      ],
      answer: "Submódulo A2.",
      explanation: "No Master Display, o A1 contém o processador do painel e teclado, enquanto o A2 concentra os circuitos de potência, filtros e terminais de interconexão.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "No Odômetro SRD-331, a fonte emissora/receptora de som no casco do navio é composta por um transdutor dotado de dois:",
      options: [
        "Cristais Piezoelétricos.",
        "Alto-falantes magnetostritivos de ferrite.",
        "Microfones de condensador de eletreto.",
        "Eletrodos galvânicos de titânio."
      ],
      answer: "Cristais Piezoelétricos.",
      explanation: "Os elementos transdutores acústicos que emitem e captam o som no mar são pastilhas cristalinas piezoelétricas de alta eficiência.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a essência do trabalho executado pela eletrônica do SRD-331 sobre os sinais ultrassônicos?",
      options: [
        "Determinar a diferença de frequência entre os dois canais acústicos e utilizá-la para computar a velocidade do navio.",
        "Medir o tempo absoluto de viagem do som até o fundo marinho para traçar o perfil batimétrico.",
        "Comparar a atenuação de amplitude entre proa e popa para determinar a salinidade da água.",
        "Modular em amplitude a onda portadora de 12 MHz para comunicação de voz submarina."
      ],
      answer: "Determinar a diferença de frequência entre os dois canais acústicos e utilizá-la para computar a velocidade do navio.",
      explanation: "A função primordial dos circuitos eletrônicos do odômetro é extrair o desvio Doppler (diferença de frequência vante/ré) e convertê-lo em nós navegados.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como se define tecnicamente a Unidade Eletrônica do SRD-331?",
      options: [
        "É um módulo eletrônico controlado por microprocessador que abriga dois circuitos idênticos de transmissores de RF, receptores e amplificadores.",
        "É um painel eletromecânico passivo de distribuição que interliga o girocompasso às repetidoras de passadiço.",
        "É uma caixa de baterias seladas destinada a alimentar o transdutor em caso de colapso do gerador do navio.",
        "É um console de radar que sintetiza imagens acústicas de obstáculos submersos à frente da proa."
      ],
      answer: "É um módulo eletrônico controlado por microprocessador que abriga dois circuitos idênticos de transmissores de RF, receptores e amplificadores.",
      explanation: "A Unidade Eletrônica é o gabinete processador principal contendo os canais duplos de transcepção ultrassônica e a CPU.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais são as características físicas essenciais da fonte de som do SRD-331?",
      options: [
        "Transdutor montado em válvula de fundo no casco do navio abrigando dois cristais piezoelétricos.",
        "Par de antenas de corneta metálica fixadas no mastro principal da embarcação.",
        "Conjunto de tubos de Pitot de aço inoxidável montados nas aletas de balanço.",
        "Cápsula rebocada na popa com cabo de fibra óptica de 150 metros."
      ],
      answer: "Transdutor montado em válvula de fundo no casco do navio abrigando dois cristais piezoelétricos.",
      explanation: "O transdutor acústico fica instalado na obra viva através de uma válvula de fundo de casco e contém as cerâmicas piezoelétricas direcionadas.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o procedimento correto recomendado no manual para a limpeza da superfície do painel frontal da Master Display?",
      options: [
        "Limpar suavemente com álcool isopropílico e um tecido de algodão macio.",
        "Esfregar com esponja abrasiva e detergente amoníaco concentrado.",
        "Aplicar jato de vapor de água quente sob pressão para remover oleosidade.",
        "Utilizar lixa fina para polimento de plásticos seguida de acetona pura."
      ],
      answer: "Limpar suavemente com álcool isopropílico e um tecido de algodão macio.",
      explanation: "Para preservar a película do teclado e o visor de cristal líquido sem arranhões ou ataque químico, recomenda-se apenas álcool e tecido de algodão macio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Dentre as precauções vitais com o transdutor em período de docagem, a superfície acústica (lente) JAMAIS deve ser:",
      options: [
        "Pintada com tinta anti-incrustante ou qualquer revestimento.",
        "Lavada com água doce em temperatura ambiente.",
        "Limpa com detergente neutro e esponja macia.",
        "Inspecionada visualmente sob iluminação de lanterna."
      ],
      answer: "Pintada com tinta anti-incrustante ou qualquer revestimento.",
      explanation: "Qualquer camada de tinta ou produto químico aplicada sobre a lente de poliestireno modifica sua impedância acústica e impede a transmissão/recepção do ultrassom.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais teclas no painel Master Display controlam o ajuste do nível de iluminação (brilho) do visor?",
      options: [
        "A tecla 'INTENSITY', que ao ser pressionada habilita as teclas 'INCREASE' (aumentar) e 'DECREASE' (diminuir).",
        "O botão rotativo mecânico 'DIMMER' localizado na lateral esquerda da caixa.",
        "As teclas 'RESET MILES' pressionadas simultaneamente com 'KNOT/MILES'.",
        "A chave de alavanca 'BRIGHT/DIM' na placa traseira A2."
      ],
      answer: "A tecla 'INTENSITY', que ao ser pressionada habilita as teclas 'INCREASE' (aumentar) e 'DECREASE' (diminuir).",
      explanation: "No teclado digital, pressionar INTENSITY desbloqueia temporariamente as teclas de seta (INCREASE/DECREASE) para ajustar o brilho do LCD.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a profundidade mínima de água abaixo do casco exigida para o processamento confiável dos sinais do SRD-331?",
      options: [
        "1,6 metros.",
        "0,3 metros.",
        "10,0 metros.",
        "5,5 metros."
      ],
      answer: "1,6 metros.",
      explanation: "A profundidade mínima operacional para que o sinal acústico escape da camada limite e retorne no tempo correto de processamento é 1,6 metros.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a distância máxima abaixo do transdutor em que os retornos acústicos de partículas na água são processados?",
      options: [
        "4,8 metros.",
        "100 metros.",
        "25 metros.",
        "1,2 metros."
      ],
      answer: "4,8 metros.",
      explanation: "A janela de temporização de recepção (WTGTE) limita o processamento das reflexões na coluna d'água até a profundidade máxima de 4,8 metros abaixo da quilha.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Defina o que é um cristal piezoelétrico conforme aplicado em transdutores navais:",
      options: [
        "Cristal que, quando submetido a pressão mecânica, gera um campo/tensão elétrica em um eixo transversal, e vice-versa.",
        "Material cerâmico que emite luz azulada intensa ao ser percorrido por corrente contínua de 10 Watts.",
        "Semicondutor de silício que altera sua condutividade elétrica proporcionalmente à salinidade do meio submerso.",
        "Polímero sintético que absorve ondas de rádio de 2 MHz convertendo-as em calor mensurável."
      ],
      answer: "Cristal que, quando submetido a pressão mecânica, gera um campo/tensão elétrica em um eixo transversal, e vice-versa.",
      explanation: "A piezoeletricidade é a propriedade da conversão mútua entre estresse mecânico (pressão acústica) e diferença de potencial elétrico.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O módulo do transdutor externo é constituído fisicamente por quais itens?",
      options: [
        "Um transdutor de eixo simples e um conjunto integral de cabo especial de 9,2 metros.",
        "Um par de esferas de titânio soltas e cabo coaxial comum de 50 metros.",
        "Uma caixa pré-amplificadora submersa acoplada a mangueira hidráulica dupla.",
        "Quatro hastes de latão rosqueadas com conectores BNC abertos à água."
      ],
      answer: "Um transdutor de eixo simples e um conjunto integral de cabo especial de 9,2 metros.",
      explanation: "O conjunto é formado pelo corpo do transdutor com sua lente/cristais e um cabo especial blindado de 9,2 metros de comprimento.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o procedimento sequencial exato no teclado do Master Display para zerar (resetar) a distância acumulada em milhas?",
      options: [
        "Pressionar a tecla 'RESET MILES' duas vezes consecutivas dentro de um intervalo máximo de 5 segundos.",
        "Manter pressionada a tecla 'POWER OFF' simultaneamente com 'OPERATE' por 15 segundos.",
        "Pressionar uma única vez a tecla 'TEST' enquanto o navio estiver com velocidade zero.",
        "Desligar o disjuntor principal de 115 VCA por 10 minutos para descarregar a bateria."
      ],
      answer: "Pressionar a tecla 'RESET MILES' duas vezes consecutivas dentro de um intervalo máximo de 5 segundos.",
      explanation: "Como proteção contra zeragem acidental, o sistema exige o duplo acionamento da tecla RESET MILES dentro de uma janela de 5 segundos.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais unidades do sistema englobam fisicamente as funções completas de transmissão e recepção acústica?",
      options: [
        "Conjunto do Transdutor e Unidade Eletrônica.",
        "Unidade Master Display e Repetidoras de Passadiço.",
        "Caixa de Alimentação A3 e Painel de Baterias.",
        "Girocompasso e Interface NMEA de Navegação."
      ],
      answer: "Conjunto do Transdutor e Unidade Eletrônica.",
      explanation: "A cadeia completa de excitação, emissão acústica na água, captação e amplificação ocorre na interface entre o Transdutor e a Unidade Eletrônica.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o período total do ciclo de temporização contínuo de transmissão e recepção do SRD-331?",
      options: [
        "7,7 milissegundos.",
        "1,1 milissegundos.",
        "100 milissegundos.",
        "0,55 milissegundos."
      ],
      answer: "7,7 milissegundos.",
      explanation: "O ciclo mestre repetitivo do sistema dura exatos 7,7 ms (compreendendo o pulso de transmissão de 1,1 ms seguido da escuta e processamento).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais são os instrumentos e componentes de bancada prescritos para a rotina completa de busca de avarias e alinhamento do SRD-331?",
      options: [
        "Osciloscópio (mín. 2 MHz e sensibilidade 10 mV/cm), Multímetro Digital, chaves de fenda/Philips e dois resistores de carga de 90 Ohms (2 Watts).",
        "Analisador de Espectro de 10 GHz, Gerador de Varredura de RF e ponta lógica diferencial de 500 MHz.",
        "Megômetro de 5.000 Volts, Década Resistiva de Precisão e Termômetro Infravermelho.",
        "Ponte RLC digital, Frequencímetro Atômico de Rubídio e Simulador de Ecos Acústicos de 400 Hz."
      ],
      answer: "Osciloscópio (mín. 2 MHz e sensibilidade 10 mV/cm), Multímetro Digital, chaves de fenda/Philips e dois resistores de carga de 90 Ohms (2 Watts).",
      explanation: "O manual especifica o osciloscópio de 2 MHz, multímetro e o par de resistores de 90 Ohms para simular a carga diferencial dos cristais nos testes em bancada.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O que acontece logicamente no circuito Doppler Gate quando os contadores de cruzamento em zero (dianteiro e traseiro) atingem a contagem de 2048?",
      options: [
        "As saídas 'Qd' vão ao nível alto e são combinadas em uma porta lógica AND, cuja saída produz o sinal de contagem pronta ('CTR RDY') para gerar interrupção na CPU.",
        "Um relé térmico é disparado para desligar o amplificador push-pull de 10 Watts por 5 segundos.",
        "A memória EPROM U21 apaga automaticamente o buffer temporário da exibição no LCD.",
        "O oscilador de 12 MHz é multiplicado por dois para iniciar a calibração de profundidade."
      ],
      answer: "As saídas 'Qd' vão ao nível alto e são combinadas em uma porta lógica AND, cuja saída produz o sinal de contagem pronta ('CTR RDY') para gerar interrupção na CPU.",
      explanation: "Ao atingir 2048 cruzamentos em zero válidos, as saídas Qd sinalizam à porta AND que o período de amostragem terminou, avisando o processador para ler os dados.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Por que o cabo de interconexão do transdutor é construído com blindagem especial do tipo TTRS?",
      options: [
        "Para evitar e rejeitar eficazmente Interferências Eletromagnéticas (EMI) geradas no ambiente de bordo do navio.",
        "Para resistir a temperaturas de até 500 °C em caso de incêndio na casa de máquinas.",
        "Para permitir flexão contínua em torção mecânica acionada pelo leme.",
        "Para conduzir tensões trifásicas de 440 VCA sem necessidade de conduíte metálico."
      ],
      answer: "Para evitar e rejeitar eficazmente Interferências Eletromagnéticas (EMI) geradas no ambiente de bordo do navio.",
      explanation: "Sinais piezoelétricos de eco em milivolts são altamente sensíveis a ruídos; o cabo TTRS blindado impede que a EMI do navio cause erros de medição.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Além dos controles remotos na Master Display, existe uma chave de serviço interna na Unidade Eletrônica. Qual é sua finalidade?",
      options: [
        "Alimentar e desalimentar localmente a Unidade Eletrônica durante rotinas de teste e reparo técnico de bancada.",
        "Inverter a polaridade da bateria auxiliar de 10 minutos para recarga rápida.",
        "Chavear a frequência acústica de 2 MHz para 400 kHz em águas profundas.",
        "Desconectar o aterramento do casco para medição de resistência de isolamento."
      ],
      answer: "Alimentar e desalimentar localmente a Unidade Eletrônica durante rotinas de teste e reparo técnico de bancada.",
      explanation: "Essa chave de serviço interna permite que o técnico ligue ou desligue o gabinete eletrônico localmente no compartimento técnico sem depender do passadiço.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como se comportam os circuitos transmissores/receptores e o transdutor quando o operador seleciona o modo de VELOCIDADE MANUAL?",
      options: [
        "Permanecem totalmente ativos emitindo e recebendo pulsos, porém o microprocessador ignora os dados dos ecos recebidos da água.",
        "São completamente desenergizados para economizar energia do navio e preservar os cristais.",
        "Reduzem a frequência de disparo para um pulso a cada 10 segundos apenas como autoteste.",
        "Comutam o feixe de 2 MHz para uma carga resistiva fictícia ('Dummy Load') dentro da placa A1."
      ],
      answer: "Permanecem totalmente ativos emitindo e recebendo pulsos, porém o microprocessador ignora os dados dos ecos recebidos da água.",
      explanation: "No modo manual, os estágios acústicos continuam funcionando normalmente na água; a única alteração ocorre no software, que despreza a contagem Doppler e usa a velocidade inserida.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em qual cartão/módulo da Unidade Eletrônica ocorre a temporização do ciclo e a geração lógica do sinal portador de 2 MHz?",
      options: [
        "Circuito do Módulo do Processador e Porta Doppler (Cartão A2).",
        "Circuito de Pré-Amplificação e Chave TR (Cartão A1).",
        "Placa de Filtros de Entrada CA (Cartão A3).",
        "Painel Frontal de Controle (Cartão A5)."
      ],
      answer: "Circuito do Módulo do Processador e Porta Doppler (Cartão A2).",
      explanation: "O cartão A2 contém o oscilador principal, divisores de ripple e o microprocessador, comandando a temporização de todos os disparos de 2 MHz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em qual placa/cartão ocorre a amplificação final de potência do sinal de transmissão de RF antes do envio à água?",
      options: [
        "Circuito do Módulo Transmissor/Receptor de RF (Cartão A1).",
        "Módulo Processador Digital (Cartão A2).",
        "Placa da Fonte Chaveada (Cartão A4).",
        "Interface Óptica Isolada (Cartão A6)."
      ],
      answer: "Circuito do Módulo Transmissor/Receptor de RF (Cartão A1).",
      explanation: "Os amplificadores push-pull de 10 Watts para os canais de vante e ré estão situados no cartão de RF A1.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em qual unidade do sistema ocorre fisicamente a transdução da energia elétrica em energia sonora (e vice-versa)?",
      options: [
        "Na Unidade Transdutora (Módulo do Transdutor no casco).",
        "Na Placa A1 da Unidade Eletrônica.",
        "No bloco de terminais TB1 do painel Master Display.",
        "Nos relés repetidores de saída digital."
      ],
      answer: "Na Unidade Transdutora (Módulo do Transdutor no casco).",
      explanation: "A conversão eletroacústica é executada diretamente pelas pastilhas de cristal piezoelétrico alojadas no transdutor de casco.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "De quais estágios principais consiste o circuito transmissor na placa de RF A1?",
      options: [
        "Um transistor de Buffer (Q13) e dois amplificadores de potência idênticos equipados com proteção contra sobrecarga de ganho.",
        "Um oscilador local Hartley de 2 MHz e quatro multiplicadores de frequência de diodo varactor.",
        "Uma chave analógica CMOS quádrupla e dois transformadores elevadores de 230 Volts.",
        "Um misturador balanceado em anel e um amplificador operacional integrador."
      ],
      answer: "Um transistor de Buffer (Q13) e dois amplificadores de potência idênticos equipados com proteção contra sobrecarga de ganho.",
      explanation: "A arquitetura de transmissão da placa A1 conta com o buffer chaveador Q13 alimentando os amplificadores diferenciais protegidos contra sobrecarga por realimentação de corrente.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a amplitude mínima de tensão requerida para chavear com segurança o transistor de Buffer Q13 na placa A1?",
      options: [
        "1 Volt.",
        "12 Volts.",
        "0,1 Volt.",
        "115 Volts."
      ],
      answer: "1 Volt.",
      explanation: "O circuito divisor na base do buffer Q13 exige ao menos 1 Volt de nível de acionamento para prevenir disparos espúrios causados por ruído elétrico abaixo desse limiar.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual componente ajustável é responsável por calibrar a tensão base-emissor do transistor Q5 (ajuste de potência de transmissão)?",
      options: [
        "Potenciômetro R19 (PWR ADJ).",
        "Trimpot R55 (THRESHOLD ADJ).",
        "Capacitor variável C12 (FREQ ADJ).",
        "Resistor de potência R90."
      ],
      answer: "Potenciômetro R19 (PWR ADJ).",
      explanation: "O potenciômetro R19 regula a polarização de corrente contínua em Q5, definindo o ganho diferencial e a potência do amplificador de transmissão.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O que ocorre se um contador de cruzamentos em zero falhar em alcançar a contagem de 2048 antes que a janela de escuta WTGTE expire?",
      options: [
        "O processador omite o sinal de reset ('CTR RST'), permitindo que o contador mantenha o acumulado e complete sua contagem durante o próximo ciclo de recepção.",
        "O sistema entra em alarme visual de 'FAIL' e zera imediatamente toda a contagem de milhas do navio.",
        "O amplificador A1 dobra a potência de transmissão para 20 Watts no ciclo seguinte.",
        "A Master Display comuta para modo de velocidade manual zerando os registradores."
      ],
      answer: "O processador omite o sinal de reset ('CTR RST'), permitindo que o contador mantenha o acumulado e complete sua contagem durante o próximo ciclo de recepção.",
      explanation: "Para não perder amostras em águas de eco fraco, o firmware não reseta o contador incompleto, possibilitando que ele atinja os 2048 no próximo ciclo de escuta.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em quais pontos físicos do barramento de terminais podemos medir a alimentação CA (FASE) de entrada na Unidade Eletrônica?",
      options: [
        "Pinos 17 e 18 no bloco de terminais TB1 do módulo A4.",
        "Pinos 1 e 2 no conector J5 da placa A1.",
        "Pinos 10 e 11 na barra de terra do chassi A3.",
        "Pinos 4 e 5 no conector DB-25 da Master Display."
      ],
      answer: "Pinos 17 e 18 no bloco de terminais TB1 do módulo A4.",
      explanation: "Os pinos 17 e 18 do bloco TB1 em A4 são os pontos de aferição padronizados para a linha de fase da tensão de alimentação CA principal.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em quais terminais podemos verificar a conexão da alimentação CA (NEUTRO) na Unidade Eletrônica?",
      options: [
        "Pinos 20 e 21 no bloco de terminais TB1 do módulo A4.",
        "Pinos 3 e 4 na placa de relés A2.",
        "Pinos 12 e 13 no conector do transdutor.",
        "Pinos 30 e 31 na régua da bateria."
      ],
      answer: "Pinos 20 e 21 no bloco de terminais TB1 do módulo A4.",
      explanation: "O retorno de neutro da rede de alimentação CA chega aos pinos 20 e 21 da barra de terminais TB1 em A4.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "De que material específico é confeccionada a lente acústica transparente na superfície do transdutor?",
      options: [
        "Poliestireno de grau acústico.",
        "Vidro borossilicato temperado.",
        "Acrílico policarbonato comum.",
        "Borracha de neoprene vulcanizada."
      ],
      answer: "Poliestireno de grau acústico.",
      explanation: "A lente protetora e refrativa que sela os cristais em contato direto com a água do mar é fabricada em poliestireno especial.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é o procedimento preventivo obrigatório com o transdutor antes da entrada e esvaziamento do dique seco?",
      options: [
        "Içar/recolher o transdutor para o interior do casco e fechar firmemente a válvula de fundo antes do esvaziamento do dique.",
        "Cobrir a lente com uma lona de PVC e prender com abraçadeiras de aço inox sob a quilha.",
        "Desconectar os cabos internos e injetar ar comprimido a 10 PSI na carcaça do transdutor.",
        "Manter o equipamento ligado em modo de teste contínuo para evaporar umidade."
      ],
      answer: "Içar/recolher o transdutor para o interior do casco e fechar firmemente a válvula de fundo antes do esvaziamento do dique.",
      explanation: "Içar o transdutor para dentro da válvula de fundo e fechá-la protege os cristais contra choques mecânicos, calços do dique e ressecamento agressivo.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como deve ser executada a limpeza da superfície do conjunto transdutor que aloja os componentes ativos?",
      options: [
        "Com detergente suave, pasta ou pó de limpeza contendo o mínimo possível de material abrasivo e esponja macia.",
        "Com escova de cerdas de aço e solvente removedor de tinta epóxi.",
        "Com jateamento de areia fina sob baixa pressão de ar comprimido.",
        "Com ácido muriático diluído para dissolver crostas calcárias rapidamente."
      ],
      answer: "Com detergente suave, pasta ou pó de limpeza contendo o mínimo possível de material abrasivo e esponja macia.",
      explanation: "A limpeza deve ser extremamente cuidadosa, evitando agentes altamente abrasivos ou raspadores metálicos que danificariam a superfície de poliestireno.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Descreva a trajetória e conversão dos ecos no módulo do transdutor durante a recepção:",
      options: [
        "As ondas acústicas incidem nos cristais e são convertidas em energia elétrica; essa energia passa pelos transformadores casadores T1 e T2 e segue pelo cabo blindado como pulsos de recepção até a Unidade Eletrônica.",
        "Os ecos são convertidos em sinais ópticos por fotodiodos e transmitidos por fibra de vidro até a Master Display.",
        "O som movimenta uma membrana eletromagnética em T1/T2, cuja frequência é retificada em tensão contínua linear.",
        "O retorno acústico aquece o termistor do cristal, gerando variação de resistência lida pela placa A1."
      ],
      answer: "As ondas acústicas incidem nos cristais e são convertidas em energia elétrica; essa energia passa pelos transformadores casadores T1 e T2 e segue pelo cabo blindado como pulsos de recepção até a Unidade Eletrônica.",
      explanation: "O eco mecânico gera tensão elétrica nos cristais piezoelétricos; os transformadores T1/T2 casam a impedância e enviam o sinal elétrico balanceado à Unidade Eletrônica.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Onde ficam fisicamente instalados no casco do navio os transdutores acústicos do Odômetro Doppler SRD-331?",
      options: [
        "Montados no interior de uma válvula de fundo (gaveta) instalada no fundo do casco do navio.",
        "Parafusados diretamente no leme e nas pás da hélice principal.",
        "Alojados no bulbo de proa acima da linha d'água de lastro leve.",
        "Fixados no convés principal com braço articulado retrátil de bombordo."
      ],
      answer: "Montados no interior de uma válvula de fundo (gaveta) instalada no fundo do casco do navio.",
      explanation: "A instalação em válvula de fundo permite que o transdutor fique imerso no fluxo da água e possa ser recolhido para o interior do casco em manutenções.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais são as tensões de alimentação primária de entrada e as tensões contínuas CC reguladas geradas internamente pela Unidade Eletrônica?",
      options: [
        "Entrada CA de 100, 115 ou 230 VCA (50/60 Hz); fornece internamente tensões reguladas de 5, 12 e 32 Volts CC.",
        "Entrada de 24 VCC; fornece internamente saídas reguladas de 3,3 e 9 Volts CC.",
        "Entrada CA trifásica de 440 VCA; fornece saídas de 110 VCC e 48 VCC.",
        "Entrada de 115 VCA (400 Hz); fornece internamente apenas 5 Volts CC para lógica."
      ],
      answer: "Entrada CA de 100, 115 ou 230 VCA (50/60 Hz); fornece internamente tensões reguladas de 5, 12 e 32 Volts CC.",
      explanation: "A fonte interna opera com a rede CA do navio e produz as linhas de +5 VCC (lógica TTL/CPU), +12 VCC (analógico) e +32 VCC (amplificadores de potência RF).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual é a sensibilidade vertical mínima exigida para o osciloscópio utilizado nos procedimentos de teste e alinhamento do SRD-331?",
      options: [
        "No mínimo 10 mV/cm.",
        "No mínimo 1 Volt/cm.",
        "No mínimo 500 mV/cm.",
        "No mínimo 100 uV/cm."
      ],
      answer: "No mínimo 10 mV/cm.",
      explanation: "Como os retornos acústicos na saída pré-amplificada possuem baixa amplitude em milivolts, o osciloscópio precisa ter sensibilidade vertical de pelo menos 10 mV por centímetro.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Qual deve ser a metodologia filosófica e prática adotada pelo técnico na rotina de Busca de Avarias do Odômetro SRD-331?",
      options: [
        "Deve ser um procedimento sistemático e lógico de eliminação de módulos e estágios.",
        "Troca aleatória e imediata de todos os cartões eletrônicos até o defeito sumir.",
        "Ajuste empírico simultâneo de todos os trimpots da placa A1 e A2.",
        "Substituição imediata do cabo de 9,2 metros antes de testar a Unidade Eletrônica."
      ],
      answer: "Deve ser um procedimento sistemático e lógico de eliminação de módulos e estágios.",
      explanation: "O manual preconiza a busca sistemática por eliminação (isolar fonte, cabos, cartões e transdutor) para localizar avarias com rapidez e segurança.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    }
  ]
};

// Optional human-friendly titles for Quiz. Keys must match the quizzes object keys.
export const quizTitles: Record<string, string> = {
  telefonia: "Telefonia",
  /* voip title removed */
  "eletronica-digital-2": "Eletrônica Digital 2",
  "eletronica-digital-2-p2": "Eletronica Digital II P2",
  "exercicios-moodle-et-d2": "Exercicios Moodle ET.D2",
  "manutencao-dos-sistemas-telefonicos-2": "Manutenção dos Sistemas Telefônicos 2",
  "manutencao-dos-sistemas-de-odometros": "MANUTENÇÃO DOS SISTEMAS DE ODÔMETROS",
  "introducao-aos-microcontroladores-p1": "INTRODUÇÃO AOS MICROCONTROLADORES P1",
};

// Quiz de Eletrônica Digital II
quizzes["eletronica-digital-2"] = [
  // Questões de múltipla escolha
  {
    question: "Os circuitos integrados TTL, de uso geral, são dimensionados para operar na faixa de temperatura de:",
    options: ["-55°C a +125°C","-55°C a +85°C","-40°C a +85°C","-40°C a +80°C","0°C a +70°C"],
    answer: "0°C a +70°C",
    explanation: "Por que a resposta correta é \"0°C a +70°C\"? Os circuitos integrados digitais TTL da série comercial (identificados pelo prefixo 74, ex: 7400, 74LS04) são fabricados e normatizados para garantir operação estável e precisão dos níveis lógicos dentro da faixa de temperatura comercial de 0°C a +70°C, com tensão nominal de 5V (±5%). A série militar (prefixo 54) atende à faixa mais severa de -55°C a +125°C.",
  },
  {
    question: "A vantagem do CI TTL padrão sobre o CI MOS, padrão, é o(a):",
    options: ["FAN-OUT","dissipação de potência","imunidade ao ruído","larga faixa de alimentação de tensão","tempo de atraso de propagação"],
    answer: "tempo de atraso de propagação",
    explanation: "Por que a resposta correta é \"tempo de atraso de propagação\"? O tempo de atraso de propagação (t_pd) é o tempo que o sinal leva para atravessar o circuito integrado desde a entrada até a mudança de estado na saída. A principal vantagem dos circuitos TTL padrão frente aos circuitos MOS padrão tradicionais (como a série 4000B) é o menor tempo de atraso de propagação, proporcionando frequências e velocidades de chaveamento significativamente mais elevadas.",
  },
  {
    question: "O tipo de lógica e a porta apresentada pelo circuito da Fig.100 são, respectivamente:",
    options: ["positiva e OR","positiva e NAND","negativa e AND","positiva e AND","negativa e NOR"],
    answer: "positiva e OR",
    explanation: "Por que a resposta correta é \"positiva e OR\"? Analisando o enunciado (\"O tipo de lógica e a porta apresentada pelo circuito da Fig.100 são, respectivamente:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"positiva e OR\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    image: circuito100
  },
  {
    question: "Os níveis lógicos de entrada e saída em um circuito digital são representados por tensões referentes à sua fonte de alimentação; o valor máximo de um nível alto em circuitos TTL é de quantos Volts?",
    options: ["0,8","1,2","2,0","5,0","5,8"],
    answer: "5,0",
    explanation: "Por que a resposta correta é \"5,0\"? Os circuitos integrados TTL operam com tensão nominal de alimentação de 5,0 Volts (com tolerância de ±5%, ou seja, entre 4,75V e 5,25V). Por essa razão, o valor máximo nominal e ideal para um nível lógico alto fornecido pela fonte de alimentação é de 5,0 Volts.",
  },
  {
    question: "De acordo com o circuito da Figura 105, para que a saída (S) tenha nível lógico 0, as suas entradas A, B e G deverão estar, respectivamente, nos seguintes níveis lógicos:",
    options: ["0,1 e 1","1,1 e 1","1,1 e 0","0,0 e 1","0,0 e 0"],
    answer: "1,1 e 1",
    explanation: "Por que a resposta correta é \"1,1 e 1\"? Analisando o enunciado (\"De acordo com o circuito da Figura 105, para que a saída (S) tenha nível lógico 0, as suas entradas A, B e G deverão estar, respectivamente, nos seguintes níveis lógicos:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"1,1 e 1\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    image: circuito105
  },
  {
    question: "Além dos blocos comuns (STANDARD), a família TTL possui outras versões de circuitos lógicos. A que fornece a maior velocidade é:",
    options: ["ADVANCED","SCHOTTKY","ADVANCED SCHOTTKY","FAST","LOW POWER SCHOTTKY"],
    answer: "ADVANCED SCHOTTKY",
    explanation: "Por que a resposta correta é \"ADVANCED SCHOTTKY\"? Analisando o enunciado (\"Além dos blocos comuns (STANDARD), a família TTL possui outras versões de circuitos lógicos. A que fornece a maior velocidade é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"ADVANCED SCHOTTKY\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Nas séries comuns, os circuitos integrados CMOS são dimensionados para operar na faixa de temperatura de:",
    options: ["-40°C a +85°C","-40°C a +80°C","-40°C a +150°C","-150°C a +300°C","-30°C a +85°C"],
    answer: "-40°C a +85°C",
    explanation: "Por que a resposta correta é \"-40°C a +85°C\"? Os circuitos integrados digitais TTL da série comercial (identificados pelo prefixo 74, ex: 7400, 74LS04) são fabricados e normatizados para garantir operação estável e precisão dos níveis lógicos dentro da faixa de temperatura comercial de 0°C a +70°C, com tensão nominal de 5V (±5%). A série militar (prefixo 54) atende à faixa mais severa de -55°C a +125°C.",
  },
  {
    question: "A desvantagem do CI CMOS padrão, com relação ao CI TTL padrão, é o(a):",
    options: ["FAN-OUT","dissipação de potência","imunidade ao ruído","larga faixa de alimentação de tensão","tempo de atraso de propagação"],
    answer: "tempo de atraso de propagação",
    explanation: "Por que a resposta correta é \"tempo de atraso de propagação\"? Analisando o enunciado (\"A desvantagem do CI CMOS padrão, com relação ao CI TTL padrão, é o(a):\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"tempo de atraso de propagação\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Ao analisarmos o funcionamento do circuito da Figura 109, concluímos que ele se comporta como uma porta do tipo:",
    options: ["NOR","AND","OR","NAND","OU Exclusivo"],
    answer: "NOR",
    explanation: "Por que a resposta correta é \"NOR\"? Analisando o enunciado (\"Ao analisarmos o funcionamento do circuito da Figura 109, concluímos que ele se comporta como uma porta do tipo:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"NOR\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    image: circuito109
  },
  {
    question: "A menor tensão de entrada para que um circuito TTL STANDARD, reconheça como nível ALTO, é de quantos V?",
    options: ["0,4","0,8","2,0","2,4","3,5"],
    answer: "2,0",
    explanation: "Por que a resposta correta é \"2,0\"? Analisando o enunciado (\"A menor tensão de entrada para que um circuito TTL STANDARD, reconheça como nível ALTO, é de quantos V?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"2,0\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A maior tensão de entrada, para que um circuito TTL STANDARD reconheça como nível BAIXO, é de:",
    options: ["0,4 V","3,5 V","2,0 V","2,4 V","0,8 V"],
    answer: "0,8 V",
    explanation: "Por que a resposta correta é \"0,8 V\"? Analisando o enunciado (\"A maior tensão de entrada, para que um circuito TTL STANDARD reconheça como nível BAIXO, é de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"0,8 V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quantas portas estão contidas nos integrados da escala SSI?",
    options: ["13 a 99 portas","Até 12 portas","Até 1000 portas","100 a 1000 portas","1000 a 99.999 portas"],
    answer: "Até 12 portas",
    explanation: "Por que a resposta correta é \"Até 12 portas\"? Conforme a norma de classificação por escalas de integração (SSI, MSI, LSI, VLSI, ULSI, GSI), a alternativa \"Até 12 portas\" indica com exatidão a quantidade de portas lógicas por chip que define essa categoria da eletrônica digital.",
  },
  {
    question: "O funcionamento do circuito da Fig. 102, em lógica positiva, é de uma porta:",
    options: ["NOR","OR","NAND","AND","OU Exclusivo"],
    answer: "NAND",
    explanation: "Por que a resposta correta é \"NAND\"? A alternativa \"NAND\" define com precisão a convenção elétrica (Lógica Positiva vs Lógica Negativa) adotada para associar as tensões digitais de operação aos estados lógicos binários 0 e 1 do sistema.",
    image: circuito102
  },
  {
    question: "O circuito lógico básico da família TTL é composto por portas:",
    options: ["NAND","AND","NOT","OR","NOR"],
    answer: "NAND",
    explanation: "Por que a resposta correta é \"NAND\"? Analisando o enunciado (\"O circuito lógico básico da família TTL é composto por portas:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"NAND\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Um CI digital, contendo 150 portas, é classificado como:",
    options: ["SSI","MSI","LSI","ULSI","GSI"],
    answer: "LSI",
    explanation: "Por que a resposta correta é \"LSI\"? Analisando o enunciado (\"Um CI digital, contendo 150 portas, é classificado como:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"LSI\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A família lógica pertencente a série 4000 e 4000B é:",
    options: ["MOS","TTL","CMOS","DTL","HTL"],
    answer: "CMOS",
    explanation: "Por que a resposta correta é \"CMOS\"? Analisando o enunciado (\"A família lógica pertencente a série 4000 e 4000B é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"CMOS\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Apesar de executarem a mesma função lógica, as séries 54 e 74 TTL apresentam uma característica diferente; assinale-a.",
    options: ["Imunidade a ruído","Alimentação","Número de pinos","Temperatura de operação","Velocidade"],
    answer: "Temperatura de operação",
    explanation: "Por que a resposta correta é \"Temperatura de operação\"? Analisando o enunciado (\"Apesar de executarem a mesma função lógica, as séries 54 e 74 TTL apresentam uma característica diferente; assinale-a.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Temperatura de operação\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "As séries 54 operam na faixa de temperatura de quantos graus?",
    options: ["0°C a +85°C","0°C a +75°C","-55°C a +70°C","-55°C a +85°C","-55°C a +125°C"],
    answer: "-55°C a +125°C",
    explanation: "Por que a resposta correta é \"-55°C a +125°C\"? Os circuitos integrados digitais TTL da série comercial (identificados pelo prefixo 74, ex: 7400, 74LS04) são fabricados e normatizados para garantir operação estável e precisão dos níveis lógicos dentro da faixa de temperatura comercial de 0°C a +70°C, com tensão nominal de 5V (±5%). A série militar (prefixo 54) atende à faixa mais severa de -55°C a +125°C.",
  },
  {
    question: "O CI SN 54/74S00 é um TTL da subfamília:",
    options: ["STANDARD","FAST","SCHOTTKY","LOW POWER SCHOTTKY","ADVANCED SCHOTTKY"],
    answer: "SCHOTTKY",
    explanation: "Por que a resposta correta é \"SCHOTTKY\"? Analisando o enunciado (\"O CI SN 54/74S00 é um TTL da subfamília:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"SCHOTTKY\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A tensão de alimentação do CI SN 7400 é de:",
    options: ["15,0 V ±5%","12,0 V ± 5%","5,0 V±5%","5,0 V ±20%","3,0 V ± 5%"],
    answer: "5,0 V±5%",
    explanation: "Por que a resposta correta é \"5,0 V±5%\"? Analisando o enunciado (\"A tensão de alimentação do CI SN 7400 é de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"5,0 V±5%\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O CI SN-74S00 utiliza, nos seus circuitos:",
    options: ["transistores de junção e diodos SCHOTTKY","transistores de efeito de campo e diodos SCHOTTKY","MOSFET e transistores de junção","transistores bipolares e diodos retificadores","apenas diodos SCHOTTKY"],
    answer: "transistores de junção e diodos SCHOTTKY",
    explanation: "Por que a resposta correta é \"transistores de junção e diodos SCHOTTKY\"? Analisando o enunciado (\"O CI SN-74S00 utiliza, nos seus circuitos:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"transistores de junção e diodos SCHOTTKY\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Tensão máxima de alimentação que o CI SN 54F00 pode suportar.",
    options: ["3,0 V","5,0 V","5,25 V","5,5 V","15,0 V"],
    answer: "5,5 V",
    explanation: "Por que a resposta correta é \"5,5 V\"? Analisando o enunciado (\"Tensão máxima de alimentação que o CI SN 54F00 pode suportar.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"5,5 V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual o valor máximo de Vdd para os circuitos integrados da série 4000B?",
    options: ["20V","18V","15V","10V","5V"],
    answer: "18V",
    explanation: "Por que a resposta correta é \"18V\"? Analisando o enunciado (\"Qual o valor máximo de Vdd para os circuitos integrados da série 4000B?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"18V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Das TTL, a que apresenta menor consumo de potência é a:",
    options: ["7400","74ALS00","74F00","74LS00","74S00"],
    answer: "74ALS00",
    explanation: "Por que a resposta correta é \"74ALS00\"? Analisando o enunciado (\"Das TTL, a que apresenta menor consumo de potência é a:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"74ALS00\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Família que apresenta o maior FAN-OUT.",
    options: ["C-MOS","TTL","ECL","DTL","HTL"],
    answer: "C-MOS",
    explanation: "Por que a resposta correta é \"C-MOS\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "Tipo de estrutura interna que nos permite a confecção de blocos lógicos em CIs.",
    options: ["Bloco lógico","Porta lógica","Circuito lógico","Família lógica","Circuito combinacional"],
    answer: "Família lógica",
    explanation: "Por que a resposta correta é \"Família lógica\"? Analisando o enunciado (\"Tipo de estrutura interna que nos permite a confecção de blocos lógicos em CIs.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Família lógica\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A capacidade de um bloco lógico alimentar, blocos da mesma família, é chamada:",
    options: ["FAN-OUT","lógica positiva","níveis de tensão","lógica negativa","tempo de atraso"],
    answer: "FAN-OUT",
    explanation: "Por que a resposta correta é \"FAN-OUT\"? Analisando o enunciado (\"A capacidade de um bloco lógico alimentar, blocos da mesma família, é chamada:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"FAN-OUT\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual o FAN-OUT da família TTL?",
    options: ["Indeterminada","Maior que 10","Igual a 10","Menor que 10","Mínima"],
    answer: "Igual a 10",
    explanation: "Por que a resposta correta é \"Igual a 10\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "No CI SN 74ALSOON, o significado das letras SN é:",
    options: ["função lógica","faixa de temperatura","prefixo do fabricante","baixo consumo","tipo de encapsulamento"],
    answer: "prefixo do fabricante",
    explanation: "Por que a resposta correta é \"prefixo do fabricante\"? Analisando o enunciado (\"No CI SN 74ALSOON, o significado das letras SN é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"prefixo do fabricante\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Série TTL que usa um diodo especial para reduzir o tempo de chaveamento.",
    options: ["74HC","74S","74HCT","74F","74ACT"],
    answer: "74S",
    explanation: "Por que a resposta correta é \"74S\"? Analisando o enunciado (\"Série TTL que usa um diodo especial para reduzir o tempo de chaveamento.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"74S\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Corrente que flui para a saída de um bloco lógico, quando essa saída estiver em nível lógico ALTO.",
    options: ["IIH","IIL","IOL","IOS","IOH"],
    answer: "IOH",
    explanation: "Por que a resposta correta é \"IOH\"? Analisando o enunciado (\"Corrente que flui para a saída de um bloco lógico, quando essa saída estiver em nível lógico ALTO.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"IOH\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A capacidade que um bloco lógico possui de NÃO receber influências elétricas ou magnéticas, denomina-se:",
    options: ["imunidade ao ruído","margem de ruído","FAN-OUT","tempo de atraso de propagação","requisitos de potência"],
    answer: "imunidade ao ruído",
    explanation: "Por que a resposta correta é \"imunidade ao ruído\"? Analisando o enunciado (\"A capacidade que um bloco lógico possui de NÃO receber influências elétricas ou magnéticas, denomina-se:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"imunidade ao ruído\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O valor de VIH de uma TTL padrão é:",
    options: ["0,4V","0,8V","2,0V","2,4V","2,8V"],
    answer: "2,0V",
    explanation: "Por que a resposta correta é \"2,0V\"? Analisando o enunciado (\"O valor de VIH de uma TTL padrão é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"2,0V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quando uma saída TTL acionar mais cargas do que o normal, teremos:",
    options: ["redução de IOL","perda do nível lógico","nenhuma alteração","redução de IOH","redução de VOL"],
    answer: "perda do nível lógico",
    explanation: "Por que a resposta correta é \"perda do nível lógico\"? Analisando o enunciado (\"Quando uma saída TTL acionar mais cargas do que o normal, teremos:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"perda do nível lógico\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Lógica que combina as melhores características da CMOS e Bipolar.",
    options: ["74AC","74C","74HCT","BICMOS","74ACT"],
    answer: "BICMOS",
    explanation: "Por que a resposta correta é \"BICMOS\"? Analisando o enunciado (\"Lógica que combina as melhores características da CMOS e Bipolar.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"BICMOS\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Com VDD = 15V, a margem de ruído para uma CMOS padrão será:",
    options: ["0,4V","2,0V","2,75V","6,75V","7,5V"],
    answer: "6,75V",
    explanation: "Por que a resposta correta é \"6,75V\"? A Margem de Ruído (ou imunidade ao ruído) é a máxima amplitude de tensão espúria ou ruído que pode se sobrepor ao sinal de entrada sem induzir comutação falsa na porta lógica. É calculada pelas diferenças V_OH(min) - V_IH(min) no nível lógico alto e V_IL(max) - V_OL(max) no nível lógico baixo.",
  },
  {
    question: "O fator que determina o FAN-OUT de dispositivos CMOS é:",
    options: ["máximo atraso de propagação permitido","capacitância de saída de cada carga","tensão de alimentação","mínimo atraso de propagação permitido","mínima margem de ruído permitida"],
    answer: "capacitância de saída de cada carga",
    explanation: "Por que a resposta correta é \"capacitância de saída de cada carga\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "Corrente que flui para a entrada de um bloco lógico, quando essa entrada está em nível lógico alto.",
    options: ["IOH","IIL","IIH","IOS","IOL"],
    answer: "IIH",
    explanation: "Por que a resposta correta é \"IIH\"? Analisando o enunciado (\"Corrente que flui para a entrada de um bloco lógico, quando essa entrada está em nível lógico alto.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"IIH\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O consumo médio de um circuito integrado TTL, onde IccH=6mA e IccL = 12mA, é de:",
    options: ["90 mW","45 W","30 mW","45 mW","90 W"],
    answer: "45 mW",
    explanation: "Por que a resposta correta é \"45 mW\"? Analisando o enunciado (\"O consumo médio de um circuito integrado TTL, onde IccH=6mA e IccL = 12mA, é de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"45 mW\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A margem de ruído no nível alto para uma TTL, onde VIH = 2V, VIL = 0,8V, VOH = 2,4V e VOL=0,4V, é de:",
    options: ["0,4V","0,8V","2,4V","2,8V","4,4V"],
    answer: "0,4V",
    explanation: "Por que a resposta correta é \"0,4V\"? A Margem de Ruído (ou imunidade ao ruído) é a máxima amplitude de tensão espúria ou ruído que pode se sobrepor ao sinal de entrada sem induzir comutação falsa na porta lógica. É calculada pelas diferenças V_OH(min) - V_IH(min) no nível lógico alto e V_IL(max) - V_OL(max) no nível lógico baixo.",
  },
  {
    question: "É eletricamente compatível com TTL.",
    options: ["74AC","74HCT","74LV","74HC","74C"],
    answer: "74HCT",
    explanation: "Por que a resposta correta é \"74HCT\"? Analisando o enunciado (\"É eletricamente compatível com TTL.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"74HCT\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Com uma saída TTL padrão em nível lógico 0, o máximo valor de corrente absorvido será de:",
    options: ["0,4 mA","1,6 mA","2,4 mA","16 mA","18 mA"],
    answer: "16 mA",
    explanation: "Por que a resposta correta é \"16 mA\"? Analisando o enunciado (\"Com uma saída TTL padrão em nível lógico 0, o máximo valor de corrente absorvido será de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"16 mA\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Com Vdd = 12V, a margem de ruído para uma CMOS padrão será:",
    options: ["0,4 V","2,0 V","2,75 V","5,4 V","7,5 V"],
    answer: "5,4 V",
    explanation: "Por que a resposta correta é \"5,4 V\"? A Margem de Ruído (ou imunidade ao ruído) é a máxima amplitude de tensão espúria ou ruído que pode se sobrepor ao sinal de entrada sem induzir comutação falsa na porta lógica. É calculada pelas diferenças V_OH(min) - V_IH(min) no nível lógico alto e V_IL(max) - V_OL(max) no nível lógico baixo.",
  },
  {
    question: "Uma CMOS 4000B é alimentada com valor máximo permitido de Vdd. O máximo valor de VIL será de:",
    options: ["12,6V","7,5V","5,4V","4,5V","0,05V"],
    answer: "5,4V",
    explanation: "Por que a resposta correta é \"5,4V\"? Analisando o enunciado (\"Uma CMOS 4000B é alimentada com valor máximo permitido de Vdd. O máximo valor de VIL será de:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"5,4V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quando uma TTL aciona uma CMOS, onde Vdd >>Vcc, devemos:",
    options: ["usar um BUFFER coletor aberto como interface","efetuar a ligação diretamente entre os dispositivos","usar um resistor de PULL-UP","usar uma saída TRI-STATE","usar uma interface conversora de níveis de correntes"],
    answer: "usar uma interface conversora de níveis de correntes",
    explanation: "Por que a resposta correta é \"usar uma interface conversora de níveis de correntes\"? Analisando o enunciado (\"Quando uma TTL aciona uma CMOS, onde Vdd >>Vcc, devemos:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"usar uma interface conversora de níveis de correntes\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O número de portas E, necessárias para construir um gerador de produtos canônicos de 5 variáveis, que usa matriz de simples encadeamento, é:",
    options: ["60","256","508","512","1024"],
    answer: "60",
    explanation: "Por que a resposta correta é \"60\"? Analisando o enunciado (\"O número de portas E, necessárias para construir um gerador de produtos canônicos de 5 variáveis, que usa matriz de simples encadeamento, é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"60\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Valor de VIL de uma TTL padrão é:",
    options: ["menor ou igual a 0,8V","maior ou igual a 0,4V","maior ou igual a 2V","maior ou igual a 2,4V","menor ou igual a 2,4V"],
    answer: "menor ou igual a 0,8V",
    explanation: "Por que a resposta correta é \"menor ou igual a 0,8V\"? Analisando o enunciado (\"Valor de VIL de uma TTL padrão é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"menor ou igual a 0,8V\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Sua função é receber o sinal de saída do acionador e condicioná-lo de modo a tomá-lo compatível com os requisitos da carga. Estamos nos referindo a:",
    options: ["demultiplex","circuito TTL","circuito de interface","lógica combinacional","multiplex"],
    answer: "circuito de interface",
    explanation: "Por que a resposta correta é \"circuito de interface\"? Analisando o enunciado (\"Sua função é receber o sinal de saída do acionador e condicioná-lo de modo a tomá-lo compatível com os requisitos da carga. Estamos nos referindo a:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"circuito de interface\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Circuito combinacional dedicado, cuja finalidade é selecionar qual das saídas deve receber a informação presente em sua entrada.",
    options: ["Memória","Demultiplex","Gerador de paridade","Multiplex","Gerador de produtos canônicos"],
    answer: "Demultiplex",
    explanation: "Por que a resposta correta é \"Demultiplex\"? Analisando o enunciado (\"Circuito combinacional dedicado, cuja finalidade é selecionar qual das saídas deve receber a informação presente em sua entrada.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Demultiplex\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "No circuito da figura 137, A = 1, B = 0, C=0, D = 1. Com estes níveis lógicos na entrada a porta ativa em nível um é:",
    options: ["P3","P6","P7","P10","P11"],
    answer: "P10",
    explanation: "Por que a resposta correta é \"P10\"? Analisando o enunciado (\"No circuito da figura 137, A = 1, B = 0, C=0, D = 1. Com estes níveis lógicos na entrada a porta ativa em nível um é:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"P10\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    image: circuito137
  },
  {
    question: "No circuito da figura 102, quando A=0 e B = 1, podemos afirmar que D1, D2 e S estarão nas seguintes situações:",
    options: ["D1 conduzindo, D2 cortado e S = 0","D1 cortado, D2 conduzindo e S = 1","D1 conduzindo, D2 cortado e S = 0","D1 cortado, D2 conduzindo e S = 0","D1 conduzindo, D2 cortado e S = 1"],
    answer: "D1 cortado, D2 conduzindo e S = 1",
    explanation: "Por que a resposta correta é \"D1 cortado, D2 conduzindo e S = 1\"? Analisando o enunciado (\"No circuito da figura 102, quando A=0 e B = 1, podemos afirmar que D1, D2 e S estarão nas seguintes situações:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"D1 cortado, D2 conduzindo e S = 1\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    image: circuito102
  },
  {
    question: "De acordo com o circuito da figura 104, quando tivermos S em nível 0, os transistores estarão nas seguintes condições:",
    options: ["T2 e T4 saturados e T3 cortado","T2 e T4 cortados e T3 saturado","T3 e T4 saturados e T2 cortado","T3 e T2 saturados e T4 cortado","T2 e T3 cortados e T4 saturado"],
    answer: "T2 e T4 saturados e T3 cortado",
    explanation: "Por que a resposta correta é \"T2 e T4 saturados e T3 cortado\"? Analisando o enunciado (\"De acordo com o circuito da figura 104, quando tivermos S em nível 0, os transistores estarão nas seguintes condições:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"T2 e T4 saturados e T3 cortado\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
    image: circuito104
  },
  {
    question: "O bloco lógico que permite o controle externo da corrente de coletor é o:",
    options: ["totem pole","toletor aberto","TRISTATE","CMOS padrão","PULL UP"],
    answer: "toletor aberto",
    explanation: "Por que a resposta correta é \"toletor aberto\"? Analisando o enunciado (\"O bloco lógico que permite o controle externo da corrente de coletor é o:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"toletor aberto\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a estrutura básica de entrada do bloco lógico TTL?",
    options: ["Transistor bipolar ou MULTIEMISSORES","Porta XOR","Rede resistiva","Bloco injetor","Porta NOR"],
    answer: "Transistor bipolar ou MULTIEMISSORES",
    explanation: "Por que a resposta correta é \"Transistor bipolar ou MULTIEMISSORES\"? Analisando o enunciado (\"Qual é a estrutura básica de entrada do bloco lógico TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Transistor bipolar ou MULTIEMISSORES\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Como é chamado o tempo que um bloco lógico leva para passar do estado ALTO para o estado BAIXO ou vice-versa?",
    options: ["Tempo de propagação","Tempo de subida","Tempo de estabilização","Tempo de comutação","Tempo de setup"],
    answer: "Tempo de propagação",
    explanation: "Por que a resposta correta é \"Tempo de propagação\"? Analisando o enunciado (\"Como é chamado o tempo que um bloco lógico leva para passar do estado ALTO para o estado BAIXO ou vice-versa?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Tempo de propagação\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quantas portas AND devemos usar para três variáveis de entrada, se quisermos gerar os produtos canônicos com portas AND e INVERSORES?",
    options: ["6","8","4","3","16"],
    answer: "8",
    explanation: "Por que a resposta correta é \"8\"? Analisando o enunciado (\"Quantas portas AND devemos usar para três variáveis de entrada, se quisermos gerar os produtos canônicos com portas AND e INVERSORES?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"8\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual a configuração de saída do Bloco Lógico da família TTL que permite o controle externo da corrente de coletor?",
    options: ["Open-collector","Totem-pole","Tri-state","Push-pull","Emitter follower"],
    answer: "Open-collector",
    explanation: "Por que a resposta correta é \"Open-collector\"? Analisando o enunciado (\"Qual a configuração de saída do Bloco Lógico da família TTL que permite o controle externo da corrente de coletor?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Open-collector\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual a matriz mais utilizada no processo de geração de produtos canônicos, por apresentar uma rápida resposta, com o menor número de portas AND?",
    options: ["Matriz de Duplo Encadeamento","Matriz de Simples Encadeamento","Matriz de Soma de Produto","Matriz de Karnaugh","Matriz de De Morgan"],
    answer: "Matriz de Duplo Encadeamento",
    explanation: "Por que a resposta correta é \"Matriz de Duplo Encadeamento\"? Analisando o enunciado (\"Qual a matriz mais utilizada no processo de geração de produtos canônicos, por apresentar uma rápida resposta, com o menor número de portas AND?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Matriz de Duplo Encadeamento\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual o nível lógico interpretado pela entrada de um circuito lógico, se a tensão de entrada estiver entre VIL e VIH?",
    options: ["Indefinido","Alto","Baixo","Tri-state","Superposição"],
    answer: "Indefinido",
    explanation: "Por que a resposta correta é \"Indefinido\"? A Margem de Ruído (ou imunidade ao ruído) é a máxima amplitude de tensão espúria ou ruído que pode se sobrepor ao sinal de entrada sem induzir comutação falsa na porta lógica. É calculada pelas diferenças V_OH(min) - V_IH(min) no nível lógico alto e V_IL(max) - V_OL(max) no nível lógico baixo.",
  },
  {
    question: "Qual a denominação para o número máximo de portas da mesma família, que podem ser ligadas à saída de uma outra, também da mesma família?",
    options: ["Fan-Out","Margem de ruido","Impedância de saída","Ganho","Fator de carga"],
    answer: "Fan-Out",
    explanation: "Por que a resposta correta é \"Fan-Out\"? Analisando o enunciado (\"Qual a denominação para o número máximo de portas da mesma família, que podem ser ligadas à saída de uma outra, também da mesma família?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Fan-Out\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é o estado de entrada de uma TTL em que flui maior corrente?",
    options: ["Nível baixo","Nível alto","Tri-state","Flutuante","Curto-circuito"],
    answer: "Nível baixo",
    explanation: "Por que a resposta correta é \"Nível baixo\"? Analisando o enunciado (\"Qual é o estado de entrada de uma TTL em que flui maior corrente?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Nível baixo\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Por que usamos o desacoplamento da fonte de alimentação?",
    options: ["Evitar picos de tensão","Melhorar a velocidade","Aumentar a corrente","Reduzir o ruído de sinal digital","Diminuir a impedância"],
    answer: "Evitar picos de tensão",
    explanation: "Por que a resposta correta é \"Evitar picos de tensão\"? Analisando o enunciado (\"Por que usamos o desacoplamento da fonte de alimentação?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Evitar picos de tensão\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a função das entradas de seleção de um MUX?",
    options: ["Escolher a entrada a ser ligada à saída","Incrementar o endereço","Gerar paridade","Fornecer clock","Multiplicar sinais"],
    answer: "Escolher a entrada a ser ligada à saída",
    explanation: "Por que a resposta correta é \"Escolher a entrada a ser ligada à saída\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"Escolher a entrada a ser ligada à saída\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
  },
  {
    question: "O que acontecerá na saída de um bloco lógico, se o FAN-OUT for excedido?",
    options: ["Queda do nível 1 de saída","Aumento da velocidade","Queda do nível 0 de saída","Nenhuma alteração","Aumento do VOH"],
    answer: "Queda do nível 1 de saída",
    explanation: "Por que a resposta correta é \"Queda do nível 1 de saída\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "Qual é a denominação para a medida quantitativa de ruído?",
    options: ["Margem de ruído","Imunidade ao ruído","Ruído peak-to-peak","Fator de ruído","SNR"],
    answer: "Margem de ruído",
    explanation: "Por que a resposta correta é \"Margem de ruído\"? Analisando o enunciado (\"Qual é a denominação para a medida quantitativa de ruído?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Margem de ruído\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Como são determinadas as escalas de integração?",
    options: ["Pelo número de portas ou dispositivos no chip","Pelo tipo de encapsulamento","Pela tensão de alimentação","Pela velocidade de comutação","Pela temperatura de operação"],
    answer: "Pelo número de portas ou dispositivos no chip",
    explanation: "Por que a resposta correta é \"Pelo número de portas ou dispositivos no chip\"? Conforme a norma de classificação por escalas de integração (SSI, MSI, LSI, VLSI, ULSI, GSI), a alternativa \"Pelo número de portas ou dispositivos no chip\" indica com exatidão a quantidade de portas lógicas por chip que define essa categoria da eletrônica digital.",
  },
  {
    question: "Quais os dispositivos na escala de integração SSI?",
    options: ["Portas e flip-flops","Memórias e CPUs","Conversores ADC","Amplificadores e filtros","Transmissores RF"],
    answer: "Portas e flip-flops",
    explanation: "Por que a resposta correta é \"Portas e flip-flops\"? Conforme a norma de classificação por escalas de integração (SSI, MSI, LSI, VLSI, ULSI, GSI), a alternativa \"Portas e flip-flops\" indica com exatidão a quantidade de portas lógicas por chip que define essa categoria da eletrônica digital.",
  },
  {
    question: "Como um circuito TTL responde a uma entrada em flutuação?",
    options: ["Assume nível 1","Assume nível 0","Permanece indefinido","Queima o circuito","Se torna tri-state"],
    answer: "Assume nível 1",
    explanation: "Por que a resposta correta é \"Assume nível 1\"? Analisando o enunciado (\"Como um circuito TTL responde a uma entrada em flutuação?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Assume nível 1\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Em qual estado de saída de uma TTL flui maior quantidade de corrente?",
    options: ["Nível lógico baixo","Nível lógico alto","Tri-state","Flutuante","Curto-circuito"],
    answer: "Nível lógico baixo",
    explanation: "Por que a resposta correta é \"Nível lógico baixo\"? Analisando o enunciado (\"Em qual estado de saída de uma TTL flui maior quantidade de corrente?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Nível lógico baixo\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual será o nível lógico na saída de uma porta NAND TTL que possui todas as entradas desconectadas?",
    options: ["0","1","Tri-state","Indefinido","Vdd/2"],
    answer: "0",
    explanation: "Por que a resposta correta é \"0\"? Na Álgebra de Boole e no projeto digital, as portas NAND (E-Não) e NOR (Ou-Não) são consagradas como Portas Universais porque qualquer outra função lógica booleana existente (AND, OR, NOT, XOR) pode ser perfeitamente implementada interconectando exclusivamente portas NAND ou exclusivamente portas NOR.",
  },
  {
    question: "Quais as duas (2) maneiras aceitáveis de lidar com entradas NÃO usadas, em uma porta E?",
    options: ["Ligá-las a VCC por resistor de 1kΩ","Deixá-las desconectadas","Ligá-las ao terra sem resistor","Ligá-las a uma das entradas já em uso","Usar pull-down ativo"],
    answer: "Ligá-las a VCC por resistor de 1kΩ",
    explanation: "Por que a resposta correta é \"Ligá-las a VCC por resistor de 1kΩ\"? Analisando o enunciado (\"Quais as duas (2) maneiras aceitáveis de lidar com entradas NÃO usadas, em uma porta E?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Ligá-las a VCC por resistor de 1kΩ\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual das subfamílias TTL é melhor em altas frequências?",
    options: ["54AS/74AS","74LS","74HC","74HC(T)","74S"],
    answer: "54AS/74AS",
    explanation: "Por que a resposta correta é \"54AS/74AS\"? Analisando o enunciado (\"Qual das subfamílias TTL é melhor em altas frequências?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"54AS/74AS\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual fator limita o FAN-OUT de dispositivos CMOS?",
    options: ["Frequência de operação","Tensão de alimentação","Temperatura","Número de pinos","Corrente de fuga"],
    answer: "Frequência de operação",
    explanation: "Por que a resposta correta é \"Frequência de operação\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "Qual subfamília combina as melhores características da lógica unipolar e da bipolar?",
    options: ["BICMOS","CMOS","TTL","ECL","DTL"],
    answer: "BICMOS",
    explanation: "Por que a resposta correta é \"BICMOS\"? Analisando o enunciado (\"Qual subfamília combina as melhores características da lógica unipolar e da bipolar?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"BICMOS\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual a vantagem de um Cl de alta densidade?",
    options: ["Menor espaço e menor consumo","Maior consumo","Maior temperatura","Maior ruído","Maior tensão"],
    answer: "Menor espaço e menor consumo",
    explanation: "Por que a resposta correta é \"Menor espaço e menor consumo\"? Analisando o enunciado (\"Qual a vantagem de um Cl de alta densidade?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Menor espaço e menor consumo\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual a série de baixa tensão que é eletricamente compatível com TTL?",
    options: ["74LVT","74HC","74LS","74HCT","74ACT"],
    answer: "74LVT",
    explanation: "Por que a resposta correta é \"74LVT\"? Analisando o enunciado (\"Qual a série de baixa tensão que é eletricamente compatível com TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"74LVT\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Como uma CMOS, com VDD > 5V, pode interfacear outra TTL?",
    options: ["Usando conversor de níveis","Ligando diretamente","Usando apenas resistores","Usando diodos Schottky","Não é possível"],
    answer: "Usando conversor de níveis",
    explanation: "Por que a resposta correta é \"Usando conversor de níveis\"? Analisando o enunciado (\"Como uma CMOS, com VDD > 5V, pode interfacear outra TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Usando conversor de níveis\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Em um circuito de interface, qual a função de um conversor de níveis?",
    options: ["Converter alta tensão para baixa e vice-versa","Amplificar sinais","Filtrar ruídos","Sincronizar clocks","Multiplexar canais"],
    answer: "Converter alta tensão para baixa e vice-versa",
    explanation: "Por que a resposta correta é \"Converter alta tensão para baixa e vice-versa\"? Analisando o enunciado (\"Em um circuito de interface, qual a função de um conversor de níveis?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Converter alta tensão para baixa e vice-versa\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quantas variáveis de seleção, no mínimo, são necessárias para o dispositivo, sabendo que um certo multiplexador pode chavear de 1 a 48 canais de dados de entrada para saída?",
    options: ["5","6","4","7","8"],
    answer: "6",
    explanation: "Por que a resposta correta é \"6\"? Em um Multiplexador, a relação matemática entre o número de variáveis de seleção N e a quantidade de canais C é 2^N >= C. Para 3 canais: 2^2 = 4 >= 3 (logo N=2). Para 15 canais: 2^4 = 16 >= 15 (logo N=4). Para 25 canais: 2^5 = 32 >= 25 (logo N=5). Para 36 canais: 2^6 = 64 >= 36 (logo N=6). Portanto, a sequência correta de variáveis de seleção é 2, 4, 5 e 6.",
  },
  {
    question: "Quantas entradas possuem as portas AND, utilizadas na confecção do gerador de produtos canônicos, pelo processo de matriz de simples encadeamento?",
    options: ["2","3","4","5","8"],
    answer: "2",
    explanation: "Por que a resposta correta é \"2\"? Analisando o enunciado (\"Quantas entradas possuem as portas AND, utilizadas na confecção do gerador de produtos canônicos, pelo processo de matriz de simples encadeamento?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"2\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "De que forma podemos calcular o número de portas de uma matriz de simples encadeamento?",
    options: ["N = 2^(n+1) - 4","N = 2^n","N = n^2","N = 2^(n-1)","N = 2^(2n) - 1"],
    answer: "N = 2^(n+1) - 4",
    explanation: "Por que a resposta correta é \"N = 2^(n+1) - 4\"? Analisando o enunciado (\"De que forma podemos calcular o número de portas de uma matriz de simples encadeamento?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"N = 2^(n+1) - 4\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é o circuito utilizado para enviar um certo número de informações, contidas em vários canais de entrada, à um só canal de saída?",
    options: ["Multiplexador","Demultiplexador","Mux-Demux","Switch","Multiplicador"],
    answer: "Multiplexador",
    explanation: "Por que a resposta correta é \"Multiplexador\"? Analisando o enunciado (\"Qual é o circuito utilizado para enviar um certo número de informações, contidas em vários canais de entrada, à um só canal de saída?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Multiplexador\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a interface usada para interligar um circuito CMOS a um TTL?",
    options: ["Buffers conversores / séries HC/HCT","Ligação direta","Resistores pull-up","Diodos zener","Transformadores"],
    answer: "Buffers conversores / séries HC/HCT",
    explanation: "Por que a resposta correta é \"Buffers conversores / séries HC/HCT\"? Analisando o enunciado (\"Qual é a interface usada para interligar um circuito CMOS a um TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Buffers conversores / séries HC/HCT\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quais são os limites de tensão de entrada de um circuito CMOS, na faixa de nível lógico baixo?",
    options: ["0 a 30% do VDD","0 a 50% do VDD","30 a 70% do VDD","50 a 100% do VDD","10 a 40% do VDD"],
    answer: "0 a 30% do VDD",
    explanation: "Por que a resposta correta é \"0 a 30% do VDD\"? Analisando o enunciado (\"Quais são os limites de tensão de entrada de um circuito CMOS, na faixa de nível lógico baixo?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"0 a 30% do VDD\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quais são as duas (2) vantagens da família CMOS em relação a TTL?",
    options: ["Menor consumo e maior densidade","Maior consumo e maior velocidade","Maior imunidade e maior tensão","Menor velocidade e menor densidade","Maior fan-out e maior consumo"],
    answer: "Menor consumo e maior densidade",
    explanation: "Por que a resposta correta é \"Menor consumo e maior densidade\"? Analisando o enunciado (\"Quais são as duas (2) vantagens da família CMOS em relação a TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Menor consumo e maior densidade\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quais são os três (3) estados encontrados na configuração de bloco lógico TRI STATE?",
    options: ["Alto, baixo e alta impedância","Alto, baixo e indefinido","Entrada, saída e tri-state","Set, reset e hold","0,1 e X"],
    answer: "Alto, baixo e alta impedância",
    explanation: "Por que a resposta correta é \"Alto, baixo e alta impedância\"? Analisando o enunciado (\"Quais são os três (3) estados encontrados na configuração de bloco lógico TRI STATE?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Alto, baixo e alta impedância\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O que devemos fazer com as entradas NÃO usadas de portas NAND, confeccionadas com família TTL?",
    options: ["Ligá-las a VCC por resistor 1kΩ","Deixá-las flutuando","Ligá-las ao terra direto","Usar pull-down ativo","Conectar a uma entrada usada"],
    answer: "Ligá-las a VCC por resistor 1kΩ",
    explanation: "Por que a resposta correta é \"Ligá-las a VCC por resistor 1kΩ\"? Analisando o enunciado (\"O que devemos fazer com as entradas NÃO usadas de portas NAND, confeccionadas com família TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Ligá-las a VCC por resistor 1kΩ\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Para que serve o número 192 da nomenclatura MM74C192N?",
    options: ["Define a função do CI: contador síncrono crescente/decrescente de 4 bits","Define a voltagem de trabalho","Define o encapsulamento","Define o fabricante","Define a série"],
    answer: "Define a função do CI: contador síncrono crescente/decrescente de 4 bits",
    explanation: "Por que a resposta correta é \"Define a função do CI: contador síncrono crescente/decrescente de 4 bits\"? Analisando o enunciado (\"Para que serve o número 192 da nomenclatura MM74C192N?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Define a função do CI: contador síncrono crescente/decrescente de 4 bits\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O FAN-OUT está relacionado com as tensões de saída e de entrada dos blocos lógicos. Justifique.",
    options: ["Está relacionado primordialmente com as correntes máximas de saída e de entrada","Está relacionado apenas com tensões","Está relacionado com o número de pinos","Está relacionado com a temperatura","Está relacionado com a impedância de entrada"],
    answer: "Está relacionado primordialmente com as correntes máximas de saída e de entrada",
    explanation: "Por que a resposta correta é \"Está relacionado primordialmente com as correntes máximas de saída e de entrada\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "De que depende a quantidade de portas dentro de um CI?",
    options: ["Da escala de integração (SSI, MSI, LSI, etc.)","Da voltagem de alimentação","Do tipo de encapsulamento","Da velocidade de comutação","Do fabricante"],
    answer: "Da escala de integração (SSI, MSI, LSI, etc.)",
    explanation: "Por que a resposta correta é \"Da escala de integração (SSI, MSI, LSI, etc.)\"? Analisando o enunciado (\"De que depende a quantidade de portas dentro de um CI?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Da escala de integração (SSI, MSI, LSI, etc.)\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual o comportamento do MOS canal N, quando a tensão de limiar, VT, for maior do que VGS?",
    options: ["Não conduz","Conduz fortemente","Fica em curto","Opera em saturação","Opera em linear"],
    answer: "Não conduz",
    explanation: "Por que a resposta correta é \"Não conduz\"? Analisando o enunciado (\"Qual o comportamento do MOS canal N, quando a tensão de limiar, VT, for maior do que VGS?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Não conduz\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual a faixa de temperatura para as séries 54 e 74 da família TTL?",
    options: ["Série 74: 0°C a +70°C; Série 54: -55°C a +125°C","Série 74: -40°C a +85°C; Série 54: -55°C a +125°C","Série 74: 0°C a +85°C; Série 54: -55°C a +125°C","Série 74: 0°C a +70°C; Série 54: -40°C a +85°C","Série 74: -55°C a +125°C; Série 54: 0°C a +70°C"],
    answer: "Série 74: 0°C a +70°C; Série 54: -55°C a +125°C",
    explanation: "Por que a resposta correta é \"Série 74: 0°C a +70°C; Série 54: -55°C a +125°C\"? Os circuitos integrados digitais TTL da série comercial (identificados pelo prefixo 74, ex: 7400, 74LS04) são fabricados e normatizados para garantir operação estável e precisão dos níveis lógicos dentro da faixa de temperatura comercial de 0°C a +70°C, com tensão nominal de 5V (±5%). A série militar (prefixo 54) atende à faixa mais severa de -55°C a +125°C.",
  },
  {
    question: "Quais as maneiras corretas de se ligar entradas NÃO usadas de uma porta NOU?",
    options: ["Ligar a uma das entradas usadas ou ligar ao terra (nível 0)","Deixar flutuando","Ligar a VCC direto","Usar resistor de pull-down e pull-up simultaneamente","Conectar a um capacitor"],
    answer: "Ligar a uma das entradas usadas ou ligar ao terra (nível 0)",
    explanation: "Por que a resposta correta é \"Ligar a uma das entradas usadas ou ligar ao terra (nível 0)\"? Analisando o enunciado (\"Quais as maneiras corretas de se ligar entradas NÃO usadas de uma porta NOU?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Ligar a uma das entradas usadas ou ligar ao terra (nível 0)\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O que devemos fazer para evitar que pulsos de alta frequência gerados na linha de alimentação prejudiquem o sistema?",
    options: ["Usar capacitores de desacoplamento entre VCC e terra perto de cada CI","Aumentar a tensão de alimentação","Diminuir a frequência de clock","Usar apenas resistores de pull-up","Substituir por CI CMOS"],
    answer: "Usar capacitores de desacoplamento entre VCC e terra perto de cada CI",
    explanation: "Por que a resposta correta é \"Usar capacitores de desacoplamento entre VCC e terra perto de cada CI\"? Analisando o enunciado (\"O que devemos fazer para evitar que pulsos de alta frequência gerados na linha de alimentação prejudiquem o sistema?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Usar capacitores de desacoplamento entre VCC e terra perto de cada CI\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Descreva o funcionamento da porta NAND TTL quando a entrada A está em 0 e B em 1.",
    options: ["Saída será nível lógico alto","Saída será nível lógico baixo","Saída será tri-state","Saída será indefinida","Saída alterna"],
    answer: "Saída será nível lógico alto",
    explanation: "Por que a resposta correta é \"Saída será nível lógico alto\"? Na Álgebra de Boole e no projeto digital, as portas NAND (E-Não) e NOR (Ou-Não) são consagradas como Portas Universais porque qualquer outra função lógica booleana existente (AND, OR, NOT, XOR) pode ser perfeitamente implementada interconectando exclusivamente portas NAND ou exclusivamente portas NOR.",
  },
  {
    question: "Descreva em que situação usamos um circuito de Interface.",
    options: ["Quando é necessário interligar dispositivos com características elétricas diferentes","Quando queremos aumentar a largura de banda","Quando precisamos multiplexar vários sinais","Quando queremos reduzir o consumo de potência","Quando precisamos de isolamento galvânico"],
    answer: "Quando é necessário interligar dispositivos com características elétricas diferentes",
    explanation: "Por que a resposta correta é \"Quando é necessário interligar dispositivos com características elétricas diferentes\"? Analisando o enunciado (\"Descreva em que situação usamos um circuito de Interface.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Quando é necessário interligar dispositivos com características elétricas diferentes\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Justifique por que o consumo de potência aumenta com a frequência em circuitos CMOS.",
    options: ["Porque mais comutações por segundo carregam/descarregam capacitâncias de carga","Porque a tensão aumenta com a frequência","Porque o número de portas aumenta","Porque a resistência interna aumenta","Porque o calor dissipa menos"],
    answer: "Porque mais comutações por segundo carregam/descarregam capacitâncias de carga",
    explanation: "Por que a resposta correta é \"Porque mais comutações por segundo carregam/descarregam capacitâncias de carga\"? Analisando o enunciado (\"Justifique por que o consumo de potência aumenta com a frequência em circuitos CMOS.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Porque mais comutações por segundo carregam/descarregam capacitâncias de carga\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Por que componentes CMOS são mais indicados para ambientes ruidosos que os TTLs?",
    options: ["Porque possuem maior margem de ruído","Porque consomem mais potência","Porque são mais rápidos","Porque operam em tensões mais altas","Porque têm mais pinos"],
    answer: "Porque possuem maior margem de ruído",
    explanation: "Por que a resposta correta é \"Porque possuem maior margem de ruído\"? Analisando o enunciado (\"Por que componentes CMOS são mais indicados para ambientes ruidosos que os TTLs?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Porque possuem maior margem de ruído\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Por que a velocidade de comutação do CMOS aumenta com a tensão de alimentação?",
    options: ["Porque a resistência interna RON diminui com VDD","Porque a tensão aumenta a temperatura","Porque a capacitância aumenta","Porque a corrente diminui","Porque o ganho de transistor cai"],
    answer: "Porque a resistência interna RON diminui com VDD",
    explanation: "Por que a resposta correta é \"Porque a resistência interna RON diminui com VDD\"? Analisando o enunciado (\"Por que a velocidade de comutação do CMOS aumenta com a tensão de alimentação?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Porque a resistência interna RON diminui com VDD\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "O aumento na densidade gerou redução do consumo? Justifique.",
    options: ["Não: maior densidade aumentou consumo por unidade de área, exigindo redução de tensão","Sim: reduz necessariamente o consumo","Sim: aumenta a eficiência termal","Não: aumenta a impedância","Depende do encapsulamento"],
    answer: "Não: maior densidade aumentou consumo por unidade de área, exigindo redução de tensão",
    explanation: "Por que a resposta correta é \"Não: maior densidade aumentou consumo por unidade de área, exigindo redução de tensão\"? Analisando o enunciado (\"O aumento na densidade gerou redução do consumo? Justifique.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Não: maior densidade aumentou consumo por unidade de área, exigindo redução de tensão\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Como os fabricantes resolveram problemas de isolamento em CIs de alta densidade?",
    options: ["Reduzindo tensões de alimentação","Aumentando o encapsulamento","Usando materiais isolantes especiais","Separando pinos","Aplicando shield metálico"],
    answer: "Reduzindo tensões de alimentação",
    explanation: "Por que a resposta correta é \"Reduzindo tensões de alimentação\"? Analisando o enunciado (\"Como os fabricantes resolveram problemas de isolamento em CIs de alta densidade?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Reduzindo tensões de alimentação\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Cite duas vantagens do aumento na densidade de integração.",
    options: ["Redução do tpd e economia de espaço","Aumento do consumo e aumento do preço","Maior temperatura e menor vida útil","Mais pinos e maior tensão","Maior ruído e menor precisão"],
    answer: "Redução do tpd e economia de espaço",
    explanation: "Por que a resposta correta é \"Redução do tpd e economia de espaço\"? Analisando o enunciado (\"Cite duas vantagens do aumento na densidade de integração.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Redução do tpd e economia de espaço\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quais as características combinadas na lógica BICMOS?",
    options: ["Baixo consumo da CMOS e alta velocidade da bipolar","Alta tensão e baixo consumo","Maior fan-out e menor VIL","Mais portas e menor custo","Maior temperatura e menor tolerância"],
    answer: "Baixo consumo da CMOS e alta velocidade da bipolar",
    explanation: "Por que a resposta correta é \"Baixo consumo da CMOS e alta velocidade da bipolar\"? Analisando o enunciado (\"Quais as características combinadas na lógica BICMOS?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Baixo consumo da CMOS e alta velocidade da bipolar\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Descreva o funcionamento da porta NOR CMOS (Figura 109) quando as entradas A e B estão em nível 0.",
    options: ["Transistores P conduzem e N cortam resultando em saída 1","Transistores N conduzem e P cortam resultando em saída 0","Ambos conduzem resultando em curto","Nenhum conduz resultando em X","Transistores alternam estado"],
    answer: "Transistores P conduzem e N cortam resultando em saída 1",
    explanation: "Por que a resposta correta é \"Transistores P conduzem e N cortam resultando em saída 1\"? Na Álgebra de Boole e no projeto digital, as portas NAND (E-Não) e NOR (Ou-Não) são consagradas como Portas Universais porque qualquer outra função lógica booleana existente (AND, OR, NOT, XOR) pode ser perfeitamente implementada interconectando exclusivamente portas NAND ou exclusivamente portas NOR.",
    image: circuito109
  },
  {
    question: "Defina Tempo de Atraso de Propagação.",
    options: ["Intervalo de tempo para um bloco mudar de estado após mudança na entrada","Tempo para estabilizar a alimentação","Tempo de subida do sinal","Tempo de chegada do clock","Tempo de amostragem"],
    answer: "Intervalo de tempo para um bloco mudar de estado após mudança na entrada",
    explanation: "Por que a resposta correta é \"Intervalo de tempo para um bloco mudar de estado após mudança na entrada\"? O tempo de atraso de propagação (t_pd) é o tempo que o sinal leva para atravessar o circuito integrado desde a entrada até a mudança de estado na saída. A principal vantagem dos circuitos TTL padrão frente aos circuitos MOS padrão tradicionais (como a série 4000B) é o menor tempo de atraso de propagação, proporcionando frequências e velocidades de chaveamento significativamente mais elevadas.",
  },
  {
    question: "Descreva o tipo de encapsulamento PLCC.",
    options: ["Pinos em formato J curvados sob o CI","Pinos estilo DIP","Encapsulamento SMD sem pinos","Encapsulamento TO-220","Encapsulamento BGA"],
    answer: "Pinos em formato J curvados sob o CI",
    explanation: "Por que a resposta correta é \"Pinos em formato J curvados sob o CI\"? Analisando o enunciado (\"Descreva o tipo de encapsulamento PLCC.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Pinos em formato J curvados sob o CI\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Descreva o tipo de matriz muito usado na estrutura de memórias.",
    options: ["Matriz de Duplo Encadeamento","Matriz de Simples Encadeamento","Matriz de Karnaugh","Matriz de Soma de Produto","Matriz de De Morgan"],
    answer: "Matriz de Duplo Encadeamento",
    explanation: "Por que a resposta correta é \"Matriz de Duplo Encadeamento\"? Analisando o enunciado (\"Descreva o tipo de matriz muito usado na estrutura de memórias.\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Matriz de Duplo Encadeamento\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  }
];

quizzes["exercicios-moodle-et-d2"] = [
  {
    question: "O que caracteriza a lógica positiva?",
    options: [
      "O estado lógico 1 é representado por tensão negativa.",
      "O estado lógico 1 é superior ao estado lógico 0 e é representado por uma tensão positiva.",
      "O estado lógico 0 é representado por tensão positiva e o estado 1 por 0 V.",
      "Os estados lógicos não dependem da tensão."
    ],
    answer: "O estado lógico 1 é superior ao estado lógico 0 e é representado por uma tensão positiva.",
    explanation: "Por que a resposta correta é \"O estado lógico 1 é superior ao estado lógico 0 e é representado por uma tensão positiva.\"? Na convenção padrão de Lógica Positiva, o nível de tensão mais positivo ou elevado (por exemplo, +5V no TTL) é mapeado para o estado lógico 1 (Verdadeiro), e o nível de tensão inferior (geralmente 0V) é mapeado para o estado lógico 0 (Falso).",
  },
  {
    question: "Qual dos exemplos representa corretamente a lógica positiva?",
    options: [
      "-5 V = 1 e 0 V = 0.",
      "+5 V = 0 e 0 V = 1.",
      "+5 V = 1 e 0 V = 0.",
      "+12 V = 0 e -12 V = 1."
    ],
    answer: "+5 V = 1 e 0 V = 0.",
    explanation: "Por que a resposta correta é \"+5 V = 1 e 0 V = 0.\"? Em Lógica Positiva, o potencial mais positivo corresponde ao dígito 1 e o potencial inferior corresponde ao dígito 0. Portanto, o exemplo prático de +5 V = 1 e 0 V = 0 representa de forma canônica essa convenção na eletrônica.",
  },
  {
    question: "O que caracteriza a lógica negativa?",
    options: [
      "O estado lógico 1 é superior ao estado lógico 0.",
      "O estado lógico 0 é superior ao estado lógico 1 e o nível lógico 1 é representado por tensão negativa.",
      "O estado lógico 1 sempre corresponde a +5 V.",
      "O estado lógico 0 é representado por tensão positiva obrigatoriamente."
    ],
    answer: "O estado lógico 0 é superior ao estado lógico 1 e o nível lógico 1 é representado por tensão negativa.",
    explanation: "Por que a resposta correta é \"O estado lógico 0 é superior ao estado lógico 1 e o nível lógico 1 é representado por tensão negativa.\"? Na convenção de Lógica Negativa, o mapeamento dos potenciais é invertido: o potencial mais positivo/elevado é atribuído ao dígito 0, enquanto o potencial mais negativo/inferior é atribuído ao dígito 1. Por isso, a afirmação de que o estado 0 é superior e o nível 1 é representado por tensão negativa está rigorosamente correta.",
  },
  {
    question: "O que determina as escalas de integração dos circuitos integrados?",
    options: [
      "O tipo de encapsulamento.",
      "A tensão de alimentação.",
      "A quantidade de portas ou dispositivos contidos no chip.",
      "O número de pinos."
    ],
    answer: "A quantidade de portas ou dispositivos contidos no chip.",
    explanation: "Por que a resposta correta é \"A quantidade de portas ou dispositivos contidos no chip.\"? A classificação das escalas de integração (SSI, MSI, LSI, VLSI, ULSI, GSI) é padronizada pela indústria de semicondutores quantificando exatamente a densidade de componentes: o número de portas lógicas equivalentes ou transistores integrados em um único chip de silício.",
  },
  {
    question: "Segundo a classificação GSI, um circuito integrado possui, no mínimo, quantas portas?",
    options: [
      "10.000 portas.",
      "100.000 portas.",
      "500.000 portas.",
      "1.000.000 de portas."
    ],
    answer: "1.000.000 de portas.",
    explanation: "Por que a resposta correta é \"1.000.000 de portas.\"? A escala GSI (Giga Scale Integration ou Integração em Gigaescala) classifica os circuitos integrados de densidade ultra-elevada, sendo o padrão técnico definido para chips que agrupam mais de 1.000.000 (um milhão) de portas lógicas em um único encapsulamento de silício.",
  },
  {
    question: "Qual é a densidade da escala LSI (Large Scale Integration)?",
    options: [
      "10 a 99 portas por chip.",
      "100 a 999 portas por chip.",
      "1.000 a 9.999 portas por chip.",
      "Acima de 1 milhão de portas."
    ],
    answer: "100 a 999 portas por chip.",
    explanation: "Por que a resposta correta é \"100 a 999 portas por chip.\"? Conforme a norma de classificação por escalas de integração (SSI, MSI, LSI, VLSI, ULSI, GSI), a alternativa \"100 a 999 portas por chip.\" indica com exatidão a quantidade de portas lógicas por chip que define essa categoria da eletrônica digital.",
  },
  {
    question: "Qual dispositivo é típico da escala ULSI?",
    options: [
      "Relé eletromecânico.",
      "Microprocessador avançado.",
      "Diodo Zener.",
      "Transistor bipolar discreto."
    ],
    answer: "Microprocessador avançado.",
    explanation: "Por que a resposta correta é \"Microprocessador avançado.\"? Conforme a norma de classificação por escalas de integração (SSI, MSI, LSI, VLSI, ULSI, GSI), a alternativa \"Microprocessador avançado.\" indica com exatidão a quantidade de portas lógicas por chip que define essa categoria da eletrônica digital.",
  },
  {
    question: "Qual é o tipo de configuração de saída da maioria das portas lógicas TTL?",
    options: [
      "Open Collector.",
      "Tri-State.",
      "Totem-Pole.",
      "Push-Pull CMOS."
    ],
    answer: "Totem-Pole.",
    explanation: "Por que a resposta correta é \"Totem-Pole.\"? Analisando o enunciado (\"Qual é o tipo de configuração de saída da maioria das portas lógicas TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Totem-Pole.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Em uma porta NAND TTL, qual será o nível lógico de saída quando a entrada estiver em aberto?",
    options: [
      "Nível lógico 1.",
      "Alta impedância.",
      "Nível lógico 0.",
      "Indeterminado."
    ],
    answer: "Nível lógico 0.",
    explanation: "Por que a resposta correta é \"Nível lógico 0.\"? Na Álgebra de Boole e no projeto digital, as portas NAND (E-Não) e NOR (Ou-Não) são consagradas como Portas Universais porque qualquer outra função lógica booleana existente (AND, OR, NOT, XOR) pode ser perfeitamente implementada interconectando exclusivamente portas NAND ou exclusivamente portas NOR.",
  },
  {
    question: "Qual inovação tecnológica foi utilizada na entrada dos circuitos TTL?",
    options: [
      "Transistores Darlington.",
      "MOSFET de canal P.",
      "Transistores bipolares multiemissores.",
      "Amplificadores operacionais."
    ],
    answer: "Transistores bipolares multiemissores.",
    explanation: "Por que a resposta correta é \"Transistores bipolares multiemissores.\"? Analisando o enunciado (\"Qual inovação tecnológica foi utilizada na entrada dos circuitos TTL?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Transistores bipolares multiemissores.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "A família TTL é derivada de qual família lógica?",
    options: [
      "RTL.",
      "CMOS.",
      "DTL.",
      "ECL."
    ],
    answer: "DTL.",
    explanation: "Por que a resposta correta é \"DTL.\"? Analisando o enunciado (\"A família TTL é derivada de qual família lógica?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"DTL.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a tensão mínima de alimentação da série TTL 74XXX?",
    options: [
      "4,0 V.",
      "4,5 V.",
      "4,75 V.",
      "5,5 V."
    ],
    answer: "4,75 V.",
    explanation: "Por que a resposta correta é \"4,75 V.\"? Analisando o enunciado (\"Qual é a tensão mínima de alimentação da série TTL 74XXX?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"4,75 V.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a faixa de alimentação da série TTL 54XXX?",
    options: [
      "3,3 V a 5 V.",
      "4,5 V a 5,5 V.",
      "5 V a 6 V.",
      "4,75 V a 5,25 V."
    ],
    answer: "4,5 V a 5,5 V.",
    explanation: "Por que a resposta correta é \"4,5 V a 5,5 V.\"? Analisando o enunciado (\"Qual é a faixa de alimentação da série TTL 54XXX?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"4,5 V a 5,5 V.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é o fan-out típico da família TTL padrão?",
    options: [
      "5 blocos.",
      "8 blocos.",
      "10 blocos.",
      "20 blocos."
    ],
    answer: "10 blocos.",
    explanation: "Por que a resposta correta é \"10 blocos.\"? O Fan-Out (fator de carga de saída) define especificamente o número máximo de entradas padronizadas da mesma família lógica que a saída de uma única porta consegue alimentar simultaneamente, mantendo a tensão de saída dentro dos limites seguros garantidos (V_OH para nível alto e V_OL para nível baixo).",
  },
  {
    question: "Qual é o tempo médio de atraso de propagação da TTL padrão?",
    options: [
      "1 ns.",
      "5 ns.",
      "10 ns.",
      "100 ns."
    ],
    answer: "10 ns.",
    explanation: "Por que a resposta correta é \"10 ns.\"? O tempo de atraso de propagação (t_pd) é o tempo que o sinal leva para atravessar o circuito integrado desde a entrada até a mudança de estado na saída. A principal vantagem dos circuitos TTL padrão frente aos circuitos MOS padrão tradicionais (como a série 4000B) é o menor tempo de atraso de propagação, proporcionando frequências e velocidades de chaveamento significativamente mais elevadas.",
  },
  {
    question: "Qual é a imunidade ao ruído da família TTL?",
    options: [
      "0,2 V.",
      "0,4 V.",
      "1,0 V.",
      "5,0 V."
    ],
    answer: "0,4 V.",
    explanation: "Por que a resposta correta é \"0,4 V.\"? A Margem de Ruído (ou imunidade ao ruído) é a máxima amplitude de tensão espúria ou ruído que pode se sobrepor ao sinal de entrada sem induzir comutação falsa na porta lógica. É calculada pelas diferenças V_OH(min) - V_IH(min) no nível lógico alto e V_IL(max) - V_OL(max) no nível lógico baixo.",
  },
  {
    question: "Qual bloco lógico TTL não possui resistor de coletor ligado ao +VCC internamente?",
    options: [
      "Totem-Pole.",
      "Tri-State.",
      "Open Collector.",
      "Buffer."
    ],
    answer: "Open Collector.",
    explanation: "Por que a resposta correta é \"Open Collector.\"? Analisando o enunciado (\"Qual bloco lógico TTL não possui resistor de coletor ligado ao +VCC internamente?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Open Collector.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quem controla externamente a corrente de coletor em uma saída Open Collector?",
    options: [
      "Capacitor.",
      "Diodo.",
      "Resistor Pull-up.",
      "Indutor."
    ],
    answer: "Resistor Pull-up.",
    explanation: "Por que a resposta correta é \"Resistor Pull-up.\"? Analisando o enunciado (\"Quem controla externamente a corrente de coletor em uma saída Open Collector?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Resistor Pull-up.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual a principal vantagem do aumento da corrente de coletor?",
    options: [
      "Reduz a tensão de alimentação.",
      "Aumenta a frequência de operação.",
      "Permite aumentar o fan-out.",
      "Reduz a temperatura do circuito."
    ],
    answer: "Permite aumentar o fan-out.",
    explanation: "Por que a resposta correta é \"Permite aumentar o fan-out.\"? Analisando o enunciado (\"Qual a principal vantagem do aumento da corrente de coletor?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Permite aumentar o fan-out.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual tipo de saída apresenta um terceiro estado de alta impedância?",
    options: [
      "Totem-Pole.",
      "Open Collector.",
      "Tri-State.",
      "Darlington."
    ],
    answer: "Tri-State.",
    explanation: "Por que a resposta correta é \"Tri-State.\"? As saídas Tri-State possuem três condições operacionais: Nível Lógico 1 (Alto), Nível Lógico 0 (Baixo) e Alta Impedância (Hi-Z). No estado de Alta Impedância, a saída se desconecta eletronicamente do circuito (circuito aberto), permitindo que múltiplos dispositivos compartilhem o mesmo barramento de dados sem causar conflitos ou curto-circuitos.",
  },
  {
    question: "Ao selecionar uma família lógica, quais características devem ser consideradas?",
    options: [
      "Peso e tamanho.",
      "Velocidade e potência.",
      "Número de pinos e cor.",
      "Temperatura e encapsulamento."
    ],
    answer: "Velocidade e potência.",
    explanation: "Por que a resposta correta é \"Velocidade e potência.\"? Analisando o enunciado (\"Ao selecionar uma família lógica, quais características devem ser consideradas?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Velocidade e potência.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a versão TTL mais rápida?",
    options: [
      "74LS.",
      "74ALS.",
      "74AS.",
      "74C."
    ],
    answer: "74AS.",
    explanation: "Por que a resposta correta é \"74AS.\"? Analisando o enunciado (\"Qual é a versão TTL mais rápida?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"74AS.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quais subfamílias TTL possuem menor consumo de potência?",
    options: [
      "74S e 74AS.",
      "74LS e 74ALS.",
      "74H e 74AS.",
      "74F e 74S."
    ],
    answer: "74LS e 74ALS.",
    explanation: "Por que a resposta correta é \"74LS e 74ALS.\"? Analisando o enunciado (\"Quais subfamílias TTL possuem menor consumo de potência?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"74LS e 74ALS.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é o tipo de saída do CI 7406?",
    options: [
      "Totem-Pole.",
      "Tri-State.",
      "Coletor Aberto.",
      "Buffer CMOS."
    ],
    answer: "Coletor Aberto.",
    explanation: "Por que a resposta correta é \"Coletor Aberto.\"? Analisando o enunciado (\"Qual é o tipo de saída do CI 7406?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Coletor Aberto.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Onde normalmente são utilizados os CIs que contêm buffers?",
    options: [
      "Em reguladores de tensão.",
      "Em interfaces para aumentar a capacidade de corrente.",
      "Em fontes chaveadas.",
      "Em osciladores."
    ],
    answer: "Em interfaces para aumentar a capacidade de corrente.",
    explanation: "Por que a resposta correta é \"Em interfaces para aumentar a capacidade de corrente.\"? Analisando o enunciado (\"Onde normalmente são utilizados os CIs que contêm buffers?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Em interfaces para aumentar a capacidade de corrente.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Que tipo de transistor é utilizado na família CMOS?",
    options: [
      "Bipolar NPN.",
      "Bipolar PNP.",
      "MOS complementares (canal N e canal P).",
      "JFET."
    ],
    answer: "MOS complementares (canal N e canal P).",
    explanation: "Por que a resposta correta é \"MOS complementares (canal N e canal P).\"? Analisando o enunciado (\"Que tipo de transistor é utilizado na família CMOS?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"MOS complementares (canal N e canal P).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual tipo de MOSFET é utilizado nos CIs digitais CMOS?",
    options: [
      "Depleção.",
      "Enriquecimento (modo de indução).",
      "Canal duplo.",
      "MOS de potência."
    ],
    answer: "Enriquecimento (modo de indução).",
    explanation: "Por que a resposta correta é \"Enriquecimento (modo de indução).\"? Analisando o enunciado (\"Qual tipo de MOSFET é utilizado nos CIs digitais CMOS?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Enriquecimento (modo de indução).\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quais são as séries comerciais da família CMOS?",
    options: [
      "74LS, 74ALS e 74AS.",
      "54C/74C, 4000A e 4000B.",
      "74HC e 74HCT apenas.",
      "RTL e DTL."
    ],
    answer: "54C/74C, 4000A e 4000B.",
    explanation: "Por que a resposta correta é \"54C/74C, 4000A e 4000B.\"? Analisando o enunciado (\"Quais são as séries comerciais da família CMOS?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"54C/74C, 4000A e 4000B.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual é a faixa de temperatura típica dos CIs CMOS comuns?",
    options: [
      "0°C a 70°C.",
      "-20°C a 80°C.",
      "-40°C a +85°C.",
      "-55°C a +125°C."
    ],
    answer: "-40°C a +85°C.",
    explanation: "Por que a resposta correta é \"-40°C a +85°C.\"? Os circuitos integrados digitais TTL da série comercial (identificados pelo prefixo 74, ex: 7400, 74LS04) são fabricados e normatizados para garantir operação estável e precisão dos níveis lógicos dentro da faixa de temperatura comercial de 0°C a +70°C, com tensão nominal de 5V (±5%). A série militar (prefixo 54) atende à faixa mais severa de -55°C a +125°C.",
  },
  {
    question: "Qual é a faixa de alimentação da série CMOS 4000B?",
    options: [
      "1 V a 5 V.",
      "3 V a 18 V.",
      "5 V a 12 V.",
      "10 V a 15 V."
    ],
    answer: "3 V a 18 V.",
    explanation: "Por que a resposta correta é \"3 V a 18 V.\"? Analisando o enunciado (\"Qual é a faixa de alimentação da série CMOS 4000B?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"3 V a 18 V.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Em um CI CMOS alimentado com VDD = 10 V, qual é o valor mínimo aproximado de VOH?",
    options: [
      "5 V.",
      "7 V.",
      "9,95 V.",
      "10,5 V."
    ],
    answer: "9,95 V.",
    explanation: "Por que a resposta correta é \"9,95 V.\"? Analisando o enunciado (\"Em um CI CMOS alimentado com VDD = 10 V, qual é o valor mínimo aproximado de VOH?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"9,95 V.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Qual melhoria foi introduzida na série CMOS 4000B em relação à 4000?",
    options: [
      "Memória interna.",
      "Buffer na saída.",
      "Alimentação dupla.",
      "Oscilador interno."
    ],
    answer: "Buffer na saída.",
    explanation: "Por que a resposta correta é \"Buffer na saída.\"? Analisando o enunciado (\"Qual melhoria foi introduzida na série CMOS 4000B em relação à 4000?\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"Buffer na saída.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "No código MM74C192N, o número 192 identifica:",
    options: [
      "O fabricante.",
      "A série CMOS.",
      "A função específica do dispositivo.",
      "A tensão de alimentação."
    ],
    answer: "A função específica do dispositivo.",
    explanation: "Por que a resposta correta é \"A função específica do dispositivo.\"? Analisando o enunciado (\"No código MM74C192N, o número 192 identifica:\"), a teoria e as tabelas-verdade normatizadas na Apostila de Eletrônica Digital comprovam que a alternativa \"A função específica do dispositivo.\" é a única que satisfaz perfeitamente as equações lógicas e o comportamento elétrico do circuito analisado, descartando as demais opções por divergência funcional ou níveis lógicos incompatíveis.",
  },
  {
    question: "Quando utilizamos um circuito Multiplexador (MUX)?",
    options: [
      "Quando desejamos dividir um sinal em várias saídas.",
      "Quando precisamos selecionar uma entre várias entradas e enviá-la para uma única saída.",
      "Para amplificar sinais analógicos.",
      "Para armazenar dados permanentemente."
    ],
    answer: "Quando precisamos selecionar uma entre várias entradas e enviá-la para uma única saída.",
    explanation: "Por que a resposta correta é \"Quando precisamos selecionar uma entre várias entradas e enviá-la para uma única saída.\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"Quando precisamos selecionar uma entre várias entradas e enviá-la para uma única saída.\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
  },
  {
    question: "Qual é a finalidade da entrada de seleção em um MUX?",
    options: [
      "Alimentar o circuito.",
      "Definir a frequência de operação.",
      "Escolher qual entrada será conectada à saída.",
      "Aumentar a corrente de saída."
    ],
    answer: "Escolher qual entrada será conectada à saída.",
    explanation: "Por que a resposta correta é \"Escolher qual entrada será conectada à saída.\"? O Multiplexador (MUX) atua como chave seletora digital de dados. A alternativa \"Escolher qual entrada será conectada à saída.\" expressa corretamente o funcionamento onde o código binário aplicado nas variáveis de seleção determina qual canal de entrada é conectado à saída do circuito.",
  }
];

quizzes["manutencao-dos-sistemas-telefonicos-2"] = manutencao2Questions;
quizzes["eletronica-digital-2-p2"] = eletronica2P2Questions;
quizzes["introducao-aos-microcontroladores-p1"] = microcontroladoresP1Questions;

export const questions: Question[] = quizzes.telefonia;