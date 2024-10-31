// Function to update the calculator screen
function updateScreen() {
    const screen = document.getElementById('screen');
    
    // Display either equation or answer
    if (previousInput && operator && !isResultDisplayed) {
        screen.innerText = `${previousInput} ${operator} ${currentInput || ''}`;
    } else {
        screen.innerText = currentInput;
    }

    // Display the entire expression or '0' if empty
    screen.innerText = expression || '0';

    // Set a default large font size in pixels
    screen.style.fontSize = '48px'; // Start with a larger font size

    // Ensure the font size is consistent and shrinks when needed
    screen.style.fontSize = '3rem'; // Set default font size

    // Adjust the font size if text overflows the screen
    if (screen.scrollWidth > screen.clientWidth) {
        screen.style.fontSize = '2rem'; // Shrink the font size if overflowing
    }
}

// Function to clear the screen
function clearScreen() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    result = ''; // Clear the result
    isResultDisplayed = false;  // Reset result display flag
    updateScreen();
}