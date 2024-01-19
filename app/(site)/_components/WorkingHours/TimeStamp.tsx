
interface TimeStampProps{
    day: string;
    startTime: string;
    endTime: string;
}
const TimeStamp = ({day, startTime, endTime}: TimeStampProps) => {
    return (
        <div className={`flex flex-col p-2 md:p-0 w-full md:w-[50%]`}>
            <div className={`flex justify-between`}>
                <strong className={``}>{day}</strong>
                <p className={`text-[0.8rem]`}>{startTime} - {endTime}</p>
            </div>
            <div className={`block w-full h-0.5 border border-accent`}></div>
        </div>
    )
}

export default TimeStamp