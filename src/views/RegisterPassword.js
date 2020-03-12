import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import Logo from '../components/Main/Logo'

class RegistrationPassword extends Component {
    state = {}
    render() {
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
                    </div>
                    <br></br>
                    
                    <button onClick="" className="btnBigGreen"><NavLink to="/4" className="noDecoration">ENVIAR</NavLink></button>
                </form>
            </div>
        );
    }
}

export default RegistrationPassword;