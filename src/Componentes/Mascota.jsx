import React from "react";

const Mascota = ({ mascota }) => {
  const { tipo, nombre } = mascota;
  return (
    <>
      <h3>Tu mascota es un: {tipo}</h3>
      <h3>Y su nombre es: {nombre}</h3>
    </>
  );
};

export default Mascota;


  
 
  