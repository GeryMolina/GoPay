import React from 'react';
import FilterWater from '../Components/Search/filterWater';


const SearchWater = ()=>{
    return(
        <div className="containerSearch">
            <h4>Empresa</h4>
            <FilterWater/>
            <h4>Numero de Cliente</h4>
            <input />
            <button className="btnBig">Registrar</button>
        </div>
    )
}

export default SearchWater;