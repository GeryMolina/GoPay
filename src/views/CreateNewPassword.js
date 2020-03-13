import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Logo from '../components/Main/Logo'

const CreateNewPassword = () => {
    
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
            area-label={item}
            key={item}>
                {item}
        </button>)
    })


    return (
        <div className="App">
            <Logo />
            <form className="center">
                <h3 area-label='Crea tu Codigo de Seguridad'>Crea tu PIN de seguridad </h3>
                <br></br>
                <div>
                    <input area-label='Campo para digitar primer numero' defaultValue={num1}/>
                    <input area-label='Campo para digitar segundo numero' defaultValue={num2} />
                    <input area-label='Campo para digitar tercer numero' defaultValue={num3} />
                    <input area-label='Campo para digitar cuarto numero' defaultValue={num4} />

                </div>
                <div>{btns}</div>
             
                <NavLink to="/5" className="noDecoration"><button className="btnBigGreen"></button></NavLink>
            </form>

            
        </div>
    );

}

export default CreateNewPassword;