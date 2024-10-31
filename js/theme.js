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
         header.style.backgroundColor = selectedColor; // Set header color
     
         // Calculate brightness for text color adjustment
         const brightness = getBrightness(selectedColor);
         // Change header text color based on brightness
         header.style.color = brightness < 128 ? '#fff' : '#000';
    
         // Change the About button color
        const aboutButton = document.getElementById('about-btn');
        aboutButton.style.backgroundColor = adjustBrightness(selectedColor, -10); // Darken button background slightly
        aboutButton.style.color = brightness < 128 ? '#fff' : '#000'; // Adjust text color
               
        // Change button colors
        const buttons = document.querySelectorAll('.bg-gray-400');
        buttons.forEach(button => {
            button.style.backgroundColor = adjustBrightness(selectedColor, 20);
            
            const brightness = getBrightness(adjustBrightness(selectedColor, 20));
            button.style.color = brightness < 128 ? '#fff' : '#000'; // Adjust text color
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
    
        //Add event listeners to the color pickers
        document.getElementById('color-picker').addEventListener('input', setThemeFromColor);
        document.getElementById('color-picker-mobile').addEventListener('input', setThemeFromColor);