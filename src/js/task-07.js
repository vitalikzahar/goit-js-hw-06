const sizeControl = document.querySelector('#font-size-control')

const textControl = document.querySelector('#text');


sizeControl.addEventListener("input", (event) => {
   
    const size = event.currentTarget.value;
    textControl.style.fontSize = `${size}px`;

})