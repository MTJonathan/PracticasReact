const Item = ({ manejarEnvio, letra, esCorrecta, esIncorrecta }) => {
    const classBtn = esCorrecta ? "btnCorrect" : esIncorrecta ? "btnIncorrect" : undefined;
    return (
      <button
        className={classBtn}
        onClick={() => manejarEnvio(letra)}
        disabled={classBtn !== undefined}
      >
        {letra}
      </button>
    );
  };

  export default Item;