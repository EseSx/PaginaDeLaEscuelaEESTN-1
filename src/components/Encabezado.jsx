import MenuDesplegable from "../components/MenuDesplegable";
import Logo from "./Logo";

import "../styles/index.css";
import "../styles/Encabezado.css";

export default function Encabezado({ orientacion }) {
  return (
    <header className="encabezado">
      <div className="contenedorFragmentoEncabezado h-full">
        <Logo />
      </div>
      <div className="contenedorFragmentoTitulo">
        <h1
          className="titulo"
          style={{ fontSize: orientacion ? "40px" : "48px" }}
        >
          E.E.S.T N°1 "Ing. Jose R. Cantón" {orientacion}
        </h1>
      </div>
      <MenuDesplegable />
    </header>
  );
}
