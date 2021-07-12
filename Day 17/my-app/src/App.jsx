import React from "react";
import './App.css';
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container">
      <div className="container1">
        <h1>Calorie Read Only</h1>
      </div>
      <Cards title="Pizza" value=" 56 "/>
      <Cards title="Burger" value=" 69 "/>
      <Cards title="Coke" value=" 500 "/>
      <Cards title="Brownie" value=" 180 "/>
      <Cards title="Fried Rice" value=" 90 "/>
      <Cards title="Lasagna" value=" 200 "/>
      <Cards title="Pani Puri" value=" 10 "/>
    </div>
     
    
  );
}

export default App;
