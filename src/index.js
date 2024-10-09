const palyer = {
  name: 'Mario',
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0
}

const player2 = {
  name: 'Peach',
  speed: 3,
  maneuverability: 4,
  power: 2,
  points: 0
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1 
}