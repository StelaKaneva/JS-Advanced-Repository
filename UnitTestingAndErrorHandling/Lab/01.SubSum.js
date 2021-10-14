function subSum(inputArray, startIndex, endIndex) {
    let sum = 0;

    if (Array.isArray(inputArray) == false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > inputArray.length - 1) {
        endIndex = inputArray.length - 1;
    }

    for (let index = startIndex; index <= endIndex; index++) {
        sum += Number(inputArray[index]);
    }

    return sum;
}