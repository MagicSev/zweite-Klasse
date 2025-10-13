const svg = document.getElementById('svg') as unknown as SVGSVGElement;
const stepBtn = document.getElementById('step') as HTMLButtonElement;
const randomizeBtn = document.getElementById('randomize') as HTMLButtonElement;

const status: boolean[][] = [];
const rects: SVGRectElement[][] = [];
const WIDTH = 400;
const HEIGHT = 400;
const ROWS = 10;
const COLUMNS = 10;
const CELLW = WIDTH / COLUMNS;
const CELLH = HEIGHT / ROWS;
let mouseX: number;
let mouseY: number;

setup();

function setup() {
  for (let i = 0; i < ROWS; i++) {
    const ROW: boolean[] = [];
    const RECTROW: SVGRectElement[] = [];
    for (let j = 0; j < COLUMNS; j++) {
      ROW.push(false);
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
      rect.setAttribute('x', `${j * CELLW}`);
      rect.setAttribute('y', `${i * CELLH}`);
      rect.setAttribute('width', `${CELLW}`);
      rect.setAttribute('height', `${CELLH}`);
      rect.setAttribute('fill', 'lightgray');
      rect.setAttribute('stroke', 'black');
      svg.appendChild(rect);
      RECTROW.push(rect);
    }
    status.push(ROW);
    rects.push(RECTROW);
  }
}
svg.addEventListener('click', () => {
  const y = Math.floor(mouseY / CELLH);
  const x = Math.floor(mouseX / CELLW);
  status[y][x] = !status[y][x];
  if (status[y][x]) {
    rects[y][x].setAttribute('fill', 'steelblue');
  } else {
    rects[y][x].setAttribute('fill', 'lightgray');
  }
});
//gets mouseX and mouseY with help from chatGPT
svg.addEventListener('mousemove', (event) => {
  const rect = svg.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});
randomizeBtn.addEventListener('click', () => {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (Math.random() > 0.5) {
        status[i][j] = true;
        rects[i][j].setAttribute('fill', 'steelblue');
      } else {
        status[i][j] = false;
        rects[i][j].setAttribute('fill', 'lightgray');
      }
    }
  }
});
stepBtn.addEventListener('click', () => {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      let neighbors = 0;
      //if statements sind GPT(hatte kein bock das durchzudenken)
      if (i > 0 && j > 0 && status[i - 1][j - 1]) neighbors++;
      // Top
      if (i > 0 && status[i - 1][j]) neighbors++;
      // Top-right
      if (i > 0 && j < COLUMNS - 1 && status[i - 1][j + 1]) neighbors++;
      // Right
      if (j < COLUMNS - 1 && status[i][j + 1]) neighbors++;
      // Bottom-right
      if (i < ROWS - 1 && j < COLUMNS - 1 && status[i + 1][j + 1]) neighbors++;
      // Bottom
      if (i < ROWS - 1 && status[i + 1][j]) neighbors++;
      // Bottom-left
      if (i < ROWS - 1 && j > 0 && status[i + 1][j - 1]) neighbors++;
      // Left
      if (j > 0 && status[i][j - 1]) {
        neighbors++;
      }

      if (status[i][j]) {
        if (neighbors < 2 || neighbors > 3) {
          status[i][j] = false;
          rects[i][j].setAttribute('fill', 'lightgray');
        } else {
          status[i][j] = true;
          rects[i][j].setAttribute('fill', 'steelblue');
        }
      } else {
        if (neighbors === 3) {
          status[i][j] = true;
          rects[i][j].setAttribute('fill', 'steelblue');
        } else {
          status[i][j] = false;
          rects[i][j].setAttribute('fill', 'lightgray');
        }
      }
    }
  }
});
