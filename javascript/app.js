const main = document.querySelector('#main');
const container = document.createElement('div');
const button = document.querySelector('button');

const slider = document.querySelector('#mySlider');
const sliderText = document.querySelector('#sliderText');

function clearGrid(grid) {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

sliderText.textContent = slider.value;
slider.oninput = function () {
    sliderText.textContent = slider.value;
    container.style.gridTemplateColumns = 'repeat(' + slider.value + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + slider.value + ', 1fr)';
    clearGrid(container);
    drawGrid(slider.value);
}


function clearCells() {
    let cells = document.querySelectorAll('.cell');
    cells = Array.from(cells);
    for (cell of cells) {
        cell.style.backgroundColor = 'white';
    }
}

button.addEventListener('click', () => {
    clearCells();
});

container.classList.add('grid');

sketchSide = 16;

function drawGrid(side) {
    for (let i = 1; i <= side; i++){
        for (let j = 1; j <= side; j++) {
            let sketchCell = document.createElement('div');
            sketchCell.classList.add('cell');
            container.appendChild(sketchCell);
            sketchCell.addEventListener('mouseover', () => {
                sketchCell.style.backgroundColor = 'black';
            });
        }
    }
}

main.appendChild(container);
drawGrid(sketchSide);