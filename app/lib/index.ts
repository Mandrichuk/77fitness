import { StaticImageData } from "next/image";

export interface Language {
  locale: "en" | "ru" | "sk";
}

export interface Button {
  text: string;
  link: string;
  blank?: boolean;
}
export interface Link {
  text: string;
  link: string;
}

export interface ImageProps {
  image: string;
  alt: string;
  imgQuality?: number;
  imgPriority?: boolean;
  isShopProduct?: boolean;
}

export interface HeaderLanguages {
  title: string;
  links: Link[];
}
export interface HeaderShop {
  title: string;
  links: Link[];
}

export interface HeaderTextProps {
  en: {
    logo: {
      image: string;
      alt: string;
      link: string;
    };
    links: Link[];
    login: Link;
    shop: HeaderShop;
    languages: HeaderLanguages;
  };
  sk: {
    logo: {
      image: string;
      alt: string;
      link: string;
    };
    links: Link[];
    login: Link;
    shop: HeaderShop;
    languages: HeaderLanguages;
  };
  ru: {
    logo: {
      image: string;
      alt: string;
      link: string;
    };
    links: Link[];
    login: Link;
    shop: HeaderShop;
    languages: HeaderLanguages;
  };
}

export interface EditCategory {
  params: {
    locale: "en" | "sk" | "ru";
    category_sku: string;
  };
}

export interface EditProductPageProps {
  params: {
    locale: "en" | "sk" | "ru";
    product_sku: string;
  };
}

export interface EditCategoryProps {
  locale: "en" | "sk" | "ru";
  category_sku: string;
}

export interface EditProductProps {
  locale: "en" | "sk" | "ru";
  product_sku: string;
}

export interface HeaderProps extends Language {}

export interface FooterProps extends Language {}

export interface PricesProps extends Language {}

export interface TrainersProps extends Language {}

export interface HeadProps extends Language {}

export interface ProductsSectionsProps extends Language {}

export interface RegistrationProps extends Language {}

export interface LoginProps extends Language {}

export interface CategoriesEditProps extends Language {}

export interface OrderProductsProps extends Language {
  product: any;
}

export interface AdminProductsProps extends Language {
  product: any;
}

export interface OrderProps extends Language {
  locale: "en" | "sk" | "ru";
  orderData: any;
}

export interface OrderAdminProps extends Language {
  locale: "en" | "sk" | "ru";
  orderData: any;
}

export interface OrdersProps extends Language {}

export interface AdminProps extends Language {
  orders?: any;
}

export interface CartProductProps {
  sku: string;
  quantity: number;
  isMembership?: boolean;
}

export interface CartStateProps {
  value: CartProductProps[];
}

export interface ClientDetailsProps {
  sku: string;
  username: string;
  email: string;
}

export interface ClientStateProps {
  value: ClientDetailsProps | null;
}

export interface AdminDetailsProps {
  sku: string;
  username: string;
  email: string;
}

export interface AdminStateProps {
  value: AdminDetailsProps | null;
}

export interface CategoriesProps extends Language {
  sku?: string | null;
}

export interface ProductSectionProps extends Language {
  sku?: string | null;
}

export interface LocaleProps {
  params: {
    locale: "en" | "sk" | "ru";
  };
  searchParams: URLSearchParams;
}

export interface ShopSkuProps {
  params: {
    sku?: string | null;
    locale: "en" | "sk" | "ru";
  };
}

export interface TextLayersProps {
  bgText: string;
  title: string;
}

interface TeamMember {
  image: {
    src: string;
    alt: string;
  };
  qr: {
    src: string;
    alt: string;
  };
  name: string;
  number: string;
  email: string;
}

export interface TeamSliderProps {
  children: TeamMember[];
}

interface Package {
  standOut?: string;
  standOutText?: string;
  per?: string;
  title: string;
  price: string;
  description: string;
  included: string[];
  button: {
    text: string;
    link: string;
  };
  membershipSku: string;
}

export interface MembershipProps {
  membership: Package;
  key: string;
}

export interface ActivityImageProps extends ImageProps {
  key: string;
  index: number;
}

interface ScrollImage {
  src: string;
  alt: string;
}

export interface ScrollImagesProps {
  images: ScrollImage[];
}

export interface InputNewsletterProps {
  placeholderText: string;
  buttonText: string;
}

export interface ImagesTrainingProps {
  images: ImageProps[];
  buttonText: string;
}

interface FooterLocation {
  text: string;
  link: string;
}

interface FooterSocial {
  icon: {
    src: any;
    alt: string;
  };
  link: string;
}

