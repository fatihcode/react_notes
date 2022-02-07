import React, { Component } from 'react';

export default class BlogItem extends Component {
  render() {
    // console.log(this.props)
    return <div>

      <p className="blogItem">{this.props.head} - {this.props.desc}</p>

    </div>;
  }
}
