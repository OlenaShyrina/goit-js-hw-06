
const changeColorBtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");

nameOfColor.textContent = getRandomHexColor();
changeColorBtn.addEventListener("click", getRandomHexColor);
body.style.backgroundColor = nameOfColor.textContent;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
