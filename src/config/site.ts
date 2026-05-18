export const site = {
  name: "Звезда караоке",
  tagline: "Онлайн-курс вокала",
  demoBadge: "Демо v0.1 — для согласования",
  contacts: {
    telegram: "https://t.me/your_bot",
    whatsapp: "https://wa.me/79000000000",
    phone: "+7 (900) 000-00-00",
    phoneHref: "tel:+79000000000",
  },
} as const;

export const hero = {
  eyebrow: "Школа «Виртуозы»",
  title: "Пойте уверенно — без страха и зажимов",
  subtitle:
    "Онлайн-курс «Звезда караоке»: короткие уроки с телефона, поддержка и путь от страха к сцене.",
  cta: "Получить бесплатный урок",
  ctaHint: "Бесплатно · старт в Telegram за 1 минуту",
  stats: [
    { value: "15 лет", label: "школа" },
    { value: "4", label: "модуля" },
    { value: "24", label: "урока" },
    { value: "✓", label: "сертификат" },
  ],
} as const;

export const problems = {
  title: "Знакомо?",
  items: [
    {
      title: "Боюсь петь при других",
      description: "Страх чужой оценки",
      icon: "users",
    },
    {
      title: "Не попадаю в ноты",
      description: "Сложно попасть в ноты",
      icon: "music",
    },
    {
      title: "Кажется, что нет голоса",
      description: "Голос кажется слабым",
      icon: "mic",
    },
    {
      title: "Не знаю, какие песни подходят",
      description: "Неясно, что петь",
      icon: "list",
    },
    {
      title: "Стесняюсь сцены",
      description: "Страх сцены и караоке",
      icon: "stage",
    },
  ],
} as const;

export const transformation = {
  title: "Уже через 1 неделю ты:",
  items: [
    "звучишь увереннее",
    "меньше зажимаешься",
    "начинаешь попадать в ноты",
    "понимаешь, как работает голос",
  ],
} as const;

export const about = {
  school: {
    name: "Виртуозы",
    description:
      "Музыкальная школа с многолетним опытом. Мы учим не только технике, но и радости от пения.",
    achievements: [
      "Более 1000 учеников",
      "Онлайн и офлайн форматы",
      "Индивидуальный подход",
    ],
  },
  teacher: {
    name: "Переверзева Софья",
    role: "Преподаватель вокала",
    bio: "Помогает ученикам раскрыть голос мягко и без давления. Специализация — работа со страхом сцены и зажимами.",
    achievements: [
      "Педагогический стаж 8+ лет",
      "Авторская методика «мягкого входа»",
      "Подготовка к выступлениям",
    ],
  },
} as const;

export const program = {
  title: "Программа курса",
  subtitle: "4 модуля · 24 урока · ~3 месяца",
  modules: [
    {
      title: "Убрать страх",
      description: "Работа с тревогой, дыхание, первые упражнения без стресса",
      number: 1,
    },
    {
      title: "Уверенный голос",
      description: "Опора, резонанс, стабильный звук в комфортном диапазоне",
      number: 2,
    },
    {
      title: "Попадание в ноты",
      description: "Слух, интонация, простые упражнения на точность",
      number: 3,
    },
    {
      title: "Эмоции и подача",
      description: "Характер песни, микрофон, мини-выступление",
      number: 4,
    },
  ],
} as const;

export const format = {
  title: "Формат обучения",
  items: [
    {
      title: "Короткие уроки",
      description: "15–20 минут — легко встроить в день",
    },
    {
      title: "Занятия с телефона",
      description: "Учись где удобно, без студии",
    },
    {
      title: "Поддержка",
      description: "Обратная связь и ответы на вопросы",
    },
    {
      title: "Удобный темп",
      description: "Свой ритм без жёстких дедлайнов",
    },
  ],
} as const;

export const telegramBlock = {
  title: "Бесплатный урок в Telegram",
  subtitle: "Начни без давления — прямо в мессенджере",
  points: [
    "Пробный урок бесплатно — познакомься с форматом",
    "Мини-курс доступен сразу после старта",
    "Лёгкий вход: без регистрации на сложных платформах",
  ],
  cta: "Перейти в Telegram и получить урок",
  formTitle: "Или оставь заявку — перезвоним",
} as const;

export const pricing = {
  title: "Тарифы",
  subtitle: "Запись уроков · обратная связь в старших тарифах",
  plans: [
    {
      id: "basic",
      name: "Базовый",
      price: "8 600 ₽",
      features: ["Запись уроков", "Без обратной связи"],
      featured: false,
    },
    {
      id: "standard",
      name: "Стандарт",
      price: "12 800 ₽",
      features: ["Обратная связь", "Лекции психолога"],
      featured: true,
      badge: "Лучший выбор",
    },
    {
      id: "premium",
      name: "Премиум",
      price: "19 500 ₽",
      features: [
        "Обратная связь",
        "Психолог",
        "4 индивидуальных занятия",
      ],
      featured: false,
    },
  ],
  miniCourse: {
    title: "Пока не готовы к полному курсу?",
    description:
      "Попробуйте платный мини-курс — короткий формат с ключевыми упражнениями",
    cta: "Узнать о мини-курсе в Telegram",
  },
} as const;

export const reviews = {
  title: "Отзывы учеников",
  items: [
    {
      name: "Анна К.",
      text: "Наконец перестала бояться петь при муже. Уроки короткие и понятные — идеально после работы.",
      rating: 5,
    },
    {
      name: "Дмитрий М.",
      text: "Думал, что слуха нет. Через две недели начал попадать в мелодию любимой песни.",
      rating: 5,
    },
    {
      name: "Елена С.",
      text: "Софья объясняет спокойно, без давления. Telegram-формат — самое то для занятых.",
      rating: 5,
    },
    {
      name: "Мария В.",
      text: "Мини-курс помог понять, подходит ли мне курс. Потом взяла Стандарт — не пожалела.",
      rating: 5,
    },
  ],
} as const;

const faqPlaceholder =
  "Ответ будет добавлен на финальной версии сайта." as const;

export const faq = {
  title: "Частые вопросы",
  items: [
    {
      question: "Мне 30/40/50+, мне подойдёт курс?",
      answer: faqPlaceholder,
    },
    {
      question: "Если у меня нет слуха, получится?",
      answer: faqPlaceholder,
    },
    {
      question: "Сколько времени нужно в день?",
      answer: faqPlaceholder,
    },
    {
      question: "Подходит ли курс новичкам?",
      answer: faqPlaceholder,
    },
    {
      question: "Как открыть доступ?",
      answer: faqPlaceholder,
    },
    {
      question: "Как проходит поддержка?",
      answer: faqPlaceholder,
    },
    {
      question: "Что делать, если я пропущу занятие?",
      answer: faqPlaceholder,
    },
    {
      question: "Будет ли сертификат?",
      answer: faqPlaceholder,
    },
  ],
} as const;

export const finalCta = {
  title: "Голос — это навык, и он начинается с одного шага",
  subtitle: "Первый шаг — бесплатный урок в Telegram",
  cta: "Получить бесплатный урок",
} as const;
