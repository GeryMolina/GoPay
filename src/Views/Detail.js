import React from 'react';

const Detail=()=>{
    return(
        <div className="containerDetail">
            <div className="details">
                <h4>Número de Cliente</h4>
                <p>2209584-4</p>
                <h4>Fecha de Vencimiento</h4>
                <p>$12.890</p>
            </div>
            <div>
                <h4>Total: $10.000</h4>
            </div>
            <div>
                <button>Atrás</button>
                <button>Pagar</button>
            </div>
        </div>
    )
}

export default Detail;