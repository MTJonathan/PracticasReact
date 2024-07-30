import React from "react";
import { useState } from "react";
const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(inputValue);
    setInputValue("");
  };
  return (
    <>
      <h3>Agregar Tarea</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="inputForm"
          type="text"
          placeholder="Nueva Tarea"
          value={inputValue}
          onChange={handleChange}
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default AgregarTarea;
