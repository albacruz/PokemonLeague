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

const hideProgressBar = () => {
  document.querySelector('#barF1').classList.add('hidden');
  document.querySelector('#barF2').classList.add('hidden');
}
const fighterAttacks = () => {
  document.querySelector('#button1').classList.toggle('hidden');
  document.querySelector('#button2').classList.toggle('hidden');
}

const newBattle = () => location.reload();

const checkLife = () => {
  console.log('Esto es lifeF1 = ', parseInt(lifeF1));
  console.log('Esto es lifeF2 = ', parseInt(lifeF2));
  const btn = document.querySelector('.boton');

  if(parseInt(lifeF1) <= 0){
    document.querySelector('#button2').classList.add('hidden');
    hideProgressBar();
    btn.classList.remove('hidden');
    btn.textContent = 'New battle';
    btn.addEventListener('click', newBattle);
  }
  if(parseInt(lifeF2) <= 0){
    document.querySelector('#button1').classList.add('hidden');
    hideProgressBar();
    alert('Ganaste');
    btn.classList.remove('hidden');
    btn.textContent = 'New battle';
    btn.addEventListener('click', newBattle);
  }
  
}

const receiveAttack = () => {

  const barF1 = document.getElementById("barF1");
  const barF2 = document.getElementById("barF2");

  if(pos == 0){
    lifeF1 = (parseInt(lifeF1) - battle[1].baseStats.attack) + '%';
    barF1.style.width = lifeF1;
    barF1.textContent = lifeF1;
    pos = 1;
    checkLife();
    fighterAttacks();
    fight("button1");
  }
  else{
    lifeF2 = (parseInt(lifeF2) - battle[0].baseStats.attack) + '%';
    barF2.style.width = lifeF2;
    barF2.textContent = lifeF2;
    pos = 0;
    checkLife();
    fighterAttacks();
    fight("button2");
  }

}

const fight = (btn) => document.getElementById(btn).addEventListener('click', receiveAttack);

const padZero = (n) => n.toString().padStart(3, '0');

const battleInit = () => {
  document.querySelector('.boton').classList.add('hidden');
  pokemon1.innerHTML = `<h2 id="nombre1">${nameFighter1.toUpperCase()}</h2><img class="pokemonPic" src="${images[padZero(idFighter1)]}" alt="${nameFighter1}"><div id="progress"><div id="barF1">${lifeF1}</div></div><div class="botonAttack"><button id="button1">Attack</button></div>`;
  pokemon2.innerHTML = `<h2 id="nombre2">${nameFighter2.toUpperCase()}</h2><img class="pokemonPic" src="${images[padZero(idFighter2)]}" alt="${nameFighter2}"><div id="progress"><div id="barF2">${lifeF2}</div></div><div class="botonAttack"><button class = "hidden" id="button2">Attack</button></div>`;
  fight("button1");
}

let randomNumber1 = getRandomNumber();
let randomNumber2 = getRandomNumber();

const lifeIni = 100 + '%';

let lifeF1 = lifeIni;
let lifeF2 = lifeIni;

let pos = 1;

const battle = createBattle();

const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");

const idFighter1 = battle[0].id;
const idFighter2 = battle[1].id;

const nameFighter1 = battle[0].name;
const nameFighter2 = battle[1].name;

document.getElementById("buttonStart").addEventListener('click', battleInit);

