export const showName =(item)=>{
    return {
        type:'name',
       payload:item
        
    }
}
export const showEmail = (id)=>{
    return {
        type:'email',
        payload:id
    }
}