const root = import.meta.env.BASE_URL;
export const asset = (path: string) => `${root}${path.replace(/^\//, '')}`;

export const site = {
  name: 'NEUROVIDEO',
  byline: 'by Rata_mult',
  title: 'Промт для видео с Москвичом — бесплатно',
  description: 'Готовый промт для создания видео с Москвичом. Добавь свои референсы и используй как основу для генерации.',
  hero: {
    badge: 'Бесплатный промт · PDF',
    title: 'Забери промт для видео с Москвичом',
    subtitle: 'Готовый промт для создания видео с Москвичом. Скопируй его, добавь свои референсы и используй как основу для генерации.',
    cta: {
      label: 'Забрать бесплатный промт',
      url: 'https://t.me/ratamahata_bot?start=moskvi4',
    },
    note: 'Бесплатно · PDF с промтом придёт сразу в Telegram',
    video: '/videos/moskvi4.mp4',
    poster: '/images/hero-poster.svg',
  },
  product: {
    eyebrow: 'Что внутри',
    title: 'Готовый текст промта в PDF.',
    text: 'Открой файл, скопируй промт и подставь свои референсы — всё готово для генерации.',
    points: ['Готовый текст', 'Удобный PDF', 'Мгновенно в Telegram'],
  },
  business: {performer:'Лопаткин Михаил Сергеевич',status:'плательщик налога на профессиональный доход (самозанятый)',inn:'507901508484',email:'mrlopat@mail.ru',telegram:'https://t.me/ratamahata_bot'},
  legal:{offer:'/offer',privacy:'/privacy',contacts:'/contacts'}
};
