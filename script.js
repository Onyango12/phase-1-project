// Set up variables to track calculator state
let currentInput = '0';
let operator = null;
let previousInput = null;

// Get the display element
const display = document.getElementById('display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Handle button click event
function handleButtonClick(event) {
  const { target } = event;

  // Check if the button is a number or operator
  if (target.classList.contains('number')) {
    handleNumberClick(target.value);
  } else if (target.classList.contains('operator')) {
    handleOperatorClick(target.value);
  }
}

// Handle number button click event
function handleNumberClick(value) {
  // If the current input is '0', replace it with the new value
  if (currentInput === '0') {
    currentInput = value;
  } else {
    // Otherwise, append the new value to the current input
    currentInput += value;
  }

  // Update the display
  display.value = currentInput;
}

// Handle operator button click event
function handleOperatorClick(value) {
  switch (value) {
    case 'C':
      // Clear the current input and reset the calculator state
      currentInput = '0';
      operator = null;
      previousInput = null;
      break;
    case 'CE':
      // Clear the current input only
      currentInput = '0';
      break;
    case '=':
      // Evaluate the expression and update the display
      evaluate();
      break;
    case 'sqrt':
      // Calculate the square root of the current input and update the display
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
      display.value = currentInput;
      break;
    case '%':
      // Calculate the percentage of the previous and current inputs and update the display
      currentInput = ((parseFloat(previousInput) / 100) * parseFloat(currentInput)).toString();
      display.value = currentInput;
      break;
    default:
      // If an operator is already set, evaluate the expression
      if (operator) {
        evaluate();
      }

      // Set the operator and save the current input as the previous input
      operator = value;
      previousInput = currentInput;
      currentInput = '0';
      break;
  }
}

// Evaluate the expression and update the display
function evaluate() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }

  // Update the display and reset the calculator state
  currentInput = result.toString();
  display.value = currentInput;
  operator = null;
  previousInput = null;
}

// Fetch data from JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
