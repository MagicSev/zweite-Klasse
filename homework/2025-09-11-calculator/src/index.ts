const result = document.getElementById("result") as HTMLParagraphElement;
const calculate = document.getElementById("calculate") as HTMLButtonElement;
const firstNum = document.getElementById("firstNum") as HTMLInputElement;
const secondNum = document.getElementById("secondNum") as HTMLInputElement;
const operation = document.getElementById("operation") as HTMLInputElement;
calculate.addEventListener("click", () => {
    if(operation.value ==="+"){
    result.textContent = String(parseInt(firstNum.value)+parseInt(secondNum.value));
    }
        else if(operation.value ==="-"){
    result.textContent = String(parseInt(firstNum.value)-parseInt(secondNum.value));
    }    else if(operation.value ==="*"){
    result.textContent = String(parseInt(firstNum.value)*parseInt(secondNum.value));
    }    else if(operation.value ==="/"){
    result.textContent = String(parseInt(firstNum.value)/parseInt(secondNum.value));
    }
})