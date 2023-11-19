// Your JavaScript (calculator.js) file
document.addEventListener('keydown', function(event) {
    handleKeyboardInput(event.key);
});

function handleKeyboardInput(key) {
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
            appendToDisplay(key);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'c':
        case 'C':
            clearDisplay();
            break;
        // You can add more cases for other keys if needed
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
