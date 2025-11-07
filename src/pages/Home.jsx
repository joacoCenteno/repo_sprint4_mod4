import React from 'react'
import SimpsonForm from '../components/SimpsonForm'
import SimpsonList from '../components/SimpsonList'
import SimpsonFavorites from '../components/SimpsonFavorites'
import Navbar from '../components/Navbar'
import { ToastContainer, Flip } from 'react-toastify';

const Home = () => {
  return (
    <>
    <Navbar/>

      <div className={`relative min-h-screen pt-5 bg-[rgb(240,249,255)] transition-all`}>
        <SimpsonForm/>
        <SimpsonList/> 
        <SimpsonFavorites/>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
          />
        </div>
    </>

  )
}

export default Home