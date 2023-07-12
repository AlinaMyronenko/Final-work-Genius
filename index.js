const allCharacters = document.querySelector(".title__button");

allCharacters.addEventListener("click", getUrl);

function getUrl() {
    return fetch("https://hp-api.onrender.com/api/characters");
}