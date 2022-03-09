const express = require("express");
const path = require("path");
const authRouter = require("./routes/auth.route");
const cookieSession = require("cookie-session");
const passport = require("passport");
const { read } = require("fs");
const User = require("./models/User");

require("dotenv").config();
require("./config/passport");

const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["clave"], //clave para encriptar
  })
);
//inicializar passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/html/home.html"));
});

app.get("/profile", (req, res) => {
  if (req.user) {
    res.sendFile(path.join(__dirname, "./public/html/profile.html"));
  } else {
    res.redirect("/auth/login");
  }
});

app.get("/user", async (req, res) => {
  if (!req.user) {
    res.sendStatus(401);
  }
  res.json(await User.find(req.user.id));
});

module.exports = app;
