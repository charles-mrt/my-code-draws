import { Engine } from "./Engine"
import { Exhaust } from "./Exhaust"
import { Light } from "./Light"
import { Tires } from "../Tires"
import { Mirror } from "./Mirror"
interface RedCar {
  tires: number
  mirrow: number
  exhaust: number
}

export const RedCar = () => {
  return (
    <>
      {/* red car */}
      <div className="w-72  flex flex-col justify-center items-center contrast-[166%]">

        {/* car hood */}
        <div className="flex items-center justify-center z-10 relative">
          {/* car mirror  */}
          <div className=" w-[275px] -mt-2 absolute z-50 flex justify-between">
          <Mirror sidePosition="left" degrePosition="left" />
          <Mirror sidePosition="right" degrePosition="right" scaleX />
          </div>
          

          {/* car roof  */}
          <div className="z-10 flex justify-center items-end w-56 h-8 border border-b-[5px] border-gray-950 rounded-t-full bg-gradient-to-b from-gray-700 to-gray-300">

            {/* car windows  */}
            <div className="z-20 w-48 h-6  border border-b-[5px] border-black  rounded-t-full bg-gradient-to-b from-neutral-800 to-neutral-400 flex items-end justify-center overflow-hidden relative">

              {/* car rear-view  */}
              <div className="w-8 h-2 absolute top-0 border border-black rounded-full bg-opacity-20 bg-gray-700" />

              {/* car inside  */}
              <div className="w-full h-2 flex justify-evenly gap-10">

                {/* seat */}
                <div className="w-14 rounded-t-xl bg-gray-950"></div>
                <div className="w-14 rounded-t-xl bg-gray-950"></div>

              </div>

            </div>

          </div>

          {/* car mirror  */}
        </div>

        {/* estrutura vermleha */}
        <div className="-z-0 w-72 h-7 -mt-4 bg-red-600 border-b-4 border-red-600 rounded-t-3xl flex items-end justify-center">
          <div className="w-[95%] h-full rounded-t-3xl bg-red-700 flex items-end justify-center">
            <div className="bg-gray-300 w-3 h-2 -mb-1" />
          </div>
        </div>

        {/* car rear */}
        <div className="w-full h-auto border-2 border-black flex items-center justify-between">

          <div className="z-10 w-12 h-4 border-r-4 border-b-4  border-black bg-neutral-500 rounded-l-sm" />


          <Light />
          <div className="w-full h-4 flex items-center justify-center border-2 border-black bg-gradient-to-b from-gray-700 to-gray-400" >
            <span className="capitalize text-zinc-300 text-sm">top gear</span>
          </div>
          <Light />

          <div className="z-10 w-12 h-4 border-l-4 border-b-4  border-black bg-neutral-500 rounded-r-sm" />

        </div>

        {/* bumber */}
        <div className="w-full h-8 flex items-end justify-center rounded-b-3xl bg-gradient-to-t from-black via-red-800 to-red-400 relative z-10">


          {/* stripe */}
          <div className="flex flex-col items-start gap-1 absolute left-0 top-1">
            <div className="w-8 h-1 bg-black" />
            <div className="w-8 h-1 bg-black" />
          </div>

          <div className="w-40 h-4 bg-neutral-900">

            <div className="flex item-end  justify-between">
              <Exhaust exhausts={2} sidePosition="right" />        
              <Engine />
              <Exhaust exhausts={2} sidePosition="left"/>
            </div>

          </div>

          {/* stripe */}
          <div className="flex flex-col items-end gap-1 absolute right-0 top-1">
            <div className="w-8 h-1 bg-black" />
            <div className="w-8 h-1 bg-black" />
          </div>
        </div>

        <div className="w-full flex justify-between -z-0 mt-2">
          <Tires totalTires={2}/>
        </div>
  
      </div >


    </>
  )
}