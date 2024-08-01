import React from "react";
import { useId, useState } from "react";
import { ClearCartIcon, CartIcon } from "./Icons";
import "../assets/css/Cart.css";
import ItemCart from "./ItemCart";

const Cart = ({ products, setProducts, resetBtnStates }) => {
  const idCartCheckbox = useId();
  const handleClick = () => {
    setProducts([]);
    resetBtnStates();
  };
  return (
    <>
      <label htmlFor={idCartCheckbox} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={idCartCheckbox} hidden />
      <aside className="cart">
        <ul>
          {products.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </ul>
        <button onClick={handleClick}>
          <ClearCartIcon />
        </button>
        <br /><br /><br />
      </aside>
    </>
  );
};

export default Cart;
