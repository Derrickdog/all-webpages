const email = document.getElementById('email');
const emailError = document.getElementById('email-err');

const country = document.getElementById('country');
const countryError = document.getElementById('country-err');

const zip = document.getElementById('zip');
const zipError = document.getElementById('zip-err');

const password = document.getElementById('password');

const passwordConfirm = document.getElementById('password-confirm');
const passwordConfirmError = document.getElementById('password-confirm-err');

passwordConfirm.addEventListener('input', () => {
    if(passwordConfirm.value !== password.value){
        passwordConfirmError.textContent = 'Fields must match';
    }
    else{
        passwordConfirmError.textContent = '';
    }
});

email.addEventListener('input', () => {
    checkValidation(email, emailError);
});

country.addEventListener('input', () => {
    checkValidation(country, countryError);
});

zip.addEventListener('input', () => {
    checkValidation(zip, zipError);
});

function checkValidation(input, error){
    if(input.validity.valid) {
        error.textContent = '';
    } else {
        error.textContent = input.validationMessage;
    }    
}
