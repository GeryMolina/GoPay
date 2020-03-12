import React from 'react';

const Detail = () => {
    return (
        <div className="containerDetail">
            <div className="details">
                <h4>Número de Cliente</h4>
                <p>2209584-4</p>
                <h4>Fecha de Vencimiento</h4>
                <p>$12.890</p>
                <div className="total">
                    <h4>Total: $12.980</h4>
                </div>
            </div>

            <div className="containerBtn">
                <button className="btnBorder">Atrás</button>
                <button className="btnSolid">Pagar</button>
            </div>
        </div>
    )
}

export default Detail;