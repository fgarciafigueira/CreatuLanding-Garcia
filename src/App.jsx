import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto='Página en construccion' />
    </>
  )
}

export default App
