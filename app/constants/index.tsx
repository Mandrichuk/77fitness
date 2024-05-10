import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  HeaderTextProps,
  FooterTextProps,
  NotFoundTextProps,
  LocationTextProps,
  ShopHeadTextProps,
  BluredCircleColorsProps,
  CategoriesTextProps,
  ProductsSectionsTextProps,
  ProductCartTextProps,
  LoginTextProps,
  RegistrationTextProps,
  OrderShopTextProps,
  OrdersTextProps,
  CategoriesEditAdminTextProps,
  ProductsEditAdminTextProps,
  ShopRedirectFromCartProps,
  ShopRedirectFromOrdersProps,
} from "../lib/index";

import logo from "@/public/assets/logo.png";

const images = {
  logo,
};

export default images;

export const CLOUDINARY_FOLDER = "77fitness/";

export const BluredCircleColors: BluredCircleColorsProps = {
  pink: "#D909C4",
  blue: "#097FD9",
};

export const SVGs = {
  shoppingBag: (
    <svg
      id="Layer_1"
      enable-background="new 0 0 100 100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m32.28 82h35.44c6.22 0 11.28-5.06 11.28-11.28v-33.72c0-1.1-.9-2-2-2h-12v-3c0-8.27-6.73-15-15-15s-15 6.73-15 15v3h-12c-1.1 0-2 .9-2 2v33.72c0 6.22 5.06 11.28 11.28 11.28zm6.72-50c0-6.07 4.93-11 11-11s11 4.93 11 11v3h-22zm-14 7h10v5c0 1.1.9 2 2 2s2-.9 2-2v-5h22v5c0 1.1.9 2 2 2s2-.9 2-2v-5h10v31.72c0 4.01-3.27 7.28-7.28 7.28h-35.44c-4.01 0-7.28-3.27-7.28-7.28z" />
      </g>
    </svg>
  ),
  edit: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer_2" data-name="Layer 2">
        <path d="m29.31 9.08-1.91 1.92-1.4-1.43-3.58-3.57-1.42-1.41 1.9-1.9a2.1 2.1 0 0 1 1.87-.54 3.17 3.17 0 0 1 1.69.91l2.54 2.48a2.51 2.51 0 0 1 .31 3.54zm-8.31-1.66-1.41-1.42-16.24 16.24a1 1 0 0 0 -.27.54l-1.08 6.04a1 1 0 0 0 1 1.18h.17l6.05-1.06a1.05 1.05 0 0 0 .53-.28l16.25-16.26-1.43-1.4z" />
      </g>
    </svg>
  ),
  visible: (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035
			c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201
			C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418
			c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418
			C447.361,287.923,358.746,385.406,255.997,385.406z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275
			s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516
			s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z"
          />
        </g>
      </g>
    </svg>
  ),
  invisible: (
    <svg
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path
        d="m474.948 20.048a13.5 13.5 0 1 1 18.928 19.245l-459.902 452.659a13.5 13.5 0 1 1 -18.927-19.245l120.093-118.2q-67.57-31.247-135.14-97.362 165.891-167.345 342.782-107.012zm-287.448 282.918 19.9-19.582a54.888 54.888 0 0 1 74.652-73.477l19.9-19.582a81.949 81.949 0 0 0 -114.452 112.641zm107.524-5.835a54.7 54.7 0 0 0 15.963-35.342l-51.305 51.3a54.688 54.688 0 0 0 35.342-15.962zm43.14-38.8a82 82 0 0 1 -102.942 79.221l-38.234 38.234q157.512 35.631 315.012-118.199-57.408-52.861-113.724-83.087l-62.827 62.827a82.037 82.037 0 0 1 2.718 21.005z"
        fillRule="evenodd"
      />
    </svg>
  ),
  trash: (
    <svg id="Glyph" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect height="7.44" rx="2" width="43.18" x="10.41" y="9.35" />
        <path d="m39.88 7.35a3.04794 3.04794 0 0 0 -3-3.35h-9.5a3.0425 3.0425 0 0 0 -3 3.35z" />
        <path d="m13.3 18.79 1.36 35.44a5.98513 5.98513 0 0 0 6 5.77h22.69a5.9901 5.9901 0 0 0 6-5.76l1.42-35.45z" />
      </g>
    </svg>
  ),
  youtube: (
    <svg
      enableBackground="new 0 0 100 100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_1" />
      <g id="Layer_2">
        <path d="M95.515 26.989c-1.093-4.113-4.312-7.353-8.399-8.452-7.409-1.999-37.116-1.999-37.116-1.999s-29.707 0-37.115 1.998c-4.088 1.099-7.307 4.339-8.399 8.452-1.986 7.457-1.986 23.012-1.986 23.012s0 15.556 1.985 23.012c1.092 4.113 4.311 7.352 8.399 8.452 7.409 1.998 37.116 1.998 37.116 1.998s29.708 0 37.116-1.998c4.088-1.1 7.306-4.339 8.399-8.452 1.985-7.457 1.985-23.012 1.985-23.012s0-15.555-1.985-23.011zm-55.231 37.134v-28.246l24.83 14.124z" />
      </g>
    </svg>
  ),
  facebook: (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256s114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
    </svg>
  ),
  location: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M12,0A10.011,10.011,0,0,0,2,10c0,5.282,8.4,12.533,9.354,13.343l.646.546.646-.546C13.6,22.533,22,15.282,22,10A10.011,10.011,0,0,0,12,0Zm0,15a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,15Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
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
  blueRotatedArrow: (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="18" fill="#097FD9" />
      <path
        d="M20.7814 18.6666L12.6667 18.6666L12.6667 17.3333L20.7814 17.3333L17.2054 13.7573L18.148 12.8146L23.3334 18L18.148 23.1853L17.2054 22.2426L20.7814 18.6666Z"
        fill="white"
        transform="rotate(180 18 18)"
      />
    </svg>
  ),
  blueArrow: (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="18" fill="#097FD9" />
      <path
        d="M20.7814 18.6666L12.6667 18.6666L12.6667 17.3333L20.7814 17.3333L17.2054 13.7573L18.148 12.8146L23.3334 18L18.148 23.1853L17.2054 22.2426L20.7814 18.6666Z"
        fill="white"
      />
    </svg>
  ),
  tranparentArrow: (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="35.5"
        y="35.5"
        width="35"
        height="35"
        rx="17.5"
        transform="rotate(-180 35.5 35.5)"
        stroke="white"
      />
      <path
        d="M15.2186 17.3334L23.3333 17.3334L23.3333 18.6667L15.2186 18.6667L18.7946 22.2427L17.852 23.1854L12.6666 18L17.852 12.8147L18.7946 13.7574L15.2186 17.3334Z"
        fill="white"
      />
    </svg>
  ),
};

