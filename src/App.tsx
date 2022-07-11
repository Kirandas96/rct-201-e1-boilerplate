import React, { useEffect, useState } from "react";
import './App.css';
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  

  



  return (
    <div className="App">
      <div>
        <Clock/>
      </div>
      <div className="flex">
       <List1/>
       <List2/>
        </div>
    </div>
  );
}

export default App;
