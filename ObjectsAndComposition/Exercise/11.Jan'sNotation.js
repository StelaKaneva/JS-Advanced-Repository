function jansNotation(inputArr) {
    let operands = [];

    for (let index = 0; index < inputArr.length; index++) {
        if (typeof inputArr[index] === 'number') {
            operands.push(inputArr[index]);
        } else {
            let operator = inputArr[index];

            if (operands.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            let operand2 = operands.pop();
            let operand1 = operands.pop();

            let result = applyOperation(operand1, operand2, operator);
            operands.push(result);
        }
    }

    if (operands.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(operands[0]);
    }

    function applyOperation(operand1, operand2, operator) {
        const arithmeticOperator = {
            '+' : () => operand1 + operand2,
            '-' : () => operand1 - operand2,
            '*' : () => operand1 * operand2,
            '/' : () => operand1 / operand2
        }

        return arithmeticOperator[operator]();
    }
}

jansNotation([7,
    33,
    8,
    '-']);
jansNotation([15,
    '/']);

jansNotation([5,
    3,
    4,
    '*',
    '-']);