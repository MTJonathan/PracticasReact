import { useState, useEffect } from 'react'
import './assets/css/App.css'

const API_URL_FACT = 'https://catfact.ninja/fact';
function App() {
  const [fact, setFact] = useState('Lorem ipsum cat fat whatever');
  const [imageUrl, setImageUrl] = useState(' ');
  const getRamdomFact = () => {
    fetch(API_URL_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact)
        const threeFirstWords = fact.split(' ', 3).join(' ');
        setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      })
  }
  useEffect(getRamdomFact, [])

  return (
    <>
      <main>
        <h1>App de Gatitos</h1>
        <button onClick={getRamdomFact}>Cargar otro</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="gatito" className='gatitoImg'/>}
      </main>
    </>
  )
}

export default App
