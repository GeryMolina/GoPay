import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import Logo from '../components/Main/Logo'

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
                <form className="center">
                    <label for="rut">Ingresa clave cajero</label>
                    <br></br>
                    <div className="containerCasilleros">
                    <input type="number" min="0" max="9" name="key" className="casilleros"></input>
                    <input type="number" min="0" max="9" name="key" className="casilleros"></input>
                    <input type="number" min="0" max="9" name="key" className="casilleros"></input>
                    <input type="number" min="0" max="9" name="key" className="casilleros"></input>
                    <input defaultValue={num1}/>
                    <input defaultValue={num2} />
                    <input defaultValue={num3} />
                    <input defaultValue={num4} />
                    </div>
                    <br></br>
                     <div>{btns}</div>
                    <button onClick="" className="btnBigGreen"><NavLink to="/4" className="noDecoration">ENVIAR</NavLink></button>
                </form>
            </div>
        );
 }


export default RegistrationPassword;