// get form
const form = document.getElementById("form");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log(
    JSON.stringify({
      firstNumber: firstNumber.value,
      secondNumber: secondNumber.value,
      op: getRadioValue(),
    })
  );
  getResult({
    firstNumber: firstNumber.value,
    op: getRadioValue(),
    secondNumber: secondNumber.value,
  });
});

const getRadioValue = () => {
  const elements = document.getElementsByName("op");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
};

const getResult = (data) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(
    "GET",
    `http://www.localhost:3000?firstNumber=${data.firstNumber}&op=${data.op}&secondNumber=${data.secondNumber}`
  );
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  httpRequest.onload = function () {
    console.log(httpRequest.responseText);
    console.log(JSON.parse(httpRequest.responseText).value);
    result.innerHTML = JSON.parse(httpRequest.responseText).value;
  };
  console.log(data);
  console.log(data);
  httpRequest.send(data);
};