'use clent'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
1

import { SlideNavButtons } from '@/app/components/slide/SlideNavButtons'
import { RedCar } from '../top-gear/red-car/RedCar'
import { PurpleCar } from '../top-gear/purle-car/PurpleCar'
import { WhiteCar } from '../top-gear/white-car/WhiteCar'

import { topGearData } from '@/app/data/top-gear/topGear'
import { Card } from '../Card'

//SwiperCore.use([Navigation, Pagination])

interface CarProps {
  name: string
  technologies: string[]
  codeUrl: string
  type: string
}

function renderCarByType(type: string) {
  switch (type) {
    case 'RedCar':
      return <RedCar />
    case 'PurpleCar':
      return <PurpleCar />
    case 'WhiteCar':
      return <WhiteCar />
    default:
      return null
  }
}

export const CarSlider = () => {
  return (
    <Swiper
      loop={true}
      pagination={{ clickable: true }}
      className="mySwiper"
      spaceBetween={20}
      centeredSlides={true}
      slidesPerView="auto"
    >
      {topGearData.cars.map((data: CarProps, index: number) => (
        <SwiperSlide key={index} >
          <Card
            name={data.name}
            technologies={data.technologies}
            codeUrl={data.codeUrl}
          >
            {renderCarByType(data.type)}
          </Card>
        </SwiperSlide >
      ))}
      <SlideNavButtons />
    </Swiper>
  )
}
