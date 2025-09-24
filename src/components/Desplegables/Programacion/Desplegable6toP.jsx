import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable6toP() {
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
            ? "6° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA - PROGRAMACIÓN"
            : "6° AÑO"}
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
                  <td>Inglés</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Educación Física</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Filosofia</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Arte</td>
                  <td>72</td>
                </tr>
                {/* Apartado de formacion cientifico tecnologico */}
                <tr>
                  <th>Formación Cientifico Tecnológico</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Matemática Discreta</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Sistemas Digitales</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Sistemas de Gestión y Autogestión</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Seguridad Informática</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Derechos del Trabajo</td>
                  <td>72</td>
                </tr>
                {/* Formacion tecnico especifica */}
                <tr>
                  <th>Formación Técnico Especifica</th>
                  <th>CHT</th>
                </tr>
                <tr>
                  <td>Laboratorio de Programación</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Laboratorio de Procesos Industriales</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Laboratorio de Aplicaciones Web Estáticas</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Laboratorio de Aplicaciones Web Dinámicas</td>
                  <td>144</td>
                </tr>
              </tbody>
              {/* Pie de la tabla */}
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
