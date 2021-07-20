import React,{useState} from "react"
import './App.css';
import Cards from "./components/Cards"



function App() {
  
  const foodItems=[
    ['Pizza',56],
    ['Burger',69],
    ['Coke',500],
    ['Browne',180],
    ['Fried Rice',200],
    ['Lassania',600],
    ['Pani Puri',10],
  ]

  const [Items,setItems]=useState(foodItems)
  return (
    <div className='container'>
     <Cards Items={Items} setCards={setItems}/>
    </div>
    
  );
}

export default App;
