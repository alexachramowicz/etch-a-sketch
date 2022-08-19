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

function deleteGrid() {
    while(cardContainer.hasChildNodes())
        cardContainer.removeChild(cardContainer.lastChild);
}


DEFAULT_GRID_SIZE = 16;

const cardContainer = document.querySelector('.card-container');
const btnContainer = document.querySelector('.btn-container');
const gridButton = document.querySelector('#grid-btn');

// initialize grid
createCards(DEFAULT_GRID_SIZE);

gridButton.addEventListener('click', () => {
    let newGridSize = prompt("Please enter how many squares per side (this will clear the current grid!):")

    // Delete old grid
    deleteGrid();    

    // Create new grid with new size
    createCards(newGridSize);
})
