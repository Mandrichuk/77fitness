import { HeaderTextProps } from "../lib/index";

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
    <svg
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#D1D1D1" />
      <path
        d="M30.6582 24.661L20.0547 30.8135C19.1548 31.3351 18 30.7035 18 29.652V17.3471C18 16.2972 19.1532 15.664 20.0547 16.1872L30.6582 22.3397C30.8629 22.4565 31.0331 22.6255 31.1514 22.8293C31.2698 23.0331 31.3321 23.2647 31.3321 23.5004C31.3321 23.7361 31.2698 23.9676 31.1514 24.1714C31.0331 24.3753 30.8629 24.5442 30.6582 24.661Z"
        fill="#097FD9"
      />
    </svg>
  ),
};

export const headerText: HeaderTextProps = {
  en: {
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
  sk: {
    links: [
      {
        text: "Domov",
        link: "/",
      },
      {
        text: "Cenové kódy",
        link: "/pricing",
      },
      {
        text: "O nás",
        link: "/about",
      },
      {
        text: "Kontakt",
        link: "/contact",
      },
    ],
  },
  ru: {
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
        text: "Контакты",
        link: "/contact",
      },
    ],
  },
};
