import React from 'react'
import GalleryPics from './GalleryPics'

const SmallGallery = () => {
  return (
    <section className='flex flex-col gap-7'>
        <div>
            <h2 className={`text-[2.052rem] md:text-[2.955rem]`}>Some of our Haircuts.</h2>
        </div>
        <div>
            <GalleryPics />
        </div>
    </section>
  )
}

export default SmallGallery