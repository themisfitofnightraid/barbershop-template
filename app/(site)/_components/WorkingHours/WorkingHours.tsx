import Image from 'next/image'
import React from 'react'
import Hours from './Hours'

const WorkingHours = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[8rem] p-[1rem] justify-center items-center'>
      <div className='relative border p-4 border-accent flex items-center justify-center'>
        <span className='absolute block h-[10rem] w-[10rem] bg-accent top-0 right-0 -z-[5]'></span>
        <span className='absolute block h-[10rem] w-[10rem] bg-accent bottom-0 left-0 -z-[5]'></span>
        <div className='h-[24rem] w-[20rem] overflow-hidden'>
          <Image
            src="/assets/WorkingHours/pic2.jpg"
            width={3456}
            height={5184}
            alt="working hours"
            className='object-contain '
          />
        </div>
      </div>
      <Hours />
    </div>
  )
}

export default WorkingHours