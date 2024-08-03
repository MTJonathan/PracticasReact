const Item = ({ manejarEnvio, letra, esCorrecta, esIncorrecta }) => {
    const manejarClick = (letra) => {
      manejarEnvio(letra);
    };
    const classBtn = esCorrecta ? "btnCorrect" : esIncorrecta ? "btnIncorrect" : "";
    const id = `letra-${letra}`;
    return (
      <button
        className={classBtn}
        onClick={() => manejarClick(letra)}
        id={id}
        disabled={classBtn !== ""}
      >
        {letra}
      </button>
    );
  };

  export default Item;