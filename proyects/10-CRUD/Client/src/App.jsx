import { useState } from "react";
import Axios from "axios";
import "./assets/CSS/App.css";
const App = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anos, setAnos] = useState("");

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
  }
  return (
    <>
      <form className="datos" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </label>
        <label>
          País:
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </label>
        <label>
          Cargo:
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </label>
        <label>
          Años:
          <input
            type="number"
            value={anos}
            onChange={(e) => setAnos(e.target.value)}
          />
        </label>
        <button onClick={add}>Registrar</button>
      </form>
    </>
  );
};

export default App;
