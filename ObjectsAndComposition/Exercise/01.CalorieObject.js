function calorieObject(arrayOfStrings) {
    let obj = {};

    for (let index = 0; index < arrayOfStrings.length; index+= 2) {
        obj[arrayOfStrings[index]] = Number(arrayOfStrings[index + 1]);
    }

    return obj;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));