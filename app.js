const grid = document.querySelector('.grid');

//gridsize is how many by how many (i.e 16x16)
const GRIDSIZE = 16;

//create divs here
for (let i = 0; i < GRIDSIZE * GRIDSIZE; i++) {
	const div = document.createElement('div');
	div.classList.add('square');
	grid.append(div);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => square.addEventListener('click', draw));

function draw(e) {
	e.target.style.background = 'green';
	e.target.style.transition = 'none';
}

console.log(squares);
