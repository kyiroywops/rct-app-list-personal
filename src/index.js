import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import IniciarSesion from './componentes/IniciarSesion';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import ListaDeGastos from './componentes/ListaDeGastos';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/logo.png';
import Fondo from './elementos/Fondo';
import {AuthProvider} from './contextos/AuthContext';



WebFont.load ({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});
 
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Helmet>
      <link rel="shortcut-icon" href={favicon} type="image/x-icon" />
      <tittle>Control de Gastos</tittle>
      
    </Helmet>

    <AuthProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Contenedor>
            <Routes>
              <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
              <Route path="/crear-cuenta" element={<RegistroUsuarios/>}/>
              <Route path="/" element={<App/>}/>
              <Route path="/lista" element={<ListaDeGastos/>}/>
              <Route path="/editar/:id" element={<EditarGasto/>}/>
              <Route path="/categorias" element={<GastosPorCategoria/>}/>
              <Route path="*" element={<h1>404</h1>}/>

            </Routes>
          </Contenedor>
        </BrowserRouter>

        <Fondo/>

      </React.StrictMode>
    </AuthProvider>
    
  </>
);

