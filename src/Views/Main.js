import React from 'react';
import { NavLink } from 'react-router-dom';

import Cards from '../components/Main/Cards'


const Main= ()=>{
    return(
        <div className="containerMain">
            <Cards/>

            <h3>Total $ 12.980</h3>
            <button area-label='Ir a pago' className="btnBig"><NavLink to="/7">Ir al pago</NavLink></button>

        </div>
    )
}
export default Main;
