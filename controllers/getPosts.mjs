import { postsData } from "../constants.mjs";
import { Posts } from "../models/Posts.mjs";

// so you can say the controller logic the (req,res,next)=>

export const getPosts = async (_, res) => {
  try {
    const PostData = await Posts.find();
    if (!postsData) {
      res.send({ error: "some issuses trigged in db!" });
    }
    res.send({ status: 200,statusText:"successfully fetched", posts: PostData });
  } catch (err) {
    res.send({ error: "server Error found!" });
  }
};
