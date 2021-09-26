function listOfNames(array){
    array.sort((a, b) => a.localeCompare(b));
    const result = array.map((x, i) => (i + 1) + '.' + x);

    console.log(result.join('\n'));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);