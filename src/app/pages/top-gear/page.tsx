'use client'
import Image from 'next/image'

import card_bg from '../../../../public/image/card_bg.jpg'


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import A11y from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import { Card } from '@/app/components/Card'
import { SlideNavButtons } from '@/app/components/slide-button/SlideNavButtons'
import { Header } from '@/app/components/pages/Header'
import { Footer } from '@/app/components/pages/Footer'

SwiperCore.use([Navigation, Pagination])

export default function TopGear() {
  return (<>
    <div className="min-w-[800px] w-auto  h-[600px] rounded-2xl border-[6px] border-orange-500 shadow-custom overflow-hidden">

      <Header />

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
    <Footer />    
    </>
  )
}