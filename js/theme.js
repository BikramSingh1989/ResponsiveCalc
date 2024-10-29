// Theme Picker Functionality

function adjustBrightness(color, percent) {
    // Convert hex to RGB
    const r = Math.min(255, Math.max(0, parseInt(color.slice(1, 3), 16) + Math.round(255 * (percent / 100))));
    const g = Math.min(255, Math.max(0, parseInt(color.slice(3, 5), 16) + Math.round(255 * (percent / 100))));
    const b = Math.min(255, Math.max(0, parseInt(color.slice(5, 7), 16) + Math.round(255 * (percent / 100))));
    
    // Convert RGB back to hex
    const toHex = (c) => ('0' + c.toString(16)).slice(-2); // Ensures two-digit hex
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;// this is the color returned
}

// Function to set theme from color picker
function setThemeFromColor(event) {
    const selectedColor = event.target.value;
    
    // Change the body background color
    document.body.style.backgroundColor = selectedColor;

    // Change calculator background color
    const calculator = document.querySelector('.bg-white'); // Change to your calculator's main container class
    calculator.style.backgroundColor = adjustBrightness(selectedColor, -30); // Darken the background

    // Change the color of the screen
    const screen = document.getElementById('screen');
    screen.style.backgroundColor = adjustBrightness(selectedColor, -50); // Darken the screen a bit

    // Change button colors
    const buttons = document.querySelectorAll('.bg-gray-400');
    buttons.forEach(button => {
        button.style.backgroundColor = adjustBrightness(selectedColor, 20); // Lighten button background
        button.style.color = '#fff'; // Change button text color to white
    });
}

// Reset theme function
document.getElementById('reset-theme-btn').addEventListener('click', () => {
    document.body.style.backgroundColor = ''; // Reset to default
    const calculator = document.querySelector('.bg-white');
    calculator.style.backgroundColor = ''; // Reset calculator background
    const screen = document.getElementById('screen');
    screen.style.backgroundColor = ''; // Reset screen background
    const buttons = document.querySelectorAll('.bg-gray-400');
    buttons.forEach(button => {
        button.style.backgroundColor = ''; // Reset button backgrounds
        button.style.color = ''; // Reset button text color
    });
});
