import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Logo from '../components/Main/Logo'

const CreateNewPassword = () => {
    const [data, setData] = useState('');
    const btns=[];
    [1,2,3,4,5,6,7,8,9,0].forEach(item =>{
        btns.push(
            <button onClick = {e => {
                e.preventDefault();
            setData(data + e.target.value)
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
                <h3 htmlFor="rut">Crea tu PIN de seguridad </h3>
                <br></br>
                <div>{data}</div>
                <div>{btns}</div>
                

                <button className="btnBigGreen"><NavLink to="/5" className="noDecoration">ENVIAR</NavLink></button>
            </form>
        </div>
    );

}

export default CreateNewPassword;