

const initialState={
    name:" ",
    email:" "
}
const showInput=(state=initialState,action)=>{
    console.log(action);
    switch (action.type) {
        case 'name':
          return{
             ...state,
             name:"action.payload"
          }
            
        case 'email':
            return{
                ...state,
                email:'action.payload'
            }
    
        default:
            return state
    }
    
}
export default showInput;