function argumentInfo(...params) {
    let occurencies = {};
    let result = [];

    params.forEach(el => {
        let type = typeof(el);
        result.push(`${type}: ${el}`);
        occurencies[type] = occurencies[type] !== undefined
        ? occurencies[type] + 1
        : 1;
    });

    Object.keys(occurencies)
        .sort((a, b) => occurencies[b] - occurencies[a])
        .forEach(key => result.push(`${key} = ${occurencies[key]}`));

    return result.join('\n');
}

console.log(argumentInfo('cat', 42, function () { console.log('Hello world!'); }
));