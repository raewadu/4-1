// HW 3 Slider

const tabs = document.querySelectorAll('.tab_content_block');
const tabBtns = document.querySelectorAll('.tab_content_item');
const tabBtnsParent = document.querySelector('.tab_content_items');

let currentIndex = 0;

const hideTabs = () => {
  tabs.forEach((tab) => {
    tab.style.display = 'none'
  })
  tabBtns.forEach((btn) => {
    btn.classList.remove('tab_content_item_active')
  })
}
const showActiveTab =  (index = 0) => {
  tabs[index].style.display = 'block';
  tabBtns[index].classList.add('tab_content_item_active')
  
}

setInterval(()=>{
    currentIndex++

    if (currentIndex >= tabs.length) {
        currentIndex=0;
    }
    hideTabs()
    showActiveTab(currentIndex)
},5000)

hideTabs();
showActiveTab(currentIndex);

tabBtnsParent.addEventListener('click', (e) => {
  if(e.target.tagName.toLowerCase() == 'button') {
    tabBtns.forEach((btn, index) =>{
      if(e.target==btn) {
        currentIndex=index
        hideTabs()
        showActiveTab(index)
      }
    })
  }
})


// HW5
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const errorMessage=document.querySelector('#error')
const converter = (targetElement, otherElement, thirdElement) => {
  targetElement.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '../data/converter.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
    request.onload= ()=>{
      if(request.status===404){
        errorMessage.style.color='red'
        errorMessage.innerHTML='Произошла непредвиденная ошибка'
      }
      const response=JSON.parse(request.response)
      const usd = response?.usd
      const eur = response?.eur
      if(targetElement.value===''){
        otherElement.value=''
        thirdElement.valie=''
      }
      if(targetElement.id === 'som'){
        otherElement.value = (targetElement.value/usd).toFixed(2)
        thirdElement.value = (targetElement.value/eur).toFixed(2)
      }else if(targetElement.id === 'usd'){
        otherElement.value = (targetElement.value*usd).toFixed(2)
        thirdElement.value = (otherElement.value/eur).toFixed(2)
      }else if (targetElement.id === 'eur'){
        otherElement.value = (targetElement.value*eur).toFixed(2)
        thirdElement.value = (otherElement.value/usd).toFixed(2)
      }
    }
  })
}
converter(usdInput, somInput, eurInput)
converter(somInput, usdInput, eurInput)
converter(eurInput, somInput, usdInput)