//create initial 16x16 grid

const gridSquare = document.createElement('div');
gridSquare.classList.add('grid-item');
const grid = document.querySelector('.grid')
createGrid(16);

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(gridSquare.cloneNode(true));
        }
    }
}

// add event listener on button
const gridBtn = document.querySelector('.gridBtn');
gridBtn.addEventListener
    // prompt user for number between 1-100


    // check number is valid and an integer


    // change cssGrid according to input


    // rerun createGrid function