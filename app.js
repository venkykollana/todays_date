const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let dateMsg = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(dateMsg);
});

app.listen(3000);

module.exports = app;
