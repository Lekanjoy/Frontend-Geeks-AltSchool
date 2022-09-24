let buttons = document.querySelectorAll(".btn");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let btn of buttons) {
      btn.classList.remove("selected");
    }
    button.classList.add("selected");
  });
});

let tipValue = 0;
const tipBtnValue = (e) => {
  tipValue = Number(e.innerHTML.match(/\d+/)[0]);
  console.log(tipValue);
  calcTip();
  calcTotal();
};
let btnOne = document.querySelector("#btn-one");
let btnTwo = document.querySelector("#btn-two");
let btnThree = document.querySelector("#btn-three");
let btnFour = document.querySelector("#btn-four");
let btnFive = document.querySelector("#btn-five");
let btnCustom = document.querySelector("#btn-custom");
btnCustom.addEventListener("click", () => {
  tipValue = 0;
  btnCustom.value = "";
  console.log(tipValue);
});

btnCustom.addEventListener("input", () => {
  tipValue = btnCustom.value;
  calcTip();
  calcTotal();
  console.log(tipValue);
});

let billValue = 0;
let numberOfPerson = 0;
let inputOne = document.querySelector("#input-one");
let inputTwo = document.querySelector("#input-two");
inputOne.addEventListener("click", () => {
  billValue = 0;
  inputOne.value = "";
  console.log();
});
inputTwo.addEventListener("click", () => {
  numberOfPerson = 0;
  inputTwo.value = "";
});

let tipPerson = document.querySelector("#tip");
let totalPerson = document.querySelector("#person");

inputOne.addEventListener("input", () => {
  billValue = inputOne.value;
  calcTip();
  calcTotal();
});
inputTwo.addEventListener("input", () => {
  numberOfPerson = inputTwo.value;
  calcTip();
  calcTotal();
});

const calcTip = () => {
  let tip = (billValue * tipValue) / 100;
  let result = (tip / numberOfPerson).toFixed(2);
  // if ((typeof result !== "number") || (result == "NaN")) {
  //   result = 0.0;
  // }
  tipPerson.innerHTML = result;
};
const calcTotal = () => {
  let total = billValue + (billValue * tipValue) / 100;
  let result = (total / numberOfPerson).toFixed(2);
  // if ((typeof result !== "number" )|| (result == "NaN")) {
  //   result = 0.0;
  // }

  totalPerson.innerHTML = result;
};
