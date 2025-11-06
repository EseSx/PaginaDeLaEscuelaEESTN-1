// Expo.jsx
// Importaciones de componentes
import PieDePagina from "../components/PieDePagina";
import Logo from "../components/Logo";
import MenuDesplegable from "../components/MenuDesplegable";
import Carrusel from "../components/Carrusel";
import { useEstrellas } from "../components/useEstrellas";

// Importaciones de imágenes
import Brandsen1 from "../assets/Img/Brandsen1.jpg";
import Brandsen2 from "../assets/Img/Brandsen2.jpg";
import Camara from "../assets/Img/Camara.png";
import Mascara from "../assets/Img/Mascara.png";
import Regleta from "../assets/Img/Regleta.png";
import Pochoclos from "../assets/Img/Pochoclos.png";

// Importaciones de estilos
import "../styles/Estrellas.css";
import "../styles/Expo.css";

export default function Expo() {
  // Generar estrellas usando el hook personalizado
  const estrellas = useEstrellas(80);

  return (
    // Contenedor principal de la página Expo
    <div className="expoContainer">
      <div class="elemento-superior">
        <MenuDesplegable />
      </div>
      {/* Fondo de estrellas */}
      <div className="estrellas">
        {estrellas.map((e, i) => (
          <div
            key={i}
            className="estrella"
            style={{
              top: `${e.top}%`,
              left: `${e.left}%`,
              width: `${e.size}px`,
              height: `${e.size}px`,
              animationDelay: `${e.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Seccion 1 */}
      <section className="primeraSeccion">
        <img
          src={Pochoclos}
          alt="Pochoclos flotante"
          className="imgFlotante pochocloFlotante"
        />
        {/* Telón superior izquierdo */}
        <div className="telonHorizontal telonSuperiorIzquierdo"></div>
        {/* Telón superior derecho */}
        <div className="telonHorizontal telonSuperiorDerecho"></div>
        {/* Telón lateral izquierdo */}
        <div className="telonVertical telonLateralIzquierdo"></div>
        {/* Telón lateral derecho */}
        <div className="telonVertical telonLateralDerecho"></div>
        {/* Cono de luz dorada principal (desde el logo hacia abajo) */}
        <div className="conoLuzPrincipal"></div>
        {/* Reflector diagonal izquierdo */}
        <div className="conoLuzDiagonalIzquierdo"></div>
        {/* Reflector diagonal derecho */}
        <div className="conoLuzDiagonalDerecho"></div>
        {/* Logo en el centro */}
        <div className="expoLogoContainer">
          <Logo />
        </div>
        {/* Cuadro central con título y texto */}
        <div className="expoTextoContainer">
          <h2 className="expoTitulo">Expotec</h2>
          <div className="expoDescripcion">
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

      <section className="segundaSeccion">
        {/* Imagen de cámara flotando detrás */}
        <img
          src={Camara}
          alt="Cámara flotante"
          className="imgFlotante camaraFlotante"
        />

        <h1 className="expoTituloSecundario">Recordemos la Expotec</h1>

        {/* Línea con rombos */}
        <div className="contenedorRomboLinea">
          <span className="rombo"></span>
          <div className="romboLinea"></div>
          <span className="rombo"></span>
          <div className="romboLinea"></div>
          <span className="rombo"></span>
        </div>

        {/* Marco del carrusel con tamaño definido */}
        <div className="marcoCarrusel">
          {/* Aquí va tu carrusel */}
          <div className="flex-1">{/* <Carrusel /> */}</div>

          {/* Caja de texto debajo */}
          <div className="textoMarcoCarrusel">Año</div>
        </div>
      </section>

      <section className="terceraSeccion">
        <img
          src={Mascara}
          alt="Cámara flotante"
          className="imgFlotante mascaraFlotante"
        />
        {/* Contenedor de texto */}
        <div
          className="brandsenTextoContainer"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          <h1 className="brandsenTitulo">150 años de Brandsen</h1>

          <div className="brandsenDescripcion">
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
        <div className="brandsenImagenesContainer">
          <img src={Brandsen1} alt="Brandsen 1" className="brandsenImagen1" />
          <img src={Brandsen2} alt="Brandsen 2" className="brandsenImagen2" />
        </div>
      </section>

      <section className="cuartaSeccion">
        <img
          src={Regleta}
          alt="Regleta flotante"
          className="imgFlotante regletaFlotante"
        />
        <h1 className="empresasOferentesTitulo">Empresas Oferentes</h1>

        {/* Línea con rombos */}
        <div className="contenedorRomboLinea">
          <span className="rombo"></span>
          <div className="romboLinea"></div>
          <span className="rombo"></span>
          <div className="romboLinea"></div>
          <span className="rombo"></span>
        </div>

        <div className="empresasOferentesContainer">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="empresaOferenteCard">
              {/* Borde con puntos dorados */}
              <div className="bordePunteado"></div>

              {/* Imagen redonda */}
              <img
                src={`/assets/empresa${i}.png`}
                alt={`Empresa ${i}`}
                className="empresaOferenteImagen"
              />

              {/* Texto dorado */}
              <p className="empresaOferenteNombre">Empresa {i}</p>

              {/* Botón dorado */}
              <button
                className="empresaOferenteBoton"
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

        <h2 className="agradecimientoEmpresasTexto">
          ¡Gracias a nuestras empresas oferentes por ser parte de este evento!
        </h2>
      </section>

      {/* Aca va a ir el mapa cuando este terminado */}
      <section></section>

      <PieDePagina />
    </div>
  );
}
