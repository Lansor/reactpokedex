const pokemon = [
  {
    "id": 1,
    "nom": "Bulbasaur",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 45,
      "attaque": 49,
      "defense": 49,
      "atkSpe": 65,
      "defSpe": 65,
      "vitesse": 45
    }
  },
  {
    "id": 2,
    "nom": "Ivysaur",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 60,
      "attaque": 62,
      "defense": 63,
      "atkSpe": 80,
      "defSpe": 80,
      "vitesse": 60
    }
  },
  {
    "id": 3,
    "nom": "Venusaur",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 80,
      "attaque": 82,
      "defense": 83,
      "atkSpe": 100,
      "defSpe": 100,
      "vitesse": 80
    }
  },
  {
    "id": 4,
    "nom": "Charmander",
    "types": ["Fire"],
    "stats": {
      "pv": 39,
      "attaque": 52,
      "defense": 43,
      "atkSpe": 60,
      "defSpe": 50,
      "vitesse": 65
    }
  },
  {
    "id": 5,
    "nom": "Charmeleon",
    "types": ["Fire"],
    "stats": {
      "pv": 58,
      "attaque": 64,
      "defense": 58,
      "atkSpe": 80,
      "defSpe": 65,
      "vitesse": 80
    }
  },
  {
    "id": 6,
    "nom": "Charizard",
    "types": ["Fire", "Flying"],
    "stats": {
      "pv": 78,
      "attaque": 84,
      "defense": 78,
      "atkSpe": 109,
      "defSpe": 85,
      "vitesse": 100
    }
  },
  {
    "id": 7,
    "nom": "Squirtle",
    "types": ["Water"],
    "stats": {
      "pv": 44,
      "attaque": 48,
      "defense": 65,
      "atkSpe": 50,
      "defSpe": 64,
      "vitesse": 43
    }
  },
  {
    "id": 8,
    "nom": "Wartortle",
    "types": ["Water"],
    "stats": {
      "pv": 59,
      "attaque": 63,
      "defense": 80,
      "atkSpe": 65,
      "defSpe": 80,
      "vitesse": 58
    }
  },
  {
    "id": 9,
    "nom": "Blastoise",
    "types": ["Water"],
    "stats": {
      "pv": 79,
      "attaque": 83,
      "defense": 100,
      "atkSpe": 85,
      "defSpe": 105,
      "vitesse": 78
    }
  },
  {
    "id": 10,
    "nom": "Caterpie",
    "types": ["Bug"],
    "stats": {
      "pv": 45,
      "attaque": 30,
      "defense": 35,
      "atkSpe": 20,
      "defSpe": 20,
      "vitesse": 45
    }
  },
  {
    "id": 11,
    "nom": "Metapod",
    "types": ["Bug"],
    "stats": {
      "pv": 50,
      "attaque": 20,
      "defense": 55,
      "atkSpe": 25,
      "defSpe": 25,
      "vitesse": 30
    }
  },
  {
    "id": 12,
    "nom": "Butterfree",
    "types": ["Bug", "Flying"],
    "stats": {
      "pv": 60,
      "attaque": 45,
      "defense": 50,
      "atkSpe": 90,
      "defSpe": 80,
      "vitesse": 70
    }
  },
  {
    "id": 13,
    "nom": "Weedle",
    "types": ["Bug", "Poison"],
    "stats": {
      "pv": 40,
      "attaque": 35,
      "defense": 30,
      "atkSpe": 20,
      "defSpe": 20,
      "vitesse": 50
    }
  },
  {
    "id": 14,
    "nom": "Kakuna",
    "types": ["Bug", "Poison"],
    "stats": {
      "pv": 45,
      "attaque": 25,
      "defense": 50,
      "atkSpe": 25,
      "defSpe": 25,
      "vitesse": 35
    }
  },
  {
    "id": 15,
    "nom": "Beedrill",
    "types": ["Bug", "Poison"],
    "stats": {
      "pv": 65,
      "attaque": 90,
      "defense": 40,
      "atkSpe": 45,
      "defSpe": 80,
      "vitesse": 75
    }
  },
  {
    "id": 16,
    "nom": "Pidgey",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 40,
      "attaque": 45,
      "defense": 40,
      "atkSpe": 35,
      "defSpe": 35,
      "vitesse": 56
    }
  },
  {
    "id": 17,
    "nom": "Pidgeotto",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 63,
      "attaque": 60,
      "defense": 55,
      "atkSpe": 50,
      "defSpe": 50,
      "vitesse": 71
    }
  },
  {
    "id": 18,
    "nom": "Pidgeot",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 83,
      "attaque": 80,
      "defense": 75,
      "atkSpe": 70,
      "defSpe": 70,
      "vitesse": 101
    }
  },
  {
    "id": 19,
    "nom": "Rattata",
    "types": ["Normal"],
    "stats": {
      "pv": 30,
      "attaque": 56,
      "defense": 35,
      "atkSpe": 25,
      "defSpe": 35,
      "vitesse": 72
    }
  },
  {
    "id": 20,
    "nom": "Raticate",
    "types": ["Normal"],
    "stats": {
      "pv": 55,
      "attaque": 81,
      "defense": 60,
      "atkSpe": 50,
      "defSpe": 70,
      "vitesse": 97
    }
  },
  {
    "id": 21,
    "nom": "Spearow",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 40,
      "attaque": 60,
      "defense": 30,
      "atkSpe": 31,
      "defSpe": 31,
      "vitesse": 70
    }
  },
  {
    "id": 22,
    "nom": "Fearow",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 65,
      "attaque": 90,
      "defense": 65,
      "atkSpe": 61,
      "defSpe": 61,
      "vitesse": 100
    }
  },
  {
    "id": 23,
    "nom": "Ekans",
    "types": ["Poison"],
    "stats": {
      "pv": 35,
      "attaque": 60,
      "defense": 44,
      "atkSpe": 40,
      "defSpe": 54,
      "vitesse": 55
    }
  },
  {
    "id": 24,
    "nom": "Arbok",
    "types": ["Poison"],
    "stats": {
      "pv": 60,
      "attaque": 85,
      "defense": 69,
      "atkSpe": 65,
      "defSpe": 79,
      "vitesse": 80
    }
  },
  {
    "id": 25,
    "nom": "Pikachu",
    "types": ["Electric"],
    "stats": {
      "pv": 35,
      "attaque": 55,
      "defense": 40,
      "atkSpe": 50,
      "defSpe": 50,
      "vitesse": 90
    }
  },
  {
    "id": 26,
    "nom": "Raichu",
    "types": ["Electric"],
    "stats": {
      "pv": 60,
      "attaque": 90,
      "defense": 55,
      "atkSpe": 90,
      "defSpe": 80,
      "vitesse": 110
    }
  },
  {
    "id": 27,
    "nom": "Sandshrew",
    "types": ["Ground"],
    "stats": {
      "pv": 50,
      "attaque": 75,
      "defense": 85,
      "atkSpe": 20,
      "defSpe": 30,
      "vitesse": 40
    }
  },
  {
    "id": 28,
    "nom": "Sandslash",
    "types": ["Ground"],
    "stats": {
      "pv": 75,
      "attaque": 100,
      "defense": 110,
      "atkSpe": 45,
      "defSpe": 55,
      "vitesse": 65
    }
  },
  {
    "id": 29,
    "nom": "Nidoran♀",
    "types": ["Poison"],
    "stats": {
      "pv": 55,
      "attaque": 47,
      "defense": 52,
      "atkSpe": 40,
      "defSpe": 40,
      "vitesse": 41
    }
  },
  {
    "id": 30,
    "nom": "Nidorina",
    "types": ["Poison"],
    "stats": {
      "pv": 70,
      "attaque": 62,
      "defense": 67,
      "atkSpe": 55,
      "defSpe": 55,
      "vitesse": 56
    }
  },
  {
    "id": 31,
    "nom": "Nidoqueen",
    "types": ["Poison", "Ground"],
    "stats": {
      "pv": 90,
      "attaque": 92,
      "defense": 87,
      "atkSpe": 75,
      "defSpe": 85,
      "vitesse": 76
    }
  },
  {
    "id": 32,
    "nom": "Nidoran♂",
    "types": ["Poison"],
    "stats": {
      "pv": 46,
      "attaque": 57,
      "defense": 40,
      "atkSpe": 40,
      "defSpe": 40,
      "vitesse": 50
    }
  },
  {
    "id": 33,
    "nom": "Nidorino",
    "types": ["Poison"],
    "stats": {
      "pv": 61,
      "attaque": 72,
      "defense": 57,
      "atkSpe": 55,
      "defSpe": 55,
      "vitesse": 65
    }
  },
  {
    "id": 34,
    "nom": "Nidoking",
    "types": ["Poison", "Ground"],
    "stats": {
      "pv": 81,
      "attaque": 102,
      "defense": 77,
      "atkSpe": 85,
      "defSpe": 75,
      "vitesse": 85
    }
  },
  {
    "id": 35,
    "nom": "Clefairy",
    "types": ["Fairy"],
    "stats": {
      "pv": 70,
      "attaque": 45,
      "defense": 48,
      "atkSpe": 60,
      "defSpe": 65,
      "vitesse": 35
    }
  },
  {
    "id": 36,
    "nom": "Clefable",
    "types": ["Fairy"],
    "stats": {
      "pv": 95,
      "attaque": 70,
      "defense": 73,
      "atkSpe": 95,
      "defSpe": 90,
      "vitesse": 60
    }
  },
  {
    "id": 37,
    "nom": "Vulpix",
    "types": ["Fire"],
    "stats": {
      "pv": 38,
      "attaque": 41,
      "defense": 40,
      "atkSpe": 50,
      "defSpe": 65,
      "vitesse": 65
    }
  },
  {
    "id": 38,
    "nom": "Ninetales",
    "types": ["Fire"],
    "stats": {
      "pv": 73,
      "attaque": 76,
      "defense": 75,
      "atkSpe": 81,
      "defSpe": 100,
      "vitesse": 100
    }
  },
  {
    "id": 39,
    "nom": "Jigglypuff",
    "types": ["Normal", "Fairy"],
    "stats": {
      "pv": 115,
      "attaque": 45,
      "defense": 20,
      "atkSpe": 45,
      "defSpe": 25,
      "vitesse": 20
    }
  },
  {
    "id": 40,
    "nom": "Wigglytuff",
    "types": ["Normal", "Fairy"],
    "stats": {
      "pv": 140,
      "attaque": 70,
      "defense": 45,
      "atkSpe": 85,
      "defSpe": 50,
      "vitesse": 45
    }
  },
  {
    "id": 41,
    "nom": "Zubat",
    "types": ["Poison", "Flying"],
    "stats": {
      "pv": 40,
      "attaque": 45,
      "defense": 35,
      "atkSpe": 30,
      "defSpe": 40,
      "vitesse": 55
    }
  },
  {
    "id": 42,
    "nom": "Golbat",
    "types": ["Poison", "Flying"],
    "stats": {
      "pv": 75,
      "attaque": 80,
      "defense": 70,
      "atkSpe": 65,
      "defSpe": 75,
      "vitesse": 90
    }
  },
  {
    "id": 43,
    "nom": "Oddish",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 45,
      "attaque": 50,
      "defense": 55,
      "atkSpe": 75,
      "defSpe": 65,
      "vitesse": 30
    }
  },
  {
    "id": 44,
    "nom": "Gloom",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 60,
      "attaque": 65,
      "defense": 70,
      "atkSpe": 85,
      "defSpe": 75,
      "vitesse": 40
    }
  },
  {
    "id": 45,
    "nom": "Vileplume",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 75,
      "attaque": 80,
      "defense": 85,
      "atkSpe": 110,
      "defSpe": 90,
      "vitesse": 50
    }
  },
  {
    "id": 46,
    "nom": "Paras",
    "types": ["Bug", "Grass"],
    "stats": {
      "pv": 35,
      "attaque": 70,
      "defense": 55,
      "atkSpe": 45,
      "defSpe": 55,
      "vitesse": 25
    }
  },
  {
    "id": 47,
    "nom": "Parasect",
    "types": ["Bug", "Grass"],
    "stats": {
      "pv": 60,
      "attaque": 95,
      "defense": 80,
      "atkSpe": 60,
      "defSpe": 80,
      "vitesse": 30
    }
  },
  {
    "id": 48,
    "nom": "Venonat",
    "types": ["Bug", "Poison"],
    "stats": {
      "pv": 60,
      "attaque": 55,
      "defense": 50,
      "atkSpe": 40,
      "defSpe": 55,
      "vitesse": 45
    }
  },
  {
    "id": 49,
    "nom": "Venomoth",
    "types": ["Bug", "Poison"],
    "stats": {
      "pv": 70,
      "attaque": 65,
      "defense": 60,
      "atkSpe": 90,
      "defSpe": 75,
      "vitesse": 90
    }
  },
  {
    "id": 50,
    "nom": "Diglett",
    "types": ["Ground"],
    "stats": {
      "pv": 10,
      "attaque": 55,
      "defense": 25,
      "atkSpe": 35,
      "defSpe": 45,
      "vitesse": 95
    }
  },
  {
    "id": 51,
    "nom": "Dugtrio",
    "types": ["Ground"],
    "stats": {
      "pv": 35,
      "attaque": 100,
      "defense": 50,
      "atkSpe": 50,
      "defSpe": 70,
      "vitesse": 120
    }
  },
  {
    "id": 52,
    "nom": "Meowth",
    "types": ["Normal"],
    "stats": {
      "pv": 40,
      "attaque": 45,
      "defense": 35,
      "atkSpe": 40,
      "defSpe": 40,
      "vitesse": 90
    }
  },
  {
    "id": 53,
    "nom": "Persian",
    "types": ["Normal"],
    "stats": {
      "pv": 65,
      "attaque": 70,
      "defense": 60,
      "atkSpe": 65,
      "defSpe": 65,
      "vitesse": 115
    }
  },
  {
    "id": 54,
    "nom": "Psyduck",
    "types": ["Water"],
    "stats": {
      "pv": 50,
      "attaque": 52,
      "defense": 48,
      "atkSpe": 65,
      "defSpe": 50,
      "vitesse": 55
    }
  },
  {
    "id": 55,
    "nom": "Golduck",
    "types": ["Water"],
    "stats": {
      "pv": 80,
      "attaque": 82,
      "defense": 78,
      "atkSpe": 95,
      "defSpe": 80,
      "vitesse": 85
    }
  },
  {
    "id": 56,
    "nom": "Mankey",
    "types": ["Fighting"],
    "stats": {
      "pv": 40,
      "attaque": 80,
      "defense": 35,
      "atkSpe": 35,
      "defSpe": 45,
      "vitesse": 70
    }
  },
  {
    "id": 57,
    "nom": "Primeape",
    "types": ["Fighting"],
    "stats": {
      "pv": 65,
      "attaque": 105,
      "defense": 60,
      "atkSpe": 60,
      "defSpe": 70,
      "vitesse": 95
    }
  },
  {
    "id": 58,
    "nom": "Growlithe",
    "types": ["Fire"],
    "stats": {
      "pv": 55,
      "attaque": 70,
      "defense": 45,
      "atkSpe": 70,
      "defSpe": 50,
      "vitesse": 60
    }
  },
  {
    "id": 59,
    "nom": "Arcanine",
    "types": ["Fire"],
    "stats": {
      "pv": 90,
      "attaque": 110,
      "defense": 80,
      "atkSpe": 100,
      "defSpe": 80,
      "vitesse": 95
    }
  },
  {
    "id": 60,
    "nom": "Poliwag",
    "types": ["Water"],
    "stats": {
      "pv": 40,
      "attaque": 50,
      "defense": 40,
      "atkSpe": 40,
      "defSpe": 40,
      "vitesse": 90
    }
  },
  {
    "id": 61,
    "nom": "Poliwhirl",
    "types": ["Water"],
    "stats": {
      "pv": 65,
      "attaque": 65,
      "defense": 65,
      "atkSpe": 50,
      "defSpe": 50,
      "vitesse": 90
    }
  },
  {
    "id": 62,
    "nom": "Poliwrath",
    "types": ["Water", "Fighting"],
    "stats": {
      "pv": 90,
      "attaque": 95,
      "defense": 95,
      "atkSpe": 70,
      "defSpe": 90,
      "vitesse": 70
    }
  },
  {
    "id": 63,
    "nom": "Abra",
    "types": ["Psychic"],
    "stats": {
      "pv": 25,
      "attaque": 20,
      "defense": 15,
      "atkSpe": 105,
      "defSpe": 55,
      "vitesse": 90
    }
  },
  {
    "id": 64,
    "nom": "Kadabra",
    "types": ["Psychic"],
    "stats": {
      "pv": 40,
      "attaque": 35,
      "defense": 30,
      "atkSpe": 120,
      "defSpe": 70,
      "vitesse": 105
    }
  },
  {
    "id": 65,
    "nom": "Alakazam",
    "types": ["Psychic"],
    "stats": {
      "pv": 55,
      "attaque": 50,
      "defense": 45,
      "atkSpe": 135,
      "defSpe": 95,
      "vitesse": 120
    }
  },
  {
    "id": 66,
    "nom": "Machop",
    "types": ["Fighting"],
    "stats": {
      "pv": 70,
      "attaque": 80,
      "defense": 50,
      "atkSpe": 35,
      "defSpe": 35,
      "vitesse": 35
    }
  },
  {
    "id": 67,
    "nom": "Machoke",
    "types": ["Fighting"],
    "stats": {
      "pv": 80,
      "attaque": 100,
      "defense": 70,
      "atkSpe": 50,
      "defSpe": 60,
      "vitesse": 45
    }
  },
  {
    "id": 68,
    "nom": "Machamp",
    "types": ["Fighting"],
    "stats": {
      "pv": 90,
      "attaque": 130,
      "defense": 80,
      "atkSpe": 65,
      "defSpe": 85,
      "vitesse": 55
    }
  },
  {
    "id": 69,
    "nom": "Bellsprout",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 50,
      "attaque": 75,
      "defense": 35,
      "atkSpe": 70,
      "defSpe": 30,
      "vitesse": 40
    }
  },
  {
    "id": 70,
    "nom": "Weepinbell",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 65,
      "attaque": 90,
      "defense": 50,
      "atkSpe": 85,
      "defSpe": 45,
      "vitesse": 55
    }
  },
  {
    "id": 71,
    "nom": "Victreebel",
    "types": ["Grass", "Poison"],
    "stats": {
      "pv": 80,
      "attaque": 105,
      "defense": 65,
      "atkSpe": 100,
      "defSpe": 70,
      "vitesse": 70
    }
  },
  {
    "id": 72,
    "nom": "Tentacool",
    "types": ["Water", "Poison"],
    "stats": {
      "pv": 40,
      "attaque": 40,
      "defense": 35,
      "atkSpe": 50,
      "defSpe": 100,
      "vitesse": 70
    }
  },
  {
    "id": 73,
    "nom": "Tentacruel",
    "types": ["Water", "Poison"],
    "stats": {
      "pv": 80,
      "attaque": 70,
      "defense": 65,
      "atkSpe": 80,
      "defSpe": 120,
      "vitesse": 100
    }
  },
  {
    "id": 74,
    "nom": "Geodude",
    "types": ["Rock", "Ground"],
    "stats": {
      "pv": 40,
      "attaque": 80,
      "defense": 100,
      "atkSpe": 30,
      "defSpe": 30,
      "vitesse": 20
    }
  },
  {
    "id": 75,
    "nom": "Graveler",
    "types": ["Rock", "Ground"],
    "stats": {
      "pv": 55,
      "attaque": 95,
      "defense": 115,
      "atkSpe": 45,
      "defSpe": 45,
      "vitesse": 35
    }
  },
  {
    "id": 76,
    "nom": "Golem",
    "types": ["Rock", "Ground"],
    "stats": {
      "pv": 80,
      "attaque": 120,
      "defense": 130,
      "atkSpe": 55,
      "defSpe": 65,
      "vitesse": 45
    }
  },
  {
    "id": 77,
    "nom": "Ponyta",
    "types": ["Fire"],
    "stats": {
      "pv": 50,
      "attaque": 85,
      "defense": 55,
      "atkSpe": 65,
      "defSpe": 65,
      "vitesse": 90
    }
  },
  {
    "id": 78,
    "nom": "Rapidash",
    "types": ["Fire"],
    "stats": {
      "pv": 65,
      "attaque": 100,
      "defense": 70,
      "atkSpe": 80,
      "defSpe": 80,
      "vitesse": 105
    }
  },
  {
    "id": 79,
    "nom": "Slowpoke",
    "types": ["Water", "Psychic"],
    "stats": {
      "pv": 90,
      "attaque": 65,
      "defense": 65,
      "atkSpe": 40,
      "defSpe": 40,
      "vitesse": 15
    }
  },
  {
    "id": 80,
    "nom": "Slowbro",
    "types": ["Water", "Psychic"],
    "stats": {
      "pv": 95,
      "attaque": 75,
      "defense": 110,
      "atkSpe": 100,
      "defSpe": 80,
      "vitesse": 30
    }
  },
  {
    "id": 81,
    "nom": "Magnemite",
    "types": ["Electric", "Steel"],
    "stats": {
      "pv": 25,
      "attaque": 35,
      "defense": 70,
      "atkSpe": 95,
      "defSpe": 55,
      "vitesse": 45
    }
  },
  {
    "id": 82,
    "nom": "Magneton",
    "types": ["Electric", "Steel"],
    "stats": {
      "pv": 50,
      "attaque": 60,
      "defense": 95,
      "atkSpe": 120,
      "defSpe": 70,
      "vitesse": 70
    }
  },
  {
    "id": 83,
    "nom": "Farfetch'd",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 52,
      "attaque": 90,
      "defense": 55,
      "atkSpe": 58,
      "defSpe": 62,
      "vitesse": 60
    }
  },
  {
    "id": 84,
    "nom": "Doduo",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 35,
      "attaque": 85,
      "defense": 45,
      "atkSpe": 35,
      "defSpe": 35,
      "vitesse": 75
    }
  },
  {
    "id": 85,
    "nom": "Dodrio",
    "types": ["Normal", "Flying"],
    "stats": {
      "pv": 60,
      "attaque": 110,
      "defense": 70,
      "atkSpe": 60,
      "defSpe": 60,
      "vitesse": 110
    }
  },
  {
    "id": 86,
    "nom": "Seel",
    "types": ["Water"],
    "stats": {
      "pv": 65,
      "attaque": 45,
      "defense": 55,
      "atkSpe": 45,
      "defSpe": 70,
      "vitesse": 45
    }
  },
  {
    "id": 87,
    "nom": "Dewgong",
    "types": ["Water", "Ice"],
    "stats": {
      "pv": 90,
      "attaque": 70,
      "defense": 80,
      "atkSpe": 70,
      "defSpe": 95,
      "vitesse": 70
    }
  },
  {
    "id": 88,
    "nom": "Grimer",
    "types": ["Poison"],
    "stats": {
      "pv": 80,
      "attaque": 80,
      "defense": 50,
      "atkSpe": 40,
      "defSpe": 50,
      "vitesse": 25
    }
  },
  {
    "id": 89,
    "nom": "Muk",
    "types": ["Poison"],
    "stats": {
      "pv": 105,
      "attaque": 105,
      "defense": 75,
      "atkSpe": 65,
      "defSpe": 100,
      "vitesse": 50
    }
  },
  {
    "id": 90,
    "nom": "Shellder",
    "types": ["Water"],
    "stats": {
      "pv": 30,
      "attaque": 65,
      "defense": 100,
      "atkSpe": 45,
      "defSpe": 25,
      "vitesse": 40
    }
  },
  {
    "id": 91,
    "nom": "Cloyster",
    "types": ["Water", "Ice"],
    "stats": {
      "pv": 50,
      "attaque": 95,
      "defense": 180,
      "atkSpe": 85,
      "defSpe": 45,
      "vitesse": 70
    }
  },
  {
    "id": 92,
    "nom": "Gastly",
    "types": ["Ghost", "Poison"],
    "stats": {
      "pv": 30,
      "attaque": 35,
      "defense": 30,
      "atkSpe": 100,
      "defSpe": 35,
      "vitesse": 80
    }
  },
  {
    "id": 93,
    "nom": "Haunter",
    "types": ["Ghost", "Poison"],
    "stats": {
      "pv": 45,
      "attaque": 50,
      "defense": 45,
      "atkSpe": 115,
      "defSpe": 55,
      "vitesse": 95
    }
  },
  {
    "id": 94,
    "nom": "Gengar",
    "types": ["Ghost", "Poison"],
    "stats": {
      "pv": 60,
      "attaque": 65,
      "defense": 60,
      "atkSpe": 130,
      "defSpe": 75,
      "vitesse": 110
    }
  },
  {
    "id": 95,
    "nom": "Onix",
    "types": ["Rock", "Ground"],
    "stats": {
      "pv": 35,
      "attaque": 45,
      "defense": 160,
      "atkSpe": 30,
      "defSpe": 45,
      "vitesse": 70
    }
  },
  {
    "id": 96,
    "nom": "Drowzee",
    "types": ["Psychic"],
    "stats": {
      "pv": 60,
      "attaque": 48,
      "defense": 45,
      "atkSpe": 43,
      "defSpe": 90,
      "vitesse": 42
    }
  },
  {
    "id": 97,
    "nom": "Hypno",
    "types": ["Psychic"],
    "stats": {
      "pv": 85,
      "attaque": 73,
      "defense": 70,
      "atkSpe": 73,
      "defSpe": 115,
      "vitesse": 67
    }
  },
  {
    "id": 98,
    "nom": "Krabby",
    "types": ["Water"],
    "stats": {
      "pv": 30,
      "attaque": 105,
      "defense": 90,
      "atkSpe": 25,
      "defSpe": 25,
      "vitesse": 50
    }
  },
  {
    "id": 99,
    "nom": "Kingler",
    "types": ["Water"],
    "stats": {
      "pv": 55,
      "attaque": 130,
      "defense": 115,
      "atkSpe": 50,
      "defSpe": 50,
      "vitesse": 75
    }
  },
  {
    "id": 100,
    "nom": "Voltorb",
    "types": ["Electric"],
    "stats": {
      "pv": 40,
      "attaque": 30,
      "defense": 50,
      "atkSpe": 55,
      "defSpe": 55,
      "vitesse": 100
    }
  },
  {
    "id": 101,
    "nom": "Electrode",
    "types": ["Electric"],
    "stats": {
      "pv": 60,
      "attaque": 50,
      "defense": 70,
      "atkSpe": 80,
      "defSpe": 80,
      "vitesse": 140
    }
  },
  {
    "id": 102,
    "nom": "Exeggcute",
    "types": ["Grass", "Psychic"],
    "stats": {
      "pv": 60,
      "attaque": 40,
      "defense": 80,
      "atkSpe": 60,
      "defSpe": 45,
      "vitesse": 40
    }
  },
  {
    "id": 103,
    "nom": "Exeggutor",
    "types": ["Grass", "Psychic"],
    "stats": {
      "pv": 95,
      "attaque": 95,
      "defense": 85,
      "atkSpe": 125,
      "defSpe": 65,
      "vitesse": 55
    }
  },
  {
    "id": 104,
    "nom": "Cubone",
    "types": ["Ground"],
    "stats": {
      "pv": 50,
      "attaque": 50,
      "defense": 95,
      "atkSpe": 40,
      "defSpe": 50,
      "vitesse": 35
    }
  },
  {
    "id": 105,
    "nom": "Marowak",
    "types": ["Ground"],
    "stats": {
      "pv": 60,
      "attaque": 80,
      "defense": 110,
      "atkSpe": 50,
      "defSpe": 80,
      "vitesse": 45
    }
  },
  {
    "id": 106,
    "nom": "Hitmonlee",
    "types": ["Fighting"],
    "stats": {
      "pv": 50,
      "attaque": 120,
      "defense": 53,
      "atkSpe": 35,
      "defSpe": 110,
      "vitesse": 87
    }
  },
  {
    "id": 107,
    "nom": "Hitmonchan",
    "types": ["Fighting"],
    "stats": {
      "pv": 50,
      "attaque": 105,
      "defense": 79,
      "atkSpe": 35,
      "defSpe": 110,
      "vitesse": 76
    }
  },
  {
    "id": 108,
    "nom": "Lickitung",
    "types": ["Normal"],
    "stats": {
      "pv": 90,
      "attaque": 55,
      "defense": 75,
      "atkSpe": 60,
      "defSpe": 75,
      "vitesse": 30
    }
  },
  {
    "id": 109,
    "nom": "Koffing",
    "types": ["Poison"],
    "stats": {
      "pv": 40,
      "attaque": 65,
      "defense": 95,
      "atkSpe": 60,
      "defSpe": 45,
      "vitesse": 35
    }
  },
  {
    "id": 110,
    "nom": "Weezing",
    "types": ["Poison"],
    "stats": {
      "pv": 65,
      "attaque": 90,
      "defense": 120,
      "atkSpe": 85,
      "defSpe": 70,
      "vitesse": 60
    }
  },
  {
    "id": 111,
    "nom": "Rhyhorn",
    "types": ["Ground", "Rock"],
    "stats": {
      "pv": 80,
      "attaque": 85,
      "defense": 95,
      "atkSpe": 30,
      "defSpe": 30,
      "vitesse": 25
    }
  },
  {
    "id": 112,
    "nom": "Rhydon",
    "types": ["Ground", "Rock"],
    "stats": {
      "pv": 105,
      "attaque": 130,
      "defense": 120,
      "atkSpe": 45,
      "defSpe": 45,
      "vitesse": 40
    }
  },
  {
    "id": 113,
    "nom": "Chansey",
    "types": ["Normal"],
    "stats": {
      "pv": 250,
      "attaque": 5,
      "defense": 5,
      "atkSpe": 35,
      "defSpe": 105,
      "vitesse": 50
    }
  },
  {
    "id": 114,
    "nom": "Tangela",
    "types": ["Grass"],
    "stats": {
      "pv": 65,
      "attaque": 55,
      "defense": 115,
      "atkSpe": 100,
      "defSpe": 40,
      "vitesse": 60
    }
  },
  {
    "id": 115,
    "nom": "Kangaskhan",
    "types": ["Normal"],
    "stats": {
      "pv": 105,
      "attaque": 95,
      "defense": 80,
      "atkSpe": 40,
      "defSpe": 80,
      "vitesse": 90
    }
  },
  {
    "id": 116,
    "nom": "Horsea",
    "types": ["Water"],
    "stats": {
      "pv": 30,
      "attaque": 40,
      "defense": 70,
      "atkSpe": 70,
      "defSpe": 25,
      "vitesse": 60
    }
  },
  {
    "id": 117,
    "nom": "Seadra",
    "types": ["Water"],
    "stats": {
      "pv": 55,
      "attaque": 65,
      "defense": 95,
      "atkSpe": 95,
      "defSpe": 45,
      "vitesse": 85
    }
  },
  {
    "id": 118,
    "nom": "Goldeen",
    "types": ["Water"],
    "stats": {
      "pv": 45,
      "attaque": 67,
      "defense": 60,
      "atkSpe": 35,
      "defSpe": 50,
      "vitesse": 63
    }
  },
  {
    "id": 119,
    "nom": "Seaking",
    "types": ["Water"],
    "stats": {
      "pv": 80,
      "attaque": 92,
      "defense": 65,
      "atkSpe": 65,
      "defSpe": 80,
      "vitesse": 68
    }
  },
  {
    "id": 120,
    "nom": "Staryu",
    "types": ["Water"],
    "stats": {
      "pv": 30,
      "attaque": 45,
      "defense": 55,
      "atkSpe": 70,
      "defSpe": 55,
      "vitesse": 85
    }
  },
  {
    "id": 121,
    "nom": "Starmie",
    "types": ["Water", "Psychic"],
    "stats": {
      "pv": 60,
      "attaque": 75,
      "defense": 85,
      "atkSpe": 100,
      "defSpe": 85,
      "vitesse": 115
    }
  },
  {
    "id": 122,
    "nom": "Mr. Mime",
    "types": ["Psychic", "Fairy"],
    "stats": {
      "pv": 40,
      "attaque": 45,
      "defense": 65,
      "atkSpe": 100,
      "defSpe": 120,
      "vitesse": 90
    }
  },
  {
    "id": 123,
    "nom": "Scyther",
    "types": ["Bug", "Flying"],
    "stats": {
      "pv": 70,
      "attaque": 110,
      "defense": 80,
      "atkSpe": 55,
      "defSpe": 80,
      "vitesse": 105
    }
  },
  {
    "id": 124,
    "nom": "Jynx",
    "types": ["Ice", "Psychic"],
    "stats": {
      "pv": 65,
      "attaque": 50,
      "defense": 35,
      "atkSpe": 115,
      "defSpe": 95,
      "vitesse": 95
    }
  },
  {
    "id": 125,
    "nom": "Electabuzz",
    "types": ["Electric"],
    "stats": {
      "pv": 65,
      "attaque": 83,
      "defense": 57,
      "atkSpe": 95,
      "defSpe": 85,
      "vitesse": 105
    }
  },
  {
    "id": 126,
    "nom": "Magmar",
    "types": ["Fire"],
    "stats": {
      "pv": 65,
      "attaque": 95,
      "defense": 57,
      "atkSpe": 100,
      "defSpe": 85,
      "vitesse": 93
    }
  },
  {
    "id": 127,
    "nom": "Pinsir",
    "types": ["Bug"],
    "stats": {
      "pv": 65,
      "attaque": 125,
      "defense": 100,
      "atkSpe": 55,
      "defSpe": 70,
      "vitesse": 85
    }
  },
  {
    "id": 128,
    "nom": "Tauros",
    "types": ["Normal"],
    "stats": {
      "pv": 75,
      "attaque": 100,
      "defense": 95,
      "atkSpe": 40,
      "defSpe": 70,
      "vitesse": 110
    }
  },
  {
    "id": 129,
    "nom": "Magikarp",
    "types": ["Water"],
    "stats": {
      "pv": 20,
      "attaque": 10,
      "defense": 55,
      "atkSpe": 15,
      "defSpe": 20,
      "vitesse": 80
    }
  },
  {
    "id": 130,
    "nom": "Gyarados",
    "types": ["Water", "Flying"],
    "stats": {
      "pv": 95,
      "attaque": 125,
      "defense": 79,
      "atkSpe": 60,
      "defSpe": 100,
      "vitesse": 81
    }
  },
  {
    "id": 131,
    "nom": "Lapras",
    "types": ["Water", "Ice"],
    "stats": {
      "pv": 130,
      "attaque": 85,
      "defense": 80,
      "atkSpe": 85,
      "defSpe": 95,
      "vitesse": 60
    }
  },
  {
    "id": 132,
    "nom": "Ditto",
    "types": ["Normal"],
    "stats": {
      "pv": 48,
      "attaque": 48,
      "defense": 48,
      "atkSpe": 48,
      "defSpe": 48,
      "vitesse": 48
    }
  },
  {
    "id": 133,
    "nom": "Eevee",
    "types": ["Normal"],
    "stats": {
      "pv": 55,
      "attaque": 55,
      "defense": 50,
      "atkSpe": 45,
      "defSpe": 65,
      "vitesse": 55
    }
  },
  {
    "id": 134,
    "nom": "Vaporeon",
    "types": ["Water"],
    "stats": {
      "pv": 130,
      "attaque": 65,
      "defense": 60,
      "atkSpe": 110,
      "defSpe": 95,
      "vitesse": 65
    }
  },
  {
    "id": 135,
    "nom": "Jolteon",
    "types": ["Electric"],
    "stats": {
      "pv": 65,
      "attaque": 65,
      "defense": 60,
      "atkSpe": 110,
      "defSpe": 95,
      "vitesse": 130
    }
  },
  {
    "id": 136,
    "nom": "Flareon",
    "types": ["Fire"],
    "stats": {
      "pv": 65,
      "attaque": 130,
      "defense": 60,
      "atkSpe": 95,
      "defSpe": 110,
      "vitesse": 65
    }
  },
  {
    "id": 137,
    "nom": "Porygon",
    "types": ["Normal"],
    "stats": {
      "pv": 65,
      "attaque": 60,
      "defense": 70,
      "atkSpe": 85,
      "defSpe": 75,
      "vitesse": 40
    }
  },
  {
    "id": 138,
    "nom": "Omanyte",
    "types": ["Rock", "Water"],
    "stats": {
      "pv": 35,
      "attaque": 40,
      "defense": 100,
      "atkSpe": 90,
      "defSpe": 55,
      "vitesse": 35
    }
  },
  {
    "id": 139,
    "nom": "Omastar",
    "types": ["Rock", "Water"],
    "stats": {
      "pv": 70,
      "attaque": 60,
      "defense": 125,
      "atkSpe": 115,
      "defSpe": 70,
      "vitesse": 55
    }
  },
  {
    "id": 140,
    "nom": "Kabuto",
    "types": ["Rock", "Water"],
    "stats": {
      "pv": 30,
      "attaque": 80,
      "defense": 90,
      "atkSpe": 55,
      "defSpe": 45,
      "vitesse": 55
    }
  },
  {
    "id": 141,
    "nom": "Kabutops",
    "types": ["Rock", "Water"],
    "stats": {
      "pv": 60,
      "attaque": 115,
      "defense": 105,
      "atkSpe": 65,
      "defSpe": 70,
      "vitesse": 80
    }
  },
  {
    "id": 142,
    "nom": "Aerodactyl",
    "types": ["Rock", "Flying"],
    "stats": {
      "pv": 80,
      "attaque": 105,
      "defense": 65,
      "atkSpe": 60,
      "defSpe": 75,
      "vitesse": 130
    }
  },
  {
    "id": 143,
    "nom": "Snorlax",
    "types": ["Normal"],
    "stats": {
      "pv": 160,
      "attaque": 110,
      "defense": 65,
      "atkSpe": 65,
      "defSpe": 110,
      "vitesse": 30
    }
  },
  {
    "id": 144,
    "nom": "Articuno",
    "types": ["Ice", "Flying"],
    "stats": {
      "pv": 90,
      "attaque": 85,
      "defense": 100,
      "atkSpe": 95,
      "defSpe": 125,
      "vitesse": 85
    }
  },
  {
    "id": 145,
    "nom": "Zapdos",
    "types": ["Electric", "Flying"],
    "stats": {
      "pv": 90,
      "attaque": 90,
      "defense": 85,
      "atkSpe": 125,
      "defSpe": 90,
      "vitesse": 100
    }
  },
  {
    "id": 146,
    "nom": "Moltres",
    "types": ["Fire", "Flying"],
    "stats": {
      "pv": 90,
      "attaque": 100,
      "defense": 90,
      "atkSpe": 125,
      "defSpe": 85,
      "vitesse": 90
    }
  },
  {
    "id": 147,
    "nom": "Dratini",
    "types": ["Dragon"],
    "stats": {
      "pv": 41,
      "attaque": 64,
      "defense": 45,
      "atkSpe": 50,
      "defSpe": 50,
      "vitesse": 50
    }
  },
  {
    "id": 148,
    "nom": "Dragonair",
    "types": ["Dragon"],
    "stats": {
      "pv": 61,
      "attaque": 84,
      "defense": 65,
      "atkSpe": 70,
      "defSpe": 70,
      "vitesse": 70
    }
  },
  {
    "id": 149,
    "nom": "Dragonite",
    "types": ["Dragon", "Flying"],
    "stats": {
      "pv": 91,
      "attaque": 134,
      "defense": 95,
      "atkSpe": 100,
      "defSpe": 100,
      "vitesse": 80
    }
  },
  {
    "id": 150,
    "nom": "Mewtwo",
    "types": ["Psychic"],
    "stats": {
      "pv": 106,
      "attaque": 110,
      "defense": 90,
      "atkSpe": 154,
      "defSpe": 90,
      "vitesse": 130
    }
  },
  {
    "id": 151,
    "nom": "Mew",
    "types": ["Psychic"],
    "stats": {
      "pv": 100,
      "attaque": 100,
      "defense": 100,
      "atkSpe": 100,
      "defSpe": 100,
      "vitesse": 100
    }
  }
]

export default pokemon
