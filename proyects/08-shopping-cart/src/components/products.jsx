import "../assets/css/products.css";
import ItemProducts from "./ItemProducts.jsx";
import Cart from "./Cart.jsx";
import { useState } from "react";

const Products = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [btnStates, setBtnStates] = useState({});

  const toggleClassBtn = (productId) => {
    setBtnStates((prevStates) => ({
      ...prevStates,
      [productId]: !prevStates[productId], // Alterna el estado del botón
    }));
  };
  const resetBtnStates = () => {
    setBtnStates({});
  };
  return (
    <>
      <main className="products">
        <ul>
          {products.slice(0, 10).map((product) => (
            <ItemProducts
              key={product.id}
              product={product}
              setCart={setCart}
              toggleClassBtn={toggleClassBtn}
              classBtn={btnStates[product.id]}
            />
          ))}
        </ul>
      </main>
      <Cart products={cart} setProducts={setCart} resetBtnStates={resetBtnStates} />
    </>
  );
};

export default Products;
