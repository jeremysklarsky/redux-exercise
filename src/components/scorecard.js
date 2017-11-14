import React, { Component } from 'react';

class Scorecard extends Component {

  render() {
    let {team, count} = this.props;
    return(
      <div className="scorecard">
        <span>{team}: {count}</span>
      </div>
    )
  }
}

export default Scorecard
