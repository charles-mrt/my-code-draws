'use client'
import Image from 'next/image'

import logo from '../../public/image/logo.svg'
import card_bg from '../../public/image/card_bg.jpg'


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import A11y from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import { Card } from './components/Card'
import { SlideNavButtons } from './components/slide-button/SlideNavButtons'

SwiperCore.use([Navigation, Pagination])

export default function Home() {


  return (
    <main>

      <div className="min-w-[800px] w-auto  h-[600px] rounded-2xl border-[6px] border-orange-500 shadow-custom overflow-hidden">

        <header className="bg-slate-900 flex items-center justify-between px-2">

          <div className="flex items-center gap-2 m-2">
            <Image src={logo} alt="logo" width={30} />
            <span className="text-white uppercase text-lg">my code draws</span>
          </div>

          <nav>
            <ul className="text-white text-lg capitalize flex items-center gap-4 tracking-[1.5px]">
              <li>top gear</li>
            </ul>
          </nav>

        </header>

        <div className="relative w-full h-full overflow-hidden flex flex-col justify-center">

          <div className="absolute z-10 h-full w-full">

            <h1 className="text-white text-3xl uppercase mt-10 text-center">
              top gear
            </h1>

            <Swiper
              loop={true}             
              pagination={{ clickable: true }}
              className="mySwiper"
              spaceBetween={20}
              centeredSlides={true}
              slidesPerView="auto"
            >
              {[1, 2, 3].map((index) => (
                <SwiperSlide key={index} >
                  <Card />
                </SwiperSlide >
              ))}
              <SlideNavButtons />
            </Swiper>

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

      </div>

    </main>
  )
}
