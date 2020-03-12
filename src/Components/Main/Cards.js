import React from 'react';
import Agua from '../../Assets/Agua.png';
import Luz from '../../Assets/Luz.png';
// import Gas from '../../Assets/Gas.png';
import Celular from '../../Assets/Celular.png';
import TV from '../../Assets/Telecomunicaciones.png'


const Cards=() =>{
  return(
     <section area-label='Servicios Disponibles'>
        <div area-label='Tarjeta agua'>
            <h4 area-label='Agua'>Agua</h4>
            <img src={Agua} alt='Gota de Agua'/>
            <p area-label='Inscribir Cuenta'>Inscribe tu Cuenta</p>
        </div>
        <div area-label='Tarjeta Luz'>
            <h4 area-label='Luz'>Luz</h4>
            <img src={Luz} alt='Imagen de sol'/>
            <p area-label='Inscribir Cuenta'>Inscribe tu Cuenta</p>
            
        </div>
        <div area-label='Tarjeta Gas'>
            <h4 area-label='Gas'>Gas</h4>
            {/* <img src={Gas} alt='Llama de fuego'/> */}
            <p area-label='Inscribir Cuenta'>Inscribe tu Cuenta</p>
           
        </div>
        <div area-label='Tarjeta Celular'>
            <h4 area-label='Celular'> Celular</h4>
            <img src={Celular} alt='Celular'/>
            <p area-label='Inscribir Cuenta'>Inscribe tu Cuenta</p>
            
        </div>
        <div area-label='Tarjeta Telecomunicaciones'>
            <h4 area-label='Telecomunicaciones'>Telecomunicaciones</h4>
            <img src={TV} alt='Imagen de TV'/>
            <p area-label='Inscribir Cuenta'>Inscribe tu Cuenta</p>
        </div>
    </section>
  )
}
export default Cards;