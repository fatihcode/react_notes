import logo from './logo.svg'
import './App.css';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import StateCounter from './components/StateCounter';
import StyleComp from './components/StyleComp';
import Footer from './components/Footer';



export default function App() {

  return (
    <div className="App">

      <h1>React Ders Notları</h1>

      <StateCounter />

      <BlogForm />

      <StyleComp />

      <Blog />
      <hr />
      <Footer />

      {/* <img src={logo} className="App-logo" /> */}

    </div>
  );
}