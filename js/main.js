document.addEventListener('DOMContentLoaded', () => {
    loadHistory(); // Load history on page load
    document.getElementById("clear-history-btn").addEventListener("click", clearHistory); // Clear history event listener
});