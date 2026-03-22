const charList = document.querySelector('.characters-list');
const BASE_URL=""

async function loadCharacters() {
  try {
    const response = await fetch('https://69bfd95772ca04f3bcb9cc38.mockapi.io/cards');//через мокапи сделал

    if (!response.ok) {
      throw new Error('Ошибка загрузки characters.json');
    }

    const data = await response.json();
    console.log(data);

    data.forEach((person) => {
      const char = document.createElement("div");
      char.classList.add("character-card");
      const imgUrl="https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"

      char.innerHTML = `
        <img src="${imgUrl}" alt="ALT" class="character-photo">
        <h3>${person.title}</h3>
        <h4>${person.body}</h4>
      `;

      charList.appendChild(char);
    });

  } catch (error) {
    console.error('Ошибка:', error);
  }
}

loadCharacters();