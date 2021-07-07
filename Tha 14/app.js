const colors=["red","blue","green","yellow"];
const btn=document.getElementById('btn')
const color=document.querySelector('#color')
// console.log(btn)

btn.addEventListener('click',function(){
    const random = getRandomNo()
    document.body.style.backgroundColor=colors[random];
    color.textContent=colors[random]
    // console.log(random);
});

function getRandomNo() {
    return Math.floor(Math.random() * colors.length);
}