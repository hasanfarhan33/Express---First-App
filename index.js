const express = require("express");
const app = express();
// console.dir(app);

const port = 3000;

app.use((req, res) => {
  console.log("We got a new request");
  console.dir(req);
  //   res.send("Hello we got your request. This is a response.");
  //   res.send({ color: "red" });
  res.send("<h1>This is my webpage</h1>");
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

// Request and Response
