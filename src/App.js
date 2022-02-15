import Blog from './comp1/Blog';
import BlogForm from './comp1/BlogForm';
import StateCounter from './comp2/StateCounter';
import StyleComp from './comp2/StyleComp';
import Footer from './comp2/Footer';
import Lifecycle from './comp3/Lifecycle';
import UserList from './comp4/UserList';
import PersonAdd from './comp4/PersonAdd';
import PersonList from './comp4/PersonList';
import PostList from './comp4/PostList';



export default function App() {

  return (
    <div className="App">

      <div className="App-header">React Ders Notları</div>

      {/* 
        <h2>Ders 1 - Components</h2>

        <BlogForm />
        <Blog />
       */}

      {/* ------------------------------ */}

      {/*
        <h2>Ders 2 - Style</h2>

        <StateCounter />
        <StyleComp />
        <Footer />
       */}

      {/* ------------------------------ */}

      {/* 
        <h2>Ders 3 - Lifecycle</h2>

        <Lifecycle/>
       */}

      {/* ------------------------------ */}

        <h2>Ders 3 - Fetch</h2>

        <UserList />
        <PersonAdd />
        <PersonList />
        <PostList />

      {/* ------------------------------ */}


      

    </div>
  );
}