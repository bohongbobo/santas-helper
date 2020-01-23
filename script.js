const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time("haha");
    if(err) {
        console.log('error');
    }
    const input = data.toString();

    var counter = 0;
    for(var i = 0; i < input.length; i ++){
        if(input[i] === "("){
            counter++;
        }
    }
    const uncounter = input.length - counter;
    const answer = counter - uncounter;
    console.log(counter);
    console.log(uncounter);
    console.log(answer);
    console.timeEnd("haha");
})