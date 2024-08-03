import React, { useState } from "react";
import Letras from "./components/Letras";
import { palabras } from "./assets/js/palabras";
import "./App.css";
import confetti from "canvas-confetti";
const App = () => {
  const [palabra, setPalabra] = useState(
    palabras[Math.floor(Math.random() * palabras.length)].toUpperCase()
  );
  const [palabraVerificar, setPalabraVerificar] = useState(
    Array(palabra.length).fill("_")
  );
  const [intentos, setIntentos] = useState(8);
  const [letrasCorrectas, setLetrasCorrectas] = useState(new Set());
  const [letrasIncorrectas, setLetrasIncorrectas] = useState(new Set());
  const reiniciarJuego = () => {
    const nuevaPalabra =
      palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    setPalabra(nuevaPalabra);
    setPalabraVerificar(Array(nuevaPalabra.length).fill("_"));
    setIntentos(8);
    setLetrasCorrectas(new Set());
    setLetrasIncorrectas(new Set());
  };
  const manejarEnvio = (letraIngresada) => {
    if (letraIngresada && intentos > 0 && palabraVerificar.includes("_")) {
      if (palabra.includes(letraIngresada)) {
        setLetrasCorrectas((prev) => new Set(prev).add(letraIngresada));
        const nuevaPalabraVerificar = palabraVerificar.map((char, i) =>
          palabra[i] === letraIngresada ? letraIngresada : char
        );
        setPalabraVerificar(nuevaPalabraVerificar);
      } else {
        setLetrasIncorrectas((prev) => new Set(prev).add(letraIngresada));
        setIntentos(intentos - 1);
      }
    }
  };

  if (palabraVerificar.join("") === palabra) {
    confetti();
  }

  return (
    <main className="App">
      <h1>Juego de Ahorcado</h1>
      <p className="intentos">Intentos restantes: {intentos}</p>
      <p className="palabra">{palabraVerificar.join(" ")}</p>
      <Letras
        manejarEnvio={manejarEnvio}
        esCorrecta={letrasCorrectas}
        esIncorrecta={letrasIncorrectas}
      />
      {intentos === 0 && <p>Perdiste. La palabra era: {palabra}</p>}
      {palabraVerificar.join("") === palabra && <p className="ganaste">Ganaste!</p>}
      <button onClick={reiniciarJuego} className="btn">Reiniciar</button>
    </main>
  );
};

export default App;
