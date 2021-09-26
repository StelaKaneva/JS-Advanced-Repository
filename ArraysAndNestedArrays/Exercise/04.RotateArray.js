// function rotateArray(array, numberOfRotations){

//     for (let i = 0; i < numberOfRotations; i++) {
//         let element = array.pop();
//         array.unshift(element);
        
//     }

//     console.log(array.join(' '));
// }

function rotateArray(array, numberOfRotations){
    let realRotations = numberOfRotations % array.length;
    let elements = array.splice(array.length - realRotations, realRotations);
    array.splice(0, 0, ...elements);

    console.log(array.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);