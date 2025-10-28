import MenuDesplegable from "../components/MenuDesplegable";
import Logo from "./Logo";

import "../styles/index.css";
import "../styles/Encabezado.css";

export default function Encabezado() {
  return (
    <header className="encabezado">
      <div className="contenedorLogo">
        <Logo />
      </div>

      <div className="contenedorTitulo">
        <h1 className="titulo">E.E.S.T N°1 "Ing. José R. Cantón"</h1>
      </div>

      <MenuDesplegable />
    </header>
  );
}
