import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import LeaderBoard from './LeaderBoard'
// import News from './News'

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: null
        }
    }

    render() {
        return (
                <div className="News">
                    <div className="Content">
                        {/* <News /> */}
                    </div>
                    <div className="LBpanel">
                        <LeaderBoard />
                    </div>
                </div>
        );
    }
}

export default News;
