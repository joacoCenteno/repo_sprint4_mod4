/* eslint-disable react-refresh/only-export-components */
import  {createContext, useContext, useState} from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({children}) =>{
      const [isModalOpen, setIsModalOpen] = useState(false);

      const toggleModal = () =>{
        setIsModalOpen(!isModalOpen)
      }

      return(
        <ModalContext.Provider value={{isModalOpen, toggleModal}}>
            {children}
        </ModalContext.Provider>
      )
}


export const useModalContext = () => useContext(ModalContext)