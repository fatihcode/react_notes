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