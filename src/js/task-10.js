function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const divControls = document.querySelector('#controls');
const amount = document.querySelector('input');
console.log(amount);

const boxesCreated = [];

buttonCreate.addEventListener('input', boxesCreated);

function createBoxes(amount){
for(let i=0; i <= amount; i +=1){
const box = document.querySelector('div');
box.style.width = String(30 + 10 * i) + 'px';
box.style.height = String(30 + 10 * i) + 'px';
box.style.backgroundColor = getRandomHexColor;
boxesCreated.push(box);
}

divBoxes.append(...boxesCreated);
}