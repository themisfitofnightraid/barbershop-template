import ClientCarousel from './ClientCarousel'

const Testomonials = () => {
  return (
    <div className='flex flex-col gap-14'>
      <div>
        <h2 className='text-[2.052rem] lg:text-[2.955rem]'>Feedbacks from our clients:</h2>
      </div>
      <div>
        <ClientCarousel />
      </div>
    </div>
  )
}

export default Testomonials