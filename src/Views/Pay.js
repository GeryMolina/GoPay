import React from 'react';
import Check from '../Assets/check.png'
import { NavLink } from 'react-router-dom';

const Pay = ()=>{
    return(


        <div className="containerPay">
            <h1 area-label='Pago Exitoso'>Pago Exitoso</h1>
            <img src={Check} alt='Pago Realizado'/>
            <h4 area-label='Monto Pagado'>Monto Pagado</h4>
            <h4 area-label='12.890 pesos'>$12.890</h4>
            <NavLink to="/6" className="noDecoration"><button  className="btnBigGreen"></button></NavLink>
        </div>
    )
}

export default Pay;