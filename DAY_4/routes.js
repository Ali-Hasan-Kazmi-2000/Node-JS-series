const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

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

  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("close", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message.replaceAll("+", " "), (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
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
};

module.exports = requestHandler;
