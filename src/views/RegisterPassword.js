import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import Logo from '../components/logo'

class RegistrationPassword extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Logo />
                <form>
                    <label for="rut">INGRESO CLAVE CAJERO </label>
                    <br></br>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <br></br>
                    <button onClick=""><NavLink to="/4">ENVIAR</NavLink></button>
                </form>
            </div>
        );
    }
}

export default RegistrationPassword;