const inputName = document.querySelector('#validation-input');

inputName.addEventListener("blur", outOfFocusInputName);
console.log(inputName);
function outOfFocusInputName(event) {
    console.log(event.currentTarget.value);

    if (inputName.textContent === inputName.dataset.length) {
        inputName.classList.add("valid");
        inputName.classList.remove("invalid");
    } else {
        inputName.classList.add("invalid");
        inputName.classList.remove("valid");
    }

    return inputName;
    
}