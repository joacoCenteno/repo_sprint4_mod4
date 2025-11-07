import React from 'react'
import { useFavorito } from '../contexts/FavoriteContext'
import { useModalContext } from '../contexts/ModalContext'

const SimpsonFavorites = () => {
    const {favoritos, removeFromFavorito} = useFavorito()
    const {isModalOpen, toggleModal} = useModalContext()
  return (
    <>
         <div className={`absolute top-0 right-0 h-fit w-100 bg-white shadow-2xl transform transition-transform duration-400 z-30 flex flex-col pb-3 ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div>
              <i className="bi bi-x-square text-2xl text-amber-200 cursor-pointer p-2" onClick={toggleModal}></i>
                <h1 className='text-xl text-center'>Listado de Favoritos</h1>
                <h4 className='text-center text-blue-500'>Tap to remove favorite!</h4>
                 
            </div>

          <div className='flex-1 overflow-y-auto mt-5 p-2'>
            <div className='flex flex-wrap h-fit gap-4  justify-around'>
              {favoritos.map((item)=>{
                  return <div key={item.id} className={` cursor-pointer shadow-md transition-transform duration-500   w-40 flex justify-center hover:scale-95`} onClick={()=> removeFromFavorito(item.id)}> <img src={`https://cdn.thesimpsonsapi.com/200/character/${item.id}.webp`} alt="" width={120} /></div>
              })}  
            </div>
          
          </div>
            
        </div>   
    
    </>
  )
}

export default SimpsonFavorites