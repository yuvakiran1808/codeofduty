import React from "react"
import {Route,Routes,} from "react-router-dom"
import Home from "./core/Home";
import Quizhome from "./core/Quizhome";
import Contact from "./core/Contact";
const  App = () => {
  return (
    <div className="App">
     <Routes>
         <Route path="/" element = { <Home />}  />
         <Route path="/quiz" element = { <Quizhome />}  />
         <Route path="/Contact" element = { <Contact />}  />
     </Routes>
    </div>
  );
}

export default App;
