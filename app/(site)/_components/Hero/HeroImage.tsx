"use client"

import { Bitter } from 'next/font/google';
import Image from 'next/image';

const bitter = Bitter({
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
    weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})
const HeroImage = () => {

    return (
        <div className='relative h-full w-full place-self-auto col-span-auto'>
            <div className='relative w-screen lg:h-[33rem] lg:w-[33rem] 2xl:h-[47rem] 2xl:w-[47rem] flex justify-center pb-12'>
                <div className='md:absolute md:-top-[3.2rem] md:left-[5.5rem] -z-[10] md:w-[25rem] 2xl:w-[33rem] rounded-md'>
                    <Image src={'/assets/hero/pic0.webp'} height={1000} width={1000} alt="hero Image" className='rounded-md object-cover ' />
                </div>
                <div className='absolute bottom-[1rem] md:-left-[2rem] h-[5rem] w-[17rem] p-2 b heroOfferCard dark:shadow-sm flex items-center justify-between'>
                    <div className='w-[7rem] text-foreground font-bold text-[0.8rem] flex flex-col'>
                        <p>Limited Offer</p>
                        <p>Any Hair Style for</p>
                    </div>
                    <div>
                        <span className={`${bitter.className} text-[1.71rem]`}>Rs. 150</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroImage