import React from 'react';
import Logo from '../components/Main/Logo'

const Detail=()=>{
    return(
        <div>
            <Logo/>
            <div>
                <h4 area-label='Número de Cliente'>Número de Cliente</h4>
                <p area-label='2209584-4'>2209584-4</p>
                <h4 area-label='Fecha de Vencimiento'>Fecha de Vencimiento</h4>
                <p area-label='12.890 pesos'>$12.890</p>
            </div>
            <div>
                <h4 area-label='Total: 12.890 pesos'>Total: $12.890</h4>
            </div>
            <div area-label='Seccion Botones'>
                <button area-label='Botón Atras'>Atrás</button>
                <button area-label='Botón Pagar'>Pagar</button>
            </div>
        </div>
    )
}

export default Detail;