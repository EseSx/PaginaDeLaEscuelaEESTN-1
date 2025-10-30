import { useState } from "react";

import MenuDesplegable from "../components/MenuDesplegable";
import Logo from "../components/Logo";

import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError("Credenciales incorrectas");
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      window.location.href = "/admin";
    } catch (err) {
      setError("Error en el servidor");
    }
  };

  return (
    <div className="contenedorLogin">
      <MenuDesplegable buttonClass="loginStyle" />
      <div className="logoLogin">
        <Logo />
      </div>
      <h2 className="texto">Iniciar sesión</h2>
      <div className="contenedorFormulario">
        <label htmlFor="" className="seccionFormulario">
          <p className="peticion">Usuario</p>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputFormulario"
          />
        </label>
        <label className="seccionFormulario">
          <p className="peticion">Contraseña</p>
          <div className="inputPasswordContainer">
            <input
              type={mostrarPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputFormulario"
            />
            <span
              className="material-symbols-outlined iconoOjo"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              title={
                mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {mostrarPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
        </label>
      </div>
      <button className="botonFormulario" onClick={handleLogin}>
        Login
      </button>
      {error && <p className="errorMensaje">{error}</p>}
    </div>
  );
}
