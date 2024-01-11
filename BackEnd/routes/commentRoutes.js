const express = require("express");
const commentRouter = express.Router();
const { CommentModel } = require("../model/comment");
const { PostModel } = require("../model/post.model");

commentRouter.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      res.status(400).json({ error: "Post not Found" });
    }
    res.status(200).json(post.comments);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

commentRouter.post("/post/:id", async (req, res) => {
  const comment = new CommentModel({
    user: req.body.user,
    comments: req.body.comments,
    post: req.params.id,
  });
  try {
    const savedComment = await comment.save();
    const post = await PostModel.findById(req.params.id);
    post.comments.push(savedComment);
    await post.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = { commentRouter };
