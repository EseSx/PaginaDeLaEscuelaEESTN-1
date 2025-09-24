import { useState } from "react";

import "../styles/Noticias.css";

const noticias = [
  {
    titulo: "Noticia 1",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper dignissim lorem a maximus. Fusce id sapien eu purus dignissim ornare. Phasellus maximus magna in lacus sagittis lobortis. Mauris sed vulputate nisl, sit amet.",
  },
  {
    titulo: "Noticia 2",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper nibh ut sapien tincidunt posuere. Mauris blandit, tellus condimentum fermentum hendrerit, nisi urna vestibulum lacus, sit amet commodo dui dui nec nisi. Vivamus pharetra, ipsum in mattis fringilla, quam justo sagittis sapien, nec tempor ante tellus quis mauris. Morbi pulvinar vehicula imperdiet. Phasellus porttitor nec libero in dignissim. Curabitur interdum at augue in finibus. Nam enim magna, viverra quis augue id, tempus malesuada urna. Cras suscipit vulputate purus hendrerit fermentum. Aliquam consequat faucibus condimentum. Aliquam in laoreet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus vitae massa id auctor.Vivamus rutrum ullamcorper placerat. Sed auctor laoreet iaculis. Phasellus ultrices lacinia dignissim. Vestibulum dui ex, imperdiet ac ultricies bibendum, mollis ac mi. Vestibulum ipsum turpis, ultricies eget tincidunt a, condimentum quis nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut non odio posuere, viverra nibh eu, faucibus orci. Duis vehicula leo id elit lacinia, vitae mollis nisi sollicitudin. In sed enim fringilla, iaculis orci vitae, faucibus purus. Nunc tincidunt turpis non justo dignissim facilisis. In a augue eros. Integer dictum sagittis orci, nec venenatis est euismod ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper justo felis, ut hendrerit nisl tempor sed. Nullam mattis quis magna vel vestibulum. Quisque fringilla dictum ex ut pharetra.",
  },
  {
    titulo: "Noticia 3",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit enim et auctor efficitur. Donec pretium pulvinar eros, ut elementum sem imperdiet nec. Ut vehicula, enim non tempus aliquet, dui velit volutpat ipsum, id bibendum sem arcu.",
  },
  {
    titulo: "Noticia 4",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo turpis mattis nibh ornare, id pharetra libero bibendum. Cras semper tempor odio et pharetra. Suspendisse consequat a nisi bibendum mollis. Donec maximus, eros sit amet tempor semper.",
  },
  {
    titulo: "Noticia 5",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sem gravida, auctor tortor faucibus, suscipit lacus. Nunc pretium odio eu odio ullamcorper iaculis. Vivamus finibus vitae enim at blandit. Aliquam erat volutpat. Phasellus quam.",
  },
  {
    titulo: "Noticia 6",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar condimentum dolor, sed mollis quam fringilla tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    titulo: "Noticia 7",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed lobortis mauris, id congue tellus. Pellentesque viverra elit et ornare dapibus. In eget mauris semper, fermentum mauris quis, aliquet velit. Duis eget.",
  },
  {
    titulo: "Noticia 8",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus neque bibendum tempor. Pellentesque sed ornare ex. Maecenas maximus eleifend magna id condimentum. Maecenas pellentesque consequat sollicitudin. Vestibulum bibendum, sem blandit porta placerat, nunc.",
  },
  {
    titulo: "Noticia 9",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec luctus diam. Quisque fringilla dapibus lacus, id facilisis sem egestas at. Praesent dolor tellus, euismod at varius eu, sollicitudin non.",
  },
  {
    titulo: "Noticia 10",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra, eros in ullamcorper fringilla, justo ante cursus enim, id viverra lacus mi feugiat mi. Aliquam in viverra urna. Pellentesque ut lobortis ipsum. Aliquam viverra neque a tellus convallis, eget.",
  },
];

function Noticias() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);
  const [cantidadDeNoticias, setCantidadDeNoticias] = useState(6);

  const abrirNoticia = (noticia) => {
    setNoticiaSeleccionada(noticia);
    document.body.style.overflow = "hidden";
  };

  const cerrarNoticia = () => {
    setNoticiaSeleccionada(null);
    document.body.style.overflow = "auto";
  };

  function mostrarMasNoticias() {
    setCantidadDeNoticias((prevCantidad) => {
      const nuevaCantidad = prevCantidad + 3;
      return nuevaCantidad > noticias.length ? noticias.length : nuevaCantidad;
    });
  }

  const botonVisible = cantidadDeNoticias < noticias.length;

  return (
    <section className="seccionNoticias" id="noticias">
      <h2 className="tituloSeccion">Noticias y Novedades</h2>

      <div className="barraDestacadosNoticias">
        <div className="contenedorDesplazamiento">
          {noticias.slice(0, cantidadDeNoticias).map((noticia, index) => (
            <div
              key={index}
              className="contenidoNoticias"
              onClick={() => abrirNoticia(noticia)}
            >
              <h3 className="textoNoticia">{noticia.titulo}</h3>
              <p className="textoNoticia">{noticia.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {botonVisible && (
        <button onClick={mostrarMasNoticias} className="mostrarMas">
          Mostrar más
        </button>
      )}

      {/* Modal desplegable */}
      {noticiaSeleccionada && (
        <div className="contenedorDesplegable" onClick={cerrarNoticia}>
          <div
            className="contenidoNoticias desplegable"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{noticiaSeleccionada.titulo}</h3>
            <p>{noticiaSeleccionada.texto}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Noticias;
