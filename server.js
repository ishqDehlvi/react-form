const express = require("express");
var cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));
// app.use(express.static(path.join(__dirname, "./src/app-assets")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function () {
  console.log("server listening on: http://localhost:" + PORT);
});
