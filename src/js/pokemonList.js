import _ from 'lodash';
 
 export const pokemonList = [
  {
      id: 1,
      name: 'bulbasaur',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        special: 65
      }
    },
    {
        id: 0,
        name: 'placeholder',
        types: [
          'grass',
          'poison'
        ],
        baseStats: {
          hp: 0,
          attack: 0,
          defense: 0,
          speed: 0,
          special: 0
        }
      },
          
    {
      id: 2,
      name: 'ivysaur',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 60,
        attack: 62,
        defense: 63,
        speed: 60,
        special: 80
      }
    },
    {
      id: 3,
      name: 'venusaur',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        special: 100
      }
    },
    {
      id: 4,
      name: 'charmander',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        special: 50
      }
    },
    {
      id: 5,
      name: 'charmeleon',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 58,
        attack: 64,
        defense: 58,
        speed: 80,
        special: 65
      }
    },
    {
      id: 6,
      name: 'charizard',
      types: [
        'fire',
        'flying'
      ],
      baseStats: {
        hp: 78,
        attack: 84,
        defense: 78,
        speed: 100,
        special: 85
      }
    },
    {
      id: 7,
      name: 'squirtle',
      types: [
        'water'
      ],
      baseStats: {
        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        special: 50
      }
    },
    {
      id: 8,
      name: 'wartortle',
      types: [
        'water'
      ],
      baseStats: {
        hp: 59,
        attack: 63,
        defense: 80,
        speed: 58,
        special: 65
      }
    },
    {
      id: 9,
      name: 'blastoise',
      types: [
        'water'
      ],
      baseStats: {
        hp: 79,
        attack: 83,
        defense: 100,
        speed: 78,
        special: 85
      }
    },
    {
      id: 10,
      name: 'caterpie',
      types: [
        'bug'
      ],
      baseStats: {
        hp: 45,
        attack: 30,
        defense: 35,
        speed: 45,
        special: 20
      }
    },
    {
      id: 11,
      name: 'metapod',
      types: [
        'bug'
      ],
      baseStats: {
        hp: 50,
        attack: 20,
        defense: 55,
        speed: 30,
        special: 25
      }
    },
    {
      id: 12,
      name: 'butterfree',
      types: [
        'bug',
        'flying'
      ],
      baseStats: {
        hp: 60,
        attack: 45,
        defense: 50,
        speed: 70,
        special: 80
      }
    },
    {
      id: 13,
      name: 'weedle',
      types: [
        'bug',
        'poison'
      ],
      baseStats: {
        hp: 40,
        attack: 35,
        defense: 30,
        speed: 50,
        special: 20
      }
    },
    {
      id: 14,
      name: 'kakuna',
      types: [
        'bug',
        'poison'
      ],
      baseStats: {
        hp: 45,
        attack: 25,
        defense: 50,
        speed: 35,
        special: 25
      }
    },
    {
      id: 15,
      name: 'beedrill',
      types: [
        'bug',
        'poison'
      ],
      baseStats: {
        hp: 65,
        attack: 80,
        defense: 40,
        speed: 75,
        special: 45
      }
    },
    {
      id: 16,
      name: 'pidgey',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 40,
        attack: 45,
        defense: 40,
        speed: 56,
        special: 35
      }
    },
    {
      id: 17,
      name: 'pidgeotto',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 63,
        attack: 60,
        defense: 55,
        speed: 71,
        special: 50
      }
    },
    {
      id: 18,
      name: 'pidgeot',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 83,
        attack: 80,
        defense: 75,
        speed: 91,
        special: 70
      }
    },
    {
      id: 19,
      name: 'rattata',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 30,
        attack: 56,
        defense: 35,
        speed: 72,
        special: 25
      }
    },
    {
      id: 20,
      name: 'raticate',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 55,
        attack: 81,
        defense: 60,
        speed: 97,
        special: 50
      }
    },
    {
      id: 21,
      name: 'spearow',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 40,
        attack: 60,
        defense: 30,
        speed: 70,
        special: 31
      }
    },
    {
      id: 22,
      name: 'fearow',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 65,
        attack: 90,
        defense: 65,
        speed: 100,
        special: 61
      }
    },
    {
      id: 23,
      name: 'ekans',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 35,
        attack: 60,
        defense: 44,
        speed: 55,
        special: 40
      }
    },
    {
      id: 24,
      name: 'arbok',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 60,
        attack: 85,
        defense: 69,
        speed: 80,
        special: 65
      }
    },
    {
      id: 25,
      name: 'pikachu',
      types: [
        'electric'
      ],
      baseStats: {
        hp: 35,
        attack: 55,
        defense: 30,
        speed: 90,
        special: 50
      }
    },
    {
      id: 26,
      name: 'raichu',
      types: [
        'electric'
      ],
      baseStats: {
        hp: 60,
        attack: 90,
        defense: 55,
        speed: 100,
        special: 90
      }
    },
    {
      id: 27,
      name: 'sandshrew',
      types: [
        'ground'
      ],
      baseStats: {
        hp: 50,
        attack: 75,
        defense: 85,
        speed: 40,
        special: 30
      }
    },
    {
      id: 28,
      name: 'sandslash',
      types: [
        'ground'
      ],
      baseStats: {
        hp: 75,
        attack: 100,
        defense: 110,
        speed: 65,
        special: 55
      }
    },
    {
      id: 29,
      name: 'nidoran♀',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 55,
        attack: 47,
        defense: 52,
        speed: 41,
        special: 40
      }
    },
    {
      id: 30,
      name: 'nidorina',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 70,
        attack: 62,
        defense: 67,
        speed: 56,
        special: 55
      }
    },
    {
      id: 31,
      name: 'nidoqueen',
      types: [
        'poison',
        'ground'
      ],
      baseStats: {
        hp: 90,
        attack: 82,
        defense: 87,
        speed: 76,
        special: 75
      }
    },
    {
      id: 32,
      name: 'nidoran♂',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 46,
        attack: 57,
        defense: 40,
        speed: 50,
        special: 40
      }
    },
    {
      id: 33,
      name: 'nidorino',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 61,
        attack: 72,
        defense: 57,
        speed: 65,
        special: 55
      }
    },
    {
      id: 34,
      name: 'nidoking',
      types: [
        'poison',
        'ground'
      ],
      baseStats: {
        hp: 81,
        attack: 92,
        defense: 77,
        speed: 85,
        special: 75
      }
    },
    {
      id: 35,
      name: 'clefairy',
      types: [
        'fairy'
      ],
      baseStats: {
        hp: 70,
        attack: 45,
        defense: 48,
        speed: 35,
        special: 60
      }
    },
    {
      id: 36,
      name: 'clefable',
      types: [
        'fairy'
      ],
      baseStats: {
        hp: 95,
        attack: 70,
        defense: 73,
        speed: 60,
        special: 85
      }
    },
    {
      id: 37,
      name: 'vulpix',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 38,
        attack: 41,
        defense: 40,
        speed: 65,
        special: 65
      }
    },
    {
      id: 38,
      name: 'ninetales',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 73,
        attack: 76,
        defense: 75,
        speed: 100,
        special: 100
      }
    },
    {
      id: 39,
      name: 'jigglypuff',
      types: [
        'normal',
        'fairy'
      ],
      baseStats: {
        hp: 115,
        attack: 45,
        defense: 20,
        speed: 20,
        special: 25
      }
    },
    {
      id: 40,
      name: 'wigglytuff',
      types: [
        'normal',
        'fairy'
      ],
      baseStats: {
        hp: 140,
        attack: 70,
        defense: 45,
        speed: 45,
        special: 50
      }
    },
    {
      id: 41,
      name: 'zubat',
      types: [
        'poison',
        'flying'
      ],
      baseStats: {
        hp: 40,
        attack: 45,
        defense: 35,
        speed: 55,
        special: 40
      }
    },
    {
      id: 42,
      name: 'golbat',
      types: [
        'poison',
        'flying'
      ],
      baseStats: {
        hp: 75,
        attack: 80,
        defense: 70,
        speed: 90,
        special: 75
      }
    },
    {
      id: 43,
      name: 'oddish',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 45,
        attack: 50,
        defense: 55,
        speed: 30,
        special: 75
      }
    },
    {
      id: 44,
      name: 'gloom',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 60,
        attack: 65,
        defense: 70,
        speed: 40,
        special: 85
      }
    },
    {
      id: 45,
      name: 'vileplume',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 75,
        attack: 80,
        defense: 85,
        speed: 50,
        special: 100
      }
    },
    {
      id: 46,
      name: 'paras',
      types: [
        'bug',
        'grass'
      ],
      baseStats: {
        hp: 35,
        attack: 70,
        defense: 55,
        speed: 25,
        special: 55
      }
    },
    {
      id: 47,
      name: 'parasect',
      types: [
        'bug',
        'grass'
      ],
      baseStats: {
        hp: 60,
        attack: 95,
        defense: 80,
        speed: 30,
        special: 80
      }
    },
    {
      id: 48,
      name: 'venonat',
      types: [
        'bug',
        'poison'
      ],
      baseStats: {
        hp: 60,
        attack: 55,
        defense: 50,
        speed: 45,
        special: 40
      }
    },
    {
      id: 49,
      name: 'venomoth',
      types: [
        'bug',
        'poison'
      ],
      baseStats: {
        hp: 70,
        attack: 65,
        defense: 60,
        speed: 90,
        special: 90
      }
    },
    {
      id: 50,
      name: 'diglett',
      types: [
        'ground'
      ],
      baseStats: {
        hp: 10,
        attack: 55,
        defense: 25,
        speed: 95,
        special: 45
      }
    },
    {
      id: 51,
      name: 'dugtrio',
      types: [
        'ground'
      ],
      baseStats: {
        hp: 35,
        attack: 80,
        defense: 50,
        speed: 120,
        special: 70
      }
    },
    {
      id: 52,
      name: 'meowth',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 40,
        attack: 45,
        defense: 35,
        speed: 90,
        special: 40
      }
    },
    {
      id: 53,
      name: 'persian',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 65,
        attack: 70,
        defense: 60,
        speed: 115,
        special: 65
      }
    },
    {
      id: 54,
      name: 'psyduck',
      types: [
        'water'
      ],
      baseStats: {
        hp: 50,
        attack: 52,
        defense: 48,
        speed: 55,
        special: 50
      }
    },
    {
      id: 55,
      name: 'golduck',
      types: [
        'water'
      ],
      baseStats: {
        hp: 80,
        attack: 82,
        defense: 78,
        speed: 85,
        special: 80
      }
    },
    {
      id: 56,
      name: 'mankey',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 40,
        attack: 80,
        defense: 35,
        speed: 70,
        special: 35
      }
    },
    {
      id: 57,
      name: 'primeape',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 65,
        attack: 105,
        defense: 60,
        speed: 95,
        special: 60
      }
    },
    {
      id: 58,
      name: 'growlithe',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 55,
        attack: 70,
        defense: 45,
        speed: 60,
        special: 50
      }
    },
    {
      id: 59,
      name: 'arcanine',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 90,
        attack: 110,
        defense: 80,
        speed: 95,
        special: 80
      }
    },
    {
      id: 60,
      name: 'poliwag',
      types: [
        'water'
      ],
      baseStats: {
        hp: 40,
        attack: 50,
        defense: 40,
        speed: 90,
        special: 40
      }
    },
    {
      id: 61,
      name: 'poliwhirl',
      types: [
        'water'
      ],
      baseStats: {
        hp: 65,
        attack: 65,
        defense: 65,
        speed: 90,
        special: 50
      }
    },
    {
      id: 62,
      name: 'poliwrath',
      types: [
        'water',
        'fighting'
      ],
      baseStats: {
        hp: 90,
        attack: 85,
        defense: 95,
        speed: 70,
        special: 70
      }
    },
    {
      id: 63,
      name: 'abra',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 25,
        attack: 20,
        defense: 15,
        speed: 90,
        special: 105
      }
    },
    {
      id: 64,
      name: 'kadabra',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 40,
        attack: 35,
        defense: 30,
        speed: 105,
        special: 120
      }
    },
    {
      id: 65,
      name: 'alakazam',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 55,
        attack: 50,
        defense: 45,
        speed: 120,
        special: 135
      }
    },
    {
      id: 66,
      name: 'machop',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 70,
        attack: 80,
        defense: 50,
        speed: 35,
        special: 35
      }
    },
    {
      id: 67,
      name: 'machoke',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 80,
        attack: 100,
        defense: 70,
        speed: 45,
        special: 50
      }
    },
    {
      id: 68,
      name: 'machamp',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 90,
        attack: 130,
        defense: 80,
        speed: 55,
        special: 65
      }
    },
    {
      id: 69,
      name: 'bellsprout',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 50,
        attack: 75,
        defense: 35,
        speed: 40,
        special: 70
      }
    },
    {
      id: 70,
      name: 'weepinbell',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 65,
        attack: 90,
        defense: 50,
        speed: 55,
        special: 85
      }
    },
    {
      id: 71,
      name: 'victreebel',
      types: [
        'grass',
        'poison'
      ],
      baseStats: {
        hp: 80,
        attack: 105,
        defense: 65,
        speed: 70,
        special: 100
      }
    },
    {
      id: 72,
      name: 'tentacool',
      types: [
        'water',
        'poison'
      ],
      baseStats: {
        hp: 40,
        attack: 40,
        defense: 35,
        speed: 70,
        special: 100
      }
    },
    {
      id: 73,
      name: 'tentacruel',
      types: [
        'water',
        'poison'
      ],
      baseStats: {
        hp: 80,
        attack: 70,
        defense: 65,
        speed: 100,
        special: 120
      }
    },
    {
      id: 74,
      name: 'geodude',
      types: [
        'rock',
        'ground'
      ],
      baseStats: {
        hp: 40,
        attack: 80,
        defense: 100,
        speed: 20,
        special: 30
      }
    },
    {
      id: 75,
      name: 'graveler',
      types: [
        'rock',
        'ground'
      ],
      baseStats: {
        hp: 55,
        attack: 95,
        defense: 115,
        speed: 35,
        special: 45
      }
    },
    {
      id: 76,
      name: 'golem',
      types: [
        'rock',
        'ground'
      ],
      baseStats: {
        hp: 80,
        attack: 110,
        defense: 130,
        speed: 45,
        special: 55
      }
    },
    {
      id: 77,
      name: 'ponyta',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 50,
        attack: 85,
        defense: 55,
        speed: 90,
        special: 65
      }
    },
    {
      id: 78,
      name: 'rapidash',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 65,
        attack: 100,
        defense: 70,
        speed: 105,
        special: 80
      }
    },
    {
      id: 79,
      name: 'slowpoke',
      types: [
        'water',
        'psychic'
      ],
      baseStats: {
        hp: 90,
        attack: 65,
        defense: 65,
        speed: 15,
        special: 40
      }
    },
    {
      id: 80,
      name: 'slowbro',
      types: [
        'water',
        'psychic'
      ],
      baseStats: {
        hp: 95,
        attack: 75,
        defense: 110,
        speed: 30,
        special: 80
      }
    },
    {
      id: 81,
      name: 'magnemite',
      types: [
        'electric',
        'steel'
      ],
      baseStats: {
        hp: 25,
        attack: 35,
        defense: 70,
        speed: 45,
        special: 95
      }
    },
    {
      id: 82,
      name: 'magneton',
      types: [
        'electric',
        'steel'
      ],
      baseStats: {
        hp: 50,
        attack: 60,
        defense: 95,
        speed: 70,
        special: 120
      }
    },
    {
      id: 83,
      name: 'farfetch\'d',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 52,
        attack: 65,
        defense: 55,
        speed: 60,
        special: 58
      }
    },
    {
      id: 84,
      name: 'doduo',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 35,
        attack: 85,
        defense: 45,
        speed: 75,
        special: 35
      }
    },
    {
      id: 85,
      name: 'dodrio',
      types: [
        'normal',
        'flying'
      ],
      baseStats: {
        hp: 60,
        attack: 110,
        defense: 70,
        speed: 100,
        special: 60
      }
    },
    {
      id: 86,
      name: 'seel',
      types: [
        'water'
      ],
      baseStats: {
        hp: 65,
        attack: 45,
        defense: 55,
        speed: 45,
        special: 70
      }
    },
    {
      id: 87,
      name: 'dewgong',
      types: [
        'water',
        'ice'
      ],
      baseStats: {
        hp: 90,
        attack: 70,
        defense: 80,
        speed: 70,
        special: 95
      }
    },
    {
      id: 88,
      name: 'grimer',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 80,
        attack: 80,
        defense: 50,
        speed: 25,
        special: 40
      }
    },
    {
      id: 89,
      name: 'muk',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 105,
        attack: 105,
        defense: 75,
        speed: 50,
        special: 65
      }
    },
    {
      id: 90,
      name: 'shellder',
      types: [
        'water'
      ],
      baseStats: {
        hp: 30,
        attack: 65,
        defense: 100,
        speed: 40,
        special: 45
      }
    },
    {
      id: 91,
      name: 'cloyster',
      types: [
        'water',
        'ice'
      ],
      baseStats: {
        hp: 50,
        attack: 95,
        defense: 180,
        speed: 70,
        special: 85
      }
    },
    {
      id: 92,
      name: 'gastly',
      types: [
        'ghost',
        'poison'
      ],
      baseStats: {
        hp: 30,
        attack: 35,
        defense: 30,
        speed: 80,
        special: 100
      }
    },
    {
      id: 93,
      name: 'haunter',
      types: [
        'ghost',
        'poison'
      ],
      baseStats: {
        hp: 45,
        attack: 50,
        defense: 45,
        speed: 95,
        special: 115
      }
    },
    {
      id: 94,
      name: 'gengar',
      types: [
        'ghost',
        'poison'
      ],
      baseStats: {
        hp: 60,
        attack: 65,
        defense: 60,
        speed: 110,
        special: 130
      }
    },
    {
      id: 95,
      name: 'onix',
      types: [
        'rock',
        'ground'
      ],
      baseStats: {
        hp: 35,
        attack: 45,
        defense: 160,
        speed: 70,
        special: 30
      }
    },
    {
      id: 96,
      name: 'drowzee',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 60,
        attack: 48,
        defense: 45,
        speed: 42,
        special: 90
      }
    },
    {
      id: 97,
      name: 'hypno',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 85,
        attack: 73,
        defense: 70,
        speed: 67,
        special: 115
      }
    },
    {
      id: 98,
      name: 'krabby',
      types: [
        'water'
      ],
      baseStats: {
        hp: 30,
        attack: 105,
        defense: 90,
        speed: 50,
        special: 25
      }
    },
    {
      id: 99,
      name: 'kingler',
      types: [
        'water'
      ],
      baseStats: {
        hp: 55,
        attack: 130,
        defense: 115,
        speed: 75,
        special: 50
      }
    },
    {
      id: 100,
      name: 'voltorb',
      types: [
        'electric'
      ],
      baseStats: {
        hp: 40,
        attack: 30,
        defense: 50,
        speed: 100,
        special: 55
      }
    },
    {
      id: 101,
      name: 'electrode',
      types: [
        'electric'
      ],
      baseStats: {
        hp: 60,
        attack: 50,
        defense: 70,
        speed: 140,
        special: 80
      }
    },
    {
      id: 102,
      name: 'exeggcute',
      types: [
        'grass',
        'psychic'
      ],
      baseStats: {
        hp: 60,
        attack: 40,
        defense: 80,
        speed: 40,
        special: 60
      }
    },
    {
      id: 103,
      name: 'exeggutor',
      types: [
        'grass',
        'psychic'
      ],
      baseStats: {
        hp: 95,
        attack: 95,
        defense: 85,
        speed: 55,
        special: 125
      }
    },
    {
      id: 104,
      name: 'cubone',
      types: [
        'ground'
      ],
      baseStats: {
        hp: 50,
        attack: 50,
        defense: 95,
        speed: 35,
        special: 40
      }
    },
    {
      id: 105,
      name: 'marowak',
      types: [
        'ground'
      ],
      baseStats: {
        hp: 60,
        attack: 80,
        defense: 110,
        speed: 45,
        special: 50
      }
    },
    {
      id: 106,
      name: 'hitmonlee',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 50,
        attack: 120,
        defense: 53,
        speed: 87,
        special: 35
      }
    },
    {
      id: 107,
      name: 'hitmonchan',
      types: [
        'fighting'
      ],
      baseStats: {
        hp: 50,
        attack: 105,
        defense: 79,
        speed: 76,
        special: 35
      }
    },
    {
      id: 108,
      name: 'lickitung',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 90,
        attack: 55,
        defense: 75,
        speed: 30,
        special: 60
      }
    },
    {
      id: 109,
      name: 'koffing',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 40,
        attack: 65,
        defense: 95,
        speed: 35,
        special: 60
      }
    },
    {
      id: 110,
      name: 'weezing',
      types: [
        'poison'
      ],
      baseStats: {
        hp: 65,
        attack: 90,
        defense: 120,
        speed: 60,
        special: 85
      }
    },
    {
      id: 111,
      name: 'rhyhorn',
      types: [
        'ground',
        'rock'
      ],
      baseStats: {
        hp: 80,
        attack: 85,
        defense: 95,
        speed: 25,
        special: 30
      }
    },
    {
      id: 112,
      name: 'rhydon',
      types: [
        'ground',
        'rock'
      ],
      baseStats: {
        hp: 105,
        attack: 130,
        defense: 120,
        speed: 40,
        special: 45
      }
    },
    {
      id: 113,
      name: 'chansey',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 250,
        attack: 5,
        defense: 5,
        speed: 50,
        special: 105
      }
    },
    {
      id: 114,
      name: 'tangela',
      types: [
        'grass'
      ],
      baseStats: {
        hp: 65,
        attack: 55,
        defense: 115,
        speed: 60,
        special: 100
      }
    },
    {
      id: 115,
      name: 'kangaskhan',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 105,
        attack: 95,
        defense: 80,
        speed: 90,
        special: 40
      }
    },
    {
      id: 116,
      name: 'horsea',
      types: [
        'water'
      ],
      baseStats: {
        hp: 30,
        attack: 40,
        defense: 70,
        speed: 60,
        special: 70
      }
    },
    {
      id: 117,
      name: 'seadra',
      types: [
        'water'
      ],
      baseStats: {
        hp: 55,
        attack: 65,
        defense: 95,
        speed: 85,
        special: 95
      }
    },
    {
      id: 118,
      name: 'goldeen',
      types: [
        'water'
      ],
      baseStats: {
        hp: 45,
        attack: 67,
        defense: 60,
        speed: 63,
        special: 50
      }
    },
    {
      id: 119,
      name: 'seaking',
      types: [
        'water'
      ],
      baseStats: {
        hp: 80,
        attack: 92,
        defense: 65,
        speed: 68,
        special: 80
      }
    },
    {
      id: 120,
      name: 'staryu',
      types: [
        'water'
      ],
      baseStats: {
        hp: 30,
        attack: 45,
        defense: 55,
        speed: 85,
        special: 70
      }
    },
    {
      id: 121,
      name: 'starmie',
      types: [
        'water',
        'psychic'
      ],
      baseStats: {
        hp: 60,
        attack: 75,
        defense: 85,
        speed: 115,
        special: 100
      }
    },
    {
      id: 122,
      name: 'mr. mime',
      types: [
        'psychic',
        'fairy'
      ],
      baseStats: {
        hp: 40,
        attack: 45,
        defense: 65,
        speed: 90,
        special: 100
      }
    },
    {
      id: 123,
      name: 'scyther',
      types: [
        'bug',
        'flying'
      ],
      baseStats: {
        hp: 70,
        attack: 110,
        defense: 80,
        speed: 105,
        special: 55
      }
    },
    {
      id: 124,
      name: 'jynx',
      types: [
        'ice',
        'psychic'
      ],
      baseStats: {
        hp: 65,
        attack: 50,
        defense: 35,
        speed: 95,
        special: 95
      }
    },
    {
      id: 125,
      name: 'electabuzz',
      types: [
        'electric'
      ],
      baseStats: {
        hp: 65,
        attack: 83,
        defense: 57,
        speed: 105,
        special: 85
      }
    },
    {
      id: 126,
      name: 'magmar',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 65,
        attack: 95,
        defense: 57,
        speed: 93,
        special: 85
      }
    },
    {
      id: 127,
      name: 'pinsir',
      types: [
        'bug'
      ],
      baseStats: {
        hp: 65,
        attack: 125,
        defense: 100,
        speed: 85,
        special: 55
      }
    },
    {
      id: 128,
      name: 'tauros',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 75,
        attack: 100,
        defense: 95,
        speed: 110,
        special: 70
      }
    },
    {
      id: 129,
      name: 'magikarp',
      types: [
        'water'
      ],
      baseStats: {
        hp: 20,
        attack: 10,
        defense: 55,
        speed: 80,
        special: 20
      }
    },
    {
      id: 130,
      name: 'gyarados',
      types: [
        'water',
        'flying'
      ],
      baseStats: {
        hp: 95,
        attack: 125,
        defense: 79,
        speed: 81,
        special: 100
      }
    },
    {
      id: 131,
      name: 'lapras',
      types: [
        'water',
        'ice'
      ],
      baseStats: {
        hp: 130,
        attack: 85,
        defense: 80,
        speed: 60,
        special: 95
      }
    },
    {
      id: 132,
      name: 'ditto',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 48,
        attack: 48,
        defense: 48,
        speed: 48,
        special: 48
      }
    },
    {
      id: 133,
      name: 'eevee',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 55,
        attack: 55,
        defense: 50,
        speed: 55,
        special: 65
      }
    },
    {
      id: 134,
      name: 'vaporeon',
      types: [
        'water'
      ],
      baseStats: {
        hp: 130,
        attack: 65,
        defense: 60,
        speed: 65,
        special: 110
      }
    },
    {
      id: 135,
      name: 'jolteon',
      types: [
        'electric'
      ],
      baseStats: {
        hp: 65,
        attack: 65,
        defense: 60,
        speed: 130,
        special: 110
      }
    },
    {
      id: 136,
      name: 'flareon',
      types: [
        'fire'
      ],
      baseStats: {
        hp: 65,
        attack: 130,
        defense: 60,
        speed: 65,
        special: 110
      }
    },
    {
      id: 137,
      name: 'porygon',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 65,
        attack: 60,
        defense: 70,
        speed: 40,
        special: 75
      }
    },
    {
      id: 138,
      name: 'omanyte',
      types: [
        'rock',
        'water'
      ],
      baseStats: {
        hp: 35,
        attack: 40,
        defense: 100,
        speed: 35,
        special: 90
      }
    },
    {
      id: 139,
      name: 'omastar',
      types: [
        'rock',
        'water'
      ],
      baseStats: {
        hp: 70,
        attack: 60,
        defense: 125,
        speed: 55,
        special: 115
      }
    },
    {
      id: 140,
      name: 'kabuto',
      types: [
        'rock',
        'water'
      ],
      baseStats: {
        hp: 30,
        attack: 80,
        defense: 90,
        speed: 55,
        special: 45
      }
    },
    {
      id: 141,
      name: 'kabutops',
      types: [
        'rock',
        'water'
      ],
      baseStats: {
        hp: 60,
        attack: 115,
        defense: 105,
        speed: 80,
        special: 70
      }
    },
    {
      id: 142,
      name: 'aerodactyl',
      types: [
        'rock',
        'flying'
      ],
      baseStats: {
        hp: 80,
        attack: 105,
        defense: 65,
        speed: 130,
        special: 60
      }
    },
    {
      id: 143,
      name: 'snorlax',
      types: [
        'normal'
      ],
      baseStats: {
        hp: 160,
        attack: 110,
        defense: 65,
        speed: 30,
        special: 65
      }
    },
    {
      id: 144,
      name: 'articuno',
      types: [
        'ice',
        'flying'
      ],
      baseStats: {
        hp: 90,
        attack: 85,
        defense: 100,
        speed: 85,
        special: 125
      }
    },
    {
      id: 145,
      name: 'zapdos',
      types: [
        'electric',
        'flying'
      ],
      baseStats: {
        hp: 90,
        attack: 90,
        defense: 85,
        speed: 100,
        special: 125
      }
    },
    {
      id: 146,
      name: 'moltres',
      types: [
        'fire',
        'flying'
      ],
      baseStats: {
        hp: 90,
        attack: 100,
        defense: 90,
        speed: 90,
        special: 125
      }
    },
    {
      id: 147,
      name: 'dratini',
      types: [
        'dragon'
      ],
      baseStats: {
        hp: 41,
        attack: 64,
        defense: 45,
        speed: 50,
        special: 50
      }
    },
    {
      id: 148,
      name: 'dragonair',
      types: [
        'dragon'
      ],
      baseStats: {
        hp: 61,
        attack: 84,
        defense: 65,
        speed: 70,
        special: 70
      }
    },
    {
      id: 149,
      name: 'dragonite',
      types: [
        'dragon',
        'flying'
      ],
      baseStats: {
        hp: 91,
        attack: 134,
        defense: 95,
        speed: 80,
        special: 100
      }
    },
    {
      id: 150,
      name: 'mewtwo',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 106,
        attack: 110,
        defense: 90,
        speed: 130,
        special: 154
      }
    },
    {
      id: 151,
      name: 'mew',
      types: [
        'psychic'
      ],
      baseStats: {
        hp: 100,
        attack: 100,
        defense: 100,
        speed: 100,
        special: 100
      }
    }
  ];