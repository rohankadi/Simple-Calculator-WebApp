// Get the display element
const display = document.getElementById('display');

// Function to append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate and set the result in the display
function calculate() {
    display.value = eval(display.value);
}

// Keyboard accessibility
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Check if the key is a number, operator, or special character
    if (/[\d+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    }
});