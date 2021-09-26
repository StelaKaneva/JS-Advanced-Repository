// function extractIncreasingSubsequence(array){
//     let currentMax = Number.NEGATIVE_INFINITY;
//     let result = [];

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] >= currentMax) {
//             currentMax = array[index];
//             result.push(currentMax);
//         }        
//     }

//     return result;
// }

function extractIncreasingSubsequence(array){
    let resultArray = array.reduce((acc, el) => {
        if (acc.length === 0 || el >= acc[acc.length - 1]) {
            acc.push(el);
        }
        return acc;
    }, []);

    return resultArray;
}

console.log(extractIncreasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));