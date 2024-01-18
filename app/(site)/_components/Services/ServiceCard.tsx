import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ServiceCardProps {
    imgUrl: string;
    serviceName: string;
    price: string;
}
const ServiceCard = ({ imgUrl, serviceName, price }: ServiceCardProps) => {
    return (
        <div className={"flex flex-col gap-[0.5rem] border border-accent p-[1rem]"}>
            <div className='h-[22rem] w-[15rem]'>
                <Image
                    src={`${imgUrl}`}
                    alt='haircutImg'
                    width={4000}
                    height={6000}
                    className={"object-contain"} />
            </div>
            <div className={"flex flex-col "}>
                <h2 className={""}>Service: {serviceName}</h2>
                <strong className={""}>Price: {price}</strong>
                <Link href={'https://www.facebook.com/themisfitofnightraid/'} className={"p-[0.4rem] text-center border border-accent"}>
                    <strong>Book Now</strong>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard