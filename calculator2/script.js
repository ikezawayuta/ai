let screen = document.querySelector('.screen');
let expression = '';

function addToScreen(value) {
  expression += value;
  screen.value = expression;
}

function calculate() {
  screen.value = eval(expression);
}

function clearScreen() {
  expression = '';
  screen.value = '';
}
