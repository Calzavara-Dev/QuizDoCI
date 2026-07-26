import type { Question } from "../types/question";

export const anemometrosQuestions: Question[] = [
  {
    question: "Cite os testes realizados na unidade de retransmissão do Anemômetro EVERSHED.",
    options: ["Velocidade e direção.","RV1 e RV2.","Alimenta o teste de velocidade.","Transdutor."],
    answer: "Velocidade e direção.",
    topic: "Testes na unidade de retransmissão"
  },
  {
    question: "Quais os potenciômetros responsáveis pelo ajuste de amortecimento e ajuste do zero do servo de velocidade do anemômetro EVERSHED?",
    options: ["RV3 e RV5.","1 hélice e 1 aleta aerodinâmica.","RUN, 15, 30 e 45 nós.","Reguladores de voltagem / estabilizador."],
    answer: "RV3 e RV5.",
    topic: "Componentes do servo de velocidade"
  },
  {
    question: "No subconjunto de direção do vento do sistema tipo B, qual componente que aciona o transmissor síncro 5HG?",
    options: ["motor de acompanhamento.","Anemômetro.","10 V/400Hz.","0 RPM."],
    answer: "motor de acompanhamento.",
    topic: "Subconjunto de direção (Tipo B)"
  },
  {
    question: "O que ocorrerá no sistema tipo B quando os rotores do transmissores de direção da alheta e do transformador síncro de controle(CT) estiverem em correspondência?",
    options: ["A saída(sinal de erro) do CT será zero.","10 V/400Hz.","2,4:1","Chave S1."],
    answer: "A saída(sinal de erro) do CT será zero.",
    topic: "Síncros e CT (Tipo B)"
  },
  {
    question: "No anemômetro tipo B, quando os rotores 1HG e 1HCT estiverem em correspondência, a saída do transformador de controle(CT) será:",
    options: ["0 Volts.","RV4.","Gerador de indução.","1 hélice e 1 aleta aerodinâmica."],
    answer: "0 Volts.",
    topic: "Síncros e CT (Tipo B)"
  },
  {
    question: "Qual alimentação necessária para iluminação do painel de controle do anemômetro EVERSHED?",
    options: ["24 Volts.","Subconjunto de direção e de velocidade.","Amortecimento.","60V/400HZ."],
    answer: "24 Volts.",
    topic: "Alimentação de iluminação"
  },
  {
    question: "No anemômetro EVERSHED. Qual a variação de voltagem medida entre os pontos TP6 e TP7?",
    options: ["0 a 100mV.","FS1 e FS2.","Retificar em meia onda o sinal de 10V 400Hz vindo de T1.","É o síncro TX da unidade detectora."],
    answer: "0 a 100mV.",
    topic: "Medidas de tensão (EVERSHED)"
  },
  {
    question: "No anemômetro tipo B, o sinal elétrico que chega no amplificador é oriundo do síncro do tipo:",
    options: ["1HCT.","CT.(ver diag. dos servos e da RTU)","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","Elétrico."],
    answer: "1HCT.",
    topic: "Sinais do amplificador (Tipo B)"
  },
  {
    question: "Qual a chave do sistema EVERSHED habilitará 10V proveniente do transformador T1?",
    options: ["Chave S1.","1 hélice e 1 aleta aerodinâmica.","RV3 faz o amortecimento e o LINVAR funciona como um transdutor.","0 a 100 nós, em intervalos de 5 nós."],
    answer: "Chave S1.",
    topic: "Chaves e alimentação (EVERSHED)"
  },
  {
    question: "Descreva como está instalado o transmissor síncro de velocidade do sistema tipo B.",
    options: ["Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","Funcionam como reguladores de tensão.","No mastro principal das Fragatas.","Erro."],
    answer: "Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.",
    topic: "Instalação física (Tipo B)"
  },
  {
    question: "Analisando o diagrama do conjunto de direção do vento do sistema tipo F. Qual a frequência de operação do transmissor de controle?",
    options: ["400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)","115Volts?400HZ.","copos(cubas).","PA112."],
    answer: "400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)",
    topic: "Frequência de operação (Tipo F)"
  },
  {
    question: "Analisando o diagrama do sistema EVERSHED, o que acontecerá se houve uma avaria em R13?",
    options: ["Não haverá a regulagem de tensão para chave S3 (115V/400Hz).","TX","Anemômetro.","Um ( ver diagrama)."],
    answer: "Não haverá a regulagem de tensão para chave S3 (115V/400Hz).",
    topic: "Avarias e esquemas (EVERSHED)"
  },
  {
    question: "O síncro LINVAR do sistema EVERSHED fornece uma realimentação de quantos volts?",
    options: ["40VCA.","0 a 100 nós, em intervalos de 5 nós.","Na Praça de Comunicações Interiores.","Aumentar o fator de potência do servo motor do sistema de velocidade."],
    answer: "40VCA.",
    topic: "Realimentação do LINVAR"
  },
  {
    question: "No anemômetro EVERSHED, o sinal elétrico que vai do CX para a unidade de correção de dados do vento alimenta o estator de um:",
    options: ["CT(Transformador de controle)","RV4 – calibrador do mostrador, RV3 – amortecimento e Linvar – Transdutor.","0 a 100mV.","Quando a velocidade for nula(zero)."],
    answer: "CT(Transformador de controle)",
    topic: "Correção de dados do vento"
  },
  {
    question: "No sistema EVERSHED, quando o sinal medido em RV4 e em R11 são iguais e opostos, a velocidade do servo motor é de:",
    options: ["0 RPM.","Amplificador de potência, teste de direção, detetor de direção e diodo “D1”.","Converter o movimento rotativo em angular no conjunto de velocidade do vento.","Na periferia do disco."],
    answer: "0 RPM.",
    topic: "Controle do servo motor"
  },
  {
    question: "Quem comanda o sincro LINVAR do sistema EVERSHED?",
    options: ["Redutor de erro.","Aumentar o fator de potência do servo motor do sistema de velocidade.","10V/400HZ.","EVERSHED. Uso geral."],
    answer: "Redutor de erro.",
    topic: "Comando do LINVAR"
  },
  {
    question: "No sistema tipo B, no conjunto de velocidade, a unidade síncro que gira na mesma razão do TX acoplado á hélice é um:",
    options: ["TR.","Habilitar 115V/400Hz.","24 Volts.","O gerador de indução é acionado pelas cubas e produz um sinal elétrico de saída CA cuja voltagem é proporcional à velocidade do vento."],
    answer: "TR.",
    topic: "Unidades síncronas (Tipo B)"
  },
  {
    question: "Qual componente do sistema tipo B que converte o movimento rotativo em angular no conjunto de velocidade do vento?",
    options: ["Equipamento de frequência constante.","Redutor de erros.","37TX6 e 31TX4.","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara."],
    answer: "Equipamento de frequência constante.",
    topic: "Conversão de movimento (Tipo B)"
  },
  {
    question: "A informação elétrica que sai do Transformador de Controle, vinda diretamente do transmissor de direção do anemômetro tipo F, é chamada sinal de:",
    options: ["Erro.","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","Angular.","motor de acompanhamento."],
    answer: "Erro.",
    topic: "Sinal do Transformador de Controle"
  },
  {
    question: "Cite as posições da chave de teste de velocidade do sistema de anemômetro EVERSHED?",
    options: ["RUN, 15, 30 e 45 nós.","Aumentar o fator de potência do servo motor do sistema de velocidade.","Funcionam como reguladores de tensão.","Falha de alimentação p o linvar, avaria em D4, curto em C7"],
    answer: "RUN, 15, 30 e 45 nós.",
    topic: "Chaves de teste (EVERSHED)"
  },
  {
    question: "No sistema tipo B, a unidade síncrona que aciona os discos de fricção do integrador mecânico é o:",
    options: ["motor de frequência constante.","10V/400HZ.","400Hz.","Velocidade: Quando as cubas estiverem paradas. Direção: quando o catavento estiver alinhado no sentido proa popa do navio."],
    answer: "motor de frequência constante.",
    topic: "Integrador mecânico (Tipo B)"
  },
  {
    question: "Ao deslocarmos a chave S1 da posição normal para as posições de teste, estamos aplicando quantos volts no estator do Transformador de Controle(CT)?",
    options: ["10V/400HZ.","Quando a velocidade for nula(zero).","TX / 26V400Hz.","10º de 0º a 360º."],
    answer: "10V/400HZ.",
    topic: "Teste e Transformador de Controle"
  },
  {
    question: "Qual é a alimentação do síncro LINVAR, do sistema EVERSHED?",
    options: ["60V/400HZ.","Retificar em meia onda o sinal de 10V 400Hz vindo de T1.","Fornece indicações continua ou instantânea da intensidade em nós e da direção em graus do vento. Os tipos básicos são: B, F e EVERSHED.","No mastro principal das Fragatas."],
    answer: "60V/400HZ.",
    topic: "Alimentação do LINVAR"
  },
  {
    question: "No sistema EVERSHED, no servo de direção, o componente que posiciona o Transformador de Controle(CT) para anular o sinal de erro é um:",
    options: ["Servo motor.","Aumentar o ganho do servo motor(aumentar o fator de potência).","Redutor de erro.","24 Volts."],
    answer: "Servo motor.",
    topic: "Servo de direção (EVERSHED)"
  },
  {
    question: "No anemômetro tipo B, a unidade síncro que é diretamente acoplada á aleta é um:",
    options: ["transmissor síncro.","Fornece indicações continua ou instantânea da intensidade em nós e da direção em graus do vento. Os tipos básicos são: B, F e EVERSHED.","Elétrico.","Regular a tensão para o amplificador PC 115A 101."],
    answer: "transmissor síncro.",
    topic: "Acoplamento na aleta (Tipo B)"
  },
  {
    question: "Qual a finalidade da micro chave do sistema tipo B, localizada no conjunto de velocidade do vento?",
    options: ["Abrir o circuito FC quando a velocidade for nula(zero).","37TX6 e 31TX4.","0 RPM.","6 volts ligados em paralelo."],
    answer: "Abrir o circuito FC quando a velocidade for nula(zero).",
    topic: "Micro chave de velocidade (Tipo B)"
  },
  {
    question: "Qual componente do servo de direção que aciona mecanicamente os transmissores de direção?",
    options: ["Redutor de erros.","60V/400Hz.","RV3 faz o amortecimento e o LINVAR funciona como um transdutor.","1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes)."],
    answer: "Redutor de erros.",
    topic: "Acionamento mecânico de direção"
  },
  {
    question: "Qual é alimentação da unidade síncro que envia um sinal elétrico para a unidade de correções de dados do vento?",
    options: ["115Volts?400HZ.","Erro.","1:12,5","1 – Conjunto anemômetro e catavento usado para detectar a velocidade e direção do vento, 2 – Unidade de retransmissão (RTU) usadas para amplificar os sinais fracos, 3 – Receptores e indicadores de velocidade e direção do vento."],
    answer: "115Volts?400HZ.",
    topic: "Alimentação e correções"
  },
  {
    question: "No anemômetro EVERSHED, qual componente cujo sinal de saída se opõe ao sinal que aparece em R11 é o:",
    options: ["O potenciômetro RV4.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.","0 RPM.","O sincro transmissor de direção do vento."],
    answer: "O potenciômetro RV4.",
    topic: "Sinais e potenciômetros (EVERSHED)"
  },
  {
    question: "Qual é a alimentação do transmissor síncro de direção do vento do anemômetro EVERSHED?",
    options: ["26V/400hz.","Sinal elétrico vindo do TX.(ver diagrama do servo de direçao)","Motor de acompanhamento M-2.(servo motor)","1:12,5"],
    answer: "26V/400hz.",
    topic: "Alimentação de direção (EVERSHED)"
  },
  {
    question: "Qual é a alimentação para o painel de controle do sistema EVERSHED?",
    options: ["115V/400HZ.","1 Volt oriundo do Transformador T2.","400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)","Faz o ajuste do zero."],
    answer: "115V/400HZ.",
    topic: "Alimentação do painel"
  },
  {
    question: "Qual o principio de funcionamento do detetor do sistema EVERSHED?",
    options: ["Gerador de indução.","Fixo e de controle.","Chave S1.","Engrenagem redutora 2000/1, o potenciômetroRV3."],
    answer: "Gerador de indução.",
    topic: "Princípio de funcionamento do detetor"
  },
  {
    question: "No sistema EVERSHED, no detetor da unidade de velocidade, qual componente vem com ajuste de fábrica?",
    options: ["Reostato.","RV3 e RV5.","Ao acionarmos a chave : o indicador de direção deverá ir a zero graus. Nas posições 1=NORMAL; 2= 0º (zero grau); 3º 120º BE. 4º 120º BB.","Redutor de erro."],
    answer: "Reostato.",
    topic: "Ajuste de fábrica"
  },
  {
    question: "Quais os transmissores síncronos do anemômetro tipo F são posicionados pelo servo de direção?",
    options: ["37TX6 e 31TX4.","\"HE\" – intensidade do vento e \"HD\" – direção do vento.","1 Volt oriundo do Transformador T2.","Redutor de erro."],
    answer: "37TX6 e 31TX4.",
    topic: "Transmissores de direção (Tipo F)"
  },
  {
    question: "Quais os tipos de indicadores síncronos são utilizados pelo sistema tipo F?",
    options: ["18TR6 e 18TR4.","Converter os fracos sinais de velocidade e direção do vento provenientes do detetor, tornando-os adequados para os indicadores (RTU).","1 hélice e 1 aleta aerodinâmica.","Amortecimento."],
    answer: "18TR6 e 18TR4.",
    topic: "Indicadores síncronos (Tipo F)"
  },
  {
    question: "Qual é o intervalo em nós do dial de velocidade do sistema tipo F?",
    options: ["5 nós.","Um ( ver diagrama).","Falta de realimentação (ausência do sinal de erro no circuito do servo de direção).","Não haverá a regulagem de tensão para chave S3 (115V/400Hz)."],
    answer: "5 nós.",
    topic: "Dial de velocidade (Tipo F)"
  },
  {
    question: "No sistema EVERSHED, cite que dispositivo do servo de direção trabalha como gerador de sinal de erro?",
    options: ["TX","É um sobressalente, usado caso o navio necessite receptores de 180 nós, basta fazer a troca entre os dois conjuntos de engrenagem.","0 a 100mV.","No painel de controle / unidade RTU."],
    answer: "TX",
    topic: "Gerador de sinal de erro"
  },
  {
    question: "Cite a alimentação principal para o anemômetro EVERSHED?",
    options: ["115V/400HZ.","TX.","Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância.","Ajuste do zero."],
    answer: "115V/400HZ.",
    topic: "Alimentação principal"
  },
  {
    question: "Que dispositivo do servo de direção do sistema EVERSHED é responsável em reposicionar o rotor do CT, o sinal de erro?",
    options: ["Motor de acompanhamento M2 ou Servo motor.","O sincro transmissor de direção do vento.","Na PCI (Praça de Comunicações Interiores).","Angular."],
    answer: "Motor de acompanhamento M2 ou Servo motor.",
    topic: "Reposicionamento do rotor"
  },
  {
    question: "Cite um dispositivo do servo de velocidade do sistema EVERSHED, responsável pelo amortecimento das oscilações.",
    options: ["Engrenagem redutora 2000/1, o potenciômetroRV3.","B1 e B2.","Reostato.","Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância."],
    answer: "Engrenagem redutora 2000/1, o potenciômetroRV3.",
    topic: "Amortecimento (EVERSHED)"
  },
  {
    question: "Qual é a razão de transformação do conjunto de engrenagem no servo de velocidade caso o navio necessite usar receptores de 180 nós?",
    options: ["2,4:1","10V/400HZ.","RV3: Amortecimento. RV4: Ajuste do zero / Calibrador do mostrador. (O manuscrito inverteu os nomes inicialmente, e corrigiu de caneta vermelha)","Converter os fracos sinais de velocidade e direção do vento vindo do detetor."],
    answer: "2,4:1",
    topic: "Razão de transformação"
  },
  {
    question: "Qual a finalidade do capacitor C3 do servo de velocidade do sistema EVERSHED?",
    options: ["Aumentar o ganho do servo motor(aumentar o fator de potência).","115Volts?400HZ.","Preventivas e corretivas.","Na PCI (Praça de Comunicações Interiores)."],
    answer: "Aumentar o ganho do servo motor(aumentar o fator de potência).",
    topic: "Capacitor C3"
  },
  {
    question: "Qual a unidade aloja o transformador de 115/6Volts do anemômetro tipo B?",
    options: ["Indicadora.","TX da unidade detetora.","60V/400Hz.","40 VCA."],
    answer: "Indicadora.",
    topic: "Alojamento do transformador (Tipo B)"
  },
  {
    question: "Qual componente do servo de velocidade do sistema EVERSHED funciona como transdutor?",
    options: ["LINVAR.","Reposicionar o rotor do CT, reduzindo o sinal de erro.","Alimenta o teste de velocidade.","Um ( ver diagrama)."],
    answer: "LINVAR.",
    topic: "Transdutor (EVERSHED)"
  },
  {
    question: "Qual a função do motor de acompanhamento do anemômetro tipo F, do conjunto de direção do vento?",
    options: ["Transmite o deslocamento da aleta.","Velocidade e direção.","Aumentar o fator de potência do servo motor do sistema de velocidade.","TR."],
    answer: "Transmite o deslocamento da aleta.",
    topic: "Motor de acompanhamento (Tipo F)"
  },
  {
    question: "Qual é a função do potenciômetro RV4 do sistema EVERSHED?",
    options: ["Faz o ajuste do zero.","0 (Zero).","115Volts?400HZ.","Converter os fracos sinais de direção e velocidade."],
    answer: "Faz o ajuste do zero.",
    topic: "Potenciômetro RV4 (EVERSHED)"
  },
  {
    question: "Qual é a função do potenciômetro RV3 só sistema EVERSHED?",
    options: ["Faz o amortecimento.","Falta de realimentação (ausência do sinal de erro no circuito do servo de direção).","Angular.","TX / 26V400Hz."],
    answer: "Faz o amortecimento.",
    topic: "Potenciômetro RV3 (EVERSHED)"
  },
  {
    question: "Qual o propósito da RTU do sistema EVERSHED?",
    options: ["Converter os fracos sinais de velocidade e direção do vento vindo do detetor.","Fixo e de controle.","RV4.","RV3: Amortecimento. RV4: Ajuste do zero / Calibrador do mostrador. (O manuscrito inverteu os nomes inicialmente, e corrigiu de caneta vermelha)"],
    answer: "Converter os fracos sinais de velocidade e direção do vento vindo do detetor.",
    topic: "RTU (EVERSHED)"
  },
  {
    question: "Quais os potenciômetros do servo de direção do sistema EVERSHED, são responsáveis pela sensibilidade e amortecimento?",
    options: ["RV1 e RV2.","40 VCA.","0 a 100mV.","1:12,5"],
    answer: "RV1 e RV2.",
    topic: "Sensibilidade e amortecimento (EVERSHED)"
  },
  {
    question: "Mencione em que consiste o sistema tipo B.",
    options: ["Detetor, transmissor e indicador.","CT.","Velocidade: Quando as cubas estiverem paradas. Direção: quando o catavento estiver alinhado no sentido proa popa do navio.","Engrenagem redutora 2000/1, o potenciômetroRV3."],
    answer: "Detetor, transmissor e indicador.",
    topic: "Composição do sistema tipo B"
  },
  {
    question: "Quais enrolamentos que fazem parte do servo motor de direção e velocidade do sistema EVERSHED?",
    options: ["Fixo e de controle.","Funciona como um transdutor.","O sincro transmissor de direção do vento.","4 posições (RUN, 15, 30 e 45 nós)."],
    answer: "Fixo e de controle.",
    topic: "Enrolamentos do servo motor"
  },
  {
    question: "No anemômetro tipo B, qual será a posição do RODETE na velocidade máxima?",
    options: ["Na periferia do disco.","Engrenagem redutora 2000/1 e potenciômetro RV3.","Reposicionar o rotor do CT, reduzindo o sinal de erro.","60 OHM."],
    answer: "Na periferia do disco.",
    topic: "Posição do RODETE (Tipo B)"
  },
  {
    question: "Qual a finalidade do DIAC no conjunto de direção do anemômetro tipo F?",
    options: ["Regular a tensão para o amplificador PC 115A 101.","TG1. Ver diagrama em bloco","Falha de alimentação p o linvar, avaria em D4, curto em C7","Habilitar 115V/60Hz."],
    answer: "Regular a tensão para o amplificador PC 115A 101.",
    topic: "Finalidade do DIAC (Tipo F)"
  },
  {
    question: "Qual o valor ôhmico do resistor (R-103) do conjunto de velocidade do anemômetro tipo F?",
    options: ["60 OHM.","4 posições (RUN, 15, 30 e 45 nós).","EVERSHED. Uso geral.","Sinal elétrico vindo do TX.(ver diagrama do servo de direçao)"],
    answer: "60 OHM.",
    topic: "Resistor R-103 (Tipo F)"
  },
  {
    question: "Qual a frequência de operação do síncro 18CT4 do conjunto de velocidade do anemômetro tipo F?",
    options: ["400Hz.","Habilitar 115V/400Hz.","400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)","Conjunto de 3 ou 4 cubas e de uma aleta aerodinâmica montada em um suporte vertical. Funcionamento – O gerador de indução acionados pelas cubas produzem sinal elétrico de saída proporcional a velocidade do vento."],
    answer: "400Hz.",
    topic: "Frequência de operação 18CT4"
  },
  {
    question: "Qual a função do LINVAR no servo de velocidade do sistema de anemômetro EVERSHED?",
    options: ["Transdutor.","Na unidade indicadora.","A amplitude do sinal de erro.","37TX6 e 31TX4."],
    answer: "Transdutor.",
    topic: "Função do LINVAR (EVERSHED)"
  },
  {
    question: "Qual amplificador está incluindo em cada um dos servos, na RTU do anemômetro EVERSHED?",
    options: ["PA-112-A","Angular.","Servomotor.(redutor de erros).","Direção – 0 a 360º sendo 0 a 180º vermelho e 0 a 180º verde com intervalos de 2 em 2º. Intensidade – 0 a 75 nos com intervalo de 1 nó."],
    answer: "PA-112-A",
    topic: "Amplificadores da RTU"
  },
  {
    question: "Qual a finalidade do conjunto de engrenagens de razão 2,4:1 no servo de velocidade, do anemômetro EVERSHED?",
    options: ["É um sobressalente, usado caso o navio necessite receptores de 180 nós, basta fazer a troca entre os dois conjuntos de engrenagem.","TX","Redutor de erros.","Falta de realimentação (ausência do sinal de erro no circuito do servo de direção)."],
    answer: "É um sobressalente, usado caso o navio necessite receptores de 180 nós, basta fazer a troca entre os dois conjuntos de engrenagem.",
    topic: "Engrenagens de razão 2,4:1"
  },
  {
    question: "Cite a finalidade do capacitor C3 no servo de velocidade do anemômetro EVERSHED.",
    options: ["Aumentar o fator de potência do servo motor do sistema de velocidade.","400Hz.","37TX6 e 31TX4.","Na PCI (Praça de Comunicações Interiores)."],
    answer: "Aumentar o fator de potência do servo motor do sistema de velocidade.",
    topic: "Capacitor C3 (EVERSHED)"
  },
  {
    question: "Descreva respectivamente a finalidade dos capacitores C-105 e C-106 do conjunto de velocidade do anemômetros tipo F.",
    options: ["Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância.","TX.","Converter os fracos sinais de velocidade e direção do vento vindo do detetor.","RV4."],
    answer: "Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância.",
    topic: "Capacitores C-105 e C-106"
  },
  {
    question: "Caso falha o Transformador T1 do sistema de alimentação do anemômetro EVERSHED o que ocorrerá?",
    options: ["O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação.","Fornece indicações continua ou instantânea da intensidade em nós e da direção em graus do vento. Os tipos básicos são: B, F e EVERSHED.","Elétrico.","Indicadora."],
    answer: "O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação.",
    topic: "Falha no Transformador T1"
  },
  {
    question: "Quais os fusíveis do Anemômetro EVERSHED , quais os fusíveis fazem a proteção dos amplificadores (PA112-1 e 2)?",
    options: ["FS1 e FS2.","Não haverá alimentação para o teste de velocidade.","Preventivas e corretivas.","preventivas e corretivas."],
    answer: "FS1 e FS2.",
    topic: "Fusíveis de proteção"
  },
  {
    question: "Analisando o circuito de teste de velocidade do anemômetro EVERSHED. O que acontecerá se houver uma avaria em R15, estando a chave de teste na posição número 4?",
    options: ["Não haverá alimentação para o teste de velocidade.","Habilitar 115V/60Hz.","Aumentar o ganho do servo motor(aumentar o fator de potência).","Ponto de teste TP6 (Terra)."],
    answer: "Não haverá alimentação para o teste de velocidade.",
    topic: "Avaria em R15 (Teste de velocidade)"
  },
  {
    question: "Analisando o diagrama do anemômetro, qual a finalidade da alimentação de 1 volt, oriunda do Transformador T2?",
    options: ["Alimenta o teste de velocidade.","Aumentar o fator de potência do servo motor do sistema de velocidade.","RUN, 15, 30 e 45.","Na Praça de Comunicações Interiores."],
    answer: "Alimenta o teste de velocidade.",
    topic: "Alimentação de 1 volt (T2)"
  },
  {
    question: "Descreva a finalidade do diodo 1 no servo de velocidade do Anemômetro EVERSHED?",
    options: ["Retificar em meia onda o sinal de 10volts 400Hz vindo de T1.","motor de acompanhamento.","Direção – 0 a 360º sendo 0 a 180º vermelho e 0 a 180º verde com intervalos de 2 em 2º. Intensidade – 0 a 75 nos com intervalo de 1 nó.","TR."],
    answer: "Retificar em meia onda o sinal de 10volts 400Hz vindo de T1.",
    topic: "Diodo 1 (EVERSHED)"
  },
  {
    question: "O que acontecerá se houver uma avaria no R14(CIRCUITO DE TESTE DE VELOCIDADE)do anemômetro EVERSHED, estando a chave na posição 4?",
    options: ["Não haverá alimentação para o teste de velocidade.","18TR6 e 18TR4.","EVERSHED.","O potenciômetro RV4."],
    answer: "Não haverá alimentação para o teste de velocidade.",
    topic: "Avaria em R14"
  },
  {
    question: "Qual a finalidade dos diodos D5 e D6, do painel de distribuição de alimentação, do anemômetro EVERSHED?",
    options: ["Funcionam como reguladores de tensão.","FS1 e FS2.","Na PCI (Praça de Comunicações Interiores).","TG1. Ver diagrama em bloco"],
    answer: "Funcionam como reguladores de tensão.",
    topic: "Diodos D5 e D6"
  },
  {
    question: "No anemômetro EVERSHED, qual é o ponto de teste é usado como referência para todas as outras medições?",
    options: ["Ponto de teste TP6 (Terra).","Funciona como um transdutor.","Gerador de indução.","40VCA."],
    answer: "Ponto de teste TP6 (Terra).",
    topic: "Ponto de teste de referência"
  },
  {
    question: "Nos navios de origem Americana os circuitos são identificados pelas designações:",
    options: ["\"HE\" – intensidade do vento e \"HD\" – direção do vento.","6 volts ligados em paralelo.","Para operar em conjunto com os computadores de bordo.","preventivas e corretivas."],
    answer: "\"HE\" – intensidade do vento e \"HD\" – direção do vento.",
    topic: "Designações americanas"
  },
  {
    question: "Descreva as características visuais do anemômetro tipo B.",
    options: ["Conjunto transmissor de velocidade (com copos/cubas) e de direção (com aleta/cata-vento), alojados em suas respectivas unidades.","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","Redutor de erros.","Ponto de teste TP6 (Terra)."],
    answer: "Conjunto transmissor de velocidade (com copos/cubas) e de direção (com aleta/cata-vento), alojados em suas respectivas unidades.",
    topic: "Características visuais do tipo B"
  },
  {
    question: "O dial de direção do vento do sistema do anemômetro tipo B é graduado em intervalos de:",
    options: ["10º de 0º a 360º.","O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação.","O potenciômetro RV4.","Dois."],
    answer: "10º de 0º a 360º.",
    topic: "Dial de direção tipo B"
  },
  {
    question: "Quais ás variações do anemômetro tipo B?",
    options: ["B1 e B2.","No painel de controle / unidade RTU.","Ajuste do zero.","1 Volt oriundo do Transformador T2."],
    answer: "B1 e B2.",
    topic: "Variações do tipo B"
  },
  {
    question: "No anemômetro tipo B a iluminação para cada conjunto é feita por duas lâmpadas de:",
    options: ["6 volts ligados em paralelo.","TX da unidade detetora.","Retificar em meia onda o sinal de 10V 400Hz vindo de T1.","\"HE\" – intensidade do vento e \"HD\" – direção do vento."],
    answer: "6 volts ligados em paralelo.",
    topic: "Iluminação do tipo B"
  },
  {
    question: "De que consiste o conjunto de direção do anemômetro tipo B?",
    options: ["Transmissor síncro acoplado diretamente a uma aleta (cata-vento).","10V/400HZ.","Engrenagem redutora 2000/1, o potenciômetroRV3.","Dois."],
    answer: "Transmissor síncro acoplado diretamente a uma aleta (cata-vento).",
    topic: "Conjunto de direção tipo B"
  },
  {
    question: "De que consiste o conjunto de velocidade do anemômetro tipo B?",
    options: ["Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros.","Ajuste do zero.","Aumentar o fator de potência do servo motor do sistema de velocidade.","400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)"],
    answer: "Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros.",
    topic: "Conjunto de velocidade tipo B"
  },
  {
    question: "Quais as características visuais do anemômetros tipo F?",
    options: ["1 hélice e 1 aleta aerodinâmica.","O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação.","Motor de acompanhamento M2 ou Servo motor.","Converter os fracos sinais de velocidade e direção vindo do detector."],
    answer: "1 hélice e 1 aleta aerodinâmica.",
    topic: "Características visuais do tipo F"
  },
  {
    question: "No servossistema de direção do anemômetro tipo F, utiliza dois síncros indicadores do tipo:",
    options: ["18TR6 e 18TR4 (também referenciados como transmissores 37TX6 e 31TX4 na detecção).","Na PCI (Praça de Comunicações Interiores).","O integrador mecânico pertence essencialmente ao tipo B (converte movimento rotativo em angular). No sistema tipo F, um circuito eletrônico (ou integrador interno ao servo) também pode fazer o amortecimento e ajuste. O correto é converter movimentos proporcionais para indicação.","Motor de acompanhamento M2 ou Servo motor."],
    answer: "18TR6 e 18TR4 (também referenciados como transmissores 37TX6 e 31TX4 na detecção).",
    topic: "Síncros indicadores tipo F"
  },
  {
    question: "No anemômetro tipo F, o dial de velocidade é graduado em intervalo de:",
    options: ["0 a 100 nós, em intervalos de 5 nós.","1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes).","Direção – 0 a 360º sendo 0 a 180º vermelho e 0 a 180º verde com intervalos de 2 em 2º. Intensidade – 0 a 75 nos com intervalo de 1 nó.","Transmite o deslocamento da aleta."],
    answer: "0 a 100 nós, em intervalos de 5 nós.",
    topic: "Dial de velocidade tipo F"
  },
  {
    question: "Qual a finalidade de se utilizar 400HZ no anemômetro tipo F?",
    options: ["Para operar em conjunto com os computadores de bordo.","Sinal elétrico vindo do TX.(ver diagrama do servo de direçao)","Engrenagem redutora 2000/1 e potenciômetro RV3.","Habilitar 115V/400Hz."],
    answer: "Para operar em conjunto com os computadores de bordo.",
    topic: "Frequência 400Hz no tipo F"
  },
  {
    question: "Em uma determinada manobra um navio que utiliza o anemômetro tipo F, ao guinar 30º, verificou-se que o indicador de direção continuou girando indefinidamente. Explique o que pode ter ocorrido.",
    options: ["Falta de realimentação (ausência do sinal de erro no circuito do servo de direção).","10 V/400Hz.","65 nós, com intervalos de 1 nó.","copos(cubas)."],
    answer: "Falta de realimentação (ausência do sinal de erro no circuito do servo de direção).",
    topic: "Avaria de direção tipo F"
  },
  {
    question: "Qual é a razão das engrenagens do acoplamento entre o transmissor ligado ao hélice e o síncro receptor, no sistema tipo F?",
    options: ["1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes).","Falha de alimentação p o linvar, avaria em D4, curto em C7","1 Volt oriundo do Transformador T2.","Na PCI (Praça de Comunicações Interiores)."],
    answer: "1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes).",
    topic: "Engrenagens de acoplamento tipo F"
  },
  {
    question: "Qual a finalidade do integrador mecânico do anemômetro tipo F?",
    options: ["O integrador mecânico pertence essencialmente ao tipo B (converte movimento rotativo em angular). No sistema tipo F, um circuito eletrônico (ou integrador interno ao servo) também pode fazer o amortecimento e ajuste. O correto é converter movimentos proporcionais para indicação.","Na PCI (Praça de Comunicações Interiores).","motor de frequência constante.","É um sobressalente, usado caso o navio necessite receptores de 180 nós, basta fazer a troca entre os dois conjuntos de engrenagem."],
    answer: "O integrador mecânico pertence essencialmente ao tipo B (converte movimento rotativo em angular). No sistema tipo F, um circuito eletrônico (ou integrador interno ao servo) também pode fazer o amortecimento e ajuste. O correto é converter movimentos proporcionais para indicação.",
    topic: "Finalidade do integrador mecânico"
  },
  {
    question: "Qual a alimentação principal do sistema EVERSHED?",
    options: ["115V/400Hz.","10 V/400Hz.","Na periferia do disco.","Amplificador de potência, teste de direção, detetor de direção e diodo “D1”."],
    answer: "115V/400Hz.",
    topic: "Alimentação principal EVERSHED"
  },
  {
    question: "Qual a alimentação para o teste de velocidade do anemômetro EVERSHED?",
    options: ["1 Volt oriundo do Transformador T2.","É um sobressalente, usado caso o navio necessite receptores de 180 nós, basta fazer a troca entre os dois conjuntos de engrenagem.","1HCT.","A ré do navio."],
    answer: "1 Volt oriundo do Transformador T2.",
    topic: "Alimentação de teste de velocidade"
  },
  {
    question: "Onde fica localizado os pontos de testes do sistema do anemômetro EVERSHED?",
    options: ["No painel de controle / unidade RTU.","Redutor de erros.","Chave S1.","0 a 40 VCA."],
    answer: "No painel de controle / unidade RTU.",
    topic: "Localização dos pontos de teste"
  },
  {
    question: "Qual o propósito da Unidade de Retransmissão do sistema EVERSHED?",
    options: ["Converter os fracos sinais de velocidade e direção do vento provenientes do detetor, tornando-os adequados para os indicadores (RTU).","TR.","Chave S1.","quando D2 estiver conduzindo."],
    answer: "Converter os fracos sinais de velocidade e direção do vento provenientes do detetor, tornando-os adequados para os indicadores (RTU).",
    topic: "Propósito da RTU"
  },
  {
    question: "Como é graduado o dial de direção do vento do anemômetro EVERSHED?",
    options: ["De 0 a 360º (sendo 0 a 180º vermelho e 0 a 180º verde) com intervalos de 2 em 2º.","preventivas e corretivas.","Transmite o deslocamento da aleta.","Funcionam como reguladores de tensão."],
    answer: "De 0 a 360º (sendo 0 a 180º vermelho e 0 a 180º verde) com intervalos de 2 em 2º.",
    topic: "Dial de direção EVERSHED"
  },
  {
    question: "Como é graduado o dial de velocidade do vento do anemômetro EVERSHED?",
    options: ["0 a 75 nós com intervalo de 1 nó.","Aumentar o ganho do servo motor(aumentar o fator de potência).","Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros.","PA112."],
    answer: "0 a 75 nós com intervalo de 1 nó.",
    topic: "Dial de velocidade EVERSHED"
  },
  {
    question: "Cite os dispositivos do servo de velocidade, responsáveis pelo amortecimento das oscilações.",
    options: ["Engrenagem redutora 2000/1 e potenciômetro RV3.","Retificar em meia onda o sinal de 10volts 400Hz vindo de T1.","Converter os fracos sinais de direção e velocidade.","\"HE\" – intensidade do vento e \"HD\" – direção do vento."],
    answer: "Engrenagem redutora 2000/1 e potenciômetro RV3.",
    topic: "Amortecimento das oscilações"
  },
  {
    question: "Quantas posições possui a chave de teste de velocidade do anemômetro EVERSHED?",
    options: ["4 posições (RUN, 15, 30 e 45 nós).","RV3 faz o amortecimento e o LINVAR funciona como um transdutor.","Direção – 0 a 360º sendo 0 a 180º vermelho e 0 a 180º verde com intervalos de 2 em 2º. Intensidade – 0 a 75 nos com intervalo de 1 nó.","PA112."],
    answer: "4 posições (RUN, 15, 30 e 45 nós).",
    topic: "Chave de teste de velocidade"
  },
  {
    question: "Descreva o funcionamento do sensor de velocidade do anemômetro EVERSHED.",
    options: ["O gerador de indução é acionado pelas cubas e produz um sinal elétrico de saída CA cuja voltagem é proporcional à velocidade do vento.","Ponto de teste TP6 (Terra).","LINVAR.","Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros."],
    answer: "O gerador de indução é acionado pelas cubas e produz um sinal elétrico de saída CA cuja voltagem é proporcional à velocidade do vento.",
    topic: "Funcionamento do sensor de velocidade"
  },
  {
    question: "Onde fica instalado o detetor do anemômetro EVERSHED?",
    options: ["No mastro principal das Fragatas.","400Hz.","\"HE\" – intensidade do vento e \"HD\" – direção do vento.","O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação."],
    answer: "No mastro principal das Fragatas.",
    topic: "Instalação do detetor"
  },
  {
    question: "Qual é a realimentação fornecida pelo síncro LINVAR do Anemômetro EVERSHED?",
    options: ["40 VCA.","Habilitar 115V/400Hz.","Fracos.","PA112."],
    answer: "40 VCA.",
    topic: "Realimentação do LINVAR"
  },
  {
    question: "O sinal elétrico que vai do CX do A.E para a unidade de correção de dados do vento alimenta o estator de um:",
    options: ["CT.","Subconjunto de direção e de velocidade.","D4.","115V/400Hz, 115V/60Hz e 26V/400Hz."],
    answer: "CT.",
    topic: "Alimentação do CT (EVERSHED)"
  },
  {
    question: "Quando o sinal medido em RV4 e em R11 são iguais e opostos, a velocidade do servo motor do A.E é de:",
    options: ["0 RPM.","Retificar em meia onda o sinal de 10V 400Hz vindo de T1.","Amplificador de potência, teste de direção, detetor de direção e diodo “D1”.","Zero RPM."],
    answer: "0 RPM.",
    topic: "Velocidade do servo motor nula"
  },
  {
    question: "Quem é responsável em comandar o rotor do síncro LINVAR do A.E?",
    options: ["Redutor de erros.","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","Velocidade: Quando as cubas estiverem paradas. Direção: quando o catavento estiver alinhado no sentido proa popa do navio.","65 nós, com intervalos de 1 nó."],
    answer: "Redutor de erros.",
    topic: "Comando do rotor LINVAR"
  },
  {
    question: "Qual o propósito do equipamento de frequência constante do A.B?",
    options: ["Converter o movimento rotativo em angular no conjunto de velocidade do vento.","115V/400Hz.(do navio)","Um receptor e um transmissor.","1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes)."],
    answer: "Converter o movimento rotativo em angular no conjunto de velocidade do vento.",
    topic: "Equipamento de frequência constante (Tipo B)"
  },
  {
    question: "A informação que sai do CT, vindo do TX de direção do A.F é chamada sinal de:",
    options: ["Erro.","0 a 75 nós com intervalo de 1 nó.","Redutor de erros.","TR."],
    answer: "Erro.",
    topic: "Sinal de saída do CT (Tipo F)"
  },
  {
    question: "Quando os rotores, do TX de direção da aleta e do CT do A.B estão em correspondência, a saída do CT é:",
    options: ["0 Volts.","1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes).","CT(Transformador de controle)","Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância."],
    answer: "0 Volts.",
    topic: "Rotores em correspondência"
  },
  {
    question: "A informação de velocidade do vento do A.E é fornecida por um:",
    options: ["Gerador de indução.","18TR6 e 18TR4 (também referenciados como transmissores 37TX6 e 31TX4 na detecção).","6 volts ligados em paralelo.","RUN, 15, 30 e 45 nós."],
    answer: "Gerador de indução.",
    topic: "Fornecimento de velocidade (EVERSHED)"
  },
  {
    question: "No servo de direção do A.E, quando os sinais de entrada e saída do sistema estão em correspondência de fase, o sinal de saída do detector é de:",
    options: ["0 Volts.","65 nós, com intervalos de 1 nó.","60V/400Hz.","Converte os fracos sinais de velocidade e direção do vento proveniente do detetor, tornando- os adequados para posições. Sua localização: C.O.C"],
    answer: "0 Volts.",
    topic: "Correspondência de fase"
  },
  {
    question: "No A.E, podemos afirmar que o sinal que saí de um Transmissor de Controle é um sinal tipo:",
    options: ["Elétrico.","0 Volts.","Ao acionarmos a chave : o indicador de direção deverá ir a zero graus. Nas posições 1=NORMAL; 2= 0º (zero grau); 3º 120º BE. 4º 120º BB.","Reposicionar o rotor do CT, reduzindo o sinal de erro."],
    answer: "Elétrico.",
    topic: "Tipo de sinal do CT"
  },
  {
    question: "Quando verificamos o funcionamento do servo de direção do A.E, colocamos a chave de teste(S1) para a posição 2, assim estamos aplicando um sinal elétrico ao estator de um síncro:",
    options: ["CT.","Alimenta o teste de velocidade.","Sinal elétrico vindo do TX.(ver diagrama do servo de direçao)","é a veloc. á ré do navio."],
    answer: "CT.",
    topic: "Chave de teste S1"
  },
  {
    question: "Como se chama a informação que chega ao Transformador de Controle, vinda diretamente do sincro Transmissor do A.B?",
    options: ["Sinal de direção.","Gerador de indução.","40VCA.","10º de 0º a 360º."],
    answer: "Sinal de direção.",
    topic: "Informação que chega ao CT"
  },
  {
    question: "Dê que consiste o Anemômetro tipo B, variação B2?",
    options: ["Um receptor e um transmissor.","0 RPM.","Ao acionarmos a chave : o indicador de direção deverá ir a zero graus. Nas posições 1=NORMAL; 2= 0º (zero grau); 3º 120º BE. 4º 120º BB.","18TR6 e 18TR4."],
    answer: "Um receptor e um transmissor.",
    topic: "Variação B2"
  },
  {
    question: "No sistema de A.B, a unidade síncro que é diretamente acoplada a aleta é um:",
    options: ["transmissor síncro.","No painel de controle / unidade RTU.","Ajuste do zero.","Um receptor e um transmissor."],
    answer: "transmissor síncro.",
    topic: "Síncro acoplado a aleta (Tipo B)"
  },
  {
    question: "Em que situação a micro chave localizada no conjunto de velocidade do A.B, irá abrir o circuito FC?",
    options: ["Quando a velocidade for nula(zero).","18TR6 e 18TR4 (também referenciados como transmissores 37TX6 e 31TX4 na detecção).","Converter o movimento rotativo em angular no conjunto de velocidade do vento.","Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros."],
    answer: "Quando a velocidade for nula(zero).",
    topic: "Micro chave de velocidade (Tipo B)"
  },
  {
    question: "A unidade síncro que transmite informação de direção do vento para as repetidoras, é um:",
    options: ["TX.","400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)","6 volts ligados em paralelo.","Amortecimento / Direção (corrígio à caneta para Direção)"],
    answer: "TX.",
    topic: "Transmissão para repetidoras"
  },
  {
    question: "Qual potenciômetro(dispositivo elétrico) do A.E cujo sinal se opõe ao sinal que aparece em R11?",
    options: ["RV4.","Sincro transmissor de direção, 26 V/400Hz.","1:12,5 (a cada uma revolução do síncro a hélice gira 12,5 vezes).","Falta de realimentação (ausência do sinal de erro no circuito do servo de direção)."],
    answer: "RV4.",
    topic: "Potenciômetro RV4"
  },
  {
    question: "Qual é a alimentação para o painel de controle do A.E?",
    options: ["115V/400HZ.","4 posições (RUN, 15, 30 e 45 nós).","10 V/400Hz.","40VCA."],
    answer: "115V/400HZ.",
    topic: "Alimentação do painel (EVERSHED)"
  },
  {
    question: "A iluminação para cada conjunto no A.B, é feita por quantas lâmpadas e como elas são ligadas?",
    options: ["6 Volts ligados em paralelo.","Abrir o circuito FC quando a velocidade for nula(zero).","Sincro transmissor de direção, 26 V/400Hz.","\"HE\" – intensidade do vento e \"HD\" – direção do vento."],
    answer: "6 Volts ligados em paralelo.",
    topic: "Iluminação tipo B"
  },
  {
    question: "Quais os dois tipos de síncros que são posicionados pelo servo motor de direção do A.F?",
    options: ["37TX6 e 31TX4.","0 a 75 nós com intervalo de 1 nó.","Elétrico.","400 Hz. (Na imagem está corrigido à mão de 18CX4 para 400 Hz)"],
    answer: "37TX6 e 31TX4.",
    topic: "Síncros posicionados pelo servo (Tipo F)"
  },
  {
    question: "Cite a finalidade do DIAC do conjunto de direção do A.F?",
    options: ["Regular a tensão p o amplificador PC115a-101.","Transmite o deslocamento da aleta.","Abrir o circuito FC quando a velocidade for nula(zero).","A amplitude do sinal de erro."],
    answer: "Regular a tensão p o amplificador PC115a-101.",
    topic: "Finalidade do DIAC (Tipo F)"
  },
  {
    question: "No conjunto de direção do A.B, quem é o detector de erro?",
    options: ["CT.","Um receptor e um transmissor.","40VCA.","No painel de controle / unidade RTU."],
    answer: "CT.",
    topic: "Detector de erro (Tipo B)"
  },
  {
    question: "No servo de velocidade do A.E, cite a função do LINVAR.",
    options: ["Funciona como um transdutor.","37TX6 e 31TX4.","RV3 e RV5.","motor de frequência constante."],
    answer: "Funciona como um transdutor.",
    topic: "Função do LINVAR"
  },
  {
    question: "No A.E quem aciona o gerador de indução?",
    options: ["copos(cubas).","Engrenagem redutora 2000/1 e potenciômetro RV3.","RUN, 15, 30 e 45.","Funciona como um transdutor."],
    answer: "copos(cubas).",
    topic: "Acionamento do gerador de indução"
  },
  {
    question: "Cite a principal diferença entre o Anemômetro tipo B e F?",
    options: ["A frequência de 400Hz.","Falta de realimentação (ausência do sinal de erro no circuito do servo de direção).","TX.","2,4:1"],
    answer: "A frequência de 400Hz.",
    topic: "Diferença Tipo B e F"
  },
  {
    question: "Qual dispositivo no A.E trabalha como gerador de sinal de erro do servo de direção?",
    options: ["É o síncro TX da unidade detectora.","TX da unidade detetora.","Ajuste do zero.","24 Volts."],
    answer: "É o síncro TX da unidade detectora.",
    topic: "Gerador de sinal de erro"
  },
  {
    question: "Qual é a função do motor de acompanhamento(M2) ou servo motor do A.E?",
    options: ["Reposicionar o rotor do CT, reduzindo o sinal de erro.","Para operar em conjunto com os computadores de bordo.","10 V/400Hz.","Sinal de direção."],
    answer: "Reposicionar o rotor do CT, reduzindo o sinal de erro.",
    topic: "Função do M2 / Servo motor"
  },
  {
    question: "Qual a alimentação da R.T.U do A.E?",
    options: ["115V/400Hz.","6 Volts ligados em paralelo.","O sincro transmissor de direção do vento.","400Hz."],
    answer: "115V/400Hz.",
    topic: "Alimentação da RTU"
  },
  {
    question: "Qual amplificador está incluído em cada RTU do A.E?",
    options: ["PA112.","1HCT.","Dois.","LINVAR."],
    answer: "PA112.",
    topic: "Amplificador da RTU"
  },
  {
    question: "Onde está instalado o subconjunto de velocidade do vento do A.B?",
    options: ["Na PCI (Praça de Comunicações Interiores).","Funcionam como reguladores de tensão.","Ponto de teste TP6 (Terra).","0 Volts."],
    answer: "Na PCI (Praça de Comunicações Interiores).",
    topic: "Instalação de velocidade Tipo B"
  },
  {
    question: "Cite a razão do rotor do TX para hélice do A.B?",
    options: ["1:12,5","Converter o movimento rotativo em angular no conjunto de velocidade do vento.","Retificar em meia onda o sinal de 10V 400Hz vindo de T1.","Servo motor."],
    answer: "1:12,5",
    topic: "Razão rotor para hélice"
  },
  {
    question: "Cite os tipos de manutenções realizadas nos anemômetros.",
    options: ["Preventivas e corretivas.","60V/400Hz.","TR.","O integrador mecânico pertence essencialmente ao tipo B (converte movimento rotativo em angular). No sistema tipo F, um circuito eletrônico (ou integrador interno ao servo) também pode fazer o amortecimento e ajuste. O correto é converter movimentos proporcionais para indicação."],
    answer: "Preventivas e corretivas.",
    topic: "Tipos de manutenções"
  },
  {
    question: "No A.E, qual a função da chave S4?",
    options: ["Habilitar 115V/60Hz.","10 V/400Hz.","6 Volts ligados em paralelo.","Falta de realimentação (ausência do sinal de erro no circuito do servo de direção)."],
    answer: "Habilitar 115V/60Hz.",
    topic: "Função da chave S4"
  },
  {
    question: "No A.E, qual a função da chave S3?",
    options: ["Habilitar 115V/400Hz.","FS1 e FS2.","Não haverá a regulagem de tensão para chave S3 (115V/400Hz).","Servomotor.(redutor de erros)."],
    answer: "Habilitar 115V/400Hz.",
    topic: "Função da chave S3"
  },
  {
    question: "Onde está localizado o trafo de 115V/6V do A.B?",
    options: ["Na unidade indicadora.","60V/400Hz.","Sincro transmissor de direção.","PA112."],
    answer: "Na unidade indicadora.",
    topic: "Localização do trafo (Tipo B)"
  },
  {
    question: "Defina o que é velocidade de recolhimento.",
    options: ["é a veloc. á ré do navio.","Preventivas e corretivas.","quando D2 estiver conduzindo.","115V/400Hz."],
    answer: "é a veloc. á ré do navio.",
    topic: "Velocidade de recolhimento"
  },
  {
    question: "Descreva as partes componentes do transmissor do A.B?",
    options: ["Subconjunto de direção e de velocidade.","Para operar em conjunto com os computadores de bordo.","Fixo e de controle.","CT(transformador de controle)."],
    answer: "Subconjunto de direção e de velocidade.",
    topic: "Componentes do transmissor (Tipo B)"
  },
  {
    question: "Geralmente onde está localizado o transmissor do A.B?",
    options: ["Na Praça de Comunicações Interiores.","Um receptor e um transmissor.","No mastro principal das Fragatas.","115V/400Hz."],
    answer: "Na Praça de Comunicações Interiores.",
    topic: "Localização do transmissor (Tipo B)"
  },
  {
    question: "Em que situação o indicador de velocidade e direção do vento ficará na posição zero?",
    options: ["Velocidade: Quando as cubas estiverem paradas. Direção: quando o catavento estiver alinhado no sentido proa popa do navio.","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","EVERSHED. Uso geral.","Conjunto transmissor de velocidade (com copos/cubas) e de direção (com aleta/cata-vento), alojados em suas respectivas unidades."],
    answer: "Velocidade: Quando as cubas estiverem paradas. Direção: quando o catavento estiver alinhado no sentido proa popa do navio.",
    topic: "Posição zero dos indicadores"
  },
  {
    question: "No A.E, qual a função dos potenciômetros RV-3; e RV-4?",
    options: ["RV3: Amortecimento. RV4: Ajuste do zero / Calibrador do mostrador. (O manuscrito inverteu os nomes inicialmente, e corrigiu de caneta vermelha)","Falha de alimentação p o linvar, avaria em D4, curto em C7","Sinal de direção.","preventivas e corretivas."],
    answer: "RV3: Amortecimento. RV4: Ajuste do zero / Calibrador do mostrador. (O manuscrito inverteu os nomes inicialmente, e corrigiu de caneta vermelha)",
    topic: "Função RV3 e RV4"
  },
  {
    question: "Cite o dispositivo do A.E que produz um sinal proporcional ao ângulo do vento e sua alimentação.",
    options: ["TX / 26V400Hz.","Ajuste do zero.","0 Volts.","Reguladores de voltagem / estabilizador."],
    answer: "TX / 26V400Hz.",
    topic: "Sinal proporcional ao ângulo do vento"
  },
  {
    question: "Qual a finalidade da unidade de retransmissão do A.E?",
    options: ["Converter os fracos sinais de velocidade e direção vindo do detector.","1 Volt oriundo do Transformador T2.","115Volts?400HZ.","CT(Transformador de controle)"],
    answer: "Converter os fracos sinais de velocidade e direção vindo do detector.",
    topic: "Finalidade da retransmissão"
  },
  {
    question: "O Cabo CE Silva da Fragata Defensora ao ligar o A.E, observou que os indicadores de velocidade começaram a girar sem conseguir parar em uma marcação fixa. Cite as prováveis causas dessa avaria.",
    options: ["Falha de alimentação p o linvar, avaria em D4, curto em C7","10 V/400Hz.","Transmissor síncro acoplado diretamente a uma aleta (cata-vento).","Proporcional."],
    answer: "Falha de alimentação p o linvar, avaria em D4, curto em C7",
    topic: "Avaria girando sem parar (Velocidade)"
  },
  {
    question: "Qual a função do potenciômetro RV2 do A.E?",
    options: ["Amortecimento / Direção (corrígio à caneta para Direção)","Preventivas e corretivas.","motor de frequência constante.","Fracos."],
    answer: "Amortecimento / Direção (corrígio à caneta para Direção)",
    topic: "Função RV2"
  },
  {
    question: "Cite a função dos diodos 5 e 6, do painel de distribuição de alimentação, do A.E.",
    options: ["Funcionam como reguladores de tensão.","é a veloc. á ré do navio.","Amortecimento / Direção (corrígio à caneta para Direção)","Erro."],
    answer: "Funcionam como reguladores de tensão.",
    topic: "Diodos D5 e D6"
  },
  {
    question: "Qual a finalidade do diodo 1 no servo de velocidade do A.E?",
    options: ["Retificar em meia onda o sinal de 10V 400Hz vindo de T1.","CT.(ver diag. dos servos e da RTU)","65 nós, com intervalos de 1 nó.","24 Volts."],
    answer: "Retificar em meia onda o sinal de 10V 400Hz vindo de T1.",
    topic: "Finalidade do diodo 1"
  },
  {
    question: "1. O motor do sincro Linvar do sistema EVERSHED é comandado pela (o):",
    options: ["TG1. Ver diagrama em bloco","Regular a tensão p o amplificador PC115a-101.","Proporcional.","Servomotor.(redutor de erros)."],
    answer: "TG1. Ver diagrama em bloco",
    topic: "Questionário geral"
  },
  {
    question: "2. O transmissor de direção do vento do sistema de anemômetro EVERSHED é um:",
    options: ["TX.","Servomotor.(redutor de erros).","1:12,5","RUN, 15, 30 e 45."],
    answer: "TX.",
    topic: "Questionário geral"
  },
  {
    question: "3. Quais são as posições da chave de teste de velocidade do sistema de anemômetro EVERSHED?",
    options: ["RUN, 15, 30 e 45.","CT(Transformador de controle)","115V/400HZ.","O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação."],
    answer: "RUN, 15, 30 e 45.",
    topic: "Questionário geral"
  },
  {
    question: "4. No sistema de anemômetro EVERSHED, a informação de velocidade é fornecida por um:",
    options: ["Gerador de indução.","60 OHM.","Dois.","60V/400Hz."],
    answer: "Gerador de indução.",
    topic: "Questionário geral"
  },
  {
    question: "5. O termo velocidade de recolhimento é a velocidade do vento:",
    options: ["A ré do navio.","Um ( ver diagrama).","CT(Transformador de controle)","65 nós, com intervalos de 1 nó."],
    answer: "A ré do navio.",
    topic: "Questionário geral"
  },
  {
    question: "6. No sistema EVERSHED, no servo de direção, quando os sinais de entrada do sistema estão em correspondência de fase, o sinal de saída do detector é de _____ volts.",
    options: ["0 (Zero).","Funciona como um transdutor.","Indicadora.","Converter os fracos sinais de velocidade e direção vindo do detector."],
    answer: "0 (Zero).",
    topic: "Questionário geral"
  },
  {
    question: "7. No sistema de anemômetro EVERSHED, no servo de direção, ao deslocarmos a chave SI (chave teste) da posição “NORMAL” para as posições de teste, estamos aplicando um sinal de ____ ao estator do CT",
    options: ["10 V/400Hz.","CT.(ver diag. dos servos e da RTU)","TX.","Reguladores de voltagem / estabilizador."],
    answer: "10 V/400Hz.",
    topic: "Questionário geral"
  },
  {
    question: "8. No sistema de anemômetro EVERSHED, ao verificarmos o funcionamento do servo de direção, colocarmos a chave SI (chave teste) para a posição 2(dois), assim estamos aplicando um sinal elétrico ao estator de um sincro:",
    options: ["CT.","Para operar em conjunto com os computadores de bordo.","Converter o movimento rotativo em angular no conjunto de velocidade do vento.","RV3 e RV5."],
    answer: "CT.",
    topic: "Questionário geral"
  },
  {
    question: "9. Qual a finalidade dos diodos D5 e D6 do painel de distribuição de alimentação do anemômetro EVERSHED?",
    options: ["Reguladores de voltagem / estabilizador.","Não haverá a regulagem de tensão para chave S3 (115V/400Hz).","Transmite o deslocamento da aleta.","Na periferia do disco."],
    answer: "Reguladores de voltagem / estabilizador.",
    topic: "Questionário geral"
  },
  {
    question: "10. Analisando o diagrama do EVERSHED qual a finalidade da alimentação de 1 volt oriundo do transformador 2?",
    options: ["Ajuste do zero.","motor de frequência constante.","RV3 e RV5.","Detetor, transmissor e indicador."],
    answer: "Ajuste do zero.",
    topic: "Questionário geral"
  },
  {
    question: "11. No sistema de anemômetro das fragatas, podemos afirmar que o sinal que sai do CX é um sinal.",
    options: ["Elétrico.","TG1. Ver diagrama em bloco","60V/400Hz.","Angular."],
    answer: "Elétrico.",
    topic: "Questionário geral"
  },
  {
    question: "12. No sistema de anemômetro das fragatas, o dispositivo que retifica o sinal do LINVAR é a ponte de diodos:",
    options: ["D4.","motor de frequência constante.","Zero RPM.","4 posições (RUN, 15, 30 e 45 nós)."],
    answer: "D4.",
    topic: "Questionário geral"
  },
  {
    question: "13. A alimentação do sincro LINVAR do sistema de anemômetro EVERSHED é de:",
    options: ["60V/400Hz.","Reostato.","115V/400Hz.(do navio)","Do transformador (T1)."],
    answer: "60V/400Hz.",
    topic: "Questionário geral"
  },
  {
    question: "14. No sistema de anemômetro EVERSHED, no servo de direção, o componente que funciona como detector de erros?",
    options: ["CT.","Ajuste do zero.","Servomotor.(redutor de erros).","115V/400Hz."],
    answer: "CT.",
    topic: "Questionário geral"
  },
  {
    question: "15. No sistema de anemômetro EVERSHED, o sinal que alimenta o estator de um CT é um:",
    options: ["Sinal elétrico vindo do TX.(ver diagrama do servo de direçao)","Habilitar 115V/400Hz.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.","10º de 0º a 360º."],
    answer: "Sinal elétrico vindo do TX.(ver diagrama do servo de direçao)",
    topic: "Questionário geral"
  },
  {
    question: "16. No sistema de anemômetro EVERSHED, no servo de direção, o componente que posiciona o CT para anular o sinal de erro é:",
    options: ["Servomotor.(redutor de erros).","Anemômetro.","18TR6 e 18TR4.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico."],
    answer: "Servomotor.(redutor de erros).",
    topic: "Questionário geral"
  },
  {
    question: "17. No sistema de anemômetro EVERSHED, no servo de direção, o componente que aciona mecanicamente os transmissores de direção é o:",
    options: ["Redutor de erros.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.","Retificar em meia onda o sinal de 10volts 400Hz vindo de T1.","Fracos."],
    answer: "Redutor de erros.",
    topic: "Questionário geral"
  },
  {
    question: "18. O indicador de velocidade do sistema de anemômetro EVERSHED é graduado de Zero a:",
    options: ["65 nós, com intervalos de 1 nó.","50 a 200 pés a vante do navio.","Regular a tensão p o amplificador PC115a-101.","Fixo e de controle."],
    answer: "65 nós, com intervalos de 1 nó.",
    topic: "Questionário geral"
  },
  {
    question: "19. O termo “velocidade do vento de lançamento”, usado nas fragatas, é a velocidade do vento:",
    options: ["50 a 200 pés a vante do navio.","Funcionam como reguladores de tensão.","O amplificador de potência ficará sem alimentação, não teremos como realizar o teste de direção o Transmissor (TX) do detector de direção ficará sem alimentação e DIODO D1 sem alimentação.","Servomotor.(redutor de erros)."],
    answer: "50 a 200 pés a vante do navio.",
    topic: "Questionário geral"
  },
  {
    question: "20. No anemômetro das fragatas, a unidade sincro que envia um sinal elétrico para unidade de correção de dados do vento, é alimentada com ______ Volts/Hz.",
    options: ["115V/400Hz.","RV3 e RV5.","O integrador mecânico pertence essencialmente ao tipo B (converte movimento rotativo em angular). No sistema tipo F, um circuito eletrônico (ou integrador interno ao servo) também pode fazer o amortecimento e ajuste. O correto é converter movimentos proporcionais para indicação.","RUN, 15, 30 e 45 nós."],
    answer: "115V/400Hz.",
    topic: "Questionário geral"
  },
  {
    question: "21. No sistema de anemômetro das fragatas, o dispositivo elétrico cujo sinal de saída se opõe ao sinal que aparece em R11 é o:",
    options: ["RV4.","1:12,5","Motor de acompanhamento M2 ou Servo motor.","Conjunto de 3 ou 4 cubas e de uma aleta aerodinâmica montada em um suporte vertical. Funcionamento – O gerador de indução acionados pelas cubas produzem sinal elétrico de saída proporcional a velocidade do vento."],
    answer: "RV4.",
    topic: "Questionário geral"
  },
  {
    question: "22. No sistema de anemômetro das fragatas a informação de direção do vento é enviada ao amplificador através de dois potenciômetros:",
    options: ["RV1 e RV2.","Converter os fracos sinais de velocidade e direção do vento vindo do detetor.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.","EVERSHED."],
    answer: "RV1 e RV2.",
    topic: "Questionário geral"
  },
  {
    question: "23. Quanto ao sistema de anemômetro, quantos tipos leves existem?",
    options: ["Dois.","Reostato.","5 nós.","RV1 e RV2."],
    answer: "Dois.",
    topic: "Questionário geral"
  },
  {
    question: "24. A alimentação de 26V 400Hz do anemômetro EVERSHED é para:",
    options: ["O sincro transmissor de direção do vento.","FS1 e FS2.","TX","RUN, 15, 30 e 45."],
    answer: "O sincro transmissor de direção do vento.",
    topic: "Questionário geral"
  },
  {
    question: "25. O painel de controle do EVERSHED é alimentado com:",
    options: ["115V/400Hz.(do navio)","Ponto de teste TP6 (Terra).","B1 e B2.","115V/400Hz, 115V/60Hz e 26V/400Hz."],
    answer: "115V/400Hz.(do navio)",
    topic: "Questionário geral"
  },
  {
    question: "26. Indicador, transmissor e detector são componentes básicos de um:",
    options: ["Anemômetro.","No mastro principal das Fragatas.","motor de frequência constante.","Regular a tensão para o amplificador PC 115A 101."],
    answer: "Anemômetro.",
    topic: "Questionário geral"
  },
  {
    question: "27. Três cubas e uma aleta são características visuais do anemômetro:",
    options: ["EVERSHED.","Conjunto de 3 ou 4 cubas e de uma aleta aerodinâmica montada em um suporte vertical. Funcionamento – O gerador de indução acionados pelas cubas produzem sinal elétrico de saída proporcional a velocidade do vento.","Erro.","Reposicionar o rotor do CT, reduzindo o sinal de erro."],
    answer: "EVERSHED.",
    topic: "Questionário geral"
  },
  {
    question: "28. O principio de funcionamento do detector do anemômetro EVERSHED é o do:",
    options: ["Gerador de indução.","Anemômetro.","115Volts?400HZ.","Dois."],
    answer: "Gerador de indução.",
    topic: "Questionário geral"
  },
  {
    question: "30. O potenciômetro RV2 ajusta o _amortecimento_ do servo de direção do sistema de anemômetro EVERSHED.",
    options: ["Amortecimento.","1 – Conjunto anemômetro e catavento usado para detectar a velocidade e direção do vento, 2 – Unidade de retransmissão (RTU) usadas para amplificar os sinais fracos, 3 – Receptores e indicadores de velocidade e direção do vento.","1:12,5","D4."],
    answer: "Amortecimento.",
    topic: "Questionário geral"
  },
  {
    question: "31. No sistema de anemômetro EVERSHED, no servo de direção, o (a) _CT_ compara o sinal de saída com o sinal de entrada.",
    options: ["CT.","PA112.","Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância.","Alimenta o teste de velocidade."],
    answer: "CT.",
    topic: "Questionário geral"
  },
  {
    question: "32. O detetor do sistema de anemômetro EVERSHED produz um sinal elétrico de saída proporcional à posição _angular_ de aleta, em relação a linha Proa-Popa do navio.",
    options: ["Angular.","A amplitude do sinal de erro.","Faz o ajuste do zero.","TX / 26V400Hz."],
    answer: "Angular.",
    topic: "Questionário geral"
  },
  {
    question: "33. O detetor do sistema de anemômetro EVERSHED produz um sinal elétrico de saída _proporcional_ à velocidade de fluxo de ar passando pelos copos do anemômetro.",
    options: ["Proporcional.","1:12,5","Servo motor.","No painel de controle / unidade RTU."],
    answer: "Proporcional.",
    topic: "Questionário geral"
  },
  {
    question: "34. O servo de direção do EVERSHED tem propósito de converter os _fracos_ sinais de direção do vento.",
    options: ["Fracos.","Motor de acompanhamento M-2.(servo motor)","0 a 40 VCA.","RV1 e RV2."],
    answer: "Fracos.",
    topic: "Questionário geral"
  },
  {
    question: "35. No servo de direção de anemômetro EVERSHED, o _CT(transformador de controle)_ é o dispositivo que funciona como detector de erro.",
    options: ["CT(transformador de controle).","Quando a velocidade for nula(zero).","motor de acompanhamento.","Sincro transmissor de direção."],
    answer: "CT(transformador de controle).",
    topic: "Questionário geral"
  },
  {
    question: "36. Qual a função do linvar no servo de velocidade do sistema de anemômetro EVERSHED?",
    options: ["Transdutor.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.","Servo motor.","Converte os fracos sinais de velocidade e direção do vento proveniente do detetor, tornando- os adequados para posições. Sua localização: C.O.C"],
    answer: "Transdutor.",
    topic: "Questionário geral"
  },
  {
    question: "37. No sistema de anemômetro EVERSHED, a voltagem CA proporcional à velocidade do é desenvolvida em que unidade?",
    options: ["Gerador de indução.","18TR6 e 18TR4.","Amortecimento / Direção (corrígio à caneta para Direção)","60 OHM."],
    answer: "Gerador de indução.",
    topic: "Questionário geral"
  },
  {
    question: "38. Qual o dispositivo do anemômetro EVERSHED é acionado pelos copos (cubas) do anemômetro?",
    options: ["Gerador de indução.","Anemômetro.","EVERSHED. Uso geral.","FS1 e FS2."],
    answer: "Gerador de indução.",
    topic: "Questionário geral"
  },
  {
    question: "39. No anemômetro EVERSHED, no servo de direção, qual o disposistivo trabalha como gerador de sinal de erro?",
    options: ["TX da unidade detetora.","Converter os fracos sinais de direção e velocidade.","Detetor, transmissor e indicador.","Equipamento de frequência constante."],
    answer: "TX da unidade detetora.",
    topic: "Questionário geral"
  },
  {
    question: "40. No anemômetro EVERSHED, quais os dispositivos ficarão sem alimentação no caso de falha no transformador T1?",
    options: ["Amplificador de potência, teste de direção, detetor de direção e diodo “D1”.","40VCA.","Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância.","TX."],
    answer: "Amplificador de potência, teste de direção, detetor de direção e diodo “D1”.",
    topic: "Questionário geral"
  },
  {
    question: "41. No anemômetro EVERSHED, qual a finalidade da RTU?",
    options: ["Converter os fracos sinais de direção e velocidade.","No mastro principal das Fragatas.","Velocidade e direção.","Amortecimento / Direção (corrígio à caneta para Direção)"],
    answer: "Converter os fracos sinais de direção e velocidade.",
    topic: "Questionário geral"
  },
  {
    question: "42. No servo de direção do anemômetro EVERSHED, qual o dispositivo responsável em reposicionar rotor do CT reduzindo Erro?",
    options: ["Motor de acompanhamento M-2.(servo motor)","Aumentar o ganho do servo motor(aumentar o fator de potência).","RV3 faz o amortecimento e o LINVAR funciona como um transdutor.","Habilitar 115V/400Hz."],
    answer: "Motor de acompanhamento M-2.(servo motor)",
    topic: "Questionário geral"
  },
  {
    question: "43. No anemômetro EVERSHED, de onde vem a alimentação de 26V/400Hz para o TX do detetor, no servo de direção do vento?",
    options: ["Do transformador (T1).","Velocidade e direção.","Engrenagem redutora 2000/1 e potenciômetro RV3.","Ajuste do zero."],
    answer: "Do transformador (T1).",
    topic: "Questionário geral"
  },
  {
    question: "44. Quais as alimentações disponíveis no anemômetro EVERSHED?",
    options: ["115V/400Hz, 115V/60Hz e 26V/400Hz.","CT.","Amplificador de potência, teste de direção, detetor de direção e diodo “D1”.","Na unidade indicadora."],
    answer: "115V/400Hz, 115V/60Hz e 26V/400Hz.",
    topic: "Questionário geral"
  },
  {
    question: "45. No servo de direção do anemômetro EVERSHED, qual a função dos seguintes componentes: Potenciômetros RV1, Potenciômetro RV2, Taco-gerador (TG-2)?",
    options: ["RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.","Preventivas e corretivas.","26V/400hz.","Um ( ver diagrama)."],
    answer: "RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico.",
    topic: "Questionário geral"
  },
  {
    question: "46. No servo de velocidade do anemômetro EVERSHED, qual a função dos seguintes componentes: Potenciômetros RV4, Potenciômetro RV3, Linvar?",
    options: ["RV4 – calibrador do mostrador, RV3 – amortecimento e Linvar – Transdutor.","Dois.","40 VCA.","2,4:1"],
    answer: "RV4 – calibrador do mostrador, RV3 – amortecimento e Linvar – Transdutor.",
    topic: "Questionário geral"
  },
  {
    question: "47. No anemômetro EVERSHED, cite o dispositivo que produz um sinal proporcional no ângulo do vento e sua alimentação:",
    options: ["Sincro transmissor de direção, 26 V/400Hz.","Erro.","Aumentar o ganho do servo motor(aumentar o fator de potência).","Reposicionar o rotor do CT, reduzindo o sinal de erro."],
    answer: "Sincro transmissor de direção, 26 V/400Hz.",
    topic: "Questionário geral"
  },
  {
    question: "48. No anemômetro EVERSHED, cite o potenciômetro que ajusta o amortecimento do servo de velocidade e qual a função do sincro linvar?",
    options: ["RV3 faz o amortecimento e o LINVAR funciona como um transdutor.","RV3: Amortecimento. RV4: Ajuste do zero / Calibrador do mostrador. (O manuscrito inverteu os nomes inicialmente, e corrigiu de caneta vermelha)","24 Volts.","transmissor síncro."],
    answer: "RV3 faz o amortecimento e o LINVAR funciona como um transdutor.",
    topic: "Questionário geral"
  },
  {
    question: "49. No anemômetro EVERSHED cite os potenciômetros responsáveis pela sensibilidade e amortecimento respectivamente do servo de direção:",
    options: ["RV1 e RV2.","TG1. Ver diagrama em bloco","No painel de controle / unidade RTU.","Equipamento de frequência constante."],
    answer: "RV1 e RV2.",
    topic: "Questionário geral"
  },
  {
    question: "50. Descreva a característica visual do sensor de velocidade do vento d anemômetro EVERSHED e o seu principio de funcionamento?",
    options: ["Conjunto de 3 ou 4 cubas e de uma aleta aerodinâmica montada em um suporte vertical. Funcionamento – O gerador de indução acionados pelas cubas produzem sinal elétrico de saída proporcional a velocidade do vento.","Fracos.","Instalado na PCI, composto pelo subconjunto de veloc e direção do vento, montados em chapa base individuais para formar uma só unidade envolvida em uma caixa ou carcaça metálica para instalação em antepara.","RV1 – ajusta a sensibilidade, RV2 – fornece feedback para reduzir overshoot, TG2 – gera sinal elétrico."],
    answer: "Conjunto de 3 ou 4 cubas e de uma aleta aerodinâmica montada em um suporte vertical. Funcionamento – O gerador de indução acionados pelas cubas produzem sinal elétrico de saída proporcional a velocidade do vento.",
    topic: "Questionário geral"
  },
  {
    question: "51. Defina qual o propósito da unidade de retransmissão do anemômetro EVERSHED e localização a bordo das Fragatas?",
    options: ["Converte os fracos sinais de velocidade e direção do vento proveniente do detetor, tornando- os adequados para posições. Sua localização: C.O.C","RV1 e RV2.","5 nós.","Fixo e de controle."],
    answer: "Converte os fracos sinais de velocidade e direção do vento proveniente do detetor, tornando- os adequados para posições. Sua localização: C.O.C",
    topic: "Questionário geral"
  },
  {
    question: "52. Descreva a finalidade do anemômetro e quais os tipos básicos utilizados na MB?",
    options: ["Fornece indicações continua ou instantânea da intensidade em nós e da direção em graus do vento. Os tipos básicos são: B, F e EVERSHED.","motor de frequência constante.","motor de acompanhamento.","Converter o movimento rotativo em angular no conjunto de velocidade do vento."],
    answer: "Fornece indicações continua ou instantânea da intensidade em nós e da direção em graus do vento. Os tipos básicos são: B, F e EVERSHED.",
    topic: "Questionário geral"
  },
  {
    question: "53. Descreva as características do anemômetro leve usado na MB e a função de cada uma delas?",
    options: ["1 – Conjunto anemômetro e catavento usado para detectar a velocidade e direção do vento, 2 – Unidade de retransmissão (RTU) usadas para amplificar os sinais fracos, 3 – Receptores e indicadores de velocidade e direção do vento.","Não haverá alimentação para o teste de velocidade.","RUN, 15, 30 e 45 nós.","O integrador mecânico pertence essencialmente ao tipo B (converte movimento rotativo em angular). No sistema tipo F, um circuito eletrônico (ou integrador interno ao servo) também pode fazer o amortecimento e ajuste. O correto é converter movimentos proporcionais para indicação."],
    answer: "1 – Conjunto anemômetro e catavento usado para detectar a velocidade e direção do vento, 2 – Unidade de retransmissão (RTU) usadas para amplificar os sinais fracos, 3 – Receptores e indicadores de velocidade e direção do vento.",
    topic: "Questionário geral"
  },
  {
    question: "54. Qual o tipo de anemômetro usado nas Fragatas MK-10?",
    options: ["EVERSHED. Uso geral.","Melhorar o fator de potência(rendimento).Capacitores em paralelo aumenta a capacitância.","Velocidade: Quando as cubas estiverem paradas. Direção: quando o catavento estiver alinhado no sentido proa popa do navio.","60V/400Hz."],
    answer: "EVERSHED. Uso geral.",
    topic: "Questionário geral"
  },
  {
    question: "55. Qual o dispositivo do EVERSHED que produz um sinal proporcional ao ângulo do vento?",
    options: ["Sincro transmissor de direção.","Fracos.","PA-112-A","RV1 e RV2."],
    answer: "Sincro transmissor de direção.",
    topic: "Questionário geral"
  },
  {
    question: "56. No anemômetro EVRSHED, o indicador possui receptores combinados para indicação de intensidade e direção do vento. Mencione as graduações do indicador de intensidade e direção do vento e seus intervalos?",
    options: ["Direção – 0 a 360º sendo 0 a 180º vermelho e 0 a 180º verde com intervalos de 2 em 2º. Intensidade – 0 a 75 nos com intervalo de 1 nó.","Falha de alimentação p o linvar, avaria em D4, curto em C7","Sincro transmissor de direção.","Conjunto transmissor de velocidade (com copos/cubas) e de direção (com aleta/cata-vento), alojados em suas respectivas unidades."],
    answer: "Direção – 0 a 360º sendo 0 a 180º vermelho e 0 a 180º verde com intervalos de 2 em 2º. Intensidade – 0 a 75 nos com intervalo de 1 nó.",
    topic: "Questionário geral"
  },
  {
    question: "57. Quais os dispositivos do servo de velocidade do anemômetro EVERSHED responsáveis pelo amortecimento das oscilações?",
    options: ["Engrenagem redutora 2000/1 e potenciômetro RV3.","18TR6 e 18TR4 (também referenciados como transmissores 37TX6 e 31TX4 na detecção).","Amortecimento.","6 volts ligados em paralelo."],
    answer: "Engrenagem redutora 2000/1 e potenciômetro RV3.",
    topic: "Questionário geral"
  },
  {
    question: "58. O sincro LINVAR do sistema EVERSHED fornece uma realimentação de:",
    options: ["0 a 40 VCA.","Amortecimento / Direção (corrígio à caneta para Direção)","Converter o movimento rotativo em angular no conjunto de velocidade do vento.","4 posições (RUN, 15, 30 e 45 nós)."],
    answer: "0 a 40 VCA.",
    topic: "Questionário geral"
  },
  {
    question: "59. No sistema de anemômetro EVERSHED, a diferença em ângulo formado entre o rotor do TX e do CT do servo de direção, determina:",
    options: ["A amplitude do sinal de erro.","TX / 26V400Hz.","B1 e B2.","RV4."],
    answer: "A amplitude do sinal de erro.",
    topic: "Questionário geral"
  },
  {
    question: "60. No sistema EVERSHED, o sinal que vai do CX para a unidade de correção de dados do vento alimenta o estator de um.",
    options: ["CT.(ver diag. dos servos e da RTU)","RV1 e RV2.","115V/400Hz, 115V/60Hz e 26V/400Hz.","40 VCA."],
    answer: "CT.(ver diag. dos servos e da RTU)",
    topic: "Questionário geral"
  },
  {
    question: "61. No anemômetro EVERSHED, quando o sinal medido em RV4 e em R11 são iguais e opostas, a velocidade do servo motor é de _zero_ RPM.",
    options: ["Zero RPM.","RUN, 15, 30 e 45.","Converter os fracos sinais de velocidade e direção vindo do detector.","Transdutor."],
    answer: "Zero RPM.",
    topic: "Questionário geral"
  },
  {
    question: "62. Quantos síncros transmissores possui a unid colocada no mastro das fragatas Niterói?",
    options: ["Um ( ver diagrama).","Converter os fracos sinais de velocidade e direção do vento provenientes do detetor, tornando-os adequados para os indicadores (RTU).","A amplitude do sinal de erro.","De 0 a 360º (sendo 0 a 180º vermelho e 0 a 180º verde) com intervalos de 2 em 2º."],
    answer: "Um ( ver diagrama).",
    topic: "Questionário geral"
  },
  {
    question: "63. Quais os tipos de manutenções realizadas nos anemômetros?",
    options: ["preventivas e corretivas.","115Volts?400HZ.","60 OHM.","60V/400HZ."],
    answer: "preventivas e corretivas.",
    topic: "Questionário geral"
  },
  {
    question: "64. Em qual situação a tensão em TP11 e igual a TP12?",
    options: ["quando D2 estiver conduzindo.","Fracos.","Amortecimento.","40 VCA."],
    answer: "quando D2 estiver conduzindo.",
    topic: "Questionário geral"
  },
  {
    question: "65. Descreva o teste de direção do vento no anem EVERSHED,  e o que deve ser executado através do acionamento da chave S1.",
    options: ["Ao acionarmos a chave : o indicador de direção deverá ir a zero graus. Nas posições 1=NORMAL; 2= 0º (zero grau); 3º 120º BE. 4º 120º BB.","A saída(sinal de erro) do CT será zero.","Amplificador de potência, teste de direção, detetor de direção e diodo “D1”.","Retificar em meia onda o sinal de 10volts 400Hz vindo de T1."],
    answer: "Ao acionarmos a chave : o indicador de direção deverá ir a zero graus. Nas posições 1=NORMAL; 2= 0º (zero grau); 3º 120º BE. 4º 120º BB.",
    topic: "Questionário geral"
  },
  {
    question: "66 - No anemômetro “EVERSHED”. Qual componente no servo de velocidade do vento que tem a função de ajustar o zero?",
    options: ["RV4.","Servomotor.(redutor de erros).","65 nós, com intervalos de 1 nó.","Zero RPM."],
    answer: "RV4.",
    topic: "Questionário geral"
  },
  {
    question: "Durante uma manobra padrão, o operador do Centro de Operações de Combate (COC) nota que o indicador de direção do Anemômetro Tipo F continuou girando indefinidamente após uma guinada de 30º. Qual a causa mais provável dessa avaria?",
    options: ["Falha no gerador de indução, que parou de enviar o sinal CA.", "Queima do motor de frequência constante, travando o integrador mecânico.", "Falta de realimentação (feedback) mecânica para o Transformador de Controle (CT).", "Abertura do circuito pela microchave FC.", "Curto-circuito nos anéis coletores do transmissor síncro."],
    answer: "Falta de realimentação (feedback) mecânica para o Transformador de Controle (CT).",
    explanation: "No servossistema do Tipo F, o motor posiciona o rotor e, simultaneamente, envia um sinal mecânico de resposta ao rotor do CT para zerar o erro. Sem essa realimentação, o sistema não percebe que já atingiu a posição e continua girando o indicador."
  },
  {
    question: "No sistema EVERSHED, o painel de distribuição possui diversos componentes eletrônicos vitais. Qual é a função específica dos diodos D5 e D6 nesse circuito?",
    options: ["Retificar a corrente alternada vinda do taco-gerador.","Atuar como reguladores e estabilizadores de voltagem.","Converter os fracos sinais mecânicos em elétricos.","Proteger o circuito de velocidade contra picos de 400Hz.","Fornecer alimentação exclusiva para a iluminação vermelha dos diais."],
    answer: "Atuar como reguladores e estabilizadores de voltagem.",
    explanation: "Conforme cobrado especificamente pela banca, os diodos D5 e D6 no EVERSHED funcionam como reguladores e estabilizadores de voltagem."
  },
  {
    question: "O ajuste e a calibração do sistema EVERSHED dependem do correto manuseio de potenciômetros específicos. Para ajustar o \"amortecimento\" do servo de direção, de modo a reduzir oscilações abruptas (overshoot), o mantenedor deve atuar em qual componente?",
    options: ["RV1","RV2","RV3","RV4","RV5"],
    answer: "RV2",
    explanation: "No servo de direção do EVERSHED, o RV1 ajusta a sensibilidade, enquanto o RV2 fornece o feedback necessário para ajustar o amortecimento (reduzindo o overshoot). O RV3 é usado para amortecimento, mas no servo de velocidade."
  },
  {
    question: "Ao inspecionar o servo de velocidade do anemômetro EVERSHED após uma troca de mostrador, o militar precisa realizar a calibração (ajuste fino) da velocidade lida no dial. Ele deve utilizar o potenciômetro:",
    options: ["RV1","RV2","RV3","RV4","RV5"],
    answer: "RV4",
    explanation: "O potenciômetro RV4 é o responsável direto por atuar como calibrador do mostrador no servo de velocidade do Evershed."
  },
  {
    question: "A chave de teste de velocidade do sistema EVERSHED (S2) permite simular ventos sem a necessidade de fluxo de ar real nos copos. Quais são as marcações corretas de teste disponíveis nesta chave?",
    options: ["STANDBY, 10, 20, e 50 nós.","RUN, 15, 30 e 45 nós.","ZERO, 25, 50 e 75 nós.","NORMAL, 20, 40 e 60 nós.","OFF, LOW, MEDIUM e HIGH."],
    answer: "RUN, 15, 30 e 45 nós.",
    explanation: "As posições da chave de teste de velocidade do Evershed são: posição de operação (RUN), seguida pelas simulações exatas de 15, 30 e 45."
  },
  {
    question: "Em caso de falha completa (queima) do Transformador T1 no sistema EVERSHED, qual dos componentes abaixo NÃO ficará sem alimentação?",
    options: ["O Amplificador de Potência.","O circuito de teste de direção.","O detetor de direção.","O Diodo \"D1\".","O motor síncrono do tipo B."],
    answer: "O motor síncrono do tipo B.",
    explanation: "O transformador T1 alimenta o amplificador de potência, o teste de direção, o detetor de direção e o diodo D1. O motor síncrono pertence ao servossistema do Tipo B e F, sendo uma \"pegadinha\" conceitual que mistura os equipamentos."
  },
  {
    question: "Durante a manutenção nas Fragatas da Classe Niterói que utilizam o anemômetro EVERSHED, o técnico precisa verificar a retificação do sinal gerado pelo LINVAR. Para isso, ele deve inspecionar a ponte de diodos:",
    options: ["D1 e D2.","D5 e D6.","D4.","D8.","RV4."],
    answer: "D4.",
    explanation: "O dispositivo responsável por retificar o sinal proveniente do síncro LINVAR (que atua como transdutor) nas fragatas é especificamente a ponte de diodos D4."
  },
  {
    question: "O ajuste de zero é crucial para a precisão inicial do sistema EVERSHED. Analisando a elétrica do sistema, a voltagem utilizada estritamente para o \"Ajuste do Zero\" possui o valor de:",
    options: ["24 Volts (contínuos).","10 Volts (400Hz).","1 Volt (oriundo do Transformador 2).","60 Volts (400Hz).","115 Volts (60Hz)."],
    answer: "1 Volt (oriundo do Transformador 2).",
    explanation: "A alimentação de 1 volt, proveniente do transformador T2, tem a finalidade específica de prover a energia para o circuito de \"Ajuste do Zero\" do sistema Evershed."
  },
  {
    question: "Ao realizar a verificação das tensões nos pontos de teste (TP) da Unidade de Retransmissão (RTU) do anemômetro Evershed, o militar precisa de um ponto comum de referência (TERRA). O ponto de teste que deve sempre ser utilizado como referência de 0 Volts é o:",
    options: ["TP 1", "TP 2", "TP 4", "TP 6", "TP 12"],
    answer: "TP 6",
    explanation: "Nos testes da RTU, o ponto TP 6 é a referência padronizada de aterramento (0 volts) para as medições."
  },
  {
    question: "Os anemômetros instalados em navios de origem norte-americana utilizam nomenclaturas específicas para identificar seus circuitos em toda a documentação do navio. Os circuitos destinados à informação de Direção do Vento e Intensidade do Vento são designados, respectivamente, pelas siglas:",
    options: ["HE e HD.","HD e HE.","TX e TR.","CT e CX.","B1 e B2."],
    answer: "HD e HE.",
    explanation: "\"HD\" refere-se à direção do vento (D de Direction/Direção) e \"HE\" refere-se à intensidade/velocidade (E provavelmente de Estimate ou do código do projeto americano). A alternativa A inverte a ordem exigida pelo enunciado."
  }
];
