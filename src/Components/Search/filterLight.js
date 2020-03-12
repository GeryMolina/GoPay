import React, {useState} from 'react';

const FilterLigth = ()=>{
    
    const list= ['CGE', 'Enel ', 'Chilquinta', 'EDELAYSEN','EDELMAG', 'EEPA', 'Energia Casablanca', 'Frontel', 'Litoral', 'Luz Linares', 'Luz Osorno', 'Luz Parral','SAESA']
    const [filter, setFilter]= useState('');
    return(
        <div>
            <input placeholder='buscar...' value={filter} onChange={(e)=> setFilter(e.target.value)}/>
        <ul>
            {list.map((name) =>{
                if(filter.toLowerCase().length !== 0){
                    if(name.toLowerCase().includes(filter)){
                        return <li>{name}</li>;
                    }else{
                        return null;
                    }
                }
                return null
            })}
        </ul>
        </div>
    )
}
export default FilterLigth;
