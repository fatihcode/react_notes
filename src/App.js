import logo from './logo.svg'
import './App.css';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import State from './components/State';
import StyleComp from './components/StyleComp';
import BlogItem from './components/BlogItem';


export default function App() {
  return (
    <div className="App">

      <h1>React Ders Notları</h1>
      <hr />

      <State />

      <BlogForm />

      <StyleComp />

      

      <Blog />

      {/* <img src={logo} className="App-logo" /> */}

    </div>
  );
}