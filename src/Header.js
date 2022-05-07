import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="App-header">
      <div className="Nav" >

        <NavLink to="react_notes/" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Home</NavLink>

        <NavLink to="react_notes/ders1" className="App-link">Ders 1</NavLink>

        <NavLink to="react_notes/ders2" className="App-link">Ders 2</NavLink>

        <NavLink to="react_notes/ders3" className="App-link">Ders 3</NavLink>

        <NavLink to="react_notes/ders4" className="App-link">Ders 4</NavLink>

        <NavLink to="react_notes/ders5" className="App-link">Ders 5</NavLink>

        <NavLink to="react_notes/ders6" className="App-link">Ders 6</NavLink>

        <NavLink to="react_notes/ders7" className="App-link">Ders 7</NavLink>

      </div>
    </div>
  )
}
