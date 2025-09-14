const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("This is error");
  } catch (err) {
    res.status(404).send("something went wrong");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(404).send("error occured");
  }
});

app.listen(7777, () => {
  console.log("server is running on port 7777");
});
