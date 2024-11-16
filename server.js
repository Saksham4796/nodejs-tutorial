const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./template/index.html');

// Step1 : Create a server

const server = http.createServer((req, res) => {
    res.end(html); // Server will send the html file as response
    console.log('A request has been made');
    //console.log(req);
    //console.log(res);
});

// Step2 : Start the server

server.listen(8000, 'localhost', () => {
    console.log('Server is listening on port 8000');
});


