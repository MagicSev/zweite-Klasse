const svg = document.getElementById("svg") as unknown as SVGSVGElement;
const color = document.getElementById("color") as HTMLInputElement;
const rows = document.getElementById("rows") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
let rects:SVGRectElement[][] = [];
const WIDTH = 400;
const HEIGHT = 400;
let mouseX:number;
let mouseY:number;
let MARGIN:number
function setup(){
    svg.innerHTML ="";
    MARGIN = WIDTH/parseInt(rows.value);
    for(let i = 0;i<parseInt(rows.value);i++){
        const row=[]
        for(let j = 0;j<parseInt(rows.value);j++){
            const rect = document.createElementNS("http://www.w3.org/2000/svg","rect") as SVGRectElement;
            rect.setAttribute("x",`${j*MARGIN}`)
            rect.setAttribute("y",`${i*MARGIN}`)
            rect.setAttribute("width",`${MARGIN}`)
            rect.setAttribute("height",`${MARGIN}`)
            rect.setAttribute("fill",`${color.value}`)
            row.push(rect)
            svg.appendChild(rect)
        }
        rects.push(row);
    }
    console.log(rects);
}
button.addEventListener("click",()=>{
    setup();
})
//gets mouseX and mouseY with help from chatGPT 
svg.addEventListener('mousemove', (event) => { 
    const rect = svg.getBoundingClientRect();
     mouseX = event.clientX - rect.left; 
     mouseY = event.clientY - rect.top; }
    );
svg.addEventListener("click", ()=>{
    if(rows.value === ""){
        return
    }
    const i= Math.floor(mouseY/MARGIN)
    const j= Math.floor(mouseX/MARGIN)
    console.log(`${i} ${j}`)
    rects[i][j].setAttribute("fill",`${color.value}`)
})