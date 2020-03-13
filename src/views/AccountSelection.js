import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Main/Logo'
import '../App.css'

class AccountsSelection extends Component {
    state = {}
    render() {
        return (
            <div className="containerSelect">
                <Logo />
                <NavLink to="/3" className="btnOptions"> <button area-label='Botón cuenta vista' className="texto" >Cuenta Vista</button></NavLink>
                <NavLink to="/3" className="btnOptions"> <button area-label='Botón Cuenta Corriente' className="texto">Cuenta Corriente</button></NavLink>
            </div >
        );
    }
}

export default AccountsSelection;