import burgerMenu from "@/public/assets/burgerMenu.svg";
import activity from "@/public/assets/dj-party.jpg";
import gymEquipment1 from "@/public/assets/gym_equipment_1.jpeg";
import gymEquipment2 from "@/public/assets/gym_equipment_2.jpeg";
import gymEquipment3 from "@/public/assets/gym_equipment_3.jpeg";
import instagram from "@/public/assets/instagram.svg";
import introduction from "@/public/assets/introduction.jpg";
import leftScroll from "@/public/assets/leftScroll.svg";
import rightScroll from "@/public/assets/rightScroll.svg";
import location from "@/public/assets/location.svg";
import logo from "@/public/assets/logo.svg";
import playIcon from "@/public/assets/playIcon.svg";
import trainer1 from "@/public/assets/trainer1.png";
import trainer2 from "@/public/assets/trainer2.png";
import trainer3 from "@/public/assets/trainer3.png";
import trainer4 from "@/public/assets/trainer4.png";
import trainer5 from "@/public/assets/trainer5.png";
import UkFlag from "@/public/assets/UKFlag.svg";
import SlovakFlag from "@/public/assets/SlovakFlag.svg";
import RussianFlag from "@/public/assets/RussianFlag.svg";
import QRCode from "@/public/assets/qrCode.png";
import incuded from "@/public/assets/incudedIcon.svg";

import {
  type HeaderProps,
  type IntroductionProps,
  type TrainersProps,
  type GalleryProps,
  type PricesProps,
  type ActivityProps,
  type NewsletterProps,
  type FooterProps,
} from "../lib";

export default {
  burgerMenu,
  activity,
  gymEquipment1,
  gymEquipment2,
  gymEquipment3,
  instagram,
  introduction,
  leftScroll,
  rightScroll,
  location,
  logo,
  playIcon,
  trainer1,
  trainer2,
  trainer3,
  trainer4,
  trainer5,
  UkFlag,
  SlovakFlag,
  RussianFlag,
  QRCode,
};

export const headerText: HeaderProps = {
  en: {
    icon: burgerMenu,
    links: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Pricing",
        link: "/pricing",
      },
      {
        text: "About",
        link: "/about",
      },
      {
        text: "Contact Us",
        link: "/contact",
      },
    ],
  },
  ru: {
    icon: burgerMenu,
    links: [
      {
        text: "Главная",
        link: "/",
      },
      {
        text: "Цены",
        link: "/pricing",
      },
      {
        text: "О нас",
        link: "/about",
      },
      {
        text: "Свяжитесь с нами",
        link: "/contact",
      },
    ],
  },
  sk: {
    icon: burgerMenu,
    links: [
      {
        text: "Domov",
        link: "/",
      },
      {
        text: "Cené",
        link: "/pricing",
      },
      {
        text: "O nas",
        link: "/about",
      },
      {
        text: "Kontaktujte sa",
        link: "/contact",
      },
    ],
  },
};

export const introductionText: IntroductionProps = {
  en: {
    logo: logo,
    introductionImg: introduction,
    name: "77 NEXT LEVEL FITNESS",
    description:
      "Your new fitness center in the center of Bratislava at Bajkalská 2i. Leave us a contact and we will inform you about the news. <span style={'color: #097fd9'}>We are open and look forward to your visit.</span>",
    button: { text: "More", link: "/more" },
    watchVideo: {
      icon: playIcon,
      text: "Watch Promo Video",
      link: "/video",
    },
  },
  ru: {
    logo: logo,
    introductionImg: introduction,
    name: "77 NEXT LEVEL FITNESS",
    description:
      "Ваш новый фитнес-центр в центре Братиславы по адресу Байкальска 2и. Оставьте нам контакт и мы будем информировать вас о новостях. <span style={'color: #097fd9'}>Мы открыты и с нетерпением ждем вашего визита.</span>",
    button: { text: "Больше", link: "/more" },
    watchVideo: {
      icon: playIcon,
      text: "Смотреть промо-видео",
      link: "/video",
    },
  },
  sk: {
    logo: logo,
    introductionImg: introduction,
    name: "77 NEXT LEVEL FITNESS",
    description:
      "Vaše nové fitness centrum v centre Bratislavy na Bajkalskej 2i. Nechajte nám kontakt a my vás budeme informovať o novinkách. <span style={'color: #097fd9'}>Sme otvorení a tešíme sa na vašu návštevu.</span>",
    button: { text: "viac", link: "/more" },
    watchVideo: {
      icon: playIcon,
      text: "Pozrite si promo video",
      link: "/video",
    },
  },
};

