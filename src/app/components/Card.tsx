import Link from 'next/link'

import { ReactNode } from 'react'

interface CardProps {
  name: string
  children: ReactNode
  technologies: string[]
  codeUrl: string
}
export const Card = ({ name, children, technologies, codeUrl }: CardProps) => {

  return (
    <div className="w-5/6 h-96 px-10 py-4 m-auto flex flex-col items-center justify-between rounded-xl border-4 border-gray-400 bg-white bg-opacity-75 no-select cursor-grabbing">
      <header>
        <h5 className="text-2xl">{name}</h5>
      </header>
      {children}
      <footer className="text-center">
        <div className="flex flex-col mb-2 -mt-4 text-base">
          <span>made with</span>
          <span className="capitalize">{technologies.join(' - ')}</span>
        </div>
        <button className="p-2 w-56 rounded-md text-white text-lg bg-orange-500">
          <Link href={codeUrl} target="_blank" rel="noreferrer noopener">&lt;/&gt; view code</Link>
        </button>
        
      </footer>
    </div>
  )
}