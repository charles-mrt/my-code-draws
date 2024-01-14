'use client'

import { Grid3X3, PencilRuler, Square } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Header } from '@/app/components/pages/Header'
import { RedCar } from "@/app/components/top-gear/red-car/RedCar"
import { PurpleCar } from '@/app/components/top-gear/purle-car/PurpleCar'

export default function drawMode() {

  const [isActivatedGrade, setIsActivatedGrade] = useState(false)

  const toggleGrid = () => {
    setIsActivatedGrade((prevValue) => {
      const updatedValue = !prevValue
      localStorage.setItem('grade', String(updatedValue))
      return updatedValue
    })
  }

  useEffect(() => {
    const gridValue = localStorage.getItem('grade')
    if (gridValue === 'true' || gridValue === 'false') {
      setIsActivatedGrade(gridValue === 'true')
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-white overflow-hidden relative">
      
      <div className="w-full z-50 relative">
        <Header bg_color='bg-gray-500' />
       
        <div className="flex gap-2 items-center justify-center absolute m-auto left-0 right-0 top-1 w-20 border-2 border-gray-600 rounded-md py-1">
          
          <button onClick={toggleGrid} className="text-zinc-300 hover:text-orange-400 transition-colors" >
            <PencilRuler strokeWidth={1} />            
          </button>

          {isActivatedGrade ? (
              <Grid3X3 strokeWidth={1} className="text-green-400  w-6 h-6" />
            ) : (
              <Square strokeWidth={1} className="text-gray-600  w-6 h-6" />
            )}

        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center z-10 fixed">
        <RedCar />       
      </div>

      {isActivatedGrade ? (
        <div className="w-screen h-screen z-0">
          {[...Array(101)].map((_, index) => (
            <>
              <div
                key={index}
                className="w-px h-full bg-gray-300 absolute top-0 transform -translate-x-1/2"
                style={{ left: `${index * 20}px` }}
              />
              <div
                key={index}
                className="h-px w-full bg-gray-300 absolute left-0 transform -translate-y-1/2"
                style={{ top: `${index * 20}px` }}
              />
            </>
          ))}

        </div>
      ) : null}


    </div>
  )
}