const http = require("http");
const port = 9000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>Hello World</h1></body></html>');

    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<html><body><h1>Hello World!</h1></body></html>");
    // res.end();
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/')
});
