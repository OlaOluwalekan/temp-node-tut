const http = require("http");

// req - represents the incoming request. A client is requesting from the web browser
// res - what we are sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>welcome to our home page</h1>`);
  }
  if (req.url === "/about") {
    res.end("<h1>This is Our About Page</h1>");
  }
  res.end(`<h1>Oops</h1> <p>Can't find the page requested</p>`);
});

server.listen(5000);
