import Logo from "./Logo";
import WhatsApp from "../assets/Digital_Glyph_White.png";
import Facebook from "../assets/Facebook_Logo_Secondary.png";
import Instagram from "../assets/Instagram_Glyph_White.png";

export default function PieDePagina() {
  const email = "bibliotecaeest1brandsen@gmail.com";
  const direccion =
    'Escuela de Educación Secundaria Técnica Nro1 "Rafael Cantón"';

  const handleEmailClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const handleMapsClick = () => {
    const query = encodeURIComponent(direccion);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  return (
    <footer
      className="bg-[#202541] flex flex-row h-[200px] divide-x divide-solid divide-white"
      style={{ padding: "1rem" }}
    >
      <div className="flex-1 flex items-center justify-center">
        <Logo />
      </div>
      <div
        className="flex-1 flex items-center justify-center"
        style={{ paddingInline: "7rem" }}
      >
        <h1 className="text-white">
          <span
            onClick={handleEmailClick}
            className="cursor-pointer hover:text-gray-300"
          >
            <strong>E-mail:</strong> {email}
          </span>
          <br />
          <span
            onClick={handleMapsClick}
            className="cursor-pointer hover:text-gray-300"
          >
            <strong>Direccion:</strong> Calle 119 e/ 11 y 12 (1980) Brandsen,
            Buenos Aires Argentina
          </span>
          <br /> <strong>Contacto:</strong> 2223-442591
        </h1>
      </div>
      <div
        className="flex-1 flex items-center justify-around text-white"
        style={{ paddingLeft: "3rem" }}
      >
        <img src={WhatsApp} alt="WhatsApp" className="h-1/3" />
        <img src={Instagram} alt="Instagram" className="h-1/3" />
        <img src={Facebook} alt="Facebook" className="h-1/3" />
      </div>
    </footer>
  );
}
