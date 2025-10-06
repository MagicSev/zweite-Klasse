const svg = document.getElementById('svg') as unknown as SVGSVGElement;
const rows = document.getElementById('rows') as HTMLInputElement;
const columns = document.getElementById('columns') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const width = 400;
const height = 400;
button.addEventListener('click', () => {
  if (rows.value === '' || columns.value === '' || parseInt(columns.value) <= 0 || parseInt(rows.value) <= 0) {
    console.log('Please enter a valid number!');
    return;
  }
  svg.innerHTML = '';
  const r = parseInt(rows.value);
  const c = parseInt(columns.value);
  const diameterX = width / c;
  const diameterY = height / r;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse') as SVGEllipseElement;
      ellipse.setAttribute('cx', `${j * diameterX + diameterX / 2}`);
      ellipse.setAttribute('cy', `${i * diameterY + diameterY / 2}`);
      ellipse.setAttribute('rx', `${diameterX / 2}`);
      ellipse.setAttribute('ry', `${diameterY / 2}`);
      ellipse.setAttribute('fill', `steelblue`);
      svg.appendChild(ellipse);
    }
  }
});
