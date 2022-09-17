const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write(`<h1>Home Page</h1> <a href="/about">About Us</a>`);
      res.end();
    } else if (req.url === "/about") {
      res.write(`<h1>About</h1> <a href="/">Home</a>`);
      res.end();
    } else {
      res.write(`<h1>Oops!</h1> <p>Page not found</p> <a href="/">Go Home</a>`);
      res.end();
    }
  })
  .listen(5000);
