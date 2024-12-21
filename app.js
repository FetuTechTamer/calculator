function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace(/x/g, '*')); 
        if (display.value.includes('/0')) {
            throw new Error("Division by zero is not allowed.");
        }
        display.value = result.toLocaleString(); 
    } catch (error) {
        alert(error.message);
        clearDisplay();
    }
}
