const express = require("express");
const multer  = require('multer')
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
mongoose.connect( process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(() => {
    console.log("success");
  }).catch((err) => console.log("not connect" + err));

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);


app.listen(4000, () => console.log("server is running port"));