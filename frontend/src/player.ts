export class Player {
  // x increases to the RIGHT
  // y increases DOWNWARD

  x: number // Player's x coordinate (left side of the block)
  y: number // Player's y coordinate (top of the block)
  width: number = 50 // width
  height: number = 50 // height
  vx: number = 0 // horizontal velocity
  vy: number = 0 // vertical velocity
  gravity: number = 0.8 // gravity, acceleration applied downward each frame
  onGround: boolean = false // true if player is standing on ground

  constructor(x: number, y: number) {
    this.x = x // initial x coordinate of player instance, left side of player
    this.y = y // initial y coordinate of player instance, top of player
  }

  update() {
    // apply gravity
    this.vy += this.gravity

    // apply movement
    this.y += this.vy
    this.x += this.vx

    // checks for ground collision
    if (this.y + this.height >= 450) {
      // if the bottom of the player is >= the bottom of the canvas
      this.y = 450 - this.height // position of player snaps to bottom of canvas
      this.vy = 0 // vertical speed set to 0
      this.onGround = true // onGround is true
    } else {
      this.onGround = false
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'royalblue'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
