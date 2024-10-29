// Add the calculation to the history + Local Storage
function addToHistory(entry) {
    const history = document.getElementById('history');
    let savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    
    // Delete the "No History Yet" once it is added
    if (history.innerText.includes("No history yet")) {
        history.innerHTML = ''; // Clear the content
    }
    
    // Add the new entry to the history
    history.innerHTML += `<div>${entry}</div>`;
    
    // Update local storage
    savedHistory.push(entry);
    localStorage.setItem("calcHistory", JSON.stringify(savedHistory));
}

// Load history from local storage
function loadHistory() {
    const savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    const historyElement = document.getElementById("history");

    if (savedHistory.length > 0) {
        historyElement.innerHTML = savedHistory.map(entry => `<div>${entry}</div>`).join("");
    }
}

// Clear the history
function clearHistory() {
    localStorage.removeItem("calcHistory");
    document.getElementById("history").innerHTML = "No history yet";
}