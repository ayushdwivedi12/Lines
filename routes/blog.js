const express = require("express");
const {
  handleAddBlog,
  handleFileUpload,
  handleViewBlog,
  handleComments,
  handleGetAllBlogs,
} = require("../controllers/blog");
const { upload } = require("../middlewares/upload");

const router = express.Router();

router.get("/", handleGetAllBlogs);

router.get("/add-blog", handleAddBlog);

router.post("/", upload.single("CoverImage"), handleFileUpload);

router.get("/:id", handleViewBlog);

router.post("/comment/:blogId", handleComments);

module.exports = router;
