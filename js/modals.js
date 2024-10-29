// Modal Variables
const aboutModal = document.getElementById('about-modal');
const aboutBtn = document.getElementById('about-btn');
const closeModalBtn = document.getElementById('close-modal');
const clipboardModal = document.getElementById('clipboard-modal'); // Clipboard modal reference

// Show the modal when the "About" button is clicked
aboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('hidden');
});

// Hide the modal when the "Close" button is clicked
closeModalBtn.addEventListener('click', () => {
    aboutModal.classList.add('hidden');
});

// Function to copy result to the clipboard when screen is clicked
function copyToClipboard() {
    if (result) {
        navigator.clipboard.writeText(result.toString()).then(() => {
            clipboardModal.classList.remove('hidden');
            setTimeout(() => {
                clipboardModal.classList.add('hidden');
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}

// Attach event listener to screen for copying the result
document.getElementById('screen').addEventListener('click', copyToClipboard);