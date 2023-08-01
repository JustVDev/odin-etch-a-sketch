const grid = document.querySelector('.grid');

//gridsize is how many by how many (i.e 16x16)

let gridSize = gridSizeInput.value;
createGrid(gridSize);
label.textContent = gridSize;

gridSizeInput.addEventListener('mouseup', () => {
	gridSize = gridSizeInput.value;
	grid.innerHTML = '';
	createGrid(gridSize);
	label.textContent = gridSize;
});

function createGrid(gridSize) {
	//creates squares
	for (let i = 0; i < gridSize * gridSize; i++) {
		const div = document.createElement('div');
		div.classList.add('square');
		div.style.flex = `1 0 calc((100%) / ${gridSizeInput.value})`;
		grid.append(div);
	}
	const squares = document.querySelectorAll('.square');
	squares.forEach((square) => square.addEventListener('click', draw));
}

function draw(e) {
	e.target.style.background = 'green';
	// turn off trailing effect
	e.target.style.transition = 'none';
}

year.textContent = new Date().getFullYear();