interface FooterText {
  logo: {
    src: string;
    alt: string;
  };
  name: string;
  location: FooterLocation;
  sitemap: {
    title: string;
    links: Link[];
  };
  shop: {
    title: string;
    links: Link[];
  };
  languages: {
    title: string;
    links: Link[];
  };
  socials: {
    title: string;
    links: FooterSocial[];
  };
}

export interface FooterTextProps {
  en: FooterText;
  sk: FooterText;
  ru: FooterText;
}

export interface NotFoundTextProps {
  en: {
    backgroundImage: ImageProps;
    title: string;
    button: Button;
  };
  sk: {
    backgroundImage: ImageProps;
    title: string;
    button: Button;
  };
  ru: {
    backgroundImage: ImageProps;
    title: string;
    button: Button;
  };
}

export interface LocationTextProps {
  en: {
    title: string;
    alert: string;
    location: string;
    mapsLink: string;
  };
  sk: {
    title: string;
    alert: string;
    location: string;
    mapsLink: string;
  };
  ru: {
    title: string;
    alert: string;
    location: string;
    mapsLink: string;
  };
}

export interface BluredCircleProps {
  color: string;
  blurRange: string;
}

export interface BluredCircleColorsProps {
  pink: string;
  blue: string;
}

export interface ShopHeadTextProps {
  en: {
    title: string;
    announcement: string;
    bannerImageFullScreen: ImageProps;
    bannerImageMobile: ImageProps;
  };
  sk: {
    title: string;
    announcement: string;
    bannerImageFullScreen: ImageProps;
    bannerImageMobile: ImageProps;
  };
  ru: {
    title: string;
    announcement: string;
    bannerImageFullScreen: ImageProps;
    bannerImageMobile: ImageProps;
  };
}

interface MainSection {
  text: string;
  link: string;
}

export interface CategoriesTextProps {
  en: { mainSection: MainSection };
  sk: { mainSection: MainSection };
  ru: { mainSection: MainSection };
}
export interface ProductsSectionsTextProps {
  en: {
    button: Link;
    commingSoon: string;
    addedNotify: string;
    limitedReachNotify: string;
  };
  sk: {
    button: Link;
    commingSoon: string;
    addedNotify: string;
    limitedReachNotify: string;
  };
  ru: {
    button: Link;
    commingSoon: string;
    addedNotify: string;
    limitedReachNotify: string;
  };
}

export interface ProductCartTextProps {
  en: {
    bgText: string;
    title: string;
    totalPriceText: string;
    useBonusPoints: string;
    buttonCheckout: Button;
    notify: string;
    alertText: string;
    downloadText: string; 
    appStore: string;
    playMarket: string;
  };
  sk: {
    bgText: string;
    title: string;
    totalPriceText: string;
    useBonusPoints: string;
    buttonCheckout: Button;
    notify: string;
    alertText: string;
    downloadText: string; 
    appStore: string;
    playMarket: string;
  };
  ru: {
    bgText: string;
    title: string;
    totalPriceText: string;
    useBonusPoints: string;
    buttonCheckout: Button;
    notify: string;
    alertText: string;
    downloadText: string; 
    appStore: string;
    playMarket: string;
  };
}

export interface PriceDetailsProps extends Language {}

export interface SuccessProps extends Language {}

export interface CartProductsProps extends Language {}

interface SuccessTextLocale {
  title: string;
  text: string;
  button: Button;
}

export interface SuccessTextProps {
  en: SuccessTextLocale;
  sk: SuccessTextLocale;
  ru: SuccessTextLocale;
}

export interface RegistrationProps {
  locale: "en" | "sk" | "ru";
  // getValue: (e: any) => void;
}

export interface InputProps {
  placeholderText: string;
  getValue: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  field: string;
  maxSymbols?: number;
  initialValue?: string;
}

interface InputErrors {
  fulfillFields: string;
  invalidEmail: string;
  emailAlreadyRegistered: string;
  passwordsNotMatch: string;
  passwordLength: string;
}

interface RegistrationDetailsProps {
  title: string;
  loginLink: string;
  registrationLink: string;
  inputs: {
    name: { placeholder: string; field: string };
    email: { placeholder: string; field: string };
    password: { placeholder: string; field: string };
    repeatPassword: { placeholder: string; field: string };
  };
  inputErrors: InputErrors;
  registrationButton: {
    text: string;
    link: string;
  };
  notify: string;
  registerRedirect: string;
}

export interface RegistrationTextProps {
  en: RegistrationDetailsProps;
  sk: RegistrationDetailsProps;
  ru: RegistrationDetailsProps;
}

