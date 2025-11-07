
import { useModalContext } from '../contexts/ModalContext'
import { useSimpson } from '../contexts/SimpsonContext'

const SimpsonForm = () => {
    const {personajes, getPersonajes, setCantidad} = useSimpson()
    const {toggleModal} = useModalContext()

    if(!personajes) return null

    const handleSubmit = async (e) =>{
        e.preventDefault()

        getPersonajes()

        

    }

  return (
    <>  
        <div className='flex pt-20 px-20 justify-between'>
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="number" onChange={(e) => setCantidad(e.target.value)} className='border-b-2 border-blue-400 p-1 focus:outline' placeholder='Cantidad de Personajes'/>
                <button type="submit" className='bg-blue-400 px-3 text-white ml-3 rounded-2xl cursor-pointer py-1'>Obtener</button>
            </form>
        </div>


        <div className='p-2 rounded-full text-white font-bold bg-yellow-200 hover:scale-90 transition-all duration-200'>
            <button onClick={toggleModal} className='cursor-pointer'><i class="bi bi-star-fill"></i> FAVORITOS</button>
        </div>
        </div>


    </>
  )
}

export default SimpsonForm