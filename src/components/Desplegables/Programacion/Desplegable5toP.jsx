import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable5toP() {
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
            ? "5° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA - PROGRAMACIÓN"
            : "5° AÑO"}
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
              <thead className="tabla-thead">
                <tr>
                  <th colSpan="2">
                    ESTRUCTURA CURRICULAR TÉCNICO EN PROGRAMACIÓN
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Formación General</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Literatura</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Inglés</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Educación Física</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Política y Ciudadania</td>
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
                <tr>
                  <th>Formación Cientifico Tecnológico</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Análisis Matemático</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Sistemas Digitales</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Bases de Datos</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Modelos y Sistemas</td>
                  <td>108</td>
                </tr>
                <tr>
                  <th>Formación Técnico Especifica</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Laboratorio de Programación</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Laboratorio de Redes Informáticas</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Laboratorio de Diseño Web</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Laboratorio de Diseño de Bases de Datos</td>
                  <td>72</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>TOTAL DE HORAS RELOJ SEMANAL</th>
                  <th>35</th>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
