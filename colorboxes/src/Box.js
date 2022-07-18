import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( <div onClick={this.props.handleClick} style={{backgroundColor: `${this.props.color}`}} 
        ></div> );
    }
}
 
export default Box;