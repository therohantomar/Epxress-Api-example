import { Posts } from "../models/Posts.mjs";

// you know this id is grabbed from posts/:id so its in a string format remember it

export const getPostById =async(req, res) => {
  try {
    const id = req.params.id;

    // Find the post by ID in the database
    const post = await Posts.findOne({id});

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Return the post as a response
    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
