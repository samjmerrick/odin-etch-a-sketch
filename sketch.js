const gridSize = 16;
const sketchContainer = document.querySelector(".sketch");

for (let i = 0; i < gridSize; i++) {
  const pixel = document.createElement("div");
  pixel.className = "pixel";
  sketchContainer.appendChild(pixel);
}
