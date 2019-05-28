import pokemon from '../assets/pokemon.json';
import images from '../assets/images/*.png';
import _ from 'lodash';


const createBattle = () => {
  let battleArray = []; 
  battleArray.push(pokemon[0]);
  battleArray.push(pokemon[1]);
  return battleArray;
}


const battleInit = () => {
  name1.textContent  = battle[0].name;
  name2.textContent  = battle[1].name;
  //pokemon1.innerHTML = `<img src="${images.battle[0].id}">`;
}

const battle = createBattle();
const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");
const name1 = document.getElementById("nombre1");
const name2 = document.getElementById("nombre2");
const btn = document.getElementById("button").addEventListener('click', battleInit);

