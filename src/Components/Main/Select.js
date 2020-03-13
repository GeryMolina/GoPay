import React from 'react';
import { NavLink } from 'react-router-dom';


const Select = ()=>{
    return(

        <div area-label='Seleccion de Botones' className="containerSelect">
          <NavLink to='/8'>  <button area-label='Numero de Cliente' className="btnOptions">Numero de Cliente</button></NavLink>
            <button area-label='Codigo QR' className="btnOptions">Codigo QR</button>

        </div>
    )
}
export default Select;