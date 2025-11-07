import React from 'react'
import { useFavorito } from '../contexts/FavoriteContext'
import { useModalContext } from '../contexts/ModalContext'

const SimpsonFavorites = () => {
    const {favoritos, removeFromFavorito} = useFavorito()
    const {isModalOpen, toggleModal} = useModalContext()
  return (
    <>
         <div className={`fixed top-0 right-0 h-full w-100 bg-white shadow-2xl transform transition-transform duration-300 z-30 flex flex-col pb-3 ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div>
              <i className="bi bi-x-square text-2xl text-amber-200 cursor-pointer p-2" onClick={toggleModal}></i>
                <h1 className='text-xl text-center'>{favoritos.length == 0 ? 'No hay favoritos' : 'Listado de favoritos'}</h1>
                 
            </div>

          <div className='flex-1 overflow-y-auto mt-5 pl-6'>
              {favoritos.map((item)=>{
                  return <div key={item.id} className=' w-90 flex justify-between mb-3 p-2'>
                    <div className='flex'>
                      <span className='font-medium'>{item.name}</span>
                
                    </div>

                      <i class="bi bi-trash3-fill text-lg cursor-pointer text-red-400" onClick={()=>{removeFromFavorito(item.id)}}></i>
                      </div>
              })}            
          </div>
            
        </div>   
    
    </>
  )
}

export default SimpsonFavorites