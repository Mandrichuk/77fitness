import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  HeaderTextProps,
  FooterTextProps,
  NotFoundTextProps,
} from "../lib/index";
import logo from "@/public/assets/logo.png";

const images = {
  logo,
};

export default images;

export const CLOUDINARY_FOLDER = "77fitness/";

export const SVGs = {
  burgerMenu: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g strokeLinecap="round" strokeWidth="2">
        <path d="m4 5h16" />
        <path d="m4 12h16" />
        <path d="m4 19h16" />
      </g>
    </svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.171 241.171">
      <g>
        <path
          d="M138.138,120.754l99.118-98.576c4.752-4.704,4.752-12.319,0-17.011c-4.74-4.704-12.439-4.704-17.179,0
          l-99.033,98.492L21.095,3.699c-4.74-4.752-12.439-4.752-17.179,0c-4.74,4.764-4.74,12.475,0,17.227l99.876,99.888L3.555,220.497
      c-4.74,4.704-4.74,12.319,0,17.011c4.74,4.704,12.439,4.704,17.179,0l100.152-99.599l99.551,99.563
      c4.74,4.752,12.439,4.752,17.179,0c4.74-4.764,4.74-12.475,0-17.227L138.138,120.754z"
        />
      </g>
    </svg>
  ),
  play: (
    <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#D1D1D1" />
      <path
        d="M30.6582 24.661L20.0547 30.8135C19.1548 31.3351 18 30.7035 18 29.652V17.3471C18 16.2972 19.1532 15.664 20.0547 16.1872L30.6582 22.3397C30.8629 22.4565 31.0331 22.6255 31.1514 22.8293C31.2698 23.0331 31.3321 23.2647 31.3321 23.5004C31.3321 23.7361 31.2698 23.9676 31.1514 24.1714C31.0331 24.3753 30.8629 24.5442 30.6582 24.661Z"
        fill="#097FD9"
      />
    </svg>
  ),
  included: (
    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
      />
    </svg>
  ),
  rightScroll: (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="18" fill="white" />
      <path
        d="M20.7814 17.3334L12.6667 17.3334L12.6667 18.6667L20.7814 18.6667L17.2054 22.2427L18.148 23.1854L23.3334 18L18.148 12.8147L17.2054 13.7574L20.7814 17.3334Z"
        fill="#097FD9"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" />
    </svg>
  ),
  cSign: (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.84 10.1867C15.5467 10.2667 15.9867 11.7201 16.0134 12.4001H18.4C18.2934 9.76008 16.4134 8.14675 13.8 8.14675C10.8534 8.14675 8.66669 10.0001 8.66669 14.1867C8.66669 16.7734 9.90669 19.8401 13.7867 19.8401C16.7467 19.8401 18.3334 17.6401 18.3734 15.9067H15.9867C15.9467 16.6934 15.3867 17.7467 13.8134 17.8267C12.0667 17.7734 11.3334 16.4134 11.3334 14.1867C11.3334 10.3334 13.04 10.2134 13.84 10.1867ZM14 0.666748C6.64002 0.666748 0.666687 6.64008 0.666687 14.0001C0.666687 21.3601 6.64002 27.3334 14 27.3334C21.36 27.3334 27.3334 21.3601 27.3334 14.0001C27.3334 6.64008 21.36 0.666748 14 0.666748ZM14 24.6667C8.12002 24.6667 3.33335 19.8801 3.33335 14.0001C3.33335 8.12008 8.12002 3.33341 14 3.33341C19.88 3.33341 24.6667 8.12008 24.6667 14.0001C24.6667 19.8801 19.88 24.6667 14 24.6667Z" />
    </svg>
  ),
  send: (
    <svg
      id="Layer_2"
      enable-background="new 0 0 32 32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m30.39001 15.08057-28.00067-12.00025c-.35004-.14996-.75-.08997-1.04004.16003-.28998.25-.40997.63-.31995 1l2.00006 8.00018c.07996.29999.28998.54999.56995.67999l7.14014 3.08008-7.14014 3.08008c-.27997.13-.48999.38-.56995.68005l-2.00006 8.00018c-.09003.37.02997.75.31995 1 .19.15997.42004.23999.65002.23999.13 0 .27002-.03003.39001-.08002l28.00067-12.00024c.37001-.15996.61-.52001.61-.92003s-.23999-.76001-.60999-.92004z" />
      </g>
    </svg>
  ),
  arrowDown: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967Z" />
    </svg>
  ),
};

