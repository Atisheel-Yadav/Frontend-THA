export const AddItem=(item)=>{
    return{
       type:"AddItem",
       payload:item
    }
}
export const DelItem=(id)=>{
    return{
        type:'DelItem',
        payload:id
    };
}