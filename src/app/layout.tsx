import './globals.css'
import { VT323 } from 'next/font/google'
import Image from 'next/image'

import background from '../../public/image/background.jpg'

const vt323font = VT323({
  subsets: ['latin'],
  variable: '--font-VT323',
  weight: '400',
})

export const metadata = {
  title: {
    default: 'Top Gear l - Cars',
    template: '%s | Top Gear Cars',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Criação dos carros do topGear 1.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative font-sans antialiased w-screen h-screen flex justify-center items-center bg-white ${vt323font.variable}`}>

        <div className="z-10 absolute">{children}</div>

        <div className="w-screen h-screen relative z-0">
          <div className="w-full h-screen  absolute z-10 bg-gradient-to-b from-red-600 via-purple-600 to-red-600 opacity-80 " />
          <Image
            src={background}
            alt="background"
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>

      </body>
    </html>
  );
}
