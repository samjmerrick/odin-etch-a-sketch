const sketch = document.querySelector(".sketch");
const colorPicker = document.querySelector(".color-picker");

let pixelActiveColor = '#000000';
let gridSize = 8;

function updateCSSVariables () {
  document.documentElement.style.cssText = `--pixel-active-color: ${pixelActiveColor}; --grid-size:${gridSize}`;
}

drawGrid();

colorPicker.addEventListener('input', (e) => {
  pixelActiveColor = e.target.value;
  updateCSSVariables();
});

function changeGrid() {
  let size = prompt("How large should the grid be?");
  size = parseInt(size);

  if(!Number.isInteger(size)|| size > 100 || size < 2) {
    alert('Please enter a number between 2-100')
    return;
  }
  gridSize = size;
  drawGrid();
}

function drawGrid() {

  while(sketch.firstChild) {
    sketch.firstChild.remove();
  }

  updateCSSVariables();

  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    sketch.appendChild(pixel);
  }

  document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('mousedown', () => setPixelColor(pixel));
    pixel.addEventListener('mouseover', (e) => {
      if(e.buttons == 1) {
        setPixelColor(pixel);
      }
    });
  });
}

function setPixelColor(pixel) {
  if(!pixel.style.backgroundColor){
    pixel.style.backgroundColor = pixelActiveColor;
  }
  else {
    pixel.style.backgroundColor = ""
  }
}