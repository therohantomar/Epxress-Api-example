import mongoose from "mongoose";
// the way schemas are designed
const postSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
});

export const Posts = mongoose.model("Posts", postSchema);
//remember this model in collection is in posts not Posts
