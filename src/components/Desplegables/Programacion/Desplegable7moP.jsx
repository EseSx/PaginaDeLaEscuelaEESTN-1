import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable7moP() {
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
          style={{ backgroundColor: "#064e3b" }}
        >
          {abierto
            ? "7° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA - PROGRAMACIÓN"
            : "7° AÑO"}
        </motion.button>
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, scaleY: 0, transformOrigin: "top" }}
            animate={{ height: "auto", scaleY: 1, transformOrigin: "top" }}
            exit={{ height: 0, scaleY: 0, transformOrigin: "bottom" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="desplegable-contenido"
          >
            <table className="tabla tablaProg">
              {/* Titulo de la tabla */}
              <thead className="tabla-thead">
                <tr>
                  <th colSpan="2">
                    ESTRUCTURA CURRICULAR TÉCNICO EN PROGRAMACIÓN
                  </th>
                </tr>
              </thead>
              {/* Cuerpo de la tabla */}
              <tbody>
                {/* Apartado de practicas profesionalizantes */}
                <tr>
                  <th>Practicas Profesionalizantes</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Prácticas Profesionalizantes del Sector Informática</td>
                  <td>200</td>
                </tr>
                {/* Apartado de formacion cientifico tecnologico */}
                <tr>
                  <th>Formación Cientifico Tecnológico</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Emprendimientos Productivos y Desarrollo Local</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Evaluación de Proyectos</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Modelos y Sistemas</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Organización y Métodos</td>
                  <td>72</td>
                </tr>
                {/* Formacion tecnico especifica */}
                <tr>
                  <th>Formación Técnico Especifica</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>
                    Proyecto, Diseño e Implementación de Sistemas
                    Computacionales
                  </td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>
                    Proyecto de Desarrollo de Software para Plataformas Móviles
                  </td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Proyecto de Implementación de Sitios Web Dinámicos</td>
                  <td>144</td>
                </tr>
              </tbody>
              {/* Pie de la tabla */}
              <tfoot>
                <tr>
                  <th>TOTAL DE HORAS RELOJ SEMANAL SIN PP</th>
                  <th>21</th>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
