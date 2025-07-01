require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const cookieParser = require("cookie-parser");
const Blog = require("./models/blog");
const { connectToMongoDB } = require("./connection");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => res.redirect("/blog"));

app.use("/user", userRoute);
app.use("/blog", blogRoute);

// MongoDB connection
connectToMongoDB(process.env.MONGO_URL).then(() =>
  console.log("MongoDB Connected!")
);

app.listen(PORT, () => {
  console.log(`server started at port:${PORT}`);
});
