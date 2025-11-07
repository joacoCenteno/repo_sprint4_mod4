import React from 'react'
import SimpleParallax from "simple-parallax-js";

const Header = () => {
  return (
    <>
    <header assName={`bg-cover bg-center bg-no-repeat relative w-full h-screen flex flex-col items-center justify-center px-10 md:flex-row-reverse md:justify-around`}>
       <SimpleParallax orientation='right' delay={2} scale={1.2}>
      <img src={'https://ntvb.tmsimg.com/assets/p183872_b_h8_aa.jpg'} alt="Imagen" />
    </SimpleParallax>     
    </header>


    </>

  )
}

export default Header