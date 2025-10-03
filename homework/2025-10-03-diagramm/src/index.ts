const svg = document.getElementById('svg') as unknown as SVGElement;
const button = document.getElementById('generate') as HTMLButtonElement;
const MONTHS = 12;
const months = [
  document.getElementById('month1') as HTMLInputElement,
  document.getElementById('month2') as HTMLInputElement,
  document.getElementById('month3') as HTMLInputElement,
  document.getElementById('month4') as HTMLInputElement,
  document.getElementById('month5') as HTMLInputElement,
  document.getElementById('month6') as HTMLInputElement,
  document.getElementById('month7') as HTMLInputElement,
  document.getElementById('month8') as HTMLInputElement,
  document.getElementById('month9') as HTMLInputElement,
  document.getElementById('month10') as HTMLInputElement,
  document.getElementById('month11') as HTMLInputElement,
  document.getElementById('month12') as HTMLInputElement,
];

const width = 1200;
const height = 600;
const barwidth = 100;
button.addEventListener('click', () => {
  let maxvalue = 0;
  for (let i = 0; i < MONTHS; i++) {
    if (maxvalue < parseInt(months[i].value)) {
      maxvalue = parseInt(months[i].value);
    }
  }
  svg.innerHTML = '';
  for (let i = 0; i < MONTHS; i++) {
    if (months[i].value !== '') {
      const val = parseInt(months[i].value);
      const margin = height / maxvalue;
      const barHeight = val * margin;
      const y = height - barHeight;

      const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rectangle.setAttribute('x', `${barwidth * i}`);
      rectangle.setAttribute('y', `${y}`);
      rectangle.setAttribute('width', `${barwidth - 10}`);
      rectangle.setAttribute('height', `${barHeight}`);
      rectangle.setAttribute('fill', 'steelblue');

      svg.appendChild(rectangle);
    }
  }
});
