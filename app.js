require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./app/config/swagger");

const app = express();
app.use(cors());
app.use(express.json());
//database
const database = require("./app/config/db");
database();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

//routes

app.get("/", (req, res) => {
  res.send("Student Management API is running...");
});

app.use("/api/students", require("./app/routes/studentRoute"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Runnig at PORT ${PORT}`);
});
