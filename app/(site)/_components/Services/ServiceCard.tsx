import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
    imgUrl: string;
    serviceName: string;
    price: string;
}
const ServiceCard = ({ imgUrl, serviceName, price }: ServiceCardProps) => {
    return (
        <div className={"flex flex-col gap-[0.5rem] 2xl:gap-7 border border-accent p-[1rem] 2xlitems-center 2xl:h-full"}>
            <div className='md:h-[22rem] md:w-[15rem] 2xl:h-full 2xl:w-full'>
                <Image
                    src={`${imgUrl}`}
                    alt='haircutImg'
                    width={4000}
                    height={6000}
                    className={"object-contain"} />
            </div>
            <div className={"flex flex-col 2xl:w-full 2xl:items-start"}>
                <h2 className={""}>Service: {serviceName}</h2>
                <strong className={""}>Price: {price}</strong>
                <Link href={'https://www.facebook.com/themisfitofnightraid/'} className={"mt-3 p-[0.4rem] text-center border border-accent 2xl:w-full"}>
                    <strong>Book Now</strong>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard