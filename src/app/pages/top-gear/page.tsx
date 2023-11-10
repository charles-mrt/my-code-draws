'use client'
import Image from 'next/image'

import card_bg from '../../../../public/image/card_bg.jpg'

import { Header } from '@/app/components/pages/Header'
import { Footer } from '@/app/components/pages/Footer'
import { AudioPlayerControls } from '@/app/components/AudioPlayerControls'
import { CarSlider } from '@/app/components/slide/CarSlider'


export default function TopGear() {
  return (
    <>
      <div className="min-w-[800px] w-auto  h-[600px] rounded-2xl border-[6px] border-orange-500 shadow-custom overflow-hidden relative">

        <Header />

        <div className="relative w-full h-full overflow-hidden flex flex-col justify-center">

          <div className="absolute z-10 h-full w-full">
            <h1 className="text-white text-3xl uppercase mt-10 text-center">top gear</h1>
            <CarSlider />
          </div>

          <Image
            src={card_bg}
            alt="paisagem"
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='bg-opacity-25'
          />
        </div>

        <div className="absolute z-50 bottom-0 left-0">
          <AudioPlayerControls />
        </div>

      </div>
      <Footer />
    </>
  )
}