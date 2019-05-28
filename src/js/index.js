import pokemon from '../assets/pokemon.json';
import images from '../assets/images/*.png';
import _ from 'lodash';

const getRandomNumber = () => Math.floor(Math.random() * 150);

const createBattle = () => {
  let battleArray = [];
  battleArray.push(pokemon[randomNumber1]);
  battleArray.push(pokemon[randomNumber2]);
  return battleArray;
}

const padZero = (n) => n.toString().padStart(3, '0');

const battleInit = () => {
  document.querySelector('.boton').classList.add('hidden');

  const idFighter1 = battle[0].id;
  const idFighter2 = battle[1].id;

  const nameFighter1 = battle[0].name;
  const nameFighter2 = battle[1].name;

  pokemon1.innerHTML = `
  <h2 id="nombre1">${nameFighter1}</h2><img src="${images[padZero(idFighter1)]}" alt="${nameFighter1}"><div class="boton">
  <button id="button">Attack</button>
</div>`;

  pokemon2.innerHTML = `
  <h2 id="nombre2">${nameFighter2}</h2><img src="${images[padZero(idFighter2)]}" alt="${nameFighter2}"><div class="boton">
  <button id="button">Attack</button>
</div>`;
}

let randomNumber1 = getRandomNumber();
let randomNumber2 = getRandomNumber();

const battle = createBattle();

const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");
document.getElementById("button").addEventListener('click', battleInit);

