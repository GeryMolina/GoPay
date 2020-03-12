import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Main/Logo'
import '../App.css'

class AccountsSelection extends Component {
    state = {}
    render() {
        return (
            <div className="containerSelection">
                <Logo />
                <button className="btnOptions"><NavLink to="/3" className="noDecoration">Cuenta Vista</NavLink></button>
                <button className="btnOptions"><NavLink to="/3" className="noDecoration">Cuenta Corriente</NavLink></button>
            </div >
        );
    }
}

export default AccountsSelection;