/* eslint-disable react-refresh/only-export-components */
import  {createContext, useContext, useEffect, useState} from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState(()=>{
        return JSON.parse(localStorage.getItem('favoritos')) || []
    });

    useEffect(()=>{
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    },[favoritos]);

    const addFavorite = (personaje) => {
        setFavoritos((prevFavorito)=>{
            const existingFavorito = prevFavorito.find((item)=> item.id === personaje.id);
            if(!existingFavorito){
                return [...prevFavorito, {...personaje}]
            }
        });
     };

    const removeFromFavorito = (id) => { 
        setFavoritos((prevFavorito) => prevFavorito.filter((product)=> product.id !== id))
    }


    const isInFavorito = (id) => favoritos.some(((p)=> id == p.id))


    return(
        <FavoriteContext.Provider value={{favoritos, addFavorite, removeFromFavorito, isInFavorito}}>
            {children}
        </FavoriteContext.Provider>
    )
 }

 export const useFavorito = () => useContext(FavoriteContext)