import type { StaticImageData } from "next/image";

export interface Language {
  lang: "en" | "ru" | "sk" | "de";
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

export interface HeaderProps {
  en: {
    icon: StaticImageData;
    links: Link[];
  };
  sk: {
    icon: StaticImageData;
    links: Link[];
  };
  ru: {
    icon: StaticImageData;
    links: Link[];
  };
}

interface WatchVideo {
  icon: StaticImageData;
  text: string;
  link: string;
}

interface IntroductionText {
  logo: StaticImageData;
  name: string;
  introductionImg: StaticImageData;
  description: string;
  button: Button;
  watchVideo: WatchVideo;
}

export interface IntroductionProps {
  en: IntroductionText;
  ru: IntroductionText;
  sk: IntroductionText;
}

interface Trainer {
  image: StaticImageData;
  qr: StaticImageData;
  name: string;
  number: string;
  email: string;
  languages: StaticImageData[];
}

interface TrainersText {
  bgText: string;
  title: string;
  scrollIcons: {
    left: StaticImageData;
    right: StaticImageData;
  };
  trainers: Trainer[];
}

export interface TrainersProps {
  en: TrainersText;
  ru: TrainersText;
  sk: TrainersText;
}

interface GalleryText {
  gallery: StaticImageData[];
  title: string;
  icon: StaticImageData;
  points: string[];
  button: Button;
  link: Button;
}

export interface GalleryProps {
  en: GalleryText;
  ru: GalleryText;
  sk: GalleryText;
}

interface Package {
  title: string;
  price: number;
  description: string;
  included: string[];
  button: Button;
  standOut?: boolean;
  advertisement?: string;
}

interface PricesText {
  text: string;
  title: string;
  packages: Package[];
}

export interface PricesProps {
  en: PricesText;
  ru: PricesText;
  sk: PricesText;
}

interface ActivityText {
  bgText: string;
  title: string;
  scrollImages: StaticImageData[];
  scrollIcon: string;
  link: Link;
}

export interface ActivityProps {
  en: ActivityText;
  ru: ActivityText;
  sk: ActivityText;
}

interface InputField {
  type: string;
  placeholder: string;
  field: string;
  button: {
    type: string;
    text: string;
  };
}

interface NewsletterText {
  title: string;
  description: string;
  input: InputField;
}

export interface NewsletterProps {
  en: NewsletterText;
  ru: NewsletterText;
  sk: NewsletterText;
}

interface FooterSection {
  title: string;
  links: Link[];
}

interface FooterLocation {
  icon: StaticImageData; 
  text: string;
}

interface FooterSocial {
  title: string;
  links: { icon: string; link: string; }[];
}

interface FooterText {
  logo: StaticImageData; 
  name: string;
  location: FooterLocation;
  sitemap: {
    title: string;
    links: Link[];
    support: FooterSection;
    socials: FooterSocial;
  };
}

export interface FooterProps {
  en: FooterText;
  ru: FooterText;
  sk: FooterText;
}
