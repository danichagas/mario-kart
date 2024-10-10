const palyer1 = {
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

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break

    case random < 0.66:
      result = "CURVA"
      break

      default:
        result = "CONFRONTO"
      break
  }

  return result
}

async function raceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    // Sorteio do bloco
    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)
  }
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${palyer1.name} e ${player2.name} começando...\n`)

  await raceEngine(palyer1, player2)
})()