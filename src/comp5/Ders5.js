import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'


export default function Ders5() {

  return (
    <>
    <h2>[Ders 5] - Router</h2>
      <Link className="subLink" to='page1'>Page 1</Link>
      <Link className="subLink" to='page2/525252'>Page 2</Link>

      <hr />

      <Routes>
        <Route path="page1" element={<Page1/>}>Page1</Route>
        <Route path="page2/:personId" element={<Page2/>}>Page2</Route>

      </Routes>
    </>
  )
}


