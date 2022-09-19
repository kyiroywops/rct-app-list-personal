import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header';
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from '../imagenes/registro.svg';
import styled from 'styled-components';



const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {

    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [password2, establecerPassword2] = useState('');

    const handleChange = (e) => {
        switch(e.target.name){
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break;
        }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            console.log('Correo no válido');
            return;
        }
        if(correo === '' || password === '' || password2 === ''){
            console.log('Todos los campos son obligatorios');
            return;
        }
        if(password !== password2){
            console.log('Las contraseñas no coinciden');
            return;
        }
    }

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

         <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={correo}
                    onChange={handleChange}

                
                />
                 <Input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value = {password}
                    onChange = {handleChange}
                />
                <Input 
                    type="password"
                    placeholder="Repetir la contraseña"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>

                </ContenedorBoton>

         </Formulario>


         

        </>
    );
}
 
export default RegistroUsuarios;