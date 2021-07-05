let input=document.querySelector('#input');
let btn=document.getElementById('btn');
let article=document.querySelector('article');
console.log(article);

btn.addEventListener('click',function dogs(){
    fetch('https://dog.ceo/api/breed/hound/images/random/10')
    .then(res => res.json())
    .then(data =>getResponse(data))
})
function getResponse(data){
    console.log(data.message);
    data.message.forEach(dog => {
        console.log(dog)
        let dogDiv=document.createElement('div')
        dogDiv.className='doggo'
        // dogDiv.value='avc'
        dogDiv.innerHTML=`<img src="${(dog)}"`
        article.appendChild(dogDiv)
        dogDiv.innerHTML="<img src='" + dog + "'"
        let img=document.createElement('img')
           img.src=dog
           dogDiv.appendChild(img)
    });
}
dogs();

