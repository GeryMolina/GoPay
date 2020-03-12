import React from 'react';
import Agua from '../../Assets/Agua.png';
import Luz from '../../Assets/Luz.png';
// import Gas from '../../Assets/Gas.png';
import Celular from '../../Assets/Celular.png';
import TV from '../../Assets/Telecomunicaciones.png'


const Cards=() =>{
  return(
     <section>
        <div>
            <h4>Agua</h4>
            <img src={Agua} alt='Agua'/>
            
        </div>
        <div>
            <h4>Luz</h4>
            <img src={Luz} alt='Luz'/>
            
        </div>
        <div>
            <h4>Gas</h4>
            {/* <img src={Gas} alt='Gas'/> */}
           
        </div>
        <div>
            <h4>Celular</h4>
            <img src={Celular} alt='Celular'/>
            
        </div>
        <div>
            <h4>Telecomunicaciones</h4>
            <img src={TV} alt='Telecomunicaciones'/>
            
        </div>
    </section>
  )
}
export default Cards;