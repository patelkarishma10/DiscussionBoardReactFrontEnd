import React, { Component } from 'react';

export class NavBar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </div>
        )
    }
}