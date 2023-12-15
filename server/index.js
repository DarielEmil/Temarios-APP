const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./context/connection");
const dotenv = require("dotenv");
const authRoutes = require("./router/login");
const registerRoutes = require("./router/register");
const cors = require("cors");
const { verificarToken } = require("./util/authHelper");

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors())


app.get('/', verificarToken, (req, res) => {
   // Esta es tu ruta principal protegida
   res.json({ message: '¡Bienvenido a la ruta principal protegida!' });
});

app.use("/api/", authRoutes);
app.use("/api/", registerRoutes);

app.listen(process.env.PORT, () => {
   console.log("server started on port 5000");
});

module.exports = app;
