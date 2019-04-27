import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: null
        }
    }

    render() {
        return (
                <div className="Home">
                    Home
                </div>
        );
    }
}

export default Home;
