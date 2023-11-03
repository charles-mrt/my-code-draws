import './globals.css'
import { VT323 } from 'next/font/google'
import Image from 'next/image'

import background from  '../../public/image/background.jpg'

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
      <body className={`font-sans w-screen h-screen flex justify-center items-center bg-white ${vt323font.variable}`}>
        {children}
        {/* <Image src={background} alt="background" className="object-fill w-screen h-screen"/> */}
      </body>
    </html>
  );
}
