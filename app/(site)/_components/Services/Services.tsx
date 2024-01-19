import { ServiceCardData } from '@/constants/serviceCardData'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <section className='flex flex-col gap-7'>
            <article className='flex flex-col items-center'>
                <h2 className={`text-[3.546rem] 2xl:text-[4.25rem]`}>Our Services</h2>
                <p className='w-[70%] text-center'>We are here to help you provide the best possible experience.Our team of exprets are here to help you in every step of your way, from choosing the right haircuit to the end.</p>
            </article>
            <div className='columns-2 md:columns-3 lg:columns-4 gap-2 2xl:gap-20'>
                {
                    ServiceCardData.map((data) => (
                        <ServiceCard
                            key={data.id}
                            imgUrl={data.imgUrl}
                            price={data.price}
                            serviceName={data.serviceName}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Services