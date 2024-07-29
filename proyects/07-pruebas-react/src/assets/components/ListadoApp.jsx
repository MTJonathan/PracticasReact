import React from "react";
import { useState } from "react";
const Item = ({ nombre }) => {
  const [visto, setVisto] = useState(false);

  const cambiarVisto = () => {
    setVisto(!visto);
  };
  return (
    <>
      <li>
        {nombre} - {visto ? "✔️" : "❌"}{" "}
        <button onClick={cambiarVisto}>Cambiar</button>
      </li>
    </>
  );
};
const ListadoApp = () => {
  let listadoSecciones = [
    {nombre: "Instalaciones Necesarias"},
    {nombre: "Uso de Vite"},
    {nombre: "Componente"},
    {nombre: "Variables En JSX"},
    {nombre: "Props"},
    {nombre: "Eventos"},
    {nombre: "UseState"},
    {nombre: "Redux"},
    {nombre: "CustomHooks"},
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);
  return (
    <>
      <h1>Listado De Temas del Curso</h1>
      <ol>
        {listadoSecciones.map((item) => (
          <Item key={item.nombre} nombre={item.nombre} />
        ))}
      </ol>
    </>
  );
};

export default ListadoApp;
