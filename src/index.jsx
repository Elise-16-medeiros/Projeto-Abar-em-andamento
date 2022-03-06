import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Principal from './Components/Principal/Principal';
import Configurations from './Components/Configurations/Configurations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Solicitacao from './Components/Solicitacao/Solicitacao';
import Mensagem from './Components/Mensagem/Mensagem';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Principal />}></Route>
        <Route path="/Configurations" element={<Configurations />}></Route>
        <Route path="/Solicitacao" element={<Solicitacao />}></Route>
        <Route path="/Mensagem" element={<Mensagem />}></Route>
        <Route path="/Perfil" element={<Perfil />}></Route>
        <Route path="/Sair" element={<Entrada/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



