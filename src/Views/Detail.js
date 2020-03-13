import React from 'react';
import { NavLink } from 'react-router-dom';


const Detail = () => {
    return (
        <div className="containerDetail">
            <div className="details">
                <h4 area-label='Número de Cliente'>Número de Cliente</h4>
                <p area-label='2209584-4'>2209584-4</p>
                <h4 area-label='Fecha de Vencimiento'>Fecha de Vencimiento</h4>
                <p>$12.890</p>
                <div className="total">
                    <h4 area-label='12.890 pesos'>Total: $12.980</h4>
                </div>
            </div>
            <div area-label='Seccion Botones' className="containerBtn">
                <NavLink to='/8'><button area-label='Botón Atras' className="btnBorder">Atrás</button></NavLink>
                <NavLink to='/10'><button area-label='Botón Pagar' className="btnSolid">Pagar</button></NavLink>
                <h4 area-label='Total: 12.890 pesos'>Total: $12.890</h4>
            </div>
        </div>
    )
}

export default Detail;