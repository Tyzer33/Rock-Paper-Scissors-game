const scoreDisplay = document.querySelector('#score')
const tokens = document.querySelectorAll('.token__clickable')
const playerPickToken = document.querySelector('#player-pick')
const housePickToken = document.querySelector('#house-pick')
const gamePick = document.querySelector('.game-pick')
const gameResult = document.querySelector('.game-result')
const resultContainer = document.querySelector('.result')
const resultDisplay = document.querySelector('.result--display')
const reset = document.querySelector('#reset')

const tokenList = {
  rock: { beatenBy: 'paper' },
  paper: { beatenBy: 'scissors' },
  scissors: { beatenBy: 'rock' },
}

function randomChoice(max) {
  return Math.floor(Math.random() * max)
}

let playerPick = ''
let housePick = ''
let score = 0

function handlePlayerChoice(token) {
  playerPick = token.dataset.name
  playerPickToken.classList.add(`token__${playerPick}`)
  playerPickToken.children[0].src = `./images/icon-${playerPick}.svg`
}

function makeHouseChoice() {
  housePick = Object.keys(tokenList)[randomChoice(3)]
  housePickToken.classList.add(`token__${housePick}`)
  housePickToken.children[0].src = `./images/icon-${housePick}.svg`
}

function switchScreen() {
  gamePick.style.display = 'none'
  gameResult.style.display = 'flex'
}

function displayHouseChoice() {
  setTimeout(() => {
    housePickToken.style.visibility = 'visible'
  }, 800)
}

function displayResult() {
  setTimeout(() => {
    resultContainer.style.display = 'flex'
  }, 1200)
}

function whoWin() {
  if (playerPick === housePick) {
    resultDisplay.textContent = 'Draw'
  } else if (playerPick === tokenList[housePick].beatenBy) {
    resultDisplay.textContent = 'You Win'
    score += 1
    setTimeout(() => {
      scoreDisplay.textContent = score
    }, 1200)
  } else {
    resultDisplay.textContent = 'You Lose'
  }
}

tokens.forEach((token) => {
  token.addEventListener('click', () => {
    handlePlayerChoice(token)
    makeHouseChoice()
    switchScreen()
    displayHouseChoice()
    displayResult()
    whoWin()
  })
})

function resetScreen() {
  gameResult.style.display = 'none'
  gamePick.style.display = 'flex'
}

function resetClass() {
  playerPickToken.classList.remove(`token__${playerPick}`)
  housePickToken.classList.remove(`token__${housePick}`)
  housePickToken.style.visibility = 'hidden'
  resultContainer.style.display = 'none'
}

reset.addEventListener('click', () => {
  resetScreen()
  resetClass()
})
