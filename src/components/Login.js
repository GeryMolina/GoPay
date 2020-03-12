import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    onSubmit = e => {
        //evita que se recargue la pagina
        event.preventDefault();

    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>INGRESO RUT
                    <br></br>
                    <input type="text" id="rut" value={this.state.value} required onChange={this.handleChange} name="rut" />
                </label>
                <br></br>
                <button type="submit" value="submit"><NavLink to="/2">ENVIAR</NavLink></button>
            </form>
        );
    }

}

export default Login;