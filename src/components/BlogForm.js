import React, { Component } from 'react';

export default class BlogForm extends Component {

    clickButton() {
        alert("click")
    }


    render() {
        
        const clickArrow = () => { console.log("Arrow Tıklandı") }
        
        return <div className="red border">
            <h2>Form Component</h2>
            <p>
                <button onClick={this.clickButton}>Send</button>
                <button onClick={clickArrow}>Send Arow</button>
            </p>
        </div>;
    }
}
