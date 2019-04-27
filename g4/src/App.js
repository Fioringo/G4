import React, { Component } from 'react';
import {BrowserRouter, browserHistory, Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LeaderBoard from "./Components/LeaderBoard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Header />
              <hr/>
              <Route exact path = "/" component = {Home} exact />
              <Route exact path = "/leaderboard" component = {LeaderBoard} exact />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
