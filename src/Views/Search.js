import React from 'react';
import Logo from '../Components/Main/Logo'
import FilterWater from '../Components/Search/filterWater';


const SearchWater = ()=>{
    return(
        <div>
            <Logo/>
            <h4>Empresa</h4>
            <FilterWater/>
            <h4>Numero de Cliente</h4>
            <input />
            <button>Registrar</button>
        </div>
    )
}

export default SearchWater;