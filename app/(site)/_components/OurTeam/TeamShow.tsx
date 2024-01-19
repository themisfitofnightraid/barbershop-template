import { TeamMemberData } from '@/constants/teamMembers'
import Image from 'next/image'

const TeamShow = () => {
    return (
        <div className={`flex flex-row flex-wrap  gap-[2rem]`}>
            {
                TeamMemberData.map((teamData) => (
                    <div 
                        key={teamData.id}
                        className={`border border-accent flex flex-col gap-[1rem] p-2`}
                    >
                        <Image
                            src={teamData.imgUrl}
                            alt='haircut'
                            width={300}
                            height={300}
                            className={`h-[16rem] w-[10rem] md:h-[22rem] md:w-[16rem]`}
                        />
                        <div className={`flex flex-col`}>
                            <strong className={`styles.c4ICBInfoBoxStrong`}>{teamData.name}</strong>
                            <p className={`styles.c4ICBInfoBoxP`}>{teamData.post}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamShow