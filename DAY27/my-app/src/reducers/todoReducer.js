

const todoReducer = (state=[],action)=>{
   if(action.type==='AddItem')
   {
    return [...state,action.payload]
   }
   else if(action.type==='DelItem')
   {
       return state.filter((item,index)=>index!==action.payload);
   }
   return state;
}
export default todoReducer;