const http = require('http');
const fs = require('fs');

// Read the HTML file as a string, not a buffer
const html = fs.readFileSync('./template/index.html', 'utf-8'); // Specify 'utf-8' to get a string

// Step 1: Create a server
const server = http.createServer((req, res) => {
    let path = req.url;

    if (path === '/' || path.toLowerCase() === '/home') {
        res.end(html.replace('{{%CONTENT%}}', 'Home'));
    } 
    else if (path.toLowerCase() === '/contact') {
        res.end(html.replace('{{%CONTENT%}}', 'Contact'));  // Fixed spelling of 'Contact'
    } 
    else if (path.toLowerCase() === '/about') {
        res.end(html.replace('{{%CONTENT%}}', 'About'));
    } 
    else {
        res.end(html.replace('{{%CONTENT%}}', 'Not Found'));
    }
});

// Step 2: Start the server
server.listen(8000, 'localhost', () => {
    console.log('Server has started on port 8000');
});