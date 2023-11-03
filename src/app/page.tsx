import Image from 'next/image'
import { RedCar } from './components/red-car/Car'

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl">Top Gear</h1>
      <div className="flex flex-col items-center justify-center" >
        <RedCar />
      </div>
    </main>
  )
}
