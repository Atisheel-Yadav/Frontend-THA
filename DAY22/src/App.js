import React,{useState , useEffect} from "react";
import './App.css';
import Mems from "./components/Mems"
import Template from"./components/Template"

function App() {
  const[mems,setMems]=useState([])
  const[template,setTemplate]=useState(null)
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then((res)=>res.json())
    .then((data)=>{
      setMems(data.data.memes)
    
    })
  },[])

  return (
    <div className='memes'>
     <h1>Meme Generator</h1>
     {template===null?(
      <Mems Mems={mems} setTemplate={setTemplate}/>)
    : (<Template template={template} setTemplate={setTemplate}/>
    )}
    </div>
  )
}

export default App;
