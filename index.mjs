import express from "express";
import { getPosts } from "./controllers/getPosts.mjs";
import { getPostById } from "./controllers/getPostById.mjs";
import connection from "./connection.js";
import { createPost } from "./controllers/createPost.mjs";



//app initialized
export const app = express();


//middleware
app.use(express.json());

//connection started
connection;


//both get routes for posts
app.get("/posts", getPosts);
app.get("/posts/:id", getPostById);
//post routes for creating new posts
app.post("/posts",createPost);



app.listen("8000", () => console.log("server running...."));


