import CoinOne from "./ImageSections/CoinOne"
import CoinThree from "./ImageSections/CoinThree"
import CoinTwo from "./ImageSections/CoinTwo"

const ThreeCoins = () => {
    return (
        <div className='hidden h-full w-fit px-2 md:flex md:flex-col md:justify-between lg:gap-14'>
            <CoinOne />
            <CoinTwo />
            <CoinThree />
        </div>
    )
}

export default ThreeCoins