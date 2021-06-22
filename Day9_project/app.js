const box= document.querySelector('.box');
for(let i=0;i<36;i++)
{
    box.innerHTML+='<div class="box1"></div>'
}
let totalSeats=36;
let a=document.querySelectorAll('.box1');
// console.log(a);
let b=document.querySelectorAll('.booked')
// console.log(b);
a.forEach((item =>
    item.addEventListener('click',() =>{
        if(item.classList.contains('select')){
            item.classList.remove('select');
            totalSeats+=1
        }
        else{
            item.classList.add('select');
            totalSeats-=1;
        };

        b[0].value=36-totalSeats;
        b[1].value=totalSeats;
        
    })));

