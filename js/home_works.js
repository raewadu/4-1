// HOMEWORK 1 part 1
const btnMail = document.querySelector('#gmail_button');
const inputMail = document.querySelector('#gmail_input');
const resultMail = document.querySelector('#gmail_result');

const regexMail = /^[a-zA-Z0-9._]+@gmail\.com$/;

btnMail.addEventListener('click', () => {
  const mail = inputMail.value;
  if (regexMail.test(mail)) {
    resultMail.textContent = ("gmail is valid");
  } else {
    resultMail.textContent = ("gmail is not valid");
  }
});

// HOMEWORK 1 part 2
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0 , positionY = 0;

const toRight = parentBlock.clientWidth - childBlock.clientWidth;
const toBottom = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {
  requestAnimationFrame(moveBlock)
  childBlock.style.top = `${positionY}px`;
  childBlock.style.left = `${positionX}px`;
  if (positionX < toRight && positionY === 0) positionX++;
  else if (positionX >= toRight && positionY < toBottom) positionY++;
  else if (positionY >= toBottom && positionX > 0) positionX--;
  else if (positionX === 0 && positionY > 0) positionY--;
}
moveBlock()

//HOMEWORK 2
  
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

const secondsValue = document.querySelector('#seconds')

let interval = null
let seconds = 0

startBtn.addEventListener('click', () => {
  if (interval) return;

  interval = setInterval(() => {
    seconds++
    secondsValue.innerText = seconds
  }, 1000)
})

stopBtn.addEventListener('click', ()=>{
  clearInterval(interval)
  interval=null
})

resetBtn.addEventListener('click',()=>{
  clearInterval(interval)
  interval=null
  seconds=0
  secondsValue.innerText=seconds
})


//HW 4

const charList=document.querySelector('.characters-list')

const request = new XMLHttpRequest;
request.open('GET', ('../data/characters.json'))
request.setRequestHeader('Content-Type', 'application.json')
request.send();

request.onload= ()=>{
  const response = JSON.parse(request.responseText)
  console.log(response);
  response.forEach((person) => {
  const char=document.createElement("div")
  char.classList.add("character-card")
  charList.appendChild(char)  
  char.innerHTML=`
  <img src="${person.photo}" alt="${person.name}" class="character-photo">
  <h3>${person.name}</h3>
  <h4>${person.age}</h4>`
});
}
const requestBio = new XMLHttpRequest;
requestBio.open('GET', ('../data/bio.json'))
requestBio.setRequestHeader('Content-Type', 'application.json')
requestBio.send();
requestBio.onload=()=>{
  const responseBio=JSON.parse(requestBio.responseText)
  console.log(responseBio);
  
}