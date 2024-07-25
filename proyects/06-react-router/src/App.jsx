import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'

const Home = ()  => <h1>Home</h1>
const SerchPage = () => <h1>SearchPage</h1>
function App() {
  return (
    <>
      <header>
        <h1>Miduchollo 💵</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SerchPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
