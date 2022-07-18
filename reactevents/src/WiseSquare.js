import React, { Component } from 'react'
import './Wise.css'

class WiseSquare extends Component {
    static defaultProps = {
        messages: ['hata', 'wewe', 'sema', 'mara', 'nyingi']
    }
    dispenseWisdom() {
        let { messages } = this.props
        let idx = Math.floor(Math.random() * messages.length)
        alert(messages[idx])
    }
    render() {
        return (
            <div className='Wise'>
                <div  onMouseEnter={this.dispenseWisdom.bind(this)}>Wise</div>
                <div  onMouseLeave={()=>this.dispenseWisdom()}>Wise</div>
            </div>
        );
    }
}

export default WiseSquare;