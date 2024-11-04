document.addEventListener('DOMContentLoaded', () => {
    const aboutModal = document.getElementById('about-modal');
    const aboutBtn = document.getElementById('about-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const clipboardModal = document.getElementById('clipboard-modal');
    const screenElement = document.getElementById('screen');

    aboutBtn.addEventListener('click', () => {
        aboutModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        aboutModal.classList.add('hidden');
    });

    // Function to copy result to the clipboard
function copyToClipboard() {
    if (result !== null) {  // Check that result has a value
        navigator.clipboard.writeText(result.toString()).then(() => {
            console.log('Text copied to clipboard:', result);
            clipboardModal.classList.remove('hidden');
            clipboardModal.style.opacity = "1"; // Make sure it's visible
            clipboardModal.innerText = "Result copied to clipboard!"; // Add message text
            setTimeout(() => {
                clipboardModal.style.opacity = "0"; // Gradually hide
            }, 2000); // Show for 2 seconds
            setTimeout(() => {
                clipboardModal.classList.add('hidden');
            }, 2500); // Fully hide after 2.5 seconds
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    } else {
        console.error('No result to copy');
    }
}


    // Show the modal when the "About" button is clicked
    aboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('hidden');
    });

    // Hide the modal when the "Close" button is clicked
    closeModalBtn.addEventListener('click', () => {
    aboutModal.classList.add('hidden');
    });


    // Attach event listener to screen for copying the result
    screenElement.addEventListener('click', copyToClipboard);

    loadHistory();
    document.getElementById("clear-history-btn").addEventListener("click", clearHistory);
    });




