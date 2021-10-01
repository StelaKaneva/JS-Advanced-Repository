function heroicInventory(inputArr) {
    let herroesArr = [];

    for (let index = 0; index < inputArr.length; index++) {
        let [name, level, items] = inputArr[index].split(' / ');
        level = Number(level);
        items = items !== undefined ? items.split(', ') : [];

        herroesArr.push({name: name, level: level, items: items});
    }

    return JSON.stringify(herroesArr);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));

