import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import '../Styles/SignUp.css'

class SignUp extends Component {
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
            "username": this.state.username,
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
                <div className="SignUp">
                    <div className="Title">
                        Sign Up
                    </div>
                    <form className="SignupForm" onSubmit={this.handleSubmit}>
                            <input name="text" type="text" onChange={this.handleChange} placeholder="Foo Bar"/>
                            <input name="email" type="email" onChange={this.handleChange} placeholder="foo@bar.com"/>
                            <input name="password" type="password" onChange={this.handleChange} placeholder="•••••••••••••"/>
                            <input type="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
