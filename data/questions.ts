import { manutencao2Questions } from "./manutencao2";
import { eletronica2P2Questions } from "./eletronica2_p2";
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
      question: "O funcionamento em batimentos acústicos (Pings) segue uma lei de software inquebrável estipulada pelo Módulo 2 do SRD-331. Qual o valor do ciclo matemático de temporização ininterrupto entre disparar e escutar?",
      options: [
        "Durações de 2048 microssegundos divididos pelo relógio de quartzo síncrono.",
        "Exatos 7.7 milissegundos para o ciclo total de temporização repetitivo do sistema.",
        "Janelas variáveis de 0,5 Hz dependendo das correntes litorâneas.",
        "Janela de limite Doppler de 60,3 milissegundos contínuos que cortam aos limites mecânicos das chaves SC/SD."
      ],
      answer: "Exatos 7.7 milissegundos para o ciclo total de temporização repetitivo do sistema.",
      explanation: "A arquitetura baseia todo seu ritmo no período de 7.7 milissegundos (7.7 ms) que perfaz um ciclo completo regular de transmissão e audição pelo eco do Doppler Gate.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Compreendendo o tempo de 7.7 ms acima, dentro deste espaço existe a \"Rajada\" real do raio ultrassônico empurrado para a água (Sinal Habilitador XMTE). Quanto tempo dura esse disparo brutal de força?",
      options: [
        "Dura precisamente 1.1 milissegundo de duração sob nível lógico alto a 2 MHz de ressonância.",
        "Estende-se por 0.55 milissegundos enquanto RST 7.5 carrega a matriz de capacitores RAM.",
        "Dura de 1 a 10 minutos, amparado pelas baterias recarregáveis em caso de queima do fusível principal FS2.",
        "Demora o tempo de cruzamento de 14 ondas curtas na camada \"boundary layer\"."
      ],
      answer: "Dura precisamente 1.1 milissegundo de duração sob nível lógico alto a 2 MHz de ressonância.",
      explanation: "Durante o pulso \"XMTE\" ativo (nível alto), ocorrem as transmissões dianteira e traseira; este período específico do sinal dura inflexivelmente 1.1 ms em cada ciclo de 7.7 ms.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "A mente da Unidade Eletrônica é abrigada no Módulo (Placa A2), o qual roda um processamento lógico para separar e analisar a física Doppler através de três Cis (Circuitos Integrados) essenciais. Quais compõem esse trio lógico de núcleo rígido?",
      options: [
        "Amplificador Push-Pull Q2/Q3, Transformador T3 de pico de corrente e Demodulador de Limiar U3.",
        "Uma rede contendo a EPROM de rotinas embarcadas, Célula do Sensor Haste-Revés e a Interface RS-422 auxiliar.",
        "A arquitetura usa relés (RL1/RL2) que transferem as oscilações para um cartão de varistores mecânicos e tacômetros.",
        "Utiliza a CPU 8085 (U19), atrelada ao timer de I/O de memória (U20-8156) e fechada pela lógica de controle embarcado da ROM (EPROM U21)."
      ],
      answer: "Utiliza a CPU 8085 (U19), atrelada ao timer de I/O de memória (U20-8156) e fechada pela lógica de controle embarcado da ROM (EPROM U21).",
      explanation: "O coração computacional que organiza as transmissões e o barramento é o trio de integrados formado pela CPU 8085 (U19), o integrado RAM/Timer 8156 (U20) e a matriz de código EPROM com I/O (U21).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "A inteligência do temporizador baseia-se num fracionamento da rotina via código computacional de linguagem de baixo nível. Como a CPU do SRD-331 orquestra as chaves de pulso eletrônicas (XMTE e WTGTE)?",
      options: [
        "A RAM inibe as contagens por 2048 vezes, até que a EPROM envie sinal \"Dummy Log\" liberando a transmissão em fase mecânica síncrona aos rolamentos do VCS.",
        "O sinal acústico da água é quem induz diretamente os pinos RX e TX de forma orgânica gerando voltagens limpas que são interpretadas isoladas e passivamente.",
        "Através da saída \"TIMER OUT\" da U20 que gera uma rigorosa interrupção RST 7.5. O firmware então conta 14 destas interrupções seguidas de meio milissegundo, e assim ativa logicamente a subida e decida das saídas físicas do disparo (XMTE e WTGTE).",
        "Atua monitorando os displays em cristal líquido (LCD) da master unit via diodos Zener de porta \"AND\" que disparam um gatilho mecânico atrelado ao sensor PROBE na velocidade de 2 MHz exatos."
      ],
      answer: "Através da saída \"TIMER OUT\" da U20 que gera uma rigorosa interrupção RST 7.5. O firmware então conta 14 destas interrupções seguidas de meio milissegundo, e assim ativa logicamente a subida e decida das saídas físicas do disparo (XMTE e WTGTE).",
      explanation: "A CPU lida com interrupções contínuas de hardware \"RST 7.5\" originadas da porta Timer Out. Ao receber, o software conta e manipula a mudança lógica para Alto ou Baixo nos gatilhos de controle principal XMTE e WTGTE de forma ritmada pelas contagens limitadas ao \"14\".",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O Cristal deve receber os imensos 2 MHz estritos de potência para a frequência correta do sonar, porém o Oscilador base na placa mãe do odômetro corre nativamente a 12 MHz (Cristal U9). Que malabarismo digital reduz e afina isso na ponte do pulso \"XMTE\"?",
      options: [
        "A EPROM usa algoritmos aritméticos paralelos para filtrar ecos indesejados da banda de rádio.",
        "Diodos supressores esquentam os 10 MHz excedentes convertendo-os em 10 Watts RMS por transistores buffer.",
        "O pulso liberado e em nível lógico atua tirando o reset num Flip-Flop Contador de \"Ripple\" especial (U13) que então divide perfeitamente o sinal inicial nativo do quartzo (12 MHz) pelo fator seis (6).",
        "Envia a potência primária por divisores analógicos usando potenciômetros de precisão calibráveis R19 com limitadores tipo zener."
      ],
      answer: "O pulso liberado e em nível lógico atua tirando o reset num Flip-Flop Contador de \"Ripple\" especial (U13) que então divide perfeitamente o sinal inicial nativo do quartzo (12 MHz) pelo fator seis (6).",
      explanation: "Com o permissivo XMTE acionado, um contador de ripple é liberado e efetua a divisão lógica direta da onda de 12 MHz por um fator de divisor igual a seis, despejando ao amplificador a oscilação desejada de 2 MHz exata em duração fixada.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Para empurrar a alta carga à antena sob o mar exige-se o amplificador diferencial Q4/Q6 no RF de saída da placa (A1). Porém é preciso balancear seu ganho de forma delicada para não danificar nem o equipamento nem o transdutor. Onde atua fisicamente a calibração de limite deste conjunto primário?",
      options: [
        "Atuando com uma lixa sob a superfície da lente para atenuar o espalhamento térmico antes da ressonância de choque de 115V.",
        "Modificando a resistência das baterias reserva com capacitores de carga.",
        "Através do tacômetro TG2 da Unidade RTU que afina o sinal sincronizando ao display na Ponte do Comandante.",
        "O ganho é controlado pela corrente do transistor secundário Q5 atrelado à malha. A sua tensão base-emissor pode ser manuseada diretamente calibrando no potenciômetro variável \"PWR ADJ\" (R19) da placa, além da proteção ativa e dinâmica de limitação imposta de forma passiva através de transformadores de detecção de linha."
      ],
      answer: "O ganho é controlado pela corrente do transistor secundário Q5 atrelado à malha. A sua tensão base-emissor pode ser manuseada diretamente calibrando no potenciômetro variável \"PWR ADJ\" (R19) da placa, além da proteção ativa e dinâmica de limitação imposta de forma passiva através de transformadores de detecção de linha.",
      explanation: "O ganho do canal é regido pela corrente liberada pelo componente Q5, a qual reage ao calibrador rotatório \"PWR ADJ\" (potenciômetro R19) provendo sintonia e também protegendo o ganho através da redução no limitador final dinâmico (circuito anti-curto).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Numa navegação, digamos que o chicote longo (TTRS de 9,2m) entre as unidades sofra avaria, mastigando e puxando sobrecarga extrema de \"Curto\" da energia de transmissão. Descreva com exatidão do manual a reação imediata salvadora de hardware dos Módulos SRD-331:",
      options: [
        "Transforma a corrente extra em calor dissipando no transformador rebaixador abaixado da EPROM U20 e desligando o visor.",
        "Disjuntores limitadores térmicos da fonte principal FS1 pipocam de imediato derrubando 100% o aparelho na escuridão.",
        "O detector de indução física usa o sensor-bobina de proteção em T3; ele retifica esse escape induzido informando a anomalia ao detector lógico de pico, que deprime a base do Q5 asfixiando/bloqueando agressivamente o ganho do amplificador MOSFET Push-pull antes da catástrofe, limitando e estabilizando as saídas da antena em um equilíbrio inofensivo à placa.",
        "Uma sirene do alarme do BITE toca exigindo operação estritamente manual \"DUMMY LOG\" e parando a injeção síncrona."
      ],
      answer: "O detector de indução física usa o sensor-bobina de proteção em T3; ele retifica esse escape induzido informando a anomalia ao detector lógico de pico, que deprime a base do Q5 asfixiando/bloqueando agressivamente o ganho do amplificador MOSFET Push-pull antes da catástrofe, limitando e estabilizando as saídas da antena em um equilíbrio inofensivo à placa.",
      explanation: "Existe o detector atrelado de forma indutiva (Primário de T3) que funciona como \"sensor em linha\". Sendo disparado pelo pico no consumo de amperagem do choque RF, inverte seu sinal inibindo transistores e ceifando o ganho impulsionador na fonte limitadora do gerador.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Pela delicadeza na leitura do pulso Doppler, ruídos de convés de até alguns milivolts podem corromper as lógicas do odômetro. O módulo buffer Mestre Q13 detém uma regra imutável para não enlouquecer toda a Placa do painel:",
      options: [
        "A porta só chaveia se o pulso que entra de permissão para emissão de dados passar impositivamente do Divisor de 1 Volt (Tensão rígida exigida no barramento Pino 5).",
        "Bloqueia tensões maiores de 1.1 ms pelo uso dos cruzamentos em zero \"Qd\" ligados ao diodo T9 blindado da antena.",
        "Recebe interferências limpas e as converte em ruído reverso em RAM randômica com baterias limitadoras na RTU de 1.6 metros.",
        "Só processa as contagens de 12 MHz originadas no transformador isolador CMOS das hastes se o navio passar de 2.5 nós."
      ],
      answer: "A porta só chaveia se o pulso que entra de permissão para emissão de dados passar impositivamente do Divisor de 1 Volt (Tensão rígida exigida no barramento Pino 5).",
      explanation: "Há uma exigência mecânica por causa de um Divisor passivo Tensão atrelado à porta que força que pulsos \"XMTE\" vindos necessitem ultrapassar rigorosamente 1 Volt cravado na conexão (J5/pino 5), inibindo dessa forma o perigoso chaveamento prematuro ativado por meros surtos espúrios do ruído de navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O Odômetro emite 10 Watts contínuos pelo transdutor para ferir a água e depois \"escuta\" fraquíssimas e frágeis milivoltagens da mesma fonte de via única. A fim de que a parte escutadora não exploda durante a explosão das emissões de sua irmã, usa-se a blindagem fundamental conhecida como:",
      options: [
        "Isolador de vidro Piezoelétrico do Tipo Haste G.R.P com película reversa.",
        "Tacômetro Isolador Unidirecional blindado por chaves limites mecânicas SC e SD nos fins de curso de proa a 400Hz.",
        "Bateria Standby da SDTU protegendo o comparador no Limite Mecânico Reverso com limitadores D11.",
        "Circuito blindador denominado formalmente na eletrônica de \"Chave TR\" (TR Switch) formada estrategicamente por diodos de limitação agressiva servindo de altíssima parede de impedância contra os impulsos brutos do TX, resguardando assim os canais vitais pré-amplificadores \"U1\"."
      ],
      answer: "Circuito blindador denominado formalmente na eletrônica de \"Chave TR\" (TR Switch) formada estrategicamente por diodos de limitação agressiva servindo de altíssima parede de impedância contra os impulsos brutos do TX, resguardando assim os canais vitais pré-amplificadores \"U1\".",
      explanation: "Durante as fortes pulsações ativas o \"TR Switch\" entra em ação via hardware. Seus díodos oferecem caminhos alternativos isolando e salvaguardando perfeitamente as bases frágeis dos chips de amplificação audível frente aos devastadores raios de emissão do mesmo fio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Após vencer a \"Chave TR\", os suaves sinais da água entram no Integrado Pré-Amplificador (U1) e em seguida se deparam com o Transformador \"T4\". Qual o exímio duplo-papel que a bobina T4 cumpre nesse ponto?",
      options: [
        "Amplifica para voltagens lógicas de 57 Volts da EPROM, dividindo 12MHz por 2MHz antes do demodulador.",
        "Apena transforma as leituras puras em código binário para tela do Master Display exibindo os pulsos ASCII de velocidade pelo cabo TTRS.",
        "Exerce o imperioso papel de atuar e \"casar\" a enorme alta-impedância da válvula original de saída (U1) para a exigente entrada de baixa impedância do circuito à frente (U2A), efetuando ainda no trajeto a transmutação e desmanche de um pulso \"duplo\" para \"Sinal Simples\" alinhado.",
        "Re-modula todos os desvios causados por bolhas grandes via \"Dummy Gate\" ligando contatos livres de potencial de relé de alta performance."
      ],
      answer: "Exerce o imperioso papel de atuar e \"casar\" a enorme alta-impedância da válvula original de saída (U1) para a exigente entrada de baixa impedância do circuito à frente (U2A), efetuando ainda no trajeto a transmutação e desmanche de um pulso \"duplo\" para \"Sinal Simples\" alinhado.",
      explanation: "Como citado na descrição construtiva, a função do acoplador T4 baseia-se duplamente em compatibilizar a impedância restritiva entre os canais do \"amplificador\" e paralelamente converter os sinais desdobrados em linha unificada analítica de pulsos (Duplo em Simples).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Somente ruídos úteis devem virar \"Velocidade\" legível nos visores. Para peneirar sujeira o sinal necessita vencer a crivagem da janela lógica chamada tecnicamente de Porta De Nível ou \"THRESHOLD\". O seu funcionamento é feito quando:",
      options: [
        "Os cruzamentos passam da marca limite estressada da RAM U8A limitados pelos diodos zener de -2.5 nós até 60 nós contínuos sem quedas na rede elétrica de bordo.",
        "As voltagens ecoadas entram numa chave gangorra. Se forem fracas não giram a catraca dos tambores na distância RS-422 inibindo o contador decimal falso da RTU de milhas de retaguarda.",
        "O sinal em oscilação é suprimido de vales negativos via processamento por Demodulador U3 gerando um platô/teto \"D.C.\" positivo; caso esta voltagem constante criada vença os tetos ajustados do comparador de tolerância (ajuste R55 via U4B), o mesmo despenca ativamente autorizando abertamente o fluir livre das Portas Doppler.",
        "O relé de 12 MHz fecha os canais cruzando o pulso inversamente proporcional gerando interrupção total forçando BITE completo via Q2Q3 de nível máximo."
      ],
      answer: "O sinal em oscilação é suprimido de vales negativos via processamento por Demodulador U3 gerando um platô/teto \"D.C.\" positivo; caso esta voltagem constante criada vença os tetos ajustados do comparador de tolerância (ajuste R55 via U4B), o mesmo despenca ativamente autorizando abertamente o fluir livre das Portas Doppler.",
      explanation: "A placa avalia amplitude. Tira-se a oscilação, amassa-se as pontas sujas tornando-o uma tensão constante macia (nível DC). Caso esse peso atinja as expectativas reguladas pela resistência sensível no limiar estipulado \"Threshold\" (R55 no comparador), emite-se um salvo-conduto lógico (\"Nível Baixo\") escancarando a contagem de diferenças do Gate Doppler vital à vida do Navio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "No coração de toda a engrenagem, o sub-nó \"Doppler Gate\" decifra a equação do físico austríaco. Qual é exatamente sua dinâmica física de contagem para se achar a \"frequência diferente\" real entre as hastes proa x popa de 2 MHz que não pode ser feita diretamente?",
      options: [
        "Ele usa a contagem regressiva de decibéis lidos em tempo real gravados no Firmware para achar os falsos desvios de salinidade do sensor, convertendo o erro logarítmico em RS422 livre.",
        "Possui estrutura paralela com relógios. Ele equipa pares idênticos de registradores em cada extremidade (Vante x Ré); dos quais uma parte caça e empilha incessantemente os \"picos de cruzamento no ponto zero\" da água suja, enquanto a parte espelho amontoa impiedosamente oscilações cristalinas perfeitas do cristal Master Board que pisca implacável a 12 milhões de vezes/segundo.",
        "Dispara o tempo do eco da popa e diminui o valor fixo gravado na tabela do BITE Completo, e assim divide tudo nas EPROMs.",
        "Emite ruídos curtos até emparelhar o navio real com o dummy log, medindo o atraso em Hertz."
      ],
      answer: "Possui estrutura paralela com relógios. Ele equipa pares idênticos de registradores em cada extremidade (Vante x Ré); dos quais uma parte caça e empilha incessantemente os \"picos de cruzamento no ponto zero\" da água suja, enquanto a parte espelho amontoa impiedosamente oscilações cristalinas perfeitas do cristal Master Board que pisca implacável a 12 milhões de vezes/segundo.",
      explanation: "A apostila determina a dupla função de contadores em cada uma das ramificações Doppler Gate (Frente e Trás); um contabilizando apenas as travessias sujas dos ecos oscilantes de onda na marca de cruzamento-zero e seu coirmão dedicado ao acúmulo paralelo e preciso em \"ticks\" fixos base do clock imutável oscilante primário base (12 MHz).",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Ao atingir o platô matemático ideal das Portas Doppler onde os cruzamentos-zero chegam a fatídica conta alvo cravada de \"2048 picos recebidos e amontoados\", o que a lógica desencadeia nesse átimo milissegundo interno no canal?",
      options: [
        "Bate a marca no \"Qd\" (alcançando o limite) e desliga a CPU de medição inibindo sumariamente o acolhimento de mais detritos navais do eco e consequentemente bloqueando à força seca a corrida do cronômetro cristalizado parceiro do relojoeiro local de 12 MHz na placa associada.",
        "Altera e inverte o pulso WTGTE para reiniciar de emergência os contadores do outro lado para compensar erro térmico causado pelas bolhas no transdutor dianteiro.",
        "Empurra direto ao Visor central (via pino 5 RS422) o resultado numérico dos \"nós\" atuais do cruzador ignorando todo o atraso.",
        "Permuta o sistema por BITE restrito se o navio oscilar abaixo de 2.5 nós até destravar diodos D12 e M1 motor centralizado."
      ],
      answer: "Bate a marca no \"Qd\" (alcançando o limite) e desliga a CPU de medição inibindo sumariamente o acolhimento de mais detritos navais do eco e consequentemente bloqueando à força seca a corrida do cronômetro cristalizado parceiro do relojoeiro local de 12 MHz na placa associada.",
      explanation: "Quando se enche a vasilha do registrador até os almejados 2048 eventos rítmicos oceânicos, a comporta \"Qd\" de controle acende. Isto cria o fechamento da via lógica travando impiedosamente novas coletas de zeros do mar e também paralisando seu acompanhante \"timer de alta performance\" vizinho simultaneamente de forma que não entre mais pulsos de 12Mhz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Ao final do labirinto (quando a proa e a popa finalmente se calam ao fechar os seus contadores de água), a Unidade Cerebral 8085 é informada que a conta e o banquete de pulsações finalmente terminaram e está a postos para os cálculos pesados de velocidade. O \"Grito\" sistêmico que desperta o microprocessador denomina-se:",
      options: [
        "Geração da voltagem de falha BITE Completo piscando telas a meia frequência com o Navio no \"Mode Operative\" e soando alarme \"Dummy Log\".",
        "Combinação mútua num feixe lógico tipo \"AND\" unindo proa/popa com o sinal de exultação da \"Contagem Finalizada\" batizado \"CRT RDY\", forçando e cortando a fila das tarefas do processador através de severa interrupção impositiva de Hardware classificada pela fábrica (RST 6.5) a ler os tanques de pulsos antes que expludam ou sejam reciclados e assim tirar o saldo delta de diferença do Doppler.",
        "Queda forçada via \"TIMER OUT\" da EPROM ressetando tudo antes da rajada 7.7 ms pelo pulso \"XMTE\" com o uso da interrupção lógica interna (RST 7.5).",
        "Liberação via diodos Schottky Zener forçando o cruzamento TTL de quadratura nos motores síncronos dos tacômetros RTU do sistema para repassar o pulso na casa de 24VCC e 100 milhas por hora."
      ],
      answer: "Combinação mútua num feixe lógico tipo \"AND\" unindo proa/popa com o sinal de exultação da \"Contagem Finalizada\" batizado \"CRT RDY\", forçando e cortando a fila das tarefas do processador através de severa interrupção impositiva de Hardware classificada pela fábrica (RST 6.5) a ler os tanques de pulsos antes que expludam ou sejam reciclados e assim tirar o saldo delta de diferença do Doppler.",
      explanation: "A união da proa com o final da popa culmina ativando de forma lógica comutada numa porta \"AND\" o aviso formal (CRT RDY / Contador Preparado). A presença dele interrompe e captura o cérebro 8085 mediante sinal interruptivo de grau primário (RST 6.5) avisando e liberando-o da subrotina nativa forçando-o a recolher os resultados do saldo restante guardados dos balcões atômicos paralelos a 12Mhz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Imagine as hostis águas de uma guerra naval onde, devido ao turbilhão destrutivo excessivo, o escutador de vante (Dianteiro) perca pulsos preciosos e não consiga chegar na sonhada meta imposta de (2048 zeros colhidos) e o tempo limite de audição se esgote (corte de fechamento do WTGTE passivo). O processador joga o trabalho inútil todo fora daquele milissegundo perdido?",
      options: [
        "Sim. O Hardware Reset descarta impiedoso as contas não encerradas, joga BITE Piscando em tela acusando anomalia no Diodo do Sensor Y1 por aeração e limpa as matrizes em memórias temporárias e o Mestre apita de fundo contínuo.",
        "Não. O aparelho simplesmente suspende e bloqueia internamente o repasse do pulso varredor limpador e cruel denominado (\"CTR RST\"); garantindo que a panela com o suco dos dados preciosos pela metade colhidos seja mantida intacta aquecendo os tanques lógicos. Os contadores de 12 MHz e Zeros prosseguirão caçando no momento de reabertura da escuta seguinte retomando da onde parou sem desperdiçar fôlego.",
        "O equipamento acopla em sua estrutura do canal traseiro (se tiver completo) ignorando a deficiência dianteira com uma manobra de EPROM limitando o motor tacômetro de velocidade com diodo reversivo blindado e forçando 0.5hz BITE.",
        "Corta 115V AC forçando proteção do limite mecânico impedindo contagens falsas."
      ],
      answer: "Não. O aparelho simplesmente suspende e bloqueia internamente o repasse do pulso varredor limpador e cruel denominado (\"CTR RST\"); garantindo que a panela com o suco dos dados preciosos pela metade colhidos seja mantida intacta aquecendo os tanques lógicos. Os contadores de 12 MHz e Zeros prosseguirão caçando no momento de reabertura da escuta seguinte retomando da onde parou sem desperdiçar fôlego.",
      explanation: "A arquitetura preza dados vitais. Ela não zera a contagem e \"imita o esquecimento\" ao sonegar de forma estratégica o envio forçoso do impiedoso reset primário na placa \"CTR RST\" durante o início da nova rajada e as contagens órfãs podem seguir em frente completando as casinhas lógicas (Até 2048) logo em breve nas águas vindouras subsequentes do mesmo canal aproveitando a diferença remanescente do processador inteligente.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Quais instrumentos cruciais o construtor norte-americano (Sperry Marine) exige exaustivamente para manuseios primários de laboratório durante peritagem das lógicas e varredura da falha Doppler do equipamento no porto?",
      options: [
        "Somente alicate amperímetro digital e lâmpadas dicroicas incandescentes teste.",
        "Tensão do Tacômetro Gerador isolado de catracas síncronas simulando o \"Dummy\" log e microchaves relés de transição contínuas e bateria de reserva extra para Módulo Mestre de RAM.",
        "Multiteste analógico com deflexão cruzada a -12v até +20v, lixas finas para limpar conectores TTRS GRP nas lentes ressecadas do Módulo Analógico com graxa em pasta térmica tipo B.",
        "Osciloscópio superior à casa primária de transmissão 2 MHz de escuta com amarração e sincronização estritamente externa tolerando sensibilidade restrita mínima em deflexão (+10mV); Além do óbvio Multímetro moderno acoplado com dois componentes resistores cruciais em teste carga/casamento blindados a quentes de exatos 90 Ohms com a devida e baixa tolerância apertada de no máximo 5%."
      ],
      answer: "Osciloscópio superior à casa primária de transmissão 2 MHz de escuta com amarração e sincronização estritamente externa tolerando sensibilidade restrita mínima em deflexão (+10mV); Além do óbvio Multímetro moderno acoplado com dois componentes resistores cruciais em teste carga/casamento blindados a quentes de exatos 90 Ohms com a devida e baixa tolerância apertada de no máximo 5%.",
      explanation: "Equipamentos citados textualmente pelo fabricante preveem Osciloscópio (Mín. 2 MHz), Sensibilidade Vertical estrita 10mV/cm c/ sincronismo externo. Multímetro e os Resistores específicos 90 Ohms ±5% e capacidade resistiva em dissipação 2 Watts.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O Oficial Tático de Bordo quer analisar o pulso cru da água antes que ele passe para os domínios digitais da CPU. Se colocar as pontas de prova na Unidade Eletrônica, para onde olhar sem ver mágica computacional e focar no estado primitivo do som?",
      options: [
        "Módulo 1 (Cartão de Interface).",
        "No relé secundário da \"Master Display\" antes dos LEDS de LCD em Módulo 1A2 (Gate Doppler) e nos cabos da chaves U4 e U5 com alimentação RS-422.",
        "Módulo A4, Bloco de Terminais de Cobre TB1 (da Unidade Eletrônica onde os cabos das extremidades do navio desembocam primitivamente antes dos transformadores cruéis cegos da proteção primária TX-RX de pulso).",
        "Na catraca física das Repetidoras remotas na Ponte RTU com engrenagens de pulsos síncronos da M1 Motor Acionador em painéis relógio puristas de limite."
      ],
      answer: "Módulo A4, Bloco de Terminais de Cobre TB1 (da Unidade Eletrônica onde os cabos das extremidades do navio desembocam primitivamente antes dos transformadores cruéis cegos da proteção primária TX-RX de pulso).",
      explanation: "O técnico consegue inspecionar o pulso cru recebido através de medições primárias diretas realizadas estritamente em bancada nas guias isoladas do submódulo A4, bloco isolado pátio Terminais TB1 interno em sua base física.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Se a Fragata tiver 3 telinhas espalhadas do oficial de manobras escravas informando a velocidade da embarcação em \"tempo real\", quem fala para todas as repetidoras isoladas o que o mar diz? Quem envia para todo o mundo?",
      options: [
        "As Repetidoras puxam do conversor Sincro analógico do \"Doppler\" nativo na própria Placa Mestre Eletrônica processadora ativada com cabos RS232.",
        "As telas dependem exaustivamente de extrações mecânicas ativando as pontes do Falso Odômetro na cabine de comando acionando relés via motor giratório analógico.",
        "A Mestra; ou em vias de fato a cobiçada Unidade central \"Master Display\". Uma vez que os dados vêm todos compilados da caixa crua inferior Eletrônica e mastigados em seu íntimo; a Unidade no painel principal re-despacha/transmite de forma imperiosa para eventuais aparelhos burros paralelos Remotos \"Slave\".",
        "Os cristais Y1 e Y2 piezoelétricos na barriga do navio emitem diretamente em rede e feixes sonoros de pulsos sem decodificação pelas telas por possuírem processadores nativos de leitura paralelos independentes U19 a fim de redundância severa com os visores \"CRT RDY\"."
      ],
      answer: "A Mestra; ou em vias de fato a cobiçada Unidade central \"Master Display\". Uma vez que os dados vêm todos compilados da caixa crua inferior Eletrônica e mastigados em seu íntimo; a Unidade no painel principal re-despacha/transmite de forma imperiosa para eventuais aparelhos burros paralelos Remotos \"Slave\".",
      explanation: "Qualquer unidade remota espalhada ligada opera usando todos os dados mastigados e geridos transmitidos unicamente oriundos através da principal da ponte ou unidade \"Master Display\" encarregada formal do re-envio.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O caixote principal Master Display é constituído fisicamente por 2 gavetas. A gaveta submódulo (A1) suporta quais elementos das finas artérias lógicas?",
      options: [
        "O processador cru que joga o som a 1.1ms para fora, as baterias grossas isolantes, Relés de Potência blindados da Haste de Fundo com filtro linha 115v CA nativo com bornes duplos de parafuso e diodos cruzados na EPROM 4 de Calibragem para o \"boundary layer\" denso a 4,8 metros abissais.",
        "O A1 aloja a engrenagem e os rolamentos dentados limitadores analógicos de 60 nós, que correm os tambores decimais contáveis em milhas de catraca até bater -2,5 cravado sem limite motor via chaves de feedback SC e D11 retrocedidas a ZERO Elétrico Potenciômetro.",
        "Aloja essencialmente a parte de baixa voltagem ou de mente frágil; compreendida como a sua alimentação nativa de placa estabilizada, seu minúsculo processador particular isolado e alienado da cabine Eletrônica do porão, e o óbvio e tátil display fino a cristal líquido retro-iluminado e chaves \"touth\" filme polimérico coladas ao vidro do comandante onde todo o controle repousa seguro longe dos filtros grossos embutidos.",
        "Placas U9 do temporizador RS 422 de saída ASCII de pulsos livres."
      ],
      answer: "Aloja essencialmente a parte de baixa voltagem ou de mente frágil; compreendida como a sua alimentação nativa de placa estabilizada, seu minúsculo processador particular isolado e alienado da cabine Eletrônica do porão, e o óbvio e tátil display fino a cristal líquido retro-iluminado e chaves \"touth\" filme polimérico coladas ao vidro do comandante onde todo o controle repousa seguro longe dos filtros grossos embutidos.",
      explanation: "Submódulo A1 (Display Master Unit) carrega a placa inteligente local, CPU dedicada ao vídeo (Painel), a própria tela a Cristal Líquido LCD crua em formato de filme fino tátil englobando os botões de superfície fina; longe do Módulo sujo (A2) de Relés de Tensão 115 e Barras e Filtros energéticos brutos de 5 amperes e fiação do painel do navio blindada.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "A comunicação arcaica porém valiosa para aparelhos de época entre a Unidade \"Master\" no Painel em repasse para as repetidoras isoladas ocorre com que nível primitivo de \"Handshake\" físico para envio das rotinas métricas da \"distância percorrida milha a milha\"?",
      options: [
        "Pulso serial estrito digital RS422.",
        "Abertura/fechamento puramente físico através de um sistema robusto provido por um formato cru de Contatos limpos de Relé (bate a distância).",
        "Tensão modulada a pulso por Potenciômetro rotacional cravado por tacômetro U10.",
        "Tensão induzida pela quadratura 15CX4 sincro cravado e amplificado por T3 num buffer U4 em onda de rádio de 12Mhz paralela a EPROM 400hz."
      ],
      answer: "Abertura/fechamento puramente físico através de um sistema robusto provido por um formato cru de Contatos limpos de Relé (bate a distância).",
      explanation: "Unidade fornece os estritos dados longos de saída da viagem calculada (\"distância\") no rústico porém durável formato a nível de chaves/hardware mecânico baseado estritamente no \"fechamento de contatos de relés\" embutidos que transferem milhagens puras isoladas para outros equipamentos repetidores da velha frota e displays analógicos se necessário.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como o navio resolve pane de surto eletrostático nos canais e despolarização fatal dos processadores que corromperam variáveis na navegação atual? O que o marinheiro experiente faz sob a armadura de metal na manutenção crítica em mar se as chaves lógicas travam tudo?",
      options: [
        "Espera por 10 minutos cortando a bateria até RAM não volátil esfriar sozinha zerando contatos CMOS TTRS do terminal 4.",
        "Pressiona os botões pushpull/push botton instalados e soldadas diretamente fisicamente sobrepostos as placas A1 ou A2 das gavetas internas do painel, os quais executam a faina bruta purga master do pino de forçagem central do processador denominado \"Master Reset\".",
        "Desconecta as engrenagens e gira 6.000 milhas num relógio na traseira do terminal RTU M1 para estourar buffer estático diodo reverso D12 e M1.",
        "Executa 5 varreduras de TEST em 5 segundos zerando com botão reset a lente poliestirena para limpar sujeira magnética acumulada do navio e varre toda ROM EPROM \"Qd\"."
      ],
      answer: "Pressiona os botões pushpull/push botton instalados e soldadas diretamente fisicamente sobrepostos as placas A1 ou A2 das gavetas internas do painel, os quais executam a faina bruta purga master do pino de forçagem central do processador denominado \"Master Reset\".",
      explanation: "Para manobras difíceis nas placas travadas da eletrônica há os pequenos punhos e chaves alavancas/botões \"pushpull\" afixados no âmago das placas que ativam um severo reset limpo de mestre em hardware limpo limpando estática forçada nos cérebros processadores lógicos sem afetar energia dos transformadores grossos paralelos de fundo isolados pelas barras A2..",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Após ofuscar ou iluminar o painel para navegação tática no escuro com os botões, como a placa é amarrada impendindo esbarrões equivocados pelo dedo de inserir nós absurdos acidentalmente confundidos pelo oficial nas pressas das teclas INCREASE/DECREASE do LCD?",
      options: [
        "A tela inativa automaticamente via Bateria relógio EPROM a cada 5s sem toques até cair a janela \"TEST\" e reset de distância piscar duas vezes.",
        "O oficial se obriga textualmente após a luz ajustada ao seu grado a clicar cegamente no grande botão mandatório \"OPERATE\" (Operação nativa), e no exato instante a rotina CPU desengata/inibe severamente para os pinos INCREASE e DECREASE desativando o processamento do painel até as chaves \"TEST\" mudarem algo ou Modo manual ser convocado expressamente pelas lâmpadas e senhas de controle secundário.",
        "Aperta de emergência e solta KNOTS em 5 segundos, piscando todo \"Dummy\".",
        "Os leds perdem a eletroluminescência depois de piscar o código ASCII de modo livre caindo no reset R55."
      ],
      answer: "Aperta de emergência e solta KNOTS em 5 segundos, piscando todo \"Dummy\".",
      explanation: "A placa pede como procedimento após lidar com luminosidades (Intensity e Increase/Decrease) no Módulo LCD ser firmemente travada clicando-se obrigatoriamente e apenas na tecla mestre de trabalho nativo \"OPERATE\" que cega e ignora toques avulsos futuros nestas cruciais funções sensíveis e desastrosas de numéricos e lógicas puras bloqueando-as imediatamente a fim de travamento.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O que atesta no display primário ao oficial do passadiço que a \"Velocidade Real (Nós)\" do navio está sobreposta preenchendo as casas do Cristal no LCD central (E não a odometria percorrida)?",
      options: [
        "O número pula 4 vezes e pisca 0.5hz BITE Restrito.",
        "O Mestre Processador U19 lança numerais avermelhados de catraca num dial acoplado iluminando a letraz \"S\" e \"Z\".",
        "Se a tecla (KNOT/MILES) selecionou e apertou pro lado da física métrica atual, e o sistema retrocedeu internamente as rotinas, o painel iluminará um indicativo lateral luminoso nativo a chaves com a imponente e unânime letra \"K\" informando ao usuário estar perante os \"KNOTS\" a dominar o display do painel principal.",
        "A barra indicativa \"WTGTE\" fica no pulso ALTO contínuo e exibe o número \"M\" por \"Miles\"."
      ],
      answer: "Se a tecla (KNOT/MILES) selecionou e apertou pro lado da física métrica atual, e o sistema retrocedeu internamente as rotinas, o painel iluminará um indicativo lateral luminoso nativo a chaves com a imponente e unânime letra \"K\" informando ao usuário estar perante os \"KNOTS\" a dominar o display do painel principal.",
      explanation: "A Tabela técnica explícita que uma imensa indicativa de status com luz paralela retroiluminada com a \"letra K\" iluminará como \"status aceso\" atestando fisicamente que \"KNOTS\" ativou ao visor.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "A tecla de \"TEST\" do painel varre impiedosamente todo o ambiente na fragata atrás de pane cega em um rito. As partes varridas pelo sistema durante o auto teste englobam exatamente:",
      options: [
        "Puxa exames da calibração EPROM Módulo 2 do transdutor GRP contra vazamentos de navio através da barreira física na válvula de fundo cravando 2MHz nas bordas.",
        "Verifica a sanidade lógica e memórias internas da referida \"Unidade Master Display\", do processador embutido na porão da \"Unidade Eletrônica\", estendendo-se exaustivamente o teste a integridade contínua limpa livre de defeitos dos fios cruéis do elo de \"cabo\" e também de toda \"comunicação\" que interliga cegamente esse par distanciado.",
        "Puxa leituras mecânicas e roda engrenagens do RTU até engatar com M1 relé D12 batendo aos pinos das portas limitadores e soando alarme \"Simulado Up/Down\".",
        "Acende todos contatos CMOS testando a radiação acústica de peixes orgânicos debaixo do casco enviando sinal doppler espúrio pelo TTRS blindado para os cartões de saída de 115v."
      ],
      answer: "Puxa leituras mecânicas e roda engrenagens do RTU até engatar com M1 relé D12 batendo aos pinos das portas limitadores e soando alarme \"Simulado Up/Down\".",
      explanation: "O manual esclarece na operação que \"a sequência verifica internamente a Unidade Master Display\", testando e crivando a CPU (processador no Eletrônico) e conferindo o cabo longo de contato e o link de Comunicação percorrido que alinhava todo sistema naval do convés ao fundo escuro.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Durante o limiar crivo \"THRESHOLD\" nos comparadores de Doppler, uma porta especial do cérebro recebe a sujeira em defasagem e alinha tudo magicamente como blocos para a CPU ler de forma fácil como pulso puro (TTL). Que comparador transforma e reverte esses cruzamentos?",
      options: [
        "Componente U3 que recorta o pico de decibéis amaciando para DC contínuo puro na EPROM U21 e bloqueando a RAM.",
        "As entradas puras e tortas defasadas (onda suja rebatida defasada a 180 graus da matriz água), rebatem pesadamente no componente \"Comparador U17\", onde de forma cravada sairão com seus pulsos aparados transmutados sob o código e formato chato padronizado rígido nível TTL da indústria; estritamente agora em conformidade e fase atrelada lado a lado ao pulso principal da onda limpa originária alta dianteira dos zeros.",
        "Comparador Q1 e limitadores de crista CR4 acoplado pelo detector de pico e Diodo CR3 com transformadores rebaixados.",
        "O motor \"Dummy\" relé bate na chave limite e converte isso por M1 acoplado na válvula 115v CA forçando o limite D12 para trás no RTU a 400hz contínuos re-injetados pelo Q5."
      ],
      answer: "As entradas puras e tortas defasadas (onda suja rebatida defasada a 180 graus da matriz água), rebatem pesadamente no componente \"Comparador U17\", onde de forma cravada sairão com seus pulsos aparados transmutados sob o código e formato chato padronizado rígido nível TTL da indústria; estritamente agora em conformidade e fase atrelada lado a lado ao pulso principal da onda limpa originária alta dianteira dos zeros.",
      explanation: "A eletrônica ensina a função do Comparador (U17): o cruzamento defasado em rústico ruidoso de (180 graus de reverso), sofre o nivelamento impositivo ao passar suas barras, ganhando contornos quadrados cruéis em formato \"TTL em fase\" para que a CPU seja blindada dos decibéis oscilantes lidos no cristal primário da lente marinha suja.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Num corte acidental \"inserção manual\" ou estimativa cega; O manual adverte algo inesperado no Módulo submerso Eletrônico (A1/A2/T1) sobre os pingos sonares estarem ativos a queimar o transdutor para a nada?",
      options: [
        "O radar interno é paralisado bloqueando 1.1ms e salvando EPROM e RAM do aquecimento extremo das calotas do barco na válvula da linha 57V a fim blindar EMI falso \" Dummy Log\" no T1.",
        "Segundo a doutrina textualmente ditada: No \"Modo Manual\", O transdutor principal submerso e todos os transmissores bem como receptores internos pesados de energia e processamento (\"continuam plenamente armados/ativos e funcionais com força operatória\"), sendo que O Módulo A1 ainda bate pulso 2MHz no oceano, a CPU que, de forma ingrata, esnoba ativamente da rotina a água lida preferindo seu próprio cálculo.",
        "Ao forçar os botões SIM UP/DOWN da EPROM o sistema entra num \"Reset\" Mestre e o cristal Piezo \"Y1\" racha por aeração cruzada com a RTU a 400hz contínuos cravada nos Diodos.",
        "Ele aciona Bateria Backup cega interna cortando 100% o cabo TTRS caindo do sistema toda a interferência física blindada."
      ],
      answer: "Segundo a doutrina textualmente ditada: No \"Modo Manual\", O transdutor principal submerso e todos os transmissores bem como receptores internos pesados de energia e processamento (\"continuam plenamente armados/ativos e funcionais com força operatória\"), sendo que O Módulo A1 ainda bate pulso 2MHz no oceano, a CPU que, de forma ingrata, esnoba ativamente da rotina a água lida preferindo seu próprio cálculo.",
      explanation: "Operacionalmente a instrução é categórica: o radar (A1 e os Transdutores) permanecem integral e letalmente ATIVOS e radiando (sendo processados e mantidos operando gastando 115v CA normal como de rotina), contudo, os dados puros extraídos da água são sistematicamente desconsiderados/ignorados nas sub-rotinas pela vontade mandatória do microprocessador central em virtude de seu status na programação.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Uma placa estourou por estática. O Mantenedor remove as travas da Mestre A2/A1 pucha-as e solda/monta a virgem. Como restabelecer a precisão da velha embarcação após colocar racks novamente e girar a trava de metal?",
      options: [
        "Só usar raspas plásticas finas lavando o EPROM na esponja detergente pra evitar corrosão marinha antes de colocar a chave ON no Módulo 8 da PSU para ler EPROM \"Qd\".",
        "Puxa a bateria Auxiliar e apaga memória das RTUs e dos Relés paralelos da válvula fechando painel BITE de emergência via Terminal de Calibragem para 0.5hz intermitente.",
        "Obriga rigorosamente \"Um Alinhamento formal na Placa Substituída particular de circuito a ser efetuado/imposto em testes logo após troca\" (conforme dita o regime normativo militar restritivo na troca do equipamento de cartões A1/A2 a fim da vida do circuito de hardware do Doppler Gate ser calibrada e casada de novo no sistema a funcionar plenamente nas linhas primárias de recepção/transmissão limitadoras de ruído das voltagens estritas operacionais).",
        "Fechar a \"Chave TR\" limitando o fusível de \"Q14\" T9 via 2048 cruzamentos em zero \" Dummy\"."
      ],
      answer: "Obriga rigorosamente \"Um Alinhamento formal na Placa Substituída particular de circuito a ser efetuado/imposto em testes logo após troca\" (conforme dita o regime normativo militar restritivo na troca do equipamento de cartões A1/A2 a fim da vida do circuito de hardware do Doppler Gate ser calibrada e casada de novo no sistema a funcionar plenamente nas linhas primárias de recepção/transmissão limitadoras de ruído das voltagens estritas operacionais).",
      explanation: "A norma do manual manda, textualmente: \"O procedimento de Alinhamento na placa cega recém assumida no posto e de circuito base deve ser efetuado, exigido na rotina após substituição de Placas base ou a referida falha no sistema do Módulo, sendo um dos requisitos chaves do hardware após acúmulo da distância ou queda \".",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Se no momento da ancoragem as águas rasas atingirem 1,4 metros (distância da superfície da lente acústica ao fundo do mar), o equipamento lerá de forma confusa as distorções do fundo para determinar a velocidade em relação ao fundo (Ground-Track)?",
      options: [
        "Em teoria, o sistema deixará de funcionar adequadamente ou entrará em instabilidade antes mesmo de ler o fundo, pois o manual técnico exige expressamente uma profundidade livre de operação mínima de 1,6 metros e carece de no mínimo 1,83 metros sobressaentes em fundo livre.",
        "Sim, ele comutará automaticamente para o modo Ground-Track por meio dos relés de limite SC/SD, calculando o vetor de velocidade por reflexão de fundo com erro de fase de até 5%.",
        "Não, o pré-amplificador U1 ativará o circuito AGC para atenuar o eco de fundo raso a 1,4 m, mantendo a leitura na camada limite (\"boundary layer\") a 400 Hz.",
        "O transdutor emitirá pulsos curtos de 0,55 ms via interrupção RST 7.5, compensando o raso de 1,4 metro através da chave TR (TR Switch) sem alteração no display."
      ],
      answer: "Em teoria, o sistema deixará de funcionar adequadamente ou entrará em instabilidade antes mesmo de ler o fundo, pois o manual técnico exige expressamente uma profundidade livre de operação mínima de 1,6 metros e carece de no mínimo 1,83 metros sobressaentes em fundo livre.",
      explanation: "O manual técnico da Sperry determina que a profundidade mínima operacional para processamento confiável dos sinais refletidos é de 1,6 metros (com recomendação de 1,83 m de fundo livre). Abaixo desse limiar (como a 1,4 m), a proximidade extrema impede a correta separação temporal e acústica do eco Doppler, gerando instabilidade ou perda de leitura.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "O sinal de recepção convertido do ecobatímetro atinge inicialmente um circuito de baixa corrente. O que faz especificamente a junção do transistor Q14 acoplado ao transformador T9 nesta faina?",
      options: [
        "A saída amplificada por U2B é acoplada na base do amplificador emissor-comum Q14; do coletor de Q14 esse pulso passa pelo transformador T9, que cria uma poderosa saída balanceada dupla e de baixíssima impedância para enviar ao demodulador U3 (limiar de ruído) preservando a integridade do sinal.",
        "O transistor Q14 atua como chave de corte térmico em conjunto com T9, bloqueando tensões acima de 1 Volt que poderiam danificar a entrada de referência do contador de ripple U13.",
        "Q14 e T9 formam um oscilador local de 12 MHz sincronizado ao clock primário, convertendo a onda simples de U2B em quadratura digital para o painel Master Display.",
        "O transformador T9 eleva a tensão do pulso de eco para 115 VAC, permitindo que Q14 chaveie diretamente os relés eletromecânicos de repetição de distância nas repetidoras remotas."
      ],
      answer: "A saída amplificada por U2B é acoplada na base do amplificador emissor-comum Q14; do coletor de Q14 esse pulso passa pelo transformador T9, que cria uma poderosa saída balanceada dupla e de baixíssima impedância para enviar ao demodulador U3 (limiar de ruído) preservando a integridade do sinal.",
      explanation: "Na cadeia de processamento de recepção do SRD-331, após o estágio amplificador U2B, o sinal excita a base do transistor emissor-comum Q14. O transformador T9 no coletor de Q14 converte esse sinal em uma saída balanceada dupla de baixíssima impedância, otimizada para alimentar o demodulador U3 sem degradação ou ruído.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Em uma docagem para manutenção e pintura da obra viva da Fragata, qual é a precaução mandatória de segurança mecânica e operacional do marinheiro antes mesmo de se esvaziar o dique envolvendo o Odômetro SRD-331?",
      options: [
        "O transdutor deve obrigatoriamente ser recolhido/içado para dentro da sua válvula de fundo e a referida válvula do casco ser severamente vedada e fechada antes sequer que a água seja retirada do dique.",
        "Deve-se apenas desconectar o cabo TTRS de 9,2 m na caixa de terminais TB1 e aterrar a carcaça da Unidade Eletrônica com malha de cobre de 90 Ohms.",
        "A lente de poliestireno deve ser recoberta com uma espessa camada de graxa de silicone e tinta vinílica anti-incrustante para protegê-la do ar seco do dique.",
        "O sistema deve ser colocado em modo \"Dummy Log\" e alimentado com 24 VCC contínuos para manter o aquecimento interno dos cristais piezoelétricos Y1 e Y2."
      ],
      answer: "O transdutor deve obrigatoriamente ser recolhido/içado para dentro da sua válvula de fundo e a referida válvula do casco ser severamente vedada e fechada antes sequer que a água seja retirada do dique.",
      explanation: "Para evitar danos mecânicos catastróficos ao conjunto do transdutor durante o esvaziamento do dique e trabalhos na obra viva do navio, o manual estipula que o transdutor seja recolhido para o interior do casco e a válvula de fundo completamente fechada antes da drenagem do dique.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Caso na faina de limpeza, além da remoção das cracas que cobriram a lente de poliestireno, ocorra um arranhão mais agressivo provocado por espátula metálica ou lixa (o que o manual proíbe terminantemente), o que será comprometido no sistema?",
      options: [
        "A raspagem e o dano físico alteram totalmente a refração acústica da lente, modificando suas características de transmissão e de escuta do retorno, provocando a perda da integridade funcional e injeção de erros graves na medição, exigindo a substituição do conjunto transdutor.",
        "O dano causará curto-circuito apenas no cabo TTRS, disparando o disjuntor térmico FS1 da fonte primária sem afetar os cristais piezoelétricos.",
        "A alteração na lente provocará um desvio fixo de +2,5 nós em todas as velocidades, o qual pode ser facilmente corrigido ajustando o potenciômetro R19 (PWR ADJ).",
        "O ar retido no arranhão será compensado automaticamente pelo circuito Doppler Gate após 2048 cruzamentos em zero, não afetando a medição final no display."
      ],
      answer: "A raspagem e o dano físico alteram totalmente a refração acústica da lente, modificando suas características de transmissão e de escuta do retorno, provocando a perda da integridade funcional e injeção de erros graves na medição, exigindo a substituição do conjunto transdutor.",
      explanation: "A lente de poliestireno possui propriedades refrativas e de impedância acústica rigorosamente projetadas para o acoplamento som/água a 2 MHz. Riscos profundos, raspagem ou ataque químico distorcem o feixe sônico tanto na emissão quanto na recepção, invalidando a medição Doppler.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Explique o que é o componente EPROM U21 e como ele se integra na arquitetura lógica e de geração de frequência na Unidade Eletrônica do Odômetro SRD-331:",
      options: [
        "A EPROM U21 armazena o firmware do sistema e possui portas programáveis de entrada/saída (I/O); através da sua porta B (Port-B), o sinal de habilitação \"XMTE\" é emitido de forma invertida para liberar o reset do contador de ripple U13, iniciando a divisão do clock para 2 MHz.",
        "É uma memória de acesso aleatório não volátil que armazena exclusivamente os dados da última navegação em milhas quando falta alimentação de 115 VAC.",
        "Trata-se de um conversor analógico-digital que transforma os milivolts recebidos no bloco TB1 em palavras binárias de 8 bits no barramento AD0-AD7.",
        "É o oscilador mestre de quartzo responsável por gerar a frequência base de 12 MHz e sincronizar as portas lógicas da Master Display via RS-422."
      ],
      answer: "A EPROM U21 armazena o firmware do sistema e possui portas programáveis de entrada/saída (I/O); através da sua porta B (Port-B), o sinal de habilitação \"XMTE\" é emitido de forma invertida para liberar o reset do contador de ripple U13, iniciando a divisão do clock para 2 MHz.",
      explanation: "O circuito integrado U21 combina memória EPROM (com as rotinas de controle da CPU 8085) e linhas de I/O. As linhas da Port-B controlam sinais vitais de temporização do hardware, incluindo a geração lógica do comando XMTE que autoriza a divisão de frequência em U13 para gerar o pulso acústico de 2 MHz.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Como o sinal acústico refletido pelo oceano (energia sônica) é revertido em energia elétrica apta a trafegar pelo cabo blindado até a Unidade Eletrônica do SRD-331?",
      options: [
        "Através dos cristais piezoelétricos de proa e popa (Y1 e Y2); a pressão mecânica exercida pela onda acústica de eco sobre a estrutura cristalina gera uma diferença de potencial elétrico proporcional nos seus terminais (efeito piezoelétrico).",
        "Por meio de indução magnética em bobinas de núcleo de ferrite imersas em óleo de silicone no submódulo do transdutor.",
        "Através da variação de capacitância entre dois eletrodos de poliestireno excitados por uma corrente de bias de 24 VCC.",
        "Pelo aquecimento diferencial medido por termistores de precisão acoplados aos transformadores casadores T1 e T2."
      ],
      answer: "Através dos cristais piezoelétricos de proa e popa (Y1 e Y2); a pressão mecânica exercida pela onda acústica de eco sobre a estrutura cristalina gera uma diferença de potencial elétrico proporcional nos seus terminais (efeito piezoelétrico).",
      explanation: "O transdutor SRD-331 emprega cristais piezoelétricos (Y1/Y2) tanto na emissão quanto na recepção. Na recepção, as ondas de compressão sonora refletidas pela água exercem estresse mecânico sobre o cristal, gerando tensões elétricas milivoltadas proporcionais que são enviadas via cabo TTRS.",
      topic: "Capítulo 1 - Odômetro SRD-331"
    },
    {
      question: "Existe diferença no cálculo executado pelo processador central do SRD-331 para interpretar os retornos Doppler oriundos da dispersão por matéria inanimada (partículas minerais) em comparação com a dispersão por biomassa marinha (plâncton/vida marinha)?",
      options: [
        "Não. De acordo com o princípio operacional do sistema, qualquer partícula ou organismo suspenso na água dispersa e reflete a energia sônica de 2 MHz de forma equivalente para fins de desvio Doppler, não havendo distinção de cálculo entre matéria orgânica ou inorgânica.",
        "Sim, os retornos de biomassa marinha apresentam defasagem harmônica de 400 Hz que é filtrada pelo demodulador U3 antes da contagem na Porta Doppler.",
        "Sim, o microprocessador aplica um fator de correção logarítmico na EPROM U21 quando detecta atenuação superior a 10 dB típica de cardumes densos.",
        "Não, porém a contagem de 2048 cruzamentos em zero só é autorizada se o reflexo for estritamente de fundo rochoso ou arenoso em profundidades maiores que 10 metros."
      ],
      answer: "Não. De acordo com o princípio operacional do sistema, qualquer partícula ou organismo suspenso na água dispersa e reflete a energia sônica de 2 MHz de forma equivalente para fins de desvio Doppler, não havendo distinção de cálculo entre matéria orgânica ou inorgânica.",
      explanation: "O odômetro Doppler depende do fenômeno do espalhamento (volume scattering) provocado por quaisquer heterogeneidades acústicas na massa d'água (partículas minerais, microbolhas, plâncton ou microrganismos). O desvio de frequência Doppler depende da velocidade relativa dessas partículas em relação ao transdutor, sendo irrelevante sua natureza orgânica ou inorgânica.",
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
};

