const svg = document.getElementById('svg') as unknown as SVGSVGElement;
const monthlyTemps: number[] = [
  1, // January
  2, // February
  5, // March
  10, // April
  15, // May
  22, // June
  25, // July
  25, // August
  20, // September
  14, // October
  7, // November
  2, // December
];
const WIDTH = 1150;
const HEIGHT = 200;
const barwidth = 50;
const gap = 50;
for (let i = 0; i < monthlyTemps.length; i++) {
  const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
  rectangle.setAttribute('x', `${i * (gap + barwidth)}`);
  rectangle.setAttribute('y', `${HEIGHT - (monthlyTemps[i] * 200) / 25}`);
  rectangle.setAttribute('fill', 'steelblue');
  rectangle.setAttribute('width', `${barwidth}`);
  rectangle.setAttribute('height', `${(monthlyTemps[i] * 200) / 25}`);
  svg.appendChild(rectangle);
}
