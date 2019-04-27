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

  createEntry = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charLen = alphabet.length;
    let name = '';
    for ( let i = 0; i < 10; i++ ) {
      name += alphabet.charAt(Math.floor(Math.random() * charLen));
    }
    let points = Math.floor(Math.random() * Math.floor(10000));
    let entry = {};
    entry[points] = name;
    return entry;
  }

  socket.on('createRandomEntry', (fakeLeaderboard) => {
    entry = createEntry();
    Object.keys(entry).forEach((points) => {
      if (fakeLeaderboard.hasOwnProperty(points)) {
        fakeLeaderboard[points].push(entry[points]);
      } else {
        fakeLeaderboard[points] = [entry[points]];
      }
    });
    socket.emit('modifyFakeLeaderboard', fakeLeaderboard);
  });

  socket.on('updateExistingEntries', (fakeLeaderboard) => {
    Object.keys(fakeLeaderboard).forEach((points) => {
      fakeLeaderboard[points].forEach((player, i) => {
        let ableToUpdate = Math.random();
        if (ableToUpdate > 0.75) {
          let newPoints = parseInt(points) + Math.floor(Math.random() * Math.floor(1000));
          fakeLeaderboard[newPoints] = [fakeLeaderboard[points][i]];
          fakeLeaderboard[points].splice(i, 1);
          if (fakeLeaderboard[points].length === 0) {
            delete fakeLeaderboard[points];
          }
        }
      });
    });
    socket.emit('updateExistingEntries', fakeLeaderboard);
  });

  setInterval(() => {
    socket.emit('intervalModifyFakeLeaderboard', createEntry());
  }, 2000);

});
