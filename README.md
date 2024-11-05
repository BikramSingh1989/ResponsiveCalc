# Responsive Calculator

## Description

Responsive Calculator is a fully interactive web-based calculator designed to provide a user-friendly and customizable calculation experience. The application supports various mathematical operations and includes additional features such as theming options, a persistent history saved in local storage, and keyboard support for seamless user interactions.

![image](https://github.com/user-attachments/assets/fa211149-2877-4529-9a79-9ca065074dda)


## Features

- **Responsive Design**: Optimized for use on both desktop and mobile devices.
- **Theme Customization**: Users can select custom themes for the calculator’s interface.
- **Clipboard Functionality**: Copies the result to the clipboard for easy sharing and reuse.
- **Calculation History**: Stores past calculations locally so users can view previous entries, even after a page reload.
- **Keyboard Support**: Enables users to perform calculations using standard keyboard keys.

## Usage Instructions

1. **Performing Calculations**: Use the on-screen buttons or your keyboard to enter numbers and operations.
2. **Theme Selection**: Choose a color from the theme section to personalize the calculator’s look.
3. **History Management**:
   - The calculator automatically saves your calculations to the history panel.
   - Clear the history by clicking the "Clear History" button.
4. **Clipboard Feature**: Click the result area to copy the result to your clipboard.
5. **Keyboard Shortcuts**:
   - Number keys (0-9): Enter numbers
   - `+`, `-`, `*`, `/`, `%`: Perform operations
   - `Enter` or `=`: Calculate result
   - `Backspace`: Remove the last character
   - `Escape`: Clear the calculator screen

## Code Functionality

- **History with Local Storage**:
  - The `addToHistory` function appends each calculation to the history panel and saves it in `localStorage` to persist data across sessions.
  - The `loadHistory` function retrieves and displays saved history when the app is opened.
  - The `clearHistory` function deletes all entries from both the history panel and `localStorage`.

- **Keyboard Support**:
  - The `keydown` event listener captures key presses and processes numbers, operators, and special keys like `Enter` and `Escape` for an intuitive user experience.

## Technologies Used

- **HTML** for the structure
- **CSS (Tailwind CSS)** for styling and responsiveness
- **JavaScript** for functionality and interaction
- **Local Storage** for persisting calculation history

## Link
https://bikramsingh1989.github.io/ResponsiveCalc/
