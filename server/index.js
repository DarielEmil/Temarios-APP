const express = require("express");
const dotenv = require("dotenv");

//ROUTES
const signupRouter = require("./router/signup");
//CONFIG
const app = express();
dotenv.config();

app.use()
app.listen(process.env.PORT, () => {});

module.exports = app;
