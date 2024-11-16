// Purpose: To create a simple routing system using http module
const http = require('http');

// Step1 : Create a server

const server = http.createServer((req, res) => {
    let path = req.url;

    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        res.end("You are in home page");
    }
    else if(path.toLocaleLowerCase() === '/contact'){
        res.end("You are in contact page");
    }
    else if(path.toLocaleLowerCase() === '/about'){
        res.end("You are in about page");
    }
    else{
        res.end("Page not found");
    }
});

// Step2 : Start the server

server.listen(8000, 'localhost', () => {
    console.log('Server has started')
});