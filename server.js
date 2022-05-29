const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connection = require("./db");
const app = express();
const studentRoutes = require("./routes/studentRoutes");

express.urlencoded({
  extended: true,
});

//databse connection
connection();

app.use(express.json());

app.use("/api/student", studentRoutes);

app.listen(8080, () => {
  console.log(`server started`);
});
