const svg = document.getElementById('svg') as unknown as SVGSVGElement;
const button = document.getElementById('generate') as HTMLButtonElement;
const input = document.getElementById('sideSelector') as HTMLInputElement;
const width = 400;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;
const radius = 100;
type Coord = {
  x: number;
  y: number;
};
let coordinates: Coord[] = [];
button.addEventListener('click', () => {
  const sides = parseInt(input.value);
  if (sides < 3) {
    console.log('Please enter an integer that is >=3!');
    return;
  }
  coordinates = [];
  svg.innerHTML = '';
  for (let i = 0; i < sides; i++) {
    const angle = (2 * Math.PI * i) / sides; //CHAT GPT
    coordinates.push(
      //CHAT GPT
      {
        x: centerX + radius * Math.cos(angle), //CHAT GPT
        y: centerY + radius * Math.sin(angle), //CHAT GPT
      },
    ); //CHAT GPT
  }
  let coordString = '';
  for (let i = 0; i < sides; i++) {
    coordString += `${coordinates[i].x},${coordinates[i].y} `;
  }
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon') as SVGPolygonElement;
  polygon.setAttribute('points', coordString);
  polygon.setAttribute('fill', 'steelblue');
  svg.appendChild(polygon);
});
