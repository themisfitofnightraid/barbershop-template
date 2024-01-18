import Logo from '@/components/Logo'
import { Bitter } from 'next/font/google'
import NavSide from './NavSide'

const bitter = Bitter({
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
    weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})

const Navbar = () => {
    return (
        <nav className='relative flex justify-between py-2 items-center'>
            <div className='flex items-center gap-4'>
                <Logo variant='nav'/>
                <h2 className={`${bitter.className} text-[1.2rem] 2xl:text-[2.052rem] font-medium`}>Your Brand Name</h2>
            </div>
            <div >
                <NavSide />
            </div>
        </nav>
    )
}

export default Navbar