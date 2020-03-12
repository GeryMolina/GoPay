import React, {useState} from 'react';
import '../../styles.css'

const FilterWater = ()=>{
    
    const list= ['Aguas Andinas', 'Aguas de Altiplano', 'Aguas Chañar', 'Aguas Antofagasta','Tratacal', 'Aguas del Valle', 'Coopagua Santo Domingo', 'Sasipa', 'Esval', 'Larapinta S.A', 'Sepra', 'Smapa','Essbio', 'Aguas Nuevosur', 'Aguas Araucanía', 'Aguas Decima', 'Essal', 'Aguas Patagonia', 'Aguas Magallanes', 'Aguas San Pedro', 'Aguas San Isidro' ]
    const [filter, setFilter]= useState('');
    return(
        <div>
            <input placeholder='buscar...' list='water' area-label='Ingresa Empresa' value={filter} onChange={(e)=> setFilter(e.target.value)}/>

             <datalist id='water'>
                {list.map((name) =>{
                    if(filter.toLowerCase().length !== 0){
                        if(name.toLowerCase().includes(filter)){
                            return <option>{name}</option>;
                        }else{
                            return null;
                        }
                    }
                    return null
                })}
            </datalist>
        </div>
    )
}
export default FilterWater;
//Gas
// const list =['Gas Sur', 'Gas Valpo', 'Gasco', 'Intergas', 'Abastible', 'Metrogas']
//Celular
//const list =['Claro', 'Entel PCS', 'Movistar', 'Wom', 'Virgin', 'VTR']
//Telecomunicaciones
// const list =['Claro Hogar', 'Entel Hogar', 'Movistar Hogar', 'VTR']