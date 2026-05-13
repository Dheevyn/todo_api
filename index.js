const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todoRoutes.js");

const live_url =
  "mongodb+srv://dev_dheevyn:dev_dhee1960@cluster0.vpbffs0.mongodb.net/UserDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/UserDB";

mongoose
  .connect(live_url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

//create express app
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

//Use routes
app.use("/todos", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
