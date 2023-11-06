
import { RedCar } from '@/app/components/top-gear/red-car/Car'

export const Card = () => {
  return (
    <div className="w-5/6  h-96 px-10 py-4 m-auto flex flex-col items-center justify-between rounded-xl border-4 border-gray-400 bg-white bg-opacity-75 no-select  cursor-grabbing">
      
      <header>
        <h5 className="text-2xl">red car</h5>
      </header>

      <RedCar />

      <footer className="text-center">
        <div className="flex flex-col mb-2 -mt-4 text-base">
          <span>made with</span>
          <span className="capitalize">nextjs - reactjs - tailwind</span>
        </div>

        <button className="p-2 w-56 rounded-md text-white text-lg bg-orange-500">
          &lt;/&gt; view Code
        </button>

      </footer>
    </div >
  )
}