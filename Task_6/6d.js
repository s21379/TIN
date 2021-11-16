const main = document.querySelector("#info");
const button = document.querySelector("#button");
const Car = document.querySelector("#Cname");
const Year = document.querySelector("#year");

button.addEventListener("click", () => {
  let row = main.insertRow(1);
  let info1 = row.insertCell(0);
  let info2 = row.insertCell(1);
  info1.innerHTML = Car.value;
  info2.innerHTML = Year.value;
});
