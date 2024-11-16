const fs = require('fs');

let text = fs.readFileSync('input.txt', 'utf8'); //next line has to wait until this line is done
console.log(text);

let content = `Data read from file input.txt : ${text}. \nDate created: ${new Date()}`;
fs.writeFileSync('output.txt', content); //next line has to wait until this line is done

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}); //next line does not have to wait until this line is done

console.log('Reading file...'); //this line will be executed before the file is read
