function appendNumber(number) {
    document.getElementById('display').value += number;
}

function setOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Lỗi';
    }
}