export interface LoginTextDetailsProps {
  title: string;
  loginLink: { text: string; link: string };
  registrationLink: { text: string; link: string };
  inputs: {
    email: { placeholder: string; field: string };
    password: { placeholder: string; field: string };
  };
  inputErrors: InputLoginErrors;
  registrationButton: {
    text: string;
    link: string;
  };
  loginRedirect: string;
  notify: string;
}

interface InputLoginErrors {
  fulfillFields: string;
  unaccurateData: string;
}

export interface LoginTextProps {
  en: LoginTextDetailsProps;
  sk: LoginTextDetailsProps;
  ru: LoginTextDetailsProps;
}

export interface OrderShopTextProps {
  en: OrderShopTextItem;
  sk: OrderShopTextItem;
  ru: OrderShopTextItem;
}

interface OrderShopTextItem {
  inProgress: string;
  done: string;
  statusText: string;
  totalText: string;
  emailText: string;
  moveToDoneButton: {
    text: string;
    link: string;
  };
  removeToUndoneButton: {
    text: string;
    link: string;
  };
}

export interface OrdersTextProps {
  en: {
    title: string;
    bgText: string;
    tableData: {
      numberText: string;
      dateText: string;
      priceText: string;
    };
    logoutContainer: {
      title: string;
      button: Button;
    };
    logoutConfirmation: {
      title: string;
      buttonLogout: Button;
      buttonCancel: Button;
    };
  };
  sk: {
    title: string;
    bgText: string;
    tableData: {
      numberText: string;
      dateText: string;
      priceText: string;
    };
    logoutContainer: {
      title: string;
      button: Button;
    };
    logoutConfirmation: {
      title: string;
      buttonLogout: Button;
      buttonCancel: Button;
    };
  };
  ru: {
    title: string;
    bgText: string;
    tableData: {
      numberText: string;
      dateText: string;
      priceText: string;
    };
    logoutContainer: {
      title: string;
      button: Button;
    };
    logoutConfirmation: {
      title: string;
      buttonLogout: Button;
      buttonCancel: Button;
    };
  };
}

export interface CategoriesEditAdminTextProps {
  en: {
    title: string;
    invisible: string;
    visible: string;
    newCategoryRedirect: string;
  };
  sk: {
    title: string;
    invisible: string;
    visible: string;
    newCategoryRedirect: string;
  };
  ru: {
    title: string;
    invisible: string;
    newCategoryRedirect: string;
    visible: string;
  };
}


export interface CreateOrderProps {

    text: string;
    link: string;
 
}

export interface ProductsEditAdminTextProps {
  en: {
    title: string;
    invisible: string;
    visible: string;
    newProductRedirect: string;
  };
  sk: {
    title: string;
    invisible: string;
    visible: string;
    newProductRedirect: string;
  };
  ru: {
    title: string;
    invisible: string;
    visible: string;
    newProductRedirect: string;
  };
}

export interface ShopRedirectFromCartProps {
  en: {
    title: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
  };
  ru: {
    title: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
  };
  sk: {
    title: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
  };
}

interface ShopFromOrdersProps {
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
}

interface ShopRedirectFromOrders {
  isNotLoggined: ShopFromOrdersProps;
  noOrders: ShopFromOrdersProps;
}

export interface ShopRedirectFromOrdersProps {
  en: ShopRedirectFromOrders;
  sk: ShopRedirectFromOrders;
  ru: ShopRedirectFromOrders;
}
export interface NewCategoryProps extends Language {}

export interface NewProductProps extends Language {}

interface NewCategoryInputProps {
  placeholder: string;
  field: string;
}

interface NewCategoryInputProps {
  placeholder: string;
  field: string;
}

interface NewCategoryButtonProps {
  text: string;
  link: string;
}

interface NewCategoryInputs {
  name: NewCategoryInputProps;
  bgText_en: NewCategoryInputProps;
  bgText_ru: NewCategoryInputProps;
  bgText_sk: NewCategoryInputProps;
  title_en: NewCategoryInputProps;
  title_ru: NewCategoryInputProps;
  title_sk: NewCategoryInputProps;
  recomended: NewCategoryInputProps;
  toDisplay: NewCategoryInputProps;
}

interface NewCategoryTextPropsDetails {
  title: string;
  inputs: NewCategoryInputs;
  previewText: string;
  buttons: {
    saveButton: NewCategoryButtonProps;
    cancel: NewCategoryButtonProps;
  };
}

export interface NewCategoryTextProps {
  en: NewCategoryTextPropsDetails;
  ru: NewCategoryTextPropsDetails;
  sk: NewCategoryTextPropsDetails;
}

