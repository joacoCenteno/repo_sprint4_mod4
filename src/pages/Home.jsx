import React from 'react'
import SimpsonForm from '../components/SimpsonForm'
import SimpsonList from '../components/SimpsonList'
import Navbar from '../components/Navbar'
import { ToastContainer, Flip } from 'react-toastify';
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Navbar/>
<Header/>

      <div className={`relative min-h-100 overflow-hidden pt-5 bg-[rgb(240,249,255)] transition-all font-display`}>
        <SimpsonForm/>
        <SimpsonList/> 
    

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