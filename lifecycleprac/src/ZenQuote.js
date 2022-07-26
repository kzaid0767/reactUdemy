import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css'

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false }
    }

    componentDidMount() {
        axios.get("https://github.com/zen").then(response => {
            console.log(response)
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true })
                }.bind(this),
                3000
            )
        })
    }

    componentDidUpdate() {
        console.log('inside component did update')
    }

    render() {
        return (<div>
            {this.state.isLoaded ? (
                <div>
                    <h1>This thing says...</h1>
                    <p>{this.state.quote}</p>
                </div>
            ) : (
                <div className='loader' />
            )}

        </div>);
    }
}

export default ZenQuote;