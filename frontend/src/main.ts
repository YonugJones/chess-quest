import { Player } from './player'
import { setupInput } from './input'

const canvas = document.createElement('canvas') // create a canvas element
canvas.width = 800 // set canvas to width 800
canvas.height = 450 // setup canvas height to 600
document.body.appendChild(canvas) // add canvas to document body

canvas.style.border = '2px solid black' // add visible border around canvas frame

const ctx = canvas.getContext('2d')! // create ctx for 2d game drawing, guarantee it won't be null
const player = new Player(100, 450) // instantiate new player character
setupInput(player) // setup player controls

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  player.update()
  player.draw(ctx)

  requestAnimationFrame(gameLoop)
}

gameLoop()
