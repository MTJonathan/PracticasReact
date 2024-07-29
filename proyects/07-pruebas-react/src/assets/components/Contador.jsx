import React from "react";
import { useState } from "react";
const Contador = () => {
  const [count, setCount] = useState(0);
  const Contar = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Contador: </h2>
      <button onClick={Contar}>Contar {count} </button>
    </>
  );
};

export default Contador;
