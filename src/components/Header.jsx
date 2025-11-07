import React from 'react'
import SimpleParallax from "simple-parallax-js";

const Header = () => {
  return (
    <>
    <header assName={`bg-cover bg-center bg-no-repeat relative w-full h-screen flex flex-col items-center justify-center px-10 md:flex-row-reverse md:justify-around`}>
       <h1 className='absolute z-1 sm:top-40 sm:left-20 md:top-50 md:left-30 lg:top-70 lg:left-40 text-2xl md:text-5xl lg:text-6xl text-white font-bold font-display'>WELCOME TO <br /> THE SIMPSON API</h1>
       <SimpleParallax orientation='right' delay={2} scale={1.2} transition='cubic-bezier(2,2,0,1)'>
      <img src={'https://images.wallpapersden.com/image/download/the-simpsons-2022_bWlubmuUmZqaraWkpJRmbmdlrWZlbWU.jpg'} alt="Imagen" />
    </SimpleParallax>     
    </header>


    </>

  )
}

export default Header