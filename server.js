const express = require("express");

const app = express();
express.urlencoded({
  extended: true,
});

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    messsage: "hello",
  });
});
app.listen(8080, () => {
  console.log(`server started`);
});
