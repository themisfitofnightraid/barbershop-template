import { TimeStampData } from '@/constants/timeStampsData'
import React from 'react'
import TimeStamp from './TimeStamp'

const Hours = () => {
    return (
        <div className={`border border-accent py-[2rem] flex flex-col items-center justify-center gap-[1rem]`}>
            <div className={`text-center w-[60%]`}>
                <h2 className={`font-bold text-[1.425rem]`}>Working Hours</h2>
                <p className={'text-[0.8rem]'}>Our hours are flexible and convinent with early morning and late evening appointments</p>
            </div>

            {
                TimeStampData.map((times) => (
                    <TimeStamp
                        key={times.id}
                        day={times.day}
                        startTime={times.startTime}
                        endTime={times.endTime}
                    />
                ))
            }
        </div>
    )
}

export default Hours