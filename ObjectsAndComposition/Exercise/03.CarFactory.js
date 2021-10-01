function carFactory(data) {
    let desiredCar = {};

    desiredCar.model = data.model;

    if (data.power <= 90) {
        desiredCar.engine = { power: 90, volume: 1800 };
    } else if (data.power > 90 && data.power <= 120) {
        desiredCar.engine = { power: 120, volume: 2400 };
    } else {
        desiredCar.engine = { power: 200, volume: 3500 };
    }

    if (data.carriage === 'hatchback') {
        desiredCar.carriage = { type: 'hatchback', color: data.color };
    } else if (data.carriage === 'coupe') {
        desiredCar.carriage = { type: 'coupe', color: data.color };
    }

    if (data.wheelsize % 2 == 0) {
        data.wheelsize -= 1;
    }

    desiredCar.wheels = [data.wheelsize, data.wheelsize, data.wheelsize, data.wheelsize];

    return desiredCar;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));