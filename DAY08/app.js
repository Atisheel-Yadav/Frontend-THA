const box=document.querySelector('.centre-box');
console.log(box)
for(let i=0;i<400;i++){
    box.innerHTML += '<div class="box1"></div>';
}
let x=document.querySelectorAll('.box1')
x.forEach(item => item.addEventListener('click',() =>{
    item.classList.toggle('changecolor');
}))



