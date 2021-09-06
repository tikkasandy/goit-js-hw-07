const nameInputEl = document.querySelector('#name-input');

nameInputEl.addEventListener('input', onNameChange);

function onNameChange(event) {
    const value = event.currentTarget.value;
    const nameOutputEl = document.querySelector('#name-output')
    
    if (value === "") {
        nameOutputEl.textContent = "незнакомец";
    } else {
        nameOutputEl.textContent = value;
    };
};