import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ClientFeedback } from '@/constants/clientFeedbacks'
import Autoplay from "embla-carousel-autoplay"
import { Bitter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const bitter = Bitter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})
const ClientCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {
            ClientFeedback.map((feedbacks) => (
              <CarouselItem
                key={feedbacks.id}
                className='flex flex-col gap-7  md:flex-row md:gap-14 items-center justify-center'
              >
                <div className='border border-accent p-4'>
                  <div className="h-[24rem] w-[20rem] 2xl:h-[28rem] 2xl:w-[24rem] overflow-hidden">
                    <Image
                      src={feedbacks.clientPic}
                      alt="Client Pic"
                      height={6000}
                      width={4000}
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-center lg:w-[55%] gap-7'>
                  <p className='2xl:text-[1.2rem]'>{feedbacks.clientFeedback}</p>
                  <span className={`${bitter.className} font-medium text-[1.2rem] 2xl:text-[1.71rem]`}>{feedbacks.clientName}</span>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ClientCarousel