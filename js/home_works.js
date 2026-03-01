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

let newLeftStyle = 0;

const newFunction = () => {
    newLeftStyle++
    childBlock.style.left = `${newLeftStyle}px`;
    if (newLeftStyle <= 448) {
        requestAnimationFrame(newFunction);
    }
}
newFunction()