export interface AdminTextProps {
  en: {
    searchInput: {
      label: string;
      placeholder: string;
    };
    title: string;
    bgText: string;
    tableData: {
      numberText: string;
      clientNumberText: string;
      dateText: string;
      priceText: string;
    };
    inProcessTextBg: string;
    inProcessTitleTextBg: string;
    doneTextBg: string;
    doneTitleTextBg: string;
  };
  ru: {
    searchInput: {
      label: string;
      placeholder: string;
    };
    title: string;
    bgText: string;
    tableData: {
      numberText: string;
      clientNumberText: string;
      dateText: string;
      priceText: string;
    };
    inProcessTextBg: string;
    inProcessTitleTextBg: string;
    doneTextBg: string;
    doneTitleTextBg: string;
  };
  sk: {
    searchInput: {
      label: string;
      placeholder: string;
    };
    title: string;
    bgText: string;
    tableData: {
      numberText: string;
      clientNumberText: string;
      dateText: string;
      priceText: string;
    };
    inProcessTextBg: string;
    inProcessTitleTextBg: string;
    doneTextBg: string;
    doneTitleTextBg: string;
  };
}

interface CategoryEditText {
  title: string;
  inputs: {
    name: { placeholder: string; field: string };
    bgText_en: { placeholder: string; field: string };
    bgText_ru: { placeholder: string; field: string };
    bgText_sk: { placeholder: string; field: string };
    title_en: { placeholder: string; field: string };
    title_ru: { placeholder: string; field: string };
    title_sk: { placeholder: string; field: string };
    recomended: { placeholder: string; field: string };
    toDisplay: { placeholder: string; field: string };
  };
  previewText: string;
  buttons: {
    saveButton: { text: string; link: string };
    cancel: { text: string; link: string };
  };
}

export interface CategoryEditTextProps {
  en: CategoryEditText;
  sk: CategoryEditText;
  ru: CategoryEditText;
}

interface NewProductText {
  titleEdit: string;
  title: string;
  chooseCategoryText: string;
  inputs: {
    name: { placeholder: string; field: string };
    description_en: { placeholder: string; field: string };
    description_ru: { placeholder: string; field: string };
    description_sk: { placeholder: string; field: string };
    title_en: { placeholder: string; field: string };
    title_ru: { placeholder: string; field: string };
    title_sk: { placeholder: string; field: string };
    newPrice: { placeholder: string; field: string };
    oldPrice: { placeholder: string; field: string };
    leftInStock: { placeholder: string; field: string };
    toDisplay: { placeholder: string; field: string };
  };
  previewText: string;
  image: string;
  categoryText: string;
  buttons: {
    saveButton: { text: string; link: string };
    cancel: { text: string; link: string };
    editButton: { text: string; link: string };
  };
}

export interface NewProductTextsProps {
  en: NewProductText;
  sk: NewProductText;
  ru: NewProductText;
}

interface Logo {
  image: string;
  link: string;
  alt: string;
}

interface LanguageLink {
  text: string;
  link: "en" | "sk" | "ru";
}

export interface AdminHeaderTextProps {
  [key: string]: {
    logo: Logo;
    links: Link[];
    languages: {
      title: string;
      links: LanguageLink[];
    };
  };
}

interface LanguageContent {
  text: string;
  title: string;
  packages: Package[];
}

export interface PricesTextTypes {
  sk: LanguageContent;
  ru: LanguageContent;
  en: LanguageContent;
}

export interface TrainerProps {
  locale: "en" | "sk" | "ru";
  trainer: Trainer;
  selectedGender: string;
  selectedLanguage: string;
  seeMoreText: string;
  seeLessText: string;
}

interface TrainerFilterItem {
  text: string;
  value: string;
  color?: string;
}

interface GenderFilter {
  all: { text: string; value: string };
  male: { text: string; value: string; color: string };
  female: { text: string; value: string; color: string };
}

interface Trainer {
  image: { src: string; alt: string };
  qr: { src: string; alt: string };
  name: string;
  number: string;
  email: string;
  instagram: { name: string; link: string };
  post: { src: string; alt: string };
  gender: string;
  languageFilter: { text: string; value: string }[];
  description: string;
}

export interface TrainerSectionProps extends Language {
  sectionTrainers: Trainer[];
  seeMoreText: string;
  seeLessText: string;
}

interface TrainerText {
  bgText: string;
  title: string;
  genderText: string;
  genderFilter: GenderFilter;
  languageText: string;
  seeMoreText: string;
  seeLessText: string;
  formText: string;
  formLink: {
    text: string;
    link: string;
  };
  languageFilter: TrainerFilterItem[];
  trainers: Trainer[];
}

export interface TrainersTextProps {
  en: TrainerText;
  ru?: TrainerText;
  sk?: TrainerText;
}
