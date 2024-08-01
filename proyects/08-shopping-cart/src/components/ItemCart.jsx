import { useState } from "react";
const ItemCart = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleClick = () => {
    setCantidad(cantidad + 1);
  };
  return (
    <li key={product.id}>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>Qty : {cantidad}</small>
        <button onClick={handleClick}>+</button>
        <small className="total">Total : ${product.price * cantidad}</small>
      </footer>
    </li>
  );
};

export default ItemCart;
