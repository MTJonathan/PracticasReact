import { useState } from 'react'
import './App.css'
import { Componente } from './assets/components/Componente'
import { Props } from './assets/components/Props'
function App() {
  return (
    <>
      <h1>Curso de React</h1>
      <Componente />
      <Props titulo={'Curso de React'} subtitulo={'Aprende React'}/>
    </>
  )
}

export default App
