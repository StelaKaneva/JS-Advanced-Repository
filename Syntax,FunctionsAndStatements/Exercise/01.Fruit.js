function calculate(fruit, weight, price){
    let sum;
    let weightInKg = weight / 1000;
    sum = weightInKg * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

calculate('apple', 1563, 2.35);