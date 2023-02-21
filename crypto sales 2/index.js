const hamburger = document.querySelector('.hamburger')
const show = document.querySelector('.sdNavContainer')
const show2 = document.querySelector('.sdNav')

show.style.display='none'
show2.style.display ='none'

hamburger.addEventListener('click', ()=>{
    if(show.style.display =='none'){
        show.style.display ='flex';
        show2.style.display ='flex'
    }else{
        show.style.display ='none'
        show2.style.display ='none'
    }  
})


