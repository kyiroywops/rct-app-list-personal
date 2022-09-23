import React from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../elementos/ElementosDeFormulario';

const FormularioGasto = () => {
    return ( 
        <Formulario>
            <ContenedorFiltros>
                <p> a</p>
                <p>a</p>
            </ContenedorFiltros>

            <div>
                <Input 
                    type="text"
                    name="nombre"
                />
            </div>
        </Formulario>
     );
}
 
export default FormularioGasto;