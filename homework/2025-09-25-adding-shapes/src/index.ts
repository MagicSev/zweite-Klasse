const select = document.getElementById('select') as HTMLSelectElement;
const add = document.getElementById('add') as HTMLButtonElement;
const clear = document.getElementById('clear') as HTMLButtonElement;
const svg = document.getElementById('svg') as unknown as SVGSVGElement;
const WIDTH = 600;
const HEIGHT = 400;

add.addEventListener('click', () => {
  if (select.value === 'circle') {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;
    const r = (Math.random() * 40) +10
    const red = `${Math.random()*255}`;
    const green = `${Math.random()*255}`;
    const blue = `${Math.random()*255}`;
    circle.setAttribute('fill', `rgb(${red},${green},${blue})`);
    circle.setAttribute('cx', `${Math.random() * (WIDTH-r*2)+r}`);
    circle.setAttribute('cy', `${Math.random() * (HEIGHT-r*2)+r}`);
    circle.setAttribute('r', String(r));
    svg.appendChild(circle);
  } else if (select.value === 'rectangle') {
    const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
    const rwidth = Math.random() * 80 +20;
    const rheight = Math.random() * 60 +20;
    const red = `${Math.random()*255}`;
    const green = `${Math.random()*255}`;
    const blue = `${Math.random()*255}`;

    rectangle.setAttribute('fill', `rgb(${red},${green},${blue})`);
    rectangle.setAttribute('x', `${Math.random() * (WIDTH-rwidth)}`);
    rectangle.setAttribute('y', `${Math.random() * (HEIGHT-rheight)}`);
    rectangle.setAttribute('width', String(rwidth));
    rectangle.setAttribute('height', String(rheight));
    svg.appendChild(rectangle);
  }
});
clear.addEventListener("click",()=>{
    svg.innerHTML = ''; 
})