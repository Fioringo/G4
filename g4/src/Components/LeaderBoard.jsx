import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import '../Styles/LeaderBoard.css'

class LeaderBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [
                {
                    "email": "some1@gmail.com",
                    "name": "Paul",
                    "score": 96
                },
                {
                    "email": "some2@gmail.com",
                    "name": "Jake",
                    "score": 69
                },
                {
                    "email": "some3@gmail.com",
                    "name": "Pewdiepie",
                    "score": 399
                },
                {
                    "email": "some4@gmail.com",
                    "name": "Matthew",
                    "score": 23
                },
                {
                    "email": "some5@gmail.com",
                    "name": "Ferdi",
                    "score": 21
                },
                {
                    "email": "some6@gmail.com",
                    "name": "David",
                    "score": 8
                },
                {
                    "email": "some7@gmail.com",
                    "name": "Connie",
                    "score": 12
                },
                {
                    "email": "some8@gmail.com",
                    "name": "Nicki",
                    "score": 22
                },
            ],
            error: "",
            errorMessage: "",
            errorStatus: ""
        }
    }

    componentDidMount(){
        axios.get('api/leaders')
        .then(response => {
            this.setState({
                people: response
            })
        })
        .catch(error => {
            this.setState({
                error: error,
                errorMessage: "Could not retrieve data",
                errorStatus: true
            })
        })
    }

    render() {
        let leaderBoard = this.state.people.map(a => {
            return <tr className="LBrow" key={a.email.toString()}>
                        <td className="LBname">
                            {a.name}
                        </td>
                        <td className="LBscore">
                            {a.score}
                        </td>
                    </tr>
        })
        return (
                <div className="LeaderBoard">
                    Leader Board
                    <table className="PeopleList">
                        {leaderBoard}
                    </table>
                </div>
        );
    }
}

export default LeaderBoard;
