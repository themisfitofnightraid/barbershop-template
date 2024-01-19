import { ArrowUp, Locate, Mail, Phone } from 'lucide-react'
import { Bitter, Nunito_Sans, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const bitter = Bitter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"]
})
const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: ["200", "400", "500", "600", "700", "800", "900"]
})
const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'vietnamese'],
  weight: ["400", "500", "600", "700", "800", "900"]
})
const Footer = () => {
  return (
    <footer className={`flex flex-col gap-[1rem] py-[1rem]`}>
      <section className={`flex flex-col md:flex-row justify-between border-b border-accent py-[1rem]`}>
        <div className={`md:w-[23%]`}>
          <h3 className={`${bitter.className} text-[1.425rem] font-bold`}>Brand Name</h3>
          <p className={`text-[0.8rem]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur doloremque hic blanditiis id ratione consequatur unde?</p>
        </div>
        <div className={`flex flex-col gap-[1rem] items-start py-7 md:p-0`}>
          <h3 className={`text-[1.425rem] font-medium`}>Contacts</h3>
          <div className={`flex gap-[0.3rem] justify-center items-center `}>
            <Phone className={`styles.s0P1DIco`} />
            <p>+ 977 9817109084</p>
          </div>
          <div className={`flex gap-[0.3rem] justify-center items-center `}>
            <Mail className={`styles.s0P1DIco`} />
            <p>themisfitofnightraid@proton.me</p>
          </div>
          <div className={`flex gap-[0.3rem] justify-center items-center `}>
            <Locate className={`styles.s0P1DIco`} />
            <p>+ Srijana Chowk | Pokhara</p>
          </div>
        </div>
        <div className={`styles.s0Part2`}>
          <h3 className={`${nunitoSans.className}text-[1.425rem] font-medium`}>Powered By:</h3>

          <Link href="https://themisfitofnightraid.com">
            <strong className={`${playfairDisplay.className} text-[1rem]`}>TheMisFitOfNightRaid</strong>
          </Link>
        </div>
      </section>
      <section className={`flex flex-col gap-7 md:gap-0 md:flex-row justify-between`}>
        <div className={`flex gap-[2rem]`}>
          <Link href="/">
            <p>Terms and Condition</p>
          </Link>
          <Link href="/">
            <p>Privacy Policy</p>
          </Link>
        </div>
        <div className={`flex justify-between gap-[2rem]`}>
          <p>Copyright &copy; 2023 Brand Name</p>
          <Link href={'/'} className={`styles.goTop`}>
            <ArrowUp className={`styles.upArrow`} />
          </Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer