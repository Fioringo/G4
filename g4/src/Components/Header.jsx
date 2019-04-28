import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import '../Styles/Header.css'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,

        }
    }

    logout = () => {

    }

    render() {
        let menu
        if(this.state.loggedIn){
            menu = <div className="lo">
                <button className="LogOut" onClick={this.logout}>Log Out</button>
            </div>
        } else {
            menu = <div className="lisu">
                <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                <NavLink className="navlink" to="login">Log In</NavLink>
            </div>
        }
        return (
                <div className="header">
                    <div className="Title">
                        G4
                    </div>
                    <div className="Menu">
                        {menu}
                    </div>
                </div>
        );
    }
}

export default Header;
