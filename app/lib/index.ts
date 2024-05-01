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
}

export interface HeaderLanguages {
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
    languages: HeaderLanguages;
  };
  sk: {
    logo: {
      image: string;
      alt: string;
      link: string;
    };
    links: Link[];
    languages: HeaderLanguages;
  };
  ru: {
    logo: {
      image: string;
      alt: string;
      link: string;
    };
    links: Link[];
    languages: HeaderLanguages;
  };
}

export interface HeaderProps extends Language {}

export interface FooterProps extends Language {}

export interface HeadProps extends Language {}

export interface ProductsSectionsProps extends Language {}

export interface CategoriesProps extends Language {
  sku: string | null;
}

export interface ProductSectionProps extends Language {
  sku: string | null;
}


export interface LocaleProps {
  params: {
    locale: "en" | "sk" | "ru";
  };
}

export interface ShopSkuProps {
  params: {
    sku?: string | null ;
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
  standOut?: boolean;
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
    bannerImage: ImageProps;
  };
  sk: {
    title: string;
    announcement: string;
    bannerImage: ImageProps;
  };
  ru: {
    title: string;
    announcement: string;
    bannerImage: ImageProps;
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
  };
  sk: {
    button: Link;
  };
  ru: {
    button: Link;
  };
}
