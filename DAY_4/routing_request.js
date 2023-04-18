const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Input Form Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form action='/message'  method='POST'>");
    res.write("<input type='text' name='message'/>");
    res.write("<button type='submit' >Send</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

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
