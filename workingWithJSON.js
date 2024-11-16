const http = require('http');
const fs = require('fs');

// Read the HTML file as a string, not a buffer
const html = fs.readFileSync('./template/index.html', 'utf-8'); // Specify 'utf-8' to get a string
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8')); // Specify 'utf-8' to get a string

// Step 1: Create a server
const server = http.createServer((req, res) => {
    let path = req.url;

    if (path === '/' || path.toLowerCase() === '/home') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-Header': 'Hello World'
        });
        res.end(html.replace('{{%CONTENT%}}', 'Home'));
    } 
    else if (path.toLowerCase() === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-Header': 'Hello World'
        });
        res.end(html.replace('{{%CONTENT%}}', 'Contact'));  // Fixed spelling of 'Contact'
    } 
    else if (path.toLowerCase() === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-Header': 'Hello World'
        });
        res.end(html.replace('{{%CONTENT%}}', 'About'));
    }
    else if(path.toLowerCase() === '/products'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'my-Header': 'Hello World'
        });
        res.end(JSON.stringify(products));
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-Header': 'Hello World'
        });
        res.end(html.replace('{{%CONTENT%}}', 'Not Found'));
    }
});

// Step 2: Start the server
server.listen(8000, 'localhost', () => {
    console.log('Server has started on port 8000');
});