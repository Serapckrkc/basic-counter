import React, { Component } from 'react'
import './Counter.css';
 class Counter extends Component {
    state = {
        number:0
    }
    decrement = () =>{
        this.setState({
            number: -- this.state.number
        })
    }
    increment = () =>{
        this.setState({
            number: ++ this.state.number
        })
    }

  render() {
    return (
      <div className='Counter-container'>
        <h1>Counter</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
export default Counter;