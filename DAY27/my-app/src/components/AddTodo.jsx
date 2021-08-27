import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../actions";
const AddTodo=()=>{
    const[item,setItem]=useState("");
    const dispatch =useDispatch(); 
    return(
        <div className='addItem'>
            <input type='text'class='to-do'placeholder='Add To Do'value={item}onChange={(e)=>{
            setItem(e.target.value);
            }}
            />
            <button 
            onClick={()=>{dispatch(AddItem({
                title:item,
                done:false,
            }));
                setItem("")
        }}
                className='btn'>Add</button>
            
        </div>
    )
}
export default AddTodo;