
import { onSnake, expandSnake } from "./snake.js"
import { randomPos } from "./grid.js"

let food = randomFood()
const EXPANSION_RATE = 1

export function update() {

    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = randomFood()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function randomFood() {
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomPos()
    }
    return newFoodPosition
}