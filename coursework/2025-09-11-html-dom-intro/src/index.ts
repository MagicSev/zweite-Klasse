const increaseButton = document.getElementById('countUp') as HTMLButtonElement;
const counter = document.getElementById('counter') as HTMLParagraphElement;
const decreaseButton = document.getElementById('countDown') as HTMLButtonElement;
const increment = document.getElementById("increment") as HTMLInputElement;
const select = document.getElementById("incrementValue") as HTMLSelectElement;
let clickCount = 0;
select.addEventListener('change', () => {
    increment.value = select.value;
});
increaseButton.addEventListener('click', () => {
  clickCount += parseInt(increment.value);
  counter.textContent = `${clickCount}`;
  if (clickCount >= 0) {
    counter.style.color = 'black';
  }
});


decreaseButton.addEventListener('click', () => {
  clickCount -= parseInt(increment.value);
  counter.textContent = `${clickCount}`;
  if (clickCount < 0) {
    counter.style.color = 'red';
  }
});
