import TeamShow from './TeamShow'

const OurTeam = () => {
  return (
    <div className={`flex flex-col gap-[2rem] items-center justify-center md:py-[2rem] md:px-[7rem]`}>
        <header className={`flex flex-col items-center text-center w-full md:w-[55%]`}>
          <h2 className={`text-[2.52rem] md:text-[2.955rem]`}>Meet Our Team</h2>
          <p className={`text-[0.8rem]`}>Our skilled and experienced barbers are passionate about their work and commited  to providing the best possible service. Come in and meet the team today.</p>
        </header>
        <div>
            <TeamShow />
        </div>
      </div>
  )
}

export default OurTeam