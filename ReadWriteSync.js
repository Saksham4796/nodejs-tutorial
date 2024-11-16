const fs = require('fs');

// This is an example of callback hell
fs.readFile('start.txt', 'utf8', (err, data) => {
    console.log(data);
    fs.readFile(`${data}.txt`, 'utf8', (err, data2) => {
        console.log(data2);
        fs.readFile('append.txt', 'utf8', (err, data3) => {
            console.log(data3);
            fs.writeFile('output.txt', `${data2}\n${data3}`, (err) => {
                console.log('Data written to file output.txt');
            });
        });
    });
});
