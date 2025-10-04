const svg = document.getElementById('svg') as unkown as SVGSVGElement;
const red = document.getElementById('r') as HTMLInputElement;
const green = document.getElementById('g') as HTMLInputElement;
const blue = document.getElementById('b') as HTMLInputElement;

let interval: number;
let drawing: boolean = false;
let mouseX: number;
let mouseY: number;
svg.addEventListener('click', () => {
  drawing = !drawing;
  if (drawing) {
    interval = setInterval(draw, 1000 / 120);
  } else {
    clearInterval(interval);
  }
});
svg.addEventListener('mousemove', (event) => {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});
function draw() {
  if (green.value !== '' && red.value !== '' && blue.value !== '') {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;
    circle.setAttribute('r', `${5}`);
    circle.setAttribute('cx', `${mouseX}`);
    circle.setAttribute('cy', `${mouseY}`);
    circle.setAttribute('fill', `rgb(${parseInt(red.value)},${parseInt(green.value)},${parseInt(blue.value)})`);
    svg.appendChild(circle);
  } else {
    console.log('Error: please fill in the colors');
    clearInterval(interval);
    drawing = false;
  }
}
