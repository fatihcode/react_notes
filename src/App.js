import { BrowserRouter, Routes, Route } from "react-router-dom"
import Ders1 from "./comp1/Ders1";
import Ders2 from "./comp2/Ders2";
import Ders3 from "./comp3/Ders3";
import Ders4 from "./comp4/Ders4";
import Ders5 from "./comp5/Ders5";
import Ders6 from "./comp6/Ders6";
import Ders7 from "./comp7/Ders7";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Page404 from "./Page404";

export default function App() {

   return (
      <BrowserRouter>

         <Header />

         <div className="App">

            <Routes>

               <Route path='react_notes' element={<Main />} />
               <Route path='react_notes/ders1' element={<Ders1 />} />
               <Route path='react_notes/ders2' element={<Ders2 />} />
               <Route path='react_notes/ders3' element={<Ders3 />} />
               <Route path='react_notes/ders4' element={<Ders4 />} />
               <Route path='react_notes/ders5/*' element={<Ders5 />} />
               <Route path='react_notes/ders6' element={<Ders6 />} />
               <Route path='react_notes/ders7' element={<Ders7 />} />

               <Route path='*' element={<Page404 />} />

            </Routes>

         </div>

         <Footer />

      </BrowserRouter>
   );
}