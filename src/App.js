import React from 'react';
import Helmet from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/Header';

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Administrador de Gastos</title>
      </Helmet>

      <Header> 
        <ContenedorHeader>
          <Titulo>Administrador de Gastos</Titulo>
          <ContenedorBotones>
            <button>
              Categorias
            </button>
            <button>
              Lista de gastos
            </button>
          </ContenedorBotones>
        </ContenedorHeader>

      </Header>
    </>
  );
}
 
export default App;
