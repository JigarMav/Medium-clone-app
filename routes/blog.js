const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const User = require('../models/user')


router.get('/',async (req,res)=>{
    try {
        const posts = await Post.find();
        res.render('blog/index',{
            posts:posts
        });
    } catch (error) {
        console.log(error);
        
    }
});
router.get('/details',(req,res)=>{
    res.render('blog/details.ejs');
});
router.get('/about',(req,res)=>{
    res.render('blog/about.ejs');
});


module.exports = router;