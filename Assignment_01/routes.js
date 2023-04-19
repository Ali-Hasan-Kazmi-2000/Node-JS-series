function routesHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title></title></head><body><h1>Hello, EveryOne!</h1><br><form action='/create-user' method='POST'><label>Username: </label><input type='text' name='message'/> <button type='submit'>Send</button></form></body></html>"
    );
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title></title></head><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>"
    );
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("close", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message.replaceAll("+", " "));
      res.statusCode = 302;
      res.setHeader("location", "/");
      return res.end();
    });
  }

  res.end();
}

module.exports = routesHandler;
