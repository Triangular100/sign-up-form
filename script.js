function validatePassword() {
    if (passwordInput.value === "" || confirmInput.value === "") {
        passwordLabel.classList.remove("password-no-match");
        passwordInput.classList.remove("password-no-match");
        confirmInput.classList.remove("password-no-match");
        return false;
    }
    if (passwordInput.value === confirmInput.value) {
        passwordLabel.classList.remove("password-no-match");
        passwordInput.classList.remove("password-no-match");
        confirmInput.classList.remove("password-no-match");
        return true;
    }

    passwordLabel.classList.add("password-no-match");
    passwordInput.classList.add("password-no-match");
    confirmInput.classList.add("password-no-match");
    return false;

}

function validateForm(e) {
    if (!validatePassword()) {
        passwordInput.focus();
        e.preventDefault();
    }
}

const passwordLabel = document.querySelector("label[for=password");
const passwordInput = document.querySelector("input[id=password]");
const confirmInput = document.querySelector("input[id=confirm_password]");
const form = document.querySelector("form");

passwordInput.addEventListener("focusout", validatePassword);
confirmInput.addEventListener("focusout", validatePassword);
form.addEventListener("submit", validateForm);