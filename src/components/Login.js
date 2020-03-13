import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../components/Main/Logo'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }




    render() {
        return (
            <div className="App">
                <Logo/>
            <form onSubmit={this.onSubmit}>
                <label area-label='Ingresa tu Rut'>Ingresa RUT
                    <br></br>
                    <input area-label='Campo para ingresar rut' type="text" id="rut" value={this.state.value} required onChange={this.handleChange} name="rut" />
                </label>
                <br></br>
                <button area-label='Boton enviar' type="submit" value="submit" className="btnBigGreen"><NavLink to="/2" className="noDecoration">Enviar</NavLink></button>
            </form>
            </div>
        );
    }

}

export default Login;