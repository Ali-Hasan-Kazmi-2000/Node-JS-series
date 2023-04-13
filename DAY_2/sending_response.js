const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");

  res.write("<head>");
  res.write("<title>Node JS</title>");
  res.write("</head>");

  res.write("<body>");
  res.write("<h1>Node Js Development</h1>");
  res.write("</body>");

  res.write("</html>");
  res.end();
});

server.listen(PORT);