export const overviewText = {
  en: {
    text: "Our gym images",
    images: [
      {
        src: "overview/t71qmkhqaqej6mt5ip09",
        alt: "image5",
      },
      {
        src: "overview/cqxtl0sffirwbyocx1jt",
        alt: "image2",
      },
      {
        src: "overview/wbndqskiqiaa0xgcmkpi",
        alt: "image5",
      },
      {
        src: "overview/xgcauv5kdrjdkhnjf830",
        alt: "image1",
      },
      {
        src: "overview/qtdfnpvcg1olbzpbqwbo",
        alt: "image3",
      },
      {
        src: "overview/vaxrhjlrs5p2yhbgpw6n",
        alt: "image4",
      },
      {
        src: "overview/ttep9w3cbvtdrd4hatxa",
        alt: "image5",
      },
      {
        src: "overview/mm9bogcyd3malmht9uul",
        alt: "image5",
      },
      {
        src: "overview/mfa3pfyrqmn1x9udyqzh",
        alt: "image5",
      },
      {
        src: "overview/spm4lidlicptd1exwiy0",
        alt: "image5",
      },
      {
        src: "overview/pmurfer7kvjpvqinc2jf",
        alt: "image5",
      },
      {
        src: "overview/cr5mujcbqq214grek2ze",
        alt: "image5",
      },
    ],
  },
  sk: {
    text: "Fotky nášho fitka",
    images: [
      {
        src: "overview/t71qmkhqaqej6mt5ip09",
        alt: "image5",
      },
      {
        src: "overview/cqxtl0sffirwbyocx1jt",
        alt: "image2",
      },
      {
        src: "overview/wbndqskiqiaa0xgcmkpi",
        alt: "image5",
      },
      {
        src: "overview/xgcauv5kdrjdkhnjf830",
        alt: "image1",
      },
      {
        src: "overview/qtdfnpvcg1olbzpbqwbo",
        alt: "image3",
      },
      {
        src: "overview/vaxrhjlrs5p2yhbgpw6n",
        alt: "image4",
      },
      {
        src: "overview/ttep9w3cbvtdrd4hatxa",
        alt: "image5",
      },
      {
        src: "overview/mm9bogcyd3malmht9uul",
        alt: "image5",
      },
      {
        src: "overview/mfa3pfyrqmn1x9udyqzh",
        alt: "image5",
      },
      {
        src: "overview/spm4lidlicptd1exwiy0",
        alt: "image5",
      },
      {
        src: "overview/pmurfer7kvjpvqinc2jf",
        alt: "image5",
      },
      {
        src: "overview/cr5mujcbqq214grek2ze",
        alt: "image5",
      },
    ],
  },
  ru: {
    text: "Фотографии нашего зала",
    images: [
      {
        src: "overview/t71qmkhqaqej6mt5ip09",
        alt: "image5",
      },
      {
        src: "overview/cqxtl0sffirwbyocx1jt",
        alt: "image2",
      },
      {
        src: "overview/wbndqskiqiaa0xgcmkpi",
        alt: "image5",
      },
      {
        src: "overview/xgcauv5kdrjdkhnjf830",
        alt: "image1",
      },
      {
        src: "overview/qtdfnpvcg1olbzpbqwbo",
        alt: "image3",
      },
      {
        src: "overview/vaxrhjlrs5p2yhbgpw6n",
        alt: "image4",
      },
      {
        src: "overview/ttep9w3cbvtdrd4hatxa",
        alt: "image5",
      },
      {
        src: "overview/mm9bogcyd3malmht9uul",
        alt: "image5",
      },
      {
        src: "overview/mfa3pfyrqmn1x9udyqzh",
        alt: "image5",
      },
      {
        src: "overview/spm4lidlicptd1exwiy0",
        alt: "image5",
      },
      {
        src: "overview/pmurfer7kvjpvqinc2jf",
        alt: "image5",
      },
      {
        src: "overview/cr5mujcbqq214grek2ze",
        alt: "image5",
      },
    ],
  },
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
        link: "tel:+421 940 735 735",
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
        link: "tel:+421 940 735 735",
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
        link: "tel:+421 940 735 735",
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
        { text: "Contact", link: "tel:+421 940 735 735" },
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
          link: "https://www.instagram.com/77fitness.sk/",
        },
        {
          icon: { src: SVGs.facebook, alt: "facebook" },
          link: "https://www.facebook.com/77fitness.sk/",
        },
        {
          icon: { src: SVGs.youtube, alt: "youtube" },
          link: "https://www.youtube.com/channel/UCgumAghelhdahPVrik__liw",
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
        { text: "Kontakt", link: "tel:+421 940 735 735" },
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
          link: "https://www.instagram.com/77fitness.sk/",
        },
        {
          icon: { src: SVGs.facebook, alt: "facebook" },
          link: "https://www.facebook.com/77fitness.sk/",
        },
        {
          icon: { src: SVGs.youtube, alt: "youtube" },
          link: "https://www.youtube.com/channel/UCgumAghelhdahPVrik__liw",
        },
      ],
    },
  },
  ru: {
    logo: { src: "ncdhkltskvpjmdprvynk", alt: "логотип" },
    name: "NEXT LEVEL FITNESS",
    location: {
      text: "Bratislava, Bajkalská 2i, 831 04",
      link: "https://www.google.ru/maps/place/77nextlevelfitness/@48.1639961,17.1368065,18z/data=!4m6!3m5!1s0x476c8f76fe48d03b:0x3e34a79f87ee6c7!8m2!3d48.1639642!4d17.1380704",
    },
    sitemap: {
      title: "Карта сайта",
      links: [
        { text: "Главная", link: "/" },
        { text: "Цены", link: "/pricing" },
        { text: "Галерея", link: "/gallery" },
        { text: "Контакт", link: "tel:+421 940 735 735" },
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
          link: "https://www.instagram.com/77fitness.sk/",
        },
        {
          icon: { src: SVGs.facebook, alt: "facebook" },
          link: "https://www.facebook.com/77fitness.sk/",
        },
        {
          icon: { src: SVGs.youtube, alt: "youtube" },
          link: "https://www.youtube.com/channel/UCgumAghelhdahPVrik__liw",
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

export const ShopHeadText: ShopHeadTextProps = {
  en: {
    title: "Explore Our Premium Product Range",
    announcement:
      "Sign up for our loyalty program Collect points and shop at 77 Fitness for up to 20% off",
    bannerImage: {
      image: "shop/SK_rotator_2024_apr_1120x502_1-15_1_qeokvd",
      alt: "banner",
    },
  },
  sk: {
    title: "Preskúmajte náš sortiment prémiových produktov",
    announcement:
      "Zaregistrujte sa do nášho vernostného programu, zbierajte body a nakupujte v 77 Fitness so zľavou až do 20 %",
    bannerImage: {
      image: "shop/SK_rotator_2024_apr_1120x502_1-15_1_qeokvd",
      alt: "banner",
    },
  },
  ru: {
    title: "Исследуйте наш ассортимент премиум-продукции",
    announcement:
      "Подпишитесь на нашу программу лояльности, собирайте баллы и покупайте в 77 Fitness со скидкой до 20 %",
    bannerImage: {
      image: "shop/SK_rotator_2024_apr_1120x502_1-15_1_qeokvd",
      alt: "баннер",
    },
  },
};

export const CategoriesText: CategoriesTextProps = {
  en: {
    mainSection: {
      text: "The Most Popular",
      link: "/shop",
    },
  },
  sk: {
    mainSection: {
      text: "Najpopulačné",
      link: "/shop",
    },
  },
  ru: {
    mainSection: {
      text: "Самое популярное",
      link: "/shop",
    },
  },
};

export const ProductsSectionsText: ProductsSectionsTextProps = {
  en: {
    button: {
      text: "Add",
      link: "/shop",
    },
    notify: "Product added to your cart",
    commingSoon:
      "The category is currently empty. Stay tuned for exciting new products coming soon!",
  },
  sk: {
    button: {
      text: "Pridať",
      link: "/obchod",
    },
    notify: "Produkt pridán do vašeho kosíka",
    commingSoon:
      "Kategória momentálne neobsahuje žiadne produkty. Ďalšie nové produkty prídu čoskoro!",
  },
  ru: {
    button: {
      text: "Добавить",
      link: "/магазин",
    },
    notify: "Товар добавлен в вашу корзину",
    commingSoon:
      "Категория в настоящее время не содержит продуктов. Скоро появятся новые увлекательные продукты!",
  },
};

export const ProductCartText: ProductCartTextProps = {
  en: {
    bgText: "Order",
    title: "Your сart",
    totalPriceText: "Total",
    useBonusPoints: "Use bonus points",
    buttonCheckout: {
      text: "Checkout",
      link: "/checkout",
    },
    notify: "Order successful! Please wait for confirmation.",
  },
  sk: {
    bgText: "Objednať",
    title: "Váš košík",
    totalPriceText: "Celková cena",
    useBonusPoints: "Použiť bonusové body",
    buttonCheckout: {
      text: "Pokladňa",
      link: "/pokladňa",
    },
    notify: "Objednávka úspešná! Prosím, počkajte na potvrdenie.",
  },
  ru: {
    bgText: "Заказ",
    title: "Ваша корзина",
    totalPriceText: "Итого",
    useBonusPoints: "Использовать бонусные баллы",
    buttonCheckout: {
      text: "Оформить заказ",
      link: "/checkout",
    },
    notify: "Заказ успешно оформлен! Пожалуйста, подождите подтверждения.",
  },
};

export const RegistrationText: RegistrationTextProps = {
  en: {
    title: "Register your account",
    loginLink: "Login",
    registrationLink: "Registration",
    inputs: {
      name: { placeholder: "Name", field: "username" },
      email: { placeholder: "Email", field: "email" },
      password: { placeholder: "Password", field: "password" },
      repeatPassword: {
        placeholder: "Repeat password",
        field: "repeatPassword",
      },
    },
    inputErrors: {
      fulfillFields: "Field is required",
      invalidEmail: "Email is invalid",
      emailAlreadyRegistered: "Email is already registered",
      passwordsNotMatch: "Passwords do not match",
      passwordLength: "Password must be at least 8 characters",
    },
    registrationButton: {
      text: "Register",
      link: "/login",
    },
    registerRedirect: "Already have an account?",
    notify: "You have successfully registered!",
  },
  sk: {
    title: "Registrovať svoj účet",
    loginLink: "Prihlásenie",
    registrationLink: "Registrácia",
    inputs: {
      name: { placeholder: "Meno", field: "username" },
      email: { placeholder: "E-mail", field: "email" },
      password: { placeholder: "Heslo", field: "password" },
      repeatPassword: {
        placeholder: "Zopakujte heslo",
        field: "repeatPassword",
      },
    },
    inputErrors: {
      fulfillFields: "Pole je povinné",
      invalidEmail: "Neplatný formát emailu",
      emailAlreadyRegistered: "Email je už zaregistrovaný",
      passwordsNotMatch: "Heslá sa nezhodujú",
      passwordLength: "Heslo musí mať aspoň 8 znakov",
    },
    registrationButton: {
      text: "Registrovať",
      link: "/login",
    },
    registerRedirect: "Už máte účet?",
    notify: "Registrácia prebehla úspešne!",
  },
  ru: {
    title: "Зарегистрируйте свой аккаунт",
    loginLink: "Вход",
    registrationLink: "Регистрация",
    inputs: {
      name: { placeholder: "Имя", field: "username" },
      email: { placeholder: "Электронная почта", field: "email" },
      password: { placeholder: "Пароль", field: "password" },
      repeatPassword: {
        placeholder: "Повторите пароль",
        field: "repeatPassword",
      },
    },
    inputErrors: {
      fulfillFields: "Поле обязательно для заполнения",
      invalidEmail: "Неверный формат email",
      emailAlreadyRegistered: "Email уже зарегистрирован",
      passwordsNotMatch: "Пароли не совпадают",
      passwordLength: "Пароль должен содержать не менее 8 символов",
    },
    registrationButton: {
      text: "Зарегистрироваться",
      link: "/login",
    },
    registerRedirect: "Уже есть аккаунт?",
    notify: "Регистрация прошла успешно!",
  },
};

export const LoginText: LoginTextProps = {
  en: {
    title: "Login your account",
    loginLink: { text: "Login", link: "/login" },
    registrationLink: { text: "Registration", link: "/registration" },
    inputs: {
      email: { placeholder: "Email", field: "email" },
      password: { placeholder: "Password", field: "password" },
    },
    inputErrors: {
      fulfillFields: "Field is required",
      unaccurateData: "Incorrect email or password",
    },
    registrationButton: {
      text: "Login",
      link: "/login",
    },
    notify: "You have successfully logged in!",
    loginRedirect: "Don't have an account?",
  },
  sk: {
    title: "Prihláste sa do svojho účtu",
    loginLink: { text: "Prihlásiť sa", link: "/login" },
    registrationLink: { text: "Registrácia", link: "/registration" },
    inputs: {
      email: { placeholder: "E-mail", field: "email" },
      password: { placeholder: "Heslo", field: "password" },
    },
    inputErrors: {
      fulfillFields: "Pole je povinné",
      unaccurateData: "Nesprávny e-mail alebo heslo",
    },
    registrationButton: {
      text: "Prihlásiť sa",
      link: "/login",
    },
    loginRedirect: "Nemáte ešte účet?",
    notify: "Úspešne ste sa prihlásili!",
  },
  ru: {
    title: "Войдите в свой аккаунт",
    loginLink: { text: "Войти", link: "/login" },
    registrationLink: { text: "Регистрация", link: "/registration" },
    inputs: {
      email: { placeholder: "Электронная почта", field: "email" },
      password: { placeholder: "Пароль", field: "password" },
    },
    inputErrors: {
      fulfillFields: "Поле обязательно для заполнения",
      unaccurateData: "Неверный email или пароль",
    },
    registrationButton: {
      text: "Войти",
      link: "/login",
    },
    loginRedirect: "Нет аккаунта?",
    notify: "Вы успешно вошли в систему!",
  },
};

export const OrderShopText: OrderShopTextProps = {
  en: {
    inProgress: "In progress",
    done: "Done",
    statusText: "Status",
    totalText: "Total",
    moveToDoneButton: { text: "Move to done orders", link: "" },
    removeToUndoneButton: { text: "Remove to undone orders", link: "" },
  },
  sk: {
    inProgress: "V procese",
    done: "Hotovo",
    statusText: "Stav",
    totalText: "Celkom",
    moveToDoneButton: { text: "Presunúť na hotové objednávky", link: "" },
    removeToUndoneButton: {
      text: "Odstrániť do nedokončených objednávok",
      link: "",
    },
  },
  ru: {
    inProgress: "В процессе",
    done: "Готово",
    statusText: "Статус",
    totalText: "Итого",
    moveToDoneButton: { text: "Переместить в готовые заказы", link: "" },
    removeToUndoneButton: { text: "Убрать в невыполненные заказы", link: "" },
  },
};

export const OrdersText: OrdersTextProps = {
  en: {
    title: "Your all orders",
    bgText: "Orders",
    tableData: {
      numberText: "Number",
      dateText: "Date",
      priceText: "Price",
    },
  },
  sk: {
    title: "Vaše všetky objednávky",
    bgText: "Objednávky",
    tableData: {
      numberText: "Číslo",
      dateText: "Dátum",
      priceText: "Cena",
    },
  },
  ru: {
    title: "Ваши все заказы",
    bgText: "Заказы",
    tableData: {
      numberText: "Номер",
      dateText: "Дата",
      priceText: "Цена",
    },
  },
};

export const AdminText = {
  en: {
    title: "Admin",
    bgText: "Orders",
    tableData: {
      numberText: "Number",
      clientNumberText: "Client number",
      dateText: "Date",
      priceText: "Price",
    },
  },
  sk: {
    title: "Admin",
    bgText: "Objednávky",
    tableData: {
      numberText: "Číslo",
      clientNumberText: "Číslo klienta",
      dateText: "Dátum",
      priceText: "Cena",
    },
  },
  ru: {
    title: "Админ панель",
    bgText: "Заказы",
    tableData: {
      numberText: "Номер",
      clientNumberText: "Номер клиента",
      dateText: "Дата",
      priceText: "Цена",
    },
  },
};

export const CategoriesEditAdminText: CategoriesEditAdminTextProps = {
  en: {
    title: "Categories",
    invisible: "Invisible",
    visible: "Visible",
  },

  sk: {
    title: "Kategórie",
    invisible: "Neviditeľné",
    visible: "Viditeľné",
  },
  ru: {
    title: "Категории",
    invisible: "Невидимые",
    visible: "Видимые",
  },
};

export const ProductsEditAdminText: ProductsEditAdminTextProps = {
  en: {
    title: "Products",
    invisible: "Invisible",
    visible: "Visible",
  },

  sk: {
    title: "Produkti",
    invisible: "Neviditeľné",
    visible: "Viditeľné",
  },
  ru: {
    title: "Продукты",
    invisible: "Невидимые",
    visible: "Видимые",
  },
};

export const shopRedirectFromCart: ShopRedirectFromCartProps = {
  en: {
    title: "Your cart is empty",
    description: "Please add products to your cart",
    button: {
      text: "Go to shop",
      link: "/shop",
    },
  },
  ru: {
    title: "Ваша корзина пуста",
    description: "Пожалуйста, добавьте товары в корзину",
    button: {
      text: "Перейти в магазин",
      link: "/shop",
    },
  },
  sk: {
    title: "Váš košík je prázdny",
    description: "Prosím, pridajte produkty do vášho košíka",
    button: {
      text: "Prejsť do obchodu",
      link: "/shop",
    },
  },
};

export const shopRedirectFromOrders: ShopRedirectFromOrdersProps = {
  en: {
    isNotLoggined: {
      title: "You are unlogged in",
      description:
        "To be able to see your orders, login into your account first.",
      button: {
        text: "Login",
        link: "/login",
      },
    },
    noOrders: {
      title: "Your cart is empty",
      description: "Please add products to your cart",
      button: {
        text: "Go to shop",
        link: "/shop",
      },
    },
  },
  sk: {
    isNotLoggined: {
      title: "Nie ste prihlásený",
      description:
        "Pre zobrazenie vašich objednávok sa najskôr prihláste do vášho účtu.",
      button: {
        text: "Prihlásiť sa",
        link: "/login",
      },
    },
    noOrders: {
      title: "Váš košík je prázdny",
      description: "Prosím, pridajte produkty do vášho košíka",
      button: {
        text: "Prejsť do obchodu",
        link: "/shop",
      },
    },
  },
  ru: {
    isNotLoggined: {
      title: "Вы не вошли в систему",
      description:
        "Чтобы просмотреть ваши заказы, сначала войдите в свою учетную запись.",
      button: {
        text: "Войти",
        link: "/login",
      },
    },
    noOrders: {
      title: "Ваша корзина пуста",
      description: "Пожалуйста, добавьте товары в вашу корзину",
      button: {
        text: "Перейти в магазин",
        link: "/shop",
      },
    },
  },
};
