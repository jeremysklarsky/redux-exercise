import React, { Component } from 'react';
import Scorecard from './scorecard';

class Scoreboard extends Component {

  render() {
    let teams = Object.keys(this.props.score);
    return(
      <div className="scoreboard">
        {teams.map((team, i)=>{
          return (
            <Scorecard key={i} team={team} count={this.props.score[team]}/>    
          )
        })}
      </div>
    )
  }
}

export default Scoreboard
