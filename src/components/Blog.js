import React, { Component } from 'react';
import BlogItem from './BlogItem';

class Blog extends Component {


  render() {
    let blogInfos = [
      { textHead: "Blog 1", textDesc: "Desc 1" },
      { textHead: "Blog 2", textDesc: "Desc 2" },
      { textHead: "Blog 3", textDesc: "Desc 3" }];


    return <div className="border">

      <h2>Props Component</h2>
    

      {blogInfos.map((item, i) => <BlogItem key={i} head={item.textHead} desc={item.textDesc} />)}


    </div>;
  }
}

export default Blog