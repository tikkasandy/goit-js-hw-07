const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputTest);

function onInputTest(event) {
    const value = event.currentTarget.value;
    
    if (value.length === 0) {
        inputEl.removeAttribute("class");
    } else {
        if (value.length === Number(inputEl.getAttribute('data-length'))) {
            inputEl.classList.value = "valid";
        } else {
            inputEl.classList.value = "invalid";
        }
    }
}