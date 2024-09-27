'use client'
import { ChevronsRight } from "lucide-react"
import { useState } from "react"

export const About = () => {

  const [toogle, setToogle] = useState(false)

  const handleToogle = () => {
    setToogle(prevCheck => !prevCheck)
  }

  return (
    <div className="h-52">

      <button onClick={handleToogle}
        className="flex gap-1 items-center">
        <ChevronsRight className={`size-4 ${toogle ? 'rotate-90' : 'rotate-0'}`} />
        sobre...
      </button>

      {toogle && (
        <p className="text-base bg-black p-2 border-r-4 border-b-4 border-orange-600 text-gray-300">
          <span className="flex items-center gap-1">
            <span className="w-2 h-4 bg-gray-300"> </span>
            My Code Draws é o meu espaço digital, onde dou vida às minhas criações artísticas usando código.
          </span>
          Neste site, mergulho na fascinante interseção entre arte e programação para expressar minha criatividade.
          <br /> De formas simples a composições mais complexas, o My Code Draws é o meu ateliê virtual, onde cada linha de código se transforma em uma desenho digital.
          <br />Descubra o poder da programação criativa no My Code Draws, o meu espaço pessoal para explorar e compartilhar o mundo emocionante das artes com código..
          <span className="animate-ping">|</span>
          <br />

          <a href='https://charles-martins-dev.vercel.app/' target="_blank" rel="noopener noreferrer" className="mr-2">
            Quer saber mais sobre mim? [Y]
          </a>
          <button onClick={handleToogle}>
            [N]
          </button>
        </p>
      )}

    </div>
  )
}