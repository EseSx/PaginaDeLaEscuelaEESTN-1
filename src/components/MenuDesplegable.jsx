import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/MenuDesplegable.css";
import "../styles/Encabezado.css";

function MenuDesplegable({ buttonClass }) {
  const location = useLocation();
  const [menuActivo, setMenuActivo] = useState(false);

  const alternarMenu = () => {
    setMenuActivo((prev) => !prev);
    document.body.style.overflow = !menuActivo ? "hidden" : "auto";
  };

  const cerrarMenu = () => {
    setMenuActivo(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    setMenuActivo(false);
    document.body.style.overflowY = "auto";
  }, [location]);

  return (
    <>
      {/* Botón para abrir menú */}
      <button className={`botonMenu ${buttonClass}`} onClick={alternarMenu}>
        <span className="material-symbols-outlined botonMenu">menu</span>
      </button>

      {/* Superposición */}
      <div
        className={`superposicionMenu ${menuActivo ? "activo" : ""}`}
        onClick={cerrarMenu}
      ></div>

      {/* Menú desplegable */}
      <div className={`menuDesplegable ${menuActivo ? "activo" : ""}`}>
        <button className="cerrarMenu" onClick={cerrarMenu}>
          <span className="material-symbols-outlined cruz">close</span>
        </button>
        <div className="encabezadoMenu">
          <h3 className="tituloMenu">Menú Principal</h3>
        </div>
        <div className="contenidoMenu">
          <Link
            className="elementoMenu"
            to={"/"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <span className="material-symbols-outlined"> home </span> Inicio
          </Link>
          <Link to={"/login"} className="elementoMenu">
            <span className="material-symbols-outlined">login</span> Login
          </Link>
          <Link to={"/#presentacion"} className="elementoMenu">
            <span className="material-symbols-outlined"> article </span> Nuestra
            Historia
          </Link>
          <Link to={"/#orientaciones"} className="elementoMenu">
            <span className="material-symbols-outlined"> School </span>{" "}
            Orientaciones
          </Link>
          <Link to={"/expo"} className="elementoMenu">
            <span className="material-symbols-outlined">
              {" "}
              desktop_windowsExperimentsettings{" "}
            </span>{" "}
            Expotec
          </Link>
          <Link to={"/#noticias"} className="elementoMenu">
            <span className="material-symbols-outlined"> newspaper </span>{" "}
            Noticias
          </Link>
          <Link to={"/inscripcionesyanexos"} className="elementoMenu">
            <span className="material-symbols-outlined"> file_save </span>{" "}
            Inscripciones y anexos
          </Link>
          <Link to={""} className="elementoMenu">
            <span className="material-symbols-outlined"> call </span> Contacto
          </Link>
        </div>
      </div>
    </>
  );
}

export default MenuDesplegable;
