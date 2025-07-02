const  Blog = require("../models/blog");
const { upload } = require("../middlewares/upload");
const mongoose = require("mongoose");
const Comment = require("../models/comment");

async function handleGetAllBlogs(req,res){
   const allBlogs = await Blog.find({});
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
    coverImageURL: `req.file.path`,
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
  const comments = await Comment.find({blogId:req.params.id}).populate("createdBy");
  return res.render("blog", {
    user: req.user,
    blog,
    comments,
  });
}

async function handleComments(req, res) {
  const comment = await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
}


module.exports = {
  handleAddBlog,
  handleFileUpload,
  handleViewBlog,
  handleComments,
  handleGetAllBlogs,
};
