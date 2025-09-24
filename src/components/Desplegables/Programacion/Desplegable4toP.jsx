import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable4toP() {
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
            ? "4° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA - PROGRAMACIÓN"
            : "4° AÑO"}
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
                <tr>
                  <th>Formación Cientifico Tecnológico</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Matemática Ciclo Superior</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Fisica</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Química</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Tecnologías Electrónicas</td>
                  <td>72</td>
                </tr>
                <tr>
                  <th>Formación Técnico Especifica</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Laboratorio de Programación</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Laboratorio de Hardware</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Laboratorio de Sistemas Operativos</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Laboratorio de Aplicaciones</td>
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
