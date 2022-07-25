import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          word = {this.props.words[d-1]}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx}
          rolling={this.props.rolling && !this.props.locked[idx]} />
      )}
    </div>
  }
}

export default Dice;