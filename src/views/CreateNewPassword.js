import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Logo from '../components/logo'

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
            <form>
                <h3 htmlFor="rut">CREA TU PIN DE SEGURIDAD </h3>
                <br></br>
                <div>{data}</div>
                <div>{btns}</div>
                

                <button><NavLink to="/5">ENVIAR</NavLink></button>
            </form>
        </div>
    );

}

export default CreateNewPassword;