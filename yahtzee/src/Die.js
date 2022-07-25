import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {

  }
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "red" : "#07e907" }}
        onClick={this.handleClick}
      >
        <i className={this.props.rolling ? `Die-rolling ${this.props.word} ` : this.props.word} />
      </button>
    );
  }
}

export default Die;
