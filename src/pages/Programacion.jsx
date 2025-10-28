import EncabezadoSC from "../components/Encabezados personalizados/EncabezadoSC";
import Carrusel from "../components/Carrusel";
import Desplegable4toP from "../components/Desplegables/Programacion/Desplegable4toP";
import Desplegable5toP from "../components/Desplegables/Programacion/Desplegable5toP";
import Desplegable6toP from "../components/Desplegables/Programacion/Desplegable6toP";
import Desplegable7moP from "../components/Desplegables/Programacion/Desplegable7moP";
import PieDePagina from "../components/PieDePagina";

import "../styles/Orientacion.css";
import { isPrimaryPointer } from "framer-motion";

export default function Programacion() {
  return (
    <div className="overflow-x-hidden w-screen">
      <EncabezadoSC
        colores={[
          "bg-[#111827]",
          "#111827",
          "bg-[#064e3b]",
          "#064e3b",
          "text-[#e0e0e0]",
        ]}
        logo={"code"}
        orientacion={"Programación"}
      />
      {/* <Carrusel diapositivas={}></Carrusel> */}
      <section className="PresentacionOrientacion">
        <div className="contenedorPresentacion">
          <h1 className="TituloOrientacion">Programación</h1>
          <p className="textoPresentacion">
            La tecnicatura forma profesionales capaces de desarrollar programas
            y componentes de sistemas informáticos. Su objetivo es preparar
            técnicos que participen en proyectos de software, desde la
            interpretación de especificaciones de diseño hasta la producción,
            verificación y documentación del código, siempre en el marco de
            equipos de trabajo organizados por proyectos. <br /> El perfil de un
            técnico en Programación está preparado para desarrollar y mantener
            programas informáticos, interpretar especificaciones, detectar y
            corregir errores, y documentar su trabajo. Puede trabajar en equipo
            dentro de proyectos de software, aportando soluciones eficientes y
            de calidad.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-[#111827] text-[#e0e0e0]">
        <h2
          className="text-[2rem]"
          style={{ marginTop: "1rem", fontFamily: "var(--titulo-secundario)" }}
        >
          Planes de Estudio
        </h2>
        <div className="flex flex-wrap justify-center">
          <Desplegable4toP />
          <Desplegable5toP />
          <Desplegable6toP />
          <Desplegable7moP />
        </div>
      </section>

      <section className="flex justify-around bg-[#05382b] h-auto text-[#e0e0e0]">
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
          <ul className="text-[#999999]">
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

          <ul className="text-[#999999]">
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
