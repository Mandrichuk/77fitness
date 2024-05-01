import "./styles/globals.scss";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { StoreProvider } from "./store/StoreProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "77 Next Level Fitness",
    template: "%s | 77 Next Level Fitness",
  },
  description: "77 Next Level Fitness is your new gym in Bratislava, Slovakia",
  keywords: ["Gym", "77 Next Level Fitness", "Fitness", "Bratislava"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <StoreProvider>
      <body className={urbanist.className}>{children}</body>
    </StoreProvider>
  );
}
