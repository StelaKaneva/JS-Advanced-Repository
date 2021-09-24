function printEveryNthElement(array, step){
    let result = [];
    result.unshift(array[0]);

    for (let index = 1; index < array.length; index++) {
        if (index % step == 0) {
            result.push(array[index]);
        }
    }

    return result;
}

console.log(printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2));

console.log(printEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6));