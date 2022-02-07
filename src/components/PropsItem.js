import React, { Component } from 'react';
// import PropTypes from "prop-types";



export default class PropsItem extends Component {

  static defaultProps = { names: "User" }

  render() {

    const { head, desc } = this.props

    return <div className="red border">

      <h4>Props Component</h4>
      <p>{this.props.names} - {head} - {desc}</p>

    </div>;
  }
}
