 function Mems({Mems,setTemplate}){

return(
    <div>
    {Mems.map((temp)=>(
        <div key={temp.id} className='cards'onClick={()=>{
         setTemplate(temp)
         
        }}

        >
           <div style={{backgroundImage:`url(${temp.url})`}}className='img'></div>

          </div>
        
      ))}
      </div>
)
}
export default Mems;