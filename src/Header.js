import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="App-header">
      <div className="Nav" >

        <NavLink to="" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Home</NavLink>

        <NavLink to="ders1" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 1</NavLink>

        <NavLink to="ders2" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 2</NavLink>

        <NavLink to="ders3" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 3</NavLink>

        <NavLink to="ders4" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 4</NavLink>

        <NavLink to="ders5" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 5</NavLink>

        <NavLink to="ders6" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 6</NavLink>

        <NavLink to="ders7" className={({ isActive }) =>
          isActive ? "active App-link" : "App-link"}>Ders 7</NavLink>

      </div>
    </div>
  )
}
