import React, { Component } from 'react';
import PropsItem from './PropsItem';



class Blog extends Component {

  render() {
    let info = [
      { textHead: "Blog 1", textDesc: "Desc 1" },
      { textHead: "Blog 2", textDesc: "Desc 2" },
      { textHead: "Blog 3", textDesc: "Desc 3" }];

    return <div className="border">

      <h2>Blog Component</h2>


      {info.map((item, i) =>
        <PropsItem
          key={i}
          // names="Ali"
          head={item.textHead}
          desc={item.textDesc}
        />)}


    </div>;
  }
}

export default Blog