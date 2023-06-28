let pixelActiveColor = '#000000';
let gridSize = 8;

const sketch = document.querySelector(".sketch");
const colorPicker = document.querySelector(".color-picker");

colorPicker.addEventListener('input', (e) => {
  pixelActiveColor = e.target.value;
  document.documentElement.style.cssText = `--pixel-active-color: ${pixelActiveColor}`;
});

drawGrid();

function changeGrid() {
  let size = prompt("How large should the grid be?");
  size = parseInt(size);

  if(!Number.isInteger(size)|| size > 100 || size < 2) {
    alert('Please enter a number between 2-100')
    return;
  }
  gridSize = size;
  document.documentElement.style.cssText = `--grid-size: ${gridSize}`;
  drawGrid();
}

function drawGrid() {

  while(sketch.firstChild) {
    sketch.firstChild.remove();
  }

  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    sketch.appendChild(pixel);
  }

  document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('mousedown', () => setColor(pixel));
    pixel.addEventListener('mouseover', (e) => {
      if(e.buttons == 1) {
        setColor(pixel);
      }
    });
  });
}

function setColor(pixel) {
  if(!pixel.style.backgroundColor){
    pixel.style.backgroundColor = pixelActiveColor;
  }
  else {
    pixel.style.backgroundColor = ""
  }
}