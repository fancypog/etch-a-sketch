const gridContainer = document.getElementById('grid');

const rows = 16;
const columns = 16;


for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
    }
}

const gridItems = document.querySelectorAll('.gridItem');

function markHover(event) {
    event.target.classList.add('hovered');
}

gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseenter', markHover)
})
