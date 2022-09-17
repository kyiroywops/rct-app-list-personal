import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/Header';

const RegistroUsuarios = () => {
    return (  
        <>
         <Helmet>
                <title>Registro de Usuarios</title>
         </Helmet>
         <Header>
                <ContenedorHeader>
                    <Titulo>Registro de Usuarios</Titulo>
                </ContenedorHeader>
         </Header>
         

        </>
    );
}
 
export default RegistroUsuarios;