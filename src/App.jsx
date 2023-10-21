import { useState } from "react";
import React from "react";
import "./App.css";
import Movies from "../services/Movies";
import  "/services/Movies.css"
import Header from "./component/Header/Header"


function App() {

  

  return (
    <>
    <div>
      <Header/>
    </div>
      <div className="Movies"> 
        <Movies/>
      </div>
    </>
  );
}

export default App;
