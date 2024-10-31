// Add the calculation to the history + Local Storage
function addToHistory(entry) {
    const history = document.getElementById('history');
    let savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];

    // Clear the "No history yet" message if it exists
    if (history.innerText.includes("No history yet")) {
        history.innerHTML = ''; // Clear the content
    }

    // Add the new entry to the history
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('history-entry');
    entryDiv.innerText = entry;
    history.appendChild(entryDiv);

    // Update local storage
    savedHistory.push(entry);
    localStorage.setItem("calcHistory", JSON.stringify(savedHistory));
}

// Load history from local storage on startup
function loadHistory() {
    const savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    const historyElement = document.getElementById("history");

    if (savedHistory.length > 0) {
        historyElement.innerHTML = ''; // Clear existing content
        savedHistory.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('history-entry');
            entryDiv.innerText = entry;
            historyElement.appendChild(entryDiv);
        });
    }
}

// Clear the history
function clearHistory() {
    localStorage.removeItem("calcHistory");
    document.getElementById("history").innerHTML = "No history yet";
}


