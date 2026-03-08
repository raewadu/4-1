const modalOpenBtn = document.querySelector('#btn-get');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal_close');



const showModal = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

modalOpenBtn.onclick = showModal;
modalCloseBtn.onclick = closeModal;

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const handleScroll = () => {
  if (window.innerHeight + window.scrollY +1 >= document.body.offsetHeight) {
    showModal();
    window.removeEventListener('scroll', handleScroll);
  }
};

window.addEventListener('scroll', handleScroll);

setTimeout(()=>{
    showModal()
},10000)