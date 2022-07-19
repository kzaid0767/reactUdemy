import React, { Component } from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = { nums: [1,2,3,3,4,5,5] }
        this.remove = this.remove.bind(this)
    }
    
    remove(num){
        this.setState(st=>({
            nums: st.nums.filter(n=>n !== num)
        }))
    }

    render() { 
        let nums = this.state.nums.map((n,idx)=><NumberItem value={n} remove={this.remove}  key={idx} />)
        return ( 
            <div>
                <h1>First Number List</h1>
                <ul>{nums}</ul>
            </div>
         );
    }
}
 
export default NumberList;