let usdAmount = document.getElementById('usdBox')
let refresh = document.getElementById('refresh')
let payed = document.getElementById('payed')
let rate = document.getElementById('rate2')
let accountdata1 = document.getElementById('bankName')
const accountdata2 = document.querySelector('.name')
const accountdata3 = document.querySelector('.accountNumber')
const switchToggle = document.querySelector('.toggle')
const sendButton = document.querySelector('.button')
const cryptoChoice = document.getElementById('cryptoChoice')

rate.innerText = 650





refresh.addEventListener('click' , ()=>{
   
    let rate2 = + rate.innerText
    let a = +usdAmount.value
    let b = a * rate2
    payed.innerText =`You get  NGN ${b}`
    payed.style.display='flex';
    
    
})


switchToggle.addEventListener('click' , ()=>{
    let rate2 = + rate.innerText
    if ( rate2 == 650){
        rate.innerText= 720
        
    }else{
        rate.innerText = 650
    }
})
function sendMessage() {

}
sendButton.addEventListener('click', function(event){
  
     event.preventDefault()
       let bankName = accountdata1.value
       let accountName = accountdata2.value
       let accountNumber = accountdata3.value
       let dollarAmount = usdAmount.value
       let choice = cryptoChoice.options[cryptoChoice.selectedIndex].text
       
       

       let rate2 = +rate.innerText
       let a = +usdAmount.value
       let b = a * rate2
       let nairaAmount = b
       let tradeoption = ''
       if (rate2==650){
            tradeoption='sell'
       }else{
        tradeoption='buy'
       }


      
     
       let win = window.open(`https://wa.me/${+2348108098671}?text= Hi Qrim, I want to ${tradeoption}%0a%0a Token: ${choice}%0a Usd Amount: $${dollarAmount}%0a Naira amount:${nairaAmount}%0a Bank name: ${bankName}%0a Account name: ${accountName}%0a Account number: ${accountNumber}`)
          

})

