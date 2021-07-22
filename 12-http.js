const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("Here is some info");
  }
  res.end(`
    <h1>Ooops!</h1>
    <p>We couldn't find the site you were looking for</p>
    <a href="#">Go back to home</a>
    `);
});

server.listen(5000);
