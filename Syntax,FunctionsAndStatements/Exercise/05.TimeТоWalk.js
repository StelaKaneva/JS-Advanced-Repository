// function timeToWalk(steps, stepLength, speed) {
//     let distance = Number(steps) * Number(stepLength);
//     let breakTime = Math.floor(distance / 500) * 60;
//     let time = Math.round(distance / speed * 3.6 + breakTime);
//     let sec = time % 60;
//     let min = ((time - sec) / 60) % 60;
//     let hour = ((time - sec - min * 60) / 60) % 60;
//     sec = replaceZero(sec);
//     min = replaceZero(min);
//     hour = replaceZero(hour);
//     console.log(`${hour}:${min}:${sec}`);
//     function replaceZero(value){
//         if(0 <= value && value <= 9){
//             value = '0' + value;
//         }
//         return value;
//     }
// }

function timeToWalk(steps, stepLength, speedInKph){
    let distance = steps * stepLength;
    let speedInMps = speedInKph / 3.6;

    let time = distance / speedInMps;
    let breaks = Math.trunc(distance / 500);
    time += (breaks * 60);

    let hours = Math.trunc(time / 3600);
    let minutes = Math.trunc((time % 3600) / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)