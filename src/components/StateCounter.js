import React, { Component } from 'react';
import "../App.css"

export default class StateCounter extends Component {

    state = { name: "John Wick", age: 32 }

    countPlus = () => { this.setState({ age: ++this.state.age }) };
    countMinus = () => { this.setState({ age: --this.state.age }) };

    render() {


        return <div className="blue border">

            <h2>State Component</h2>

            <p>Name: {this.state.name} - Age: {this.state.age}</p>

            <button onClick={this.countMinus}>-</button>
            <button onClick={this.countPlus}>+</button>

        </div>;
    }
}
