import React, { Component } from 'react';
import './Box.css'
class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='Box' onMouseLeave={this.props.handleClick} style={{ backgroundColor: `${this.props.color}` }}
        ></div>);
    }
}

export default Box;