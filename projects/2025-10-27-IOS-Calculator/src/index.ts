import './styles.css';
const output = document.getElementById("output") as HTMLParagraphElement;
let input = 0;
function clear(){
input = 0;
output.textContent = "0";

}
(window as any).clear = clear;