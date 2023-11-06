
interface TiresProps {
  totalTires: number
}

export const Tires = ({ totalTires }: TiresProps) => {

  const tire: JSX.Element[] = []
  
  for (let i = 0 ; i < totalTires; i++) {

    tire.push(
      <div key={i}  
      className="w-16 h-7 border border-black rounded-md rounded-tl-none rounded-tr-none -mt-7 bg-gradient-to-b from-gray-900 via-gray-500 to-indigo-950 contrast-125" 
      />
    )
  }

  return (
    <>{tire}</>
  )
}