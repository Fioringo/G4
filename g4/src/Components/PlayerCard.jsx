import React, { Component } from 'react';

class PlayerCard extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.name}-{this.props.points}
        </div>
      </div>
    );
  }
}

export default PlayerCard;
