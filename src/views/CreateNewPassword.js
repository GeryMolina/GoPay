import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Logo from '../components/logo'

class CreateNewPassword extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Logo />
                <form>
                    <label for="rut">CREA TU PIN DE SEGURIDAD </label>
                    <br></br>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <br></br>
                    <button onClick=""><NavLink to="/5">ENVIAR</NavLink></button>
                </form>
            </div>
        );
    }
}

export default CreateNewPassword;