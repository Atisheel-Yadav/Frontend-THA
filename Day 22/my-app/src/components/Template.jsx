import { useState } from "react";
const Template=({template,setTemplate})=>{
    const[form,setForm]=useState({
        template_id:template.id,
        username:"AtisheelYadav",
        password:"aj44atisheelyadav",
        boxes:[],

    })
    const createMeme =()=>{
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
         form.boxes.map((box,index)=>{
            url+=`& boxes[${index}][text]=${box.text}` 
         })
         fetch(url)
         .then(res =>res.json())
         .then((data)=>{
             setTemplate({...template,url:data.data.url})
         })
    }
    return(
         <div className='card1'>
        <img src={template.url}alt=""></img>
    
    <div className='input'>
      {
          [...Array(template.box_count)].map((_,index)=>{
              return(
             <input key={index}type='text' placeholder={`Meme caption ${index+1}`} 
             onChange={(e)=>{
                 const newBoxes=form.boxes;
                 newBoxes[index]={text: e.target.value}
                 setForm({...form,boxes: newBoxes})
             }}></input>)
          })
      }
    </div>
    <div className='btn'>
        <button className='btn1'onClick={createMeme}>Create Meme</button>
        <button className='btn2' onClick={()=>{
           setTemplate(null)
            console.log(null)
        }}>Choose Template</button>
    </div>
    </div>
    
    )
};
export default Template;