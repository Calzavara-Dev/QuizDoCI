const fs = require('fs');
const path = require('path');

const rawText = `1. Durante uma manobra padrão, o operador do Centro de Operações de Combate (COC) nota que o indicador de direção do Anemômetro Tipo F continuou girando indefinidamente após uma guinada de 30º. Qual a causa mais provável dessa avaria? A) Falha no gerador de indução, que parou de enviar o sinal CA. B) Queima do motor de frequência constante, travando o integrador mecânico. C) Falta de realimentação (feedback) mecânica para o Transformador de Controle (CT). D) Abertura do circuito pela microchave FC. E) Curto-circuito nos anéis coletores do transmissor síncro. Gabarito: C Justificativa: No servossistema do Tipo F, o motor posiciona o rotor e, simultaneamente, envia um sinal mecânico de resposta ao rotor do CT para zerar o erro. Sem essa realimentação, o sistema não percebe que já atingiu a posição e continua girando o indicador.

2. No sistema EVERSHED, o painel de distribuição possui diversos componentes eletrônicos vitais. Qual é a função específica dos diodos D5 e D6 nesse circuito? A) Retificar a corrente alternada vinda do taco-gerador. B) Atuar como reguladores e estabilizadores de voltagem. C) Converter os fracos sinais mecânicos em elétricos. D) Proteger o circuito de velocidade contra picos de 400Hz. E) Fornecer alimentação exclusiva para a iluminação vermelha dos diais. Gabarito: B Justificativa: Conforme cobrado especificamente pela banca, os diodos D5 e D6 no EVERSHED funcionam como reguladores e estabilizadores de voltagem.

3. O ajuste e a calibração do sistema EVERSHED dependem do correto manuseio de potenciômetros específicos. Para ajustar o "amortecimento" do servo de direção, de modo a reduzir oscilações abruptas (overshoot), o mantenedor deve atuar em qual componente? A) RV1 B) RV2 C) RV3 D) RV4 E) RV5 Gabarito: B Justificativa: No servo de direção do EVERSHED, o RV1 ajusta a sensibilidade, enquanto o RV2 fornece o feedback necessário para ajustar o amortecimento (reduzindo o overshoot). O RV3 é usado para amortecimento, mas no servo de velocidade.

4. Ao inspecionar o servo de velocidade do anemômetro EVERSHED após uma troca de mostrador, o militar precisa realizar a calibração (ajuste fino) da velocidade lida no dial. Ele deve utilizar o potenciômetro: A) RV1 B) RV2 C) RV3 D) RV4 E) RV5 Gabarito: D Justificativa: O potenciômetro RV4 é o responsável direto por atuar como calibrador do mostrador no servo de velocidade do Evershed.

5. A chave de teste de velocidade do sistema EVERSHED (S2) permite simular ventos sem a necessidade de fluxo de ar real nos copos. Quais são as marcações corretas de teste disponíveis nesta chave? A) STANDBY, 10, 20, e 50 nós. B) RUN, 15, 30 e 45 nós. C) ZERO, 25, 50 e 75 nós. D) NORMAL, 20, 40 e 60 nós. E) OFF, LOW, MEDIUM e HIGH. Gabarito: B Justificativa: As posições da chave de teste de velocidade do Evershed são: posição de operação (RUN), seguida pelas simulações exatas de 15, 30 e 45.

6. Em caso de falha completa (queima) do Transformador T1 no sistema EVERSHED, qual dos componentes abaixo NÃO ficará sem alimentação? A) O Amplificador de Potência. B) O circuito de teste de direção. C) O detetor de direção. D) O Diodo "D1". E) O motor síncrono do tipo B. Gabarito: E Justificativa: O transformador T1 alimenta o amplificador de potência, o teste de direção, o detetor de direção e o diodo D1. O motor síncrono pertence ao servossistema do Tipo B e F, sendo uma "pegadinha" conceitual que mistura os equipamentos.

7. Durante a manutenção nas Fragatas da Classe Niterói que utilizam o anemômetro EVERSHED, o técnico precisa verificar a retificação do sinal gerado pelo LINVAR. Para isso, ele deve inspecionar a ponte de diodos: A) D1 e D2. B) D5 e D6. C) D4. D) D8. E) RV4. Gabarito: C Justificativa: O dispositivo responsável por retificar o sinal proveniente do síncro LINVAR (que atua como transdutor) nas fragatas é especificamente a ponte de diodos D4.

8. O ajuste de zero é crucial para a precisão inicial do sistema EVERSHED. Analisando a elétrica do sistema, a voltagem utilizada estritamente para o "Ajuste do Zero" possui o valor de: A) 24 Volts (contínuos). B) 10 Volts (400Hz). C) 1 Volt (oriundo do Transformador 2). D) 60 Volts (400Hz). E) 115 Volts (60Hz). Gabarito: C Justificativa: A alimentação de 1 volt, proveniente do transformador T2, tem a finalidade específica de prover a energia para o circuito de "Ajuste do Zero" do sistema Evershed.

9. Ao realizar a verificação das tensões nos pontos de teste (TP) da Unidade de Retransmissão (RTU) do anemômetro Evershed, o militar precisa de um ponto comum de referência (TERRA). O ponto de teste que deve sempre ser utilizado como referência de 0 Volts é o: A) TP 1 B) TP 2 C) TP 4 D) TP 6 E) TP 12 Gabarito: D Justificativa: Nos testes da RTU, o ponto TP 6 é a referência padronizada de aterramento (0 volts) para as medições.

10. Os anemômetros instalados em navios de origem norte-americana utilizam nomenclaturas específicas para identificar seus circuitos em toda a documentação do navio. Os circuitos destinados à informação de Direção do Vento e Intensidade do Vento são designados, respectivamente, pelas siglas: A) HE e HD. B) HD e HE. C) TX e TR. D) CT e CX. E) B1 e B2. Gabarito: B Justificativa: "HD" refere-se à direção do vento (D de Direction/Direção) e "HE" refere-se à intensidade/velocidade (E provavelmente de Estimate ou do código do projeto americano). A alternativa A inverte a ordem exigida pelo enunciado.`;

