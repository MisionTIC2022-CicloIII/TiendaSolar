import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Context
import { AuthProvider } from "./context/AuthProvider";
import { UsuariosProvider } from "./context/UsuariosProvider";
// import { ProductosProvider } from "./context/ProductosProvider";
// Layout (LayoutAuth)
import LayoutAuth from "./Layout/LayoutAuth";
import RutaProtegida from "./Layout/RutaProtegida";
// pages (usuarios)
import Login from "./Pages/Login";
import Registro from "./Pages/usuario/Registro";
import OlvidePassword from "./Pages/usuario/OlvidePassword";
import Confirmar from "./Pages/usuario/Confirmar";
// pages (usuarios protegidas)
import Perfil from "./Pages/usuario/Perfil";
import CambiarPassword from "./Pages/usuario/CambiarPassword.jsx";
// pages (productos)
// import ListaProductos from "./pages/productos/ListaProductos";
// import FormularioProductos from "./pages/productos/FormularioProductos";
// import DetalleProducto from "./pages/productos/DetalleProducto";

function App() {
  return (
    <Router>
      <AuthProvider>
        <UsuariosProvider>
          {/* <ProductosProvider> */}
            <Routes>

              {/* RUTAS PUBLICAS */}
              <Route path="/" element={<LayoutAuth />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Registro />} />
                <Route path="olvide-password" element={<OlvidePassword />} />
                <Route path="confirmar/:id" element={<Confirmar />} />
              </Route>

              {/* Rutas Protegidas */}

              <Route path="/perfil" element={<RutaProtegida />}>
                <Route index element={<Perfil />} />
                <Route path="cambiar-password" element={<CambiarPassword />} />
              </Route>
            </Routes>
          {/* </ProductosProvider> */}
        </UsuariosProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
