import { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import "./assets/CSS/App.css";

const App = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anos, setAnos] = useState("");
  const [empleados, setEmpleados] = useState([]);
  const [editar, setEditar] = useState(false);

  const add = () => {
    if (
      nombre === "" ||
      edad === "" ||
      pais === "" ||
      cargo === "" ||
      anos === ""
    ) {
      alert("Por favor, rellene todos los campos");
    } else {
      Axios.post("http://localhost:3000/create", {
        nombre: nombre,
        edad: edad,
        pais: pais,
        cargo: cargo,
        anos: anos,
      }).then(() => {
        cancelarEditar();
        Swal.fire({
          title: "<strong>Registro Exitoso!!!</strong>",
          html: `<i>Se ha registrado correctamente a <strong>${nombre}</strong></i>`,
          icon: "success",
          timer: 2300,
        });
      });
    }
  };

  const getEmpleados = () => {
    Axios.get("http://localhost:3000/empleados").then((response) => {
      setEmpleados(response.data);
    });
  };

  const update = () => {
    Axios.put(`http://localhost:3000/update`, {
      id: id,
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anos: anos,
    }).then(() => {
      cancelarEditar();
      Swal.fire({
        title: "<strong>Atualización Exitosa!!!</strong>",
        html: `<i>Se ha actualizado correctamente a <strong>${nombre}</strong></i>`,
        icon: "success",
        timer: 2300,
      });
    });
  };
  const editarEmpleado = (val) => {
    setEditar(true);

    setNombre(val.nombre);
    setEdad(val.edad);
    setPais(val.pais);
    setCargo(val.cargo);
    setAnos(val.anos);
    setId(val.id);
  };
  const cancelarEditar = () => {
    setEditar(false);
    setNombre("");
    setEdad("");
    setPais("");
    setCargo("");
    setAnos("");
  };

  const deleteEmpleado = (val) => {
    Swal.fire({
      title: "<strong>Eliminar</strong>",
      html: `<i>Desea eliminar a ${val.nombre} ?</i>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3000/delete/${val.id}`).then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Se ha eliminado correctamente",
            icon: "success",
            timer: 2300,
          });
        }).catch((err) => {
          Swal.fire({
            title: "Error",
            text: 'Ocurrio un error al eliminar el registro',
            icon: "error",
            footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "Intenta más tarde" : "Error de servidor",
            timer: 2300,
          })
        });
        
      }
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
            required
          />
        </label>
        <label>
          <span>Edad:</span>
          <input
            type="number"
            value={edad}
            min="0"
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </label>
        <label>
          <span>País:</span>
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Cargo:</span>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Años:</span>
          <input
            type="number"
            value={anos}
            min="0"
            onChange={(e) => setAnos(e.target.value)}
            required
          />
        </label>
        <footer>
          {!editar ? (
            <button onClick={add}>Registrar</button>
          ) : (
            <div className="btnsForm">
              <button className="btnUpdate" onClick={update}>
                Actualizar
              </button>
              <button className="btnCancel" onClick={cancelarEditar}>
                Cancelar
              </button>
            </div>
          )}
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
                    <div className="btnsTable">
                      <button onClick={() => editarEmpleado(val)}>
                        Editar
                      </button>
                      <button onClick={() => deleteEmpleado(val)}>
                        Eliminar
                      </button>
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
