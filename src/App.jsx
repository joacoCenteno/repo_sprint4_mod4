import React from 'react'
import Home from './pages/Home'
import { SimpsonProvider } from './contexts/SimpsonContext'
import { FavoriteProvider } from './contexts/FavoriteContext'
import { ModalProvider } from './contexts/ModalContext'

const App = () => {
  return (
    <>
      <SimpsonProvider>
      <FavoriteProvider>
        <ModalProvider>
          <Home/>
        </ModalProvider>
      </FavoriteProvider>
      </SimpsonProvider>
    </>
  )
}

export default App