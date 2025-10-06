const svg = document.getElementById('svg') as unknown as SVGElement;
const button = document.getElementById('generate') as HTMLButtonElement;
const threshold = document.getElementById("threshold") as HTMLInputElement;
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
const barwidth = 1000/12;
const width = 1200;
const height = 500;
drawLines();
button.addEventListener('click', () => {
  let maxvalue = 0;
  for (let i = 0; i < MONTHS; i++) {
    if (maxvalue < parseInt(months[i].value)) {
      maxvalue = parseInt(months[i].value);
    }
  }
  svg.innerHTML = '';
  drawLines();
  for (let i = 0; i < MONTHS; i++) {
    if (months[i].value !== '') {
      const val = parseInt(months[i].value);
      const margin = height / maxvalue;
      const barHeight = val * margin;
      const y = height - barHeight+100;
      const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      if(parseInt(threshold.value)>val){
        rectangle.setAttribute('fill', 'green');
      }else{
        rectangle.setAttribute('fill', 'red');
      }
      rectangle.setAttribute('x', `${barwidth * i}`);
      rectangle.setAttribute('y', `${y}`);
      rectangle.setAttribute('width', `${barwidth - 10}`);
      rectangle.setAttribute('height', `${barHeight}`);

      svg.appendChild(rectangle);
    }

  }
});
function drawLines(){
const line = document.createElementNS("http://www.w3.org/2000/svg","line") as SVGLineElement;
line.setAttribute("x1","0");
line.setAttribute("y1","0");
line.setAttribute("x2", "0");
line.setAttribute("y2","600");
line.setAttribute("stroke", "black");
line.setAttribute("stroke-width", "2");
svg.appendChild(line);
const line1 = document.createElementNS("http://www.w3.org/2000/svg","line") as SVGLineElement;
line1.setAttribute("x1", "0");
line1.setAttribute("y1", "600");
line1.setAttribute("x2", "1000");
line1.setAttribute("y2", "600");
line1.setAttribute("stroke", "black");
line1.setAttribute("stroke-width", "2");
svg.appendChild(line1)
    for(let i = 0; i<months.length;i++){
      const line2 = document.createElementNS("http://www.w3.org/2000/svg","line") as SVGLineElement;
      line2.setAttribute("x1",`${i*barwidth-5}`);
      line2.setAttribute("y1", "595");
      line2.setAttribute("x2", `${i*barwidth-5}`);
      line2.setAttribute("y2", "600");
      line2.setAttribute("stroke", "black");
      line2.setAttribute("stroke-width", "2");
      svg.appendChild(line2)
    }
}