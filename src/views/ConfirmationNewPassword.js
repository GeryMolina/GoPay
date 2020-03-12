import React, { Component } from 'react';
import '../App.css';
import Logo from '../components/logo'

class ConfirmationNewPassword extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Logo />
                <form>
                    <label for="rut">CONFIRMACIÓN PIN DE SEGURIDAD </label>
                    <br></br>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <input type="number" min="0" max="9" name="key"></input>
                    <br></br>
                    <button onClick="">Enviar</button>
                </form>
            </div>
        );
    }
}

export default ConfirmationNewPassword;