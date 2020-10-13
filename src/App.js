import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import preingreso1 from "./pages/preingreso1";
import Inicio from "./pages/Inicio";
import Login2 from "./pages/Login/Login2";
import Nosotros from "./pages/Nosotros";
import Preguntas from "./pages/Preguntas";
import BasededatosP from "./pages2/BasededatosP";
import Inicio1 from "./pages2/Inicio1";
import Login1 from "./pages2/Login1";
import Consultar from "./pages/Consultar";
import Layout from "./Layout";
import Medicamento from "./pages/Medicamento";
import Disponibles from "./pages/Disponibles";
import Pqr from "./pages/Pqr";
import Login3 from "./pages2/Login3/Login3";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Preingreso1" component={preingreso1} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Login1" component={Login1} />
        <Route exact path="/Login2" component={Login2} />
        <Route exact path="/Login3" component={Login3} />
        <Route exact path="/BasededatosP" component={BasededatosP} />
        <Route exact path="/Inicio1" component={Inicio1} />
        <Route exact path="/Login1" component={Login1} />

        <Layout>
          <Route exact path="/Inicio" component={Inicio} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Preguntas" component={Preguntas} />
          <Route exact path="/Consultar" component={Consultar} />
          <Route exact path="/Medicamento" component={Medicamento} />
          <Route exact path="/Disponibles" component={Disponibles} />
          <Route exact path="/Pqr" component={Pqr} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
