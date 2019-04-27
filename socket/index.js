const express = require('express');
const app = express();
const socketio = require('socket.io');

const PORT = 8000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`); // eslint-disable-line no-console
});

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('createFakeLeaderboard', () => {
    console.log('making fake leaderBoard')
    let fakeLeaderboard = {
      '9001': ['Such'],
      '8888': ['Matt'],
      '7777': ['Andrey'],
      '6666': ['David'],
      '0': ['awsldnalws']
    };
    socket.emit('createFakeLeaderboard', fakeLeaderboard);
  });

  socket.on('modifyFakeLeaderboard', (fakeLeaderboard, newPlayer) => {
    Object.keys(newPlayer).forEach((points) => {
      if (fakeLeaderboard.hasOwnProperty(points)) {
        fakeLeaderboard[points].push(newPlayer[points]);
      } else {
        fakeLeaderboard[points] = [newPlayer[points]];
      }
    });
    socket.emit('modifyFakeLeaderboard', fakeLeaderboard);
  });

  socket.on('createRandomEntry', (fakeLeaderboard) => {
    let points = Math.floor(Math.random() * Math.floor(10000));
    let entry = {};
    entry[points] = 'dude';
    Object.keys(entry).forEach((points) => {
      if (fakeLeaderboard.hasOwnProperty(points)) {
        fakeLeaderboard[points].push(entry[points]);
      } else {
        fakeLeaderboard[points] = [entry[points]];
      }
    });
    socket.emit('modifyFakeLeaderboard', fakeLeaderboard);
  });

  setInterval(() => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charLen = alphabet.length;
    let name = '';
    for ( var i = 0; i < 10; i++ ) {
      name += alphabet.charAt(Math.floor(Math.random() * charLen));
    }
    let points = Math.floor(Math.random() * Math.floor(10000));
    let entry = {};
    entry[points] = name;
    socket.emit('intervalModifyFakeLeaderboard', entry);
  }, 2000);

});
