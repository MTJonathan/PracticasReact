import { useState } from "react";
import { palabras } from "./palabras";
export const variablesApp = () => {
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

  return { reiniciarJuego, palabra, palabraVerificar, intentos, letrasCorrectas, letrasIncorrectas, manejarEnvio };
};
