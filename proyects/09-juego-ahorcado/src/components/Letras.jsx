import "../assets/css/Letras.css";
import Item from "./Item";
const letrasBtn = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Letras = ({ manejarEnvio, esCorrecta, esIncorrecta }) => {
  return (
    <div className="letras">
      <div className="letrasContainer">
        {letrasBtn.map((letra) => (
          <Item key={letra} manejarEnvio={manejarEnvio} letra={letra} esCorrecta={esCorrecta.has(letra)} esIncorrecta={esIncorrecta.has(letra)}/>
        ))}
      </div>
    </div>
  );
};

export default Letras;
