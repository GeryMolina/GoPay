import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import Logo from '../components/logo'

const RegistrationPassword= ()=> {
    
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [num3, setNum3] = useState(null);
    const [num4, setNum4] = useState(null)
    const btns=[];
    [1,2,3,4,5,6,7,8,9,0].forEach(item =>{
        btns.push(
            <button onClick = {e => {
                e.preventDefault();
                if(num1 == null){
                    setNum1(e.target.value)
                }else if(num2 == null){
                    setNum2(e.target.value)
                }else if(num3 == null){
                    setNum3(e.target.value)
                }else if(num4 == null){
                    setNum4(e.target.value)
                }
            
            }}
            value= {item}
            key={item}>
                {item}
        </button>)
    })

    return (
            <div className="App">
                <Logo />
                
                    <h3>INGRESO CLAVE CAJERO </h3>
                    <br></br>
                <div>
                    <input defaultValue={num1}/>
                    <input defaultValue={num2} />
                    <input defaultValue={num3} />
                    <input defaultValue={num4} />

                </div>
                <div>{btns}</div>
                    <button onClick=""><NavLink to="/4">ENVIAR</NavLink></button>
                
            </div>
        );
 }


export default RegistrationPassword;