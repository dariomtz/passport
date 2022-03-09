const router = require("express").Router();
const path = require("path");
const passport = require("passport");
// path: auth/

// GET /login
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "html", "login.html"));
});

// GET /google/login
router.get(
  "/google/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// GET /google/callback
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  console.log(req.query.code);
  res.redirect("/profile");
});

// GET /verifyLogin
router.get("/verifyLogin", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.send("Logged in");
  } else {
    res.sendStatus(401);
  }
});

// GET /logout
router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

module.exports = router;
