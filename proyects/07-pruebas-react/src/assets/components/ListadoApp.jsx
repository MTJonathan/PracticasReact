import React from "react";
import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
const Item = ({ nombre }) => {
  const [visto, setVisto] = useState(false);

  const cambiarVisto = () => {
    setVisto(!visto);
  };
  return (
    <>
      <li>
        {nombre} - {visto ? "✔️" : "❌"}{" "}
        <button onClick={cambiarVisto}>{visto ? "Desmarcar" : "Marcar"}</button>
      </li>
    </>
  );
};
const ListadoApp = () => {
  let listadoSecciones = [
    { id: 1, nombre: "Instalaciones Necesarias" },
    { id: 2, nombre: "Uso de Vite" },
    { id: 3, nombre: "Componente" },
    { id: 4, nombre: "Variables En JSX" },
    { id: 5, nombre: "Props" },
    { id: 6, nombre: "Eventos" },
    { id: 7, nombre: "UseState" },
    { id: 8, nombre: "Redux" },
    { id: 9, nombre: "CustomHooks" },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);
  const onAddTask = (task) => {
    if (task === "") return;
    const envio ={
      id:arreglo.length+1,
      nombre:task
    }
    setArreglo([...arreglo, envio]);
  }
  return (
    <>
      <h1>Listado De Temas del Curso</h1>
      <AgregarTarea agregarTarea={onAddTask}/>
      <ol>
        {arreglo.map((item) => (
          <Item key={item.id} nombre={item.nombre} />
        ))}
      </ol>

      <div className="btnsLista">
        <button onClick={() => setArreglo([])}>Limpiar</button>
      </div>
    </>
  );
};

export default ListadoApp;
