import { useState } from "react"
import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/products.jsx"
import Header from './components/Header.jsx'
import './assets/css/App.css'
const App = () => {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })
  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  const filteredProducts = filtersProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App

