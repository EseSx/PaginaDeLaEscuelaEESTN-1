import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home";
import CicloBasico from "./pages/CicloBasico";
import Programacion from "./pages/Programacion";
import Electromecanica from "./pages/Electromecanica";
import Quimica from "./pages/Quimica";
import EPS from "./pages/EPS";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import Expo from "./pages/Expo";
import InscripcionesYAnexos from "./pages/InscripcionesYAnexos";

import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ciclo_basico" element={<CicloBasico />} />
          <Route path="/programacion" element={<Programacion />} />
          <Route path="/electromecanica" element={<Electromecanica />} />
          <Route path="/quimica" element={<Quimica />} />
          <Route path="/eps" element={<EPS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expo" element={<Expo />} />
          <Route
            path="/inscripcionesyanexos"
            element={<InscripcionesYAnexos />}
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
