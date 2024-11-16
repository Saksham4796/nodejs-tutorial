const http = require('http');
const fs = require('fs');

// Read the HTML file as a string, not a buffer
const html = fs.readFileSync('./template/index.html', 'utf-8'); // Specify 'utf-8' to get a string
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8')); 

const productlistHTML = fs.readFileSync('./template/products-list.html', 'utf-8');

let productlistArray = products.products.map((product) => {
    
    let output = productlistHTML.replace('{{%ID%}}', product.id);
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%DESCRIPTION%}}', product.description);
    output = output.replace('{{%CATEGORY%}}', product.category);

    // Log the output for debugging
    console.log(output);

    return output;
});

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
            'Content-Type': 'text/html',
            'my-Header': 'Hello World'
        });
        // Insert the product list into the HTML template and send it
        const productsHTML = html.replace('{{%CONTENT%}}', productlistArray.join(''));
        res.end(productsHTML);
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