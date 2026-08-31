const root = import.meta.env.BASE_URL;
export const asset = (path: string) => `${root}${path.replace(/^\//, '')}`;

export const site = {
  name: 'NEUROVIDEO', byline: 'by Rata_mult',
  title: 'NeuroVideo — практические разборы AI-видео',
  description: 'Пошаговые разборы создания AI-видео: референсы, промты, настройки MiniMax H3, Seedance, WAN и Comfy Cloud.',
  nav: [{label:'Разборы',url:'#works'},{label:'Процесс',url:'#process'},{label:'Об авторе',url:'#about'},{label:'FAQ',url:'#faq'}],
  hero: {
    badge: 'Практические AI-видео разборы', titleLead: 'Смотри ролик.\nПовторяй ', titleAccent: 'по шагам.',
    subtitle: 'Разборы конкретных AI-видео: референсы, промты, настройки и весь путь до готового кадра.',
    primaryCta: {label:'▶ Смотреть работы',url:'#works'}, secondaryCta:{label:'Что внутри гайда',url:'#guide'},
    poster:'/images/hero-poster.svg', video:'/videos/hero.mp4'
  },
  benefits: [
    {icon:'↗',title:'Пошаговые разборы',text:'от референса до финала'}, {icon:'⌁',title:'Конкретные настройки',text:'без воды и теории'},
    {icon:'◎',title:'Рабочие связки',text:'MiniMax H3, Comfy и др.'}, {icon:'□',title:'Доступ к материалу',text:'через Telegram'}
  ],
  works: {
    title:'Видео — сначала.\nТеория — только нужная.', description:'На странице главную роль играют реальные ролики. Каждый материал показывает конечный результат, а уже затем раскрывает пайплайн его создания.', link:{label:'Смотреть все разборы →',url:'#works'},
    items:[
      {badge:'MINIMAX H3',title:'Reference → prompt → animation',poster:'/images/case-01.svg',video:'/videos/case-01.mp4',alt:'Кинематографичный кадр из AI-видео',stages:['Референсы','Промт','Генерация','Финал']},
      {badge:'AI VIDEO WORKFLOW',title:'Production without guesswork',poster:'/images/case-02.svg',video:'/videos/case-02.mp4',alt:'Сцена из процесса производства AI-видео',stages:['Идея','Кадр','Движение','Сборка']}
    ]
  },
  process:[
    {number:'01',title:'Референсы',text:'Готовим изображения персонажа, объекта, композиции и стиля.'},
    {number:'02',title:'Промт',text:'Раскладываем действие по таймингам, планам и движениям камеры.'},
    {number:'03',title:'Генерация',text:'MiniMax H3, Seedance, WAN, Comfy Cloud — только нужные настройки.'},
    {number:'04',title:'Готовый ролик',text:'Получаем шот и при необходимости доводим его в production-инструментах.'}
  ],
  product:{title:'Повтори конкретный\nAI-ролик за 290 ₽.',price:'290 ₽',headerCta:'Гайд · 290 ₽',description:'Электронный пошаговый гайд. Доступ к материалам предоставляется через Telegram.',features:['Подготовка референсов','Готовый промт','MiniMax H3 / Comfy Cloud','Настройки генерации','Весь порядок действий','Доступ к материалу'],accessText:'Доступ к приобретённому материалу через Telegram',paymentUrl:'#payment-placeholder',buttonLabel:'Получить гайд',note:'Без подписки и скрытых платежей',visual:'/images/product-visual.svg'}, // TODO: replace paymentUrl with the real payment link.
  author:{name:'Михаил Лопаткин',role:'3D · Animation · AI Video',bio:'Работаю с визуальным контентом, 3D и анимацией и использую генеративные модели как часть production-пайплайна. В NeuroVideo собираю практические разборы: что подготовить, что написать модели и какие настройки использовать, чтобы получить конкретный результат.',image:'/images/author.svg',tools:['MiniMax H3','Seedance','WAN','Comfy Cloud','3D','Compositing']},
  telegram:{title:'Бесплатные разборы продолжаются в Telegram',description:'Канал — примеры и полезные материалы. Бот — конкретные туториалы и гайды.',channelLabel:'Telegram-канал',channelUrl:'#telegram-channel-placeholder',botLabel:'Открыть бота',botUrl:'https://t.me/ratamahata_bot'}, // TODO: add Telegram channel URL.
  faq:[
    {q:'Что я получу после оплаты?',a:'Доступ к приобретённому пошаговому материалу: референсам, промту, настройкам и порядку создания ролика.'},
    {q:'В каком формате приходит материал?',a:'Материал предоставляется в электронном формате через Telegram.'},
    {q:'Подойдёт ли новичку?',a:'Да. Этапы расположены последовательно, а необходимые действия и настройки показаны по шагам.'},
    {q:'Нужны ли платные нейросети?',a:'Некоторые сторонние инструменты могут иметь собственные платные тарифы. Их условия и стоимость не входят в цену гайда.'},
    {q:'Как получить материал после оплаты?',a:'После подтверждения оплаты откройте Telegram по инструкции на странице оплаты. Если возникнет вопрос, напишите автору.'},
    {q:'Можно ли вернуть оплату?',a:'Условия возврата и отказа от цифрового материала определяются публичной офертой.'},
    {q:'Как связаться с автором?',a:'Напишите в Telegram-бот или воспользуйтесь контактами в нижней части страницы.'}
  ],
  business:{performer:'Лопаткин Михаил Сергеевич',status:'плательщик налога на профессиональный доход (самозанятый)',inn:'507901508484',email:'mrlopat@mail.ru',telegram:'https://t.me/ratamahata_bot'},
  legal:{offer:'/offer',privacy:'/privacy',contacts:'/contacts'}
};
