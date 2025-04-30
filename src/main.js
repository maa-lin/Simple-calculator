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
let operatorUsed = false;
let decimalUsed = false;

const calculator = document.getElementById("calculator");
const input = document.getElementById("user-input");
const buttons = calculator.getElementsByTagName("div");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const btn = buttons[i].id;

    if (btn === "clear") {
      input.value = "";
      operator = "";
      decimalUsed = false;
      operatorUsed = false;
    }

    if (btn === "delete") {
      const removedChar = input.value.slice(-1);
      input.value = input.value.slice(0, -1);

      if (removedChar === ".") {
        decimalUsed = false;
      }

      if (
        removedChar === "+" ||
        removedChar === "-" ||
        removedChar === "x" ||
        removedChar === "/"
      ) {
        operatorUsed = false;
        operator = "";
      }
    }

    if (btn === "decimal") {
      if (!decimalUsed) {
        input.value += ".";
        decimalUsed = true;
      }
    }

    if (btn === "plus") {
      if (!operatorUsed && input.value !== "") {
        input.value += "+";
        operator = "+";
        decimalUsed = false;
        operatorUsed = true;
      }
    }
    if (btn === "minus") {
      if (!operatorUsed && input.value !== "") {
        input.value += "-";
        operator = "-";
        decimalUsed = false;
        operatorUsed = true;
      }
    }
    if (btn === "multiply") {
      if (!operatorUsed && input.value !== "") {
        input.value += "x";
        operator = "x";
        decimalUsed = false;
        operatorUsed = true;
      }
    }
    if (btn === "divide") {
      if (!operatorUsed && input.value !== "") {
        input.value += "/";
        operator = "/";
        decimalUsed = false;
        operatorUsed = true;
      }
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
      decimalUsed = input.value.includes(".");
      operatorUsed = false;
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
