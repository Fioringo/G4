import React, { Component } from 'react';
import {BrowserRouter, browserHistory, Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Leaderboard from "./Components/LeaderBoard"
import SignUp from "./Components/SignUp"
import Login from "./Components/LogIn"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="mainContainer">
          <BrowserRouter>
            <div>
              <Header />
              <hr/>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/leaderboard" component = {Leaderboard} />
              <Route exact path = "/signup" component = {SignUp} />
              <Route exact path = "/login" component = {Login} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;