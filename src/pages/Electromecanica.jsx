import EncabezadoSC from "../components/Encabezados personalizados/EncabezadoSC";
import Carrusel from "../components/Carrusel";
import Desplegable4toE from "../components/Desplegables/Electromecanica/Desplegable4toE";
import Desplegable5toE from "../components/Desplegables/Electromecanica/Desplegable5toE";
import Desplegable6toE from "../components/Desplegables/Electromecanica/Desplegable6toE";
import Desplegable7moE from "../components/Desplegables/Electromecanica/Desplegable7moE";
import PieDePagina from "../components/PieDePagina";

import "../styles/Electromecanica.css";
import { isPrimaryPointer } from "framer-motion";

export default function Electromecanica() {
  return (
    <div className="overflow-x-hidden w-screen">
      <EncabezadoSC
        colores={[
          "bg-[#0e2051]",
          "#0e2051",
          "bg-[#d96106]",
          "#d96106",
          "text-[#e0e0e0]",
        ]}
        logo={"settings"}
        orientacion={"Electromecánica"}
      ></EncabezadoSC>
      {/* <Carrusel diapositivas={}></Carrusel> */}
      <section className="PresentacionOrientacion">
        <div className="contenedorPresentacion">
          <h1 className="TituloSeccion">Electromecánica</h1>
          <p className="textoPresentacion">
            La tecnicatura en Electromecánica forma profesionales con
            conocimientos en mecánica, electricidad y automatización, preparados
            para trabajar en industrias y servicios. <br /> El perfil de un
            técnico electromecánico puede diseñar, montar y mantener equipos e
            instalaciones, realizar ensayos, operar sistemas productivos y
            asesorar en soluciones técnicas, siempre con criterios de seguridad,
            calidad y responsabilidad.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-[#0e2051] text-[#e0e0e0]">
        <h2
          className="text-[2rem]"
          style={{ marginTop: "1rem", fontFamily: "var(--titulo-secundario)" }}
        >
          Planes de Estudio
        </h2>
        <div className="flex flex-wrap justify-center">
          <Desplegable4toE />
          <Desplegable5toE />
          <Desplegable6toE />
          <Desplegable7moE />
        </div>
      </section>

      <section className="flex justify-around bg-[#9e4501] h-auto text-[#e0e0e0]">
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
