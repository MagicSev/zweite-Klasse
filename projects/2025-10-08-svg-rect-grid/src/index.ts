const rows = document.getElementById("rows") as HTMLInputElement;
const columns = document.getElementById("columns") as HTMLInputElement;
const button = document.getElementById("generate") as HTMLButtonElement;
const svg = document.getElementById("svg") as unknown as SVGSVGElement;
const width = 400;
const height = 400;
button.addEventListener("click", ()=>{
    svg.innerHTML ="";
    const r = parseInt(rows.value);
    const c = parseInt(columns.value)
    if(r<1||c<1){
        console.log("Please enter an allowed number!");
        return;
    }
    const rwidth = width/c;
    const rheight = height/r
    for(let i = 0;i<r;i++){
        for(let j=0;j<c;j++){
            const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect") as SVGRectElement;
            rectangle.setAttribute("x", `${rwidth*j}`)
            rectangle.setAttribute("y", `${rheight*i}`)
            rectangle.setAttribute("width",`${rwidth}`)
            rectangle.setAttribute("height",`${rheight}`)
            rectangle.setAttribute("fill","steelblue");
            rectangle.setAttribute("stroke","black")
            svg.appendChild(rectangle);
        }
    }
})
svg.addEventListener("click" ,(event)=>{
    const rects = document.querySelectorAll("rect");
    const rect = event.target as SVGRectElement | null;
    if(!rect ||event.target.tagName !=="rect"){
        return;
    }
    
        for(let i = 0; i<rects.length;i++){
            const current = rect.getAttribute("fill");
            if(current === "steelblue")rect.setAttribute("fill","tomato");
            else if(current ==="tomato") rect.setAttribute("fill","steelblue");
        }
})