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
                <NavLink to="/3" className="noDecoration"> <button area-label='Botón cuenta vista' className="btnOptions">Cuenta Vista</button></NavLink>
                <NavLink to="/3" className="noDecoration"> <button area-label='Botón Cuenta Corriente' className="btnOptions">Cuenta Corriente</button></NavLink>
            </div >
        );
    }
}

export default AccountsSelection;