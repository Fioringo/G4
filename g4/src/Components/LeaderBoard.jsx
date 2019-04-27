import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import PlayerCard from './PlayerCard';

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {}
    }

    this.socket = socketIOClient('localhost:8000');

    this.socket.on('createFakeLeaderboard', (players) => {
      this.setState({players});
      this.socket.emit('modifyFakeLeaderboard', players, {'9999': 'dude'});
    });

    this.socket.on('modifyFakeLeaderboard', (players) => {
      this.setState({players})
    });

  }

  componentDidMount = () => {
    this.socket.emit('createFakeLeaderboard');
  }

  render() {
    let players = this.state.players;
    let playerList = Object.keys(players).map((points) => <PlayerCard name={players[points]} points={points}/>);


    return (
      <div>
        {playerList}
      </div>
    );
  }
}


export default LeaderBoard;
