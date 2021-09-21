function negativePositiveNumbers(numbers){
    const newNumbers = [];

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < 0) {
            newNumbers.unshift(numbers[index]);
        }else{
            newNumbers.push(numbers[index]);
        }
    }

    console.log(newNumbers.join('\n'));
}

negativePositiveNumbers([3, -2, 0, -1]);

