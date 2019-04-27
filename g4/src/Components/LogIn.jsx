import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import '../Styles/SignUp.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let body = {
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post('', body)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="generalCenter">
                <div className="Login">
                    <div className="Title">
                        Login
                    </div>
                    <form className="LoginForm" onSubmit={this.handleSubmit}>
                            <input name="email" type="email" onChange={this.handleChange} placeholder="foo@bar.com"/>
                            <input name="password" type="password" onChange={this.handleChange} placeholder="•••••••••••••"/>
                            <input type="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
