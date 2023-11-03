import { useSwiper } from 'swiper/react'

export const SlideNavButtons = () => {
  const swiper = useSwiper()

  return (
    <>

      <div className="z-50 w-auto h-full absolute m-auto lef-0 top-0 flex justify-between items-center p-1">
        <button
          className=' p-1 border-2  border-gray-200 rounded-md text-6xl text-white'
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
      </div>
      
      <div className="z-50 w-auto h-full absolute m-auto right-0 top-0 flex justify-between items-center p-1">
        <button
          className='p-1 border-2 border-gray-200 rounded-md text-6xl text-white'
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
      
    </>
  )
}