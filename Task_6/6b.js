const text = document.querySelector(".text");

const addText = () => {
    text.innerHTML = "5 sec test";
};

setTimeout(addText, 5000);
