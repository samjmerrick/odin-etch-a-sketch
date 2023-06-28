let gridSize = 8;
const sketch = document.querySelector(".sketch");

setGrid();

function changeGrid() {
  let size = prompt("How large should the grid be?");
  size = parseInt(size);

  if(!Number.isInteger(size)|| size > 100 || size < 2) {
    alert('Please enter a number between 2-100')
    return;
  }
  gridSize = size;
  setGrid();
}

function setGrid() {

  while(sketch.firstChild) {
    sketch.firstChild.remove();
  }

  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    sketch.appendChild(pixel);
  }

  sketch.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
  sketch.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;

  document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('mousedown', () => pixel.classList.toggle('active'));
    pixel.addEventListener('mouseover', (e) => {
      if(e.buttons == 1) {
        pixel.classList.toggle('active');
      }
    });
  });
}