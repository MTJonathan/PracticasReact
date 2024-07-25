import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, Link, useParams, Outlet, NavLink as NL } from 'react-router-dom'
import './App.css'

const Home = ()  => <h1>Home</h1>
const SerchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]
  return (
    <div>
      <h1>SearchPage</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))} 
      </ul>
    </div>
  )  
} 
const Tacos = () => {
  const { nombreDelTaco } = useParams()
  return (
    <>
      <h1>Tacos {nombreDelTaco}</h1>
      <NavLink to={`details`}>Ir a los Detalles</NavLink>  
      <Outlet/>
    </>
  )
}
const TacosDetails = () =>{
  const { nombreDelTaco } = useParams()
  return(
    <div>
      <h2>Detalles</h2>
      <p>{nombreDelTaco}</p>
    </div>
  )
}
const NavLink = ({to, children, ...props}) => {
  return(
    <NL
      {...props}
      className={({isActive}) => isActive ? 'isactive' : ''}
      to={to}
    >
      {children}
    </NL>
  )
}
function App() {
  return (
    <>
      <header>
        <h1>React Router 🤖</h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SerchPage/>}/>
          <Route path='/tacos/:nombreDelTaco' element={<Tacos/>}>
            <Route path='details' element={<TacosDetails/>}/>
          </Route>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
