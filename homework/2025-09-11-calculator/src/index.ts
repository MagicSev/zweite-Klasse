const result = document.getElementById('result') as HTMLParagraphElement;
const calculate = document.getElementById('calculate') as HTMLButtonElement;
const firstNum = document.getElementById('firstNum') as HTMLInputElement;
const secondNum = document.getElementById('secondNum') as HTMLInputElement;
const operation = document.getElementById('operation') as HTMLSelectElement;
const history = document.getElementById('history') as HTMLParagraphElement;
type Calculation = {
  first:string,
  symbol:string,
  second:string,
  outcome:string,
}

let historylist:Calculation[] = [];

calculate.addEventListener('click', () => {
  if (firstNum.value !== '' && secondNum.value !== '') {
    switch(operation.value){
      case "+" : result.textContent = String(parseInt(firstNum.value) + parseInt(secondNum.value))
                 historylist.push({
                  first:firstNum.value,
                  second:secondNum.value,
                  symbol:"+",
                  outcome:String(parseInt(firstNum.value)+parseInt(secondNum.value))})
                  break;
      case "-" :  result.textContent = String(parseInt(firstNum.value) - parseInt(secondNum.value))
                  historylist.push({
                  first:firstNum.value,
                  second:secondNum.value,
                  symbol:"-",
                  outcome:String(parseInt(firstNum.value) - parseInt(secondNum.value))})
                  break;
      case "*" :  result.textContent = String(parseInt(firstNum.value) * parseInt(secondNum.value))
                  historylist.push({
                  first:firstNum.value,
                  second:secondNum.value,
                  symbol:"*",
                  outcome:String(parseInt(firstNum.value) * parseInt(secondNum.value))})
                  break;
      case "/" :  
                    if(secondNum.value ===""){
                              result.textContent = "You can't divide by Zero!";
                              break;
                    }
                  result.textContent = String(parseInt(firstNum.value) / parseInt(secondNum.value))
                  historylist.push({
                  first:firstNum.value,
                  second:secondNum.value,
                  symbol:"/",
                  outcome:String(parseInt(firstNum.value) / parseInt(secondNum.value))})
                  break;
                  
      case "%" :  result.textContent = String(parseInt(firstNum.value) % parseInt(secondNum.value))
                  historylist.push({
                  first:firstNum.value,
                  second:secondNum.value,
                  symbol:"%",
                  outcome:String(parseInt(firstNum.value) % parseInt(secondNum.value))})
                  break;
                  }



  }else{
    result.textContent = "Please fill in the numbers!";
  }
  history.textContent = "";
  for(let i = 0;i<historylist.length;i++){
    history.textContent += `${historylist[i].first} ${historylist[i].symbol} ${historylist[i].second} = ${historylist[i].outcome}`
  }
});

