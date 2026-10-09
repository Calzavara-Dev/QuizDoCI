import { Question } from "../types/question";

export const partidaEParadaP2Questions: Question[] = [
  {
    question: "Defina transdutor.",
    options: [
      "Dispositivo elétrico/mecânico que converte uma grandeza física (como pressão ou temperatura) em um sinal elétrico. Na tabela de componentes da apostila, o transdutor de 24VDC atua com entrada de 0.30mV e saída de 0 a 10mA.",
      "Dispositivo puramente mecânico usado para amplificar sinais de pressão hidráulica e enviar para os manômetros locais do motor.",
      "Equipamento que converte um sinal elétrico analógico em digital (0 e 1) para ser processado pelo painel central de controle das máquinas.",
      "Componente eletrônico que reduz a tensão de 220VAC para 24VDC, alimentando os cartões de Overspeed e Firedspeed."
    ],
    answer: "Dispositivo elétrico/mecânico que converte uma grandeza física (como pressão ou temperatura) em um sinal elétrico. Na tabela de componentes da apostila, o transdutor de 24VDC atua com entrada de 0.30mV e saída de 0 a 10mA."
  },
  {
    question: "Qual é o teste realizado fora das praças de máquinas (Bravos)?",
    options: [
      "É o teste e regulagem dos cartões de Overspeed e Firedspeed realizado em bancada de testes, além do teste de funcionamento e temporização dos relés no quadro de testes no CCN.",
      "É o teste hidrostático das linhas de combustível e óleo lubrificante, realizado na oficina mecânica do navio.",
      "É a calibração dos pressostatos de óleo e termostatos de água doce, feita diretamente nos painéis das praças de máquinas.",
      "É o teste de isolamento dos cabos de força do gerador principal, executado com megômetro a partir da subestação principal."
    ],
    answer: "É o teste e regulagem dos cartões de Overspeed e Firedspeed realizado em bancada de testes, além do teste de funcionamento e temporização dos relés no quadro de testes no CCN."
  },
  {
    question: "Qual é a lâmpada que indicará no painel de controle do Centro de Controle das Máquinas, quando ocorrer uma falha na partida do motor auxiliar?",
    options: [
      "A lâmpada da chave de discrepância de Partida e Parada (chave SW4), que permanecerá acesa indicando que a sequência falhou.",
      "A lâmpada vermelha de alarme geral, localizada na parte superior do painel local da máquina.",
      "A lâmpada verde de \"Motor em Firedspeed\", que começará a piscar intermitentemente.",
      "A lâmpada de indicação de baixa pressão de óleo, que acenderá acompanhada de um alarme sonoro contínuo."
    ],
    answer: "A lâmpada da chave de discrepância de Partida e Parada (chave SW4), que permanecerá acesa indicando que a sequência falhou."
  },
  {
    question: "Qual é o relé responsável em alimentar a solenoide do FLAP de ar, permitindo o fechamento do FLAP?",
    options: [
      "O relé RL8 (Overspeed Trip Relay).",
      "O relé RL5 (Relé de Falha na Partida).",
      "O relé RL1 (Relé de Parada).",
      "O relé RL4 (Relé de Acionamento da Bomba de Óleo)."
    ],
    answer: "O relé RL8 (Overspeed Trip Relay)."
  },
  {
    question: "Onde está localizado o quadro de teste de relés?",
    options: [
      "Está localizado no CCN (Centro de Controle de Máquinas), na parte inferior do quadro de instrumentação principal.",
      "Está montado junto ao painel de controle local da praça de máquinas (Bravo).",
      "Está situado no compartimento do gerador de emergência, fixado na antepara boreste.",
      "Está instalado dentro da oficina eletroeletrônica, próximo à bancada de calibração."
    ],
    answer: "Está localizado no CCN (Centro de Controle de Máquinas), na parte inferior do quadro de instrumentação principal."
  },
  {
    question: "Qual é a função principal do Relé RLB do cartão de OVERSPEED?",
    options: [
      "Operar quando o sinal de velocidade do taco-gerador ultrapassa o limite, fechando seus contatos para alimentar o relé RL8 (Overspeed Trip Relay), o qual aciona os relés de parada (RL9 e RL10) e fecha os flaps de ar.",
      "Desligar a bomba de pré-lubrificação assim que o motor atinge a velocidade normal de trabalho (1200 RPM).",
      "Energizar a solenoide de ar de partida (SOL 1) assim que o pressostato de óleo indicar pressão suficiente no sistema.",
      "Indicar falha na sequência de partida, cortando a alimentação das solenoides e mantendo acesa a lâmpada da chave SW4."
    ],
    answer: "Operar quando o sinal de velocidade do taco-gerador ultrapassa o limite, fechando seus contatos para alimentar o relé RL8 (Overspeed Trip Relay), o qual aciona os relés de parada (RL9 e RL10) e fecha os flaps de ar."
  },
  {
    question: "Qual é o tempo de operação do relé TDR2?",
    options: [
      "O tempo de retardo do relé TDR2 é de 15 a 20 segundos (sua faixa de ajuste do fabricante vai de 0 a 120 segundos).",
      "O tempo de retardo do relé TDR2 é de aproximadamente 30 segundos (tempo máximo da tentativa de partida).",
      "O tempo de retardo do relé TDR2 é de 5 a 10 segundos, usado para estabilizar a tensão do gerador.",
      "O relé TDR2 não tem retardo, ele atua instantaneamente ao receber o comando de parada da chave SW4."
    ],
    answer: "O tempo de retardo do relé TDR2 é de 15 a 20 segundos (sua faixa de ajuste do fabricante vai de 0 a 120 segundos)."
  },
  {
    question: "Qual é o potenciômetro em que é feita a regulagem do desarme por excesso de velocidade do motor auxiliar?",
    options: [
      "No potenciômetro PI (potenciômetro de \"Ajuste de Faixa\" de 1K), localizado no próprio cartão.",
      "No potenciômetro P2, montado no painel local de controle da Bravo.",
      "No trim-pot de calibração do transdutor de pressão de óleo.",
      "No reostato de campo do excitador do gerador acoplado ao motor auxiliar."
    ],
    answer: "No potenciômetro PI (potenciômetro de \"Ajuste de Faixa\" de 1K), localizado no próprio cartão."
  },
  {
    question: "Por ocasião de falha na partida do Motor Gerador, ao ser tentada nova partida, será operado o relé:",
    options: [
      "Relé RL2 (Relé de Partida), cujos contatos abrem para rearmar o circuito de falha e desalimentar o relé RL5.",
      "Relé RL1 (Relé de Parada), que deve ser acionado manualmente para zerar o alarme antes de uma nova tentativa.",
      "Relé RL6 (Operação Firedspeed), que bloqueia a nova tentativa até a rotação cair a zero.",
      "Relé TDR1, que deve ser resetado pelo botão no CCN para permitir o reengajamento da solenoide de ar."
    ],
    answer: "Relé RL2 (Relé de Partida), cujos contatos abrem para rearmar o circuito de falha e desalimentar o relé RL5."
  },
  {
    question: "Descreva sobre o Circuito de Proteção e Desarme.",
    options: [
      "É o circuito responsável por proteger as instalações de bordo e o equipamento contra avarias graves, sendo composto por pressostatos, termostatos e pelos cartões de Overspeed e Firedspeed. Ele atua provocando o desarme/parada do motor em caso de sobrecarga ou excesso de velocidade (ajustado para desarmar a 1380 RPM).",
      "É o circuito que protege exclusivamente a parte elétrica do gerador contra curtos-circuitos e subtensão, utilizando disjuntores tripolares e relés direcionais de potência.",
      "É um sistema mecânico independente composto por válvulas de alívio e discos de ruptura instalados nos coletores de admissão e escape do motor.",
      "É o conjunto de alarmes sonoros e visuais do CCN, que avisa o operador sobre parâmetros anormais, mas não atua diretamente na parada da máquina."
    ],
    answer: "É o circuito responsável por proteger as instalações de bordo e o equipamento contra avarias graves, sendo composto por pressostatos, termostatos e pelos cartões de Overspeed e Firedspeed. Ele atua provocando o desarme/parada do motor em caso de sobrecarga ou excesso de velocidade (ajustado para desarmar a 1380 RPM)."
  },
  {
    question: "Descreva o primeiro procedimento, no quadro de controle, antes de acionar a partida no motor gerador.",
    options: [
      "Ligar a chave de alimentação do quadro de controle (chave SW1 na posição ON) no painel local das bravos.",
      "Desligar as resistências de pré-aquecimento e abrir as válvulas de ar de partida na garrafa.",
      "Atuar na chave de discrepância SW4 colocando-a na posição de Partida no CCN.",
      "Verificar o nível do tanque de expansão e acionar manualmente a bomba de pré-lubrificação por 2 minutos."
    ],
    answer: "Ligar a chave de alimentação do quadro de controle (chave SW1 na posição ON) no painel local das bravos."
  },
  {
    question: "Onde está delineado o teste de regulagem dos cartões?",
    options: [
      "No Sistema de Manutenção Preventiva (SMP) / Cartão de Manutenção.",
      "No manual do fabricante do gerador elétrico anexo ao quadro principal.",
      "Na plaqueta de identificação fixada no próprio cartão eletrônico.",
      "No livro de registro de manobras da praça de máquinas (logbook)."
    ],
    answer: "No Sistema de Manutenção Preventiva (SMP) / Cartão de Manutenção."
  },
  {
    question: "Cite respectivamente as funções dos seguintes relés: RL1, RL2, RL4, RL5, RL6, RL7, e RL35.",
    options: [
      "RL1: Relé de Parada. RL2: Relé de Partida. RL4: Relé de Acionamento da Bomba de Óleo. RL5: Relé de Falha na Partida. RL6: Relé de Operação do Firedspeed (abre os circuitos de RL3 e RL4, inibindo a partida). RL7: Relé de Operação do Firedspeed (energiza o alarme). RL35: Relé Indicador de Lampejo (FLASH).",
      "RL1: Relé de Partida. RL2: Relé de Parada. RL4: Overspeed. RL5: Firedspeed. RL6: Bomba de Óleo. RL7: Falha na Partida. RL35: Temporizador de ar.",
      "RL1: Alarme de óleo. RL2: Alarme de água. RL4: Acionamento da solenoide de combustível. RL5: Parada de emergência. RL6: Indicador de lâmpadas. RL7: Alarme geral. RL35: Sirene.",
      "RL1: Falha na Partida. RL2: Bomba de Óleo. RL4: Relé de Parada. RL5: Relé de Partida. RL6: Relé Indicador de Lampejo. RL7: Overspeed. RL35: Firedspeed."
    ],
    answer: "RL1: Relé de Parada. RL2: Relé de Partida. RL4: Relé de Acionamento da Bomba de Óleo. RL5: Relé de Falha na Partida. RL6: Relé de Operação do Firedspeed (abre os circuitos de RL3 e RL4, inibindo a partida). RL7: Relé de Operação do Firedspeed (energiza o alarme). RL35: Relé Indicador de Lampejo (FLASH)."
  },
  {
    question: "Onde está localizado a bordo o Quadro de Instrumentação Principal?",
    options: [
      "Está localizado no CCN (Centro de Controle de Máquinas).",
      "Está instalado na praça de máquinas (Bravo), ao lado do motor principal.",
      "Está localizado no passadiço, integrado ao console de navegação.",
      "Está situado na sala dos quadros elétricos de baixa tensão, no convés inferior."
    ],
    answer: "Está localizado no CCN (Centro de Controle de Máquinas)."
  },
  {
    question: "De acordo com o cartão de manutenção, qual a velocidade de desarme da máquina pré-determinada?",
    options: [
      "1380 RPM (que representa 15% acima da velocidade normal de trabalho de 1200 RPM).",
      "1500 RPM (que representa 25% acima da velocidade normal de trabalho de 1200 RPM).",
      "1150 RPM (que representa a velocidade de teste local com botão calcado).",
      "1200 RPM (que é a velocidade síncrona para geração de energia a 60 Hz)."
    ],
    answer: "1380 RPM (que representa 15% acima da velocidade normal de trabalho de 1200 RPM)."
  },
  {
    question: "Descreva o procedimento que deverá ser observado quanto ao tanque de expansão, antes de dar partida no motor auxiliar.",
    options: [
      "Deve-se realizar a sondagem do tanque de expansão de água doce (com o auxílio do \"MO\" de serviço) e observar se o nível de água foi completado até a condição atestado, evitando avarias no motor por falta de resfriamento.",
      "Deve-se drenar toda a água do tanque de expansão e preenchê-lo com líquido anticongelante puro antes de cada partida.",
      "Deve-se pressurizar o tanque de expansão utilizando ar comprimido da rede de serviço até atingir 2 bar de pressão estática.",
      "Deve-se verificar a temperatura do tanque de expansão e garantir que ela esteja acima de 80°C ativando as resistências, caso contrário o motor não deve ser partido."
    ],
    answer: "Deve-se realizar a sondagem do tanque de expansão de água doce (com o auxílio do \"MO\" de serviço) e observar se o nível de água foi completado até a condição atestado, evitando avarias no motor por falta de resfriamento."
  },
  {
    question: "Em quais pontos do cartão de OVERSPEED temos a entrada de alimentação de 24VDC, para fazê-lo funcionar?",
    options: [
      "Nos terminais/pinos 11 e 12 do cartão.",
      "Nos terminais/pinos 1 e 2 do cartão.",
      "Nos pinos centrais da tomada do taco-gerador (pinos A e B).",
      "Na régua de bornes externa, conexões 24+ e 24- da fonte principal do CCN."
    ],
    answer: "Nos terminais/pinos 11 e 12 do cartão."
  },
  {
    question: "Qual é a finalidade do Circuito de Proteção e Desarme e quais são seus componentes principais?",
    options: [
      "Sua finalidade é proteger o motor gerador e as instalações de bordo contra avarias graves por sobrecarga ou excesso de velocidade. Ele é constituído por pressostatos, termostatos e pelos cartões eletrônicos de Overspeed e Firedspeed.",
      "Sua finalidade é evitar que a tensão do gerador exceda 450VAC, protegendo a rede de bordo. É composto apenas pelo regulador automático de tensão (AVR) e disjuntores magnéticos.",
      "Sua finalidade é purificar o óleo lubrificante e o combustível antes da partida. É formado por centrífugas, filtros coalescentes e válvulas termostáticas.",
      "Sua finalidade é sincronizar a rotação do motor com a frequência da rede do navio durante o paralelismo. É constituído por um sincronoscópio e o motor de passo do governador."
    ],
    answer: "Sua finalidade é proteger o motor gerador e as instalações de bordo contra avarias graves por sobrecarga ou excesso de velocidade. Ele é constituído por pressostatos, termostatos e pelos cartões eletrônicos de Overspeed e Firedspeed."
  },
  {
    question: "Qual é a sequência de acionamento do circuito quando o sinal de rotação atinge o limite de overspeed?",
    options: [
      "O sinal do taco-gerador faz operar o relé RLB do cartão, o qual fecha seus contatos e alimenta o relé RL8 (Overspeed Trip Relay). O RL8 aciona os relés de parada (RL9 e RL10) e energiza as solenóides dos flaps de ar (SOL 2 e SOL 3), que ao fecharem acionam a solenóide de corte de combustível (SOL 4).",
      "O sinal do taco-gerador desliga diretamente a válvula principal de combustível, o que causa a queda da rotação, desalimentando em seguida todos os relés do quadro local.",
      "O relé RLB envia um sinal ao CCN que dispara o alarme sonoro, e o operador tem 30 segundos para acionar a chave SW4 na posição STOP antes que o motor desligue por conta própria.",
      "O sinal do taco-gerador atua sobre a solenoide de ar de partida (SOL 1), abrindo-a para injetar ar contra o sentido de rotação, parando o motor abruptamente através do relé RL6."
    ],
    answer: "O sinal do taco-gerador faz operar o relé RLB do cartão, o qual fecha seus contatos e alimenta o relé RL8 (Overspeed Trip Relay). O RL8 aciona os relés de parada (RL9 e RL10) e energiza as solenóides dos flaps de ar (SOL 2 e SOL 3), que ao fecharem acionam a solenóide de corte de combustível (SOL 4)."
  },
  {
    question: "Quais são os valores de velocidade de trabalho, de teste e de desarme pré-determinado do motor gerador?",
    options: [
      "A velocidade normal de trabalho é de 1200 RPM, a velocidade de teste local é de 1150 RPM (com botão calcado) e a rotação de desarme pré-determinada é de 1380 RPM (15% acima da normal).",
      "A velocidade normal de trabalho é de 1800 RPM, a velocidade de teste local é de 1500 RPM e a rotação de desarme é de 2000 RPM.",
      "A velocidade normal de trabalho é de 1000 RPM, a velocidade de teste é de 1100 RPM e o desarme ocorre em 1250 RPM.",
      "A velocidade normal é de 1200 RPM, o teste é feito em marcha lenta a 600 RPM e o desarme por overspeed ocorre aos 1500 RPM."
    ],
    answer: "A velocidade normal de trabalho é de 1200 RPM, a velocidade de teste local é de 1150 RPM (com botão calcado) e a rotação de desarme pré-determinada é de 1380 RPM (15% acima da normal)."
  },
  {
    question: "Como é realizado o ajuste do cartão de overspeed na bancada de testes caso o relé RLB não atue na rotação correta?",
    options: [
      "Eleva-se a rotação no simulador até 1380 RPM e, se o relé RLB não fechar seus contatos, atua-se no potenciômetro PI (\"Ajuste de Faixa\" de 1K) localizado no próprio cartão até que ocorra o fechamento.",
      "Muda-se a posição do jumper J1 no cartão eletrônico para a posição 'HIGH' e reinicia-se a bancada de testes para aplicar o valor padrão gravado na memória EPROM.",
      "Ajusta-se a tensão da fonte da bancada de 24VDC para 28VDC, compensando a queda de tensão e induzindo o fechamento forçado dos contatos do relé RLB.",
      "Troca-se o capacitor de filtragem C4 do cartão, pois ele é o único responsável pela constante de tempo e calibração de rotação."
    ],
    answer: "Eleva-se a rotação no simulador até 1380 RPM e, se o relé RLB não fechar seus contatos, atua-se no potenciômetro PI (\"Ajuste de Faixa\" de 1K) localizado no próprio cartão até que ocorra o fechamento."
  },
  {
    question: "Quais são os quatro procedimentos prévios obrigatórios que devem ser observados antes de acionar a partida do MCA?",
    options: [
      "Ligar a chave geral SW1 no painel local, desligar a chave das resistências de pré-aquecimento, verificar/comutar a chave local/remoto se a partida for remota e confirmar se o nível de água do tanque de expansão foi completado.",
      "Purgar o ar dos injetores, drenar a água do tanque de combustível diário, verificar a tensão das baterias e ligar a bomba de transferência de óleo principal.",
      "Conectar o terminal de sincronismo no gerador, ajustar a tensão do AVR para 440V, abrir a válvula de ar de controle e ligar as resistências do cárter.",
      "Acionar a ventilação forçada da praça de máquinas, fechar os flaps de exaustão, ligar a bomba de pré-lubrificação no modo contínuo e resetar o alarme de overspeed."
    ],
    answer: "Ligar a chave geral SW1 no painel local, desligar a chave das resistências de pré-aquecimento, verificar/comutar a chave local/remoto se a partida for remota e confirmar se o nível de água do tanque de expansão foi completado."
  },
  {
    question: "Como ocorre o acionamento das solenóides SOL 5 e SOL 1 durante a sequência manual de partida?",
    options: [
      "Ao girar a chave SW4 a 30º, o relé RL2 energiza os relés RL3 e RL4; o RL4 aciona a bomba de pré-lubrificação (SOL 5) e a subida da pressão de óleo fecha o pressostato que libera a solenóide de ar de partida (SOL 1).",
      "Ao atuar na chave SW1, a SOL 1 é aberta imediatamente fornecendo ar de partida, enquanto a SOL 5 entra apenas após o motor atingir 500 RPM para garantir lubrificação em alta.",
      "A chave SW4 liga a SOL 1 através do temporizador TDR1, e a SOL 5 é acionada manualmente pelo operador após confirmar a queda de pressão do ar na rede.",
      "As solenóides SOL 5 e SOL 1 são acionadas de forma simultânea pelo relé RL6 quando o cartão de Firedspeed detecta que o motor está parado e pronto para partir."
    ],
    answer: "Ao girar a chave SW4 a 30º, o relé RL2 energiza os relés RL3 e RL4; o RL4 aciona a bomba de pré-lubrificação (SOL 5) e a subida da pressão de óleo fecha o pressostato que libera a solenóide de ar de partida (SOL 1)."
  },
  {
    question: "Como o sistema desativa o circuito de arranque quando o motor atinge a rotação de trabalho (firedspeed)?",
    options: [
      "Ao atingir a velocidade, o cartão opera o relé RLA, energizando os relés RL6 e RL7; os contatos de RL6 abrem o circuito dos relés RL3 e RL4, interrompendo o ar de partida e a pré-lubrificação.",
      "Um pressostato na rede de ar fecha ao atingir 30 bar, cortando a alimentação da solenoide SOL 1 e desengranando o motor de arranque automaticamente.",
      "O temporizador TDR1 corta a energia do relé RL2 exatamente após 15 segundos, o que é o tempo estipulado para a máquina alcançar o firedspeed.",
      "A tensão gerada pelo alternador principal aciona um relé no quadro elétrico que desativa diretamente os cartões eletrônicos no painel local da máquina."
    ],
    answer: "Ao atingir a velocidade, o cartão opera o relé RLA, energizando os relés RL6 e RL7; os contatos de RL6 abrem o circuito dos relés RL3 e RL4, interrompendo o ar de partida e a pré-lubrificação."
  },
  {
    question: "O que acontece na lógica elétrica caso ocorra uma falha na partida e o motor não pegue?",
    options: [
      "O relé temporizador TDR1 esgota seu tempo (~30s) e energiza o relé de falha RL5, cujos contatos abrem cortando RL3/RL4 (cessando o arranque) e mantêm a lâmpada da chave SW4 acesa.",
      "O relé RL8 (Overspeed Trip Relay) atraca por proteção térmica, disparando sirenes no CCN e cortando completamente a alimentação de 24VDC do painel.",
      "O motor de arranque continua tentando girar até que as garrafas de ar de partida esvaziem completamente, disparando o alarme de baixa pressão de ar.",
      "A solenoide SOL 4 corta o combustível de forma permanente até que um mecânico resete a válvula termostática localmente."
    ],
    answer: "O relé temporizador TDR1 esgota seu tempo (~30s) e energiza o relé de falha RL5, cujos contatos abrem cortando RL3/RL4 (cessando o arranque) e mantêm a lâmpada da chave SW4 acesa."
  },
  {
    question: "Qual é a sequência elétrica da parada manual ao atuar na chave SW4 e como o circuito é rearmado?",
    options: [
      "A chave SW4 energiza o relé RL1, que aciona os relés RL9 e RL10; o RL10 energiza a solenóide de corte de combustível (SOL 4) e o temporizador TDR2, que após 15 a 20 segundos desalimenta o RL9 e rearma o circuito.",
      "A chave SW4 corta diretamente a alimentação das solenoides SOL 2 e SOL 3, fechando os flaps de ar, o que asfixia o motor. O circuito é rearmado girando a chave para a posição ON novamente.",
      "O relé RL6 é acionado, cortando a corrente para a solenoide do governador eletrônico, e o rearme só pode ser feito pressionando o botão RESET no CCN após a máquina parar por completo.",
      "A chave SW4 atua sobre o relé RL5 que descarrega o ar de partida contra o motor, provocando sua frenagem. O rearme ocorre automaticamente pela pressão das molas do pressostato de óleo após 30 segundos."
    ],
    answer: "A chave SW4 energiza o relé RL1, que aciona os relés RL9 e RL10; o RL10 energiza a solenóide de corte de combustível (SOL 4) e o temporizador TDR2, que após 15 a 20 segundos desalimenta o RL9 e rearma o circuito."
  },
  {
    question: "Como é realizado o procedimento do teste local de overspeed no motor em funcionamento?",
    options: [
      "Ajusta-se a rotação da máquina para 1150 RPM, calca-se e mantém-se o botão de teste de overspeed no painel local e eleva-se a velocidade no CCN até observar o desarme a 1380 RPM no visor da Bravo.",
      "Acelera-se a máquina rapidamente de 1200 RPM para 1500 RPM na alavanca manual de injeção, aguardando o fechamento dos flaps de ar e anotando a rotação de pico.",
      "Com o motor parado, injeta-se um sinal de 24VDC nos pinos 11 e 12 do cartão de overspeed e verifica-se a atuação dos relés de parada e corte de combustível.",
      "Desconecta-se o cabo do taco-gerador e aplica-se um gerador de sinais (frequência variável) diretamente no painel do CCN, aumentando a frequência até o desarme."
    ],
    answer: "Ajusta-se a rotação da máquina para 1150 RPM, calca-se e mantém-se o botão de teste de overspeed no painel local e eleva-se a velocidade no CCN até observar o desarme a 1380 RPM no visor da Bravo."
  },
  {
    question: "Após um desarme por overspeed, qual procedimento na chave SW4 permite reabrir os flaps de ar e rearmar o sistema?",
    options: [
      "Coloca-se a chave SW4 na posição STOP, o que energiza o relé RL1 para desalimentar o relé RLB do cartão; com isso, RLB desenergiza RL9/RL10 e desalimenta SOL 2 e SOL 3, reabrindo os flaps.",
      "A chave SW4 deve ser girada rapidamente para a posição START e depois RUN, forçando os relés RL3 e RL4 a abrirem as solenoides através da pressão do ar.",
      "Coloca-se a chave SW4 em LOCAL, o que permite o uso de uma alavanca manual no motor para forçar a abertura mecânica dos flaps contra a mola das solenoides.",
      "A chave SW4 não tem ação sobre os flaps de ar; eles devem ser rearmados mecanicamente por um operador diretamente na admissão de ar do motor, apertando o gatilho de trava."
    ],
    answer: "Coloca-se a chave SW4 na posição STOP, o que energiza o relé RL1 para desalimentar o relé RLB do cartão; com isso, RLB desenergiza RL9/RL10 e desalimenta SOL 2 e SOL 3, reabrindo os flaps."
  },
  {
    question: "O que a apostila ressalta sobre a proteção contra sobrecarga por excesso de carga no grupo gerador?",
    options: [
      "O desarme do motor por sobrecarga elétrica só ocorre em extrema necessidade, pois o próprio gerador possui um sistema de proteção ajustado para desarmar eletricamente bem antes que o motor motriz pare de funcionar.",
      "O motor é equipado com sensores de torque no eixo que desarmam o grupo instantaneamente se a carga mecânica ultrapassar 110% do limite nominal.",
      "A sobrecarga causa um aquecimento rápido na água de refrigeração, o que faz o termostato atuar desarmando o motor antes do disjuntor elétrico.",
      "Em caso de sobrecarga, o governador de velocidade automaticamente reduz a rotação para 600 RPM, mantendo o gerador acoplado para evitar apagão total."
    ],
    answer: "O desarme do motor por sobrecarga elétrica só ocorre em extrema necessidade, pois o próprio gerador possui um sistema de proteção ajustado para desarmar eletricamente bem antes que o motor motriz pare de funcionar."
  },
  {
    question: "Qual é a função do contato de retenção do relé RL3 na sequência de partida do motor?",
    options: [
      "O relé RL3 fecha seu próprio contato de retenção para manter o circuito de partida energizado após a chave SW4 ser liberada pelo operador e retornar à posição inicial por efeito de mola.",
      "O contato de retenção garante que o motor de arranque continue girando por exatos 10 minutos após o motor pegar, para auxiliar na refrigeração dos cilindros.",
      "Ele bloqueia a energização do relé RL4, impedindo o acionamento prematuro da bomba de óleo antes que haja ar suficiente nas garrafas de partida.",
      "A retenção mantém as válvulas indicadoras do motor abertas até que a pressão de combustão se estabilize e atinja 50 bar."
    ],
    answer: "O relé RL3 fecha seu próprio contato de retenção para manter o circuito de partida energizado após a chave SW4 ser liberada pelo operador e retornar à posição inicial por efeito de mola."
  },
  {
    question: "Qual é o relé responsável em alimentar a solenoide do FLAP de ar, permitindo o fechamento do FLAP?",
    options: [
      "O relé RL8 (Overspeed Trip Relay).",
      "O relé RL5 (Relé de Falha na Partida).",
      "O relé RL1 (Relé de Parada).",
      "O relé RL4 (Relé de Acionamento da Bomba de Óleo)."
    ],
    answer: "O relé RL8 (Overspeed Trip Relay)."
  },
  {
    question: "Qual é a lâmpada que indicará no painel de controle do Centro de Controle das Máquinas, quando ocorrer uma falha na partida do motor auxiliar?",
    options: [
      "A lâmpada da chave de discrepância de Partida e Parada (SW4), que continua acesa.",
      "A lâmpada vermelha de alarme geral, localizada na parte superior do painel local da máquina.",
      "A lâmpada verde de \"Motor em Firedspeed\", que começará a piscar intermitentemente.",
      "A lâmpada de indicação de baixa pressão de óleo, que acenderá acompanhada de um alarme sonoro contínuo."
    ],
    answer: "A lâmpada da chave de discrepância de Partida e Parada (SW4), que continua acesa."
  },
  {
    question: "Descreva o primeiro procedimento, no quadro de controle, antes de acionar a partida no motor gerador.",
    options: [
      "Ligar a chave de alimentação principal do quadro de controle (chave SW1 na posição ON).",
      "Desligar as resistências de pré-aquecimento e abrir as válvulas de ar de partida na garrafa.",
      "Atuar na chave de discrepância SW4 colocando-a na posição de Partida no CCN.",
      "Verificar o nível do tanque de expansão e acionar manualmente a bomba de pré-lubrificação por 2 minutos."
    ],
    answer: "Ligar a chave de alimentação principal do quadro de controle (chave SW1 na posição ON)."
  },
  {
    question: "Em quais terminais/pinos do cartão de overspeed é conectada a alimentação elétrica de 24VDC?",
    options: [
      "A alimentação de 24VDC proveniente dos painéis de baixa tensão do navio entra nos terminais/pinos 11 e 12 do cartão.",
      "A alimentação de 24VDC entra nos terminais/pinos 1 e 2 do cartão.",
      "Nos pinos centrais da tomada do taco-gerador (pinos A e B).",
      "Na régua de bornes externa, conexões 24+ e 24- da fonte principal do CCN."
    ],
    answer: "A alimentação de 24VDC proveniente dos painéis de baixa tensão do navio entra nos terminais/pinos 11 e 12 do cartão."
  }
];
