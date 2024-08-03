import React from "react";
import Letras from "./components/Letras";
import { variablesApp } from "./assets/js/app";
import "./assets/css/App.css";
import confetti from "canvas-confetti";
const App = () => {
  const {
    reiniciarJuego,
    palabra,
    palabraVerificar,
    intentos,
    letrasCorrectas,
    letrasIncorrectas,
    manejarEnvio,
  } = variablesApp();

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
      {intentos === 0 && (
        <p className="perdiste">Perdiste. La palabra era: {palabra}</p>
      )}
      {palabraVerificar.join("") === palabra && (
        <p className="ganaste">Ganaste! {palabra} era la palabra secreta</p>
      )}
      <button onClick={reiniciarJuego} className="btn">
        Reiniciar
      </button>
    </main>
  );
};

export default App;
