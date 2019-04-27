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

    this.socket.on('intervalModifyFakeLeaderboard', (entry) => {
      let players = this.state.players;
      Object.keys(entry).forEach((points) => {
        if (players.hasOwnProperty(points)) {
          players[points].push(entry[points]);
        } else {
          players[points] = [entry[points]];
        }
      });
      Object.keys(players).forEach((points) => {
        players[points].forEach((player, i) => {
          let ableToUpdate = Math.random();
          if (ableToUpdate > 0.75) {
            let newPoints = parseInt(points) + Math.floor(Math.random() * Math.floor(1000));
            players[newPoints] = [players[points][i]];
            players[points].splice(i, 1);
            if (players[points].length === 0) {
              delete players[points];
            }
          }
        });
      });
      this.setState({players});
    });

    this.socket.on('updateExistingEntries', (players) => {
      this.setState({players});
    });

  }

  componentDidMount = () => {
    this.socket.emit('createFakeLeaderboard');
  }

  onClickSetRand = () => {
    //this.socket.emit('createRandomEntry', (this.state.players));
    this.socket.emit('updateExistingEntries', (this.state.players));
  }

  render() {
    let players = this.state.players;
    let playerList = Object.keys(players).map((points) => <PlayerCard name={players[points]} points={points}/>);
    let topPlayers = [];
    for (let i=playerList.length-1; i>=0; i--) {
      topPlayers.push(playerList[i]);
    }

    return (
      <div onClick={this.onClickSetRand}>
        {topPlayers}
      </div>
    );
  }
}


export default LeaderBoard;
