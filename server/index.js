const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());


app.get("/", (req, res) => {
   res.json({ working: "THE APP IS WORKING" });
});

app.listen(5000, () => {
   console.log("server started on port 5000");
});

module.exports = app;
