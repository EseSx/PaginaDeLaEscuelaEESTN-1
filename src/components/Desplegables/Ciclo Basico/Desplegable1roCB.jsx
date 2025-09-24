import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable1roCB() {
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
          style={{ backgroundColor: "#3b5fb8" }}
        >
          {abierto ? "1° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA" : "1° AÑO"}
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
            <table className="tabla">
              <thead className="tabla-thead">
                <tr>
                  <th colSpan="2">1° AÑO DE EDUCACIÓN SECUNDARIA TÉCNICA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2" className="subtitulo">
                    Formación General y Formación Científico Tecnológica
                  </th>
                </tr>
                <tr>
                  <td>Ciencias Naturales</td>
                  <td>4 Módulos semanales</td>
                </tr>
                <tr>
                  <td>Ciencias Sociales</td>
                  <td>4 Módulos semanales</td>
                </tr>
                <tr>
                  <td>Educación Artística</td>
                  <td>2 Módulos semanales</td>
                </tr>
                <tr>
                  <td>Inglés</td>
                  <td>2 Módulos semanales</td>
                </tr>
                <tr>
                  <td>Matemática</td>
                  <td>4 Módulos semanales</td>
                </tr>
                <tr>
                  <td>Prácticas del Lenguaje</td>
                  <td>4 Módulos semanales</td>
                </tr>
                <tr>
                  <td>Construcción Ciudadana</td>
                  <td>2 Módulos semanales</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Cantidad de módulos semanales: 24</th>
                </tr>

                <tr>
                  <th colSpan="2" className="subtitulo">
                    Formación Científico Tecnológica y Formación Técnico
                    Específica
                  </th>
                </tr>
                <tr>
                  <td>Procedimientos Técnicos</td>
                  <td>72 horas reloj anual</td>
                </tr>
                <tr>
                  <td>Lenguajes Tecnológicos</td>
                  <td>72 horas reloj anual</td>
                </tr>
                <tr>
                  <td>Sistemas Tecnológicos</td>
                  <td>72 horas reloj anual</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Cantidad de módulos semanales: 6</th>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2">
                    Cantidad total de módulos semanales de 1° año de la
                    Educación Secundaria: 30
                  </th>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
