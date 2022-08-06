//create initial 16x16 grid

const gridSquare = document.createElement('div');
gridSquare.classList.add('grid-item');
const grid = document.querySelector('.grid')
createGrid(16);

function createGrid(gridSize) {
    // apply inline style to grid element to alter grid size
    grid.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); 
    grid-template-rows: repeat(${gridSize}, 1fr);`);
    // fill grid with new squares
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(gridSquare.cloneNode(true));
        }
    }
}

function destroyGrid() {
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
}

// add functionality to grid size button
const gridBtn = document.querySelector('.gridBtn');
gridBtn.addEventListener('click', () => {
    // remove previous grid
    destroyGrid();
    // prompt user for number between 1-100
    let input = 0;
    while (input < 1 || input > 100) {
        input = parseInt(prompt('Enter a number between 1-100'));
    }
    // change cssGrid according to input


    // rerun createGrid function
     createGrid(input);
});

// add event listener to grid squares to implement trail
document.querySelectorAll('.grid-item').forEach(item => item.addEventListener('mouseover', () => {
    item.classList.add('trail');
}));