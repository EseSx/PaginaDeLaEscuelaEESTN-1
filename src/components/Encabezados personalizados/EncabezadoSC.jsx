import MenuDesplegable from "../MenuDesplegable";
import Logo from "../Logo";
import { color } from "framer-motion";

import "../../styles/EncabezadoSC.css";

export default function EncabezadoSC({ colores, logo, orientacion }) {
  return (
    <header className={`flex h-[8rem] w-full relative ${colores[4]}`}>
      {/* Contenedor del contenido general */}
      <div
        className={`flex items-center h-full flex-[0.6] ${colores[0]} justify-around relative encabezado-izquierdo`}
        style={{ paddingLeft: "1rem" }}
      >
        <Logo className="encabezado-logo" />
        <h1
          className="font-bold text-[2rem]"
          style={{ fontfamily: "var(--titulo-secundario)" }}
        >
          E.E.S.T.N°1
        </h1>
        <div className={`absolute bottom-0 left-0 w-full h-2 ${colores[2]}`} />
      </div>

      {/* Contenedor del polygono que conecta la zona grande y la chica */}
      <div className="h-full w-[25%]">
        <svg
          className="w-full h-full max-w-full"
          viewBox="0 0 150 96"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none "
        >
          <defs>
            <linearGradient
              id="gradienteStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#69467E" />
              <stop offset="100%" stopColor="#91324E" />
            </linearGradient>
          </defs>
          <polygon points="0,0 150,0 150,72 0,96" fill={colores[1]} />
          <polyline
            points="153,69 -1,93.3"
            stroke={colores[3]}
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      {/* Contenedor del contenido particular */}
      <div
        className={`flex items-center px-4 h-[6rem] justify-around flex-1 ${colores[0]} relative`}
      >
        <h1 className="flex items-center gap-15 encabezado-h1-menu">
          <span
            className="material-symbols-outlined "
            style={{ fontSize: "2.5rem" }}
          >
            {logo}
          </span>
          <span
            className="titulo-orientacion"
            style={{ fontFamily: "var(--titulo-secundario)" }}
          >
            {orientacion}
          </span>
        </h1>
        <MenuDesplegable />
        <div
          className={`absolute bottom-[-1px] left-0 w-full h-2 ${colores[2]}`}
        />
      </div>
    </header>
  );
}

<svg width="300" height="300" viewBox="0 0 300 300">
  <defs>
    <linearGradient id="miDegradado" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b5fb8" />
      <stop offset="100%" stop-color="#b91c1c" />
    </linearGradient>
  </defs>

  <polygon
    points="50,50 250,50 150,250"
    fill="none"
    stroke="url(#miDegradado)"
    stroke-width="5"
  />
</svg>;
