import './App.css';
import{useSelector,useDispatch} from "react-redux"
import{showName,showEmail}from './actions/index'

function App() {
  // const myState1=useSelector(state=>state.name);
  // const myState2=useSelector(state=>state.email);
  const user=useSelector(state=>state.input)
  const dispatch=useDispatch();
  return (
    <>
    <div className='container'>
     <h1 className='h1'>Input</h1>
     
     <div className='input'>
     
     <input type='text'className='input1'placeholder='Name'value={user.name}onChange={(e)=>dispatch(showName(e.target.value))}></input>
     <input type='text'className='input1'placeholder='Email'value={user.email}onChange={(e)=>dispatch(showEmail(e.target.value))}></input>
     
     <h1 className='data'>Data</h1>

     <h4 className='h4'>Username : {user.name}</h4>
     <h4 className='h4'>Email : {user.email}</h4>
     </div>


    </div>
    </>
  );
}

export default App;
