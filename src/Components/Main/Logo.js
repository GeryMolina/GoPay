import React from 'react';
import Logo from '../../Assets/Logo.png'
import '../../styles.css'

const logo =()=>{
    return(
        <div className="containerLogo">
            <img src={Logo} alt='Logo GoPay'/>
        </div>
    )
}

export default logo;