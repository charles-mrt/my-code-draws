import React from 'react'

interface ExhaustProps {
  exhausts: number
  sidePosition: 'left' | 'right'
}

export const Exhaust = ({ exhausts, sidePosition }: ExhaustProps) => {
  const muffler: JSX.Element[] = []
  for (let i = 0; i < exhausts; i++) {
    muffler.push(
      <div key={i} className="w-4 h-4 border-2 border-neutral-600 rounded-full bg-radial-gradient" />
    )
  }

  const position = sidePosition === 'left' ? 'rounded-tl-lg' : 'rounded-tr-lg';

  return (
    <div className={`-mt-1 w-8 h-6 flex items-end  ${position} rounded-b-lg bg-gradient-to-t from-black to-gray-900`}>
      {muffler}
    </div>
  )
}
