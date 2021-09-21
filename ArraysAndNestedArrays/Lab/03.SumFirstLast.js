function sumFirstLast(numbers){
    let first = Number(numbers.shift());
    let last = Number(numbers.pop());
    let sum = first + last;
    return sum;
}

console.log(sumFirstLast(['20', '30', '40']));