const { validateToken } = require("../services/authentication");
const User  = require("../models/user");

function checkForAuthenticationCookie(cookieName) {
  return async (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      req.user = null;
      res.locals.user = null;
      return next();
    }
    try {
      const userPayload = validateToken(tokenCookieValue);
      const user = await User.findById(userPayload._id);
      req.user = user;
      res.locals.user = user;
    } catch (error) {
      req.user = null;
      res.locals.user = null;
      console.log(error);
      
    }
    return next();
  };
}

module.exports = { checkForAuthenticationCookie };
