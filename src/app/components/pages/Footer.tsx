import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-screen fixed z-50 bottom-0 left-0 flex items-center justify-between  w-1[960px] bg-red-500 bg-opacity-60" >
      <div className="text-black flex gap-2 mx-4">
        <Link href="https://github.com/charles-mrt" target='_blank' rel="noreferrer noopener">
          github |
        </Link>
        <Link href="https://charles-martins-dev.vercel.app/" target='_blank' rel="noreferrer noopener">
          portfolio |
        </Link>
        <Link href="https://www.instagram.com/charles__mrt/" target='_blank' rel="noreferrer noopener">
          instagram |
        </Link>
        <Link href="https://www.linkedin.com/in/charles-martins-tecnologia-da-informacao/" target='_blank' rel="noreferrer noopener">
          linkedin |
        </Link>
        <Link href="https://www.facebook.com/charles.martins.3956" target='_blank' rel="noreferrer noopener">
          facebook
        </Link>
      </div>
      <div className="uppercase text-sm pr-4">copyright © 2023 charles martins. all rights reserved</div>
    </footer>
  )
}