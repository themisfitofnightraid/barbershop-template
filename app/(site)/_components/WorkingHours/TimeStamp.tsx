import React from 'react'

interface TimeStampProps{
    day: string;
    startTime: string;
    endTime: string;
}
const TimeStamp = ({day, startTime, endTime}: TimeStampProps) => {
    return (
        <div className={`flex flex-col w-[50%]`}>
            <div className={`flex justify-between`}>
                <strong className={``}>{day}</strong>
                <p className={`text-[0.8rem]`}>{startTime} - {endTime}</p>
            </div>
            <div className={`block w-full h-1 border border-accent`}></div>
        </div>
    )
}

export default TimeStamp