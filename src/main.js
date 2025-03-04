const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const division = (x, y) => {
  return x / y;
};

const operation = (x, y, operator) => {
  if (operator === "+") {
    return add(x, y);
  }
  if (operator === "-") {
    return subtract(x, y);
  }
  if (operator === "x") {
    return multiply(x, y);
  }
  if (operator === "/") {
    return division(x, y);
  }
};

let x = 0;
let y = 0;
let operator = "";
const calculator = document.getElementById("calculator");
const input = document.getElementById("user-input");
const buttons = calculator.getElementsByTagName("div");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const btn = buttons[i].id;

    if (btn === "clear") {
      input.value = "";
    }
    if (btn === "delete") {
      input.value = input.value.slice(0, -1);
    }
    if (btn === "decimal") {
      input.value += ".";
    }
    if (btn === "plus") {
      input.value += "+";
      operator = "+";
    }
    if (btn === "minus") {
      input.value += "-";
      operator = "-";
    }
    if (btn === "multiply") {
      input.value += "x";
      operator = "x";
    }
    if (btn === "divide") {
      input.value += "/";
      operator = "/";
    }
    if (btn === "zero") {
      input.value += "0";
    }
    if (btn === "one") {
      input.value += "1";
    }
    if (btn === "two") {
      input.value += "2";
    }
    if (btn === "three") {
      input.value += "3";
    }
    if (btn === "four") {
      input.value += "4";
    }
    if (btn === "five") {
      input.value += "5";
    }
    if (btn === "six") {
      input.value += "6";
    }
    if (btn === "seven") {
      input.value += "7";
    }
    if (btn === "eight") {
      input.value += "8";
    }
    if (btn === "nine") {
      input.value += "9";
    }
    if (btn === "equals") {
      const splitInput = input.value.split(operator);
      const x = +splitInput[0];
      const y = +splitInput[1];
      input.value = operation(x, y, operator);
    }
  });
}

const darkmodeToggle = document.getElementById("darkmodeToggle");

darkmodeToggle.addEventListener("change", () => {
  if (darkmodeToggle.checked) {
    document.getElementsByTagName("body")[0].classList.add("darkmode");
  } else {
    document.getElementsByTagName("body")[0].classList.remove("darkmode");
  }
});
