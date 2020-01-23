const fs = require('fs');

//1. what floor does Santa end up on
function question1() {
    console.time("Time");
    fs.readFile('./input.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if(currentValue === '('){
                return acc += 1
            } else if (currentValue === ')'){
                return acc -= 1
            }
        }, 0)
        console.timeEnd("Time");
        console.log('floor:', answer);
    })
}

question1();


//2. when does Santa first enter the basement

function question2() {
    fs.readFile('./input.txt', (err, data) => {
        console.time("T2")
        const directions2 = data.toString();
        const directionsArray2 = directions2.split('');
        let accumulator = 0;
        let counter = 0;
        const answer2 = directionsArray2.some((currentItem) => {
            if (currentItem === '('){
                accumulator += 1
            } else if (currentItem === ')'){
                accumulator -= 1
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd("T2")
        console.log('Basement entered at:', counter);
    })
}

question2();