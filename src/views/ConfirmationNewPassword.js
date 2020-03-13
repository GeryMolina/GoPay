import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Logo from '../components/Main/Logo'

const ConfirmationNewPassword = () => {
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [num3, setNum3] = useState(null);
    const [num4, setNum4] = useState(null)
    const btns = [];
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach(item => {
        btns.push(
            <button className="numbers" onClick={e => {
                e.preventDefault();
                if (num1 == null) {
                    setNum1(e.target.value)
                } else if (num2 == null) {
                    setNum2(e.target.value)
                } else if (num3 == null) {
                    setNum3(e.target.value)
                } else if (num4 == null) {
                    setNum4(e.target.value)
                }

            }}
                value={item}
                area-label={item}
                key={item}>
                {item}
            </button>)
    })

    return (
        <div className="App3">
            <Logo />
            <form className="center">
                <label area-label='Confirmación de codigo de seguridad'>Confirmación PIN de seguridad</label>
                <br></br>
                <div className="containerCasilleros">
                    <input area-label='Campo para digitar primer numero' defaultValue={num1} className="casilleros" />
                    <input area-label='Campo para digitar segundo numero' defaultValue={num2} className="casilleros" />
                    <input area-label='Campo para digitar tercer numero' defaultValue={num3} className="casilleros" />
                    <input area-label='Campo para digitar cuarto numero' defaultValue={num4} className="casilleros" />

                </div>
                <div className="containerNumbers">{btns}</div>
                <NavLink to="/6"><button className="transparent"></button></NavLink>
            </form>
        </div>
    );
}

export default ConfirmationNewPassword;