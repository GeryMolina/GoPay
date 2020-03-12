import React from 'react';
import Check from '../Assets/check.png'

const Pay = ()=>{
    return(
        <div className="containerPay">
            <h1>Pago Exitoso</h1>
            <img src={Check} alt='Pago Realizado'/>
            <h4>Monto Pagado</h4>
            <h3>$12.890</h3>
        </div>
    )
}

export default Pay;