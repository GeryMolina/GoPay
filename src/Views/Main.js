import React from 'react';
import { NavLink } from 'react-router-dom';

import Cards from '../components/Main/Cards'


const Main= ()=>{
    return(
        <div className="containerMain">
            <Cards/>

            <h3>Total $ 12.980</h3>
            <NavLink to="/7"><button area-label='Ir a pago' className="btnBig">Ir al pago</button></NavLink>

        </div>
    )
}
export default Main;