export const trainersText: TrainersProps = {
  en: {
    bgText: "Trainers",
    title: "Our Trainers",
    scrollIcons: {
      left: leftScroll,
      right: rightScroll,
    },
    trainers: [
      {
        image: trainer1,
        qr: QRCode,
        name: "Trainer Name",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag],
      },
      {
        image: trainer2,
        qr: QRCode,
        name: "Trainer Name",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [SlovakFlag],
      },
      {
        image: trainer3,
        qr: QRCode,
        name: "Trainer Name",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag, RussianFlag],
      },
      {
        image: trainer4,
        qr: QRCode,
        name: "Trainer Name",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag],
      },
      {
        image: trainer5,
        qr: QRCode,
        name: "Trainer Name",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [SlovakFlag],
      },
    ],
  },
  ru: {
    bgText: "Тренеры",
    title: "Наши тренеры",
    scrollIcons: {
      left: leftScroll,
      right: rightScroll,
    },
    trainers: [
      {
        image: trainer1,
        qr: QRCode,
        name: "Имя тренера",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag],
      },
      {
        image: trainer2,
        qr: QRCode,
        name: "Имя тренера",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [SlovakFlag],
      },
      {
        image: trainer3,
        qr: QRCode,
        name: "Имя тренера",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag, RussianFlag],
      },
      {
        image: trainer4,
        qr: QRCode,
        name: "Имя тренера",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag],
      },
      {
        image: trainer5,
        qr: QRCode,
        name: "Имя тренера",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [SlovakFlag],
      },
    ],
  },
  sk: {
    bgText: "Treneri",
    title: "Nasí treneri",
    scrollIcons: {
      left: leftScroll,
      right: rightScroll,
    },
    trainers: [
      {
        image: trainer1,
        qr: QRCode,
        name: "Meno trenera",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag],
      },
      {
        image: trainer2,
        qr: QRCode,
        name: "Meno trenera",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [SlovakFlag],
      },
      {
        image: trainer3,
        qr: QRCode,
        name: "Meno trenera",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag, RussianFlag],
      },
      {
        image: trainer4,
        qr: QRCode,
        name: "Meno trenera",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [UkFlag, SlovakFlag],
      },
      {
        image: trainer5,
        qr: QRCode,
        name: "Meno trenera",
        number: "+421 00 00 0000",
        email: "example@email.com",
        languages: [SlovakFlag],
      },
    ],
  },
};

export const galleryText: GalleryProps = {
  en: {
    gallery: [gymEquipment1, gymEquipment2, gymEquipment3],
    title:
      "We're the first in Slovakia with <span style={'color: #8DC53F'}>Prime Fitness</span> and <span style={'color: #8E8E8E'}>HOIST FITNESS</span> gear.",
    icon: incuded,
    points: [
      "High quality of equipment",
      "Lots of different dumbbells & weights",
      "Constant inventory update ",
    ],
    button: { text: "See more images", link: "/gallery" },
    link: { text: "Contact us", link: "/contact" },
  },
  ru: {
    gallery: [gymEquipment1, gymEquipment2, gymEquipment3],
    title:
      "Мы первые в Словакии, предлагающие оборудование <span style={'color: #8DC53F'}>Prime Fitness</span> и <span style={'color: #8E8E8E'}>HOIST FITNESS</span>.",
    icon: incuded,
    points: [
      "Высокое качество оборудования",
      "Много разных гантелей и весов",
      "Постоянное обновление запаса",
    ],
    button: { text: "Смотреть больше изображений", link: "/gallery" },
    link: { text: "Свяжитесь с нами", link: "/contact" },
  },
  sk: {
    gallery: [gymEquipment1, gymEquipment2, gymEquipment3],
    title:
      "Sme prví na Slovensku s výstrojom <span style={'color: #8DC53F'}>Prime Fitness</span> a <span style={'color: #8E8E8E'}>HOIST FITNESS</span>.",
    icon: incuded,
    points: [
      "Vysoka kvalita výstroja",
      "Veľa rôznych činiek a závaží",
      "Konstanta zmena skladu",
    ],
    button: { text: "Zobrazitť viac obrázkov", link: "/gallery" },
    link: { text: "Kontaktujte naš", link: "/contact" },
  },
};

