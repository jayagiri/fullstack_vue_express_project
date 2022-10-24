const express = require('express');
const mangodb=require ('mangodb');
const router = express.Router();


//Get Post ....
router.get('/', (req,res)=>{
    const posts=await loadPostsCollection();
    res.send(await posts.find({}).toArray());
    
});

//Add post ...

router.post ('/',async (req,res)=>{
    const posts=await loadPostsCollection();
    await posts.insertOne({
        text:req.body.text,
        createdAt:new Date ()
    });
    res.status(201).send();
});


//Delete Post ....

router.delete('/:id',async(req,res)=>{
    const posts=await loadPostsCollection();
    await posts.deleteOne({_id: new mangodb.ObjectID(req.params.id) });
    res.status(200).send();
})


async function loadostsCollection (){
    const clinet = await mongodb.MongoClient.connect 
    ('.........................',{
        useNewUrlParser:true
    });
    return clinet.db('vue_express').collection('posts');
}

module.exports=router;


