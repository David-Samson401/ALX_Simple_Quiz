// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Error: Division by zero";
  }
  return number1 / number2;
}

// Event listeners
document.getElementById("add").addEventListener("click", function () {
  calculateResult(add);
});

document.getElementById("subtract").addEventListener("click", function () {
  calculateResult(subtract);
});

document.getElementById("multiply").addEventListener("click", function () {
  calculateResult(multiply);
});

document.getElementById("divide").addEventListener("click", function () {
  calculateResult(divide);
});

// General calculation handler
function calculateResult(operation) {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = operation(number1, number2);
  document.getElementById("calculation-result").textContent = result;
}
