import React from "react"
import "./App.css"

function Box1(){
   let count=[]

   //  for(let i=0;i<64;i++)
   //  {
        
   //   count.push(<div className="square"></div>)
      
   //  }
    for(let i=1;i<=64;i++)
    {
          if((i>8 && i<=16)||(i>24 && i<=32)||(i>40 && i<=48)||(i>56 && i<=64))
     count.push(<div className="square"></div>)
     else
     count.push(<div className="square1"></div>)
    }
   
    return(
       <div className='chess'>
        {count}
       </div>
    )
}
export default Box1