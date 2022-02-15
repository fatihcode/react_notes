import React, { Component } from 'react';


export default class StyleComp extends Component {

    render() {

        let blue = { color: "blue" }
        return <div className="green border">

            <h2 style={{ color: "red" }}>Style Component</h2>

            <h3 style={blue}>Sub Title</h3>

            <h3 style={{ textDecoration: "underline" }}>Sub Sub Title</h3>

        </div>;
    }
}
