const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Shubham", lastName: "Bhatt" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully send to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deletes successfully");
});

app.patch("/user", (req, res) => {
  res.send("data patched successfully");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on the port 3000...");
});
