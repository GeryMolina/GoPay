import React, { Component } from 'react';

class Login extends Component {
    state = {}
    render() {
        return (
            <div>
                <form>
                    <label for="rut">INGRESO RUT</label>
                    <br></br>
                    <input type="text" name="rut"></input>
                    <br></br>
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}

export default Login;