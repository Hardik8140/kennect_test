const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
});

const postSchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    message: { type: String, required: true },
    comment: [commentSchema],
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = { PostModel };
