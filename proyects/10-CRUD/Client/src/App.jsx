import { useEffect, useState } from "react";
import Axios from "axios";
import "./assets/CSS/App.css";
const App = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anos, setAnos] = useState("");
  const [empleados, setEmpleados] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3000/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anos: anos,
    }).then(() => {
      setNombre("");
      setEdad("");
      setPais("");
      setCargo("");
      setAnos("");
      alert("Registrado");
    });
  };

  const getEmpleados = () => {
    Axios.get("http://localhost:3000/empleados").then((response) => {
      setEmpleados(response.data);
    });
  };

  useEffect(() => {
    getEmpleados();
  }, [empleados]);

  return (
    <>
      <form className="datos" onSubmit={(e) => e.preventDefault()}>
        <header>
          <h2>GESTIÓN DE EMPLEADOS</h2>
        </header>
        <label>
          <span>Nombre:</span>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          <span>Edad:</span>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </label>
        <label>
          <span>País:</span>
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </label>
        <label>
          <span>Cargo:</span>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </label>
        <label>
          <span>Años:</span>
          <input
            type="number"
            value={anos}
            onChange={(e) => setAnos(e.target.value)}
          />
        </label>
        <footer>
          <button onClick={add}>Registrar</button>
        </footer>
      </form>
      <div className="lista">
        <table className="empleadosTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Pais</th>
              <th>Cargo</th>
              <th>Años laborados</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.nombre}</td>
                  <td>{val.edad}</td>
                  <td>{val.pais}</td>
                  <td>{val.cargo}</td>
                  <td>{val.anos}</td>
                  <td>
                    <div>
                      <button>Editar</button>
                      <button>Eliminar</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
