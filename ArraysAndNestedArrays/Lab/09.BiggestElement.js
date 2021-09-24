function biggestElement(matrix){
    let result = Number.NEGATIVE_INFINITY;

    for (let row of matrix){
        for (let col of row) {
            if (col > result) {
                result = col;
            }
        }
    }

    return result;
}

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));