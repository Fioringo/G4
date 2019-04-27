import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: null
        }
    }

    render() {
        return (
                <div className="header">
                    G4 - Header
                </div>
        );
    }
}

export default Header;
