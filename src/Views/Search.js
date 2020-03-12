import React from 'react';
import Logo from '../components/Main/Logo'
import FilterWater from '../components/search/filterWater';


const SearchWater = ()=>{
    return(
        <div>
            <Logo/>
            <h4 area-label='Empresa'>Empresa</h4>
            <FilterWater/>
            <h4 area-label='Número de Cliente'>Numero de Cliente</h4>
            <input area-label='Ingresa número de cliente'/>
            <button area-label='Botón registrar'>Registrar</button>
        </div>
    )
}

export default SearchWater;