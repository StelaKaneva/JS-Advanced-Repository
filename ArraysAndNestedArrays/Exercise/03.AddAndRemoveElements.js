function addAndRemoveElements(array){
    let currentNumber = 0;
    let result = [];

    for (let index = 0; index < array.length; index++) {
        currentNumber++;

        if (array[index] == 'add') {
            result.push(currentNumber);
        } else {
            result.pop();
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']);