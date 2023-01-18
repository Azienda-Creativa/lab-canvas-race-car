// game area is html canvas => it can be variables, an obj, a function or even a class
const gameArea = {
  canvas: document.querySelector("#canvas"),
  ctx: canvas.getContext("2d"),
  width: canvas.width,
  height: canvas.height,
}

function placeRoad() {
  const road = new Image()
  road.src = "images/road.png"

  road.onload = () => {
    gameArea.ctx.drawImage(road, 0, 0, gameArea.width, gameArea.height)
  }
}

function placeCar() {
  const car = new Image()
  car.src = "images/car.png"

  car.onload = () => {
    gameArea.ctx.drawImage(car, 200, 600, 90, 60)
  }
}

function placeRandomObstacles(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let randomx = placeRandomObstacles(80, 150)
let randomY = placeRandomObstacles(100, 20)

// 3 make the car move
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case 37: // left arrow
      player.speedX -= 1
      break
    case 39: // right arrow
      player.speedX += 1
      break
  }
})

//4 create obstacles
const obstacles = []

// when the window loads, show start button, when clicking fire startGame function

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame()
  }

  function startGame() {
    placeRoad()
    placeCar()
  }
}
addEventListener
