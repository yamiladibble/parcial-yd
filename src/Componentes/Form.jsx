import { useState } from "react";
import Mascota from "./Mascota";

const Form = () => {
  const [mascota, setMascota] = useState({
    tipo: "",
    nombre: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleTipo = (event) =>
    setMascota({ ...mascota, tipo: event.target.value });
  const handleNombre = (e) =>
    setMascota({ ...mascota, nombre: e.target.value });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      mascota.tipo.trim().length > 3 &&
      !mascota.tipo.startsWith(" ") &&
      mascota.nombre.trim().length > 6 
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(mascota);
  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>Tipo</label>
        <input type="text" value={mascota.tipo} onChange={handleTipo} />
        <label>Nombre</label>
        <input
          type="text"
          value={mascota.nombre}
          onChange={handleNombre}
        />
        <button>Enviar</button>
      </form>
      {show && <Mascota mascota={mascota} />}
      {error && (
        <p style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </>
  );
};

export default Form;