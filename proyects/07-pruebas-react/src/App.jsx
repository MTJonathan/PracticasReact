import { useState } from 'react'
import './App.css'
import { Componente } from './assets/components/Componente'
import { Props } from './assets/components/Props'
import Contador from './assets/components/Contador'
import ListadoApp from './assets/components/ListadoApp'
import UserApp from './assets/components/UserApp'
function App() {
  return (
    <>
      <h1>Curso de React</h1>
      <Componente />
      <Props titulo={'Curso de React'} subtitulo={'Aprende React'}/>
      <Contador />
      <ListadoApp />
      <UserApp />
    </>
  )
}

export default App
