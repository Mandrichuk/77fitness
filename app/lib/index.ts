import type { StaticImageData } from "next/image";

export interface Language {
  lang: "en" | "ru" | "sk";
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

export interface HeaderTextProps {
  en: {
    links: Link[];
  };
  sk: {
    links: Link[];
  };
  ru: {
    links: Link[];
  };
}

export interface HeaderProps {
  locale: string;
}
export interface LocaleProps {
  params: {
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
