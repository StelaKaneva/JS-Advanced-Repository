function sortingNumbers(array){
    array.sort((a, b) => a - b);
    let result = [];

    while (array.length != 0) {
        result.push(array.shift());
        if (array.length !== 0) {
            result.push(array.pop());
        }
    }

    return result;
}

// function sortingNumbers(array){
//     array.sort((a, b) => a - b);

//     let end = array.length - 1;

//     let resultArray = array.reduce((acc, el) => {
//         if (acc.length !== array.length) {
//             acc.push(el);
//             if (acc.length !== array.length) {
//                 acc.push(array[end--]);
//             }
//         }
//         return acc;
//     }, []);

//     return resultArray;
// }

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));