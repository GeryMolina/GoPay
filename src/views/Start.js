import React, { Component } from 'react';
import Logo from '../components/logo'
import Login from '../components/Login'


class Start extends Component {
    state = {}
    render() {
        return (
            <div>
                <Logo />
                <Login />
            </div>
        );
    }
}

export default Start;
