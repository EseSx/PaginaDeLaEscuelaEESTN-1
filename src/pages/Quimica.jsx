import EncabezadoSC from "../components/Encabezados personalizados/EncabezadoSC";
import Carrusel from "../components/Carrusel";
import Desplegable4toQ from "../components/Desplegables/Quimica/Desplegable4toQ";
import Desplegable5toQ from "../components/Desplegables/Quimica/Desplegable5toQ";
import Desplegable6toQ from "../components/Desplegables/Quimica/Desplegable6toQ";
import Desplegable7moQ from "../components/Desplegables/Quimica/Desplegable7moQ";
import PieDePagina from "../components/PieDePagina";

import "../styles/Electromecanica.css";
import { isPrimaryPointer } from "framer-motion";

export default function Quimica() {
  return (
    <div className="overflow-x-hidden w-screen">
      <EncabezadoSC
        colores={[
          "bg-[#1f2937]",
          "#1f2937",
          "bg-[#2563eb]",
          "#2563eb",
          "text-[#e0e0e0]",
        ]}
        logo={"experiment"}
        orientacion={"Química"}
      />
      {/* <Carrusel diapositivas={}></Carrusel> */}
      <section className="PresentacionOrientacion">
        <div className="contenedorPresentacion">
          <h1 className="TituloSeccion">Química</h1>
          <p className="textoPresentacion">
            La tecnicatura en química forma técnicos capacitados para trabajar
            en laboratorios, plantas industriales y servicios vinculados al
            sector químico. Combina formación general, científico-tecnológica y
            técnica específica. <br /> El perfil de un técnico químico puede
            realizar y supervisar análisis y ensayos, gestionar recursos y
            equipos, operar procesos químicos y proponer mejoras, siempre bajo
            normas de seguridad, calidad y cuidado ambiental. Su campo laboral
            abarca industrias químicas, alimenticias, farmacéuticas,
            petroquímicas, textiles, cosméticas y laboratorios de análisis e
            investigación.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-[#1f2937] text-[#e0e0e0]">
        <h2
          className="text-[2rem]"
          style={{ marginTop: "1rem", fontFamily: "var(--titulo-secundario)" }}
        >
          Planes de Estudio
        </h2>
        <div className="flex flex-wrap justify-center">
          <Desplegable4toQ />
          <Desplegable5toQ />
          <Desplegable6toQ />
          <Desplegable7moQ />
        </div>
      </section>

      <section className="flex justify-around bg-[#2563eb] h-auto text-[#e0e0e0]">
        <div>
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
