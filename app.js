const express=require('express')
const app=express();
const POST= require('./api/models/posts')
const postdata= new POST()




app.get('/',(req,res)=>{

    res.status(200).send(postdata.get())
})

app.get("/api/posts/:post_id" ,(req,res)=>{
    const postId=req.params.post_id;
    const foundPost= postdata.getIndividualBlog(postId)
    if(foundPost){
        res.status(200).send(foundPost)
    }
    else{
        res.status(404).send('cant found')
    }

})


app.listen((4000),()=>console.log('listening on http://localhost:4000'))