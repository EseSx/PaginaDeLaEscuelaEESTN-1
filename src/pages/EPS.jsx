import EncabezadoSC from "../components/Encabezados personalizados/EncabezadoSC";
import Carrusel from "../components/Carrusel";
import Desplegable1EPS from "../components/Desplegables/EPS/Desplegable1EPS";
import Desplegable2EPS from "../components/Desplegables/EPS/Desplegable2EPS";
import Desplegable3EPS from "../components/Desplegables/EPS/Desplegable3EPS";
import Desplegable4EPS from "../components/Desplegables/EPS/Desplegable4EPS";
import PieDePagina from "../components/PieDePagina";

import { isPrimaryPointer } from "framer-motion";

export default function EPS() {
  return (
    <div className="overflow-x-hidden w-screen">
      <EncabezadoSC
        colores={[
          "bg-[#690202]",
          "#690202",
          "bg-[#b45309]",
          "#b45309",
          "text-[#f5f1eb]",
        ]}
        logo={"flare"}
        orientacion={"Soldadura (EPS)"}
      />
      {/* <Carrusel diapositivas={}></Carrusel> */}
      <section className="PresentacionOrientacion">
        <div className="contenedorPresentacion">
          <h1 className="TituloSeccion">
            Soldadura (EPS,educación profesional secundaria)
          </h1>
          <p className="textoPresentacion">
            Es un Bachiller con formación profesional en metal metálica
            (soldadura). Se articula con el CFP N°401. Esta propuesta está
            destinada a adolescentes que habiendo culminado su escolaridad de
            nivel primario no se hayan incorporado a las propuestas de Educación
            Secundaria en ninguna de sus orientaciones o modalidades, o bien;
            iniciaron su trayectoria en el nivel secundario en cualquiera de sus
            orientaciones y sus modalidades y, por distintos motivos, se hayan
            desvinculado por lo menos al año perdiendo así su condición de
            alumnas/alumnos regulares. O bien; Se encuentran en situación de
            haber repetido al menos dos veces consecutivas un determinado año
            escolar.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-[#690202] text-[#e0e0e0]">
        <h2
          className="text-[2rem]"
          style={{ marginTop: "1rem", fontFamily: "var(--titulo-secundario)" }}
        >
          Planes de Estudio
        </h2>
        <div className="flex flex-wrap justify-center">
          <Desplegable1EPS />
          <Desplegable2EPS />
          <Desplegable3EPS />
          <Desplegable4EPS />
        </div>
      </section>

      <section className="flex justify-around bg-[#743403] h-auto text-[#e0e0e0]">
        <div className="">
          <h2
            className="text-[2rem]"
            style={{
              marginTop: "1rem",
              fontFamily: "var(--titulo-secundario)",
            }}
          >
            Empresas Oferentes
          </h2>
          <ul>
            <li>
              <p>• BoxMark</p>
            </li>
            <li>
              <p>• New Holland </p>
            </li>
            <li>
              <p>• Anesthesia </p>
            </li>
            <li>
              <p>• Romero Panificados</p>
            </li>
            <li>
              <p>• Taxonera </p>
            </li>
            <li>
              <p>• Ovobrand</p>
            </li>
          </ul>
        </div>
        <div>
          <h2
            className="text-[2rem]"
            style={{
              marginTop: "1rem",
              fontFamily: "var(--titulo-secundario)",
            }}
          >
            Jefes de Area
          </h2>

          <ul>
            <li>
              <p>• Robledo Joel Emiliano</p>
            </li>
            <li>
              <p>• López Montero Alejo</p>
            </li>
          </ul>
        </div>
      </section>

      <PieDePagina />
    </div>
  );
}
