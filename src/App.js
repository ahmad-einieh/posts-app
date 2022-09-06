import "./App.css";
import React from "react";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Posts/>
      <About/>
    </div>
  );
}

export default App;
