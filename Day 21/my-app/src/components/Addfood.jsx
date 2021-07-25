import {useState} from "react"
function Addfood({addfood}){
    function handleSubmit(e){
        e.preventDefault()
        addfood({title,calorie})
        setTitle('')
        setCalorie('')

    }
    const[title,setTitle]=useState("")
    const[calorie,setCalorie]=useState("")
    return(
    <div>
    <form onSubmit={handleSubmit}>
        <div className='input'>
            <input type='text'placeholder='Enter the food item' value={title} name='title' id='title' onChange={e=>setTitle(e.target.value)}></input>
            <input type='number'placeholder='Enter calorie' value={calorie} name='calorie' id='calorie'onChange={e=>setCalorie(e.target.value)}></input>
        </div>
     <button type='submit'className='btn'>Add Item</button>

    </form>
    </div>
    )
}
export default Addfood