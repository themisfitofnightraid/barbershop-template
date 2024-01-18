import React from 'react'
import Navbar from './_components/Navbar/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="px-1 md:px-2 lg:px-14 xl:px-20 max-w-[1920px] mx-auto">
        <main>
            {children}
        </main>
    </div>
  )
}

export default layout