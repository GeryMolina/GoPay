import React from 'react';
import { NavLink } from 'react-router-dom';


const Select = ()=>{
    return(

        <div area-label='Seleccion de Botones' className="containerSelect">
            <button area-label='Numero de Cliente' className="btnOptions"><NavLink to='/8'>Numero de Cliente</NavLink></button>
            <button area-label='Codigo QR' className="btnOptions">Codigo QR</button>

        </div>
    )
}
export default Select;