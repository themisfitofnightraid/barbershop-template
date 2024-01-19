"use client"

import { Button } from '@/components/ui/button'
import { Bitter } from 'next/font/google'
import Link from 'next/link'

const bitter = Bitter({
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
    weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})

const HeroBtn = () => {
    return (
        <div className='flex gap-7 items-center'>
            <Button
                size={"cta"}
                variant={"cta"}
                className="heroCTACard"
            >
                <p
                    className={`${bitter.className} relative text-[1.425rem] xl-[2.052rem] z-10 text-foreground font-bold`}
                >
                    Book an Appointment
                </p>
                <span
                    className='hidden group-hover/btn:block h-[5rem] w-[5rem] absolute bg-accent rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                >
                </span>
            </Button>
            <Link href="#services">
                <div className='h-[3rem] w-[3rem] flex items-center justify-center heroArrow dark:shadow-sm rounded-full bg-accent'>
                    <svg width="2rem" height="2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#e6e6e6" d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"></path>
                    </svg>
                </div>
            </Link>
        </div>
    )
}

export default HeroBtn