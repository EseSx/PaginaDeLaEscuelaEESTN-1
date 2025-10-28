import { useEffect, useState } from "react";
import "../styles/App.css";

function Carrusel({ diapositivas }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const mostrarSiguiente = () => {
    setIndiceActual((prev) => (prev + 1) % diapositivas.length);
  };

  const mostrarAnterior = () => {
    setIndiceActual((prev) =>
      prev === 0 ? diapositivas.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const intervalo = setInterval(mostrarSiguiente, 5000);
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
          style={{ backgroundImage: `url(${diapositiva})` }}
        >
          <div className="overlayCarrusel"></div>
        </div>
      ))}

      <button className="botonCarrusel anterior" onClick={mostrarAnterior}>
        ❮
      </button>
      <button className="botonCarrusel siguiente" onClick={mostrarSiguiente}>
        ❯
      </button>

      <div className="indicadoresCarrusel">
        {diapositivas.map((_, i) => (
          <span
            key={i}
            className={`indicador ${i === indiceActual ? "activo" : ""}`}
            onClick={() => setIndiceActual(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
