import { AddToCartIcon } from "./Icons.jsx";

const ItemProducts = ({ product, setCart, toggleClassBtn, classBtn }) => {
  const handleClick = (product) => {
    toggleClassBtn(product.id);
    setCart((prevCart) => {
      const isInCart = prevCart.find((item) => item.id === product.id);
      if (isInCart) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return [...prevCart, product];
      }
    });
  };
  const classBnttxt = classBtn ? "btnActive" : undefined;

  return (
    <li key={product.id}>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <button className={classBnttxt} onClick={() => handleClick(product)}>
        <AddToCartIcon />
      </button>
    </li>
  );
};

export default ItemProducts;
