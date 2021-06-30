const input=document.querySelector('#input');
const btn=document.querySelector('#btn');
const list=document.querySelector('.list')

btn.addEventListener('click',()=>{
    const newList=document.createElement('div');
    // console.log(newList)
    //  console.log(input.value);
    newList.innerHTML=input.value;
    list.appendChild(newList);
    input.value="";
});