import { useState } from "react";

import Carrusel from "../components/Carrusel";
import MenuDesplegable from "../components/MenuDesplegable";

import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      <div className="logoLogin">logo</div>
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
        <label htmlFor="" className="seccionFormulario">
          <p className="peticion">Contraseña</p>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputFormulario"
          />
        </label>
      </div>
      <button className="botonFormulario" onClick={handleLogin}>
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