export const pricesText: PricesProps = {
  en: {
    text: "Prices",
    title: "Our Gym Membership Packages",
    packages: [
      {
        title: "one time entry",
        price: 10,
        description: "per entry, billed annually",
        included: [
          "One Time Access",
          "Sauna & Showers",
          "DJ & Live Music",
          "Personal Trainer (Optional)",
        ],
        button: {
          text: "Contact us",
          link: "+421 00 00 0000",
        },
      },
      {
        title: "month membership",
        price: 69,
        description: "per month, billed annually",
        included: [
          "Unlimited Gym Access",
          "Sauna & Showers",
          "DJ & Live Music",
          "Personal Trainer (Optional)",
        ],
        button: {
          text: "Contact us",
          link: "+421 00 00 0000",
        },
      },
      {
        standOut: true,
        advertisement: "+1 month free",
        title: "when purchasing a 6-month membership",
        price: 48,
        description: "one-time payment, billed annually",
        included: [
          "Save more than €100!",
          "Unlimited Gym Access",
          "Sauna & Showers",
          "DJ & Live Music",
          "Personal Trainer (Optional)",
        ],
        button: {
          text: "Contact us",
          link: "+421 00 00 0000",
        },
      },
      {
        title: "1 year membership",
        price: 650,
        description: "one-time payment, billed annually",
        included: [
          "Best Price",
          "Unlimited Gym Access",
          "Sauna & Showers",
          "DJ & Live Music",
          "Personal Trainer (Optional)",
        ],
        button: {
          text: "Contact us",
          link: "+421 00 00 0000",
        },
      },
    ],
  },
  ru: {
    text: "Цены",
    title: " Пакеты членства в нашем фитнес-центре",
    packages: [
      {
        title: "одноразовый вход",
        price: 10,
        description: "за вход, аннулируется ежегодно",
        included: [
          "Одноразовый доступ",
          "Сауна и душ",
          "DJ и музыка",
          "Персональный тренер (опционально)",
        ],
        button: {
          text: "Свяжитесь с нами",
          link: "/contact",
        },
      },
      {
        title: "месячный членство",
        price: 69,
        description: "за месяц, аннулируется ежегодно",
        included: [
          "Ограниченный доступ к фитнес-центру",
          "Сауна и душ",
          "DJ и музыка",
          "Персональный тренер (опционально)",
        ],
        button: {
          text: "Свяжитесь с нами",
          link: "/contact",
        },
      },
      {
        standOut: true,
        advertisement: "+1 месяц бесплатный",
        title: "когда приобретаете 6-й месячный членство",
        price: 48,
        description: "одноразовый платеж, аннулируется ежегодно",
        included: [
          "Сохраняйте больше чем €100!",
          "Ограниченный доступ к фитнес-центру",
          "Сауна и душ",
          "DJ и музыка",
          "Персональный тренер (опционально)",
        ],
        button: {
          text: "Свяжитесь с нами",
          link: "/contact",
        },
      },
      {
        title: "1 год членство",
        price: 650,
        description: "одноразовый платеж, аннулируется ежегодно",
        included: [
          "Лучшая цена",
          "Ограниченный доступ к фитнес-центру",
          "Сауна и душ",
          "DJ и музыка",
          "Персональный тренер (опционально)",
        ],
        button: {
          text: "Свяжитесь с нами",
          link: "/contact",
        },
      },
    ],
  },
  sk: {
    text: "Cené",
    title: " Pakety cieľenia v nasom fithnes-centre",
    packages: [
      {
        title: "jednoražový vstup",
        price: 10,
        description: "za vstup, anulujúce sa ročným",
        included: [
          "Jednoražový vstup",
          "Sauna a dúža",
          "DJ a muzika",
          "Personal Trainer (volitelne)",
        ],
        button: {
          text: "Kontaktujte naс",
          link: "/contact",
        },
      },
      {
        title: "mesacné cieľenie",
        price: 69,
        description: "za mesacť, anulujúce sa ročným",
        included: [
          "Ogranicovany vstup do fithnes-centra",
          "Sauna a dúža",
          "DJ a muzika",
          "Personal Trainer (volitelne)",
        ],
        button: {
          text: "Kontaktujte naс",
          link: "/contact",
        },
      },
      {
        standOut: true,
        advertisement: "+1 mesacné cieľenie",
        title: "kedy si zaplatíte 6-mesacné cieľenie",
        price: 48,
        description: "jednoražový platľ, anulujúce sa ročným",
        included: [
          "Savľajte viac ako €100!",
          "Ogranicovany vstup do fithnes-centra",
          "Sauna a dúža",
          "DJ a muzika",
        ],
        button: {
          text: "Kontaktujte naс",
          link: "/contact",
        },
      },
      {
        title: "rokove cieľenie",
        price: 650,
        description: "jednoražový platľ, anulujúce sa ročným",
        included: [
          "Najlepsia cena",
          "Ogranicovany vstup do fithnes-centra",
          "Sauna a dúža",
          "DJ a muzika",
          "Personal Trainer (volitelne)",
        ],
        button: {
          text: "Kontaktujte naс",
          link: "/contact",
        },
      },
    ],
  },
};

