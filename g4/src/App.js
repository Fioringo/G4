import React, { Component } from 'react';
import {BrowserRouter, browserHistory, Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home"

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
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;