// Quiz de Eletrônica Digital II
quizzes["eletronica-digital-2"] = [
  // Questões de múltipla escolha
  {
    question: "Os circuitos integrados TTL, de uso geral, são dimensionados para operar na faixa de temperatura de:",
    options: ["-55°C a +125°C","-55°C a +85°C","-40°C a +85°C","-40°C a +80°C","0°C a +70°C"],
    answer: "0°C a +70°C"
  },
  {
    question: "A vantagem do CI TTL padrão sobre o CI MOS, padrão, é o(a):",
    options: ["FAN-OUT","dissipação de potência","imunidade ao ruído","larga faixa de alimentação de tensão","tempo de atraso de propagação"],
    answer: "tempo de atraso de propagação"
  },
  {
    question: "O tipo de lógica e a porta apresentada pelo circuito da Fig.100 são, respectivamente:",
    options: ["positiva e OR","positiva e NAND","negativa e AND","positiva e AND","negativa e NOR"],
    answer: "positiva e OR",
    image: circuito100
  },
  {
    question: "Os níveis lógicos de entrada e saída em um circuito digital são representados por tensões referentes à sua fonte de alimentação; o valor máximo de um nível alto em circuitos TTL é de quantos Volts?",
    options: ["0,8","1,2","2,0","5,0","5,8"],
    answer: "5,0"
  },
  {
    question: "De acordo com o circuito da Figura 105, para que a saída (S) tenha nível lógico 0, as suas entradas A, B e G deverão estar, respectivamente, nos seguintes níveis lógicos:",
    options: ["0,1 e 1","1,1 e 1","1,1 e 0","0,0 e 1","0,0 e 0"],
    answer: "1,1 e 1",
    image: circuito105
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
    answer: "NOR",
    image: circuito109
  },
  {
    question: "A menor tensão de entrada para que um circuito TTL STANDARD, reconheça como nível ALTO, é de quantos V?",
    options: ["0,4","0,8","2,0","2,4","3,5"],
    answer: "2,0"
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
    answer: "NAND",
    image: circuito102
  },
  {
    question: "O circuito lógico básico da família TTL é composto por portas:",
    options: ["NAND","AND","NOT","OR","NOR"],
    answer: "NAND"
  },
  {
    question: "Um CI digital, contendo 150 portas, é classificado como:",
    options: ["SSI","MSI","LSI","ULSI","GSI"],
    answer: "LSI"
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
    answer: "74ALS00"
  },
  {
    question: "Família que apresenta o maior FAN-OUT.",
    options: ["C-MOS","TTL","ECL","DTL","HTL"],
    answer: "C-MOS"
  },
  {
    question: "Tipo de estrutura interna que nos permite a confecção de blocos lógicos em CIs.",
    options: ["Bloco lógico","Porta lógica","Circuito lógico","Família lógica","Circuito combinacional"],
    answer: "Família lógica"
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
    answer: "2,0V"
  },
  {
    question: "Quando uma saída TTL acionar mais cargas do que o normal, teremos:",
    options: ["redução de IOL","perda do nível lógico","nenhuma alteração","redução de IOH","redução de VOL"],
    answer: "perda do nível lógico"
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
    answer: "45 mW"
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
    answer: "5,4V"
  },
  {
    question: "Quando uma TTL aciona uma CMOS, onde Vdd >>Vcc, devemos:",
    options: ["usar um BUFFER coletor aberto como interface","efetuar a ligação diretamente entre os dispositivos","usar um resistor de PULL-UP","usar uma saída TRI-STATE","usar uma interface conversora de níveis de correntes"],
    answer: "usar uma interface conversora de níveis de correntes"
  },
  {
    question: "O número de portas E, necessárias para construir um gerador de produtos canônicos de 5 variáveis, que usa matriz de simples encadeamento, é:",
    options: ["60","256","508","512","1024"],
    answer: "60"
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
    answer: "Demultiplex"
  },
  {
    question: "No circuito da figura 137, A = 1, B = 0, C=0, D = 1. Com estes níveis lógicos na entrada a porta ativa em nível um é:",
    options: ["P3","P6","P7","P10","P11"],
    answer: "P10",
    image: circuito137
  },
  {
    question: "No circuito da figura 102, quando A=0 e B = 1, podemos afirmar que D1, D2 e S estarão nas seguintes situações:",
    options: ["D1 conduzindo, D2 cortado e S = 0","D1 cortado, D2 conduzindo e S = 1","D1 conduzindo, D2 cortado e S = 0","D1 cortado, D2 conduzindo e S = 0","D1 conduzindo, D2 cortado e S = 1"],
    answer: "D1 cortado, D2 conduzindo e S = 1",
    image: circuito102
  },
  {
    question: "De acordo com o circuito da figura 104, quando tivermos S em nível 0, os transistores estarão nas seguintes condições:",
    options: ["T2 e T4 saturados e T3 cortado","T2 e T4 cortados e T3 saturado","T3 e T4 saturados e T2 cortado","T3 e T2 saturados e T4 cortado","T2 e T3 cortados e T4 saturado"],
    answer: "T2 e T4 saturados e T3 cortado",
    image: circuito104
  },
  {
    question: "O bloco lógico que permite o controle externo da corrente de coletor é o:",
    options: ["totem pole","toletor aberto","TRISTATE","CMOS padrão","PULL UP"],
    answer: "toletor aberto"
  },
  {
    question: "Qual é a estrutura básica de entrada do bloco lógico TTL?",
    options: ["Transistor bipolar ou MULTIEMISSORES","Porta XOR","Rede resistiva","Bloco injetor","Porta NOR"],
    answer: "Transistor bipolar ou MULTIEMISSORES"
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
    answer: "Transistores P conduzem e N cortam resultando em saída 1",
    image: circuito109
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
    question: "O que caracteriza a lógica positiva?",
    options: [
      "O estado lógico 1 é representado por tensão negativa.",
      "O estado lógico 1 é superior ao estado lógico 0 e é representado por uma tensão positiva.",
      "O estado lógico 0 é representado por tensão positiva e o estado 1 por 0 V.",
      "Os estados lógicos não dependem da tensão."
    ],
    answer: "O estado lógico 1 é superior ao estado lógico 0 e é representado por uma tensão positiva."
  },
  {
    question: "Qual dos exemplos representa corretamente a lógica positiva?",
    options: [
      "-5 V = 1 e 0 V = 0.",
      "+5 V = 0 e 0 V = 1.",
      "+5 V = 1 e 0 V = 0.",
      "+12 V = 0 e -12 V = 1."
    ],
    answer: "+5 V = 1 e 0 V = 0."
  },
  {
    question: "O que caracteriza a lógica negativa?",
    options: [
      "O estado lógico 1 é superior ao estado lógico 0.",
      "O estado lógico 0 é superior ao estado lógico 1 e o nível lógico 1 é representado por tensão negativa.",
      "O estado lógico 1 sempre corresponde a +5 V.",
      "O estado lógico 0 é representado por tensão positiva obrigatoriamente."
    ],
    answer: "O estado lógico 0 é superior ao estado lógico 1 e o nível lógico 1 é representado por tensão negativa."
  },
  {
    question: "O que determina as escalas de integração dos circuitos integrados?",
    options: [
      "O tipo de encapsulamento.",
      "A tensão de alimentação.",
      "A quantidade de portas ou dispositivos contidos no chip.",
      "O número de pinos."
    ],
    answer: "A quantidade de portas ou dispositivos contidos no chip."
  },
  {
    question: "Segundo a classificação GSI, um circuito integrado possui, no mínimo, quantas portas?",
    options: [
      "10.000 portas.",
      "100.000 portas.",
      "500.000 portas.",
      "1.000.000 de portas."
    ],
    answer: "1.000.000 de portas."
  },
  {
    question: "Qual é a densidade da escala LSI (Large Scale Integration)?",
    options: [
      "10 a 99 portas por chip.",
      "100 a 999 portas por chip.",
      "1.000 a 9.999 portas por chip.",
      "Acima de 1 milhão de portas."
    ],
    answer: "100 a 999 portas por chip."
  },
  {
    question: "Qual dispositivo é típico da escala ULSI?",
    options: [
      "Relé eletromecânico.",
      "Microprocessador avançado.",
      "Diodo Zener.",
      "Transistor bipolar discreto."
    ],
    answer: "Microprocessador avançado."
  },
  {
    question: "Qual é o tipo de configuração de saída da maioria das portas lógicas TTL?",
    options: [
      "Open Collector.",
      "Tri-State.",
      "Totem-Pole.",
      "Push-Pull CMOS."
    ],
    answer: "Totem-Pole."
  },
  {
    question: "Em uma porta NAND TTL, qual será o nível lógico de saída quando a entrada estiver em aberto?",
    options: [
      "Nível lógico 1.",
      "Alta impedância.",
      "Nível lógico 0.",
      "Indeterminado."
    ],
    answer: "Nível lógico 0."
  },
  {
    question: "Qual inovação tecnológica foi utilizada na entrada dos circuitos TTL?",
    options: [
      "Transistores Darlington.",
      "MOSFET de canal P.",
      "Transistores bipolares multiemissores.",
      "Amplificadores operacionais."
    ],
    answer: "Transistores bipolares multiemissores."
  },
  {
    question: "A família TTL é derivada de qual família lógica?",
    options: [
      "RTL.",
      "CMOS.",
      "DTL.",
      "ECL."
    ],
    answer: "DTL."
  },
  {
    question: "Qual é a tensão mínima de alimentação da série TTL 74XXX?",
    options: [
      "4,0 V.",
      "4,5 V.",
      "4,75 V.",
      "5,5 V."
    ],
    answer: "4,75 V."
  },
  {
    question: "Qual é a faixa de alimentação da série TTL 54XXX?",
    options: [
      "3,3 V a 5 V.",
      "4,5 V a 5,5 V.",
      "5 V a 6 V.",
      "4,75 V a 5,25 V."
    ],
    answer: "4,5 V a 5,5 V."
  },
  {
    question: "Qual é o fan-out típico da família TTL padrão?",
    options: [
      "5 blocos.",
      "8 blocos.",
      "10 blocos.",
      "20 blocos."
    ],
    answer: "10 blocos."
  },
  {
    question: "Qual é o tempo médio de atraso de propagação da TTL padrão?",
    options: [
      "1 ns.",
      "5 ns.",
      "10 ns.",
      "100 ns."
    ],
    answer: "10 ns."
  },
  {
    question: "Qual é a imunidade ao ruído da família TTL?",
    options: [
      "0,2 V.",
      "0,4 V.",
      "1,0 V.",
      "5,0 V."
    ],
    answer: "0,4 V."
  },
  {
    question: "Qual bloco lógico TTL não possui resistor de coletor ligado ao +VCC internamente?",
    options: [
      "Totem-Pole.",
      "Tri-State.",
      "Open Collector.",
      "Buffer."
    ],
    answer: "Open Collector."
  },
  {
    question: "Quem controla externamente a corrente de coletor em uma saída Open Collector?",
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
      "Reduz a tensão de alimentação.",
      "Aumenta a frequência de operação.",
      "Permite aumentar o fan-out.",
      "Reduz a temperatura do circuito."
    ],
    answer: "Permite aumentar o fan-out."
  },
  {
    question: "Qual tipo de saída apresenta um terceiro estado de alta impedância?",
    options: [
      "Totem-Pole.",
      "Open Collector.",
      "Tri-State.",
      "Darlington."
    ],
    answer: "Tri-State."
  },
  {
    question: "Ao selecionar uma família lógica, quais características devem ser consideradas?",
    options: [
      "Peso e tamanho.",
      "Velocidade e potência.",
      "Número de pinos e cor.",
      "Temperatura e encapsulamento."
    ],
    answer: "Velocidade e potência."
  },
  {
    question: "Qual é a versão TTL mais rápida?",
    options: [
      "74LS.",
      "74ALS.",
      "74AS.",
      "74C."
    ],
    answer: "74AS."
  },
  {
    question: "Quais subfamílias TTL possuem menor consumo de potência?",
    options: [
      "74S e 74AS.",
      "74LS e 74ALS.",
      "74H e 74AS.",
      "74F e 74S."
    ],
    answer: "74LS e 74ALS."
  },
  {
    question: "Qual é o tipo de saída do CI 7406?",
    options: [
      "Totem-Pole.",
      "Tri-State.",
      "Coletor Aberto.",
      "Buffer CMOS."
    ],
    answer: "Coletor Aberto."
  },
  {
    question: "Onde normalmente são utilizados os CIs que contêm buffers?",
    options: [
      "Em reguladores de tensão.",
      "Em interfaces para aumentar a capacidade de corrente.",
      "Em fontes chaveadas.",
      "Em osciladores."
    ],
    answer: "Em interfaces para aumentar a capacidade de corrente."
  },
  {
    question: "Que tipo de transistor é utilizado na família CMOS?",
    options: [
      "Bipolar NPN.",
      "Bipolar PNP.",
      "MOS complementares (canal N e canal P).",
      "JFET."
    ],
    answer: "MOS complementares (canal N e canal P)."
  },
  {
    question: "Qual tipo de MOSFET é utilizado nos CIs digitais CMOS?",
    options: [
      "Depleção.",
      "Enriquecimento (modo de indução).",
      "Canal duplo.",
      "MOS de potência."
    ],
    answer: "Enriquecimento (modo de indução)."
  },
  {
    question: "Quais são as séries comerciais da família CMOS?",
    options: [
      "74LS, 74ALS e 74AS.",
      "54C/74C, 4000A e 4000B.",
      "74HC e 74HCT apenas.",
      "RTL e DTL."
    ],
    answer: "54C/74C, 4000A e 4000B."
  },
  {
    question: "Qual é a faixa de temperatura típica dos CIs CMOS comuns?",
    options: [
      "0°C a 70°C.",
      "-20°C a 80°C.",
      "-40°C a +85°C.",
      "-55°C a +125°C."
    ],
    answer: "-40°C a +85°C."
  },
  {
    question: "Qual é a faixa de alimentação da série CMOS 4000B?",
    options: [
      "1 V a 5 V.",
      "3 V a 18 V.",
      "5 V a 12 V.",
      "10 V a 15 V."
    ],
    answer: "3 V a 18 V."
  },
  {
    question: "Em um CI CMOS alimentado com VDD = 10 V, qual é o valor mínimo aproximado de VOH?",
    options: [
      "5 V.",
      "7 V.",
      "9,95 V.",
      "10,5 V."
    ],
    answer: "9,95 V."
  },
  {
    question: "Qual melhoria foi introduzida na série CMOS 4000B em relação à 4000?",
    options: [
      "Memória interna.",
      "Buffer na saída.",
      "Alimentação dupla.",
      "Oscilador interno."
    ],
    answer: "Buffer na saída."
  },
  {
    question: "No código MM74C192N, o número 192 identifica:",
    options: [
      "O fabricante.",
      "A série CMOS.",
      "A função específica do dispositivo.",
      "A tensão de alimentação."
    ],
    answer: "A função específica do dispositivo."
  },
  {
    question: "Quando utilizamos um circuito Multiplexador (MUX)?",
    options: [
      "Quando desejamos dividir um sinal em várias saídas.",
      "Quando precisamos selecionar uma entre várias entradas e enviá-la para uma única saída.",
      "Para amplificar sinais analógicos.",
      "Para armazenar dados permanentemente."
    ],
    answer: "Quando precisamos selecionar uma entre várias entradas e enviá-la para uma única saída."
  },
  {
    question: "Qual é a finalidade da entrada de seleção em um MUX?",
    options: [
      "Alimentar o circuito.",
      "Definir a frequência de operação.",
      "Escolher qual entrada será conectada à saída.",
      "Aumentar a corrente de saída."
    ],
    answer: "Escolher qual entrada será conectada à saída."
  }
];

quizzes["manutencao-dos-sistemas-telefonicos-2"] = manutencao2Questions;
quizzes["eletronica-digital-2-p2"] = eletronica2P2Questions;

export const questions: Question[] = quizzes.telefonia;