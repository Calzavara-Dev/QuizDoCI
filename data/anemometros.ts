import type { Question } from "../types/question";

export const anemometrosQuestions: Question[] = [
  {
    "question": "Cite os testes realizados na unidade de retransmissão do Anemômetro EVERSHED.",
    "options": [
      "Tensão e corrente.",
      "Velocidade e direção.",
      "Amortecimento e alinhamento.",
      "Frequência e fase.",
      "Potência e resistência."
    ],
    "answer": "Velocidade e direção."
  },
  {
    "question": "Quais os potenciômetros responsáveis pelo ajuste de amortecimento e pelo ajuste do zero (calibrador do mostrador) do servo de velocidade do anemômetro EVERSHED?",
    "options": [
      "RV1 e RV2.",
      "RV3 e RV4.",
      "RV2 e RV5.",
      "RV4 e RV1.",
      "RV3 e RV5."
    ],
    "answer": "RV3 e RV4."
  },
  {
    "question": "No subconjunto de direção do vento do sistema tipo B, qual componente aciona o transmissor síncro 5HG?",
    "options": [
      "Motor de acompanhamento.",
      "Integrador mecânico.",
      "Redutor de erros.",
      "Gerador de indução.",
      "Motor de frequência constante."
    ],
    "answer": "Motor de acompanhamento."
  },
  {
    "question": "O que ocorrerá no sistema tipo B quando os rotores dos transmissores de direção da aleta e do transformador síncro de controle (CT) estiverem em correspondência?",
    "options": [
      "O motor de acompanhamento atingirá a velocidade máxima.",
      "A saída (sinal de erro) do CT será zero volts.",
      "O sinal de saída será de 115V.",
      "O alarme de avaria soará.",
      "O transmissor 5HG inverterá a fase."
    ],
    "answer": "A saída (sinal de erro) do CT será zero volts."
  },
  {
    "question": "No anemômetro tipo B, quando os rotores 1HG e 1HCT estiverem em correspondência, a saída do transformador de controle (CT) será de:",
    "options": [
      "115 Volts.",
      "26 Volts.",
      "10 Volts.",
      "0 Volts.",
      "400 Volts."
    ],
    "answer": "0 Volts."
  },
  {
    "question": "Qual é a alimentação necessária para a iluminação do painel de controle do anemômetro EVERSHED?",
    "options": [
      "115V / 400Hz.",
      "6V DC.",
      "24 Volts.",
      "26V / 400Hz.",
      "12 Volts."
    ],
    "answer": "24 Volts."
  },
  {
    "question": "No anemômetro EVERSHED, qual é a variação de voltagem medida entre os pontos de teste TP6 e TP7?",
    "options": [
      "0 a 10V.",
      "0 a 100mV.",
      "0 a 40VCA.",
      "100 a 115V.",
      "0 a 6V."
    ],
    "answer": "0 a 100mV."
  },
  {
    "question": "No anemômetro tipo B, o sinal elétrico que chega ao amplificador é oriundo do síncro do tipo:",
    "options": [
      "1HG.",
      "5HG.",
      "1HCT.",
      "LINVAR.",
      "18TR6."
    ],
    "answer": "1HCT."
  },
  {
    "question": "Qual chave do sistema EVERSHED habilita os 10V provenientes do transformador T1 para os testes de direção?",
    "options": [
      "Chave S3.",
      "Chave S4.",
      "Chave FC.",
      "Chave S1.",
      "Chave de limite inferior."
    ],
    "answer": "Chave S1."
  },
  {
    "question": "Descreva como está instalado o transmissor síncro de velocidade do sistema tipo B.",
    "options": [
      "No mastro principal, exposto diretamente às intempéries.",
      "Na cabeça da alheta, junto com a unidade detectora de direção.",
      "Na Praça de Comunicações Interiores (PCI), composto pelo subconjunto de velocidade e direção do vento montados em chapa base, envolvidos em uma carcaça metálica para instalação em antepara.",
      "Dentro da Unidade de Retransmissão (RTU), montado em placa de circuito impresso.",
      "Acoplado diretamente ao eixo do servo motor de acompanhamento M2."
    ],
    "answer": "Na Praça de Comunicações Interiores (PCI), composto pelo subconjunto de velocidade e direção do vento montados em chapa base, envolvidos em uma carcaça metálica para instalação em antepara."
  },
  {
    "question": "Analisando o diagrama do conjunto de direção do vento do sistema tipo F, qual é a frequência de operação do transmissor de controle?",
    "options": [
      "60 Hz.",
      "50 Hz.",
      "400 Hz.",
      "1000 Hz.",
      "100 Hz."
    ],
    "answer": "400 Hz."
  },
  {
    "question": "Analisando o diagrama do sistema EVERSHED, o que acontecerá se houver uma avaria no resistor R13?",
    "options": [
      "O motor de acompanhamento de direção queimará.",
      "O gerador de indução parará de transmitir o sinal de velocidade.",
      "Não haverá alimentação de 10V para a chave S1 de teste.",
      "Não haverá a regulagem de tensão para a chave S3 (115V / 400Hz).",
      "O sinal de erro do Transformador de Controle (CT) será máximo."
    ],
    "answer": "Não haverá a regulagem de tensão para a chave S3 (115V / 400Hz)."
  },
  {
    "question": "O síncro LINVAR do sistema EVERSHED fornece uma realimentação de:",
    "options": [
      "0 a 115 VCA.",
      "0 a 26 VCA.",
      "0 a 40 VCA.",
      "0 a 10 VCA.",
      "0 a 100 mV."
    ],
    "answer": "0 a 40 VCA."
  },
  {
    "question": "No anemômetro EVERSHED, o sinal elétrico que vai do CX para a unidade de correção de dados do vento alimenta o estator de qual componente?",
    "options": [
      "Síncro LINVAR.",
      "Transformador de Controle (CT).",
      "Motor de Acompanhamento.",
      "Gerador de Indução.",
      "Integrador Mecânico."
    ],
    "answer": "Transformador de Controle (CT)."
  },
  {
    "question": "No sistema EVERSHED, quando os sinais medidos no potenciômetro RV4 e no resistor R11 são iguais e opostos, a velocidade do servo motor é de:",
    "options": [
      "15 RPM.",
      "30 RPM.",
      "45 RPM.",
      "65 RPM.",
      "0 RPM."
    ],
    "answer": "0 RPM."
  },
  {
    "question": "No servo de velocidade do sistema EVERSHED, qual componente é responsável por comandar o síncro LINVAR?",
    "options": [
      "Motor de acompanhamento.",
      "Integrador mecânico.",
      "Redutor de erros.",
      "Chave de teste S1.",
      "Gerador de indução."
    ],
    "answer": "Redutor de erros."
  },
  {
    "question": "No conjunto de velocidade do sistema tipo B, a unidade síncrona que gira na mesma razão do transmissor (TX) acoplado à hélice é um:",
    "options": [
      "Transformador de Controle (CT).",
      "Síncro Receptor (TR).",
      "Síncro LINVAR.",
      "Transmissor de Controle (CX).",
      "Motor de acompanhamento."
    ],
    "answer": "Síncro Receptor (TR)."
  },
  {
    "question": "Qual componente do sistema tipo B converte o movimento rotativo em angular no conjunto de velocidade do vento?",
    "options": [
      "Redutor de erros.",
      "Motor de acompanhamento.",
      "Integrador mecânico.",
      "Gerador de indução.",
      "Servo motor."
    ],
    "answer": "Integrador mecânico."
  },
  {
    "question": "A informação elétrica que sai do Transformador de Controle (CT), vinda diretamente do transmissor de direção do anemômetro tipo F, é chamada de sinal de:",
    "options": [
      "Direção.",
      "Velocidade.",
      "Amortecimento.",
      "Erro.",
      "Realimentação."
    ],
    "answer": "Erro."
  },
  {
    "question": "Quais são as posições da chave de teste de velocidade do sistema de anemômetro EVERSHED?",
    "options": [
      "RUN, 10, 20 e 30 nós.",
      "RUN, 15, 30 e 45 nós.",
      "NORMAL, 0º, 120º BE e 120º BB.",
      "0, 15, 30, 45 e 60 nós.",
      "RUN e TEST."
    ],
    "answer": "RUN, 15, 30 e 45 nós."
  },
  {
    "question": "No sistema tipo B, a unidade síncrona que aciona os discos de fricção do integrador mecânico é o:",
    "options": [
      "Motor de acompanhamento.",
      "Motor de frequência constante.",
      "Redutor de erros.",
      "Gerador de indução.",
      "Síncro transmissor (TX)."
    ],
    "answer": "Motor de frequência constante."
  },
  {
    "question": "No anemômetro EVERSHED, ao deslocarmos a chave S1 da posição \"NORMAL\" para as posições de teste, estamos aplicando qual sinal no estator do Transformador de Controle (CT)?",
    "options": [
      "115V / 400Hz.",
      "26V / 400Hz.",
      "10V / 400Hz.",
      "60V / 400Hz.",
      "1V / 400Hz."
    ],
    "answer": "10V / 400Hz."
  },
  {
    "question": "Qual é a alimentação do síncro LINVAR do sistema EVERSHED?",
    "options": [
      "115V / 400Hz.",
      "115V / 60Hz.",
      "26V / 400Hz.",
      "60V / 400Hz.",
      "10V / 400Hz."
    ],
    "answer": "60V / 400Hz."
  },
  {
    "question": "No servo de direção do anemômetro EVERSHED, qual componente posiciona o Transformador de Controle (CT) para anular o sinal de erro?",
    "options": [
      "Redutor de erros.",
      "Motor de acompanhamento (Servo motor).",
      "Síncro transmissor (TX).",
      "Potenciômetro RV1.",
      "Integrador mecânico."
    ],
    "answer": "Motor de acompanhamento (Servo motor)."
  },
  {
    "question": "No anemômetro tipo B, a unidade síncrona que é diretamente acoplada à aleta é um:",
    "options": [
      "Transformador de Controle (CT).",
      "Transmissor síncro (TX).",
      "Receptor síncro (TR).",
      "Motor de frequência constante.",
      "Síncro LINVAR."
    ],
    "answer": "Transmissor síncro (TX)."
  },
  {
    "question": "Qual é a finalidade da microchave do sistema tipo B, localizada no conjunto de velocidade do vento?",
    "options": [
      "Regular a voltagem do painel de iluminação em 24V.",
      "Habilitar a alimentação principal de 115V do sistema.",
      "Abrir o circuito do motor de frequência constante (FC) quando a velocidade for nula (zero).",
      "Fechar o circuito do integrador mecânico apenas na velocidade máxima.",
      "Acionar os transmissores síncronos de direção de forma assíncrona."
    ],
    "answer": "Abrir o circuito do motor de frequência constante (FC) quando a velocidade for nula (zero)."
  },
  {
    "question": "Qual componente do servo de direção do anemômetro EVERSHED aciona mecanicamente os transmissores de direção?",
    "options": [
      "Integrador mecânico.",
      "Redutor de erros.",
      "Servo motor de velocidade.",
      "Gerador de indução.",
      "Taco-gerador (TG-2)."
    ],
    "answer": "Redutor de erros."
  },
  {
    "question": "No anemômetro das fragatas, qual é a alimentação da unidade síncro que envia um sinal elétrico para a unidade de correção de dados do vento?",
    "options": [
      "26V / 400Hz.",
      "10V / 400Hz.",
      "60V / 400Hz.",
      "115V / 400Hz.",
      "115V / 60Hz."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "No anemômetro EVERSHED das fragatas, o dispositivo elétrico cujo sinal de saída se opõe ao sinal que aparece no resistor R11 é o:",
    "options": [
      "Potenciômetro RV1.",
      "Potenciômetro RV2.",
      "Potenciômetro RV3.",
      "Potenciômetro RV4.",
      "Potenciômetro RV5."
    ],
    "answer": "Potenciômetro RV4."
  },
  {
    "question": "Qual é a alimentação específica para o transmissor síncro de direção do vento do anemômetro EVERSHED?",
    "options": [
      "115V / 400Hz.",
      "115V / 60Hz.",
      "60V / 400Hz.",
      "26V / 400Hz.",
      "10V / 400Hz."
    ],
    "answer": "26V / 400Hz."
  },
  {
    "question": "Qual é a alimentação para o painel de controle do sistema EVERSHED?",
    "options": [
      "115V / 60Hz.",
      "26V / 400Hz.",
      "115V / 400Hz.",
      "60V / 400Hz.",
      "10V / 400Hz."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "Qual é o princípio de funcionamento do detetor do sistema EVERSHED?",
    "options": [
      "Motor síncrono.",
      "Transformador de controle.",
      "Gerador de indução.",
      "Integrador mecânico.",
      "Motor de passo."
    ],
    "answer": "Gerador de indução."
  },
  {
    "question": "No sistema EVERSHED, no detetor da unidade de velocidade, qual componente vem com ajuste de fábrica?",
    "options": [
      "Reostato.",
      "Capacitor C3.",
      "Potenciômetro RV1.",
      "Síncro LINVAR.",
      "Motor M2."
    ],
    "answer": "Reostato."
  },
  {
    "question": "Quais os transmissores síncronos do anemômetro tipo F que são posicionados pelo servo de direção?",
    "options": [
      "37TX6 e 31TX4.",
      "18TR6 e 18TR4.",
      "1HG e 1HCT.",
      "5HG e 5HCT.",
      "18CX4 e 18CT4."
    ],
    "answer": "37TX6 e 31TX4."
  },
  {
    "question": "Quais os tipos de indicadores síncronos utilizados pelo sistema tipo F?",
    "options": [
      "37TX6 e 31TX4.",
      "18TR6 e 18TR4.",
      "1HG e 1HCT.",
      "5HG e 5HCT.",
      "18CX4 e 18CT4."
    ],
    "answer": "18TR6 e 18TR4."
  },
  {
    "question": "Qual é o intervalo em nós do dial de velocidade do sistema tipo F?",
    "options": [
      "1 nó.",
      "2 nós.",
      "5 nós.",
      "10 nós.",
      "15 nós."
    ],
    "answer": "5 nós."
  },
  {
    "question": "No sistema EVERSHED, cite qual dispositivo do servo de direção trabalha como gerador de sinal de erro:",
    "options": [
      "Síncro Receptor (TR).",
      "** *(Opção descartada - ver nota)*",
      "Síncro Transmissor (TX) da unidade detetora.",
      "Transmissor de Controle (CX).",
      "Síncro LINVAR."
    ],
    "answer": "Síncro Transmissor (TX) da unidade detetora."
  },
  {
    "question": "Cite a alimentação principal para o anemômetro EVERSHED:",
    "options": [
      "115V / 60Hz.",
      "115V / 400Hz.",
      "26V / 400Hz.",
      "60V / 400Hz.",
      "10V / 400Hz."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "Qual dispositivo do servo de direção do sistema EVERSHED é responsável por reposicionar o rotor do CT, reduzindo o sinal de erro?",
    "options": [
      "Síncro TX.",
      "Redutor de erros.",
      "Integrador mecânico.",
      "Motor de acompanhamento M2 (Servo motor).",
      "Gerador de indução."
    ],
    "answer": "Motor de acompanhamento M2 (Servo motor)."
  },
  {
    "question": "Cite um dispositivo do servo de velocidade do sistema EVERSHED responsável pelo amortecimento das oscilações:",
    "options": [
      "Potenciômetro RV1.",
      "Capacitor C3.",
      "Engrenagem redutora 2000/1 e o potenciômetro RV3.",
      "Taco-gerador TG-2.",
      "Motor de acompanhamento M2."
    ],
    "answer": "Engrenagem redutora 2000/1 e o potenciômetro RV3."
  },
  {
    "question": "Qual é a razão de transformação do conjunto de engrenagens no servo de velocidade caso o navio necessite usar receptores de 180 nós?",
    "options": [
      "1:12,5.",
      "2000:1.",
      "2,4:1.",
      "1:1.",
      "10:1."
    ],
    "answer": "2,4:1."
  },
  {
    "question": "Qual a finalidade do capacitor C3 no servo de velocidade do sistema EVERSHED?",
    "options": [
      "Filtrar a tensão de 115V.",
      "Aumentar o ganho do servo motor (aumentar o fator de potência).",
      "Ajustar o amortecimento do servo.",
      "Regular a tensão de saída do LINVAR.",
      "Converter o movimento rotativo em angular."
    ],
    "answer": "Aumentar o ganho do servo motor (aumentar o fator de potência)."
  },
  {
    "question": "Qual unidade aloja o transformador de 115/6 Volts do anemômetro tipo B?",
    "options": [
      "Unidade Transmissora.",
      "Unidade Receptora.",
      "Unidade Indicadora.",
      "Unidade de Retransmissão.",
      "Caixa de Ligação."
    ],
    "answer": "Unidade Indicadora."
  },
  {
    "question": "Qual componente do servo de velocidade do sistema EVERSHED funciona como transdutor?",
    "options": [
      "Motor de acompanhamento.",
      "Gerador de indução.",
      "Síncro LINVAR.",
      "Transformador de controle (CT).",
      "Integrador mecânico."
    ],
    "answer": "Síncro LINVAR."
  },
  {
    "question": "Qual a função do motor de acompanhamento do anemômetro tipo F, no conjunto de direção do vento?",
    "options": [
      "Funcionar como detector de erro.",
      "Transmitir o deslocamento da aleta.",
      "Gerar sinal de amortecimento.",
      "Converter 115V para 26V.",
      "Acionar o gerador de indução."
    ],
    "answer": "Transmitir o deslocamento da aleta."
  },
  {
    "question": "Qual é a função do potenciômetro RV4 do sistema EVERSHED?",
    "options": [
      "Faz o amortecimento do servo de direção.",
      "Ajusta a sensibilidade do sistema.",
      "Fornece feedback para reduzir overshoot.",
      "Faz o ajuste do zero (calibrador do mostrador).",
      "Retifica o sinal elétrico do LINVAR."
    ],
    "answer": "Faz o ajuste do zero (calibrador do mostrador)."
  },
  {
    "question": "Qual é a função do potenciômetro RV3 no sistema EVERSHED?",
    "options": [
      "Ajuste do zero da direção.",
      "Faz o amortecimento das oscilações.",
      "Ajuste da sensibilidade do indicador.",
      "Regulação de voltagem do painel.",
      "Calibrador do mostrador."
    ],
    "answer": "Faz o amortecimento das oscilações."
  },
  {
    "question": "Qual o propósito da Unidade de Retransmissão (RTU) do sistema EVERSHED?",
    "options": [
      "Converter a frequência de 60Hz para 400Hz para os indicadores.",
      "Substituir o painel indicador em caso de avaria no passadiço.",
      "Converter os fracos sinais de velocidade e direção do vento vindos do detetor, tornando-os adequados.",
      "Retificar a tensão de 115V para 24V contínuos para a iluminação.",
      "Gerar o sinal de erro para o motor de acompanhamento."
    ],
    "answer": "Converter os fracos sinais de velocidade e direção do vento vindos do detetor, tornando-os adequados."
  },
  {
    "question": "Quais potenciômetros do servo de direção do sistema EVERSHED são responsáveis pela sensibilidade e amortecimento, respectivamente?",
    "options": [
      "RV3 e RV4.",
      "RV4 e RV5.",
      "RV1 e RV2.",
      "RV2 e RV3.",
      "RV1 e RV4."
    ],
    "answer": "RV1 e RV2."
  },
  {
    "question": "Mencione em que consiste basicamente o sistema tipo B:",
    "options": [
      "Detetor, motor de frequência constante e aleta.",
      "Detetor, transmissor e indicador.",
      "Copos, integrador mecânico e servo motor.",
      "Painel de controle, RTU e síncros.",
      "Hélice, aleta e reostato."
    ],
    "answer": "Detetor, transmissor e indicador."
  },
  {
    "question": "Quais enrolamentos fazem parte do servo motor de direção e velocidade do sistema EVERSHED?",
    "options": [
      "Primário e secundário.",
      "Induzido e indutor.",
      "Fixo e de controle.",
      "Estator e rotor.",
      "Série e paralelo."
    ],
    "answer": "Fixo e de controle."
  },
  {
    "question": "No anemômetro tipo B, qual será a posição do RODETE na velocidade máxima?",
    "options": [
      "No centro absoluto do disco.",
      "Afastado dos discos de fricção.",
      "Na periferia do disco.",
      "Na posição zero elétrico.",
      "Acoplado ao motor de frequência constante."
    ],
    "answer": "Na periferia do disco."
  },
  {
    "question": "Qual a finalidade do componente DIAC no conjunto de direção do anemômetro tipo F?",
    "options": [
      "Retificar a tensão de alimentação principal.",
      "Regular a tensão para o amplificador PC 115A 101.",
      "Acionar o motor de acompanhamento do indicador.",
      "Aumentar o fator de potência do circuito.",
      "Converter o sinal mecânico do mastro em elétrico."
    ],
    "answer": "Regular a tensão para o amplificador PC 115A 101."
  },
  {
    "question": "Qual o valor ôhmico do resistor (R-103) do conjunto de velocidade do anemômetro tipo F?",
    "options": [
      "10 Ohms.",
      "26 Ohms.",
      "60 Ohms.",
      "100 Ohms.",
      "400 Ohms."
    ],
    "answer": "60 Ohms."
  },
  {
    "question": "Qual a frequência de operação do síncro 18CT4 do conjunto de velocidade do anemômetro tipo F?",
    "options": [
      "50Hz.",
      "60Hz.",
      "100Hz.",
      "400Hz.",
      "1000Hz."
    ],
    "answer": "400Hz."
  },
  {
    "question": "Qual a função do LINVAR no servo de velocidade do sistema de anemômetro EVERSHED?",
    "options": [
      "Gerador de sinal de erro proporcional.",
      "Funcionar como um transdutor.",
      "Acionar o motor de acompanhamento.",
      "Amplificar a potência do sinal elétrico.",
      "Funcionar como um regulador de voltagem."
    ],
    "answer": "Funcionar como um transdutor."
  },
  {
    "question": "Qual amplificador está incluído em cada um dos servos, na Unidade de Retransmissão (RTU) do anemômetro EVERSHED?",
    "options": [
      "PA-112-A.",
      "PC-115A-101.",
      "Amplificador 18TR6.",
      "Amplificador 37TX6.",
      "Amplificador tipo RV4."
    ],
    "answer": "PA-112-A."
  },
  {
    "question": "Qual a finalidade do conjunto de engrenagens de razão 2,4:1 no servo de velocidade do anemômetro EVERSHED?",
    "options": [
      "É usado para converter frequências de 60Hz em 400Hz mecanicamente.",
      "Funciona como redutor de erro para o servo de direção.",
      "É um sobressalente usado caso o navio necessite de receptores de 180 nós, bastando fazer a troca.",
      "Aciona o síncro LINVAR em baixas velocidades.",
      "Amortece as oscilações bruscas do ponteiro indicador."
    ],
    "answer": "É um sobressalente usado caso o navio necessite de receptores de 180 nós, bastando fazer a troca."
  },
  {
    "question": "Cite a finalidade do capacitor C3 no servo de velocidade do anemômetro EVERSHED:",
    "options": [
      "Aumentar o fator de potência (ganho) do servo motor do sistema de velocidade.",
      "Reduzir a voltagem de 115V para 26V de forma capacitiva.",
      "Filtrar ruídos do sinal do transdutor LINVAR.",
      "Retificar o sinal elétrico de 400Hz.",
      "Regular a tensão de entrada do amplificador PA-112."
    ],
    "answer": "Aumentar o fator de potência (ganho) do servo motor do sistema de velocidade."
  },
  {
    "question": "Descreva a finalidade dos capacitores C-105 e C-106 do conjunto de velocidade do anemômetro tipo F:",
    "options": [
      "Retificar o sinal AC provindo do gerador para DC.",
      "Melhorar o fator de potência (rendimento), visto que capacitores em paralelo aumentam a capacitância.",
      "Regular a tensão enviada para o amplificador PC 115A 101.",
      "Acionar eletronicamente o motor de frequência constante.",
      "Servir como divisores de tensão para os síncros 18TR6."
    ],
    "answer": "Melhorar o fator de potência (rendimento), visto que capacitores em paralelo aumentam a capacitância."
  },
  {
    "question": "Caso o Transformador T1 do sistema de alimentação do anemômetro EVERSHED falhe, o que ocorrerá?",
    "options": [
      "A iluminação do painel apagará, mas o sistema continuará operando normalmente.",
      "O motor de acompanhamento (M2) disparará para a velocidade máxima.",
      "O amplificador de potência e o Transmissor (TX) do detector de direção ficarão sem alimentação, o Diodo D1 ficará sem alimentação e o teste de direção não poderá ser realizado.",
      "O síncro LINVAR assumirá o controle enviando o sinal de erro.",
      "A unidade de retransmissão inverterá a fase do sinal de erro de 115V para 26V."
    ],
    "answer": "O amplificador de potência e o Transmissor (TX) do detector de direção ficarão sem alimentação, o Diodo D1 ficará sem alimentação e o teste de direção não poderá ser realizado."
  },
  {
    "question": "No anemômetro EVERSHED, quais fusíveis fazem a proteção dos amplificadores (PA112-1 e 2)?",
    "options": [
      "FS3 e FS4.",
      "F1 e F2.",
      "FS1 e FS2.",
      "F5 e F6.",
      "FS5 e FS6."
    ],
    "answer": "FS1 e FS2."
  },
  {
    "question": "Analisando o circuito de teste de velocidade do anemômetro EVERSHED, o que acontecerá se houver uma avaria no resistor R15, estando a chave de teste na posição número 4?",
    "options": [
      "O motor de acompanhamento irá travar.",
      "O sinal de erro no CT será máximo (115V).",
      "Ocorrerá um curto-circuito no transformador T2.",
      "A indicação de velocidade irá a fundo de escala.",
      "Não haverá alimentação para o teste de velocidade."
    ],
    "answer": "Não haverá alimentação para o teste de velocidade."
  },
  {
    "question": "Analisando o diagrama do anemômetro EVERSHED, qual é a finalidade da alimentação de 1 volt, oriunda do Transformador T2?",
    "options": [
      "Alimentar o teste de velocidade.",
      "Acionar o gerador de indução.",
      "Alimentar a iluminação do painel (lâmpadas de 6V).",
      "Fornecer o sinal de erro para o síncro LINVAR.",
      "Polarizar os diodos D5 e D6."
    ],
    "answer": "Alimentar o teste de velocidade."
  },
  {
    "question": "Descreva a finalidade do diodo 1 (D1) no servo de velocidade do anemômetro EVERSHED:",
    "options": [
      "Regular a tensão contínua do painel indicador.",
      "Funcionar como uma chave eletrônica para o motor de acompanhamento.",
      "Retificar em meia onda o sinal de 10V / 400Hz vindo do transformador T1.",
      "Proteger o amplificador PA-112 contra inversão de polaridade.",
      "Atuar como estabilizador de voltagem em paralelo com D5 e D6."
    ],
    "answer": "Retificar em meia onda o sinal de 10V / 400Hz vindo do transformador T1."
  },
  {
    "question": "O que acontecerá se houver uma avaria no resistor R14 (circuito de teste de velocidade) do anemômetro EVERSHED, estando a chave na posição 4?",
    "options": [
      "O sistema operará apenas em modo de direção.",
      "O motor síncrono queimará.",
      "O capacitor C3 explodirá por sobretensão.",
      "A velocidade indicada será exatamente 45 nós.",
      "Não haverá alimentação para o teste de velocidade."
    ],
    "answer": "Não haverá alimentação para o teste de velocidade."
  },
  {
    "question": "Qual a finalidade dos diodos D5 e D6, localizados no painel de distribuição de alimentação do anemômetro EVERSHED?",
    "options": [
      "Retificar o sinal do síncro LINVAR.",
      "Retificar em meia onda o sinal de 10V / 400Hz.",
      "Funcionar como reguladores e estabilizadores de tensão.",
      "Detectar a correspondência de fase entre TX e CT.",
      "Isolar o circuito de velocidade do circuito de direção."
    ],
    "answer": "Funcionar como reguladores e estabilizadores de tensão."
  },
  {
    "question": "No anemômetro EVERSHED, qual ponto de teste é usado como referência (terra) para todas as outras medições?",
    "options": [
      "TP1.",
      "TP4.",
      "TP6.",
      "TP7.",
      "TP11."
    ],
    "answer": "TP6."
  },
  {
    "question": "Nos navios de origem Americana, os circuitos de anemômetros são identificados por quais designações?",
    "options": [
      "\"VA\" para velocidade absoluta e \"VR\" para velocidade relativa.",
      "\"HE\" para intensidade do vento e \"HD\" para direção do vento.",
      "\"WS\" (Wind Speed) e \"WD\" (Wind Direction).",
      "\"B1\" para velocidade e \"B2\" para direção.",
      "\"TX\" para intensidade e \"TR\" para direção."
    ],
    "answer": "\"HE\" para intensidade do vento e \"HD\" para direção do vento."
  },
  {
    "question": "Descreva as características visuais do anemômetro tipo B:",
    "options": [
      "Possui 1 hélice e 1 aleta aerodinâmica no mesmo suporte.",
      "É composto por 3 ou 4 cubas e uma aleta aerodinâmica montada em um suporte vertical.",
      "Conjunto transmissor de velocidade (com copos/cubas) e transmissor de direção (com aleta/cata-vento), alojados em suas respectivas unidades separadas.",
      "É caracterizado pela ausência de componentes móveis externos (estado sólido).",
      "Consiste em um tubo de Pitot e um catavento montados no mastro principal."
    ],
    "answer": "Conjunto transmissor de velocidade (com copos/cubas) e transmissor de direção (com aleta/cata-vento), alojados em suas respectivas unidades separadas."
  },
  {
    "question": "O dial de direção do vento do sistema do anemômetro tipo B é graduado em intervalos de:",
    "options": [
      "2º de 0º a 360º.",
      "5º de 0º a 180º.",
      "10º de 0º a 360º.",
      "15º de 0º a 360º.",
      "1º de 0º a 100º."
    ],
    "answer": "10º de 0º a 360º."
  },
  {
    "question": "Quais são as variações do anemômetro tipo B?",
    "options": [
      "MK-10 e MK-12.",
      "B1 e B2.",
      "TR6 e TR4.",
      "Tipo F e EVERSHED.",
      "Tipo A e Tipo C."
    ],
    "answer": "B1 e B2."
  },
  {
    "question": "No anemômetro tipo B, a iluminação para cada conjunto é feita por duas lâmpadas de:",
    "options": [
      "115 Volts ligadas em série.",
      "24 Volts ligadas em paralelo.",
      "12 Volts ligadas em série.",
      "6 Volts ligadas em paralelo.",
      "6 Volts ligadas em série."
    ],
    "answer": "6 Volts ligadas em paralelo."
  },
  {
    "question": "De que consiste o conjunto de direção do anemômetro tipo B?",
    "options": [
      "Um gerador de indução acoplado às cubas.",
      "Um motor de acompanhamento conectado a um LINVAR.",
      "Um Transmissor síncro (TX) acoplado diretamente a uma aleta (cata-vento).",
      "Um redutor de erros com engrenagens de 2000/1.",
      "Um Transformador de Controle (CT) acoplado ao motor FC."
    ],
    "answer": "Um Transmissor síncro (TX) acoplado diretamente a uma aleta (cata-vento)."
  },
  {
    "question": "De que consiste o conjunto de velocidade do anemômetro tipo B?",
    "options": [
      "Hélice aerodinâmica, gerador de indução e síncro TX.",
      "Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros.",
      "Tubo de Pitot, diafragma, amplificador PA-112 e indicadores síncronos.",
      "Aleta direcional, síncro LINVAR e motor de acompanhamento M2.",
      "Cubas, gerador de indução, síncro TR e engrenagens de 2,4:1."
    ],
    "answer": "Copos/cubas, integrador mecânico (rodete e discos de fricção), motor de frequência constante e transmissores síncros."
  },
  {
    "question": "Quais são as características visuais do anemômetro tipo F?",
    "options": [
      "3 ou 4 cubas e uma aleta aerodinâmica separadas.",
      "Tubo de Pitot e catavento de cauda dupla.",
      "Copos rotativos e síncro transmissor externo.",
      "1 hélice e 1 aleta aerodinâmica.",
      "Antena parabólica e sensor ultrassônico."
    ],
    "answer": "1 hélice e 1 aleta aerodinâmica."
  },
  {
    "question": "No servossistema de direção do anemômetro tipo F, são utilizados dois síncros indicadores do tipo:",
    "options": [
      "37TX6 e 31TX4.",
      "1HG e 1HCT.",
      "18TR6 e 18TR4.",
      "Síncro LINVAR e Gerador de Indução.",
      "PA-112 e PC-115A."
    ],
    "answer": "18TR6 e 18TR4."
  },
  {
    "question": "No anemômetro tipo F, o dial de velocidade é graduado em que intervalo?",
    "options": [
      "0 a 65 nós, em intervalos de 1 nó.",
      "0 a 75 nós, em intervalos de 2 nós.",
      "0 a 100 nós, em intervalos de 5 nós.",
      "0 a 150 nós, em intervalos de 10 nós.",
      "0 a 360 nós, em intervalos de 1 nó."
    ],
    "answer": "0 a 100 nós, em intervalos de 5 nós."
  },
  {
    "question": "Qual a finalidade de se utilizar a frequência de 400Hz no anemômetro tipo F?",
    "options": [
      "Para permitir o uso do integrador mecânico com discos de fricção.",
      "Para operar em conjunto com os computadores de bordo.",
      "Para alimentar diretamente as lâmpadas de iluminação de 6V.",
      "Para evitar a necessidade de retificação em meia onda no circuito.",
      "Para aumentar a velocidade de rotação das cubas em ventos fracos."
    ],
    "answer": "Para operar em conjunto com os computadores de bordo."
  },
  {
    "question": "Em uma determinada manobra, um navio que utiliza o anemômetro tipo F guinou 30º e verificou-se que o indicador de direção continuou girando indefinidamente. Qual foi a causa provável?",
    "options": [
      "Falta de realimentação (ausência do sinal de erro no circuito do servo de direção).",
      "O motor de frequência constante parou de funcionar.",
      "O vento estava exatamente alinhado ao eixo proa-popa (velocidade nula).",
      "O síncro LINVAR sofreu uma inversão de polaridade.",
      "As cubas e a aleta travaram fisicamente."
    ],
    "answer": "Falta de realimentação (ausência do sinal de erro no circuito do servo de direção)."
  },
  {
    "question": "Qual é a razão das engrenagens do acoplamento entre o transmissor ligado à hélice e o síncro receptor, no sistema tipo F?",
    "options": [
      "1:2,4.",
      "2000:1.",
      "1:12,5 (a cada uma revolução do síncro, a hélice gira 12,5 vezes).",
      "1:360.",
      "1:1 (acoplamento direto)."
    ],
    "answer": "1:12,5 (a cada uma revolução do síncro, a hélice gira 12,5 vezes)."
  },
  {
    "question": "Qual a principal característica que diferencia o integrador do anemômetro tipo F em relação ao tipo B?",
    "options": [
      "O tipo F utiliza exclusivamente engrenagens redutoras de 2000:1 em vez de um integrador.",
      "O tipo F possui um integrador mecânico idêntico ao tipo B, mas alimentado em 60Hz.",
      "** *(Adaptação conceitual)* O integrador mecânico (com rodete e discos de fricção) pertence essencialmente ao tipo B. No sistema tipo F, a conversão de movimentos proporcionais para indicação é feita eletronicamente (ou por integrador interno ao servo).",
      "O tipo F não converte movimentos rotativos em angulares.",
      "O tipo F usa o gerador de indução como integrador exclusivo."
    ],
    "answer": "** *(Adaptação conceitual)* O integrador mecânico (com rodete e discos de fricção) pertence essencialmente ao tipo B. No sistema tipo F, a conversão de movimentos proporcionais para indicação é feita eletronicamente (ou por integrador interno ao servo)."
  },
  {
    "question": "Qual é a alimentação principal do sistema de anemômetro EVERSHED?",
    "options": [
      "26V / 400Hz.",
      "115V / 60Hz.",
      "10V / 400Hz.",
      "115V / 400Hz.",
      "40VCA."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "Qual é a alimentação para o circuito de teste de velocidade do anemômetro EVERSHED?",
    "options": [
      "10 Volts oriundos de T1.",
      "115 Volts oriundos da chave S3.",
      "1 Volt oriundo do Transformador T2.",
      "26 Volts oriundos do síncro TX.",
      "40 VCA oriundos do LINVAR."
    ],
    "answer": "1 Volt oriundo do Transformador T2."
  },
  {
    "question": "Onde ficam localizados os pontos de testes do sistema do anemômetro EVERSHED?",
    "options": [
      "Na base do mastro principal, expostos.",
      "Diretamente na unidade transmissora de velocidade.",
      "No interior do integrador mecânico.",
      "No painel de controle / Unidade de Retransmissão (RTU).",
      "Nos terminais do motor de frequência constante."
    ],
    "answer": "No painel de controle / Unidade de Retransmissão (RTU)."
  },
  {
    "question": "Qual o propósito principal da Unidade de Retransmissão (RTU) do sistema EVERSHED?",
    "options": [
      "Iluminar os indicadores de direção no passadiço.",
      "Retificar toda a alimentação de 400Hz para 60Hz.",
      "Converter os fracos sinais de velocidade e direção do vento provenientes do detetor, tornando-os adequados e fortes o suficiente para os indicadores.",
      "Substituir o anemômetro em caso de falha elétrica no navio.",
      "Funcionar como redutor de erros mecânico para as cubas."
    ],
    "answer": "Converter os fracos sinais de velocidade e direção do vento provenientes do detetor, tornando-os adequados e fortes o suficiente para os indicadores."
  },
  {
    "question": "Como é graduado o dial de direção do vento do anemômetro EVERSHED?",
    "options": [
      "De 0 a 100 nós, com intervalos de 5 nós.",
      "De 0 a 360º (sendo 0 a 180º vermelho e 0 a 180º verde) com intervalos de 2 em 2º.",
      "De 0 a 360º com intervalos de 10º em 10º (tudo em branco).",
      "De 0 a 180º boreste (verde) e 0 a 180º bombordo (vermelho) com intervalos de 5 em 5º.",
      "De 0 a 65 nós, com intervalos de 1 nó."
    ],
    "answer": "De 0 a 360º (sendo 0 a 180º vermelho e 0 a 180º verde) com intervalos de 2 em 2º."
  },
  {
    "question": "Como é graduado o dial de velocidade do vento do anemômetro EVERSHED?",
    "options": [
      "0 a 65 nós com intervalo de 1 nó.",
      "0 a 100 nós com intervalo de 5 nós.",
      "0 a 150 nós com intervalo de 10 nós.",
      "0 a 75 nós com intervalo de 1 nó.",
      "0 a 50 nós com intervalo de 2 nós."
    ],
    "answer": "0 a 75 nós com intervalo de 1 nó."
  },
  {
    "question": "Cite os dispositivos do servo de velocidade do EVERSHED responsáveis pelo amortecimento das oscilações:",
    "options": [
      "Síncro LINVAR e motor M2.",
      "Transformador CT e potenciômetro RV4.",
      "Engrenagem redutora 2000/1 e potenciômetro RV3.",
      "Engrenagem redutora 2,4:1 e capacitor C3.",
      "Taco-gerador TG-2 e potenciômetro RV1."
    ],
    "answer": "Engrenagem redutora 2000/1 e potenciômetro RV3."
  },
  {
    "question": "Quantas e quais posições possui a chave de teste de velocidade do anemômetro EVERSHED?",
    "options": [
      "2 posições (ON e OFF).",
      "3 posições (RUN, TESTE BAIXO, TESTE ALTO).",
      "4 posições (RUN, 15, 30 e 45 nós).",
      "5 posições (0, 15, 30, 45 e 60 nós).",
      "4 posições (NORMAL, 0º, 120º BE, 120º BB)."
    ],
    "answer": "4 posições (RUN, 15, 30 e 45 nós)."
  },
  {
    "question": "No servo de direção do anemômetro EVERSHED, quando os sinais de entrada e saída do sistema estão em correspondência de fase, o sinal de saída do detector é de:",
    "options": [
      "115 Volts.",
      "40 Volts.",
      "10 Volts.",
      "0 Volts.",
      "26 Volts."
    ],
    "answer": "0 Volts."
  },
  {
    "question": "No anemômetro EVERSHED, podemos afirmar que o sinal que sai de um Transformador de Controle (CT) é um sinal do tipo:",
    "options": [
      "Mecânico.",
      "Hidráulico.",
      "Pneumático.",
      "Elétrico (sinal de erro).",
      "Acústico."
    ],
    "answer": "Elétrico (sinal de erro)."
  },
  {
    "question": "Quando verificamos o funcionamento do servo de direção do anemômetro EVERSHED e colocamos a chave de teste (S1) para a posição 2, estamos aplicando um sinal elétrico ao estator de um síncro:",
    "options": [
      "TX (Transmissor).",
      "TR (Receptor).",
      "LINVAR.",
      "CT (Transformador de Controle).",
      "CX (Transmissor de Controle)."
    ],
    "answer": "CT (Transformador de Controle)."
  },
  {
    "question": "Como se chama a informação que chega ao Transformador de Controle (CT), vinda diretamente do síncro transmissor (TX) do anemômetro tipo B?",
    "options": [
      "Sinal de erro.",
      "Sinal de velocidade.",
      "Sinal de direção.",
      "Sinal de amortecimento.",
      "Sinal de referência."
    ],
    "answer": "Sinal de direção."
  },
  {
    "question": "De que consiste o Anemômetro tipo B, em sua variação B2?",
    "options": [
      "Um transmissor, um painel e dois indicadores.",
      "Apenas um transmissor síncrono e um gerador.",
      "Um receptor e um transmissor.",
      "Tubo de Pitot e manômetro diferencial.",
      "Integrador mecânico e servo motor M2."
    ],
    "answer": "Um receptor e um transmissor."
  },
  {
    "question": "No sistema do anemômetro tipo B, a unidade síncrona que é diretamente acoplada à aleta (cata-vento) é um:",
    "options": [
      "Transformador de controle (CT).",
      "Receptor síncro (TR).",
      "Síncro LINVAR.",
      "Transmissor síncro (TX).",
      "Motor de acompanhamento."
    ],
    "answer": "Transmissor síncro (TX)."
  },
  {
    "question": "Em que situação a microchave localizada no conjunto de velocidade do anemômetro tipo B irá abrir o circuito do motor de frequência constante (FC)?",
    "options": [
      "Quando a direção do vento for superior a 180º.",
      "Quando a velocidade do vento for máxima (fundo de escala).",
      "Durante a realização do teste de lâmpadas.",
      "Quando a velocidade do vento for nula (zero).",
      "Apenas quando a tensão cair para menos de 10V."
    ],
    "answer": "Quando a velocidade do vento for nula (zero)."
  },
  {
    "question": "A unidade síncrona que transmite a informação de direção do vento para as repetidoras é um:",
    "options": [
      "TR.",
      "CT.",
      "TX.",
      "LINVAR.",
      "Motor M2."
    ],
    "answer": "TX."
  },
  {
    "question": "Qual dispositivo elétrico (potenciômetro) do anemômetro EVERSHED gera um sinal que se opõe ao sinal que aparece no resistor R11?",
    "options": [
      "RV1.",
      "RV2.",
      "RV3.",
      "RV4.",
      "RV5."
    ],
    "answer": "RV4."
  },
  {
    "question": "Qual é a alimentação específica para o painel de controle do anemômetro EVERSHED?",
    "options": [
      "26V / 400Hz.",
      "115V / 60Hz.",
      "115V / 400Hz.",
      "24V DC.",
      "10V / 400Hz."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "A iluminação para cada conjunto no anemômetro tipo B é feita por quantas lâmpadas e como elas são ligadas?",
    "options": [
      "Duas lâmpadas de 115 Volts ligadas em série.",
      "Duas lâmpadas de 12 Volts ligadas em paralelo.",
      "Quatro lâmpadas de 24 Volts ligadas em série.",
      "Duas lâmpadas de 6 Volts ligadas em paralelo.",
      "Duas lâmpadas de 6 Volts ligadas em série."
    ],
    "answer": "Duas lâmpadas de 6 Volts ligadas em paralelo."
  },
  {
    "question": "Quais os dois tipos de síncros que são posicionados pelo servo motor de direção do anemômetro tipo F?",
    "options": [
      "1HG e 1HCT.",
      "37TX6 e 31TX4.",
      "18TR6 e 18TR4.",
      "PA-112 e PC-115A.",
      "Síncro LINVAR e Síncro TX."
    ],
    "answer": "37TX6 e 31TX4."
  },
  {
    "question": "Cite a finalidade do componente DIAC do conjunto de direção do anemômetro tipo F:",
    "options": [
      "Acionar o motor de frequência constante.",
      "Atuar como sensor de direção do vento.",
      "Regular a tensão para o amplificador PC115A-101.",
      "Retificar a corrente alternada para os indicadores.",
      "Aumentar o fator de potência do circuito."
    ],
    "answer": "Regular a tensão para o amplificador PC115A-101."
  },
  {
    "question": "No conjunto de direção do anemômetro tipo B, qual componente atua como o detector de erro?",
    "options": [
      "Transmissor Síncro (TX).",
      "Gerador de Indução.",
      "Motor de Acompanhamento.",
      "Transformador de Controle (CT).",
      "Integrador Mecânico."
    ],
    "answer": "Transformador de Controle (CT)."
  },
  {
    "question": "No servo de velocidade do anemômetro EVERSHED, cite a função do componente LINVAR:",
    "options": [
      "Gerar o sinal elétrico de amortecimento.",
      "Acionar as cubas do transmissor.",
      "Funcionar como um transdutor (convertendo posição em sinal elétrico).",
      "Substituir o redutor de erros.",
      "Indicar a velocidade no passadiço."
    ],
    "answer": "Funcionar como um transdutor (convertendo posição em sinal elétrico)."
  },
  {
    "question": "No anemômetro EVERSHED, qual elemento físico é responsável por acionar o gerador de indução?",
    "options": [
      "O motor de frequência constante.",
      "O motor de acompanhamento.",
      "O síncro LINVAR.",
      "A aleta aerodinâmica.",
      "Os copos (cubas)."
    ],
    "answer": "Os copos (cubas)."
  },
  {
    "question": "Cite a principal diferença elétrica / operacional entre os sistemas de Anemômetro tipo B e tipo F:",
    "options": [
      "O tipo B utiliza válvulas termiônicas, e o tipo F é transistorizado.",
      "O tipo B mede apenas a direção, enquanto o tipo F mede direção e velocidade.",
      "A frequência de operação principal (o tipo B opera em 60Hz e o tipo F em 400Hz para computadores de bordo).",
      "O tipo B é alimentado por 24VDC, enquanto o F usa 115V.",
      "O tipo F não utiliza transmissores síncronos."
    ],
    "answer": "A frequência de operação principal (o tipo B opera em 60Hz e o tipo F em 400Hz para computadores de bordo)."
  },
  {
    "question": "Qual dispositivo no anemômetro EVERSHED trabalha como gerador de sinal de erro no servo de direção?",
    "options": [
      "Síncro CT do indicador.",
      "É o síncro TX da unidade detectora.",
      "Redutor de erros.",
      "Motor de acompanhamento.",
      "Amplificador PA-112."
    ],
    "answer": "É o síncro TX da unidade detectora."
  },
  {
    "question": "Qual é a função do motor de acompanhamento (M2) ou servo motor do anemômetro EVERSHED?",
    "options": [
      "Reposicionar o rotor do CT, reduzindo (anulando) o sinal de erro.",
      "Girar a antena do radar de navegação.",
      "Acionar o gerador de indução nas ausências de vento.",
      "Transmitir o sinal de 115V para a Praça de Máquinas.",
      "Gerar o amortecimento necessário ao LINVAR."
    ],
    "answer": "Reposicionar o rotor do CT, reduzindo (anulando) o sinal de erro."
  },
  {
    "question": "Qual a alimentação da Unidade de Retransmissão (RTU) do anemômetro EVERSHED?",
    "options": [
      "26V / 400Hz.",
      "115V / 60Hz.",
      "115V / 400Hz.",
      "10V / 400Hz.",
      "24V contínuos."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "Qual amplificador está incluído em cada um dos servos na RTU do anemômetro EVERSHED?",
    "options": [
      "PC115A.",
      "PA112.",
      "18TR6.",
      "31TX4.",
      "Amplificador operacional LM324."
    ],
    "answer": "PA112."
  },
  {
    "question": "Onde está instalado o subconjunto de velocidade do vento do anemômetro tipo B?",
    "options": [
      "No mastro principal, exposto ao tempo.",
      "Dentro da unidade indicadora no passadiço.",
      "No interior do motor de frequência constante.",
      "Na Praça de Comunicações Interiores (PCI).",
      "Acoplado diretamente ao tubo de Pitot."
    ],
    "answer": "Na Praça de Comunicações Interiores (PCI)."
  },
  {
    "question": "Cite a razão de acoplamento do rotor do síncro transmissor (TX) para a hélice do anemômetro tipo F:",
    "options": [
      "** 1:12,5 (a cada uma revolução do síncro, a hélice gira 12,5 vezes).",
      "2000:1.",
      "2,4:1.",
      "1:1.",
      "1:360."
    ],
    "answer": "** 1:12,5 (a cada uma revolução do síncro, a hélice gira 12,5 vezes)."
  },
  {
    "question": "Cite os tipos de manutenções realizadas nos sistemas de anemômetros:",
    "options": [
      "Predial e estrutural.",
      "Mecânica e hidráulica.",
      "Preventivas e corretivas.",
      "Diárias e semestrais estritamente.",
      "Eletrônica e de software."
    ],
    "answer": "Preventivas e corretivas."
  },
  {
    "question": "No anemômetro EVERSHED, qual a função da chave S4?",
    "options": [
      "Habilitar a alimentação de 115V / 400Hz.",
      "Habilitar a alimentação de 115V / 60Hz.",
      "Ligar a iluminação do painel (6V).",
      "Realizar o teste de velocidade de 30 nós.",
      "Comutar entre direção relativa e verdadeira."
    ],
    "answer": "Habilitar a alimentação de 115V / 60Hz."
  },
  {
    "question": "No anemômetro EVERSHED, qual a função da chave S3?",
    "options": [
      "Habilitar a alimentação de 115V / 400Hz.",
      "Habilitar a alimentação de 115V / 60Hz.",
      "Desligar o sistema em caso de emergência.",
      "Acionar o síncro LINVAR.",
      "Aplicar o sinal de 10V para o teste de direção."
    ],
    "answer": "Habilitar a alimentação de 115V / 400Hz."
  },
  {
    "question": "Onde está localizado o transformador de 115V/6V (iluminação) do anemômetro tipo B?",
    "options": [
      "Na unidade transmissora de velocidade.",
      "Na caixa de junção do mastro.",
      "Na Praça de Comunicações Interiores.",
      "Na unidade indicadora.",
      "Junto ao motor de frequência constante."
    ],
    "answer": "Na unidade indicadora."
  },
  {
    "question": "No contexto dos sistemas de medição de vento a bordo, defina o que é \"velocidade de recolhimento\":",
    "options": [
      "É a velocidade com que o anemômetro retrai sua antena.",
      "É a velocidade do vento aparente (vento relativo).",
      "É a velocidade à ré do navio.",
      "É a velocidade de cruzeiro ideal para manobras de helicóptero.",
      "É a velocidade do vento verdadeiro (True Wind)."
    ],
    "answer": "É a velocidade à ré do navio."
  },
  {
    "question": "Descreva as partes componentes da unidade transmissora do anemômetro tipo B:",
    "options": [
      "Unidade indicadora e RTU.",
      "Hélice e aleta conjugadas no mesmo invólucro.",
      "Tubo de Pitot e manômetro diferencial.",
      "Síncro LINVAR e gerador de indução.",
      "Subconjunto de direção e subconjunto de velocidade."
    ],
    "answer": "Subconjunto de direção e subconjunto de velocidade."
  },
  {
    "question": "Geralmente, onde está localizada a unidade transmissora do anemômetro tipo B?",
    "options": [
      "No passadiço.",
      "Na Praça de Comunicações Interiores (PCI).",
      "No mastro principal (detector).",
      "No tijupá.",
      "Na Praça de Máquinas."
    ],
    "answer": "Na Praça de Comunicações Interiores (PCI)."
  },
  {
    "question": "Em que situação o indicador de velocidade e o indicador de direção do vento ficarão estacionados na posição zero?",
    "options": [
      "Quando a chave S4 estiver em OFF.",
      "Quando ocorrer uma pane na alimentação de 400Hz.",
      "Velocidade: quando as cubas estiverem paradas; Direção: quando o catavento estiver alinhado no sentido proa-popa do navio.",
      "Quando a velocidade do vento exceder o fundo de escala e a direção for variável.",
      "Quando o integrador mecânico estiver desacoplado e o redutor de erro desativado."
    ],
    "answer": "Velocidade: quando as cubas estiverem paradas; Direção: quando o catavento estiver alinhado no sentido proa-popa do navio."
  },
  {
    "question": "No anemômetro EVERSHED, qual a função dos potenciômetros RV3 e RV4, respectivamente?",
    "options": [
      "RV3: Amortecimento do servo de direção; RV4: Amortecimento do servo de velocidade.",
      "RV3: Sensibilidade do servo de direção; RV4: Calibrador do mostrador (zero).",
      "RV3: Amortecimento do servo de velocidade; RV4: Ajuste do zero / Calibrador do mostrador.",
      "RV3: Calibrador do mostrador; RV4: Sensibilidade do LINVAR.",
      "RV3: Ajuste de ganho; RV4: Ajuste de fase."
    ],
    "answer": "RV3: Amortecimento do servo de velocidade; RV4: Ajuste do zero / Calibrador do mostrador."
  },
  {
    "question": "Cite o dispositivo do anemômetro EVERSHED que produz um sinal proporcional ao ângulo do vento e indique sua alimentação:",
    "options": [
      "CT / 115V 400Hz.",
      "LINVAR / 60V 400Hz.",
      "Gerador de indução / 26V 400Hz.",
      "Síncro TX / 26V 400Hz.",
      "Redutor de erros / 10V 400Hz."
    ],
    "answer": "Síncro TX / 26V 400Hz."
  },
  {
    "question": "Qual a finalidade da unidade de retransmissão (RTU) do anemômetro EVERSHED?",
    "options": [
      "Multiplicar a frequência de 60Hz para 400Hz.",
      "Iluminar os mostradores de 0 a 75 nós.",
      "Converter os fracos sinais de velocidade e direção vindos do detector para que possam acionar os indicadores.",
      "Retransmitir as informações meteorológicas via rádio.",
      "Alimentar diretamente os motores de acompanhamento com 115V DC."
    ],
    "answer": "Converter os fracos sinais de velocidade e direção vindos do detector para que possam acionar os indicadores."
  },
  {
    "question": "Um militar, ao ligar o anemômetro EVERSHED, observou que os indicadores de velocidade começaram a girar sem conseguir parar em uma marcação fixa. Cite as prováveis causas dessa avaria:",
    "options": [
      "Travamento mecânico do eixo do redutor de erros e oxidação nos terminais do motor.",
      "Falta de alimentação para o síncro LINVAR, avaria no diodo D4 ou curto-circuito no capacitor C7.",
      "Rompimento da correia do integrador mecânico.",
      "Avaria no transformador T1 cortando os 10V / 400Hz.",
      "Sobretensão causada pelos diodos reguladores D5 e D6."
    ],
    "answer": "Falta de alimentação para o síncro LINVAR, avaria no diodo D4 ou curto-circuito no capacitor C7."
  },
  {
    "question": "Qual a função específica do potenciômetro RV2 do anemômetro EVERSHED?",
    "options": [
      "Amortecimento do servo de velocidade.",
      "Ajuste do zero da velocidade.",
      "Amortecimento do servo de direção.",
      "Sensibilidade do servo de velocidade.",
      "Regulação de voltagem do amplificador PA112."
    ],
    "answer": "Amortecimento do servo de direção."
  },
  {
    "question": "Cite a função dos diodos D5 e D6, localizados no painel de distribuição de alimentação do anemômetro EVERSHED:",
    "options": [
      "Atuam como retificadores de onda completa para o sistema.",
      "Desviam a corrente do LINVAR para o terra (TP6).",
      "Funcionam como reguladores e estabilizadores de tensão.",
      "Impedem a inversão de fase no síncro CT.",
      "Protegem o transformador T1 contra sobrecarga."
    ],
    "answer": "Funcionam como reguladores e estabilizadores de tensão."
  },
  {
    "question": "Qual a finalidade do diodo 1 (D1) no servo de velocidade do anemômetro EVERSHED?",
    "options": [
      "Regular a voltagem do sistema.",
      "Retificar em meia onda o sinal de 10V / 400Hz oriundo do transformador T1.",
      "Retificar em onda completa a saída do gerador de indução.",
      "Funcionar como um zener para o LINVAR.",
      "Eliminar o ruído de alta frequência do motor de acompanhamento."
    ],
    "answer": "Retificar em meia onda o sinal de 10V / 400Hz oriundo do transformador T1."
  },
  {
    "question": "O rotor do síncro LINVAR do sistema EVERSHED é comandado (movimentado) mecanicamente pela(o):",
    "options": [
      "Redutor de erros (engrenagem ligada ao motor de acompanhamento).",
      "Gerador de indução.",
      "Taco-gerador TG1.",
      "Eixo direto da hélice / cubas.",
      "Integrador mecânico através do rodete."
    ],
    "answer": "Redutor de erros (engrenagem ligada ao motor de acompanhamento)."
  },
  {
    "question": "O transmissor de direção do vento localizado na unidade detectora do sistema de anemômetro EVERSHED é um síncro do tipo:",
    "options": [
      "CT.",
      "TR.",
      "CX.",
      "TX.",
      "LINVAR."
    ],
    "answer": "TX."
  },
  {
    "question": "Quais são as posições da chave de teste de velocidade do sistema de anemômetro EVERSHED?",
    "options": [
      "ON e OFF.",
      "NORMAL, 0º, 120º e 240º.",
      "RUN, 15, 30 e 45 nós.",
      "0, 10, 20, 30, 40 nós.",
      "RUN e TEST."
    ],
    "answer": "RUN, 15, 30 e 45 nós."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, a informação primária da velocidade do vento (no detector) é fornecida por um:",
    "options": [
      "Síncro TX.",
      "Transformador de Controle (CT).",
      "Taco-gerador TG2.",
      "Gerador de indução.",
      "LINVAR."
    ],
    "answer": "Gerador de indução."
  },
  {
    "question": "O termo \"velocidade de recolhimento\" refere-se à velocidade do vento:",
    "options": [
      "Aparente ao longo do convoo.",
      "Verdadeira independente do movimento do navio.",
      "Medida a vante da proa.",
      "Relativa lateral ao navio.",
      "À ré do navio."
    ],
    "answer": "À ré do navio."
  },
  {
    "question": "No sistema EVERSHED, no servo de direção, quando os sinais de entrada e saída do sistema estão em correspondência de fase, o sinal de saída do detector (CT) é de:",
    "options": [
      "115 Volts.",
      "26 Volts.",
      "10 Volts.",
      "0 (Zero) Volts.",
      "60 Volts."
    ],
    "answer": "0 (Zero) Volts."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, no servo de direção, ao deslocarmos a chave S1 (chave de teste) da posição \"NORMAL\" para as posições de teste, estamos aplicando um sinal de _______ ao estator do CT.",
    "options": [
      "115 V / 400Hz.",
      "26 V / 400Hz.",
      "10 V / 400Hz.",
      "60 V / 400Hz.",
      "40 VCA."
    ],
    "answer": "10 V / 400Hz."
  },
  {
    "question": "Ao verificarmos o funcionamento do servo de direção do sistema EVERSHED e colocarmos a chave S1 para a posição 2, estamos aplicando um sinal elétrico ao estator de um síncro do tipo:",
    "options": [
      "TX.",
      "CX.",
      "TR.",
      "LINVAR.",
      "CT."
    ],
    "answer": "CT."
  },
  {
    "question": "Qual a finalidade dos diodos D5 e D6 do painel de distribuição de alimentação do anemômetro EVERSHED?",
    "options": [
      "Osciladores de frequência.",
      "Retificadores de onda completa.",
      "Reguladores de voltagem / estabilizadores.",
      "Divisores de tensão para o LINVAR.",
      "Filtros de harmônicas de 400Hz."
    ],
    "answer": "Reguladores de voltagem / estabilizadores."
  },
  {
    "question": "Analisando o diagrama do EVERSHED, qual a finalidade da alimentação de 1 volt oriunda do Transformador T2?",
    "options": [
      "Alimentar as lâmpadas do painel.",
      "Ajuste do zero e calibração fina no teste de velocidade.",
      "Exitar o gerador de indução nas partidas.",
      "Polarizar os amplificadores operacionais.",
      "Fornecer referência para o CT."
    ],
    "answer": "Ajuste do zero e calibração fina no teste de velocidade."
  },
  {
    "question": "No sistema de anemômetro das fragatas, podemos afirmar que o sinal que sai do Transmissor de Controle (CX) é um sinal:",
    "options": [
      "Acústico.",
      "Pneumático.",
      "Digital.",
      "Mecânico.",
      "Elétrico."
    ],
    "answer": "Elétrico."
  },
  {
    "question": "No sistema de anemômetro das fragatas, o dispositivo que retifica o sinal alternado gerado pelo LINVAR é a ponte de diodos:",
    "options": [
      "D1.",
      "D2.",
      "D4.",
      "D5.",
      "D6."
    ],
    "answer": "D4."
  },
  {
    "question": "A alimentação elétrica do síncro LINVAR do sistema de anemômetro EVERSHED é de:",
    "options": [
      "115V / 400Hz.",
      "115V / 60Hz.",
      "26V / 400Hz.",
      "60V / 400Hz.",
      "10V / 400Hz."
    ],
    "answer": "60V / 400Hz."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, no servo de direção, qual componente atua especificamente como o detector de erros do circuito?",
    "options": [
      "Gerador de indução.",
      "Síncro CT (Transformador de Controle).",
      "Síncro TX (Transmissor).",
      "Motor de acompanhamento.",
      "Síncro LINVAR."
    ],
    "answer": "Síncro CT (Transformador de Controle)."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, o sinal que alimenta normalmente o estator de um Transformador de Controle (CT) é um:",
    "options": [
      "Sinal elétrico proveniente diretamente do amplificador.",
      "Sinal mecânico do redutor de erros.",
      "Sinal elétrico vindo do transmissor (TX) da unidade detectora.",
      "Sinal retificado pela ponte D4.",
      "Sinal de 60V / 400Hz."
    ],
    "answer": "Sinal elétrico vindo do transmissor (TX) da unidade detectora."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, no servo de direção, o componente que rotaciona fisicamente o eixo do CT para anular o sinal de erro é o:",
    "options": [
      "Síncro TR.",
      "Servomotor (através do redutor de erros).",
      "Gerador de indução.",
      "Taco-gerador.",
      "Potenciômetro RV1."
    ],
    "answer": "Servomotor (através do redutor de erros)."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, no servo de direção, o componente mecânico que interliga o servomotor aos transmissores e ao CT para movimentá-los é o:",
    "options": [
      "Tubo de Pitot.",
      "Acoplamento magnético.",
      "Integrador mecânico com discos de fricção.",
      "Redutor de erros (conjunto de engrenagens).",
      "Cames de posicionamento."
    ],
    "answer": "Redutor de erros (conjunto de engrenagens)."
  },
  {
    "question": "O indicador de velocidade do vento do sistema de anemômetro EVERSHED é graduado de zero a:",
    "options": [
      "** 75 nós, com intervalos de 1 nó.",
      "65 nós, com intervalos de 1 nó.",
      "100 nós, com intervalos de 5 nós.",
      "150 nós, com intervalos de 10 nós.",
      "75 nós, com intervalos de 5 nós."
    ],
    "answer": "** 75 nós, com intervalos de 1 nó."
  },
  {
    "question": "O termo “velocidade do vento de lançamento”, usado especificamente nas operações das fragatas, refere-se à velocidade do vento:",
    "options": [
      "Aparente ao longo do convoo.",
      "Direcionada 90º por boreste.",
      "50 a 200 pés a vante do navio.",
      "Verdadeira calculada pelo computador de bordo.",
      "A ré do navio."
    ],
    "answer": "50 a 200 pés a vante do navio."
  },
  {
    "question": "No anemômetro das fragatas, a unidade síncro que envia um sinal elétrico para a unidade de correção de dados do vento (para cálculo de vento verdadeiro) é alimentada com:",
    "options": [
      "26V / 400Hz.",
      "10V / 400Hz.",
      "60V / 400Hz.",
      "115V / 400Hz.",
      "115V / 60Hz."
    ],
    "answer": "115V / 400Hz."
  },
  {
    "question": "No sistema de anemômetro das fragatas, o dispositivo elétrico variável cujo sinal de tensão se opõe ao sinal que aparece no resistor R11 é o:",
    "options": [
      "Potenciômetro RV1.",
      "Potenciômetro RV2.",
      "Potenciômetro RV3.",
      "Potenciômetro RV4.",
      "Potenciômetro RV5."
    ],
    "answer": "Potenciômetro RV4."
  },
  {
    "question": "No sistema de anemômetro das fragatas, a informação de direção do vento para fins de controle e amortecimento é enviada (e ajustada) ao amplificador através de dois potenciômetros denominados:",
    "options": [
      "RV3 e RV4.",
      "RV1 e RV2.",
      "RV2 e RV3.",
      "RV4 e RV5.",
      "RV1 e RV5."
    ],
    "answer": "RV1 e RV2."
  },
  {
    "question": "Quanto aos sistemas de anemômetros leves utilizados na Marinha, quantos tipos principais (sem contar o EVERSHED) existem?",
    "options": [
      "Um (Apenas o Tipo B).",
      "Dois (Tipo B e Tipo F).",
      "Três (Tipos B, F e K).",
      "Quatro (MK-1, MK-2, Tipo B e Tipo F).",
      "Vários modelos eletrônicos sem partes móveis."
    ],
    "answer": "Dois (Tipo B e Tipo F)."
  },
  {
    "question": "A alimentação de 26V / 400Hz do anemômetro EVERSHED é destinada especificamente para:",
    "options": [
      "A iluminação dos indicadores no passadiço.",
      "O motor de acompanhamento (servo motor) de velocidade.",
      "O síncro transmissor (TX) de direção do vento.",
      "O amplificador PA-112 da Unidade de Retransmissão.",
      "O transformador T2 de teste."
    ],
    "answer": "O síncro transmissor (TX) de direção do vento."
  },
  {
    "question": "O painel de controle do anemômetro EVERSHED é alimentado com:",
    "options": [
      "24V DC.",
      "26V / 400Hz.",
      "115V / 60Hz.",
      "115V / 400Hz (do navio).",
      "10V / 400Hz."
    ],
    "answer": "115V / 400Hz (do navio)."
  },
  {
    "question": "Indicador, transmissor (ou detetor) e unidade de retransmissão são componentes básicos de um sistema de:",
    "options": [
      "Odômetro.",
      "Girobússola.",
      "Anemômetro.",
      "Radar de Navegação.",
      "Ecobatímetro."
    ],
    "answer": "Anemômetro."
  },
  {
    "question": "A presença de um conjunto detector visualmente composto por três ou quatro cubas giratórias e uma aleta aerodinâmica montada no mesmo suporte vertical é característica do anemômetro:",
    "options": [
      "Tipo B.",
      "Tipo F.",
      "SAL-24.",
      "Tipo MK-1.",
      "EVERSHED."
    ],
    "answer": "EVERSHED."
  },
  {
    "question": "O princípio de funcionamento do detector de velocidade do vento no anemômetro EVERSHED é baseado no:",
    "options": [
      "Sensor piezoelétrico.",
      "Síncro LINVAR.",
      "Gerador de indução.",
      "Taco-gerador DC.",
      "Transformador de Controle (CT)."
    ],
    "answer": "Gerador de indução."
  },
  {
    "question": "O potenciômetro RV2 ajusta o _________ do servo de direção do sistema de anemômetro EVERSHED.",
    "options": [
      "Ganho de tensão.",
      "Zero elétrico.",
      "Fator de potência.",
      "Amortecimento (feedback para reduzir overshoot).",
      "Valor da tensão de saída para 26V."
    ],
    "answer": "Amortecimento (feedback para reduzir overshoot)."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, no servo de direção, qual componente compara o sinal de saída (posição atual) com o sinal de entrada (posição comandada)?",
    "options": [
      "O síncro LINVAR.",
      "O Transformador de Controle (CT).",
      "O motor de acompanhamento.",
      "O redutor de erros.",
      "O gerador de indução."
    ],
    "answer": "O Transformador de Controle (CT)."
  },
  {
    "question": "O detector do sistema de anemômetro EVERSHED produz um sinal elétrico de saída proporcional à posição _________ da aleta, em relação à linha Proa-Popa do navio.",
    "options": [
      "Rotativa contínua.",
      "Angular.",
      "Vertical.",
      "Linear.",
      "De inclinação lateral."
    ],
    "answer": "Angular."
  },
  {
    "question": "O detector do sistema de anemômetro EVERSHED produz um sinal elétrico CA de saída de voltagem _________ à velocidade do fluxo de ar passando pelas cubas do anemômetro.",
    "options": [
      "Inversamente proporcional.",
      "Logarítmica em relação.",
      "Exponencial.",
      "Independente.",
      "Proporcional."
    ],
    "answer": "Proporcional."
  },
  {
    "question": "O servo de direção do EVERSHED tem o propósito de converter os _________ sinais de direção do vento provenientes do detector em sinais fortes o suficiente para acionar os indicadores.",
    "options": [
      "Distorcidos.",
      "Oscilantes.",
      "Fortes.",
      "Fracos.",
      "Mecânicos."
    ],
    "answer": "Fracos."
  },
  {
    "question": "No servo de direção do anemômetro EVERSHED, o dispositivo que fisicamente atua / funciona como o detector de erro do circuito é o:",
    "options": [
      "TX.",
      "TR.",
      "CT (Transformador de Controle).",
      "Gerador de indução.",
      "Taco-gerador TG2."
    ],
    "answer": "CT (Transformador de Controle)."
  },
  {
    "question": "Qual é a função primordial do síncro LINVAR no servo de velocidade do sistema de anemômetro EVERSHED?",
    "options": [
      "Atuar como regulador de tensão.",
      "Acionar as cubas do anemômetro.",
      "Funcionar como um transdutor.",
      "Alimentar o Transformador de Controle.",
      "Gerar o sinal de 115V / 400Hz."
    ],
    "answer": "Funcionar como um transdutor."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, a voltagem CA (corrente alternada) proporcional à velocidade do vento é desenvolvida em qual unidade do detector?",
    "options": [
      "No motor síncrono M2.",
      "No Transformador de Controle (CT).",
      "No síncro LINVAR.",
      "No Taco-gerador TG1.",
      "No Gerador de Indução."
    ],
    "answer": "No Gerador de Indução."
  },
  {
    "question": "Qual dispositivo da unidade detectora do anemômetro EVERSHED é acionado fisicamente pela rotação dos copos (cubas)?",
    "options": [
      "Transformador de Controle (CT).",
      "Gerador de indução.",
      "Transmissor Síncro (TX).",
      "Taco-gerador TG2.",
      "Integrador mecânico com discos de fricção."
    ],
    "answer": "Gerador de indução."
  },
  {
    "question": "No anemômetro EVERSHED, no sistema global do servo de direção, qual dispositivo primário trabalha como \"gerador\" da informação (sinal de erro original)?",
    "options": [
      "O motor de acompanhamento (servo motor).",
      "O Transmissor Síncro (TX) da unidade detectora.",
      "O Síncro Receptor (TR) das repetidoras.",
      "O Redutor de Erros.",
      "O Taco-gerador."
    ],
    "answer": "O Transmissor Síncro (TX) da unidade detectora."
  },
  {
    "question": "No anemômetro EVERSHED, quais dispositivos ficarão sem alimentação caso ocorra uma falha no Transformador T1?",
    "options": [
      "O painel de iluminação, os indicadores de direção e o síncro LINVAR.",
      "Apenas as chaves de teste S3 e S4.",
      "O amplificador de potência, o circuito de teste de direção, o Transmissor (TX) do detector de direção e o diodo D1.",
      "O motor de frequência constante e a chave de limite inferior.",
      "O gerador de indução (ficará inoperante)."
    ],
    "answer": "O amplificador de potência, o circuito de teste de direção, o Transmissor (TX) do detector de direção e o diodo D1."
  },
  {
    "question": "Qual é a finalidade geral da Unidade de Retransmissão (RTU) no anemômetro EVERSHED?",
    "options": [
      "Retificar o sinal de 115V AC para 24V DC.",
      "Converter os fracos sinais elétricos de direção e velocidade originários da unidade detectora, adequando-os em potência para comandar os indicadores do navio.",
      "Realizar o somatório vetorial entre o vento verdadeiro e o vento aparente.",
      "Atuar como repetidora mestre no passadiço.",
      "Proteger o circuito contra curtos-circuitos utilizando fusíveis FS1 e FS2."
    ],
    "answer": "Converter os fracos sinais elétricos de direção e velocidade originários da unidade detectora, adequando-os em potência para comandar os indicadores do navio."
  },
  {
    "question": "No servo de direção do anemômetro EVERSHED, qual o dispositivo responsável por reposicionar mecanicamente o rotor do CT, com o objetivo de anular (reduzir a zero) o sinal de erro?",
    "options": [
      "Gerador de Indução.",
      "Integrador Mecânico.",
      "Taco-gerador TG2.",
      "Motor de acompanhamento M2 (Servo motor).",
      "Síncro LINVAR."
    ],
    "answer": "Motor de acompanhamento M2 (Servo motor)."
  },
  {
    "question": "No anemômetro EVERSHED, de onde é extraída a alimentação de 26V / 400Hz para o Transmissor Síncro (TX) do detector no circuito de direção do vento?",
    "options": [
      "Da saída do amplificador PA-112.",
      "Do painel de distribuição principal do navio.",
      "Da ponte retificadora D4.",
      "Do transformador T2.",
      "Do enrolamento secundário do transformador T1."
    ],
    "answer": "Do enrolamento secundário do transformador T1."
  },
  {
    "question": "Quais são as três alimentações elétricas (tensões e frequências) requeridas / disponíveis para o funcionamento do sistema anemômetro EVERSHED?",
    "options": [
      "115V / 60Hz, 220V / 60Hz e 24V DC.",
      "115V / 400Hz, 115V / 60Hz e 26V / 400Hz.",
      "115V / 400Hz, 10V / 400Hz e 6V DC.",
      "220V / 400Hz, 400V / 60Hz e 24V DC.",
      "115V / 60Hz, 26V / 60Hz e 12V DC."
    ],
    "answer": "115V / 400Hz, 115V / 60Hz e 26V / 400Hz."
  },
  {
    "question": "No servo de direção do anemômetro EVERSHED, descreva a função dos potenciômetros RV1 e RV2 e do Taco-gerador (TG-2), respectivamente:",
    "options": [
      "RV1: Ajusta o zero; RV2: Amortecimento; TG-2: Filtra o ruído da rede.",
      "RV1: Amortecimento; RV2: Sensibilidade; TG-2: Converte o sinal em graus.",
      "RV1: Ajusta a sensibilidade; RV2: Fornece feedback (amortecimento) para reduzir overshoot; TG-2: Gera um sinal elétrico proporcional à rotação para auxiliar no amortecimento.",
      "RV1: Ajuste de ganho; RV2: Ajuste de voltagem; TG-2: Aciona o Síncro TX.",
      "RV1: Teste baixo; RV2: Teste alto; TG-2: Integra o movimento mecânico."
    ],
    "answer": "RV1: Ajusta a sensibilidade; RV2: Fornece feedback (amortecimento) para reduzir overshoot; TG-2: Gera um sinal elétrico proporcional à rotação para auxiliar no amortecimento."
  },
  {
    "question": "No servo de velocidade do anemômetro EVERSHED, qual é a função dos componentes: Potenciômetro RV4, Potenciômetro RV3 e síncro LINVAR, respectivamente?",
    "options": [
      "RV4: Sensibilidade; RV3: Zero; LINVAR: Gerador de sinal.",
      "RV4: Amortecimento; RV3: Sensibilidade; LINVAR: Acionador mecânico.",
      "RV4: Ajuste do limite superior; RV3: Ajuste do limite inferior; LINVAR: Integrador.",
      "RV4: Calibrador do mostrador (Ajuste do zero); RV3: Amortecimento; LINVAR: Transdutor.",
      "RV4: Alimentação do painel; RV3: Regulação de tensão; LINVAR: Retificador."
    ],
    "answer": "RV4: Calibrador do mostrador (Ajuste do zero); RV3: Amortecimento; LINVAR: Transdutor."
  },
  {
    "question": "No anemômetro EVERSHED, cite o dispositivo que produz um sinal elétrico proporcional ao ângulo do vento e indique sua alimentação específica:",
    "options": [
      "Gerador de indução, alimentado por 10V / 400Hz.",
      "Síncro transmissor de direção (TX), alimentado por 26V / 400Hz.",
      "Transformador de controle (CT), alimentado por 115V / 400Hz.",
      "Taco-gerador (TG), alimentado por 60V / 400Hz.",
      "Síncro receptor (TR), alimentado por 24V DC."
    ],
    "answer": "Síncro transmissor de direção (TX), alimentado por 26V / 400Hz."
  },
  {
    "question": "No anemômetro EVERSHED, cite o potenciômetro que ajusta o amortecimento do servo de velocidade e indique a função principal do síncro LINVAR:",
    "options": [
      "RV1 faz o amortecimento e o LINVAR atua como amplificador.",
      "RV2 faz o amortecimento e o LINVAR atua como transmissor de direção.",
      "RV3 faz o amortecimento e o LINVAR funciona como um transdutor.",
      "RV4 faz o amortecimento e o LINVAR funciona como um retificador.",
      "RV5 faz o amortecimento e o LINVAR converte a corrente em contínua."
    ],
    "answer": "RV3 faz o amortecimento e o LINVAR funciona como um transdutor."
  },
  {
    "question": "No anemômetro EVERSHED, quais são os potenciômetros responsáveis pelo ajuste da sensibilidade e do amortecimento, respectivamente, no servo de direção?",
    "options": [
      "RV3 e RV4.",
      "RV4 e RV5.",
      "RV2 e RV1.",
      "RV1 e RV2.",
      "RV1 e RV3."
    ],
    "answer": "RV1 e RV2."
  },
  {
    "question": "Descreva a característica visual do sensor de velocidade do vento do anemômetro EVERSHED e o seu princípio de funcionamento básico:",
    "options": [
      "É composto por um tubo de Pitot. Funciona medindo a pressão diferencial do ar gerada no deslocamento.",
      "Consiste em 1 hélice e 1 aleta (aerodinâmica). Funciona através de pulsos ultrassônicos.",
      "Possui um conjunto de 3 ou 4 cubas (copos) montadas num suporte vertical. O gerador de indução acionado pelas cubas produz um sinal elétrico de saída proporcional à velocidade do vento.",
      "É uma antena radar doppler que mede o arrasto das nuvens e converte em velocidade através do LINVAR.",
      "Possui discos de fricção acoplados a um motor de frequência constante que realizam a integração mecânica."
    ],
    "answer": "Possui um conjunto de 3 ou 4 cubas (copos) montadas num suporte vertical. O gerador de indução acionado pelas cubas produz um sinal elétrico de saída proporcional à velocidade do vento."
  },
  {
    "question": "Defina qual o propósito da Unidade de Retransmissão (RTU) do anemômetro EVERSHED e sua localização a bordo das Fragatas Classe Niterói:",
    "options": [
      "Retificar a energia. Localização: Praça de Máquinas.",
      "Processar os dados de navegação por inércia. Localização: Passadiço.",
      "Converter os fracos sinais de velocidade e direção do vento provenientes do detector, tornando-os adequados para comandar os indicadores nas diversas posições do navio. Localização: C.O.C. (Centro de Operações de Combate).",
      "Integrar os sinais do giroscópio. Localização: Praça de Comunicações Interiores.",
      "Acionar o alarme de mau tempo. Localização: Tijupá."
    ],
    "answer": "Converter os fracos sinais de velocidade e direção do vento provenientes do detector, tornando-os adequados para comandar os indicadores nas diversas posições do navio. Localização: C.O.C. (Centro de Operações de Combate)."
  },
  {
    "question": "Descreva a finalidade principal de um anemômetro e quais são os tipos básicos tradicionalmente utilizados na Marinha do Brasil:",
    "options": [
      "Fornece a temperatura e umidade relativa do ar. Tipos: Mercurial e Aneroide.",
      "Fornece indicações contínuas ou instantâneas da intensidade (em nós) e da direção (em graus) do vento. Tipos básicos: Tipo B, Tipo F e Tipo EVERSHED.",
      "Indica o rumo verdadeiro do navio. Tipos: MK-10 e MK-12.",
      "Mede a profundidade da água abaixo da quilha. Tipos: Doppler e Acústico.",
      "Afere a velocidade do navio em relação à água. Tipos: SAL-24 e Eletromagnético."
    ],
    "answer": "Fornece indicações contínuas ou instantâneas da intensidade (em nós) e da direção (em graus) do vento. Tipos básicos: Tipo B, Tipo F e Tipo EVERSHED."
  },
  {
    "question": "Descreva as partes componentes gerais que caracterizam o sistema de anemômetro leve usado na Marinha e a função básica de cada uma delas:",
    "options": [
      "1- Tubo de Pitot (detecta pressão); 2- Mangueiras (conduzem pressão); 3- Mostradores analógicos (exibem pressão diferencial).",
      "1- Transdutor ultrassônico (envia pings); 2- Oscilador (gera frequência); 3- Receptor (recebe ecos).",
      "1- Conjunto anemômetro/catavento (unidade detectora usada para medir a velocidade e direção do vento); 2- Unidade de retransmissão / RTU (usada para amplificar os sinais fracos do detector); 3- Receptores e indicadores (exibem as leituras de velocidade e direção do vento nos conveses).",
      "1- Bomba hidráulica (pressuriza o sistema); 2- Atuadores (rotacionam as hastes); 3- Válvulas solenoides (liberam fluido).",
      "1- Antena rotativa (emite radiação eletromagnética); 2- Guia de onda (transmite o sinal); 3- Unidade de Varredura (mostra ecos de chuva)."
    ],
    "answer": "1- Conjunto anemômetro/catavento (unidade detectora usada para medir a velocidade e direção do vento); 2- Unidade de retransmissão / RTU (usada para amplificar os sinais fracos do detector); 3- Receptores e indicadores (exibem as leituras de velocidade e direção do vento nos conveses)."
  },
  {
    "question": "Qual é o tipo de anemômetro tradicionalmente usado (de uso geral) nas Fragatas classe Niterói (MK-10)?",
    "options": [
      "SAL-24.",
      "Tipo B.",
      "Tipo F.",
      "EVERSHED.",
      "Ultrassônico MK-1."
    ],
    "answer": "EVERSHED."
  },
  {
    "question": "Qual dispositivo do anemômetro EVERSHED produz um sinal proporcional ao ângulo do vento detectado?",
    "options": [
      "Taco-gerador TG2.",
      "Gerador de indução.",
      "Transformador de Controle (CT).",
      "Síncro LINVAR.",
      "Síncro transmissor de direção (TX)."
    ],
    "answer": "Síncro transmissor de direção (TX)."
  },
  {
    "question": "No anemômetro EVERSHED, o indicador no passadiço possui receptores combinados para indicação de intensidade e direção do vento. Como são feitas as graduações destes mostradores e seus intervalos?",
    "options": [
      "Direção: 0 a 360º (intervalo de 1º); Intensidade: 0 a 100 nós (intervalo de 5 nós).",
      "Direção: 0 a 360º, sendo 0 a 180º vermelho (bombordo) e 0 a 180º verde (boreste) com intervalos de 2 em 2 graus; Intensidade: 0 a 75 nós com intervalo de 1 nó.",
      "Direção: 0 a 180º boreste e 0 a 180º bombordo (intervalo de 5º); Intensidade: 0 a 65 nós com intervalo de 2 nós.",
      "Direção: 0 a 360º contínuo; Intensidade: 0 a 150 nós contínuo.",
      "Direção: de 10 em 10 graus; Intensidade: de 5 em 5 nós."
    ],
    "answer": "Direção: 0 a 360º, sendo 0 a 180º vermelho (bombordo) e 0 a 180º verde (boreste) com intervalos de 2 em 2 graus; Intensidade: 0 a 75 nós com intervalo de 1 nó."
  },
  {
    "question": "Quais os dispositivos do servo de velocidade do anemômetro EVERSHED são os grandes responsáveis físicos pelo amortecimento das oscilações do sistema?",
    "options": [
      "Capacitor C3 e resistência R14.",
      "Engrenagem redutora 2,4:1 e potenciômetro RV1.",
      "Motor M2 e síncro LINVAR.",
      "Engrenagem redutora 2000/1 e potenciômetro RV3.",
      "Diodos D5 e D6 em conjunto com o amplificador PA-112."
    ],
    "answer": "Engrenagem redutora 2000/1 e potenciômetro RV3."
  },
  {
    "question": "O síncro LINVAR, utilizado no sistema anemômetro EVERSHED, fornece uma realimentação na faixa de:",
    "options": [
      "0 a 26 VCA.",
      "0 a 10 VCA.",
      "0 a 40 VCA.",
      "0 a 115 VCA.",
      "10 a 60 VCA."
    ],
    "answer": "0 a 40 VCA."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, a diferença no ângulo formado entre a posição do rotor do Transmissor (TX) e o rotor do Transformador de Controle (CT) do servo de direção determina:",
    "options": [
      "O sentido de rotação das cubas.",
      "O ganho de potência do sistema de iluminação.",
      "A amplitude do sinal de erro que acionará o motor de acompanhamento.",
      "A frequência de trabalho (se 60Hz ou 400Hz).",
      "A velocidade final de deslocamento do navio."
    ],
    "answer": "A amplitude do sinal de erro que acionará o motor de acompanhamento."
  },
  {
    "question": "No sistema EVERSHED, o sinal elétrico de direção que vai do transmissor de controle (CX) para a unidade de correção de dados do vento alimenta o estator de qual componente do outro lado?",
    "options": [
      "Um síncro Receptor (TR).",
      "Um Transformador de Controle (CT).",
      "Um síncro LINVAR.",
      "Um Taco-gerador.",
      "Um Amplificador PA-112."
    ],
    "answer": "Um Transformador de Controle (CT)."
  },
  {
    "question": "No anemômetro EVERSHED, quando os sinais medidos no potenciômetro RV4 e no resistor R11 atingem o ponto em que são iguais e opostos, a velocidade do servo motor (M2) estabiliza-se em:",
    "options": [
      "15 RPM.",
      "30 RPM.",
      "45 RPM.",
      "65 RPM.",
      "Zero RPM (0 RPM)."
    ],
    "answer": "Zero RPM (0 RPM)."
  },
  {
    "question": "Quantos síncros transmissores (TX) a unidade detectora colocada no mastro das fragatas classe Niterói possui para a detecção da direção do vento?",
    "options": [
      "Um.",
      "Dois.",
      "Três.",
      "Quatro.",
      "Nenhum, utiliza potenciômetros rotativos no lugar de síncros."
    ],
    "answer": "Um."
  },
  {
    "question": "Quais são os tipos (classificações) de manutenções realizadas nos sistemas de anemômetros a bordo dos navios da MB?",
    "options": [
      "Elétrica e Eletrônica.",
      "Preventivas e Corretivas.",
      "Mecânica e Hidráulica.",
      "Terceirizada e Orgânica.",
      "Nível 1 e Nível 2."
    ],
    "answer": "Preventivas e Corretivas."
  },
  {
    "question": "Analisando o diagrama esquemático do anemômetro EVERSHED, em qual situação operacional a tensão medida no ponto TP11 será igual à do ponto TP12?",
    "options": [
      "Quando a chave S4 estiver desligada.",
      "Quando o diodo D4 entrar em curto.",
      "Quando o diodo D2 estiver conduzindo.",
      "Apenas durante o teste de 45 nós.",
      "Quando a velocidade do vento for máxima."
    ],
    "answer": "Quando o diodo D2 estiver conduzindo."
  },
  {
    "question": "Descreva os resultados esperados durante o teste de direção do vento no anemômetro EVERSHED, que é executado através do acionamento da chave S1:",
    "options": [
      "Posição 1: Gira contínuo; Posição 2: 90º BE; Posição 3: 90º BB; Posição 4: OFF.",
      "Posição 1: NORMAL; Posição 2: 0º (zero grau); Posição 3: 120º BE; Posição 4: 120º BB.",
      "Posição 1: 0º; Posição 2: 90º; Posição 3: 180º; Posição 4: 270º.",
      "Posição 1: NORMAL; Posição 2: 15 nós; Posição 3: 30 nós; Posição 4: 45 nós.",
      "Posição 1: ON; Posição 2: TEST; Posição 3: CALIB; Posição 4: RUN."
    ],
    "answer": "Posição 1: NORMAL; Posição 2: 0º (zero grau); Posição 3: 120º BE; Posição 4: 120º BB."
  },
  {
    "question": "No sistema de anemômetro EVERSHED, qual componente específico localizado no servo de velocidade do vento tem a função física e elétrica de ajustar o zero (calibrador do mostrador)?",
    "options": [
      "Capacitor C3.",
      "Potenciômetro RV1.",
      "Potenciômetro RV2.",
      "Potenciômetro RV3.",
      "Potenciômetro RV4."
    ],
    "answer": "Potenciômetro RV4."
  },
  {
    "question": "O síncro LINVAR, utilizado no servo de velocidade do anemômetro EVERSHED, opera como um transdutor. Qual é o princípio eletromagnético fundamental que permite sua operação linear?",
    "options": [
      "Efeito Piezoelétrico com conversão direta de pressão em tensão contínua.",
      "Variação linear do coeficiente de acoplamento magnético entre o rotor e o estator em função do ângulo de rotação.",
      "Efeito Hall, medindo o campo magnético gerado pelas cubas.",
      "Variação capacitiva em resposta à velocidade angular das cubas.",
      "Indução eletrostática via anéis coletores de grafite."
    ],
    "answer": "Variação linear do coeficiente de acoplamento magnético entre o rotor e o estator em função do ângulo de rotação.",
    "explanation": "O LINVAR (Linear Variometer) é construído especialmente para que a tensão induzida no seu secundário (estator/rotor) varie de forma estritamente linear em relação ao deslocamento angular dentro de uma faixa específica de operação."
  },
  {
    "question": "Durante o funcionamento do anemômetro EVERSHED, o LINVAR fornece uma realimentação (feedback) de 0 a 40 VCA. Qual é o propósito direto desse sinal no circuito do servo de velocidade?",
    "options": [
      "Alimentar o gerador de indução do detector.",
      "Iluminar os mostradores do passadiço.",
      "Opor-se (cancelar) a tensão retificada proveniente do detector para que o servomotor pare quando a posição correta for atingida.",
      "Fornecer uma referência de fase estática para o síncro CT do servo de direção.",
      "Retificar a corrente alternada de 115V para o painel principal."
    ],
    "answer": "Opor-se (cancelar) a tensão retificada proveniente do detector para que o servomotor pare quando a posição correta for atingida.",
    "explanation": "O sinal gerado pelo LINVAR é retificado e introduzido no circuito do amplificador onde é comparado (subtraído) com o sinal vindo do detector. Quando as tensões se igualam, o erro cai a zero, parando o servo motor."
  },
  {
    "question": "Considerando o servo de velocidade do EVERSHED, o rotor do LINVAR não gira continuamente 360º. Seu deslocamento mecânico útil para a faixa de medição (0 a 75 nós) é de aproximadamente:",
    "options": [
      "360 graus.",
      "180 graus.",
      "85 graus (operando em uma faixa linear restrita).",
      "10 graus.",
      "270 graus."
    ],
    "answer": "85 graus (operando em uma faixa linear restrita).",
    "explanation": "Os LINVARs são projetados para oferecer linearidade apenas em uma faixa restrita (geralmente em torno de +/- 85 graus a partir da posição neutra). Eles não giram livremente como um síncro transmissor (TX)."
  },
  {
    "question": "A tensão induzida no LINVAR apresenta uma inversão de fase quando o rotor passa pelo \"zero elétrico\". No servo de velocidade do EVERSHED, isso afeta o sistema de que maneira?",
    "options": [
      "Faz o motor girar no sentido reverso caso a indicação tente ir abaixo de zero nós.",
      "Desarma os fusíveis FS1 e FS2 para proteção.",
      "Muda a cor da indicação do dial de verde para vermelho.",
      "Aumenta a temperatura do amplificador PA-112.",
      "Causa saturação magnética no núcleo do LINVAR."
    ],
    "answer": "Faz o motor girar no sentido reverso caso a indicação tente ir abaixo de zero nós.",
    "explanation": "Ao passar do zero, a inversão de fase indica um erro negativo. O amplificador detecta essa fase reversa e comanda o motor M2 a girar na direção oposta, trazendo a indicação de volta para a faixa de operação."
  },
  {
    "question": "Se houver uma falha no estator do síncro LINVAR (circuito aberto), qual será o sintoma imediato no mostrador de velocidade do anemômetro EVERSHED?",
    "options": [
      "O mostrador travará em zero nós.",
      "O mostrador indicará sempre 75 nós.",
      "O motor perderá a realimentação de oposição, fazendo o mostrador disparar ou oscilar incontrolavelmente até o fim de curso.",
      "A direção do vento passará a ser exibida no mostrador de velocidade.",
      "A luz vermelha do painel apagará."
    ],
    "answer": "O motor perderá a realimentação de oposição, fazendo o mostrador disparar ou oscilar incontrolavelmente até o fim de curso.",
    "explanation": "Sem a tensão de oposição (feedback) gerada pelo LINVAR, o sinal do detector continuará presente no amplificador como um \"erro constante\". O motor girará sem parar tentando zerar um erro que nunca será compensado."
  },
  {
    "question": "No diagrama do anemômetro EVERSHED, a tensão alternada proveniente do LINVAR é transformada em contínua antes de chegar ao amplificador. Qual componente é o principal responsável por esta retificação?",
    "options": [
      "Diodo Zener D5.",
      "Transformador T1.",
      "Ponte de Diodos D4.",
      "Diodo Retificador D1.",
      "Potenciômetro RV4."
    ],
    "answer": "Ponte de Diodos D4.",
    "explanation": "O sinal AC de 0 a 40V do LINVAR passa pela ponte de diodos D4, sendo retificado em onda completa para que possa ser comparado como um nível DC (nível de tensão contínua) com o sinal de velocidade."
  },
  {
    "question": "O que diferencia fisicamente e funcionalmente um LINVAR de um Síncro CT (Transformador de Controle) padrão dentro do sistema anemométrico?",
    "options": [
      "O LINVAR usa alimentação DC, enquanto o CT usa AC.",
      "O CT gera um sinal para acionar motores diretamente, o LINVAR não.",
      "O LINVAR possui um rotor especialmente bobinado/perfilado para saída de tensão linear versus ângulo, enquanto o CT fornece um sinal senoidal de erro que varia com o seno do ângulo de desalinhamento.",
      "O LINVAR atua no servo de direção, o CT no servo de velocidade.",
      "O LINVAR não possui anéis coletores."
    ],
    "answer": "O LINVAR possui um rotor especialmente bobinado/perfilado para saída de tensão linear versus ângulo, enquanto o CT fornece um sinal senoidal de erro que varia com o seno do ângulo de desalinhamento.",
    "explanation": "A curva de saída do CT é senoidal (erro = sen(θ)). O LINVAR tem enrolamentos conformados para que a relação tensão/ângulo seja uma reta (linear), o que é essencial para um mostrador linear de velocidade (nós)."
  },
  {
    "question": "Por que a alimentação AC do LINVAR (estator) requer estabilidade de frequência (400Hz)?",
    "options": [
      "Para impedir o sobreaquecimento da aleta mecânica.",
      "Porque variações de frequência alteram a reatância indutiva dos enrolamentos, modificando a tensão de saída e, consequentemente, a precisão da calibração de velocidade.",
      "Para compatibilizar com os relés DC.",
      "Para que a ponte de diodos D4 não conduza reversamente.",
      "Para aumentar a velocidade de rotação das cubas."
    ],
    "answer": "Porque variações de frequência alteram a reatância indutiva dos enrolamentos, modificando a tensão de saída e, consequentemente, a precisão da calibração de velocidade.",
    "explanation": "Como um dispositivo indutivo (transformador rotativo), a tensão induzida e a impedância dependem da frequência. Uma mudança brusca de 400Hz para 380Hz, por exemplo, faria a tensão de feedback cair, resultando em leituras de velocidade erradas."
  },
  {
    "question": "No servo de velocidade, ao aumentarmos o amortecimento atuando no RV3, o que efetivamente acontece com o sinal do LINVAR?",
    "options": [
      "Ele é cortado completamente.",
      "Sua fase é invertida instantaneamente.",
      "Sua parcela de variação rápida é filtrada / atenuada no malha de erro para evitar que o motor M2 faça o ponteiro trepidar.",
      "Ele tem sua tensão dobrada de 40V para 80V.",
      "Ele é desviado para o servo de direção."
    ],
    "answer": "Sua parcela de variação rápida é filtrada / atenuada no malha de erro para evitar que o motor M2 faça o ponteiro trepidar.",
    "explanation": "O amortecimento (RV3) atua sobre a parcela dinâmica da malha. Ajustá-lo afeta como a taxa de variação do sinal (incluindo o do LINVAR) influencia a velocidade de resposta do motor, reduzindo as \"trepidações\" do ponteiro perante rajadas de vento."
  },
  {
    "question": "O \"Fundo de Escala\" do anemômetro EVERSHED é 75 nós. Nesse ponto exato (vento a 75 nós), o rotor do LINVAR atinge sua posição máxima projetada. Nesse instante, a tensão de saída do LINVAR (antes da retificação) é de:",
    "options": [
      "0 VCA.",
      "26 VCA.",
      "115 VCA.",
      "40 VCA.",
      "10 VCA."
    ],
    "answer": "40 VCA.",
    "explanation": "O LINVAR foi projetado para fornecer um sinal que varia linearmente de 0 a 40 VCA. Logo, no fundo de escala máximo do indicador de velocidade (75 nós), a tensão de oposição gerada atinge seu máximo de 40 VCA."
  },
  {
    "question": "Qual a consequência direta se o enrolamento primário do LINVAR receber uma tensão inferior a especificada por avaria no transformador de alimentação?",
    "options": [
      "A sensibilidade aumentará, lendo ventos mais fortes do que os reais.",
      "O motor girará mais rápido na direção reversa.",
      "O mostrador indicará uma velocidade maior do que a real.",
      "Apenas o teste de calibração falhará.",
      "Não haverá consequência, pois a retificação em ponte (D4) compensa."
    ],
    "answer": "O mostrador indicará uma velocidade maior do que a real.",
    "explanation": "Se o LINVAR receber menos tensão, ele induzirá um feedback menor para um mesmo ângulo do ponteiro. O amplificador exigirá que o ponteiro vá mais adiante na escala para gerar a tensão de oposição necessária, causando indicação falsamente alta."
  },
  {
    "question": "A conexão mecânica entre o motor do servo de velocidade e o rotor do LINVAR é feita através de:",
    "options": [
      "Acoplamento magnético sem contato.",
      "Um tubo de Pitot.",
      "Um sistema de engrenagens redutoras (ex: 2000/1).",
      "Um veio flexível (flex-drive) longo.",
      "Discos de fricção do integrador mecânico."
    ],
    "answer": "Um sistema de engrenagens redutoras (ex: 2000/1).",
    "explanation": "O motor M2 de alta velocidade é reduzido por um trem de engrenagens (como a relação 2000:1) para movimentar lentamente o rotor do LINVAR e, simultaneamente, o ponteiro indicador, garantindo alto torque e precisão."
  },
  {
    "question": "Qual é a principal característica operacional que define os Diodos D5 e D6 no painel de alimentação do EVERSHED como \"reguladores/estabilizadores\"?",
    "options": [
      "Operam polarizados diretamente, emitindo luz.",
      "Operam em condução reversa controlada (Efeito Zener / Avalanche), mantendo uma queda de tensão constante em seus terminais independentemente de flutuações na corrente.",
      "São diodos de túnel de altíssima frequência.",
      "São SCRs que disparam apenas em 115V.",
      "Atuam como foto-diodos para o circuito de alarme."
    ],
    "answer": "Operam em condução reversa controlada (Efeito Zener / Avalanche), mantendo uma queda de tensão constante em seus terminais independentemente de flutuações na corrente.",
    "explanation": "Diodos reguladores (Zener) são polarizados reversamente e projetados para entrar em condução (avalanche) a uma tensão específica, estabilizando as variações de voltagem do suprimento principal para proteger as referências do circuito."
  },
  {
    "question": "Uma falha de \"curto-circuito\" em um dos diodos reguladores (D5 ou D6) causará:",
    "options": [
      "Um aumento perigoso na tensão de referência do amplificador operacional.",
      "A queda da tensão da linha regulada para praticamente zero (terra), desestabilizando ou apagando as malhas de erro associadas.",
      "Apenas a inversão de polaridade da alimentação do síncro CT.",
      "O aumento da rotação das cubas no mastro.",
      "A abertura da ponte de retificação D4."
    ],
    "answer": "A queda da tensão da linha regulada para praticamente zero (terra), desestabilizando ou apagando as malhas de erro associadas.",
    "explanation": "Um diodo Zener em curto-circuito desviará toda a corrente para o referencial de massa (terra), eliminando a tensão estabilizada que deveria ser distribuída, colapsando a operação do amplificador / malha de controle."
  },
  {
    "question": "O Diodo D1, localizado no servo de velocidade, atua como retificador de:",
    "options": [
      "Onda completa do sinal do gerador de indução.",
      "Meia onda do sinal de 10V / 400Hz oriundo do transformador T1.",
      "Alta frequência para o Taco-Gerador.",
      "Polaridade dupla para as lâmpadas.",
      "Pico a pico da tensão DC."
    ],
    "answer": "Meia onda do sinal de 10V / 400Hz oriundo do transformador T1.",
    "explanation": "O diodo D1 é classificado tecnicamente nos manuais como um retificador de meia onda que processa a saída auxiliar (referência/excitação) vinda do enrolamento secundário do T1."
  },
  {
    "question": "Considerando a ponte retificadora D4 do sistema EVERSHED, se um dos seus quatro diodos internos \"abrir\" (circuito aberto), o que acontecerá com a tensão DC de saída fornecida pelo LINVAR ao amplificador?",
    "options": [
      "Ela subirá para 115 VDC.",
      "Ela será invertida.",
      "A ponte passará a atuar como um retificador de meia onda, dobrando o *ripple* (ondulação) e reduzindo o valor médio DC, causando instabilidade no ponteiro.",
      "Ocorrerá um curto-circuito desarmando a RTU.",
      "A ponte continuará retificando em onda completa normalmente."
    ],
    "answer": "A ponte passará a atuar como um retificador de meia onda, dobrando o *ripple* (ondulação) e reduzindo o valor médio DC, causando instabilidade no ponteiro.",
    "explanation": "Quando um diodo de uma ponte de onda completa abre, a ponte passa a retificar apenas metade do ciclo (meia onda). Isso reduz o nível DC e introduz forte ruído (ripple), o que faz o servo motor oscilar ou vibrar."
  },
  {
    "question": "O que aconteceria se os diodos reguladores D5 e D6 fossem acidentalmente instalados com a polaridade invertida (polarização direta)?",
    "options": [
      "A tensão da fonte seria estabilizada com o dobro do valor projetado.",
      "O circuito de velocidade indicaria apenas na direção reversa.",
      "Eles conduziriam como diodos comuns, provocando um curto prático com queda de apenas ~0.7V, não regulando a alta tensão e possivelmente queimando o resistor limitador.",
      "O circuito funcionaria normalmente, pois diodos Zener são bidirecionais.",
      "O transformador T1 explodiria imediatamente."
    ],
    "answer": "Eles conduziriam como diodos comuns, provocando um curto prático com queda de apenas ~0.7V, não regulando a alta tensão e possivelmente queimando o resistor limitador.",
    "explanation": "Diodos reguladores devem ser instalados com polarização reversa. Em polarização direta, comportam-se como diodos comuns (~0.7V de queda), drenando excessiva corrente através do resistor série e matando a regulação da linha."
  },
  {
    "question": "Nos diagramas dos servos das fragatas, por que é necessária a retificação (via D4 e outros) de todos os sinais de erro antes da amplificação e mistura (PA-112)?",
    "options": [
      "Porque os motores de acompanhamento são obrigatoriamente de corrente contínua (DC).",
      "O amplificador operacional do PA-112 é desenhado para somar e processar erros diferenciais em níveis de Corrente Contínua (DC). Sinais AC sofreriam cancelamento de fase indesejado ou problemas de frequência.",
      "Para evitar interferência nos rádios do navio.",
      "Para acender os painéis de LED vermelho e verde.",
      "Porque o Síncro CT só funciona com pulsos DC."
    ],
    "answer": "O amplificador operacional do PA-112 é desenhado para somar e processar erros diferenciais em níveis de Corrente Contínua (DC). Sinais AC sofreriam cancelamento de fase indesejado ou problemas de frequência.",
    "explanation": "Amplificadores de erro (somadores) em servos analógicos clássicos geralmente processam variações de tensão DC. Os sinais AC vêm com variação de fase; ao convertê-los em DC, o sistema compara apenas magnitudes (níveis de tensão)."
  },
  {
    "question": "Em um diagnóstico de rotina, a medição na saída da ponte D4 apresenta uma componente alternada (AC) muito alta sobreposta ao sinal DC. O componente passivo que provavelmente está avariado (além da ponte) na malha de retificação é o:",
    "options": [
      "Diodo D5.",
      "Resistor de amortecimento R14.",
      "Capacitor de filtro associado em paralelo à saída da ponte D4.",
      "Potenciômetro RV1.",
      "Taco-gerador TG2."
    ],
    "answer": "Capacitor de filtro associado em paralelo à saída da ponte D4.",
    "explanation": "A componente alternada após a retificação é chamada de \"ripple\". Capacitores em paralelo atuam como filtros passa-baixa, alisando esse sinal. Se o capacitor secar ou abrir, o ripple AC aparece forte sobre o sinal DC."
  },
  {
    "question": "A ponte retificadora que processa o sinal advindo do Síncro TX no detector de direção tem a função principal de:",
    "options": [
      "Transmitir 115V para aRTU.",
      "Criar uma tensão contínua variável proporcional ao alinhamento angular para comparação no amplificador de direção.",
      "Eliminar a eletricidade estática gerada pelo atrito da aleta com o vento.",
      "Alimentar a resistência de aquecimento anti-congelamento.",
      "Girar mecanicamente o rodete do integrador."
    ],
    "answer": "Criar uma tensão contínua variável proporcional ao alinhamento angular para comparação no amplificador de direção.",
    "explanation": "Assim como a velocidade, a direção precisa ser traduzida de sinais síncrono-AC para DC em alguns subsistemas do amplificador PA-112 para calcular o erro diferencial real."
  },
  {
    "question": "Na teoria de falhas do EVERSHED, o resistor R15 está associado fortemente à que circuito do servo de direção?",
    "options": [
      "Ao circuito do alarme de excesso de vento.",
      "Ao circuito de iluminação do mostrador.",
      "À malha do circuito de Teste de Direção do Vento (chaves seletoras S1/S2).",
      "Ao regulador de tensão do LINVAR.",
      "Ao retificador de onda completa D4."
    ],
    "answer": "À malha do circuito de Teste de Direção do Vento (chaves seletoras S1/S2).",
    "explanation": "Na literatura e bizuários originais de MB, a avaria em R15 é clássica por isolar (inutilizar) o sinal aplicado aos estatores do CT durante a execução do teste rotativo de direção (0º, 120ºBE, 120ºBB)."
  },
  {
    "question": "Durante a avaliação de um servo de velocidade do anemômetro, nota-se que quando o sinal medido no potenciômetro RV4 e no resistor R11 atingem exata oposição de polaridade e igualdade de valor, o motor:",
    "options": [
      "Atinge sua rotação máxima.",
      "Oscila na frequência de 60Hz.",
      "Aumenta o erro exponencialmente.",
      "Encontra o estado de nulidade (zero RPM).",
      "Desarma por sobretensão."
    ],
    "answer": "Encontra o estado de nulidade (zero RPM).",
    "explanation": "O R11 e RV4 fazem parte da rede de soma do amplificador. Quando os sinais são iguais em magnitude mas opostos em polaridade (+ e -), a soma algébrica no amplificador é 0V, causando a parada do servo."
  },
  {
    "question": "O resistor R13, localizado no sistema EVERSHED, atua criticamente:",
    "options": [
      "Como resistência limitadora de corrente na base do transistor de saída do PA-112.",
      "Na equalização de impedância do taco-gerador TG2.",
      "Na limitação de corrente durante as simulações de velocidade da chave S3 (teste de 15, 30, 45 nós). Se queimar, o teste de calibração falha.",
      "No amortecimento físico da engrenagem redutora 2000/1.",
      "Como shunt de corrente no amperímetro do painel."
    ],
    "answer": "Na limitação de corrente durante as simulações de velocidade da chave S3 (teste de 15, 30, 45 nós). Se queimar, o teste de calibração falha.",
    "explanation": "Os circuitos de teste (chave S3) baseiam-se em injetar sinais calibrados no sistema através de um divisor resistivo de precisão. O R13 compõe essa malha divisora; sua queima impede a injeção do sinal simulado."
  },
  {
    "question": "Ao medir o resistor R-103 numa placa antiga do sistema (conforme certas apostilas detalhadas), espera-se encontrar o valor ôhmico padrão de:",
    "options": [
      "120 Ohms.",
      "60 Ohms.",
      "1 kOhm.",
      "10 kOhms.",
      "470 Ohms."
    ],
    "answer": "60 Ohms.",
    "explanation": "\"Bizu\" clássico da Marinha, derivado de diagramas esquemáticos internos onde resistores de casamento de linha ou shunt como o R-103 no amplificador PA possuem a especificação rígida de 60 Ohms."
  },
  {
    "question": "Qual é a principal função dos divisores resistivos, compostos pelos diversos resistores de precisão da malha do PA-112?",
    "options": [
      "Proteger as lâmpadas contra queima imediata.",
      "Ajustar os níveis das tensões provenientes dos transdutores (LINVAR, Gerador de Indução, CT) para a escala sensível de entrada do amplificador operacional (escala de milivolts).",
      "Substituir os fusíveis FS1 e FS2.",
      "Dissipar todo o ruído de RF vindo dos rádios de comunicação.",
      "Gerar o sinal senoidal de 400Hz."
    ],
    "answer": "Ajustar os níveis das tensões provenientes dos transdutores (LINVAR, Gerador de Indução, CT) para a escala sensível de entrada do amplificador operacional (escala de milivolts).",
    "explanation": "Amplificadores operacionais exigem sinais de erro minúsculos. Sinais de 40V ou 26V devem ser atenuados via divisores resistivos (redes) antes de serem introduzidos nos pinos de entrada diferencial."
  },
  {
    "question": "O resistor variável RV1, localizado no servo de direção, é fisicamente um:",
    "options": [
      "Potenciômetro rotativo que ajusta a sensibilidade (ganho de amplificação).",
      "Varistor que protege contra raios.",
      "Termistor de coeficiente negativo.",
      "Reostato de 115V para controle direto da velocidade do M2.",
      "Trimpot interno inacessível."
    ],
    "answer": "Potenciômetro rotativo que ajusta a sensibilidade (ganho de amplificação).",
    "explanation": "RV1 é um potenciômetro. O ajuste da sensibilidade altera o ganho. Se a sensibilidade for baixa, o ponteiro tem \"folga\" e demora a responder; se for muito alta, o ponteiro \"vibra\" constantemente em pequenos desvios."
  },
  {
    "question": "Num circuito de realimentação negativa (feedback) de um servo motor, como o do anemômetro, se o resistor de feedback (ex: RV2) assumir o valor de resistência infinita (fio quebrado), o que ocorrerá?",
    "options": [
      "O amortecimento será máximo e o motor não rodará.",
      "O motor girará devagar e parará fora da posição.",
      "O circuito operará em ganho de \"malha aberta\", tornando-se altamente instável (overshoot maciço), e o motor oscilará violentamente em torno do ponto desejado.",
      "O taco-gerador assumirá o controle total.",
      "A tensão em TP11 se anulará."
    ],
    "answer": "O circuito operará em ganho de \"malha aberta\", tornando-se altamente instável (overshoot maciço), e o motor oscilará violentamente em torno do ponto desejado.",
    "explanation": "Sem o resistor de feedback, o amortecimento some. O ganho do amplificador vai ao máximo (malha aberta). Qualquer pequeno erro faz o motor disparar com força total, passar do ponto, inverter, passar do ponto, gerando oscilação perpétua."
  },
  {
    "question": "Durante a calibração, ajusta-se o RV4 (Zero do Mostrador de Velocidade). Ele eletricamente fornece ao amplificador:",
    "options": [
      "Uma tensão de polarização (offset) variável que soma ou subtrai uma constante DC ao erro, permitindo alinhar o ponteiro no 0 mecânico quando não há sinal do detector.",
      "Um curto-circuito temporário para descarregar capacitores.",
      "115V diretamente ao motor M2.",
      "A alteração de frequência de 400Hz para 60Hz.",
      "O ganho de malha aberta do LINVAR."
    ],
    "answer": "Uma tensão de polarização (offset) variável que soma ou subtrai uma constante DC ao erro, permitindo alinhar o ponteiro no 0 mecânico quando não há sinal do detector.",
    "explanation": "O RV4 compensa pequenas derivas eletrônicas ou desvios mecânicos introduzindo uma voltagem DC minúscula e ajustável (offset) na rede de soma de resistores (como o R11) para forçar o ponteiro exatamente ao zero mecânico."
  },
  {
    "question": "O que é o fenômeno de \"Overshoot\", controlado pelo potenciômetro RV2 e pelo Taco-Gerador TG2 no servo de direção?",
    "options": [
      "É a queima do amplificador por sobretensão de vento.",
      "É a ultrapassagem da marcação correta do ponteiro devido à inércia mecânica, antes de estabilizar.",
      "É o congelamento das cubas em baixas temperaturas.",
      "É a leitura simultânea de duas direções pela aleta.",
      "É a falta total de resposta ao erro em 0º."
    ],
    "answer": "É a ultrapassagem da marcação correta do ponteiro devido à inércia mecânica, antes de estabilizar.",
    "explanation": "Overshoot é quando o sistema é comandado para 90º, mas por inércia ou excesso de ganho passa para 95º, retornando depois para 90º. O amortecimento atua contra essa ultrapassagem frenando o motor antes do ponto exato."
  },
  {
    "question": "Se for constatada avaria no resistor limitador acoplado aos Diodos D5/D6, o efeito será:",
    "options": [
      "Funcionamento normal e sem variação.",
      "A queima quase imediata dos diodos reguladores por excesso de corrente em avalanche, ou a perda total de tensão estabilizada se o resistor abrir.",
      "O síncro TX inverterá sua fase de referência.",
      "A velocidade de recolhimento ficará incorreta.",
      "A indicação de 75 nós no teste de calibração."
    ],
    "answer": "A queima quase imediata dos diodos reguladores por excesso de corrente em avalanche, ou a perda total de tensão estabilizada se o resistor abrir.",
    "explanation": "Em um circuito regulador Zener, o resistor limitador em série é mandatório para segurar a queda de tensão e limitar a corrente máxima no diodo. Sem ele, a fonte destroi o Zener."
  },
  {
    "question": "Na rotina de pesquisa de avarias em manuais da Marinha, a medição entre os Test Points TP6 e TP7 exige que a equipe técnica encontre um valor na faixa de:",
    "options": [
      "115 VCA exatos.",
      "26 VCA.",
      "0 a 100 mV (milivolts).",
      "400 a 800 Volts DC.",
      "12 a 24 VDC estabilizados."
    ],
    "answer": "0 a 100 mV (milivolts).",
    "explanation": "Pontos como TP6 e TP7 representam as entradas ou saídas de pequeno sinal dos amplificadores operacionais da RTU (como o PA-112). A leitura desses erros residuais de balanceamento opera em milivolts."
  },
  {
    "question": "Em uma verificação de bancada, mede-se TP11 e TP12. A literatura garante que \"a tensão em TP11 é igual à de TP12 quando o componente _________ estiver conduzindo\".",
    "options": [
      "Diodo Regulador D5.",
      "LINVAR.",
      "Síncro CT.",
      "Diodo D2.",
      "Potenciômetro RV3."
    ],
    "answer": "Diodo D2.",
    "explanation": "É uma peculiaridade cobrada (bizu de esquema do EVERSHED). O diodo D2 faz o acoplamento ou retificação de passagem entre esses dois nós específicos; sua condução nivela os potenciais de TP11 e TP12."
  },
  {
    "question": "O que são os Test Points (TP) no contexto da manutenção do anemômetro EVERSHED?",
    "options": [
      "Interruptores de liga/desliga mecânicos do painel.",
      "Furos de calibração mecânica das engrenagens 2000/1.",
      "Terminais específicos (pinos de teste) disponibilizados nas placas de circuito impresso da RTU para medir tensões sem precisar dessoldar componentes.",
      "Diodos de emissão de luz (LEDs) coloridos.",
      "Locais no passadiço onde são feitos testes de velocidade simulada."
    ],
    "answer": "Terminais específicos (pinos de teste) disponibilizados nas placas de circuito impresso da RTU para medir tensões sem precisar dessoldar componentes.",
    "explanation": "TP (Test Point) é padrão em circuitos industriais navais; eles fornecem acesso seguro de sondagem para multímetros e osciloscópios no acompanhamento dos sinais desde os síncros até o servo motor."
  },
  {
    "question": "Se um técnico medir entre TP6 (Referência GND do Amplificador) e a saída do regulador D5 com o multímetro ajustado para AC (Corrente Alternada), qual leitura ele espera?",
    "options": [
      "115 Volts.",
      "Próximo a 0 Volts AC (idealmente apenas ripple desprezível), pois a tensão deve ser pura Contínua (DC).",
      "400 Hz.",
      "26 Volts.",
      "Exatamente 1 Volt AC para polarização."
    ],
    "answer": "Próximo a 0 Volts AC (idealmente apenas ripple desprezível), pois a tensão deve ser pura Contínua (DC).",
    "explanation": "O regulador Zener atua no setor de corrente contínua da fonte para entregar uma tensão DC limpa. O multímetro em AC medirá apenas a pequena flutuação residual (ripple), que deve ser quase nula."
  },
  {
    "question": "A função principal da unidade PA-112 no sistema de retransmissão é:",
    "options": [
      "Transmitir dados via rádio-frequência.",
      "Reduzir a voltagem do sistema geral.",
      "Amplificar e somar vetorialmente os minúsculos sinais de erro de tensão contínua até um nível de potência suficiente para acionar o motor de acompanhamento M2.",
      "Converter vento aparente em vento verdadeiro apenas.",
      "Induzir fisicamente a rotação do anemômetro tipo F."
    ],
    "answer": "Amplificar e somar vetorialmente os minúsculos sinais de erro de tensão contínua até um nível de potência suficiente para acionar o motor de acompanhamento M2.",
    "explanation": "O PA-112 é o Amplificador de Potência principal das servo-malhas. Ele capta os erros das pontes de diodos e potenciômetros (nível de milivolts) e \"bombeia\" potência suficiente para mover mecanicamente os pesados rotores."
  },
  {
    "question": "Durante um teste de calibração de direção, injeta-se o sinal rotativo no estator do síncro CT (por S1). Para o servo motor se deslocar e parar a 120º, o sinal de erro no TP do amplificador deve:",
    "options": [
      "Ficar cravado no máximo e não cair.",
      "Cair progressivamente até atingir o patamar de 0 Volts (nulidade) exatamente quando a posição de 120º for atingida mecanicamente.",
      "Inverter a fase em 60 Hz constantemente.",
      "Chegar a 40 VCA.",
      "Tornar-se corrente contínua negativa."
    ],
    "answer": "Cair progressivamente até atingir o patamar de 0 Volts (nulidade) exatamente quando a posição de 120º for atingida mecanicamente.",
    "explanation": "O fundamento de qualquer servomecanismo de nulo (nulo-balance) é que o movimento mecânico da engrenagem gira o rotor do CT, subtraindo gradativamente o sinal elétrico de erro até ele ser zerado (posição atingida)."
  },
  {
    "question": "Quando a indicação no anemômetro apresenta comportamento errático \"pulando\" sem ventos reais, o primeiro ponto a ser verificado utilizando osciloscópio nos Test Points seria:",
    "options": [
      "O secundário do T1.",
      "As entradas diferenciais (somador) para checar ripple provocado por falha no retificador D4 ou capacitores de filtragem ressecados.",
      "A alimentação do PA-112 medindo 115V AC.",
      "O ajuste mecânico da engrenagem de 2000/1.",
      "O potenciômetro RV4 e sua solda de contato."
    ],
    "answer": "As entradas diferenciais (somador) para checar ripple provocado por falha no retificador D4 ou capacitores de filtragem ressecados.",
    "explanation": "O sintoma clássico de ripple (ondulação não filtrada) atingindo o amplificador de alto ganho é um servomotor que fica instável (jitter/pulos), comumente devido a diodos ou eletrolíticos degradados."
  },
  {
    "question": "Para que o anemômetro calcule a direção real (vento verdadeiro), os sinais provenientes do transmissor (CX ou TX) devem ser comparados matematicamente não apenas com o vento relativo medido, mas também com a:",
    "options": [
      "Umidade do ar.",
      "Temperatura dos sensores.",
      "Velocidade log (odômetro) e a proa verdadeira da girobússola.",
      "Inclinação transversal (jogo) e caturro da embarcação.",
      "Frequência exata da rede elétrica de 60Hz."
    ],
    "answer": "Velocidade log (odômetro) e a proa verdadeira da girobússola.",
    "explanation": "Para obter Vento Verdadeiro, o Computador de Dados do Vento soma vetorialmente o Vento Relativo, a Velocidade do Navio (via Odômetro/Log) e o Rumo Verdadeiro do Navio (via Girobússola)."
  },
  {
    "question": "No anemômetro EVERSHED, o \"Motor de Acompanhamento\" (M2) caracteristicamente operado pelo amplificador é um motor:",
    "options": [
      "De Corrente Contínua (DC) padrão.",
      "Síncrono de três fases acoplado a anéis.",
      "De indução bipolar servo-acionado de duas fases, cuja rotação e direção dependem da defasagem em graus aplicada aos seus dois enrolamentos.",
      "De passo a passo unipolar.",
      "Universal com escovas de carvão."
    ],
    "answer": "De indução bipolar servo-acionado de duas fases, cuja rotação e direção dependem da defasagem em graus aplicada aos seus dois enrolamentos.",
    "explanation": "Servomotores clássicos da época, especialmente os de 400Hz operados por amplificadores analógicos de AC ou pulsantes de duas fases dependem do avanço/atraso de fase de um enrolamento de controle em relação a um de referência."
  },
  {
    "question": "O que ocorrerá no comportamento dinâmico do servo de direção se o Taco-gerador TG2 for mecanicamente desacoplado de seu eixo (deixar de girar com o motor)?",
    "options": [
      "O servo entrará em modo de emergência.",
      "A indicação ficará 180º fora de alinhamento.",
      "Ocorrerá violento *overshoot* e severa \"caça\" ou oscilação (hunting), porque o amplificador perderá a taxa de feedback dinâmico limitadora da aceleração.",
      "O motor não terá força para mover as engrenagens.",
      "O ajuste do zero do LINVAR queimará o RV1."
    ],
    "answer": "Ocorrerá violento *overshoot* e severa \"caça\" ou oscilação (hunting), porque o amplificador perderá a taxa de feedback dinâmico limitadora da aceleração.",
    "explanation": "O taco-gerador (gerador tacométrico) fornece um sinal elétrico estritamente proporcional à \"velocidade de giro\" mecânica atual, usado pelo amplificador para prever a frenagem antes da parada. Sem ele, a inércia faz o sistema passar do ponto repetidamente (caça)."
  },
  {
    "question": "Durante a calibração com as chaves S3 nas posições 15, 30 e 45 nós, os valores aplicados simulando o vento provêm de:",
    "options": [
      "Uma tensão mecânica real injetada por uma hélice de teste menor.",
      "Pulsos acústicos simulados na placa T1.",
      "Divisores de tensão de precisão interligados pelo circuito elétrico das chaves que introduzem voltagens que representam o erro do gerador.",
      "Modificação da capacitância do LINVAR via um capacitor variável.",
      "Um software injetor dentro do PC da Fragata."
    ],
    "answer": "Divisores de tensão de precisão interligados pelo circuito elétrico das chaves que introduzem voltagens que representam o erro do gerador.",
    "explanation": "A calibração eletrônica desliga o sensor do teto temporariamente e insere uma rede resistiva fixa (como R13) que gera tensões análogas às medições reais destas velocidades para aferir o amplificador e o LINVAR localmente."
  },
  {
    "question": "Num sistema tipo B, a conversão da rotação das cubas para a movimentação do mostrador em nós é feita por:",
    "options": [
      "Linvar e amplificador eletrônico.",
      "Um integrador mecânico estritamente a fricção, associado a um rodete móvel sobre um disco tracionado por um equipamento de frequência constante (motor constante).",
      "Um computador que conta os pulsos de um feixe de LED.",
      "Um taco-gerador diretamente alimentando um voltímetro DC.",
      "Síncros CT empilhados sem motores auxiliares."
    ],
    "answer": "Um integrador mecânico estritamente a fricção, associado a um rodete móvel sobre um disco tracionado por um equipamento de frequência constante (motor constante).",
    "explanation": "O Tipo B é analógico e pesado: ele usa um integrador de disco de atrito mecânico. O atrito e a posição do rodete, guiado pela inércia contra um motor de relógio, integram o deslocamento criando o ângulo (leitura)."
  },
  {
    "question": "A diferença primordial, em termos de transdutor primário de velocidade, entre o EVERSHED e o Tipo F é que:",
    "options": [
      "O EVERSHED possui cubas e LINVAR; o Tipo F possui hélice giratória e gerador de pulso AC (ou taco-gerador embutido na ponta).",
      "O Tipo F mede eletromagneticamente via doppler; o EVERSHED não possui transdutores.",
      "Ambos utilizam integradores com discos de fricção.",
      "O Tipo F é ultrassônico e o EVERSHED tem peças móveis.",
      "O EVERSHED não possui cata-vento para a direção."
    ],
    "answer": "O EVERSHED possui cubas e LINVAR; o Tipo F possui hélice giratória e gerador de pulso AC (ou taco-gerador embutido na ponta).",
    "explanation": "A silhueta visual clássica define que o EVERSHED usa cubas para velocidade e aleta para direção, suportados no mesmo eixo. O tipo F clássico utiliza hélice montada horizontalmente na extremidade proa-popa."
  },
  {
    "question": "Se a voltagem de referência (normalmente provida ao enrolamento excitador primário) cair em um Taco-gerador AC do sistema servo, a consequência esperada é:",
    "options": [
      "Uma realimentação \"preguiçosa\" causando perda de amortecimento e oscilação induzida.",
      "O travamento imediato e queima do rotor de inércia.",
      "O erro de 180º no posicionamento do mostrador de velocidade do anemômetro.",
      "Um curto direto para o LINVAR desarmando toda a proteção de 26V.",
      "Modificação permanente do fundo de escala de 75 nós para 100 nós."
    ],
    "answer": "Uma realimentação \"preguiçosa\" causando perda de amortecimento e oscilação induzida.",
    "explanation": "O Taco-Gerador AC depende de excitação magnética estável. Com campo fraco, ele gera pouca tensão por RPM. O amplificador \"pensa\" que o motor está rodando devagar e não freia, ocorrendo o overshoot excessivo."
  },
  {
    "question": "O sinal primário gerado pela detecção das cubas no anemômetro EVERSHED (Gerador de Indução) sofre amplificação na RTU porque:",
    "options": [
      "Para acender diretamente as lâmpadas de iluminação verde e vermelha do passadiço.",
      "O sinal original na gávea (detector) é frágil demais e sofre atenuação na fiação, sem potência para acionar os pesados relés e motores dos receptores no interior do navio.",
      "Precisa-se converter 115V em 26V no próprio topo do mastro.",
      "É exigido pelo Síncro TX para enviar a fase correta ao CT.",
      "Caso contrário, o vento real passaria de 75 nós rasgando os componentes."
    ],
    "answer": "O sinal original na gávea (detector) é frágil demais e sofre atenuação na fiação, sem potência para acionar os pesados relés e motores dos receptores no interior do navio.",
    "explanation": "Sistemas síncronos distantes requerem servomecanismos justamente pela falta de \"músculo\" elétrico do sensor para girar pesados componentes eletromecânicos, ponteiros robustos e vencer atritos mecânicos longos (RTU resolve isso)."
  },
  {
    "question": "Em relação à proteção dos retificadores D1 e ponte D4 do anemômetro EVERSHED, picos transientes oriundos da comutação dos geradores navais são barrados na alimentação geral da RTU tipicamente através de:",
    "options": [
      "Varistores acoplados às antenas.",
      "Capacitores de desacoplamento, reguladores locais Zener e os transformadores de isolamento galvânico T1/T2.",
      "Troca imediata dos pinos de TP.",
      "Chave S1 colocada em curto propositalmente.",
      "Aterramento da carcaça do anemômetro diretamente ao mar via mastro."
    ],
    "answer": "Capacitores de desacoplamento, reguladores locais Zener e os transformadores de isolamento galvânico T1/T2.",
    "explanation": "A robustez naval contra transientes se apoia no isolamento por transformadores na entrada do painel da RTU (que separa fisicamente e magneticamente o circuito de 115V do navio da parte sensível de 10V e 26V), seguido de regulagem."
  },
  {
    "question": "No servo de direção (EVERSHED), se no centro do amplificador a voltagem de erro DC derivada da diferença TX-CT for exatamente 0 Volts e mesmo assim o motor girar (drift constante), a avaria reside:",
    "options": [
      "Nas cubas girando rápido demais.",
      "No desbalanceamento interno da polarização DC das etapas amplificadoras do PA-112 (offset irregular de zero), forçando o transistor de saída a conduzir indevidamente.",
      "Na queima do Taco-Gerador TG1.",
      "No erro de leitura de vento verdadeiro no C.O.C.",
      "Na rede AC do painel principal (falha do navio)."
    ],
    "answer": "No desbalanceamento interno da polarização DC das etapas amplificadoras do PA-112 (offset irregular de zero), forçando o transistor de saída a conduzir indevidamente.",
    "explanation": "Um amplificador operacional perfeito não amplifica quando as entradas diferenciais marcam erro 0. Um amplificador desbalanceado (como por transistores em fuga térmica ou resistores R-shunt alterados) gera erro artificial e move o motor (\"drift\")."
  },
  {
    "question": "Se numa calibração minuciosa do anemômetro o técnico ajusta o RV1, mas a sensibilidade do mostrador se mostra imprevisível (ora não reage, ora dispara), a causa mecânico-elétrica mais comum em ambientes navais é:",
    "options": [
      "Trinca na hélice principal provocada por gaivotas no mastro.",
      "Pista condutiva do potenciômetro RV1 rompida, suja, ou com um cursor raspador carbonizado, gerando resistências espúrias imprevisíveis durante o ajuste.",
      "Inversão de fase no síncro TR pelo centro de manutenção.",
      "Troca do fusível por um modelo térmico maior do painel.",
      "Frequência do LINVAR fixada mecanicamente."
    ],
    "answer": "Pista condutiva do potenciômetro RV1 rompida, suja, ou com um cursor raspador carbonizado, gerando resistências espúrias imprevisíveis durante o ajuste.",
    "explanation": "Potenciômetros em ambiente de maresia sofrem forte degradação mecânica (oxidação, poeira salina). Quando o contato desliza na trilha defeituosa, a resistência oscila criando \"ruído\", enlouquecendo o comportamento de servo."
  },
  {
    "question": "Numa situação real, se a chave limitadora (\"Limit Switch\") montada no trem de engrenagens do eixo de velocidade for acionada (ou trancar acionada):",
    "options": [
      "Corta-se a alimentação do Síncro TX.",
      "Acende a luz \"ALARM 400Hz\" no passadiço.",
      "Interrompe mecanicamente e eletricamente o curso (ou alimentação direta ao relé final do motor M2), impedindo que o mecanismo tente rodar o ponteiro além das travas físicas para evitar a quebra do eixo e do próprio mostrador de velocidade.",
      "Inverte a direção do vento calculada (passando para proa-popa reversa).",
      "O gerador de indução dobra de frequência (para 800Hz) avisando falha."
    ],
    "answer": "Interrompe mecanicamente e eletricamente o curso (ou alimentação direta ao relé final do motor M2), impedindo que o mecanismo tente rodar o ponteiro além das travas físicas para evitar a quebra do eixo e do próprio mostrador de velocidade.",
    "explanation": "Chaves limite ou limit switches são chaves físicas acionadas por cames próximos ao fim da escala de operação mecânica para abrir a alimentação dos motores, protegendo o instrumento contra forçamento."
  },
  {
    "question": "Sintetizando a eletrônica do sistema EVERSHED: a malha principal de controle do servo funciona convertendo a discrepância física angular num sinal elétrico fraco (1), traduzindo/retificando esse sinal de AC para DC filtrado (2), misturando-o a um *feedback* DC oposto num misturador de precisão (3), e aplicando os pulsos de potência diferenciais amplificados num atuador giratório (4). Que componentes cumprem fielmente as funções 1, 2, 3 e 4 no servo de velocidade, nesta ordem exata?",
    "options": [
      "1-Gerador Indução / 2-Diodo D1 / 3-LINVAR / 4-Síncro TR.",
      "1-Gerador Indução / 2-Retificador D4 e Filtros / 3-Rede de Soma (R11/RV4) no PA-112 / 4-Motor de Acompanhamento M2.",
      "1-Síncro TX / 2-Taco TG2 / 3-Resistor R15 / 4-Rotor do CT.",
      "1-Cubas / 2-Diodo D5 e D6 / 3-Amplificador OP / 4-Ponteiro do mostrador.",
      "1-Rodete mecânico / 2-Transdutor piezoelétrico / 3-Conversor ADC / 4-Painel LCD."
    ],
    "answer": "1-Gerador Indução / 2-Retificador D4 e Filtros / 3-Rede de Soma (R11/RV4) no PA-112 / 4-Motor de Acompanhamento M2.",
    "explanation": "Resumo ideal do servo de velocidade: (1) O Gerador capta fisicamente as cubas e dá o sinal fraco de erro original. (2) A ponte D4 o retifica para DC. (3) A rede de entrada soma o sinal DC retificado de erro com o sinal retificado do LINVAR (opposing feedback/offset). (4) A saída de potência reaciona e força o Motor M2 a rodar o dial."
  }
];
