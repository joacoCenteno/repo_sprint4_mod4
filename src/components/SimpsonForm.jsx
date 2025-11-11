
import { useFavorito } from '../contexts/FavoriteContext'
import { useModalContext } from '../contexts/ModalContext'
import { useSimpson } from '../contexts/SimpsonContext'
import { toast } from 'react-toastify';

const SimpsonForm = () => {
    const {personajes, getPersonajes, setCantidad} = useSimpson()
    const {favoritos} = useFavorito()
    const {toggleModal} = useModalContext()

    if(!personajes) return null

    const handleSubmit = async (e) =>{
        e.preventDefault()

        getPersonajes()

        

    }

  return (
    <>  <h1 className='px-5 md:px-20 text-2xl pt-5 font-bold text-amber-200'>Seleccione Cantidad de personajes</h1>
        <div className='flex pt-5 px-2 md:px-20 justify-center md:justify-between flex-wrap gap-3 md:gap-0'>
        
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="number" onChange={(e) => setCantidad(e.target.value)} className='border-b-2 border-blue-400 p-1 focus:outline-none w-60 text-blue-600' placeholder='Cantidad de Personajes'/>
                <button type="submit" className='bg-blue-400 px-3 text-white ml-3 rounded-2xl mt-2 md:mt-0 cursor-pointer py-1'>Obtener</button>
            </form>
        </div>


        <div className='p-2 rounded-full text-white font-bold bg-yellow-200 hover:scale-90 transition-all duration-200'>
            <button 
            onClick={()=>{
                favoritos.length != 0 ? toggleModal() : toast.warning("Aun no tienes favs")
            }} 
            className='cursor-pointer'><i class="bi bi-star-fill"></i> FAVORITOS</button>
        </div>
        </div>


    </>
  )
}

export default SimpsonForm