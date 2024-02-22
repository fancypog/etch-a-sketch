const gridContainer = document.getElementById('grid');

const rows = 10;
const columns = 10;


for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = 'Cell ${i+1}-${j+1}';

        gridContainer.appendChild(gridItem);
    }
}