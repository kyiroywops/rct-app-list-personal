import React from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from '../elementos/Header';
import Boton from '../elementos/Boton';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from '../imagenes/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
    return (  
        <>
         <Helmet>
                <title>Registro de Usuarios</title>
         </Helmet>
         <Header>
                <ContenedorHeader>
                    <Titulo>Crear cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
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
                    placeholder="Repetir la contraseña"
                    name="password2"
                />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>

                </ContenedorBoton>

         </Formulario>


         

        </>
    );
}
 
export default RegistroUsuarios;