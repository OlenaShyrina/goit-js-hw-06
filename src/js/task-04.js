const btnMinusRef = document.querySelector("[data-action=decrement]");
const btnPlusRef = document.querySelector("[data-action=inctement]");

const counterValue = document.querySelector('#value');
counterValue.value = 0;
btnMinusRef.addEventListener('click', () => {
    counterValue.value -=1;
    counterValue.textContent = counterValue.value;
});

btnPlusRef.addEventListener('click', () => {
    counterValue.value +=1;
    counterValue.textContent = counter.Value.value;
});

console.log(counterValue.value);