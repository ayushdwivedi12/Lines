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

router.get("/search", handleSearchBlog);


router.get("/:id", handleViewBlog);

module.exports = router;
