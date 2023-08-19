const express = require('express');
const {getPosts ,createPost ,updatePost ,deletePost} = require("../controllers/posts.js")
const  router = express.Router();
router.get("/" ,getPosts);
router.post("/" ,createPost);
router.put("/:_id" ,updatePost);
router.patch("/:title" ,updatePost);
router.delete("/" ,deletePost);
module.exports = router