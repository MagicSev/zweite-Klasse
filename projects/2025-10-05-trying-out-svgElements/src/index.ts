const svg = document.getElementById("svg") as unkown as SVGSVGElement;
const text = document.createElementNS("http://www.w3.org/2000/svg", "text") as SVGTextElement;
text.setAttribute("x", "250");
text.setAttribute("y", "250");
text.textContent="svgtext"
svg.appendChild(text);
const line = document.createElementNS("http://www.w3.org/2000/svg", "line") as SVGLineElement;
line.setAttribute("x1", "100");
line.setAttribute("y1", "400");
line.setAttribute("x2", "200");
line.setAttribute("y2", "500");
line.setAttribute("stroke-width","2")
line.setAttribute("stroke", "tomato");
svg.appendChild(line)
const triangle = document.createElementNS("http://www.w3.org/2000/svg" ,"polygon") as SVGPolygonElement;
triangle.setAttribute("points" ,"100,100 200,200 100,200") 
triangle.setAttribute("fill","yellow");
svg.appendChild(triangle)
const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect") as SVGRectElement;
rectangle.setAttribute("x", "400");
rectangle.setAttribute("y", "400");
rectangle.setAttribute("width", "80");
rectangle.setAttribute("height", "50");
rectangle.setAttribute("fill","steelblue");
svg.appendChild(rectangle);
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle") as SVGCircleElement;
circle.setAttribute("cx","400");
circle.setAttribute("cy","200");
circle.setAttribute("r","40");
circle.setAttribute("fill","lime");
svg.appendChild(circle);
const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse") as SVGEllipseElement;
ellipse.setAttribute("cx","250");
ellipse.setAttribute("cy","200");
ellipse.setAttribute("rx","40");
ellipse.setAttribute("ry","20");
ellipse.setAttribute("fill","red");
svg.appendChild(ellipse)