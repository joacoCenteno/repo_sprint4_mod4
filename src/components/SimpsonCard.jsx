import React from 'react'
import { useSimpson } from '../contexts/SimpsonContext'
import { useFavorito } from '../contexts/FavoriteContext'

const SimpsonCard = () => {
  const {personajes} = useSimpson()
  const {addFavorite, isInFavorito} = useFavorito()

  const handleClick = (element) => {
    if (!isInFavorito(element.id)) {
      addFavorite(element);
    }
  };
  return (
    <>

          {personajes && personajes.map((obj) =>{
              return(
                  <div key={obj.id}  className={` mt-4 w-60 cursor-pointer p-5 flex flex-col justify-center items-center text-center shadow-md  bg-white  ${isInFavorito(obj.id) ? "opacity-50 cursor-auto" : "group hover:bg-yellow-50 hover:shadow-yellow-400/70 hover:shadow-lg hover:scale-105 cursor-pointer transition duration-300"}`} onClick={()=>{handleClick(obj)}}>
                    <div className={` shadow-md transition-transform duration-500 group-hover:rotate-[3deg] group-hover:shadow-yellow-400/70 group-hover:shadow-lg w-40`}> <img src={`https://cdn.thesimpsonsapi.com/200/character/${obj.id}.webp`} alt="" width={130} /></div>
                      <div className='mt-5 text-lg'>
                        <p className='font-medium group-hover:text-yellow-800'>{obj.name}</p>
                        <div className='w-40 truncate text-xs text-gray-700 group-hover:text-yellow-400'>{obj.occupation}</div>

                        <div className='mt-4 text-xs font-bold'>
                          {obj.status== "Alive" && obj.age != null ? (<div className=' flex justify-evenly items-center'><span className='border p-1 rounded-full border-gray-200'>Edad: {obj.age}</span>
                          <span className='p-1 rounded-full  text-green-600 bg-green-100'>{obj.status}</span></div>) : obj.status=="Alive" ? (<span className='p-1 rounded-full  text-green-600 bg-green-100'>{obj.status}</span>) : (<span className='p-1 rounded-full  text-red-500 bg-red-100'>{obj.status}</span>)}
                          </div>
                        
                      </div>

                      <div className='mt-3 text-sm text-gray-500 italic'>
                        {obj.name !="Lisa Simpson" && obj.name !== "Patty Bouvier" ? <p>"{obj.phrases[0]}"</p> :  <p>"{obj.phrases[1]}"</p>}
                        
                      </div>
                       
                       
                  </div>

                 )
              })}
    </>
  )
}

export default SimpsonCard