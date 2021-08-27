import { useSelector } from "react-redux";
const ListTodo=()=>{
    const todos=useSelector((state)=>state.todo);
    return(
        <div>
        {todos.map((todo,index) =>(
       <div>
   <h5 style={{display:'inline-block'}}>todo.title</h5>
   <button className='btn'>Delete</button>
   </div>
        ))}
   </div>
    );
}
export default ListTodo;