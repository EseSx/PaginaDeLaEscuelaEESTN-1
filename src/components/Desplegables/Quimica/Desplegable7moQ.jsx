import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable7moQ() {
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
          style={{ backgroundColor: "#2563eb" }}
        >
          {abierto
            ? "7° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA - QUÍMICA"
            : "7° AÑO"}
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
            <table className="tabla tablaQui">
              {/* Titulo de la tabla */}
              <thead className="tabla-thead">
                <tr>
                  <th colSpan="2">ESTRUCTURA CURRICULAR TÉCNICO QUIMICO</th>
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
                  <td>
                    Prácticas Profesionalizantes del Sector Industria de
                    Procesos
                  </td>
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
                  <td>Química Industrial</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Química Analítica</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Organización y Gestión Industrial</td>
                  <td>72</td>
                </tr>
                {/* Formacion tecnico especifica */}
                <tr>
                  <th>Formación Técnico Especifica</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>laboratorio de Análisis Microbiológicos</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Laboratorio de Industrias</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>laboratorio de Técnicas Analíticas Instrumentales</td>
                  <td>144</td>
                </tr>
              </tbody>
              {/* Pie de la tabla */}
              <tfoot>
                <tr>
                  <th>TOTAL DE HORAS RELOJ SEMANAL SIN PP</th>
                  <th>22</th>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
