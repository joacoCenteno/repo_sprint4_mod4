import React from 'react'
import { useSimpson } from '../contexts/SimpsonContext'
import SimpsonCard from './SimpsonCard'
import { useModalContext } from '../contexts/ModalContext'
import { MutatingDots } from 'react-loader-spinner'

const SimpsonList = () => {
  const {loading} = useSimpson()
  const {isModalOpen} = useModalContext()
  return (
    <>
    <div className={`px-30 pb-20  flex flex-wrap justify-center gap-7 transition-all duration-300 mt-5 ${isModalOpen ? "md:w-[calc(100%-24rem)]": "w-full"}`}>
      <div>
      {loading && <><MutatingDots
        visible={true}
        height="100"
        width="100"
        color="rgb(255,240,133)"
        secondaryColor="rgb(255,240,133)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        /></>}
      </div> 
      <SimpsonCard/>
    </div>

    </>
  )
}

export default SimpsonList