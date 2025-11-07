import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed bg-transparent backdrop-blur-xs flex justify-between px-10 items-center z-100'>

        <div>
            <img src="https://thesimpsonsapi.com/logo.webp" alt="" width={250}/>
        </div>
        <div><a href="https://github.com/joacoCenteno"><i className="bi bi-github text-3xl text-yellow-200 hover:scale-105"></i></a></div>
    </nav>
    
    </>
  )
}

export default Navbar