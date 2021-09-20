function cookingByNumbers(numberAsString, operation1, operation2, operation3, operation4, operation5){
    let number = Number(numberAsString);

    number = performOperation(number, operation1);
    console.log(number);

    number = performOperation(number, operation2);
    console.log(number);

    number = performOperation(number, operation3);
    console.log(number);

    number = performOperation(number, operation4);
    console.log(number);

    number = performOperation(number, operation5);
    console.log(number);

    function performOperation(number, operation){
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= 0.2 * number;
            break;
        }

        return number;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');