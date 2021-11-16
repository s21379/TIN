const main = document.querySelector("#main");
const email = document.querySelector("#email");
const mand = document.querySelector("#mandatory");
const button = document.querySelector("#button");
const mobile = document.querySelector("#mobilenumber");
button.disabled = true;

email.addEventListener("keyup", () => {
    let valid = email.checkValidity();

    if (!valid) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

const check = () => {
    if (mand.value.length === 0) {
        return false;
    }
    return true;
};

button.addEventListener("click");