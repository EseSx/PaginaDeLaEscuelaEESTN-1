import PieDePagina from "../components/PieDePagina";
import Logo from "../components/Logo";
import MenuDesplegable from "../components/MenuDesplegable";

import ArchivoPrueba from "../assets/Prueba de pagina anexos y mas.pdf";
import "../styles/InscripcionesYAnexos.css";

export default function InscripcionesYAnexos() {
  return (
    <>
      <header className="encabezadoIA">
        <Logo />
        <MenuDesplegable buttonClass={"InsAnex"} />
      </header>

      <h1 className="tituloAI">Archivos, Anexos y más..</h1>

      <div className="contenedor-principal">
        <div className="cuadro">
          <div className="encabezado-tabla">
            <span>Nombre</span>
            <span>Fecha</span>
            <span>Acciones</span>
          </div>

          <div className="fila-tabla">
            <span>Documento.pdf</span>
            <span>20/08/23</span>
            <div className="acciones">
              <button
                className="boton-accion ver"
                title="Visualizar"
                onClick={() => window.open(ArchivoPrueba, "_blank")}
              >
                <span className="material-symbols-outlined icono azul">
                  visibility
                </span>
              </button>
              <a
                href={ArchivoPrueba}
                download="Documento.pdf"
                className="boton-accion descargar"
                title="Descargar"
              >
                <span className="material-symbols-outlined icono verde">
                  download
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <PieDePagina />
    </>
  );
}
