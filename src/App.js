import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ders1 from "./comp1/Ders1";
import Ders2 from "./comp2/Ders2";
import Ders3 from "./comp3/Ders3";
import Ders4 from "./comp4/Ders4";
import Ders5 from "./comp5/Ders5";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {

   return (
      <BrowserRouter>

         <Header />

         <div className="App">

            <Routes>
               <Route path='ders1' element={<Ders1 />} />
               <Route path='ders2' element={<Ders2 />} />
               <Route path='ders3' element={<Ders3 />} />
               <Route path='ders4' element={<Ders4 />} />
               <Route path='ders5' element={<Ders5 />} />
            </Routes>

         </div>

         <Footer />

      </BrowserRouter>
   );
}