export const notifyNewsletterSuccess = () => {
  if (!toast.isActive("success")) {
    toast.success("Thank you for newsletter subscribing!", {
      theme: "light",
      toastId: "success",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export const notifyNewsletterError = () => {
  if (!toast.isActive("error")) {
    toast.error("The entered email is not valid", {
      theme: "light",
      toastId: "error",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export const notifyExistsNewsletterError = () => {
  if (!toast.isActive("error")) {
    toast.error("This email is already subscribed to the newsletter", {
      theme: "light",
      toastId: "error",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export const homepagePaths = ["/", "/en", "/sk", "/ru"];

export const headerText: HeaderTextProps = {
  en: {
    logo: {
      image: "ncdhkltskvpjmdprvynk",
      link: "/",
      alt: "Logo",
    },
    links: [
      {
        text: "Home",
        link: "/#",
      },
      {
        text: "Pricing",
        link: "/pricing",
      },
      {
        text: "Gallery",
        link: "/gallery",
      },
      {
        text: "Contact Us",
        link: "tel:+421 908 706 351",
      },
    ],
    languages: {
      title: "Languages",
      links: [
        { text: "English", link: "en" },
        { text: "Slovak", link: "sk" },
        { text: "Russian", link: "ru" },
      ],
    },
  },
  ru: {
    logo: {
      image: "ncdhkltskvpjmdprvynk",
      link: "/",
      alt: "Логотип",
    },
    links: [
      {
        text: "Главная",
        link: "/#",
      },
      {
        text: "Цены",
        link: "/pricing",
      },
      {
        text: "Галерея",
        link: "/gallery",
      },
      {
        text: "Свяжитесь с нами",
        link: "tel:+421 908 706 351",
      },
    ],
    languages: {
      title: "Языки",
      links: [
        { text: "Английский", link: "en" },
        { text: "Словацкий", link: "sk" },
        { text: "Русский", link: "ru" },
      ],
    },
  },
  sk: {
    logo: {
      image: "ncdhkltskvpjmdprvynk",
      link: "/",
      alt: "Logo",
    },
    links: [
      {
        text: "Domov",
        link: "/#",
      },
      {
        text: "Ceny",
        link: "/pricing",
      },
      {
        text: "Galéria",
        link: "/gallery",
      },
      {
        text: "Kontaktujte nás",
        link: "tel:+421 908 706 351",
      },
    ],
    languages: {
      title: "Jazyky",
      links: [
        { text: "Angličtina", link: "en" },
        { text: "Slovenčina", link: "sk" },
        { text: "Ruština", link: "ru" },
      ],
    },
  },
};

export const footerText: FooterTextProps = {
  en: {
    logo: { src: "ncdhkltskvpjmdprvynk", alt: "logo" },
    name: "NEXT LEVEL FITNESS",
    location: {
      text: "Bratislava, Bajkalská 2i, 831 04",
      link: "https://www.google.ru/maps/place/77nextlevelfitness/@48.1639961,17.1368065,18z/data=!4m6!3m5!1s0x476c8f76fe48d03b:0x3e34a79f87ee6c7!8m2!3d48.1639642!4d17.1380704!16s%2Fg%2F11kq3fll84?entry=ttu",
    },
    sitemap: {
      title: "Sitemap",
      links: [
        { text: "Home", link: "/" },
        { text: "Pricing", link: "/pricing" },
        { text: "Gallery", link: "/gallery" },
        { text: "Contact", link: "tel:+421 908 706 351" },
      ],
    },
    languages: {
      title: "Languages",
      links: [
        { text: "English", link: "en" },
        { text: "Slovak", link: "sk" },
        { text: "Russian", link: "ru" },
      ],
    },
    socials: {
      title: "Social Media",
      links: [
        {
          icon: { src: SVGs.instagram, alt: "instagram" },
          link: "https://www.instagram.com",
        },
      ],
    },
  },
  sk: {
    logo: { src: "ncdhkltskvpjmdprvynk", alt: "logo" },
    name: "NEXT LEVEL FITNESS",
    location: {
      text: "Bratislava, Bajkalská 2i, 831 04",
      link: "https://www.google.sk/maps/place/77nextlevelfitness/@48.1639961,17.1368065,18z/data=!4m6!3m5!1s0x476c8f76fe48d03b:0x3e34a79f87ee6c7!8m2!3d48.1639642!4d17.1380704",
    },
    sitemap: {
      title: "Mapa stránok",
      links: [
        { text: "Domov", link: "/" },
        { text: "Ceny", link: "/pricing" },
        { text: "Galéria", link: "/gallery" },
        { text: "Kontakt", link: "tel:+421 908 706 351" },
      ],
    },
    languages: {
      title: "Jazyky",
      links: [
        { text: "Angličtina", link: "en" },
        { text: "Slovenčina", link: "sk" },
        { text: "Ruština", link: "ru" },
      ],
    },
    socials: {
      title: "Sociálne siete",
      links: [
        {
          icon: { src: SVGs.instagram, alt: "instagram" },
          link: "https://www.instagram.com",
        },
      ],
    },
  },
  ru: {
    logo: { src: "ncdhkltskvpjmdprvynk", alt: "логотип" },
    name: "NEXT LEVEL FITNESS",
    location: {
      text: "Братислава, Bajkalská 2i, 831 04",
      link: "https://www.google.ru/maps/place/77nextlevelfitness/@48.1639961,17.1368065,18z/data=!4m6!3m5!1s0x476c8f76fe48d03b:0x3e34a79f87ee6c7!8m2!3d48.1639642!4d17.1380704",
    },
    sitemap: {
      title: "Карта сайта",
      links: [
        { text: "Главная", link: "/" },
        { text: "Цены", link: "/pricing" },
        { text: "Галерея", link: "/gallery" },
        { text: "Контакт", link: "tel:+421 908 706 351" },
      ],
    },
    languages: {
      title: "Языки",
      links: [
        { text: "Английский", link: "en" },
        { text: "Словацкий", link: "sk" },
        { text: "Русский", link: "ru" },
      ],
    },
    socials: {
      title: "Социальные сети",
      links: [
        {
          icon: { src: SVGs.instagram, alt: "instagram" },
          link: "https://www.instagram.com",
        },
      ],
    },
  },
};

export const notFoundText: NotFoundTextProps = {
  en: {
    backgroundImage: {
      image: "ncdhkltskvpjmdprvynk",
      alt: "background",
    },
    title: "This page was not found",
    button: {
      text: "Go back",
      link: "/",
    },
  },
  sk: {
    backgroundImage: {
      image: "ncdhkltskvpjmdprvynk",
      alt: "background",
    },
    title: "Stránka nebola nájdená",
    button: {
      text: "Vratiť sa",
      link: "/",
    },
  },
  ru: {
    backgroundImage: {
      image: "ncdhkltskvpjmdprvynk",
      alt: "фон",
    },
    title: "Страница не найдена",
    button: {
      text: "Вернуться",
      link: "/",
    },
  },
};
