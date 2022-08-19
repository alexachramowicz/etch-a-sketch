function createCards(gridSize) {

    for(let i = 0; i < gridSize; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        cardContainer.appendChild(rowContainer);
        for(let j = 0; j < gridSize; j++) {
            let card = document.createElement('div');
            card.classList.add('card');
            rowContainer.appendChild(card);
        }
    }
}

// Create new grid with input size
function newGrid() {
    let newGridSize = parseInt(prompt("Please enter how many squares per side (1-100):"),10);
    if(isNaN(newGridSize) | newGridSize > 100 | newGridSize < 1) {
        alert("Please enter a valid number between 1 and 100")
        return;
    }

    // Delete old grid
    deleteGrid();    
    // Create new grid with new size
    createCards(newGridSize);
}

// Delete cards from DOM
function deleteGrid() {
    while(cardContainer.hasChildNodes())
        cardContainer.removeChild(cardContainer.lastChild);
}


//--------------------------------------------------------------
// Definitions
DEFAULT_GRID_SIZE = 16;

const cardContainer = document.querySelector('.card-container');
const btnContainer = document.querySelector('.btn-container');
const gridButton = document.querySelector('#grid-btn');
const toggleButton = document.querySelector('#toggle-btn');
const clearButton = document.querySelector('#clear-btn');


// Initialize grid
createCards(DEFAULT_GRID_SIZE);

// Create new grid with input size
gridButton.addEventListener('click', newGrid);

// Draw on mouseover
cardContainer.addEventListener('mouseover', e => {
    let card = document.querySelector('.card');
    card = e.target;
    if(card.classList.contains('card-container')) return;
    card.setAttribute('style', 'background-color: black');
});


// Clear canvas button
clearButton.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.setAttribute('style', 'background-color: white');
    });
});

// Toggle grid button 
// toggleButton.addEventListener('click', () => {
//     let cards = query.querySelectorAll('.card');

//     cards.forEach(card => {
        
//     })

// })