import '../assets/css/products.css'
import { AddToCartIcon } from './Icons.jsx'

const Products = ({ products }) => {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <button><AddToCartIcon /></button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products
