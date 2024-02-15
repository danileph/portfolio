import "./globals.css";
import { Inter, Piazzolla, Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Layout } from "@/components/layout";
import "dayjs/locale/ru";
import dayjs from "dayjs";
import { Suspense } from "react";
dayjs.locale("ru");
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/meteors";

const tektur = localFont({
  src: "../../public/fonts/tektur/tektur.ttf",
  variable: "--font-tektur",
});
const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-roboto",
});
const furore = localFont({
  src: "../../public/fonts/furore/furore.otf",
  variable: "--font-furore",
});

export const metadata = {
  title: "Danil Efremov | Full stack web-developer",
  description:
    "Full-stack web developer. Имеется опыт разработки web-приложений, сайтов, браузерных расширений, серверных приложений и других систем.",
  openGraph: {
    title: "Danil Efremov",
    description:
      "Full-stack web developer. Имеется опыт разработки web-приложений, сайтов, браузерных расширений, серверных приложений и других систем.",
    url: "https://danileph.ru",
    siteName: "Danil Efremov",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/imgs/preview-portfolio.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/imgs/preview-portfolio.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={cn(
          `font-tektur antialiased bg-my-natural-900 text-my-natural-300 pt-[40px] before:content-[""] before:bg-background-gradient before:absolute relative z-10 before:w-full before:h-screen before:top-0`,
          roboto.variable,
          tektur.variable,
          furore.variable
        )}
      >
        <Layout>
          {/*<Suspense fallback={<Loading />}>*/}
          {/*  {children}*/}
          {/*</Suspense>*/}
          {children}
          {/*<Loading />*/}
        </Layout>
      </body>
    </html>
  );
}
