import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header';
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from '../imagenes/login.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
    return (  
        <>
         <Helmet>
                <title>Iniciar sesión</title>
         </Helmet>
         <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar sesión</Titulo>
                    <div>
                        <Boton to="/crear-cuenta">Crear Cuenta</Boton>
                    </div>  
                </ContenedorHeader>
         </Header>

         <Formulario>
                <Svg />
                <Input 
                    type="email"
                    placeholder="Email"
                    name="email"
                
                />
                 <Input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                />
              
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Ingresar</Boton>

                </ContenedorBoton>

         </Formulario>


         

        </>
    );
}
 
export default InicioSesion;