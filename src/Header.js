import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="App-header">
    <div>React Ders Notları </div>
    <div className="Nav" >
       <Link className="App-link" to="ders1">Ders 1</Link>
       <Link className="App-link" to="ders2">Ders 2</Link>
       <Link className="App-link" to="ders3">Ders 3</Link>
       <Link className="App-link" to="ders4">Ders 4</Link>
       <Link className="App-link" to="ders5">Ders 5</Link>
    </div>
 </div>
  )
}
