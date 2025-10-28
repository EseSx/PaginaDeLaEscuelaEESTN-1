import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable4toE() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="desplegable-container">
      <div className="desplegable-boton-container">
        <motion.button
          onClick={() => setAbierto(!abierto)}
          initial={{ width: "200px" }}
          animate={{
            width: abierto ? "95%" : "200px",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="desplegable-boton text-[1.5rem]"
          style={{ backgroundColor: "#d96106" }}
        >
          {abierto
            ? "4° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA - ELECTROMECÁNICA"
            : "4° AÑO"}
        </motion.button>
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{
              height: 0,
              scaleY: 0,
              opacity: 0,
              transformOrigin: "top",
            }}
            animate={{
              height: "auto",
              scaleY: 1,
              opacity: 1,
              transformOrigin: "top",
            }}
            exit={{
              height: 0,
              scaleY: 0,
              opacity: 0,
              transformOrigin: "bottom",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="desplegable-contenido"
          >
            <table className="tabla tablaElec">
              {/* Titulo de la tabla */}
              <thead className="tabla-thead">
                <tr>
                  <th colSpan="2">
                    ESTRUCTURA CURRICULAR TÉCNICO EN ELECTROMECANICA
                  </th>
                </tr>
              </thead>
              {/* Cuerpo de la tabla */}
              <tbody>
                {/* Apartado de formacion general */}
                <tr>
                  <th>Formación General</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Literatura</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Ingles</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Educación Física</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Salud y Adolescencia</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Historia</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Geografía</td>
                  <td>72</td>
                </tr>
                {/* Apartado de formacion cientifico tecnologico */}
                <tr>
                  <th>Formación Cientifico Tecnológico</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Matemática-Ciclo Superior</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Física</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Química</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Conocimiento de los Materiales</td>
                  <td>72</td>
                </tr>
                {/* Formacion tecnico especifica */}
                <tr>
                  <th>Formación Técnico Especifica</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Dibujo Tecnológico</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Maquinas Eléctricas y Automatismos</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Diseño y Procesamiento Mecánico</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Instalaciones y Aplicaciones de la Energía</td>
                  <td>144</td>
                </tr>
              </tbody>
              {/* Pie de la tabla */}
              <tfoot>
                <tr>
                  <th>TOTAL DE HORAS RELOJ SEMANALES</th>
                  <th>37</th>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