export const activityText: ActivityProps = {
  en: {
    bgText: "IN THE HOUSE",
    title: "Regular DJ Party",
    scrollImages: [activity, activity],
    scrollIcon: rightScroll,
    link: { text: "See the schedule", link: "/schedule" },
  },
  ru: {
    bgText: "В ДОМЕ",
    title: "Регулярный DJ Party",
    scrollImages: [activity, activity],
    scrollIcon: rightScroll,
    link: { text: "Посмотреть расписание", link: "/schedule" },
  },
  sk: {
    bgText: "V DOME",
    title: "Regulárný DJ Party",
    scrollImages: [activity, activity],
    scrollIcon: rightScroll,
    link: { text: "Zobrazitú harmonogram", link: "/schedule" },
  },
};

export const newsletterText: NewsletterProps = {
  en: {
    title: "NEWSLETTER",
    description: "Subscribe to our newsletter and stay up to date",
    input: {
      type: "text",
      placeholder: "Enter your email address",
      field: "newsletterInput",
      button: {
        type: "submit",
        text: "Subscribe",
      },
    },
  },
  ru: {
    title: "РАССЫЛКА",
    description: "Подпишитесь на нашу рассылку и следите за обновлениями",
    input: {
      type: "text",
      placeholder: "Введите свою почту",
      field: "newsletterInput",
      button: {
        type: "submit",
        text: "Подписаться",
      },
    },
  },
  sk: {
    title: "NEWSLETTER",
    description: "Prihlašte sa k nasú novinky a sledujte novinky",
    input: {
      type: "text",
      placeholder: "Zadajte svoj email",
      field: "newsletterInput",
      button: {
        type: "submit",
        text: "Prihlašte sa",
      },
    },
  },
};

export const footerText: FooterProps = {
  en: {
    logo: logo,
    name: "77 NEXT LEVEL FITNESS",
    location: {
      icon: location,
      text: "Bratislava, Bajkalská 2i, 831 04",
    },
    sitemap: {
      title: "Sitemap",
      links: [
        { text: "Home", link: "/" },
        { text: "Schedule", link: "/schedule" },
        { text: "Gallery", link: "/gallery" },
        { text: "Contact", link: "/contact" },
      ],
      support: {
        title: "Support",
        links: [
          { text: "Website Error", link: "+421 00 00 0000" },
          { text: "Contact Us", link: "+421 00 00 0000" },
        ],
      },
      socials: {
        title: "Social Media",
        links: [{ icon: instagram, link: "https://www.instagram.com" }],
      },
    },
  },
  ru: {
    logo: logo,
    name: "77 NEXT LEVEL FITNESS",
    location: {
      icon: location,
      text: "Братислава, Байкалское 2, 831 04",
    },
    sitemap: {
      title: "Карта сайта",
      links: [
        { text: "Главная", link: "/" },
        { text: "Расписание", link: "/schedule" },
        { text: "Галерея", link: "/gallery" },
        { text: "Контакты", link: "/contact" },
      ],
      support: {
        title: "Поддержка",
        links: [
          { text: "Ошибка сайта", link: "+421 00 00 0000" },
          { text: "Свяжитесь с нами", link: "+421 00 00 0000" },
        ],
      },
      socials: {
        title: "Социальные сети",
        links: [{ icon: instagram, link: "https://www.instagram.com" }],
      },
    },
  },
  sk: {
    logo: logo,
    name: "77 NEXT LEVEL FITNESS",
    location: {
      icon: location,
      text: "Bratislava, Bajkalská 2i, 831 04",
    },
    sitemap: {
      title: "Mapa stránky",
      links: [
        { text: "Domov", link: "/" },
        { text: "Harmonogram", link: "/schedule" },
        { text: "Galeria", link: "/gallery" },
        { text: "Kontakt", link: "/contact" },
      ],
      support: {
        title: "Podpory",
        links: [
          { text: "Chyba stránky", link: "+421 00 00 0000" },
          { text: "Kontaktujte naš", link: "+421 00 00 0000" },
        ],
      },
      socials: {
        title: "Sociaálne sieti",
        links: [{ icon: instagram, link: "https://www.instagram.com" }],
      },
    },
  },
};
