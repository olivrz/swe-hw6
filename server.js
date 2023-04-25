const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Check if the HTTP method is POST
    if (req.method === 'POST') {
        let body = '';
        // Read the content of the request message body
        req.on('data', chunk => {
            body += chunk.toString();
        });
        // Send the content of the request message body in the response message
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(body);
        });
    } else {
        // Respond with an error message for unsupported HTTP methods
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method not allowed');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});