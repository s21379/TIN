const CButton = document.querySelector(".cbutton");
const CInput = document.querySelector("#cinput");
const FInput = document.querySelector("#finput");
const FButton = document.querySelector(".fbutton");
const CtoF = (celsius) => celsius * 1.8 + 32;
const FtoC = (fahrenheit) => (fahrenheit - 32) / 1.8;

CButton.addEventListener("click", () => {
  CInput.value = FtoC(FInput.value);
});

FButton.addEventListener("click", () => {
  FInput.value = CtoF(CInput.value);
});
