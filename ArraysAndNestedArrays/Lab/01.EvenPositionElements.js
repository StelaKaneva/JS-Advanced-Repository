function evenPositionElement(myArr){
    let newArr = [];

    for (let i = 0; i < myArr.length; i+= 2) {
         
        //newArr[newArr.length] = myArr[i];
        newArr.push(myArr[i]);
    }

    console.log(newArr.join(' '));
}

// function evenPositionElement(myArr){
//     let result = '';

//     for (let i = 0; i < myArr.length; i++) {
//         if(i % 2 == 0){
//             result += myArr[i];
//             result += " ";
//         }
//     }

//     console.log(result);
// }

evenPositionElement(['20', '30', '40', '50', '60']);