const blocks = rawText.split(/\n\n/);

const questions = [];

for (const block of blocks) {
  if (!block.trim()) continue;
  
  // Extract parts using regex
  // Format: "1. [Question text] A) [Opt A] B) [Opt B] C) [Opt C] D) [Opt D] E) [Opt E] Gabarito: [Letter] Justificativa: [Text]"
  
  const questionMatch = block.match(/^\d+\.\s*(.*?)(?=\s*A\))/s);
  const aMatch = block.match(/A\)\s*(.*?)(?=\s*B\))/s);
  const bMatch = block.match(/B\)\s*(.*?)(?=\s*C\))/s);
  const cMatch = block.match(/C\)\s*(.*?)(?=\s*D\))/s);
  const dMatch = block.match(/D\)\s*(.*?)(?=\s*E\))/s);
  const eMatch = block.match(/E\)\s*(.*?)(?=\s*Gabarito:)/s);
  const gabaritoMatch = block.match(/Gabarito:\s*([A-E])/);
  const justificativaMatch = block.match(/Justificativa:\s*(.*)/s);

  if (questionMatch && aMatch && bMatch && cMatch && dMatch && eMatch && gabaritoMatch) {
    const questionText = questionMatch[1].trim();
    const opts = {
      'A': aMatch[1].trim(),
      'B': bMatch[1].trim(),
      'C': cMatch[1].trim(),
      'D': dMatch[1].trim(),
      'E': eMatch[1].trim()
    };
    
    const correctLetter = gabaritoMatch[1].trim();
    const correctAnswer = opts[correctLetter];
    
    const options = [opts['A'], opts['B'], opts['C'], opts['D'], opts['E']];
    const explanation = justificativaMatch ? justificativaMatch[1].trim() : undefined;

    questions.push({
      question: questionText,
      options: options,
      answer: correctAnswer,
      explanation: explanation
    });
  } else {
    console.log("Failed to match block:", block);
  }
}

const targetFile = path.join(__dirname, 'anemometros.ts');
let fileContent = fs.readFileSync(targetFile, 'utf8');

// find the last ];
const insertionPoint = fileContent.lastIndexOf('];');
if (insertionPoint !== -1) {
  const newCode = questions.map(q => {
    return `  {
    question: ${JSON.stringify(q.question)},
    options: ${JSON.stringify(q.options)},
    answer: ${JSON.stringify(q.answer)},
    explanation: ${q.explanation ? JSON.stringify(q.explanation) : 'undefined'}
  }`;
  }).join(',\n') + '\n';
  
  // ensure there's a comma before the new code if there are existing questions
  // Let's replace the ending "  }\n];" with "  },\n" + newCode + "];"
  
  const modifiedContent = fileContent.substring(0, insertionPoint).replace(/\s*$/, '') + ',\n' + newCode + '];\n';
  
  fs.writeFileSync(targetFile, modifiedContent, 'utf8');
  console.log('Successfully appended ' + questions.length + ' questions.');
} else {
  console.log('Could not find insertion point ];');
}
