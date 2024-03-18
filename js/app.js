/*
const api = "https://pokeapi.co/api/v2/pokemon/";
const generateBtn = document.querySelector("#generate")

let randomNumber = Math.trunc(Math.random() * 1000) + 1;

function upudateUi(pokeInfo) {
    console.log(pokeInfo);
    console.log("hp", pokeInfo.stats[0].base_stats);
    console.log("attack", pokeInfo.stats[1].base_stats);
    console.log("defend", pokeInfo.stats[2].base_stats);
    console.log("speed", pokeInfo.stats[5].base_stats);
    console.log("type" , pokeInfo.types[0].type.name);
    console.log("img url" , pokeInfo.sprites.other.dream_world.front_default ?? pokeInfo.sprites.front_default);
    console.log(pokeInfo.name);
}

async function getData(api) {
    const req = await fetch(api);
    const data = req.json();

    return data;
}

getData(api + randomNumber).then((data) => upudateUi(data)).catch((error) => console.log(error));



generateBtn.addEventListener("click" , () => {
    randomNumber = Math.trunc(Math.random() * 1000) + 1;
    const api = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;
    //getData(api)
    getData(api).then((data) => upudateUi(data)).catch((error) => console.log(error));

})
*/
const api = "https://pokeapi.co/api/v2/pokemon/";
const generateBtn = document.querySelector("#generate");
let randomNumber = Math.trunc(Math.random() * 1000) + 1;

function updateUi(pokeInfo) {
    document.getElementById("pokemon-name").textContent = pokeInfo.name;
    document.getElementById("pokemon-hp").textContent = pokeInfo.stats[0].base_stat;
    document.getElementById("pokemon-attack").textContent = pokeInfo.stats[1].base_stat;
    document.getElementById("pokemon-defense").textContent = pokeInfo.stats[2].base_stat;
    document.getElementById("pokemon-speed").textContent = pokeInfo.stats[5].base_stat;
    document.getElementById("pokemon-type").textContent = pokeInfo.types[0].type.name;
    document.getElementById("pokemon-image").src = pokeInfo.sprites.other.dream_world.front_default ?? pokeInfo.sprites.front_default;
}


function getData(api) {
    return fetch(api).then(response => response.json());
}

getData(api + randomNumber)
    .then(data => updateUi(data))
    .catch(error => console.log(error));

generateBtn.addEventListener("click", () => {
    randomNumber = Math.trunc(Math.random() * 1000) + 1;
    const apiUrl = api + randomNumber;
    getData(apiUrl)
        .then(data => updateUi(data))
        .catch(error => console.log(error));
});

