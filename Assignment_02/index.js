const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/users", (req, res, next) => {
  res.send(
    "<html><head><title></title></head><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>"
  );
});

app.use("/", (req, res, next) => {
  res.send(
    "<html><head><title></title></head><body><h1>Hello, EveryOne!</h1><br><form action='/' method='POST'><label>Username: </label><input type='text' name='message'/> <button type='submit'>Send</button></form></body></html>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
