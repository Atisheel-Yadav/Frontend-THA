import {useState} from 'react'
function CardList({item,index,edit,del}){
    const [isedit,setEdit] = useState(false);
    return(
        <div className='inner-container'>
        <div className='not-card'>
            {isedit?(
                <input type="text"  name="title" id="title" value={item.title} placeholder="Enter food here" onChange={e=>edit({title:e.target.value},index)}/>
            ):(
                <h2>{item.title}</h2>
            )}  

            {isedit?(
                <input type="number"  name="calorie" id=" calorie" value={item.calorie} placeholder="Enter Calorie" onChange={e=>edit({calorie:e.target.value},index)}/>
            ):(
                <p className='p1'>You have consumed {item.calorie} calories today.</p>
            )}
            </div>
            <div className='buttons'>
            <button className='btn1'onClick={()=>del(index)}>Delete</button>
            <button className='btn2'onClick={()=>setEdit(!isedit)}>{isedit ? 'Done' : 'Edit'}</button>
            </div>
            </div>
    )
}
export default CardList;