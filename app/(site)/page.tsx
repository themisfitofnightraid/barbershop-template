"use client"

import { Bitter } from 'next/font/google'
import { useState } from 'react'
import Loader from './loader'
import FinalCTA from './_components/FinalCTA/FinalCTA'
import Footer from './_components/Footer/Footer'
import HeroBtn from './_components/Hero/HeroBtn'
import HeroImage from './_components/Hero/HeroImage'
import ThreeCoins from './_components/Hero/ThreeCoins'
import Navbar from './_components/Navbar/Navbar'
import OurTeam from './_components/OurTeam/OurTeam'
import Services from './_components/Services/Services'
import SmallGallery from './_components/SmallGallery/SmallGallery'
import Testomonials from './_components/Testomonials/Testomonials'
import WorkingHours from './_components/WorkingHours/WorkingHours'

const bitter = Bitter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {
        isLoading ? (
          <>
            <Loader setIsLoading={setIsLoading} />
          </>
        ) : (
          <div className='relative flex flex-col gap-7 md:gap-14 2xl:gap-20'>
            <div className='dark:hidden absolute -top-[10rem] -left-[15rem] bg-[#ffbe4d] h-[40rem] w-[40rem] rounded-full blur-[100rem] opacity-15' />
            <Navbar />
            <main className='flex flex-col md:flex-row'>
              <section className="flex flex-col md:flex-row md:items-center">
                <div className='flex flex-col w-full h-full justify-center gap-12'>
                  <div className='flex flex-col gap-6'>
                    <div>
                      <h2 className={`${bitter.className} text-[3.546rem] 2xl:text-[5.1rem] lg:leading-[4.25rem] 2xl:leading-[6.12rem] font-bold`}>A Smooth Saloon Experience For Your Place</h2>
                    </div>
                    <div>
                      <h2 className={`${bitter.className} text-[1.2rem] 2xl:text-[1.7rem] text-muted `}>If you've ever wondered what hairstyle suites you and how you should cut your hair, here's a list of top styles</h2>
                    </div>
                  </div>
                  <div>
                    <HeroBtn />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center relative'>
                  <HeroImage />
                  <ThreeCoins />
                </div>
              </section>
            </main>
            <Services />
            <WorkingHours />
            <Testomonials />
            <SmallGallery />
            <OurTeam />
            <FinalCTA />
            <Footer />
          </div>
        )
      }
    </>
  )
}
