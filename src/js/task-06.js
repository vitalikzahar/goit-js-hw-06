const textInput = document.querySelector("#validation-input");
const numberDataLength = Number(textInput.dataset.length);


textInput.addEventListener("blur", () => {
    
    if (textInput.value.length === numberDataLength) {
        textInput.classList.add("valid"); 
    } else {
        textInput.classList.add("invalid");
    }
       })