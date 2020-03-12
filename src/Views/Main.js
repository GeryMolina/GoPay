import React from 'react';
import Cards from '../Components/Main/Cards'

const Main= ()=>{
    return(
        <div className="containerMain">
            <Cards/>
            <h3>Total $ 12.980</h3>
            <button className="btnBig">Ir al pago</button>
        </div>
    )
}
export default Main;
