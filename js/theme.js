    // Function to adjust brightness of a color
    function adjustBrightness(color, percent) {
        const r = Math.min(255, Math.max(0, parseInt(color.slice(1, 3), 16) + Math.round(255 * (percent / 100))));
        const g = Math.min(255, Math.max(0, parseInt(color.slice(3, 5), 16) + Math.round(255 * (percent / 100))));
        const b = Math.min(255, Math.max(0, parseInt(color.slice(5, 7), 16) + Math.round(255 * (percent / 100))));
      
        // Convert RGB back to hex  
        const toHex = (c) => ('0' + c.toString(16)).slice(-2);
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    
        // Function to calculate brightness of a color
        function getBrightness(color) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return (0.299 * r + 0.587 * g + 0.114 * b); //(Luminance Formula)
    }
    
// Function to set theme from color picker
function setThemeFromColor(event) {
    const selectedColor = event.target.value;

    // Change the body background color
    document.body.style.backgroundColor = selectedColor;

    // Change calculator background color
    const calculator = document.querySelector('.bg-white');
    calculator.style.backgroundColor = adjustBrightness(selectedColor, -30);

    // Change the color of the screen
    const screen = document.getElementById('screen');
    screen.style.backgroundColor = adjustBrightness(selectedColor, -50);

    // Change header background color
    const header = document.querySelector('header');
    header.style.backgroundColor = selectedColor;

    // Calculate brightness for text color adjustment
    const brightness = getBrightness(selectedColor);
    header.style.color = brightness < 128 ? '#fff' : '#000';

    // Change the About button color
    const aboutButton = document.getElementById('about-btn');
    aboutButton.style.backgroundColor = adjustBrightness(selectedColor, -10);
    aboutButton.style.color = brightness < 128 ? '#fff' : '#000';

    // Change button colors
    const buttons = document.querySelectorAll('.bg-gray-400');
    buttons.forEach(button => {
        button.style.backgroundColor = adjustBrightness(selectedColor, 20);
        button.style.color = getBrightness(adjustBrightness(selectedColor, 20)) < 128 ? '#fff' : '#000';
    });

    // Change history section outer container background color
    const historyOuterContainer = document.querySelector('.col-span-1.md\\:col-span-1.bg-gray-300.hidden.md\\:block');
    historyOuterContainer.style.backgroundColor = adjustBrightness(selectedColor, -30);
    historyOuterContainer.style.color = brightness < 128 ? '#fff' : '#000';

    // Change history inner content background color
    const historySection = document.getElementById('history');
    historySection.style.backgroundColor = adjustBrightness(selectedColor, -20);
    historySection.style.color = brightness < 128 ? '#fff' : '#000';

    // Change "Clear History" button color
    const clearHistoryButton = document.getElementById('clear-history-btn');
    clearHistoryButton.style.backgroundColor = adjustBrightness(selectedColor, -40);
    clearHistoryButton.style.color = brightness < 128 ? '#fff' : '#000';

    // Change Themes Section (left side theme selector container)
    const themesSection = document.querySelector('.col-span-1.md\\:col-span-1.bg-gray-300.hidden.md\\:flex');
    themesSection.style.backgroundColor = adjustBrightness(selectedColor, -30);
    themesSection.style.color = brightness < 128 ? '#fff' : '#000';

    // Change Reset Theme Button color
    const resetThemeButton = document.getElementById('reset-theme-btn');
    resetThemeButton.style.backgroundColor = adjustBrightness(selectedColor, -40);
    resetThemeButton.style.color = brightness < 128 ? '#fff' : '#000';

    // Change Mobile Reset Theme Button color
    const resetThemeButtonMobile = document.getElementById('reset-theme-btn-mobile');
    resetThemeButtonMobile.style.backgroundColor = adjustBrightness(selectedColor, -40);
    resetThemeButtonMobile.style.color = brightness < 128 ? '#fff' : '#000';
}
    
        // Reset theme function
document.getElementById('reset-theme-btn').addEventListener('click', () => {
    // Reset the body background color
    document.body.style.backgroundColor = ''; // Reset to default

    // Reset the calculator background color
    const calculator = document.querySelector('.bg-white');
    calculator.style.backgroundColor = ''; // Reset calculator background

    // Reset the screen background color
    const screen = document.getElementById('screen');
    screen.style.backgroundColor = ''; // Reset screen background

    // Reset header background and text color
    const header = document.querySelector('header');
    header.style.backgroundColor = ''; // Reset header background
    header.style.color = ''; // Reset header text color

    // Reset About button color
    const aboutButton = document.getElementById('about-btn');
    aboutButton.style.backgroundColor = ''; // Reset About button background
    aboutButton.style.color = ''; // Reset About button text color

    // Reset button colors
    const buttons = document.querySelectorAll('.bg-gray-400');
    buttons.forEach(button => {
        button.style.backgroundColor = ''; // Reset button background
        button.style.color = ''; // Reset button text color
    });

    // Reset history section background color
    const historySection = document.getElementById('history');
    historySection.style.backgroundColor = ''; // Reset history background
    historySection.style.color = ''; // Reset history text color

    // Reset outer history container color
    const historyOuterContainer = document.querySelector('.col-span-1.md\\:col-span-1.bg-gray-300.hidden.md\\:block');
    historyOuterContainer.style.backgroundColor = ''; // Reset outer history background
    historyOuterContainer.style.color = ''; // Reset outer history text color

    // Reset theme section background color
    const themeSection = document.querySelector('.bg-gray-300');
    themeSection.style.backgroundColor = ''; // Reset theme section background
    themeSection.style.color = ''; // Reset theme section text color
});
    
        //Add event listeners to the color pickers
        document.getElementById('color-picker').addEventListener('input', setThemeFromColor);
        document.getElementById('color-picker-mobile').addEventListener('input', setThemeFromColor);
