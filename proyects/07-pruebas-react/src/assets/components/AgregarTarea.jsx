import React from "react";
import { useState } from "react";
const AgregarTarea = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
      </form>
    </>
  );
};

export default AgregarTarea;
