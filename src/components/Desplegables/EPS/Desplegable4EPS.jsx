import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import "../../../styles/Desplegable.css";

export default function Desplegable4EPS() {
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
          style={{ backgroundColor: "#b45309" }}
        >
          {abierto ? "4° NIVEL - Soldadura (EPS)" : "4° NIVEL"}
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
            <table className="tabla tablaEPS">
              {/* Titulo de la tabla */}
              <thead className="tabla-thead">
                <tr>
                  <th colSpan="2">
                    CAJA CURRICULAR DE METALMECÁNICA - SOLDADURA
                  </th>
                </tr>
              </thead>
              {/* Cuerpo de la tabla */}
              <tbody>
                {/* Apartado de formacion general */}
                <tr>
                  <th colSpan="2">Formación General</th>
                </tr>
                <tr>
                  <th>Módulo</th>
                  <th>Horas</th>
                </tr>
                <tr>
                  <td>Matemática</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Lengua y Literatura</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Ciencias Sociales</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Ciencias Naturales</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Inglés</td>
                  <td>108</td>
                </tr>
                {/* Apartado de formacion cientifico tecnologico */}
                <tr>
                  <th colSpan="2">Formación Profesional</th>
                </tr>
                <tr>
                  <th>Módulo</th>
                  <th>Horas</th>
                </tr>
                <tr>
                  <td>Diseño y Fabricación Digital</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>Planificación, cálculos y formulación dde proyecto</td>
                  <td>56</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
