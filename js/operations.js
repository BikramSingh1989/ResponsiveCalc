let expression = ''; // Store the entire expression as a string
let isResultDisplayed = false; // To track if the result was just displayed

// Function to append number, dot, or parentheses
function appendNumber(char) {
    if (isResultDisplayed) {
        expression = char; // Reset if showing result
        isResultDisplayed = false;
    } else {
        expression += char; // Build up the expression
    }
    updateScreen();
}

// Function to set the operator
function setOperator(op) {
    if (isResultDisplayed) {
        isResultDisplayed = false; // Reset flag after result displayed
    }
    expression += ` ${op} `; // Append operator to expression with spaces for readability
    updateScreen();
}

// Tokenize function 
function tokenize(expression) {
    const tokens = [];
    let number = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (/\d|\./.test(char)) { // If it's a number or decimal
            number += char;
        } else {
            if (number) {
                tokens.push(number); // Add the number before operator
                number = '';
            }

            if (char === '(' && tokens.length && /\d|\)/.test(tokens[tokens.length - 1])) {
                // (6)5 = 30
                tokens.push('*');
            }

            tokens.push(char); // Add the operator or parenthesis
        }
    }

    if (number) tokens.push(number); // Push any remaining number

    return tokens;
}


// Convert tokens to RPN
function toRPN(tokens) {
    const output = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };
    const associativity = { '+': 'L', '-': 'L', '*': 'L', '/': 'L', '%': 'L' };

    tokens.forEach(token => {
        if (/\d/.test(token)) { // Number
            output.push(token);
        } else if ('+-*/%'.includes(token)) { // Operator
            while (operators.length && '*/%+-'.includes(operators[operators.length - 1]) &&
                ((associativity[token] === 'L' && precedence[token] <= precedence[operators[operators.length - 1]]) ||
                (associativity[token] === 'R' && precedence[token] < precedence[operators[operators.length - 1]]))) {
                output.push(operators.pop());
            }
            operators.push(token);
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators[operators.length - 1] !== '(') {
                output.push(operators.pop());
            }
            operators.pop(); // Pop '('
        }
    });
    while (operators.length) {
        output.push(operators.pop());
    }
    return output;
}

// Evaluate RPN 
function evaluateRPN(rpn) {
    const stack = [];
    rpn.forEach(token => {
        if (/\d/.test(token)) {
            stack.push(parseFloat(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
                case '%': stack.push(a % b); break;
                default: break;
            }
        }
    });
    return stack[0];
}

// Function to calculate the result
function calculate() {
    const tokens = tokenize(expression);
    const rpn = toRPN(tokens);
    result = evaluateRPN(rpn); // Assign to global result variable

    // Format the entry as "expression = result" for history
    const entry = `${expression} = ${result}`;

    expression = result.toString(); // Update expression with result
    updateScreen();
    addToHistory(entry); // Pass formatted entry to history
    isResultDisplayed = true;
}

// Clear screen and reset expression
function clearScreen() {
    expression = '';
    isResultDisplayed = false;
    updateScreen();
}

// Update screen function to display expression
function updateScreen() {
    const screen = document.getElementById('screen');
    screen.innerText = expression || '0';
}
