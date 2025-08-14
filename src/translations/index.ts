// Base translation interface
export interface TranslationKeys {
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    submit: string;
    cancel: string;
    questions: string;
    phone: string;
    email: string;
    form: string;
    goToContactForm: string;
    getOffer: string;
    copied: string;
  };
  navigation: {
    home: string;
    about: string;
    menu: string;
    locations: string;
    contact: string;
    login: string;
    register: string;
    howItWorks: string;
    calculator: string;
    aboutUs: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    earnings: string;
    cta: string;
    ctaAriaLabel: string;
    investment: string;
    monthlyProfit: string;
    roi: string;
    roiTime: string;
    profitability: string;
    automaticOperation: string;
    noEmployees: string;
    mobileBusiness: string;
  };
  // Add more sections as needed
  [key: string]: any; // Allow additional properties
}

// Type for the translations object
export interface Translations {
  cs: TranslationKeys;
  en: TranslationKeys;
  ru: TranslationKeys;
  pl: TranslationKeys;
  [key: string]: TranslationKeys; // Allow additional languages
}

// Czech translations (default)
const cs: TranslationKeys = {
  common: {
    loading: 'Načítám...',
    error: 'Došlo k chybě',
    success: 'Úspěch',
    close: 'Zavřít',
    submit: 'Odeslat',
    cancel: 'Zrušit',
    questions: 'Otázky',
    phone: 'Telefon',
    email: 'Email',
    form: 'Formulář',
    goToContactForm: 'Přejít na kontaktní formulář',
    getOffer: 'Získat nabídku',
    copied: 'Zkopírováno!',
  },
  navigation: {
    home: 'Domů',
    about: 'O nás',
    menu: 'Nabídka',
    locations: 'Lokality',
    contact: 'Kontakt',
    login: 'Přihlásit se',
    register: 'Registrace',
    howItWorks: 'Jak to funguje',
    calculator: 'Kalkulačka výdělku',
    aboutUs: 'Proč my',
  },
  hero: {
    titleLine1: 'Otevřete si vlastní',
    titleLine2: 'samoobslužnou kavárnu',
    subtitle: '- čerstvě mletá káva, který chybí na trhu',
    earnings: 'a vydělávejte od 250 tisíc Kč měsíčně',
    cta: 'Chci více informací',
    ctaAriaLabel: 'Přejít na kontaktní formulář',
    investment: 'Počáteční investice',
    monthlyProfit: 'Měsíční výnos',
    roi: 'Návratnost investice',
    roiTime: '12 měsíců',
    profitability: 'Rentabilita',
    automaticOperation: 'Automatický provoz',
    noEmployees: 'Bez zaměstnanců',
    mobileBusiness: 'Byznys přes mobil',
  },
  // Add more translations as needed
};

// English translations
const en: TranslationKeys = {
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success',
    close: 'Close',
    submit: 'Submit',
    cancel: 'Cancel',
    questions: 'Questions',
    phone: 'Phone',
    email: 'Email',
    form: 'Form',
    goToContactForm: 'Go to contact form',
    getOffer: 'Get an offer',
    copied: 'Copied!',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    locations: 'Locations',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    howItWorks: 'How it works',
    calculator: 'Earnings calculator',
    aboutUs: 'About us',
  },
  hero: {
    titleLine1: 'Open your own',
    titleLine2: 'self-service coffee shop',
    subtitle: '- freshly ground coffee that\'s missing on the market',
    earnings: 'and earn from 250 thousand CZK monthly',
    cta: 'I want more information',
    ctaAriaLabel: 'Go to contact form',
    investment: 'Initial investment',
    monthlyProfit: 'Monthly profit',
    roi: 'Return on investment',
    roiTime: '12 months',
    profitability: 'Profitability',
    automaticOperation: 'Automatic operation',
    noEmployees: 'No employees',
    mobileBusiness: 'Mobile business',
  },
  // Add more translations as needed
};

// Russian translations
const ru: TranslationKeys = {
  common: {
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    success: 'Успех',
    close: 'Закрыть',
    submit: 'Отправить',
    cancel: 'Отмена',
    questions: 'Вопросы',
    phone: 'Телефон',
    email: 'Эл. почта',
    form: 'Форма',
    goToContactForm: 'Перейти к контактной форме',
    getOffer: 'Получить предложение',
    copied: 'Скопировано!',
  },
  navigation: {
    home: 'Главная',
    about: 'О нас',
    menu: 'Меню',
    locations: 'Локации',
    contact: 'Контакты',
    login: 'Войти',
    register: 'Регистрация',
    howItWorks: 'Как это работает',
    calculator: 'Калькулятор дохода',
    aboutUs: 'О нас',
  },
  hero: {
    titleLine1: 'Откройте свой собственный',
    titleLine2: 'кофейный автомат',
    subtitle: '- свежемолотый кофе, которого не хватает на рынке',
    earnings: 'и зарабатывайте от 250 тысяч крон в месяц',
    cta: 'Хочу больше информации',
    ctaAriaLabel: 'Перейти к контактной форме',
    investment: 'Начальные инвестиции',
    monthlyProfit: 'Ежемесячная прибыль',
    roi: 'Окупаемость инвестиций',
    roiTime: '12 месяцев',
    profitability: 'Рентабельность',
    automaticOperation: 'Автоматическая работа',
    noEmployees: 'Без сотрудников',
    mobileBusiness: 'Бизнес через телефон',
  },
  // Add more translations as needed
};

// Polish translations
const pl: TranslationKeys = {
  common: {
    loading: 'Ładowanie...',
    error: 'Wystąpił błąd',
    success: 'Sukces',
    close: 'Zamknij',
    submit: 'Wyślij',
    cancel: 'Anuluj',
    questions: 'Pytania',
    phone: 'Telefon',
    email: 'E-mail',
    form: 'Formularz',
    goToContactForm: 'Przejdź do formularza kontaktowego',
    getOffer: 'Otrzymaj ofertę',
    copied: 'Skopiowano!',
  },
  navigation: {
    home: 'Strona główna',
    about: 'O nas',
    menu: 'Menu',
    locations: 'Lokalizacje',
    contact: 'Kontakt',
    login: 'Zaloguj się',
    register: 'Zarejestruj się',
    howItWorks: 'Jak to działa',
    calculator: 'Kalkulator zarobków',
    aboutUs: 'O nas',
  },
  hero: {
    titleLine1: 'Otwórz własną',
    titleLine2: 'automatyczną kawiarnię',
    subtitle: '- świeżo mielona kawa, której brakuje na rynku',
    earnings: 'i zarabiaj od 250 tysięcy miesięcznie',
    cta: 'Chcę więcej informacji',
    ctaAriaLabel: 'Przejdź do formularza kontaktowego',
    investment: 'Inwestycja początkowa',
    monthlyProfit: 'Miesięczny zysk',
    roi: 'Zwrot z inwestycji',
    roiTime: '12 miesięcy',
    profitability: 'Rentowność',
    automaticOperation: 'Automatyczna obsługa',
    noEmployees: 'Bez pracowników',
    mobileBusiness: 'Biznes przez telefon',
  },
  // Add more translations as needed
};

export const translations: Translations = {
  cs,
  en,
  ru,
  pl,
};

export default translations;
