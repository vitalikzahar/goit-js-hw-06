function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 }
// const divBoxes = document.querySelector("#boxes");
// const btnGreate = document.querySelector("[data-create]");
// const btnDestroy = document.querySelector("[data-destroy]")
// const numberInput = btnGreate.previousElementSibling;

// numberInput.addEventListener("input", (event) => {
//   // console.log(event.currentTarget.value)
//   const number = event.currentTarget.value;
  
//   createBoxes(number)

// })

// function createBoxes(number) {
//   for (let i = 1; i <= number; i += 1) {
//   const addDiv = document.createElement("div");
  
//   divBoxes.append(addDiv);
//   console.log(divBoxes)
// }
// }
  
// function destroyBoxes() {
//   divBoxes.remove();
//   console.log(divBoxes)
// }
// btnDestroy.addEventListener("click", () => {
//   destroyBoxes();
   
// })