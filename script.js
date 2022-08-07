//create initial 16x16 grid

const gridSquare = document.createElement('div');
gridSquare.classList.add('grid-item');
const grid = document.querySelector('.grid')
createGrid(16);
colorTrail();

document.querySelector("#colorPicker").onchange = e => {
    let currentSize = Math.sqrt(document.querySelectorAll('.grid-item').length);
    destroyGrid();
    createGrid(currentSize);
    let color = e.target.value;
    document.documentElement.style.setProperty('--trail-color', color);
    colorTrail();
 }

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
    // rerun createGrid function
    createGrid(input);
    colorTrail();
});

// add function to prepare trail when grid is created
function colorTrail() {
    // add event listener to grid squares to implement trail on mouseover
    document.querySelectorAll('.grid-item').forEach(item => item.addEventListener('mouseover', () => {
        item.classList.add('trail');
    }))}

function randomTrail() {
    // add event listener to grid squares to implement random colours on mouseover
    document.querySelectorAll('.grid-item').forEach(item => item.addEventListener('mouseover', () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;}))
    }

// add functionality to random button
const randBtn = document.querySelector('.randBtn');
randBtn.addEventListener('click', () => {
        //destroy and replace current grid
        let currentSize = Math.sqrt(document.querySelectorAll('.grid-item').length);
        destroyGrid();
        createGrid(currentSize);
        //call randomTrail function
        randomTrail();
})
