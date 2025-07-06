const Blog = require("../models/blog");
const Comment = require("../models/comment");

async function handleGetAllBlogs(req, res) {
  const allBlogs = await Blog.find().sort({ createdAt: -1 }).limit(8);
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
}

async function handleAddBlog(req, res) {
  return res.render("addBlog", {
    user: req.user,
  });
}

async function handleFileUpload(req, res) {
  const { title, body } = req.body;

  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageURL: req.file.path,
  });

  return res.redirect(`/blog/${blog._id}`);
}

async function handleSearchBlog(req, res) {
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
}

async function handleViewBlog(req, res) {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );

  return res.render("blog", {
    user: req.user,
    blog,
    comments,
  });
}

async function handleDeleteBlog(req, res) {
  try {
    const blogId = req.params.id;
    await Blog.findByIdAndDelete(blogId);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).send("Something went wrong");
  }
}

async function handleComments(req, res) {
  const comment = await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
}

async function handleExploreBlogs(req, res) {
  const { tag } = req.query;

  let filter = {};
  if (tag && tag !== "all") {
    filter.tags = tag; // assumes `tags: [String]` in Blog schema
  }

  try {
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.render("bloglist", {
      blogs,
      user: req.user,
      activeTag: tag || "all",
    });
  } catch (err) {
    console.error("Error loading explore page:", err);
    res.status(500).send("Failed to load blogs.");
  }
}

module.exports = {
  handleAddBlog,
  handleFileUpload,
  handleViewBlog,
  handleComments,
  handleGetAllBlogs,
  handleSearchBlog,
  handleDeleteBlog,
  handleExploreBlogs,
};
