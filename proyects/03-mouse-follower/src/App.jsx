import { useEffect, useState } from "react"
import './App.css'
function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  useEffect(()=>{
    const handleMove = (e) =>{
      const {clientX, clientY} = e
      setPosition({x:clientX, y:clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    //Se ejecuta cuando el componente se desmonta
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled ])
  return (
    <>
      <div className="follower" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
      </button>
    </>
  )
}

export default App
