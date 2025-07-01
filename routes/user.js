const express = require("express");
const {
  handleUserSignup,
  handleSignin,
  handleSignout,
} = require("../controllers/user");

const router = express.Router();

//show Signup page
router.get("/signup", (req, res) => {
  return res.render("signup");
});

// Show Signin page
router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/logout", handleSignout);

router.post("/signup", handleUserSignup);
router.post("/signin", handleSignin);

module.exports = router;
