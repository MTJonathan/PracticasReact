import { useState } from "react"
import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/products.jsx"
import Header from './components/Header.jsx'
import { Footer } from "./components/Footer.jsx"
import { useFilters } from './assets/js/useFilters.js'
import './assets/css/App.css'

const App = () => {
  const [products] = useState(initialProducts)
  const {filtersProducts, setFilters, filters} = useFilters()
  const filteredProducts = filtersProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
