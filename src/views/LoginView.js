import React, { Component } from 'react';
import Logo from '../components/logo'
import Login from '../components/Login'
import '../App.css'


class Start extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Logo />
                <Login />
            </div>
        );
    }
}

export default Start;


