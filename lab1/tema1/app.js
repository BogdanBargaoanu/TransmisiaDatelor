$('#calculate').click(calculate);

function calculate() {
    let firstNumber = parseInt($('#firstNumber').val());
    let secondNumber = parseInt($('#secondNumber').val());
    let operation = $('#operation').val();
    switch(operation) {
        case 'add':
            $('#result').html(firstNumber + secondNumber);
            break;
        case 'subtract':
            $('#result').html(firstNumber - secondNumber);
            break;
        case 'multiply':
            $('#result').html(firstNumber * secondNumber);
            break;
        case 'divide':
            if(secondNumber === 0) {
                $('#result').html('Cannot divide by 0');
                return;
            }
            $('#result').html(firstNumber / secondNumber);
            break;
        default:
            $('#result').html('Invalid operation');
    }
}