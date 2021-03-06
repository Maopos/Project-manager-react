import "./App.css";
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Proyectos from "./components/proyects/Proyectos";
import Footer from "./components/layout/Footer";
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";
import AlertaState from "./context/alertas/AlertaState";
import AuthState from "./context/autenticacion/AuthState";
import tokenAuth from "./config/token";
import RutaPrivada  from "./components/rutas/RutaPrivada";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
              <Footer></Footer>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
