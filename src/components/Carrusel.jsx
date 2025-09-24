import { useEffect, useState } from "react";

import "../styles/App.css";

function Carrusel({ diapositivas }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const mostrarSiguiente = () => {
    setIndiceActual((prev) => (prev + 1) % diapositivas.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      mostrarSiguiente();
    }, 3000);

    return () => clearInterval(intervalo);
  }, [diapositivas.length]);

  return (
    <div className="carrusel">
      {diapositivas.map((diapositiva, indice) => (
        <div
          key={indice}
          className={`diapositivaCarrusel ${
            indice === indiceActual ? "activa" : ""
          }`}
        >
          <img src={diapositiva} alt={`Diapositiva ${indice}`} />
        </div>
      ))}
    </div>
  );
}

export default Carrusel;
