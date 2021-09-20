function roadRadar(speed, area){
    speedAsNumber = Number(speed);
    let status;
    let difference;

    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    switch (area) {
        case 'motorway':
            if (speed > motorwaySpeed){
                difference = speed - motorwaySpeed;

                status = findStatus(difference);

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`);
            } else{
                console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`)
            }
            break;
        case 'interstate':
            if (speed > interstateSpeed){
                difference = speed - interstateSpeed;

                status = findStatus(difference);

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`)
            }
            break;
        case 'city':
            if (speed > citySpeed){
                difference = speed - citySpeed;

                status = findStatus(difference);

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${citySpeed} zone`)
            }
            break;   
        case 'residential':
            if (speed > residentialSpeed){
                difference = speed - residentialSpeed;
                
                status = findStatus(difference);

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialSpeed} zone`)
            }
            break;   
    }

    function findStatus(difference){
        let result;
        if (difference <= 20){
            result = 'speeding';
        } else if(difference <= 40){
            result = 'excessive speeding';
        } else {
            result = 'reckless driving';
        }

        return result;
    }
}

roadRadar('120', 'interstate');