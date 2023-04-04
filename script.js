// Initialize variables
let displayValue = '';
let operator = '';
let operand1 = '';
let operand2 = '';
let result = '';

// Add event listeners to number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    displayValue += button.value;
    document.getElementById('display').value = displayValue;
  });
});

// Add event listeners to operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === 'C') {
      // Clear all variables and reset display
      displayValue = '';
      operator = '';
      operand1 = '';
      operand2 = '';
      result = '';
      document.getElementById('display').value = '';
    } else if (button.value === 'CE') {
      // Clear only the display value
      displayValue = '';
      document.getElementById('display').value = '';
    } else if (button.value === 'sqrt') {
      // Calculate square root of display value and update display
      result = Math.sqrt(parseFloat(displayValue));
      document.getElementById('display').value = result;
      displayValue = result.toString();
    } else if (button.value === '=') {
      // Calculate result of previous operation and update display
      operand2 = parseFloat(displayValue);
      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
      }
      document.getElementById('display').value = result;
      displayValue = result.toString();
      operand1 = '';
      operand2 = '';
      operator = '';
    } else {
      // Set operator and first operand
      operator = button.value;
      operand1 = parseFloat(displayValue);
      displayValue = '';
    }
  });
});
