document.addEventListener('DOMContentLoaded', () => {
    loadHistory(); // Load history on page load
    document.getElementById("clear-history-btn").addEventListener("click", clearHistory); // Clear history event listener
});

// Function to remove the last character from the calculator screen
function backspace() {
    const screen = document.getElementById("screen");
    screen.textContent = screen.textContent.slice(0, -1) || '0'; // Remove last character or reset to '0'
}

// Keyboard functionality
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Handle number keys
    if (!isNaN(key)) {
        appendNumber(key);
    } else {
        // Handle operator keys
        switch (key) {
            case '+':
                setOperator('+');
                break;
            case '-':
                setOperator('-');
                break;
            case '*':
            case 'x': // Allow using 'x' for multiplication
                setOperator('*');
                break;
            case '/':
                setOperator('/');
                break;
            case '%':
                setOperator('%');
                break;
            case 'Enter':
            case '=':
                event.preventDefault(); // Prevent default behavior if needed
                calculate();
                break;
            case 'Escape': // Clear on Escape
                clearScreen();
                break;
            case 'Backspace': // Remove last character on Backspace
                backspace();
                break;
            default:
                // Ignore other keys
                break;
        }
    }
});
