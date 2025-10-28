import { Link } from "react-router-dom";

import "../styles/Home.css";
import "../styles/App.css";

import tuerca from "../assets/tuerca.jpg";
import matraz from "../assets/matraz.jpg";
import computadora from "../assets/computadora.jpg";

import Carrusel from "../components/Carrusel";
import Noticias from "../components/Noticias";
import Encabezado from "../components/Encabezado";
import PieDePagina from "../components/PieDePagina";

export default function Home() {
  const imágenes = [tuerca, matraz, computadora];

  return (
    <>
      <Encabezado />

      <Carrusel diapositivas={imágenes} />

      <section className="seccionPresentacion" id="presentacion">
        <div className="contenedorPresentacion">
          <h2 className="tituloSeccion">Bienvenidos a Nuestra Escuela</h2>

          <div className="bloqueHistoria">
            <p>
              La {""}
              <strong>
                Escuela de Educación Secundaria Técnica N°1 “Ing. José R.
                Cantón”
              </strong>{" "}
              nació en la década de <strong>1960</strong> como un sueño
              colectivo de la comunidad de Brandsen, con el objetivo de formar a
              los jóvenes de la región en los{" "}
              <strong>conocimientos técnicos</strong> demandados por las
              industrias locales.
            </p>

            <p>
              Comenzó como <strong>Magisterio Técnico</strong> y, en{" "}
              <strong>1963</strong>, se convirtió en una institución{" "}
              <strong>independiente</strong>, creciendo gracias al esfuerzo de{" "}
              <strong>docentes, directivos y familias comprometidos</strong> con
              la educación técnica. A lo largo de su historia, la escuela ha
              incorporado diversas <strong>tecnicaturas</strong>, como{" "}
              <strong>Electromecánica, Química</strong> y, en{" "}
              <strong>2022</strong>, la{" "}
              <strong>Tecnicaturas en Programación</strong>, de la cual egresó
              su <strong>primera promoción de Técnicos en Programación</strong>{" "}
              en <strong>2025</strong>. En <strong>1999</strong> inauguró su{" "}
              <strong>edificio propio</strong>, consolidándose como un{" "}
              <strong>pilar educativo</strong> en la región.
            </p>

            <p>
              Entre sus logros destacados se encuentra la creación, en{" "}
              <strong>2002</strong>, de la{" "}
              <strong>
                primera impresora de braille construida por estudiantes y
                docentes
              </strong>
              , reconocida a nivel provincial y nacional. Hoy, con más de{" "}
              <strong>seis décadas de trayectoria</strong>, la escuela continúa
              formando{" "}
              <strong>técnicos con una mirada orientada hacia el futuro</strong>
              , la <strong>innovación</strong> y la{" "}
              <strong>excelencia educativa</strong>.
            </p>
          </div>

          <div className="bloqueMision">
            <h3 className="subtituloSeccion">Nuestra Misión</h3>

            <p>
              Somos una <strong>escuela técnica pública</strong> comprometida
              con la <strong>formación integral</strong> de nuestros
              estudiantes. Nuestra propuesta educativa promueve el desarrollo de{" "}
              <strong>
                capacidades, conocimientos, habilidades, destrezas, valores y
                criterios de profesionalidad
              </strong>
              , ajustados al <strong>contexto socio-productivo</strong>.
              Buscamos que los estudiantes comprendan la realidad a partir de la{" "}
              <strong>reflexión sistemática sobre la práctica</strong> y la{" "}
              <strong>aplicación organizada de la teoría</strong>. El perfil de
              nuestros egresados se centra en jóvenes que han adquirido las{" "}
              <strong>competencias de su orientación</strong>, preparándolos
              para{" "}
              <strong>insertarse en sectores productivos estratégicos</strong> y
              habilitándolos para{" "}
              <strong>
                continuar desarrollando su carrera profesional a futuro
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        className="seccionServicios w-full flex flex-col items-center px-4"
        id="orientaciones"
      >
        <h2 className="tituloSeccion">Orientaciones Técnicas</h2>
        <p className="textoIntroServicios">
          En nuestra institución, ofrecemos un{" "}
          <strong>Ciclo Básico de Adaptación</strong>, seguido de un{" "}
          <strong>Bachiller con Tecnicatura en Metalmecánica</strong> y tres{" "}
          <strong>orientaciones</strong> distintas:{" "}
          <strong>Química, Programación y Electromecánica</strong>. En el{" "}
          <strong>Ciclo Superior</strong> (de 4° a 7° año), los alumnos eligen
          la{" "}
          <strong>
            orientación que mejor se adapta a sus intereses: Programación,
            Electromecánica o Química
          </strong>
          . Esta etapa está pensada para que comiencen a{" "}
          <strong>especializarse</strong>, trabajando en{" "}
          <strong>talleres y laboratorios</strong>, aprendiendo de manera
          práctica y descubriendo su <strong>vocación profesional</strong>. A
          continuación, se brindará información detallada acerca de cada una de
          las orientaciones.
        </p>

        <div className="contenedorServicios">
          {[
            {
              link: "/ciclo_basico",
              icon: "auto_stories",
              titulo: "CICLO BÁSICO",
              clase: "cicloBasico",
            },
            {
              link: "/programacion",
              icon: "code",
              titulo: "PROGRAMACIÓN",
              clase: "programacion",
            },
            {
              link: "/electromecanica",
              icon: "settings",
              titulo: "ELECTROMECÁNICA",
              clase: "electromecanica",
            },
            {
              link: "/quimica",
              icon: "experiment",
              titulo: "QUÍMICA",
              clase: "quimica",
            },
            { link: "/eps", icon: "flare", titulo: "EPS", clase: "eps" },
          ].map(({ link, icon, titulo, clase }) => (
            <Link to={link} className={`tarjetaServicio ${clase}`} key={titulo}>
              <span className="material-symbols-outlined logoServicio">
                {icon}
              </span>
              <span className="tituloTarjeta">{titulo}</span>
            </Link>
          ))}
        </div>
      </section>

      <Noticias />
      <PieDePagina />
    </>
  );
}
