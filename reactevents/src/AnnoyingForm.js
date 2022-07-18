import React, { Component } from 'react';

class AnnoyingForm extends Component {
    handleKey(e) {
        if(e.keyCode === 13) {
            alert('my fav key')
        }
    }
    render() {
        return (
            <div>
                <h3>Type something here</h3>
                <textarea onKeyDown={this.handleKey} />
            </div>
        );
    }
}

export default AnnoyingForm;