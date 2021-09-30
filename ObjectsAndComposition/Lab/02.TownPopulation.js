function townPopulation(townsAsStringArrays) {
    const towns = {};
    
    for (let data of townsAsStringArrays) {
        const tokens = data.split(' <-> ');
        const name = tokens[0];
        let population = Number(tokens[1]);

        if (towns[name] == undefined) {
            towns[name] = population;
        } else {
            towns[name] += population;
        }

        // if (towns[name]) {
        //     population += towns[name];
        // }

        // towns[name] = population;
    }

    for (const name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }

//     for (const [name, population] of Object.entries(towns)) {
//         console.log(`${name} : ${population}`);
//     }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);