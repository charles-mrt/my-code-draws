'use client'
import Link from 'next/link'
import logo from '../../../../public/image/logo.svg'
import Image from "next/image"
import { usePathname } from "next/navigation"


interface HeaderProps {
  bg_color?: string
}

export const Header = ({ bg_color }: HeaderProps) => {
  const pathName = usePathname()
  const pageName = pathName.split('/').pop()

  return (
    <header className={`${bg_color === undefined ? 'bg-slate-900' : bg_color} flex items-center justify-between px-2`}>

      <div className="flex items-center gap-2 m-2">
        <Image src={logo} alt="logo" width={30} />
        <span className="text-white uppercase text-lg">my code draws</span>
      </div>

      <nav>
        <ul className="text-white text-xl capitalize flex items-center gap-4 tracking-[1px]">
          <li className="hover:text-orange-500 transition-colors">
            <Link href="/" className={`${pageName === "home" ? 'underline' : ''} `}>home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link href="draw-mode" className={`${pageName === "draw-mode" ? 'underline' : ''} `}>draw mode</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link href="top-gear" className={`${pageName === "top-gear" ? 'underline' : ''} `}>top gear</Link>
          </li>
        </ul>
      </nav>

    </header >
  )
}