import React, { Component } from 'react'

class AccountsSelection extends Component {
    state = {}
    render() {
        return (
            <div>
                <Logo />
                <button>CUENTA VISTA/RUT</button>
                <button>CUENTA CORRIENTE</button>
            </div>
        );
    }
}

export default AccountsSelection;