import React from 'react'
const String = "Esto es un texto";
const number = 3223;
const array = ['Curso React', 'Youtube', 4, 2332];
const boolean = true;
const funcion = () => 1+1;
const objeto = {
    nombre: 'Curso React',
    duracion: 4
};
const fecha = new Date();
export const Componente = () => {
  return (
    <section className='component'>
        <h2> Variables En JSX </h2>
        <p> {String} </p> 
        <p> {number} </p> 
        <p> {array} </p>  
        <p> {funcion()} </p> 
        <p> {JSON.stringify(objeto)} </p> 
        <p> {JSON.stringify(fecha)} </p>
    </section>
  )
}
