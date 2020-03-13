import React from 'react';
import { NavLink } from 'react-router-dom';


const Select = () => {
    return (

        <div area-label='Seleccion de Botones' className="containerSelect">
            <NavLink to='/8' className="btnOptions">
            <button area-label='Numero de Cliente' className="texto">Número de Cliente</button>
            </NavLink>
            <button area-label='Codigo QR' className="btnOptions">Código QR</button>
        </div>
    )
}
export default Select;