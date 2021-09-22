const express = require("express");
const app = express();
// console.dir(app);

const port = 3000;

// app.use((req, res) => {
//   console.log("We got a new request");
//   //   console.dir(req);
//   //   res.send("Hello we got your request. This is a response.");
//   //   res.send({ color: "red" });
//   res.send("<h1>This is my webpage</h1>");
// });

// Routing
app.get("/", (req, res) => {
  res.send("This is the home page.");
});

// EXPRESS PATH PARAMETERS
app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  const { subreddit } = req.params;
  //   res.send("This is a subreddit!");
  res.send(`Browsing the ${subreddit} subreddit!`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  //   res.send("This is a subreddit!");
  res.send(`Viewing post ID: ${postId} on the ${subreddit} subreddit!`);
});

// /cats => meow
app.get("/cats", (req, res) => {
  console.log("Cats request");
  res.send("Meow");
});

// /dogs => woof
app.get("/dogs", (req, res) => {
  console.log("Dogs request");
  res.send("Woof");
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

// Post requests
app.post("/cats", (req, res) => {
  res.send("Post request to /cats");
});

// Query Strings
app.get("/search", (req, res) => {
  //   console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("NOTHIG FOUND IF NOTHING SEARCHED");
  }
  res.send(`<h1>Searched for ${q}</h1>`);
  res.send("Hello");
});

// Generic Response
app.get("*", (req, res) => {
  res.send("I don't know that path!");
});
