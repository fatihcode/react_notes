import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page2() {
  let params = useParams()
  return (
    <div>
      <h3>Page2</h3>
      <p> User Id: {params.personId}</p>

    </div>
  )
}


//Class Comp link parametre yakalama
// import React, { Component } from 'react'

// export default class Ders6 extends Component {
//   render() {
//     console.log(window.location.pathname);
//     let params = window.location.pathname.split("/").pop()
//     return (
//       <div>Ders6: {params}</div>
//     )
//   }
// }
