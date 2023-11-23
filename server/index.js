const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./context/connection");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.json({ working: "THE APP IS WORKING" });
});

app.listen(process.env.PORT, () => {
   console.log("server started on port 5000");
});

module.exports = app;
