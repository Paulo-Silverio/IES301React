import React, { useState, useEffect } from "react";

function Relogio() {
  const [horaCompleta, setHoraCompleta] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const hora = agora.getHours();
      const minuto = agora.getMinutes();
      const segundo = agora.getSeconds();
      const horaFormatada = hora < 10 ? `0${hora}` : hora;
      const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
      const segundoFormatado = segundo < 10 ? `0${segundo}` : segundo;
      const horaCompletaFormatada = `${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
      setHoraCompleta(horaCompletaFormatada);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return <h1>{horaCompleta}</h1>;
}

export default Relogio;
