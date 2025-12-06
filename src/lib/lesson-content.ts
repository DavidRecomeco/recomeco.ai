// Conteúdo completo de todas as lições do programa de 30 dias

export const LESSON_CONTENT: Record<number, Record<number, any>> = {
  // SEMANA 1: Consciência dos Gatilhos
  1: {
    1: {
      title: "Introdução: Entendendo seus Gatilhos",
      description: "Descubra o que são gatilhos emocionais e como eles influenciam seus comportamentos",
      duration: "8 min",
      type: "video",

      content: [
        {
          subtitle: "O que são gatilhos?",
          text: "Gatilhos são estímulos externos ou internos que desencadeiam respostas emocionais automáticas. Eles podem ser situações, pessoas, lugares, pensamentos ou sensações físicas que ativam padrões de comportamento estabelecidos ao longo do tempo.\n\nQuando você experimenta um gatilho, seu cérebro entra em modo automático, seguindo caminhos neurais já estabelecidos. É como se você estivesse dirigindo no piloto automático - você não precisa pensar conscientemente sobre cada ação, seu corpo simplesmente responde."
        },
        {
          subtitle: "Por que os gatilhos são tão poderosos?",
          text: "Os gatilhos têm poder porque estão conectados a memórias emocionais profundas e padrões de comportamento repetidos. Cada vez que você responde a um gatilho da mesma forma, você fortalece essa conexão neural, tornando a resposta mais automática e difícil de controlar.\n\nO cérebro adora eficiência. Ele cria atalhos para economizar energia mental. Isso é útil para tarefas cotidianas, mas pode ser problemático quando os atalhos levam a comportamentos que você quer mudar."
        },
        {
          subtitle: "Tipos comuns de gatilhos",
          list: [
            "Gatilhos emocionais: estresse, ansiedade, tédio, solidão, frustração",
            "Gatilhos sociais: pressão de grupo, conflitos, celebrações, encontros sociais",
            "Gatilhos ambientais: lugares específicos, horários do dia, objetos, sons, cheiros",
            "Gatilhos físicos: cansaço, fome, dor, desconforto",
            "Gatilhos mentais: pensamentos negativos, memórias, preocupações"
          ]
        },
        {
          exercise: "Reflita sobre a última vez que você teve um impulso forte. Que situação, emoção ou pensamento precedeu esse impulso? Tente identificar pelo menos 3 gatilhos que você reconhece em sua vida.",
          tip: "Não julgue seus gatilhos. O objetivo agora é apenas observar e reconhecer. A consciência é o primeiro passo para a mudança."
        }
      ],
      keyTakeaways: [
        "Gatilhos são estímulos que ativam respostas automáticas em nosso cérebro",
        "Eles ganham poder através da repetição e conexões emocionais",
        "Existem diferentes tipos de gatilhos: emocionais, sociais, ambientais, físicos e mentais",
        "A consciência dos gatilhos é o primeiro passo para mudá-los"
      ]
    },
    2: {
      title: "Mapeando seus Gatilhos Pessoais",
      description: "Aprenda a identificar e registrar seus gatilhos específicos",
      duration: "12 min",
      type: "reading",
      content: [
        {
          subtitle: "O Diário de Gatilhos",
          text: "Uma das ferramentas mais poderosas para desenvolver consciência é o diário de gatilhos. Este é um registro sistemático das situações que precedem seus impulsos ou comportamentos indesejados.\n\nAo documentar seus gatilhos, você começa a ver padrões que antes eram invisíveis. Você pode descobrir que certos horários do dia, estados emocionais ou situações sociais consistentemente levam aos mesmos comportamentos."
        },
        {
          subtitle: "Como criar seu diário de gatilhos",
          text: "Para cada situação que você registrar, anote:\n\n1. Data e hora\n2. Onde você estava\n3. Com quem você estava (ou se estava sozinho)\n4. O que estava fazendo antes\n5. Como estava se sentindo emocionalmente\n6. Como estava se sentindo fisicamente\n7. Que pensamentos passou pela sua cabeça\n8. Qual foi o impulso ou comportamento\n9. Intensidade (1-10)"
        },
        {
          subtitle: "Padrões comuns a observar",
          list: [
            "Horários específicos (manhã, tarde, noite, madrugada)",
            "Dias da semana (fins de semana vs. dias úteis)",
            "Estados emocionais recorrentes",
            "Situações sociais específicas",
            "Transições (fim do trabalho, antes de dormir)",
            "Após eventos específicos (discussões, estresse no trabalho)"
          ]
        },
        {
          exercise: "Nos próximos 7 dias, mantenha um diário de gatilhos. Use o app Recomeço para registrar pelo menos um gatilho por dia. Seja específico e honesto - ninguém mais verá isso além de você.",
          tip: "Carregue seu diário sempre com você (use o app no celular). Registre os gatilhos o mais próximo possível do momento em que eles acontecem, enquanto os detalhes ainda estão frescos."
        },
        {
          subtitle: "Analisando seus padrões",
          text: "Após uma semana de registros, reserve um tempo para revisar seu diário. Procure por:\n\n• Gatilhos que aparecem repetidamente\n• Conexões entre emoções e comportamentos\n• Situações de alto risco\n• Horários ou lugares problemáticos\n• Pessoas que influenciam seus comportamentos\n\nEsta análise revelará seus gatilhos primários - aqueles que têm o maior impacto em seu comportamento. Estes serão seu foco principal nas próximas semanas."
        }
      ],
      keyTakeaways: [
        "Um diário de gatilhos é essencial para desenvolver autoconsciência",
        "Registre detalhes específicos: contexto, emoções, pensamentos e intensidade",
        "Padrões emergem após vários dias de observação consistente",
        "Identifique seus gatilhos primários para focar seus esforços de mudança"
      ]
    },
    3: {
      title: "A Ciência por Trás dos Gatilhos",
      description: "Entenda como seu cérebro processa gatilhos e forma hábitos",
      duration: "10 min",
      type: "reading",
      content: [
        {
          subtitle: "O Loop do Hábito",
          text: "Segundo o neurocientista Charles Duhigg, todo hábito segue um loop de três partes:\n\n1. GATILHO: O estímulo que inicia o comportamento\n2. ROTINA: O comportamento em si\n3. RECOMPENSA: O benefício que você obtém\n\nSeu cérebro aprende a antecipar a recompensa quando detecta o gatilho, criando um desejo que impulsiona a rotina. Com o tempo, este loop se torna tão automático que você nem percebe que está acontecendo."
        },
        {
          subtitle: "Neuroplasticidade: Seu cérebro pode mudar",
          text: "A boa notícia é que seu cérebro é neuroplástico - ele pode formar novas conexões e enfraquecer conexões antigas. Cada vez que você resiste a um gatilho ou responde de forma diferente, você está literalmente reconfigurando seu cérebro.\n\nNo entanto, mudança neural leva tempo. Estudos mostram que formar um novo hábito pode levar de 18 a 254 dias, com uma média de 66 dias. Paciência e consistência são essenciais."
        },
        {
          subtitle: "O papel da dopamina",
          text: "A dopamina é o neurotransmissor do 'querer'. Quando seu cérebro antecipa uma recompensa, ele libera dopamina, criando um desejo intenso. Isso explica por que gatilhos podem ser tão poderosos - eles ativam o sistema de recompensa do cérebro antes mesmo de você agir.\n\nComportamentos viciantes são particularmente desafiadores porque causam grandes liberações de dopamina, criando associações muito fortes entre gatilhos e comportamentos."
        },
        {
          subtitle: "Estratégias baseadas em neurociência",
          list: [
            "Interrupção de padrão: Quebrar o loop automático entre gatilho e resposta",
            "Substituição: Criar novas respostas para gatilhos antigos",
            "Reforço positivo: Recompensar novos comportamentos para fortalecer novas conexões neurais",
            "Mindfulness: Aumentar a consciência para sair do modo automático",
            "Repetição: Praticar novos comportamentos consistentemente para formar novos caminhos neurais"
          ]
        },
        {
          tip: "Entender a ciência não é apenas interessante - é empoderador. Quando você sabe que seu cérebro pode mudar, você percebe que mudança é possível, mesmo que seja difícil."
        }
      ],
      keyTakeaways: [
        "Hábitos seguem um loop: gatilho → rotina → recompensa",
        "Neuroplasticidade significa que seu cérebro pode formar novas conexões",
        "Dopamina cria o 'desejo' que impulsiona comportamentos habituais",
        "Mudança neural requer tempo, paciência e prática consistente"
      ]
    },
    4: {
      title: "Técnicas de Mindfulness para Gatilhos",
      description: "Práticas de atenção plena para reconhecer gatilhos em tempo real",
      duration: "15 min",
      type: "video",

      content: [
        {
          subtitle: "O que é Mindfulness?",
          text: "Mindfulness, ou atenção plena, é a prática de estar presente no momento atual, observando seus pensamentos, emoções e sensações sem julgamento. É o oposto do modo automático - é consciência intencional.\n\nQuando você pratica mindfulness, você cria um espaço entre o gatilho e sua resposta. Nesse espaço, você tem escolha. Em vez de reagir automaticamente, você pode responder conscientemente."
        },
        {
          subtitle: "A Técnica STOP",
          text: "STOP é um acrônimo para uma técnica de mindfulness que você pode usar quando detectar um gatilho:\n\nS - PARE: Interrompa o que está fazendo\nT - RESPIRE: Faça três respirações profundas e conscientes\nO - OBSERVE: Note o que está acontecendo (pensamentos, emoções, sensações)\nP - PROSSIGA: Escolha conscientemente como responder\n\nEsta técnica simples pode ser feita em menos de um minuto e é incrivelmente eficaz para quebrar respostas automáticas."
        },
        {
          subtitle: "Meditação de Observação de Gatilhos",
          text: "Pratique esta meditação de 5 minutos diariamente:\n\n1. Sente-se confortavelmente e feche os olhos\n2. Respire naturalmente, focando na sensação da respiração\n3. Quando pensamentos ou emoções surgirem, simplesmente observe-os\n4. Não tente mudá-los ou julgá-los - apenas note que estão presentes\n5. Imagine que você está assistindo nuvens passando no céu - seus pensamentos e emoções são as nuvens\n6. Sempre que perceber que se perdeu em pensamentos, gentilmente retorne ao foco na respiração\n\nEsta prática treina sua capacidade de observar sem reagir - uma habilidade essencial para lidar com gatilhos."
        },
        {
          subtitle: "Body Scan para Gatilhos Físicos",
          list: [
            "Comece pelos pés e vá subindo lentamente pelo corpo",
            "Note qualquer tensão, desconforto ou sensação",
            "Gatilhos físicos frequentemente aparecem como tensão nos ombros, aperto no peito, ou desconforto no estômago",
            "Simplesmente observe essas sensações sem tentar mudá-las",
            "Respire para as áreas de tensão, imaginando a respiração relaxando esses músculos"
          ]
        },
        {
          exercise: "Pratique a técnica STOP três vezes hoje, mesmo que você não esteja experimentando um gatilho. Isso treina seu cérebro para que a técnica esteja disponível quando você realmente precisar dela.",
          tip: "Mindfulness é uma habilidade que melhora com a prática. Não espere perfeição - mesmo alguns segundos de consciência podem fazer diferença."
        }
      ],
      keyTakeaways: [
        "Mindfulness cria um espaço entre gatilho e resposta onde a escolha existe",
        "A técnica STOP é uma ferramenta rápida para momentos de gatilho",
        "Meditação regular fortalece sua capacidade de observar sem reagir",
        "Body scan ajuda a identificar gatilhos físicos antes que se tornem avassaladores"
      ]
    },
    5: {
      title: "Desafio Semanal: Rastreamento Intensivo",
      description: "Coloque em prática tudo que aprendeu esta semana",
      duration: "20 min",
      type: "exercise",
      content: [
        {
          subtitle: "Seu Desafio desta Semana",
          text: "Agora que você aprendeu sobre gatilhos, é hora de aplicar esse conhecimento de forma intensiva. Seu desafio é criar um perfil completo dos seus gatilhos pessoais."
        },
        {
          subtitle: "Tarefas do Desafio",
          list: [
            "Registre TODOS os gatilhos que você notar nos próximos 7 dias (meta: pelo menos 2 por dia)",
            "Use a técnica STOP pelo menos uma vez por dia",
            "Pratique 5 minutos de meditação de observação diariamente",
            "Faça um body scan sempre que sentir desconforto físico",
            "No final da semana, analise seus registros e identifique seus 3 gatilhos mais frequentes"
          ]
        },
        {
          subtitle: "Perguntas para Reflexão Final",
          text: "Ao final desta semana, reserve 20 minutos para refletir profundamente sobre estas questões:"
        },
        {
          exercise: "1. Quais são meus 3 gatilhos mais poderosos?\n\n2. Que padrões eu notei? (horários, lugares, emoções, situações)\n\n3. Como meu corpo sinaliza quando um gatilho está presente?\n\n4. Que pensamentos automáticos acompanham meus gatilhos?\n\n5. Qual gatilho eu quero focar primeiro na próxima semana?\n\n6. O que aprendi sobre mim mesmo esta semana?\n\n7. Que estratégia de mindfulness funcionou melhor para mim?",
          tip: "Celebre seu progresso! Completar esta primeira semana é uma conquista significativa. Você está construindo as bases para uma transformação duradoura."
        },
        {
          subtitle: "Preparando-se para a Semana 2",
          text: "Na próxima semana, você aprenderá técnicas específicas para controlar impulsos quando gatilhos aparecem. O trabalho que você fez esta semana - identificando e entendendo seus gatilhos - é a fundação essencial para essas técnicas.\n\nLembre-se: consciência é poder. Quanto mais você conhece seus gatilhos, mais controle você tem sobre suas respostas."
        }
      ],
      keyTakeaways: [
        "Rastreamento consistente revela padrões que não são óbvios inicialmente",
        "Seus 3 gatilhos principais devem ser seu foco primário",
        "Sinais físicos e mentais podem alertá-lo sobre gatilhos antes que se tornem avassaladores",
        "A consciência desenvolvida esta semana é a base para todas as técnicas futuras"
      ]
    }
  },

  // SEMANA 2: Controle de Impulsos
  2: {
    1: {
      title: "A Janela de Oportunidade",
      description: "Entenda o momento crítico entre gatilho e ação",
      duration: "7 min",
      type: "video",

      content: [
        {
          subtitle: "O Momento de Escolha",
          text: "Entre o momento em que você experimenta um gatilho e o momento em que você age, existe uma janela de oportunidade. Esta janela pode ser de apenas alguns segundos, mas é nela que a mudança acontece.\n\nA maioria das pessoas não percebe que esta janela existe porque seus comportamentos são tão automáticos. Mas agora que você desenvolveu consciência dos seus gatilhos na Semana 1, você pode começar a reconhecer e expandir esta janela."
        },
        {
          subtitle: "A Regra dos 10 Minutos",
          text: "Quando você sentir um impulso forte, comprometa-se a esperar 10 minutos antes de agir. Durante esses 10 minutos:\n\n• O impulso frequentemente diminui naturalmente\n• Você tem tempo para usar técnicas de controle\n• Você pode avaliar se realmente quer agir\n• Você pratica tolerância ao desconforto\n\nEstudos mostram que a maioria dos impulsos atinge seu pico em 3-5 minutos e depois começa a diminuir. Se você conseguir passar por esse pico, você venceu."
        },
        {
          subtitle: "Surfando a Onda do Impulso",
          text: "Imagine seu impulso como uma onda no oceano. Ela começa pequena, cresce até um pico, e depois naturalmente diminui. Você não precisa lutar contra a onda ou ser arrastado por ela - você pode aprender a 'surfar' sobre ela.\n\nUrge surfing (surfar o impulso) é uma técnica onde você observa o impulso com curiosidade, nota como ele muda de intensidade, e permite que ele passe naturalmente sem agir sobre ele."
        },
        {
          subtitle: "Técnicas Rápidas de Controle",
          list: [
            "Respiração 4-7-8: Inspire por 4, segure por 7, expire por 8",
            "Água gelada no rosto: Ativa o reflexo de mergulho, acalmando o sistema nervoso",
            "Movimento físico: 10 polichinelos ou uma caminhada rápida",
            "Distração intencional: Ligue para um amigo, leia algo, faça um puzzle",
            "Mantra pessoal: Uma frase que você repete ('Isso vai passar', 'Eu sou mais forte que isso')"
          ]
        },
        {
          exercise: "Escolha 3 técnicas da lista acima para experimentar esta semana. Quando você sentir um impulso, use uma delas e registre: Qual técnica você usou? Quão forte era o impulso antes (1-10)? E depois (1-10)? Quanto tempo levou?",
          tip: "Diferentes técnicas funcionam para diferentes pessoas e situações. Experimente várias para descobrir o que funciona melhor para você."
        }
      ],
      keyTakeaways: [
        "Existe uma janela de oportunidade entre gatilho e ação onde a escolha é possível",
        "A Regra dos 10 Minutos aproveita o fato de que impulsos naturalmente diminuem",
        "Urge surfing permite que você observe impulsos sem agir sobre eles",
        "Técnicas rápidas podem interromper o ciclo automático de gatilho-resposta"
      ]
    },
    2: {
      title: "Reestruturação Cognitiva",
      description: "Mude os pensamentos que alimentam seus impulsos",
      duration: "12 min",
      type: "reading",
      content: [
        {
          subtitle: "O Poder dos Pensamentos",
          text: "Seus pensamentos não são fatos - eles são interpretações. E essas interpretações têm um poder enorme sobre seus comportamentos. Pensamentos como 'Eu preciso disso agora' ou 'Eu não aguento este desconforto' intensificam impulsos e tornam resistência mais difícil.\n\nReestruturação cognitiva é o processo de identificar pensamentos problemáticos e substituí-los por pensamentos mais realistas e úteis. Não é pensamento positivo forçado - é pensamento mais preciso."
        },
        {
          subtitle: "Pensamentos Automáticos Comuns",
          list: [
            "'Eu mereço isso' (justificação)",
            "'Só desta vez' (minimização)",
            "'Eu não consigo resistir' (impotência aprendida)",
            "'Isso vai me fazer sentir melhor' (expectativa de alívio)",
            "'Ninguém vai saber' (negação de consequências)",
            "'Eu já estraguei tudo mesmo' (pensamento tudo-ou-nada)",
            "'Eu preciso disso para lidar com...' (dependência emocional)"
          ]
        },
        {
          subtitle: "Questionando Pensamentos Automáticos",
          text: "Quando você notar um pensamento automático, faça estas perguntas:\n\n1. Este pensamento é um fato ou uma opinião?\n2. Qual é a evidência a favor e contra este pensamento?\n3. Estou confundindo um pensamento com a realidade?\n4. Estou usando palavras extremas? (sempre, nunca, preciso, não consigo)\n5. O que eu diria a um amigo que tivesse este pensamento?\n6. Existe uma forma mais equilibrada de ver esta situação?\n7. Este pensamento está me ajudando ou atrapalhando?"
        },
        {
          subtitle: "Criando Pensamentos Alternativos",
          text: "Para cada pensamento automático problemático, crie uma alternativa mais realista:\n\n• 'Eu preciso disso' → 'Eu quero isso, mas não preciso. Eu posso tolerar este desconforto.'\n• 'Só desta vez' → 'Eu já disse isso antes. Cada escolha importa.'\n• 'Eu não consigo resistir' → 'É difícil, mas eu já resisti antes. Eu posso fazer isso novamente.'\n• 'Isso vai me fazer sentir melhor' → 'Pode me dar alívio temporário, mas depois eu vou me sentir pior.'\n• 'Eu já estraguei tudo' → 'Um deslize não apaga meu progresso. Eu posso recomeçar agora.'"
        },
        {
          exercise: "Nos próximos 7 dias, identifique pelo menos um pensamento automático por dia. Escreva o pensamento, questione-o usando as perguntas acima, e crie um pensamento alternativo mais realista. Use o diário do app para registrar.",
          tip: "Reestruturação cognitiva fica mais fácil com a prática. No início, você pode precisar escrever o processo. Com o tempo, você conseguirá fazer mentalmente em segundos."
        }
      ],
      keyTakeaways: [
        "Pensamentos automáticos intensificam impulsos e dificultam resistência",
        "Reestruturação cognitiva substitui pensamentos problemáticos por alternativas realistas",
        "Questionar pensamentos automáticos revela distorções cognitivas",
        "Prática regular torna a reestruturação cognitiva mais rápida e automática"
      ]
    },
    3: {
      title: "Tolerância ao Desconforto",
      description: "Desenvolva sua capacidade de suportar emoções difíceis",
      duration: "10 min",
      type: "reading",
      content: [
        {
          subtitle: "Por que Evitamos Desconforto",
          text: "Muitos comportamentos problemáticos são estratégias de evitação emocional. Você age não porque quer o comportamento em si, mas porque quer escapar de uma emoção desconfortável - ansiedade, tédio, tristeza, raiva, solidão.\n\nO problema é que evitação emocional não funciona a longo prazo. As emoções que você tenta evitar sempre voltam, frequentemente mais fortes. E cada vez que você evita, você reforça a crença de que não pode lidar com essas emoções."
        },
        {
          subtitle: "A Verdade sobre Emoções",
          text: "Emoções, mesmo as desconfortáveis, são:\n\n• Temporárias: Nenhuma emoção dura para sempre\n• Naturais: Todas as emoções têm uma função evolutiva\n• Toleráveis: Você pode sentir desconforto sem agir sobre ele\n• Informativas: Emoções carregam mensagens importantes\n\nQuando você para de lutar contra emoções desconfortáveis e aprende a tolerá-las, elas perdem muito de seu poder sobre você."
        },
        {
          subtitle: "Técnicas de Tolerância ao Desconforto",
          list: [
            "Aceitação radical: 'Esta emoção está aqui. Eu não gosto dela, mas posso tolerá-la.'",
            "Observação sem julgamento: Note a emoção como um observador curioso, não como um participante",
            "Nomeação de emoções: 'Estou sentindo ansiedade' (criar distância entre você e a emoção)",
            "Localização física: Onde você sente a emoção no corpo? Como ela se manifesta fisicamente?",
            "Respiração com a emoção: Respire para a sensação, não contra ela",
            "Tempo limitado: 'Vou sentir isso por 5 minutos e depois reavaliar'"
          ]
        },
        {
          subtitle: "Expandindo sua Zona de Conforto",
          text: "Tolerância ao desconforto é como um músculo - quanto mais você pratica, mais forte fica. Comece com desconfortos pequenos:\n\n• Espere 5 minutos antes de checar seu telefone quando sentir o impulso\n• Sente-se com fome por 10 minutos antes de comer\n• Permaneça em uma conversa desconfortável por mais 2 minutos\n• Sinta tédio sem imediatamente buscar distração\n\nCada pequena prática fortalece sua capacidade de tolerar desconfortos maiores."
        },
        {
          exercise: "Escolha um desconforto pequeno para praticar tolerância esta semana. Quando você sentir o desconforto, use uma das técnicas acima e registre: Que desconforto você sentiu? Que técnica usou? Por quanto tempo tolerou? Como se sentiu depois?",
          tip: "Tolerância ao desconforto não significa gostar do desconforto. Significa reconhecer que você pode suportá-lo sem precisar escapar imediatamente."
        }
      ],
      keyTakeaways: [
        "Muitos comportamentos problemáticos são estratégias de evitação emocional",
        "Emoções desconfortáveis são temporárias, naturais e toleráveis",
        "Técnicas específicas podem ajudar você a permanecer com emoções difíceis",
        "Praticar com desconfortos pequenos fortalece sua capacidade para desconfortos maiores"
      ]
    },
    4: {
      title: "Plano de Ação para Momentos Críticos",
      description: "Crie um plano personalizado para situações de alto risco",
      duration: "15 min",
      type: "video",

      content: [
        {
          subtitle: "Preparação é Proteção",
          text: "Você não pode sempre evitar gatilhos, mas pode se preparar para eles. Um Plano de Ação para Momentos Críticos é como um kit de primeiros socorros emocional - você espera não precisar, mas está pronto se precisar.\n\nEste plano é personalizado para VOCÊ - seus gatilhos específicos, suas técnicas preferidas, seus recursos únicos. Quanto mais específico, mais útil será."
        },
        {
          subtitle: "Componentes do Plano de Ação",
          text: "Seu plano deve incluir:\n\n1. IDENTIFICAÇÃO: Lista dos seus 3-5 gatilhos mais poderosos\n2. SINAIS DE ALERTA: Como você sabe que um gatilho está ativo? (físico, emocional, mental)\n3. TÉCNICAS IMEDIATAS: 3-5 estratégias que você pode usar em menos de 5 minutos\n4. DISTRAÇÕES SAUDÁVEIS: Atividades alternativas que você pode fazer\n5. REDE DE APOIO: Pessoas que você pode contatar\n6. LEMBRETES: Razões pelas quais você quer mudar\n7. PLANO B: O que fazer se as primeiras estratégias não funcionarem"
        },
        {
          subtitle: "Exemplo de Plano de Ação",
          text: "GATILHO: Estresse no trabalho\n\nSINAIS DE ALERTA:\n• Tensão nos ombros\n• Pensamentos acelerados\n• Irritabilidade\n• Vontade de 'escapar'\n\nTÉCNICAS IMEDIATAS:\n1. Respiração 4-7-8 (3 ciclos)\n2. Caminhada de 5 minutos\n3. Técnica STOP\n\nDISTRAÇÕES SAUDÁVEIS:\n• Ligar para um amigo\n• Fazer exercício\n• Trabalhar em um hobby\n• Assistir um episódio de uma série\n\nREDE DE APOIO:\n• João (amigo) - (11) 99999-9999\n• Maria (irmã) - (11) 88888-8888\n• Grupo de apoio online\n\nLEMBRETES:\n• Eu quero me sentir orgulhoso de mim mesmo\n• Minha saúde é prioridade\n• Cada dia limpo é uma vitória\n\nPLANO B:\n• Se nada funcionar, vou para um lugar público\n• Vou usar o chat de suporte do app\n• Vou lembrar que isso é temporário"
        },
        {
          exercise: "Crie seu próprio Plano de Ação para Momentos Críticos. Use o template acima e personalize para seus gatilhos e recursos específicos. Escreva-o e mantenha-o acessível (foto no celular, nota no app, papel na carteira).",
          tip: "Revise e atualize seu plano regularmente. À medida que você aprende o que funciona e o que não funciona, ajuste seu plano."
        },
        {
          subtitle: "Praticando seu Plano",
          text: "Não espere um momento crítico para usar seu plano pela primeira vez. Pratique suas técnicas quando você NÃO está em crise:\n\n• Faça a respiração 4-7-8 todos os dias\n• Pratique a técnica STOP regularmente\n• Teste suas distrações saudáveis\n• Entre em contato com sua rede de apoio preventivamente\n\nQuando você pratica em momentos calmos, as técnicas estarão mais acessíveis em momentos de crise."
        }
      ],
      keyTakeaways: [
        "Um Plano de Ação personalizado prepara você para momentos críticos",
        "O plano deve incluir identificação, sinais de alerta, técnicas, distrações, apoio e lembretes",
        "Praticar técnicas em momentos calmos torna-as mais acessíveis em crises",
        "Revise e atualize seu plano regularmente baseado no que funciona"
      ]
    },
    5: {
      title: "Desafio Semanal: Teste de Resistência",
      description: "Pratique controle de impulsos em situações reais",
      duration: "20 min",
      type: "exercise",
      content: [
        {
          subtitle: "Seu Desafio desta Semana",
          text: "Esta semana é sobre colocar em prática todas as técnicas de controle de impulsos que você aprendeu. Você vai intencionalmente se expor a situações desafiadoras (mas gerenciáveis) e praticar resistência."
        },
        {
          subtitle: "Tarefas do Desafio",
          list: [
            "Use a Regra dos 10 Minutos pelo menos 5 vezes esta semana",
            "Pratique urge surfing sempre que sentir um impulso forte",
            "Identifique e reestruture pelo menos 3 pensamentos automáticos",
            "Pratique tolerância ao desconforto diariamente com pequenos desconfortos",
            "Complete e revise seu Plano de Ação para Momentos Críticos",
            "Use seu plano pelo menos uma vez em uma situação real",
            "Registre cada prática no app e note o que funcionou"
          ]
        },
        {
          subtitle: "Exposição Gradual",
          text: "Escolha uma situação que normalmente seria um gatilho para você, mas que você pode gerenciar com as técnicas que aprendeu. Não escolha sua situação mais difícil - escolha algo desafiador mas alcançável.\n\nExemplos:\n• Ir a um lugar que costuma ser gatilho, mas com um amigo de apoio\n• Experimentar uma emoção desconfortável sem escapar imediatamente\n• Passar por um horário de alto risco usando suas técnicas\n• Ter uma conversa difícil que você tem evitado\n\nO objetivo não é perfeição - é prática. Cada tentativa, mesmo que não seja 100% bem-sucedida, fortalece suas habilidades."
        },
        {
          exercise: "Reflexão Final da Semana:\n\n1. Quantas vezes você usou a Regra dos 10 Minutos? Quantas vezes funcionou?\n\n2. Qual técnica de controle de impulsos funcionou melhor para você?\n\n3. Que pensamentos automáticos você identificou? Como você os reestruturou?\n\n4. Qual foi sua maior vitória esta semana?\n\n5. Qual foi seu maior desafio?\n\n6. O que você aprendeu sobre sua capacidade de controlar impulsos?\n\n7. Como você vai usar o que aprendeu na próxima semana?",
          tip: "Se você teve um deslize esta semana, não desista. Analise o que aconteceu, ajuste seu plano, e continue. Recaídas são parte do processo de mudança, não o fim dele."
        },
        {
          subtitle: "Celebrando Progresso",
          text: "Controle de impulsos é uma das habilidades mais difíceis de desenvolver. Se você praticou as técnicas desta semana, mesmo que não tenha sido perfeito, você merece reconhecimento.\n\nLembre-se: mudança não é linear. Você terá dias melhores e dias piores. O que importa é a direção geral, não cada passo individual."
        }
      ],
      keyTakeaways: [
        "Prática em situações reais é essencial para desenvolver controle de impulsos",
        "Exposição gradual a situações desafiadoras fortalece suas habilidades",
        "Cada tentativa de resistir, mesmo imperfeita, é progresso",
        "Reflexão sobre o que funciona e o que não funciona guia ajustes futuros"
      ]
    }
  },

  // SEMANA 3: Redirecionamento do Foco
  3: {
    1: {
      title: "O Poder da Substituição",
      description: "Aprenda a substituir hábitos negativos por positivos",
      duration: "8 min",
      type: "video",

      content: [
        {
          subtitle: "Por que Substituição Funciona Melhor que Eliminação",
          text: "Tentar simplesmente parar um comportamento deixa um vazio. Seu cérebro ainda quer a recompensa que o comportamento antigo proporcionava. Substituição preenche esse vazio com algo mais saudável.\n\nQuando você substitui em vez de eliminar, você:\n• Mantém a estrutura do hábito (gatilho → rotina → recompensa)\n• Satisfaz a necessidade subjacente de forma mais saudável\n• Cria novos caminhos neurais em vez de apenas tentar apagar os antigos\n• Tem algo positivo para fazer em vez de apenas resistir"
        },
        {
          subtitle: "Identificando a Recompensa Real",
          text: "Para substituir efetivamente, você precisa entender que recompensa você está realmente buscando. Raramente é o comportamento em si - é o que o comportamento proporciona:\n\n• Alívio de estresse ou ansiedade\n• Escape de tédio ou solidão\n• Sensação de prazer ou excitação\n• Conexão social\n• Senso de controle\n• Distração de problemas\n\nUma vez que você identifica a recompensa real, pode encontrar formas mais saudáveis de obtê-la."
        },
        {
          subtitle: "Critérios para Bons Substitutos",
          list: [
            "Proporciona uma recompensa similar ao comportamento antigo",
            "É acessível quando você precisa (não requer preparação extensa)",
            "É genuinamente agradável para você (não apenas 'deveria' ser)",
            "É sustentável a longo prazo",
            "Não tem consequências negativas significativas",
            "Idealmente, contribui para seus objetivos de vida"
          ]
        },
        {
          subtitle: "Exemplos de Substituições Efetivas",
          text: "Se você busca ALÍVIO DE ESTRESSE:\n• Exercício físico intenso\n• Respiração profunda ou meditação\n• Conversar com um amigo\n• Escrever em um diário\n• Tomar um banho quente\n\nSe você busca ESTIMULAÇÃO/EXCITAÇÃO:\n• Exercício desafiador\n• Jogos ou puzzles\n• Aprender algo novo\n• Música energizante\n• Atividade criativa\n\nSe você busca CONEXÃO:\n• Ligar para um amigo ou familiar\n• Participar de um grupo ou comunidade\n• Voluntariado\n• Redes sociais saudáveis\n• Atividades em grupo"
        },
        {
          exercise: "Para cada um dos seus 3 principais gatilhos, identifique: 1) Que recompensa você está realmente buscando? 2) Liste 3 substitutos saudáveis que poderiam proporcionar essa recompensa. 3) Escolha um para experimentar esta semana.",
          tip: "Você pode precisar experimentar vários substitutos antes de encontrar o que funciona. Seja paciente e curioso no processo."
        }
      ],
      keyTakeaways: [
        "Substituição funciona melhor que simples eliminação porque preenche o vazio",
        "Identifique a recompensa real que você busca, não apenas o comportamento superficial",
        "Bons substitutos são acessíveis, agradáveis, sustentáveis e sem consequências negativas",
        "Diferentes recompensas (alívio, estimulação, conexão) requerem diferentes substitutos"
      ]
    },
    2: {
      title: "Construindo uma Vida Rica",
      description: "Crie uma vida tão boa que você não queira escapar dela",
      duration: "12 min",
      type: "reading",
      content: [
        {
          subtitle: "Além de Evitar o Negativo",
          text: "Até agora, focamos em evitar comportamentos problemáticos. Mas recuperação verdadeira não é apenas sobre o que você NÃO faz - é sobre o que você FAZ. É sobre construir uma vida tão satisfatória que comportamentos antigos perdem seu apelo.\n\nPessoas que têm vidas ricas em significado, conexão e propósito têm muito menos probabilidade de recair. Elas têm muito a perder e muito pelo que viver."
        },
        {
          subtitle: "Os Pilares de uma Vida Rica",
          text: "Uma vida satisfatória geralmente inclui:\n\n1. RELACIONAMENTOS: Conexões profundas e significativas\n2. PROPÓSITO: Senso de significado e contribuição\n3. CRESCIMENTO: Aprendizado e desenvolvimento contínuos\n4. SAÚDE: Bem-estar físico e mental\n5. AUTONOMIA: Senso de controle sobre sua vida\n6. PRAZER: Experiências genuinamente agradáveis\n7. REALIZAÇÃO: Progresso em direção a objetivos importantes\n\nQuando esses pilares estão fortes, você tem menos necessidade de escapar ou buscar alívio em comportamentos problemáticos."
        },
        {
          subtitle: "Auditoria de Vida",
          text: "Avalie cada pilar em uma escala de 1-10:\n\nRELACIONAMENTOS: Você tem conexões profundas? Você se sente apoiado e compreendido?\n\nPROPÓSITO: Sua vida tem significado? Você sente que está contribuindo para algo maior?\n\nCRESCIMENTO: Você está aprendendo e se desenvolvendo? Você se sente desafiado de formas positivas?\n\nSAÚDE: Você cuida do seu corpo? Você tem energia e vitalidade?\n\nAUTONOMIA: Você sente que tem escolhas? Você está vivendo de acordo com seus valores?\n\nPRAZER: Você tem momentos de alegria genuína? Você se permite aproveitar a vida?\n\nREALIZAÇÃO: Você está progredindo em direção a objetivos importantes? Você se sente competente?"
        },
        {
          subtitle: "Pequenas Ações, Grande Impacto",
          list: [
            "RELACIONAMENTOS: Envie uma mensagem para um amigo hoje. Agende um café com alguém.",
            "PROPÓSITO: Faça voluntariado por 2 horas este mês. Ajude alguém sem esperar nada em troca.",
            "CRESCIMENTO: Aprenda uma nova habilidade. Leia um livro. Faça um curso online.",
            "SAÚDE: Caminhe 20 minutos por dia. Coma uma refeição nutritiva. Durma 7-8 horas.",
            "AUTONOMIA: Tome uma decisão baseada em seus valores. Diga não a algo que não serve você.",
            "PRAZER: Faça algo que você genuinamente gosta, sem culpa. Saboreie momentos simples.",
            "REALIZAÇÃO: Defina um objetivo pequeno e alcance-o. Celebre seu progresso."
          ]
        },
        {
          exercise: "Escolha o pilar que está mais fraco na sua vida. Defina UMA ação específica que você vai tomar esta semana para fortalecê-lo. Não precisa ser grande - pequenas ações consistentes criam grandes mudanças.",
          tip: "Não tente consertar tudo de uma vez. Foque em um pilar por vez. Mudança sustentável é gradual."
        }
      ],
      keyTakeaways: [
        "Recuperação verdadeira é sobre construir uma vida rica, não apenas evitar comportamentos",
        "Sete pilares contribuem para uma vida satisfatória: relacionamentos, propósito, crescimento, saúde, autonomia, prazer e realização",
        "Avalie cada pilar e identifique áreas que precisam de atenção",
        "Pequenas ações consistentes em cada pilar criam mudança significativa ao longo do tempo"
      ]
    },
    3: {
      title: "Ativação Comportamental",
      description: "Use ação para mudar como você se sente",
      duration: "10 min",
      type: "reading",
      content: [
        {
          subtitle: "Ação Precede Motivação",
          text: "Um dos maiores mitos sobre mudança é que você precisa se sentir motivado antes de agir. A verdade é o oposto: ação cria motivação, não o contrário.\n\nQuando você está deprimido, ansioso ou desmotivado, esperar sentir-se melhor antes de agir mantém você preso. Ativação comportamental inverte isso - você age primeiro, e os sentimentos seguem."
        },
        {
          subtitle: "O Ciclo da Inatividade",
          text: "Quando você se sente mal, é natural querer se retirar e evitar atividades. Mas isso cria um ciclo vicioso:\n\n1. Você se sente mal\n2. Você evita atividades\n3. Você perde oportunidades de recompensa e realização\n4. Você se sente pior\n5. Você evita ainda mais\n\nAtivação comportamental quebra este ciclo fazendo você agir APESAR de como se sente."
        },
        {
          subtitle: "Princípios da Ativação Comportamental",
          list: [
            "Comece pequeno: Ações minúsculas são melhores que nenhuma ação",
            "Agende atividades: Não confie em motivação espontânea",
            "Foque em comportamento, não em sentimentos: Você controla ações, não emoções",
            "Escolha atividades com potencial de recompensa: Coisas que costumavam ser agradáveis",
            "Monitore seu humor: Note como atividades afetam como você se sente",
            "Seja consistente: Repetição é mais importante que intensidade"
          ]
        },
        {
          subtitle: "Criando seu Cardápio de Atividades",
          text: "Crie uma lista de atividades em três categorias:\n\nATIVIDADES DE PRAZER (coisas que você gosta):\n• Ouvir música favorita\n• Assistir um filme\n• Cozinhar algo gostoso\n• Passar tempo na natureza\n• Fazer um hobby\n\nATIVIDADES DE REALIZAÇÃO (coisas que dão senso de competência):\n• Limpar um espaço\n• Completar uma tarefa pendente\n• Aprender algo novo\n• Exercitar-se\n• Trabalhar em um projeto\n\nATIVIDADES SOCIAIS (conexão com outros):\n• Ligar para um amigo\n• Encontrar alguém para café\n• Participar de um grupo\n• Ajudar alguém\n• Ter uma conversa significativa\n\nQuando você se sentir mal ou tentado a comportamentos antigos, escolha uma atividade do seu cardápio."
        },
        {
          exercise: "Crie seu próprio Cardápio de Atividades com pelo menos 5 opções em cada categoria. Esta semana, quando você se sentir mal ou tentado, escolha uma atividade do cardápio em vez de ceder ao impulso. Registre como você se sentiu antes e depois.",
          tip: "Não espere que atividades sejam tão prazerosas quanto costumavam ser no início. Prazer retorna gradualmente à medida que você pratica."
        }
      ],
      keyTakeaways: [
        "Ação cria motivação, não o contrário - você não precisa esperar se sentir motivado",
        "Inatividade cria um ciclo vicioso que piora o humor",
        "Ativação comportamental quebra o ciclo fazendo você agir apesar dos sentimentos",
        "Um cardápio de atividades de prazer, realização e sociais fornece alternativas saudáveis"
      ]
    },
    4: {
      title: "Encontrando seu Propósito",
      description: "Conecte-se com o que realmente importa para você",
      duration: "15 min",
      type: "video",

      content: [
        {
          subtitle: "Por que Propósito Importa",
          text: "Pessoas com um forte senso de propósito têm taxas significativamente menores de recaída. Propósito fornece:\n\n• Motivação intrínseca para mudança\n• Resiliência em momentos difíceis\n• Direção clara para suas ações\n• Significado que transcende desconforto temporário\n• Razões convincentes para resistir a impulsos\n\nQuando você sabe POR QUE está mudando, o COMO fica mais fácil."
        },
        {
          subtitle: "Valores vs. Objetivos",
          text: "Valores são diferentes de objetivos:\n\nOBJETIVOS são destinos - você pode alcançá-los e marcá-los como completos.\nVALORES são direções - você nunca 'completa' um valor, você vive de acordo com ele continuamente.\n\nExemplo:\n• OBJETIVO: Ficar 30 dias limpo\n• VALOR: Viver com integridade e autocuidado\n\nObjetivos são importantes, mas valores fornecem motivação mais profunda e duradoura."
        },
        {
          subtitle: "Identificando seus Valores Centrais",
          text: "Reflita sobre estas perguntas:\n\n1. Que tipo de pessoa você quer ser?\n2. Como você quer ser lembrado?\n3. O que você quer que sua vida represente?\n4. Que qualidades você mais admira em outros?\n5. Quando você se sente mais vivo e autêntico?\n6. Se você tivesse apenas um ano de vida, como viveria?\n7. Que legado você quer deixar?\n\nSuas respostas revelam seus valores centrais."
        },
        {
          subtitle: "Valores Comuns",
          list: [
            "Integridade: Viver de acordo com seus princípios",
            "Conexão: Relacionamentos profundos e significativos",
            "Crescimento: Desenvolvimento e aprendizado contínuos",
            "Contribuição: Fazer diferença na vida de outros",
            "Autenticidade: Ser verdadeiro consigo mesmo",
            "Saúde: Cuidar do corpo e mente",
            "Criatividade: Expressar-se e criar",
            "Liberdade: Autonomia e independência",
            "Compaixão: Gentileza consigo e com outros",
            "Excelência: Fazer o melhor que pode"
          ]
        },
        {
          subtitle: "Vivendo de Acordo com Valores",
          text: "Identificar valores é apenas o começo. O poder vem de VIVER de acordo com eles:\n\nPara cada valor central, pergunte:\n• Como eu estou vivendo este valor agora?\n• Como eu poderia viver este valor mais plenamente?\n• Que ações específicas refletem este valor?\n• Meus comportamentos atuais estão alinhados com este valor?\n\nQuando suas ações diárias refletem seus valores, você experimenta significado e satisfação profundos."
        },
        {
          exercise: "Identifique seus 3 valores centrais. Para cada um, escreva: 1) Por que este valor é importante para você? 2) Como você está vivendo (ou não vivendo) este valor agora? 3) Uma ação específica que você pode tomar esta semana para viver este valor mais plenamente.",
          tip: "Valores não são sobre perfeição. É sobre direção. Cada pequena ação alinhada com seus valores é significativa."
        }
      ],
      keyTakeaways: [
        "Propósito fornece motivação profunda e resiliência em momentos difíceis",
        "Valores são direções de vida, não destinos a serem alcançados",
        "Identificar valores centrais requer reflexão profunda sobre quem você quer ser",
        "O poder vem de viver de acordo com valores através de ações diárias específicas"
      ]
    },
    5: {
      title: "Desafio Semanal: Redesenho de Vida",
      description: "Implemente mudanças concretas em sua vida diária",
      duration: "20 min",
      type: "exercise",
      content: [
        {
          subtitle: "Seu Desafio desta Semana",
          text: "Esta semana é sobre transformar insights em ação. Você vai redesenhar aspectos da sua vida para que ela seja mais rica, mais alinhada com seus valores, e menos dependente de comportamentos antigos."
        },
        {
          subtitle: "Tarefas do Desafio",
          list: [
            "Implemente pelo menos 3 substitutos saudáveis para comportamentos antigos",
            "Fortaleça pelo menos 2 dos 7 pilares de uma vida rica",
            "Use ativação comportamental diariamente - escolha uma atividade do seu cardápio todo dia",
            "Tome pelo menos uma ação alinhada com cada um dos seus 3 valores centrais",
            "Crie uma rotina diária que inclua atividades de prazer, realização e conexão",
            "Identifique e elimine pelo menos um aspecto da sua vida que não serve mais você",
            "Adicione pelo menos um elemento novo que enriquece sua vida"
          ]
        },
        {
          subtitle: "Redesenho de Rotina",
          text: "Analise sua rotina diária típica. Para cada parte do dia, pergunte:\n\n• Esta atividade está alinhada com meus valores?\n• Esta atividade enriquece minha vida ou a drena?\n• Há algo que eu poderia adicionar ou mudar?\n• Há momentos de alto risco que precisam de estrutura?\n• Há oportunidades perdidas de prazer, realização ou conexão?\n\nRedesenhe sua rotina para incluir mais do que serve você e menos do que não serve."
        },
        {
          subtitle: "Experimento de Vida",
          text: "Escolha UMA mudança significativa para experimentar esta semana:\n\n• Comece um novo hobby ou atividade\n• Reconecte-se com um amigo antigo\n• Estabeleça uma nova rotina matinal ou noturna\n• Voluntarie-se para uma causa que importa para você\n• Comece um projeto criativo\n• Junte-se a um grupo ou comunidade\n• Aprenda uma nova habilidade\n\nO objetivo não é perfeição - é experimentação. Você está descobrindo o que funciona para VOCÊ."
        },
        {
          exercise: "Reflexão Final da Semana:\n\n1. Que substitutos você implementou? Quais funcionaram melhor?\n\n2. Que pilares você fortaleceu? Como isso afetou seu bem-estar geral?\n\n3. Como ativação comportamental impactou seu humor e impulsos?\n\n4. Que ações alinhadas com valores você tomou? Como você se sentiu?\n\n5. Como sua rotina mudou? Que diferença isso fez?\n\n6. Que experimento de vida você tentou? O que você aprendeu?\n\n7. Sua vida está mais rica agora do que estava há uma semana? Como?",
          tip: "Mudança real leva tempo. Seja paciente consigo mesmo. Cada pequeno passo é progresso, mesmo que não pareça."
        },
        {
          subtitle: "Olhando para Frente",
          text: "Você completou três semanas de trabalho intenso. Você:\n• Desenvolveu consciência profunda dos seus gatilhos\n• Aprendeu técnicas poderosas de controle de impulsos\n• Começou a construir uma vida mais rica e significativa\n\nNa próxima semana, você aprenderá a ritualizar essas mudanças - transformá-las em parte permanente de quem você é."
        }
      ],
      keyTakeaways: [
        "Transformar insights em ação requer experimentação e ajuste",
        "Redesenhar rotinas para incluir mais do que serve você e menos do que não serve",
        "Experimentos de vida ajudam você a descobrir o que funciona para você",
        "Uma vida mais rica reduz naturalmente o apelo de comportamentos antigos"
      ]
    }
  },

  // SEMANA 4: Ritualização da Mudança
  4: {
    1: {
      title: "O Poder dos Rituais",
      description: "Transforme mudanças temporárias em hábitos permanentes",
      duration: "8 min",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/75d_29QWELk",
      content: [
        {
          subtitle: "Rituais vs. Hábitos",
          text: "Hábitos são comportamentos automáticos. Rituais são comportamentos intencionais carregados de significado. Ambos são importantes, mas rituais têm um poder especial:\n\n• Rituais criam senso de identidade\n• Rituais marcam transições importantes\n• Rituais fornecem estrutura e previsibilidade\n• Rituais conectam você a algo maior que você mesmo\n\nQuando você ritualiza mudanças, você as transforma de esforço em expressão de quem você é."
        },
        {
          subtitle: "Elementos de Rituais Poderosos",
          list: [
            "INTENCIONALIDADE: Você faz conscientemente, não automaticamente",
            "SIGNIFICADO: O ritual representa algo importante para você",
            "CONSISTÊNCIA: Você faz regularmente, criando previsibilidade",
            "ATENÇÃO PLENA: Você está presente durante o ritual",
            "SIMBOLISMO: O ritual tem significado além da ação física",
            "CONEXÃO: O ritual conecta você a valores, comunidade ou propósito"
          ]
        },
        {
          subtitle: "Rituais Matinais",
          text: "Como você começa o dia define o tom para tudo que segue. Um ritual matinal poderoso:\n\n• Acorda você gradualmente, não abruptamente\n• Centra você antes das demandas do dia\n• Reforça sua identidade e valores\n• Cria momentum positivo\n• Protege contra começar o dia em modo reativo\n\nExemplo de ritual matinal:\n1. Acordar sem alarme (ou com alarme suave)\n2. Não checar telefone imediatamente\n3. Beber um copo de água\n4. 5 minutos de meditação ou respiração\n5. Escrever 3 coisas pelas quais você é grato\n6. Revisar suas intenções para o dia\n7. Movimento físico (alongamento, yoga, caminhada)\n8. Café da manhã nutritivo e consciente"
        },
        {
          subtitle: "Rituais Noturnos",
          text: "Como você termina o dia é igualmente importante. Um ritual noturno:\n\n• Sinaliza ao seu corpo que é hora de desacelerar\n• Processa o dia que passou\n• Prepara você para sono restaurador\n• Cria fechamento, não deixando o dia invadir a noite\n\nExemplo de ritual noturno:\n1. Parar de usar telas 1 hora antes de dormir\n2. Preparar o ambiente (temperatura, escuridão, silêncio)\n3. Higiene pessoal como ritual de autocuidado\n4. Reflexão no diário (o que foi bem, o que você aprendeu)\n5. Leitura de algo inspirador ou relaxante\n6. Meditação ou respiração para relaxamento\n7. Gratidão por 3 coisas do dia\n8. Intenção para o dia seguinte"
        },
        {
          exercise: "Desenhe seu ritual matinal e noturno ideal. Não precisa ser longo - 15-30 minutos é suficiente. Inclua elementos que sejam significativos para VOCÊ. Implemente um dos rituais esta semana e observe como afeta seu dia.",
          tip: "Comece simples. É melhor ter um ritual curto que você faz consistentemente do que um ritual elaborado que você abandona."
        }
      ],
      keyTakeaways: [
        "Rituais são comportamentos intencionais carregados de significado",
        "Rituais matinais definem o tom do dia e criam momentum positivo",
        "Rituais noturnos criam fechamento e preparam para sono restaurador",
        "Rituais efetivos são intencionais, significativos, consistentes e atentos"
      ]
    },
    2: {
      title: "Identidade e Mudança",
      description: "Torne-se a pessoa que naturalmente faz as escolhas certas",
      duration: "12 min",
      type: "reading",
      content: [
        {
          subtitle: "Mudança Baseada em Identidade",
          text: "Existem três níveis de mudança:\n\n1. RESULTADOS: O que você quer alcançar\n2. PROCESSOS: O que você faz\n3. IDENTIDADE: Quem você é\n\nA maioria das pessoas foca em resultados ('Quero ficar 30 dias limpo'). Alguns focam em processos ('Vou usar estas técnicas'). Mas mudança mais profunda e duradoura acontece no nível de identidade ('Eu sou alguém que cuida de si mesmo')."
        },
        {
          subtitle: "O Poder da Identidade",
          text: "Quando mudança está enraizada em identidade:\n\n• Você não precisa de força de vontade constante\n• Escolhas certas parecem naturais, não forçadas\n• Você tem motivação intrínseca, não apenas externa\n• Você é resiliente porque está vivendo de acordo com quem você é\n• Você não está 'tentando' mudar - você JÁ mudou\n\nIdentidade é o nível mais profundo e poderoso de mudança."
        },
        {
          subtitle: "Construindo Nova Identidade",
          text: "Identidade não muda através de declarações ('Eu sou uma pessoa saudável'). Identidade muda através de evidência - pequenas ações repetidas que provam para você mesmo quem você é.\n\nCada vez que você:\n• Resiste a um impulso, você é alguém com autocontrole\n• Faz exercício, você é alguém que valoriza saúde\n• Medita, você é alguém que pratica mindfulness\n• Escolhe uma alternativa saudável, você é alguém que faz boas escolhas\n• Pede ajuda, você é alguém corajoso e sábio\n\nCada ação é um voto para o tipo de pessoa que você quer ser."
        },
        {
          subtitle: "Perguntas de Identidade",
          text: "Em vez de perguntar 'O que eu quero?', pergunte 'Quem eu quero ser?'\n\nEm vez de 'Como eu resisto a este impulso?', pergunte 'O que uma pessoa com autocontrole faria?'\n\nEm vez de 'Como eu alcanço este objetivo?', pergunte 'Que tipo de pessoa alcança este objetivo?'\n\nEssas perguntas mudam seu foco de comportamento para identidade."
        },
        {
          subtitle: "Declarações de Identidade",
          list: [
            "'Eu sou alguém que cuida de si mesmo'",
            "'Eu sou alguém que faz escolhas conscientes'",
            "'Eu sou alguém que enfrenta desafios com coragem'",
            "'Eu sou alguém que valoriza saúde e bem-estar'",
            "'Eu sou alguém que aprende e cresce continuamente'",
            "'Eu sou alguém que vive de acordo com seus valores'",
            "'Eu sou alguém que merece uma vida boa'",
            "'Eu sou alguém que não desiste'"
          ]
        },
        {
          exercise: "Escreva sua declaração de identidade: 'Eu sou alguém que...' Complete esta frase de forma que reflita quem você quer ser. Então, identifique 3 pequenas ações que você pode tomar esta semana que seriam evidência desta identidade.",
          tip: "Identidade não muda da noite para o dia. Seja paciente. Cada pequena ação consistente com sua nova identidade fortalece essa identidade."
        }
      ],
      keyTakeaways: [
        "Mudança mais profunda acontece no nível de identidade, não apenas comportamento",
        "Identidade muda através de evidência - pequenas ações repetidas",
        "Cada ação é um voto para o tipo de pessoa que você quer ser",
        "Perguntas baseadas em identidade ('Quem eu quero ser?') são mais poderosas que perguntas baseadas em resultados"
      ]
    },
    3: {
      title: "Sistemas de Suporte",
      description: "Construa uma rede que sustenta sua mudança",
      duration: "10 min",
      type: "reading",
      content: [
        {
          subtitle: "Por que Suporte Importa",
          text: "Mudança sustentável raramente acontece em isolamento. Humanos são seres sociais - somos profundamente influenciados pelas pessoas ao nosso redor. Um sistema de suporte forte:\n\n• Fornece encorajamento em momentos difíceis\n• Oferece accountability e responsabilidade\n• Compartilha sabedoria e experiência\n• Reduz solidão e isolamento\n• Celebra vitórias com você\n• Normaliza desafios e deslizes\n• Lembra você de quem você está se tornando"
        },
        {
          subtitle: "Tipos de Suporte",
          text: "Diferentes tipos de suporte servem diferentes necessidades:\n\nSUPORTE EMOCIONAL:\n• Alguém que ouve sem julgar\n• Alguém que valida seus sentimentos\n• Alguém que oferece empatia e compreensão\n\nSUPORTE PRÁTICO:\n• Alguém que ajuda com tarefas concretas\n• Alguém que oferece recursos ou informações\n• Alguém que remove obstáculos\n\nSUPORTE DE ACCOUNTABILITY:\n• Alguém que verifica seu progresso\n• Alguém que gentilmente desafia você\n• Alguém que mantém você responsável por compromissos\n\nSUPORTE DE EXPERIÊNCIA:\n• Alguém que passou por jornada similar\n• Alguém que entende seus desafios\n• Alguém que pode compartilhar o que funcionou"
        },
        {
          subtitle: "Construindo sua Rede de Suporte",
          list: [
            "Identifique pessoas em sua vida que apoiam sua mudança",
            "Seja específico sobre que tipo de suporte você precisa",
            "Considere grupos de apoio (presenciais ou online)",
            "Encontre um mentor ou coach",
            "Use tecnologia (apps, comunidades online, fóruns)",
            "Seja recíproco - ofereça suporte também",
            "Comunique suas necessidades claramente",
            "Estabeleça limites com pessoas que não apoiam sua mudança"
          ]
        },
        {
          subtitle: "Quando Pedir Ajuda",
          text: "Muitas pessoas lutam para pedir ajuda. Elas veem isso como fraqueza. Mas pedir ajuda é:\n\n• Um sinal de autoconsciência\n• Um ato de coragem\n• Uma estratégia inteligente\n• Uma demonstração de compromisso com mudança\n\nPeça ajuda quando:\n• Você está lutando e técnicas usuais não estão funcionando\n• Você se sente isolado ou sozinho\n• Você precisa de perspectiva externa\n• Você quer celebrar uma vitória\n• Você teve um deslize e precisa de apoio para recomeçar\n• Você simplesmente precisa de conexão humana"
        },
        {
          subtitle: "Protegendo sua Mudança",
          text: "Nem todas as pessoas em sua vida apoiarão sua mudança. Algumas podem:\n• Minimizar seus esforços\n• Tentar sabotá-lo (consciente ou inconscientemente)\n• Pressionar você a voltar a comportamentos antigos\n• Fazer você se sentir culpado por mudar\n\nÉ okay estabelecer limites ou até distanciar-se de pessoas que não apoiam sua mudança. Sua recuperação é prioridade."
        },
        {
          exercise: "Mapeie sua rede de suporte: 1) Liste 3-5 pessoas que apoiam sua mudança. 2) Para cada pessoa, identifique que tipo de suporte ela oferece. 3) Identifique lacunas - que tipo de suporte você precisa mas não tem? 4) Faça um plano para preencher essas lacunas (grupo de apoio, terapeuta, mentor, comunidade online).",
          tip: "Construir uma rede de suporte leva tempo. Comece com uma ou duas pessoas e expanda gradualmente."
        }
      ],
      keyTakeaways: [
        "Mudança sustentável raramente acontece em isolamento - suporte é essencial",
        "Diferentes tipos de suporte (emocional, prático, accountability, experiência) servem diferentes necessidades",
        "Pedir ajuda é sinal de força e autoconsciência, não fraqueza",
        "Proteja sua mudança estabelecendo limites com pessoas que não a apoiam"
      ]
    },
    4: {
      title: "Prevenção de Recaída",
      description: "Prepare-se para desafios futuros e mantenha seu progresso",
      duration: "15 min",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/FmjjxdDwOIc",
      content: [
        {
          subtitle: "Recaída é Parte do Processo",
          text: "Primeiro, vamos ser honestos: a maioria das pessoas experimenta pelo menos um deslize ou recaída em sua jornada de mudança. Isso não significa que você falhou - significa que você é humano.\n\nRecaída não é um evento único - é um processo que geralmente começa muito antes do comportamento real. Reconhecer os sinais de alerta precoces permite que você intervenha antes que uma recaída completa aconteça."
        },
        {
          subtitle: "Estágios da Recaída",
          text: "RECAÍDA EMOCIONAL:\n• Você não está pensando em usar, mas suas emoções e comportamentos estão preparando o terreno\n• Sinais: isolamento, não pedir ajuda, má alimentação/sono, negligenciar autocuidado\n\nRECAÍDA MENTAL:\n• Você começa a pensar sobre usar\n• Sinais: glamorizar o passado, mentir, planejar recaída, procurar oportunidades\n\nRECAÍDA FÍSICA:\n• Você volta ao comportamento\n• Pode ser um deslize (episódio único) ou recaída completa (retorno ao padrão antigo)\n\nIntervenção é mais fácil e efetiva nos estágios iniciais."
        },
        {
          subtitle: "Sinais de Alerta de Recaída",
          list: [
            "Parar de usar técnicas que estavam funcionando",
            "Isolamento social e evitação de suporte",
            "Pensamento 'Eu estou curado, não preciso mais me preocupar'",
            "Retorno a lugares, pessoas ou situações de alto risco",
            "Aumento de estresse sem estratégias de enfrentamento",
            "Negligenciar autocuidado (sono, alimentação, exercício)",
            "Romantizar o passado ou minimizar consequências",
            "Segredos e mentiras aumentando",
            "Irritabilidade e mudanças de humor",
            "Pensamento tudo-ou-nada ('Já que eu deslizei, tanto faz')"
          ]
        },
        {
          subtitle: "Plano de Prevenção de Recaída",
          text: "Crie um plano escrito que inclui:\n\n1. SEUS SINAIS DE ALERTA PESSOAIS\nQuais comportamentos, pensamentos ou emoções indicam que você está em risco?\n\n2. SITUAÇÕES DE ALTO RISCO\nQue situações, lugares, pessoas ou estados emocionais são mais perigosos para você?\n\n3. ESTRATÉGIAS DE ENFRENTAMENTO\nQue técnicas específicas você usará para cada situação de alto risco?\n\n4. REDE DE EMERGÊNCIA\nQuem você ligará? Em que ordem? Tenha números salvos e acessíveis.\n\n5. PLANO DE DESLIZE\nSe você deslizar, o que você fará nas primeiras 24 horas para evitar recaída completa?\n\n6. LEMBRETES\nPor que você quer manter sua mudança? O que você tem a perder?"
        },
        {
          subtitle: "Se Você Deslizar",
          text: "Se você tiver um deslize:\n\n1. PARE imediatamente - não continue\n2. SEJA GENTIL consigo mesmo - vergonha piora as coisas\n3. ANALISE o que aconteceu - que gatilhos, pensamentos, emoções precederam?\n4. PEÇA AJUDA - ligue para alguém da sua rede\n5. APRENDA - o que este deslize ensina sobre seus pontos vulneráveis?\n6. AJUSTE seu plano baseado no que aprendeu\n7. RECOMECE imediatamente - não espere segunda-feira ou próximo mês\n\nUm deslize é um evento de aprendizado, não uma sentença de fracasso."
        },
        {
          exercise: "Crie seu Plano de Prevenção de Recaída completo usando o template acima. Seja específico e honesto. Compartilhe este plano com pelo menos uma pessoa da sua rede de suporte. Revise e atualize este plano mensalmente.",
          tip: "Esperamos que você nunca precise usar seu plano de recaída. Mas tê-lo preparado reduz ansiedade e aumenta confiança de que você pode lidar com desafios futuros."
        }
      ],
      keyTakeaways: [
        "Recaída é um processo com estágios (emocional, mental, física), não um evento único",
        "Reconhecer sinais de alerta precoces permite intervenção antes de recaída completa",
        "Um plano de prevenção de recaída escrito prepara você para desafios futuros",
        "Se deslize acontecer, resposta imediata e compassiva previne recaída completa"
      ]
    },
    5: {
      title: "Celebração e Continuação",
      description: "Honre seu progresso e planeje seu futuro",
      duration: "20 min",
      type: "exercise",
      content: [
        {
          subtitle: "Você Completou 30 Dias!",
          text: "Parabéns! Você completou 30 dias de trabalho intenso de transformação. Isso é uma conquista significativa que merece reconhecimento.\n\nNestes 30 dias, você:\n• Desenvolveu consciência profunda dos seus gatilhos\n• Aprendeu e praticou técnicas poderosas de controle de impulsos\n• Começou a construir uma vida mais rica e significativa\n• Criou rituais que sustentam sua mudança\n• Construiu uma rede de suporte\n• Preparou-se para desafios futuros\n\nEste é apenas o começo. A verdadeira jornada é o que vem depois."
        },
        {
          subtitle: "Reflexão dos 30 Dias",
          text: "Reserve tempo para refletir profundamente sobre sua jornada:"
        },
        {
          exercise: "1. O que foi sua maior vitória nestes 30 dias?\n\n2. Qual foi seu maior desafio? Como você o superou?\n\n3. Que técnica ou estratégia foi mais útil para você?\n\n4. Como você mudou nestes 30 dias? (comportamentos, pensamentos, sentimentos, identidade)\n\n5. O que você aprendeu sobre si mesmo?\n\n6. De que você está mais orgulhoso?\n\n7. O que você quer que seu 'eu' de 30 dias atrás soubesse?\n\n8. Como sua vida é diferente agora?\n\n9. Que evidência você tem de que você é uma pessoa diferente agora?\n\n10. O que você quer para os próximos 30 dias?",
          tip: "Volte a estas lições sempre que precisar. Releia, repratique, relembre. Estas ferramentas são suas para sempre."
        },
        {
          subtitle: "Celebrando Progresso",
          text: "Celebração não é apenas sentir-se bem - é reforço neurológico. Quando você celebra, você:\n\n• Fortalece conexões neurais associadas com comportamentos positivos\n• Aumenta motivação intrínseca\n• Constrói autoeficácia (crença na sua capacidade)\n• Cria memórias positivas associadas com mudança\n• Reconhece que esforço vale a pena\n\nComo celebrar:\n• Compartilhe sua vitória com alguém que se importa\n• Escreva uma carta para si mesmo reconhecendo seu progresso\n• Faça algo especial para você (que não comprometa sua mudança)\n• Atualize seu diário com todas as suas conquistas\n• Tire uma foto ou crie um símbolo visual do seu progresso"
        },
        {
          subtitle: "Planejando os Próximos 30 Dias",
          text: "Mudança sustentável requer continuação. Não pare agora. Para os próximos 30 dias:\n\n1. MANTENHA o que está funcionando\n• Que rituais, técnicas e hábitos você quer manter?\n• Como você garantirá consistência?\n\n2. APROFUNDE o que precisa de mais trabalho\n• Que área ainda é desafiadora?\n• Que técnica você quer dominar melhor?\n\n3. EXPANDA para novas áreas\n• Que aspecto da sua vida você quer melhorar agora?\n• Que novo objetivo você quer perseguir?\n\n4. FORTALEÇA seu sistema de suporte\n• Como você pode aprofundar conexões existentes?\n• Que novo suporte você quer adicionar?"
        },
        {
          subtitle: "Compromisso Contínuo",
          list: [
            "Continue usando o app diariamente para check-ins e diário",
            "Mantenha seus rituais matinais e noturnos",
            "Pratique mindfulness e técnicas de controle de impulsos regularmente",
            "Fortaleça continuamente os 7 pilares de uma vida rica",
            "Revise seu Plano de Prevenção de Recaída mensalmente",
            "Mantenha conexão com sua rede de suporte",
            "Celebre pequenas vitórias diariamente",
            "Seja compassivo consigo mesmo em dias difíceis",
            "Lembre-se: você é alguém que não desiste"
          ]
        },
        {
          subtitle: "Mensagem Final",
          text: "Mudança real é possível. Você provou isso para si mesmo nestes 30 dias. Haverá dias difíceis à frente - isso é garantido. Mas você agora tem ferramentas, conhecimento, suporte e, mais importante, evidência de que você é capaz.\n\nVocê não é definido por seus comportamentos passados. Você é definido por suas escolhas presentes. E cada dia, você tem a oportunidade de escolher quem você quer ser.\n\nEste não é o fim - é um novo começo. Continue. Você merece a vida que está construindo."
        }
      ],
      keyTakeaways: [
        "Completar 30 dias é uma conquista significativa que merece celebração",
        "Reflexão profunda sobre a jornada consolida aprendizados",
        "Celebração reforça neurologicamente comportamentos positivos",
        "Mudança sustentável requer continuação - planeje os próximos 30 dias e além"
      ]
    }
  }
}
