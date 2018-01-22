let http = require("http");
let port = 9000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>Hello World!</h1></body></html>");
    res.end();
}).listen(port);
