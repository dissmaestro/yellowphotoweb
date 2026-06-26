// Данные взяты из официального прайс-листа фотостудии MAGIC photo (magicvrn.ru)

export interface PriceItem {
  id: string
  name: string
  note?: string
  price: number
  unit: string
  category: 'Печать' | 'Сувениры' | 'Цифра'
  icon: string
}

export const priceList: PriceItem[] = [
  { id: 'p1015', name: 'Печать 10×15', price: 280, unit: 'шт', category: 'Печать', icon: 'pi pi-image' },
  { id: 'p1523', name: 'Печать 15×23', price: 330, unit: 'шт', category: 'Печать', icon: 'pi pi-image' },
  { id: 'p2030', name: 'Печать 20×30', price: 440, unit: 'шт', category: 'Печать', icon: 'pi pi-image' },
  { id: 'p3045', name: 'Печать 30×45', price: 600, unit: 'шт', category: 'Печать', icon: 'pi pi-image' },
  { id: 'magnet', name: 'Фотомагнит', price: 260, unit: 'шт', category: 'Сувениры', icon: 'pi pi-star' },
  { id: 'canvas', name: 'Холст 30×40', price: 2000, unit: 'шт', category: 'Сувениры', icon: 'pi pi-palette' },
  {
    id: 'book',
    name: 'Фотокнига',
    note: '3 разворота, 5 кадров, 21×30',
    price: 2400,
    unit: 'шт',
    category: 'Сувениры',
    icon: 'pi pi-book',
  },
  {
    id: 'digital',
    name: 'Фото в электронном виде',
    note: 'обработка и ретушь, файл JPG',
    price: 450,
    unit: 'кадр',
    category: 'Цифра',
    icon: 'pi pi-cloud-download',
  },
]

export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Профессиональная ретушь',
    description:
      'Аккуратная обработка кожи, удаление дефектов, художественная ретушь — снимок выглядит естественно и выразительно.',
    icon: 'pi pi-sparkles',
  },
  {
    title: 'Улучшение качества',
    description:
      'Повышаем резкость, убираем шумы и увеличиваем разрешение — даже сложный кадр получает второе дыхание.',
    icon: 'pi pi-bolt',
  },
  {
    title: 'Цветокоррекция и реставрация',
    description:
      'Восстанавливаем цвет, исправляем экспозицию и оживляем старые и выцветшие фотографии.',
    icon: 'pi pi-palette',
  },
  {
    title: 'Фото в электронном виде и печать',
    description:
      'Получите обработанные кадры в высоком разрешении или закажите печать готового результата.',
    icon: 'pi pi-cloud-download',
  },
]

export const contacts = {
  studioName: 'Студия обработки фотографий MAGIC photo',
  ip: 'ИП КОРЧАГИНА НАТАЛЬЯ НИКОЛАЕВНА',
  site: 'мэджикфото.рф',
  siteHref: 'https://мэджикфото.рф',
  hours: 'Ежедневно, 9:00 — 18:00',
  city: 'Воронеж',
  since: 2015,
  inn: 'ИНН 361605610754',
  ogrnip: 'ОГРНИП 32636680007541',
  // Срок выполнения заказа: 10 рабочих дней + время доставки
  orderTerm: '10 дней + доставка',
}
