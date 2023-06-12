import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Sociallink from "./Component/Sociallink";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import Resume from "./Component/Resume";
import React from "react";
function App() {
  return (
    <div  >    
        <Navbar/>
        <Home/>
        <Sociallink/>
        <About/>
        <Experience/>
        <Resume/>
        <Contact/>
       
    </div>
  );
}

export default App;
