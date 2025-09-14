const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("all data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(3000, () => {
  console.log("server is running on port 7777");
});
