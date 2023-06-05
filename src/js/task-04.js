let counterValue = 0;

const elValue = document.querySelector('#value')

const elIncrement = document.querySelector('[data-action="increment"]');
elIncrement.addEventListener("click", () => {
    elValue.innerHTML = `<span id="value"> ${counterValue += 1} </span>`
});
    
const elDecrement = document.querySelector('[data-action="decrement"]');
elDecrement.addEventListener("click", () => {
         elValue.innerHTML = `<span id="value"> ${counterValue -= 1} </span>`;
});