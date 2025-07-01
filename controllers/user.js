const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { fullName, email, password } = req.body;
  try {
    await User.create({
      fullName,
      email,
      password,
    });
    return res.redirect("/");
  } catch (err) {
    let errorMsg = "Signup failed";
    if (err.code === 11000) errorMsg = "Email already exists";
    return res.render("signup", { error: errorMsg });
  }
}

async function handleSignin(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
}

async function handleSignout(req, res) {
  res.clearCookie("token").redirect("/");
}

module.exports = { handleUserSignup, handleSignin, handleSignout };
