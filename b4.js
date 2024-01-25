function calculate() {
    var number1 = parseFloat(document.getElementById('input1').value);
    var number2 = parseFloat(document.getElementById('input2').value);
    var sum = number1 + number2;
    document.getElementById('result').value = sum;
    // document.getElementById('result').setAttribute('value', sum);
}