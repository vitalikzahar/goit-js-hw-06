function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const btn = document.querySelector(".change-color");
const colorBody = document.querySelector(".color");

btn.addEventListener("click", () => {
  
  colorBody.textContent = body.style.backgroundColor = getRandomHexColor();
})



