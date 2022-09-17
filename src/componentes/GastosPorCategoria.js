import React from 'react';
import Helmet from 'react-helmet';
import {Header, Titulo} from '../elementos/Header';
import BtnRegresar from '../elementos/BtnRegresar';

const GastosPorCategoria = () => {
    return ( 
      <>
        <Helmet>
            <title>Gastos por Categoría</title>
        </Helmet>

        <Header> 
           
            <BtnRegresar/>
            <Titulo>Administrador de Gastos</Titulo>
           
           

        </Header>
     </>
     ); 
}
 
export default GastosPorCategoria;