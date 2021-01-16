const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

// Body parser
app.use(express.json());

// load config
dotenv.config({ path: "./config.env" });

// Connect to DB
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("connected to db")
);

// import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// Router Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
