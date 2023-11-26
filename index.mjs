import express from "express";
import { getPosts } from "./controllers/getPosts.mjs";
import { getPostById } from "./controllers/getPostById.mjs";
import connection  from "./connection.js";
//app initialized
const app = express();
//middleware
app.use(express.json())
//connection started
connection
//both get routes for posts
app.get("/posts", getPosts);
app.get("/posts/:id", getPostById);

app.listen("8000", () => console.log("server running...."));
