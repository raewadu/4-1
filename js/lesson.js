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
