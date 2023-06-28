const gridSize = 8;
const sketch = document.querySelector(".sketch");

sketch.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
sketch.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;

for (let i = 0; i < gridSize * gridSize; i++) {
  const pixel = document.createElement("div");
  pixel.className = "pixel";
  sketch.appendChild(pixel);
}

document.querySelectorAll('.pixel').forEach(pixel => {
  pixel.addEventListener('mousedown', () => pixel.classList.toggle('active'));
  pixel.addEventListener('mouseover', (e) => {
    if(e.buttons == 1) {
      pixel.classList.toggle('active');
    }
  });
});
