import { Player } from './player'

export function setupInput(player: Player) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'd') player.vx = 5
    if (e.key === 'a') player.vx = -5
    if (e.key === 'w' && player.onGround) player.vy = -15
  })

  window.addEventListener('keyup', (e) => {
    if (e.key === 'd' || e.key === 'a') player.vx = 0
  })
}
