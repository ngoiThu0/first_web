$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)
api = 'http://localhost:3000/'

$$('.nav-link').addEventListener('click', ()=>{
    fetch(api + 'home')
        .then((response)=>{
            
        })
})