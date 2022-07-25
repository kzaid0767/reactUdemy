import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(!this.props.score){
      this.props.doScore()
    }
  }

  render() {
    return (
      <tr className={this.props.score?"RuleRow RuleRow-disabled" :"RuleRow RuleRow-active"} onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name} - {!this.props.score && this.props.verbage}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;