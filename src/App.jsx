import { useState } from "react";
import React from "react";
import "./App.css";
import Movies from "../services/Movies";
import  "/services/Movies.css"
import Header from "./component/Header/Header"
import Action from "./component/FilmsCategorie/Action/Action";


function App() {

  

  return (
    <>
    <div>
      <Header/>
    </div>
      <div className="Movies"> 
        <Movies/>
      </div>
      <div><h1>Action</h1></div>
      <div><Action/></div>
    </>
  );
}

export default App;
