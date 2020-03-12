import React from 'react';
import Check from '../Assets/check.png'

const Pay = ()=>{
    return(


        <div className="containerPay">
            <h1 area-label='Pago Exitoso'>Pago Exitoso</h1>
            <img src={Check} alt='Pago Realizado'/>
            <h4 area-label='Monto Pagado'>Monto Pagado</h4>
            <h4 area-label='12.890 pesos'>$12.890</h4>

        </div>
    )
}

export default Pay;