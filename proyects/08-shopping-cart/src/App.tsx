// import { useState } from 'react'
import { products } from './mocks/products.json'
import { Products } from "./components/components/products"
function App() {

  return (
    <>
      <Products producto={products}/>
    </>
  )
}

export default App
