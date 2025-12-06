// Constants for the Recomeço program

export const PROGRAM_DURATION = 30 // days

export const WEEK_MODULES = [
  {
    week: 1,
    title: "Consciência dos gatilhos",
    description: "Identifique padrões e entenda seus gatilhos emocionais",
    focus: "Autoconhecimento e reconhecimento de sinais",
    color: "emerald"
  },
  {
    week: 2,
    title: "Controle de impulsos",
    description: "Técnicas práticas para interromper o ciclo",
    focus: "Estratégias de interrupção e distração saudável",
    color: "blue"
  },
  {
    week: 3,
    title: "Redirecionamento do foco",
    description: "Construa novos hábitos e atividades significativas",
    focus: "Criação de rotinas positivas e propósito",
    color: "purple"
  },
  {
    week: 4,
    title: "Ritualização da mudança",
    description: "Consolide hábitos e prepare-se para o longo prazo",
    focus: "Manutenção e prevenção de recaídas",
    color: "amber"
  }
]

export const COMMON_TRIGGERS = [
  "Estresse",
  "Tédio",
  "Solidão",
  "Ansiedade",
  "Procrastinação",
  "Insônia",
  "Redes sociais",
  "Conflitos",
  "Baixa autoestima",
  "Cansaço"
]

export const MOOD_LABELS = {
  1: "Muito difícil",
  2: "Difícil",
  3: "Neutro",
  4: "Bem",
  5: "Muito bem"
}

export const PRIVACY_PRINCIPLES = [
  "Seus dados são criptografados de ponta a ponta",
  "Usamos apenas pseudônimos, nunca nomes reais",
  "Não compartilhamos informações com terceiros",
  "Você pode deletar sua conta a qualquer momento",
  "Não usamos dados sensíveis para marketing"
]

export const CBT_TECHNIQUES = [
  {
    name: "Respiração 4-7-8",
    description: "Inspire por 4s, segure por 7s, expire por 8s",
    duration: 5
  },
  {
    name: "Técnica dos 5 sentidos",
    description: "Identifique 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que saboreia",
    duration: 3
  },
  {
    name: "Diário de pensamentos",
    description: "Registre o pensamento, identifique a distorção, reformule de forma realista",
    duration: 10
  },
  {
    name: "Ação oposta",
    description: "Quando sentir o impulso, faça o oposto: saia, ligue para alguém, exercite-se",
    duration: 15
  }
]

export const SUPPORT_PROMPTS = {
  urge: [
    "Percebo que você está enfrentando um momento difícil. Vamos respirar juntos?",
    "Que tal usar a técnica dos 5 sentidos agora? Isso pode ajudar a passar o impulso.",
    "Lembre-se: esse sentimento é temporário. Você já superou isso antes."
  ],
  victory: [
    "Parabéns! Cada vitória conta e fortalece sua jornada.",
    "Você está construindo um novo padrão. Continue assim!",
    "Que conquista! Registre como você se sente agora para lembrar nos momentos difíceis."
  ],
  relapse: [
    "Uma recaída não apaga todo seu progresso. O que você aprendeu com isso?",
    "Vamos identificar o que aconteceu para fortalecer suas estratégias.",
    "Recomeçar faz parte do processo. Você está aqui, e isso já é uma vitória."
  ]
}
