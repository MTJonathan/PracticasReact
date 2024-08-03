import "../assets/css/Letras.css";
import Item from "./Item";
import { letrasBtn } from "../assets/js/letrasbtn";

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
