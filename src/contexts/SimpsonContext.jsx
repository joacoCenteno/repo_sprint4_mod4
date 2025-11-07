/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';


const SimpsonContext = createContext()

export const SimpsonProvider = ({children}) =>{
    const [personajes, setPersonajes] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getPersonajes = async () =>{
        setLoading(true)
        setError(null)
        setPersonajes([])

        if(cantidad < 1 || isNaN(cantidad)){
            setLoading(false)
            toast.error("Error Fatal! :(")
            return
        }

        try{
            const { data } = await axios.get(`https://thesimpsonsapi.com/api/characters`)
            setPersonajes(data["results"].slice(0, cantidad))
            toast.success("Personajes Obtenidos! :D")
        }catch (err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }

    
    return (
        <SimpsonContext.Provider value={{personajes, loading, error, getPersonajes, setCantidad}}>
            {children}
        </SimpsonContext.Provider>
    )
}

export const useSimpson = () => useContext(SimpsonContext)