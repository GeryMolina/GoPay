import React from 'react';

import FilterWater from '../components/Search/filterWater';


const SearchWater = ()=>{
    return(

        <div className="containerSearch">
            
            <h4 area-label='Empresa'>Empresa</h4>
            <FilterWater/>
            <h4 area-label='Número de Cliente'>Numero de Cliente</h4>
            <input area-label='Ingresa número de cliente'/>
            <button area-label='Botón registrar' className="btnBig">Registrar</button>

        </div>
    )
}

export default SearchWater;