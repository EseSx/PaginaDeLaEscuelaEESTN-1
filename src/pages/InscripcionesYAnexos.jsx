import PieDePagina from "../components/PieDePagina";
import Logo from "../components/Logo";
import MenuDesplegable from "../components/MenuDesplegable";

export default function InscripcionesYAnexos() {
  return (
    <>
      <header className="bg-[#c93833] h-[15vh]" style={{ paddingLeft: "4rem" }}>
        <Logo className="h-full"></Logo>
        <MenuDesplegable buttonClass={"InsAnex"} />
      </header>

      <h1
        className="text-[4rem] text-center text-[#2d3b54]"
        style={{ fontFamily: "var(--titulo-secundario)" }}
      >
        Archivos, Anexos y Más...
      </h1>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 w-[100vw]">
        {/* Cuadro principal */}
        <div className="bg-white rounded-xl w-[75vw]">
          {/* Encabezado */}
          <div className="grid grid-cols-3 p-4 font-semibold border-b border-gray-300 text-[2rem]">
            <span>Nombre</span>
            <span>Fecha de</span>
            <span>Acciones</span>
          </div>

          {/* Filas de archivos (ejemplos) */}
          <div className="grid grid-cols-3 items-center p-4 border-b border-gray-200 text-[1.5rem]">
            <span>NombreDelArchivo.png</span>
            <span>15/12/06</span>
            <div className="flex gap-2 ">
              <button
                className="bg-blue-100 p-2 rounded hover:bg-blue-200"
                title="Visualizar"
              >
                👁️
              </button>
              <button
                className="bg-green-100 p-2 rounded hover:bg-green-200"
                title="Descargar"
              >
                ⬇️
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center p-4 border-b border-gray-200 text-[1.5rem]">
            <span>Documento.pdf</span>
            <span>20/08/23</span>
            <div className="flex gap-2">
              <button
                className="bg-blue-100 p-2 rounded hover:bg-blue-200"
                title="Visualizar"
              >
                👁️
              </button>
              <button
                className="bg-green-100 p-2 rounded hover:bg-green-200"
                title="Descargar"
              >
                ⬇️
              </button>
            </div>
          </div>
        </div>
      </div>

      <PieDePagina />
    </>
  );
}
