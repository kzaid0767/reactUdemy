import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "pink"
        }
    }

    changeColor(newcolor) {
        this.setState({color: newcolor})
    }

    static defaultProps = {
        colors: ['red', 'yellow', '#e056fd', 'blue', 'green']
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c }
                    return <button style={colorObj} onClick={this.changeColor.bind(this,c)}>Click here!</button>
                })}
            </div>
        );
    }
}

export default Button;