import { useState } from 'react';
import Addfood from'./components/Addfood'
import CardList from './components/Cardlist'
import './App.css';

export default function App() {
  const [food,setFood]=useState([])

  function addfood(item){
      setFood([...food,item])
      
    }
    function del(index){
       let newList=food.filter((item,i)=>i!==index)
       setFood(newList)
    }
    
      function edit(newItem,index){
        setFood(
            food.map((item,i)=>(i===index ? {...item,...newItem}:item)));
    }
    
  return (
     <div className='container'>
       <Addfood addfood={addfood}/>
       {food.length===0 ?
       (
         <h1 className='heading'>Add Food Items</h1>
       ):(
         food.map((item,index)=>(
            <CardList
            item={item}
            index={index}
            key={index}
            edit={edit}
            del={del}
            />
         ))
       )}
     </div>
  );
}


