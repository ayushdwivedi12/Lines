const express = require("express");
const {
  handleAddBlog,
  handleFileUpload,
  handleViewBlog,
  handleComments,
  handleGetAllBlogs,
} = require("../controllers/blog");
const { upload } = require("../middlewares/upload");
const Blog = require("../models/blog");

const router = express.Router();

router.get("/", handleGetAllBlogs);

router.get("/add-blog", handleAddBlog);

router.post("/", upload.single("coverImage"), handleFileUpload);

router.post("/comment/:blogId", handleComments);

router.get("/search", async (req, res) => {
  const { title } = req.query;

  try {
    const blogs = await Blog.find({
      title: { $regex: new RegExp(title, "i") },
    });

    res.render("home", {
      blogs,
      user: req.user,
    });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

router.get("/:id", handleViewBlog);

module.exports = router;
