// middleware/upload.js
const multer = require("multer");
const { storage } = require("../services/cloudinary"); // 👈 Correct path

const upload = multer({ storage });

module.exports = { upload };
