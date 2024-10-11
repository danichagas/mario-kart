const player1 = {
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

async function logRollResult(characterName, block, diceResult, atribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${atribute} = ${diceResult + atribute}`)
}

async function raceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    // Sorteio do bloco
    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

    // Rolar os dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    // Teste de habilidade
    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.speed
      totalTestSkill2 = diceResult2 + character2.speed

      await logRollResult(player1.name, 'velocidade', diceResult1, character1.speed)
      await logRollResult(player2.name, 'velocidade', diceResult2, character2.speed)
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.maneuverability
      totalTestSkill2 = diceResult2 + character2.maneuverability

      await logRollResult(player1.name, 'manobrabilidade', diceResult1, character1.maneuverability)
      await logRollResult(player2.name, 'manobrabilidade', diceResult2, character2.maneuverability)   
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.power
      let powerResult2 = diceResult2 + character2.power
    }

    // Verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name} marcou um ponto!`)
      character1.points++
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.name} marcou um ponto!`)
      character2.points++
    }

    console.log('-----------------------------------------------------')
  }
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.name} e ${player2.name} começando...\n`)

  await raceEngine(player1, player2)
})()