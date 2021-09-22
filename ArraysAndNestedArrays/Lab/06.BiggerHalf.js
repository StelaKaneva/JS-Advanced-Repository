function biggerHalf(numbers){
    let result = numbers.sort((a, b) => a - b);

    if (result.length % 2 == 0){
        return result.slice(result.length/2)
    } else{
        return result.slice((result.length - 1) / 2);
    }
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log(biggerHalf([4, 7, 2, 5]));