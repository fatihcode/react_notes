import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="App-header">
      <div className="Nav" >

        <NavLink className={({ isActive }) =>
          isActive ? "activeClassName" : "App-link"} to="ders1">Ders 1</NavLink>

        <NavLink className={({ isActive }) =>
          isActive ? "activeClassName" : "App-link"} to="ders2">Ders 2</NavLink>

        <NavLink className={({ isActive }) =>
          isActive ? "activeClassName" : "App-link"} to="ders3">Ders 3</NavLink>

        <NavLink className={({ isActive }) =>
          isActive ? "activeClassName" : "App-link"} to="ders4">Ders 4</NavLink>

        <NavLink className={({ isActive }) =>
          isActive ? "activeClassName" : "App-link"} to="ders5">Ders 5</NavLink>

        <NavLink className={({ isActive }) =>
          isActive ? "activeClassName" : "App-link"} to="ders6">Ders 6</NavLink>

      </div>
    </div>
  )
}
