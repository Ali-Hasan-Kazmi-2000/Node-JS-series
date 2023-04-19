const http = require("http");
const routes = require("./routes");
const PORT = process.env.PORT || 3500;

const server = http.createServer(routes);

server.listen(PORT, () => {
  console.log("Server is listening at PORT ", PORT);
});
