function lowestPrices(inputArray) {
    let products = {};

    for (let index = 0; index < inputArray.length; index++) {
        let [townName, productName, productPrice] = inputArray[index].split(' | ');
        productPrice = Number(productPrice);
        
        if(!products.hasOwnProperty(productName)) {
            products[productName] = {};
        }

        products[productName][townName] = productPrice;
    }

    let result = [];

    for (let key in products) {
        let townsSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        let cheapestTown = townsSorted[0];
        result.push(`${key} -> ${[cheapestTown[1]]} (${cheapestTown[0]})`);
    }

    return result.join('\n');
}

console.log(lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']));