import { Button } from '@/components/ui/button'
import React from 'react'
import { Bitter } from 'next/font/google'

const bitter = Bitter({
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
    weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})

const FinalCTA = () => {
    return (
        <div className='p-7 md:p-14 bg-foreground'>
            <div className='flex flex-col md:flex-row justify-between bg-background items-center p-7 md:p-2 gap-14 md:gap-0'>
                <div className='flex flex-col gap-0.5 text-[2.052rem] md:w-[50%] md:mr-4'>
                    <h2>Book Your</h2>
                    <h2>Appointment Online</h2>
                </div>
                <span className='h-1 w-full md:h-[10rem] md:w-1 bg-accent block mx-1'></span>
                <div className='flex flex-col md:flex-row justify-between md:justify-around items-center gap-10 md:gap-0'>
                    <div className='md:w-[50%]'>
                        <p className='text-[1rem]'>
                            Schedule your next haircut service online. Our online booking is fast and available 24/7. Book now and get ready to look your best
                        </p>
                    </div>
                    <div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalCTA