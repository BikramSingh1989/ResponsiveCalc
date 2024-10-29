let currentInput = '0'; // To store current number
let previousInput = ''; // To store previous number
let operator = '';      // To store the operator
let result = '';        // To store the final result (answer)
let isResultDisplayed = false; // To track if result was just displayed

// Function to append number or dot
function appendNumber(number) {
    if (isResultDisplayed) {
        currentInput = number; 
        isResultDisplayed = false;
    } else {
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else if (!(number === '.' && currentInput.includes('.'))) {
            currentInput += number;
        }
    }
    updateScreen();
}

// Function to set the operator
function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); // Perform the last calculation if there's a previous input
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateScreen();
}

// Function to calculate the result
function calculate() {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }

    result = parseFloat(result.toFixed(10));

    const fullOperation = `${prev} ${operator} ${curr} = ${result}`;
    currentInput = result.toString(); 
    operator = '';
    previousInput = '';
    updateScreen(); 
    addToHistory(fullOperation); 
    isResultDisplayed = true;
}

// Function to toggle between positive and negative numbers
function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateScreen();
}