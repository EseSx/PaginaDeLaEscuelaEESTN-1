import PieDePagina from "../components/PieDePagina";
import Logo from "../components/Logo";
import MenuDesplegable from "../components/MenuDesplegable";
import Carrusel from "../components/Carrusel";

import Brandsen1 from "../assets/Img/Brandsen1.jpg";
import Brandsen2 from "../assets/Img/Brandsen2.jpg";
import Camara from "../assets/Img/Camara.png";
import Mascara from "../assets/Img/Mascara.png";
import Regleta from "../assets/Img/Regleta.png";

export default function Expo() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="relative flex justify-center items-start h-screen bg-[#5f1919] overflow-hidden snap-start">
        {/* Telón superior izquierdo */}
        <div className="absolute top-0 left-[-50px] w-[53.5%] h-[120px] bg-red-700 rounded-b-[50%] shadow-lg z-[2]"></div>
        {/* Telón superior derecho */}
        <div className="absolute top-0 right-[-50px] w-[53.5%] h-[120px] bg-red-700 rounded-b-[50%] shadow-lg flex justify-end items-center pr-8 z-[2]">
          <MenuDesplegable />
        </div>
        {/* Telón lateral izquierdo */}
        <div className="absolute top-0 left-0 w-[150px] h-full bg-red-800 shadow-lg rounded-r-[60%] z-[1]"></div>
        {/* Telón lateral derecho */}
        <div className="absolute top-0 right-0 w-[150px] h-full bg-red-800 shadow-lg rounded-l-[60%] z-[1]"></div>
        {/* Cono de luz dorada principal (desde el logo hacia abajo) */}
        <div
          className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-[700px] h-[600px] z-[2] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 140deg at 50% 0%, rgba(255,215,0,0.6), rgba(255,215,0,0.1) 60%, transparent 100%)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            filter: "blur(25px)",
            opacity: 0.7,
          }}
        ></div>
        {/* Reflector diagonal izquierdo */}
        <div
          className="absolute top-[-150px] left-0 w-[600px] h-[800px] z-[1] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 45deg at 0% 0%, rgba(255,215,0,0.4), rgba(255,215,0,0.05) 60%, transparent 100%)",
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            transform: "rotate(130deg)",
            filter: "blur(25px)",
            opacity: 0.5,
          }}
        ></div>
        {/* Reflector diagonal derecho */}
        <div
          className="absolute top-[-150px] right-0 w-[600px] h-[800px] z-[1] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 135deg at 100% 0%, rgba(255,215,0,0.4), rgba(255,215,0,0.05) 60%, transparent 100%)",
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            transform: "rotate(-130deg)",
            filter: "blur(25px)",
            opacity: 0.5,
          }}
        ></div>
        {/* Logo en el centro */}
        <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[30vh]">
          <Logo />
        </div>
        {/* Cuadro central con título y texto */}
        <div
          className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5] bg-[#451411a2] rounded-2xl shadow-lg w-[60%] max-w-[700px] text-center border border-[#742020]"
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "40px",
          }}
        >
          <h2
            className="text-[4rem] font-bold mb-4 tracking-[0.15em]"
            style={{
              color: "#f7f068",
              fontFamily: "var(--titulo-secundario)",
            }}
          >
            Expotec
          </h2>
          <div
            className="text-lg leading-relaxed text-center"
            style={{ color: "#fcfefa", fontFamily: "var(--titulo)" }}
          >
            <p style={{ marginBottom: "2rem" }}>
              La Expotec es una <strong>exposición anual de saberes</strong> que
              se realiza en noviembre, donde los alumnos presentan sus
              aprendizajes en distintos <strong>stands</strong>. El evento está
              abierto a la comunidad educativa y al público general, aunque los{" "}
              <strong>menores</strong> deben ingresar{" "}
              <strong>acompañados</strong> por un adulto.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              A partir de la edición <strong>Expotec 2025</strong>, la votación
              al mejor stand se <strong>moderniza</strong>: en lugar de usar
              papeletas en urna, se implementará una{" "}
              <strong>encuesta virtual</strong> accesible mediante{" "}
              <strong>código QR</strong> o desde la página web oficial del
              evento.
            </p>
            <p>
              Esta nueva página web incluirá información general, una{" "}
              <strong>galería de fotos</strong>, la{" "}
              <strong>encuesta de votación</strong> y un{" "}
              <strong>mapa interactivo</strong> que permitirá ubicar y filtrar
              stands fácilmente, además de información sobre las{" "}
              <strong>empresas colaboradoras</strong> y sus espacios.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center min-h-screen bg-[#5f1919] overflow-hidden px-4 py-10 snap-start">
        {/* Imagen de cámara flotando detrás */}
        <img
          src={Camara}
          alt="Cámara flotante"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-20 pointer-events-none z-0 rotate-[15deg] h-[100vh] w-auto"
        />

        <h1
          className="text-[#ffd700] text-[60px] font-bold text-center z-10"
          style={{ marginBottom: "1rem" }}
        >
          Recordemos la Expotec
        </h1>

        {/* Línea con rombos */}
        <div className="flex items-center w-full max-w-[1000px] my-6 z-10">
          <span className="w-3 h-3 bg-[#f7f16a] rotate-45 inline-block"></span>
          <div className="flex-1 h-[2px] bg-[#f7f16a] mx-2"></div>
          <span className="w-3 h-3 bg-[#f7f16a] rotate-45 inline-block"></span>
          <div className="flex-1 h-[2px] bg-[#f7f16a] mx-2"></div>
          <span className="w-3 h-3 bg-[#f7f16a] rotate-45 inline-block"></span>
        </div>

        {/* Marco del carrusel con tamaño definido */}
        <div
          className="w-[1000px] h-[500px] bg-black rounded-2xl p-4 shadow-lg flex flex-col justify-between z-10"
          style={{ marginTop: "2rem" }}
        >
          {/* Aquí va tu carrusel */}
          <div className="flex-1">{/* <Carrusel /> */}</div>

          {/* Caja de texto debajo */}
          <div
            className="bg-black rounded-lg p-4 text-[#ffd700] text-center text-lg"
            style={{ marginTop: "2rem" }}
          >
            Año
          </div>
        </div>
      </section>

      <section
        className="relative flex justify-center items-start h-screen bg-[#5f1919] overflow-hidden p-8 gap-[10rem] snap-start"
        style={{ paddingTop: "8rem" }}
      >
        <img
          src={Mascara}
          alt="Cámara flotante"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-40 pointer-events-none z-0 rotate-[-15deg] h-[100vh] w-auto"
        />
        {/* Contenedor de texto */}
        <div
          className="bg-[#00000091] rounded-2xl p-8 max-w-[600px] text-[#fcfefa] z-10 text-center"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          <h1 className="text-[#f7f068] text-4xl font-bold mb-6 tracking-wide">
            150 años de Brandsen
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p style={{ marginBottom: "2rem" }}>
              La historia de <strong>Brandsen</strong> comenzó en 1865 con la
              instalación de la estación <strong>“Ferrari”</strong> del
              Ferrocarril del Sud, en terrenos de Pedro Ferrari. A su alrededor
              surgieron los primeros comercios y pobladores.
            </p>

            <p style={{ marginBottom: "2rem" }}>
              En 1872, los vecinos pidieron crear un nuevo partido, que se
              concretó el 21 de octubre de 1875 con la Ley Provincial N. ° 994,
              formando el Partido de Brandsen, que incluyó a{" "}
              <strong>Jeppener</strong> y <strong>Altamirano</strong>. El pueblo
              creció entre tambos, ranchos y escuelas rurales, con{" "}
              <strong>Santa Rita</strong> como patrona. En el siglo XX se
              sumaron <strong>Oliden</strong> y{" "}
              <strong>Colonia Samborombón</strong>, trayendo nuevos servicios y
              desarrollo.
            </p>

            <p>
              Hoy, Brandsen conserva su <strong>espíritu rural</strong> mientras
              crecen la ganadería, el comercio, la industria y la vida cultural,
              combinando historia y modernidad en un paisaje de pampa, río y
              caserones antiguos.
            </p>
          </div>
        </div>

        {/* Contenedor de imágenes */}
        <div className="relative ml-16 mt-12 w-[400px] h-[300px] top-[9rem]">
          <img
            src={Brandsen1}
            alt="Brandsen 1"
            className="absolute top-[-90px] left-[-90px] w-[250px] h-[250px] shadow-lg object-cover z-2"
          />
          <img
            src={Brandsen2}
            alt="Brandsen 2"
            className="absolute top-20 left-20 w-[250px] h-[250px] shadow-lg  object-cover"
          />
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center h-screen bg-[#5f1919] overflow-hidden snap-start">
        <img
          src={Regleta}
          alt="Regleta flotante"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-40 pointer-events-none z-0 rotate-[-15deg] h-[100vh] w-auto"
        />
        <h1
          className="text-[#f8d440] text-[60px] font-bold mb-4"
          style={{ marginBottom: "1rem" }}
        >
          Empresas Oferentes
        </h1>

        {/* Línea con rombos */}
        <div className="flex items-center w-full max-w-[1000px] my-6">
          <span className="w-3 h-3 bg-[#f7f16a] rotate-45 inline-block"></span>
          <div className="flex-1 h-[2px] bg-[#f7f16a] mx-2"></div>
          <span className="w-3 h-3 bg-[#f7f16a] rotate-45 inline-block"></span>
          <div className="flex-1 h-[2px] bg-[#f7f16a] mx-2"></div>
          <span className="w-3 h-3 bg-[#f7f16a] rotate-45 inline-block"></span>
        </div>

        <div
          className="flex justify-center items-center gap-8 mt-10 flex-wrap"
          style={{ marginTop: "2rem" }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center w-[280px] h-[400px] bg-black border-[8px] border-red-700 rounded-2xl p-6"
            >
              {/* Borde con puntos dorados */}
              <div className="absolute inset-0 rounded-2xl border-[4px] border-dotted border-yellow-400 pointer-events-none"></div>

              {/* Imagen redonda */}
              <img
                src={`/assets/empresa${i}.png`}
                alt={`Empresa ${i}`}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-yellow-400"
              />

              {/* Texto dorado */}
              <p className="text-yellow-400 text-xl font-semibold mb-4 text-center">
                Empresa {i}
              </p>

              {/* Botón dorado */}
              <button
                className="bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition"
                style={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.2rem",
                  paddingBottom: "0.2rem",
                }}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>

        <h2
          className="text-[#f8d440] text-[34px] font-bold mb-4 text-center"
          style={{ marginTop: "3rem" }}
        >
          ¡Gracias a nuestras empresas oferentes por ser parte de este evento!
        </h2>
      </section>

      <section></section>

      <PieDePagina />
    </div>
  );
}
