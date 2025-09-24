import EncabezadoCB from "../components/Encabezados personalizados/EncabezadoCB";
import Carrusel from "../components/Carrusel";
import Desplegable1roCB from "../components/Desplegables/Ciclo Basico/Desplegable1roCB";
import Desplegable2doCB from "../components/Desplegables/Ciclo Basico/Desplegable2doCB";
import Desplegable3roCB from "../components/Desplegables/Ciclo Basico/Desplegable3roCB";
import PieDePagina from "../components/PieDePagina";

import "../styles/CicloBasico.css";

export default function CicloBasico() {
  return (
    <>
      <EncabezadoCB></EncabezadoCB>
      {/* <Carrusel diapositivas={}></Carrusel> */}
      <section className="PresentacionOrientacion">
        <div className="contenedorPresentacion">
          <h1 className="TituloSeccion">Ciclo Basico</h1>
          <p className="textoPresentacion">
            El ciclo básico es el inicio del ciclo formativo que ofrece nuestra
            escuela (1° año – 3° año), donde los alumnos combinan las materias
            generales con una sólida base tecnológica y científica. <br /> Aquí
            los chicos no solo aprenden: experimentan, crean y descubren
            procesos. Elegir nuestra escuela es abrir la puerta a una educación
            completa y con proyección al futuro.
          </p>
        </div>
      </section>

      <section className="planDeEstudios flex flex-col items-center">
        <h2
          className="text-[2rem]"
          style={{ marginTop: "1rem", fontFamily: "var(--titulo-secundario)" }}
        >
          Planes de Estudio
        </h2>
        <div className="flex flex-wrap justify-center">
          <Desplegable1roCB />
          <Desplegable2doCB />
          <Desplegable3roCB />
        </div>
      </section>

      <PieDePagina></PieDePagina>
    </>
  );
}
