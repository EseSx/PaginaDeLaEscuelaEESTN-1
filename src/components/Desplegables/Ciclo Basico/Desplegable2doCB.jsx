import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable2doCB() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="desplegable-container">
      {/* Botón que abre o cierra el desplegable */}
      <div className="desplegable-boton-container">
        <motion.button
          onClick={() => setAbierto(!abierto)}
          initial={{ width: "200px" }}
          animate={{
            width: abierto ? "95%" : "200px",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="desplegable-boton text-[1.5rem]"
          style={{ backgroundColor: "#b0b0b0" }}
        >
          {/* Cambia el texto según si está abierto o cerrado */}
          {abierto ? "2° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA" : "2° AÑO"}
        </motion.button>
      </div>

      {/* Contenido desplegable con animación */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, scaleY: 0, originY: 0 }}
            animate={{ height: "auto", scaleY: 1, originY: 0 }}
            exit={{ height: 0, scaleY: 0, originY: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="desplegable-contenido"
          >
            <table className="tabla">
              <thead>
                <tr>
                  <th colSpan="2">2° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th colSpan="2" className="subtitulo">
                    Formación General y Científico Tecnológica
                  </th>
                </tr>

                {/* Materias generales */}
                {[
                  ["Biología", "2 Módulos semanales"],
                  ["Construcción de Ciudadanía", "2 Módulos semanales"],
                  ["Educación Artística", "2 Módulos semanales"],
                  ["Educación Física", "2 Módulos semanales"],
                  ["Físico Química", "2 Módulos semanales"],
                  ["Geografía", "2 Módulos semanales"],
                  ["Historia", "2 Módulos semanales"],
                  ["Inglés", "2 Módulos semanales"],
                  ["Matemática", "4 Módulos semanales"],
                  ["Prácticas del Lenguaje", "4 Módulos semanales"],
                ].map(([materia, carga]) => (
                  <tr key={materia}>
                    <td>{materia}</td>
                    <td>{carga}</td>
                  </tr>
                ))}

                <tr>
                  <th></th>
                  <th>Subtotal: 24 módulos semanales</th>
                </tr>

                <tr>
                  <th colSpan="2" className="subtitulo">
                    Formación Técnico Específica
                  </th>
                </tr>

                {/* Materias técnicas */}
                {[
                  ["Procedimientos Técnicos", "144 horas reloj anual"],
                  ["Lenguajes Tecnológicos", "72 horas reloj anual"],
                  ["Sistemas Tecnológicos", "72 horas reloj anual"],
                ].map(([materia, carga]) => (
                  <tr key={materia}>
                    <td>{materia}</td>
                    <td>{carga}</td>
                  </tr>
                ))}

                <tr>
                  <th></th>
                  <th>Subtotal: 8 módulos semanales</th>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th colSpan="2">Total general: 32 módulos semanales</th>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
