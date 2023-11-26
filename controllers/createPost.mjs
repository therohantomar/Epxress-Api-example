import { Posts } from "../models/Posts.mjs";


export const createPost=async (req,res)=>{

    if(!req.body){
     res.send({error:"request body is missing!"})
    }
    else if(!req.body.id){

     res.send({error:"request id is missing!"})
    }
    else{
     try{
         const post=new Posts(req.body)
         const response=await post.save()
         res.status(201).send({status:201,statusText:"post successfully Created!"})
     }
     catch(err){
         res.status(404).send({erro:err})
     }
    }
}