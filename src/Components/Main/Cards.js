import React from 'react';
import '../../styles.css';
import Agua from '../../Assets/Agua.png';
import Luz from '../../Assets/Luz.png';
// import Gas from '../../Assets/Gas.png';
import Celular from '../../Assets/Celular.png';
import TV from '../../Assets/Telecomunicaciones.png'



const Cards=() =>{
  return(
     <section className="containerCards">
        <div className="cards">
            <h4>Agua</h4>
            <img src={Agua} alt='Agua'/>
            <p>$ 12.980</p>
        </div>
        <div className="cards">
            <h4>Luz</h4>
            <img src={Luz} alt='Luz'/>
            
        </div>
        <div className="cards">
            <h4>Gas</h4>
            {/* <img src={Gas} alt='Gas'/> */}
           
        </div>
        <div className="cards">
            <h4>Celular</h4>
            <img src={Celular} alt='Celular'/>
            
        </div>
        <div className="cards">
            <h4>Hogar</h4>
            <img src={TV} alt='Telecomunicaciones'/>
            
        </div>
    </section>
  )
}
export default Cards;