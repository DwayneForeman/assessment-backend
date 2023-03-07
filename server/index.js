const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getFortune,
  getFeelings,
  createUser,
  updateUser,
  deleteUser,
} = require("./controller");

app.get("/api/fortune", getFortune);
app.get("/api/feelings", getFeelings);
app.post("/api/users", createUser);
app.put("/api/users/:firstName/:lastName", updateUser);
app.delete("/api/users/:firstName/:lastName", deleteUser);

app.listen(4000, () => console.log("Server running on 4000"));
