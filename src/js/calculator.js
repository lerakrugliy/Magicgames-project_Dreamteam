const firstNum = document.querySelector(".firstnum_js");
const secondNum = document.querySelector(".secondnum_js");
const plus = document.querySelector(".plus_js");
const multiplied = document.querySelector(".multiplied_js");
const minus = document.querySelector(".minus_js");
const divided = document.querySelector(".divided_js");
const equals = document.querySelector(".equals_js");
const calcResult = document.querySelector(".calc_result_js");

//console.log(firstNum, secondNum,plus,multiplied,minus,divided, equals, calcResult);

let operation = "";

plus.addEventListener("click", () => {
  operation = "+";
});

multiplied.addEventListener("click", () => {
  operation = "*";
});

minus.addEventListener("click", () => {
  operation = "-";
});

divided.addEventListener("click", () => {
  operation = "/";
});

equals.addEventListener("click", () => {
  const num1 = firstNum.value.trim();
  const num2 = secondNum.value.trim();

  if (num1 === "" || num2 === "") {
    calcResult.textContent = "Помилка";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    calcResult.textContent = "Помилка";
    return;
  }

  const a = Number(num1);
  const b = Number(num2);

  let result;

  switch (operation) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      if (b === 0) {
        calcResult.textContent = "Помилка";
        return;
      }
      result = a / b;
      break;

    default:
      calcResult.textContent = "Помилка";
      return;
  }

  calcResult.textContent = result;
});