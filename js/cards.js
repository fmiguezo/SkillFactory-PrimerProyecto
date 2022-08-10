const URL_CHARACTERS = "https://rickandmortyapi.com/api/character/";

const users = axios.get(URL_CHARACTERS);
const responseAPIAxios = users.then((response) => {
  const results = response.data.results;
  let body = ``;
  results.map((character) => {
    const { name, image } = character;
    body += `
        <div class="card">
            <img src="${image}" class="card-image">
            <p class="card-name">${name}</p>
        </div>
        `;
    document.getElementById("characters").innerHTML = body;
  });
});
