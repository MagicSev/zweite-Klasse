const svg = document.getElementById('svg') as unknown as SVGSVGElement;
const color = document.getElementById('color') as HTMLInputElement;
const gridSize = document.getElementById('gridSize') as HTMLInputElement;
const startBtn = document.getElementById('start') as HTMLButtonElement;
const clearBtn = document.getElementById('clear') as HTMLButtonElement;

let rects: SVGRectElement[][] = [];

const WIDTH = 400;
const HEIGHT = 400;
let MARGIN: number;

let mouseX: number;
let mouseY: number;
function setup() {
  if (gridSize.value === '' || parseInt(gridSize.value) < 1) {
    console.log('Please enter a valid gridSize!');
    return;
  }

  rects = [];
  svg.innerHTML = '';
  MARGIN = WIDTH / parseInt(gridSize.value);

  for (let i = 0; i < parseInt(gridSize.value); i++) {
    const row = [];
    for (let j = 0; j < parseInt(gridSize.value); j++) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
      rect.setAttribute('x', `${j * MARGIN}`);
      rect.setAttribute('y', `${i * MARGIN}`);
      rect.setAttribute('width', `${MARGIN}`);
      rect.setAttribute('height', `${MARGIN}`);
      rect.setAttribute('fill', `${color.value}`);
      svg.appendChild(rect);

      row.push(rect);
    }
    rects.push(row);
  }
}

startBtn.addEventListener('click', () => {
  setup();
});

//gets mouseX and mouseY with help from chatGPT
svg.addEventListener('mousemove', (event) => {
  const rect = svg.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

svg.addEventListener('click', () => {
  if (gridSize.value === '') {
    return;
  }
  const i = Math.floor(mouseY / MARGIN);
  const j = Math.floor(mouseX / MARGIN);
  rects[i][j].setAttribute('fill', `${color.value}`);
});



clearBtn.addEventListener("click", ()=>{
    svg.innerHTML ="";
    rects = [];
})