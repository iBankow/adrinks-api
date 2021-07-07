const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(routes);

app.listen(5000, () => {
  console.log(process.env.ACCESS_TOKEN);
  console.log("Server is running! Port: 5000");
});
