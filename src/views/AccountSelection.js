import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/logo'
import '../App.css'

class AccountsSelection extends Component {
    state = {}
    render() {
        return (
            <div>
                <Logo />
                <button><NavLink to="/3">CUENTA VISTA/RUT</NavLink></button>
                <button><NavLink to="/3">CUENTA CORRIENTE</NavLink></button>
            </div >
        );
    }
}

export default AccountsSelection;