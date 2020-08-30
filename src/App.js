import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar/>
//         <Route exact path = "/" component={About}/>
//         <Route exact path = "/about" component={About}/>
//          <Route exact path ="/search" component =  {Search}/>
        
//         <Footer/>
//       </div>
//     </Router>
//   );
// }

function App (){
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path ="/"><About/></Route>
        <Route path ="/about"><About/></Route>
        <Route path ="/search"><Search/></Route>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
