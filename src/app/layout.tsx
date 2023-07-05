import './globals.css'
import { Inter, Piazzolla } from 'next/font/google'
import localFont from 'next/font/local';
import {Layout} from "@/components/layout";
import 'dayjs/locale/ru'
import dayjs from "dayjs";
dayjs.locale('ru');

// const piazzolla = Piazzolla({ subsets: ['cyrillic'] })
// const unbounded = localFont({src: '../../public/fonts/unbounded/woff/Unbounded-Regular.woff2'});
const inter = Inter({subsets: ['cyrillic', "latin"], variable: '--font-inter'});
const lack = localFont({src: '../../public/fonts/lack/Lack-Regular.otf', variable: '--font-lack'});

export const metadata = {
  title: 'Danil Efremov | Full stack web-developer',
  description: 'Развивающийся full-stack web разработчик. Имеется опыт разработки web-приложений, сайтов, браузерных расширений, серверных приложений и других систем.',
  openGraph: {
    title: 'Danil Efremov',
    description: 'Развивающийся full-stack web разработчик. Имеется опыт разработки web-приложений, сайтов, браузерных расширений, серверных приложений и других систем.',
    url: 'https://danileph.ru',
    siteName: 'Danil Efremov',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/imgs/preview-portfolio.jpg',
        width: 1200,
        height: 627,
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lack.variable} ${inter.variable} font-inter`}>
      <Layout>
        {children}
      </Layout>
      </body>
    </html>
  )
}
