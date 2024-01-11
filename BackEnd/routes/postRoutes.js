const express = require("express");
const postRouter = express.Router();
const { PostModel } = require("../model/post.model");

postRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

postRouter.post("/add", async (req, res) => {
  try {
    const { user, message } = req.body;
    const post = new PostModel({ user, message });
    await post.save();
    res.status(200).json({ msg: "New Post Added" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

postRouter.post("/add/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { comment } = req.body;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (!comment) {
      return res.status(400).json({ error: "Comments cannot be undefined" });
    }

    post.comment.push({ comment });
    await post.save();

    res.status(200).json({ msg: "New Comment Added to the Post" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = { postRouter };
